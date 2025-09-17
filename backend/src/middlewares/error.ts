import fp from "fastify-plugin";
import * as db from "../init/db";
import { v4 as uuidv4 } from "uuid";
import Logger from "../utils/logger";
import MonkeyError, { getErrorMessage } from "../utils/error";
//import { incrementBadAuth } from "./rate-limit";

import {
  recordClientErrorByVersion,
  recordServerErrorByVersion,
} from "../utils/prometheus";
import { isDevEnvironment } from "../utils/misc";
import { version } from "../version";
import { addLog } from "../dal/logs";
import {
  MonkeyClientErrorType,
  MonkeyServerErrorType,
} from "@monkeytype/contracts/util/api";
import { TsRestRequestWithContext } from "../api/types";

type DBError = {
  _id: string; //we are using uuid here, not objectIds
  timestamp: number;
  status: number;
  uid: string;
  message: string;
  stack?: string;
  endpoint: string;
  method: string;
  url: string;
};

type ErrorData = {
  errorId?: string;
  uid: string;
};

export async function translateError(
  // oxlint-disable-next-line no-explicit-any
  error: Error,
  req: TsRestRequestWithContext
): Promise<{
  status: number;
  body: MonkeyClientErrorType | MonkeyServerErrorType;
}> {
  let errorId: string | undefined;
  let uid: string | undefined;
  let status = 500;
  let message = "Unknown error";

  if (error instanceof MonkeyError) {
    errorId = error.errorId;
    uid = error.uid;
    status = error.status;
    message = error.message;
  } else {
    errorId = uuidv4();
    uid = req.ctx?.decodedToken?.uid;
  }

  if (/ECONNREFUSED.*27017/i.test(error.message)) {
    message = "Could not connect to the database. It may be down.";
  } else if (error instanceof URIError || error instanceof SyntaxError) {
    status = 400;
    message = "Unprocessable request";
  } else {
    message = `Oops! Our monkeys dropped their bananas. Please try again later. - ${errorId}`;
  }

  //TODO  await incrementBadAuth

  if (status >= 400 && status < 500) {
    recordClientErrorByVersion(req.headers["x-client-version"] as string);
  }

  if (!isDevEnvironment() && status >= 500 && status !== 503) {
    recordServerErrorByVersion(version);

    try {
      await addLog(
        "system_error",
        `${status} ${errorId} ${error.message} ${error.stack}`,
        uid
      );
      await db.collection<DBError>("errors").insertOne({
        _id: errorId,
        timestamp: Date.now(),
        status: status,
        uid: uid ?? "",
        message: error.message,
        stack: error.stack,
        endpoint: req.originalUrl,
        method: req.method,
        url: req.url,
      });
    } catch (e) {
      Logger.error("Logging to db failed.");
      Logger.error(getErrorMessage(e) ?? "Unknown error");
      console.error(e);
    }
  } else {
    Logger.error(`Error: ${error.message} Stack: ${error.stack}`);
  }

  if (status < 500) {
    errorId = undefined;
  }

  return { status, body: { message, errorId, uid } };
}

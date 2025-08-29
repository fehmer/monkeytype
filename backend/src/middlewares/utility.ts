import _ from "lodash";
import { recordClientVersion as prometheusRecordClientVersion } from "../utils/prometheus";
import { isDevEnvironment } from "../utils/misc";
import MonkeyError from "../utils/error";
import { EndpointMetadata } from "@monkeytype/contracts/util/api";
import { FastifyRequest } from "fastify";
import {
  onRequestMetaHookHandler,
  preValidationAsyncHookHandler,
} from "fastify/types/hooks";

/**
 * record the client version from the `x-client-version`  or ` client-version` header to prometheus
 */
export function recordClientVersion(): onRequestMetaHookHandler {
  return async (req) => {
    const clientVersion =
      (req.headers["x-client-version"] as string) ||
      req.headers["client-version"];
    prometheusRecordClientVersion(clientVersion?.toString() ?? "unknown");
  };
}

/** Endpoint is only available in dev environment, else return 503. */
export function onlyAvailableOnDev(): onRequestMetaHookHandler {
  return async () => {
    if (!isDevEnvironment()) {
      throw new MonkeyError(
        503,
        "Development endpoints are only available in DEV mode."
      );
    }
  };
}

export function getMetadata(req: FastifyRequest): EndpointMetadata {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (req.routeOptions?.config?.["tsRestRoute"]?.["metadata"] ??
    {}) as EndpointMetadata;
}

export function isTsRestRequest(req: FastifyRequest): boolean {
  return req.routeOptions?.config?.["tsRestRoute"] !== undefined;
}

export function emptyBodyMiddleware(): preValidationAsyncHookHandler {
  return async (req) => {
    if (
      (req.method === "POST" ||
        req.method === "PATCH" ||
        req.method === "DELETE") &&
      req.body === undefined &&
      isTsRestRequest(req)
    ) {
      req.body = {};
    }
  };
}

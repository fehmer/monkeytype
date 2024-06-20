import {
  ConfigWrapped,
  ConfigUpdateBody,
} from "shared/contract/configs.contract";
import * as ConfigDAL from "../../dal/config";
import { MonkeyResponse2 } from "../../utils/monkey-response";
import MonkeyError from "../../utils/error";
import { replaceObjectId } from "../../utils/misc";

export async function getConfig(
  req: MonkeyTypes.Request2
): Promise<MonkeyResponse2<ConfigWrapped>> {
  const { uid } = req.ctx.decodedToken;

  const data = await ConfigDAL.getConfig(uid);
  if (data === null) throw new MonkeyError(400, "No config found.");
  return new MonkeyResponse2("Configuration retrieved", replaceObjectId(data));
}

export async function saveConfig(
  req: MonkeyTypes.Request2<undefined, ConfigUpdateBody>
): Promise<MonkeyResponse2<undefined>> {
  const { config } = req.body;
  const { uid } = req.ctx.decodedToken;

  await ConfigDAL.saveConfig(uid, config);

  return new MonkeyResponse2("Config updated");
}

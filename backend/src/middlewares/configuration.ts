import {
  ConfigurationPath,
  RequireConfiguration,
} from "@monkeytype/contracts/require-configuration/index";
import { EndpointMetadata } from "@monkeytype/contracts/util/api";
import { Configuration } from "@monkeytype/schemas/configuration";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { FastifyRequestWithContext } from "../api/types";
import MonkeyError from "../utils/error";
import { getMetadata } from "./utility";

async function requiredConfigurationMiddleware(
  fastify: FastifyInstance
): Promise<void> {
  fastify.addHook(
    "preHandler",
    async (req: FastifyRequestWithContext, _res) => {
      const requiredConfigurations = getRequireConfigurations(getMetadata(req));

      if (requiredConfigurations === undefined) {
        return;
      }

      for (const requireConfiguration of requiredConfigurations) {
        const value = getValue(
          req.ctx.configuration,
          requireConfiguration.path
        );
        if (!value) {
          throw new MonkeyError(
            503,
            requireConfiguration.invalidMessage ??
              "This endpoint is currently unavailable."
          );
        }
      }

      return;
    }
  );
}

function getValue(
  configuration: Configuration,
  path: ConfigurationPath
): boolean {
  const keys = (path as string).split(".");
  let result: unknown = configuration;

  for (const key of keys) {
    if (result === undefined || result === null) {
      throw new MonkeyError(500, `Invalid configuration path: "${path}"`);
    }
    result = result[key];
  }

  if (result === undefined || result === null)
    throw new MonkeyError(
      500,
      `Required configuration doesnt exist: "${path}"`
    );
  if (typeof result !== "boolean")
    throw new MonkeyError(
      500,
      `Required configuration is not a boolean: "${path}"`
    );
  return result;
}

function getRequireConfigurations(
  metadata: EndpointMetadata | undefined
): RequireConfiguration[] | undefined {
  if (metadata === undefined || metadata.requireConfiguration === undefined)
    return undefined;

  if (Array.isArray(metadata.requireConfiguration))
    return metadata.requireConfiguration;
  return [metadata.requireConfiguration];
}

export default fp(requiredConfigurationMiddleware);

import fp from "fastify-plugin";
import { getCachedConfiguration } from "../init/configuration";
import { DecodedToken } from "./auth";
import { Configuration } from "@monkeytype/schemas/configuration";
import { FastifyInstance } from "fastify";
import { getMetadata } from "./utility";

export type Context = {
  configuration: Configuration;
  decodedToken: DecodedToken;
};

/**
 * Add the context to the request

 */

async function contextMiddleware(fastify: FastifyInstance): Promise<void> {
  fastify.decorateRequest("ctx", null);

  fastify.addHook("onRequest", async (req, _res) => {
    const configuration = await getCachedConfiguration(true);

    req["ctx"] = {
      configuration,
      decodedToken: {
        type: "None",
        uid: "",
        email: "",
      },
    };
  });
}
export default fp(contextMiddleware);

import fp from "fastify-plugin";
import {
  COMPATIBILITY_CHECK,
  COMPATIBILITY_CHECK_HEADER,
} from "@monkeytype/contracts";

import { FastifyInstance } from "fastify";

/**
 * Add the COMPATIBILITY_CHECK_HEADER to each response
 */
async function compatibilityCheckMiddleware(
  app: FastifyInstance
): Promise<void> {
  app.addHook("onSend", async (_req, reply) => {
    reply.header(COMPATIBILITY_CHECK_HEADER, COMPATIBILITY_CHECK);
  });
}

export default fp(compatibilityCheckMiddleware);

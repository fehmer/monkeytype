import {
  COMPATIBILITY_CHECK,
  COMPATIBILITY_CHECK_HEADER,
} from "@monkeytype/contracts";

import { FastifyInstance } from "fastify";

/**
 * Add the COMPATIBILITY_CHECK_HEADER to each response
 */
export function compatibilityCheckMiddleware(app: FastifyInstance): void {
  app.addHook("onSend", async (_req, reply) => {
    reply.header(COMPATIBILITY_CHECK_HEADER, COMPATIBILITY_CHECK);
  });
}

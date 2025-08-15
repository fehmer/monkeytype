import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { FastifyRequestWithContext } from "../api/types";

async function maintenanceMiddleware(fastify: FastifyInstance): Promise<void> {
  fastify.addHook(
    "onRequest",
    async (req: FastifyRequestWithContext, reply) => {
      if (req.url.startsWith("/configuration")) return;

      const inMaintenance =
        process.env["MAINTENANCE"] === "true" ||
        req.ctx.configuration.maintenance;

      if (inMaintenance) {
        reply.code(503).send({ message: "Server is down for maintenance" });
        return;
      }
    }
  );
}

export default fp(maintenanceMiddleware);

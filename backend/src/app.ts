import helmet from "@fastify/helmet";
import Fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import apiRoutes from "./api/routes";
import compatibilityCheckMiddleware from "./middlewares/compatibilityCheck";
import contextMiddleware from "./middlewares/context";
import etagMiddleware from "./middlewares/etag";
import errorHandlingMiddleware from "./middlewares/error";

function buildApp(): FastifyInstance {
  const app = Fastify({
    trustProxy: true,
    ignoreTrailingSlash: true,
  });

  //cors //TODO verify
  app.register(helmet, { global: true });
  app.register(fastifyCors, {});

  app.register(compatibilityCheckMiddleware);
  app.register(etagMiddleware);
  app.register(errorHandlingMiddleware);
  app.register(contextMiddleware);

  app.register(apiRoutes);

  return app;
}

export default buildApp();

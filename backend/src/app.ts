import helmet from "@fastify/helmet";
import Fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import apiRoutes, { addApiRoutes } from "./api/routes";
import compatibilityCheckMiddleware from "./middlewares/compatibilityCheck";
import contextMiddleware from "./middlewares/context";
import etagMiddleware from "./middlewares/etag";
import errorHandlingMiddleware from "./middlewares/error";
import { emptyBodyMiddleware } from "./middlewares/utility";
import maintenanceMiddleware from "./middlewares/maintenance";

function buildApp(): FastifyInstance {
  const app = Fastify({
    trustProxy: true,
    ignoreTrailingSlash: true,
    //logger: true,
  });

  //cors //TODO verify
  app.register(helmet, { global: true });
  app.register(fastifyCors, {});

  app.setErrorHandler(async (error, req, res) => {
    console.log(error);
  });

  app.register(compatibilityCheckMiddleware);
  app.register(etagMiddleware);

  app.register(contextMiddleware);

  //app.register(apiRoutes);
  addApiRoutes(app);

  //
  app.addHook("preValidation", emptyBodyMiddleware());

  return app;
}

export default buildApp();

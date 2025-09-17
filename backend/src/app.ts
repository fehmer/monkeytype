import helmet from "@fastify/helmet";
import Fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import { addApiRoutes } from "./api/routes";
import compatibilityCheckMiddleware from "./middlewares/compatibilityCheck";
import contextMiddleware from "./middlewares/context";
import etagMiddleware from "./middlewares/etag";

import { emptyBodyMiddleware } from "./middlewares/utility";

function buildApp(): FastifyInstance {
  const app = Fastify({
    trustProxy: true,
    ignoreTrailingSlash: true,
    //logger: true,
  });

  //cors //TODO verify
  app.register(helmet, { global: true });
  app.register(fastifyCors, {});

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

import helmet from "@fastify/helmet";
import { addApiRoutes } from "./api/routes";
import Fastify, { FastifyInstance } from "fastify";
import contextMiddleware from "./middlewares/context";
import errorHandlingMiddleware from "./middlewares/error";
import {
  badAuthRateLimiterHandler,
  rootRateLimiter,
} from "./middlewares/rate-limit";
import { compatibilityCheckMiddleware } from "./middlewares/compatibilityCheck";
import { etagMiddleware } from "./middlewares/etag";

function buildApp(): FastifyInstance {
  const app = Fastify({
    trustProxy: true,
  });

  //cors
  app.register(helmet);

  compatibilityCheckMiddleware(app);
  etagMiddleware(app);
  errorHandlingMiddleware(app);

  /*
  app.use(urlencoded({ extended: true }));
  app.use(json());
  
  done app.use(cors({ exposedHeaders: [COMPATIBILITY_CHECK_HEADER] }));
  done, need verify  app.use(helmet());

  done app.set("trust proxy", 1);

  done app.use(compatibilityCheckMiddleware);
  done app.use(contextMiddleware);

  app.use(badAuthRateLimiterHandler);
  app.use(rootRateLimiter);
  not needed app.use(v4RequestBody);

  app.set("etag", etagFn);

  

  done app.use(errorHandlingMiddleware);

*/
  addApiRoutes(app);

  app.register(contextMiddleware);

  return app;
}

export default buildApp();

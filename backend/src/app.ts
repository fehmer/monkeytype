import cors from "cors";
import helmet from "helmet";
import { addApiRoutes } from "./api/routes";
import Fastify, { FastifyInstance } from "fastify";
import contextMiddleware from "./middlewares/context";
import errorHandlingMiddleware from "./middlewares/error";
import {
  badAuthRateLimiterHandler,
  rootRateLimiter,
} from "./middlewares/rate-limit";
import { compatibilityCheckMiddleware } from "./middlewares/compatibilityCheck";
import { COMPATIBILITY_CHECK_HEADER } from "@monkeytype/contracts";
import { createETagGenerator } from "./utils/etag";
import { v4RequestBody } from "./middlewares/utility";

const etagFn = createETagGenerator({ weak: true });

function buildApp(): FastifyInstance {
  const app = Fastify();

  /*
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors({ exposedHeaders: [COMPATIBILITY_CHECK_HEADER] }));
  app.use(helmet());

  app.set("trust proxy", 1);

  app.use(compatibilityCheckMiddleware);
  app.use(contextMiddleware);

  app.use(badAuthRateLimiterHandler);
  app.use(rootRateLimiter);
  app.use(v4RequestBody);

  app.set("etag", etagFn);

  

  app.use(errorHandlingMiddleware);

*/
  addApiRoutes(app);

  app.register(contextMiddleware);

  return app;
}

export default buildApp();

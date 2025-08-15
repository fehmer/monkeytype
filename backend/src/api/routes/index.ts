import { contract } from "@monkeytype/contracts/index";
import fp from "fastify-plugin";
import { join } from "path";
import { MonkeyResponse } from "../../utils/monkey-response";
import { version } from "../../version";
import admin from "./admin";
import apeKeys from "./ape-keys";
import configs from "./configs";
import configuration from "./configuration";
import dev from "./dev";
import docs from "./docs";
import leaderboards from "./leaderboards";
import presets from "./presets";
import psas from "./psas";
import publicStats from "./public";
import quotes from "./quotes";
import results from "./results";
import users from "./users";
import webhooks from "./webhooks";

import { MonkeyValidationError } from "@monkeytype/contracts/util/api";
import { initServer } from "@ts-rest/fastify";
import { FastifyInstance } from "fastify";
import { ZodIssue } from "zod";
import { getLiveConfiguration } from "../../init/configuration";
import authMiddleware from "../../middlewares/auth";
import requiredConfigurationMiddleware from "../../middlewares/configuration";
import maintenanceMiddleware from "../../middlewares/maintenance";
import verifyPermissionsMiddleware from "../../middlewares/permission";
import Logger from "../../utils/logger";
import { isDevEnvironment } from "../../utils/misc";
import fastifyStatic from "@fastify/static";

const pathOverride = process.env["API_PATH_OVERRIDE"];
const BASE_ROUTE = pathOverride !== undefined ? `/${pathOverride}` : "";
const APP_START_TIME = Date.now();

const s = initServer();
const router = s.router(contract, {
  admin,
  apeKeys,
  configs,
  presets,
  psas,
  public: publicStats,
  leaderboards,
  results,
  configuration,
  dev,
  users,
  quotes,
  webhooks,
});

async function addApiRoutes(app: FastifyInstance): Promise<void> {
  app.register(maintenanceMiddleware);

  applyDevApiRoutes(app);
  docs(BASE_ROUTE, app);

  applyTsRestApiRoutes(app);
  //app.register(s.plugin(router));

  app.register(authMiddleware);
  app.register(requiredConfigurationMiddleware);
  app.register(verifyPermissionsMiddleware);

  // 404 handler
  app.setNotFoundHandler((req, reply) => {
    reply
      .code(404)
      .send(
        new MonkeyResponse(
          `Unknown request URL (${req.method}: ${req.url})`,
          null
        )
      );
  });

  //index route
  app.get("/", async (_req, reply) => {
    reply.code(200).send(
      new MonkeyResponse("ok", {
        uptime: Date.now() - APP_START_TIME,
        version,
      })
    );
  });
}

function applyTsRestApiRoutes(app: FastifyInstance): void {
  s.registerRouter(contract, router, app, {
    jsonQuery: true,

    requestValidationErrorHandler(err, req, res) {
      let message: string | undefined = undefined;
      let validationErrors: string[] | undefined = undefined;

      if (err.pathParams?.issues !== undefined) {
        message = "Invalid path parameter schema";
        validationErrors = err.pathParams.issues.map(prettyErrorMessage);
      } else if (err.query?.issues !== undefined) {
        message = "Invalid query schema";
        validationErrors = err.query.issues.map(prettyErrorMessage);
      } else if (err.body?.issues !== undefined) {
        message = "Invalid request data schema";
        validationErrors = err.body.issues.map(prettyErrorMessage);
      } else if (err.headers?.issues !== undefined) {
        message = "Invalid header schema";
        validationErrors = err.headers.issues.map(prettyErrorMessage);
      } else {
        Logger.error(
          `Unknown validation error for ${req.method} ${
            req.routeOptions.url
          }: ${JSON.stringify(err)}`
        );
        res
          .code(500)
          .send({ message: "Unknown validation error. Contact support." });
        return;
      }

      res
        .code(422)
        .send({ message, validationErrors } as MonkeyValidationError);
    },

    /*
    globalMiddleware: [

      rateLimitRequest(),
      
    ],
    */
  });
}

function prettyErrorMessage(issue: ZodIssue | undefined): string {
  if (issue === undefined) return "";
  const path = issue.path.length > 0 ? `"${issue.path.join(".")}" ` : "";
  return `${path}${issue.message}`;
}

function applyDevApiRoutes(app: FastifyInstance): void {
  if (isDevEnvironment()) {
    //disable csp to allow assets to load from unsecured http
    app.addHook("onRequest", async (_req, res) => {
      res.header("Content-Security-Policy", "");
    });

    //configuration page
    console.log(join(__dirname, "../../../private"));
    app.register(fastifyStatic, {
      root: join(__dirname, "../../../private"),
      prefix: "/configure",
      index: "index.html",
      prefixAvoidTrailingSlash: true,
    });

    //slowdown
    app.addHook("onRequest", async (req) => {
      const slowdown = (await getLiveConfiguration()).dev.responseSlowdownMs;
      if (slowdown > 0) {
        Logger.info(
          `Simulating ${slowdown}ms delay for ${req.method} ${
            req.routeOptions.url ?? req.url
          }`
        );
        await new Promise((resolve) => setTimeout(resolve, slowdown));
      }
    });
  }
}
/*
function applyApiRoutes(app: Application): void {
  addSwaggerMiddlewares(app);

  
*/

export default fp(addApiRoutes);

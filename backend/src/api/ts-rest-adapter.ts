import { AppRoute, AppRouter } from "@ts-rest/core";
import * as fastify from "fastify";
import { MonkeyResponse } from "../utils/monkey-response";
import { Context } from "../middlewares/context";
import { MonkeyRequest } from "./types";

export function callController<
  TRoute extends AppRoute,
  TQuery,
  TBody,
  TParams,
  TResponse,
  //ignoring as it might be used in the future
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  TStatus = 200
>(
  handler: MonkeyHandler<TQuery, TBody, TParams, MonkeyResponse<TResponse>>
): (all: TypeSafeTsRestRequest<TRoute, TQuery, TBody, TParams>) => Promise<{
  status: TStatus;
  body: MonkeyResponse<TResponse>;
}> {
  return async (all) => {
    const req: MonkeyRequest<TQuery, TBody, TParams> = {
      body: all.body as TBody,
      query: all.query as TQuery,
      params: all.params as TParams,
      raw: all.request,
      ctx: all.request["ctx"] as Context,
    };

    try {
      const result = await handler(req);
      const response = {
        status: 200 as TStatus,
        body: {
          message: result.message,
          data: result.data,
        },
      };

      return response;
    } catch (err) {
      return {
        status: 500,
        body: {},
      };
    }
  };
}

type WithBody<T> = {
  body: T;
};
type WithQuery<T> = {
  query: T;
};
type WithParams<T> = {
  params: T;
};

type WithoutBody = {
  body?: never;
};
type WithoutQuery = {
  query?: never;
};
type WithoutParams = {
  params?: never;
};

type MonkeyHandler<TQuery, TBody, TParams, TResponse> = (
  req: MonkeyRequest<TQuery, TBody, TParams>
) => Promise<TResponse>;

type TypeSafeTsRestRequest<
  TRoute extends AppRoute,
  TQuery,
  TBody,
  TParams
> = AppRouteImplementation<TRoute> &
  (TQuery extends undefined ? WithoutQuery : WithQuery<TQuery>) &
  (TBody extends undefined ? WithoutBody : WithBody<TBody>) &
  (TParams extends undefined ? WithoutParams : WithParams<TParams>);

export type TsRestRequest<T extends AppRoute | AppRouter> =
  fastify.FastifyRequest<
    fastify.RouteGenericInterface,
    fastify.RawServerDefault,
    fastify.RawRequestDefaultExpression,
    fastify.FastifySchema,
    fastify.FastifyTypeProviderDefault
  > & {
    tsRestRoute: T;
    ctx: Readonly<Context>;
  };

type AppRouteImplementation<T extends AppRoute> = {
  request: fastify.FastifyRequest<
    fastify.RouteGenericInterface,
    fastify.RawServerDefault,
    fastify.RawRequestDefaultExpression,
    fastify.FastifySchema,
    fastify.FastifyTypeProviderDefault,
    fastify.FastifyContextConfig<T>
  >;
  reply: fastify.FastifyReply<
    fastify.RawServerDefault,
    fastify.RawRequestDefaultExpression,
    fastify.RawReplyDefaultExpression,
    fastify.RouteGenericInterface,
    fastify.FastifyContextConfig<T>
  >;
  appRoute: T;
};

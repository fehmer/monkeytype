import { TsRestRequest as TsRestRequestGeneric } from "./ts-rest-adapter";
import { Context } from "../middlewares/context";
import { FastifyRequest } from "fastify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TsRestRequest = TsRestRequestGeneric<any>;

//TODO remove?
export type ExpressRequestWithContext = {
  ctx: Readonly<Context>;
} & FastifyRequest;

export type TsRestRequestWithContext = {
  ctx: Readonly<Context>;
} & TsRestRequest &
  FastifyRequest;

export type MonkeyRequest<
  TQuery = undefined,
  TBody = undefined,
  TParams = undefined
> = {
  query: Readonly<TQuery>;
  body: Readonly<TBody>;
  params: Readonly<TParams>;
  ctx: Readonly<Context>;
  raw: Readonly<FastifyRequest>;
};

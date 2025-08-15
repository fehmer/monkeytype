import { FastifyInstance, FastifyReply } from "fastify";
import { readFileSync } from "fs";
import path from "path";

const root = __dirname + "/../../../dist/static/";
const internalHtml = readFileSync(path.join(root, "api/internal.html"), "utf8");
const internalJson = readFileSync(path.join(root, "api/openapi.json"), "utf8");
const publicHtml = readFileSync(path.join(root, "api/public.html"), "utf8");
const publicJson = readFileSync(path.join(root, "api/public.json"), "utf8");

export default function docs(baseUrl: string, app: FastifyInstance): void {
  const basePath = `${baseUrl}/docs`;
  app.get(`${basePath}/internal`, async (_req, reply) => {
    setCsp(reply);
    return reply.send(internalHtml);
  });

  app.get(`${basePath}/internal.json`, async (_req, reply) => {
    return reply.type("application/json").send(internalJson);
  });

  app.get(`${basePath}/public`, async (_req, reply) => {
    setCsp(reply);
    return reply.send(publicHtml);
  });

  app.get(`${basePath}`, async (_req, reply) => {
    setCsp(reply);
    return reply.send(publicHtml);
  });

  app.get(`${basePath}/public.json`, async (_req, reply) => {
    return reply.type("application/json").send(publicJson);
  });
}

function setCsp(reply: FastifyReply): void {
  reply.header("Content-Type", "text/html; charset=utf-8");
  reply.header(
    "Content-Security-Policy",
    "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' monkeytype.com cdn.redocly.com data:;object-src 'none';script-src 'self' cdn.redocly.com 'unsafe-inline'; worker-src blob: data;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests"
  );
}

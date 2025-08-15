import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import etag from "@fastify/etag";
import { COMPATIBILITY_CHECK } from "@monkeytype/contracts";
//todo import { COMPATIBILITY_CHECK } from "@monkeytype/contracts";

async function etagMiddleware(app: FastifyInstance): Promise<void> {
  app.register(etag, {
    weak: true,
    algorithm: "sha1",
    etagPrefix: COMPATIBILITY_CHECK,
    //TODO check  how  to add version prefix
  });
}

export default fp(etagMiddleware);

/* Old code

return function generateETag(body, encoding) {
    const buf = !Buffer.isBuffer(body) ? Buffer.from(body, encoding) : body;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const generatedTag: string = etag(buf, options);

    //custom code to add the version number
    if (generatedTag.startsWith("W/")) {
      return `W/"V${COMPATIBILITY_CHECK}-${generatedTag.slice(3)}`;
    }
    return `"V${COMPATIBILITY_CHECK}-${generatedTag.slice(1)}`;
  };
  */

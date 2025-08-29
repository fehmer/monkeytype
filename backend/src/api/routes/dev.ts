import { devContract } from "@monkeytype/contracts/dev";
import { initServer } from "@ts-rest/fastify";

import * as DevController from "../controllers/dev";
import { callController } from "../ts-rest-adapter";
import { onlyAvailableOnDev } from "../../middlewares/utility";

const s = initServer();

export default s.router(devContract, {
  generateData: {
    hooks: { onRequest: onlyAvailableOnDev() },
    handler: async (r) => callController(DevController.createTestData)(r),
  },
});

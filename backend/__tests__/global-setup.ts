import * as MongoDbMock from "vitest-mongodb";
export async function setup({ provide }): Promise<void> {
  console.log("download mongo");
  await MongoDbMock.setup({
    serverOptions: {
      binary: {
        version: "6.0.15",
      },
    },
  });
  console.log("download mongo done");
}

export async function teardown(): Promise<void> {
  console.log("teardown mongo");
  await MongoDbMock.teardown();
}

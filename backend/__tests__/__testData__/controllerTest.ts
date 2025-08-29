import { beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../../src/app";

export function setup() {
  const mockApp = request(app.server);

  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });

  return mockApp;
}

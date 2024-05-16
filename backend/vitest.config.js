import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    globalSetup: "__tests__/global-setup.ts",
    setupFiles: ["__tests__/setup-tests.ts"],
    pool: "forks",
    poolOptions: {
      /*forks: {
        minForks: 1,
        maxForks: 2,
      },*/
    },

    coverage: {
      include: ["**/*.ts"],
    },
  },
});

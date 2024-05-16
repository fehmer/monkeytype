import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["__tests__/setup-tests.ts"],
    pool: "forks",
    poolOptions: {
      forks: {
        minForks: 1,
        maxForks: 1,
      },
    },

    coverage: {
      include: ["**/*.ts"],
    },
  },
});

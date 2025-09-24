/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    css: true,
    globalSetup: "__tests__/global-setup.ts",
    setupFiles: ["__tests__/setup-tests.ts"],

    coverage: {
      include: ["**/*.ts"],
    },
    deps: {
      optimizer: {
        web: {
          include: ["@monkeytype/funbox"],
        },
      },
    },
  },
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    reporters: "verbose",
    setupFiles: ["./mongo-memory-server.ts"],
  },
});

import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    channel: process.platform === "win32" ? "msedge" : undefined,
  },
  webServer: {
    command: "node scripts/serve.mjs",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
  reporter: "list",
});

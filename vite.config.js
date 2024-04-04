import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    collectCoverageFrom: ["src/**/*.jsx", "src/**/*.js"],
    setupFiles: "src/spec/setupTests.js",
    testMatch: ["./src/spec/*.spec.jsx"],
    environment: "jsdom",
    coverage: {
      all: true,
      exclude: ["*.config.js", "*.cjs", "**/main.jsx", "**/node_modules/**"],
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
    },
  },
});

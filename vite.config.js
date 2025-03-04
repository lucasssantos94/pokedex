/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "${path.join(
          process.cwd(),
          "src/globalStyles/global.scss",
        )}" as global;`,
      },
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});

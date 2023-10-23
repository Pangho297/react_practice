import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: ".env",
  define: {
    _global: {},
  },
  plugins: [
    svgr({
      exportAsDefault: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },

  server: {
    port: process.env.VITE_USER_AGENT === "MOBILE" ? 3001 : 3000,
  },
});

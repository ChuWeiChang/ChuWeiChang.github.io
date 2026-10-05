import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// User site (ChuWeiChang.github.io) is served from the domain root, so base stays "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
});

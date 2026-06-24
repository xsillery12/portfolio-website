import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // relative base so it deploys at any path (e.g. GitHub Pages project sites)
  base: "./",
  plugins: [vue(), tailwindcss()],
});

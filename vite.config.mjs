import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "app",
  base: "/stephantech.github.io/",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  plugins: [vue()]
});

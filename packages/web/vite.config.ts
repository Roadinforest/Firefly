// packages/web/vite.config.ts

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 将插件添加到 plugins 数组中
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        // 需要重写路径，移除 /api 前缀，因为后端已经设置了全局前缀
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

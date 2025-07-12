// packages/web/vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 导入 Vite 插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 将插件添加到 plugins 数组中
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        // 移除 rewrite 规则，保持 /api 前缀
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

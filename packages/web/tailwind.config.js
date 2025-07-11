// packages/web/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 这里是关键，告诉 Tailwind 去扫描这些文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

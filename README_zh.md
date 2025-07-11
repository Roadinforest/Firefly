# 🔥 Firefly

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-blue.svg)](README_zh.md)
[![English](https://img.shields.io/badge/English-blue.svg)](README_en.md)


**点亮思念，待你共赏。**

**Firefly (萤火虫)** 是一款专为异地情侣和追求深度交流的用户设计的私密分享应用。它让你捕捉那些转瞬即逝的灵感、想要分享的瞬间，像捕捉萤火虫一样，将它们汇集在一个共享的“瓶子”里，等待重逢的那一天，一同打开，分享彼此眼中的世界。

---

## ✨ 核心理念 (Core Concept)

我们相信，最好的交流并非总是即时的。有些想法、有些感触，需要沉淀和期待。

Firefly 的核心是**异步分享**和**仪式感**。

-   **捕捉 (Capture):** 看到一部好电影、听到一首触动心灵的歌、拍下一张有趣的照片，或仅仅是一个深夜里的奇思妙想……随时将它们变成一只“萤火虫”放入瓶中。
-   **期待 (Anticipate):** 看着瓶子里的光点慢慢增多，你知道每一个光点背后都有一个故事，一份想要与你分享的心情。这份期待感，是异地关系中最珍贵的养分。
-   **分享 (Share):** 当你们见面时，可以一起打开这个“萤火虫瓶”，随机抽取一只“萤火虫”，分享它背后的故事。让每一次分享都成为一次充满惊喜和深度连接的独特体验。

## 🚀 技术栈 (Tech Stack)

本项目采用 TypeScript 全栈开发，并使用 pnpm 作为包管理器，以 Monorepo 形式管理前后端代码。

-   **前端 (packages/web):**
    -   **框架:** React 18 + Vite
    -   **语言:** TypeScript
    -   **UI:** Tailwind CSS
    -   **状态管理:** Zustand
    -   **数据请求:** TanStack Query (React Query)
    -   **路由:** React Router

-   **后端 (packages/api):**
    -   **框架:** Nest.js
    -   **语言:** TypeScript
    -   **数据库:** PostgreSQL
    -   **ORM:** Prisma
    -   **认证:** Passport.js + JWT

-   **开发工具:**
    -   **包管理:** pnpm Workspace
    -   **版本控制:** Git & GitHub

## 快速开始 (Quick Start)

### 环境准备

在开始之前，请确保你已安装以下环境：
-   Node.js (v18+ LTS)
-   pnpm (`npm install -g pnpm`)
-   Git
-   Docker (推荐用于运行数据库)

### 安装与运行

1.  **克隆项目**
    ```bash
    git clone https://github.com/YOUR_USERNAME/firefly.git
    cd firefly
    ```

2.  **安装依赖**
    在项目根目录运行，pnpm 会自动安装所有子项目的依赖。
    ```bash
    pnpm install
    ```

3.  **启动数据库**
    我们提供了一个 `docker-compose.yml` 文件来方便地启动 PostgreSQL 数据库。
    ```bash
    docker-compose up -d
    ```

4.  **配置环境变量**
    后端项目需要数据库连接信息。复制示例文件并按需修改。
    ```bash
    cd packages/api
    cp .env.example .env
    ```
    (默认的 `.env` 文件已配置为连接 Docker 数据库，通常无需修改。)

5.  **运行数据库迁移**
    这将根据 Prisma schema 在数据库中创建所有表。
    ```bash
    # 仍在 packages/api 目录
    pnpm prisma migrate dev
    ```

6.  **启动项目**
    你需要打开两个终端窗口：
    
    -   **终端 1: 启动后端 API**
        ```bash
        cd packages/api
        pnpm run start:dev
        ```
        后端服务将在 `http://localhost:3000` 启动。

    -   **终端 2: 启动前端 Web 应用**
        ```bash
        cd packages/web
        pnpm run dev
        ```
        前端应用将在 `http://localhost:5173` (或另一个可用端口) 启动。

现在，打开浏览器访问前端地址，开始你的 Firefly 之旅吧！

## 🤝 贡献指南 (Contributing)

我们非常欢迎来自社区的贡献！无论是 Bug 反馈、功能建议还是代码提交。

如果你想贡献代码，请遵循以下步骤：
1.  Fork 本仓库。
2.  创建一个新的分支 (`git checkout -b feature/your-amazing-feature`)。
3.  提交你的代码 (`git commit -m 'feat: Add some amazing feature'`)。
4.  将你的分支推送到你的 Fork 仓库 (`git push origin feature/your-amazing-feature`)。
5.  创建一个 Pull Request。

在提交代码前，请确保遵循项目的编码规范。

## 📜 开源许可证 (License)

本项目采用 [MIT License](LICENSE) 开源许可证。

---
*Made with ❤️ for those who are miles apart but close at heart.*# 🔥 Firefly

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

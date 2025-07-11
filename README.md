# 🔥 Firefly

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-blue.svg)](README_zh.md)
[![English](https://img.shields.io/badge/English-blue.svg)](README.md)


**Capture the glow of a fleeting thought, and share it when you're together.**

**Firefly** is a private, asynchronous sharing application designed for long-distance couples and anyone seeking deeper, more meaningful communication. It allows you to capture those brilliant, transient moments of inspiration—like catching fireflies in a jar—to share and cherish when you finally reunite.

---

## ✨ Core Concept

We believe the best conversations aren't always instantaneous. Some thoughts, feelings, and discoveries deserve to be savored and anticipated.

Firefly is built on two core principles: **asynchronous sharing** and a **sense of ceremony**.

-   **Capture:** You watch a great movie, hear a song that touches your soul, snap a funny picture, or have a whimsical late-night thought. Instantly turn it into a "firefly" and place it in your shared jar.
-   **Anticipate:** Watch as the jar slowly fills with glowing lights. Each light represents a story, a feeling, a piece of jejich world they can't wait to share with you. This sense of anticipation is a precious nutrient for any relationship, especially across distances.
-   **Share:** When you're finally together, open the jar. You can randomly pick a firefly and let the stories unfold. Each share becomes a unique, surprising, and deeply connecting experience.

## 🚀 Tech Stack

This project is a full-stack TypeScript monorepo managed with `pnpm` workspaces.

-   **Frontend (packages/web):**
    -   **Framework:** React 18 + Vite
    -   **Language:** TypeScript
    -   **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
    -   **State Management:** Zustand
    -   **Data Fetching:** TanStack Query (React Query)
    -   **Routing:** React Router

-   **Backend (packages/api):**
    -   **Framework:** Nest.js
    -   **Language:** TypeScript
    -   **Database:** PostgreSQL
    -   **ORM:** Prisma
    -   **Authentication:** Passport.js + JWT

-   **Dev Tools:**
    -   **Package Manager:** pnpm Workspace
    -   **Version Control:** Git & GitHub
    -   **Containerization:** Docker Compose

## ⚡ Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:
-   Node.js (v18+ LTS recommended)
-   pnpm (`npm install -g pnpm`)
-   Git
-   Docker and Docker Compose (or Docker Desktop)

### Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/YOUR_USERNAME/firefly.git
    cd firefly
    ```

2.  **Install Dependencies**
    From the project root, `pnpm` will automatically install dependencies for all workspace packages.
    ```bash
    pnpm install
    ```

3.  **Start the Database**
    A `docker-compose.yml` file is provided for convenience. This will start a PostgreSQL database in a Docker container.
    ```bash
    docker-compose up -d
    ```

4.  **Set Up Environment Variables**
    The backend API needs to know how to connect to the database.
    ```bash
    cd packages/api
    cp .env.example .env
    ```
    The default `.env` file is pre-configured to connect to the Docker container, so no changes are usually needed.

5.  **Run Database Migrations**
    This command will create all the necessary tables in your new database based on the Prisma schema.
    ```bash
    # Still in the packages/api directory
    pnpm prisma migrate dev
    ```

6.  **Start the Development Servers**
    You'll need two separate terminal windows for this.
    
    -   **Terminal 1: Start the Backend API**
        ```bash
        cd packages/api
        pnpm run start:dev
        ```
        The backend will be running at `http://localhost:3000`.

    -   **Terminal 2: Start the Frontend Web App**
        ```bash
        cd packages/web
        pnpm run dev
        ```
        The frontend will be running at `http://localhost:5173` (or another available port).

You can now open your browser and navigate to the frontend URL to start using Firefly!

## 🤝 Contributing

Contributions from the community are warmly welcomed! Whether it's bug reports, feature suggestions, or pull requests, we'd love to have your help.

If you'd like to contribute code, please follow these steps:
1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/your-amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add some amazing feature'`).
4.  Push to your branch (`git push origin feature/your-amazing-feature`).
5.  Create a Pull Request.

Please ensure your code adheres to the project's linting and formatting standards.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
*Made with ❤️ for those who are miles apart but close at heart.*
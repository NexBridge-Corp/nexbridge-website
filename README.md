# NexBridge Website

> **The bridge to what's next**

Official website for NexBridge Corp — showcasing integrated software and hardware solutions, embedded systems, IoT platforms, custom software, and automation.

---

## Tech Stack

- **React 18** (Vite)
- **Tailwind CSS 3**
- **Docker + Nginx** for production

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (recommended v20)
- npm v9+

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
```

The static output will be in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

---

## Docker Deployment

### Build and run with Docker Compose

```bash
docker compose up --build
```

The site will be available at [http://localhost](http://localhost).

### Build Docker image manually

```bash
docker build -t nexbridge-website .
docker run -p 80:80 nexbridge-website
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (Button, Card, Badge, etc.)
│   ├── layout/      # Navbar, Footer, Layout wrapper
│   └── common/      # Logo, Icon
├── sections/        # Page sections (Hero, About, Services, etc.)
├── pages/           # Page-level components
├── hooks/           # Custom React hooks
├── utils/           # Constants and helpers
└── styles/          # Global CSS, animations, variables
```

---

## Available Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start development server           |
| `npm run build`    | Build for production                |
| `npm run preview`  | Preview production build locally    |
| `npm run lint`     | Run ESLint                          |


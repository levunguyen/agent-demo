# Todo App

A lightweight, frontend-only Todo List built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. Tasks persist in localStorage — no backend required.

![App Screenshot](./public/screenshot.png)

## Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org/)
- **npm 9+** (bundled with Node)

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server → http://localhost:5173
```

That's it. You should be up and running in under 2 minutes.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run test` | Lint & static analysis (oxlint) |
| `npm run preview` | Preview the production build locally |

## Features

- Add, edit, and delete tasks
- Toggle tasks complete / incomplete
- Filter view: All · Active · Completed
- Data persists across page refreshes (localStorage)

## Deploy

Run `npm run build`, then deploy the `dist/` folder to any static host — Vercel, Netlify, or GitHub Pages all work out of the box.

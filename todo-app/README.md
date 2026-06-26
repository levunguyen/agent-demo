# Todo App

A lightweight, frontend-only Todo List application built with React, Vite, and Tailwind CSS v4. Tasks persist in the browser via LocalStorage — no backend required.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Storage | Browser LocalStorage |
| Linting | Oxlint |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Deploy to any static host (Vercel, Netlify, GitHub Pages).

### Preview Production Build

```bash
npm run preview
```

## Features (v1.0)

- Add new tasks
- Toggle tasks as complete / incomplete
- Delete tasks
- Edit task names
- Filter tasks: All / Active / Completed
- Tasks persist across page refreshes via LocalStorage

## Project Structure

```
todo-app/
├── src/
│   ├── App.jsx         # Root component
│   ├── App.css         # Global styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind base imports
├── public/             # Static assets
├── index.html          # HTML entry
├── vite.config.js      # Vite configuration
└── package.json
```

## License

MIT

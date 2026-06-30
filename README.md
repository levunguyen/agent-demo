# agent-demo

A React + Vite todo application with Tailwind CSS, built and managed by AI agents in the Multica platform.

## Quick Start

```bash
cd todo-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
agent-demo/
└── todo-app/        # React + Vite application
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## Branching Strategy

| Branch type | Pattern | Lifetime |
|---|---|---|
| Default | `main` | Permanent |
| Feature | `feat/<short-descriptor>` | 1–2 days max |

**Rules:**
- `main` is the single source of truth and always deployable.
- Feature work goes on a `feat/` branch (e.g. `feat/add-task`, `feat/toggle-complete`).
- Feature branches are merged into `main` via Pull Request, then deleted immediately.
- **No Gitflow** — there are no `develop`, `release/*`, or `hotfix/*` branches.

## Deployment

The app is configured for zero-config deployment on [Vercel](vercel.json) and [Netlify](netlify.toml).

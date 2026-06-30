# ADR-001: LocalStorage as Sole Data Layer (v1.0)

**Status:** Accepted  
**Date:** 2026-06-30  
**Deciders:** Product / Architect  

---

## Context

The Todo App v1.0 is a frontend-only React application intended for rapid delivery and field testing. The primary goal is to validate core UX (add, edit, delete, filter tasks) with real users before investing in backend infrastructure.

## Decision

All task data for v1.0 persists exclusively in **browser LocalStorage** under the key **`todo-app-tasks`**.

- **No backend API calls** are made by the application.
- **No cloud database** is provisioned.
- The LocalStorage entry holds a JSON-serialised array of task objects.

### Storage Contract

| Property | Value |
|---|---|
| Storage mechanism | `window.localStorage` |
| Key name | `todo-app-tasks` |
| Value format | JSON array of `{ id, title, isCompleted }` objects |
| Scope | Single browser origin — data does not sync across devices |

### Task Data Model (v1.0)

```json
[
  {
    "id": "uuid-v4",
    "title": "Buy groceries",
    "isCompleted": false
  }
]
```

Fields intentionally deferred to v2: `dueDate`, `tags`, `description`.

## Rationale

| Factor | LocalStorage (chosen) | Backend API (deferred) |
|---|---|---|
| Time to ship | < 2 weeks | 4–6 weeks minimum |
| Infrastructure cost | Zero | Server + DB + DevOps overhead |
| Complexity | None | Auth, REST/GraphQL, migrations |
| Offline support | Native | Requires service worker |
| Multi-device sync | Not needed for v1 | Would require accounts |

LocalStorage is sufficient for the v1.0 validation goal: prove the UI workflow, gather user feedback, and determine whether a backend is worth the investment.

## Consequences

**Accepted limitations for v1.0:**
- Data is local to a single browser — clearing browser data erases all tasks.
- No cross-device sync.
- No server-side backup or analytics.

## v2 Trigger Condition

Phase 4 (Backend API + PostgreSQL/MongoDB) will be scheduled **only if** real-world user feedback explicitly demands multi-device sync, collaboration, or data persistence beyond a single browser. Until that signal arrives, no backend work is started.

See `wbs.md` Section 4 for the deferred backlog scope.

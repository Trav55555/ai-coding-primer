---
title: "Hypermedia Template"
description: CLAUDE.md template for HTMX + Datastar hypermedia projects.
sidebar:
  order: 10
---

A minimal CLAUDE.md template for hypermedia-driven projects using HTMX or Datastar.

## Template (38 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
[Backend: Go/Python/Elixir] + HTMX (or Datastar) + Server-rendered HTML

## Commands
- [Your dev server command]
- [Your test command]
- [Your lint command]

## Architecture
- `/templates/` or `/views/` - Server-rendered HTML templates
- `/static/` - CSS, JS (minimal), assets
- `/handlers/` or `/routes/` - HTTP handlers returning HTML fragments
- No separate frontend build step

## Gotchas
- [Add project-specific gotchas here]
- Return HTML fragments, not JSON
- Use `hx-*` attributes for HTMX, `data-*` for Datastar
- No client-side routing - server handles all navigation

## Code Style
- HATEOAS: Hypermedia as the engine of application state
- Return HTML, not JSON (except for specific API endpoints)
- Progressive enhancement - works without JS
- Keep JS minimal - prefer hypermedia attributes
- No SPA patterns (no React/Vue/Svelte)
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Review and update the **Tech Stack** to match your backend
4. Replace `[One sentence describing your project]` with your description
5. Update commands for your specific backend
6. Add your project-specific gotchas

## Backend Examples

### Go + templ + HTMX

```markdown
## Tech Stack
Go 1.23 + Chi + templ + HTMX + Tailwind

## Commands
- `go run ./cmd/server` - Start dev server
- `templ generate --watch` - Watch templates
- `go test ./...` - Run tests

## Architecture
- `/cmd/server/` - Entry point
- `/internal/handlers/` - HTTP handlers returning templ components
- `/internal/templates/` - templ component files
- `/static/` - Tailwind CSS, HTMX
```

### Python + FastAPI + HTMX

```markdown
## Tech Stack
Python 3.12 + FastAPI + Jinja2 + HTMX

## Commands
- `uv run uvicorn app.main:app --reload` - Start dev server
- `uv run pytest` - Run tests

## Architecture
- `/app/routes/` - FastAPI routes returning HTMLResponse
- `/app/templates/` - Jinja2 templates
- `/static/` - CSS, HTMX
```

### Elixir + Phoenix LiveView

```markdown
## Tech Stack
Elixir 1.17 + Phoenix 1.7 + LiveView

## Commands
- `mix phx.server` - Start dev server
- `mix test` - Run tests

## Gotchas
- LiveView handles interactivity - no HTMX needed
- Use `phx-*` attributes instead of `hx-*`
```

## Customization Tips

**Add gotchas when the AI:**
- Suggests returning JSON instead of HTML
- Recommends React/Vue/Next.js
- Forgets `hx-swap`, `hx-target`, or `hx-trigger` attributes
- Creates a separate frontend build process
- Uses client-side routing

**Key HTMX attributes to remember:**

```markdown
## Gotchas
- `hx-get/post/put/delete` - HTTP method
- `hx-target` - Where to put the response
- `hx-swap` - How to insert (innerHTML, outerHTML, beforeend, etc.)
- `hx-trigger` - What triggers the request
- `hx-boost` - Progressive enhancement for links/forms
```

**Key Datastar attributes:**

```markdown
## Gotchas
- `data-on-click` - Event handlers
- `data-bind` - Two-way binding
- `data-show` - Conditional display
- `data-fetch` - Server requests
- Signals for reactive state
```

---
title: "Hypermedia .cursorrules"
description: .cursorrules template for HTMX/Datastar projects in Cursor.
sidebar:
  order: 19
---

A minimal `.cursorrules` template for hypermedia-driven projects in Cursor IDE.

## Template (30 lines)

```markdown
# Hypermedia Project Rules

## Tech Stack
- [Backend: Go/Python/Elixir/etc.]
- HTMX or Datastar for interactivity
- Server-rendered HTML templates
- No SPA framework

## Principles
- Return HTML fragments, not JSON
- Server handles all routing
- Progressive enhancement
- Minimal JavaScript

## Code Style
- HATEOAS: Hypermedia as the engine of application state
- Every action returns HTML
- No client-side state management
- No React/Vue/Svelte/Angular

## HTMX Patterns
- `hx-get/post` for requests
- `hx-target` for response destination
- `hx-swap` for insertion method
- `hx-trigger` for event binding

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Templates: `templates/[name].html` or `*.templ`
- Handlers: return `HTMLResponse`, not `JSONResponse`
- Partials: `templates/partials/[name].html`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Review and update the **Tech Stack** to match your backend
4. Choose HTMX or Datastar and remove the other
5. Add your project-specific gotchas

## Why This Matters

AI tools default to SPA patterns. This template explicitly tells the AI:

1. **No JSON APIs** - Return HTML, not JSON
2. **No frontend framework** - No React, Vue, or Svelte
3. **Server routing** - No client-side router
4. **Hypermedia** - Use `hx-*` attributes for interactivity

Without this context, the AI will likely suggest REST APIs with a separate frontend.

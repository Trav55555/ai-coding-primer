---
title: "Hypermedia Context File"
description: Starter context file for HTMX, Datastar, LiveView, and server-rendered HTML projects.
sidebar:
  order: 22
---

Use this page when the central risk is that the agent will turn a hypermedia application into a JSON API plus single-page app.

This template keeps the boundary explicit: the server returns HTML, navigation is server-owned, and JavaScript is limited to the project's chosen hypermedia mechanism. For general context-file practice, use [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).

The instruction file needs to answer:

- how to run and test the backend that renders HTML
- where templates, handlers, partials, and static assets live
- which hypermedia library or server-side interaction model is in use
- what the agent must not introduce, such as client routing, a separate SPA build, or JSON-first endpoints for ordinary UI actions

## Starter Template

Use the example below or [download the raw hypermedia context file](/ai-coding-primer/examples/hypermedia-context.md). Save it as `CLAUDE.md`, `AGENTS.md`, or the project instruction file supported by your tool.

```markdown
# Hypermedia Project Context

## What This Is
[One sentence describing the server-rendered application]

## Commands
- `[dev server command]` - Start the app that renders HTML
- `[test command]` - Run tests
- `[template command]` - Generate, check, or watch templates if the project requires it
- `[lint/build command]` - Run lint, compile, or production build checks

## Architecture
- `[handlers/routes directory]` - HTTP handlers that return pages or fragments
- `[templates/views directory]` - Server-rendered templates/components
- `[partials directory]` - HTML fragments used for swaps or live updates
- `[static directory]` - CSS, small JavaScript, and assets
- `[domain/services directory]` - Business logic outside template handlers

## Hypermedia Boundary
- Return HTML pages or fragments for normal UI actions
- Do not introduce a separate React, Vue, Svelte, Angular, or Next.js frontend
- Do not add client-side routing for server-owned navigation
- Keep JavaScript minimal and local to the existing hypermedia pattern
- Use `[HTMX hx-* / Datastar data-* / LiveView phx-* / project-specific attributes]` consistently

## Gotchas
- [Project-specific swap target, fragment convention, or template rule]
- [Project-specific progressive enhancement, caching, auth, or form rule]

## Verification
- Run `[test command]` after handler or domain changes
- Render the affected page or fragment locally
- Check that forms, links, and progressive enhancement still work
- Confirm the response shape is HTML unless the route is an explicit API endpoint
```

## Adapt the Example

1. Choose the actual interaction model first: HTMX, Datastar, Phoenix LiveView, another server-side model, or a project-specific pattern. Remove the others.
2. Replace commands with the backend and template commands this repository actually uses.
3. State the response boundary in one sentence. For example: "Cart actions return HTML fragments under `templates/cart/partials`, not JSON."
4. Keep only attributes or conventions that prevent mistakes. Do not paste an HTMX, Datastar, or LiveView reference manual into the context file.
5. Link to the project's template conventions, accessibility notes, or design-system docs when those files exist.

## Check the Interaction

A hypermedia context file is successful when the agent preserves the application's shape.

Check for these failures during review:

- the agent creates a new JSON endpoint for a normal UI interaction
- the agent adds a frontend framework or package manager workflow without approval
- a handler returns a full page where the caller expects a fragment, or a fragment where the browser expects a page
- links and forms no longer work under the project's progressive-enhancement expectations
- template changes bypass escaping, authorization, or CSRF conventions

The context file cannot verify browser behavior on its own. Run the app, exercise the changed interaction, inspect the response type, and run the relevant tests.

For context-file length, placement, and maintenance, return to [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).

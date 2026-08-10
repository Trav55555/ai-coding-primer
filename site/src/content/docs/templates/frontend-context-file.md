---
title: "Frontend Context File"
description: Starter context file for frontend projects where UI behavior, routing, styling, and browser boundaries matter.
sidebar:
  order: 20
---

Use this page when the agent keeps making frontend-specific mistakes: changing the wrong routing layer, inventing a state library, storing secrets in browser code, or skipping the checks that catch broken UI builds.

This is a destination template, not the canonical guide to context-file design. For length rules, file placement, and maintenance practice, use [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) as the owner.

A useful frontend context file answers:

- how to run the app locally
- which command verifies type, lint, test, and production-build health
- where UI code, routing, styles, and shared browser utilities live
- which choices are project-specific enough that the agent may guess wrong
- which boundaries the agent must not cross, such as adding backend secrets to client code

## Starter Template

Save this as the context-file format your tool reads, such as `CLAUDE.md`, `AGENTS.md`, or another project instruction file supported by your editor.

```markdown
# Frontend Project Context

## What This Is
[One sentence describing the product and user-facing surface]

## Commands
- `[dev command]` - Start the local frontend
- `[test command]` - Run unit/component tests
- `[lint command]` - Run lint and formatting checks
- `[typecheck command]` - Run static type checks
- `[build command]` - Build the production frontend

## Architecture
- `[routes directory]` - Route definitions, pages, or layouts
- `[components directory]` - Reusable UI components
- `[state directory]` - Client state, data fetching, or stores
- `[styles directory]` - Global styles, theme tokens, or design-system glue
- `[test directory]` - Frontend tests and test utilities

## Frontend Boundaries
- Do not put server secrets, private tokens, or service credentials in browser code
- Do not add a new state, styling, routing, or data-fetching library without approval
- Follow the existing accessibility and form-validation patterns
- Keep network calls behind the existing client/API wrapper

## Gotchas
- [Project-specific frontend mistake the agent has made before]
- [Project-specific browser, routing, styling, or build constraint]

## Verification
- Run `[typecheck command]` after changing typed code
- Run `[test command]` after changing behavior
- Run `[build command]` before treating routing, bundling, or environment-variable changes as complete
```

## Full-Stack Frontend Overlay

Add a small overlay when server and client code share one framework:

```markdown
## Server and Client Boundary
- Render on the server by default; add a client boundary only for browser-only state or APIs
- Keep secrets and privileged data access in server-only modules
- Put route handlers in `[route-handler directory]` and server actions in `[server-action directory]`
- Use `[current router API]`; do not introduce the legacy router
- Run `[production build command]` after changing routing, rendering boundaries, or environment variables
```

Name the repository's actual mechanism. For example, a Next.js App Router project may need `app/`, route handlers, Server Components, and explicit `'use client'` boundaries. A browser-only Vite application does not need those rules.

## Adapt the Example

1. Replace each bracketed command with the command this repository actually uses. Do not keep commands that do not exist.
2. Keep only architecture entries that prevent wrong edits. If the folder names are obvious, remove the section or reduce it.
3. Add one or two gotchas from real failures: auth storage, generated API clients, design-system imports, feature flags, localization, analytics, or routing conventions.
4. Remove framework basics. Do not explain React hooks, Vue components, Svelte stores, CSS syntax, or TypeScript fundamentals unless the project uses a non-obvious rule.
5. Add links instead of copying long docs. For example, link to the design-system README or accessibility checklist.

## Check the Result

A context file does not prove the UI works. It only improves the agent's starting assumptions.

After adapting it:

- run the commands named in the file
- ask the agent to explain which files it would edit for a small UI change before allowing a broad change
- check browser behavior, accessibility, and production build output for user-facing work
- remove a rule if the agent follows the codebase without it

The template is failing if it encourages the agent to add unnecessary framework-specific boilerplate, skip the build, duplicate design-system rules, or treat client code as a safe place for secrets.

For durable rules on context-file length, placement, progressive disclosure, and maintenance, return to [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).

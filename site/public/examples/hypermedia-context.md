# Hypermedia Project Context

## What This Is
[One sentence describing the server-rendered application]

## Commands
- `[dev command]` - Start the server that renders HTML
- `[test command]` - Run tests
- `[template command]` - Generate or check templates when required
- `[build command]` - Run production checks

## Architecture
- `[handlers directory]` - Handlers returning pages or fragments
- `[templates directory]` - Server-rendered templates or components
- `[partials directory]` - HTML fragments used for swaps or updates
- `[domain directory]` - Business logic outside template handlers

## Hypermedia Boundary
- Return HTML pages or fragments for ordinary UI actions
- Do not introduce a separate SPA or client-side router
- Keep JavaScript within the existing hypermedia mechanism
- Use `[project attribute or event convention]` consistently

## Gotchas
- [Full-page versus fragment response convention]
- [Progressive enhancement, escaping, CSRF, auth, or caching rule]

## Verification
- Render the affected page or fragment locally
- Check forms and links with the project's progressive-enhancement expectation
- Confirm the response is HTML unless the route is an explicit API
- Run `[test command]` and `[build command]`

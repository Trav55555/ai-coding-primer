# Frontend Project Context

## What This Is
[One sentence describing the user-facing surface]

## Commands
- `[dev command]` - Start the local frontend
- `[test command]` - Run unit or component tests
- `[lint command]` - Run lint and formatting checks
- `[typecheck command]` - Run static type checks
- `[build command]` - Build the production frontend

## Architecture
- `[routes directory]` - Pages, routes, or layouts
- `[components directory]` - Reusable UI components
- `[client directory]` - State, data fetching, or browser utilities

## Boundaries
- Never put server secrets or privileged credentials in browser code
- Do not add a routing, state, styling, or data-fetching library without approval
- Keep network calls behind the existing client or API wrapper
- Follow the existing accessibility and form-validation patterns

## Gotchas
- [Observed project-specific frontend mistake]
- [Non-obvious routing, rendering, styling, or build constraint]

## Verification
- Run `[typecheck command]` after changing typed code
- Run `[test command]` after changing behavior
- Run `[build command]` after routing, rendering, bundling, or environment changes

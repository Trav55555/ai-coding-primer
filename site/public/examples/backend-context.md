# Backend Project Context

## What This Is
[One sentence describing the service responsibility]

## Commands
- `[dev command]` - Start the local service
- `[test command]` - Run focused and service tests
- `[lint or static command]` - Run configured static checks
- `[build command]` - Compile or build the service
- `[local migration command]` - Apply migrations only to the local test target

## Architecture
- `[transport directory]` - HTTP, RPC, queue, or message handlers
- `[service directory]` - Business rules and use cases
- `[data directory]` - Queries, models, repositories, or generator inputs
- `[generated directory]` - Generated output; do not edit directly

## Boundaries
- Never run migrations or destructive scripts against production data
- Keep business rules out of transport handlers
- Validate inputs and authorization at the service boundary
- Do not log secrets, credentials, PII, or full tokens
- Update generator inputs, then run `[generator command]`

## Gotchas
- [Observed data, auth, queue, migration, or deployment mistake]
- [Runtime, concurrency, timeout, or compatibility constraint]

## Verification
- Run `[test command]` after behavior changes
- Run `[lint or static command]` and `[build command]` before completion
- Describe rollback and test-data evidence before any migration leaves local development

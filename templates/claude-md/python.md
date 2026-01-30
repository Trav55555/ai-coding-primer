# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Python 3.12 + FastAPI + SQLAlchemy + Pydantic

## Commands
- `uv run uvicorn app.main:app --reload` - Start dev server
- `uv run pytest` - Run tests
- `uv run ruff check .` - Lint
- `uv run ty check` - Type check (or `pyright`)
- `uv run alembic upgrade head` - Run migrations

## Architecture
- `/app/api/` - FastAPI route handlers
- `/app/services/` - Business logic
- `/app/models/` - SQLAlchemy ORM models
- `/app/schemas/` - Pydantic request/response schemas
- `/scripts/` - One-off scripts

## Gotchas
- [Add project-specific gotchas here]
- Example: Model artifacts in `/models/` - don't commit (use DVC)
- Example: Legacy `/v1/` endpoints use old schema - don't modify

## Code Style
- Type hints on all functions
- Use Pydantic for request/response validation
- Async for I/O-bound operations, sync for CPU-bound
- Tests use pytest fixtures, not unittest

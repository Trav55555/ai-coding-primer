---
title: "Python/FastAPI Template"
description: CLAUDE.md template for Python + FastAPI + SQLAlchemy projects.
sidebar:
  order: 2
---

A minimal CLAUDE.md template for Python backend projects using FastAPI and SQLAlchemy.

## Template (33 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Python 3.12 + FastAPI + SQLAlchemy + Pydantic

## Commands
- `uv run uvicorn app.main:app --reload` - Start dev server
- `uv run pytest` - Run tests
- `uv run ruff check .` - Lint
- `uv run mypy .` - Type check
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
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Replace `[One sentence describing your project]` with your description
4. Replace the example gotchas with your project's actual gotchas
5. Adjust commands if you use pip/poetry instead of uv

## Customization Tips

**Add gotchas when the AI:**
- Suggests `pip install` when you use `uv`
- Uses sync code where you need async
- Forgets to use Pydantic schemas for validation
- Puts business logic in route handlers

**Remove sections if:**
- You don't use Alembic for migrations
- Your project doesn't have a `/scripts/` directory
- The architecture is obvious from the folder structure

## Alternative: Poetry/pip

If you use Poetry or pip instead of uv, update the commands:

```markdown
## Commands
- `poetry run uvicorn app.main:app --reload` - Start dev server
- `poetry run pytest` - Run tests
- `poetry run ruff check .` - Lint
```

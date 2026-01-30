---
title: "Python .cursorrules"
description: .cursorrules template for Python projects in Cursor.
sidebar:
  order: 11
---

A minimal `.cursorrules` template for Python projects in Cursor IDE.

## Template (28 lines)

```markdown
# Python Project Rules

## Tech Stack
- Python 3.12+
- [Framework: FastAPI/Django/Flask]
- uv for package management
- Ruff for linting, ty for types (or Pyright)

## Commands
- `uv run [command]` - Run with uv
- `uv run pytest` - Tests
- `uv run ruff check .` - Lint
- `uv run ty check` - Type check (or `pyright`)

## Code Style
- Type hints on all functions
- Use Pydantic for data validation
- Prefer explicit imports over star imports
- Docstrings for public functions

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- API routes: `app/api/[resource].py`
- Services: `app/services/[name].py`
- Models: `app/models/[name].py`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Replace `[Framework]` placeholder
4. Add your project-specific gotchas

## Alternative: Poetry/pip

If you use Poetry instead of uv:

```markdown
## Commands
- `poetry run pytest` - Tests
- `poetry run ruff check .` - Lint
- `poetry run ty check` - Type check
```

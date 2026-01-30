---
title: "C#/.NET Template"
description: CLAUDE.md template for C#/.NET + ASP.NET Core projects.
sidebar:
  order: 6
---

A minimal CLAUDE.md template for C#/.NET projects using ASP.NET Core and Entity Framework.

## Template (28 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
.NET 8 + ASP.NET Core + Entity Framework Core + SQL Server

## Commands
- `dotnet run --project src/Api` - Start API server
- `dotnet test` - Run all tests
- `dotnet ef database update` - Apply migrations
- `dotnet build --configuration Release` - Production build
- `dotnet format` - Format code

## Architecture
- `/src/Api/` - ASP.NET Core controllers, middleware
- `/src/Application/` - Use cases, CQRS handlers
- `/src/Domain/` - Entities, value objects
- `/src/Infrastructure/` - EF Core, external services

## Gotchas
- [Add project-specific gotchas here]
- Example: Use `IDateTimeProvider` instead of `DateTime.Now`
- Example: Legacy controllers use repository directly - new code uses MediatR

## Code Style
- Clean Architecture (dependencies point inward)
- CQRS with MediatR for commands/queries
- FluentValidation for input validation
- No `async void` except event handlers
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Review and update the **Tech Stack** to match your project
4. Replace `[One sentence describing your project]` with your description
5. Add your project-specific gotchas

## Common .NET Gotchas

Add these if they apply to your project:

```markdown
## Gotchas
- Use `IDateTimeProvider` for testability, not `DateTime.Now`
- The `Orders` aggregate has complex invariants - read domain tests first
- Connection strings in user secrets, not appsettings.json
- Use `CancellationToken` on all async methods
```

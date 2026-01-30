---
title: "C#/.NET .cursorrules"
description: .cursorrules template for C#/.NET projects in Cursor.
sidebar:
  order: 15
---

A minimal `.cursorrules` template for C#/.NET projects in Cursor IDE.

## Template (27 lines)

```markdown
# C#/.NET Project Rules

## Tech Stack
- .NET 8+
- ASP.NET Core
- Entity Framework Core
- xUnit + FluentAssertions for tests

## Commands
- `dotnet run --project src/Api` - Start server
- `dotnet test` - Run tests
- `dotnet ef database update` - Migrations
- `dotnet format` - Format code
- `dotnet build` - Build

## Code Style
- Clean Architecture pattern
- Use MediatR for CQRS
- FluentValidation for input validation
- No `async void` except event handlers

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Controllers: `src/Api/Controllers/[Name]Controller.cs`
- Handlers: `src/Application/[Feature]/Commands/[Name]Handler.cs`
- Entities: `src/Domain/Entities/[Name].cs`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Add your project-specific gotchas

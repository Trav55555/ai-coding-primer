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

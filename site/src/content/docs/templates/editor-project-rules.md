---
title: "Editor Project Rules"
description: How to adapt project context into editor-specific rule files without treating perishable formats as durable guidance.
sidebar:
  order: 23
---

Editor rule systems are useful when a tool can scope instructions by file path, manual mention, or relevance. They are also perishable. Treat the editor's official docs as the source of truth for the exact file format.

For general context-file design, use [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/). This page is only about adapting that content into editor-managed rule files.

A useful editor rule keeps an AI coding tool inside local conventions without copying a long `CLAUDE.md`, `AGENTS.md`, README, or framework guide into every prompt. It answers:

- when the rule should apply
- which files or tasks it governs
- what mistake it prevents
- how the agent should verify work under that rule

## Cursor Format Snapshot

:::caution[Perishable format]
Reviewed: August 2026. Cursor's official [plugin template](https://github.com/cursor/plugin-template/tree/main/plugins/starter-advanced/rules) and [plugin-authoring guidance](https://github.com/cursor/plugins/blob/main/create-plugin/skills/create-plugin-scaffold/SKILL.md) use `.mdc` rules with `description`, `alwaysApply`, and optional `globs`. Check Cursor's current [Rules documentation](https://docs.cursor.com/docs/rules) before standardizing on exact placement or matching behavior.
:::

The official repositories show `.mdc` rule files with `description`, `alwaysApply`, and optional `globs` frontmatter. Project-level placement and matching behavior remain perishable; verify them in the current product documentation.

Always-applied rule:

```mdc
---
alwaysApply: true
---
- Read the relevant source files before proposing changes.
- Do not modify generated files in `dist/` or `build/`.
```

File-pattern rule:

```mdc
---
description: Frontend component conventions
globs:
  - "src/components/**/*.tsx"
alwaysApply: false
---
- Use named exports for components.
- Follow the existing component test pattern before adding a new one.
- Run the frontend typecheck and component tests after behavior changes.
```

Described rule:

```mdc
---
description: Backend service conventions, validation, and error handling
alwaysApply: false
---
- Validate inputs at the service boundary.
- Keep transport handlers thin; put business logic in services or use cases.
- Return structured errors using the existing project pattern.
```

Do not infer matching behavior from these examples. Check the current Cursor documentation and verify rule loading in the installed editor. The stable lesson is the rule shape: scope, instruction, verification, and limit.

## Split Only Where Scope Changes

1. Start from the smallest project context file that works. Do not split rules until there is a clear scoping reason.
2. Create separate editor rules only for different boundaries: frontend components, backend services, database migrations, generated files, security-sensitive code, or hypermedia templates.
3. Give each rule one job. If a rule covers every part of the repository, it probably belongs in the main project context file instead.
4. Put verification next to the instruction. A rule that says how to edit should also say how to check the edit.
5. Remove rules that repeat obvious codebase facts or generic framework advice.

## Starter Rule Pattern

Use the generic structure below or [download the raw `.mdc` example](/ai-coding-primer/examples/editor-project-rule.mdc). Adapt its frontmatter to the current editor format before relying on it.

```markdown
# [Area] Project Rule

## Applies When
[File path, task type, or manual mention condition]

## Rule
- [Specific project convention]
- [Specific boundary the agent must not cross]

## Verification
- [Command or review step required for this area]

## Failure Limit
- Stop and ask before [destructive, broad, security-sensitive, or ambiguous action]
```

Use the editor's required wrapper format around this content. For Cursor, verify the current `.mdc` frontmatter and rule-type behavior against the official docs before relying on it.

## Test Rule Loading

After adding editor rules:

- confirm the editor recognizes the files as rules
- test one task that should trigger the rule and one task that should not
- check whether the rule appears in the model context, rule inspector, or equivalent editor UI if available
- run the commands named by the rule after a matching change
- remove or narrow rules that fire too often

Editor rules fail when they become a hidden policy layer nobody reviews, when they conflict with the main context file, or when stale format assumptions make the editor ignore them.

For durable context-file practice, return to [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/). For exact format and behavior, use the editor's current official documentation.

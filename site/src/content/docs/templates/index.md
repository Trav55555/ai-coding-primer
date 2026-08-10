---
title: Context-File Examples
description: Four examples that teach distinct project-instruction patterns without becoming a framework catalog.
sidebar:
  order: 0
---

Use an example after you understand the durable guidance in [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/). Choose by the boundary the agent must preserve, not by searching for an exact framework name.

:::note[Freshness metadata]
Reviewed: August 2026. Editor-specific file formats and stack commands can change. Verify exact commands in the repository and exact rule formats in current tool documentation.
:::

## Choose an Example

| Example | Use it when the agent needs to preserve |
|---|---|
| [Frontend Context File](/ai-coding-primer/templates/frontend-context-file/) | browser/server boundaries, routing, UI architecture, accessibility checks, and production builds |
| [Backend Context Files](/ai-coding-primer/templates/backend-context-files/) | service layers, database safety, migrations, generated files, and operational verification |
| [Hypermedia Context File](/ai-coding-primer/templates/hypermedia-context-file/) | server-rendered HTML, fragment responses, progressive enhancement, and the absence of an SPA |
| [Editor Project Rules](/ai-coding-primer/templates/editor-project-rules/) | path- or task-scoped instructions in an editor's current rule format |

These examples are deliberately not organized as one page per language or framework. Most projects need the same small set of information:

- commands that actually run in the repository
- non-obvious architecture boundaries
- repeated local mistakes
- security or data constraints
- checks that show whether the work is correct

## Adapt, Do Not Copy

1. Start with the example whose boundary matches the project.
2. Replace every placeholder with a real path, command, or policy.
3. Delete sections that do not prevent a likely mistake.
4. Keep the file short enough to review with code changes.
5. Run every safe command named in the file.
6. Add a rule only after evidence of a repeated failure.

A context file is not an access control or a substitute for tests. Use [Quick Security Checklist](/ai-coding-primer/security/checklist/) for permissions and data boundaries, and use the repository's normal build, test, review, and rollback process.

:::caution[Route migration]
Older stack-specific examples remain available at their existing URLs while route-preservation behavior is tested. They are no longer the recommended entry point and may become redirects or short tombstones in a later batch.
:::

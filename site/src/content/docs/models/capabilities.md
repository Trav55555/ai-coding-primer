---
title: Capability Patterns
description: Durable model capability classes for coding workflows.
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


Use this page for durable capability classes, not leaderboard snapshots. Specific rankings move too quickly to build the guide around.

## Capability Classes That Matter

### Deep reasoning models

Best for:
- multi-file changes
- architecture decisions
- debugging with several interacting causes
- long agent loops that need to recover from failure

Tradeoff:
- slower and often more expensive in time or usage budget

### Fast iteration models

Best for:
- autocomplete and short edits
- drafting tests or boilerplate
- quick review loops where latency matters more than depth

Tradeoff:
- weaker at holding long plans and resolving ambiguous requirements

### Multimodal models

Best for:
- UI implementation from screenshots or mockups
- debugging visual regressions
- working from diagrams, design files, or image-based documentation

Tradeoff:
- not every multimodal model is equally strong at coding depth

### Long-context models

Best for:
- large investigations
- broad repository mapping
- document-heavy workflows

Tradeoff:
- large context windows help only when context is selective and well-structured

### Local or open-weight models

Best for:
- sensitive code
- offline or air-gapped environments
- teams that prioritize control over frontier performance

Tradeoff:
- capability may lag top hosted models, especially on hard agentic tasks

## How to Choose by Workflow

| Workflow | Start with this capability class | Why |
|---|---|---|
| Complex bug fix | Deep reasoning | Root-cause analysis matters more than speed |
| New feature with many moving parts | Deep reasoning | Planning and recovery matter |
| UI build from design references | Multimodal | Visual understanding changes the result |
| Tight edit loop | Fast iteration | Lower latency keeps the workflow moving |
| Large codebase exploration | Long-context | Breadth helps when paired with context hygiene |
| Sensitive or regulated work | Local or open-weight | Operational boundaries may matter more than peak capability |

## Context Reality

Advertised context is not the same thing as reliable context. Once the prompt gets noisy, even very large windows help less than people expect.

- prefer selective retrieval over giant prompt dumps
- treat long context as a tool for breadth, not permission to include everything
- keep core rules pushed into project context files and retrieve the rest on demand

See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) for the workflow implications.

## What This Page Intentionally Does Not Do

- maintain live model rankings
- promise a single "best model"
- freeze benchmark snapshots into durable guidance

For time-sensitive benchmark details, use [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/) and confirm current data before making team-level decisions.

## Evidence Status

- `Research-supported principle`: verification, selective context, and review costs affect outcomes more reliably than leaderboard rank alone.
- `Practitioner-backed taxonomy`: these capability classes are a workflow-first simplification used for everyday model selection.

The taxonomy is not one benchmark's official ontology.

## Next Steps

- [Billing Models](/ai-coding-primer/models/pricing/): subscription, token, request, compute, and enterprise billing shapes
- [Selection Guide](/ai-coding-primer/models/selection-guide/): practical decision heuristics
- [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/): appendix-style benchmark interpretation

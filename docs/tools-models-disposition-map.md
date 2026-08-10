---
id: ai-coding-primer-tools-models-disposition-map
tags:
  - project
  - ai-coding
  - audit
  - roadmap
  - workflow
type: plan
status: active
created: '2026-03-16'
---

# Tools and Models Disposition Map

## Purpose

Assign a clear disposition to each tools/models page so contributors can reduce maintenance drag while keeping workflow-first guidance strong.

## Disposition Legend

- `keep durable reference`: keep in core navigation; maintain as stable decision support.
- `thin further`: keep the page but remove volatile detail and compress to durable guidance.
- `move to reference appendix`: keep available, but remove from core learning path and treat as perishable snapshot material.

## Models Pages

| Path | Disposition | Rationale |
|---|---|---|
| `site/src/content/docs/models/overview.md` | keep durable reference | model-vs-provider distinction is foundational and stable for workflow decisions. |
| `site/src/content/docs/models/pricing.md` | keep durable reference | treat as a cost-and-access tradeoff guide (workflow-first); keep raw price snapshots out of this page and in appendix-only references. |
| `site/src/content/docs/models/capabilities.md` | keep durable reference | capability-class and task-fit guidance owns the useful material merged from the retired selection guide. |
| `site/src/content/docs/models/benchmarks.md` | keep durable reference | teach benchmark interpretation and caveats in Reference navigation without maintaining a score leaderboard. |

## Tools Pages

| Path | Disposition | Rationale |
|---|---|---|
| `site/src/content/docs/tools/cli/claude-code.md` | move to reference appendix | vendor-specific details change frequently and are not core workflow curriculum. |
| `site/src/content/docs/tools/cli/codex-cli.md` | move to reference appendix | tool-specific capability details are perishable and better as optional reference. |
| `site/src/content/docs/tools/cli/opencode.md` | move to reference appendix | valuable reference but still product-specific and maintenance-heavy over time. |
| `site/src/content/docs/tools/cli/aider.md` | move to reference appendix | benchmark and feature details drift quickly; keep as optional deep reference. |
| `site/src/content/docs/tools/cli/pi.md` | move to reference appendix | useful terminal-agent reference, but product and model-support details are perishable. |
| `site/src/content/docs/tools/ides/cursor.md` | move to reference appendix | vendor policy/features evolve quickly; keep off the core learning spine. |
| `site/src/content/docs/tools/ides/zed.md` | move to reference appendix | useful reference but perishable as product capabilities evolve. |
| `site/src/content/docs/tools/ides/windsurf.md` | move to reference appendix | enterprise/privacy feature details are time-sensitive and frequently revised. |
| `site/src/content/docs/tools/ides/antigravity.md` | move to reference appendix | preview-stage product information is inherently volatile. |
| `site/src/content/docs/tools/ides/kiro.md` | move to reference appendix | preview and ecosystem details can change materially in short cycles. |
| `site/src/content/docs/tools/extensions/copilot.md` | move to reference appendix | plan/features/model roster changes create high upkeep cost. |
| `site/src/content/docs/tools/extensions/continue-dev.md` | move to reference appendix | still vendor-specific despite strong local-workflow relevance. |
| `site/src/content/docs/tools/extensions/amazon-q.md` | move to reference appendix | AWS and product-tier details are market-reference material. |
| `site/src/content/docs/tools/extensions/tabnine.md` | move to reference appendix | deployment and feature positioning changes require frequent maintenance. |
| `site/src/content/docs/tools/extensions/cody.md` | move to reference appendix | product roadmap volatility makes this better as optional reference content. |

## Retired Vendor Routes

- `/tools/cli/gemini-cli/` redirects to `reference/retired-and-transitioned-tools.md`.
- `/tools/extensions/supermaven/` redirects to `reference/retired-and-transitioned-tools.md`.

## Current Ownership After Consolidation

- `learn/beginner/choose-your-tool.md` owns workflow shape, access models, stack criteria, and switching cost. The retired `/tools/comparison/` route redirects there.
- `models/capabilities.md` owns capability-class selection. The retired `/models/selection-guide/` route redirects there.
- `models/overview.md` owns model/provider boundaries.
- `security/privacy-comparison.md` owns procurement, privacy, data-use, and jurisdiction review.
- `reference/agent-platform-boundaries.md` owns persistent-platform authority and operational fit.
- Vendor pages remain in the reference appendix and are linked from its Tool Snapshots section.

## Policy Link

This map implements: `docs/workflow-first-editorial-scope-policy.md`

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
| `site/src/content/docs/models/selection-guide.md` | keep durable reference | practical workflow-fit heuristics remain useful even when specific vendors change. |
| `site/src/content/docs/models/capabilities.md` | thin further | current benchmark-heavy matrix is useful but too volatile in present form. |
| `site/src/content/docs/models/benchmarks.md` | move to reference appendix | benchmark snapshots age quickly and should not anchor core curriculum navigation. |

## Tools Pages

| Path | Disposition | Rationale |
|---|---|---|
| `site/src/content/docs/tools/comparison.md` | keep durable reference | high-level workflow-fit chooser is core orientation and should explicitly own durable privacy/jurisdiction/deployment decision criteria. |
| `site/src/content/docs/tools/cli/claude-code.md` | move to reference appendix | vendor-specific details change frequently and are not core workflow curriculum. |
| `site/src/content/docs/tools/cli/codex-cli.md` | move to reference appendix | tool-specific capability details are perishable and better as optional reference. |
| `site/src/content/docs/tools/cli/opencode.md` | move to reference appendix | valuable reference but still product-specific and maintenance-heavy over time. |
| `site/src/content/docs/tools/cli/aider.md` | move to reference appendix | benchmark and feature details drift quickly; keep as optional deep reference. |
| `site/src/content/docs/tools/cli/gemini-cli.md` | move to reference appendix | rapid feature and access-model changes make this unsuitable for core path. |
| `site/src/content/docs/tools/ides/cursor.md` | move to reference appendix | vendor policy/features evolve quickly; keep off the core learning spine. |
| `site/src/content/docs/tools/ides/zed.md` | move to reference appendix | useful reference but perishable as product capabilities evolve. |
| `site/src/content/docs/tools/ides/windsurf.md` | move to reference appendix | enterprise/privacy feature details are time-sensitive and frequently revised. |
| `site/src/content/docs/tools/ides/antigravity.md` | move to reference appendix | preview-stage product information is inherently volatile. |
| `site/src/content/docs/tools/ides/kiro.md` | move to reference appendix | preview and ecosystem details can change materially in short cycles. |
| `site/src/content/docs/tools/extensions/copilot.md` | move to reference appendix | plan/features/model roster changes create high upkeep cost. |
| `site/src/content/docs/tools/extensions/continue-dev.md` | move to reference appendix | still vendor-specific despite strong local-workflow relevance. |
| `site/src/content/docs/tools/extensions/amazon-q.md` | move to reference appendix | AWS and product-tier details are market-reference material. |
| `site/src/content/docs/tools/extensions/tabnine.md` | move to reference appendix | deployment and feature positioning changes require frequent maintenance. |
| `site/src/content/docs/tools/extensions/supermaven.md` | move to reference appendix | completion-speed claims and feature set are perishable. |
| `site/src/content/docs/tools/extensions/cody.md` | move to reference appendix | product roadmap volatility makes this better as optional reference content. |

## Immediate Actions

1. Keep durable pages in current navigation with tighter workflow-first language.
2. Thin `models/capabilities.md` to fewer durable recommendations and fewer score snapshots.
3. Create an appendix navigation group for perishable vendor-specific pages.
4. Add review cadence metadata to appendix pages in Phase 4.
5. Keep governance criteria in core by explicitly maintaining privacy/jurisdiction/deployment logic in `tools/comparison.md` and `models/overview.md`.

## Policy Link

This map implements: `docs/workflow-first-editorial-scope-policy.md`

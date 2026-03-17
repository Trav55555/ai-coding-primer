---
id: ai-coding-primer-workflow-first-repositioning-plan
tags:
  - project
  - ai-coding
  - documentation
  - workflow
  - content-strategy
type: plan
status: active
created: '2026-03-15'
---

# Workflow-First Repositioning Plan

## Goal

Reposition the AI Coding Primer from a price-heavy comparison guide into a workflow-first, research-backed learning resource.

## Why This Change

- Price tables age quickly and create constant maintenance burden.
- The strongest content in the repo already lives in workflow, verification, and learning pages.
- Brain-2 research and recent industry practice both point toward harness design, context engineering, verification, and spec-driven workflows as the durable skills worth teaching.

## Inputs

### Internal project findings

- Pricing appears across model pages, tool pages, comparison pages, and beginner selection guides.
- Intermediate docs already have good workflow foundations in `effective-patterns.md`, `context-engineering.md`, and `learning-with-ai.md`.
- The advanced section is comparatively thin, especially around harnesses and orchestration.

### Brain-2 research to incorporate

- Mitchell Hashimoto's always-on agent workflow and the verification premium.
- Context engineering findings: minimal context, explore-first, tools over pre-loaded blobs.
- Skill-development tradeoffs: Anthropic RCT, METR, debugging gap, explanation vs delegation.
- Agent architecture analysis: harnesses, subagent isolation, verification stacks, repo maps, context compaction.

### External 2025-2026 synthesis

- Harness engineering is emerging as the key practice for reliable agentic coding.
- Context engineering has become a distinct discipline because large windows still degrade reasoning.
- Verification stacks and reflection layers are becoming more important than raw generation quality.
- Spec-driven workflows are replacing loose vibe-only implementation for production work.

## Content Strategy

### Remove or replace

- Numeric pricing tables and plan-by-plan monthly pricing.
- Volatile budget guidance that depends on rapidly changing vendor offers.
- Price-based recommendations when workflow fit is the real decision factor.

### Keep/remove policy

- **Remove** exact dollar figures, monthly subscription amounts, per-token pricing, budget tiers, and price-led recommendation sections.
- **Remove** phrases whose main purpose is cost positioning, such as "best value," "budget pick," or "cost per million tokens," unless they are rewritten into workflow or privacy guidance.
- **Keep** durable access-model language such as "open source," "BYOK," "local," "subscription required," and whether a free tier exists, as long as no numeric price is attached.
- **Keep** privacy, jurisdiction, local execution, open-weight, and workflow-fit details because those remain stable enough to guide readers.
- **Replace** any leftover pricing page with live-tracker references and decision guidance based on capability, workflow, privacy, and operational constraints.

### Emphasize instead

- Workflow archetypes: bug fix, feature build, refactor, codebase exploration.
- Verification-first development.
- Context engineering and context hygiene.
- Spec-driven development.
- Persistent harnesses for long-running tasks.
- Learning-safe AI usage patterns.

## Implementation Plan

### Phase 1: Structural repositioning

1. Replace `site/src/content/docs/models/pricing.md` with a workflow-oriented model selection page.
2. Update homepage and beginner tool-selection pages to steer readers by workflow, not price.
3. Update comparison pages to keep structural information such as open source, local support, and workflow fit, while removing numeric price details.

#### Phase 1 QA

- **Tool**: file review + grep.
- **Steps**: inspect `index.mdx`, `choose-your-tool.md`, `tools/comparison.md`, and the replacement for `models/pricing.md`; run grep for price patterns against those files.
- **Expected result**: no numeric pricing remains in those files, and the copy leads with workflow selection rather than budget selection.

### Phase 2: New workflow documentation

1. Add a workflow archetypes page for common AI coding tasks.
2. Add an advanced harness page covering persistent task state and long-running agents.
3. Expand subagent guidance into orchestration-oriented advice.

#### Phase 2 QA

- **Tool**: file review + navigation review.
- **Steps**: inspect each new page for concrete workflow steps, examples, and links from adjacent pages; confirm the pages are reachable from related docs through sidebar ordering or internal links.
- **Expected result**: the new pages read like actionable workflow docs, not stubs, and are discoverable from the learning sections.

### Phase 3: Research-backed upgrades

1. Strengthen context engineering with explore-first, push-vs-pull context, and compact-context guidance.
2. Strengthen learning-with-AI guidance with recent research on comprehension loss, debugging dependency, and explanation-first usage.
3. Update model/provider guidance so readers choose by capability, workflow, privacy, and jurisdiction.

#### Phase 3 QA

- **Tool**: file review.
- **Steps**: inspect the updated learning, context, and model pages to confirm that each page includes concrete research-backed guidance and that claims are tied to durable ideas rather than transient vendor positioning.
- **Expected result**: the pages clearly reflect recent research and industry practice, and none of them regress into pricing-led recommendations.

### Phase 4: Tool-page cleanup

1. Remove pricing sections from tool reference pages.
2. Replace them with workflow fit, access model, or operational caveats.
3. Keep durable facts such as open source status, local execution, BYOK support, and privacy posture.

#### Phase 4 QA

- **Tool**: grep + file review.
- **Steps**: grep the tool reference directory for price patterns, then inspect any remaining hits.
- **Expected result**: tool pages keep workflow-fit and access-model guidance while removing numeric pricing and budget-led language.

### Phase 5: Audit and QA

1. Run a docs-wide grep for pricing language and numeric price patterns.
2. Manually verify every public page under `site/src/content/docs/tools/`, `site/src/content/docs/models/`, and the updated `learn/` pages for compliance with the keep/remove policy.
3. Build the Astro site from `site/` and confirm it completes successfully.
4. Review the generated navigation and internal links for newly added or replaced pages.

#### Phase 5 QA

- **Tool**: grep + Astro build.
- **Steps**: run the final grep sweep, build from `site/`, and inspect any build or link errors.
- **Expected result**: grep findings are either eliminated or intentionally allowed by policy, and the site build exits cleanly.

## Success Criteria

- No numeric pricing tables remain in core site docs.
- The site's main narrative shifts from "which tool is cheapest" to "which workflow should I use and why".
- Advanced workflow guidance is materially stronger than before.
- Research-backed claims are reflected in the learning and context pages.
- The site still builds cleanly after the content changes.

## Initial Target Files

- `site/src/content/docs/index.mdx`
- `site/src/content/docs/learn/beginner/choose-your-tool.md`
- `site/src/content/docs/learn/intermediate/context-engineering.md`
- `site/src/content/docs/learn/intermediate/learning-with-ai.md`
- `site/src/content/docs/learn/intermediate/effective-patterns.md`
- `site/src/content/docs/learn/advanced/subagents.md`
- `site/src/content/docs/models/overview.md`
- `site/src/content/docs/models/selection-guide.md`
- `site/src/content/docs/models/pricing.md`
- `site/src/content/docs/tools/comparison.md`
- Tool pages under `site/src/content/docs/tools/`

## Audit Checklist

### Core narrative pages

- `site/src/content/docs/index.mdx`
- `site/src/content/docs/learn/beginner/choose-your-tool.md`
- `site/src/content/docs/learn/intermediate/effective-patterns.md`
- `site/src/content/docs/learn/intermediate/context-engineering.md`
- `site/src/content/docs/learn/intermediate/learning-with-ai.md`
- `site/src/content/docs/learn/advanced/subagents.md`

### Model pages

- `site/src/content/docs/models/overview.md`
- `site/src/content/docs/models/selection-guide.md`
- `site/src/content/docs/models/pricing.md`
- `site/src/content/docs/models/capabilities.md`
- `site/src/content/docs/models/benchmarks.md`

### Tool comparison pages

- `site/src/content/docs/tools/comparison.md`
- `site/src/content/docs/learn/beginner/choose-your-tool.md`

### Tool reference pages

- `site/src/content/docs/tools/cli/claude-code.md`
- `site/src/content/docs/tools/cli/codex-cli.md`
- `site/src/content/docs/tools/cli/opencode.md`
- `site/src/content/docs/tools/cli/aider.md`
- `site/src/content/docs/tools/cli/gemini-cli.md`
- `site/src/content/docs/tools/ides/cursor.md`
- `site/src/content/docs/tools/ides/zed.md`
- `site/src/content/docs/tools/ides/windsurf.md`
- `site/src/content/docs/tools/ides/antigravity.md`
- `site/src/content/docs/tools/ides/kiro.md`
- `site/src/content/docs/tools/extensions/copilot.md`
- `site/src/content/docs/tools/extensions/continue-dev.md`
- `site/src/content/docs/tools/extensions/amazon-q.md`
- `site/src/content/docs/tools/extensions/tabnine.md`
- `site/src/content/docs/tools/extensions/supermaven.md`
- `site/src/content/docs/tools/extensions/cody.md`

## Verification Plan

### Content verification

1. Run grep for `\$[0-9]`, `/mo`, `per million tokens`, `Pricing`, and `budget` inside `site/src/content/docs/`.
2. Review any remaining hits and either remove them or confirm they are acceptable under the keep/remove policy.

### Build verification

1. Run `npm run build` from `site/`.
2. Expected result: Astro/Starlight build succeeds with exit code 0.

### Navigation verification

1. Confirm new pages are reachable through Starlight navigation and internal links.
2. Confirm replaced pages do not leave broken links from the homepage, model pages, or learning pages.

## Notes

- Free-tier availability can remain when it helps with orientation, but never with numeric price details.
- Live benchmark or pricing trackers can still be linked as external references.
- Time-sensitive claims should be framed as reviewed snapshots, not permanent truths.

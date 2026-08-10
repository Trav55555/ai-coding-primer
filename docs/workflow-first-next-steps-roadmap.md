---
id: ai-coding-primer-workflow-first-next-steps-roadmap
tags:
  - project
  - ai-coding
  - roadmap
  - workflow
  - execution
type: plan
status: active
created: '2026-03-16'
---

# Workflow-First Next Steps Roadmap

## Purpose

Convert the completed workflow-first repositioning into a repeatable execution cycle that improves durability, evidence quality, and practical teaching value without expanding maintenance burden.

## North Star

The primer should be the best resource for moving from casual prompting to reliable AI-assisted engineering workflows.

## 30-Day Plan

### Phase 1 (Week 1): Clarify product boundaries

1. Define and document a strict scope rule:
   - Core content teaches workflow, verification, context management, safety, and learning patterns.
   - Tool/model pages provide workflow-fit reference, not broad market coverage.
2. Tag every page in `site/src/content/docs/models/` and `site/src/content/docs/tools/` as either:
   - keep as durable reference
   - thin further
   - move to reference appendix
3. Publish one short editorial policy note in `docs/` that explains what the project will no longer try to do.

**Exit criteria:**
- Every tools/models page has an explicit disposition.
- Scope policy is written and ready for contributors.

**Implementation artifacts (completed):**
- `docs/workflow-first-editorial-scope-policy.md`
- `docs/tools-models-disposition-map.md`

### Phase 2 (Week 2): Add worked workflow scenarios

1. Create scenario-first pages for:
   - fix a bug with verification checkpoints
   - add a feature with spec-first prompts
   - refactor with test-and-diff guardrails
2. For each scenario, include:
   - initial prompt shape
   - context pack strategy (what to include, what to omit)
   - verification loop
   - common failure mode and recovery path
3. Link these pages from intermediate and advanced hubs so they are primary navigation targets.

**Exit criteria:**
- At least 3 complete scenario workflows are published.
- Each scenario has concrete verification and failure-recovery guidance.

### Phase 3 (Week 3): Standardize evidence signaling

1. Introduce a lightweight evidence tag convention in prose:
   - `Research-backed`
   - `Practitioner-backed`
   - `Synthesis`
2. Apply tags to high-impact pages first:
   - workflow archetypes
   - effective patterns
   - context engineering
   - learning with AI
   - subagents
3. Add a maintainer checklist for claim updates when evidence quality changes.

**Exit criteria:**
- Evidence tags appear consistently on core workflow pages.
- Maintainer checklist exists and is referenced from roadmap docs.

### Phase 4 (Week 4): Reduce maintenance drag

1. Remove or compress sections that require frequent market tracking.
2. Replace stale-comparison pressure with:
   - workflow-fit matrices
   - access-model notes
   - external live trackers when needed
3. Add review cadence metadata to perishable pages (monthly review date).

**Exit criteria:**
- No page promises comprehensive market coverage.
- Perishable pages have explicit review cadence metadata.

**Core ownership note:**
- Keep workflow and stack criteria in `site/src/content/docs/learn/beginner/choose-your-tool.md`, procurement and data-use review in `site/src/content/docs/security/privacy-comparison.md`, model/provider boundaries in `site/src/content/docs/models/overview.md`, and persistent-platform authority in `site/src/content/docs/reference/agent-platform-boundaries.md`.

## Ongoing Monthly Cadence

1. Run a monthly content drift audit:
   - pricing leakage
   - stale capability claims
   - unsupported hard claims
2. Add one new worked scenario or improve one existing scenario each month.
3. Review evidence labels and downgrade/upgrade claim confidence as needed.
4. Run build and broken-link checks after every content batch.

## Verification Checklist

Latest dependency review: `docs/dependency-audit-2026-08-08.md`.

For each roadmap phase:

1. Run `npm run build` from `site/`.
2. Run targeted grep sweeps for banned content patterns (numeric pricing, budget-led ranking language).
3. Manually validate sidebar discoverability for new or relocated pages.
4. Ensure updated guidance remains workflow-first in introductions and summaries.

## Risks and Mitigations

- **Risk:** scope creep back into market-guide behavior.
  - **Mitigation:** enforce page disposition labels and editorial policy.
- **Risk:** concept-heavy docs without practical transfer.
  - **Mitigation:** require prompt + verification + failure recovery in every major workflow page.
- **Risk:** evidence overstatement.
  - **Mitigation:** use explicit evidence tags and periodic confidence review.

## Definition of Done for This Roadmap

The roadmap is complete when:

- workflow scenarios are discoverable and action-oriented,
- evidence status is visible on core pages,
- perishable market content is intentionally constrained,
- and maintenance effort trends downward while educational value trends upward.

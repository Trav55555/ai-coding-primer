---
id: ai-coding-primer-comprehensive-review-2026-05-20
tags:
  - project
  - ai-coding
  - review
  - content-strategy
  - security
  - workflow
  - research
type: review
status: active
created: '2026-05-20'
---

# Agentic Engineering Primer Comprehensive Review — 2026-05-20

## Verdict

Yes, the primer still holds up.

The durable thesis is stronger now than it was in the earlier review: **workflow, verification, context control, security boundaries, and learning discipline age better than tool rankings.** The site has largely internalized that strategy. It no longer reads like a static market survey pretending to be evergreen; it reads like a workflow-and-judgment guide with reference appendices.

The main remaining risk is not that the advice is wrong. The risk is that the reference layer still carries enough tool/model/template surface area to become stale or distract from the product's strongest promise.

## Review Scope

Reviewed:

- homepage and navigation
- beginner workflow entry points
- intermediate workflow, context, mistakes, learning, and scenario pages
- advanced context, subagent, MCP, skill, and harness pages
- model and benchmark reference pages
- security, privacy, governance, and research pages
- template and tool reference surface area
- previous strategic docs:
  - `docs/core-assumptions-review.md`
  - `docs/workflow-first-repositioning-plan.md`
  - `docs/workflow-first-editorial-scope-policy.md`

Also checked that the site builds successfully with `npm run build` from `site/`.

## What Still Holds Up Strongly

### 1. Workflow-first positioning is correct

The homepage now says the right thing: this is not a giant AI tools database. The strongest pages teach how to operate:

- choose workflow shape before vendor
- verify before trusting output
- use context selectively
- preserve judgment and learning
- treat security as a workflow property, not an afterthought

This is the most durable framing available for an AI coding primer in 2026.

### 2. Verification-first remains the highest-leverage advice

The `Effective Patterns`, workflow scenario pages, and governance pages all converge on the same operating rule: give the agent a way to check itself, then review the diff yourself.

This is still right. Recent productivity and security evidence continues to support the idea that AI coding benefits are conditional on feedback loops, not automatic.

### 3. Context engineering is still a central skill

The primer's context guidance is directionally strong:

- avoid giant prompt dumps
- prefer tool access and targeted reads
- keep project rules short
- use persistent artifacts for long-running work
- isolate research from implementation context when possible

The page is also appropriately cautious about the exact `40%` context threshold. That is good: the principle is durable; the exact number is not.

### 4. Security deserves first-class treatment

This has aged well. The primer emphasizes:

- prompt injection
- supply-chain risk
- MCP/plugin/skill trust boundaries
- package hallucination and slopsquatting
- permission creep
- sandboxing and network control
- human review and rollback

This is no longer niche. 2026 case studies make clear that AI coding failures are not just bad code quality problems; they are exfiltration, dependency, credential, and governance problems.

### 5. Learning-with-AI caution is valuable

The `Learning with AI` page is one of the site's strongest pieces. It correctly distinguishes:

- AI as tutor/scaffold
- AI as code vending machine

That distinction will remain relevant even as models improve. Better models may make delegation easier, but that does not automatically preserve debugging skill, comprehension, or judgment.

## What Has Improved Since the Earlier Assumptions Review

### 1. The product definition is clearer

The earlier review warned that the project was trying to be both a durable primer and a current market guide. The current site has moved materially toward the durable-primer side.

Good signs:

- homepage explicitly rejects being a tools database
- navigation is now job/workflow oriented
- model pricing page has been converted into decision logic rather than static pricing
- benchmark page marks itself as appendix material with review cadence
- tool pages are shorter reference notes rather than the core curriculum

### 2. Navigation is much closer to jobs-to-be-done

The sidebar now uses user-intent labels:

- Start Safely
- Work Reliably
- Choose a Workflow and Stack
- Control Context
- Learn Without Dependency
- Team Adoption
- Reference

This is a meaningful improvement over beginner/intermediate/advanced as the dominant spine.

### 3. Evidence labeling exists where it matters

Several high-impact pages now include evidence guides or evidence-status notes. This helps keep the practical advice opinionated while still signaling which claims are research-backed, practitioner-backed, or editorial synthesis.

## What Does Not Fully Hold Up Yet

### 1. The scenario pages are too thin

The project says workflow is the product, but the concrete workflow scenarios are among the shortest pages:

- bug fix: ~350 words
- feature build: ~330 words
- safe refactor: ~300 words

These should be flagship pages. They currently read more like outlines.

The primer would be stronger if each scenario showed:

- setup/context-gathering prompt
- planning prompt
- implementation prompt
- verification loop
- failure mode
- recovery move
- what to commit and when

### 2. The reference layer still has maintenance drag

The tool/model/reference surface is better contained, but still large:

- IDE references
- extension references
- CLI references
- model pages
- benchmark scores
- privacy comparisons
- two template families

This is manageable only if treated as explicitly perishable. The benchmark page does this. Not every reference page does.

### 3. Static benchmark numbers are still fragile

`models/benchmarks.md` includes specific current scores and model rankings from January 2026. Those are useful for a snapshot, but they are the highest-staleness material in the site.

Recommendation: either enforce a monthly review cadence or replace exact leaderboard snapshots with links plus interpretation rules.

### 4. Templates may outgrow the primer

The template section is useful, but the current surface area is broad:

- `CLAUDE.md` variants
- `.cursorrules` variants
- stack-specific pages

This risks pulling the project back toward configuration-library territory. The strategic center should remain canonical context patterns, not many hand-maintained variants.

### 5. Tool references need stronger staleness labels

Many tool pages are short, which is good, but they should more consistently say:

- last reviewed date
- what changes quickly
- where to verify live capabilities
- why/when this tool fits a workflow

Without that, even short pages can imply current authority they may not have.

## Page-Level Assessment

### Homepage

Strong. It says exactly what the project should be: workflow, stack fit, reliability, and judgment. The tagline is durable.

Small improvement: add one sentence that explicitly says tool/model pages are appendix snapshots, not buyer's-guide truth.

### Choose a Workflow and Stack

Strong. This is the right replacement for a naive tool chooser. It starts with workflow shape and constraints, not vendor rankings.

Small improvement: add a one-page decision tree or "if this, then start here" matrix.

### Effective Patterns

Strong. Verification-first, close-the-loop, small iterations, spec-first, subagents for research, and harnesses are the right core patterns.

Small improvement: show one fully worked example rather than mostly pattern descriptions.

### Context Engineering

Strong but slightly dense. The caution around the 40% rule is good. The page should remain a central pillar.

Small improvement: move the most actionable checklist higher, before deeper taxonomy.

### Learning with AI

Very strong. This page has a clear thesis and good practical advice.

Small improvement: link more directly from beginner pages, because this is not merely intermediate advice; beginners need it most.

### Security Risks

Strong and unusually relevant. The lethal trifecta framing, slopsquatting, MCP poisoning, skill/plugin supply chain, and permission creep sections still hold up.

Small improvement: add the 2026 concrete incident pattern summary as a short callout: default-insecure AI-built apps, AI-accelerated attackers, and malicious AI-assistant extensions.

### Governance and Rollout

Strong directionally. It correctly treats team adoption as policy, permissions, and verification rather than vibes.

Small improvement: provide a minimal rollout policy template and an approval matrix.

### Research Section

Useful but thin. The research pages summarize the right caveats, but they are not yet strong enough to carry the site's epistemic weight on their own.

Small improvement: consolidate into fewer, denser evidence briefs or add a research index with "claim -> source -> confidence" mapping.

### Model and Benchmark Pages

Conceptually fine; tactically fragile. The guidance to use live data is correct, but the presence of static scores creates update debt.

Small improvement: convert exact scores into examples or move them behind a clear snapshot box with expiration.

### Tool Pages

Appropriately demoted. Good.

Small improvement: standardize a compact structure:

1. best fit
2. avoid if
3. verification ergonomics
4. privacy/deployment notes
5. live docs link
6. last reviewed

### Templates

Useful but strategically risky if expanded further.

Small improvement: reduce duplicate guidance by making one canonical context-file design page and treating stack templates as generated examples.

## Strategic Answer: Does It Still Hold Up?

Yes — if the project keeps leaning into its current positioning.

It holds up as:

- a practical workflow primer
- a reliability and verification guide
- a context-control guide
- a security-aware adoption guide
- a learning/judgment guide

It does not hold up as:

- a comprehensive tool database
- a current model-ranking source
- a full pricing/commercial comparison guide
- a large template catalog

The good news: the current site mostly chooses the first identity.

## Priority Fixes

### P0 — Deepen the scenario pages

Make bug-fix, feature-build, and safe-refactor pages the most concrete pages on the site.

Each should include:

- before/after workflow
- prompt sequence
- agent mistakes to expect
- verification commands
- commit checkpoints
- escalation path when the agent gets stuck

### P1 — Add staleness metadata to reference pages

Every tool/model/privacy/reference page should include:

- reviewed date
- volatile fields
- live source links
- "do not rely on this page for" disclaimer when appropriate

### P1 — Convert research section into claim-backed evidence map

Instead of only summarizing studies by topic, add a compact table:

| Claim | Confidence | Evidence | Applies To |
|---|---|---|---|
| Verification loops matter | High | METR, Veracode, practitioner convergence | all workflows |
| AI productivity is automatic | Low / false | METR, DORA | team adoption |
| Heavy delegation can reduce learning | Medium-high | Anthropic, education research | learners/juniors |

### P2 — Add incident-based security callouts

Use the 2026 case-study pattern as evidence for why structural enforcement matters:

- AI-built apps can miss basic access control
- AI accelerates attackers
- AI-assistant extensions/plugins can be the supply-chain threat

### P2 — Prune or generator-ize templates

Keep canonical patterns. Avoid manual proliferation.

### P3 — Add a "monthly reference sweep" checklist

Review:

- benchmarks
- model names and scores
- tool capabilities
- privacy posture
- MCP/security recommendations
- broken external links

## Suggested Next Editorial Sprint

One high-leverage sprint:

1. Expand the three scenario pages into worked examples.
2. Add a standard reference-page freshness block.
3. Add a research claim/evidence table.
4. Add one team rollout policy template.
5. Decide whether exact benchmark scores stay or get replaced by live links.

## Final Judgment

The Agentic Engineering Primer still holds up because its center of gravity is now the right one: **agentic engineering as disciplined workflow, not magical prompting or vendor selection.**

The project should not restart. It should prune and deepen:

- deepen the worked workflows
- prune or quarantine perishable references
- keep security and verification central
- preserve the learning-without-dependency message

If it does that, the primer can stay useful even as the models, vendors, and benchmark leaders change every month.

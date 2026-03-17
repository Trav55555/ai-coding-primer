---
id: ai-coding-primer-editorial-scope-policy
tags:
  - project
  - ai-coding
  - policy
  - editorial
  - workflow
type: policy
status: active
created: '2026-03-16'
---

# Workflow-First Editorial Scope Policy

## Purpose

Define what this project is, what it is not, and how contributors should decide whether content belongs in core curriculum, durable reference, or appendix-style market notes.

## Product Definition

The Agentic Engineering Primer is a workflow-and-judgment guide.

Primary job:
- teach reliable AI-assisted engineering workflows

Not the primary job:
- maintain a comprehensive live market guide for every tool, model, and provider detail

## Scope Boundaries

### In Scope (Core)

- workflow design and task decomposition
- verification loops and safety boundaries
- context engineering and context hygiene
- learning-safe usage patterns
- team adoption guidance focused on process and governance

### Out of Scope (Core)

- static pricing tables and numeric plan breakdowns
- broad "best tool" or "best model" rankings without workflow context
- rapidly changing feature matrices as a primary product promise
- exhaustive vendor-by-vendor market tracking in core learning paths

## Content Tiers

### Tier 1: Core Curriculum

Use for pages that teach durable process skills. These pages should age slowly and remain useful without frequent market updates.

### Tier 2: Durable Reference

Use for pages that support decisions with stable concepts (for example, access-model differences, benchmark interpretation, workflow-fit heuristics).

### Tier 3: Reference Appendix

Use for perishable vendor snapshots and implementation specifics that are useful but not central to learning outcomes.

## Writing Rules

1. Lead with workflow decision logic before naming tools or models.
2. Prefer capability classes (reasoning class, fast class, local class) over volatile brand rankings.
3. If a claim is time-sensitive, mark it as a snapshot and link to live trackers.
4. Keep privacy, jurisdiction, and operational-boundary details when they affect workflow or governance.
5. Avoid language that implies static market certainty (for example, "best value" or "top model" without context and evidence caveat).

## Core Ownership of Governance Criteria

To prevent coverage gaps while moving vendor pages to appendix:

- `site/src/content/docs/tools/comparison.md` owns durable tool-level governance guidance (privacy posture, deployment boundary options, and operational fit).
- `site/src/content/docs/models/overview.md` owns durable model/provider governance guidance (provider boundary differences, jurisdiction, and access-model implications).

Vendor-specific pages may reference these criteria, but should not become the canonical source for them.

## Contributor Gate (Before Merge)

1. Does this page improve workflow execution or verification quality?
2. Could this claim remain useful in six months without major edits?
3. If content is perishable, should it live in appendix instead of core?
4. Are evidence-status cues clear for non-obvious claims?
5. Does the page avoid pricing-led or budget-led recommendations?

Any "no" answer requires rewrite, re-scope, or relocation.

## Maintenance Cadence

- Core curriculum: update when workflow practice materially changes.
- Durable reference: review quarterly.
- Reference appendix: review monthly or trim aggressively.

## Phase 1 Deliverables Linked to This Policy

- Page dispositions: `docs/tools-models-disposition-map.md`
- Repositioning plan: `docs/workflow-first-repositioning-plan.md`
- Next-steps roadmap: `docs/workflow-first-next-steps-roadmap.md`

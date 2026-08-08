---
id: ai-coding-primer-agentic-practice-currentness-update-plan
tags:
  - project
  - ai-coding
  - roadmap
  - editorial
  - research
type: plan
status: proposed
created: '2026-08-07'
---

# Agentic Practice Update Plan

## Outcome

Give readers a clear account of where agentic coding came from, how to use it now, and which claims remain unsettled.

The work should leave the primer with:

- one historical timeline
- one canonical development procedure
- updated context, harness, subagent, and governance guidance
- research pages that distinguish benchmark success from engineering outcomes
- a small maintenance routine for volatile claims

Use these source documents:

- `docs/agentic-coding-practices-evolution-report-2026-08-07.md`
- `docs/agentic-development-practice-plan.md`
- `docs/editorial-writing-smells.md`

## Editorial constraints

Every new or revised page must:

- answer a reader question in its opening paragraphs
- include a concrete example, procedure, or decision rule
- name the source and setting for research claims
- put limitations next to the claim they qualify
- avoid product-release chronology in core pages
- avoid tidy “pillars” or “shifts” unless the grouping helps a decision
- introduce named concepts after showing the problem
- remove sections that only restate the thesis

The project should sound like a technical guide, not a consultancy deck. See `docs/editorial-writing-smells.md`.

## Phase 1 — Publish the historical timeline

### Create

`site/src/content/docs/reference/development-practices-timeline.md`

Title it **From Structured Programming to Agentic Engineering**.

### Reader question

Where does agentic coding fit among earlier software-development practices?

### Structure

Open with a concrete comparison between autocomplete and a tool-using coding agent. Then use a timeline with four fields:

| Era | Problem | Practice | What agentic work uses |
|---|---|---|---|

Cover:

- the software crisis and software engineering
- structured programming and modularity
- lifecycle, iterative, and risk-driven development
- Extreme Programming, pair programming, refactoring, and test-driven development
- Agile and incremental delivery
- continuous integration and continuous delivery
- DevOps, infrastructure as code, and observability
- platform engineering and policy as code
- AI autocomplete and chat
- repository-aware coding agents
- context and harness engineering
- asynchronous and long-running agent work

### Guardrails

- Use approximate eras and primary sources.
- Explain that practices overlap; do not narrate inevitable progress.
- Note the common simplification of Royce's paper into “waterfall.”
- Keep vendor launches out unless one marks a genuine workflow change.
- End with current disputes, not a slogan.

### Connect

Link the page from:

- `learn/beginner/what-is-ai-coding.md`
- `research/overview.md`
- `research/adoption-trends.md`
- `reference/fast-changing-info.md`

### Check

A reader should be able to explain which older practices agentic coding depends on and which new risks come from a probabilistic tool user.

## Phase 2 — Publish the Agentic Development Loop

### Create

`site/src/content/docs/learn/intermediate/agentic-development-loop.md`

Place it after Workflow Archetypes in the **Work Reliably** sidebar.

### Reader question

How do I give a coding agent useful work without losing control of scope, quality, or system understanding?

### Procedure

1. State the behavior, non-goals, constraints, and acceptance evidence.
2. Resolve choices that are expensive or dangerous to reverse.
3. Choose the smallest end-to-end behavior that can test the design.
4. Give the agent a bounded task and explicit stop point.
5. Let the agent run the relevant checks.
6. Review assumptions, risk, diff, and observable behavior.
7. Save decisions and results needed by the next task.
8. Watch whether later changes require more rework or broader edits.

### Required examples

Include:

- one feature prompt with acceptance criteria and non-goals
- one thin vertical slice
- one case where a migration or foundation must precede the slice
- one risk table covering security boundaries, irreversible data changes, public contracts, concurrency, and weak observability
- one recovery example where the agent's failed attempts have polluted the session

### Evidence

Use DORA, METR, GitHub/GitLab practice, and the Brain-2 notes. Describe the complete loop as editorial guidance; no study has validated it as a universal optimum.

### Reduce duplication

After publishing the page:

- shorten repeated workflow material in `effective-patterns.md`
- revise `scenario-feature-build.md` so persistence → API → UI is not presented as the default slicing rule
- link all scenario pages to the canonical loop
- link `agent-harness.md` back to the loop

### Check

The page must show what the developer and agent each do at every step. A reader should be able to apply the loop to one real task without inventing missing steps.

## Phase 3 — Bring advanced guidance up to date

### Context Engineering

Revise `learn/intermediate/context-engineering.md`.

Add:

- the evidence that long or generated instruction files can add cost without improving success
- separate explanations of retrieved context, persistent instructions, and saved task state
- a short experiment for testing whether an instruction file helps representative tasks
- a warning that filesystem storage has not been shown to beat well-maintained external retrieval in general

### Agent Harness

Revise `learn/advanced/agent-harness.md`.

Show the parts of a harness through one task:

- selected context
- tools and permissions
- saved state
- tests and policy checks
- logs and cost limits
- retry and recovery rules
- human approval for irreversible actions

Avoid a component taxonomy with no running example.

### Subagents

Revise `learn/advanced/subagents.md`.

Add decision rules:

- parallelize independent research, review, or isolated worktrees
- serialize edits that share files or architectural decisions
- require handoffs to record commands, results, changes, and unresolved problems
- use an independent validator for consequential work
- count coordination and extra inference when evaluating multi-agent benefit

### Governance

Add repository readiness and autonomy guidance to `team/governance.md`.

Assess:

- repeatable environment
- test speed and depth
- static and architecture checks
- security controls
- ownership and review
- observability and rollback
- action logs and spending limits

Describe autonomy by allowed action and required control. Do not rank a team as “mature” because it allows more autonomy.

### Check

Each page must contain a decision or procedure. Delete any new section that only renames familiar engineering practice.

## Phase 4 — Repair the evidence layer

### Revise

- `research/productivity.md`
- `research/code-quality-security.md`
- `models/benchmarks.md`
- `research/overview.md`
- `research/adoption-trends.md`

### Make these distinctions explicit

1. passing a benchmark task
2. helping a developer finish realistic work
3. reducing review and rework
4. improving delivery performance
5. preserving production stability and security
6. keeping the repository easy to change

### Required updates

- Present METR's 2025 result beside its 2026 experiment-design update.
- Add DORA's finding that AI magnifies the surrounding delivery system.
- Explain task-selection and concurrency problems in productivity measurement.
- Group new benchmarks by the engineering problem they test: issue resolution, long tasks, sequential maintenance, context retrieval, and trajectory quality.
- Remove unsupported uses of “mainstream,” “standard,” “best,” and similar comparative language.
- Keep leaderboard scores and volatile model claims out of core pages.

### Check

For every quantitative claim, record:

- source
- date
- sample or task set
- measured outcome
- limitation that changes interpretation

## Maintenance routine

Do not create a permanent market-research burden.

### Quarterly

Review the core workflow, context, harness, governance, and research pages for:

- evidence that changes a recommendation
- contradictions between pages
- missing failure modes
- broken sources
- repeated or empty prose caught by `docs/editorial-writing-smells.md`

### Trigger a review when

- DORA or METR publishes a major software-development study
- a benchmark changes what it measures, rather than only its scores
- replicated research addresses maintainability or review burden
- a documented security incident reveals a general agent-control failure
- several independent organizations report the same new workflow with usable implementation detail

Ignore routine product announcements unless they invalidate a reference page.

## Delivery order

### Sprint 1

1. Draft and source the timeline.
2. Add navigation and cross-links.
3. Run the editorial-smell pass.
4. Build the site.

### Sprint 2

1. Draft the Agentic Development Loop.
2. Align Effective Patterns and scenario pages.
3. Add navigation and cross-links.
4. Build the site.

### Sprint 3

1. Update Context Engineering, Agent Harness, and Subagents.
2. Add repository readiness to Governance.
3. Build the site.

### Sprint 4

1. Update productivity, quality/security, benchmark, overview, and adoption pages.
2. Run a source audit and remove stale comparative claims.
3. Run a final duplication and editorial-smell pass.
4. Build the site.

## Verification

Run from `site/`:

```bash
npm run build
```

Then verify manually:

- new pages appear in the intended sidebar positions
- links work under `/ai-coding-primer/`
- core pages contain no volatile leaderboard or pricing claims
- evidence limitations sit beside the relevant claims
- examples name actors, actions, checks, and failure recovery
- the timeline does not imply that one practice replaced another
- no section exists only to repeat the page's main point

## Done

The update is complete when readers can:

- place agentic coding in the history of development practice
- run one bounded agentic task from definition through review
- decide how much context and autonomy a repository can support
- distinguish benchmark performance from useful engineering outcomes
- identify which claims are current evidence and which are editorial guidance

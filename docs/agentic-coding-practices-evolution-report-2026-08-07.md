---
id: ai-coding-primer-agentic-practices-evolution-report-2026-08-07
tags:
  - project
  - ai-coding
  - research
  - software-engineering-history
  - agentic-workflows
type: research-report
status: active
created: '2026-08-07'
---

# How Agentic Coding Practice Is Changing

**Research cutoff:** 2026-08-07  
**Decision:** What should the Agentic Engineering Primer add, revise, or leave in reference material?

## Findings

A developer using autocomplete chooses the file, writes most of the change, and decides when to run a check. A coding agent can search the repository, edit several files, run commands, inspect failures, and try again. That difference moves work upstream. The developer must give the agent a bounded problem, decide which choices require human judgment, and provide checks that can stop a bad loop.

This is the clearest change in current practice. The rest follows from it:

- Teams are putting more effort into task definitions, acceptance criteria, and implementation plans.
- Tests, linters, type checks, screenshots, contract checks, and performance limits now serve as feedback to the agent during the task, not only as checks after it finishes.
- Repository setup matters. Agents do better when build commands are repeatable, boundaries are visible, and failures are easy to reproduce.
- Longer tasks require saved state, checkpoints, logs, and handoffs. A chat transcript is a poor substitute.
- Parallel agents help with independent research and isolated work. They can make shared-file or architecture-heavy work harder to coordinate.
- Teams need permission rules and review gates because agents can act through shells, package managers, browsers, issue trackers, and cloud tools.

These practices borrow heavily from test-driven development (TDD), continuous integration (CI), small-batch delivery, DevOps, and platform engineering. Agentic coding gives those practices a new consumer: a fast, probabilistic executor that can use tools but cannot be trusted to notice every bad assumption.

## What the evidence establishes

### Productivity depends on the task and setting

The research nonprofit METR studied 16 experienced open-source developers working on 246 tasks in mature repositories. With the early-2025 tools in the study, developers took 19% longer when they could use artificial intelligence (AI). They nevertheless believed the tools had made them faster.

METR changed its experiment design in 2026. Developers had become reluctant to accept tasks where AI was forbidden, selected tasks partly by expected AI benefit, and sometimes ran several agents while doing other work. The later data weakly suggests that newer tools improved productivity, but METR says the selection effects prevent a reliable estimate.

The practical conclusion is narrow: benchmark scores, code volume, and self-reported speed do not establish local productivity. Teams need to measure completed work, review time, rework, defects, and delivery outcomes in their own setting.

The 2025 report from the DevOps Research and Assessment (DORA) program reaches an organizational conclusion. AI tends to magnify the strengths and weaknesses of the surrounding delivery system. A team with fast tests and clear ownership can use generated changes differently from a team with slow feedback and unclear boundaries.

### Context helps only when it earns its cost

ContextBench and Agent Retrieval Bench treat repository-context selection as a separate capability from patch generation. That distinction matters: an agent cannot fix the right code if it never finds it.

More supplied text does not guarantee better selection. Brain-2's summary of arXiv 2602.11988 reports that generated repository instruction files failed to improve or slightly reduced task success while raising cost by roughly 20–23 percent. Concise human-written instructions produced a small gain in that study, also at higher cost. Other evaluations have reported benefits from persistent rules, so the evidence does not support a universal rule either way.

The primer should recommend a testable default. Put non-obvious commands, constraints, and off-limits areas in a short repository file. Leave out generated directory tours and facts the agent can discover cheaply. Revisit the file when representative tasks show that it helps or distracts.

### Tests are necessary and incomplete

A failing test gives an agent a useful stopping condition. It does not prove that the change is maintainable, secure, usable, or well designed. An agent can satisfy a narrow test by changing the wrong layer, weakening the test, or adding a special case that makes the next change harder.

Current practitioner playbooks add more checks around the test loop:

- contract and compatibility tests
- architecture and dependency rules
- secret and dependency scanning
- screenshots or browser interaction for user interfaces
- performance and cost budgets
- review by someone who did not produce the implementation
- rollback and observability checks for production changes

Brain-2's notes call concrete, inspectable acceptance artifacts “playable specs.” The useful idea is simpler than the label: if nobody can run or inspect a result and decide whether it is right, the task is not ready for unsupervised execution.

### Long-running work needs durable state

A short bug fix can live in one session. Multi-day work cannot safely depend on a model remembering a long transcript. Current systems save plans, decisions, task state, commands, test results, and unresolved problems in files or structured stores.

Factory's published Missions pattern separates orchestration, implementation, and validation. Workers receive fresh context, validators check milestones, and handoffs record what happened. These reports show a plausible architecture, not a controlled demonstration that multi-agent work is generally better.

The important distinction is between independence and interference. Research, review, and changes in isolated worktrees can run in parallel. Two agents changing the same subsystem can duplicate work or make incompatible design choices. The primer should teach readers to choose concurrency from the dependency graph, not from the number of agents available.

### Benchmarks cover only part of engineering work

The Software Engineering Benchmark (SWE-bench) improved coding evaluation by using real repository issues and tests. It still evaluates bounded tasks from a repository snapshot. It does not directly measure whether reviewers understand the patch, whether the architecture survives a sequence of changes, or whether the code behaves safely in production.

New benchmarks explore longer tasks, ordered issue streams, repository evolution, and context retrieval. Much of this work is recent and preprint-stage. The primer can explain the evaluation categories without maintaining a leaderboard:

1. Did the agent pass the task's tests?
2. Did it help a developer finish realistic work?
3. What review and rework did the patch require?
4. Did team delivery and production outcomes improve?
5. Did the repository remain easy to change?

No published measure answers all five questions.

## The development-practice timeline

A useful timeline should track the problems developers were trying to solve. Product launch dates can sit in tool references.

| Era | Problem | Practice that emerged | What agentic work uses today |
|---|---|---|---|
| 1950s–1960s | Large software projects became difficult to predict and maintain | Software engineering as a discipline | Code production is only one part of dependable delivery |
| Late 1960s–1970s | Unstructured programs were hard to reason about | Structured programming, modules, explicit interfaces | Agents navigate and edit more safely when boundaries and entry points are legible |
| 1970s–1980s | Sequential plans handled uncertainty poorly | Iterative development, prototyping, risk-driven models | Plans need feedback points and revision, not blind execution |
| Late 1990s–2000s | Large batches delayed feedback | Extreme Programming, pair programming, refactoring, TDD, Agile | Small changes, executable expectations, and continuous review constrain agent work |
| 2000s–2010s | Integration and release remained slow and risky | CI, continuous delivery, trunk-based development | Automated checks give agents immediate evidence and protect the merge boundary |
| Late 2000s–2010s | Development and operations optimized separate systems | DevOps, infrastructure as code, observability | Agents can act across delivery systems; permissions and production feedback become part of coding practice |
| Late 2010s–2020s | Tooling complexity consumed developer attention | Platform engineering, paved roads, policy as code | Repeatable environments and encoded constraints make repositories safer for delegated work |
| 2021–2022 | AI could suggest code but had little control over the workflow | Autocomplete and chat assistants | The human selected context, integrated suggestions, and ran checks |
| 2023–2024 | Models gained tools and repository access | Issue-level coding agents and read-edit-run loops | Developers began delegating bounded repository tasks |
| 2024–2025 | Longer tasks exposed context and coordination failures | Plan modes, repository instructions, retrieval, worktrees, saved task state | The surrounding harness became as important as the model |
| 2025–2026 | Teams attempted asynchronous and multi-day work | Validation contracts, checkpoints, independent reviewers, orchestrators, structured handoffs | Autonomy became a question of repository readiness, task risk, and recovery |

The eras overlap. Waterfall did not vanish when Agile appeared, and pair programming did not become obsolete when autocomplete arrived. Agentic practice recombines older methods around a new executor.

## Disputes the primer should preserve

### Are agents making software development faster?

Sometimes, for some developers and tasks. The aggregate effect remains hard to measure because tools, task selection, concurrency, quality expectations, and repository familiarity all change the result. Teach local measurement instead of a universal answer.

### Should every repository have an instruction file?

No evidence supports “always.” Short files can preserve non-obvious rules. Long generated files can waste tokens and steer agents toward irrelevant work. Teach readers to keep instructions small and evaluate them.

### Should teams run many agents at once?

Only when the work is independent or isolated. Shared architecture and shared files create coordination costs that additional agents do not remove.

### Can green tests replace code review?

No. Tests cover specified behavior. Review still has to examine assumptions, security, system boundaries, operational consequences, and the cost of the next change.

### How much code must a developer understand?

Enough to own the result. For a consequential change, someone must be able to explain its call path, invariants, failure modes, and verification evidence. Low-risk mechanical changes can receive lighter review; security boundaries and irreversible data changes cannot.

## Content decisions for the primer

The project already covers verification, context, security, scenarios, subagents, and harnesses. The material lacks a single path through those topics.

Add two pages:

1. `learn/intermediate/agentic-development-loop.md` — one procedure from task definition through bounded implementation, checks, review, and handoff.
2. `reference/development-practices-timeline.md` — the historical table above, expanded with landmark sources and the disputes behind each era.

Revise four existing areas:

- **Context Engineering:** add the context-file evidence and a minimal-context experiment.
- **Agent Harness and Subagents:** add permission boundaries, saved state, handoffs, and concurrency rules.
- **Governance:** connect autonomy to repository readiness and task risk.
- **Research and Benchmarks:** separate patch success, developer productivity, review cost, delivery performance, and maintainability.

Keep vendor releases, current model claims, and leaderboard results in dated reference pages.

## Sources

### Historical and primary sources

- NATO Software Engineering Conference report (1968): http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF
- Dijkstra, “Go To Statement Considered Harmful” (1968): https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf
- Royce, “Managing the Development of Large Software Systems” (1970): https://www.praxisframework.org/files/royce1970.pdf
- Boehm, Spiral Model: https://www.cse.msu.edu/~cse435/Homework/HW3/boehm.pdf
- Agile Manifesto history: https://agilemanifesto.org/history
- Fowler, Continuous Integration: https://martinfowler.com/articles/originalContinuousIntegration.html
- CNCF Platforms whitepaper: https://tag-app-delivery.cncf.io/whitepapers/platforms/
- GitHub Copilot introduction archive: https://web.archive.org/web/20220621205502/https:/github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/

### Current research and practice

- SWE-bench: https://arxiv.org/abs/2310.06770
- SWE-agent: https://proceedings.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf
- DORA 2025 report: https://dora.dev/dora-report-2025/
- METR early-2025 study: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- METR 2026 update: https://metr.org/blog/2026-02-24-uplift-update/
- ContextBench: https://contextbench.github.io/
- Agent Retrieval Bench: https://agent-retrieval-bench.github.io/
- Lost in the Middle: https://aclanthology.org/2024.tacl-1.9/
- Coding-agent context files, arXiv 2602.11988: https://arxiv.org/abs/2602.11988
- GitLab AI-Assisted Development Playbook: https://handbook.gitlab.com/handbook/engineering/workflow/ai-assisted-development/
- GitHub spec-driven development example: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-using-markdown-as-a-programming-language-when-building-with-ai/
- DORA small-batch guidance: https://dora.dev/capabilities/working-in-small-batches/

### Brain-2 starting points

- `03-resources/software-engineering/engineering-agent-doctrine-moc.md`
- `03-resources/software-engineering/arxiv-2602-11988-context-files.md`
- `03-resources/software-engineering/ai-agents-need-playable-specs-not-vibes.md`
- `03-resources/programming/agentic-workflows/agentic-anti-patterns.md`
- `03-resources/programming/agentic-workflows/agentic-manual-testing.md`
- `03-resources/programming/validation-contracts-as-pre-implementation-specifications.md`
- `03-resources/programming/structured-handoffs-for-context-preservation.md`
- `03-resources/programming/durable-execution-for-long-running-agent-workflows.md`
- `03-resources/programming/missions-multi-agent-systems-that-ship-for-days-luke-alvoeiro-factory.md`
- `03-resources/concepts/mental-models-for-agentic-harness-design.md`

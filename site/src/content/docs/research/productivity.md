---
title: Productivity Research
description: What recent studies say about speed and throughput.
---

Artificial intelligence (AI) coding productivity results vary by task, developer, repository, and tool generation. Treat headline speed claims as hypotheses until they have been tested on your codebase, task mix, and review process.

## Key Findings

- **Research-backed — METR early-2025 randomized controlled trial:** The research nonprofit METR studied 16 experienced open-source developers working on 246 real issues from repositories they knew. With the early-2025 AI tools in the study, developers took 19% longer than without AI, even though they expected and perceived speedups. The result applies to that cohort, those mature open-source repositories, and that tool generation; it should not be generalized to all developers, greenfield work, or later tools.
- **Early / uncertain evidence — METR 2026 update:** METR's later uplift update covered 57 developers, 143 repositories, and 800+ tasks. METR reports that the newer evidence is weak because task selection, concurrent work, and time-measurement problems make the comparison noisy. The update provides weak evidence that newer tools improve results, not a settled productivity estimate.
- **Organizational report evidence — DORA 2025:** The DevOps Research and Assessment (DORA) program's organizational conclusion is that AI acts as an amplifier. Teams with strong delivery practices can benefit more; teams with weak feedback loops, unclear ownership, or poor quality controls may amplify those problems instead.

## Why Results Conflict

- Studies measure different work: greenfield generation, maintenance, bug fixing, refactoring, code review, and documentation are not interchangeable.
- Tool setup, model generation, context quality, and developer skill change the result.
- Surveys measure adoption and sentiment. They do not establish causal productivity benefit.
- Organizational practice matters: tests, review norms, deployment friction, and incident feedback can dominate the tool effect.

## Practical Local Pilot

Run a small pilot before changing policy or targets.

1. Pick representative tasks and segment them by type: bug fix, small feature, refactor, test creation, documentation, dependency update, and exploratory investigation.
2. Randomize or alternate comparable tasks between assisted and unassisted workflows where practical.
3. Measure active developer time separately from calendar lead time. Record interruptions and concurrent work so time data is not silently inflated or hidden.
4. Track lead time from task start to merged change.
5. Track review and rework: review rounds, reviewer time, requested changes, reverted changes, and follow-up fixes.
6. Track defects: failed tests, escaped bugs, incidents, security findings, and post-merge fixes.
7. Ask developers and reviewers for satisfaction and perceived cognitive load, but keep those results separate from measured delivery and quality data.
8. Compare results by task segment. A tool may help test generation while slowing familiar maintenance work.

Do not use generated lines of code as the primary metric. It rewards output volume rather than accepted, maintained changes.

## Sources

- METR early-2025 RCT: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- METR 2026 uplift update: https://metr.org/blog/2026-02-24-uplift-update/
- DORA 2025 report: https://dora.dev/dora-report-2025/

---
title: Adoption Signals
description: Use adoption, trust, and integration signals without mistaking them for evidence of benefit.
---

:::note[Freshness metadata]
Reviewed: August 2026. Surveys, product availability, and integration support change quickly. Verify current primary sources before using a signal in policy or procurement.
:::

Adoption evidence answers questions about use, sentiment, and availability. It does not show that a workflow improves productivity, quality, learning, or delivery.

Use this page to decide what a team should investigate or measure next—not whether it should adopt a product.

## Signals to Use Carefully

### Organizational research

The 2025 DevOps Research and Assessment (DORA) report describes artificial intelligence as an amplifier of an organization's existing strengths and weaknesses. This supports reviewing the surrounding delivery system rather than treating tool access as the intervention.

DORA is an organizational research program run by Google Cloud. Its report can inform hypotheses about team systems; it does not establish the result of your repository, task mix, controls, or rollout.

### Vendor survey

Sonar's 2026 State of Code Developer Survey covers more than 1,100 professional developers. Respondents reported broad use, uneven trust, and substantial verification work.

This is self-reported evidence published by a code-quality vendor. It can identify questions for a pilot, but it is not an independent causal estimate of productivity or defects. Do not transfer its percentages to a different organization without local measurement.

### Integration availability

The Model Context Protocol (MCP) documents broad support across assistants, development tools, data sources, and tool servers. That is evidence that a connection pattern is available. It is not evidence that a particular server is safe, useful, maintained, or appropriate for a repository.

Treat product and protocol availability as a reason to inspect data and authority paths, not as a reason to enable them.

## What to Measure Locally

Separate usage from outcomes:

- **Usage:** which task types, repositories, and workflow modes people actually use
- **Verification load:** review time, review rounds, failed checks, and unauditable changes
- **Delivery:** active task time, rework, completion rate, and blocked work
- **Quality:** escaped defects, security findings, rollback, and maintainability concerns
- **Control health:** policy exceptions, permission expansions, incidents, and disabled safeguards
- **Experience:** where developers and reviewers report useful help or additional friction

Segment results by task type and risk. An aggregate usage rate can hide a workflow that helps documentation tasks and harms ambiguous refactors.

## How Signals Affect a Rollout

Use an external signal to form a question, then test it in a bounded pilot.

| Signal | Question for the team | Evidence needed before expansion |
|---|---|---|
| usage is increasing | Which tasks are people delegating, including unapproved use? | task-level usage plus policy exceptions |
| reviewers report low trust | Which outputs require the most rework or cannot be audited? | review time, failed checks, defects, reviewer notes |
| a new integration is available | What data and actions does it add to the workflow? | threat model, permission map, provenance, revocation test |
| a vendor reports productivity gains | Does the same outcome appear in our task mix? | baseline, comparable pilot tasks, verification and quality results |

Do not expand because a signal is popular or because a survey reports confidence. Use the pilot decision in [Governance and Rollout](/ai-coding-primer/team/governance/) to expand, modify, or stop based on observed evidence.

## Sources and Limits

- [DORA 2025 report](https://dora.dev/dora-report-2025/) — organizational research; useful for system-level hypotheses, not a guarantee for one team
- [Sonar 2026 State of Code Developer Survey](https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/) — vendor-published, self-reported survey of more than 1,100 professional developers
- [Model Context Protocol documentation](https://modelcontextprotocol.io/) — protocol capabilities and support, not independent outcome or security evidence

## Next Steps

- [Governance and Rollout](/ai-coding-primer/team/governance/) — run and evaluate a bounded pilot
- [Productivity Research](/ai-coding-primer/research/productivity/) — interpret causal and observational productivity evidence
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/) — review quality and security findings
- [Team Threat Model](/ai-coding-primer/team/security-risks/) — map new integrations and authority before approval

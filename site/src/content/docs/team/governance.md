---
title: Governance and Rollout
description: Define policy, permissions, and verification for team AI coding workflows.
---

Team adoption needs policy before broad tool access. The important decisions are workflow shape, data boundary, permissions, and verification requirements.

This page provides a compact governance model for team AI coding use. Governance owns policy, approvals, pilot decisions, and expansion decisions. The [Team Threat Model](/ai-coding-primer/team/security-risks/) owns the workflow threat and control analysis that informs those decisions.

## What Governance Should Define

A useful policy defines:

- which workflows are allowed
- where code and data can go
- which repositories or data classes are in scope
- what permissions agents can receive
- what verification is required before merge
- who approves pilots, exceptions, expansion, and stop decisions
- how exceptions are approved and reviewed
- how the rollout can be reversed or narrowed

A long vendor checklist is not enough if it does not answer those questions.

## Start with Workflow, Risk, and Repository Readiness

Before comparing vendors, decide:

1. Which workflow shapes are allowed?
2. Which deployment boundaries are allowed?
3. Which repositories, clients, or data classes are excluded?
4. Which agent permissions require approval?
5. What must be verified before AI-authored code is merged?
6. Which repositories have enough feedback and recovery controls for delegated work?

These decisions reduce the tool field without relying on current feature rankings.

Repository readiness is not a maturity contest. A team is not "better" because it allows more autonomy. A high-risk repository may correctly require strict human gates even when the team has excellent engineering practice.

## The Four Policy Questions

### 1. Where can code go?

Define whether the team allows:

- consumer hosted tools
- enterprise hosted tools
- BYOK workflows
- local or self-hosted tools
- regulated, client, or sensitive repositories

### 2. What permissions can agents have?

Define whether agents can:

- read only the current project
- write files
- run terminal commands
- access the network
- install packages
- use MCP servers, browser tools, or plugins
- operate only inside a sandbox

### 3. What verification is mandatory?

At minimum, define whether AI-authored changes require:

- human diff review
- tests or build checks
- typecheck or lint
- security scanning
- dependency review
- PR explanation for non-trivial changes

If verification is not defined, review standards will vary by person and task.

### 4. How will the rollout be evaluated?

Track signals such as:

- review time
- rework rate
- defect rate
- security findings
- developer-reported friction
- policy exceptions

Do not use code volume or prompt count as the primary measure.

## Repository Readiness Check

Use this check before giving agents write access, terminal access, or long-running tasks.

| Dimension | Readiness question | If weak, reduce autonomy by... |
|---|---|---|
| Repeatable environment | Can a new developer or agent install, build, and run focused checks from documented commands? | limiting agents to read-only research or small edits |
| Test speed and depth | Are there fast focused tests plus broader checks before merge? | requiring human-authored tests or manual review before implementation |
| Static and architecture checks | Do type, lint, dependency, API, or architecture rules catch common mistakes? | narrowing file scope and adding reviewer approval for boundary changes |
| Security controls | Are secrets, sensitive data, package installs, network access, and tool provenance controlled? | disabling network/package actions or requiring security approval |
| Ownership and review | Is there a clear owner for each affected area and a required review path? | routing changes through an accountable human before merge |
| Observability and rollback | Can the team detect, revert, or roll back a bad change? | blocking autonomous deployment or data changes |
| Action logs and spending limits | Are commands, tool calls, approvals, and cost or time budgets recorded? | adding command logs, stop rules, and spending caps |

A repository can be ready for one workflow and not another. Documentation edits may need little infrastructure; auth changes, migrations, and deployment automation need stronger controls.

## Autonomy Policy by Task Risk

Describe autonomy by allowed action and required control, not by team status.

| Mode | Allowed actions | Required controls |
|---|---|---|
| Read-only assistance | explain code, summarize docs, draft plans | data boundary, no file writes, cited sources or file paths |
| Local draft edits | edit project files in a developer workspace | human diff review, focused tests or build where available |
| Verified bounded tasks | implement scoped issues and run checks | written spec, file or module boundary, mandatory tests/build, command log |
| Isolated agent work | work in a branch or worktree, possibly async | harness state, retry budget, independent validation, reviewer-owned merge |
| High-permission operations | package installs, networked tools, MCP/browser automation, deployment-adjacent changes | explicit approval, sandboxing, audit trail, rollback plan, security or owner review |
| Irreversible or production-impacting actions | migrations, data modification, secret/config changes, production deployment | human approval at the action point, change record, monitoring and rollback/restore plan |

Teams may permanently require stricter modes for sensitive systems. That is a policy decision, not a failure to advance.

## Minimal Approval Matrix

Use a matrix like this before broad rollout.

| Use case | Default approval | Permission boundary | Required verification |
|---|---|---|---|
| Learning, docs, local experiments | individual allowed | no secrets, no customer data, no production credentials | human review before reuse |
| Low-risk feature or bug work | team policy allowed | project-scoped read/write; normal package/network rules | tests or build checks plus diff review |
| Refactors in production repos | tech lead or reviewer approval | approved files or module scope; no behavior changes without spec | characterization tests, focused diff review, rollback path |
| Dependency, auth, payment, data-handling changes | explicit senior/security approval | package installs and networked tooling require approval | tests, security review, dependency scan, PR explanation |
| Sensitive, regulated, or client repositories | approved tool and deployment boundary only | no hosted consumer tools unless contractually approved | policy check, audit trail, required human review |
| High-permission agents, MCP servers, plugins, or browser automation | explicit approval per workflow | sandboxed; least privilege; network and filesystem access enumerated | tool provenance review, command log, rollback plan |

The exact rows vary by organization. Approval should depend on repository risk, data exposure, and agent permissions.

## Minimum Governed Pilot

A pilot should be small enough that the team can stop it without disrupting delivery. Choose the review date, task cap, owners, workflow, repository boundary, and stop conditions before launch.

The following example instantiates the policy template later on this page.

### Scope and workflow

Use one internal documentation or test-support repository that passes the readiness check and [Team Threat Model](/ai-coding-primer/team/security-risks/). Allow attended sessions for small documentation fixes, test updates, and tooling bugs only when they do not touch authentication, customer data, production services, deployment, billing, or other excluded boundaries. Also exclude regulated data, production configuration, migrations, dependency changes, cross-repository work, and releases.

### Permissions and verification

Set each boundary separately:

- **Read:** project files required to understand the named task.
- **Write:** only files or directories listed in the task.
- **Commands:** existing focused checks plus approved build, type, or lint commands.
- **Network and extensions:** disabled; package installation, MCP or plugin use, browser automation, and external service calls end the pilot task and require a separate decision under the approval matrix.
- **Credentials:** no production credentials, cloud profiles, publishing tokens, or persistent browser sessions.

Apply normal pull-request review, branch protection, and repository-native checks. Reviewers may reject a diff they cannot explain or audit.

### Owners and evidence

Name four roles before launch:

- a pilot owner who can change or stop the pilot
- a human change owner who remains accountable for each submitted diff and its verification evidence
- the normal repository reviewer
- a security or incident owner connected to the organization's response process

Before launch, record any available baseline from comparable tasks and define what findings would block expansion. During the pilot, record active developer time, reviewer time, review rounds, rework, failed checks, defects, security findings, policy exceptions, and developer or reviewer friction. Do not use generated lines of code or prompt count as success measures.

### Stop and incident rules

Define a retry budget before launch. Stop an individual task when authority must expand, prohibited credentials or external actions become necessary, unrelated files change, that budget is exhausted without better evidence, or the human owner cannot explain the diff.

Pause or narrow the whole pilot after suspected data exposure, malicious or unexplained tool behavior, repeated exceptions, unauditable changes, increased defects, or review cost that outweighs observed benefit. Activate the organization's incident process and use the containment checklist in [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/#if-you-suspect-compromise) to stop triggers, isolate the environment, preserve evidence, revoke credentials, audit effects, and restore from a known state.

### Review decision

Choose a review date and task cap before launch. For example, review after four weeks or 20 completed tasks, whichever comes first. Scale the cap down when repository risk or incident blast radius is higher. At review, use defect and rework findings, review cost, policy exceptions, security findings, and reviewer confidence to choose one outcome:

- **Expand:** add a named task or repository class only when the evidence and controls support it.
- **Modify:** narrow tasks, permissions, tools, or verification and run another capped pilot.
- **Stop:** end the workflow when measured cost, defects, security findings, or control failures outweigh the benefit.

The sample numbers are pilot parameters, not a maturity target or default. The same structure can govern an editor assistant, terminal agent, or hosted workflow once its data path and authority are recorded.

## Rollout Pattern

1. Approve a bounded pilot with named owners, controls, measures, stop rules, and a review point.
2. Review evidence before standardizing; do not expand because the tool merely felt faster.
3. Publish approved workflow shapes, deployment boundaries, permission rules, and verification requirements.
4. Add repositories only after readiness and threat controls are reviewed. Higher-risk repositories may keep stricter gates permanently.
5. Revisit terms, exceptions, permissions, and internal guidance on a fixed cadence.

## Minimal Team Rollout Policy Template

Use this as a starting point.

```md
# AI Coding Policy

## Scope
This policy applies to AI-assisted coding, code review, debugging, refactoring, documentation, and agentic tooling used on company repositories.

## Approved workflow shapes
- Low-risk repositories: editor assistant, AI IDE, or terminal agent allowed with normal review.
- Sensitive repositories: approved tools only; hosted consumer tools are not allowed unless explicitly approved.
- High-permission agent workflows: sandbox required; network access must be explicit.

## Data boundaries
- Do not paste secrets, credentials, customer data, or regulated data into unapproved tools.
- Client or regulated code requires approved deployment boundaries and current vendor terms.
- Treat prompts, file contents, tool outputs, and screenshots as data exposure events.

## Permission rules
- Read access is project-scoped by default.
- Write access requires diff review.
- Package installs, MCP servers, plugins, browser tools, and networked commands require explicit approval.
- Sudo, home-directory access, and broad filesystem access are prohibited outside isolated environments.

## Verification requirements
Every non-trivial AI-authored change must include:
- human diff review
- relevant tests or build checks
- typecheck/lint where available
- security scan when dependencies, auth, data handling, or network behavior changes
- PR note explaining verification performed and any tool-assisted assumptions or risks

## Review and rollback
- Reviewers may ask for AI-generated diffs to be split or regenerated if scope is unclear.
- Every merged AI-assisted change must have a normal rollback path.
- Suspected data exposure or malicious tool behavior escalates to security immediately.

## Cadence
- Re-review approved tools, privacy terms, benchmark assumptions, and policy exceptions monthly or quarterly.
```

Adapt the scope and risk tiers to your organization. The important requirement is that permissions, data boundaries, and verification are explicit before broad rollout.

## Failure Modes

| Failure mode | What it looks like | Correction |
|---|---|---|
| Tool-first rollout | product selection before policy | set workflow and risk boundaries first |
| Permission creep | agents gradually receive broader access | require explicit permission tiers and review |
| Autonomy as status | teams treat higher autonomy as proof of maturity | choose autonomy from repository risk and controls |
| Verification theater | AI use expands while review standards remain vague | define checks by risk level |
| Weak repository feedback | agents can edit but cannot get fast evidence | improve setup/tests or keep tasks smaller and more supervised |
| Stale policy | retention or privacy assumptions come from old docs | review on a fixed cadence |
| One policy for every repository | toy projects and sensitive systems use identical rules | tier by repository and data risk |

## Related Pages

- [Privacy Review Framework](/ai-coding-primer/security/privacy-comparison/) — vendor terms, data handling, and procurement review
- [Team Threat Model](/ai-coding-primer/team/security-risks/) — workflow threats and required controls
- [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/) — technical inspection and containment
- [Stack Evaluation Criteria](/ai-coding-primer/tools/comparison/) — use after workflow and risk boundaries are clear
- [Adoption Signals](/ai-coding-primer/research/adoption-trends/) — adoption evidence and caveats
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/) — quality and security findings

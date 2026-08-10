---
title: Governance and Rollout
description: Define policy, permissions, and verification for team AI coding workflows.
---

Team adoption needs policy before broad tool access. The important decisions are workflow shape, data boundary, permissions, and verification requirements.

This page provides a compact governance model for team AI coding use.

## What Governance Should Define

A useful policy defines:

- which workflows are allowed
- where code and data can go
- which repositories or data classes are in scope
- what permissions agents can receive
- what verification is required before merge
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

## Rollout Pattern

### Phase 1: Bounded pilot

- choose one or two workflow shapes
- use low-to-medium risk repositories
- define mandatory verification checks
- review outcomes after a short period

### Phase 2: Standardize the baseline

- publish approved workflow shapes
- publish allowed deployment boundaries
- publish minimum review and verification rules
- provide starter context files and setup guidance

### Phase 3: Expand by risk tier

- add repositories only after pilot evidence and readiness are reviewed
- separate low-risk and high-risk usage patterns
- add stronger controls before granting broader permissions

### Phase 4: Review on a cadence

- revisit tool policy quarterly
- revisit privacy and retention assumptions on a fixed schedule
- remove stale internal guidance
- review exceptions and permission expansions

## Default Team Rules

These defaults are suitable for many teams:

- AI-generated code is not exempt from review.
- Non-trivial changes require verification before merge.
- Sensitive repositories require tighter deployment and permission boundaries.
- Vendor claims are not policy; current contracts and live docs are.
- Broad agent permissions require explicit approval.
- Reversible edits and irreversible actions need different gates.
- Package installs, MCP servers, plugins, and browser tools are supply-chain events.
- Long-running or high-permission agents need action logs and stop budgets.

## What Belongs in Team Policy

Keep the policy short enough to use. It should cover:

- approved workflow shapes
- approved deployment models
- repository and data risk tiers
- verification requirements
- permission boundaries
- security escalation path
- review cadence for tools and provider assumptions

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

- [Workflow and Stack Criteria](/ai-coding-primer/tools/comparison/) — use after workflow and risk boundaries are clear
- [Team Threat Model](/ai-coding-primer/team/security-risks/) — threat patterns behind the controls
- [Adoption & Trends](/ai-coding-primer/research/adoption-trends/) — adoption evidence and caveats
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/) — quality and security findings

## Summary

Team AI coding policy should define allowed workflows, data boundaries, permissions, verification, repository readiness, autonomy gates, and review cadence. Tool selection comes after those constraints are known.

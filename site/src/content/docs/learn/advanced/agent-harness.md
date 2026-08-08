---
title: Agent Harness
description: How to keep long-running AI coding tasks stable across sessions.
sidebar:
  order: 2
---

Long-running agent work needs persistent state. A harness is the small set of files, checks, and rules that lets work continue after context compaction, session reset, or handoff.

:::note[Evidence status]
- `Practitioner-backed` - [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)

The exact file set and harness shape here are editorial guidance built from those patterns rather than a single official standard.
:::

## What a Harness Is

A harness is structure around the model that keeps work legible and recoverable. It includes selected context, tool permissions, saved state, constraints, checks, logs, and approval rules.

The point is not to create a large framework. The point is to make the next action, the stopping condition, and the recovery path visible outside the chat transcript.

## Running Example: Token Refresh Without Changing Login

Suppose the task is:

> Add token refresh for expired API sessions. Do not change first-time login, cookie names, or the public API response shape. The change is done when auth tests pass and an expired-token request refreshes the session in an integration test.

A useful harness for this task answers seven questions before the agent starts editing.

### 1. What context is selected?

Give the agent the spec, likely files, and one nearby pattern. Do not preload the whole repository.

```markdown
# spec.md

## Behavior
When an access token is expired but the refresh token is valid, refresh the access token and retry the request once.

## Non-goals
- Do not change login behavior.
- Do not rename auth cookies.
- Do not change the public API response shape.

## Likely files
- `src/auth/middleware.ts`
- `src/auth/tokens.ts`
- `tests/auth/session.test.ts`

## Done signal
- `npm test -- auth`
- `npm run build`
```

The agent can retrieve secondary files as needed. The harness records the first search target so a resumed session does not restart from a blank page.

### 2. What tools and permissions are allowed?

For this task, file reads, project-scoped edits, and test commands are reversible. Installing packages, changing environment variables, touching production credentials, or running migrations are not part of the task.

```markdown
# permissions.md

Allowed without approval:
- read project files
- edit files under `src/auth/**` and `tests/auth/**`
- run `npm test -- auth`, `npm run build`, and read-only search commands

Requires approval:
- package installation
- database migration
- network access outside package metadata already in lockfile
- changes to deployment, secrets, or production configuration
```

### 3. What state must survive a reset?

Use deterministic bookkeeping: a checklist, command log, and decision log that a new session can reread.

```markdown
# PLAN.md

- [x] Add failing integration test for expired access token + valid refresh token.
- [ ] Implement retry path in auth middleware.
- [ ] Run auth tests and build.
- [ ] Record review risks.

# STATE.md

## Decisions
- Refresh happens in middleware, not in route handlers, to keep API handlers unchanged.

## Commands
- `npm test -- auth` failed before implementation: missing refresh retry path.

## Touched files
- `tests/auth/session.test.ts`
```

Do not rely on a model remembering this from a long transcript. Make the files short enough to inspect during review.

### 4. Which constraints and checks stop the loop?

The harness should state both executable checks and policy checks:

- executable: `npm test -- auth`, `npm run build`
- review: no weakened tests, no public API shape change, no token stored outside approved cookies
- architecture: refresh logic stays in the auth boundary
- security: no token logging, no secrets in fixtures

A green test is necessary evidence, not full approval. The reviewer still checks the diff against the constraints.

### 5. Which actions need human approval?

Separate reversible work from actions that are expensive or impossible to undo.

| Action | Default gate | Why |
|---|---|---|
| Add or edit a focused test | agent may proceed | reversible and reviewable |
| Edit auth middleware inside task scope | agent may proceed | bounded by tests and diff review |
| Change a public API response | human approval first | external clients may depend on it |
| Add a dependency | human approval first | supply-chain and maintenance cost |
| Run a migration or touch production data | human approval first | irreversible or operationally risky |
| Change secrets, deployment, or cloud resources | human approval first | security and blast-radius risk |

The gate is about action risk, not whether the agent sounds confident.

### 6. What telemetry and budgets are recorded?

Long-running work needs enough logging to diagnose failure without preserving every token of conversation.

Record:

- commands run and exit results
- files changed
- failed attempts that affected the working tree
- test duration if slow tests constrain the loop
- cost or token totals when the tool exposes them
- timebox or retry budget

Example rule: after two failed implementation attempts or one hour without a passing focused test, stop and ask for human review. A budget prevents an agent from spending more inference on the same wrong assumption.

### 7. How does recovery work?

A recovery rule tells the agent what to do when the session is polluted or the working tree becomes hard to reason about.

```markdown
# recovery.md

Stop and summarize when:
- the same test fails after two different fixes
- the agent wants to broaden scope beyond `src/auth/**`
- generated changes modify unrelated files
- a command fails for environment reasons

Recovery steps:
1. Save current failing command and error summary in `STATE.md`.
2. List touched files and unresolved assumptions.
3. Revert unrelated edits or ask a human before continuing.
4. Restart with `spec.md`, `PLAN.md`, `STATE.md`, and the current diff only.
```

Without this rule, a long session can accumulate stale explanations and partial fixes. With it, the next session can resume from evidence instead of chat history.

## Repository Readiness

A harness works best when the repository gives the agent quick, reliable feedback. Before granting broad autonomy, check whether the repository has:

- repeatable setup commands
- focused tests that run quickly enough for iteration
- type, lint, architecture, or dependency checks that catch common mistakes
- documented ownership and review paths
- clear boundaries for secrets, data, and network access
- rollback or revert procedures for deployed changes
- a place to store action logs and spending limits

A weak repository can still use an agent, but the harness should reduce permission and increase human review. Autonomy follows available controls; it is not a reward for sounding advanced.

## Examples in Current Tools

- **Anthropic long-running agents** - initializer and coding-agent workflows with durable progress artifacts and incremental commits
- **Codex / AGENTS.md** - project instructions and verification commands discovered from the repo itself
- **Cline / implementation plans** - structured planning files used before deep execution
- **GitHub Spec Kit / plan.md** - project metadata and plan artifacts used to keep agent context aligned

## When to Use a Harness

Use a harness for:

- multi-session feature work
- long refactors
- parallel subagent research
- tasks with multiple verification steps
- work that may be handed to another agent or developer
- tasks with irreversible gates or high-permission tools

## When to Skip It

A harness is usually unnecessary for:

- small one-file edits
- typo fixes
- tasks completed before context becomes noisy

## Next Steps

- [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/)
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)
- [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/)

## Supporting Evidence

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [OpenAI Codex `AGENTS.md` implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs)
- [Cline deep-planning prompt variants](https://github.com/cline/cline/tree/main/apps/vscode/src/core/prompts/commands/deep-planning/variants)
- [GitHub Spec Kit agent configuration module](https://github.com/github/spec-kit/blob/main/src/specify_cli/_agent_config.py)
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/)
- [Productivity Research](/ai-coding-primer/research/productivity/)

## Bibliography

- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents/)
- [OpenAI: Harness engineering](https://openai.com/index/harness-engineering/)
- [OpenAI Codex `AGENTS.md` implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/agents_md.rs)
- [Cline deep-planning prompt variants](https://github.com/cline/cline/tree/main/apps/vscode/src/core/prompts/commands/deep-planning/variants)
- [GitHub Spec Kit agent configuration module](https://github.com/github/spec-kit/blob/main/src/specify_cli/_agent_config.py)

---
title: Skills Deep Dive
description: What skills are, how they differ from MCP, and how to build them well.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


Skills are reusable instructions. They tell an agent how to approach a class of tasks.

If MCP gives the agent new hands, a skill gives it a playbook.

## What a Skill Is

A skill is usually one of these:

- a `SKILL.md` file that packages a repeatable workflow
- a project instruction file such as `AGENTS.md`, `CLAUDE.md`, or `.cursorrules`
- a command pack or slash command that wraps a recurring task
- a playbook that teaches the agent how to use tools in a specific domain

The common thread is reuse. A skill is not just a note. It is a set of instructions you expect to use again.

## Skills vs MCP

| Concept | What it gives the agent | Typical artifact | Example |
|---|---|---|---|
| MCP | access to data or external actions | server config, tool schema | GitHub MCP server, Playwright MCP, Context7 |
| Skill | a repeatable way to do work | `SKILL.md`, `AGENTS.md`, `.cursorrules`, command pack | code-review checklist, release workflow, debugging playbook |

Put differently:

- MCP answers: "What can the agent connect to?"
- Skills answer: "How should the agent use those capabilities well?"

Good systems often need both.

## Why Skills Matter

Without skills, agents tend to rediscover the same workflow every time.

That creates three problems:

1. they waste context re-learning the task shape
2. they repeat avoidable mistakes
3. they behave inconsistently across similar tasks

Skills solve that by moving repeatable judgment into durable instructions.

## Good Skill Examples

### Project instruction files

`AGENTS.md`, `CLAUDE.md`, and `.cursorrules` are the simplest skills most teams will ever need.

They are good for:

- commands the agent should run
- project gotchas
- code style rules that are not obvious from the code
- boundaries such as "never touch generated files"

### Task-specific skills

These are reusable playbooks for jobs like:

- code review
- incident writeups
- migration planning
- test generation
- release prep

They usually work best when they specify:

- inputs needed
- steps to follow
- tools to use
- output format
- failure checks

### Command packs

Sometimes a skill is just a well-packaged shortcut. Slash commands or command packs work when the task is common enough that you want a stable entry point.

## What Good Skills Include

The best skills are short, specific, and operational.

They usually include:

- when to use the skill
- what inputs to gather first
- what tools are allowed or expected
- what good output looks like
- what to avoid

If the skill is long and vague, it turns into reference noise instead of a usable playbook.

## A Minimal Skill Shape

```md
# Review Pull Request

Use this when reviewing a medium or large code change.

## Gather first
- changed files
- test results
- user-facing impact

## Check
- correctness
- scope creep
- missing verification
- risky edge cases

## Output
- 3-5 findings max
- group by severity
```

That is enough. The goal is to make the agent more consistent, not to simulate an entire operating manual.

## How Skills Evolve

Start with one repeated failure.

For example:

- the agent keeps missing the same review step
- it forgets a deployment command
- it uses the wrong framework pattern

When that happens more than once, write the smallest skill that prevents it from happening a third time.

Good skills usually grow from mistakes, not from theory.

## Where Skills Live

Different tools package them differently:

- project root instruction files
- tool-specific rules files
- dedicated `skills/` directories
- slash command configs
- internal docs the agent is told to consult

The packaging matters less than the behavior. If it changes how the agent performs a recurring task, it is functioning as a skill.

## Real Examples

- OpenAI Codex discovers `AGENTS.md` files from the repo and uses them as project instructions
- Cline uses planning prompts and command workflows to standardize deeper tasks
- LangChain's skills model frames skills as reusable instructions loaded only when needed
- Microsoft's agent framework treats skills as portable expertise packages rather than raw tool access

## Common Mistakes

- writing skills that are too long to use in practice
- putting general documentation where a short playbook would work better
- confusing a tool connection with a skill
- creating a new skill before you know the repeated failure it should prevent

## When Not to Bother

Do not create a skill for a one-off task.

Do not create a skill just because the tool supports it.

Write one when the work is recurring, error-prone, and important enough to standardize.

## Next Steps

- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/)
- [MCP Deep Dive](/ai-coding-primer/learn/advanced/mcp-deep-dive/)
- [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/)

## Bibliography

- [LangChain: Skills](https://blog.langchain.com/langchain-skills/)
- [Microsoft Agent Framework Overview](https://learn.microsoft.com/en-us/agent-framework/overview/)
- [llms.txt](https://llmstxt.org/)
- [Stripe llms.txt](https://docs.stripe.com/llms.txt)
- [OpenAI Codex `AGENTS.md` project-doc implementation](https://github.com/openai/codex/blob/main/codex-rs/core/src/project_doc.rs)

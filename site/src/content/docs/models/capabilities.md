---
title: Capability Patterns
description: Durable model capability classes for coding workflows.
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


Use this page for durable capability classes, not leaderboard snapshots. Specific rankings move too quickly to build the guide around.

## Capability Classes That Matter

### Deep reasoning models

Best for:
- multi-file changes
- architecture decisions
- debugging with several interacting causes
- long agent loops that need to recover from failure

Tradeoff:
- slower and often more expensive in time or usage budget

### Fast iteration models

Best for:
- autocomplete and short edits
- drafting tests or boilerplate
- quick review loops where latency matters more than depth

Tradeoff:
- weaker at holding long plans and resolving ambiguous requirements

### Multimodal models

Best for:
- UI implementation from screenshots or mockups
- debugging visual regressions
- working from diagrams, design files, or image-based documentation

Tradeoff:
- not every multimodal model is equally strong at coding depth

### Long-context models

Best for:
- large investigations
- broad repository mapping
- document-heavy workflows

Tradeoff:
- large context windows help only when context is selective and well-structured

### Locally operated models

Best for:
- workflows that require local inference
- offline or air-gapped environments
- teams prepared to operate model infrastructure

Tradeoff:
- hardware, serving, and maintenance constraints can limit model choice and task performance

Open weights do not establish a local or private boundary by themselves. Verify where inference, tools, logs, and supporting services run.

## How to Choose by Workflow

| Workflow | Start with this capability class | Why |
|---|---|---|
| Complex bug fix | Deep reasoning | Root-cause analysis matters more than speed |
| New feature with many moving parts | Deep reasoning | Planning and recovery matter |
| UI build from design references | Multimodal | Visual understanding changes the result |
| Tight edit loop | Fast iteration | Lower latency keeps the workflow moving |
| Large codebase exploration | Long-context | Breadth helps when paired with context hygiene |
| Work that prohibits hosted inference | Locally operated | Deployment boundaries determine which models are eligible |

## What Reasoning Effort Means

Some model APIs and tools expose a thinking, reasoning, or effort level. The setting usually changes how much inference time or reasoning budget the model can use before answering. Exact behavior and labels differ by provider and model, so `low` in one system is not directly comparable with `low` in another.

Reasoning effort is not:

- a guarantee of correctness
- the model's context-window size or stored memory
- permission to read files, use tools, or take actions
- the agent's autonomy level

A high-effort answer can still start from a bad scan, missing file, wrong requirement, or unsafe tool boundary.

### Low or minimal effort

Start here for clear, easily checked work:

- classification, formatting, and structured extraction after OCR
- autocomplete, boilerplate, and small mechanical edits
- short summaries of clean source material
- routine questions with an objective answer

### Medium effort

Use more effort when the task has several steps or requires comparison:

- comparing documents or reconciling several requirements
- explaining unfamiliar code with relevant files supplied
- bounded bug fixes with a reproducible failure
- planning a small feature with known constraints

### High effort

Reserve higher effort for ambiguity or costly mistakes:

- root-cause analysis across interacting systems
- architecture, migration, or security trade-offs
- conflicting evidence or incomplete requirements
- recovery after a simpler attempt failed for a reasoning-related cause

Start with the lowest level that reliably meets the acceptance check. Raise it when the model misses relationships despite having the right input and tools. Do not raise it to compensate for unreadable documents, missing context, or permissions. Lower it when extra latency or usage produces no measurable improvement.

## Evaluate the Fit

Do not choose from the class description alone. Test one or two representative tasks from the intended workflow:

1. Give each candidate the same starting state, task boundary, and acceptance evidence.
2. Keep permissions and external tools equivalent.
3. Record whether the result meets the requirement, passes the relevant checks, and stays within scope.
4. Record human review time, rework, failed attempts, latency, and usage consumption.
5. Prefer the least costly capability class that repeatedly clears the task's quality and control requirements.

A single successful demonstration is not enough for a team standard. Use more than one task, and include a failure or ambiguous requirement when recovery matters.

## Combine Classes by Role

One model does not need to serve every part of a workflow:

- use a deeper reasoning class for ambiguous debugging, planning, or recovery
- use a fast iteration class for completion and bounded edits
- use a locally operated or otherwise approved path when the data boundary dominates the decision

Use multiple classes only when the switching and configuration cost is lower than the measured benefit.

## Context Reality

Advertised context is not the same thing as reliable context. Once the prompt gets noisy, even very large windows help less than people expect.

- prefer selective retrieval over giant prompt dumps
- treat long context as a tool for breadth, not permission to include everything
- keep core rules pushed into project context files and retrieve the rest on demand

See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) for the workflow implications.

## Input Capabilities Are Separate

Reasoning effort does not add an input type that the model or product does not support. Document processing may require text extraction, OCR, layout parsing, or image input. Voice may come from dictation, a real-time audio model, or the surrounding application. Computer use requires an agent surface with browser or desktop tools and explicit permissions.

Choose those input and action paths first in [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/#match-the-input-and-action-surface), then evaluate the model on representative tasks.

## What This Page Intentionally Does Not Do

- maintain live model rankings
- promise a single "best model"
- freeze benchmark snapshots into durable guidance

For time-sensitive benchmark details, use [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/) and confirm current data before making team-level decisions.

## Evidence Status

`Synthesis`: these classes organize recurring workflow requirements. They are not one benchmark's official ontology, and the page does not claim that one class will outperform another on every repository.

## Next Steps

- [Stack Evaluation Criteria](/ai-coding-primer/tools/comparison/): choose the workflow, access model, and operating boundary
- [Billing Models](/ai-coding-primer/models/pricing/): understand subscription, usage, request, compute, and contract billing
- [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/): interpret time-sensitive benchmark evidence

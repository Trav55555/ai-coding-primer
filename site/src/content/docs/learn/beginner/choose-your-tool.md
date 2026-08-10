---
title: Choose a Workflow and Stack
description: Pick a workflow, input surface, access model, and stack without starting from vendor rankings.
sidebar:
  order: 3
---

Choose the way you want to work before comparing products. The right stack is the lightest one that fits the task, data boundary, and verification loop.

By the end of this page, you should be able to name:

- the workflow shape you need
- the input and action surfaces the task requires
- the acceptable access model
- the checks that would make a tool usable in practice

## Start With the Workflow Shape

| If this describes the work | Start with | Main trade-off |
|---|---|---|
| Most work happens in one editor | Integrated AI IDE | low setup burden; more opinionated environment |
| You want to keep your current editor | AI extension | preserves habits; workflow can feel fragmented |
| You work through tests, scripts, diffs, and commands | Terminal agent | explicit control; steeper terminal learning curve |
| Work must continue in the background or arrive through chat/mobile | Agent platform or gateway | persistent operation; much larger security and operations surface |
| Code cannot leave a controlled boundary | Local or controlled version of one of the above | stronger boundary; hardware or operational cost |
| A team will standardize the workflow | Governed pilot of one or two shapes | policy and review work before broad access |

This table chooses the operating surface. To classify the work itself as a bug fix, feature, refactor, or exploration, use [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/).

Use an agent platform only when the job needs scheduled work, persistent memory, multiple communication channels, or coordination beyond one repository. For ordinary repository editing, a narrower editor or terminal workflow is easier to audit. See [Agent Platform Boundaries](/ai-coding-primer/reference/agent-platform-boundaries/) for the larger threat and operations model.

## Match the Input and Action Surface

Some “which is best?” questions concern the surrounding product rather than only the model.

### Documents and OCR

- For born-digital PDF or office files, prefer direct text and structure extraction over optical character recognition (OCR).
- For scans and photographs, require OCR or image input and test rotation, handwriting, poor contrast, tables, and multi-column layouts.
- For high-volume forms or invoices, a dedicated document parser may produce more stable fields and coordinates than a general chat workflow.
- For interpretation across text, tables, and images, use a multimodal model after testing the extraction path.

Evaluate representative documents. Check exact fields, page references, table structure, omissions, and unreadable regions. A fluent summary can hide recognition errors.

### Voice

“Voice support” can mean dictation, a live voice conversation, or spoken output. Test the surface you need for code symbols, filenames, interruption, transcript editing, latency, background noise, and audio retention. A strong text model does not guarantee a good voice interface.

### Browser or computer use

Computer-use agents suit repetitive, observable, reversible tasks such as collecting information from approved sites, entering test data, or following a documented internal procedure.

Prefer browser-only or application-specific access. Require confirmation before sending, publishing, purchasing, deleting, changing account settings, or handling credentials. Use an API, script, or narrower tool when it can perform the same job more predictably.

### Everyday assistance

For explanation, drafting, summarization, planning, and short questions, prioritize low friction, acceptable data terms, and easy correction. For actions on files, accounts, or websites, prioritize permission controls, logs, and reversibility over conversational polish.

Use [Capability Patterns](/ai-coding-primer/models/capabilities/) to choose model capabilities and reasoning effort after the input and action surface is clear.

## Choose the Access Model

| Access model | What changes | Main caveat |
|---|---|---|
| Hosted account | the product manages model access | less control over provider and retention boundaries |
| Bring your own key (BYOK) | you choose provider credentials | more setup; provider terms still apply |
| Local | inference runs on your infrastructure | hardware and capability constraints |
| Self-hosted enterprise | the organization controls deployment | operational and procurement burden |

A local model does not make every tool, index, log, or extension local. Map the complete data path.

## Pressure-Test the Shortlist

Compare no more than a few candidates on:

1. **Verification ergonomics:** Can you inspect diffs and run the checks that matter?
2. **Privacy boundary:** Where can code, prompts, tool output, audio, or documents go?
3. **Permission control:** Can you restrict files, commands, network access, and external actions?
4. **Setup burden:** Will the workflow remain understandable after configuration?
5. **Switching cost:** Can you change the tool, provider, or model without rebuilding the workflow?
6. **Usage exposure:** Can context, retries, or background work create unpredictable quotas or cost?
7. **Team fit:** Does it support the required identity, policy, review, and audit path?

Model switching is a property of the full stack. Check what happens to project rules, tools, context, billing, and data terms when the selected provider changes.

## Establish a Minimum Safe Setup

Before comparing optional features, prove one bounded workflow:

```text
Repository: local checkout with a clean Git diff
Tool access: read the repository; write only `tests/parser.test.ts`
Credentials: none
Approval required: network access, package installation, or other file changes
Done signal: `npm test -- parser.test.ts`
First task: add one missing test case; stop before production-code edits
```

Replace the file and command with repository-native equivalents. If a product makes this boundary or verification awkward, remove it from the shortlist.

## What to Check Live

Vendor features, models, quotas, prices, privacy terms, and enterprise controls change. Use product pages only as current lookup material after the workflow and boundaries are known. The [Reference Appendix](/ai-coding-primer/reference/appendix/) explains where those snapshots live and what must be rechecked.

## Next Steps

1. Establish permissions and baseline checks with the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/).
2. Run one bounded task in [Your First Session](/ai-coding-primer/learn/beginner/first-session/).
3. Apply the stack to a task type through [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) and one worked scenario.
4. For team use, apply [Governance and Rollout](/ai-coding-primer/team/governance/) before standardizing.

If you cannot classify the code or account boundary, return to the [Quick Security Checklist](/ai-coding-primer/security/checklist/) before connecting a repository.

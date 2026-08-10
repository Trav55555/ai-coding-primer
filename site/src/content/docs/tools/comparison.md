---
title: Stack Evaluation Criteria
description: Compare a short list of workflow shapes and stack options without turning the decision into a shopping spiral.
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


Use this page after [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/).

That page helps you pick a likely workflow shape. This page helps you pressure-test the shortlist.

## What This Page Is For

By the time you are here, you should already have a likely workflow shape:

- integrated AI IDE
- AI extension in your current editor
- terminal agent workflow

Some tools are broader agent platforms rather than editor or terminal coding tools. Evaluate those only if you need always-on operation, messaging gateways, persistent memory, scheduled tasks, or cross-device assistants.

If you are still deciding at the basic workflow level, go back to [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/).

## Compare Workflow Shapes by Friction and Control

| Workflow shape | Strongest at | Main friction | Best when |
|---|---|---|---|
| **Integrated AI IDE** | one unified environment for navigation, editing, and chat | more opinionated environment and more product churn | you want the easiest integrated path |
| **AI extension** | preserving your current editor habits | can feel more fragmented than a full AI-native IDE | you already like your editor and want gradual adoption |
| **Terminal agent workflow** | explicit plans, diffs, scripts, and verification loops | steeper learning curve for editor-first users | you already work in the terminal and want direct control |
| **Agent platform / gateway** | persistent assistants, chat-triggered tasks, scheduled jobs, memory, and cross-device workflows | larger security and operations surface | the task needs an always-on or multi-channel agent, not just code editing |

## Apply Operating Filters

These are filters, not separate workflow shapes:

- **local or private requirement** - can code leave your environment or not?
- **enterprise requirement** - do you need identity, policy, audit logs, or admin controls?
- **multimodal requirement** - do you need screenshots, mockups, or diagram input?
- **model-switching requirement** - do you need easy provider or model changes?

A good decision usually comes from one workflow shape plus one or two filters.

## Agent Platforms Are a Separate Category

Do not evaluate broader agent platforms with the same checklist as a local editor extension.

Broader [agent platforms](/ai-coding-primer/reference/agent-platform-boundaries/) can involve messaging gateways, scheduled execution, persistent memory, skills or plugins, and multiple execution backends. Those features can be useful, but they also add trigger surfaces and state that live beyond a single coding session.

Use an agent platform when the workflow requires one of these properties:

- the agent must be reachable from chat, mobile, or multiple devices
- work should run on a schedule or continue in the background
- memory and reusable skills are central to the workflow
- the agent needs to coordinate tools beyond a single repository

If the job is simply to edit and verify code in a repo, start with a narrower IDE, extension, or terminal agent. A smaller tool is usually easier to audit.

## Compare Access Models

| Access model | What it means | Best fit | Main caveat |
|---|---|---|---|
| Hosted account | tool manages model access for you | easiest setup | less control over provider boundaries and retention details |
| BYOK | you supply provider credentials | flexible provider choice and cost control | more setup and key management |
| Local | model runs on your infrastructure | privacy, offline, controlled environments | hardware and capability limits |
| Self-hosted enterprise | organization controls deployment boundary | regulated environments | operational overhead |

## Compare the Criteria That Actually Matter

Before you commit, compare your shortlist on:

1. **verification ergonomics** - is it easy to review diffs, run tests, and keep the loop honest?
2. **task shape** - does the work need deep reasoning, low latency, visual input, or long-running tool use?
3. **privacy boundary** - where can code go, through which provider, and under whose terms?
4. **setup burden** - how much configuration is required before the workflow is productive?
5. **switching cost** - how reversible is the tool, provider, and model choice?
6. **team rollout friction** - how well does it support policy, identity, and onboarding?
7. **usage exposure** - can long context, retries, or background work create unpredictable quotas or cost?

If a tool is impressive but makes verification awkward, it is the wrong fit for serious work.

## Inspect Switching Cost

Model switching is a property of the whole stack, not just a model picker. Check:

- whether provider choice is fixed, account-managed, or configurable
- whether switching requires UI selection, configuration changes, or a different client
- which repository rules, tools, and context survive the switch
- whether data terms and billing change with the selected provider or feature
- whether the team can reverse the decision without rewriting its workflow

Prefer a reversible setup during evaluation. Standardize only after representative tasks show that the additional configuration is worth maintaining.

## Good Decisions Usually Look Like This

- pick the lightest workflow that fits your existing habits
- prefer reversibility over premature optimization
- choose deployment boundary before chasing feature lists
- keep the shortlist small
- treat vendor pages as lookup material, not the main curriculum

## What This Page Intentionally Does Not Do

- rank specific products
- preserve live feature matrices
- compare billing models and live pricing snapshots
- freeze product claims into the core path

For product-specific details, use the vendor pages in the [Reference Appendix](/ai-coding-primer/reference/appendix/).

## Where Models and Providers Fit

Once you know your workflow shape, use these pages to narrow the stack:

- [Models vs Providers](/ai-coding-primer/models/overview/)
- [Capability Patterns](/ai-coding-primer/models/capabilities/)
- [Billing Models](/ai-coding-primer/models/pricing/)

Those pages should support the workflow decision, not replace it.

## Next Steps

- [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/)
- [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/)
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/)

---
title: Research Overview
description: Empirical findings behind AI coding outcomes.
---

This section collects the evidence behind the guide's claims.

Use it to separate measured results from adoption surveys, vendor signals, and practical synthesis.

## How to Read This Section

- Treat results as directional, not universal rules.
- Prefer first-party studies, peer-reviewed work, credible preprints, and transparent methodology.
- Check publication dates before applying a claim.
- Look at task type, participant skill, and workflow setup before copying a headline number.
- Validate important claims with your own pilot metrics.

## Claim and Evidence Map

### Productivity depends on the task and workflow

**Evidence status:** Research-backed, with strong setting limits.

METR's early-2025 randomized study found slower completion in one cohort of experienced open-source developers and repositories. Its 2026 update could not produce a reliable newer-tool estimate because selection, concurrency, and time-measurement problems changed the comparison. See [Productivity Research](/ai-coding-primer/research/productivity/) for samples, outcomes, and limitations.

**Use:** pilot representative tasks and measure active time, review, rework, defects, and experience by task type.

### Generated output still requires verification

**Evidence status:** Editorial synthesis supported by quality, security, and workflow evidence.

Studies and reports identify review burden, insecure output, and setting-dependent results. They do not establish that one verification control is universally strongest. See [Code Quality & Security](/ai-coding-primer/research/code-quality-security/).

**Use:** require evidence appropriate to the change: tests, types, builds, screenshots, security checks, or explicit expected output.

### Heavy delegation may reduce immediate mastery in some learning settings

**Evidence status:** Early / uncertain.

A 2026 Anthropic vendor-led preprint studied one unfamiliar Python task and an immediate quiz. Peer-reviewed and working-paper studies in other educational settings measured different learners, interventions, and outcomes. See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) rather than combining those effects.

**Use:** ask for explanation, prediction, and independent attempts when learning is part of the goal.

### Adoption and availability do not establish benefit

**Evidence status:** Organizational report and vendor-survey evidence.

DORA's 2025 organizational report, Sonar's 2026 self-reported survey, and current integration documentation can identify questions about rollout, review, and authority. They do not prove causal productivity or quality for a team. See [Adoption Signals](/ai-coding-primer/research/adoption-trends/).

**Use:** separate usage from delivery, quality, verification load, control health, and developer experience.

### Context and model taxonomies are practical syntheses

**Evidence status:** Editorial and practitioner synthesis, with limited early studies.

Selective context, capability classes, and workflow-first selection are decision frameworks in this guide, not settled scientific taxonomies. Where a page cites a preprint or benchmark, apply its specific task and harness limits.

**Use:** test the context, model class, and tool path on representative work instead of treating a label or context-window size as proof.

## Evidence Categories Used in the Guide

| Label | Meaning |
|---|---|
| Research-backed | Supported by empirical studies or peer-reviewed work with clear methodology |
| Organizational report evidence | Findings from a named research program or organizational report; preserve its design and limits |
| Vendor survey / benchmark evidence | Self-report or benchmark evidence produced by a vendor; useful within the stated sample and method |
| Early / uncertain evidence | Preprints, early studies, or limited updates that remain useful with explicit caveats |
| Practitioner-backed | Repeatedly observed in production workflows, tool docs, and expert practice |
| Editorial synthesis | A practical framework derived from multiple sources, not a taxonomy copied from one paper |
| Perishable reference | Useful current information that must be checked against live sources |

## What You'll Find

- [Development Practices Timeline](/ai-coding-primer/reference/development-practices-timeline/): the historical path from human computation to coding agents
- [Productivity Research](/ai-coding-primer/research/productivity/): mixed results and context-dependent gains
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/): defect and vulnerability patterns
- [Adoption Signals](/ai-coding-primer/research/adoption-trends/): usage, trust, and workflow changes
- [Learning Impacts](/ai-coding-primer/research/learning-impacts/): skill development, cognitive effects, and the performance-learning paradox

## Scope Note

Many studies measure specific cohorts, tasks, and tool setups. Adoption surveys show what developers report using; they do not prove causal benefit. If your team context differs, validate with your own pilot metrics.

The strongest claims in this guide are operational rather than brand-specific: verify outputs, control context, manage permissions, review diffs, and preserve human judgment.

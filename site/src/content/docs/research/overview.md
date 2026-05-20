---
title: Research Overview
description: Empirical findings behind AI coding outcomes.
---

This section collects the evidence behind the claims in the guide.

The main guide stays practical on purpose. These pages are where the caveats, sample limitations, and methodology notes live.

## How to Read This Section

- Treat results as directional, not universal rules.
- Prefer first-party studies, peer-reviewed work, credible preprints, and transparent methodology.
- Check publication dates before applying a claim.
- Look at task type, participant skill, and workflow setup before copying a headline number.
- Validate important claims with your own pilot metrics.

## Claim → Confidence → Evidence Map

| Claim | Confidence | Evidence | Applies To | Practical takeaway |
|---|---|---|---|---|
| AI coding productivity is context-dependent, not automatic | High | METR experienced-developer study; DORA 2025 | team adoption, brownfield work, expert workflows | Run pilots on your own codebase; measure rework and review time, not just code volume |
| Verification loops are the strongest reliability lever | High | METR caveats; Veracode security findings; practitioner convergence | bug fixes, features, refactors, agent workflows | Give agents tests, typechecks, builds, screenshots, or explicit expected output |
| AI-assisted output can increase review burden | Medium-high | Sonar survey; DORA 2025; code quality/security reports | teams with high AI adoption | Budget review time; do not treat generated code as cheaper to merge |
| AI-generated code can introduce security issues | Medium-high | Veracode GenAI report; OWASP LLM guidance; agent security preprints | production code, dependencies, agent tools | Add security scanning and human review to the default loop |
| Heavy delegation can reduce learning and debugging skill | Medium-high | Anthropic coding-learning RCT; education meta-analyses; cognitive offloading studies | learners, juniors, unfamiliar domains | Use AI as tutor and reviewer, not only as code generator |
| Tool/model choice matters less than workflow fit | Medium | mixed productivity studies; practitioner reports; rapid vendor churn | stack selection | Choose workflow shape and constraints first, then verify current tool details |
| Long context is not automatically better context | Medium | practitioner evidence; agent harness guidance; observed failure modes | large repos, subagents, long-running tasks | Prefer selective context, tool use, compaction, and persistent artifacts |
| Team governance is now the adoption bottleneck | Medium | DORA 2025; Sonar survey; enterprise rollout patterns | teams and organizations | Define allowed workflows, data boundaries, permissions, verification, and review cadence |
| Current model rankings are useful but perishable | High | benchmark leaderboards update frequently; release cadence | model selection | Use benchmarks to understand task fit, then check live leaderboards before deciding |

## Evidence Categories Used in the Guide

| Label | Meaning |
|---|---|
| Research-backed | Supported by empirical studies, peer-reviewed work, or reports with clear methodology |
| Early / preprint evidence | Plausible but not settled; useful with caveats |
| Practitioner-backed | Repeatedly observed in production workflows, tool docs, and expert practice |
| Editorial synthesis | A practical framework derived from multiple sources, not a taxonomy copied from one paper |
| Perishable reference | Useful current information that must be checked against live sources |

## What You'll Find

- [Productivity Research](/ai-coding-primer/research/productivity/): mixed results and context-dependent gains
- [Code Quality & Security](/ai-coding-primer/research/code-quality-security/): defect and vulnerability patterns
- [Adoption & Trends](/ai-coding-primer/research/adoption-trends/): usage, trust, and workflow changes
- [Learning Impacts](/ai-coding-primer/research/learning-impacts/): skill development, cognitive effects, and the performance-learning paradox

## Scope Note

Many studies measure specific cohorts, tasks, and tool setups. If your team context differs, validate with your own pilot metrics.

The strongest claims in this guide are operational rather than brand-specific: verify outputs, control context, manage permissions, review diffs, and preserve human judgment.

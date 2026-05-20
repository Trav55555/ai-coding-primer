---
title: Benchmarks That Matter
description: Understanding AI coding benchmarks and what they actually test.
---

Not all benchmarks are equal. Some are saturated, some are contaminated, and some do not reflect real-world coding. Use this page to understand what each benchmark measures, then check live leaderboards for current scores.

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: model rankings, exact scores, benchmark variants, and saturation status. This page intentionally avoids static score tables; use live benchmark links for current numbers.
:::

## Decision: No Static Score Tables

Exact benchmark scores move too quickly for a durable primer. This page keeps the interpretation layer and links to live sources.

Use static docs to answer:

- What does this benchmark test?
- Which workflow does it approximate?
- What are its limitations?
- Which live leaderboard should I check?

Use live sources to answer:

- Which model is currently first?
- What is the current score gap?
- Has the benchmark become saturated?
- Did a new benchmark variant replace the old one?

## The Essential Three

These benchmarks provide useful signal for coding work when read together.

### SWE-bench and Variants

**What it tests:** resolving real GitHub issues from existing projects.

| Variant | What it tends to measure |
|---|---|
| SWE-bench Verified | Real issue resolution on human-validated tasks |
| Harder/pro variants | More complex multi-file and longer-horizon work |

**Why it matters:** Models must understand existing code, locate the relevant files, and produce a patch that passes tests. This is closer to real maintenance work than toy function generation.

**Best for:** agentic bug fixing, brownfield work, multi-file reasoning.

**Caveats:** Popular variants can become saturated. Always check whether the leaderboard still separates frontier models meaningfully.

**Live source:** [swebench.com](https://swebench.com)

---

### LiveCodeBench

**What it tests:** competitive programming problems from sources such as LeetCode, AtCoder, and Codeforces.

**Why it matters:** It is updated with new problems released after model training cutoffs, making it more contamination-resistant than many older coding benchmarks.

**Best for:** algorithmic coding, reasoning under precise problem statements, contamination-resistant signal.

**Caveats:** Competitive programming is not the same as editing a messy production codebase. Treat it as one signal, not a full model-selection answer.

**Live source:** [livecodebench.github.io](https://livecodebench.github.io)

---

### Aider Polyglot

**What it tests:** code editing across multiple languages.

**Why it matters:** Editing existing code is more relevant to AI-assisted engineering than generating isolated functions from scratch.

**Best for:** targeted edits, instruction following, multi-language editing quality.

**Caveats:** It reflects one tool's benchmark harness and task distribution. Useful, but not universal.

**Live source:** [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards/)

---

## Supplementary Benchmarks

These provide additional signal but should not be used alone.

### HumanEval / MBPP

**What it tests:** simple function-level code generation.

**Limitation:** These are saturated and likely contaminated for frontier models.

**Use for:** sanity checks, not serious model selection.

---

### Auto-Generated or Multilingual Coding Benchmarks

**What they test:** larger sets of coding tasks across more languages, often generated or curated to reduce contamination.

**Why interesting:** They can expose language-specific weaknesses that Python-heavy benchmarks miss.

**Caveat:** Newer benchmarks may have less independent adoption or weaker comparability across model releases.

---

### General Reasoning Benchmarks

**What they test:** reasoning capabilities that may affect coding but are not coding-specific.

**Use for:** understanding limitations, not selecting a coding stack by itself.

---

## Behavioral Benchmarks

Some benchmarks test how models behave, not just whether they solve a task.

Examples include benchmarks about:

- tool use
- deception or sandbagging
- autonomy and initiative
- reporting or escalation behavior
- security-relevant behavior

These matter for autonomous coding agents because the risk is not only wrong code. It is also unwanted action.

Use behavioral benchmarks as risk signals, not as direct productivity rankings.

## Red Flags: Benchmark Claims to Ignore

| Claim | Problem |
|---|---|
| “Best coding model” from one benchmark | Coding work has multiple task shapes |
| HumanEval-only ranking | Saturated and likely contaminated |
| Vendor-only benchmark claim | Methodology may be cherry-picked |
| Old score screenshots | Model releases and benchmark variants move quickly |
| Single-number score without variance or task detail | Hides what the model is actually good at |

## How to Use Benchmarks

1. **Start from workflow shape.** Bug fixing, editing, long-context research, UI work, and algorithmic coding need different signals.
2. **Check multiple live leaderboards.** No single benchmark captures everything.
3. **Prefer contamination-resistant tests.** Newer or time-segmented tasks are usually more informative.
4. **Look at score gaps, not just rank.** A tiny lead may not matter in practice.
5. **Run your own pilot.** Your codebase, tests, tooling, and review process are the real benchmark.

## Live Sources and Aggregators

| Site | What It Tracks |
|---|---|
| [SWE-bench](https://swebench.com) | real issue resolution and variants |
| [LiveCodeBench](https://livecodebench.github.io) | time-segmented competitive programming tasks |
| [Aider Leaderboards](https://aider.chat/docs/leaderboards/) | code editing performance |
| [Artificial Analysis](https://artificialanalysis.ai) | speed, price, quality, and model comparisons |
| [LLM Stats](https://llm-stats.com) | multiple benchmark leaderboards |
| [Chatbot Arena](https://lmarena.ai) | human preference from blind voting |

## Bottom Line

Benchmarks are useful for narrowing questions, not answering procurement by themselves. Use this page to understand what to check, then use live leaderboards and your own pilot results for current decisions.

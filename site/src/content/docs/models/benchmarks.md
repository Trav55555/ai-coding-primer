---
title: Benchmarks That Matter
description: Understanding AI coding benchmarks and what they actually test.
sidebar:
  order: 5
---

Not all benchmarks are equal. Some are saturated, some are contaminated, and some don't reflect real-world coding. Here's what matters.

## The Essential Three

These benchmarks best predict real-world coding performance:

### SWE-bench (and variants)

**What it tests:** Resolving real GitHub issues from popular open-source projects.

| Variant | Difficulty | What It Measures |
|---------|------------|------------------|
| **SWE-bench Verified** | Medium | 500 human-validated tasks, ~1 hour each |
| **SWE-bench Pro** | Hard | Complex multi-file changes, commercial codebases |

**Why it matters:** Unlike synthetic puzzles, these are actual bugs that humans filed and fixed. Models must understand existing code, locate the problem, and generate correct patches.

**Current scores (Jan 2026):**
- Claude Opus 4.5: 80.9%
- GPT-5.2: 80.0%
- DeepSeek V3.2: 73.1%

**Caveat:** SWE-bench Verified is becoming saturated. SWE-bench Pro (where top models score <45%) is the new bar.

| Link | [swebench.com](https://swebench.com) |

---

### LiveCodeBench

**What it tests:** Competitive programming problems from LeetCode, AtCoder, CodeForces.

**Why it matters:** Continuously updated with new problems released *after* model training cutoffs. This makes it **contamination-resistant** — models can't memorize solutions.

**Key features:**
- Time-segmented evaluation (only test on post-training problems)
- Multi-capability: generation, self-repair, test prediction
- Updated monthly

**Current scores (Jan 2026):**
- Kimi K2 Thinking: 83.1%
- Gemini 3 Pro: 79.7%
- Grok 4: 79.0%

| Link | [livecodebench.github.io](https://livecodebench.github.io) |

---

### Aider Polyglot

**What it tests:** Code editing across 6 languages (C++, Go, Java, JavaScript, Python, Rust).

**Why it matters:** Tests *editing* existing code, not just generating from scratch. Measures if models can follow instructions and make targeted changes without breaking things.

**Current scores (Jan 2026):**
- Claude Opus 4.5: 89.4%
- GPT-5 (high): 88.0%
- Gemini 3 Pro: 82.2%

| Link | [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards/) |

---

## Supplementary Benchmarks

These provide additional signal but shouldn't be used alone:

### HumanEval / MBPP

**What it tests:** Simple function-level code generation (e.g., "write a function that reverses a string").

**Limitation:** Too easy — top models score 95%+. Saturated and likely contaminated.

**Use for:** Sanity checks, not model selection.

---

### Tencent AutoCodeBench

**What it tests:** 3,920 problems across 20 programming languages, auto-generated to avoid contamination.

**Why interesting:**
- Multilingual coverage beyond Python
- Three difficulty tiers (easy/medium/hard)
- Claude Opus 4 leads at 52.4%

**Caveat:** Newer benchmark, less adoption.

| Link | [github.com/Tencent-Hunyuan/AutoCodeBenchmark](https://github.com/Tencent-Hunyuan/AutoCodeBenchmark) |

---

### SimpleBench

**What it tests:** Common-sense reasoning that humans find easy but LLMs struggle with.

**Why interesting:** Exposes reasoning failures that coding benchmarks miss. Tests spatial, social, and adversarial reasoning.

**Current scores (Jan 2026):**
- Humans: ~85%
- Gemini 3 Pro: 76.4%
- Other top LLMs: ~62%

**Use for:** Understanding model limitations, not coding selection.

| Link | [simple-bench.com](https://simple-bench.com) |

---

## Behavioral Benchmarks

These test *how* models behave, not just what they can do:

### SnitchBench

**What it tests:** Whether models report wrongdoing when given evidence of corporate malfeasance.

**Why interesting:** Tests model alignment and tendency to "take initiative" on ethical issues. Relevant for autonomous agents with real-world permissions.

**Finding:** Grok leads, followed by Claude models. Both are significantly more likely to report issues to authorities than other models.

| Link | [snitchbench.com](https://snitchbench.com) |

---

## Red Flags: Benchmarks to Ignore

| Benchmark | Problem |
|-----------|---------|
| **HumanEval alone** | Saturated (95%+ scores), likely contaminated |
| **Self-reported evals** | Vendor benchmarks often cherry-pick favorable tests |
| **Single-number scores** | "Best at coding" claims without methodology |

## How to Use Benchmarks

1. **Check multiple benchmarks** — No single test captures everything
2. **Prefer contamination-resistant** — LiveCodeBench, SWE-bench Pro
3. **Match to your use case** — Agentic work? SWE-bench. Editing? Aider Polyglot.
4. **Verify recency** — Benchmarks from 6+ months ago may be outdated

## Aggregators

| Site | What It Tracks |
|------|----------------|
| [Artificial Analysis](https://artificialanalysis.ai) | Speed, price, quality combined |
| [LLM Stats](https://llm-stats.com) | Multiple benchmark leaderboards |
| [Chatbot Arena](https://lmarena.ai) | Human preference (blind voting) |

*Last verified: January 2026*

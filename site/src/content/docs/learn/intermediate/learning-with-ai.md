---
title: Learning with AI
description: How to use AI tools without hiding gaps in understanding.
sidebar:
  order: 6
---

AI assistance can support learning, but it can also hide gaps in understanding. The main risk is delegation without review, recall, or debugging practice.

:::note[Evidence guide]
- `Research-backed` - [Anthropic AI coding learning RCT](https://www.anthropic.com/research/AI-assistance-coding-skills), [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html), [Tutor CoPilot RCT](https://arxiv.org/abs/2410.03017)
- `Early / preprint evidence` - [MIT Media Lab: Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- `Practitioner-backed` - the tutor-style prompt patterns and code-review habits on this page

The practical framing combines studies, early evidence, and recurring tutoring-style usage patterns; it is not a single paper's taxonomy.
:::

## Learning Risk

Finishing a task and learning from the task are different outcomes. AI can improve the first while weakening the second.

The Anthropic study found a 17% comprehension gap between developers who used AI heavily and those who did not, even when output quality looked similar.

METR also found experienced open-source developers were slower with AI than they expected to be.

Taken together, these findings point to the same constraint: AI assistance does not automatically improve productivity or learning. The workflow matters.

Learning depends on struggle, recall, and correction. Heavy delegation can skip all three. The answer arrives, but less of the reasoning is retained.

For primary sources, start with the [Anthropic AI coding learning RCT](https://www.anthropic.com/research/AI-assistance-coding-skills).

Also see [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html).

## Prefer Explanation Before Generation

**Less useful for learning:**

```text
Write a function that parses this JSON and returns only active users.
```

**More useful for learning:**

```text
Explain how I should approach filtering a JSON array in JavaScript.
I will implement it, then you can review my attempt.
```

Another useful prompt:

```text
I wrote this implementation. What did I get wrong?
```

This keeps the learner responsible for the implementation and uses AI to expose gaps in the mental model.

Shen & Tamkin (2026) found developers who used AI for conceptual questions retained significantly more than those who delegated code generation. The output looked similar. The understanding did not.

## Debugging Dependency

The biggest gap in the Anthropic coding study was debugging.

```text
AI writes code -> you do not build a mental model ->
the code breaks -> you cannot debug it ->
you ask AI to debug it -> it fixes the symptom ->
you still do not have a mental model
```

This loop creates dependency: the developer can produce working code but cannot diagnose failures without the tool.

## Schedule AI-Free Practice

The Anthropic study's largest skill gap was debugging. Debugging requires time spent forming hypotheses, testing them, and correcting wrong assumptions.

Use some sessions without AI assistance. This is practice for code reading, reasoning, and debugging.

| AI-assisted sessions | AI-free sessions |
|---|---|
| Exploring unfamiliar APIs | Debugging your own logic |
| Boilerplate and scaffolding | Implementing algorithms from scratch |
| Reviewing and refactoring | Writing tests without hints |
| Learning a new framework | Rebuilding patterns from memory |

Both modes are useful. A practical rule is to keep at least one regular session each week where AI is off and the task requires manual reasoning, debugging, or code reading.

## Verify Understanding

AI output can create an illusion of understanding. The test is whether you can explain and modify the code without the chat.

After AI generates code:

1. Close or hide the chat.
2. Wait a few minutes.
3. Rewrite the core idea from memory.
4. Compare your rewrite to the original.
5. Study the gaps.

Another check: explain why the code works, what assumptions it makes, and how you would debug it when it fails. If you cannot do that, the topic needs more practice.

## Use AI Like a Tutor

AI supports learning better when it asks questions, gives hints, or scaffolds reasoning instead of only providing answers (Park et al., 2024).

Useful tutor-style prompts:

:::tip
- "Quiz me on [concept]. Do not give me the answers until I try."
- "I will explain [concept] in my own words. Point out where I am wrong."
- "What questions should I ask about this code before I ship it?"
- "Give me a hint, not a solution. I want to figure this out."
:::

These prompts slow the interaction down, but they preserve more of the reasoning work.

## Usage Patterns

This table draws on the studies cited on this page, especially the Anthropic learning RCT and Shen and Tamkin's conceptual-vs-delegated-use distinction.

It is a practical framework, not a direct taxonomy from one paper.

| Pattern | Likely learning effect |
|---|---|
| **"Explain this pattern"** | preserves understanding |
| **"Review my attempt"** | improves mental model |
| **"Give me a hint"** | preserves productive struggle |
| **"Write this for me"** | produces output with weaker retention |
| **"Fix it" loops** | weakens debugging practice and increases dependency |

## Preserve Productive Struggle

> "Novice programmers using AI often skip the 'productive struggle' phase of learning." — Prather et al. (2024)

Productive struggle is part of learning. When you hit a wall, spend 10 to 15 minutes forming your own hypothesis before asking AI for help.

If you still need help, ask for a hint instead of a solution:

```text
What direction should I investigate next?
```

:::caution
Skipping productive struggle can create dependency. Developers who do not practice hard problems become less comfortable handling them unaided.
:::

## Copy-Paste Does Not Show Understanding

Copying AI code and moving on does not prove comprehension. PNAS (2025) found students using AI without guardrails performed worse on assessments than those who learned traditionally, even when submitted work looked better.

If you copy AI-generated code, do three checks before moving on:

1. Explain every line out loud or in a comment.
2. Modify it for a different use case.
3. Break it deliberately and debug it.

If you cannot do all three, treat the code as unlearned material.

## For Team Leads: Guardrails

Research-backed practices that preserve learning without banning AI:

- Require explanations of AI-generated code in PRs. The explanation should cover what the code does and why (Kazemitabaar et al., 2025).
- Include unassisted coding in assessments. The OECD Performance Trap only appears when people are tested without the tool.
- Use AI for onboarding scaffolding. Tutor CoPilot showed gains for less-experienced users when AI scaffolded the learning process instead of replacing it.
- Schedule AI-free practice time. Frame it as maintenance of debugging and reasoning skill.

## Summary

Use AI as a tutor, reviewer, or scaffold when learning. Avoid using it only as a code generator.

The useful pattern is consistent: keep the human responsible for reasoning, implementation review, and debugging practice.

See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) for the evidence behind these recommendations.

## Bibliography

- [Anthropic AI coding learning RCT](https://www.anthropic.com/research/AI-assistance-coding-skills)
- [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html)
- [MIT Media Lab: Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- [Tutor CoPilot RCT](https://arxiv.org/abs/2410.03017)

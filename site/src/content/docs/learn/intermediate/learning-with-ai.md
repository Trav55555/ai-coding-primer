---
title: Learning with AI
description: How to use AI tools to accelerate learning instead of replacing it.
sidebar:
  order: 6
---

AI tools can make you a better developer faster — or they can silently erode your skills. The difference is how you use them.

---

## The Core Problem

There's a gap between performing a task and learning from it. When AI writes the code, you ship faster. You also build nothing in your head.

The Anthropic study found a 17% comprehension gap between developers who used AI heavily and those who didn't, even when output quality was similar. The OECD Performance Trap describes the same phenomenon at scale: AI-assisted developers look productive until you test them without the tool.

The mechanism is straightforward. Learning requires struggle, retrieval, and error correction. AI short-circuits all three. You get the answer without building the neural pathways that make the answer yours.

See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) for the full evidence behind this.

---

## Pattern: Explain, Don't Generate

**Instead of:** "Write a function that parses this JSON and returns only active users."

**Try:** "Explain how I'd approach filtering a JSON array in JavaScript, then I'll implement it."

Or: "I wrote this implementation. What did I get wrong?"

The second framing keeps you in the driver's seat. You're using AI to fill gaps in your mental model, not to skip building one.

Shen & Tamkin (2026) found developers who used AI for conceptual questions retained significantly more than those who delegated code generation. The output looked the same. The learning didn't.

---

## Pattern: Code Without AI Regularly

The Anthropic study's biggest skill gap wasn't in writing code. It was in debugging. That's a skill you only develop by getting stuck and finding your own way out.

Treat AI-free sessions like training without a calculator. You're not proving anything to anyone. You're building the muscle.

| AI-assisted sessions | Solo sessions |
|---|---|
| Exploring unfamiliar APIs | Debugging your own logic |
| Boilerplate and scaffolding | Implementing algorithms from scratch |
| Reviewing and refactoring | Writing tests without hints |
| Learning new frameworks fast | Internalizing patterns you've seen before |

Neither mode is better. Both are necessary.

---

## Pattern: Verify Before You Trust

The "illusion of competence" (IJRSI 2025) is subtle. AI's fluent, confident output feels like your own understanding. It isn't.

The test: if you can't explain the code without looking at it, you haven't learned it.

A practical technique: after AI generates code, close the chat. Wait 10 minutes. Try to rewrite it from memory. The gaps in your rewrite are exactly what you need to study. Don't skip this step because it's uncomfortable. That discomfort is the learning.

---

## Pattern: Socratic Mode

The strongest finding across the research: AI that asks questions beats AI that gives answers (Park et al., 2024). The format matters as much as the content.

You can prompt your way into this mode.

:::tip
Prompt templates that actually work:

- "Quiz me on [concept]. Don't give me the answers until I've tried."
- "I'm going to explain [concept] in my own words. Point out where I'm wrong."
- "What questions should I be asking about this code before I ship it?"
- "Give me a hint, not a solution. I want to figure this out."
:::

These prompts reframe AI as a thinking partner rather than an answer dispenser. The output is less immediately satisfying. The learning is significantly better.

---

## Anti-Pattern: Skipping the Struggle

> "Novice programmers using AI often skip the 'productive struggle' phase of learning." — Prather et al. (2024)

The struggle is the learning. When you hit a wall, the instinct is to immediately ask AI. Resist it for 10 to 15 minutes. Sit with the problem. Try things. Be wrong.

If you still need help after that, ask for a hint, not a solution. "What direction should I be looking?" is a better prompt than "Fix this."

:::caution
Skipping productive struggle doesn't just slow learning. It creates a dependency. Developers who never sit with hard problems lose the ability to do so. The skill atrophies.
:::

---

## Anti-Pattern: Copy-Paste Learning

Copying AI code and moving on teaches nothing. PNAS (2025) found students using AI without guardrails performed worse on assessments than those who learned traditionally, even though their submitted work looked better.

If you copy AI-generated code, you owe yourself three things before moving on:

1. Explain every line out loud or in a comment
2. Modify it for a different use case
3. Break it deliberately and debug it

If you can't do all three, you don't understand it. You just have it.

---

## For Team Leads: Guardrails That Work

Research-backed practices that don't require banning AI:

- Require explanation of AI-generated code in PRs. Not a summary, an explanation. "This function does X because Y" (Kazemitabaar et al., 2025).
- Include unassisted coding in assessments. The OECD Performance Trap only surfaces when you test without the tool. If you never test without it, you won't see the gap until it matters.
- Use AI for onboarding scaffolding. Tutor CoPilot showed the biggest gains for less-experienced users when AI was used to scaffold, not to replace, the learning process.
- Set AI-free practice time. Frame it as training, not punishment. Senior developers who are good at their jobs practice fundamentals. This is the same thing.

---

## The Bottom Line

Use AI as a thinking partner, not an answer machine.

The research is consistent across studies: the developers who grow with AI are the ones who stay in the loop. They use AI to challenge their thinking, fill specific gaps, and move faster on the parts that don't require learning. They don't use it to avoid the parts that do.

The tool doesn't determine the outcome. Your habits do.

See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) for the evidence behind these recommendations.

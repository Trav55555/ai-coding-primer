---
title: Learning with AI
description: How to use AI tools to accelerate learning instead of replacing it.
sidebar:
  order: 6
---

AI can help you learn faster. It can also make you worse at the parts of programming that matter when things break. The difference is not whether you use it. The difference is how much thinking you hand over.

:::note[Evidence guide]
- `Research-backed` - [Anthropic AI coding learning RCT](https://www.anthropic.com/research/ai-coding-learning), [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html)
- `Practitioner-backed` - [Tutor CoPilot RCT](https://arxiv.org/abs/2410.05017), [MIT Media Lab: Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- `Synthesis`
:::

## The Problem

There is a difference between finishing a task and actually learning from it. AI can close the first gap while widening the second.

The Anthropic study found a 17% comprehension gap between developers who used AI heavily and those who did not, even when output quality looked similar. METR also found experienced open-source developers were slower with AI than they expected to be. The message is consistent: speed gains are real, but they are not automatic, and they do not guarantee learning.

The mechanism is not mysterious. Learning needs struggle, recall, and correction. Heavy delegation short-circuits all three. You get the answer, but less of it sticks.

See [Anthropic AI coding learning RCT](https://www.anthropic.com/research/ai-coding-learning) and [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html) for the strongest primary sources behind this.


## Explain, Don't Generate

**Instead of:** "Write a function that parses this JSON and returns only active users."

**Try:** "Explain how I'd approach filtering a JSON array in JavaScript, then I'll implement it."

Or: "I wrote this implementation. What did I get wrong?"

The second framing keeps you in the loop. You are using AI to patch gaps in your mental model, not replace the model entirely.

Shen & Tamkin (2026) found developers who used AI for conceptual questions retained significantly more than those who delegated code generation. The output looked similar. The understanding did not.

## The Debugging Dependency Trap

The biggest gap in the Anthropic coding study was not writing code. It was debugging.

```text
AI writes code -> you do not build a mental model ->
the code breaks -> you cannot debug it ->
you ask AI to debug it -> it fixes the symptom ->
you still do not have a mental model
```

This is how developers become dependent on AI for problems they used to be able to reason through themselves.

---

## Code Without AI Regularly

The Anthropic study's biggest skill gap wasn't in writing code. It was in debugging. That's a skill you only develop by getting stuck and finding your own way out.

Treat AI-free sessions like training without a calculator. You're not proving anything to anyone. You're building the muscle.

| AI-assisted sessions | Solo sessions |
|---|---|
| Exploring unfamiliar APIs | Debugging your own logic |
| Boilerplate and scaffolding | Implementing algorithms from scratch |
| Reviewing and refactoring | Writing tests without hints |
| Learning new frameworks fast | Internalizing patterns you've seen before |

Neither mode is better. Both are necessary.

One practical rule: keep at least one regular session each week where AI is off and the job is manual reasoning, debugging, or code reading.

## Verify Before You Trust

The "illusion of competence" (IJRSI 2025) is subtle. AI's fluent, confident output feels like your own understanding. It isn't.

The test: if you can't explain the code without looking at it, you haven't learned it.

A practical technique: after AI generates code, close the chat. Wait 10 minutes. Try to rewrite it from memory. The gaps in your rewrite are exactly what you need to study. Don't skip this step because it's uncomfortable. That discomfort is the learning.

Another practical test: if you cannot explain why the code works, what assumptions it makes, and how you would debug it when it fails, you have not learned the technique yet.

## Use AI Like a Tutor

One of the strongest patterns across the research is that AI helps learning more when it asks questions or scaffolds thinking than when it simply gives answers (Park et al., 2024). The format matters as much as the content.

You can prompt your way into this mode.

:::tip
Prompt templates that actually work:

- "Quiz me on [concept]. Don't give me the answers until I've tried."
- "I'm going to explain [concept] in my own words. Point out where I'm wrong."
- "What questions should I be asking about this code before I ship it?"
- "Give me a hint, not a solution. I want to figure this out."
:::

These prompts make the tool act more like a tutor and less like a vending machine. The answers feel slower. That is usually a good sign.


## What Good Use Looks Like

This table is a synthesis of the studies cited on this page, especially the Anthropic learning RCT, Shen & Tamkin's conceptual-vs-delegated-use distinction, and the broader literature on productive struggle. It is a practical framework, not a direct taxonomy from one paper.

| Pattern | Outcome |
|---------|---------|
| **"Explain this pattern"** | Preserves understanding |
| **"Review my attempt"** | Improves mental model |
| **"Give me a hint"** | Keeps productive struggle alive |
| **"Write this for me"** | Fast output, weak retention |
| **"Fix it" loops** | Weak debugging skill, high dependence |

## Do Not Skip the Struggle

> "Novice programmers using AI often skip the 'productive struggle' phase of learning." — Prather et al. (2024)

The struggle is the learning. When you hit a wall, the instinct is to immediately ask AI. Resist it for 10 to 15 minutes. Sit with the problem. Try things. Be wrong.

If you still need help after that, ask for a hint, not a solution. "What direction should I be looking?" is a better prompt than "Fix this."

:::caution
Skipping productive struggle doesn't just slow learning. It can also create dependency. Developers who never sit with hard problems usually become less comfortable handling them unaided.
:::

## Copy-Paste Is Not Learning

Copying AI code and moving on teaches nothing. PNAS (2025) found students using AI without guardrails performed worse on assessments than those who learned traditionally, even though their submitted work looked better.

If you copy AI-generated code, you owe yourself three things before moving on:

1. Explain every line out loud or in a comment
2. Modify it for a different use case
3. Break it deliberately and debug it

If you can't do all three, you don't understand it. You just have it.

## For Team Leads: Guardrails That Work

Research-backed practices that don't require banning AI:

- Require explanation of AI-generated code in PRs. Not a summary, an explanation. "This function does X because Y" (Kazemitabaar et al., 2025).
- Include unassisted coding in assessments. The OECD Performance Trap only surfaces when you test without the tool. If you never test without it, you won't see the gap until it matters.
- Use AI for onboarding scaffolding. Tutor CoPilot showed the biggest gains for less-experienced users when AI was used to scaffold, not to replace, the learning process.
- Set AI-free practice time. Frame it as training, not punishment. Senior developers who are good at their jobs practice fundamentals. This is the same thing.

---

## The Bottom Line

Use AI as a thinking partner, not an answer machine.

The broad pattern is pretty clear: the people who benefit most from AI are still doing a lot of the thinking themselves. They use it to move faster on the boring parts and to challenge their understanding. They do not use it to dodge the hard parts entirely.

The tool doesn't determine the outcome. Your habits do.

See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) for the evidence behind these recommendations.

## Bibliography

- [Anthropic AI coding learning RCT](https://www.anthropic.com/research/ai-coding-learning)
- [OECD Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_f6e1d3c0-en.html)
- [MIT Media Lab: Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- [Tutor CoPilot RCT](https://arxiv.org/abs/2410.05017)

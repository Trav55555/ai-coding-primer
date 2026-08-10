---
title: Learning with AI
description: Use AI assistance while preserving recall, explanation, and debugging practice.
sidebar:
  order: 6
---

Finishing a task and learning from it are different outcomes. When learning is the goal, use AI to expose and correct your reasoning rather than replace it.

:::note[Evidence status]
- `Early / uncertain evidence`: Anthropic's 2026 vendor-led preprint found lower immediate mastery in one coding-learning experiment; interaction-style findings were qualitative, not causal.
- `Research-backed`: a 2025 peer-reviewed physics study found gains from a purpose-built, heavily scaffolded AI tutor in two lessons.
- `Early / uncertain evidence`: Tutor CoPilot's field experiment tested AI support for human tutors, not direct student use or coding.
- `Editorial guidance`: the practice loop below applies those boundaries to software learning. No study has validated it as a universal optimum.

See [Learning Impacts](/ai-coding-primer/research/learning-impacts/) for samples, outcomes, and limitations.
:::

## Decide Whether the Goal Is Output or Learning

For familiar work, delegating a bounded implementation may be reasonable. For unfamiliar work, delegation can produce a working artifact without giving you the model needed to review or debug it.

Write the goal before opening the tool:

```text
Learning goal:
I need to understand how cancellation propagates through this async function.
I will write the first implementation and diagnose failures myself.
The assistant may explain concepts, ask questions, and review my attempt.
```

If the goal is delivery, use the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/). If the goal is learning, keep more reasoning with the learner.

## Use an Attempt–Feedback–Recall Loop

### 1. Attempt

Read the relevant code or documentation and make a first attempt without generated implementation.

```text
I will propose an explanation and implementation first.
Do not provide code yet.
```

The attempt gives the assistant something concrete to critique and reveals what you do not understand.

### 2. Ask for feedback, not replacement

```text
Review my explanation.
Identify the first incorrect assumption.
Ask me one question that would help me correct it.
Do not rewrite the implementation.
```

If you are stuck, ask for the next observation or experiment rather than a finished solution.

### 3. Retrieve without the conversation

Close or hide the assistant. Explain the mechanism from memory, then make a small variation.

Examples:

- change one input or constraint
- predict the result before running the code
- write a test without hints
- explain which log or breakpoint would distinguish two hypotheses

### 4. Debug independently

When the code fails, form a hypothesis and run one diagnostic step before asking the assistant. Treat debugging as a separate skill: working output alone does not show whether you can diagnose a later failure.

## Treat Generated Explanations as Claims

An explanation can be fluent and wrong. Check it against:

- executable behavior
- official documentation
- types or contracts
- a minimal reproduction
- a maintainer-reviewed example

Ask the assistant to identify uncertainty and evidence, but verify the important parts yourself.

## Use Tutor-Style Prompts Carefully

These prompts preserve more learner action than “write it for me”:

```text
Quiz me on this concept. Wait for my answer before explaining.
```

```text
Give me one hint and one diagnostic question, not a solution.
```

```text
I will explain this function. Point to the first place my model diverges from the code.
```

These are workflow suggestions, not proven formulas. The positive tutoring studies used structured systems, expert material, and controlled lesson design; a prompt alone does not reproduce those interventions.

## Check Independent Understanding

After an AI-assisted learning task, verify without the tool:

- Can you state the behavior and assumptions?
- Can you read the relevant code without the explanation?
- Can you modify one requirement?
- Can you predict and diagnose a failure?
- Can you identify what remains uncertain?

If the answer is no, record the gap and practice that part directly. Do not treat task completion as evidence of mastery.

## For Team Leads

Teams can preserve learning without banning assistance:

1. Separate onboarding or practice tasks from delivery tasks.
2. Ask reviewers to explain consequential AI-assisted changes.
3. Include unassisted diagnosis or code-reading checks where independent skill matters.
4. Give junior developers time to investigate failures before delegating debugging.
5. Measure whether review and incident response still depend on a small number of experts.

Do not turn these into surveillance or a universal quota. Choose practices from the skills the team must retain.

## Next Steps

- [Learning Impacts](/ai-coding-primer/research/learning-impacts/) — evidence and limitations
- [Your First Session](/ai-coding-primer/learn/beginner/first-session/) — one bounded practice task
- [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) — recovery when assistance creates confusion

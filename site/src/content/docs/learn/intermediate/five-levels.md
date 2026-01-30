---
title: The Five Levels of AI Coding
description: Understanding where you are helps you know what to learn next.
sidebar:
  order: 2
---

This model is adapted from Dan Shapiro's framework (January 2025), inspired by the levels of autonomous driving.

## The Levels

| Level | Name | Description | Your Role |
|-------|------|-------------|-----------|
| **0** | Spicy Autocomplete | Copy-paste from ChatGPT, basic tab completion | Write most code yourself |
| **1** | The Coding Intern | AI writes boilerplate and unimportant snippets | Full review of every line |
| **2** | The Junior Developer | Pair programming with AI, real-time collaboration | Review every line, guide direction |
| **3** | The Developer | Most code is AI-generated, you're a full-time reviewer | Code review, architecture decisions |
| **4** | The Engineering Team | You're the PM/manager—specs and plans, agents do work | Define specs, review outcomes |
| **5** | The Dark Factory | No human code review—only system verification | Design verification systems |

## Level Details

### Level 0: Spicy Autocomplete
- Copy code snippets from ChatGPT
- Use basic tab completion
- Manually integrate everything
- **Prerequisites:** None

### Level 1: The Coding Intern
- AI writes boilerplate, tests, repetitive code
- You review every line
- You make all decisions
- **Prerequisites:** Basic prompting skills

### Level 2: The Junior Developer
- Real-time pair programming
- AI suggests, you guide
- Interactive back-and-forth
- **Prerequisites:** Good prompts, context files

### Level 3: The Developer
- Most code is AI-generated
- You're a full-time code reviewer
- You make architecture decisions
- **Prerequisites:** Strong verification skills, TDD mindset

### Level 4: The Engineering Team
- You write specs, AI writes code
- Multiple agents working in parallel
- You're the PM/tech lead
- **Prerequisites:** Robust test suites, CI/CD, monitoring

### Level 5: The Dark Factory
> "Nobody reviews AI-produced code, ever. They don't even look at it. The goal of the system is to prove that the system works." — Simon Willison

- No human code review
- Only system verification
- Trusting tests, not code
- **Prerequisites:** Comprehensive conformance suites, 20+ years experience to design verification

## Where to Start

**If you're new to AI coding:** Start at Level 1-2. Use AI for tasks you already know how to solve. Build intuition for when it's right vs. wrong.

**If you're experienced:** Most professionals operate at Level 2-3. Level 4+ requires significant infrastructure investment.

**Most readers should aim for Level 3** with strong verification practices.

## Level 5 Warning

Level 5 is real but rare. It requires:

- Comprehensive conformance test suites
- Continuous verification systems
- Deep engineering experience to design the verification
- Acceptance that you're trusting the tests, not the code

Don't aim for Level 5 until you've mastered Levels 2-4.

## Progression Path

```
Level 1 → Level 2
  └── Learn prompting, add context files

Level 2 → Level 3
  └── Add TDD, strong verification, trust your review skills

Level 3 → Level 4
  └── Build robust CI/CD, test suites, learn spec-driven development

Level 4 → Level 5
  └── Build conformance suites, design verification systems
```

## Next Steps

- [Learn Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — the key skill for Level 2+
- [Study Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — what works at each level

---
title: Common Mistakes
description: Pitfalls to avoid in AI-assisted development.
sidebar:
  order: 5
---

These mistakes waste time and produce poor results. Learn to recognize and avoid them.

## Mistake 1: Using AI as a Safety Net

**The mistake:** Only using AI when you're completely stuck and have exhausted all options.

**Why it fails:** If you don't understand the problem, you can't give good context or verify the output.

**The fix:** Use AI to speed up tasks you *already know how to solve*. This builds intuition for its capabilities and limitations.

---

## Mistake 2: Context Rot (Information Overload)

**The mistake:** Dumping entire codebases into context, thinking "more info = better results."

**Why it fails:** Too much context increases distraction. The model gets confused and quality drops.

**The fix:**
- Give the model *search tools* instead of pre-loaded code
- Provide only relevant files
- Stay under 40% of context window

---

## Mistake 3: Broken Environments

**The mistake:** Trying to prompt-engineer around a broken dev environment (pre-existing type errors, misconfigured linters).

**Why it fails:** Agents have no long-term memory. They rediscover the "ghost error" every session, try to fix it, fail, and get confused.

**The fix:** Fix your environment first. If `typecheck` or `lint` fails before you start, the agent will struggle too.

---

## Mistake 4: MCP Hell (Over-Configuration)

**The mistake:** Loading dozens of MCP servers, complex plugins, and massive rule files.

**Why it fails:** Adds complexity and failure points without solving the core issue (bad context/prompting).

**The fix:** Keep it simple. Stock configurations often outperform "tool maximalist" setups. Start with zero plugins. Add only what you need after hitting a specific limitation.

---

## Mistake 5: The Append Trap

**The mistake:** When AI fails, repeatedly asking "fix it" and appending to the conversation history.

**Why it fails:** The context now contains bad instructions and broken code. Each failed attempt pollutes the context further.

> "Correcting Over and Over: Failed approaches accumulate. Solution: After 2 corrections, `/clear` and rewrite prompt." — Anthropic

**The fix:**

1. **Clear context** (`/clear`, new chat, or `Cmd+K`)
2. **Revert changes** (`git checkout .` or undo)
3. **Rewrite your prompt** with better context
4. If same failure happens **3+ times**, stop and rethink entirely

---

## Mistake 6: The Kitchen Sink

**The mistake:** Mixing unrelated tasks in one session.

**Why it fails:** Context gets polluted with irrelevant information from previous tasks.

**The fix:** Clear context between unrelated tasks:

```
Task 1: Fix the auth bug
/clear
Task 2: Add the export feature
/clear
Task 3: Refactor the database layer
```

---

## Mistake 7: Trusting Without Verifying

**The mistake:** Accepting AI output without review because "it looks right."

**Why it fails:** AI produces plausible-looking code that may be subtly wrong.

**The fix:**
- 100% of AI-generated code gets human review
- Never merge without running tests
- If you don't understand it, don't ship it

---

## Mistake 8: Lazy Testing

**The mistake:** Having AI write both the code AND the tests, then assuming passing tests = working code.

**Why it fails:** AI-generated tests often:
- Test the implementation, not the requirements (tautological tests)
- Miss edge cases the AI also missed in the code
- Assert what the code *does*, not what it *should* do
- Have the same blind spots as the code they're testing

> "If the same AI writes the code and the tests, and neither understands the requirements correctly, you have two artifacts that agree with each other but not with reality."

**The fix:**
- Write tests FIRST (or have AI write them), then commit before writing code
- Review AI-generated tests as critically as AI-generated code
- Ask: "Would this test fail if the code had [specific bug]?"
- Tests should encode YOUR understanding of requirements, not the AI's

:::caution[The Circular Validation Trap]
AI writes code → AI writes tests → Tests pass → You feel confident. But you've only validated that the AI is consistent with itself, not that it solved your actual problem.
:::

:::caution[Coverage is not correctness]
100% test coverage means nothing if tests aren't connected to ground truth. AI can generate tests that exercise every line of code while verifying nothing meaningful. Coverage measures execution, not validation.
:::

---

## When to Clear Context

- Switching to an unrelated task
- After 2+ failed fix attempts
- When the AI starts "forgetting" earlier instructions
- When responses become repetitive or circular

## Quick Reference

| Mistake | Signal | Fix |
|---------|--------|-----|
| Safety net use | Only ask when stuck | Start with familiar tasks |
| Context rot | AI seems confused | Reduce context, use tools |
| Broken environment | Same error every session | Fix linter/types first |
| MCP hell | Too many plugins | Strip to defaults |
| Append trap | Repeated "fix it" | Clear and rewrite |
| Kitchen sink | Mixing tasks | Clear between tasks |
| Blind trust | No review | Always read diffs |
| Lazy testing | AI writes code + tests | Write tests first, review critically |

## Next Steps

- [When It's Not Working](/ai-coding-primer/learn/intermediate/troubleshooting/) — recovery strategies
- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — what to do instead

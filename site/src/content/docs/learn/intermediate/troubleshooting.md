---
title: When It's Not Working
description: Recovery strategies for AI-assisted development.
sidebar:
  order: 6
---

Signs the AI is struggling, and what to do about it.

## Warning Signs

| Signal | What's Happening | What to Do |
|--------|------------------|------------|
| Same error 3+ times | Context polluted with failed attempts | Revert all changes, start fresh |
| "I'll try a different approach" repeatedly | AI is guessing, not understanding | Stop. Provide more context or simplify |
| Changes unrelated files | AI misunderstood scope | Be explicit: "Only modify X" |
| Output looks plausible but wrong | Hallucination | Test immediately. Don't trust unverified code |
| 10+ iterations for simple task | Wrong tool or wrong problem | Do it yourself |

## The Recovery Pattern

When things go wrong:

```
1. git stash or git checkout .     # Revert everything
2. Close the chat/session          # Fresh context
3. Simplify the task               # Smaller scope
4. Add explicit constraints        # "Don't touch X, only modify Y"
5. Try again with one specific ask # Not "build feature" but "add function"
```

## When to Give Up

Code it yourself when:

- You've explained the same thing 3 different ways with no improvement
- The fix would take you 5 minutes but the AI has burned 20
- The AI keeps "fixing" things that weren't broken
- You don't understand the AI's solution well enough to maintain it

**This is not failure.** Some tasks are faster by hand. Knowing when to switch is a skill.

## Specific Situations

### AI Keeps Breaking Working Code

**Symptoms:** Each "fix" introduces new problems. Tests that passed now fail.

**Cause:** AI doesn't have full context of dependencies.

**Fix:**
1. Revert to last working state
2. Provide more context about what other code depends on this
3. Add constraint: "Don't change the function signature" or "These tests must still pass"

### AI Hallucinates APIs or Packages

**Symptoms:** AI suggests packages that don't exist, or uses API methods that don't exist.

**Cause:** Training data cutoff, or confusion between similar libraries.

**Fix:**
1. Provide the actual API documentation
2. Show an example of correct usage from the real docs
3. Use [Context7](https://context7.com) MCP for up-to-date documentation

### AI Produces Verbose/Over-Engineered Code

**Symptoms:** Simple request results in 500 lines with factories, interfaces, and abstractions.

**Cause:** AI defaults to "enterprise" patterns when uncertain.

**Fix:**
1. Be explicit: "Keep it simple. No unnecessary abstractions."
2. Show an example of the style you want
3. Add to context file: "Prefer simple solutions over clever ones"

### AI Misunderstands the Codebase

**Symptoms:** AI makes changes that contradict existing patterns or architecture.

**Cause:** Not enough context about how the codebase works.

**Fix:**
1. Point to specific files: "Follow the pattern in `src/auth/login.ts`"
2. Explain the architecture: "We use repository pattern, services should not access DB directly"
3. Create/update your CLAUDE.md or .cursorrules file

### AI Gets Stuck in a Loop

**Symptoms:** Same suggestion repeatedly, even after you say it doesn't work.

**Cause:** Context is saturated with the failed approach.

**Fix:**
1. Clear context completely
2. Revert all changes
3. Start fresh with a different framing of the problem

## Debugging Prompts

When stuck, try these prompts:

```
Before making any changes, explain your understanding of:
1. What the current code does
2. What change I'm asking for
3. What files will need to change
```

```
What assumptions are you making? List them before proceeding.
```

```
What could go wrong with this approach? What are the risks?
```

## Prevention Checklist

Before starting any significant task:

- [ ] Environment is clean (no pre-existing errors)
- [ ] Context file is up to date
- [ ] Task is small enough to verify
- [ ] You know how to verify success
- [ ] You understand the code well enough to review

## Next Steps

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — what works
- [Common Mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/) — what to avoid
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — prevent misunderstandings

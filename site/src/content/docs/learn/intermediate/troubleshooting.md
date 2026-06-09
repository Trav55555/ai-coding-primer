---
title: When It's Not Working
description: Diagnostic and recovery steps for AI-assisted development.
sidebar:
  order: 6
---

Use this page when the agent is producing repeated errors, broad diffs, or output you cannot verify.

## Warning Signs

| Signal | Likely cause | Recovery step |
|---|---|---|
| Same error appears three or more times | Context contains failed attempts | Revert changes and restart with a shorter task summary |
| Agent repeatedly says it will try another approach | Context or evidence is insufficient | Stop and provide a smaller task or stronger evidence |
| Unrelated files are changed | Scope is unclear | State allowed files and non-goals explicitly |
| Output looks plausible but fails checks | Hallucinated behavior, API, or assumption | Run the verification signal and inspect the diff |
| Simple task takes many iterations | Wrong tool, wrong framing, or insufficient context | Do it manually or restart with a narrower task |

## Recovery Pattern

When the session degrades, reset the state before continuing:

```bash
# Preserve work if needed
git status --short
git diff > /tmp/ai-attempt.diff

# Then revert unwanted changes using your normal git workflow
```

Then restart with a smaller prompt:

```text
Current task:
Expected behavior:
Relevant files:
Known failure signal:
Allowed files:
Do not change:
Verification command:
```

## When to Switch to Manual Work

Switch to manual implementation when:

- the same constraint has been explained repeatedly without improvement
- a small manual fix is taking longer through the agent
- the agent keeps changing working code outside the task boundary
- you cannot understand or maintain the proposed solution

Manual work is the correct fallback when it gives a clearer result with less review risk.

## Specific Situations

### Agent Breaks Working Code

**Symptoms:** Each attempted fix introduces new failures. Tests that previously passed now fail.

**Likely cause:** The agent does not have enough dependency or interface context.

**Recovery:**

1. Revert to the last working state.
2. Identify the public interfaces and dependent tests.
3. Add constraints such as:
   - `Do not change the function signature.`
   - `These tests must still pass: ...`
   - `Only modify these files: ...`
4. Ask for a smaller patch.

### Agent Hallucinates APIs or Packages

**Symptoms:** Suggested packages do not exist, or API methods are not available in the installed version.

**Likely cause:** Training data is stale, documentation is missing from context, or similar libraries are being confused.

**Recovery:**

1. Provide current official documentation or local type definitions.
2. Show a real example from the project or dependency docs.
3. Require a verification step such as typecheck, build, or package-resolution check.
4. Do not install suggested packages until their provenance is verified.

### Agent Produces Over-Engineered Code

**Symptoms:** A small request produces unnecessary factories, interfaces, abstractions, or broad rewrites.

**Likely cause:** The task is underspecified or the agent is optimizing for generality.

**Recovery:**

1. State the smallest acceptable change.
2. Provide a nearby example of the desired style.
3. Add constraints:
   - `No new abstractions.`
   - `No new dependencies.`
   - `Preserve public API.`
4. Reject diffs that exceed the stated scope.

### Agent Misreads the Codebase

**Symptoms:** The change contradicts existing architecture, naming, or data flow.

**Likely cause:** Local conventions were not visible enough.

**Recovery:**

1. Point to specific files that show the pattern.
2. State the relevant architecture rule.
3. Ask the agent to restate the pattern before editing.
4. Add stable rules to `CLAUDE.md`, `AGENTS.md`, `.cursorrules`, or the equivalent context file when the same issue recurs.

### Agent Repeats a Failed Approach

**Symptoms:** The same suggestion returns after correction.

**Likely cause:** The context is saturated with failed attempts.

**Recovery:**

1. Clear or restart the session.
2. Revert failed edits.
3. Summarize what was tried and why it failed.
4. Ask for a different framing or solve the task manually.

## Diagnostic Prompts

Use these before allowing more edits:

```text
Before making changes, explain:
1. What the current code does.
2. What change I am asking for.
3. Which files need to change.
4. Which files should not change.
5. How you will verify the result.
```

```text
List the assumptions you are making. Mark each assumption as verified or unverified.
```

```text
What could go wrong with this approach? List the failure modes and the checks that would catch them.
```

## Prevention Checklist

Before starting any significant task:

- [ ] Baseline environment is clean or known failures are documented.
- [ ] Context file is current and short.
- [ ] Task is small enough to verify.
- [ ] Success is tied to a test, build, screenshot, expected output, or review checklist.
- [ ] You understand the code well enough to review the diff.
- [ ] Allowed files and non-goals are explicit.

## Next Steps

- [Effective Patterns](/ai-coding-primer/learn/intermediate/effective-patterns/) — procedures for verifiable work
- [Common Mistakes](/ai-coding-primer/learn/intermediate/common-mistakes/) — recurring failure modes
- [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/) — stable rules and local conventions

---
title: Aider
description: Open-source terminal pair-programming client with Git integration.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: provider support, model settings, installation methods, and benchmark results. Verify the [current Aider documentation](https://aider.chat/docs/).
:::

[Aider](https://aider.chat) is an open-source terminal pair-programming client built around repository editing and Git workflows.

## Workflow Fit

Aider fits developers who want a focused terminal editing loop, explicit file selection, provider choice, and visible Git history without adopting a larger agent platform.

Its useful durable features include:

- adding and removing files from task context
- reviewing diffs and undoing edits
- optional automatic commits
- configuration through command-line options and `.aider.conf.yml`
- support for hosted and local model providers

## Provider and Data Boundary

Aider is a client, not the model host. Code and prompts may still go to the provider configured for the session. Provider terms determine training, retention, jurisdiction, and subprocessors.

Aider documents its own analytics behavior separately and says it does not collect code, chat messages, keys, or personal information. Review [Aider analytics](https://aider.chat/docs/more/analytics.html) and the selected provider's terms.

## Configuration

Use the [current configuration reference](https://aider.chat/docs/config.html). Avoid copying old model identifiers into shared configuration.

```yaml
# .aider.conf.yml
model: your-reviewed-model
read:
  - README.md
  - docs/architecture.md
```

Do not store API keys in committed configuration.

## Benchmark Boundary

Aider's [leaderboards](https://aider.chat/docs/leaderboards/) are useful for comparing model behavior inside Aider's benchmark harness. They do not establish how another harness or your repository will perform.

## Adoption Check

1. Install using the [current installation guide](https://aider.chat/docs/install.html).
2. Choose a provider and review its data terms.
3. Start with a bounded edit and a clean Git state.
4. Inspect the diff and tests before accepting an automatic commit.
5. Use the leaderboard as one signal, then run a local pilot.

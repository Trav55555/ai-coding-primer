---
title: Choosing a Model
description: How to choose a model without relying on stale pricing tables.
sidebar:
  order: 3
---

Pricing changes faster than most documentation gets updated. Use this page for decision logic, not static dollar figures.

## What to Optimize For

| If your main need is... | Optimize for... |
|-------------------------|-----------------|
| Long-running agent loops | reasoning quality and tool use |
| Quick edits and completions | latency |
| Visual/UI implementation | multimodal strength |
| Sensitive code | local execution or trusted provider boundaries |
| Large investigations | long context plus strong context hygiene |

## Workflow-Fit Rules

### Use a frontier reasoning model when:

- the task spans many files
- the change has architectural consequences
- you need the model to recover from failures and keep a plan straight

### Use a fast model when:

- you are iterating quickly
- the task is local and well-scoped
- autocomplete quality matters more than deep planning

### Use a local model when:

- your data cannot leave your environment
- you need predictable operational boundaries
- you can accept some capability tradeoffs for control

## Keep One Eye on Access Models

Two tools can expose the same model through very different operating constraints.

- direct provider access
- aggregator access such as OpenRouter
- cloud-platform access such as Bedrock, Vertex, or Azure OpenAI
- local model serving via Ollama, LM Studio, or vLLM

This matters because provider choice changes retention policy, logging surface, and enterprise deployment options.

## Where to Check Live Data

- [Artificial Analysis](https://artificialanalysis.ai)
- [SWE-bench](https://swebench.com)
- [Aider Leaderboards](https://aider.chat/docs/leaderboards/)
- official provider docs for current access details

## Bottom Line

Do not choose a model from a stale table. Choose it from the workflow you need to support, then verify the live benchmark and access details before committing.

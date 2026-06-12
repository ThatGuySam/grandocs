---
title: Building with AI
description: How AI agents can consume grandocs — llms.txt, markdown twins, MCP server, and installable skills.
---

grandocs is built agent-first. Four ways in, pick what your tooling supports:

## 1. llms.txt

- [`/llms.txt`](/llms.txt) — index with instructions
- [`/llms-full.txt`](/llms-full.txt) — full corpus (latest versions)
- [`/llms-small.txt`](/llms-small.txt) — compact variant for small contexts

*(Generated in phase 3 — coming online shortly.)*

## 2. Markdown twins

Append `.md` to any docs URL to get the raw markdown — same convention as
Stripe's docs.

## 3. MCP server

A remote MCP server with `search_docs`, `get_page`, `command_lookup`, and
`list_products_versions` tools. *(Phase 4 — endpoint and config snippets land
here.)*

## 4. Skills

```bash
npx skills add ThatGuySam/grandocs
```

Installs grandMA documentation skills for Claude Code, Cursor, and 20+ other
agents. *(Phase 5.)*

---

This page tracks the rollout — anything marked with a phase number is being
built right now on the
[`starlight-rebuild` branch](https://github.com/ThatGuySam/grandocs/tree/starlight-rebuild).

---
title: Building with AI
description: How AI agents consume grandocs — llms.txt, per-page markdown twins, an MCP server, and installable skills for grandMA documentation.
---

grandocs is built agent-first. There are four ways in — use whichever your
tooling supports.

## 1. llms.txt

Three machine-readable indexes, generated at build time:

- [`/llms.txt`](/llms.txt) — curated index with usage instructions
- [`/llms-full.txt`](/llms-full.txt) — the full corpus (latest versions) inlined
- [`/llms-small.txt`](/llms-small.txt) — a compact variant for small context windows

The `llms.txt` preamble tells agents the conventions below: default to grandMA3
2.4 but honor the user's actual console version, and always cite the canonical
`help.malighting.com` page.

## 2. Markdown twins

Append `.md` to **any** docs URL to get the raw markdown — the same convention
Stripe uses. For example:

```
https://grandocs.samcarlton.com/grandma3/2-4/cue_store/      → the page
https://grandocs.samcarlton.com/grandma3/2-4/cue_store.md    → raw markdown
```

Every page also carries a **Copy as Markdown** button and **Open in
ChatGPT / Claude** links in its header.

## 3. MCP server

A stateless [Model Context Protocol](https://modelcontextprotocol.io) server
over grandocs' search index. Tools: `search_docs`, `get_page`,
`command_lookup`, and `list_products_versions`.

```bash
# Claude Code
claude mcp add --transport http grandocs https://grandocs-mcp.samcarlton.workers.dev/mcp
```

Cursor, Claude Desktop, and other clients: see the
[MCP server README](https://github.com/ThatGuySam/grandocs/tree/starlight-rebuild/mcp).

## 4. Skills

Installable agent skills for grandMA documentation work — for Claude Code,
Cursor, and 20+ other agents:

```bash
npx skills add ThatGuySam/grandocs
```

Includes `grandma3-docs`, `grandma2-dot2-docs`, `grandma-command-syntax`,
`grandma3-lua-api`, `grandma-macro-writer`, and `grandma-troubleshooting`.

---

:::caution[Unofficial mirror]
grandocs is fan-maintained. All content belongs to
[MA Lighting International GmbH](https://www.malighting.com/). For
authoritative or safety-relevant information, always cite the canonical
[official help](https://help.malighting.com/) page linked on each topic.
:::

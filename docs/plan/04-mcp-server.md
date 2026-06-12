# Phase 4 — MCP Server

Give agents structured search over grandocs. "Totally static" MCP isn't a thing — Streamable HTTP means answering JSON-RPC POSTs — so the design is the nearest neighbor: a **stateless edge worker over a static, build-emitted index**. No database, no state, redeploy only when code changes.

## Architecture

```
astro build ──emits──▶ /public/agent/search-index.json   (static, CDN-hosted)
                                   ▲
Cloudflare Worker (grandocs-mcp) ──fetches once, caches──┘
  /mcp  ◀── Streamable HTTP ── Claude Code / Cursor / ChatGPT / etc.
```

- **Index**: build step walks the docs collection → MiniSearch-serialized JSON (fields: `title`, `headings`, `excerpt`, `product`, `version`, `lang`, `path`). MiniSearch runs fine in Workers and Node. Keep it latest-versions-only; target < 10 MB raw / ~1–2 MB gzipped. (Verified dead end: Pagefind's index is browser/WASM-oriented; server-side querying is explicitly out of scope upstream — don't try to reuse it.)
- **Worker**: start from Cloudflare's authless remote MCP template
  `npm create cloudflare@latest -- grandocs-mcp --template=cloudflare/ai/demos/remote-mcp-authless`
  Fetch + cache the index via Cache API (TTL ~1 h), serve tools. Free tier is plenty. Local skills available when implementing: `cloudflare`, `wrangler`, `workers-best-practices`, `agents-sdk`.

## Tools

| Tool | Args | Returns |
|---|---|---|
| `search_docs` | `query`, `product?`, `version?`, `lang?`, `limit?` | ranked hits: title, snippet, canonical URL, `.md` URL |
| `get_page` | `path` | the page's raw markdown (proxied from the static `.md` twin) + canonical URL |
| `command_lookup` | `keyword`, `product` (`grandma3`/`grandma2`/`dot2`), `version?` | the `keyword_{name}` page as markdown — the scraped slugs literally follow this convention, making exact command-syntax lookup nearly free |
| `list_products_versions` | — | product/version/language matrix from the crawl manifests |

- Every tool response ends with source attribution (canonical malighting.com-derived page on grandocs + "unofficial mirror" note) so agents cite properly.

## Variants

- **Local stdio package** (`npx grandocs-mcp`): same tool code, stdio transport, fetches the same static index (with `--offline` flag using a bundled snapshot). Genuinely valuable: lighting consoles run on **air-gapped show networks** — a programmer's laptop with no internet can still serve docs to a local agent. Ship as a small npm package from this repo (workspace).
- **Vercel alternative**: `mcp-handler` on a Vercel function if hosting consolidates there. Same tools, different shell. Decision deferred to phase 1's hosting outcome.
- **Not doing**: WebMCP / `navigator.modelContext` (browser-embedded tools) — spec still settling; revisit when a major client ships support.

## Client config (goes on the Building-with-AI page)

```bash
# Claude Code
claude mcp add --transport http grandocs https://grandocs-mcp.{account}.workers.dev/mcp
```

JSON snippets for Cursor / Claude Desktop (`mcp-remote` bridge) / ChatGPT connectors alongside.

## Testing & listing

- `npx @modelcontextprotocol/inspector` against local `wrangler dev`; scripted smoke: `initialize` → `tools/list` → one `search_docs` call asserting a known hit ("store cue" → keyword_store).
- Eval-style checks: 10 canned questions (one per product/feature area) must surface the right page in top 3.
- List on: README badge, Building-with-AI page, mcpservers.org, official MCP registry. Verified gap: existing MA MCP servers (Pahegi/MA3-MCP-Server, thisis-romar/ma2-onPC-MCP) do **console control**, not docs search — complementary, link them, don't compete.

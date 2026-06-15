# grandocs-mcp

A stateless [Model Context Protocol](https://modelcontextprotocol.io) server that
gives AI agents structured search over **grandocs** — an *unofficial*, fan-maintained
mirror of MA Lighting's documentation (grandMA3, grandMA2, dot2, utility, network).

It runs as a single Cloudflare Worker, speaks MCP over **Streamable HTTP** at
`POST /mcp`, and is completely stateless: on first request it fetches the static
search index the site publishes at
[`/agent/search-index.json`](https://grandocs.samcarlton.com/agent/search-index.json)
(plus [`/agent/meta.json`](https://grandocs.samcarlton.com/agent/meta.json)),
loads it into [MiniSearch](https://github.com/lucaong/minisearch), and caches it in
a module-scoped global. No database, no per-session state — redeploy only when the
code changes.

> **Unofficial mirror.** grandocs is not affiliated with MA Lighting. Every tool
> response ends with an attribution line; for authoritative or safety-relevant
> information (conformity, electrical, safety) always cite the canonical page on
> `help.malighting.com`.

## Endpoint

| | |
|---|---|
| Streamable HTTP | `https://grandocs-mcp.samcarlton.com/mcp` |
| Eventual stable domain | `https://grandocs-mcp.samcarlton.com/mcp` |
| Health / info | `GET /` |

## Tools

| Tool | Args | Returns |
|---|---|---|
| `search_docs` | `query`, `product?`, `version?`, `lang?`, `limit?` (default 8) | Ranked hits: title, page URL, `.md` URL, product, version, snippet. |
| `get_page` | `path` (e.g. `grandma3/2-4/cue_store`, or a full grandocs URL) | The page's raw markdown (from its `.md` twin) + source URL. |
| `command_lookup` | `keyword`, `product` (default `grandma3`), `version?` | The grandMA command/keyword reference page as markdown. Resolves `key_<kw>` / `keyword_<kw>` / `cue_<kw>` slugs, then falls back to product-filtered search. |
| `list_products_versions` | — | The product / version / language coverage matrix from `meta.json`. |

Default product is **grandMA3 v2.4** (`version` dir `2-4`), but pass the user's
actual console software version to switch — grandMA2/dot2/utility/network are
unversioned in the URL.

## Client configuration

### Claude Code

```bash
claude mcp add --transport http grandocs https://grandocs-mcp.samcarlton.com/mcp
```

### Cursor

Add to `~/.cursor/mcp.json` (or a project `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "grandocs": {
      "url": "https://grandocs-mcp.samcarlton.com/mcp"
    }
  }
}
```

### Claude Desktop

Claude Desktop speaks stdio, so bridge the remote server with
[`mcp-remote`](https://www.npmjs.com/package/mcp-remote). Add to
`claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "grandocs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://grandocs-mcp.samcarlton.com/mcp"]
    }
  }
}
```

(Once the custom domain is live, swap in `https://grandocs-mcp.samcarlton.com/mcp`.)

## Local development

```bash
pnpm install        # or npm install — installs deps for THIS package only
pnpm dev            # wrangler dev → http://localhost:8787/mcp
```

The worker reads the index from production (`grandocs.samcarlton.com`), so local
dev works as long as the site has published `/agent/search-index.json`.

Inspect it with the official inspector:

```bash
npx @modelcontextprotocol/inspector
# transport: Streamable HTTP, URL: http://localhost:8787/mcp
```

See [`SMOKE.md`](./SMOKE.md) for canned smoke-test questions and the page each
should surface.

## Deploy

```bash
pnpm deploy         # wrangler deploy
```

This is a standalone package (its own `package.json` / `wrangler.jsonc`) and is
**not** part of the site's Astro build. It depends only on the site having
published `/agent/search-index.json` and `/agent/meta.json`.

## Implementation note

The MCP TypeScript SDK's `StreamableHTTPServerTransport` is bound to Node's
`http.IncomingMessage` / `http.ServerResponse`, which don't exist in the Workers
runtime. So this worker implements the JSON-RPC methods (`initialize`,
`tools/list`, `tools/call`, `ping`, and ignorable notifications) directly over the
`fetch` handler, returning web-standard `Response` objects, while importing the
canonical protocol versions and error codes from `@modelcontextprotocol/sdk` to
stay spec-aligned.

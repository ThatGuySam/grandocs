# grandocs-mcp smoke tests

Five canned questions that exercise every tool. Each lists the call to make and the
page the result should surface. Run against `wrangler dev` (local) or the deployed
worker; pages are verified to exist in the grandMA3 v2.4 content set.

Quick manual run (local dev on `:8787`):

```bash
# 0. initialize → tools/list (sanity)
curl -s localhost:8787/mcp -H 'content-type: application/json' -d '{
  "jsonrpc":"2.0","id":1,"method":"initialize",
  "params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'
curl -s localhost:8787/mcp -H 'content-type: application/json' -d '{
  "jsonrpc":"2.0","id":2,"method":"tools/list"}'
```

`tools/call` template (swap `name` / `arguments`):

```bash
curl -s localhost:8787/mcp -H 'content-type: application/json' -d '{
  "jsonrpc":"2.0","id":3,"method":"tools/call",
  "params":{"name":"TOOL","arguments":{ ... }}}'
```

## 1. "How do I store a cue?"

- **Tool:** `search_docs` `{ "query": "how do I store a cue", "product": "grandma3" }`
- **Should surface:** **/grandma3/2-4/cue_store/** (markdown twin `/grandma3/2-4/cue_store.md`)
- Top hits should also include `keyword_store` and `key_store`.

## 2. "What's the syntax for the Store keyword?"

- **Tool:** `command_lookup` `{ "keyword": "store" }`
- **Resolves:** `grandma3/2-4/keyword_store` → returns raw markdown of **/grandma3/2-4/keyword_store/**
  (the candidate chain tries `key_store`, then `keyword_store`).

## 3. "Show me the grandMA3 Assign keyword page."

- **Tool:** `command_lookup` `{ "keyword": "assign", "product": "grandma3" }`
- **Resolves:** `grandma3/2-4/key_assign` (first candidate that exists) → markdown of
  **/grandma3/2-4/key_assign/**. (`keyword_assign` also exists as a fallback.)

## 4. "Give me the raw markdown for the MAtricks keyword page."

- **Tool:** `get_page` `{ "path": "grandma3/2-4/keyword_matricks" }`
- **Returns:** the raw markdown of **/grandma3/2-4/keyword_matricks/** with its source URL.
- Also accepts a full URL or a trailing `.md`, e.g.
  `{ "path": "https://grandocs.samcarlton.com/grandma3/2-4/keyword_matricks.md" }`.

## 5. "What products and versions does grandocs cover?"

- **Tool:** `list_products_versions` `{}`
- **Returns:** the matrix from `/agent/meta.json` — grandMA3 (v2.4), grandMA2, dot2,
  utility, network with page counts / languages.

---

## Bonus eval hits (top-3 expected)

| Question | product | Expected page |
|---|---|---|
| "go into blind mode" | grandma3 | `/grandma3/2-4/key_blind/` or `/grandma3/2-4/keyword_blind/` |
| "what does At do" | grandma3 | `/grandma3/2-4/keyword_at/` |
| "store a cue on grandMA2" | grandma2 | `/grandma2/key_keyword_store/` |
| "access the web interface" | network | `/network/key_access_web_interface/` |

> All responses carry the grandocs attribution line. grandocs is an UNOFFICIAL
> mirror; cite the canonical `help.malighting.com` source URL for safety-relevant
> info.

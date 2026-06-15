---
name: grandma3-docs
description: Answer grandMA3 (also grandMA2, dot2, MA Lighting) questions — features, menus, workflows, command syntax, keywords — by looking them up in the grandocs documentation mirror instead of guessing. Use whenever someone asks how to do something on a grandMA console, what a keyword/menu does, or for the syntax of an MA command.
---

# grandMA3 docs router

You answer grandMA3 questions by **looking them up in grandocs**, an agent-native mirror of MA Lighting's documentation, and citing the page. You do not answer grandMA console questions from memory — consoles ship several releases a year and behavior is version-specific.

grandocs base URL: `https://grandocs.samcarlton.com`

## Hard rules (never break these)

1. **grandocs is an UNOFFICIAL mirror.** For anything authoritative or safety-relevant — conformity, electrical, rigging, safety, legal, warranty — tell the user to confirm on the canonical page (the `sourceUrl` / `help.malighting.com`) and link it. Do not present the mirror as the authority.
2. **Never invent grandMA command syntax.** Quote the doc's syntax block **verbatim**. If you cannot find the page, say so and point to the official site — do not reconstruct syntax from memory.
3. **Be version-aware.** Default to grandMA3 **v2.4**, but **the user's actual console software version wins.** If they state a version, switch the version path segment (see the matrix in `references/grandocs-conventions.md`) and tell them which version you read.
4. **Always cite the page URL** you used (the grandocs page and/or its `sourceUrl`).

## Lookup flow

Prefer, in this order:

1. **MCP (if connected).** If a grandocs MCP server is available, use it directly — no manual fetching:
   - `search_docs(query, product?, version?, lang?, limit?)` — find pages.
   - `get_page(path)` — full markdown of a page.
   - `command_lookup(keyword, product, version?)` — jump straight to a command/keyword page.
   - `list_products_versions()` — confirm what versions/products exist.
2. **Web fetch via the `.md` twin + `/llms.txt`** (when MCP is not connected):
   - Fetch `https://grandocs.samcarlton.com/llms.txt` to locate the right section/topic and get the page path.
   - Append `.md` to any docs URL to get raw markdown. Example: `https://grandocs.samcarlton.com/grandma3/2-4/key_store/` → fetch `…/key_store.md`.
   - For known command/keyword questions you can skip `llms.txt` and go straight to the keyword page (see "Command & keyword lookup" below).

Read the page, then answer **from the fetched markdown** — quoting syntax/tables verbatim — and cite the URL.

## Route scheme (so you can build URLs directly)

```
grandMA3 v2.4 →  /grandma3/2-4/<slug>/      (version dir "2-4"; default)
grandMA2      →  /grandma2/<slug>/          (no version segment)
dot2          →  /dot2/<slug>/
utility       →  /utility/<slug>/
network       →  /network/<slug>/
```

Append `.md` to any of these for raw markdown. Full product/version matrix and how to map a spoken version like "2.2" to a path segment are in `references/grandocs-conventions.md`.

## Command & keyword lookup

grandMA command/keyword pages follow a fixed slug convention, so exact-syntax lookups are nearly free:

- For command-line **syntax**, the page is `keyword_<name>` (e.g. `keyword_store`, `keyword_at`). The `key_<name>` page documents the physical console key of the same name; `cue_<name>` pages cover cue-specific actions.
- For "what's the syntax for Store on MA3 2.4?": fetch `https://grandocs.samcarlton.com/grandma3/2-4/keyword_store.md` (or `command_lookup("store", "grandma3", "2.4")` via MCP — it tries `keyword_`/`key_`/`cue_` for you).
- If a slug 404s, try the `key_` prefix or fall back to `search_docs` / `/llms.txt`.
- Quote the syntax block and the syntax-notation it uses verbatim. MA notation summary is in `references/grandocs-conventions.md`.

## Answering checklist

- Resolved the page in grandocs (MCP or `.md` twin), not from memory.
- Used the version the user is running (or stated you defaulted to 2.4).
- Quoted any command syntax / tables verbatim from the doc.
- Cited the grandocs page URL, and the canonical `sourceUrl` for safety/authoritative content.
- Flagged "unofficial mirror — confirm on help.malighting.com" when the answer is safety-, conformity-, or legally-relevant.

See `references/grandocs-conventions.md` for the route/version matrix, the `.md` twin trick, the MCP endpoint, `/llms.txt` family, and MA syntax notation.

---
name: grandma-command-syntax
description: Look up and explain grandMA3, grandMA2, and dot2 command-line syntax — use when a user asks "what's the syntax for Store/At/Assign/If/MAtricks", asks what a grandMA keyword does, hits a command-line error, or needs an MA command written or debugged. Backed by the grandocs docs mirror; never invents syntax.
---

# grandMA command-line syntax

Use this skill to answer grandMA3 / grandMA2 / dot2 command-line questions: what a keyword
does, its exact syntax, its options, and worked examples. You look the syntax up from the
grandocs docs mirror and quote it — you never compose it from memory.

## Hard rules (read every time)

1. **grandocs is an UNOFFICIAL mirror.** For anything authoritative or safety-relevant
   (conformity, electrical, mounting, disposal), tell the user to confirm on the canonical
   page (`sourceUrl` in the page frontmatter, on `help.malighting.com`). Link it.
2. **Never invent grandMA command syntax.** If you have not fetched the keyword's page, say so
   and fetch it. Quote the page's `## Syntax` block verbatim — do not paraphrase or "clean up"
   the notation. If the page has no Syntax section (some pages are stubs), say it's missing and
   point to the canonical page instead of guessing.
3. **Be version-aware.** Default to grandMA3 v2.4, but the user's actual console software
   version wins. If they name a version, switch the version path segment. If they're on
   grandMA2 or dot2, those are different products with different keyword pages and notation —
   do not assume the grandMA3 syntax carries over.
4. **Quote, then explain.** Paste the verbatim syntax line first, then translate the notation
   into plain language and (when the page has them) include a worked example from the page.

## Step 1 — identify product, version, keyword

- Product: grandMA3 (default), grandMA2, or dot2. Ask only if genuinely ambiguous.
- Version: grandMA3 default `2.4` (path segment `2-4`). grandMA2 and dot2 have no version
  segment in grandocs.
- Keyword: the command word the user said (Store, At, Assign, If, MAtricks, Go, Copy, ...).
  Match it to a page slug using `references/keyword-index.md`. That file documents the slug
  scheme — it differs by product, so do not pattern-match across products from memory.

## Step 2 — fetch the page (pick one source, in priority order)

grandocs exposes several agent-native surfaces. Use whichever is available to you:

1. **MCP server** (preferred when connected). Tools:
   - `command_lookup` — keyword → its syntax page. Best fit for this skill.
   - `search_docs` — full-text search when you don't know the exact keyword.
   - `get_page` — fetch a known page by path.
   - `list_products_versions` — confirm available products/versions.
2. **Per-page `.md` twin** — append `.md` to any docs URL to get raw markdown (Stripe parity).
   Example: `https://grandocs.samcarlton.com/grandma3/2-4/keyword_store.md`
3. **`/llms.txt`** — `https://grandocs.samcarlton.com/llms.txt` for the index of what exists.
4. **Local repo** (when running inside the grandocs checkout) — read
   `src/content/docs/<product>[/<verDir>]/<slug>.md` directly.

Resolve the slug with `references/keyword-index.md`, then fetch. Example targets:
- grandMA3 Store syntax: `src/content/docs/grandma3/2-4/keyword_store.md`
  → `https://grandocs.samcarlton.com/grandma3/2-4/keyword_store.md`
- grandMA2 Store syntax: `src/content/docs/grandma2/key_keyword_store.md`
- dot2 At syntax: `src/content/docs/dot2/key_keyword_at.md`

## Step 3 — answer

1. State product + version you're answering for (e.g. "grandMA3 v2.4").
2. Quote the `## Syntax` block verbatim in a code/quote block.
3. Decode the notation using `references/syntax-notation.md` (`[]` optional, `<>` / `"Object_Name"`
   / `Object_Number` placeholder, `or` / `|` alternative, `()` optional group, `/Option` option
   keyword, `Thru` / `+` / `-` range operators).
4. Include a worked example straight from the page if it has one.
5. Link the canonical `sourceUrl` and remind that grandocs is an unofficial mirror.

## Notation cheat (full table in references/syntax-notation.md)

- `[Object]` — optional element.
- `<Placeholder>` / `"Object_Name"` / `Object_Number` — you supply a real value.
- `A or B`, `A | B` — choose one.
- `(...)` — optional group / clarifying grouping.
- `/Option`, `/option = value` — option keyword appended to a command.
- `Thru`, `+`, `-` — range and set operators (`Store Cue 1 Thru 10 + 20 Thru 30`).

## Worked pattern (grandMA3 Store)

From `keyword_store.md`, the verbatim syntax is:

> `Store [Object] ["Object_Name" or Object_Number or Next/Previous] (/Option)`

Decoded: `Store`, then optionally an object type, then optionally a name (quoted), a number,
or `Next`/`Previous`, then optionally an option keyword. Page example: `Store Cue 1 Thru 10 + 20 Thru 30`.
Always paste the real line from the fetched page rather than relying on this README copy, since
the docs are the source of truth and update on resync.

## If the keyword isn't in the index

Use `search_docs` (MCP) or `/llms.txt` to locate the page, or browse the product's content
directory. Do not answer from training knowledge — fetch the page first.

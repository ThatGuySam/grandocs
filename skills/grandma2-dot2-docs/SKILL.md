---
name: grandma2-dot2-docs
description: Answer grandMA2 and dot2 lighting console questions (command syntax, keywords, executors, cues, sequences, MAtricks, macros, presets, how-tos) by looking them up in the grandocs documentation mirror first. Use whenever a user asks about grandMA2, MA2, grandMA 2, dot2, or dot 2 consoles / onPC. (For grandMA3, use the grandma3-docs skill instead.)
---

# grandMA2 & dot2 docs router

You answer grandMA2 and dot2 questions by retrieving the relevant page from
**grandocs** (https://grandocs.samcarlton.com), an unofficial markdown mirror of
MA Lighting's documentation, and grounding every answer in it.

grandMA2 and dot2 are **older, EOL-era product lines**. The official legacy help
platform `help2.malighting.com` is **OFFLINE** — grandocs preserves grandMA2 and
dot2 content that is no longer published anywhere else. The current canonical
source is `help.malighting.com` (used as each page's `sourceUrl`).

## HARD RULES (always)

1. **grandocs is an UNOFFICIAL mirror.** For anything authoritative or
   safety-relevant — conformity, electrical specs, ratings, safety procedures,
   legal/warranty — tell the user to verify against the canonical
   `help.malighting.com` page (the `sourceUrl` in the page frontmatter). Never
   present the mirror as the authority for those topics.
2. **Never invent grandMA command syntax.** Quote the doc's syntax block
   **verbatim**. If grandocs doesn't show the syntax, say so — do not guess.
3. **Be version- and product-aware.** grandMA2 ≠ dot2 ≠ grandMA3. Confirm which
   product (and console software version) the user runs; their console wins. If
   they mention grandMA3 / MA3, hand off to the `grandma3-docs` skill instead.
4. **Always cite.** End answers with the canonical page URL you used.

## Lookup flow (grandocs-first)

1. **Identify the product.** grandMA2 → `/grandma2/` routes. dot2 → `/dot2/`
   routes. Neither has a version path segment (unlike grandMA3's `/grandma3/2-4/`).
2. **Find the page.** Prefer, in order:
   - **MCP server** (if connected): `search_docs` (filter `product: "grandma2"`
     or `"dot2"`), `command_lookup` for a command keyword, `get_page` for a known
     path, `list_products_versions` for the matrix. Tool results carry the
     canonical URL.
   - **`/llms.txt`** at https://grandocs.samcarlton.com/llms.txt — the site map /
     index; locate the section, then fetch the page.
   - **Direct `.md` twin.** Every docs URL returns raw markdown when you append
     `.md`: e.g. `https://grandocs.samcarlton.com/grandma2/key_matricks.md` or
     `https://grandocs.samcarlton.com/dot2/key_ht_cues.md`. Prefer `.md` fetches
     over scraping the HTML page.
3. **Map command keywords (grandMA2).** grandMA2 command keywords live at
   `key_keyword_<name>` pages (e.g. `Store` → `/grandma2/key_keyword_store/`,
   `At` → `/grandma2/key_keyword_at/`, `Assign` → `/grandma2/key_keyword_assign/`,
   `MAtricks` → `/grandma2/key_matricks/`). The keyword index lives at
   `/grandma2/key_command_syntax_and_keywords/`. dot2's command list is at
   `/dot2/key_commands_overview/`.
4. **Read the page, quote what matters** (syntax blocks verbatim), and answer.
5. **Cite** the canonical page URL.

## Route schemes & landmark pages

Full route schemes, the `key_keyword_*` convention, and a curated landmark-page
index live in `references/`:

- `references/routes.md` — grandMA2 & dot2 URL schemes, slug conventions, `.md`
  twin rule, frontmatter fields.
- `references/grandma2-landmarks.md` — high-value grandMA2 pages and the command
  keyword lookup pattern.
- `references/dot2-landmarks.md` — high-value dot2 pages (how-tos, views, commands).

## grandocs agent surfaces

- `/llms.txt` — machine-readable index of the whole site.
- Per-page **`.md` twins** — append `.md` to any docs URL for raw markdown.
- **MCP server** — tools `search_docs`, `get_page`, `command_lookup`,
  `list_products_versions`. Use it when connected; results include canonical
  attribution.

## Answer template

- State the product (and version, if relevant) you're answering for.
- Give the answer grounded in the grandocs page; quote syntax blocks verbatim.
- For safety/conformity/electrical/legal: add a line telling the user to verify
  on the canonical `help.malighting.com` page.
- Close with: the canonical page URL (and note grandocs is an unofficial mirror).

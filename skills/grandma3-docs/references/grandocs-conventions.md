# grandocs conventions reference

How grandocs (the unofficial MA Lighting docs mirror) is laid out, and how to fetch from it. grandocs base URL: `https://grandocs.samcarlton.com`.

> **Unofficial mirror.** grandocs mirrors `help.malighting.com`. Every page carries a `sourceUrl` to its canonical MA Lighting page. For authoritative, safety, conformity, electrical, rigging, or legal questions, always defer to and link the canonical page.

## Product / version / route matrix

| Product   | Route prefix              | Version segment | Pages  | Canonical source host                     |
| --------- | ------------------------- | --------------- | ------ | ----------------------------------------- |
| grandMA3  | `/grandma3/<verDir>/`     | yes (`2-4`)     | ~1,555 | `help.malighting.com/grandMA3/<ver>/HTML/`|
| grandMA2  | `/grandma2/`              | none            | ~827   | `help.malighting.com/grandMA2/en/help/`   |
| dot2      | `/dot2/`                  | none            | ~282   | `help.malighting.com/dot2/en/help/`       |
| utility   | `/utility/`               | none            | ~23    | `help.malighting.com/utility/en/help/`    |
| network   | `/network/`               | none            | ~64    | `help.malighting.com/network/en/help/`    |

- **Default product/version: grandMA3 v2.4** (route `/grandma3/2-4/<slug>/`).
- Only grandMA3 carries a version segment today. grandMA2 / dot2 / utility / network have no version in the path.
- Language is English (`en`) only on the mirror today.

### Mapping a spoken version to the path segment

grandMA3 version directories replace the dot with a hyphen:

| User says    | Version dir | Route prefix         |
| ------------ | ----------- | -------------------- |
| 2.4 (default)| `2-4`       | `/grandma3/2-4/`     |
| 2.3          | `2-3`       | `/grandma3/2-3/`     |
| 2.2          | `2-2`       | `/grandma3/2-2/`     |
| 2.1          | `2-1`       | `/grandma3/2-1/`     |
| 2.0          | `2-0`       | `/grandma3/2-0/`     |

Only `2-4` is confirmed populated in the current build; older version dirs may or may not exist yet. **The user's actual console software version wins** — switch the segment to match it, and if that version isn't on the mirror, say so and use the closest available version while linking the canonical site. Confirm what exists with the MCP `list_products_versions()` tool or by checking `/llms.txt`.

## The `.md` twin trick (Stripe parity)

Append `.md` to **any** docs URL to get the raw markdown of that page (with a small generated header: title, canonical URL, version note), served as `text/markdown`.

```
HTML page:  https://grandocs.samcarlton.com/grandma3/2-4/key_store/
markdown:   https://grandocs.samcarlton.com/grandma3/2-4/key_store.md
```

The twin is the page slug **without** a trailing slash plus `.md` — e.g. `/grandma3/2-4/keyword_store.md`. (There is no `…/index.md` form.)

**Prefer fetching the `.md` twin over scraping the HTML page** — it's clean markdown with tables and MA command-syntax notation preserved.

## llms.txt family

Built-time generated, served at the site root:

- `/llms.txt` — index with a Stripe-style instructions preamble (the `.md` suffix convention, MCP endpoint, version semantics, citation expectation) plus links to sections. Use it to **locate a topic** and get a page path.
- `/llms-full.txt` — full corpus, latest versions only (legacy and old versions excluded).
- `/llms-small.txt` — trimmed variant.

Typical flow without MCP: fetch `/llms.txt` → find the topic → take the page path → fetch that path + `.md` → answer + cite.

## MCP server

grandocs exposes a remote MCP server (Streamable HTTP) over a build-emitted search index. When connected, prefer it over manual fetching.

Endpoint (Cloudflare Worker): `https://grandocs-mcp.samcarlton.workers.dev/mcp` — exact URL is published on the grandocs "Building with AI" page (`/building-with-ai/`).

Add to Claude Code:

```bash
claude mcp add --transport http grandocs https://grandocs-mcp.samcarlton.workers.dev/mcp
```

Tools:

| Tool                     | Args                                          | Returns                                                              |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------------------- |
| `search_docs`            | `query`, `product?`, `version?`, `lang?`, `limit?` | ranked hits: title, snippet, canonical URL, `.md` URL          |
| `get_page`               | `path`                                        | the page's raw markdown + canonical URL                             |
| `command_lookup`         | `keyword`, `product` (`grandma3`/`grandma2`/`dot2`), `version?` | the `keyword_<name>` page as markdown — exact command syntax |
| `list_products_versions` | —                                             | product / version / language matrix from the crawl manifests        |

Every tool response ends with source attribution and an "unofficial mirror" note — cite it.

There is also a planned local stdio variant (`npx grandocs-mcp`, with `--offline`) for air-gapped show networks where a console laptop has no internet.

## Command / keyword slug convention

grandMA command and keyword pages use fixed slug prefixes, so exact-syntax lookups are near-free:

- `key_<name>` and `keyword_<name>` — e.g. `key_store`, `keyword_store`, `key_assign`, `key_at`, `key_if`, `key_matricks`, `key_blind`, `key_clear`, `key_align`, `key_channel`.
- `cue_<name>` — some cue-related keyword pages.
- grandMA2 and dot2 use `key_<name>` too.

To get the syntax for keyword `Store` on grandMA3 2.4, fetch:
`https://grandocs.samcarlton.com/grandma3/2-4/key_store.md`

If one prefix 404s, try the other (`keyword_` ↔ `key_`), then fall back to `search_docs` or `/llms.txt`.

## MA command syntax notation (quote verbatim; this is only how to read it)

When you quote a syntax block from a doc, the MA notation generally reads:

- `[ ... ]` — optional element.
- `< ... >` — placeholder the user replaces (e.g. an object number or name).
- `|` — alternatives (choose one).
- Keywords (Store, Assign, At, If, MAtricks, …) are entered on the command line; `>` in examples is the command-line prompt, not something the user types.

**Always quote the actual syntax block from the page rather than paraphrasing it** — exact tokens, capitalization, and ordering matter on a console. Never invent or "fix" syntax.

## Per-page frontmatter (what each page carries)

`title`, `description`, `product`, `version` (grandMA3 only), `lang`, `sourceUrl` (canonical `help.malighting.com` URL — cite this for authoritative answers), `scrapedAt`.

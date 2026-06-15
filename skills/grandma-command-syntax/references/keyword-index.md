# grandMA keyword → page-slug index

Map a spoken keyword to its grandocs page slug. **The slug scheme differs by product** — use
the right column for the right product. Every slug below was verified against the grandocs
content tree; the listed set is representative, not exhaustive (grandMA3 alone has 821
key/keyword pages). For anything not listed, use the MCP `search_docs` / `command_lookup`
tools or `/llms.txt` to locate the page — never guess a slug or compose syntax from memory.

> grandocs is an unofficial mirror. Always cite the canonical `sourceUrl` (help.malighting.com)
> from the page frontmatter for authoritative info.

## Slug scheme by product

| Product | Version segment | Content path | Syntax page slug | Button/key page slug |
| --- | --- | --- | --- | --- |
| grandMA3 | `2-4` (v2.4 default) | `src/content/docs/grandma3/2-4/<slug>.md` | `keyword_<kw>` (and `cue_<kw>` for cue actions) | `key_<kw>` |
| grandMA2 | none | `src/content/docs/grandma2/<slug>.md` | `key_keyword_<kw>` | `key_key_<kw>` |
| dot2 | none | `src/content/docs/dot2/<slug>.md` | `key_keyword_<kw>` | `key_key_<kw>` |

Notes:
- **grandMA3**: the *syntax* is on `keyword_<kw>` (e.g. `keyword_store`). `key_<kw>`
  (e.g. `key_store`) documents the physical button and just points to the keyword page.
  Some keywords also have `cue_<kw>` deep-dives (e.g. `cue_store`, `cue_copy`, `cue_update`).
- **grandMA2 / dot2**: there is **no** `keyword_<kw>` slug and **no** bare `key_<kw>` syntax
  page. The syntax lives on `key_keyword_<kw>` (e.g. `key_keyword_store`, `key_keyword_at`).
- Route URLs (append `.md` for the raw twin):
  - grandMA3: `https://grandocs.samcarlton.com/grandma3/2-4/keyword_store/`
  - grandMA2: `https://grandocs.samcarlton.com/grandma2/key_keyword_store/`
  - dot2:     `https://grandocs.samcarlton.com/dot2/key_keyword_at/`

## Representative keyword map (all verified to exist)

| Keyword | grandMA3 syntax slug | grandMA2 syntax slug | dot2 syntax slug |
| --- | --- | --- | --- |
| Store | `keyword_store` (also `key_store`, `cue_store`) | `key_keyword_store` | `key_keyword_store` |
| Assign | `keyword_assign` (also `key_assign`) | `key_keyword_assign` | `key_keyword_assign` |
| At | `keyword_at` (also `key_at`) | `key_keyword_at` | `key_keyword_at` |
| Blind | `keyword_blind` (also `key_blind`) | `key_keyword_blind` | `key_keyword_blind` |
| Clear | `keyword_clear` (also `key_clear`) | `key_keyword_clear` | — (use `search_docs`) |
| Copy | `keyword_copy` (also `key_copy`, `cue_copy`) | `key_keyword_copy` | `key_keyword_copy` |
| Delete | `keyword_delete` (also `key_delete`, `cue_delete`) | `key_keyword_delete` | `key_keyword_delete` |
| Edit | `keyword_edit` (also `key_edit`) | `key_keyword_edit` | `key_keyword_edit` |
| Fixture | `keyword_fixture` (also `key_fixture`) | `key_keyword_fixture` | `key_keyword_fixture` |
| Go | `keyword_go` | `key_keyword_go` | `key_keyword_go` |
| Group | `keyword_group` (also `key_group`) | `key_keyword_group` | `key_keyword_group` |
| Highlight | `keyword_highlight` | `key_keyword_highlight` | — (use `search_docs`) |
| If | `keyword_if` (also `key_if`) | `key_keyword_if` | `key_keyword_if` |
| Label | `keyword_label` | `key_keyword_label` | `key_keyword_label` |
| Move | `keyword_move` (also `key_move`) | `key_keyword_move` | `key_keyword_move` |
| Off | `keyword_off` (also `key_off`) | `key_keyword_off` | `key_keyword_off` |
| On | `keyword_on` (also `key_on`) | `key_keyword_on` | `key_keyword_on` |
| Preset | `keyword_preset` (also `key_preset`) | `key_keyword_preset` | `key_keyword_preset` |
| Record | `keyword_record` | `key_keyword_record` | `key_keyword_record` |
| Select | `keyword_select` (also `key_select`) | `key_keyword_select` | `key_keyword_select` |
| Update | `keyword_update` (also `key_update`, `cue_update`) | `key_keyword_update` | `key_keyword_update` |
| MAtricks | `keyword_matricks` (overview `matricks`) | `key_keyword_matricks` (overview `key_matricks`) | — |

A `—` means no verified page in that product's grandocs tree at index time; fall back to
`search_docs` / `/llms.txt` and the canonical site rather than assuming the command exists or
sharing grandMA3 syntax for another product.

## Resolution recipe

1. Pick the product column.
2. Take the syntax slug (the `keyword_*` / `key_keyword_*` column — that's where `## Syntax`
   lives, not the physical-button `key_*` page).
3. Fetch via MCP `command_lookup`/`get_page`, the `.md` twin URL, or the local content path.
4. If the keyword isn't listed: `command_lookup` (MCP) → `search_docs` (MCP) → `/llms.txt`.
   Never fabricate a slug or syntax.

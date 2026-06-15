# grandMA2 & dot2 route schemes

grandocs base URL: `https://grandocs.samcarlton.com`

Content lives in a Starlight `docs` collection at
`src/content/docs/<product>/<slug>.md`. grandMA2 and dot2 have **no version path
segment** (only grandMA3 does, e.g. `/grandma3/2-4/`).

## URL pattern

| Product  | Route pattern              | Example                                                | Page count |
|----------|----------------------------|--------------------------------------------------------|------------|
| grandMA2 | `/grandma2/<slug>/`        | `/grandma2/key_matricks/`                               | 827        |
| dot2     | `/dot2/<slug>/`            | `/dot2/key_ht_cues/`                                    | 282        |

Product landing pages: `/grandma2/` and `/dot2/` (the user manual index).

## Markdown twin convention (Stripe parity)

Append `.md` to **any** docs URL to get the raw markdown for that page. Prefer
this over scraping HTML.

- Page:     `https://grandocs.samcarlton.com/grandma2/key_matricks/`
- Markdown: `https://grandocs.samcarlton.com/grandma2/key_matricks.md`
- Page:     `https://grandocs.samcarlton.com/dot2/key_ht_cues/`
- Markdown: `https://grandocs.samcarlton.com/dot2/key_ht_cues.md`

## Slug conventions

- Almost every page is slugged `key_<name>` (e.g. `key_exec`, `key_presets`,
  `key_macro`, `key_cues_and_sequences`).
- **grandMA2 command keywords** are slugged `key_keyword_<name>`
  (e.g. `key_keyword_store`, `key_keyword_at`, `key_keyword_assign`,
  `key_keyword_if`, `key_keyword_blind`). There are ~317 of these. The overview /
  index page is `key_command_syntax_and_keywords`.
  - Note: grandMA3 uses bare `keyword_<name>` / `key_<name>` slugs; grandMA2 uses
    the `key_keyword_<name>` form. Don't carry a grandMA2 slug over to grandMA3.
- **dot2 how-to pages** are slugged `key_ht_<topic>` (e.g. `key_ht_cues`,
  `key_ht_groups`, `key_ht_presets`). The command list is `key_commands_overview`.
- **dot2 view/item pages** are slugged `key_view_<name>` / `key_viewitem_<name>`.

## Per-page frontmatter fields

Every page's frontmatter carries (use `sourceUrl` for citation):

- `title` — page title.
- `description` — short summary (may be absent on index pages).
- `product` — `grandma2` or `dot2`.
- `version` — optional (grandMA2/dot2 omit it).
- `lang` — `en`.
- `sourceUrl` — the **canonical** `help.malighting.com` URL to cite.
- `scrapedAt` — crawl timestamp.

Example `sourceUrl` shapes:
- grandMA2: `https://help.malighting.com/grandMA2/en/help/<slug>.html`
- dot2:     `https://help.malighting.com/dot2/en/help/<slug>.html`

## Why grandocs matters for these lines

grandMA2 and dot2 are legacy product lines. The old legacy help host
`help2.malighting.com` is **offline**, so grandocs is the preserved, searchable
copy of multi-version grandMA2/dot2 content that is no longer published elsewhere.
For authoritative/safety/conformity info, still direct users to the canonical
`help.malighting.com` page named in `sourceUrl`.

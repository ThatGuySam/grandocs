# grandMA command-line syntax notation

How to read the notation used in the `## Syntax` blocks across grandMA3, grandMA2, and dot2
docs. This is for **decoding what the docs show** — never use it to construct syntax the docs
don't show. When in doubt, quote the page verbatim and decode element by element.

> grandocs is an unofficial mirror. For authoritative syntax, confirm against the canonical
> `sourceUrl` (help.malighting.com) listed in each page's frontmatter.

## Notation symbols

| Symbol / form | Meaning | Example (from real docs) |
| --- | --- | --- |
| `[ ... ]` | **Optional** element — may be omitted. | `Store [Object] [...]` — `Object` is optional. |
| `< ... >` | **Placeholder** — substitute a real value. | `<Property>` |
| `"Object_Name"` | Placeholder for a **quoted name** you supply. | `Label MAtricks 2 "Great"` |
| `Object_Number` | Placeholder for a **numeric ID** you supply. | `Store Cue 42` |
| `A or B` | **Alternatives** — choose one. | `["Object_Name" or Object_Number or Next/Previous]` |
| `A \| B` | **Alternatives** (pipe form). | `On \| Off \| Toggle` |
| `( ... )` | **Optional group** / grouping for clarity. | `At ([Value_Type]) [Value]` |
| `/Option` | An **option keyword** appended to a command. | `Store ... (/Option)` → `Store Group /Merge` |
| `/option = value` | Option **with a value** (grandMA2 style). | `Store [object-list] "Name" / [option] = [option value]` |
| `Next` / `Previous` | Relative selectors for pool objects. | `Store Cue Next` |

## Operators used inside arguments

| Operator | Meaning | Example |
| --- | --- | --- |
| `Thru` | Range. | `Fixture 1 Thru 4` |
| `+` | Add to selection / set. | `Cue 1 Thru 10 + 20 Thru 30` |
| `-` | Remove from selection / set. | `Group 1 Thru 10 - 5` |
| `.` | Sub-address (part, recipe line). | `Cue 1 Part 0.1` |

## Keyword categories (grandMA3 terminology)

- **Function keywords** — perform an action (Store, Copy, Delete, Move, Record, Update).
- **Helping keywords** — modify/target a function (At, If, Thru, Cue, Group used as targets).
- **Object types** — name a pool/object (Fixture, Group, Preset, Sequence, MAtricks).
- **Option keywords** — `/`-prefixed flags on a function (e.g. `/Merge`, `/CueOnly`, `/Active`).

`At` is the documented exception: it accepts an object list *before* the function
(`Copy Group 4 At 10`) as well as after it.

## Product differences (do not assume one carries to another)

- **grandMA3 v2.4**: notation as above. Syntax lives on `keyword_<kw>` pages. Option keywords
  are `/Name` and link to `ok_<name>` pages.
- **grandMA2**: similar `[ ]` optional notation, but options use the
  `/ [option] = [option value]` form with short aliases, and there's a `Store /?` introspection
  command that lists options live on the console. Syntax lives on `key_keyword_<kw>` pages.
- **dot2**: simplified console; syntax pages often present numbered usage variants rather than
  one formal grammar line. Syntax lives on `key_keyword_<kw>` pages.

## How to present a decode to the user

1. Paste the verbatim `## Syntax` line(s) from the fetched page.
2. Walk left-to-right, naming each token (keyword, optional, placeholder, option).
3. Show one page example.
4. Link the canonical `sourceUrl` and note grandocs is unofficial.

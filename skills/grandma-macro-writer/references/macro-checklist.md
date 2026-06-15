# Macro lint-by-checklist

Run **every** macro through this before showing it to the user. Each item is a gate;
if you can't satisfy one, fix the macro or tell the user explicitly that you couldn't
verify it. Cite the grandocs page that proves each command line.

grandocs base URL: `https://grandocs.samcarlton.com`. Append `.md` to any docs URL
for raw markdown, or use the MCP tools (`command_lookup`, `search_docs`, `get_page`,
`list_products_versions`).

## 0. Target pinned

- [ ] Generation confirmed: grandMA2 / grandMA3 / dot2. (They are different command
      languages — never mix keywords across them.)
- [ ] Software version confirmed. MA3 default is **v2.4**; the user's actual console
      version wins. You stated which version's docs you read.
- [ ] Delivery confirmed: typed into the editor by hand, or imported as XML.

## 1. Every keyword is real and correctly used

- [ ] Each command line's keyword was looked up on grandocs and its **Syntax** block
      quoted verbatim — not written from memory.
- [ ] Right slug family for the generation:
      - grandMA3: `keyword_<name>` or `key_<name>` (e.g. `keyword_store`, `keyword_macro`).
      - grandMA2: `key_keyword_<name>` (e.g. `key_keyword_store`).
      - dot2: command list at `/dot2/key_commands_overview`; how-tos `key_ht_<topic>`.
      If one prefix 404s, try the other before assuming the keyword doesn't exist.
- [ ] Options/flags (e.g. `/NoConfirmation`, MA3 `/Path`, `/Gaps`, `/NoDependencies`)
      are spelled as the doc shows; you didn't invent option keywords.
- [ ] Object addressing is valid for the generation (MA3 `Macro 3.4` = macro 3 line 4;
      MA2 `ViewButton 11.5`, `Exec 2.7`, etc. as shown in the cited page).

## 2. Quoting (the most common silent failure)

- [ ] Any object **name** or **text** containing spaces is wrapped in `"double quotes"`.
- [ ] Variable **content** that must be stored as text is quoted (per
      `macro_variables.md`). Numbers (Integer/Double) don't need quotes.
- [ ] Quotes are straight `"`, balanced, and not smart/curly quotes.
- [ ] Variable names are correct **case** (names are case-sensitive) and ideally
      space-free (camelCase/PascalCase per the doc's hint).

## 3. Line flow / timing

**grandMA3** (`/grandma3/2-4/macros.md`):

- [ ] Each row's `Wait` is a time, or **Follow** (= wait 0, run next immediately), or
      **Go** (pause until a new Go+). You used `Follow` where you meant "no delay,"
      not a literal `0` unless intended.
- [ ] `Enabled` is `Yes` for lines that should run.
- [ ] `Execute` matches intent: `Yes` runs the line (auto-Please); `No` only places the
      command on the command line for the user.
- [ ] `AddToCmdline` is `Yes` only when you mean to append this line to existing
      command-line content.
- [ ] A `Wait` is present where the console needs time to finish (e.g. after storing many
      cues before jumping to one) — see the timing note in `key_macro_what_are` (MA2) /
      `macros` (MA3).

**grandMA2** (`/grandma2/key_macro_cli.md`):

- [ ] `@` at **end** of a line = drop to command line and wait for user input, then
      continue. Used only where user input is intended.
- [ ] `@` at **start** of a line = append to already-typed input — and **CLI is turned
      OFF** for this macro (otherwise the commands fail; this is called out as Important
      in the doc).
- [ ] CLI on/off setting matches how the macro is meant to be triggered.

## 4. Destructive / stateful lines

- [ ] `Delete` / overwriting `Store` lines that would pop a confirmation include
      `/NoConfirmation` (or equivalent) when the macro must run unattended — pattern from
      the "World Is Selection" example in `macro_examples.md`
      (`Delete World 999 /NoConfirmation`).
- [ ] Macro-calls-macro (MA3): if the inner macro must keep running after the outer one
      ends, you used `Call Macro X`, not a bare `Macro X` (bare call stops when caller
      stops — `macro_examples.md`).
- [ ] Variable **scope** is right: `SetUserVariable` (per-user) vs `SetGlobalVariable`
      (whole session) — `macro_variables.md`.
- [ ] No line silently changes patch/output/DMX without the user understanding it; if it
      does, you flagged the real-world effect.

## 5. XML delivery (only if importing a file)

- [ ] File is **well-formed XML** (single root, all tags closed, attributes quoted,
      `&`/`<`/`>`/`"` escaped as `&amp;`/`&lt;`/`&gt;`/`&quot;`).
- [ ] Correct generation schema and version namespace (MA2 vs MA3 differ — see
      `macro-formats.md`); the schema version matches the **target console version**, not
      a newer one.
- [ ] Exact import path given to the user (console vs onPC; library folder vs USB) — see
      the file-paths section of `macro-formats.md` and `keyword_import.md` (MA3) /
      `key_export_and_import.md` + `key_keyword_import.md` (MA2).
- [ ] You told the user that MA only guarantees import of XML it exported itself, and
      hand-written XML should be verified by importing on a non-production show first.

## 6. Final gates

- [ ] Every command line has a cited grandocs page proving its syntax.
- [ ] You stated: generation + version assumed, that you linted with this checklist, and
      any line you could **not** ground (and did not include unverifiable syntax).
- [ ] If the macro touches patch/output/safety/conformity: added the **unofficial
      mirror** note and linked the canonical `help.malighting.com` page (`sourceUrl`).

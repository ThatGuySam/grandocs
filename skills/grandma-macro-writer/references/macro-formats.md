# grandMA macro & plugin formats reference

Detailed reference for writing/fixing macros. Everything here that is a **command-line
fact** is grounded in a grandocs page (cited inline). Anything about raw **XML file
structure** is convention from MA's import/export system — the scraped help pages
document GUI import, not the raw schema, so **verify hand-written XML by importing it on a
non-production show file first**, and prefer exporting a real example from the target
console to copy its exact structure.

grandocs base URL: `https://grandocs.samcarlton.com` (append `.md` for raw markdown).

---

## 1. grandMA3 macros

### Anatomy of a macro (cite: `/grandma3/2-4/macros.md`)

A macro lives in the **Macro Pool** (Data Pools tab), shared across all users in the show
file. A macro is one or more **rows**; each row has cells:

| Cell | Meaning |
|---|---|
| `Command` | The command line this row executes. |
| `Wait` | Delay **after** this row before the next. A time, or **Follow** (= wait 0, run next at once) or **Go** (pause the macro until a new Go+). |
| `Enabled` | `Yes`/`No` — whether the row runs when triggered. |
| `AddToCmdline` | `Yes`/`No` — append this row's command to existing command-line content. |
| `Execute` | `Yes` = run the row (auto-"Please" at the end). `No` = place the command on the command line for the user instead of running it. |

### The `Macro` keyword (cite: `/grandma3/2-4/keyword_macro.md`)

Syntax (verbatim from the page):

```
[Function] Macro ["Macro_Name" or Macro_Number]
[Function] DataPool ["DataPool_Name" or DataPool_Number] Macro ["Macro_Name" or Macro_Number]
```

- Default function is `Go+` — `Macro 5` starts macro 5.
- Address a single line as `Macro <n>.<line>` — e.g. `Edit Macro 3.4 "Wait" "Go"` sets
  the Wait cell of macro 3 line 4.

### Calling macros from macros (cite: `/grandma3/2-4/macro_examples.md`)

A macro started by another macro **stops when the first macro stops**. To run the inner
macro independently of its caller, use `Call Macro X`. Disabled lines (`Enabled No`) are
skipped.

### Variables (cite: `/grandma3/2-4/macro_variables.md`)

- Types: **Integer**, **Double** (6 decimals), **Text**. Variables are typeless (can be
  reassigned to a different type).
- Names are **case-sensitive**; any characters allowed, but avoid spaces
  (camelCase/PascalCase recommended by the doc).
- Two scopes, two keywords (syntax verbatim):

```
SetGlobalVariable ["Variable_Name"] ["Content text with or without spaces"]
SetGlobalVariable ["Variable_Name"] [Integer or Double]
SetUserVariable   ["Variable_Name"] ["Content text with or without spaces"]
SetUserVariable   ["Variable_Name"] [Integer or Double]
```

- **User** variables: only the creating user profile sees them. **Global**: whole session.
- Quotation marks matter: required when a name contains spaces, and required around text
  content so it's stored as a text string (Important box on the page).

### Importing a macro (cite: `/grandma3/2-4/macro_import.md`, `/grandma3/2-4/keyword_import.md`)

Two routes:

1. **From the macro library, in the editor:** Edit an empty pool object → tap **Import**
   at the bottom → search/scroll → select → **Import**.
2. **Show Creator → Import menu:** `Menu` → Show Creator → Import → Macros (Data Pools
   column) → pick the library macro → tap the destination empty pool object → Import.
   If no pool object is selected, it imports to the next free one.

The `Import` keyword (verbatim syntax) brings exported show-file data (XML) into the show:

```
Import [Object] Library "File Name.xml" (If Drive [Drive_Number]) (At ["Object_Name" or Object_Number]) (/Option) ("Option_Value")
```

Option keywords on the page: `/Path`, `/Gaps`, `/NoDependencies`, `/NoRefresh`, `/Type`.
By default files import from the relevant folder in the library folder structure on the
local drive or a selected USB stick (see Folder Structure on the site).

### MA3 macro XML (convention — verify against a real export)

When delivering a macro as a file rather than typing it, MA3 exchanges objects as XML
under a `GMA3` root carrying a `DataVersion` matching the software version (e.g. it must
match your target, like a 2.4 file for a 2.4 console — **do not** hand it a newer
`DataVersion`). A macro file contains a `Macro` element whose child `MacroLine` elements
carry the same fields as the editor cells (`command`, `wait`, `enabled`, `cmdline_add` /
`add_to_cmdline`, `execute` — exact attribute names vary by version). Because the scraped
help documents GUI import (not the raw schema), the safe path is:

1. On the target console, store a small example macro and **export** it
   (Show Creator → Export, or `Export Macro …`).
2. Copy that file's exact structure/attribute names/`DataVersion`.
3. Edit values, keep the structure, re-import on a test show.

Never present a fabricated attribute name as fact — say it's a template to verify.

---

## 2. grandMA2 macros

### Anatomy (cite: `/grandma2/key_macro_what_are.md`, `/grandma2/key_macro_create.md`)

Macros live in the **Macro Pool** (pool style or sheet style), shared by all users. A
macro is a list of lines; in the editor each line is a `No.` + `CMD` (command). Build via
**Edit** an empty pool object → **Add** line → type command → **Label**.

- **Timed/triggered lines:** lines can run as fast as possible, be **timed** (delay before
  the next line — needed when the software needs time, e.g. after storing 1000 cues before
  jumping to one), or **wait for a user trigger**.
- **Recording (cite: `/grandma2/key_macro_record.md`):** `MA + Store` (Record) → `Macro
  <n> Please` records typed command-line commands (with timing) into a macro; repeat
  Record to stop. Recorded macros are **timed**.

### The `Macro` keyword

Use the grandMA2 keyword page slug `key_keyword_macro` (`/grandma2/key_keyword_macro.md`).
Run with `Macro 5 Please` or by tapping the pool object. Assign to executors/X-keys/view
buttons — `Assign Macro 1 At Exec 2.7` (cite: `/grandma2/key_macro_assign.md`).

### Command-line interaction & the `@` character (cite: `/grandma2/key_macro_cli.md`)

This is the MA2 mechanism MA3 replaced with the `Execute`/`AddToCmdline` fields. Two
distinct concepts on one page:

- **CLI (Command Line Interaction) on/off** for the whole macro: with CLI **off**, pressing
  the macro executes its commands directly instead of dropping them onto your command line.
  Set when creating/editing the macro.
- **The `@` special character** inside a line (only meaningful in macros):
  - `@` at the **end** of a line → puts the command in the command-line input and **waits
    for the user** to finish it (type a value + Please), then continues to the next line.
    Example from the page:

    | No. | CMD          |
    | --- | ------------ |
    | 1   | Group 4 At @ |
    | 2   | Store Cue    |

    Running it leaves `Group 4 At` on the command line, waits for you to type the value,
    then stores the cue.
  - `@` at the **start** of a line → **appends** the line to already-typed input. The page
    marks this **Important: turn CLI off for the macro, or the commands fail.**

### Variables (cite: `/grandma2/key_macro_create_variables.md`)

MA2 has user and global variables too, but the keywords/forms differ from MA3 — look up
the page (and the relevant `key_keyword_<name>` variable keyword) rather than reusing the
MA3 `SetUserVariable` syntax. Quoting rules for spaces/text still apply.

### Import / export (cite: `/grandma2/key_export_and_import.md`, `/grandma2/key_keyword_import.md`)

MA2 has no dedicated "import a macro" help page — macro import goes through the general
export/import system. Ground the flow and the `Import` keyword in
`/grandma2/key_export_and_import.md` and `/grandma2/key_keyword_import.md` (the
predefined-import GUI is `/grandma2/key_ei_import_gui.md` /
`/grandma2/key_ei_import_predefined.md`).

### Conditions & pop-ups (advanced)

MA2 supports conditional macro lines and user-input pop-ups
(`/grandma2/key_macro_create_condition.md`, `/grandma2/key_macro_create_popup.md`,
`/grandma2/key_macro_create_timing.md`). Ground any condition/pop-up syntax in those pages.

### MA2 macro XML (convention — verify against a real export)

MA2 exports/imports macros as XML, typically under an `MA` root with a `major_vers` /
`minor_vers` / `stream_vers` version trio and a `Macro` element containing `Macroline`
children, each with a `Line` child holding the command text. Exact tag/attribute names
vary by 3.x release. Same rule as MA3: **export a real macro from the target console and
copy its structure**; don't assert fabricated tag names.

---

## 3. dot2 macros

dot2 macros are intentionally minimal compared to MA2/MA3 — check
`/dot2/key_key_macro.md` (and the command list `/dot2/key_commands_overview`) before
porting any MA2/MA3 feature. Do not assume `@`, variables, or conditions exist on dot2.

---

## 4. grandMA3 Lua plugins (cite: `/grandma3/2-4/plugins.md`, `/grandma3/2-4/keyword_plugin.md`)

When a macro can't do the job, the next step on MA3 is a **Lua plugin** (more powerful than
macros). Key facts from the docs:

- MA3 v2.4 runs **Lua 5.4.8** with all standard libraries plus custom grandMA3 functions.
  Check the running version with the `Version` keyword.
- `HelpLua` writes `grandMA3_lua_functions.txt` (Object-Free API + Object API) into the
  `gma3_library` folder — the authoritative function list for that software version.
- Plugins live in the **Plugins Pool**; create by editing an empty pool object. Run Lua
  inline with the `Lua` keyword, or call a plugin with the `Plugin` keyword:

```
([Function]) Plugin ["Plugin_Name" or Plugin_Number](.["LuaComponent_Name" or LuaComponent_Number]) ("Argument_Value")
```

- **Important (from the page):** plugins go deeper than normal console use, may need
  rewriting when migrating show files to future software, and **MA Lighting tech support
  does not support plugins/Lua scripts.** Surface this to the user.
- The Lua/object API **changes between MA3 releases** — version-gate any plugin advice and
  tell the user which version's `HelpLua` output it matches. For deep MA3 Lua API work,
  hand off to the `grandma3-lua-api` skill.

MA2 also supports Lua plugins (very advanced) — `/grandma2/key_plugins.md`,
`/grandma2/key_plugins_what_is_lua.md`.

---

## 5. Filesystem locations (where macro/plugin files live)

The exact, citable folder paths are on the site's **Folder Structure** topic
(`/grandma3/2-4/fm_folder_structure/` for MA3) — fetch it for the authoritative tree
rather than asserting paths. General shape to expect (verify before quoting to a user):

- **grandMA3 onPC (typical):** a `gma3_library` folder under the user's MA documents
  directory holds importable library content; the show file (`.show`) is a packaged file,
  not a loose folder of macros. `HelpLua` output (`grandMA3_lua_functions.txt`) lands in
  `gma3_library`.
- **grandMA3 console:** same library structure on the internal drive; USB import/export via
  a selected drive (`If Drive [n]` in the `Import` syntax).
- **grandMA2 onPC:** macros/plugins live inside the show file; import/export XML goes
  through the Backup menu / `Import`-`Export` to the local drive or USB.

Because these paths differ by OS, install location, and software version, **fetch the
Folder Structure page and quote it** instead of stating a path from memory. If you can't
fetch it, tell the user where to look (Folder Structure topic) rather than guessing.

---

## 6. Common failures → fix (all grounded above)

| Symptom | Likely cause | Fix |
|---|---|---|
| Macro quits partway through (MA3) | Inner macro called by a stopped caller | Use `Call Macro X` instead of `Macro X`. |
| Macro pauses unexpectedly mid-run (MA3) | A line's `Wait` is set to **Go** | Set `Wait` to `Follow` or a time. |
| MA2 `@`-append line does nothing / errors | CLI left **on** | Turn CLI **off** for the macro (start-`@` requires it). |
| Stores/jumps run too fast, target not ready | No wait after a heavy command | Insert a `Wait`/timed line after the heavy command. |
| Variable not substituted | Wrong **case** or wrong **scope** (user vs global) | Match case exactly; use the scope the setter used. |
| Name/text with spaces breaks the command | Missing quotes | Wrap the spaced name/text in `"…"`. |
| Macro stalls on a confirmation pop-up when run unattended | Destructive line pops a confirm | Add `/NoConfirmation` (see `Delete World 999 /NoConfirmation`). |
| Imported XML rejected by console | Wrong `DataVersion`/schema or malformed XML | Export a real macro from the target console, copy its structure/version, re-import on a test show. |

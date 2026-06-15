# grandMA3 Lua function index (v2.4)

High-traffic functions with their **verbatim signatures** (as titled on the
grandocs page) and slugs. Signatures and availability are **grandMA3 v2.4**;
they shift between releases — re-verify on the matching `help.malighting.com`
version for the user's console software. This is a jump table, **not** a
substitute for fetching the page: always open the page (`.md` twin, MCP
`get_page`, or the slug below) for the full arguments/return/example before
writing code, and quote its example block verbatim.

Page URL pattern (markdown twin):
`https://grandocs.samcarlton.com/grandma3/2-4/<slug>.md`
Canonical: `https://help.malighting.com/grandMA3/2.4/HTML/<slug>.html`

## Concept / index pages

| Topic | Slug |
|---|---|
| Object API overview (handle/colon notation) | `lua_object` |
| Object-Free API overview | `lua_objectfree` |
| Handle — `light_userdata` (what a handle is) | `lua_handle` |
| Interface Functions overview | `lua_interface` |
| Progress Bar (full multi-function example) | `lua_interface_progressbar` |

## Object-Free API (call directly: `Cmd(...)`, not `obj:Cmd()`)

| Signature (verbatim) | Slug |
|---|---|
| `Cmd(string[, handle])` | `lua_objectfree_cmd` |
| `CmdIndirect(string, handle, handle)` | `lua_objectfree_cmdindirect` |
| `CmdIndirectWait(string, handle, handle)` | `lua_objectfree_cmdindirectwait` |
| `CmdObj()` | `lua_objectfree_cmdobj` |
| `Echo(string)` | `lua_objectfree_echo` |
| `ErrEcho(string)` | `lua_objectfree_errecho` |
| `ErrPrintf(...)` (error feedback) | `lua_objectfree_errprintf` |
| `GlobalVars()` | `lua_objectfree_globalvars` |
| `GetVar(handle, string)` | `lua_objectfree_getvar` |
| `SetVar(...)` | `lua_objectfree_setvar` |
| `DelVar(handle, string)` | `lua_objectfree_delvar` |
| `Confirm(string, string, integer, boolean)` | `lua_objectfree_confirm` |
| `MessageBox(table)` | `lua_objectfree_messagebox` |
| `TextInput([string[, string[, integer[, integer]]]])` | `lua_objectfree_textinput` |
| `Root()` | `lua_objectfree_root` |
| `CurrentUser()` | `lua_objectfree_currentuser` |
| `SelectedSequence()` | `lua_objectfree_selectedsequence` |
| `DataPool()` | `lua_objectfree_datapool` |
| `BuildDetails()` | `lua_objectfree_builddetails` |
| `HostType()` / `HostOS()` / `HostSubType()` | `lua_objectfree_hosttype` / `_hostos` / `_hostsubtype` |
| `GetObjApiDescriptor()` (introspect the API) | `lua_objectfree_getobjapidescriptor` |
| `GetApiDescriptor()` | `lua_objectfree_getapidescriptor` |
| `Import(...)` / `Export(...)` / `ExportJson(...)` / `ExportCsv(...)` | `lua_objectfree_import` / `_export` / `_exportjson` / `_exportcsv` |
| `FileExists(...)` / `DirList(string, string)` | `lua_objectfree_fileexists` / `_dirlist` |
| `CreateUndo(string)` / `CloseUndo(handle)` | `lua_objectfree_createundo` / `_closeundo` |

### Progress bar set (used together — see `lua_interface_progressbar`)

| Function | Slug |
|---|---|
| `StartProgress(title)` | `lua_objectfree_startprogress` |
| `SetProgressRange(handle, start, end)` | `lua_objectfree_setprogressrange` |
| `SetProgress(handle, value)` | `lua_objectfree_setprogress` |
| `SetProgressText(handle, text)` | `lua_objectfree_setprogresstext` |
| `IncProgress(handle, n)` | `lua_objectfree_incprogress` |
| `StopProgress(handle)` | `lua_objectfree_stopprogress` |

> `Printf` and `ErrPrintf` appear throughout the official examples for
> command-line feedback. Quote their usage from a page that demonstrates them
> rather than assuming format-string behavior.

## Object API (methods on a handle — colon or handle notation)

`object:Func()` (colon) is equivalent to `object.Func(object)` (handle). See
`lua_object` for the notation rules.

| Signature (verbatim) | Slug |
|---|---|
| `Get(handle, string[, integer])` | `lua_object_get` |
| `Set(handle, string, string[, integer])` | `lua_object_set` |
| `Addr(handle[, handle[, boolean]])` | `lua_object_addr` |
| `AddrNative(handle[, handle[, boolean]])` | `lua_object_addrnative` |
| `Children(handle)` | `lua_object_children` |
| `Count(handle)` | `lua_object_count` |
| `Dump(handle)` | `lua_object_dump` |
| `GetClass(handle)` | `lua_object_getclass` |
| `GetChildClass(handle)` | `lua_object_getchildclass` |
| `GetDependencies(handle)` | `lua_object_getdependencies` |
| `GetReferences(handle)` | `lua_object_getreferences` |
| `HasActivePlayback(handle)` | `lua_object_hasactiveplayback` |
| `Ptr(handle, integer)` | `lua_object_ptr` |
| `SetFader(handle, {[number], [boolean], [string]})` | `lua_object_setfader` |
| `GetFaderText(handle, {[string], [integer]})` | `lua_object_getfadertext` |
| `Import(handle, string, string)` / `Export(handle, string, string)` | `lua_object_import` / `lua_object_export` |

> ~157 `lua_*` pages exist in grandocs (full Object and Object-Free APIs). If a
> function isn't listed here, search for it (`search_docs` or fetch
> `lua_objectfree.md` / `lua_object.md`, which list every subtopic with its
> slug) before assuming it doesn't exist — or that it does.

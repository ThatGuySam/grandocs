---
title: "CmdIndirect(string[, handle[, handle]])"
description: "The CmdIndirect Lua function executes a command within the grandMA3 command line. It is executed asynchronously in the Main task. It does not block the Lua exec"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_cmdindirect.html"
scrapedAt: "2026-06-12T21:25:00.563Z"
---
## Description

The **CmdIndirect** Lua function executes a command within the grandMA3 command line. It is executed asynchronously in the Main task. It does not block the Lua execution since it is not executed in the Lua Task.

## Arguments

- **String**:\
  A string with the command to be executed in the command line. Do not add a please or enter to execute the command.
- **Handle** (optional):\
  A handle to an undo (oops) list. Learn more in the [CreateUndo topic](/grandma3/2-4/lua_objectfree_createundo/).
- **Handle** (optional):\
  This is a handle for the target for the command. The target can be a specific screen. See the example below.

## Return

This function does not return anything.

## Example

This example prints "1" and "2" in the Command Line History and let the main task open the [Configure Display pop-up](/grandma3/2-4/ws_ui_display_configuration/) on screen 2.

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                         |
| ```
return function()
    --Print something
    Printf("1")
    --Use the 'CmdIndirect' to open a pop-up
    CmdIndirect("Menu DisplayConfig", nil, GetDisplayByIndex(2))
    --Print something else
    Printf("2")
end
``` |

The Command Line History shows:

|      |                      |
| ---- | -------------------- |
| OK : | Call Plugin 49       |
| 1    |                      |
| 2    |                      |
| OK : | Menu "DisplayConfig" |

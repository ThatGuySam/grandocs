---
title: "CmdIndirectWait(string[, handle[, handle]])"
description: "The CmdIndirectWait Lua function executes a command within the grandMA3 command line. It does not block the Lua execution and is executed synchronously in the m"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_cmdindirectwait.html"
scrapedAt: "2026-06-12T21:25:00.610Z"
---
## Description

The **CmdIndirectWait** Lua function executes a command within the grandMA3 command line. It does not block the Lua execution and is executed synchronously in the main task. Synchronous commands wait for the command to be executed before executing any following command.

## Arguments

- **String**:\
  A string with the command to be executed in the command line. Do not add a please or enter to execute the command.
- **Handle** (optional):\
  A handle to an undo (oops) list. Learn more in the [CreateUndo](/grandma3/2-4/lua_objectfree_createundo/) topic.
- **Handle** (optional):\
  This is a handle for the target for the command. The target can be a specific screen. See the example below.

## Return

This function does not return anything.

## Example

This example prints "1" and "2" in the Command Line History and lets the main task open the [Configure Display pop-up](/grandma3/2-4/ws_ui_display_configuration/) on screen 2.

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                 |
| ```
return function()
    --Print something
    Printf("1")
    --Use the 'CmdIndirectWait' to open a pop-up
    CmdIndirectWait("Menu DisplayConfig", nil, GetDisplayByIndex(2))
    --Print something else
    Printf("2")
end
``` |

The Command Line History shows:

|      |                      |
| ---- | -------------------- |
| OK : | Call Plugin 50       |
| 1    |                      |
| OK : | Menu "DisplayConfig" |
| 2    |                      |

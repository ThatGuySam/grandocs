---
title: "Cmd(string[, handle])"
description: "The Cmd Lua function executes a command in the grandMA3 command line. It is executed in a Lua task - not the Main task (standard typed commands are run in the M"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_cmd.html"
scrapedAt: "2026-06-15T18:25:29.296Z"
pagefind: false
---
## Description

The **Cmd** Lua function executes a command in the grandMA3 command line. It is executed in a Lua task - not the Main task (standard typed commands are run in the Main task). It is executed synchronously, and it blocks the Lua task while executing. This means that a bad command has the potential to block the system.

Alternative functions are [CmdIndirect()](/grandma3/2-3/lua_objectfree_cmdindirect/) and [CmdIndirectWait()](/grandma3/2-3/lua_objectfree_cmdindirectwait/).

## Argument

- **String**:\
  A string with the command to be executed in the command line. Do not add a please or enter to execute the command.
- **Handle** (optional):\
  A handle to an undo (oops) list. Learn more in the [CreateUndo topic](/grandma3/2-3/lua_objectfree_createundo/).
- **...** (optional):\
  Additional arguments relevant for the command. 

## Return

- **String**:\
  A string is returned with the execution feedback known from the command line feedback

  - **OK**:\
    Command executed.
  - **Syntax Error**:\
    The command was not executed because of a syntax error.
  - **Illegal Command**:\
    Command not executed because of some illegal command or action.

The returned string does not need to be used.

## Example

This example executes the command "ClearAll" in the command line.

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                 |
| ```
return function()
    --Execute the command directly
    Cmd("ClearAll")
end
``` |

---
title: "Printf(string)"
description: "The Printf Lua function prints a string in the Command Line History and System Monitor."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_printf.html"
scrapedAt: "2026-06-12T21:25:05.286Z"
---
## Description

The Printf Lua function prints a string in the Command Line History and System Monitor.

# Command Line History

The **Command Line History** window shows feedback from the system based in the user input.

Learn more in the [Command Line History topic](/grandma3/2-4/ws_ui_command_line/).

# System Monitor

The **System Monitor** window shows what is happening at the station. This includes feedback on user commands. It is a log of the different things happening in the background. It also shows warnings, errors, and changes to the system.

Learn more in the [System Monitor topic](/grandma3/2-4/si_system_monitor/).

## Argument

- **String**:\
  The string text to be printed to the Command Line History.

## Return

This function does not return anything.

## Example

This example prints "Hello World!" in the Command Line History:

|                                                          |
| -------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                     |
| ```
return function()
    Printf("Hello World!")
end
``` |

---
title: "DeskLocked()"
description: "The DeskLocked Lua function returns a boolean indicating if the station is locked."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_desklocked.html"
scrapedAt: "2026-06-12T21:25:01.293Z"
---
## Description

The **DeskLocked** Lua function returns a boolean indicating if the station is locked.

## Arguments

This function does not accept any arguments.

## Return

- **Boolean**:\
  The boolean indicates if the station is desk locked or not.

  - **True** (or 1): The station is locked.
  - **False** (or 0): The station is not locked.

## Example

This example prints the boolean number indicating the "DeskLocked" status to the [Command Line History](/grandma3/2-4/ws_ui_command_line/).

|                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                  |
| ```
return function()
    -- The DeskLocked() return is printed.
    Printf("The desk is locked: " .. tostring(DeskLocked()))
end
``` |

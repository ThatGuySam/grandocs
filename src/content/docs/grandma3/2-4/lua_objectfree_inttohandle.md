---
title: "IntToHandle(integer)"
description: "The IntToHandle Lua function converts an integer number into a handle. The integer needs to correlate with an actual handle."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_inttohandle.html"
scrapedAt: "2026-06-12T21:25:04.837Z"
---
The **IntToHandle** Lua function converts an integer number into a handle. The integer needs to correlate with an actual handle.

See the [Handle topic](/grandma3/2-4/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Integer**:\
  The integer that correlates to an object's handle.

## Return

- **Handle**:\
  The returned handle of the object correlates with the integer.

## Example

This example prints the handle integer number for the selected sequence. It also converts the integer back to a handle and uses this to print the name of the sequence:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    -- Convert the handle of the currently selected sequence to an integer
    local handleInt = HandleToInt(SelectedSequence())
    -- Print the handle integer
    Printf("The handle integer number of the selected sequence: %i", HandleToInt(SelectedSequence()))
    -- Convter the integer back to a hanndle and use it to get the sequence name
    Printf("The name of the selected sequence is: %s", IntToHandle(handleInt).name)
end
``` |

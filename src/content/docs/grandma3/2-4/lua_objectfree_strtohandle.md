---
title: "StrToHandle(string)"
description: "The object-free StrToHandle Lua function converts a string with a hexadecimal number format into a handle. The string needs to correlate with an actual handle."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_strtohandle.html"
scrapedAt: "2026-06-12T21:25:06.460Z"
---
The object-free StrToHandle Lua function converts a string with a hexadecimal number format into a handle. The string needs to correlate with an actual handle.

See the [Handle topic](/grandma3/2-4/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **String**:\
  The string with a handle number in a hexadecimal format.

## Return

- **Handle**:\
  The returned handle based on the string with a hexadecimal number.

## Example

This example prints the handle hex number for the selected sequence. It also converts the string back to a handle and uses this to print the name of the sequence:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ```
return function()
    -- Store a variable with the string of the handle converted to hex
    local mySeqStr = HandleToStr(SelectedSequence())
    -- Print some feedback with the handle in a string version
    Printf("The handle for the selected sequence (string version): %s", mySeqStr)
    -- Print some feedback where the string is converted back to a handle
    Printf("The name of the selected sequence is: %s", StrToHandle(mySeqStr).name)
end
``` |

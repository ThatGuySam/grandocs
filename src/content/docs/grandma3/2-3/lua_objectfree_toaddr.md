---
title: "ToAddr(handle[, boolean])"
description: "The ToAddr Lua object-free function converts a handle to an address string that can be used in commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_toaddr.html"
scrapedAt: "2026-06-15T18:25:35.493Z"
pagefind: false
---
## Description

The **ToAddr** Lua object-free function converts a handle to an address string that can be used in commands.

See the Handle topic for more info regarding handles, addresses, and links to other related functions.

## Arguments

- **Handle**:\
  The function takes a handle of an object as an argument.
- **Boolean** (optional):\
  This returns the address using the names instead of numbers. The default is False, which returns the number version of the address.

## Return

- **String**:\
  String with the address value.

## Example

This example prints the address of the selected sequence in both the numbered and named versions.

|                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                      |
| ```
return function ()
    local mySequence = SelectedSequence()
    -- Print the address to the selected sequence in number and name format.
    Printf(ToAddr(mySequence))
    Printf(ToAddr(mySequence, true))
end
``` |

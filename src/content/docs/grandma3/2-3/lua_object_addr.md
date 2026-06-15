---
title: "Addr(handle[, handle[, boolean]])"
description: "The Addr Lua object function converts a handle to an address string that can be used in commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_addr.html"
scrapedAt: "2026-06-15T18:25:35.843Z"
pagefind: false
---
## Description

The **Addr** Lua object function converts a handle to an address string that can be used in commands.

See the [Handle topic](/grandma3/2-3/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument. This is the handle to the object where the address is requested.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

   

- **Handle** (optional):\
  The returned address is from the root as a default. This optional handle can specify a different base location. It must still be a base location in the address path from the root to the object.

- **Boolean | nil** (optional):\
  This can be useful if there is a difference between the ToAddr() and Addr(). Setting this to "true" uses the index number from the ToAddr() instead of the Addr() index number. See the example below.

  The ToAddr() object function returns the address as a text string using names. Learn more in the [ToAddr() topic](/grandma3/2-3/lua_object_toaddr/).

- **Boolean** (optional):\
  In some edge cases, the cue address is not resolved correctly. Setting this boolean to true will fix this.

## Return

- **String**:\
  Text string with the address in a parent-child number format separated by dots.

## Example

This example prints different versions of the address to a cue in a sequence:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    -- Creates a cue in sequence 1
    Cmd("Store Sequence 1 Cue 100 /Merge /NoConfirmation")
    --Store a handle to the created cue
    local cueObject = ObjectList("Sequence 1 Cue 100")[1]
    --Print different version of the handle address
    Printf("ToAddr:              " .. cueObject:ToAddr())
    Printf("Addr:                " .. cueObject:Addr())
    Printf("Addr(Parent, false, false): " .. cueObject:Addr(cueObject:Parent(), false, false))
    Printf("Addr(Parent, true, false):  " .. cueObject:Addr(cueObject:Parent(), true, false))
    Printf("Addr(Parent, false, true): " .. cueObject:Addr(cueObject:Parent(), false, true))
    Printf("Addr(Parent, true, true):  " .. cueObject:Addr(cueObject:Parent(), true, true))
end
``` |

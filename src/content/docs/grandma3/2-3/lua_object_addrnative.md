---
title: "AddrNative(handle[, handle[, boolean]])"
description: "The AddrNative Lua object function converts a handle to an address string that can be used in commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_addrnative.html"
scrapedAt: "2026-06-15T18:25:35.846Z"
pagefind: false
---
## Description

The AddrNative Lua object function converts a handle to an address string that can be used in commands.

See the [Handle topic](/grandma3/2-3/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Handle**:\
  The function takes a handle as an argument. This is the handle to the object where the address is requested.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

- **Handle** (optional):\
  The returned address is from the root as a default. This optional handle can specify a different base location. It still needs to be a base location in the address path from the root to the object.

- **Boolean** (optional):\
  Set this to "true" to get the returned names in quotation marks. 

## Return

- **String**:\
  Text string with the address in a parent-child name format separated by dots.

## Example

This example prints the address of the first sequence:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ```
return function()
    -- Stores the handle to the first sequence.
    local mySequence = DataPool().Sequences[1]
    -- Print the native address.
    Printf("The full address is: " .. mySequence:AddrNative())
    -- Stores a handle to the default DataPool.
    local myDataPool = DataPool()
    -- Print the native address to the datapool using the default datapool as a base.
    Printf("The address in the datapool is: " .. mySequence:AddrNative(myDataPool))
    -- Print the native address to the datapool, using the default datapool as a base, with names as strings.
    Printf("The address in the datapool with quotes around the names is: " .. mySequence:AddrNative(myDataPool, true))
end
``` |

---
title: "FromAddr(string[, handle])"
description: "The FromAddr Lua function converts a numbered string address into a handle that can be used in commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_fromaddr.html"
scrapedAt: "2026-06-15T18:25:30.918Z"
pagefind: false
---
## Description

The **FromAddr** Lua function converts a numbered string address into a handle that can be used in commands.

## Arguments

- **String**:\
  A text string identifying an object. It can be a numbered or named address.
- **Handle** (optional):\
  The default is to write the address from the root location. This optional handle can specify a different base location. It still needs to be a base location in the address path from the root to the object.

## Return

- **Handle**:\
  The handle for the addressed object.

## Example

This example prints the address of the first sequence:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- Converts the string to a handle and store in a variabel.
    local mySequenceHandle = FromAddr("14.14.1.6.1")
    -- Converts the handle back to a numbered string and prints it.
    Printf("The address is: " ..mySequenceHandle:Addr())
    -- Converts the handle to a named string and prints it.
    Printf("The address is: " ..mySequenceHandle:AddrNative())
    
    -- Store the handle of the selected datapool.
    local myDataPool = DataPool()
    -- Prints the address of the selected datapool.
    Printf("The datapool address is: " ..myDataPool:Addr())
    
    --- The follwoing example uses the name of a sequence in the sequence pool. 
    --- Please adjust the "Default" name in the next line to match an existing named sequence.
    -- Finds the address based on the base location and a text string with names.
    local alsoMySequenceHandle = FromAddr("Sequences.Default", myDataPool)
    -- Converts the handle back to a numbered string and prints it.
    Printf("The address is: " ..alsoMySequenceHandle:Addr())
    -- Converts the handle to a named string and prints it.
    Printf("The address is: " ..alsoMySequenceHandle:AddrNative())
end
``` |

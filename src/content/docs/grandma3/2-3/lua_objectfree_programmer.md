---
title: "Programmer()"
description: "The Programmer Lua function references the current programmer object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_programmer.html"
scrapedAt: "2026-06-15T18:25:34.131Z"
pagefind: false
---
## Description

The **Programmer** Lua function references the current programmer object.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the Programmer object.

## Example

This example uses the [](/grandma3/2-3/lua_object_dump/)Dump() function on the programmer object:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                 |
| ```
return function ()
    -- Dumps information about the programmer object.
    Printf("=============== START OF DUMP ===============")
    Programmer():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

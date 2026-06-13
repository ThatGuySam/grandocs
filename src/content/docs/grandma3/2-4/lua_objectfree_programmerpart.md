---
title: "ProgrammerPart()"
description: "The ProgrammerPart Lua function references the current programmer part object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_programmerpart.html"
scrapedAt: "2026-06-12T21:25:05.430Z"
---
## Description

The **ProgrammerPart** Lua function references the current programmer part object.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the programmer part object.

## Example

This example uses the [](/grandma3/2-4/lua_object_dump/)Dump() function on the programmer part object:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                  |
| ```
return function ()
    -- Dumps information about the current programmer part object.
    Printf("=============== START OF DUMP ===============")
    ProgrammerPart():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

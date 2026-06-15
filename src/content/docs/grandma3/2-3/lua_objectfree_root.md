---
title: "Root()"
description: "The Root Lua function returns a handle to the object at the root position."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_root.html"
scrapedAt: "2026-06-15T18:25:34.275Z"
pagefind: false
---
## Description

The **Root** Lua function returns a handle to the object at the root position.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle to the Root object.

Example

This simple example prints the information of the Root object in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                             |
| ```
return function()
    -- The following prints the dump for the root object
    Printf("=============== START OF DUMP ===============")
    Root():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

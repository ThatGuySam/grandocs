---
title: "MasterPool()"
description: "The MasterPool Lua function returns the handle to the masters."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_masterpool.html"
scrapedAt: "2026-06-12T21:25:04.999Z"
---
## Description

The **MasterPool** Lua function returns the handle to the masters.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns the handle to the pool of masters.

## Example

This example prints the information of the MasterPool object. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                  |
| ```
return function()
    -- Print all informatin about the MasterPool object
    Printf("=============== START OF DUMP ===============")
    MasterPool():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

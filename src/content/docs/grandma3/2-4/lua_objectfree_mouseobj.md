---
title: "MouseObj()"
description: "The MouseObj function returns the handle to the first found mouse object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_mouseobj.html"
scrapedAt: "2026-06-12T21:25:05.138Z"
---
## Description

The **MouseObj** function returns the handle to the first found mouse object.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns the handle to the mouse object.

## Example

This example prints the information of the mouse object. Is uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                              |
| ```
return function()
    -- Print all informatin about the MouseObj object
    Printf("=============== START OF DUMP ===============")
    MouseObj():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

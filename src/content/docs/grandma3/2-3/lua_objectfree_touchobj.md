---
title: "TouchObj()"
description: "The TouchObj function returns the handle to the first found touch object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_touchobj.html"
scrapedAt: "2026-06-15T18:25:35.559Z"
pagefind: false
---
## Description

The **TouchObj** function returns the handle to the first found touch object.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns the handle to the touch object.

## Example

This example prints information about the touch object using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                              |
| ```
return function()
    -- Print all informatin about the TouchObj object
    Printf("=============== START OF DUMP ===============")
    TouchObj():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

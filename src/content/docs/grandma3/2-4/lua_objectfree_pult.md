---
title: "Pult()"
description: "The Pult Lua function returns a handle to the current \"Pult\" object at position Root/GraphicsRoot/PultCollect. The \"Pult\" object contains display and device inf"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_pult.html"
scrapedAt: "2026-06-12T21:25:05.434Z"
---
## Description

The **Pult** Lua function returns a handle to the current "Pult" object at position Root/GraphicsRoot/PultCollect. The "Pult" object contains display and device information.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle to the pult object.

## Example

This example prints the data connected to the handle. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                             |
| ```
return function()
    -- The following prints the dump for the pult object
    Printf("=============== START OF DUMP ===============")
    Pult():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

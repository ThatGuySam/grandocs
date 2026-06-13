---
title: "CurrentEnvironment()"
description: "The CurrentEnvironment Lua function returns a handle to the current users' selected environment."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_currentenvironment.html"
scrapedAt: "2026-06-12T21:25:00.914Z"
---
## Description

The **CurrentEnvironment** Lua function returns a handle to the current users' selected environment.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle to the environment.

## Example

This example prints the data connected to the handle. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                         |
| ```
return function()
    -- Dumps information about the current environment
    Printf("=============== START OF DUMP ===============")
    CurrentEnvironment():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

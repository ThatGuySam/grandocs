---
title: "Dump (handle)"
description: "The Dump function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_dump.html"
scrapedAt: "2026-06-15T18:25:35.989Z"
pagefind: false
---
## Description

The **Dump** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation for object-oriented calls.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

## Return

The function returns nothing but outputs information about the object in the [Command Line History window](/grandma3/2-3/ws_ui_command_line/).

## Examples

These examples all print information about the selected sequence in the Command Line History.

The first example using the colon operator:

|                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                       |
| ```
return function ()
    -- Dump() is called on a function
    Printf("=============== START OF DUMP ===============")
    SelectedSequence():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

 The second example uses a variable with the same result:

|                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                     |
| ```
return function ()
    --Stores the handle for the selected sequence in a local variable.
    local mySeqHandle = SelectedSequence()
    -- Dump() is called on the variable.
    Printf("=============== START OF DUMP ===============")
    mySeqHandle:Dump()
    Printf("================ END OF DUMP ================")
end
``` |

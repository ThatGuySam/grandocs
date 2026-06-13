---
title: "SelectedSequence()"
description: "The SelectedSequenceua function returns the handle of the selected sequence."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_selectedsequence.html"
scrapedAt: "2026-06-12T21:25:05.715Z"
---
## Description

The **SelectedSequence** Lua function returns the handle of the selected sequence.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle for the selected sequence.

## Example

This example prints all information about the selected sequence in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                       |
| ```
return function ()
    -- The following prints the dump for the selected sequence object
    Printf("=============== START OF DUMP ===============")
    SelectedSequence():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

---
title: "SelectedLayout()"
description: "The SelectedLayoutua function returns the handle of the selected layout."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_selectedlayout.html"
scrapedAt: "2026-06-12T21:25:05.574Z"
---
## Description

The **SelectedLayout** Lua function returns the handle of the selected layout.

Layouts are two-dimensional drafts where it is possible to arrange fixtures, macros, groups, and other pool objects. Learn more in the [Layout topics](/grandma3/2-4/layouts/).

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The returned handle for the selected layout.

## Example

This example prints all information about the selected layout in the Command Line History using the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                   |
| ```
return function ()
    -- The following prints the dump for the selected layout object
    Printf("=============== START OF DUMP ===============")
    SelectedLayout():Dump()
    Printf("================ END OF DUMP ================")
end
``` |

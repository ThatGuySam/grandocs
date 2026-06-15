---
title: "GetChildClass(handle)"
description: "The GetChildClass function returns a string with the name of the class of the object's children."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_getchildclass.html"
scrapedAt: "2026-06-15T18:25:36.131Z"
pagefind: false
---
## Description

The **GetChildClass** function returns a string with the name of the class of the object's children.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

## Return

- **String**:\
  The function returns a text string with the name of the class of the object's children.

## Examples

This example prints the class name of the selected sequences' children.

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                  |
| ```
return function()
    -- Gets the class name of children of the selected sequence.
    Printf("The class name is " .. SelectedSequence():GetChildClass())
end
``` |

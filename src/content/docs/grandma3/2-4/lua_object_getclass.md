---
title: "GetClass(handle)"
description: "The GetClass function returns a string with information about the class for the object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_getclass.html"
scrapedAt: "2026-06-12T21:25:07.422Z"
---
## Description

The **GetClass** function returns a string with information about the class for the object.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

## Return

- **String**:\
  The function returns the text string with the name of the object's class.

## Examples

This example prints the class name of the selected sequence.

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                              |
| ```
return function()
    -- Gets the class name of the selected sequence.
	Printf("The class name is " .. SelectedSequence():GetClass())
end
``` |

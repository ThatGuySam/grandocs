---
title: "Set(handle, string, string[, integer])"
description: "The Set function sets a value to a specified property of the object, for instance, the object's name."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_set.html"
scrapedAt: "2026-06-12T21:25:07.882Z"
---
## Description

The **Set** function sets a value to a specified property of the object, for instance, the object's name.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

- **String**:\
  The string must be the name of a valid property for the object.

- **String**:\
  This string must be the desired value for the property.

- **Integer**  (optional):\
  ?

## Return

This function does not return anything. 

## Examples

This example changes the "Tracking" property of the selected sequence to "No".

|                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                       |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Set a variable with the property name.
    local propertyName = "Tracking"
    -- Set the property.
    selectedSequence:Set(propertyName, "No")
end
``` |

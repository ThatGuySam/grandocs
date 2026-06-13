---
title: "Get(handle, string[, integer])"
description: "The Get function returns a string with information about a specified property of the object, for instance, the object's name, class, or path."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_get.html"
scrapedAt: "2026-06-12T21:25:07.266Z"
---
## Description

The **Get** function returns a string with information about a specified property of the object, for instance, the object's name, class, or path.

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

- **Integer**  (optional):\
  A valid role integer can be supplied. This will make the returned value a text string.

## Return

- **String:**\
  The function returns the value of the property. If the property is a boolean, then the return is "0" or "1" unless a role is defined (see optional integer argument above). When the role is supplied, a boolean is returned as "No" or "Yes".

## Examples

This example prints information about the "Tracking" property of the selected sequence.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function ()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Check if there is a selected sequence. If not, then exit the function.
    if selectedSequence == nil then
        ErrPrintf("The selected sequence could not be found.")
        return
    end
    -- Set a variable with the property name.
    local propertyName = "Tracking"
    -- Get the value of the property. 
    local propertyValue = selectedSequence:Get(propertyName)
    local propertyValueString = selectedSequence:Get(propertyName, Enums.Roles.Edit)
    -- Return some feedback.
    if propertyValue ~= nil then
        Printf("The selected sequence's property " .. propertyName.. " has the value '" .. propertyValue .. "' and a string value of '" .. propertyValueString .. "'.")
    else
        ErrPrintf("The property could not be found.")
    end
end
``` |

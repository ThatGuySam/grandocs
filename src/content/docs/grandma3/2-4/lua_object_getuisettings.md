---
title: "GetUISettings(handle)"
description: "The GetUISettings function returns a text string with the name of the UI settings for the object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_getuisettings.html"
scrapedAt: "2026-06-12T21:25:07.724Z"
---
## Description

The **GetUISettings** function returns a text string with the name of the UI settings for the object.

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
  The function returns a text string with the name of the object's UI settings.

## Examples

This example prints the name of the selected sequence's settings.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Get the name of the editor for the sequence object. 
    local seqSettings = selectedSequence:GetUISettings()
    -- Print some feedback.
    if seqSettings ~= nil then
        Printf("The name of the settings is: " .. seqSettings)
    else
        Printf("The object doesn not appear to have an editor.")
    end
end
``` |

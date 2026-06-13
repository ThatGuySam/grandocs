---
title: "SetFader(handle, {[number], [boolean], [string]})"
description: "The SetFader function sets a fader to a specified level. It must be used on an object that has faders."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_setfader.html"
scrapedAt: "2026-06-12T21:25:07.886Z"
---
## Description

The **Set****Fader** function sets a fader to a specified level. It must be used on an object that has faders.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

- **Table**:\
  The table can contain up to three named elements using the key/value methods.

  - **"value"**:\
    This is a float number indicating the fader position on a scale from 0 to 100. This should always be part of the table.

  - **"token"**:\
    This is a string indicating the fader. The string must start with "Fader". It can be omitted, and then the value will be assigned to the Master fader. The fader name must be valid for the object being used. Possible tokens include:

    - "FaderMaster"
    - "FaderX"
    - "FaderXA"
    - "FaderXB"
    - "FaderTemp"
    - "FaderRate"
    - "FaderSpeed"
    - "FaderHighlight"
    - "FaderLowlight"
    - "FaderTime"
    - "FaderSolo"

  - **"faderEnabled"**:\
    If the fader can be toggled, then this boolean can be used to enable or disable the fader. A true value sets the fader to enabled.

## Return

This function does not return anything. 

## Examples

This example changes the selected sequences' Master fader to 100% and the Time fader to 5 seconds and enables the time fader.

|                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                        |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Set the master fader to 100. The FaderMaster is the default token, so it can be omitted.
    selectedSequence:SetFader({value=100.0})
    -- Set the time fader to 5 seconds and enable the fader.
    selectedSequence:SetFader({value=50.0, faderEnabled=1, token="FaderTime"})
end
``` |

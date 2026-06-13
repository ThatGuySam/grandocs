---
title: "GetFaderText(handle, {[string], [integer]})"
description: "The GetFaderText function returns a text string indicating a fader value for the object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_getfadertext.html"
scrapedAt: "2026-06-12T21:25:07.579Z"
---
## Description

The **GetFaderText** function returns a text string indicating a fader value for the object.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument. It can be omitted when using the colon notation on an object. See the examples below.

- **Table**:\
  The table can contain two different elements: Token and Index. The important element is the token.

  - **Token**: This is used to specify which fader the value is requested for. These are the valid values:

    - FaderMaster
    - FaderX
    - FaderXA
    - FaderXB
    - FaderTemp
    - FaderRate
    - FaderSpeed
    - FaderHighlight
    - FaderLowlight
    - FaderSolo
    - FaderTime

## Return

- **String**:\
  The function returns a text string indicating the fader value.

## Examples

This example prints the fader value text of the Master and Rate faders for the selected sequence.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Get the value for the Master fader. Since it is the default, no token needs to be defined.
    local faderMasterText = selectedSequence:GetFaderText({})
    -- Get the value for the Rate fader.
    local faderRateText = selectedSequence:GetFaderText({token="FaderRate"})
    -- Print feedback with the values.
    Printf("The selected sequence Master fader value text is: ".. tostring(faderMasterText))
    Printf("The selected sequence Rate fader value text is: ".. tostring(faderRateText))
end
``` |

---
title: "GetFader(handle, {[string],[integer]})"
description: "The GetFader function returns a float number indicating a fader position for the object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_getfader.html"
scrapedAt: "2026-06-15T18:25:36.351Z"
pagefind: false
---
## Description

The **GetFader** function returns a float number indicating a fader position for the object.

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

- **Number**:\
  The function returns a float number indicating the fader position.

## Examples

This example prints the fader positions of the Master and Rate faders for the selected sequence.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Get the value for the Master fader.
    local faderMasterValue = selectedSequence:GetFader({})
    -- Get the value for the Rate fader.
    local faderRateValue = selectedSequence:GetFader({token="FaderRate"})
    -- Print feedback with the values.
    Printf("The selected sequence Master fader value is: ".. tostring(faderMasterValue))
    Printf("The selected sequence Rate fader value is: ".. tostring(faderRateValue))
end
``` |

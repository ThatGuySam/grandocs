---
title: "HasActivePlayback(handle)"
description: "The HasActivePlayback Lua function returns a boolean indicating if an object has a currently active playback, for instance, if a sequence has an active cue."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_hasactiveplayback.html"
scrapedAt: "2026-06-12T21:25:07.732Z"
---
## Description

The **HasActivePlayback** Lua function returns a boolean indicating if an object has a currently active playback, for instance, if a sequence has an active cue.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

## Return

- **Boolean**:\
  The function returns a boolean indicating the playback status:

  - **True**: There is active playback.
  - **False**: There is no active playback.

## Example

To return the information if the selected sequence has an active playback, create a plugin with this code:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ```
return function()
    -- Stores the handle of the selected sequence.
    local selectedSequence = SelectedSequence()

    -- The following 'if' gives different feedback based on the playback status.
    if selectedSequence:HasActivePlayback() then
        Printf("Sequence '" ..selectedSequence.name.. "' has active playback.")
    else
        Printf("Sequence '" ..selectedSequence.name.. "' has NO active playback.")
    end
end
``` |

---
title: "Children(handle)"
description: "The Children Lua function creates a table of handles for the children of an object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_children.html"
scrapedAt: "2026-06-15T18:25:35.923Z"
pagefind: false
---
## Description

The **Children** Lua function creates a table of handles for the children of an object.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

## Return

- **Table**:\
  The function returns a table with handles for the child objects. If there are no children, then it returns an empty table.

## Example

This example returns the name of the cues in the first sequence of the selected data pool:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ```
return function()
    -- Stores the handle for sequence 1 in a variable.
    local mySequence = DataPool().Sequences[1]
    if mySequence ~= nil then
            -- Use the "Children()" funciton to store a table with all the children in a new variable.
        local cues = mySequence:Children()
        -- For loop that uses the length operator on the cue variable.
        for i = 1, #cues do
            -- Text is printed for each child.
            Printf("Sequence 1 Child " .. i .. " = " .. cues[i].name)
        end
    else
        ErrPrintf("Sequence could not be found.")
    end
end
``` |

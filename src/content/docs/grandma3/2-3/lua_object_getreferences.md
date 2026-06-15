---
title: "GetReferences(handle)"
description: "The GetReferences function returns a table with handles for the objects referencing this object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_getreferences.html"
scrapedAt: "2026-06-15T18:25:36.274Z"
pagefind: false
---
## Description

The **GetReferences** function returns a table with handles for the objects referencing this object.

## Arguments

- **Handle:**\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

## Return

- **Table**:\
  The function returns a table with the handles for the different objects referencing this object.

## Examples

This example prints a dump of the selected sequence's first object in the returned table.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Get the references for the sequence.
    local seqReferences = selectedSequence:GetReferences()
    -- Check if there are any references and output a relevant feedback.
    if seqReferences ~= nil then
        -- There is a reference table returned. Print a dump of the first table element.
        Printf("=============== START OF DUMP ===============")
        seqReferences[1]:Dump()
        Printf("================ END OF DUMP ================")
    else
        Printf("No references found")
    end
end
``` |

---
title: "Ptr(handle, integer)"
description: "The Ptr Lua function returns the handle to a child object."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_object_ptr.html"
scrapedAt: "2026-06-12T21:25:07.889Z"
---
## Description

The **Ptr** Lua function returns the handle to a child object.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-4/lua_object/).

- **Integer**:\
  This is the index number for the desired child object. This index is 1-based.

## Return

- **Handle** | **nil**:\
  The function returns a handle to the child object. If the child object does not exist, then it returns nil.

## Example

This example prints the data connected to the first child of the selected sequence. It uses the Dump() function.

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

 

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- SelectedSequence() creates a handle to the selected sequence.
    local selectedSequence = SelectedSequence()
    -- Check that a handle was returned - if not then exit function.
    if selectedSequence == nil then
        ErrPrintf("There is no selected sequence.")
        return
    end
    -- Get a handle to the first child object.
    local firstChild = selectedSequence:Ptr(1)
    -- Print some feedback.
    if firstChild ~= nil then
        Printf("=============== START OF DUMP ===============")
        firstChild:Dump()
        Printf("================ END OF DUMP ================")
    else
        ErrPrintf("The object do not have a child object.")
    end
end
``` |

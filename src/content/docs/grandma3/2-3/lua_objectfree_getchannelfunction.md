---
title: "GetChannelFunction(integer, integer)"
description: "The GetChannelFunction Lua function returns a handle to a channel function based on two index inputs."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getchannelfunction.html"
scrapedAt: "2026-06-15T18:25:31.227Z"
pagefind: false
---
## Description

The **GetChannelFunction** Lua function returns a handle to a channel function based on two index inputs.

## Arguments

- **Integer**:\
  The first integer is a UI Channel Index. This can be found in the [Parameter List](/grandma3/2-3/patch_parameter_list/) or by the [GetUIChannelIndex()](/grandma3/2-3/lua_objectfree_getuichannelindex/) Lua function.
- **Integer**:\
  This integer is an Attribute Index (0-based). This can be found in the [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/) or by the [GetAttributeIndex()](/grandma3/2-3/lua_objectfree_getattributeindex/) Lua function.

## Return

- **Handle**:\
  The returned handle to the channel function.

## Example

This example prints the data connected to the handle. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ```
return function()
    -- Select the first fixture in the current selection.
    local subfixtureIndex = SelectionFirst()
    -- End the function if there is no selection.
    if subfixtureIndex == nil then
        ErrPrintf("Please select a fixture with a Dimmer")
        return
    end
    -- Get the Attribute index and UIChannel index.
    local attributeIndex = GetAttributeIndex("Dimmer")
    local uiChannelIndex = GetUIChannelIndex(subfixtureIndex,attributeIndex)
    Printf("The UIChannel Index is: %i. The Attribute Index is: %i. ",uiChannelIndex, attributeIndex)
    -- End the function if any of the index return nil.
    if (attributeIndex == nil or uiChannelIndex == nil) then
        ErrPrintf("Something wrong happened, maybe your first selected fixture don't have a Dimmer - Please try again")
        return
    end
    -- The following prints the dump for the dimmer channel function.
    Printf("=============== START OF DUMP ===============")
    GetChannelFunction(uiChannelIndex,attributeIndex):Dump()
    Printf("================ END OF DUMP ================")
end
``` |

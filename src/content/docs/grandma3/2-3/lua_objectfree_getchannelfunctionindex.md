---
title: "GetChannelFunctionIndex()"
description: "The GetChannelFunctionIndex Lua function returns the integer matching a channel function based on two index inputs."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getchannelfunctionindex.html"
scrapedAt: "2026-06-15T18:25:31.220Z"
pagefind: false
---
## Description

The **GetChannelFunctionIndex** Lua function returns the integer matching a channel function based on two index inputs.

## Arguments

- **Integer**:\
  The first integer is a UI Channel Index. This can be found in the [Parameter List](/grandma3/2-3/patch_parameter_list/) or by the [GetUIChannelIndex()](/grandma3/2-3/lua_objectfree_getuichannelindex/) Lua function.
- **Integer**:\
  This integer is an Attribute Index (0-based). This can be found in the [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/) or by the [GetAttributeIndex()](/grandma3/2-3/lua_objectfree_getattributeindex/) Lua function.

## Return

- **Integer**:\
  The returned integer to a channel function.

## Example

This example prints the indexes based on the fixture selection and the "Dimmer" attribute.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ```
return function()
    -- Get the Attribute index and UIChannel index.
    local attributeIndex = GetAttributeIndex("Dimmer")
    local uiChannelIndex = GetUIChannelIndex(SelectionFirst(),attributeIndex)
    -- End the function if any of the index return nil.
    if (attributeIndex == nil or uiChannelIndex == nil) then
        ErrPrintf("Something wrong happened, maybe your first selected fixture don't have a Dimmer - Please try again")
        return
    end
    -- Get the Channel Function Index and store it in a variable.
    local channelFunctionIndex = GetChannelFunctionIndex(uiChannelIndex,attributeIndex)
    Printf("The UIChannel Index is: %i. The Attribute Index is: %i. The Channel Function Index is: %i", uiChannelIndex, attributeIndex, channelFunctionIndex)
end
``` |

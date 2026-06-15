---
title: "GetUIChannelIndex(integer, integer)"
description: "The GetUIChannelIndex Lua function returns the index integer matching a UI channel based on two index inputs."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getuichannelindex.html"
scrapedAt: "2026-06-15T18:25:32.986Z"
pagefind: false
---
## Description

The **GetUIChannelIndex** Lua function returns the index integer matching a UI channel based on two index inputs.

## Arguments

- **Integer**:\
  The first integer is the patch index of a fixture.

- **Integer**:\
  This integer is an attribute index (0-based). This can be found in the Attribute Definitions or by the GetAttributeIndex() Lua function.

  # Attribute Definition

  Attributes are the building blocks of fixture types. The same building blocks are used throughout the console and they are what is controlled using the Encoder bar when operating fixtures.

  Attributes definitions describe the relation between Main Attributes and sub-attributes.

  Learn more in the [Attribute Definition topic](/grandma3/2-3/patch_attribute_definitions/).

  # GetAttributeIndex()

  The **GetAttributeIndex** Lua function returns the (0 based) index number of the attribute definition based on the system name of the attribute.

  Learn more in the [GetAttributeIndex() topic](/grandma3/2-3/lua_objectfree_getattributeindex/).

## Return

- **Integer**:\
  The returned integer to a channel function.

## Example

This example prints the UI channel index of the "Dimmer" attribute of the first fixture in the current selection:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Get the Attribute index and UIChannel indexes
    local attributeIndex = GetAttributeIndex("Dimmer")
    local uiChannelIndex = GetUIChannelIndex(SelectionFirst(),attributeIndex)
    -- End the function if any of the index return nil
    if (attributeIndex == nil or uiChannelIndex == nil) then
        ErrPrintf("Something went wrong, maybe your first selected fixture don't have a Dimmer - Please try again")
        return
    end
    Printf("The UI Channel Index is " .. uiChannelIndex)
end
``` |

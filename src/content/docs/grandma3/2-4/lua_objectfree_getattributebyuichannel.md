---
title: "GetAttributeByUIChannel(integer)"
description: "The GetAttributeByUIChannel Lua function returns the handle to an attribute based on a \"UI Channel Index\". The index number can be found in the Parameter List."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getattributebyuichannel.html"
scrapedAt: "2026-06-12T21:25:02.277Z"
---
## Description

The **GetAttributeByUIChannel** Lua function returns the handle to an attribute based on a "UI Channel Index". The index number can be found in the [Parameter List](/grandma3/2-4/patch_parameter_list/).

## Arguments

- **Integer**:\
  The integer is the UI Channel index number.

## Return

- **Handle**:\
  The handle to the attribute connected to the UI Channel.

## Example

This example prints the "native" address to the first attribute of the first fixture in the current selection:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Get a handle to the first fixture in the current selection
    local fixtureIndex = SelectionFirst()
    -- Get the UI Channel Index number for the first attribute for the fixture
    local channelIndex = GetUIChannelIndex(fixtureIndex,0)
    -- Print the native address for the attribute with the handle
    Printf("The native addr for the attribute is: %s",GetAttributeByUIChannel(channelIndex):AddrNative())
end
``` |

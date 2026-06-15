---
title: "GetUIChannels(integer[,boolean] OR handle[,boolean])"
description: "The GetUIChannels Lua function returns a table with UI Channel indexes or a table with handles to the UI Channel objects. There are two different types of argum"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getuichannels.html"
scrapedAt: "2026-06-15T18:25:33.033Z"
pagefind: false
---
## Description

The **GetUIChannels** Lua function returns a table with UI Channel indexes or a table with handles to the UI Channel objects. There are two different types of arguments for this function.

## Arguments

- **Integer**:\
  The integer should be the index number for a (sub)fixture.

- **Boolean** (Optional):

  - **True**:\
    The returned table contains handles for UI Channel objects.
  - **False** (default):\
    The returned table contains integer index values to the UI Channel objects.

\- OR -

- **Handle**:\
  The handle should relate to a (sub)fixture object.

- **Boolean** (Optional):

  - **True**:\
    The returned table contains handles for UI Channel objects.
  - **False** (default):\
    The returned table contains integer index values to the UI Channel objects.

## Return

- **Table**:\
  The returned table can be a list of UI Channel indexes or handles to the same UI Channel indexes.

## Examples

### Example 1

This example prints a list of UI Channel indexes for the first fixture in the selection. It uses an index number as input:

|                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                        |
| ```
return function()
    -- Creates a table of indexes of the UI channels of the first selected fixture.
    local uiChannels = GetUIChannels(SelectionFirst())
    if uiChannels == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    for key,value in ipairs(uiChannels) do
        Printf("List index number ".. key .. " :  UIChannel Index = " .. value)
    end
end
``` |

### Example 2

This example prints a list of UI Channel indexes and attributes for the first fixture in the selection. It uses a handle as the input:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ```
return function()
    local fixtureHandle = GetSubfixture(SelectionFirst())
    -- Creates a table of handles to the UI channels of the first selected fixture.
    local uiChannels = GetUIChannels(fixtureHandle, true)
    if uiChannels == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    for key,value in pairs(uiChannels) do
        Printf("List index number ".. key .. ": UIChannel Index = %i, (Sub)Attribute = %s", value.INDEX-1, value.SUBATTRIBUTE)
    end
end
``` |

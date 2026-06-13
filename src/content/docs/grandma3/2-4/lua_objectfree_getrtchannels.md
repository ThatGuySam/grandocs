---
title: "GetRTChannels(integer[,boolean] OR handle[,boolean])"
description: "The GetRTChannels Lua function returns a table with RT Channel indexes or a table with handles to the RT Channel objects. There are two different types of argum"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getrtchannels.html"
scrapedAt: "2026-06-12T21:25:03.536Z"
---
## Description

The **GetRTChannels** Lua function returns a table with RT Channel indexes or a table with handles to the RT Channel objects. There are two different types of arguments for this function.

## Arguments

- **Integer**:\
  The integer should be the index number for a (sub)fixture.

- **Boolean** (Optional):

  - **True**:\
    The returned table contains handles for RT Channel objects.
  - **False** (default):\
    The returned table contains integers index values to the RT Channel objects.

\- OR -

- **Handle**:\
  The handle should relate to a (sub)fixture object.

- **Boolean** (Optional):

  - **True**:\
    The returned table contains handles for RT Channel objects.
  - **False** (default):\
    The returned table contains integers index values to the RT Channel objects.

## Return

- **Table**:\
  The returned table can be a list of RT Channel indexes or handles to the same RT Channels.

## Examples

### Example 1

This example prints a list of RT Channel indexes for the first fixture in the selection. It uses an index number as input:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ```
return function()
    -- Get the index number for the first fixture in the current selection 
    local fixtureIndex = SelectionFirst()
    -- Get the indexes of the RT channels
    local rtChannels = GetRTChannels(fixtureIndex, false)
    -- Print an error message if returnd table is nil
    if rtChannels == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    -- Print the table content
    for key,value in ipairs(rtChannels) do
        Printf("List index number ".. key .." : RTChannel index number = ".. value)
	end
end
``` |

### Example 2

This example prints a list of RT Channel indexes and attributes for the first fixture in the selection. It uses a handle as the input:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- Get a handle to the first fixture in the current selection
    local fixtureHandle = GetSubfixture(SelectionFirst())
    if fixtureHandle == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    -- Creates a table of handles to the RT channels of the first selected fixture.
    local rtChannels = GetRTChannels(fixtureHandle, true)
    if rtChannels == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    -- Print DMX addresses of the RT Channels for the fixture
    for key,value in ipairs(rtChannels) do
        Printf("List index number ".. key .. ": RTChannel Index = %i, Coarse DMX addr. = %s, Fine DMX addr. = %s", value.INDEX, value.COARSE, value.FINE)
    end
end
``` |

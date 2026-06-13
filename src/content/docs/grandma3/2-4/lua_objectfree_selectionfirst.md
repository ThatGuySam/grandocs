---
title: "SelectionFirst()"
description: "The SelectionFirst Lua function returns a set of integers for the selection's first fixture. It is the patch index number and the XYZ grid values in the selecti"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_selectionfirst.html"
scrapedAt: "2026-06-12T21:25:05.863Z"
---
## Description

The **SelectionFirst** Lua function returns a set of integers for the selection's first fixture. It is the patch index number and the XYZ grid values in the selection grid.

It is not required to use all four returned integers, but they are returned in order.

## Arguments

This function does not accept any arguments.

## Return

- **Integer**:\
  The returned number is the patch index of the first fixture in the current selection. It is not the FID or CID. The index is 0-based.
- **Integer**:\
  The returned number is the current position on the X-axis in the selection grid. The selection grid is 0-based.
- **Integer**:\
  The returned number is the current position on the Y-axis in the selection grid. The selection grid is 0-based.
- **Integer**:\
  The returned number is the current position on the Z-axis in the selection grid. The selection grid is 0-based.

## Example

This example prints the returned numbers of the first fixture in the selection, to the Command Line History:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ```
return function()
	-- Store the return in a local variable
    local fixtureIndex, gridX, gridY, gridZ = SelectionFirst();

    -- Cancel the plugin if no fixture is selected
    assert(fixtureIndex,"Please select a fixture and try again.");

    -- Print the index number of the first fixture in the selection
    Printf("First selected fixture has index number: "..fixtureIndex
        .." and gridX value: "..gridX
        .." and gridY value: "..gridY
        .." and gridZ value: "..gridZ);
end
``` |

### Related Functions

- [SelectionNext](/grandma3/2-4/lua_objectfree_selectionnext/)
- [GetSubfixture](/grandma3/2-4/lua_objectfree_getsubfixture/)
- [GetSubFixtureCount](/grandma3/2-4/lua_objectfree_getsubfixturecount/)

---
title: "SelectionNext()"
description: "The SelectionNext function returns a set of integers for the next fixture in a selection based on the index number input as an argument. It is the index number "
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_selectionnext.html"
scrapedAt: "2026-06-15T18:25:34.699Z"
pagefind: false
---
## Description

The SelectionNext function returns a set of integers for the next fixture in a selection based on the index number input as an argument. It is the index number in the patch and the XYZ grid values in the selection grid.

It is not required to use all four returned integers, but they are returned in order.

## Arguments

- **Integer**:\
  The index number is used to find the next fixture. The index number needs to be part of the current selection.

## Return

- **Integer**:\
  The returned number is the patch index of the first fixture in the current selection. It is not the FID or CID. The index is 0-based.
- **Integer**:\
  The returned number is the current position on the X-axis in the selection grid. The selection grid is 0-based.
- **Integer**:\
  The returned number is the current position on the Y-axis in the selection grid. The selection grid is 0-based.
- **Integer**:\
  The returned number is the current position on the Z-axis in the selection grid. The selection grid is 0-based

## Example

This example prints the patch index number and grid positions of all the fixtures in the current selection:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ```
return function()
    -- Store the return in a local variable
    local fixtureIndex, gridX, gridY, gridZ = SelectionFirst()

    -- Cancel the plugin if no fixture is selected
    assert(fixtureIndex,"Please select a (range of) fixture(s) and try again.")
    
    -- Loop that prints the index and gridpositions of all the fixtures in the selection 
    while fixtureIndex do
        Printf('The fixture has index number: %i and gridposition %i / %i / %i',
          fixtureIndex, gridX, gridY, gridZ);
        
        -- Here is SelectionNext actually used to find the next fixture in the selection
        fixtureIndex, gridX, gridY, gridZ = SelectionNext(fixtureIndex)
    end
end
``` |

### Related Functions

- [SelectionFirst](/grandma3/2-3/lua_objectfree_selectionfirst/)
- [GetSubfixture](/grandma3/2-3/lua_objectfree_getsubfixture/)
- [GetSubfixtureCount](/grandma3/2-3/lua_objectfree_getsubfixturecount/)

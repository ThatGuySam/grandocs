---
title: "GetSubfixture(integer)"
description: "The GetSubfixture Lua function returns the handle of the fixture specified by its patch index number."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getsubfixture.html"
scrapedAt: "2026-06-12T21:25:03.831Z"
---
## Description

The **GetSubfixture** Lua function returns the handle of the fixture specified by its patch index number.

## Arguments

- **Integer**:\
  The patch index number for a fixture. This is also known as the "subfixtureindex".

## Return

- **Handle**:\
  The function returns a handle to the fixture object matching the provided index number.

## Example

This example uses a fixture selection to print all the information (in the Command Line History) about the first fixture in the selection using the [](/grandma3/2-4/lua_object_dump/)Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-4/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ```
return function ()
    -- Check for a fixture selection, by returning an index for the first fixture
    if (SelectionFirst()) then
        -- There is a fixture selection, store the index for the first fixture 
        local fixtureIndex = SelectionFirst()
        -- Dump all information about the fixture
        Printf("=============== START OF DUMP ===============")
        GetSubfixture(fixtureIndex):Dump()
        Printf("================ END OF DUMP ================")
    else
        -- There needs to be a selection of at least one fixture
        Printf("Please select a fixture")
    end
end
``` |

### Related Functions

- [SelectionFirst](/grandma3/2-4/lua_objectfree_selectionfirst/)
- [SelectionNext](/grandma3/2-4/lua_objectfree_selectionnext/)
- [GetSubfixtureCount](/grandma3/2-4/lua_objectfree_getsubfixturecount/)

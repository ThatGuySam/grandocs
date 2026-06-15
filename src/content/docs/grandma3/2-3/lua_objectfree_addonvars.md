---
title: "AddonVars(string)"
description: "The AddonVars function returns a handle to the set of variables connected to a specific addon."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_addonvars.html"
scrapedAt: "2026-06-15T18:25:28.994Z"
pagefind: false
---
## Description

The **AddonVars** function returns a handle to the set of variables connected to a specific addon.

|                                                    |                                                       |
| -------------------------------------------------- | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                      |
|                                                    | The addon variable set is not helpful at the moment.  |

## Arguments

- **String**:\
  The string needs to be the name of the addon.

## Return

- **Handle**:\
  The function returns a handle of the set of variables.

## Example

This example prints information connected to the "Demo" addon variable set. It uses the Dump() function:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Stores the handle to a variable set connected to the addon named 'Demo'.
    local variableSet = AddonVars("Demo")
    -- Check if the return is nil and print an error message
    if variableSet == nil then
        ErrPrintf("The variable set does not exists")
        return
    end
    Printf("=============== START OF DUMP ===============")
    variableSet:Dump()
    Printf("================ END OF DUMP ================")
end
``` |

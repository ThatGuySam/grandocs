---
title: "IsClassDerivedFrom(string, string)"
description: "The IsClassDerivedFrom Lua function returns a boolean indicating if a class is derived from a different class."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_isclassderivedfrom.html"
scrapedAt: "2026-06-12T21:25:04.843Z"
---
## Description

The **IsClassDerivedFrom** Lua function returns a boolean indicating if a class is derived from a different class.

## Arguments

- **String**:\
  This string needs to be the name of the class that might be derived from a different class.
- **String**:\
  This string needs to be the name of the class that might be the base class.

## Return

- **Boolean**:\
  The returned boolean indicates if the class is derived from the base class.

## Example

This example checks if a class is derived from a different class and returns useful feedback.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ```
return function()
    -- Set the value of the two strings.
    local derivedName = "World"
    local baseName = "Group"
    -- Check if the derivedName is the name of a class derived from the baseName class.
    local isDerived = IsClassDerivedFrom(derivedName, baseName)
    -- Provide feedback.
    if isDerived then
        Printf(derivedName .. " is derived from " .. baseName)
    else
        Printf(derivedName .. " is not derived from " .. baseName)
    end
end
``` |

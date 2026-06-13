---
title: "GetClassDerivationLevel(string)"
description: "The GetClassDerivationLevel Lua function returns an integer indicating the derivation level index for a class based on a class name."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getclassderivationlevel.html"
scrapedAt: "2026-06-12T21:25:02.656Z"
---
## Description

The **GetClassDerivationLevel** Lua function returns an integer indicating the derivation level index for a class based on a class name.

## Arguments

- **String**:\
  This string needs to be the name of a class.

## Return

- **Integer**:\
  The returned integer indicates the class derivation level.

## Example

This example prints the index integer for the Pool class in the Command Line History:

|                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    -- Get the index integer for the "Pool" class.
    local classDerivationLevel = GetClassDerivationLevel("Pool")
    -- Create a valid Printf return.
    if classDerivationLevel == nil then
        Printf("The return is nil")
    else
        Printf("The ClassDerivationLevel index for 'Pool' is: %i", classDerivationLevel)
    end
end
``` |

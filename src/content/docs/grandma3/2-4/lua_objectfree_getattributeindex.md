---
title: "GetAttributeIndex(string)"
description: "The GetAttributeIndexua function returns the (0 based) index number of the attribute definition based on the system name of the attribute."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getattributeindex.html"
scrapedAt: "2026-06-12T21:25:02.371Z"
---
## Description

The **GetAttributeIndex** Lua function returns the (0 based) index number of the attribute definition based on the system name of the attribute.

## Arguments

- **String**:\
  The string text of the attribute system name.

## Return

- **Integer**:\
  The returned integer number represents the total amount of patched fixtures on all the stages in the show file.

## Example

This example prints the index number of the attribute in Command Line History if it exists:

|                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    -- store the returned index or nil of "Gobo1"
    local attributeIndex = GetAttributeIndex("Gobo1")
    -- Check if the returned value is not nil and print a useful feedback
    if attributeIndex~=nil then
        Printf("Attribute is index number %i", attributeIndex)
    else
        Printf("The attribute is not found")
    end
end
``` |

---
title: "IsObjectValid(handle)"
description: "The IsObjectValid function returns a boolean true or nil depending on whether the supplied argument is a valid object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_isobjectvalid.html"
scrapedAt: "2026-06-15T18:25:33.696Z"
pagefind: false
---
## Description

The **IsObjectValid** function returns a boolean true or nil depending on whether the supplied argument is a valid object.

## Arguments

- **Handle**:\
  The argument should be the handle to a possible object.

## Return

- **Boolean or nil**:\
  The returned value is a boolean True if the handle is a valid object or it returns nil if it is not a valid object.

## Example

This example below examines if "Root()" is a valid object and prints meaningful feedback:

|                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                       |
| ```
return function()
    --Create a variable with the possible object
    local myObject = Root()
    --Check if it is an object
    local myReturn = IsObjectValid(myObject)
    --Print the result
    if myReturn == nil then
        ErrPrintf("It is not a valid object")
    else
        Printf("It is an object")
    end
end
``` |

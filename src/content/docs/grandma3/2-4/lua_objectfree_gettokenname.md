---
title: "GetTokenName(string)"
description: "The GetTokenName Lua function returns a string with the full keyword based on the short version string input or nil if there is no corresponding keyword."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_gettokenname.html"
scrapedAt: "2026-06-12T21:25:03.966Z"
---
## Description

The **GetTokenName** Lua function returns a string with the full keyword based on the short version string input or nil if there is no corresponding keyword.

## Arguments

- **String**:\
  The string input should correspond to a short version of a keyword.

## Return

- **String**:\
  A string with the full keyword is returned.

\- OR -

- **Nil**:\
  If there is no corresponding keyword, then nil is returned.

## Example

This example returns the full keyword matching the short "seq" string:

|                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                 |
| ```
return function()
    -- Store a short string to be used as input
    local shortToken = 'seq'
    -- Get the full token name
    local tokenName = GetTokenName(shortToken)
    -- Print useful output if nil is not returned
    if tokenName ~= nil then
        Printf("The full version of '".. shortToken .. "' is '" .. tokenName .. "'")
    end
end
``` |

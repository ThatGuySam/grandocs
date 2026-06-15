---
title: "GetTokenNameByIndex(int)"
description: "The GetTokenNameByIndex Lua function returns a string with the keyword based on the index number provided."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_gettokennamebyindex.html"
scrapedAt: "2026-06-15T18:25:32.789Z"
pagefind: false
---
## Description

The **GetTokenNameByIndex** Lua function returns a string with the keyword based on the index number provided.

Each keyword is described in the [Command Syntax and Keywords section](/grandma3/2-3/command_syntax_keywords/).

## Arguments

- **Integer**:\
  The integer input is the index number for a corresponding keyword. There is no apparent logic to the index number and the keyword.

## Return

- **String**:\
  A string with the full keyword is returned.

\- OR -

- **Nil**:\
  If there is no corresponding keyword, then nil is returned.

## Example

If the keyword exists, this example returns the keywords matching the first 443 index numbers:

|                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    -- Create a variable to hold the keyword string
    local tokenName = ""
    -- Print the keywords to the first 443 indexes if possible
    for index = 1, 443, 1 do
        tokenName = GetTokenNameByIndex(index)
        if tokenName ~= nil then
            Printf("Token index " .. index .. " = " .. tokenName)
        end
    end
end
``` |

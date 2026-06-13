---
title: "GetVar(handle, string)"
description: "The GetVar Lua function returns the value of a specific variable in a set of variables. To learn more about the variables in plugins, look at the Variable Funct"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getvar.html"
scrapedAt: "2026-06-12T21:25:04.260Z"
---
## Description

The GetVar Lua function returns the value of a specific variable in a set of variables. To learn more about the variables in plugins, look at the [Variable Functions](/grandma3/2-4/lua_variables/) topic.

## Arguments

- **Handle**:\
  The handle of variable set.
- **String**:\
  The name of the variable. It needs to be in quotation marks.

## Return

- **Value**:\
  This is the value of the variable.

If the variable does not exist, then nil is returned.

## Example

This example returns the value of a variable called "myUserVar" in the set of user variables if it exists:

|                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- Get the value from a user variable called "myUserVar" - assuming it already exists
    local varValue = GetVar(UserVars(), "myUserVar")
    -- Print en error feedback or the value of the variable
    if varValue == nil then
        Printf("Variable returns nothing!")
    else
        Printf("Variable value is: " .. varValue)
    end
end
``` |

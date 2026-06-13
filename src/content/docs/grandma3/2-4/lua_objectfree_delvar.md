---
title: "DelVar(handle, string)"
description: "The DelVar Lua function deletes a specific variable in a set of variables. To learn more about the variables in plugins, have a look at the Variable Functions t"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_delvar.html"
scrapedAt: "2026-06-12T21:25:01.214Z"
---
## Description

The **DelVar** Lua function deletes a specific variable in a set of variables. To learn more about the variables in plugins, have a look at the [Variable Functions](/grandma3/2-4/lua_variables/) topic.

## Arguments

- **Handle**:\
  The handle of variable set.
- **String**:\
  The name of the variable. It needs to be in quotation marks.

## Return

- **Boolean**:

  - True / 1: The variable was deleted.
  - False / 0: The variable was not deleted.

If the variable does not exist, then false is also returned.

## Example

This example deletes a variable called "myUserVar" in the set of user variables.

|                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                       |
| ```
return function()
    -- Deletes the variable called 'myUserVar' in the 'UserVars' variable set.
    local success = DelVar(UserVars(), "myUserVar")
    -- Prints the outcome of the deletion outcome.
    if success then
        Printf("Variable is deleted.")
    else
        Printf("Variable is NOT deleted!")
    end
end
``` |

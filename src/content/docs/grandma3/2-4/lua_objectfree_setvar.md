---
title: "SetVar(handle, string, value)"
description: "The SetVar Lua function sets a value to a specific variable in a set of variables. To learn more about the variables in plugins, look at the Variable Functions "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_setvar.html"
scrapedAt: "2026-06-12T21:25:06.288Z"
---
## Description

The SetVar Lua function sets a value to a specific variable in a set of variables. To learn more about the variables in plugins, look at the [Variable Functions](/grandma3/2-4/lua_variables/) topic.

If the variable exists, then the value is overwritten. If it does not exist, then it is created with value.

## Arguments

- **Handle**:\
  The handle of variable set.
- **String**:\
  The name of the variable. It needs to be in quotation marks.
- **Value**:\
  The value can be a string, integer, or double.

## Return

- **Boolean**:

  - True / 1: The variable was set.
  - False / 0: The variable was not set.

## Example

This example sets a value to the variable called "myUserVar" in the set of user variables if it exists.

|                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                 |
| ```
return function()
    -- Sets the value of user variable "myUserVar" to "Hello World" and store the returned boolean in a Lua variable
    local success = SetVar(UserVars(), "myUserVar", "Hello World")
    -- Prints the ressult
    if success then
        Printf("Variable is stored.")
    else
        Printf("Variable is NOT stored!")
    end
end
``` |

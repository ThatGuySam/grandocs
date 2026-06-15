---
title: "UserVars()"
description: "The UserVars function returns a handle to the set of user variables. Read more about these in the Variables topic in the Macro section."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_uservars.html"
scrapedAt: "2026-06-15T18:25:35.698Z"
pagefind: false
---
The UserVars function returns a handle to the set of user variables. Read more about these in the [Variables](/grandma3/2-3/macro_variables/) topic in the Macro section.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle of the set of user variables.

## Example

This example sets, gets, and deletes a user variable:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Stores a local Lua variable with the handle for the user variables.
    local variableSection = UserVars()

    -- Sets a user variable with an integer value using the SetVar function.
    SetVar(variableSection, "myUserVar", 42)

    -- Prints the user variable using the GetVar function.
    Printf("The value  of myUserVar is: " .. GetVar(variableSection, "myUserVar"))

    -- Deletes the user variable using the DelVar function.
    DelVar(variableSection, "myUserVar")
end
``` |

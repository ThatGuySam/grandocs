---
title: "GlobalVars()"
description: "The GlobalVars function returns a handle to the set of global variables. Read more about these in the Variables topic in the Macro section."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_globalvars.html"
scrapedAt: "2026-06-15T18:25:33.172Z"
pagefind: false
---
## Description

The GlobalVars function returns a handle to the set of global variables. Read more about these in the [Variables](/grandma3/2-3/macro_variables/) topic in the Macro section.

## Arguments

This function does not accept any arguments.

## Return

- **Handle**:\
  The function returns a handle of the set of global variables.

## Example

This example sets, gets, and deletes a global variable:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ```
return function()
    -- Stores a local Lua variable with the handle for the global variable set.
    local variableSet = GlobalVars()
    -- Sets a global variable with an integer value using the SetVar() function.
    SetVar(variableSet, "myGlobalVar", 42)
    -- Prints the global variable using the GetVar() function.
    Printf("The value  of myGlobalVar is: " .. GetVar(variableSet, "myGlobalVar"))
    -- Deletes the global variable using the DelVar() function.
    DelVar(variableSet, "myGlobalVar")
end
``` |

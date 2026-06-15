---
title: "FixtureType()"
description: "The FixtureType Lua function returns a handle to the fixture type. The function does not accept any arguments, but the function must be executed when the comman"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_fixturetype.html"
scrapedAt: "2026-06-15T18:25:30.772Z"
pagefind: false
---
## Description

The FixtureType Lua function returns a handle to the fixture type. The function does not accept any arguments, but the function must be executed when the command line destination is at a fixture type. If the command line destination is not a valid fixture type, then the function returns "nil".

## Arguments

This function does not accept any arguments.

## Return

- **Handle** or **nil**:\
  The handle for the fixture type or nil.

## Example

This example prints the information about the second fixture type in the show:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- The function returns the handle to the fixture at the current command line destination.
    -- Change to the "FixtureType" destination.
    Cmd("ChangeDestination FixtureType")
    -- Change to the second fixture type in the show.
    Cmd("ChangeDestination 2")
    -- Dump information about the Fixture Type handle. 
    Printf("=============== START OF DUMP ===============")
    FixtureType():Dump()
    Printf("================ END OF DUMP ================")
    -- Return the command line destination to the Root.
    Cmd("ChangeDestination Root")
end
``` |

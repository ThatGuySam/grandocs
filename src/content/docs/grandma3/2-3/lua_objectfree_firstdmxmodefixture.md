---
title: "FirstDmxModeFixture(handle)"
description: "The FirstDmxModeFixture Lua function returns a handle to the first fixture matching the supplied DMX mode."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_firstdmxmodefixture.html"
scrapedAt: "2026-06-15T18:25:30.766Z"
pagefind: false
---
## Description

The **FirstDmxModeFixture** Lua function returns a handle to the first fixture matching the supplied DMX mode.

## Arguments

- **Handle**:\
  This must be a handle to a DMX mode.

## Return

- **Handle**:\
  The returned handle to the first fixture matching the DMX mode.

## Example

If it exists, this example prints the data connected to the first "Dimmer" fixture using "Mode 0" - if the fixture type exists in the show. It uses the Dump() functions:

# Dump()

The **Dump()** function returns a string with information about the object, for instance, the name, class, path of the object, its properties, and children.

Learn more in the [Dump() topic](/grandma3/2-3/lua_object_dump/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- Get the handle for the Dimmer fixture.
    local fixtureTypeHandle = Patch().FixtureTypes['Dimmer']

    -- Check if fixture type returned something and provide feedback.
    if fixtureTypeHandle == nil then
        ErrPrintf("The fixture type does not exist in this show. Try adding it or edit this plugin.")
    else
        -- Get the handle for the DMX mode of a Dimmer fixture.
        local fixtureDMXMode = fixtureTypeHandle.DMXModes["Mode 0"]

        -- Check if fixtureDMXMode returned something and provide feedback.
        if fixtureDMXMode == nil then
            ErrPrintf("The fixture type does not contain a 'Mode 0' DMX mode. Try adding it or edit this plugin.")
        else
            -- Dumps information about the first fixture matching the DMX mode.
            Printf("=============== START OF DUMP ===============")
            FirstDmxModeFixture(fixtureDMXMode):Dump()
            Printf("================ END OF DUMP ================")
        end
    end
end
``` |

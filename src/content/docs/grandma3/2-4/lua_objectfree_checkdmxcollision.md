---
title: "CheckDMXCollision(handle, string[, integer[, integer]])"
description: "The CheckDMXCollision Lua function checks if a specific DMX address range is available or already used."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_checkdmxcollision.html"
scrapedAt: "2026-06-12T21:25:00.240Z"
---
## Description

The **CheckDMXCollision** Lua function checks if a specific DMX address range is available or already used.

It uses the number of DMX channels in a specific "DMX mode" of a fixture type to calculate the number of DMX channels that should be available from a specified DMX start address.

All fixture types have at least one defined DMX mode. But fixtures often have more than one mode. This Lua function uses a specific DMX mode of a fixture type.

## Arguments

- **Handle**:\
  The handle must be for a "DMX mode". This is used to calculate how many DMX channels should be available in the range.
- **String**:\
  This must be a DMX address expressed as a string. This defines the start of the range to be checked.
- **Integer** (optional)|**nil**:\
  This optional integer is a count of subsequent "DMX Modes" that should also be checked. The default value is **1**.\
  For instance, if the provided "DMX Mode" uses 10 DMX channels and the count is set to 5, then there must be 50 unpatched DMX channels from the start address for a positive result.
- **Integer** (optional):\
  This optional integer indicates the break\_index. The default value is **0**, which is the first "DMX break" defined for the "DMX mode". All fixture types have at least one defined "DMX break".

## Return

- **Boolean**:\
  The function returns a boolean.

  - **True**:\
    The DMX address is available as a start address.
  - **False**:\
    The DMX address is unavailable as a start address for the calculated number of DMX channels.

## Example

This example prints feedback to the DMX collision check based on a DMX address of "1.001" and the DMX mode of the first fixture in the current selection:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- Set the DMX universe - range 1-1024.
    local myDMXUniverse = 1
    -- Set the DMX address in the universe - range 1-512.
    local myDMXAddress = 1
    -- Set the optional count for the number of fixtures (break_index channel amount) to check.
    local myCount = 1
    -- Set the optional break_index number for fixtures with multiple breaks. 
    -- Default value is 0 to indicate the first break.
    local myBreakIndex = 0

    -- Creates the string used for the DMX address.
    local startOfRange = string.format("%d.%03d", myDMXUniverse, myDMXAddress)

    -- Check if there is a selection and exit if there isn't.
    if SelectionFirst() == nil then
        Printf("Please make a selection and try again.")
        return
    end
    -- This gets the handle for the first fixture a patched generic Dimmers 8-bit mode.
    local myDmxMode = GetSubfixture(SelectionFirst()).ModeDirect

    if myDmxMode == nil then
        -- Exit the function if the DMX mode returns nil.
       
    else
        -- Do the actual collision check and provide useful feedback.
        if CheckDMXCollision(myDmxMode, startOfRange, myCount, myBreakIndex) then
            Printf("The DMX address " .. startOfRange .. " is available.")
            return
        else
            Printf("The DMX address " .. startOfRange .. " cannot be used as a start address for this patch.")
            return
        end
    end
end
``` |

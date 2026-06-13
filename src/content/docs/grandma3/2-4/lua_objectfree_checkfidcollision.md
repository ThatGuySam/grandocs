---
title: "CheckFIDCollision(integer[, integer[, integer]])"
description: "The CheckFIDCollision Lua function checks if a specific (range of) ID is available or already used. It can be used to check FID and any type of CID by adding a "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_checkfidcollision.html"
scrapedAt: "2026-06-12T21:25:00.313Z"
---
## Description

The **CheckFIDCollision** Lua function checks if a specific (range of) ID is available or already used. It can be used to check FID and any type of CID by adding a type integer.

## Arguments

- **Integer**:\
  The first integer is the ID that should be checked.
- **Integer** (optional):\
  This optional integer is a count of subsequent IDs that should also be checked. The default value is **1**. For instance, if FID 21 to 25 should be checked, then the count integer should be **5**.
- **Integer** (optional):\
  This optional integer indicates the IDType. The default value is **0**, which is the "Fixture" ID Type. See the example below for other valid integers.

## Return

- **Boolean**:\
  The function returns a boolean.

  - **True**:\
    The ID is available.
  - **False**:\
    The ID is already used.

## Example

This example prints feedback to the FID check:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Create a variable with the FID you want to check.
    local myFID = 2001
    -- Create a variable with the number of subsequent ID's to also check.
    local myCount = 10
    -- Create a variable with the IDType you want to check.
    -- Default value is 0. This is the "Fixture" type.
    -- Valid integers are:
    --- 0 = Fixture
    --- 1 = Channel
    --- 2 = Universal
    --- 3 = Houseligths (default name)
    --- 4 = NonDim (default name)
    --- 5 = Media (default name)
    --- 6 = Fog (default name)
    --- 7 = Effect (default name)
    --- 8 = Pyro (default name)
    --- 9 = MArker
    --- 10 = Multipatch
    local myType = 0

    -- Check if the count is more than one.
    if myCount > 1 then
        -- Check if there is a collision and print valid feedback.
        if CheckFIDCollision(myFID, myCount, myType) then
            Printf("The FID " .. myFID .. " to " .. (myFID + myCount) .. " is available.")
            return
        else
            Printf("The FID " .. myFID .. " to " .. (myFID + myCount) .. " gives an FID collision.")
            return
        end
    else
        if CheckFIDCollision(myFID, nil, myType) then
            Printf("The FID " .. myFID .. " is available.")
            return
        else
            Printf("The FID " .. myFID .. " gives an FID collision.")
            return
        end
    end
end
``` |

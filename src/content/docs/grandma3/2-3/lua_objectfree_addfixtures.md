---
title: "AddFixtures(table)"
description: "The AddFixture Lua function adds fixtures to the patch. The argument for the function is a table, which must contain valid data for the function to succeed. The"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_addfixtures.html"
scrapedAt: "2026-06-15T18:25:28.988Z"
pagefind: false
---
## Description

The **AddFixture** Lua function adds fixtures to the patch. The argument for the function is a table, which must contain valid data for the function to succeed. The function returns a "true" boolean value if the addition was a success. The function must be run with the command line in the correct patch destination.

## Arguments

- **Table**:\
  The table must contain valid data. This is a list of possible table elements. It is not necessary to add all elements.

  - **mode**:\
    This must be a **handle** to a valid "dmx\_mode". This defines a specific fixture type in a specific mode.
  - **amount**:\
    This is an **integer** number that defines how many fixtures should be added.
  - **name** (optional):\
    This is a string with the name of the (first) fixture.
  - **fid** (optional):\
    This is a **string** with the fixture's FID.
  - **cid** (optional):\
    This is a **string** with the CID for the fixture. This table field is only valid if the "idtype" is not "Fixture".
  - **idtype** (optional):\
    This is a **string** with the name of the ID Type. This is only needed if the type is different than "Fixture".
  - **patch** (optional):\
    This is a **table** with up to eight **strings**. The string must indicate a universe and a start address in the universe. The two must be separated by a dot. Each table element is used for the up to eight DMX breaks in the patch.
  - **layer** (optional):\
    This is a **string** with the layer name.
  - **class** (optional):\
    This is a **string** with the class name.
  - **parent** (optional):\
    This is a **handle** of the parent fixture. It is only needed if the fixture should be a sub-fixture of an existing fixture.
  - **insert\_index** (optional):\
    This is an **integer** indicating an insert index number.
  - **undo** (optional):\
    This is a **string** with an undo text.

## Return

- **Boolean** or **nil**:\
  The function returns a true boolean if the AddFixture function succeeded. It does not return anything (nil) if it fails.

## Example

This example adds a dimmer fixture with FID and CID 301 and patch address "10.001". It is a requirement that the generic dimmer type is already added to the show, that the ID and patch address are available, and that the stage is called "Stage 1". The example does not perform any check for availability.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ```
return function()
    -- Change the command line destination to the root.
    Cmd("ChangeDestination Root")
    -- Enter the "Patch".
    Cmd('ChangeDestination "ShowData"."Patch"')
    -- Enter the fixture location for the "Stage 1" object.
    Cmd('ChangeDestination "Stages"."Stage 1"."Fixtures"')

    -- Create a table.
    local myAddFixtureTable = {}
    -- Set the mode to a 8-bit Dimmer fixture type. 
    myAddFixtureTable.mode = Patch().FixtureTypes.Dimmer.DMXModes["Mode 0"]
    -- Set the amount of fixtures.
    myAddFixtureTable.amount = 1
    -- Set the FID for the fixture.
    myAddFixtureTable.fid = "301"
    -- Set the IdType - it is not needed if the type is "Fixture".
    myAddFixtureTable.idtype = "Channel"
    -- Set the CID - Use only this when the "idtype" is different than Fixture.
    myAddFixtureTable.cid = "301"
    -- Set the name of the fixture.
    myAddFixtureTable.name = "AddedDimmer 301"
    -- Create a patch table with an address.
    myAddFixtureTable.patch = {"10.001"}

    -- Add the fixture to the patch using the table data. Store the result in a local variable.
    local success = AddFixtures(myAddFixtureTable)
    
    -- Provide some feedback.
    if success ~= nil then
        Printf("Fixture " .. myAddFixtureTable.fid .. " is added with patch address " .. myAddFixtureTable.patch[1])
    else
        Printf("AddFixture failed!")
    end
    
    -- Return the command line to the root destination.
    Cmd("ChangeDestination Root")
end
``` |

---
title: "CreateMultiPatch({handles}, integer[, string])"
description: "The CreateMultiPatch Lua function creates a series of multi patch fixtures to a table of fixtures."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_createmultipatch.html"
scrapedAt: "2026-06-15T18:25:29.593Z"
pagefind: false
---
## Description

The **CreateMultiPatch** Lua function creates a series of multi patch fixtures to a table of fixtures.

## Arguments

- **Table**:\
  The table must contain **handles** to the fixtures who should have the multi patch fixtures.
- **Integer**:\
  The number of multi patch fixtures to create.
- **String** (optional):\
  The string is an optional undo text. It needs to be in quotation marks.

## Return

- **Integer** | **nil**:\
  The returned integer indicates the amount of multi patch fixtures created.

## Example

This example creates two multi patch fixtures to the first fixture (excluding the "Universal" fixture) in the patch.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- Enter Patch.
    Cmd("ChangeDestination Root");
    -- Enter the SetupPatch.
    Cmd("ChangeDestination 'ShowData'.'Patch'");

    -- Get the handle for the first fixture in the patch.
    local myFixture = Patch().Stages[1].Fixtures[2]
    -- Add the handle a list element in an table.
    local myFixtureTable = {myFixture}
    -- Add a variable with the amount of multipatch fixtures needed.
    local multiPatchAmount = 2

    -- Count the number of elements in the fixture table and store in a variable.
    local count = 0
    for _ in pairs(myFixtureTable) do
         count = count + 1
    end
    -- Create an unto text string.
    local undoText = string.format("Create %d multipatch fixtures for up to %d fixtures", multiPatchAmount, count)

    -- Create the multipatch fixtures to the each fixture handle in the table and store the returned value.
    local multiPatchAmount = CreateMultiPatch(myFixtureTable, multiPatchAmount, undoText)
    if multiPatchAmount ~= nil then
        Printf(multiPatchAmount .. " multi patch objects was created")
    else
        Printf("An error occured")
    end

    -- Return the command line destination to the root.
    Cmd("ChangeDestination Root")
end
``` |

---
title: "GetPresetData(handle[, boolean[, boolean]])"
description: "The GetPresetData Lua function returns a table with the preset data based on the preset handle."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_getpresetdata.html"
scrapedAt: "2026-06-12T21:25:03.531Z"
---
## Description

The **GetPresetData** Lua function returns a table with the preset data based on the preset handle.

The returned table is quite complex and has tables inside the table.

## Arguments

- **Handle**:\
  The handle**** of the preset from which the data will**** be collected.
- **Boolean** | **nil** (optional):\
  This boolean determines whether the returned table should only contain phaser data. The default value is "false".
- **Boolean** (optional):\
  This boolean defines if there should be an extra object in the returned table. The default value is "true". The extra table object has the key "by\_fixtures", and it contains the same table content as the returned table, but the keys are the fixture ID number instead of the UI Channel Index.

## Return

- **Table** | **nil**:\
  The returned table contains the preset data. It has multiple levels of tables.

## Example

This example prints information about the first level table in the preset data and the first level of the first fixture in the preset. It uses dimmer preset 1, which must exist.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ```
return function()
    -- Get the handle for the first Dimmer preset.
    local myPreset = DataPool().PresetPools[1][1]
    -- Get the Preset Data of the handle.
    local myPresetData = GetPresetData(myPreset, false, false)
    -- Check if the GetPresetData returns something. 
    if myPresetData == nil then
        ErrPrintf("Dimmer preset 1 does not exist. Please create one and try again.")
        return
    end

    -- Print the myPresetData table.
    for Key, value in pairs(myPresetData) do
      if type(value) == "table" then
        Printf("Key: " .. Key .. " ; Value type is: " .. type(value))
      else
        Printf("Key: " .. Key .. " ; Value type is: " .. type(value) .. " ; Value: " .. value)
      end
    end

    -- Create a table object to hold all the integer keys in the myPresetData table.
    local myIntegerTableKeys = {}
    -- Fill the table.
    for key,_ in pairs(myPresetData) do
        if type(key) == "number" then
            table.insert(myIntegerTableKeys, key)
        end
    end
    -- Sort the table
    table.sort(myIntegerTableKeys)

    -- Print the elements of the fixture with the lowest ui_channel_index in the preset.
    local tableIndex = myIntegerTableKeys[1]
    if tableIndex ~= nil then
        Printf("=============== TABLE CONTENT START - Table Key: " .. tableIndex .." ===============")
        for Key, value in pairs(myPresetData[tableIndex]) do
          if type(value) == "table" then
            Printf("Key: " .. Key .. " ; Value type is: " .. type(value))
          else
            Printf("Key: " .. Key .. " ; Value type is: " .. type(value) .. " ; Value: " .. tostring(value))
          end
        end
        Printf("================ TABLE CONTENT END - Table Key: " .. tableIndex .." ================")
    end
end
``` |

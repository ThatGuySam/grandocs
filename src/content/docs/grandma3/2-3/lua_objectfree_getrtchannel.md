---
title: "GetRTChannel(integer)"
description: "The GetRTChannel Lua function returns a table with information about the related RT Channel."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getrtchannel.html"
scrapedAt: "2026-06-15T18:25:32.334Z"
pagefind: false
---
## Description

The **GetRTChannel** Lua function returns a table with information about the related RT Channel.

## Arguments

- **Integer**:\
  The integer should be the index number for an RT Channel.

## Return

- **Table**:\
  The returned table contains related numbers, tables, and handles with a named identifying key:

  - handle "fixture"
  - handle "subfixture"
  - handle "dmx\_channel
  - integer "dmx\_default"
  - integer "dmx\_highlight"
  - integer "dmx\_lowlight"
  - integer "ui\_index\_first"
  - integer "rt\_index"
  - integer "freq"
  - table "info"
  - table "patch"

## Example

This example prints all information related to the first RT Channel for the first fixture in the selection:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ```
return function()
    -- Get the index number for the first RT Channel for the first fixture in the current selection 
    local channelRTIndex = GetRTChannels(SelectionFirst())[1]
    -- Print an error message if returnd index is nil
    if channelRTIndex == nil then
        ErrPrintf("Please select a fixture and try again")
        return
    end
    -- Print all information about the RT Channel if it does not return nil
    local rtChannel = GetRTChannel(channelRTIndex)
    if rtChannel == nil then
        Printf("An RTChannel could not be found. Please try to selct a different fixture and try again.")
        return
    end
    Printf("================= RT CHANNEL =================")
    Printf("ui_index_first = " .. rtChannel["ui_index_first"])
    Printf("dmx_lowlight = " .. rtChannel["dmx_lowlight"])
    Printf("dmx_highlight = " .. rtChannel["dmx_highlight"])
    Printf("dmx_default = " .. rtChannel["dmx_default"])
    Printf("freq = " .. rtChannel["freq"])
    Printf("rt_index = " .. rtChannel["rt_index"])
    Printf("========== RELATED DMX CHANNEL DUMP ==========")
    rtChannel["dmx_channel"]:Dump() -- Handle for relevant DMX channel
    Printf("============ RELATED FIXTURE DUMP ============")
    rtChannel["fixture"]:Dump() -- Handle for relevant fixture
    Printf("========== RELATED SUBFIXTURE DUMP ===========")
    rtChannel["subfixture"]:Dump() -- Handle for relevant subfixture
    Printf("=================== INFO =====================")
    Printf("normed_phaser_time = " .. rtChannel["info"]["normed_phaser_time"])
    Printf("================ INFO FLAGS ==================")
    Printf("group_master = " .. rtChannel["info"]["flags"]["group_master"])
    Printf("additive_master = " .. rtChannel["info"]["flags"]["additive_master"])
    Printf("solo = " .. rtChannel["info"]["flags"]["solo"])
    Printf("highlight = " .. rtChannel["info"]["flags"]["highlight"])
    Printf("lowlight = " .. rtChannel["info"]["flags"]["lowlight"])
    Printf("=================== PATCH ====================")
    Printf("break = " .. rtChannel["patch"]["break"])
    Printf("coarse = " .. rtChannel["patch"]["coarse"])
    Printf("fine = " .. rtChannel["patch"]["fine"])
    Printf("ultra = " .. rtChannel["patch"]["ultra"])
end
``` |

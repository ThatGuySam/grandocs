---
title: "ToAddr(handle)"
description: "The ToAddr Lua object function converts a handle to an address string that can be used in commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_object_toaddr.html"
scrapedAt: "2026-06-15T18:25:36.700Z"
pagefind: false
---
## Description

The **ToAddr** Lua object function converts a handle to an address string that can be used in commands.

See the [Handle topic](/grandma3/2-3/lua_handle/) for more info regarding handles and links to other related functions.

## Arguments

- **Handle**:\
  The function takes a handle of the type "light\_userdata" as an argument.\
  It can be omitted when using the colon notation on an object.

  The Colon Notation is a way to omit the handle as the first argument when using the Object functions.

  This is the general syntax with the colon notation: object:function()

  This is the general syntax with standard handle notation: object.function(object)

  Learn more in the [Lua Functions - Object API topic](/grandma3/2-3/lua_object/).

- **Boolean**:\
  Set this to "true" to get the returned name. "False" will return the object type and index number.

## Return

- **String**:\
  Text string with the address.

## Example

This example returns the address of the first sequence of the selected data pool, prints the address in the Command Line History, and creates a grandMA3 command with a "Go" keyword in front of the address. This command is sent to the grandMA3 command line.

The command line history shows the commands entered and how the system interprets the command and feedback. Learn more in the [Command Line topic](/grandma3/2-3/ws_ui_command_line/).

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- Stores the handle in a variable.
    local mySequence = DataPool().Sequences[1]
    if mySequence ~= nil then
        -- Converts the handle to the address and store in variable.
        local mySequenceAddressName = mySequence:ToAddr(true)
        local mySequenceAddress = mySequence:ToAddr(false)
        -- Print the address to the Command Line History.
        Printf("The named address of the sequence is: " .. mySequenceAddressName)
        Printf("The system address of the sequence is: " .. mySequenceAddress)
        -- Send a 'Go' command with the address appended.
        Cmd("Go %s", mySequenceAddress)
    else
        ErrPrintf("The sequence could not be found")
    end
end
``` |

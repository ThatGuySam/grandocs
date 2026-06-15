---
title: "GetSample(string)"
description: "The GetSample Lua function returns a number representing a percentage usage based on a string input."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getsample.html"
scrapedAt: "2026-06-15T18:25:32.476Z"
pagefind: false
---
## Description

The **GetSample** Lua function returns a number representing a percentage usage based on a string input.

## Arguments

- **String**:\
  Only a specific list of strings can be input:

  - MEMORY
  - CPU
  - CPUTEMP
  - GPUTEMP
  - SYSTEMP
  - FANRPM

## Return

- **Number**:\
  A number (float) is returned.

## Example

This example stores the different samples in a table and then prints the content of the table:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ```
return function()
    -- Gather the sample information in a table
    local sample = {}
    sample["MEMORY"] = GetSample("MEMORY")
    sample["CPU"] = GetSample("CPU")
    sample["CPUTEMP"] = GetSample("CPUTEMP")
    sample["GPUTEMP"] = GetSample("GPUTEMP")
    sample["SYSTEMP"] = GetSample("SYSTEMP")
    sample["FANRPM"] = GetSample("FANRPM")
    -- Print the collected data
    Printf("Memory ; ".. sample["MEMORY"])
    Printf("CPU ; ".. sample["CPU"])
    Printf("CPU temperature ; ".. sample["CPUTEMP"])
    Printf("GPU temperature ; ".. sample["GPUTEMP"])
    Printf("System temperature ; ".. sample["SYSTEMP"])
    Printf("Fan RPM ; ".. sample["FANRPM"])
end
``` |

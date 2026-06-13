---
title: "ClassExists(string)"
description: "The ClassExists Lua function returns a boolean indicating whether the provided string is a class."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_classexists.html"
scrapedAt: "2026-06-12T21:25:00.318Z"
---
## Description

The **ClassExists** Lua function returns a boolean indicating whether the provided string is a class.

## Arguments

- **String**:\
  A string containing a single word that could be a class.

## Return

- **Boolean**:\
  The function returns a boolean.

  - **True**:\
    The provided word is a class.
  - **False**:\
    The provided input is not a class.

## Example

This example asks if the word "Display" is a class and returns proper feedback.

|                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                         |
| ```
return function()
    -- Store a string with the class name
    local className = "Display"
    -- Check if the class exists and then provide proper feedback
    if ClassExists(className) then
        Printf("The class '%s' exists", className)
    else
        Printf("The class '%s' does not exists", className)
    end
end
``` |

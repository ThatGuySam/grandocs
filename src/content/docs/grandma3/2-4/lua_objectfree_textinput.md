---
title: "TextInput([string[, string[, integer[, integer]]]])"
description: "The TextInput Lua function opens a text input pop-up and returns the typed input as a string. It is part of the user interface functions."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_textinput.html"
scrapedAt: "2026-06-12T21:25:06.588Z"
---
## Description

The **TextInput** Lua function opens a text input pop-up and returns the typed input as a string. It is part of the user interface functions.

## Arguments

- **String** (optional):\
  This string is the title for the pop-up. The title bar has a default "Edit" text at the beginning of the title that cannot be removed.
- **String** (optional):\
  This string is the text already in the input field - can be used to provide user guidance.
- **Integer** (optional):\
  This integer defines a position on the x-axis where the pop-up should appear (on all screens). "0" is on the left side of the screen. Nil or undefined is centered.
- **Integer** (optional):\
  This integer defines a position on the y-axis where the pop-up should appear (on all screens). "0" is at the top of the screen. Nil or undefined is centered.

## Return

- **String**:\
  The returned user input.

### Example

To open a text input and print the entered value in the Command Line History, create a plugin with this code:

|                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                      |
| ```
return function()
    -- Create a pop-up with the title and an input field containing some default text
    -- The returned text is store in a Lua variable
    local input = TextInput("This is the title","Please provide your input here")
    -- Print the returned text value
    Printf("You entered this message: %s",tostring(input))
end
``` |

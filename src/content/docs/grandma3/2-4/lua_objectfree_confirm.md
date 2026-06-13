---
title: "Confirm(string[, string[, integer[, boolean]]])"
description: "The Confirm Lua function provides a simple confirmation pop-up for a true/false query. It is part of the user interface functions."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/lua_objectfree_confirm.html"
scrapedAt: "2026-06-12T21:25:00.763Z"
---
## Description

The **Confirm** Lua function provides a simple confirmation pop-up for a true/false query. It is part of the user interface functions.

## Arguments

- **String**:\
  This string is the title for the pop-up.

- **String** (optional):\
  This string is the text in the pop-up.

- **Integer** (optional):\
  This integer is not used since the pop-up appears on all screens. The value can be _nil_.

- **Boolean** (optional):\
  This boolean defines if there is a Cancel button in the pop-up or not.

  - true: There is a Cancel button in the pop-up. This is the default option used if it is not defined.
  - false: There is only an OK button in the pop-up.

## Return

- **Boolean**:

  - True / 1: The pop-up was confirmed with the OK.
  - False / 0: The pop-up was not confirmed with Cancel. This is only a possible option if the Cancel button is visible.

## Example

This example creates a confirmation pop-up with printed feedback in the Command Line History:

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                |
| ```
return function()
    --Creates a pop-up asking to be confirmed and prints a useful text.
    if Confirm("Confirm me", "Tap OK or Cancel", nil, true) then
        Printf("Pop-up result: OK")
    else
        Printf("Pop-up result: Cancel")
    end
end
``` |

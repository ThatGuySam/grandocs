---
title: "SetUserVar"
description: "To get the SetUserVar keyword in the command line, type SetUserVar or the shortcut SetUsn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_setuservar.html"
scrapedAt: "2026-06-12T21:28:01.352Z"
---
To get the SetUserVar keyword in the command line, type **SetUserVar** or the shortcut **SetUs** in the command line.

## Description

The SetUserVar keyword sets user profile specific variables. For more information, see [Macros - Use Variables](/grandma2/key_macro_create_variables/).

## Syntax

SetUserVar $variablename = numericvalue

SetUserVar $variablename = "text"

SetUserVar $variablename = ("text")

SetUserVar $variablename = nothing

**Hint:**\
To see the set user variables in the command line feedback window, use the [ListUserVar keyword](/grandma2/key_keyword_listuservar/).

## Examples

Create a macro in the macro pool that asks "Cue number to store?", stores and labels the cue for the selected executor.

1. Open the Macro Pool.
2. Press Edit and tap on a empty macro pool tile.\
   The Edit Macro pop-up opens.\
    

   ![](/img/grandma2/popup_edit-macro_v3-2-b292b3.png)

   _Edit Macro Pop-Up_
3. Tap Add.\
   The Edit CMD pop-up opens.\
    

   ![](/img/grandma2/popup_edit-cmd_v3-2-71d9ef.png)

   _Edit CMD (= Command) Pop-Up_
4. Type SetUserVar $CueNumber = ("Cue number to store?")
5. Type Store Cue $CueNumber
6. Type Label Cue $CueNumber

The macro is ready to use.

---

- Delete a variable.

\[Channel]> SetUserVar $CueNumber =

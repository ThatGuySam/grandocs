---
title: "SetVar"
description: "To go to the SetVar keyword, type SetVar in the command line or use the shortcut SetV."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_setvar.html"
scrapedAt: "2026-06-12T21:28:01.410Z"
---
To go to the SetVar keyword, type **SetVar** in the command line or use the shortcut **SetV**.

## Description

The SetVar keyword sets global show variables. Every user profile can use these variables. For more information, see [Macros - Use Variables](/grandma2/key_macro_create_variables/).

## Syntax

SetVar $variablename = numericvalue

SetVar $variablename = "text"

SetVar $variablename = ("text")

SetVar $variablename = nothing

**Hint:**\
To see the set variables in the command line feedback window, use the [ListVar keyword](/grandma2/key_keyword_listvar/).

## Examples

Create a macro in the macro pool that asks "Which song?", and opens the respective page.

1\. Open the Macro Pool.

2\. Press Edit and tap on a empty macro pool tile.\
The Edit Macro pop-up opens.

![](/img/grandma2/popup_edit-macro_v3-2-b292b3.png)

_Edit Macro Pop-Up_

 

3\. Tap Add.\
The Edit CMD pop-up opens.

![](/img/grandma2/popup_edit-cmd_v3-2-71d9ef.png)

_Edit CMD (= Command) Pop-Up_

 

4\. Type SetVar $Songname = ("Which song?")

**Important:**\
Quotes are necessary to indicate a text string. If you do not indicate a text string by quotes, the console interprets the text as commands.

5\. Type Page $"Songname"

The macro is ready to use.

---

- Delete a variable.

\[Channel]> SetVar $CueNumber =

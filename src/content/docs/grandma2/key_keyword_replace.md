---
title: "Replace"
description: "To get the Replace keyword in the command line, press Move Move (= Replace)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_replace.html"
scrapedAt: "2026-06-12T21:27:59.975Z"
---
To get the Replace keyword in the command line, press Move Move (= Replace).

You can also type **Replace  **or the shortcut **Rep** in the command line.

## Description

The replace keyword replaces object and values. For more information, see [search and replace](/grandma2/key_search_replace/).

The replace keyword is a function keyword.

## Syntax

**Replace \[**search for objects] **With \[**replace with objects]  ( If ** \[**search in objects] )

## Examples

-  Add 10° to all pan values in all cues and presets.

\[Channel]> Replace Attribute "Pan" At - 270 Thru 270 With - 260 Thru 280

- Subtract 10 % from all dimmer values in all cues from sequences 3.

\[Channel]> Replace Attribute "Dim" At 0 Thru 100 With 0 Thru 90 If Sequence 3

- Replace the individual fade time of 5 by 10 for attribute tilt.

\[Channel]> Replace Attribute "Tilt" Fade 5 with Fade 10

**Hint:**\
If you would like to replace two fixtures with each other, use a third fixture. See the examples below this box.

Replace fixtures with each other in three steps:

1. Replace fixture 2 with 3. 

\[Channel]> Replace Fixture 2 with 3

2. Replace fixture 1 with 2. 

\[Channel]> Replace Fixture 1 with 2

3. Replace fixture 3 with 1. 

\[Channel]> Replace Fixture 3 with 1 

- Delete a specific fixture from everywhere where it is linked to.

\[Channel]> Replace Fixture 1 With

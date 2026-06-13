---
title: "Remove"
description: "To go to the Remove keyword, press Delete Delete (= Remove)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_remove.html"
scrapedAt: "2026-06-12T21:27:59.828Z"
---
To go to the Remove keyword, press Delete Delete (= Remove).

You can also type **Remove** in the command line or use the shortcut **Remov**.

## Description

The Remove keyword enters remove values in the programmer for attributes by the given object list, filtered by the current selection.

Remove values used with a store merge function, removes previous stored values. If a stored value is removed, values from the previous cue will be tracked again.

The remove values are applied to all layers by default.

## Syntax

Remove \[Object-list]

Remove \[Effect-list]

## Examples

- Enter remove values in all layers for all attributes of the current selection.

\[Channel]> Remove Selection

 

- Enter remove values for pan and tilt in all layers for the current selection, or for all fixtures if no selection.

\[Channel]> Remove PresetType "position"

 

- Enter remove values for dimmer attribute for fixture 1.

\[Channel]> Remove Fixture 1 If PresetType 1

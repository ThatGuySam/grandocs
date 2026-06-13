---
title: "Default"
description: "To execute the keyword Defaultress and hold !ma +  . ."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_default.html"
scrapedAt: "2026-06-12T21:27:47.794Z"
---
To execute the keyword **Default** press and hold ![ma](/img/grandma2/ma_1-290dfd.png) +  . .

You can also type **Default** or the shortcut **D** into the command line.

## Description

The Default keyword sets the given attributes for the fixture or channel selection to default values. If no attribute list is given, all attributes of fixture or channel selection will be set to their default values.

If **individual default values** for the fixture or channel are set in the edit menu, the individual default value will be used.\
If only **general default values** for the fixture or channel are set in the Patch and Fixture Schedule, the general default values will be used.

You can also use the Default Link in the calculator. For more information, see [Calculator](/grandma2/key_ws_calculator/).

Default values are displayed in the fixture or channel sheet in brackets.

![](/img/grandma2/window_fixture-sheet-default-values_v3-2-630f3b.png)

_Fixture sheet color default values_

## Syntax

Default

Fixture \[Fixture ID] Default PresetType \[PresetType Number]

Channel \[Channel ID] Default PresetType "PresetType Name"

## Examples

- Set pan and tilt of the fixture selection to their default values.

\[Channel]> Default PresetType "Position"

---

-  Set all attributes of fixture 1 to their default values.

 \[Channel]> Fixture 1 Default

---
title: "SnapPercent"
description: "To get the SnapPercent keyword in the command line by using the keys, it is necessary to press another function key before, e.g. Store and then five times Time."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_snappercent.html"
scrapedAt: "2026-06-12T21:28:01.633Z"
---
To get the SnapPercent keyword in the command line by using the keys, it is necessary to press another function key before, e.g. Store and then five times Time.

You can also type, **SnapPercent** or the shortcut **Sn** in the command line.

## Description

**Important:**\
To use the SnapPercent it is necessary that attributes of the fixture types must have Snap On.\
Go to the **Patch & Fixture Schedule I Fixture Types**. Select a fixture type and click Edit, in the column **Snap** select **On.**

With the SnapPercent keyword, you set a snap time in percent.\
The snap time is a delay time for not fading attributes, eg. gobo or colorwheel.

**Hint:**\
To see the assigned snap percent, press Edit and then the executor button. The edit executor pop-up opens. In the table is a column snap percent, what displays the assigned snap percent.

## Syntax

SnapPercent \[Value-list]

## Examples

- Store a cue with a snap percent of 4.

\[Channel]> Store Cue 1 SnapPercent 4

 

- Assign a snap percent to an existing cue.

\[Channel]> Assign Cue 1 SnapPercent 4

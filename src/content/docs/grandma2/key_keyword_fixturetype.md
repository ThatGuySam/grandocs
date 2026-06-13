---
title: "FixtureType"
description: "To execute the keyword FixtureType press !ma and Fixture or type FixtureTyper one of the shortcuts FT or FixtureTnto the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_fixturetype.html"
scrapedAt: "2026-06-12T21:27:51.173Z"
---
To execute the keyword FixtureType press ![ma](/img/grandma2/ma_1-290dfd.png) and Fixture or type **FixtureType** or one of the shortcuts **FT** or **FixtureT** into the command line.

## Description

FixtureType is an object keyword for the fixture types in the show file. Fixture types also contain global data in presets. 

**Important:**\
Most edits and command line actions with the keyword FixtureType has to be done while in the Edit Setup mode. For more information, see [ChangeDest keyword](/grandma2/key_keyword_changedest/).

**Hint:**\
Fixture types are displayed at the bottom of channel and fixture sheets.

## Syntax

FixtureType \[ID]

## Examples

Edit Setup/Layers 4/Dimmer 2> Assign FixtureType 2 At 1 Thru 4

Assigns fixture type 2 to fixtures 1 through 4. 

 

\[Channel]> Clone FixtureType 2 at 3 if Preset "Color".\*

Clones global color presets of fixture type 2 to fixture type 3.

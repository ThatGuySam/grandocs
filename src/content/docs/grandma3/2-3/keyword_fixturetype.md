---
title: "FixtureType"
description: "To enter the FixtureType keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fixturetype.html"
scrapedAt: "2026-06-15T18:25:02.548Z"
pagefind: false
---
To enter the FixtureType keyword in the command line, use one of the options:

- Press MA + Fixture
- Type **FixtureType**
- Type the shortcuts **FT** or **Fixturet**

## Description

FixtureType is an object keyword which addresses the fixture types of a show file.

|                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                      |
|                                                  | Most edits and command line actions with the keyword FixtureType has to be done while in the Edit Setup mode. For more information, see [ChangeDestination keyword](/grandma3/2-3/release_notes/).  |

## Syntax

\[Function] FixtureType \["FixtureType\_Name" or FixtureType\_Number]

## Option Keywords

The FixtureType keyword uses the following option keywords:

- [/All](/grandma3/2-3/ok_all/)
- [/OddEven](/grandma3/2-3/ok_oddeven/)
- [/Single](/grandma3/2-3/ok_single/)

## Examples

**Requirement:**

- Enter the Patch menu first.\
  For more information see [Patch and Fixture Setup](/grandma3/2-3/patch/).

 

- To assign fixture type 2 to fixtures 1 through 4, type:

|                                                                    |                                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/Patch/Stages/Stage 1> Assign FixtureType 2 At 1 Thru 4 |

 

- To select all patched fixtures of fixture type 3, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SelectFixtures FixtureType 3 |

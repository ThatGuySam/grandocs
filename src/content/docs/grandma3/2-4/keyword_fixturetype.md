---
title: "FixtureType"
description: "To enter the FixtureType keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_fixturetype.html"
scrapedAt: "2026-06-12T21:24:27.616Z"
---
To enter the FixtureType keyword in the command line, use one of the options:

- Press MA + Fixture
- Type **FixtureType**
- Type the shortcuts **FT** or **Fixturet**

## Description

FixtureType is an object keyword which addresses the fixture types of a show file.

|                                                  |                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                      |
|                                                  | Most edits and command line actions with the keyword FixtureType has to be done while in the Edit Setup mode. For more information, see [ChangeDestination keyword](/grandma3/2-4/release_notes/).  |

## Syntax

\[Function] FixtureType \["FixtureType\_Name" or FixtureType\_Number]

## Option Keywords

The FixtureType keyword uses the following option keywords:

- [/All](/grandma3/2-4/ok_all/)
- [/OddEven](/grandma3/2-4/ok_oddeven/)
- [/Single](/grandma3/2-4/ok_single/)

## Examples

**Requirement:**

- Enter the Patch menu first.\
  For more information see [Patch and Fixture Setup](/grandma3/2-4/patch/).

 

- To assign fixture type 2 to fixtures 1 through 4, type:

|                                                                    |                                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@ShowData/Patch/Stages/Stage 1> Assign FixtureType 2 At 1 Thru 4 |

 

- To select all patched fixtures of fixture type 3, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SelectFixtures FixtureType 3 |

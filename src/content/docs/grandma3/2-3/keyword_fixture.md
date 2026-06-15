---
title: "Fixture"
description: "To enter the Fixture keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fixture.html"
scrapedAt: "2026-06-15T18:25:02.404Z"
pagefind: false
---
To enter the Fixture keyword in the command line, use one of the options:

- Press Fixture
- Type **Fixture**
- Type the shortcut **F** or **Fi**

## Description

The Fixture keyword is used as an object keyword to access fixtures that have a fixture ID. 

## Syntax

Fixture \["Fixture\_Name" or Fixture\_Number]

Fixture \["Fixture\_Name" or Fixture\_Number].\["SubFixture\_Name" or SubFixture\_Number]

## Option Keywords

The Fixture keyword uses the following option keywords:

- [/OddEven](/grandma3/2-3/ok_oddeven/)

## Examples

- To select fixture 2, type:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Fixture 2 |

 

- To select the fifth subfixture of fixture 10, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 10.5  |

 

- To call values of fixture 1 of the next cue in the selected sequence to programmer, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 At Cue Next |

- To call values of fixture 5 of the previous cue in the selected sequence to programmer, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 5 At Cue Previous |

---
title: "Fixture"
description: "To enter the Fixture keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_fixture.html"
scrapedAt: "2026-06-12T21:24:27.307Z"
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

- [/OddEven](/grandma3/2-4/ok_oddeven/)

## Examples

- To select fixture 2, type:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Fixture 2 |

 

- To select the fifth subfixture of fixture 10, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 10.5  |

 

- To call values of fixture 1 of the next cue in the selected sequence to programmer, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 At Cue Next |

- To call values of fixture 5 of the previous cue in the selected sequence to programmer, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 5 At Cue Previous |

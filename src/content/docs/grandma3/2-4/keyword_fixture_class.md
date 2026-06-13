---
title: "FixtureClass"
description: "To enter the FixtureClass keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_fixture_class.html"
scrapedAt: "2026-06-12T21:24:27.462Z"
---
To enter the FixtureClass keyword in the command line, use one of the options:

- Press MA + Fixture + Fixture + Fixture
- Type **FixtureClass**
- Type the shortcuts **FC** or **Fixturec**

## Description

FixtureClass is an object keyword which addresses the fixture classes of a show file.

## Syntax

\[Function] FixtureClass \["FixtureClass\_Name" or FixtureClass\_Number]

## Option Keywords

The FixtureClass keyword uses the following option keywords:

- [/All](/grandma3/2-4/ok_all/)
- [/OddEven](/grandma3/2-4/ok_oddeven/)
- [/Single](/grandma3/2-4/ok_single/)

## Examples

**Requirement:** Create the class "Spots" in the patch and link fixtures to it.

 

- To create a group in the group pool object 301 that contains all patched fixtures that are set to class "Spots" in the patch, type:

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate FixtureClass "Spots" At Group 301 |

 

- To select all fixtures that are set to the class "Spots" in the patch, type:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SelectFixture FixtureClass "Spots" |

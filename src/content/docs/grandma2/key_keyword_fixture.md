---
title: "Fixture"
description: "To get the Fixture keyword in the command line press Fixture."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_fixture.html"
scrapedAt: "2026-06-12T21:27:51.122Z"
---
To get the Fixture keyword in the command line press Fixture.

Another way is to type **Fixture** or the shortcut **F** in the command line.

## Description

Fixture is an object keyword to access fixtures with a fixture ID.

The default function for fixture objects is [SelFix](/grandma2/key_keyword_selfix/). This means that entering fixtures without any function specified selects the fixtures.

## Syntax

Fixture \[ID]

Fixture \[ID].\[Sub-ID]

## Examples

- To select fixture 34 type in the command line:

\[Channel]> Fixture 34

 

- To select the fifth subfixture of the fixture cluster fixture 11 type in the command line:

\[Channel]> Fixture 11.5

 

- To select all subfixtures of the fixture cluster fixture 11 type in the command line:

\[Channel]> Fixture 11

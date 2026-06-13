---
title: "SelFix"
description: "To go to the SelFix keyword, press Select Select (= SelFix)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_selfix.html"
scrapedAt: "2026-06-12T21:28:00.813Z"
---
To go to the SelFix keyword, press Select Select (= SelFix).

You can also type **SelFix** in the command line or use the shortcut **SelF**.

## Description

The SelFix keyword creates fixture selections in the programmer.

If fixtures are only selected, the SelFix keyword adds additional fixtures to the selection.\
If fixtures are selected and active in the programmer, the SelFix keyword replaces the selection by the SelFix selection.

If the exact same SelFix command is used multiple times in a row, the second command starts to activate values in the programmer, the third deactivates the values in the programmer.

SelFix is the default function for the most objects, e.g. Fixture or Channel.

SelFix is a function keyword.

To clear the selection, press Clear.

## Syntax

SelFix \[Object-list]

## Examples

- Select all fixtures or channels stored in a sequence on executor 1.

\[Channel]> SelFix Executor 1

 

- Select all fixtures stored in preset 1.

\[Channel]> SelFix Preset 1

 

- Select all fixtures used in effect 3.

\[Channel]> SelFix Effect 3

---
title: "MAtricksFilter"
description: "To get the MAtricksFilter keyword in the command line type MAtricksFilterr one of the shortcuts MFr MAtricksFn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_matricksfilter.html"
scrapedAt: "2026-06-12T21:27:55.565Z"
---
To get the MAtricksFilter keyword in the command line type **MAtricksFilter** or one of the shortcuts **MF** or **MAtricksF** in the command line.

## Description

MatricksFilter is a function keyword to set the Matricks filter values.

With the function MatricksFilter, fixtures of the current selection that matches the given filter, will be sub selected.

For more information see [MAtricks](/grandma2/key_matricks/).

## Syntax

MatricksFilter \[filter number]

MatricksFilter "filter name"

MatricksFilter + | -

MatricksFilter Off

## Examples

- To select the second filter (EvenID), only Channels/fixtures with last digit 2/4/6/8/0 will be actively selected type in the command line:

\[Channel]> MF 2

 

- To select the "OddID" filter, only channels/fixtures with last digit 1/3/5/7/9 will be actively selected type in the command line:

\[Channel]> MatricksFilter "OddID"

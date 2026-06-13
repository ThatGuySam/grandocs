---
title: "MAtricksInterleave"
description: "To get the MAtricksInterleave keyword in the command line type MAtricksInterleaver one of the shortcuts MI or MAtricksIn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_matricksinterleave.html"
scrapedAt: "2026-06-12T21:27:55.720Z"
---
To get the MAtricksInterleave keyword in the command line type **MAtricksInterleave** or one of the shortcuts **MI** or **MAtricksI** in the command line.

## Description

MatricksInterleave is a function keyword to create a virtual array of the fixture selection.

With the function MatricksInterleave the selection is wrapped onto a new row for every n'th fixture, creating a virtual array.

For more information see [MAtricks](/grandma2/key_matricks/).

## Syntax

MatricksInterleave \[array width]

MatricksInterleave \[column].\[array width]

MatricksInterleave + | -

MatricksInterleave Off

## Examples

- To select the first column of a 2 column wide array = first of every second fixture = "Odd" type in the command line:

\[Channel]> MatricksInterleave 1.2

 

- To increase the array width type in the command line:

\[Channel]> MatricksInterleave +

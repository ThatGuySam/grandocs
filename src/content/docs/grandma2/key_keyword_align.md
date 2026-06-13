---
title: "Align"
description: "To toggle through the different align modes press Align."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_align.html"
scrapedAt: "2026-06-12T21:27:44.352Z"
---
To toggle through the different align modes press Align.

## Description

Align is a function keyword to change the mode of the attribute encoders.

Call the mode by its name or index number.

| Name | Index Number |
| ---- | ------------ |
| Off  | 0            |
| <    | 1            |
| >    | 2            |
| ><   | 3            |
| <>   | 4            |

When activating an Align-mode, the encoders will no longer adjust the whole selection equally, but adjust proportionally according to selection order, either most at the last, most at the first, most at the last & first (inverted), or most at the center of the selection.

## Syntax:

Align \[mode]

Align Off

## Example

- To set the encoders to first align mode type in the command line:

\[Channel]> Align "<"

 

- To turn off any align mode type in the command line:

\[Channel]> Align 0

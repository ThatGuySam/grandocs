---
title: "Layout"
description: "To get the Layout keyword in the command line press !ma + Group (= Layout)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_layout.html"
scrapedAt: "2026-06-12T21:27:53.565Z"
---
To get the Layout keyword in the command line press ![ma](/img/grandma2/ma_1-290dfd.png) + Group (= Layout).

You can also type **Layout** or the shortcut **Lay** in the command line.

## Description

**Layout** is an object-type representing a layout of fixtures and other objects.

The default function for Layout objects is Select. This means that calling Layouts without any function specified selects the Layout, and any Layout Views with **Link Selected** enabled shows this Layout.

## Syntax

Layout \[ID]

## Examples

To select Layout 3 for display in the Layout View, type in the command line:

\[Channel]> Layout 3

 

To create Layout 5 and add the fixture selection to this layout, type in the command line:

\[Channel]> Store Layout 5

 

To add Group 5 as a button in Layout 4, type in the command line:

\[Channel]> Assign Group 5 Layout 4

 

To add the selected bitmap effect to Layout 1, type in the command line:

\[Channel]>  At Layout 1

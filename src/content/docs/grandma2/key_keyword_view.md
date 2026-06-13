---
title: "View"
description: "To get the View keyword in the command line, press View or type View in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_view.html"
scrapedAt: "2026-06-12T21:28:04.578Z"
---
To get the View keyword in the command line, press View or type **View** in the command line.

## Description

The view keyword calls views on a screen.

With the option **/screen** you select

on which screen the view will be called

\- or -

which screens will be stored in a view.

## Syntax

View \[ID]

View \[ID] / screen = \[ID]

View \[ID] / \[option] = \[option value]

## Options

The following table displays the assignable options along with the [Assign keyword](/grandma2/key_keyword_assign/).

| Option | Option Value                                           |
| ------ | ------------------------------------------------------ |
| Name   | View name, e.g. "Stage Extern".                        |
| Info   | Additional information to the view, e.g. "all I need". |

## Examples

- Call view 2 from the view pool on that screen where it is stores from.

\[Channel]> View 2

 

- Call view 5 on screen 2.

\[Channel]> View 5 /screen = 2

 

- Store the content of screen 2, 3, and 4 at view object 5.

\[Channel]> Store View 5 /screen = 234

 

- Assign view 2 the name Stage Extern.

\[Channel]> Assign View 2/name = "Stage Extern"

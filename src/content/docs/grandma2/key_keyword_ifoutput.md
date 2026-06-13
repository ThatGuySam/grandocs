---
title: "IfOutput"
description: "To get the IfOutput keyword in the command line press If."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_ifoutput.html"
scrapedAt: "2026-06-12T21:27:52.693Z"
---
To get the IfOutput keyword in the command line press If.

Another way is to type **IfOutput** or the shortcut **IfO** directly in the command line.

## Description

IfOutput is a function keyword to select fixtures based on their current output.

IfOutput selects fixtures that have values originating from the object list, or with dimmer attribute values, fade or delay times within the range of the value list.

If no argument is entered, the fixtures with a dimmer value above zero will be selected.

## Syntax

IfOutput

IfOutput \[Object-list]

IfOutput At \[Value-list]

IfOutput At Fade \[Value-list]

IfOutput At Delay \[Value-list]

## Examples

- To select all fixtures with a dimmer value above zero type in the command line:

\[Channel]> IfOutput

 

- To select all fixtures currently using the color preset "Red" type in the command line:

\[Channel]> IfOutput Preset "color"."Red"

 

- To select all fixtures with dimmer value between 50 % and 75 % type in the command line:

\[Channel]> IfOutput At 50 Thru 75

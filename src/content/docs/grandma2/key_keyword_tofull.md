---
title: "ToFull"
description: "To get the ToFull keyword in the command line, press >>> >>> >>> (= ToFull)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_tofull.html"
scrapedAt: "2026-06-12T21:28:03.477Z"
---
To get the ToFull keyword in the command line, press >>> >>> >>> (= ToFull).\
You can also type **ToFull** or the shortcut **ToF** in the command line.

## Description

The ToFull keyword sets the masterlevel of objects to 100 %.

ToFull is a function keyword.

**Important:**\
ToFull adjusts only masterlevels to 100 % and NOT e.g. speedmaster or crossfader.\
To set all faders to 100 %, use the [At keyword](/grandma2/key_keyword_at/).

##  

## Syntax

ToFull \[Executor-list] / \[Option] = \[Option Value]

ToFull SpecialMaster \[ID] / \[Option] = \[Option Value]

##  

## Examples

- Sets the masterlevel of executor 1 to 100 %.

\[Channel]> ToFull Executor 1

 

- Sets the grandmaster to full.

\[Channel]> ToFull SpecialMaster "grandmaster" . "grand"

- \- or -

\[Channel]> ToFull SpecialMaster 2.1

 

-  Sets the fader of executor 1 with cue mode assert to full.

\[Channel]> ToFull Executor 1 / cm = A

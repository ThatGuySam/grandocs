---
title: "ToZero"
description: "To go to the ToZero keyword, press <<< <<< <<< (= ToZero)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_tozero.html"
scrapedAt: "2026-06-12T21:28:03.722Z"
---
To go to the ToZero keyword, press <<< <<< <<< (= ToZero).

You can also use the command line and type **ToZero** or use the shortcut **ToZ**.

## Description

The ToZero keyword sets the masterlevel of objects to zero.

ToZero is a function keyword.

**Important:**\
ToZero sets only masterlevels to zero and NOT e.g. speedmaster or crossfader.\
To set all faders to zero, use the [At keyword](/grandma2/key_keyword_at/).

## Syntax

ToZero \[Executor-list] / \[Option] = \[Option Value]

ToZero SpecialMaster \[ID] / \[Option] = \[Option Value]

##  

## Examples

- Sets the masterlevel of executor 1 to zero.

\[Channel]> ToZero Executor 1

 

- Sets the grandmaster to zero.

\[Channel]> ToZero SpecialMaster "grandmaster" . "grand"

\- or -

\[Channel]> ToZero SpecialMaster 2.1

 

- Sets the fader of executor 1 with cue mode assert to zero.

\[Channel]> ToZero Executor 1 / cm = A

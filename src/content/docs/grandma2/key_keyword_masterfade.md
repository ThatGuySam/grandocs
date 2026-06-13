---
title: "MasterFade"
description: "To get the MasterFade keyword in the command line, type MasterFader the shortcut MasterFn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_masterfade.html"
scrapedAt: "2026-06-12T21:27:55.369Z"
---
To get the MasterFade keyword in the command line, type **MasterFade** or the shortcut **MasterF** in the command line.

## Description

MasterFade keyword is a function to adjust the on and off fade time of chasers and effects, and the off fade time for sequence executors.

## Syntax

Assign Masterfade (At) \[Executor-list]

**Masterfade**** \[value] \[Executor-list] (Fade \[seconds])**

Set the Masterfade to a negative value, to link the Master fade to the default Off time

## Example

 

\[Channel]> ​Assign Masterfade At Executor 1 Thru 5

Gives fader 1 thru 5 Masterfade functionality.

 

\[Channel]> ​Masterfade 5 Executor 1

Sets the on and off fade time of executor 1 to 5 seconds.

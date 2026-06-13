---
title: "CrossfadeB"
description: "CrossfadeBs a function that is assigned for executors."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_crossfadeb.html"
scrapedAt: "2026-06-12T21:27:47.598Z"
---
**CrossfadeB** is a function that is assigned for executors.

To execute this keyword, type **CrossfadeB** into the command line. 

## Syntax

Assign CrossfadeB (At) \[Executor-list]

**CrossfadeB**** \[value] \[Executor-list] (Fade \[seconds])**

##  

CrossfadeB is a function that gradually fades in dimmer attributes of the next step of an executor in accordance with the position of the fader.

Depending on the executor option AB/Split this function either acts as a crossfader for increasing values or as a master for next cue (for dimmer attributes).

No matter the option, CrossfadeB gradually activates the next step of an executor in accordance with the position of the fader for non dimmer attributes.

 

## Example:

 

\[Channel]> ​Assign CrossfadeB At Executor 1

 

Assigns fader 1 the functionality of CrossfadeB.

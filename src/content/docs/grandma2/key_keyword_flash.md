---
title: "Flash"
description: "To execute the keyword Flash press >>> >>> (= Flash)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_flash.html"
scrapedAt: "2026-06-12T21:27:51.322Z"
---
To execute the keyword Flash press >>> >>> (= Flash).

Another way is to type **Flash** or the shortcut **Fla** in the command line.

## Description

Flash is a function used to temporary overwrite master level to full on executing objects without using times.

When the Flash function is used with an executor button, the Flash On command is executed when the button is pressed and the Flash Off is executed when the button is released.

If this function is used without the helping keywords On/Off, the function will toggle between on or off.

If the executor is not On when this function is applied, the executor will be temporary activated with zero timing.

## Syntax

Flash \[Executor-list]

Flash On \[Executor-list]

Flash Off \[Executor-list]

 

## Examples

 

\[Channel]> Flash On Executor 1

 

Overwrites the master level of executor 1 to full and starts first cue. 

 

\[Channel]> Flash Off Executor 1

 

Returns master level of executor 1 to the master fader and sets executor to off if it was not on.

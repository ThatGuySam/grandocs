---
title: "Stomp"
description: "To get the Stomp keyword in the command line, press and hold !ma + At (= Stomp)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_stomp.html"
scrapedAt: "2026-06-12T21:28:02.212Z"
---
To get the Stomp keyword in the command line, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) + At (= Stomp).

You can also type **Stomp** in the command line or use the shortcut **Stom**.

## Description

The Stomp keyword applies values and stops running effects. Stomp will be applied only if an effect is running. If no effect is running, stomp can not be applied.

If you stomp channels, fixtures, or groups, all attributes of the selection will be stomped.

If you stomp attributes, features, or preset types, the given attributes for the current fixture or channel selection will be stomped.

If you stomp attributes, features, or preset types, without any fixture or channel selection, all fixtures or channels with running effect will be stomped.

If you stomp a running effect, a stomp will be applied and added to the affected parameters.

## Syntax

Stomp \[Selection-list]

Stomp \[Attribute-list]

Stomp \[Value-list]

Stomp \[Object-list]

## Examples

- Set the dimmer attributes to 75 % and stop running dimmer effects of the current fixture selection.

\[Channel]> Stomp 75

 

- Move the current fixture selection to preset "drummer" and stop the current running circle effect.

\[Channel]> Stomp Preset "drummer"

 

- Select fixture 2, set its dimmer to zero and stop the current running dimmer effects.

\[Channel]> Fixture 2 Stomp 0

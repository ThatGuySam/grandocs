---
title: "Channel"
description: "Channel is an object type used to access fixtures with a Channel ID."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_channel.html"
scrapedAt: "2026-06-12T21:27:46.372Z"
---
Channel is an object type used to access fixtures with a Channel ID.

To execute this keyword type **Channel** or the shortcut **C** into the command line. 

## Syntax

Channel \[ID]

Channel \[ID].\[Sub-ID]

The default function for channel objects is SelFix. This means that entering channels without any specific function will select the channels in programmer.

For more information on default function for channel objects see [SelFix](/grandma2/key_keyword_selfix/). 

## Examples

\[Channel]> ​Channel 34

Selects Channel 34.

 

\[Channel]> ​Channel 11.5

Selects the fifth subfixture of the fixture Channel 11.

 

\[Channel]> ​Channel 11

Selects all subfixtures of the fixture Channel 11.

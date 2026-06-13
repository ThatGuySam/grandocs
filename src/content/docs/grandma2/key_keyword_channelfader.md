---
title: "ChannelFader"
description: "ChannelFaders an object type representing a fader of the ChannelPages."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_channelfader.html"
scrapedAt: "2026-06-12T21:27:46.417Z"
---
**ChannelFader** is an object type representing a fader of the ChannelPages.

To execute this keyword type ChannelFader or one of the shortcuts – **CF** or **ChannelF **– into the command line.

## Syntax

ChannelFader \[ID]

 

**Important:**\
To use ChannelFader create a ChannelPage first. For more information on how to create a channel page see [ChannelPage](/grandma2/key_keyword_channelpage/).

 

The default function for ChannelFader is Call. Calling a ChannelFader will change the executor faders to Channel mode.

For more information on call see [Call](/grandma2/key_keyword_call/). 

## Example:

 

\[Channel]> ​Assign Fixture 301 At ChannelFader 5

 

Assigns the dimmer of fixture 301 to fader 5 of the current channel page.

 

\[Channel]> ​Assign Channel 201 Thru 215 At ChannelFader 2.1

 

Assigns Channel 201 thru 215 to fader 1 thru 15 of channel page 2.

 

\[Channel]> ​Assign Fixture 3.2.1 At ChannelFader 2.11

 

Assigns the first attribute of the second subfixture of Fixture 3 to fader 11 of channel page 2.

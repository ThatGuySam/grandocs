---
title: "ChannelLink"
description: "ChannelLinks a function used to toggle the Channel faders to dynamic mode."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_channellink.html"
scrapedAt: "2026-06-12T21:27:46.471Z"
---
**ChannelLink** is a function used to toggle the Channel faders to dynamic mode.

To execute this keyword type **ChannelLink** or the shortcut **ChannelL** into the command line. 

## Syntax

ChannelLink

ChannelLink On

ChannelLink Off

ChannelLink \[Attribute-List]

If no attribute list is given, the ChannelLink mode will be Dimmer (fader controls the dimmer attributes of the current selection).

 

## Examples

\[Channel]> ​ChannelLink

Toggles ChannelLink mode on or off.

 

\[Channel]> ​ChannelLink PresetType "Position"

Toggles ChannelLink mode on for pan and tilt.

 

\[Channel]> ​ChannelLink Attribute "Iris" + "Focus"

Toggles ChannelLink mode on for iris and focus.

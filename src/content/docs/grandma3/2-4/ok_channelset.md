---
title: "/ChannelSet"
description: "To enter the /ChannelSetption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_channelset.html"
scrapedAt: "2026-06-12T21:24:39.835Z"
---
To enter the **/ChannelSet **option keyword in the command line, use one of the options:

- Type **/ChannelSet**
- Type the shortcut** /Ch**

## Description

The /ChannelSet option keyword is used in conjuction with the AutoCreate keyword – whereby the AutoCreate command creates objects out of channel sets.

## Syntax

AutoCreate \[Source\_Object] \["Source\_Object\_Name" or Source\_Object\_Number] At \[Destination\_Object] \["Destination\_Object\_Name" or Destination\_Object\_Number] /ChannelSet

General Keywords

General keywords that use the /ChannelSet option keyword:

- [AutoCreate keyword](/grandma3/2-4/keyword_autocreate/)

## Example

- To create global beam presets out of channel sets of fixture type 9, type:

|                                                                    |                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate FixtureType 9 At Preset \* If FeatureGroup "Beam" /ChannelSet |

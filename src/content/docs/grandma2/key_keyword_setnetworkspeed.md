---
title: "SetNetworkSpeed"
description: "To go to the SetNetworkSpeed keyword, type SetNetworkSpeed in the command line or use the shortcut SNS."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_setnetworkspeed.html"
scrapedAt: "2026-06-12T21:28:01.214Z"
---
To go to the SetNetworkSpeed keyword, type **SetNetworkSpeed** in the command line or use the shortcut **SNS**.

## Description

The SetNetworkSpeed keyword, changes the port speed of the first network adapter of grandMA2 consoles and MA NPU.

It makes sense to reduce the port speed, if grandMA series 2 devices are together with grandMA series 1 devices.

**Important:**\
To apply the changed port speed by using the SetNetworkSpeed keyword, a restart is necessary. If you do not restart the device, the new port speed is not applied.

**Hint:**\
To double-check the link speed, use the [NetworkInfo keyword](/grandma2/key_keyword_networkinfo/) or press Setup **I column Network I tap** MA Network Control **I column Link Speed.**

The SetNetworkSpeed keyword is a function keyword.

## Syntax

SetNetworkSpeed 100 \[IP address]

SetNetworkSpeed 1000 \[IP address]

## Example

Set the port speed of the first network adapter to 100 Mbit.

\[Channel]> SetNetworkSpeed 100 192.168.0.32

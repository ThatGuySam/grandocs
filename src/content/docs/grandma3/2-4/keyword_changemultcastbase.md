---
title: "ChangeMulticastBase"
description: "To enter the ChangeMulitcastBase keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_changemultcastbase.html"
scrapedAt: "2026-06-12T21:24:22.729Z"
---
To enter the ChangeMulitcastBase keyword in the command line, use one of the options:

- Type **ChangeMulticastBase**
- Type the shortcut ****Changem****

## Description

The ChangeMulticastBase keyword is a function keyword used to change the current address of the Multicast Base. 

For more information see [Session](/grandma3/2-4/network_session/).

## Syntax

ChangeMulticastBase \[Device\_Type] \["Device\_Name" or Device\_Number] /Type "Type\_Value"

ChangeMulticastBase IP \[IP] /Type "Type\_Value"

## Option Keywords

The ChangeMulticastBase keyword uses the following option keywords:

- [/Type](/grandma3/2-4/ok_type/)

## Examples

##

- To change the address of multicast base to **Alternative**, type:

|                                                                    |                                                                                  |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeMulticastBase Processing Unit Thru /Type "Alternative" |

   

- To change the address of multicast base to **Default** on the device with the IP 192.168.0.4, type:

|                                                                    |                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeMulticastBase IP 192.168.0.4 Thru /Type "Default" |

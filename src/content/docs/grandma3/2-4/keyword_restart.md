---
title: "Restart"
description: "To enter the Restart keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_restart.html"
scrapedAt: "2026-06-12T21:24:35.220Z"
---
To enter the Restart keyword in the command line, use one of the options:

- Type **Restart**
- Type the shortcut **Res**

## Description

The Restart keyword is a function keyword that is used to restart the application. Restart behaves the same as closing the program and reopening it without shutting down the console.

|                                            |                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                   |
|                                            | The device types are: [Console](/grandma3/2-4/keyword_console/), [NetworkNode](/grandma3/2-4/keyword_networknode/), [onPC](/grandma3/2-4/keyword_onpc/), [ProcessingUnit](/grandma3/2-4/keyword_processingunit/), [Session](/grandma3/2-4/keyword_session/), [Station](/grandma3/2-4/keyword_station/), and [Extension](/grandma3/2-4/keyword_extension/).  |

## Syntax

Restart (/Option)

Restart \[Device\_Type] \["Device\_Name" or Device\_Number] (/Option)

Restart IP \[IP\_Address] (/Option)

## Option Keywords

The Restart keyword uses the following option keywords:

- [/NoConfirmation](/grandma3/2-4/ok_noconfirmation/)
- [/NoSave](/grandma3/2-4/ok_nosave/)
- [/Save](/grandma3/2-4/ok_save/)
- [/Wait](/grandma3/2-4/ok_wait/)

## Examples

- To restart the application of the console, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Restart  |

 

- To restart the application of the station using the IP address 192.168.0.32, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Restart IP 192.168.0.32  |

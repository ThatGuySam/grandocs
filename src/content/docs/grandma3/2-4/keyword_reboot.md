---
title: "Reboot"
description: "To enter the Reboot keyword in the command line, use one of the following options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_reboot.html"
scrapedAt: "2026-06-12T21:24:34.602Z"
---
To enter the Reboot keyword in the command line, use one of the following options:

- Type **Reboot**
- Type the shortcut **R**

## Description

The Reboot keyword is a function keyword that is used to shut down the station in use and boot it up again.

A confirmation pop-up opens on the station in use.



|                                            |                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                   |
|                                            | The device types are: [Console](/grandma3/2-4/keyword_console/), [NetworkNode](/grandma3/2-4/keyword_networknode/), [onPC](/grandma3/2-4/keyword_onpc/), [ProcessingUnit](/grandma3/2-4/keyword_processingunit/), [Session](/grandma3/2-4/keyword_session/), [Station](/grandma3/2-4/keyword_station/), and [Extension](/grandma3/2-4/keyword_extension/).  |

## Syntax

Reboot (/Option)

Reboot IP \[IP\_Address] (/Option)

Reboot \[Device\_Type] \["Device\_Name" or Device\_Number] (/Option)

Option Keywords

The Reboot keyword uses the following option keywords:

- [/NoConfirmation](/grandma3/2-4/ok_noconfirmation/)
- [/NoSave](/grandma3/2-4/ok_nosave/)
- [/Save](/grandma3/2-4/ok_save/)
- [/Wait](/grandma3/2-4/ok_wait/)

## Examples

- To reboot the connected grandMA3 processing unit 1, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Reboot ProcessingUnit 1  |

 

- To reboot the connected grandMA3 processing unit called "Stage Right", type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Reboot ProcessingUnit "Stage Right"   |

 

- To reboot the console that uses the IP address 192.168.0.4, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Reboot IP 192.168.0.4  |

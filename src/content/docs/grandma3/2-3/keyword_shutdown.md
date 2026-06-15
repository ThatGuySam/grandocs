---
title: "ShutDown"
description: "To enter the ShutDown keyword in the command line, use one of these options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_shutdown.html"
scrapedAt: "2026-06-15T18:25:10.953Z"
pagefind: false
---
To enter the ShutDown keyword in the command line, use one of these options:

- Type **ShutDown **
- Type the shortcut **Sh**

## Description

The ShutDown keyword powers down the grandMA3 console or closes the grandMA3 onPC.

It requires a confirmation in the local station and can be canceled within 10 seconds using a remote station.



|                                            |                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                   |
|                                            | The device types are: [Console](/grandma3/2-3/keyword_console/), [NetworkNode](/grandma3/2-3/keyword_networknode/), [onPC](/grandma3/2-3/keyword_onpc/), [ProcessingUnit](/grandma3/2-3/keyword_processingunit/), [Session](/grandma3/2-3/keyword_session/), [Station](/grandma3/2-3/keyword_station/), and [Extension](/grandma3/2-3/keyword_extension/).  |

## Syntax

ShutDown (/Option)

ShutDown \[Device\_Type] \["Device\_Name" or Device\_Number] (/Option)

ShutDown IP \[IP\_Address] (/Option)

### Option Keywords

The ShutDown keyword uses the following option keywords:

- [/NoAutoClose](/grandma3/2-3/ok_noautoclose/)
- [/NoConfirmation](/grandma3/2-3/ok_noconfirmation/)
- [/NoSave](/grandma3/2-3/ok_nosave/)
- [/Save](/grandma3/2-3/ok_save/)
- [/Wait](/grandma3/2-3/ok_wait/)

## Examples

- To shut down the current station and provoke a countdown pop-up, type:

|                                                                    |                               |
| ------------------------------------------------------------------ | ----------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown  |

 

- To shut down the station with the IP address 192.168.0.4, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown IP 192.168.0.4  |

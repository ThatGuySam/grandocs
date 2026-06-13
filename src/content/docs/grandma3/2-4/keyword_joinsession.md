---
title: "JoinSession"
description: "To enter the JoinSession keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_joinsession.html"
scrapedAt: "2026-06-12T21:24:29.810Z"
---
To enter the JoinSession keyword in the command line, use one of the options:

- Type **JoinSession**
- Type the shortcut **J**

## Description

JoinSession is a function keyword which is used to join a session.



## Syntax

JoinSession IP \[Device\_IP]

**JoinSession \[DeviceType] \["Device\_Name" or Device\_Number]**

|                                            |                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                             |
|                                            | The device types are: [Console](/grandma3/2-4/keyword_console/), [Node](/grandma3/2-4/keyword_networknode/), [onPC](/grandma3/2-4/keyword_onpc/), [ProcessingUnit](/grandma3/2-4/keyword_processingunit/), [Station](/grandma3/2-4/keyword_station/), [Extension](/grandma3/2-4/keyword_extension/).  |

## Examples

- To join the session of console 6, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>JoinSession Console 6 |

 

- To join the session on the station with the IP address 192.168.10.21, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>JoinSession IP 192.168.10.21 |

 

- To join the session of the node "Truss", type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>JoinSession Node "Truss" |

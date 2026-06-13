---
title: "RemoteCommand"
description: "To enter the RemoteCommand keyword, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_remotecommand.html"
scrapedAt: "2026-06-12T21:24:35.066Z"
---
To enter the RemoteCommand keyword, use one of the options:

- Type **RemoteCommand**
- Type **RC**
- Type **Remotec**

## Description

The RemoteCommand keyword remotely sends commands to other stations.

|                                            |                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                   |
|                                            | The device types are: [Console](/grandma3/2-4/keyword_console/), [NetworkNode](/grandma3/2-4/keyword_networknode/), [onPC](/grandma3/2-4/keyword_onpc/), [ProcessingUnit](/grandma3/2-4/keyword_processingunit/), [Session](/grandma3/2-4/keyword_session/), [Station](/grandma3/2-4/keyword_station/), and [Extension](/grandma3/2-4/keyword_extension/).  |

## Syntax

RemoteCommand IP \[IP] \["Command to be Executed"]

RemoteCommand \[Device\_Type] \["Device\_Name" or Device\_Number] \["Command to be Executed"]

## Example

- To remotely execute the command "Call ViewButton 2.1" on the station with the IP address 192.168.0.10, type:

|                                                                    |                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>RemoteCommand IP 192.168.0.10 "Call ViewButton 2.1"  |

 

- To remotely lock the desk on the station with the IP address 192.168.0.10, type:

|                                                                    |                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>RemoteCommand IP 192.168.0.10 'Menu "DeskLock" '  |

**Alternatively type:**

|                                                                    |                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>RemoteCommand IP 192.168.0.10 "Menu 'DeskLock' "  |

For more information on the usage of quotation marks see [General Syntax Rules](/grandma3/2-4/csk_syntax_rules/). 

For more mutual examples see the [Station Keyword](/grandma3/2-4/keyword_station/).

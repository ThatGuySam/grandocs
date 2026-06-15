---
title: "Session"
description: "To enter the Session keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_session.html"
scrapedAt: "2026-06-15T18:25:11.095Z"
pagefind: false
---
To enter the Session keyword in the command line, use one of the options:

- Type **Session**
- Type the shortcut **Ses**

## Description

The Session keyword is an object keyword which is used to address all sessions in the network. If the name and number of session is not specified, your own session will be addressed. 

The name of the session consists of the  network properties "Session" and "Location" which are connected by @ – "Session\@Location". 

## Syntax

\[Function] Session \["Session\_Name" or Session\_Number]

## Examples

- To restart all devices that have the same session credentials as your station, type:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Restart Session |

- To shut down all devices that use the session name "Athena" with location "Caledonia", type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown Session "Athena\@Caledonia" |

##

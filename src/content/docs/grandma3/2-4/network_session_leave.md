---
title: "Leave a Session"
description: "Requirement:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_session_leave.html"
scrapedAt: "2026-06-12T21:24:45.265Z"
---
**Requirement:**

The station needs to be a session member to be able to leave the session.

## Leave a Session Using the User Interface

1. Open the [Network menu](/grandma3/2-4/network_session/).
2. Tap Leave Session or turn the network Off using the network connection button.

## Leave a Session Using the Command Line

- Use the [LeaveSession keyword](/grandma3/2-4/keyword_leavesession/) to leave the session.

|                                                  |                                                                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                            |
|                                                  | When leaving the session during an active show download, the station will fall back to the previously loaded show file that was loaded before the show download started.  |

If there are other stations in the session with a priority above never, then the session is still active.

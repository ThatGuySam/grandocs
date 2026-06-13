---
title: "Invite a Station into a Session"
description: "Stations can be invited into a session if Invite is turned On in the Network menu on the station being invited."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_session_invite.html"
scrapedAt: "2026-06-12T21:24:45.298Z"
---
Stations can be invited into a session if **Invite** is turned On in the [Network menu](/grandma3/2-4/network_session/) on the station being invited.

|                                                  |                                                                                                                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                         |
|                                                  | If the priority of the joining station is higher than the current session master, the show file from the joining station will be used instead of the show file used in the session before the invite.  |

**Requirement:**

A session needs to be running, and the station being operated needs to be part of the session. See how in the [Create a Session topic](/grandma3/2-4/network_session_create/).

## Using the User Interface

Stations are located and invited using the [Network menu](/grandma3/2-4/network_session/).

1. Navigate to the Network menu. See how to use the link above.
2. Locate and tap the station in the list of available stations (stations in the network but not connected to a session).
3. Tap Invite Station at the bottom of the Network menu.

## Using the Command Line

Stations are invited using the [Invite keyword](/grandma3/2-4/keyword_invite/).

|                                                    |                                                                                                                                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                                                                                                                                        |
|                                                    | Inviting a station into a session is only possible if the joining station has the same key in the key registry as the one currently selected on the inviting station when the Invite button is tapped.  |

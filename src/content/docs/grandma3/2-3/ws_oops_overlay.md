---
title: "Oops Menu"
description: "The Oops menu displays the history of completed actions. Completed actions are displayed as a list and in chronological order. The action at the bottom shows th"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_oops_overlay.html"
scrapedAt: "2026-06-15T18:24:55.221Z"
pagefind: false
---
The Oops menu displays the history of completed actions. Completed actions are displayed as a list and in chronological order. The action at the bottom shows the latest entry.

The latest action or multiple actions can be Oopsed. It is also possible to use Oops filters for different kinds of actions.

For more information about Oops, see [Oops keyword](/grandma3/2-3/keyword_oops/) and [Oops hardkey](/grandma3/2-3/key_oops/).

|                                                  |                                                                               |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                |
|                                                  | All Oops entries are cleared when changing the Patch or loading a show file.  |

To get a first impression of the Oops menu, watch the video below:

[Vimeo video](https://player.vimeo.com/video/1057870932?title=0\&byline=0\&portrait=0\&color=ffeb0f)

To open the Oops menu:

- Press and hold Oops.

or

- Execute the command Menu "OopsOverlay". [![](/img/grandma3/2-3/robot-icon_white-274940.png)       Paste to Command Line](#ma_cmd?Menu%20%22OopsOverlay%22)

![](/img/grandma3/2-3/overlay_oops_v2-1-41e43f.png)

Oops menu

 

The menu is separated into two columns:

- **Name**: Shows the executed command or the action that has been done.
- **Elapsed Time / Session Time**: Shows the bygone time since the action has been executed.

To toggle between different time units, tap Columns in the title bar:

- Elapsed Time: Shows the passed time since the command has been executed.
- Session Time: Shows the time off the day the command has been executed.

 

## Oops Actions

Only the last action or a coherent amount of actions can be Oopsed. A selection of actions always include the latest one.

A blue background indicates the selected action.

Requirements:

- Change at least two values in the show file to create Oops events, for example, by setting dimmer, position and color values for fixtures.

To undo the last action:

1. The action at the bottom is selected, when opening the Oops menu.
2. Tap Oops Last Action located the bottom right corner in the Oops menu. The latest action is undone and is vanished.

 

To undo multiple actions:

1. Use [2 Finger Scroll](/grandma3/2-3/ws_gestures/) or the scrollbar to scroll to a particular event in the Oops menu.
2. Tap on any listed event to undo it. This selects the latest event and all other events up to and including the selected event. 
3. Tap Oops x Actions. The x stands for the selected number of actions.
4. The selected actions are undone and are vanished from the menu.

 

## Toggle Oops Filters

The following Oops elements in the list can be filtered/hidden:

- Create Oops
- Oops Views
- Oops Programmer
- Oops Selection

|                                            |                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                               |
|                                            | The four filters operate the corresponding settings of the User Configuration. For more information, see [User Settings](/grandma3/2-3/user_settings/). |

|                                            |                                                                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                    |
|                                            | /NoOops does not generate oops events when executing commands. For more information, see [/NoOops Option Keyword](/grandma3/2-3/ok_nooops/). |

- To create no events at all, disable Create Oops. Oops View, Oops Programmer and Oops Selection are grayed out.

## Oops Confirmation

The setting Oops Confirmation defines when an Oopsed event has to be confirmed via a pop-up.

Oops Confirmation can be set to the following options:

- Always: Any Oopsed event needs to be confirmed.
- Main: Important actions needs to be confirmed, for example, storing, moving, or deleting objects.
- Never: No confirmation is needed. Oops Configuration is set to Never by default.

To change the Oops Confirmation to Always:

1. At least one Oops event is created.
2. Press and hold Oops. The Oops menu opens.
3. Tap, hold and swipe Oops Confirmation. A dropdown menu opens.
4. Select Always. The dropdown menu closes.
5. Close the Oops menu.
6. Press Oops. A Oops pop-up appears:

![](/img/grandma3/2-3/overlay_oops-undo_pop-up-v1-9-17b5c0.png)

Undo pop-up

7. Tap Oops to confirm. The last action is undone.

---

## Oops in a Session

Oopsing an action is possible in a session with multi-users. For more information about multi-users in sessions, see [Multi User Systems](/grandma3/2-3/user/) and [Session](/grandma3/2-3/network_session/).

Oops could fail while changes to the show file are being made via another station. If so, an error message will appear on the station where Oops is being used:

![](/img/grandma3/2-3/menu_oops_station_fail_v2-3-7bd4b0.png)

Error message

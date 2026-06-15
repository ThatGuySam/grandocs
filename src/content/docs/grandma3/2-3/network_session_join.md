---
title: "Join a Session"
description: "Requirement:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/network_session_join.html"
scrapedAt: "2026-06-15T18:25:18.797Z"
pagefind: false
---
**Requirement:**

Network connections need to be made, and the correct IP address should be set - For more information, see [Interfaces and IP](/grandma3/2-3/network_interface/). There needs to be a running session that can be joined.

When a console or onPC station wants to join a session or gets invited into a session, the session recognizes that the station joining was already a part of the session at a previous point.

If this is not the case, the station joins the session and gets the show file.

If the same show file is loaded on both sides, the grandMA3 software can merge both show files. This is useful in undetected scenarios, such as a station being disconnected for a time from the rest of the session (maybe because of a defect in the network cable or other causes of failure).

If, on both sides (the remaining session and the disconnected station), users worked further on the show file, they had to choose between one of the two show files. This means they had to reprogram the changes of the lost show file to the one that is kept. The Merge All Data option combines the data of both show files in one show file.

This is the small pop-up asking what to do:

![](/img/grandma3/2-3/popup_session-data-merge_v2-2-1810f3.png)

Session Data Merge pop-up

|                                            |                                                                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                         |
|                                            | The default selected option and the timeout time can be adjusted in the Station Control menu. Learn more in the [Station Control topic](/grandma3/2-3/network_station_control/).  |

The **Session Data Merge** pop-up is visible for a set amount of time (default is 60 seconds). After the timeout has elapsed without a response, the session data merge will use the default option.

To pause the timeout counter, tap in the text area of the pop-up. When a station, as described above, joins the session again, a pop-up informs the user about a Session Data Merge.

The pop-up lists the affected data. It is the elements that are different between the shows.

There are four options to choose from:

- **Merge All Data**:\
  Merges the changes of all connecting stations into one show file.
- **Keep only Master Data**:\
  The changes in the show file data of the connecting devices are ignored. The show file of the Master side is maintained. Before overriding the show file of the connecting devices, the show file will be saved automatically on the connecting stations.
- **Keep my Show File**:\
  Choosing this option means that the show data on this station will be the new session show data. This deletes any unsaved data on the other stations.
- **Cancel**:\
  The connecting stations will not join the session of the Master side and be made Standalone. Then it can be investigated which show file is correct, back up each show file, etc.

Merging the data of two show files is supported for these object types at the moment:

- Sequences with Cue and Cue Part
- Presets
- Recipes
- Programmer and Programmer Parts
- Timecodes
- Macros, Plugins, and PluginComponents
- Pages and Executors
- Images and Videos
- DataPools
- Groups
- All other pools not explicitly mentioned here

|                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                    | - Changes made to the patch during the disconnection of a station disables the possibility of merging.- Merging the deletion of parts of objects during the disconnection of a station is not fully working yet. (for example, deleting one macro line or deleting a recipe line)- Merging the movement of objects during the disconnection of a station creates duplicates: At the original spot and the new spot. This may result, for example, in having different sequences assigned to the same executor on different stations. |

## Joining Station with Higher Priority

When a station with a higher priority joins a session, a choice needs to be made about which show file to use. The high priority station might have the most important show file, but the session show file might be the important one.

This situation prompts a warning pop-up like this:

![Warning about a joining High Priority station.](/img/grandma3/2-3/popup_warning-high-prio-station-join_v2-2-96de68.png)

Warning pop-up about the joining station's higher priority.

This warning pop-up has some information about the show file takeover. It has some options.

- **Merge All Data If Compatible**:\
  This is a toggle option that is valid when a show file is transferred. When it is active, it tries to merge the two show files, but it prioritizes the selected show file.
- **Keep Session's Show File**:\
  This option will prioritize the session's show file. If **Merge All Data If Compatible** is inactive, the joining station will load the show file from the current session master.  
- **Keep My Show File**:\
  This option will use the show file running on this joining station. If **Merge All Data If Compatible** is inactive, the joining station will transfer its show file to the session members. This deletes any unsaved data on the other stations.
- **Cancel**:\
  This will cancel the join process.

This warning pop-up appears instead of the **Session Data Merge pop-up** described above.

## Inviting a Station with Higher Priority

When a station with a higher priority is invited into a session, a pop-up appears asking for a decision about the show file.

![Update this description text.](/img/grandma3/2-3/popup_warning-high-prio-station-invite_v2-2-e81cdf.png)

Warning pop-up about the invited station's higher priority.

The pop-up shows information about the station name, type, and IP address.

Most of the options are described above.

- **Take the Invited Station's Show File**:\
  This option will prioritize the show file on the invited station. If **Merge All Data If Compatible** is inactive, the joining station will transfer its show file to the session members. This deletes any unsaved data on the other stations.

## Join a Session Using the User Interface

1. Open the Network menu.
2. Tap the buttons at the bottom that needs to be edited:\
   \- Make sure that the correct interface is selected.\
   \- Make sure the correct Key is selected.
3. Tap the station with the desired running session.
4. Tap Join Session.\
   \- The network icon and the stations should become green.
5. If the **Session Data Collision pop-up** appears, then select the desired option.

## Join a Session Using the Command Line

1. Use the [JoinSession keyword](/grandma3/2-3/keyword_joinsession/) to join existing or create a new session.

|                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                    | It is only possible to join a session if the joining station has the same key as the currently active key on the selected station (step 3 above) currently in the session.This means that the station that wants to join a session selects a station already in the session. The station already in the session got a selected key. The joining station needs to have the same key selected to be able to join the session. |

---
title: "Countdown"
description: "Stopwatches are the default mode for timers. The mode can be changed to the Countdown mode. Learn more in the Timers topic."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timers_countdown.html"
scrapedAt: "2026-06-12T21:24:58.668Z"
---
Stopwatches are the default mode for timers. The mode can be changed to the Countdown mode. Learn more in the [Timers topic](/grandma3/2-4/timers/).

Countdowns count time down from a set value; when zero is reached, a trigger can fire an alert pop-up and a command.

The countdown timer has an hourglass icon (![](/img/grandma3/2-4/icon_hourglass_15_v1-9-430d63.png)) in the upper right corner of the pool object.

Besides the "ElapsedTime" property mentioned in the Timers topic (link above), the Countdown also has a "RemainingTime" read-only property. 

## Countdown Settings

The countdowns have more settings besides the common settings described in the Timer topic.

### Countdown

- **Countdown Time**:\
  Sets the duration time of the countdown. The maximum possible countdown time is limited to 14 days. The calculator sets the duration time in seconds, minutes, hours, and days.

- **Countdown Alert Type**:\
  The alert type defines what should happen when the countdown reaches zero. There are four options:

  - **None**:\
    Nothing happens when the timer runs out, except it stops.
  - **Pop-Up**:\
    A pop-up appears with the text set in the **Alert Text** setting (see below). The pop-up appears for as long as the **Alert Duration** is set (see below).
  - **Command**:\
    The timer executes the command set in the **Alert Command** setting (see below).
  - **Command & Pop-Up**:\
    The pop-up appears, and the command is triggered.

### Alert

- **Alert Duration**:\
  Defines how long the pop-up should be displayed when the Countdown Timer reaches zero. An alert duration of zero seconds means the pop-up stays until confirmed. The countdown alert type needs to include "Pop-Up" for this setting to be active.

- **Alert Range**:\
  The countdown alert range defines where the pop-up appears.

  - **Local**:\
    The alert pop-up appears on the stations with users logged in using the same user profile as the one who started the countdown.
  - **All Stations**:\
    The alert pop-up appears on all stations in the session. Countdowns with this setting have a small G icon (![](/img/grandma3/2-4/icon_small_global_11_v1-9-b904b1.png)) in the upper right corner of the pool object to indicate that it is a global countdown.\
    The pop-up has a confirmation button to close the alert (before the duration closes it). Confirm only confirms for the station where it is tapped. Confirm All Stations confirm the alert on all stations.

- **Alert Command**:\
   When the countdown reaches zero, the command is executed on the GlobalMaster/IdleMaster station or the Standalone station. The **Countdown Alert Type** needs to include "Command" for this setting to be active.

- **Alert Text**:\
  The defined text of this setting is displayed in the alert pop-up when the countdown reaches zero. The countdown alert type needs to include "Pop-Up" for this setting to be active.

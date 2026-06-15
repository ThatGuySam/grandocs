---
title: "UPS Battery"
description: "The grandMA3 full-size, grandMA3 light, and their CRV versions have a rechargeable lithium-ion battery for an uninterrupted power supply (UPS)."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/do_ups_battery.html"
scrapedAt: "2026-06-15T18:24:52.632Z"
pagefind: false
---
The grandMA3 full-size, grandMA3 light, and their CRV versions have a rechargeable lithium-ion battery for an uninterrupted power supply (UPS).

The purpose of the battery is to enable to save the show file and shut down the console in case of a power loss.

|                                                    |                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                     |
|                                                    | Do not use the battery to bypass the console for a longer period! Do not move the console around while in UPS mode!  |

In case of a power loss:

- A Power Loss pop-up appears on every screen and command screen, depending on the console type.
- The power status icon in the command line turns red.

---

## Power Status

There is an indicator of the power status on the right side of the command line and in the [Message Center](/grandma3/2-3/system_message_center/).

Status indications include the following states:

![](/img/grandma3/2-3/img_command-line_battery-full_v2-0-bb2460.png) Power is connected and the battery is full.

![](/img/grandma3/2-3/img_command-line_battery-charging_v2-0-043892.png) Power is connected and the battery is not full (and recharging). 

![](/img/grandma3/2-3/img_command-line_battery-discharge_pulsating_v2-3-4aba18.png) (Pulsating) Power is disconnected and the battery is discharging. 

![](/img/grandma3/2-3/img_command-line_battery_session_v2-3-a99e56.png) Indicates a power disconnection for a station in a session. For example, when a grandMA3 onPC station is connected to a console and the console has a loss of power, the icon turns yellow on the grandMA3 onPC station.

![](/img/grandma3/2-3/img_command-line_battery-none_v2-3-617863.png) The battery icon is crossed when the station has no battery, for example, grandMA3 onPC.

### Battery Status Pop-Up

Tap the power status indicator to open the Battery status pop-up.

The pop-up could look like this:

![](/img/grandma3/2-3/popup_battery-status_v2-0-56c9ef.png)

Battery status pop-up

The Battery status pop-up displays multiple relevant metrics about the battery as well as A/C power.

 

---

## Power Loss Pop-up

While this pop-up is open, the percentage in the parentheses (X%) continuously decreases. The percentage in the parentheses is linked to the power status of the battery.

In the pop-up window, three commands are available to tap:

**Save and Shut Down:** Saves the current show file and shuts down the console properly.

**Shut Down:** Properly shuts down the console without saving the show file.

**Continue**: The console continues running on battery power. Further Power Loss pop-ups appear during the battery discharge process. When continued, the console will automatically shut down reaching (0%). The console reboots automatically when power supply is back.

![](/img/grandma3/2-3/pop-up_powerloss_v1-9-7a3ecd.png)

Power Loss - Pop-up.

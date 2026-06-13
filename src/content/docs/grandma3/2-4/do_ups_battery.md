---
title: "UPS Battery"
description: "The grandMA3 full-size, grandMA3 light, and their CRV versions all have rechargeable lithium-ion batteries for an uninterrupted power supply (UPS)."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/do_ups_battery.html"
scrapedAt: "2026-06-12T21:24:16.980Z"
---
The grandMA3 full-size, grandMA3 light, and their CRV versions all have rechargeable lithium-ion batteries for an uninterrupted power supply (UPS).

The purpose of the battery is to enable saving the show file and shutting down the console in case of a power loss.

|                                                    |                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                                                     |
|                                                    | Do not use the battery to bypass the console for a longer period! Do not move the console around while in UPS mode!  |

In case of a power loss:

- A Power Loss pop-up appears on every screen and command screen, depending on the console type.
- The power status icon in the command line turns red.

---

## Power Status

There is an indicator of the power status on both the command line and in the [Message Center](/grandma3/2-4/system_message_center/).

Status indications include the following states:

![](/img/grandma3/2-4/img_command-line_battery-full_v2-0-7d2b90.png) Power is connected, and the battery is full.

![](/img/grandma3/2-4/img_command-line_battery-charging_v2-0-3eb9d7.png) Power is connected, and the battery is not full (and recharging). 

![](/img/grandma3/2-4/img_command-line_battery-discharge_pulsating_v2-3-1b70e6.png) (Pulsating) Power is disconnected and the battery is discharging. 

![](/img/grandma3/2-4/img_command-line_battery_session_v2-3-9711cc.png) Indicates a power disconnection for a station in a session. For example, when a grandMA3 onPC station is connected to a console and the console loses power, the icon on the grandMA3 onPC station turns yellow.

![](/img/grandma3/2-4/img_command-line_battery-none_v2-3-7993a4.png) The battery icon is crossed when the station has no battery, for example, grandMA3 onPC.

|                                                  |                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                              |
|                                                  | When a device runs in battery mode, the system differentiates between the battery status of your own device and those of other devices in a session. Depending on the configuration, the label beneath the status icon will show either **"My"**, **"My+Ext"**, or **"Ext"** to indicate whether which device is affected.  |

---

### Battery Status Pop-Up

Tap the power status indicator to open the Battery status pop-up.

The pop-up could look like this:

![](/img/grandma3/2-4/popup_battery-status_v2-0-dcc131.png)

Battery status pop-up

The Battery status pop-up displays multiple relevant metrics for the battery and A/C power.

 

---

## Power Loss Pop-up

While this pop-up is open, the percentage in parentheses (X%) decreases continuously. The percentage in parentheses is linked to the battery's power status.

In the pop-up window, three commands are available to tap:

**Save and Shut Down:** Saves the current show file and shuts down the console properly.

**Shut Down:** Properly shuts down the console without saving the show file.

**Continue**: The console continues running on battery power. Additional Power Loss pop-ups appear during battery discharge. When continued, the console will automatically shut down, reaching (0%). The console reboots automatically when the power supply is back.

![](/img/grandma3/2-4/pop-up_powerloss_v1-9-bc8445.png)

Power Loss - Pop-up.

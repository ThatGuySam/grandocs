---
title: "Timer"
description: "To get the Timer keyword in the command line, press and hold !ma + Macro (= Timer)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_timer.html"
scrapedAt: "2026-06-12T21:28:03.374Z"
---
To get the Timer keyword in the command line, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) + Macro (= Timer).\
You can also type **Timer** in the command line.

## Description

With the Timer keyword you can edit, start, pause, restart, switch off, select, lock, unlock, and assign timers.

Timer 1 is a predefined stopwatch and not editable.

For more Information see [Timer pool](/grandma2/key_timers_timer_pool/).

The Timer keyword is an object keyword.

## Syntax

\[Function] Timer \[ID]

Assign Timer \[ID] / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameters via command line.

| Parameter                                         | Parameter Value                                                                                    |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Name                                              | "Timername"                                                                                        |
| TimerMode                                         | "Stopwatch", "Countdown"                                                                           |
| WhenRestarting                                    | "Continue", "Reset"                                                                                |
| TimeUnit                                          | "Seconds", "1/10 Seconds", "1/100 Seconds", "24 FPS", "25 FPS", "30 FPS"                           |
| ExecTrigger                                       | "LinkSelected-Start", "Not Linked", "LinkLastGo-Start", "LinkSelected-Toggle", "LinkLastGo-Toggle" |
| AlertType (only if timer mode is countdown)       | "None", "Popup", "Popup & Beep", "Command", "Command & Popup", "Command, Popup & Beep"             |
| AlertRange (only if timer mode is countdown)      | "Local", "Global"                                                                                  |
| Countdowntime (only if timer mode is countdown)   | 0.01S .. 23H59M59.99S                                                                              |

## Examples

- Edit timer 4. The Edit Timer pop-up opens.

\[Channel]> Edit Timer 4

![](/img/grandma2/popup_edit-timer_timer-pool_v3-3-84ed52.png)

_Edit the timer Countdown_

---

- Assign a countdown time of 20 seconds to the existing timer 4.

\[Channel]> Assign Timer 4 /countdowntime = 20

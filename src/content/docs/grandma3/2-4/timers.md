---
title: "Timers"
description: "The Timer pool can be used to manage stopwatches and countdowns."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timers.html"
scrapedAt: "2026-06-12T21:24:58.606Z"
---
The Timer pool can be used to manage stopwatches and countdowns.

The pool can be created like any other pool window using the [Add Window pop-up](/grandma3/2-4/wvm_add_window/).

![](/img/grandma3/2-4/window_timers-pool_v2-1-391ff8.png)

Timers pool with different timers.

The Timers pool has a default action indicated by an icon in the title field's upper right corner. The factory default action is **Toggle** (![](/img/grandma3/2-4/icon_small_execute_toggle_10_v1-9-afea79.png)). The default action is applied when a pool object is tapped without a valid keyword in the command line. Learn more about Pool Actions in the [Window Settings topic](/grandma3/2-4/wvm_settings/#pool_action).

There are two different types of timers: Stopwatch and Countdown. Each of these two types has their own topics. Follow the links below or in the menu on the left.

Each object in the Timers pool can be one or the other.

Changing the type from one to the other will stop and reset the timer if it is active.

The first pool object is a stopwatch that is locked from being edited, although it can be used.

Timers can be controlled using the pool objects or the [Timer keyword](/grandma3/2-4/keyword_timer/).

Active timers can be seen in the pool with the time and a progress bar at the bottom of the pool object. Active timers can also be seen in the [Running Playbacks window](/grandma3/2-4/executor_running_playbacks/).

Running timers have a green play icon pointing right for stopwatches (![](/img/grandma3/2-4/icon_playback_forwards_15_v1-9-544021.png)) and left for countdowns (![](/img/grandma3/2-4/icon_playback_backwards_15_v1-9-b2642d.png)) in the upper right corner of the pool object. A paused timer has the pause icon (![](/img/grandma3/2-4/icon_playback_pause_15_v1-9-c22421.png)) in the corner. Stopped timers do not have a playback icon.

Timers can be assigned to executors. Learn more in the [Assign Object to an Executor topic](/grandma3/2-4/executor_assign/).

The running state of the timer is not saved with the showfile. The time on the timer will be saved, and the timer will be on the saved time in a paused state when the showfile is reloaded.

Timers have a read-only property called "ElapsedTime". This can be used to read the current timer value.

All the different timer properties can be seen using the following commands in the command line and watching the Command Line History:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>List Timer |

## Playback Actions

A timer can be started with a **Go+** command or toggled On if it is Off or paused. It will start to count up or down in real-time.

A timer can be paused in its running. This keeps the current time on the timer. Restarting the timer with a Go+ command can either restart the timer or let it continue. This can be set in the setting for the timer.

The **Top** command will reset the time. If the timer is running, it will continue to run. If the timer is paused, the time will be reset, and the timer will be stopped.

**Flash** and **Temp** commands can be used to trigger timers. The timer will run while the function is active and pause when the command is stopped. For instance, a stopwatch can run while a flash executor button is pressed.

Stopping a timer resets the time to zero for stopwatches and to the set time value for countdowns.

Besides running timers manually, they can also be automatically triggered with specific sequence actions. See more below in the settings.

## Using the Clock to See the Time

The [Clock Viewer](/grandma3/2-4/si_clock/) can be used to show and control the timers. The Clock Source should be set to **Timer**. Then, the Timer can be used to select the desired timer object.

![](/img/grandma3/2-4/img_timer_clocks_v1-9-3-b0255e.png)

Two clocks showing a stopwatch and a countdown

The controls in the title bar adjust to match the selected timer.

## Create and Edit a New Timer

A new timer can be created by editing an empty pool object.

Editing a timer pool object opens the editor:

![](/img/grandma3/2-4/popup_edit-timer_v2-0-061e1d.png)

Timer editor

There are some common settings for the two types of timers.

### Label

- **Name**:\
  This is the name of the timer object.
- **Scribble**:\
  This is used to assign a scribble to the pool object.
- **Appearance**:\
  This is used to assign an appearance to the pool object.
- **Note**:\
  This is used to add a note to the pool object.

### Settings

- **Timer Mode**:\
  This is used to select one of the two modes: **Stopwatch** or **Countdown**.

- **Timer Link Type**:\
  Tapping this opens a select pop-up. It contains a list of all the sequences in the show, plus three special options. The options are:

  - **Not Linked**:\
    Nothing happens when starting a sequence playback.
  - **\<Selected Sequence>**:\
    Triggering the selected sequence will trigger the timer.
  - **Link Last**:\
    Triggering any sequence will trigger the timer.
  - **\[Sequence]**:\
    Triggering the specific sequence will trigger the timer.

- **Timer Trigger**:\
  This setting defines what action triggers a timer.

- **Restart Option**:\
  This has two possible options:

  - **Continue**:\
    When a stopped or paused timer is triggered, it will continue to run the time.
  - **Reset**:\
    When triggered, a stopped or paused timer will be reset and start from its default time.

### Colors

The timer has a color defined. This color is used in the clock viewer and in the bar at the bottom of the pool objects.

The default color for stopwatches is white text color. Countdowns have numbers in red color with a countdown bar at the bottom of the timer and green color for a confirmed countdown.

These colors can be changed for each timer.

### Format

There are two settings in the format column:

- **Frame Format**
- **Time Readout**

These are available for each timer object. They are described in the [User Settings topic](/grandma3/2-4/user_settings/).

Subtopics

- [Stopwatch](/grandma3/2-4/timers_stopwatch/)
- [Countdown](/grandma3/2-4/timers_countdown/)

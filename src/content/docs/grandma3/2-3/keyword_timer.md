---
title: "Timer"
description: "To enter the Timer keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_timer.html"
scrapedAt: "2026-06-15T18:25:12.284Z"
pagefind: false
---
To enter the Timer keyword in the command line, use one of the options:

- Press  MA + X6 | TC + X6 | TC + X6 | TC
- Type **Timer**

## Description

**Timer** is an object keyword which is used to access the timer objects.

Timers are stored in the Timer pool. There are two types of timers:

- **Stopwatch** - counting up from zero.
- **Countdown** - counting down to zero.

They can be controlled using the Timer pool or the command line.

For more information on timers see [Timers topic](/grandma3/2-3/timers/).

## Syntax

**\[Function] Timer **\["Timer\_Name" or Timer\_Number] (Property \["Setting"] \["Setting\_Value"])

****

## Settings

In some settings you have to assign an object. To do so use the [Assign Keyword](/grandma3/2-3/keyword_assign/).

Other settings contain a text option or a value. Use the [Set keyword](/grandma3/2-3/keyword_set/) for these settings.

The following table displays the settings that have to have an object:

| Setting    | Object         | Description                                     |
| ---------- | -------------- | ----------------------------------------------- |
| Appearance | "Appearance 1" | Assigns the appearance to the pool object.      |
| Scribble   | "Scribble 1"   | Assigns the scribble to the preset pool object. |

The following table displays the settings that have to have an option or value:

| Setting             | Option/Value                         | Description                                                        |
| ------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| Name                | "Timer Name"                         | Sets the name of the timer pool object.                            |
| Note                | "This is a note"                     | This is the note to the timer pool object.                         |
| TimerMode           | "Stopwatch" / "Countdown"            | Modes of the timer.                                                |
| TimeReadout         | One of the four readout options      | Readout options in the timer.                                      |
| RestartOption       | "Continue on Go+" / "Reset on Go+"   | Sets if the timer should restart or continue with a new Go+.       |
| TimerLinkType       | One of the five link options         | Timers can be linked to sequences and can be activated or toggled. |
| CountdownAlertType  | One of the four alert type options   | Defines what should happen once the countdown has elapsed.         |
| CountdownAlertRange | "Local" / "All Stations"             | Defines where an alert pop-up should appear.                       |
| CountdownDuration   | Time value                           | Sets the duration of the countdown.                                |
| AlertCommand        | "Command Line Input"                 | The command that can be executed once the countdown has elapsed.   |
| AlertText           | "Text that appears in a pop-up"      | The text is displayed in an alert pop-up.                          |
| FrameFormat         | One of the five frame format options | A setting that defines which of five formats is used in the timer. |
| AlertDuration       | Time value                           | Displays the duration of the alert pop-up.                         |

For more information on the settings of the Timer see [Timer](/grandma3/2-3/timers/).

## Examples

- To run timer 1, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Go Timer 1  |

- To change the timer mode in timer 2, type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Timer 2 "TimerMode" "Countdown"  |

- To set timer 2 to a countdown time of 25 seconds, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Timer 2 "CountdownDuration" 25  |

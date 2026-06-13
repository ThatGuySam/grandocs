---
title: "Timing Masters"
description: "There are 50 different timing masters."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/masters_timing.html"
scrapedAt: "2026-06-12T21:24:57.046Z"
---
There are 50 different timing masters. 

They can have values between 0 seconds and 10 seconds.

Timing masters can be set for playback timings instead of a numeric value. They can also be used for timings in combination with [playback commands](/grandma3/2-4/cue_playback/#h2__483879150).

The following properties can be set to a timing master:

- Timings in sequences: CueIn Fade, CueOut Fade, CueIn Delay, CueOut Delay, Feature Group Fade, and Feature Group Delay\
  For more information about using timing masters in sequences see [Cue Timing – Timing Masters](/grandma3/2-4/cue_timing/#h2_1670677255).
- Playback timings in **Preferences and Timings**:\
  To show and edit these default playback timings, go to** Menu - Preferences and Timings - Timings**.\
  For more information about default playback timings see [Cue Timing – Playback Timing](/grandma3/2-4/cue_timing/#h2_2018780083).

To set a timing master, edit the value of one of these properties and select a timing master in the [calculator](/grandma3/2-4/ws_calculator/).

![Update this description text.](/img/grandma3/2-4/window_timing-20masters_01_v3-2-2-817926.png)

Calculator Cue Fade with timing masters

To set different timing masters for in and out timings when **C****ondensed Timing** is enabled in the sequence sheet, type manually into the Cue Fade or Cue Delay calculators. For example, Timing1/Timing2 (no spaces between name and number).

To use a timing master in combination with [playback commands](/grandma3/2-4/cue_playback/#h2__483879150), type the timing master instead of a numeric value.

**Example:** 

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Goto Cue 5 Fade "Timing5" |

Timing masters can be assigned to executors. Read more about assigning masters to executors in the [Assign Object to an Executor](/grandma3/2-4/executor_assign/) topic.

To change the name of a timing master or add a scribble, an appearance, a note, or tags go to the Edit Setting tab of the [assign menu](/grandma3/2-4/executor_assign/#h2_420566424) or use the [Label](/grandma3/2-4/keyword_label/) keyword.

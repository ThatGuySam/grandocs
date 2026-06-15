---
title: "Timing Masters"
description: "There are 50 different timing masters."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/masters_timing.html"
scrapedAt: "2026-06-15T18:25:26.110Z"
pagefind: false
---
There are 50 different timing masters. 

They can have values between 0 seconds and 10 seconds.

Timing masters can be set for playback timings instead of a numeric value. They can also be used for timings in combination with [playback commands](/grandma3/2-3/cue_playback/#h2__483879150).

Timing masters can be renamed. This can be done in the Menu → Preference and Timings → Masters. Here, the [Label](/grandma3/2-3/keyword_label/) command can be used on the masters to change the name and add an appearance, scribble, and tags.

The following properties can be set to a timing master:

- Timings in sequences: CueIn Fade, CueOut Fade, CueIn Delay, CueOut Delay, Feature Group Fade, and Feature Group Delay\
  Read more about using timing masters in sequences in [Cue Timing – Timing Masters](/grandma3/2-3/cue_timing/#h2_1670677255).
- Playback Timings in Preferences and Timings\
  To show and edit these default playback timings, press Menu → Preferences and Timings → Timings.\
  Read more about default playback timings in [Cue Timing – Playback Timing](/grandma3/2-3/cue_timing/#h2_2018780083).

To set a timing master, edit the value of one of these properties and choose a timing master in the [calculator](/grandma3/2-3/ws_calculator/).

![Update this description text.](/img/grandma3/2-3/window_timing-20masters_01_v3-2-2-5ba8b7.png)

Calculator Cue Fade with timing masters

To set different timing masters for in and out timings when **C****ondensed Timing** is enabled in the sequence sheet, type manually into the Cue Fade or Cue Delay calculators. For example, Timing1/Timing2 (no spaces between name and number).

To use a timing master in combination with [playback commands](/grandma3/2-3/cue_playback/#h2__483879150), type the timing master instead of a numeric value.

**Example:** 

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue 5 Fade "Timing5" |

Timing masters can be assigned to executors. Read more about assigning masters to executors in the [Assign Object to an Executor](/grandma3/2-3/executor_assign/) topic.

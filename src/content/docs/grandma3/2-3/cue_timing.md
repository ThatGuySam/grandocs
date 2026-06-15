---
title: "Cue Timing"
description: "Each cue part has a lot of timing information."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_timing.html"
scrapedAt: "2026-06-15T18:25:25.359Z"
pagefind: false
---
Each cue part has a lot of timing information.

The default times are used if nothing is defined on cue creation. The default can be changed. Read about the default times [below](/grandma3/2-3/cue_timing/#h2_1091955624).

Any cue timings can be changed at any point using the command line or the GUI ([Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/)).

There are a lot of elements that affect how a fixture changes values, and they can be divided into different groups:

- **General cue times**
- **Feature Type Timing**
- **Individual Attribute times**
- **Executor Time at point of cue execution**
- **Dynamic changed Rate**

This is also the priority list from lowest to highest priority.

There is also the [cue transition](/grandma3/2-3/cue_timing/#cue_transition) that defines how the values change from one to another.

## General Cue Times

There are six different general cue timings. Each has its own column in the Sequence Sheet when condensed timing is turned off - read about it in the [Look at Cues and Sequences topic](/grandma3/2-3/cue_sequence_sheet/) :

- **Cue In Fade**\
  This is the fade time used for all intensity values changing from a lower value and going to a higher and any other attribute changing value. It starts when the cue is triggered and after the Cue In Delay has counted down.
- **Cue In Delay**\
  This is the delay before the fade. This defines a countdown time between the cue is triggered and when the fade should begin. The In Delay affects the In Fade. The default value is 0, meaning that there is no delay.
- **Cue Out Fade**\
  The out fade is used by intensity values fading from a higher value to a lower. It is executed after the Cue Out Delay. The default value is the in fade, meaning that it is the same as whatever the cue in fade is.
- **Cue Out Delay**\
  This is the delay time for the Out Fade. It can be used to delay when intensity values should start to fade down in value. The default value is in delay, meaning it is the same as the Cue In Delay value.
- **Snap Delay**\
  Some attributes are defined to Snap. This means that they do not fade from one value to another. They change values as fast as possible. This can make sense for attributes like gobos. This delay is used to delay when the snap is performed. It makes it possible to have the fixture fade out before snapping to a new gobo. This delay affects all snap attributes stored in the cue. It can be overwritten by individual attribute timing.
- **Command Delay**\
  This delays the execution of a command. This is the only place where this delay can be defined. There is no individual timing for this.

These values can be changed using this syntax:

Cue \["Cue\_Name" or Cue\_Number] CueInFade \[New\_Cue\_Time]

Just use the relevant keyword: [CueInFade](/grandma3/2-3/keyword_cueinfade/), [CueOutFade](/grandma3/2-3/keyword_cueoutfade/), [CueInDelay](/grandma3/2-3/keyword_cueindelay/), [CueOutDelay](/grandma3/2-3/keyword_cueoutdelay/), [SnapDelay](/grandma3/2-3/keyword_snapdelay/), or [CommandDelay](/grandma3/2-3/keyword_commanddelay/).

There are two more options for setting the cue fade and delay. They are called [CueFade](/grandma3/2-3/keyword_cuefade/) and [CueDelay](/grandma3/2-3/keyword_cuedelay/). They can be used to set the four cue fade and delay times mentioned above. They are used to set the in and out time using just one keyword.

The in and out time is separated by a slash. The time before the slash is the **In** time. The time after the slash is the **Out** time. It is not necessary to specify both in and out. The slash can be used to set just one of them. The desired time has to be on the correct side of the slash.

If only one time is set without any slash, then the in time gets the actual value, and the out time is linked to the in time - it is technically set to time "None". The result is that, for instance, the fade in and fade out will be the same.

For example, setting the in fade to 5 seconds and the out fade to 8 seconds in cue 3 could be done with the following keystrokes:

Cue 3 Time 5 / 8 Please

The command line would read:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue 3 CueFade 5/8 |

If only one time is given, both in and out will use the time. For instance,

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue 4 CueFade 7 |

This makes cue 4 use 7 seconds to both fade in and out.

The CueFade and CueDelay commands can address only the in or out time by adding the slash and a number to the relevant side. For instance, setting the CueOutFade to 3 and the CueInDelay to 1 on the currently active cue:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CueFade /3 CueDelay 1/ |

Both CueFade and CueDelay can be addressed using the [Time key](/grandma3/2-3/key_time/). Read more about delays by following the links above to the keywords.

## Feature Group Timings

Each feature group has its own fade and delay time, and the Sequence Sheet has columns for each.

These times are used by all fixtures changing the values of that feature group. Overwriting the general cue timing for that feature group.

|                                                  |                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                     |
|                                                  | Intensity values changing to a lower value are not affected by the "Dimmer Fade" time. They are controlled by the "Cue Out Fade".  |

The feature group fade and delay default is general cue timing. This means they are the same as the time for the Cue In Fade and Cue In Delay.

## Individual Attribute Timing

Each individual attribute can have an individual fade and/or delay time. This is called individual time. These individual times are selected using the [programmer](/grandma3/2-3/operate_programmer/) and added to the cue when it is [stored](/grandma3/2-3/cue_store/). They can also be edited in the sequence sheet while in [tracking mode](/grandma3/2-3/cue_tracking/).

There are two columns in the sequence sheet called **Indiv Fade** and **Indiv Delay**. They display the highest of the individual times. The **Indiv Duration** column shows the complete individual time (delay + fade).

## Executor Time

There is an **Executor Time** master fader. It can be seen and changed in the [Master Controls pop-up](/grandma3/2-3/ws_master_controls/). It can also be [assigned to physical controls or executors](/grandma3/2-3/executor_assign/).

If this function is turned On, the set time will be used instead of the stored fade and delay timing. The **Executor Time** faders position is registered when the cue is triggered. The fader can be moved afterward without affecting the running cue fade. Read more in the [Time Control topic](/grandma3/2-3/masters_grand_time/).

Sequences can be protected from this function by turning Off the **Use Executor Time** setting in [Sequence Setting](/grandma3/2-3/cue_sequence_settings/).

## Rate Time

The **Rate** allows the timings to be dynamically adjusted while the cue fade runs. It does not change the stored times. It simply adjusts the time to be faster or slower. 

Moving the fader up makes the fade faster, making the stored times appear smaller. Pulling the fader down makes it go slower, extending the stored times.

Times affected by the rate has an asterisk (\*) in front of the time. If the rate is all the way down, the times will show **\*Stopped**. If the rate is all the way up, the times will show **\*0**.

An executor with the rate function shows the rate as a percentage in the executor label. If the rate is exactly 100%, then the label shows **1:1**. If the rate is at maximum, the label shows **1:∞**. If the rate is at a minimum, the label shows **Stopped**.

The rate can be reset using the [Rate1 keyword](/grandma3/2-3/keyword_rate/).

## Timing Masters

There are 50 timing masters. These can be set to a value from 0 to 10 seconds. The timing masters can be referenced as cue fade, cue delay, feature group fade, and feature group delay values. The cue will then use the value set at the timing master instead of a specific defined fade or delay value.

Timing masters can be added to the following timings:

- CueIn Fade
- CueOut Fade
- CueIn Delay
- CueOut Delay
- Feature Group Fade
- Feature Group Delay 

They can be assigned using the command line and by editing cells in the Sequecne Sheet.

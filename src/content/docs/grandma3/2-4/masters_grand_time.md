---
title: "Time Control"
description: "When enabled, the Program Time and Executor Time masters can override playback timing within the programmer and executors, respectively, with a time range of 0 "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/masters_grand_time.html"
scrapedAt: "2026-06-12T21:24:56.820Z"
---
When enabled, the Program Time and Executor Time masters can override playback timing within the programmer and executors, respectively, with a time range of 0 seconds to 10 seconds. They can be assigned to executors as well as special executors in the [Master Area](/grandma3/2-4/do_control_master/), [Custom Area](/grandma3/2-4/do_control_custom/), or the [Grand Master](/grandma3/2-4/do_control_grand/). This gives physical control of their activation and level. Quick access to these masters is available in the master controls menu. For more information on this menu, see the [Master Controls topic](/grandma3/2-4/ws_master_controls/).

## Program Time

Program Time adds a fade time to changes of attribute values in the programmer. Set the master to the desired value and activate Program Time by pressing On or Toggle on an executor assigned to the program time master, or tap Prog Time in the master controls menu so there is a green marker. The set time will be used for all value changes in the programmer except for those made by turning an encoder or the dimmer wheel.

To deactivate program time, press Off or Toggle on an executor assigned to the program time master, or tap Prog Time again in the master controls menu. The green marker will disappear.

|                                            |                                                                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                |
|                                            | Recalling presets that include individual fade time and delay time will continue to use their stored times. Presets with no individual fade time will respect the program time setting.  |

## Executor Time

Executor Time overrides cue fade times during sequence playback, regardless of whether the sequence is running from an executor or directly from the sequence pool. Set the master to the desired value and activate Executor Time by pressing On or Toggle on an executor assigned to the executor time master, or tap Executor Time in the master controls menu so there is a green marker. Cues stored with only basic timing will change values using the specified executor time. Individual fade and delay and times will continue to playback as stored. Cues with follow or time triggers will continue to use the stored triggers.

To deactivate executor time, press Off or Toggle on an executor assigned to the executor time master, or tap Executor Time again in the master controls menu. The green marker will disappear.

If the Use Executor Time option in the sequence settings menu is enabled, the sequence will follow the executor time master. Disabling Use Executor Time allows all of the cues in the sequence playback using their stored timing. For more information on the sequence settings menu, see the [Sequence Settings](/grandma3/2-4/cue_sequence_settings/) topic.

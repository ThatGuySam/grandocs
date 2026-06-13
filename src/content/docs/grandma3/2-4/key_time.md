---
title: "Time"
description: "The default functionality of Time depends on the \"Time Key Target\" setting in the current user profile."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_time.html"
scrapedAt: "2026-06-12T21:24:15.496Z"
---
The default functionality of Time depends on the "Time Key Target" setting in the current user profile.

If the "Time Key Target" is set to "Cue" and the command line is empty, pressing Time will toggle between CueFade and CueDelay in the command line.

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueFade |

For more information about Time, see the [CueFade keyword](/grandma3/2-4/keyword_cuefade/) or [CueDelay keyword](/grandma3/2-4/keyword_cueindelay/).

If the "Time Key Target" is set to "Cue" and the command line contains a fixture selection, pressing Time will toggle between Fade and Delay in the command line.

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Group 1 Delay |

For more information about Time, see the [Fade keyword](/grandma3/2-4/keyword_fade/) or [Delay keyword](/grandma3/2-4/keyword_delay/).

If the "Time Key Target" is set to "Fixture" and the command line is empty, pressing Time will toggle between Fade and Delay in the command line.

|                                                                    |                           |
| ------------------------------------------------------------------ | ------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delay |

For more information about Time, see the [Fade keyword](/grandma3/2-4/keyword_fade/) or [Delay keyword](/grandma3/2-4/keyword_delay/).

If the "Time Key Target" is set to "Fixture" and either Store or Cue is in the command line, pressing Time will toggle between CueFade and CueDelay in the command line.

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store CueFade |

For more information about Time, see the [CueFade keyword](/grandma3/2-4/keyword_cuefade/) or [CueDelay keyword](/grandma3/2-4/keyword_cueindelay/).

Regardless of the "Time Key Target" setting, pressing MA Time will toggle between Relative, Fade, Delay, and Absolute.

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Relative |

For more information about Time, see the [Relative keyword](/grandma3/2-4/keyword_relative/), [Fade keyword](/grandma3/2-4/keyword_fade/), [Delay keyword](/grandma3/2-4/keyword_delay/), or [Absolute keyword](/grandma3/2-4/keyword_absolute/).

Regardless of the "Time Key Target" setting, additionally adding At to the command and pressing Time will cycle through the value layer keywords.

Example: At 5 0 Time

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At 50 Fade |

## Location

Time is located in the command section.

![](/img/grandma3/2-4/button_time_v0-1-691d55.png)

_Location on grandMA3 full-size and grandMA3 light consoles_

---

![](/img/grandma3/2-4/buttons_wings_time_v0-1-f8eb7c.png)

_Location on grandMA3 compact consoles and grandMA3 onPC command wing_

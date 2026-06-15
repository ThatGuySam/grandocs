---
title: "Fade"
description: "To enter the Fade keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fade.html"
scrapedAt: "2026-06-15T18:25:01.812Z"
pagefind: false
---
To enter the **Fade** keyword in the command line, use one of the options:

- Press Time (If the Time Key Target is set to Fixture. For more information see [User Settings](/grandma3/2-3/user_settings/) and [Time Key](/grandma3/2-3/key_time/).)
- Press MA Time Time
- Type **Fade**

## Description

The Fade keyword is a helping keyword which is used to indicate fade times.

As a helping keyword for playback functions (for example Goto), this keyword sets the time which is used to execute the function.

If it is used as a starting keyword, Fade will apply individual timing in the programmer for the current selection and attributes.

|                                            |                                                                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                    |
|                                            | As long as the command starts with a function, the Fade keyword and the fade value can be randomly used within the command.  |

To set the fade times for cues, read more in the [CueFade keyword](/grandma3/2-3/keyword_cuefade/).

## Syntax

**(\[Function] \[Object] \["Object\_Name" or Object\_Number]) Fade \[Fade\_Value]**

## Examples

- To crossfade to cue 3 in the selected sequence in 4 seconds, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue 3 Fade 4 |

 

- To set the individual fade time of 2 seconds to the dimmer of the current selection, type:

|                                                                    |                            |
| ------------------------------------------------------------------ | -------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fade 2 |

 

- To set the dimmer value of the current fixture selection to 50 % and apply an individual fade time of 2 seconds to the dimmer of the current selection, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>At 50 Fade 2 |

---
title: "FaderTime"
description: "To enter the FaderTime keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_fadertime.html"
scrapedAt: "2026-06-12T21:24:27.153Z"
---
To enter the FaderTime keyword in the command line, use one of the options:

- Type **FaderTime**
- Type the shortcut **Faderti**

## Description

The FaderTime keyword applies the Time function to a number of objects such as executors, sequences, groups, masters, and other. It is used to overwrite the stored cue part times by setting a time value and activating the time function. 

For more information about cue time overwriting see [Cue Timing](/grandma3/2-4/cue_timing/).

For more information on how to activate and deactivate the function see [Time](/grandma3/2-4/keyword_time/).

## Syntax

Assign FaderTime At \[Object] \["Object\_Name" or Object\_Number]

FaderTime \[Object] \["Object\_Name" or Object\_Number] At \[Value]

## Examples

- To assign FaderTime function to executor 207 on the selected page, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign FaderTime At Executor 207 |

 

- To set the FaderTime value to 50% of the time range for the selected sequence, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> FaderTime At 50 |

 

- To set the FaderTime value to 10% of the time range for sequence 5, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>FaderTime Sequence 5 At 10 |

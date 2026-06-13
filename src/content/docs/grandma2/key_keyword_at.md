---
title: "At"
description: "At may be used as a function to apply values or as a helping keyword for other functions to indicate destinations."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_at.html"
scrapedAt: "2026-06-12T21:27:45.151Z"
---
At may be used as a function to apply values or as a helping keyword for other functions to indicate destinations.

To execute this keyword press the key At, or type **At** or the shortcut **A** into the command line. 

## Syntax

At \[Value-list]

At \[Value-type] \[Value-list]

At \[Object-list]

\[Object-list] At \[Value-list]

\[Object-list] At \[Value-type] \[Value-list]

\[Object-list] At \[Object-list]

\[Function] \[Object-list] At \[Object-list] (as a helping keyword)

 

## Options

To get a list of all available options for the keyword At in the command line feedback window type the following into the command line:

\[Channel]> At /?

 

The keyword At has the following options:

| Option                | Shortcut    | Option value                                                                                                                                                                                                                      | Description                                                    |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| LAYER                 | no shortcut | Value; Fade; Delay; EffectForm; EffectBPM; EffectSpeedGroup; EffectLow; EffectHigh; EffectPhase; EffectWidth; EffectFade; EffectDelay; EffectID; Auto; Valueonly; Output; IDValueExec; IDEffectExec; IDValueCue; IDEffectCue; DMX | Sets destination layer.                                        |
| ignoreselection       | is          | no option value                                                                                                                                                                                                                   | Ignores current selection.                                     |
| values                | v           | =False; =True                                                                                                                                                                                                                     | Filters by layer, enables value layer.                         |
| valuetimes            | vt          | =False; =True                                                                                                                                                                                                                     | Filters by layer, enables fade and delay layer.                |
| effects               | ef          | =False; =True                                                                                                                                                                                                                     | Filters by layer, enables effect layers.                       |
| disablecolortransform | dct         | no option value                                                                                                                                                                                                                   | Disables color transformation (fetch hard attribute values).   |
| prefercolorwheel      | pcw         | no option value                                                                                                                                                                                                                   | Prefers transforming colors to color wheel.                    |
| prefermixcolor        | pmc         | no option value                                                                                                                                                                                                                   | Prefers transforming color to MIXColor and color wheel.        |
| prefercolorboth       | pcb         | no option value                                                                                                                                                                                                                   | Prefers transforming color to both MIXColor and color wheel.   |
| status                | s           | =False; =True                                                                                                                                                                                                                     | At with tracking values.                                       |

 

At is "the exception that proves the rule". At is one of the few functional keywords which accept objects before the function.

As a starting keyword, At is a function that applies values in the programmer to the current selection.

If value type Fade or Delay is used, the value list will be applied as individual fade/delay times.

Following an object list, At is a function that applies values to the object list. If the object list does not support the At function, the object list is resolved into a selection list and At applies values in the programmer.

Following an object list that follows a function, At is a helping keyword for the starting function.

**Important:**\
When At applies a range/list the values/objects are usually spread across the receiving objects, e.g., Fixture 1 Thru 3 At 0 Thru 100 will set 1 At 0, 2 At 50, and 3 At 100. However, there is one exception to this rule: If the applied range is a list of cues from a tracking sequence, all fixtures will be set to all cues. Thus, you can apply the tracking status of a cue with the At function (At Cue Thru x).

 

## Example:

 

\[Channel]> ​At 75

 

Sets the dimmer attributes of current selection to 75%.

 

\[Channel]> ​At Cue 3

 

Sets the current selection to the values of Cue 3 from the selected executor.

 

\[Channel]> Fixture 2 At Fixture 3

 

Selects Fixture 2 and sets it to the values of Fixture 3.

 

\[Channel]> Executor 3 At 50

 

Sets the fader of Executor 3 to 50%.

 

\[Channel]> Attribute "Pan" At 20

 

Sets the pan attributes of current selection to 20.

 

\[Channel]> ​PresetType 2 Thru 9 At Delay 2

 

Sets individual delay time of 2 seconds to all attributes, except for dimmers, for the current selection.

 

\[Channel]> Copy Group 4 At 10

 

Copies Group 4 to Group 10.

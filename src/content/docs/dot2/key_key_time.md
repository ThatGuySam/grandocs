---
title: "Time"
description: "Pressing the Time key opens the Time defaults window."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_time.html"
scrapedAt: "2026-06-12T21:29:40.884Z"
---
Pressing the Time key opens the [Time defaults window](/dot2/key_window_timedefaults/).

Using this window you can set the different times used when storing new cues.

 

If you are storing a cue and you have pressed the Store key, then the Time key will flash when you have set a different default timing than the factory defaults.

 

Also when you are storing cues, you can temporary store a different time than your defaults using the Time key. When using Time with Store you get the [Fade Command](/dot2/key_keyword_fade/).

## Example

You want to store cue 2 with a fade time of 3 seconds. You press:

Store Cue 2 Time 3 Please

Notice that the command line is actually changing the time command into fade:

Store Cue 2 Fade 3

 

If you continue to press the Time key during the store operation, you can get to all the different possible timings in a cue (except the preset type timings).

Store Cue 1 Time 2 Time 3 Time 4 Time 5 Time 6 Time 7 

Gives you this in the command line:

Store Cue 1 Fade 2 OutFade 3 Delay 4 OutDelay 5 SnapPercent 6 CmdDelay 7

 

## Special Masters

You can use the Time key to create two different special masters.

Pressing Store Time and then press an empty executor key will give you the following window:

![](/img/dot2/dot2_viewsandwindows_storetime_1-1-3-7ce8e0.png)_Figure 1: Select Time Master type window\._

Here you can select one of the two master types.

The Exec (Executor) Time will overwrite the fade times stored in cues and use the time you set on the fader as a cross fade between cues. All delay times are ignored.

The Prog (Programmer) Time will be used to fade all your programmer value changes. This includes toggling in and out of Blind.

You can read more about the different Speed and Time Masters in [Magic Speed view](/dot2/key_viewitem_speed/).

 

 

## Related links

[Time defaults window](/dot2/key_window_timedefaults/)

[Fade command](/dot2/key_keyword_fade/)

[OutFade command](/dot2/key_keyword_outfade/)

[Delay command](/dot2/key_keyword_delay/)

[OutDelay command](/dot2/key_keyword_outdelay/)

[SnapPercent command](/dot2/key_keyword_snappercent/)

[CmdDelay command](https://help.malighting.com/dot2/en/help/d5b0bc10-d172-4986-bb2e-437bc693ee7e.html)

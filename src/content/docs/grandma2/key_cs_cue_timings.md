---
title: "Cue timings"
description: "Cue timing is about the stored values transition from one cue to the next."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_cue_timings.html"
scrapedAt: "2026-06-12T21:28:14.203Z"
---
Cue timing is about the stored values transition from one cue to the next.

There are several levels of timing that can be relevant for a values transition time.

There are different timing levels. They are:

- **General Cue Timing**
- **Preset Type Timing**
- **Individual Timing**
- **Rate**
- **Executor Time**

There is also manual cross fading. This overwrites any timing. Read more about cross fading in the [Playing back Cues topic](/grandma2/key_cs_playback/#crossfade).

 

## General Cue Timing

This is the general timing columns that can be seen in the [Sequence Executor Sheet](/grandma2/key_cs_cue_sequence/).

These timings have the lowest priority. If a value has a different Preset Type Timing or an Individual Timing then they have a higher priority.

They are:

- **Fade:**\
  This is the time used by all attributes and dimmer values going "up" in value. It can also be called "InFade".
- **OutFade:**\
  This is time used by dimmer values going "down" in value. This only effects Dimmer values. The default for this is "InFade" - automatically making it the same as the "Fade" value.
- **Delay:**\
  This is the time used to wait before executing the "Fade". It can also be called "InDelay".
- **OutDelay:**\
  This is the time used to wait before executing the "OutFade". This only effects Dimmer values.The default for this is "InDelay" - automatically making it the same as the "Delay" value.
- **Snap Percent:**\
  This is the percent number used to control when the "Snap" is performed. Read more about [Snap Percent](#snap_percent) at the bottom of this topic.

The defaults are a user setting and can be changed in the Setup -> User -> Defaults -> Sequence Defaults.

 

## Preset Type Timing

Each preset type has two columns in the Sequence Executor Sheet. One is **Fade** the other is **Delay**.

These times will will be used by all changing the values of that preset type. Overwriting the General Cue Timings for that Preset Type.

**Important:**\
Dimmer values changing to a lower value are not effected by the ""Fade Dimmer" time. They are controlled by the "OutFade".

The default value for these are "Cue" making the automatically the same as the General Cue Timings.

The defaults are a user default and this can be changed in the Setup -> User -> Defaults -> Sequence Defaults. 

 

## Individual Timing

Each individual attribute can have a special individual fade and/or delay time. This is called individual time.

There are two columns in the Sequence Executor Sheet called **I.Fade** and **I.Delay**, they display the range if the individual times - the lowest and the highest time.

If there are individual times stored then the background of the **Fade** or the **Delay** columns will have a green or orange color. This is a visual indicator that there are some individual times stored.

### Storing Individual Timing

Individual times are usually stored together with active values in the programmer.

The Encoder Toolbar should look like this when working with values:

![](/img/grandma2/img_encoder-toolbar_value_v3_3-b78528.png)

_Encoder Toolbar - Value Layer_

Here in the Encoder toolbar there are three buttons in the center of the top row called: Value, Fade, and Delay.

They control if the encoders below the buttons are used to set a value or to set an individual time. They change between different layers.

An attribute needs to have values stored in the cue where the individual time is stored. The time can be stored at the same time as the value, but can also be added (merged) into the cue after the values is stored.

To get the fade or delay times into your programmer, you need to select the layer you want to work with. You can tap the buttons in the Encoder Toolbar or you can press the Time key to toggle between the layers.

When the correct layer is selected then you can use the encoders to set a time or you can use the keys to type a time - pay attention to your command line input.

This is what the Encoder Toolbar looks like when Pan and Tilt have 2 seconds as individual fade time in the programmer

![](/img/grandma2/img_encoder-toolbar_fade_active-values_v3_3-f438f6.png)

_Encoder Toolbar - Fade Layer with active fade times_

When the individual time is in the programmer then it needs to be stored like any other value.

 

Depending on what is stored with individual times, please consider if using [Part Cues](/grandma2/key_cs_store/) might be a better solution for you.

 

## []()Rate Fader

All executors have a Rate Fader. This fader might not be assigned to a physical fader but it is still there. For details about this please have a look at the [Executors section](/grandma2/key_exec/).

A Rate fader is used to modulate or dynamically adjust the stored times. It does not change the stored times, it simply adjust the time to be faster or slower. 

When the time is adjusted by the Rate fader then the time displayed in the Sequence Executor Sheet is also visually adjusted. There is an asterisk symbol in front of the time to show you that the time is adjusted. It could look like this:

![](/img/grandma2/window_sequence-executor-sheet_rate-adjusted_v3-3-d2df63.png)

_Sequence Executor Sheet with adjusted times_

The default value for the Rate fader is "1:1". This means that times will not be adjusted. If the rate is changed then the stored time is divided by the value of the rate - this includes the individual times.

In the image above the stored fade time for cue 1 is "1". The Rate is set to "2". The result is 1 divided by 2 equals 0.5.

Moving the Rate fader above "1:1" will make the rate time larger and the result is that the times are faster. Moving the Rate below the "1:1" will make the rate time smaller than 1 and the result is that the cue times are slower.

The Rate fader can be reset to "1:1" by typing:

\[Channel]> Rate 1

Or by having the "Rate1" function assigned to one of the associated executor keys.

 

## Exec Time faders

The "Exec Time" or "Executor Time" fader can be used to override the stored times in the cues. It is a fader visible in the lower right corner of screen 2 (unless you are on a grandMA2 onPC with the "CmdWing Bar" turned on). It can also be assigned to a physical fader - read about it in the [Special Masters topic](/grandma2/key_adv_exec_spec_master/).

If the Exec Time fader is On, then all the stored cue timing is ignored and the time set on the Exec Time fader is used instead. The default range for the fader is 0 seconds to 10 seconds. The maximum is a user setting and it can be changed in Setup -> User -> Settings. It it called "Max. Exec Time".

The Exec Time fader also has a "Manual XFade" function. This will allow you to use the move from one end position to the other as the timing for the cue change.

Exec Time ignores any individual times. The Rate Fader is effecting the Exec Time, except when doing the Manual XFade.

It is possible to activate **Ignore Exec Time** in the options for each Executor - see the [Executor Options topic](/grandma2/key_adv_exec_options/). This will exclude the executor from being effected by the Exec Time.

 

---

## []()Snap Percent

Some attributes are defined as "Snap" attributes in the Fixture Type definition. This means that the attribute will not fade from one value to the next but it will instantly change to the new value. This could be Gobo wheels, Prism In/Out, Mode channels, or any other attribute where fading is not desired.

The Snap Percent is a percent number that defines when in the cue fade these attributes shall perform the Snap.

The default is 0% and this value is hidden in the Sequence Executor Sheet. This value means that the Snap will be performed when 0% of the fade time is executed - immediately when the cue is triggered.

If the Snap Percent is set to 100% then the Snap will be performed when all fade times in the cue is done - at the very end of the fade. This includes the time of individual fades!

The Snap Percent can be set to anything between 0% and 100%, allowing you to choose when the Snap is performed.

---
title: "Events"
description: "The tracks can have Events positioned on the timeline. Events can have a Token assigned. Tokens are the actions an event triggers."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/timecode_events.html"
scrapedAt: "2026-06-15T18:25:27.940Z"
pagefind: false
---
The tracks can have Events positioned on the timeline. Events can have a **Token** assigned. Tokens are the actions an event triggers.

The assigned token is executed when the cursor (green timeline) reaches an event.

A diamond marks the event in the timeline.

![Example of en event in the timeline.](/img/grandma3/2-3/img_timecode-viewer_event_v2-2-1e31a5.png)

An event diamond in the timeline.

The diamond is black when it is not selected and yellow when selected. There are some icons and text around the diamond. The visibility of these and the actual diamond can be changed in the window settings. Learn more about the settings in the [Timecode Viewer](/grandma3/2-3/timecode_viewer/#h2_1412431149) topic.

The green icon above the diamond indicates the token action. Each action has its own icon. The token can be edited in the text mode or by pressing the event encoder in the encoder toolbar when in setup mode.

This is the list of available tokens for a cue:

![Select Token pop-up allows toe user to select what the event should do.](/img/grandma3/2-3/popup_select-token_v2-2-2c61e0.png)

Select Token pop-up.

Some tokens have an extra status setting. For instance, **Flash**. This token can be On or Off to indicate the status of the token. The different status' changes the icon in the timeline.

Events automatically recorded will display an icon next to the event diamond or in the center of it:

- ![](/img/grandma3/2-3/icon_15_timecode_clock_v2_0-c50fa3.png) This event was recorded as a timed cue, for example, triggered by the follow or time triggers.
- ![](/img/grandma3/2-3/icon_15_timecode_cmd_v2_0-7f1d40.png) Command icon:\
  When displayed on the right side of the event diamond, a command was executed by the timecode event.\
  When displayed in the center of the event diamond, a command was executed in the triggered cue. 

*  ![](/img/grandma3/2-3/icon_faders_15_v1-9-0583bd.png) This event was triggered by moving a fader, and the assigned sequence's **Auto Start** or **Auto Stop** started or stopped the sequence.
* ![](/img/grandma3/2-3/icon_15_timecode_seq_v2_0-25992a.png) When a playback is switched off via Off When Overriden, for more information, see [Sequence Settings](/grandma3/2-3/cue_sequence_settings/).
* ![](/img/grandma3/2-3/icon_15_timecode_macro_v2_0-f50e01.png) The event was created by executing a macro. For more information, see [Create Macros](/grandma3/2-3/macro_create/).
* ![](/img/grandma3/2-3/icon_tc_multievents_v2_0-3190e6.png) This icon is displayed when two or more events are too close to one another to be displayed. It disappears when zooming in.
* ![](/img/grandma3/2-3/icon_small_execute_toggle_10_v1-9-c580a3.png) This icon is displayed when a toggle event is recorded. It will be accompanied by this icon ![](/img/grandma3/2-3/icon_15_sequprio_high_v2_0-c8d204.png) if the toggle starts the sequence or by this icon ![](/img/grandma3/2-3/icon_stop_v0-93-3deb03.png) if the toggle stops the sequence.
* ![](/img/grandma3/2-3/icon_15_timecode_xlr_v2_0-7bfee2.png) The event was created via a DMX remote.
* ![](/img/grandma3/2-3/icon_15_timecode_note_v2_0-c8e924.png) This event was created via MIDI remote.
* ![](/img/grandma3/2-3/icon_15_timecode_shared_v2_0-a68291.png) This event was created via a DC remote.

For more information about remotes, see [Remote In and Out](/grandma3/2-3/remote_inputs/).

For events with disabled commands, the command icon will be displayed in red if you set **Execute Command** to **No** in the timecode show or by switching off Command Enable in the sequence.

See the [Create a Timecode Show](/grandma3/2-3/timecode_create/) to learn about adding events.

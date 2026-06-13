---
title: "Events"
description: "The tracks can have Events positioned on the timeline. Events can have a Token assigned. Tokens are the actions an event triggers."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timecode_events.html"
scrapedAt: "2026-06-12T21:24:59.114Z"
---
The tracks can have Events positioned on the timeline. Events can have a **Token** assigned. Tokens are the actions an event triggers.

The assigned token is executed when the cursor (green timeline) reaches an event.

A diamond marks the event in the timeline.

![Example of en event in the timeline.](/img/grandma3/2-4/img_timecode-viewer_event_v2-2-71e790.png)

An event diamond in the timeline

The diamond is black when it is not selected and yellow when selected. There are some icons and text around the diamond. The visibility of these and the actual diamond can be changed in the window settings. Learn more about the settings in the [Timecode Viewer](/grandma3/2-4/timecode_viewer/#h2_1412431149) topic.

The green icon above the diamond indicates the token action. Each action has its icon. The token can be edited in text mode or by pressing the event encoder in the encoder toolbar when in setup mode.

This is the list of available tokens for a cue:

![Select Token pop-up allows toe user to select what the event should do.](/img/grandma3/2-4/popup_select-token_v2-2-bb60f2.png)

Select Token pop-up

Some tokens have an extra status setting. For instance, **Flash**. This token can be On or Off to indicate the status of the token. The different status changes the icon in the timeline.

To add an event, follow the steps below:

1. Edit a timecode pool object, for example, by using the swipey command. See [Pool windows](/grandma3/2-4/wvm_pool/) for more information. The timecode editor opens.
2. Select the track where you want to add the event.
3. Position the cursor in the timeline where you want to add the event.
4. Tap ![](/img/grandma3/2-4/icon_add_event_15_v1-5-png-0738cf.png) in the toolbar on the left side of the window.
5. The event is added.

Watch the video to see how to add an event:

[Vimeo video](https://player.vimeo.com/video/1061564428?title=0\&byline=0\&portrait=0\&color=ffeb0f)

Events automatically recorded will display an icon next to the event diamond or in the center of it:

- ![](/img/grandma3/2-4/icon_15_timecode_clock_v2_0-0a379a.png) This event was recorded as a timed cue, for example, triggered by the follow or time triggers.
- ![](/img/grandma3/2-4/icon_15_timecode_cmd_v2_0-ea3fdd.png) Command icon:\
  When displayed on the right side of the event diamond, a command was executed by the timecode event.\
  When displayed in the center of the event diamond, a command was executed in the triggered cue. 

*  ![](/img/grandma3/2-4/icon_faders_15_v1-9-59bc4b.png) This event was triggered by moving a fader, and the assigned sequence's **Auto Start** or **Auto Stop** started or stopped the sequence.
* ![](/img/grandma3/2-4/icon_15_timecode_seq_v2_0-4fa96c.png) When playback is switched off via Off When Overridden, for more information, see [Sequence Settings](/grandma3/2-4/cue_sequence_settings/).
* ![](/img/grandma3/2-4/icon_15_timecode_macro_v2_0-8983c3.png) The event was created by executing a macro. For more information, see [Create Macros](/grandma3/2-4/macro_create/).
* ![](/img/grandma3/2-4/icon_tc_multievents_v2_0-b704af.png) This icon is displayed when two or more events are too close to one another to be displayed. It disappears when zooming in.
* ![](/img/grandma3/2-4/icon_small_execute_toggle_10_v1-9-afea79.png) This icon is displayed when a toggle event is recorded. It will be accompanied by this icon ![](/img/grandma3/2-4/icon_15_sequprio_high_v2_0-e5f7c3.png) if the toggle starts the sequence or  ![](/img/grandma3/2-4/icon_stop_v0-93-446d7d.png) if the toggle stops the sequence.
* ![](/img/grandma3/2-4/icon_15_timecode_xlr_v2_0-ecf7c7.png) The event was created via a DMX remote.
* ![](/img/grandma3/2-4/icon_15_timecode_note_v2_0-ef561f.png) This event was created via MIDI remote.
* ![](/img/grandma3/2-4/icon_15_timecode_shared_v2_0-b8a2d4.png) This event was created via a DC remote.

For more information about remotes, see [Remote In and Out](/grandma3/2-4/remote_inputs/).

For events with disabled commands, the command icon will be displayed in red if you set **Execute Command** to **No** in the timecode show or by switching off Command Enable in the sequence.

See the [Create a Timecode Show](/grandma3/2-4/timecode_create/) to learn about adding events.

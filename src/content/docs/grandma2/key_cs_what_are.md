---
title: "What are cues and sequences"
description: "Being able to store and recall a set of attribute values is one of the most important features of a control system."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_what_are.html"
scrapedAt: "2026-06-12T21:28:13.891Z"
---
Being able to store and recall a set of attribute values is one of the most important features of a control system.

One of the primary ways of doing this is using a **Cue**. Cues contain the stored values. Cues are organized in **Sequences**. A sequence can be assigned to an **Executor** for convenient playback control. Read more about the executors in the [Executors section](/grandma2/key_exec/).

Cues can be split up in different parts called "Part Cues". An attribute value can only be in one of the parts. This will be described in the next topics.

With sequences we also have control of how values change from one cue to the other and a lot other relevant settings.

These are described in the following topics.

## []()The Sequence Pool

The sequences are organized in a pool. It could look like this:

![](/img/grandma2/window_sequence-pool_v3-3-0203c2.png)

_Sequence Pool - pool mode_

If pools are new to you, then please see the [Pools in General section](/grandma2/key_pools/).

Each pool element (equals each sequence in the show) shows some information about the sequence settings and other relevant information.

The lower half of the pool object shows the name of the sequence.

The top row displays the sequence number on the left. If this number is cyan then the sequence is assigned to an executor. If it is not assigned then the number is gray.

There is a letter indicating the sequences priority. Priorities are described in the [Playing back cues topic](/grandma2/key_cs_playback/). The different letters are listed in the [Text indicators topic](/grandma2/key_ws_text_indicators/).

There can be a "T" letter next to priority letter. This shows if tracking is turned On (visible T) or Off for the sequence. Tracking is described in the [What is tracking topic](/grandma2/key_cs_what_is_tracking/).

There can be two icons in the top row. It can have the Filter icon if the sequence have assigned an input filter. Filters are described beginning from the [What are Filters topic](/grandma2/key_wfm_what_are_filters/). The other icon is the information icon. This is present if there are any information written for the sequence (it has nothing to do with information in cues - it is about the sequence).

Below the top row there might be cyan number below the sequence number on the left side. This shows the amount of executors that have the sequence assigned.

## Sheet Mode

The Sequence Pool can also be in "Sheet Mode". This is changed in the Pool Options - read about them in the the [Pools in General section](/grandma2/key_pools/).

It could look like this:

![](/img/grandma2/window_sequence-pool_sheet-mode_v3-3-c2b7a8.png)

_Sequence Pool - sheet mode_

The title bar can have up to three buttons.

The right one will hide or show all the empty pool elements in the Sequence Sheet.

The next on the left changes the Call Mode for the sequence Pool/Sheet. If the "Pool Playback" mode is selected then an extra button appears. This is called "Direct Action" and it toggles the direct action mode pool playback. The different Call Modes are described in the [Call Mode topic](/grandma2/key_pools_call_modes/). Pool playback is described in the [Playing back Cues topic](/grandma2/key_cs_playback/).

The Sequence Sheet displays each sequence as a row. The columns are the settings that belongs to the sequence. Everything with a gray background can be changed.

- **No.:**\
  This is the sequence number. It cannot be changed here - but the sequence can be moved in the sequence pool.
- **Name:**\
  This is the name of the sequence. It has the frame color from the pool. Editing the cell will allow you to change the name.
- **Track:**\
  Here you can turn On or Off tracking for the sequence. Tracking is described in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/).
- **Release Firststep:**\
  Here you can turn On or Off "Release First Step". This is related to tracking - follow link above.
- **CueZero:**\
  Editing this gives you the pop-up used to select the Cue Zero mode. Read more about Cue Zero in the [Cue Zero topic](/grandma2/key_adv_seq_cue_zero/).
- **CueZero Extract:**\
  The Cue Zero Extract can be turned On or Off. It is related to the Cue Zero function - follow link above.
- **Input Filter:**\
  Here you can set an input filter. Filters and sequences are described in the [Apply worlds and filters to executors and sequences topic](/grandma2/key_wfm_apply_to_exec_seq/).
- **Timecode Slot:**\
  Here you can select a timecode slot for the sequence. Read the [Timecode section](/grandma2/key_timecode/) to learn more about using timecode with sequences.
- **Info:**\
  Here it is possible to add multiple lines of information to the sequence.
- **Forces Pos. mode:**\
  The entire sequence can have a forced position mode. This is relevant when working with a mix of Pan/Tilt values and XYZ values. Read more about this in the [XYZ and Pan/Tilt in Sequences topic](/grandma2/key_xyz_pan_tilt_in_cues_sequences/).
- **Used Count:**\
  This is the number that indicates the amount of executors that have the sequence assigned. This is not a setting you can change here - it is for information.

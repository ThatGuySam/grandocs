---
title: "Apply worlds or filters to executors and sequences"
description: "Worlds and filters can be assigned to Executors or Sequences."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_apply_to_exec_seq.html"
scrapedAt: "2026-06-12T21:28:18.594Z"
---
Worlds and filters can be assigned to Executors or Sequences.

If you have come to this page without knowing about worlds and filters, then you should read the [What are Worlds topic](/grandma2/key_wfm_what_are_worlds/) and [What are Filters topic](/grandma2/key_wfm_what_are_filters/).

## Playback Filter

Assigning a world or filter to an executor will use the world or filter when the executor is running the sequence.

For example a sequence might have stored colors and dimmer values. But if you assign a filter that does not allows color information to pass to the executor with the sequence then it will not execute the color information but only the dimmer information. It does not remove the color information from the sequence.

This is called a **Playback Filter**. Playback filters only works by attributes not by layers (Value, Value Times and Effects).

For Worlds this means that if you have applied a world that only contains the Effect layers, then everything is still played back. But a world that only have Fixture 1, then only the values for Fixture 1 will be played back.

For Filters it means that applying a filter that only contains the timing layers will still play back everything. Using Filters allows you to filter what attributes are played back from the executor.

## Input Filter

Assigning a world or filter to a sequence will use that world or filter when you add (store or update) values to the sequence.

For example a sequence might have a world assigned that only contains some fixtures. In your programmer you have values for those fixtures but also other fixtures. If you store a new cue in the sequence then you will only store the values for the fixtures in the assigned world.

This is called an **Input Filter**.

Since the Input Filter is applied to the sequence then it is also applied at all the executors that uses this sequence.

## []()Assigning Worlds and Filters

You can assign the world or filter using the Assign key (read more below) or by opening the assign menu of a relevant executor.

You can open the Assign menu by pressing Assign followed by any key on the relevant executor. Now make sure you have selected the Options button on the right side of the menu. It could look like this:

![](/img/grandma2/menu_assign_options_v3-2-affa48.png)

_Assign Menu - Options_

This menu contains a lot of settings and options. The two we are interest in are the two bottom buttons in the Playback column and the Tracking Column.

Tapping one of these will open a **Select Playback Filter pop-up** or **Select Input Filter pop-up** - respectively. It could look like this:

![](/img/grandma2/popup_select-playback-filter_v3-3-7df947.png)

_Select Playback Filter pop-up_

This will list all the Worlds and Filters in your show file. At the top is also the "No Filter" option - this allows you to remove a playback or input filter.

When you have set up your filters to your linking, then you can close the assign menu.

 

You can also assign the filters directly using the Assing key.

### Playback Filter:

1. Have the World or Filter pool visible.
2. Press the Assign key.
3. Tap the World or Filter you want to assign.
4. Press an executor button on the executor where you want to assign the world or filter.

### Input Filter:

1. Have the World or Filter pool visible.
2. Have the Sequence pool visible
3. Press the Assign key.
4. Tap the World or Filter you want to assign.
5. Tap the sequence you want to use the world or filter.

 

You can of coarse also use the command line: Assign Filter 7 Sequence 8

 

 

You can see in the mini executor if one or both of the filters are applied. It is a marking of ether the executor number (Playback Filter) or sequence number (Input Filter).

Read more in the [Sequence mini executor topic](/grandma2/key_cs_sequence_mini_executor/).

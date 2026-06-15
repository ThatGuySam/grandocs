---
title: "Cues and Sequences"
description: "Fixture values can be stored in Presets or Cues."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_sequence.html"
scrapedAt: "2026-06-15T18:25:24.552Z"
pagefind: false
---
Fixture values can be stored in [Presets](/grandma3/2-3/presets/) or **Cues**.

Cues are organized in **Sequences**.

[Executors](/grandma3/2-3/executor/) can control and playback sequences. The sequence is played back from the sequence pool. The executors are handles for the sequence.

The sequences are all in the **Sequence Pool**. This is created like any other window - see more in the [Add Window topic](/grandma3/2-3/wvm_add_window/).

![](/img/grandma3/2-3/window_sequences-pool_v2-3-d381ee.png)

_Sequence pool with sequence 1 running a cue_

The sequence contains information about the cues and how to transition from one cue to another.

Cues can contain fixture values (sometimes called "hard values"), references to presets, and recipes. Read the [Store Cues topic](/grandma3/2-3/cue_store/) to learn about making cues.

All cues have a minimum of one step. If there is more than one step, then it is a [Phaser](/grandma3/2-3/phaser/). Follow the phaser link to read about multi-step cues.

Cues have **Cue Parts**. All values are actually stored in the parts. All cues automatically have part 0. Other parts can be created, but it is not necessary. Creating several parts allows for the separation of values into different sub-cues. The parts can have different timing or properties, but parts are connected to the primary (parent) cue. This means that all the cue parts in a cue trigger together with the primary cue.

The cues in a sequence can be seen in a **Sequence Sheet**. Read more about looking at the sequence in the [Look at Cues and Sequences topic](/grandma3/2-3/cue_sequence_sheet/).

Sequences have a lot of different settings. Read the [Sequence Settings topic](/grandma3/2-3/cue_sequence_settings/) for more information.

## Executor Style

The sequence pool objects can be presented in a different style called **Executor Style**.

The same pool shown above can look like this:

![Update this description text.](/img/grandma3/2-3/window_sequences-pool_executor-style_v2-3-95eb93.png)

Sequence Pool using Executor Style

It is a setting for the entire pool, not for the individual pool objects. It can be changed in the** Pool Settings**, which can be accessed by tapping the black MA logo in the upper left corner.

Each sequence pool object shows up to three cues. If there is an active cue, it is in the center with a blue background. If there are no active cues, the center cue is the first cue in the sequence.

This style makes the pool object look similar to how it looks on the executor labels. Learn more in the [What are Executors topic](/grandma3/2-3/executor/).

See the [Common Window Settings topic](/grandma3/2-3/wvm_settings/#h2__522911071) for the other pool settings.

 

## Pool Action and Object Action

A sequence pool has a pool action for the pool objects. The individual sequence pool objects also have an object action. This action is performed when the sequence is tapped in the pool without a (relevant) keyword in the command line.

The object action is used if the **Use Object Action** is active in the **Sequence Pool Settings** (link below).

The defined pool or object action is performed when the sequence is tapped in the pool without a (relevant) keyword in the command line.

A small icon in the upper right corner of the pool title object indicates the selected pool action. If **Use Object Action** is activated in the settings, a small hand with an index finger icon ![](/img/grandma3/2-3/icon_clicking_hand_14_v2-3-cc0afd.png) will be displayed next to the pool action. See the example image below.

A big icon is added to the pool object when **Use Object Action** is activated. The pool object is grayed out if the object action is set to **None** (see sequence 10 in the example below). There is no icon displayed if the object action is set to **Pool Default **(see sequence 11 in the example below).

![The sequence pool showing the different object action overlays.](/img/grandma3/2-3/img_sequence-pool_object-actions-overlay_v2-3-358e48.png)

Example of the sequence pool with pool objects assigned all the possible object actions.

The pool action is set in the **Sequence Pool Settings**. This is described in the [Common Window Settings topic](/grandma3/2-3/wvm_settings/#h2__522911071).

The object action is set in the object editor described in the [Sequence Settings topic](/grandma3/2-3/cue_sequence_settings/).

## Reference

If a sequence is referenced somewhere, it gets a small reference icon (![](/img/grandma3/2-3/icon_referenced_12_v1-8-2cebf8.png)). Referenced means that it is used or assigned somewhere. The [Info window](/grandma3/2-3/si_info_window/) can show where an object is referenced.

## Filters

The sequence can have a world or a filter assigned as an input filter and an output filter.

If there is an input filter, there is a small icon (![](/img/grandma3/2-3/icon_input-filter_12_v1-7-9232b8.png)) in the pool object. The input filter only allows the data in the world or filter to be stored in the sequence.

If an output filter is assigned, the pool object has a small icon (![](/img/grandma3/2-3/icon_output-filter_12_v1-7-72432b.png) ). The output filter allows only the fixtures and attributes in the world or filter to be played back from the sequence.

See the example image at the top. Sequence three has both an input and output filter assigned, and this is a combined filter icon (![](/img/grandma3/2-3/icon_input-output-filter_12_v1-7-dd6968.png)).

Read more about filtering sequences in the [Worlds and Filters section](/grandma3/2-3/worldfilter/).

## Shared Data

Two sequences can be connected and share the cue data. If a sequence shares data with another sequence, then it has a small icon (![](/img/grandma3/2-3/icon_shared-data_v0-1-45b927.png)) in the pool object. See sequences two and three in the example image above.

Shared data means that the cue content and the cue settings (for example, fade times) are the same. Changing one of the two sequences will also change the other sequence. For example, creating cues, changing cue content, or deleting cues.

The sequence settings can be different. Different executors can control the different linked sequences and playback different cues in the two (or more) linked sequences.

This can be useful if, during rehearsal, a video programmer and a lighting programmer want to work with one sequence but must be able to run different cues. The relevant input and output filters can be assigned to the two shared sequences. Two different executors can be assigned to control the two linked sequences. Now, one sequence can playback and store video data, and the other can run and store light data. All values are stored in the same linked sequence. So when the show is ready, an operator can remove the filters and just playback one sequence with all the data.

Subtopics

- [What is Tracking](/grandma3/2-3/cue_tracking/)
- [Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/)
- [Content Sheet](/grandma3/2-3/cue_content_sheet/)
- [Sequence Settings](/grandma3/2-3/cue_sequence_settings/)
- [Store Cues](/grandma3/2-3/cue_store/)
- [Update Cues](/grandma3/2-3/cue_update/)
- [Copy Cues](/grandma3/2-3/cue_copy/)
- [Cue Recipes](/grandma3/2-3/cue_recipe/)
- [Store Settings and Store Preferences](/grandma3/2-3/cue_store_settings_preferences/)
- [Play Back Cues](/grandma3/2-3/cue_playback/)
- [Move In Black](/grandma3/2-3/cue_mib/)
- [Cue Timing](/grandma3/2-3/cue_timing/)
- [Renumber Cues](/grandma3/2-3/cue_renumber/)
- [Delete Cues](/grandma3/2-3/cue_delete/)

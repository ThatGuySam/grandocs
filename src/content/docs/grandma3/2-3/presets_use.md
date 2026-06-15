---
title: "Use Preset"
description: "Presets are often used for live playback or as building blocks in cues."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/presets_use.html"
scrapedAt: "2026-06-15T18:25:23.809Z"
pagefind: false
---
Presets are often used for live playback or as building blocks in cues.

## Calling Preset Into the Programmer

The first step is to select the desired fixtures and then call the preset into the programmer.

The workflow is the same for every type of preset (MAgic, Recipe, Multistep, standard single step, etc.)

If the programmer does not have a fixture selection and a preset is tapped, then the first tap selects all the fixtures that can use the preset. In this case, it works like a group.

Tapping a preset with a fixture selection in the programmer calls the preset if it is valid for the selected fixtures.

|                                            |                                                                                                                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                         |
|                                            | Please be aware that the **Default Pool Action** could be changed. This text assumes the factory default **SelFix/At** action. Learn more about default pool action in the [Windows Settings topic](/grandma3/2-3/wvm_settings/). |

Timing values can be stored together with attribute values in the preset, and calling a preset that includes timing information calls the values into the programmer using the preset timing.

Calling presets that only contain timing values call the timing values into the timing lavers of the programmer.

Another way to use timing with presets is the **Programmer Time** master. Learn more about the master in the [Time Control](/grandma3/2-3/masters_grand_time/) topic.

Presets with stored timing values have a higher priority than the **Programmer Time** master, and the stored timing will be used when the preset is called.

|                                                    |                                                                                                                                                                                                    |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                                                                                                                                                                              |
|                                                    | Calling a MAgic preset into the programmer will extract the data and not reference the preset. It is recommended to use MAgic presets in combination with recipes to maintain referenceable data.  |

## Presets Running from Executors

Presets can be assigned to executors using the [Assign keyword](/grandma3/2-3/keyword_assign/) or the Assign menu. Learn more about this in the [Assign Object to an Executor topic](/grandma3/2-3/executor_assign/).

If the preset uses global or universal data, the executor button should use the **At** command to call the preset values.

|                                                  |                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                          |
|                                                  | Using the At command on presets assigned to executors does not playback the values from the executor. The values are called into the selected fixtures in the programmer just like described above - if the preset is valid for the fixture selection.  |

Other playback commands (like Go+, Toggle, Flash, etc.) are relevant for presets with Selective data. This also means that presets with selective data can be played back from the preset pools using, for instance, a Go+ command.

Opening the Edit Setting tab of an executor's assign menu with a preset assigned offers some of the same settings as for sequences. For more information on playback settings, see the [Sequence Settings topics](/grandma3/2-3/cue_sequence_settings/).

Edit the general preset playback settings in Menu - Preferences and Timing - Preset.

The **OffFade** setting of preset playbacks determines the fade time when switching off a selective preset playback.

## Store Presets in Cues

When a preset is in the programmer, it can be stored in cues. Learn more about storing cues in the [Store Cues](/grandma3/2-3/cue_store/) topic.

A reference to the preset is stored for the specific fixture attributes. This means that the value stored in the preset is not stored in the cue, but a reference to the preset is stored. So if the value stored in the preset is changed after the cue is stored, then the cue still looks in the preset to get the value when the cue is played back, and the values in the preset will be used.

Be aware that the **Absolute** and **Relative** value layers are connected to the Fade and the Delay layers. Individual fade and delay times for an attribute use the Fade and Delay layers. Storing a value in an attribute's absolute or relative layer in a preset can also add values from the fade and delay layers.

This means that if a preset contains absolute or relative values, it also connects to possible values in the fade and delay layers. If the fade or delay values are later added, changed, or updated, this change will be reflected in the cue referencing the absolute or relative value.

Fade and Delay values connected to an absolute value has a higher priority than fade and delay values connected to a relative value. For instance, if two presets are called, each with fade and delay values, but one is for absolute values, and the other is for relative values.

The phaser layers (**Speed**, **Phase**, **Measure**, **Accel**, **Decel**, **Transition**, and **Width**) are also linked. Adding one of these layers in a preset effectively adds all the phaser layers.

This is very important to keep in mind when updating the preset information.

If attributes are added to or deleted from the preset after it is used in a cue, the stored cues referencing the preset need to reflect this new change, so the preset needs to be recast. This can be done using the [Recast](/grandma3/2-3/keyword_recast/) keyword or the [Edit Preset Object pop-up](/grandma3/2-3/presets_edit/). Recasting a preset removes or adds attributes to the fixtures in the cue.

The recast function only recasts presets to cues where a preset reference exists for the absolute layer.

When presets are used in cues and later deleted, the preset values are transferred to the cue (hardcoded values in the cue).

## Assign Presets to Attributes in the Tracking Sheet

When a value is edited in the [Track Sheet](/grandma3/2-3/cue_sequence_sheet/#track_sheet_mode), the available presets can be chosen in the [Calculator](/grandma3/2-3/ws_calculator/#track_sheet_calculator).

## Extract Preset Values

Preset values can be extracted to the selected fixtures. The preset needs to be valid for the selected fixtures. The [Extract](/grandma3/2-3/keyword_extract/) keyword is used for this.

The values stored in the preset will be pulled into the programmer without a reference to the preset. The values are then like any other typical programmer values.

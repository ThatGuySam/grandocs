---
title: "Presets"
description: "A preset can hold information about attribute and timing values for a selection of fixtures and may be referenced and used in cues, recipes, or in the programme"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/presets.html"
scrapedAt: "2026-06-12T21:24:51.527Z"
---
A preset can hold information about attribute and timing values for a selection of fixtures and may be referenced and used in cues, recipes, or in the programmer.

The principle of presets is to store a labeled reference, rather than the actual value itself. Or use presets for busking, where presets are called into the programmer or played back on the fly.

Updating the preset means the cues or recipes do not need to be updated, since they reference the preset, not its content.

|                                            |                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                            |
|                                            | The images and mentions of pool colors in this topic use the colors from the default Color Theme. The pools can have different default colors. Each feature group pool, all the "All Preset" pools, and the Dynamic preset pool can have their own default pool color. Learn more in the [Color Theme topic](/grandma3/2-4/ws_colors_color_theme/).  |

Presets are marked with a cyan marker. This marker is visible on cues that use presets and on the values themselves, for instance, in the tracking sheet or the fixture sheet. Read more in the [Marker topic](/grandma3/2-4/ws_colors_markers/).

|                                            |                                                                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                 |
|                                            | Using presets when programming facilitates the work, especially when working with a show which is used in different locations and for various customers.  |

## Preset Pools

Presets are stored in pools. There are pools for each feature group. These pools have a default input filter that only allows the values for that feature group to be stored in the preset pool. There are also five preset pools called "All 1" to "All 5". These do not have a default input filter and can be used to store any attribute values. Learn more about the pools in the [Preset Pool topic](/grandma3/2-4/presets_pools/).

## []()Preset Modes

Preset modes are used when the preset is stored (or updated) and when the preset is called. Regardless of how the preset is stored, it can be called using a different mode.

There are three different preset modes: Selective, Global, and Universal.

Each preset has letters showing the preset mode and the stored values. It can be one or up to three letters showing the relevant modes. For instance, a preset stored as Selective and set to Selective mode will only display an "S", while a stored preset containing Global and Selective values, but set to Universal mode, will display "UGS". More letters only appear when the stored data is from a higher level than the preset mode is actually set to.

**Example:**

![](/img/grandma3/2-4/img_preset_mode-markers_v2-4-9c8b70.png)

Preset 4 has all three modes

The three modes are:

- **Selective (S)**:\
  The data is selective and valid for each fixture with active stored data.
- **Global (G)**:\
  The data is global data. One fixture from each fixture type has data that is valid for all the fixtures of that type. If there are several fixtures of the same fixture type but with different values, then the global data will be determined by the fixture with the lowest ID. Selective data will be added for the other fixtures that have divergent data. The preset will indicate both Global and Selective data.
- **Universal (U)**:\
  Data will be added as universal data and will be valid for all fixtures that contain the stored attributes.

When a preset is stored or updated, there are three more options:

- **Default**:\
  When updating or storing into an existing preset, the preset mode of the preset or preset pool will be respected.\
  In the case of global preset mode, selective data will be added to the preset when at least one fixture that can use the preset is active with new values.\
  When creating a new preset, Default mode will take the mode defined by the pool and apply the rules for that mode.
- **Force Global**:\
  Using this mode during the update process will remove any selective data from the preset.
- **Force Universal**:\
  Using this mode during the update process will remove any selective and global data from the preset.

Force Global and Force Universal act differently depending on whether the preset is stored or updated. Learn more in the [Create New Preset](/grandma3/2-4/presets_create/) and [Edit or Update Preset](/grandma3/2-4/presets_edit/) topics.

Each preset can store all three modes or some combinations of modes.

Each preset pool has a setting for a default mode. This mode is indicated by one of the letters in the upper right corner of the pool title field.

![](/img/grandma3/2-4/img_preset_mode-marker-title-field_v2-4-c8219a.png)

Position preset pool title field with Selective as the default mode for the pool

This default can be used when storing the preset or a different mode can be used.

Learn more in the [Create New Presets topic](/grandma3/2-4/presets_create/) and the [Use Preset topic](/grandma3/2-4/presets_use/).

## Absolute and Relative Values

Presets can store absolute and/or relative values. Relative values are often used with multistep presets but it is not limited to this use.

**Example:**

![](/img/grandma3/2-4/img_preset_absolute-relative-markers_v1-7-9c9260.png)

Preset with absolute, relative, and both types of values

Presets with only absolute values do not have a marker. The absolute marker is a square dark red marker with rounded corners. Relative values are indicated by a dark pink square with rounded corners. Presets can contain both absolute and relative values - they will have both markers in the pool object.

Learn more about the different programmer layers in the [What is the Programmer topic](/grandma3/2-4/operate_programmer/). Learn more about the markers in the [Markers topic](/grandma3/2-4/ws_colors_markers/).

## Timing Values

Timing values can be stored in presets. The timing layers are Fade and Delay.

**Example:**

![](/img/grandma3/2-4/img_preset_fade-delay-markers_v1-7-6e7d7e.png)

Preset with fade, delay, and both types of values

The Fade marker is green. The Delay marker is orange.

Timing values can be combined with absolute and relative values.

The timing preset can be used when calling values into the programmer. 

A timing-only preset cannot be stored or referenced in a cue. Suppose an attribute value (absolute or relative) is called together with a timing-only preset and stored in a cue. In that case, the timing information is stored as individual timing without a preset reference.

Presets that contain both attribute values and timing values are stored in cues with a preset reference.

## []()Pool Action and Object Action

A preset pool window has a pool action for the pool objects. The individual pool objects can also have an object action. The object action is used if the **Use Object Action** is active in the **Preset Pool Settings** (link below).

The defined pool or object action is performed when the preset is tapped in the pool without a (relevant) keyword in the command line.

A small icon in the upper right corner of the pool title object indicates the selected pool action. If **Use Object Action** is activated in the settings, a pointing finger icon will be displayed next to the pool action. See the example image below.

A big semi-transparent icon is added to the pool object when **Use Object Action** is activated. The pool object is grayed out if the object action is set to **None** (see preset 10 in the example below). There is no icon displayed if the object action is set to **Pool Default **(see preset 11 in the example below).

![Example showing the different preset pool objects default action overlay.](/img/grandma3/2-4/img_preset-pool_object-actions-overlay_v2-4-295623.png)

Example of a dimmer preset pool with pool objects assigned all the possible default actions.

The pool action is set in the [Preset Pool Settings](/grandma3/2-4/presets_pools/#preset_pool_settings).

The object action is set in the object editor described in the [Edit or Update Presets topic](/grandma3/2-4/presets_edit/#h2__416715531).

The functions are also described in the [Window Settings topic](/grandma3/2-4/wvm_settings/#pool_action). Follow the links to learn more.

## []()Feature Group Indicator Bar

This bar is visible when a preset has attributes of two or more feature groups stored.

The bar is always visible on All presets.

![](/img/grandma3/2-4/img_preset_feature-group-indicator-bar_v2-4-3cb178.png)

Feature Group Indicator Bar at the bottom of the preset

The feature group indicator bar has a square for each feature group, displayed in white, gray, or red.

- **White**:\
  Indicates that values of attributes of the corresponding feature group are stored in the preset.
- **Gray**:\
  Indicates that no values of attributes of this feature group are stored in the preset.
- **Red**:\
  Indicates that at least one attribute of this feature group is not accessible at the moment. For example, when having a world with a limited set of attributes active.\
  The square also turns red when the currently selected world does not contain fixtures that can make use of the attribute data in the preset.

The order of the squares is similar to the order of feature groups in the encoder bar, from left to right:

- Dimmer
- Position
- Gobo
- Color
- Beam
- Focus
- Control
- Shaper
- Video

If a show file contains additional feature groups, more squares will be added automatically to the bar.

The bar can also be visible in [Worlds and Filters](/grandma3/2-4/worldfilter/).

## []()Embedded Presets

A preset can contain a link to a different preset. It is the same as cues storing a reference to a preset - just for other presets. This can be useful, for instance, when a show is built using a set of general presets and other presets are created using these as building blocks. 

**Example:**

In this example, there is a universal dimmer preset that has values for the universal fixture. This is used to create a new global preset for fixture types. This is again used to create a selective preset for only some fixtures. If the fixture type changes, then the global preset needs to be updated. The selective preset links to the global preset values and do not need to be updated. The universal value is unaffected by the fixture change as long as the fixture used to store the value still has the attribute.

![](/img/grandma3/2-4/img_preset_embedded-markers_v1-7-bfcbfb.png)

Preset 1 is used in an embedded preset. Preset 2 contains embedded data and is also used in a different embedded preset. Preset 3 contains embedded data.

The "source" preset has a downward pointing arrow that points to a line. This indicates that this preset is referenced by other presets (or cues). The preset with embedded data has an icon with an arrow and a line above to indicate that this preset uses referenced data. Presets with embedded data that is also referenced has the arrow and a line above and below the arrow.

If a new name is not defined, then the name is also referenced (referenced names are in square brackets). This means that changing the name of the source preset also updates the name of the new preset. Learn more in the [Create New Presets](/grandma3/2-4/presets_create/) topic.

Presets can be a part of a chain of embedded presets. If the chain's depth gets too long, a warning can be shown in the presets at the end of the chain.

![Update this description text.](/img/grandma3/2-4/img_preset_embedded-warning_v2-4-6c24c2.png)

Embedded preset with a warning

Preset with the warning can still work, but they might not update correctly if there are changes in the chain.

The depth of a preset can be seen in the [Info window](/grandma3/2-4/si_info_window/) or pop-up using the [ListReference keyword](/grandma3/2-4/keyword_listreference/).

## []()Recipe Presets

Presets can have recipe information. A recipe is one or more lines with information about a selection, value, MAtricks, individual fade, delay, speed, and phase values.

This information can be used to "cook" values into the preset or programmer. If the source information changes, the preset can be cooked again to reflect the changes. For instance, if a group is used in a recipe and it changes after the initial cooking, then the preset can be cooked again, and the changes will now reflect the group's changes.

A preset can be a **Recipe Template** that can be used to load the recipe into the programmer.

Learn more in the [Recipe Presets](/grandma3/2-4/presets_recipes/) topic.

**Example:**

![](/img/grandma3/2-4/img_preset_cook-markers_v2-1-4aa6f3.png)

Presets with recipe information

A small pot icon indicates a preset with recipes. Recipe Templates have a pot icon with an open lid.

Recipe presets can contain presets with recipes. There can be up to 10 levels of recipes within recipes.

A circular reference can be created between recipe presets. If that is the case, there is a small red infinity icon on the presets.

**Example**:

![Example showing the infinite icon on presets.](/img/grandma3/2-4/img_preset_infinite-marker_v2-4-f6c609.png)

Presets with infinite circular references

## []()MAgic Presets

MAgic presets are presets where value points in a range are defined. This range can then be applied to a dynamic selection of fixtures. For instance, two fixtures are stored in a MAgic preset with dimmer values of 0% and 100%. MAgic presets should be stored as a selective preset, but that does not mean that only the selected fixtures can use it - it only means that they contain values for a selection of fixtures. The MAgic preset uses the values to define the points in a range. A different fixture selection can be made and the range of values between the points is assigned to the fixtures when the MAgic preset is called into the programmer. These values are calculated based on the points and then taken into the programmer as hard values. There is no reference back to the MAgic preset.

There can be up to five defined points in the range (on each axis in the selection grid).

MAgic presets have a small wizard hat icon in the preset pool object

![](/img/grandma3/2-4/img_preset_magic-marker_v1-7-335308.png)

Position preset with MAgic information

**Example:**

A path needs to be defined to control a color range from blue to yellow. The wish is to have the range go through the red area in a CIE color picker - instead of going through white. Three fixtures are needed to define the range.

The first fixture is blue, the second is magenta, and the third is yellow. This is then stored as a MAgic preset. Now this range through three points can be used by multiple fixtures to create the desired path.

![](/img/grandma3/2-4/img_preset_magic_example-01_v1-4-d6cd49.png)

Result of a three-point MAgic color preset applied to multiple fixtures

Learn the details on how to create this MAgic preset in the [Create New Presets](/grandma3/2-4/presets_create/) topic.

## Multistep Presets

Presets can contain values in multiple steps (Phasers). Presets with only one step usually have the values stored in step one.  If a preset has multiple steps, it is called a multistep or Phaser preset.

Presets can also contain a Phaser Recipe, which is also a multistep preset.

**Example:**

![](/img/grandma3/2-4/img_preset_multistep-marker_v2-4-812520.png)

Multistep preset

Multistep presets have a three-dot icon to indicate multistep values. If the preset contains a Phaser Recipe, then it also has a purple pot icon.

## MAtricks Presets

MAtricks information can be stored in presets. Having MAtricks information in the programmer and storing a preset will add the MAtricks information into the preset (if the [Store Settings](/grandma3/2-4/cue_store_settings_preferences/) allow it).

**Example:**

![](/img/grandma3/2-4/img_preset_matricks-marker_v1-7-4ce4b5.png)

Preset with MAtricks information

The MAtricks icon is a green icon with nine dots in a grid.

## []()Filtered Presets

The entire preset pool has a default input filter - except the All preset pools. The default filter is on feature group preset pools. They automatically filter the attributes in the feature group.

The input filter can be changed to a custom filter for any preset pool, including the All presets. If the input filter is different than the default, then there is an input filter icon on the preset pool title field.

Besides an entire preset pool having an input filter, it is also possible to have an input filter on individual presets. Learn more about input filters in the [Edit Presets](/grandma3/2-4/presets_edit/) topic.

**Example:**

![](/img/grandma3/2-4/img_preset_filter-marker_v1-7-703555.png)

Preset with input filter

The input filter icon is a gray filter icon with a small right-pointed arrow.

---

## Extract Preset Data

The values stored in presets can be extracted from the preset. This will take the values stored in the preset and put them into the programmer. There will not be a link to a preset when the values are extracted.

This can be done using the [Extract keyword](/grandma3/2-4/keyword_extract/).

Different sources can be specified with the extraction.

If there is a selection of fixtures with references to presets in the programmer, then the entire selection can be extracted. The command for this would be: Extract Selection

Specific fixtures can be specified instead of extracting the entire selection. It can be single fixtures or a selection of fixtures: Extract Fixture \[Fixtures\_Numbers or "Fixture\_Names"]

Specific presets can also be extracted into the current selection of fixtures: Extract Preset \[FeatureGroup\_Number or "FeatureGroup\_Name"].\[Preset\_Number or "Preset\_Name"]

All presets from a cue can also be extracted to a selection of fixtures: Extract Cue \[Cue\_Number or "Cue\_Name"]

|                                            |                                                                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                 |
|                                            | When extracting by specifying a fixture, selection, cue, feature group, or attribute, presets must be active in the programmer for the desired fixtures.  |

When extracting embedded presets or phaser presets which have presets integrated into their steps, extract will call directly the values of the source presets.

Using the **/Single** option together with extract makes it possible to extract one level down in the hierarchy of the presets.

### Example

Create 2 color presets ("red" and "blue" presets) that are embedded into a different color preset ("odd/even red/blue"). The second color preset ("odd/even red/blue") is embedded into All preset 21.1 ("cool look").

Select some fixtures and apply the All preset ("cool look") to them.

Executing Extract Selection /Single calls the second color preset ("odd/even red/blue") into the programmer.

Executing Extract Selection /Single again calls the first color presets ("red" and "blue" presets) into the programmer.

When executing Extract Selection /Single a third time, the result is the same as using Extract Selection in the first step: The hard red and blue values without a preset link.

---

## Delay To Phase

Each preset can have a **Delay To Phase** setting turned On. The setting relates to phasers with delay values. 

When enabled, the phase calculation for each attribute begins as the values start to change at the end of the delay time. Because this delay timing may be different for different attributes or fixtures within a single preset, the resulting output may appear to include different phase offsets than originally stored within the phaser. For instance, multiple "waves" of the phaser appears to be running at the same time. Basically, each attribute starts the phaser when the delay ends, so each attribute is no longer in phase with the others.

When disabled, the phase calculation for all attributes starts when the preset is triggered, regardless of any individual delay times. Each attribute will join the phaser playback when its delay ends, but in sync with the running phase. This allows for more predictable, synchronized phaser playback, even with different individual delay times.

Learn how to change the setting in the [Edit or Update Presets topic](/grandma3/2-4/presets_edit/).

Subtopics

- [Preset Pools](/grandma3/2-4/presets_pools/)
- [Create New Presets](/grandma3/2-4/presets_create/)
- [Recipe Presets](/grandma3/2-4/presets_recipes/)
- [Use Preset](/grandma3/2-4/presets_use/)
- [Edit or Update Presets](/grandma3/2-4/presets_edit/)

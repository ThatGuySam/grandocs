---
title: "Store Settings and Store Preferences"
description: "There are some settings used when storing objects like cues, presets, and groups."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_store_settings_preferences.html"
scrapedAt: "2026-06-15T18:25:25.193Z"
pagefind: false
---
There are some settings used when storing objects like cues, presets, and groups.

Each user has their own preferred settings.

During the store, it is also possible to add option commands that will use a specific set of store settings.

In this topic, the settings regarding storing cues are described. Some of these settings will impact how other cues will respond. Elements regarding tracking are described in the [What is Tracking topic](/grandma3/2-3/cue_tracking/) and sub-topics.

## Temporary Store Settings

The store settings can be opened as a temporary version.

This is done by pressing and holding the Store key for approximately one second.

It appears as a pop-up on screen 1 (default location).

![The image shows the Store Settings pop-up.](/img/grandma3/2-3/popup_store-settings_v2-0-c4b2ba.png)

_Store Settings pop-up showing the current settings_

There are different areas with different settings: Data Source, Use Selection, If not empty, Presets, Cue, Grid, and Store.

In the title bar, there are three buttons. Tap Save Preferences to store the current settings as the new default user store preferences. Tap Load Preferences to load the stored user store preferences values into the store settings pop-up. The last button is used to [change the menu location](/grandma3/2-3/wvm_change_location/).

### Data Source

This defines the data source for what will be stored.

There are three different sources:

- **Programmer** (Default):\
  This will use the values in the programmer as the source. It takes the **Use Selection** and **Store** settings into account (read below).
- **Output**:\
  Uses the status of the current output from the console as the source. The output can be affected by masters and DMX profiles. The [DMX sheet](/grandma3/2-3/patch_dmx_sheet/) shows what the output actually is. The **Use Selection** setting is limited to **All For Selected** or **All** (Default).
- **DMX**:\
  This uses incoming DMX values as the source. It is only valid for DMX channels that have fixtures patched. The **Use Selection** setting is limited to **All For Selected** or **All** (Default).\
  When storing incoming DMX, only the values are stored that are not at the default of the fixture type. In addition, values that are at fixture type default will be stored into the sequence when the sequence contains already this attribute with a different value.

### Use Selection

This decides what values, from the source, will be used when storing.

- **Active For Selected**:\
  Stores all active attributes but only for the fixtures selected in the programmer. This is only available to the **Programmer** data source.
- **All For Selected**:\
  Stores all attributes of the selected fixtures.
- **Active** - (default for programmer source):\
  Stores the values that are active in the programmer. This is only available to the **Programmer** data source.
- **All** - (default for Output and DMX source)**:**\
  Stores all attributes for all fixtures.

### If Not Empty

This defines the store method used if values are stored into an existing cue.

- **Ask** - This is the factory default setting:\
  This means that none of the other options below are used and a pop-up asks the user what to do.
- **Overwrite**:\
  All existing data is deleted and the current source and selection are used to store new values.
- **Merge**:\
  This will merge the new values into the existing values. New values have a higher priority and will overwrite existing values.
- **Remove**:\
  This will remove the stored values for the attributes using the current **Use Selection** setting.
- **Release**:\
  A special release value is stored. The actual values in the source are not relevant, but the selection is used to define where the release value is stored. 

### Presets

These are the settings used when storing presets.

They are described in the [Create Presets topic](/grandma3/2-3/presets_create/) or in the other [Preset topics](/grandma3/2-3/presets/).

### Cue

There are two radio buttons here: Tracking and Cue Only.          

Values can be stored using the tracking principles or as Cue Only.

Learn more about **Tracking** in the [What is Tracking](/grandma3/2-3/cue_tracking/) topic.

Learn more about **Cue Only** in the [Cue Only topic](/grandma3/2-3/cue_tracking_cue-only/).

##### Protect from Tracking

This setting is called **Dimmer Cue Only**. It is relevant when the Cue mode is Tracking (see above). Toggling this setting On will store the dimmer values using Cue Only principles and other attributes as tracking (link about Cue Only and Tracking topics above).

##### Shield tracked values

The shield function can be used to protect tracked values in future cues. This setting is only relevant when the Cue mode is Tracking. The three options are explained in the [Tracking Shield topic](/grandma3/2-3/cue_tracking_shield/).

### Grid

There is one setting in this area. It is Merge Mode. This is relevant for all elements that store the fixture grid position - Learn more about the grid in the [Selection Grid topic](/grandma3/2-3/operate_selection/).

The **Merge Mode** is used when an object (including fixture grid position) is merged into another object of the same type. For instance, a group merged into another group or a preset merged into another preset.

There are two options that the button toggles between:

- **Append X**:\
  The fixtures are merged into an offset X position in the selection grid. The merged fixtures (source fixtures) are positioned after the last existing fixture (destination fixtures). They are appended to the existing fixture's X position.
- **Off**:\
  The fixtures are merged into the grid positions where they are originally stored.

### Store

This area only has one toggle button: **Look**. This can be turned On or Off.

When this is On, then all attributes for fixtures with a dimmer value above 0 are stored. If **Active For Selected** is selected and there are fixtures that have a dimmer level actively at 0% in the programmer, then only the dimmer value will be stored for these fixtures, even if other attributes are active in the programmer.

This can be combined with various settings for **Data Source** and **Use Selection**.

## Cue Preferences

There is a set of timing preferences used when cues are created. They can be seen and edited in the Menu -> Preferences and Timings.

Here are the general cue timings and the preset timings. Read more about these different timings and what they do in the [Cue Timing topic](/grandma3/2-3/cue_timing/).

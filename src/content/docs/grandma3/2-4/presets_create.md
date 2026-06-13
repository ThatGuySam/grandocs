---
title: "Create New Presets"
description: "Please read the general Preset topic and the Preset Pool topic before this topic to get an understanding of the presets and how they are organized."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/presets_create.html"
scrapedAt: "2026-06-12T21:24:51.548Z"
---
Please read the general [Preset ](/grandma3/2-4/presets/)topic and the [Preset Pool](/grandma3/2-4/presets_pools/) topic before this topic to get an understanding of the presets and how they are organized.

Creating and using presets requires some fixtures patched in a show file.

For more information on patching fixtures, see [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/).

When presets are stored, some defaults are used unless other choices are actively made.

Some of these choices are accessible in the **Store Options** pop-up. This is opened by keeping Store pressed for approximately one second. The pop-up has a section regarding the presets:

![](/img/grandma3/2-4/popup_store-options_presets_v2-4-55a8f0.png)

The preset section in Store Options pop-up

|                                            |                                                                                                                                                                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                    |
|                                            | Changing a setting here without saving this as the new preference only uses the changed setting for the next store action. Learn more about it in the [Store Options and Preferences topic](/grandma3/2-4/cue_store_settings_preferences/).  |

Read about [**Embedded**](/grandma3/2-4/presets_create/#embedded) below.

**MAtricks** allows storing MAtricks settings in the preset.

**Keep Activation** means that when the preset is stored, the newly created preset is active in the programmer and ready to be stored in, for instance, a cue. Turning this setting Off stores the preset but leaves the values as inactive in the programmer.

**Preset Mode** is the last of the preset options in the temporary store options pop-up. The preset pool has a default setting, but a different mode can be chosen by tapping Preset Mode until it has the desired mode. Learn about the presets modes in the [Presets](/grandma3/2-4/presets/) topic and the [Preset Pools](/grandma3/2-4/presets_pools/) topic. See examples of storing using the different modes [below](/grandma3/2-4/presets_create/#h2__967108713).

## []()Input Filter

The I**nput Filter** setting in the store options determines whether input filtering in preset pools is used. If this option is active, then it is only possible to store attribute values inside the preset pools if the filter allows it. If the input filter setting is empty, a feature group filter is applied to the relevant feature group preset pools. This means that only attributes of the corresponding feature group can be stored in the preset pool. For instance, pan attributes can be stored in the Position preset pool but not in the Color preset pool.

All preset pools do not have any default feature group filtering. Any attribute can be stored, regardless of the Input Filter setting in the store options.

Custom filters and worlds can be assigned to the preset pool or individual presets using the preset pool settings or individual preset settings. Filters and worlds can also be assigned using the following syntax: Assign Filter \["Filter\_Name" or Filter\_Number] At Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number]. Substitute filter with world if a world needs to be assigned as an input filter.

Learn more about filters and worlds in the [Worlds and Filters](/grandma3/2-4/worldfilter/) section. Learn about the preset pool settings in the [Preset Pools](/grandma3/2-4/presets_pools/) topic.

## Simple Static Preset

Storing a preset with simple static values is very easy:

1. Select some fixtures.
2. Give some of the fixture attributes a value in the programmer.
3. Store this in the relevant empty pool object.

This is the general workflow.

If the values in the programmer are allowed to pass the input filter (read above), they are stored in the preset.

The best way to work with presets is to have the desired preset pool available on a touch screen. The pool can then be tapped to store and call the presets.

If it only contains values in **step** one and does not have recipe information, it is considered a static preset, which means that the values do not change dynamically or by updates to other presets. Read the [Phaser]() topic to learn what the steps are, and the [Recipe Presets]() topic to learn about recipes in presets.

## Global Preset Data

The global data is stored on real fixtures within the patch.

When storing new global presets, the global data is automatically created within the new preset. When all data for the fixture type is the same, the fixture with the lowest ID, from the stored data, is used to hold the global data within the preset.

Each fixture type has its own global data value, allowing the global value to be adjusted per fixture type.

When selective data is added to the preset for one of the fixtures that holds the global data or when the fixture is deleted from the show, the global data is moved to the first patched fixture for the fixture type. If the global data was held by the first fixture before, it is moved to the next patched fixture of this fixture type.

When editing a preset with global data, the fixtures with the global data in the programmer will display a yellow square marker in the top right corner of the attribute cell within the fixture sheet.

![](/img/grandma3/2-4/img_preset_-20global_edit-example_v2-4-38d371.png)

Example showing a preset with fixture 1 holding global data and fixture 3 holding selective data.

|                                                  |                                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                         |
|                                                  | When converting old show files from grandMA3 v1.5 or prior to grandMA3 v1.6 or later, the data from the global fixture type object will be migrated to the first patched fixture of the same fixture type that is not already holding selective data.  |

The method to determine the global data across several attributes considers all attributes of the same activation group. This will result in taking all attributes of the same activation group of one fixture and not taking the different attributes from different fixtures.

## Universal Preset Data

Storing a universal preset will store data for the first active fixture when the preset was stored.

Universal data stored in presets can be used by any fixture that has the stored attribute.

Universal data stored in a preset has two yellow square markers in the top right corner of the attribute cell within the fixture sheet.

![Update this description text.](/img/grandma3/2-4/img_preset_-20global_edit-example-2_v2-4-96233e.png)

Example showing a preset with universal dimmer data stored.

|                                            |                                                                                                                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                  |
|                                            | When calling universal color, it will be transformed through the color engine. If, for instance, a 7-color LED is used to create a color and call that data universal, a similar color will be called on an RGBA fixture.  |

## []()Embedded Preset

The concept of embedded preset is explained in the [Presets](/grandma3/2-4/presets/) topic.

This is the workflow:

1. Select the desired fixtures.
2. Recall an existing preset to load it into the programmer.
3. Store a new preset with the **Embedded** store option active.

A recipe preset could be an alternative to an embedded preset. Learn more about them in the [Recipe Presets](/grandma3/2-4/presets_recipes/) topic.

## Preset Mode Conflict

When a preset is stored, the system analyses the programmer data. If the system detects a discrepancy between the programmer data and the preset mode used for the store process, then a pop-up appears. The pop-up informs about the discrepancy, and it suggests a different preset mode.

![Update this description text.](/img/grandma3/2-4/popup_preset-mode-conflict_v2-4-16911b.png)

Example when storing a Global preset with programmer content suggesting it should be Selective.

The pop-up adjusts the text to the relevant situation.

There are three buttons in the pop-up. The left one is the preset mode defined by the store settings, the middle one is the suggested mode, and the right button cancels the store operation.

 Select the appropriate option to proceed.

## Store Selective Preset

1. Select one or more fixtures.
2. Give the fixture attributes some values in the programmer.
3. Press and hold Store until the **Store Settings** open.
4. Tap Preset Mode until the mode is **Selective**.
5. Tap the desired preset pool object - ensure it is valid for the attribute values.

## Store Global Preset

1. Select one fixture from one or more fixture types.
2. Give the fixture attributes some values in the programmer.
3. Press and hold Store until the **Store Settings** open.
4. Tap Preset Mode until the mode is **Global**.
5. Tap the desired preset pool object - ensure it is valid for the attribute values.

## Store Universal Preset

1. Select one or more fixtures or the universal fixture.
2. Give the fixture attributes some values in the programmer.
3. Press and hold Store until the **Store Settings** open.
4. Tap Preset Mode until the mode is **Universal**.
5. Tap the desired preset pool object - ensure it is valid for the attribute values.

## []()MAgic Presets

The concept of MAgic presets is explained in the [Presets](/grandma3/2-4/presets/) topic.

|                                                  |                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                              |
|                                                  | The MAgic presets only work if the stored fixtures have different grid positions on the relevant axes, and the best result is if they start at grid position 0 and the fixtures are next to each other. This does not need to match the real-world position; it is only for the individual positions between the fixtures.  |

|                                                  |                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                                                        |
|                                                  | Calling a MAgic preset in the programmer does not create a link to the preset. The fixture values are calculated based on the selection and stored as hard values. The only way to keep a reference to the MAgic preset is if the preset is used in a recipe. Learn more about recipes in the [Recipe Preset topic](/grandma3/2-4/presets_recipes/).  |

This is the general workflow for creating a MAgic preset:

1. Select all the needed fixtures.
2. Use Next to give the first fixture values to match the first point in the range.
3. Press Next to select the next fixture and give it values for the next point in the range.
4. Repeat step 3, if needed, to have a maximum of five fixtures (on each axis in the selection grid).
5. Select all the used fixtures using Set.
6. Store the preset in an appropriate preset pool.
7. Edit the preset settings and tap MAgic to turn the MAgic function On.

The new preset can now be used by as many fixtures as needed.

Learn more about editing the [Edit Presets topic](/grandma3/2-4/presets_edit/).

|                                                    |                                                                                                                                                                                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Known Limitation:**                                                                                                                                                                                                                                        |
|                                                    | A MAgic preset must be stored with selective data, as multiple points cannot be defined across universal or global fixtures. Existing MAgic presets can be used as global or universal. Learn more in the [Use Presets topic](/grandma3/2-4/presets_use/).   |

### Example:

A path must be defined to control a color range from blue to yellow. The wish is to have the range go through the magenta/red area in a CIE color picker - instead of going through white or the blue/green area. Three fixtures are needed to define the range.

**Requirement:**

- Patch several fixtures (10 or more) with color mixing possibilities.
- Create a view with the Special Dialog - Color Picker (in CIE mode) and an All preset pool.

Follow these steps:

1. Select three of the fixtures.
2. Turn the fixture intensity to 100%.
3. Press Next to select the first of the three fixtures.
4. Tap the blue area in the color picker.
5. Press Next to select the second fixture.
6. Tap the magenta area in the color picker.
7. Press Next to select the third fixture.
8. Tap the yellow area in the color picker.
9. Press Set to select all three fixtures again.
10. Press Store.
11. Tap an empty pool object in the All preset pool.
12. Use the [swipey menu](/grandma3/2-4/wvm_pool/#swipey) to select Edit Settings.
13. Tap MAgic to turn On the option and close the settings.

Now, there is a preset that looks something like this:

![](/img/grandma3/2-4/img_preset_magic_example-02_v2-1-86f407.png)

MAgic preset in the preset pool

14. Clear the programmer.
15. Select all the fixtures.
16. Tap the MAgic preset.

The result should look similar to this in the color picker:

![](/img/grandma3/2-4/img_preset_magic_example-01_v2-1-2ba259.png)

Result of the MAgic preset used on multiple fixtures

The dimmer values are not needed for this example; it just makes it easier to see the result.

## Multistep Preset

Multistep presets are presets that contain values in more than one step. It is explained in a little bit more detail in the [Presets](/grandma3/2-4/presets/) topic. For an explanation of steps, please read the [Phasers](/grandma3/2-4/phaser/) section.

With Phaser information in the programmer, a preset can be stored. This will then be a multistep preset.

|                                            |                                                                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                     |
|                                            | Presets can be used for more advanced functions with Recipes. Please read the [Recipe Presets topic](/grandma3/2-4/presets_recipes/) for more about recipes.  |

---
title: "Preset Pools"
description: "There is a preset pool for each Feature Group in the show. A show with no custom feature groups will have nine preset pools named after the default feature grou"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/presets_pools.html"
scrapedAt: "2026-06-15T18:25:23.636Z"
pagefind: false
---
|                                                  |                                                                                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                  |
|                                                  | If pools are new to you, please read the [Pool Windows topics](/grandma3/2-3/wvm_pool/) first.  |

There is a preset pool for each **Feature Group** in the show. A show with no custom feature groups will have nine preset pools named after the default feature groups. For instance, Dimmer. These pools can have a feature group filter besides the standard input filter (read more below).

|                                            |                                                                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                  |
|                                            | Create custom preset pools using Feature Groups. For more information, see [Feature Group](/grandma3/2-3/patch_attribute_feature_group/).  |

Besides the feature group preset pools, there are five "All" preset pools. These do not filter based on feature groups. The "All" preset pools can be labeled to match the needs. For instance, one of the pools could be used for storing multistep phaser presets or different parts of the show.

There is a unique preset pool called "Dynamic". This is not a preset pool in itself. It automatically changes between the feature group preset pools based on the selected feature group in the [Feature Group Control Bar](/grandma3/2-3/ws_eb_feature_group_control_bar/).

The preset pools are created like any other window in the user-defined areas using the [Add window pop-up](/grandma3/2-3/wvm_add_window/). They are all under the **Presets** tab:

![](/img/grandma3/2-3/popup_add-window_presets_v2-1-840275.png)

_Open the Presets_

The preset pools look and behave like many other pools, but small differences exist. Read more about pools in general in the [Pool Windows topics](/grandma3/2-3/wvm_pool/).

The default preset mode for the preset pool is indicated by a letter in the upper right corner of the pool title field. Read more about the preset modes in the [Preset topic](/grandma3/2-3/presets/) and below for information about setting the default.

There is a colored indicator bar at the top of each pool object. If nothing is selected, it is colored like the pool color. This color can be edited in the [Color Theme](/grandma3/2-3/ws_colors_color_theme/).

The pool object is dimmed if there is a selection, but none of the currently selected fixtures can use a preset. If a preset can be used by all the fixtures currently selected, then the colored bar is green. It is yellow if the preset is only valid for some of the selected fixtures. These are the default colors. They can be edited in the pool settings (see below).

![Example of a preset pool with a colored bar at the top.](/img/grandma3/2-3/window_pool_all4-preset_v2-2-517718.png)

Presets in the All 4 pool

The cyan number below the pool number is the number of fixtures currently using the preset. See preset 2 in the example image above.

## []()Preset Pool Settings

Enter the pool settings by tapping the MA logo in the pool title field.

This is an example of the preset pool settings.

![Preset Pool Settings pop-up showing all the settings for a preset pool.](/img/grandma3/2-3/popup_preset-pool-settings_v2-2-a99440.png)

Settings for the All 1 preset pool window

These are the settings for preset pool window:

- **Name**:\
  Some pools can be named, for instance, the five All preset pools. The other preset pools are named from the feature group.

- **Input Filter**:\
  This can be used to select an input filter for the entire pool. [Worlds and Filters](/grandma3/2-3/worldfilter/) can be used. An input filter blocks some elements. The blocked elements cannot be stored in the pool. Tap this to open an **Assignment Editor**. Here filters or worlds can be selected, or it can be set to Empty.

- **Show Empty**:\
  This toggle button can hide or show empty pool objects.

- **Appearance**:\
  The appearance is applied behind the pool objects.

- **Pool Columns**:\
  This defines the width for the pool objects. It does not change the size of the window. It defines how many columns of pool objects are in the window. If the window is wider than the number of columns, then the extra space is displayed as black (default color). If the window is smaller than the number of columns, the pool window can be scrolled horizontally. If the pool has a set width, then there is an icon (![](/img/grandma3/2-3/icon_pool-limited_12_v2-0-fc2d0c.png)) in the upper right corner of the title field.\
  The **Not Defined** value dynamically sets the width to match the window size even when the window is resized.\
  The **Take Current Width** sets the width to match the current size of the window. It does not dynamically change if the window is resized.

- **Display Mode**:\
  This is used to define what the pool object displays. It has the following options:

  - **Text and Symbol**:\
    Both the text (name) and symbol are shown on the pool object if they are different than the default values and not empty.
  - **Text**:\
    Only the pool object's name is shown. If the pool object only has the default name, it is not shown.
  - **Symbol**:\
    Only the symbol is shown. If no symbol is generated, then the pool object is empty.
  - **Auto**:\
    This results in only the symbol being displayed if a symbol exists. Otherwise, the text (name) is displayed.

- **Font Size**:\
  There are some different font size properties from 10 to 32. There is also a default property. This is the same as size 18. This simply changes the font size on the pool objects.

- **DataPool**:\
  This defines what data pool the pool window shows data from. This makes it possible to have pools showing objects from different data pools. For instance, a group pool window from the default data pool can be shown next to a different group pool window showing groups from a different data pool.

- **Pool Color**:\
  This is the color for the title button in the pool.\
  This only changes the color for this specific instance of the preset pool. The default colors for each preset pool can be changed in the [Color Theme](/grandma3/2-3/ws_colors_color_theme/).

- **Empty Color**:\
  This color is applied to empty pool objects.

- **Reset Colors**:\
  This resets the colors to the colors in the default color theme.

- **Preset Mode**:\
  This sets the default preset mode when storing into the entire pool. A different mode can always be specified when storing. Learn more about preset modes in the [Presets topic](/grandma3/2-3/presets/).

- **For All**:\
  This color is used when the preset can be used by all of the selected fixtures.

- **For Some**:\
  This color is used when some of the selected fixtures can use the preset.

- **For None**:\
  This color is used when the preset is not usable by any of the selected fixtures or when none of the selected fixtures are in the group.

- **Cue Part**:\
  By default, presets call their values into programmer part 0. Use this setting to specify a different programmer part for presets for this pool. This setting can also be changed for individual presets in the pool. Learn more about programmer parts in the [What is the Programmer topic](/grandma3/2-3/operate_programmer/).

- **Pool Action:**\
  This defines the default action executed when a pool object is tapped without a (relevant) keyword in the command line.\
  Pools can have some of the following actions (the available actions depend on the type of pool):

  - **At** (![Update this description text.](/img/grandma3/2-3/icon_at_preset_v2-2_15px-4729b6.png)):\
    When there is no selection in the programmer, tapping a preset does nothing. When the programmer has a selection, tapping it calls the preset into the programmer.
  - **Call**(![](/img/grandma3/2-3/icon_small_call_12_v2-1-604574.png)) - default action for filters:\
    This action calls the tapped pool object.
  - **SelFix/At** (![](/img/grandma3/2-3/icon_selfix_at_v2-2_15px-f0caae.png)) - default action for presets:\
    When there is no selection in the programmer, tapping a preset will select the fixture that can use the preset. Tapping it again calls the preset into the programmer.\
    When the programmer has a selection, tapping a preset the first time will call the preset into the programmer.
  - **SelFix/Extract** (![](/img/grandma3/2-3/icon_selfix_extrakt_v2-2_15px-5145b5.png)):\
    This value acts similarly to SelFix/At, but instead of calling the preset reference into the programmer, the values will be called extracted into the programmer.
  - **Select** (![](/img/grandma3/2-3/icon_execute_select_15_v1-9-31d8b8.png)) - default action for sequences:\
    Tapping the pool object selects it.
  - **Toggle** (![](/img/grandma3/2-3/icon_small_execute_toggle_10_v1-9-c580a3.png)):\
    Tapping a pool object activates it or switches it off, depending on its current state.
  - **Go+** (![](/img/grandma3/2-3/icon_small_execute_go_10_v1-9-4bf62d.png)):\
    Starts playback of the pool object or goes to the next cue in the sequence.
  - **Flash** (![](/img/grandma3/2-3/icon_small_execute_flash_10_v1-9-5c92fe.png)):\
    Flashes a pool object as long as it is tapped. Flash ignores fade times.
  - **Temp** (![](/img/grandma3/2-3/icon_small_execute_temp_10_v1-9-fcb760.png)):\
    Plays back a pool object as long the pool object is pressed. Temp respects the fade times.
  - **Top** (![](/img/grandma3/2-3/icon_top_15_v2-3-c3505c.png)):\
    Restarts the timecode pool object at the beginning.
  - **Pause** (![](/img/grandma3/2-3/icon_playback_pause_15_v1-9-3396e6.png)):\
    Pauses the timecode pool object. Tap again to play it back. 
  - **Off** (![](/img/grandma3/2-3/icon_off_15_v2-1-fb4a52.png)):\
    Stops the recording of the timecode pool object and pauses it when it is played back. 
  - **Goto** (![](/img/grandma3/2-3/icon_goto_v2-1-be1d1a.png)):\
    Opens a po-up to play back a specific cue from the sequence pool object. 
  - **Load** (![](/img/grandma3/2-3/icon_load_15_v2-1-4785fe.png)):\
    Opens a po-up to load a specific cue from the sequence pool object. 
  - **None **():\
    No action is triggered when tapping on the pool object. 

- **Use Object Action**:\
  When enabled, the selected object action is executed instead of the selected pool action. Pool windows with Use Object Action enabled, are marked with a (![](/img/grandma3/2-3/icon_clicking_hand_14_v2-3-cc0afd.png)). Pool objects indicate the selected object action setting with a light grey icon in the foreground of the object. If the object action is set to **None**, there is a gray overlay on top of the pool object.

- **2 Finger Edit**:\
  This toggle button enables the possibility to edit objects by using the two-finger gesture or right-clicking. 

The settings described above (except the preset mode) can also be set for individual presets. The individual preset settings have a higher priority than the preset pool setting.

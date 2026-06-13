---
title: "Common Window Settings"
description: "All windows have settings."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/wvm_settings.html"
scrapedAt: "2026-06-12T21:24:44.273Z"
---
All windows have settings.

The settings can be accessed by tapping the MA logo in the title bar or title field.

The settings vary depending on the window. The settings are organized in different sections, visualized by different tabs.

The **Display** section looks like this for the **Fixture Sheet**:

![This image shows an example of the window settings. The example is for the Fixture Sheet.](/img/grandma3/2-4/popup_fixture-sheet-settings_display_v2-0-6a2f4e.png)

_Fixture Sheet Settings - Display tab_

There are some common buttons in the settings title bar. The red Delete Window button deletes the window from the screen. The ![cross](/img/grandma3/2-4/icon_cross_v21-62dd5f.png) closes the settings pop-up. To show or hide buttons in the title bar, tap Edit Title Bar. See [Title Bar Configuration](https://help.malighting.com/grandMA3/2.2/HTML/wvm_title_bar_configuration.html) for more information. 

The Save button stores the current settings as a user preference. The Load button is used to load stored preferences. Read more [below](/grandma3/2-4/wvm_settings/#h2_35385864) to learn more about how to store and load preferences.

The number of tabs changes depending on the window. Some windows have a lot of settings; some have fewer.

Changing a setting does not close the settings pop-up.

Some settings open small selection pop-ups listing the different properties for the setting.

---

## Display / Sheet

This tab has settings regarding the way the window displays sheet information. The settings here vary a lot depending on the window. The settings that are special for a single window type are described in the topic about the window. Some of these settings are in a Display tab in the Phaser Editor some of the settings are in the Sheet tab.

The following is a list of the settings that are shared between two or more windows:

- **2 Finger Edit: \
**This toggle button enables the possibility to edit objects by using the two-finger gesture or right-clicking. 

- **#Columns:**\
  This input button sets the number of columns a sheet should display.

- **Adjust Columns:**\
  This On/Off button makes a sheet adjust the column width to match the window size and the number of columns.

- **Appearance:**\
  This button opens a **Select Appearance** pop-up that lists all the defined appearances and the possibility of creating a new appearance. Selecting one will apply that appearance to the window.

- **Auto Scroll:**\
  This On/Off button activates the auto-scrolling function. This will keep the active object visible in the window by scrolling the sheet or grid.

- **Channel Set**:\
  This setting defines the readout of values that are part of channel sets. It has three options:

  - **Value**:\
    Displays only the value.
  - **Value + Name**:\
    Displays the value and channel set name.
  - **Name**:\
    Displays only the channel set name.

- **Color Mode**:\
  This switches the color readout between RGB and CMY. The default value is to follow the setting in the [User Profile](/grandma3/2-4/user_settings/#h2_989550839). The user profile setting is shown between "<>".

- **Cue Only**:\
  This defines if the cue only function is On/Off when editing values.[](/grandma3/2-4/cue_tracking/)This setting is valid for the Sequence Sheet in Track Sheet mode and Content Sheet.

  The Sequence Sheet can be in "Track Sheet" mode where the attribute values are shown and can be edited. Learn more in the [Sequence Sheet topic](/grandma3/2-4/cue_sequence_sheet/#h2__1270272113).

  The Content Sheet shows the cue content. It can show the current, previous, next, or specific cue. The sheet also displays the attribute values, which can be edited in the sheet.\
  Learn more in the [Content Sheet topic](/grandma3/2-4/cue_content_sheet/).

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

- **Executors**:\
  This is an On/Off button that shows or hides the executors. If executors are hidden and labels are shown, they look like the executor labels in the Playback Bar on the letterbox screens.This setting is valid for the Playback and Xkeys windows.

  The Playback Window shows on-screen executors and their labels.\
  Learn more in [Executors topic](/grandma3/2-4/executor/#h2__770195381).

  The Xkeys Window shows an on-screen version of the XKeys buttons and labels.\
  Learn more in the [Playback Bar topic](/grandma3/2-4/ws_playback_bar/).

- **Feature Graphic**:\
  This shows or hides a small graphic next to each feature in the sheets showing the features.

- **Feature Sort**:\
  This On/Off button activates feature sorting. The selected feature is moved before the other features in the sheets showing features.

- **Fixed Target**:\
  This setting defines the sequence a sheet displays if the **Link Type** is **Fixed**. Tapping this setting opens an **Assignment Editor** pop-up where a sequence can be selected.

- **Fixture Appearance**:\
  This defines how the appearance of the fixtures is shown in the sheets. There are three options:

  - **None**:\
    The fixture appearance is not shown.
  - **Enabled**:\
    The appearance of the fixture type is shown.
  - **Graphic**:\
    The appearance is shown with a colored background to match the output.

  This is valid for the Fixture Sheet and Content Sheet.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Content Sheet shows the cue content. It can show the current, previous, next, or specific cue. The sheet also displays the attribute values, which can be edited in the sheet.\
  Learn more in the [Content Sheet topic](/grandma3/2-4/cue_content_sheet/).

- **Fixture Graphic**:\
  This defines which graphics are displayed in front of the name column in sheets showing the fixture graphic. Resizing the name column to a very small size will hide the graphic.\
  This setting has the following options:

  - **None**:\
    No graphic is shown.
  - **Flip**:\
    Adds the flip indicator for fixtures with position attributes on the left side of the **Name** column.
  - **Simple**:\
    Adds a simple square graphic indicating combined color and dimmer values next to the flip indicator in the **Name** column.
  - **Gobo**:\
    Adds a gobo image on the simple graphic. It only displays the gobo of one gobo wheel at a time. Gobo wheels in ascending order define which gobo is displayed. For example, when Gobo 1 is set to open, then the gobo of Gobo 2 is displayed.

- **Fixture Sort**:\
  This On/Off button activates the sorting of fixtures. The fixtures are sorted in the selection order to the top or left hand side of the sheet showing the fixtures.

- **Font Size**:\
  This selects the font size in the window. It is a swipe button that opens a list of sizes from 10 to 32. There is also a **Default** property. The default is the same as size 18.

- **Frame Readout**:\
  This defines the frame readout for this window. It can be used to overwrite the default set in the [user profile](/grandma3/2-4/user_settings/#time_frame_readout).

- **Follow Preview: \
**When enabled and preview is disabled, then the live output is displayed. When both are enabled, then the preview output is displayed. When disabled, the live output is always displayed. 

- **Labels**:\
  This is an On/Off button that shows or hides the labels. This setting is valid for the Playback and Xkeys windows.

  The Playback Window shows on-screen executors and their labels.\
  Learn more in [Executors topic](/grandma3/2-4/executor/#h2__770195381).

  The Xkeys Window shows an on-screen version of the XKeys buttons and labels.\
  Learn more in the [Playback Bar topic](/grandma3/2-4/ws_playback_bar/).

- **Layer:**\
  This selects which layer is displayed in the window. It is a swipe button that opens a list of the layers. A special property is **Auto**. This property makes the window follow the selected layer in the [Encoder Bar](/grandma3/2-4/ws_encoder_bar/).

- **Layer Toolbar**:\
  This On/Off button shows or hides a [layer toolbar](/grandma3/2-4/ws_eb_encoder_toolbar/) at the bottom with the different Layers.

- **Link Type**:\
  This setting defines which sequence is shown in the sheet. \
  There are three different link types. The options are:

  - **Fixed**:\
    The sheet displays the information from a specific sequence. The selection is made in the Sheet Settings. Read about the **Fixed Target** setting above. It can also be set using the [Assign](/grandma3/2-4/keyword_assign/) and [Sequence](/grandma3/2-4/keyword_sequence/) keywords and tapping the sheet's title bar.
  - **Selected**:\
    The sheet displays information from the selected sequence.
  - **LastGo**:\
    This automatically shows the latest sequence to receive one of the trigger commands (<<<, >>>, Go+, Go-, Goto, Load, On, Select, Top, Temp, Flash, Toggle On, Pause). This includes if the sequence is triggered from a running timecode recording. A sequence can be excluded from LastGo by turning Off the **Include Link Last Go** setting in the [Sequence Settings](/grandma3/2-4/cue_sequence_settings/). LastGo only shows sequences triggered by the same user profile.

  This is valid for the Sequence Sheet and the Content Sheet.

  The Sequence Sheet shows the cues in a sequence and all the settings related to cue transition. It also has a mode called Track Sheet that shows the attributes values in the cues.\
  Learn more in the [Sequence Sheet topic](/grandma3/2-4/cue_sequence_sheet/).

  The Content Sheet shows the cue content. It can show the current, previous, next, or specific cue. The sheet also displays the attribute values, which can be edited in the sheet.\
  Learn more in the [Content Sheet topic](/grandma3/2-4/cue_content_sheet/).

- **Merge Cells**:

  This allows to merge cells to show a value only once if the adjacent cell has the same value and belongs to the same feature or feature group. For instance, if all red, green, and blue values are "100", then "100" are only shown once.

  - **None**:\
    Cells are not merged.
  - **Feature**:\
    The values of a feature are merged to only be shown once if the two or more adjacent values are the same.
  - **Feature Group**:\
    The values of a feature group are merged to only be shown once if the two or more adjacent values are the same.

- **Page**:\
  This sets the executor page the window relates to. This setting is valid for the Playback window, command wing Bar window, and the Xkeys window.

  The Playback Window shows on-screen executors and their labels.\
  Learn more in [Executors topic](/grandma3/2-4/executor/#h2__770195381).

  The command wing Bar is a window that shows labels matching the grandMA3 onPC command wing hardware. It can also be helpful when using the grandMA3 onPC on a single FullHD monitor.\
  Learn more in [command wing Bar topic](/grandma3/2-4/ws_command_wing_bar/).

  The Xkeys Window shows an on-screen version of the XKeys buttons and labels.\
  Learn more in the [Playback Bar topic](/grandma3/2-4/ws_playback_bar/).

- **Preset**:\
  This defines how the preset information is displayed in the sheets. There are six properties which are different combinations of these three elements:

  - **ID**:\
    Shows the ID number of the preset.
  - **Name**:\
    Shows the name of the preset.
  - **Value**:\
    Shows the values stored in the preset.

  This is valid for the Fixture Sheet, Sequence Sheet, and Phaser Editor.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Sequence Sheet shows the cues in a sequence and all the settings related to cue transition. It also has a mode called Track Sheet that shows the attributes values in the cues.\
  Learn more in the [Sequence Sheet topic](/grandma3/2-4/cue_sequence_sheet/).

  The Phaser Editor is an editor that can be used to see, create, and edit Phaser information and values.\
  Learn more in the [Phaser Editor topic](/grandma3/2-4/ws_command_wing_bar/).

- **Readout:**\
  This selects the value readout for fixture attributes. It is a swipe button that opens a list of readout types with the following options:

  - **Auto**:\
    This makes the sheet follow the selected readout in the [Encoder Bar](/grandma3/2-4/ws_encoder_bar/).
  - **Natural**:\
    Each attribute has a defined Natural readout. This is defined in the [Attribute Definition](/grandma3/2-4/patch_attribute_definitions/). Selecting this option will show the different readouts defined for the attributes.
  - **Percent**:\
    This is a range from 0 to 100.
  - **PercentFine**:\
    This is a range from 0.00 to 100.00.
  - **Physical**:\
    This uses the physical range defined in the fixture type definition.
  - **Decimal8**:\
    This is a decimal range from 0 to 255.
  - **Decimal16**:\
    This is a decimal range from 0 to 65 535.
  - **Decimal24**:\
    This is a decimal range from 0 to 16 777 215.
  - **Hex8**:\
    This is a hexadecimal range from 00 to FF.
  - **Hex16**:\
    This is a hexadecimal range from 0000 to FFFF.
  - **Hex24**:\
    This is a hexadecimal range from 000000 to FFFFFF.

- **Setup**:\
  This changes the window into a setup mode, where the content or setup of the window elements can be manipulated.

- **Sheet Mode**:\
  The sheet mode changes how the sheets look. There are four different modes:

  - **Fixture**:\
    This shows a matrix with the fixtures in rows and the attributes in columns.
  - **Channel**:\
    This shows the fixtures as tiles with the dimmer attribute.
  - **Dimmer+**:\
    Looks similar to the **Channel** mode. However, it additionally displays the attributes of the selected feature group. Vertical gray separators are displayed when there is a jump in IDs and when the IDType changes for fixtures that do not have a fixture ID. This mode can display the **Fixture Graphics**, but does not display the **Feature Graphics**.
  - **Sheet/Filter**:\
    Similar to **Dimmer+**. However, it displays all attributes unless there is a defined filter in the **Mask** tab of the sheet settings.

  This setting is valid for the Fixture Sheet and the Content Sheet.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Content Sheet shows the cue content. It can show the current, previous, next, or specific cue. The sheet also displays the attribute values, which can be edited in the sheet.\
  Learn more in the [Content Sheet topic](/grandma3/2-4/cue_content_sheet/).

- **Show Grand Master**:\
  This shows or hides the Grand Master section in the window. This is valid for the Custom Master Section window, command wing Bar window, and Encoder Bar window.

  The Custom Master Section is a window that shows on-screen versions of the two custom areas, the master area, and the grand master knob. It also shows the labels for these elements.\
  Learn more in the [Special Executors topic](/grandma3/2-4/ws_command_wing_bar/).

  The command wing Bar is a window that shows labels matching the grandMA3 onPC command wing hardware. It can also be helpful when using the grandMA3 onPC on a single FullHD monitor.\
  Learn more in [command wing Bar topic](/grandma3/2-4/ws_command_wing_bar/).

  The Encoder Bar window shows on-screen versions of the encoder bar. It can be useful to create custom interfaces.\
  Learn more in the [Encoder Bar topic](/grandma3/2-4/ws_encoder_bar/).

- **Show Master Area** or **Show Master Section:**\
  This shows or hides the Master area in the window. This is valid for the Custom Master Section window and command wing Bar window.

  The Custom Master Section is a window that shows on-screen versions of the two custom areas, the master area, and the grand master knob. It also shows the labels for these elements.\
  Learn more in the [Special Executors topic](/grandma3/2-4/ws_command_wing_bar/).

  The command wing Bar is a window that shows labels matching the grandMA3 onPC command wing hardware. It can also be helpful when using the grandMA3 onPC on a single FullHD monitor.\
  Learn more in [command wing Bar topic](/grandma3/2-4/ws_command_wing_bar/).

- **Show Title Bar / Title Bar**:\
  This shows or hides the window's title bar. It is On by default. If it is Off, then the title bar can be shown temporarily by pressing both MA keys in the control area. In grandMA3 onPC, the title bar can be temporarily shown by pressing Ctrl + Alt on Windows and Ctrl + Option on Mac. This is valid for Clock Viewer, Encoder Bar window, and Layout Viewer.

  The Clock Viewer shows the time. It can be the system time, the time of a timezone, the timer of a timer, or timecode slot.\
  Learn more in the [Clock viewer topic](/grandma3/2-4/si_clock/).

  The Encoder Bar window shows on-screen versions of the encoder bar. It can be useful to create custom interfaces.\
  Learn more in the [Encoder Bar topic](/grandma3/2-4/ws_encoder_bar/).

  The Layout Viewer shows a layout. The shown layout can follow the selected layout or always show a specific layout.\
  Learn more in the [Layout topics](/grandma3/2-4/layouts/).[](/grandma3/2-4/si_clock/)

- **Speed**:

  This sets how the speed value is displayed. It has the following options: Auto (following the User Profile setting), Hertz, BPM (Beats Per Minute), and Seconds.

  This setting is valid for the Fixture Sheet and Phaser Editor.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Phaser Editor is an editor that can be used to see, create, and edit Phaser information and values.\
  Learn more in the [Phaser Editor topic](/grandma3/2-4/ws_command_wing_bar/).

- **Step:**\
  This selects which step to display. Steps are used with [Phasers](/grandma3/2-4/phaser/). It is a property input button that opens a calculator pop-up. This setting is valid for the Fixture Sheet and Sequence Sheet.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Sequence Sheet shows the cues in a sequence and all the settings related to cue transition. It also has a mode called Track Sheet that shows the attributes values in the cues.\
  Learn more in the [Sequence Sheet topic](/grandma3/2-4/cue_sequence_sheet/).

- **Time Format**:\
  This defines the time format for the windows. This can be used to select a different format than the default set in the [user profile](/grandma3/2-4/user_settings/#time_frame_readout). This setting is valid for the Fixture Sheet and Sequence Sheet.

  The Fixture Sheet is a window that shows all the patched fixtures that have an ID. It has different modes that can use different versions of the attribute values for each fixture.\
  Learn more in [Fixture Sheet topic](/grandma3/2-4/operate_fixture_sheet/).

  The Sequence Sheet shows the cues in a sequence and all the settings related to cue transition. It also has a mode called Track Sheet that shows the attributes values in the cues.\
  Learn more in the [Sequence Sheet topic](/grandma3/2-4/cue_sequence_sheet/).

- **Transpose:**\
  This On/Off button flips the columns and rows in windows.

- **View Mode**:\
  The view mode defines how the different data and information are displayed in the view. The view mode can be changed in the settings or the title bar of the window.

The Agenda Viewer has the following view modes: Sheet, Year, Month, Week, and Day.\
The Phaser Editor has the following view modes: Auto, 2D, 1D, and Sheet.\
The Sound Viewer has the following view modes: Wave, Sound, and Beat.\
The Timecode Viewer has the following view modes: Text, Timeline, and Both.

- **Wing ID:**\
  This defines which wing the window displays. Tap this setting to open a small **Select WingID** pop-up where the desired wing can be selected. This setting is valid for the command wing Bar window and Playback window.

  The command wing Bar is a window that shows labels matching the grandMA3 onPC command wing hardware. It can also be helpful when using the grandMA3 onPC on a single FullHD monitor.\
  Learn more in [command wing Bar topic](/grandma3/2-4/ws_command_wing_bar/).

  The Playback Window shows on-screen executors and their labels.\
  Learn more in [Executors topic](/grandma3/2-4/executor/#h2__770195381).

|                                            |                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                 |
|                                            | Showing a window that has the **Show Title Bar** setting in a true full-screen version can be achieved by hiding all other visual elements on the screen using the [Configure Display pop-up](/grandma3/2-4/ws_ui_display_configuration/) and then turning Off the Show Title Bar setting for the window. |

---

## Mask

All sheets (fixture, sequence, content, and DMX sheet) and the layout viewer have a mask tab in the window settings. All settings offer different options to show or hide information in the window and how content is sorted. 

![Update this description text.](/img/grandma3/2-4/popup_fixture-sheet-settings_mask_v2-3-37f020.png)

_Fixture Sheet Settings - Mask tab_

The following is a list of the settings that are shared between two or more windows:

- **Group By ID Type:\
**This organizes the sheet by ID type, grouping together fixtures with the same ID type. 

- **Show Fixture Name:\
**This shows the name of the fixtures on the sheet. This setting is only relevant when the **Sheet Mode** is different than **Fixture** in the fixture sheet.**** In the sequence sheet this setting is only relevant when Track Sheet is enabled. 

- **Show ID Type:\
**This shows the ID Type of the fixtures on the sheet. This setting is only relevant when the **Sheet Mode** is different than **Fixture**.

- **Show Notes:\
**This On/Off button shows or hides the notes for the selected cue at the bottom of the sheet. Read more about it in the [Notes topic](/grandma3/2-4/notes/).

- **Sorted By:\
**This defines how the sheet is sorted. The two options are: 

  - **FID:**\
    The sheet is sorted by FID.
  - **CID: **\
    The sheet is sorted by CID.

---

## Mask Buttons

For all sheets, use the Mask Buttons tab to assign filters and worlds for [Sheet Masking](/grandma3/2-4/worldfilter_filter_rules/) and filtering content of the sheet. 

![Update this description text.](/img/grandma3/2-4/window_settings_mask_buttons_tab_v2-3-e6036e.png)

_Fixture Sheet Settings - Mask Buttons tab_

These are the settings of the Mask Buttons tab:

- **Mask 1-16**:\
  This displays the assigned object for sheet masking. Tapping a sheet mask button, for example Mask 1, opens the Assignment Editor. 
- **Mask Toolbar**: \
  This enables the Mask Toolbar in the sheet. To display the mask toolbar in the sequence sheet, Track Sheet must be enabled. 

---

## Pool Settings

Most pools have the same few settings. Some pools might have extra settings. The Group and Preset pools have three extra settings regarding the colored bar above each pool object. The [Smart window](/grandma3/2-4/operate_smart/) behaves much like a pool and shares most of the pool settings.

![](/img/grandma3/2-4/popup_pool-window-settings_v2-4-e318cc.png)

_General pool window settings_

These are the common settings for pools:

- **First Index:\
**This defines where a new pool object should be stored. When set to **Default** the new pool object gets stored to the first empty slot. Set a value between **1 - 9999** to define where a pool object should be stored.  An individually defined index is indicated by an **>=x **in the top left corner of the corresponding pool. 

  To store an object to the slot set in Store From, use Store without a specific number:

  Store \[Pool] Please

  Only exception are Preset Pools. The number followed by "Preset", indicates the preset pool. For example, to store a dimmer preset using the Store From setting, type:

  |                                                                    |                                     |
  | ------------------------------------------------------------------ | ----------------------------------- |
  | ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Store Preset 1 |



- **Show Empty**:\
  This toggle button can hide or show empty pool objects.

- **Appearance**:\
  This sets which appearance is applied behind the pool objects.

- **Pool Columns**:\
  This defines the width for the pool objects. It does not change the size of the window. It defines how many columns of pool objects are in the window. If the window is wider than the number of columns, then the extra space is displayed as black (default color). If the window is smaller than the number of columns, the pool window can be scrolled horizontally. If the pool has a set width, then there is an icon (![](/img/grandma3/2-4/icon_pool-limited_12_v2-0-71e0d7.png)) in the upper right corner of the title field.\
  The **Not Defined** value dynamically sets the width to match the window size even when the window is resized.\
  The **Take Current Width** sets the width to match the current size of the window. It does not dynamically change if the window is resized.

- **Font Size**:\
  This sets the font size property from 10 to 32. There is also a default property. This is the same as size 18. This simply changes the font size on the pool objects.

- **DataPool** (only available for some pools):\
  This defines what data pool the pool window shows data from. This makes it possible to have pools showing objects from different data pools. For instance, a group pool window from the default data pool can be shown next to a different group pool window showing groups from a different data pool.

   The data pool number is shown in the lower right corner of the pool title button. The number is only shown if the pool window supports showing different data pools and if there is more than one data pool in the show.

![](/img/grandma3/2-4/img_pool-title-buttons_data-pool-indicator_v1-9-3-b56de2.png)

Two group pools with different data pools

- **Pool Color**:\
  This is the color for the title button in the pool.
- **Empty Color**:\
  This color is applied to empty pool objects.
- **Reset Colors**:\
  This resets the colors to the colors in the default color theme.
- **Use Object Action:\
**This defines if the selected object action is executed instead of the selected pool action. Pool windows with Use Object Action enabled, are marked with a (![](/img/grandma3/2-4/icon_clicking_hand_14_v2-3-5b5382.png)). Pool objects indicate the selected object action setting with a light grey icon in the foreground of the object. If the object action is set to **None**, there is a gray overlay on top of the pool object.

Preset and group pools also have:

- **For All**:\
  This color is used when the preset can be used by all of the selected fixtures.
- **For Some**:\
  This color is used when some of the selected fixtures can use the preset.

* **For None**:\
  This color is used when the preset is not usable by any of the selected fixtures or when none of the selected fixtures are in the group.

Tapping one of the color settings opens an **Edit Color** pop-up.

The buttons in the title bar are the same as the ones for other window settings - read above.

---

### Default Pool Action

This defines the default action executed when a pool object is tapped without a (relevant) keyword in the command line.\
Pools can have some of the following actions (the available actions depend on the type of pool):

- **At** (![Update this description text.](/img/grandma3/2-4/icon_at_preset_v2-2_15px-1fa869.png)):\
  When there is no selection in the programmer, tapping a preset does nothing. When the programmer has a selection, tapping it calls the preset into the programmer.
- **Call**(![](/img/grandma3/2-4/icon_small_call_12_v2-1-c62bb2.png)) - default action for filters:\
  This action calls the tapped pool object.
- **SelFix/At** (![](/img/grandma3/2-4/icon_selfix_at_v2-2_15px-eb32f8.png)) - default action for presets:\
  When there is no selection in the programmer, tapping a preset will select the fixture that can use the preset. Tapping it again calls the preset into the programmer.\
  When the programmer has a selection, tapping a preset the first time will call the preset into the programmer.
- **SelFix/Extract** (![](/img/grandma3/2-4/icon_selfix_extrakt_v2-2_15px-5929bb.png)):\
  This value acts similarly to SelFix/At, but instead of calling the preset reference into the programmer, the values will be called extracted into the programmer.
- **Select** (![](/img/grandma3/2-4/icon_execute_select_15_v1-9-2f7c57.png)) - default action for sequences:\
  Tapping the pool object selects it.
- **Toggle** (![](/img/grandma3/2-4/icon_small_execute_toggle_10_v1-9-afea79.png)):\
  Tapping a pool object activates it or switches it off, depending on its current state.
- **Go+** (![](/img/grandma3/2-4/icon_small_execute_go_10_v1-9-9f318d.png)):\
  Starts playback of the pool object or goes to the next cue in the sequence.
- **Flash** (![](/img/grandma3/2-4/icon_small_execute_flash_10_v1-9-a54ae9.png)):\
  Flashes a pool object as long as it is tapped. Flash ignores fade times.
- **Temp** (![](/img/grandma3/2-4/icon_small_execute_temp_10_v1-9-1175e9.png)):\
  Plays back a pool object as long the pool object is pressed. Temp respects the fade times.
- **Top** (![](/img/grandma3/2-4/icon_top_15_v2-3-01ecde.png)):\
  Restarts the timecode pool object at the beginning.
- **Pause** (![](/img/grandma3/2-4/icon_playback_pause_15_v1-9-c22421.png)):\
  Pauses the timecode pool object. Tap again to play it back. 
- **Off** (![](/img/grandma3/2-4/icon_off_15_v2-1-3efcdb.png)):\
  Stops the recording of the timecode pool object and pauses it when it is played back. 
- **Goto** (![](/img/grandma3/2-4/icon_goto_v2-1-096e62.png)):\
  Opens a pop-up to play back a specific cue from the sequence pool object. 
- **Load** (![](/img/grandma3/2-4/icon_load_15_v2-1-01a94e.png)):\
  Opens a po-up to load a specific cue from the sequence pool object. 
- **None **():\
  No action is triggered when tapping on the pool object. 

A small icon in the upper right corner of the pool title object indicates the default action.

![](/img/grandma3/2-4/img_pool-actions_v1-9-3-8ff550.png)

Pools with default pool actions

---

## Save and Load Preferences

Setting preferences can be stored and loaded for each window and pool. These preferences are stored in the user profile. This means that exporting and importing a user profile includes these preferences.

Tapping Save opens a **Save Preferences** pop-up:

![](/img/grandma3/2-4/popup_save-preference_v1-5-0e7530.png)

_Save Preference pop-up_

### Save a New Preference

1. Open the **Settings** pop-up.
2. Tap Save in the settings title bar.
3. Tap Insert new \[Type] (this button changes a little for each window, and the type shows what type of settings are being inserted).
4. Edit the name field and give it a name.
5. Tap Save in the preference pop-up.

|                                            |                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                |
|                                            | When saving a new preference, no preference exists yet, and the focus is on "New ...", it is enough to tap Save to save the preference.  |

### Update the Preference

1. Open the **Settings** pop-up.
2. Tap Save in the settings title bar.
3. Tap the desired preference in the list.
4. Tap Save in the preference pop-up.

### Load a Preference

![](/img/grandma3/2-4/popup_load-preference_v1-5-8a2507.png)

_Load preference pop-up_

1. Open the **Settings** pop-up.
2. Tap Load in the settings title bar.
3. Select the desired preferences.
4. Tap Load in the preference pop-up to confirm.

---
title: "Release Notes 2.2"
description: "Do you need help getting started in grandMA3? Perfect! Here we describe a few quick steps to get you rolling. The manual will explain functionality in detail wh"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_rn_v2_2.html"
scrapedAt: "2026-06-12T21:25:48.726Z"
---
- [Let's Get Started](/grandma3/2-4/key_rn_v2_2/#h2__1435677565)

- [Bug Fix Version 2.2.5.2](/grandma3/2-4/key_rn_v2_2/#h2_1781471903)
  - [Bug Fixes](/grandma3/2-4/key_rn_v2_2/#h2_1399259183)

- [Bug Fix Version 2.2.5.0](/grandma3/2-4/key_rn_v2_2/#h2_1781474115)

  - [Other Enhancements](/grandma3/2-4/key_rn_v2_2/#h2_594496323)
  - [Bug Fixes](/grandma3/2-4/key_rn_v2_2/#h2__1190835831)

- [Release Version 2.2.1.1](/grandma3/2-4/key_rn_v2_2/#h2_727740091)

  - [Features](/grandma3/2-4/key_rn_v2_2/#h2_727740091)

    - [Tags](/grandma3/2-4/key_rn_v2_2/#h3_1566500637)
    - [Recipe Editor](/grandma3/2-4/key_rn_v2_2/#h3__1639612175)

  - [Other Enhancements](/grandma3/2-4/key_rn_v2_2/#h2_1198082799)

  - [Changes](/grandma3/2-4/key_rn_v2_2/#h2_1879708368)

  - [Bug Fixes](/grandma3/2-4/key_rn_v2_2/#h2__146634055)

  - [Deprecated](/grandma3/2-4/key_rn_v2_2/#h2__756870347)

  - [Appendix](/grandma3/2-4/key_rn_v2_2/#h2__1835053169)

  - [Known Limitations](/grandma3/2-4/key_rn_v2_2/#h2__1393830384)

---

 

## []()Let's Get Started

Do you need help getting started in grandMA3? Perfect! Here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning in the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let's go! To leave the Release Notes, tap I agree on the top right corner. The main screen of grandMA3 software opens. On the right side, you can see predefined views on view buttons. To switch between the views, tap the view buttons.

If this is your first time starting grandMA3 software, patch some fixtures first. Or you can load one of the demo shows delivered with the software. Either way, press Menu. If you use grandMA3 onPC software, there is a ![](/img/grandma3/2-4/icon_gear_15_v1-0_1-64afe6.png) symbol in the top left corner there. Clicking the ![](/img/grandma3/2-4/icon_gear_15_v1-0_1-64afe6.png) symbol is the same as pressing Menu on a console.

Tap Backup and then Load, now you are ready to load shows. Would you like to get right on it? Switch Shows to Demo Shows in the title bar first. To do so, tap Shows repeatedly until it says Demo Shows. Once Demo Shows is displayed, it is possible to select any demo show in the list. After you selected a demo show, tap Load.\
In case a show was already loaded, a pop-up will appear asking if you want to save the current show first before loading the new one. It's up to you!

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - there are view buttons there, which change the screen content. At the bottom, you will find the encoder bar and the command line. Technically that is all you need to get started. For more information, see the grandMA3 help menu. To access the help in the console or the onPC, tap the view buttons named Help or visit the Online Manuals on the MA Lighting website. If you want to learn the grandMA3 software step by step, please see the [Quick Start Guide](/grandma3/2-4/qsg/) and join the MA e-Learning - it's free of charge and available on the MA Lighting website.

Have fun with using our grandMA3 software! Find all the improvements and changes of this software version further down.

|                                            |                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                 |
|                                            | The grandMA3 software will start using the show file (or status) that was in operation before the software was shut down. |

---

 

## Bug Fix Version 2.2.5.2

## Bug Fixes

### 3D

| Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| If you calibrated a fixture that was part of a grouping fixture, for example a truss, with the Position Calibration dialog, the position of the fixture was displaced after tapping Solve. |

### Command Line and Macro

| Description                                                                           |
| ------------------------------------------------------------------------------------- |
| If you set a custom command in an executor and executed it, the software could crash. |
| Changing MAtricks in a recipe could lead to a crash in the software.                  |

### Connections

| Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In some cases, leaving the patch on a station with a web remote connected would crash the software.                                                                     |
| In some cases, the touch response of faders was not working correctly. The touch response of the fader was either missing or displayed without the fader being touched. |

### Playback

| Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Updating a preset with XYZ values that was used in an earlier cue could assert pan and tilt values instead of XYZ values in the current output.                                           |
| In some rare cases the main sequence unexpectedly jumped to the first cue when pressing Go+.                                                                                              |
| If the MIB delay was set to a time less than 1 second and the playback faded from a dimmer phaser to a closed dimmer, the MIB values would be applied before the dimmer was fully closed. |

---

 

## Bug Fix Version 2.2.5.0 

## Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png)  Improved the recipe editor:

- The recipe editor has a **Lock** column in its grid. If the recipe line is set to UL (UserLock) and you tap CleanUp, the corresponding lines will not be cleaned up. If you deselect objects, for example, presets during recipe editing, the lock will be respected and the corresponding objects cannot be deselected while they are locked.



![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the patch menu:

- When moving fixtures in the patch via Cut and Paste or via a command and the destination is not on the same level within the same parent, a pop-up opens. The pop-up allows you to choose between keeping the Absolute position and rotation in 3D space or keeping the Relative position and rotation offset of the parent. Tap Cancel to cancel the action altogether. /NoConfirmation will suppress the pop-up if the default is set to Absolute. /Type "Relative" sets the conversion mode to relative.  /Type "Absolute" sets the conversation mode to absolute.



![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Increased the tolerance for small jumps in external timecode signals.

---

 

## Bug Fixes

### Command Line and Macro

| Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It was possible to use the command line to assign object actions to objects, even if these actions were not a part of options in the UI.                                                                                               |
| Turning an empty encoder would execute commands in the command line.                                                                                                                                                                   |
| If a timecode event was assigned and triggered by an encoder and then Delete was pressed, the software could crash.                                                                                                                    |
| Handles of macros could break after a PSR. For example #\[Group 'StartShow Group 1 Linear'] turned to #\[FFFFFFFFFFFFFFFF].                                                                                                            |
| A cue part would not be automatically recooked if the Allow Duplicates column was set to **Yes** after the cue part was cooked with values of the same attributes as in the cue.                                                       |
| If you created a recipe with a group that contained subfixtures without a valid ID and applied MAtricks, the MAtricks would not be applied correctly.                                                                                  |
| On some mac devices, the grandMA3 onPC application did not appear in the settings, which meant that the sound input did not work.                                                                                                      |
| If you created a recipe using the recipe editor and stored it to multiple cues, the recipe would only be stored to one of the cues.                                                                                                    |
| When cooking recipes it could happen that not all fixtures of the selection used the selected values, even if they were capable to do so.                                                                                              |
| If blocked attributes have been unblocked, the values of unrelated fixtures that were still blocked would be displayed as unblocked in cyan in the track sheet.                                                                        |
| If you used macOS, the onPC software sometimes would not start.                                                                                                                                                                        |
| If presets had Cue Part settings other than the default and you created a recipe with the recipe editor, the presets would not be added to the defined programmer part but in the order they were selected.                            |
| In some cases, if you executed valid commands using a macro or plugin that for example included /CueOnly, the command line history would falsely display errors.                                                                       |
| If you executed DumpLog /NoAutoClose while no USB drive was connected, the pop-up would ignore /NoAutoClose and a countdown would appear.                                                                                              |
| Storing recipes in a cue with the same group but a different preset did not store the recipe in a new recipe line.                                                                                                                     |
| If you copied a recipe line with values that refer to another recipe line to a new recipe line, the **Value** cell would remain empty.                                                                                       |
| If you migrated a show file from v2.1.1.5 into v2.2, the software could freeze.                                                                                                                                                        |
| The console could crash when importing an MVR file into a show during a session.                                                                                                                                                       |
| If **Allow Duplicates** was disabled and you created a recipe with a preset in a cue and another recipe with a phaser that used the same attribute in a cue part, cooking would not work if the cooking mode was set to Low Priority.  |
| If Wrap Around was disabled for a sequence, the sequence was not triggered by an agenda event.                                                                                                                                         |
| It was possible to assign a tag to itself by executing an incomplete assign command.                                                                                                                                                   |
| Renumbering some cues of a sequence also renumbered cues of the sequence that were not selected.                                                                                                                                       |
| If you moved an image in the image pool quickly after moving another image, the software could crash.                                                                                                                                  |
| In certain show files, when you changed the XYZ values to pan tilt in the programmer, the pan and tilt values were incorrect.                                                                                                          |
| If you imported a sequence, most MIB settings would be lost.                                                                                                                                                                           |
| If you migrated a show file to the new software version, in some cases presets would wrongly be selective instead of global.                                                                                                           |
| The DoubleSpeed, HalfSpeed, and Speed 1 commands were passed to the speed master assigned to the sequence, but should have only affected the sequence.                                                                                 |
| The software could crash when importing fixtures with custom meshes that used textured materials via Partial Show Read.                                                                                                                |
| In some cases the software would crash if you tapped Rename in the Rename Show File pop-up.                                                                                                                                            |
| Changing the speed in sequences that had the same speed master assigned using DoubleSpeed, HalfSpeed or Speed1 would lead to different speeds in the sequences and speed master.                                                       |

### Connections

| Description                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| If a console was disconnected from a session and a fader was moved, the fader position would not be synchronized in the data merge process. This would lead to two different positions of the same fader.                                                                            |
| If a console was disconnected from a session and a preset or executor configuration was changed, two different versions of the same preset or executor configuration would exist on different devices after merging the session data.                                                |
| If the master console with a higher priority unexpectedly dropped out of a session and a different show file was loaded in the session, the show file of the higher priority master would be used in the session without a warning as soon as it rejoined the session.               |
| DMX channels 511 and 512 of an incoming DMX signal were  not recognized and the DMX universe displayed no incoming values.                                                                                                                                                           |
| If you selected a USB stick in the backup menu, the software could crash.                                                                                                                                                                                                            |
| If you had two sessions with the same session index but different software versions, one of them in version 2.2, in the same network, devices in the session would crash.                                                                                                            |
| If a session was created with normal priority, then a high priority station was invited and Keep Session's Show File was selected, a processing unit that was additionally invited would not accept the current show file. Instead, it triggered another session data merge pop-up.  |
| If you were in a session and loaded a different show file on the connected station, the show file would not be loaded on all devices in the session.                                                                                                                                 |
| In some cases, the previously saved show file of a station with a higher priority could falsely be overwritten after inviting a station to a session and keeping the session's show file.                                                                                            |
| If you had a console and an onPC in session, connected via web remote to the console and then started a new show on the onPC, the console could crash.                                                                                                                               |
| Pressing the sleep button on an external keyboard connected to a console could cause the console to freeze.                                                                                                                                                                          |

### Patch

| Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The offsets of DMX channels of fixture types using breaks could be wrong.                                                                                                                                            |
| Patching MArkers and changing their rotation in the patch would not show their rotation values if you reentered the patch.                                                                                           |
| If you changed the size of a target space of a MArker, the XYZ values of fixtures that were spread across the space of that MArker would not be automatically updated.                                               |
| In sessions, it could happen, that X, Y, and Z values would all change if you turned an encoder to change one of the values.                                                                                         |
| When fixtures were copied in the patch, relative pan/tilt values could be lost.                                                                                                                                      |
| Creating multipatch fixtures in the patch could cause the software to crash.                                                                                                                                         |
| Defective fixture types could lead to preset and cue data being lost if you migrated a show file to the new software version. In addition, a notification now informs the user to adjust the invalid fixture types.  |

### Phaser

| Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Updating a dimmer preset, that was part of a phaser step, stored into a cue, did not apply the phaser with the updated value in the cue.                                |
| If a cue already had reference data of phaser presets in it, and new phaser data was stored in a step of the phaser, this would result in lost phaser data in the cue.  |
| If you had an open phaser editor, turned the first or second encoder and changed from 2D Bar to Phaser Bar, the software could crash.                                   |

### Playback

| Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If a running cue was deleted, the cue would still be played back and the sequence would not be stopped. This bug is fixed. Now the sequence will be disabled after the running cue is deleted.  |
| A Goto event during encoder movement caused the value to snap or jump to 0. This bug is improved to prevent values from jumping to 0.                                                           |

### Windows

| Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you migrated a show file to the new software version, the pool action of the plugins pool would be set to **None** instead of **Call**.                                                                                     |
| If timecode events were recorded using pool objects, they were displayed as events triggered by DC Remotes in the timeline.                                                                                                              |
| In the login pop-up, the password field could not be reached pressing Tab.                                                                                                                                                               |
| The label pop-up on screen six and seven would not automatically change to appearance tab if new appearance was created and entered. Instead it stayed on the keyboard tab.                                                              |
| The names and numbers of groups that only contained a single fixture were not displayed in Selection of recipe lines.                                                                                                                    |
| If you recorded a timecode and disabled Setup, the record button would disappear but the timecode recording would still be running.                                                                                                      |
| Filtered sheets would not automatically update to include recently added fixtures if the fixtures met the filter criteria.                                                                                                               |
| If the At filter was set to exclude Relative, cooking would fail and recipe lines would be displayed in red.                                                                                                                             |
| Editing a sequence or an executor could lead to multiple Lua errors in the system monitor.                                                                                                                                               |
| The info window sometimes did not display the notes, when changing the selected sequence.                                                                                                                                                |
| After restarting the software on Windows or Mac, some feature groups could be missing in the encoder bar.                                                                                                                                |
| In the timecode viewer, rows of track groups would be displayed too big and needed to be opened manually every time, instead of staying opened.                                                                                          |
| Appearances would not be displayed in the load and goto pop-up for sequences when toggling Cue Appearance.                                                                                                                               |
| If you turned a preset into a recipe, inserted a new recipe line, and opened the value selector, there would be no option to select other recipe lines.                                                                                  |
| If a quickey pool was visible and then the selected data pool was changed, quickeys of the previous data pool would still be triggered, given that empty objects of the new quickey pool of the selected data pool were selected.        |
| The current cue was not displayed in the title bar of the sequence sheet.                                                                                                                                                                |
| Adding a group to the selection using the clone dialog would change the original fixture selection order of that group.                                                                                                                  |
| If you had a session with multiple output stations that were displayed in a layout and one device was dismissed from the session, the color of the layout element only would change if the status of a second station was changed, too.  |
| When loading a show file in v2.2, pools lost their assigned appearances.                                                                                                                                                                 |
| It was not possible to call a view by tapping it in the layout viewer.                                                                                                                                                                   |
| For the object action load the wrong icon was displayed on the object in the pool.                                                                                                                                                       |

---

 

## Release Version 2.2.1.1

## Features

The latest release of grandMA3 version 2.2.1.1 rolls out several enhancements that enrich your lighting experience. Besides numerous improvements based on your highly appreciated feedback, many new and clever features have found their way into the software. Read on for a quick introduction and find links for more information.

---

 

### Tags

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The new Tags feature allows you to organize, link and cross-reference objects throughout the software. It is also a great tool for busking shows. All objects that have the same tag can be triggered or selected together.

To open the Tags pool, open the Add Window dialog and go to Pools - Tags.

There are three ways to assign tags to objects:

- Open the editor of a tag pool object, tap Add New Tag Reference, select an element and then tap Assign.
- Open the editor of a pool object, for example a sequence, tap Settings - Tags - Assign.
- Use the command line. Syntax: Assign Tag \["Tag\_Name" or Tag\_Number] At \[Object] \["Object\_Name" or Object\_Number]  

For more information on how to use tags in the command line see the [Tag keyword](/grandma3/2-4/keyword_tag/).

When a tag is assigned to a pool object, ![](/img/grandma3/2-4/icon_tags_15px-46e799.png) is displayed on the pool object. The names and numbers of assigned tags are displayed on Tags in the pool object settings.

Editors like the Sequence editor or the Macro editor display the assigned tags of the object in an area between the title bar and the grid. They can be edited and perform pool actions like the pool objects. The background color of the appearance assigned to the tag defines the background color of the tag displayed in the editor.

To open the tags pop-up

1. Open the EditSettings pop-up for pool objects or the Edit Sequence pop-up for sequences.
2. Tap Tags.
3. Select a tag and tap Unassign or Assign. 

Already assigned tags can be unassigned or vice versa. The left side of the pop-up shows tags that are assigned to the corresponding pool object. The right side shows tags that are not assigned.\
In the pop-up, tags can also be locked and unlocked and protected against Kill Instant and Kill Delayed (see below).

The default action of objects in the tags pool is ListReference. 

The Tag Editor shows the objects the tag is assigned to in the grid offering information about:

- **Datapool****:** Shows the corresponding Data Pool.
- **Class****:** Shows the object type of the assigned reference.
- **No:** Shows the number of the corresponding pool object.
- **Name****:** Shows the name of the pool object.
- **Protect:** The assigned reference is protected against Kill Instant and Kill Delayed. The default is **No.**

Multiple objects can be assigned to a tag at the same time using  Add New Tag Reference in the tag editor. In the Add Tag References pop-up, multiple objects can be selected and assigned consecutively. To do so, select an object line and tap Assign.

If you enable Settings in the title bar of tag editor,  Name, Scribble, Appearance, Tags, Note, and Tag Type can be set and Forward Commands can be toggled on or off. Tags are recursive, meaning it is possible to assign a tag to another tag.

The following Tag Types can be selected:

- **Kill Instant**: Other playbacks using the same tag will start their OffCue immediately when starting the sequence.
- **Kill Delayed**: Sequence that was started will complete its fade in first and then the other playbacks using the same tags will start their OffCue.

For tag types to function, the tag and tag type need to be set before triggering the sequence. Otherwise, the tag type will work as soon as the corresponding sequences have been triggered once. 

When a playback is started by a tag, the **Trigger** column in the Off Menu and Running Playbacks window will report the tag.

|                                            |                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                              |
|                                            | Kill Protect does not protect a sequence from being disabled by Kill Instant or Kill Delayed if executed by a tag. For more information on Kill Protect see [Sequence Settings](/grandma3/2-4/cue_sequence_settings/) and [Kill Keyword](/grandma3/2-4/keyword_kill/). |

If Forward Commands is toggled on, playback commands can be executed for all references of a tag. It is on by default.\
This applies to >>>, <<<, Go+, Go-, Goto, HalfSpeed, Load, On, Off, Pause, Rate1, Speed1, Toggle, and Top.

---

 

### Recipe Editor

**![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) **Improved in this release

The Recipe Editor is introduced to improve and speed up the workflow for creating and editing recipes. This is done by using the user interface to define selections (Groups), values (Presets, Bitmaps, Generators), filters (Filters, Worlds), and MAtricks. Recipes are cooked when a recipe is generated based on LTP. The Recipe Editor replaces and is based on the Programmer Parts window.

The Recipe Editor can be found in the Add Window   pop-up in Tools - Recipe Editor.

To create a recipe using the recipe editor, enable the edit recipe mode. There are multiple ways to do this:​

- Tap Edit Recipe in the title bar of the recipe editor
- Enable Edit Recipe in the **At Overlay**
- Press MA + Edit + Please

For more information on how to edit recipes using the command line see the [EditRecipe keyword](/grandma3/2-4/keyword_editrecipe/).

To disable the edit recipe mode, press   Esc or use one of the options described to enable it. Once the edit recipe mode is disabled, all pools work as usual.

While the edit recipe mode is enabled, Edit and Esc flash alternately.

Each object type that can be used for a recipe will have its pool window marked with a green ![](/img/grandma3/2-4/icon_cooking-pot_12_v1-7-c4818c.png). 

The following windows use the recipe indicator:

- Groups
- Preset Pools
- MAtricks
- Worlds
- Filters
- Layout Viewer
- Fixture Sheet

|                                            |                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                         |
|                                            | Make sure you set the Pool Action setting in the corresponding pools to **SelFix/At** or **At** so you can use them for recipes.  |

To create a recipe:

1. Enable the edit recipe mode.
2. Select fixtures, for example, Group 1.\
   The selected groups are indicated by a green frame around the pool objects.\
   Multiple groups can be selected at the same time.
3. Select the values, for example, a color preset At Preset 4.4. Presets that are not compatible with fixtures of the selected group will be grayed out.\
   All objects selected for recipes are indicated by a green frame in their pool windows. Tap on a selected object again to deselect it.\
   You can add multiple values to a selection, a single recipe line is created for each selected value.\
   A feature group indicator bar at the bottom of the group objects show the feature groups that are active in the recipe for for this very group.
4. Store the new recipe to a cue or a preset.\
   Storing a recipe clears the recipe editor and only groups will remain as selected objects. 

|                                            |                                                                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                             |
|                                            | The order of recording selections and values has an impact on how the recipe is handled. The last recipe line determines the output if several recipe lines with the same selection referring to the same attribute.  |

|                                            |                                                      |
| ------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                            |
|                                            | It is possible to create recipes with empty groups.  |

|                                            |                                                                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                 |
|                                            | It is not possible to directly enter values into a recipe, they have to be stored in a preset first. If no preset is selected, the values are stored into the programmer. |

Executing EditRecipe with a corresponding cue or preset, for example, EditRecipe Cue 1, **_EditRecipe 1_**, or _**EditRecipe Preset 2.2**_, enables the edit mode for the specific object in the recipe editor. With sequences and executors, for example, _**EditRecipe Sequence 1**_, _**EditRecipe Page 1.204**_, the running cue is edited.

Tap CleanUp in the title bar to delete all recipes that use the same selection with multiple presets of the same feature group. Only the last object that generates the output is kept. For example, when Group 1 + Red + Yellow + Blue is selected and then CleanUp is tapped, the recipe lines for Group 1 + Red + Yellow will be deleted. If you tap an already selected preset again to deselect it, the corresponding recipe line will also be deleted. CleanUp is only active when the same fixtures are used with multiple items of one feature group. Otherwise the button will be grayed out. With Edit Recipe disabled this button is not visible.

Off Group \["Group\_Name" or Group\_Number], Off Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number], or Off and tap a group or a preset can also be used to remove the corresponding recipe line. If a group has multiple lines linked, all of them are removed in the recipe.

You can define a different selection, for example, by tapping Group 2. A brown frame around pool objects indicates the values for previous selections, for example, Group 1. Tap Group 1 again and the previously defined values for this selection are highlighted in green again.

Open the MAtricks overlay to define specific MAtricks values to the recipe lines. While using the MAtricks editor to edit a recipe, the editor is displayed with "(Recipe)" and the green pot icon in the title bar.

- Pool objects of MAtricks, Worlds, and Filters have a brown colored frame around them when they are used by a recipe.
- MAtricks values that do not come from a pool object, Worlds, or Filters are indicated by small green icons (![](/img/grandma3/2-4/icon_15_matricks_v2_0-3ddf5f.png), ![](/img/grandma3/2-4/icon_world_v2-1-7edec9.png), or![](/img/grandma3/2-4/icon_filter_15px-78282b.png)) on the right in the Name cell of recipes.
- If the fixtures of the selected group are only partly used, the text in the values column is displayed in orange. This happens for example if not all fixtures of the selection in use can use the selected preset or a world is added to a recipe line.

Use the Columns tab in the window settings to adjust the columns of the recipe editor individually.

Find more improvements for recipes below in [Other Enhancements](/grandma3/2-4/key_rn_v2_2/#Improved_Recipes).

---

 

## Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Updated predefined content:

- Predefined views in new shows

- New predefined macros

- Updated demo shows:

  - MA\_StartShow
  - Simple\_Show

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Updated Carallon fixture library to v19.9.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Recipes:

- Added Enabled column to recipes. To disable recipe lines for cooking, right-click  **Yes** in the corresponding recipe line of the Enabled column. The recipe line is marked red and Enabled is set to **No**.
- Improved the pop-up of the Values column. The Edit Values pop-up displays preset, bitmaps and generators pools on the left and their pool objects on the right. Tapping on a preset pool expands its presets. Use the filter to filter for pool object names and pool numbers of the corresponding preset. The appearance and scribble are also previewed. Tap DataPool in the title bar of the Edit Values pop-up to change the data pool.
- In the Show Recipes mask in the sequence sheet, the sequence editor and the content sheet, it is now possible to [adjust the columns](/grandma3/2-4/ws_ui_adjustable_columns/).
- Added CleanUp Recipes to the Ed**it Setting** of presets to remove recipes in the editor.
- The MAtricks properties "X", "Y", and "Z" were added to recipes.
- The + and - on the left side can add or delete Programmer Parts and Recipes. In previous versions they added or deleted Programmer Parts only.

**![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) **Improved the Sequence Sheet:

- When the Executor Time or Executor Crossfade overrides cue timings, a yellow text will appear above the corresponding cue timings in the Sequence Sheet, indicating the Executor Time in seconds or the Executor Fader in percent. A **!** next to the cue's original cue time indicates that the cue is currently being overwritten by the executor time.

- The setting Show Recipes is enabled by default in new shows and user profiles. In the title bar, Show Recipes is displayed by default.

- Added a column to the sequence sheet called **Individual Timing**.** **It influences the prioritization of general cue timings (**Cue Fade**, **Cue Delay**) and individual timings (**Indiv Fade**, **Indiv Delay**).\
  There are two values:

  - Default: Individual timings are prioritized over general cue timings.
  - Normalized: General cue timings are set as the maximum time for individual timings. If individual timings have a range of values, these values will be scaled to the new maximum time set by the corresponding general cue timings.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the behavior when changing properties of cues or sequences:\
When a sequence is running, commands like, CueFade 5, will address the running cue. When the sequence is off, the sequence itself will be addressed. This applies to properties of sequences and cues. For example, the name: Label will address the sequence when the sequence is off, and it will address the running cue when the sequence is on.

**![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png)** Improved Preferences and Timings:

- Added 50 Timing Masters that can be set to a value between 0 seconds and 10 seconds. The following properties can be set to a timing master instead of a numeric value:

  - Timings in sequences, except for Command Delay, Snap Delay and Trig Time.
  - Playback Timings in Preferences and Timings (new, see below)

  To set a timing master: 

  - Use the calculator that appears when editing the value of one of these properties.\
     To set different timing masters for in and out timings, type it manually into the CueFade or CueDelay calculators (when condensed timing is enabled in the sequence sheet). For example, Timing1/Timing2 (no spaces in front or inside the string!).
  - Use the command line. Syntax: Cue \["Cue\_Name" or Cue\_Number] CueFade "Timing1" 
  - Use timing masters for playback commands: _**Goto Cue 5 Fade "Timing5"**_ 

* Improved the Masters tab:

  - To label a master, type Label + tap a master.
  - To assign the master quickly, for example to an executor, type Assign + tap a master.

- Added Playback Timings to the Timings tab:

This menu allows you to set the default values for actions triggered by Goto, Go-, >>>, and <<<. They can be set to **CueTiming**, using the timings set in the cue (only for Goto and Go-), a numeric value, or a timing master. **CueTiming** sets the timing values of the target cue and ignores the timings of other cues. Values that are tracked into the target cue, and therefore do not have a defined timing in that cue, will use the timing of Part 0.

The default values are:

- Goto: CueTiming
- Go-: CueTiming
- \>>>: 0
- <<<: 0

**![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) **Improved Content Sheet:

- The setting Show Recipes is available in the title bar by default.
- Added CuePart Appearance to the content sheet settings. Choose between **Off**, **Number**, and **Num+Name** as options for how the appearances of cues are displayed in the content sheet. 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added a special value to Specials in the attribute calculator called **Deactivate**:

- It deactivates data in the programmer, for example, to exclude specific attribute data from being stored in a cue.\
  Deactivate can also be used in a command.

For more information on how to use deactivate in the command line see the [Deactivate keyword](/grandma3/2-4/keyword_deactivate/).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Layouts:

- The Layout Element editor has the Load from Default and Save as Default feature. It is possible to set defaults and save, for example, a ppearances, notes, size, and scribbles.
- It is now possible to create Layout Element Defaults. Either in the Layout editor or in the Menu - Preferences and Timings - Layout Elements.
- Output Stations can be assigned to a Layout, for example, Assign onPC 1 At Layout 1. The appearance of the object shows the device type. Editing the assigned Output Station will open a device configuration menu.\
  Assigned output stations display their current network state in an indicator bar. The colors displayed in the indicator bar are based on the defined network colors. Edit and tapping an assigned ouput station will open the generic editor. Therefore, **Stati****on** was added to Layout Element Defaults.
- The Align Selection (![](/img/grandma3/2-4/icon_snap_to_grid_15-b0efaa.png)) function was added to the Layout window. Enable Setup. A toolbar opens on the left side of the window. Lasso all relating elements that should be aligned. Then tap ![](/img/grandma3/2-4/icon_snap_to_grid_15-b0efaa.png) in the toolbar.
- Select using the contents of the layout pool, for example,  SelectFixtures Layout 1. Only fixtures within the corresponding layout, and no other fixtures that may be part of other object types, for example, groups in the layout, will be selected.
- Action in the **General** settings of the Edit pop-up for layout elements now follows the individual Object Action set for pool objects. When set to **\<Object Default>**, it follows the Object Action of the object itself. 
- Renamed the value **\<Layout Default>** of the Action (prior **\<Default>**).
- Renamed 2 Finger Edit in the Layout Viewer (prior Right Click to Edit).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Gel Editor:

- Tap Color to open a color picker pop-up and to adjust the color of the gel.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Appearance Editor:

- The editor now displays the hex color code of the selected color above the color picker field. Tap the area with hex code to open an edit pop-up and adjust the hex code manually or use the HSB faders.
- Redesigned the UI, tightened the spaces and added more descriptions.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the display of selected cells in conjunction with appearances:\
Cells that are selected by the user and that display an appearance now also display a thick blue frame and the appearance in the center.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Scribbles Editor:

- Added Save to save changes and close the editor.
- Apply saves and applies changes without closing the editor.
- Revert takes back all recent changes to the initial status before opening the editor.
- Tapping ![](/img/grandma3/2-4/icon_cancel_15_v2-1-bf5fad.png) displays a pop-up to confirm that changes are saved.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Label Dialog:

- Added Appearance (![](/img/grandma3/2-4/icon_appearance_15px-ad09e7.png)) to the title bar to show or hide the appearance editor.
- Added Tags (![](/img/grandma3/2-4/icon_tags_15px-46e799.png)) to the title bar to assign or unassign the corresponding tags of the object.
- Scribbles (![](/img/grandma3/2-4/icon_scribble-15_v2-0-188783.png)) are saved directly to the Scribbles pool in the editor by using Save.
- Added a Scribble button to the title bar to select scribbles in a dropdown menu, including a scribble preview.\
  The button is not displayed for objects in the scribble pool as scribbles cannot be assigned to other scribbles.
- Added an Appearance button to the title bar to choose between all appearances in the Appearance pool. The selected appearance is shown in the editor.\
  The button is not displayed for objects in the appearance pool as appearances cannot be assigned to other appearances.
- The areas for scribble, appearance, and tags are mutually exclusive in the Label Editor. Due to screen space, only one can be displayed at a time.
- In the small screens, the onscreen keyboard cannot be displayed simultaneously on the areas for scribbles, appearance and tags due to limited space on the screen. If you disable one of the latter, the onscreen keyboard will be displayed if it was active before opening the other tab, otherwise only the name and note fields will be displayed.
- When starting to draw a scribble, and there is no Scribble pool object selected, a new scribble will be created automatically in the Scribble pool. As soon as there is no scribble selected, Name and Note are grayed out.
- When moving a fader or using the Color Picker on an empty appearance, a new appearance will be created automatically in the Appearance pool.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Text Input:

- The cursor is synchronized on all screens. This applies to the name and note input in the label editor as well as the command line.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added languages to the onscreen keyboard:

- Spanish
- Portuguese

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Notes:

- Spaces and empty lines before or after notes will not be cropped anymore. The only exceptions are notes in the sequence sheet, where empty lines are cropped for displaying purposes. However, the note itself will keep the empty lines. 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Notes in the Info Window:

- The text of the notes field will be wrapped according to the window size. The Info window allows to scroll through the note's text by pressing Arrow Up or Arrow Down.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Help: 

- The Help pop-up now stays open when you perform actions outside the pop-up. To close the Help pop-up, tap ![](/img/grandma3/2-4/icon_cancel_15_v2-1-bf5fad.png) in the top left corner or press Esc.
- In the Help window, the font size can now be reduced to a smaller size than before, making it possible to fit more text on the screen.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the 3D Viewer:

- Added Resolution to the encoder bar (is displayed when Setup is enabled) to adjust the encoder resolution. This also works in the 3D Positions area in the patch.

  - **Coarse**: 10 cm / 1 degree per click. 
  - **Fine**: 1 cm / 0,1 degree per click.
  - **Increment**: 1 mm / 0,01 degree per click.

- Renamed Change on Encoder (prior Change on Encoder Event)

- Renamed the values of Direction setting of the Arrangement Mode grid :

  - First X then y to X before Y
  - First Y then X to Y before X
  - First X then Z to X before Z
  - First Z then X to Z before X
  - First Y then Z to Y before Z
  - First Z then Y to Z before Y

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved PSR:

- Added error message to the command line when a DataPool is missing.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Clock Viewer:

- Added Style in the Title Bar (when Clock Source is set to session time) offering the following options:

  - **Digital**: Displays the time in in the 24 hours format.
  - **Digital AM/PM**: Displays the time in AM/PM.
  - **Date DD-MM-YYYY**: Shows the date starting with the day.
  - **Date MM-DD-YYYY**: Shows the date starting with the month.
  - **Dawn**: Shows time to dawn or the time elapsed after dawn.
  - **Sunrise**: Shows the time left to sunrise or the elapsed time after sunrise.
  - **Sunset**: Shows the time left to sunset or the elapsed time after sunset.
  - **Dusk**: Shows the time left to dusk or the elapsed time after dusk.

|                                            |                                                                                                                                                                                    |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                          |
|                                            | The corresponding name in the title bar changes accordingly to the selected style, for example, when "Digital AM/PM" is selected, the title bar will display "Clock PM" at midday. |

- When Clock Source is set to **Time Zone**, Style is added to title bar offering the **Digital** and **Digital AM/PM** options.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Fixture Sheet:

- DMX tester values are indicated by the same color as the DMX tester background color in the DMX layer and any other layer of the fixture sheet. Also the name cell of the corresponding fixtures and the attributes whose DMX channel with active tester values, are displayed with a white marker.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Universes Pool:

- Pool objects can now be locked via Lock.

- The selected Merge Mode is displayed in the top right corner of the Pool Object:

  - **P**: Prio
  - **H**: HTP
  - **L**: LowTP

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Network:

- The Network menu now has the option to change MulticastBase. Tap to open the dropdown menu. Now you can change the MANet multicast address from the **Default** address to an **Alternative** address. The alternative multicast base address is 239.4.1.0, default uses the address that has previously been used. If you do change the address while you are in a session, all devices in that session will also change their address. All grandMA 3 devices with a network interface can configure the multicast base address. Changing the multicast base address cannot be oopsed.\
  A pop-up informs the user about the possible drawback of this change and asks for confirmation.

|                                            |                                                                                                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                            |
|                                            | Be careful when changing the MulticastBase address as it affects the entire network structure. Each grandMA3 device must have the same multicast address to allow communication between the devices. |

- Added Flow Control Level column to the network menu for monitoring congestion. It displays, on a scale of 0 to 255, the intensity of flow control.
- Added  NACK Count column to the network menu. All connected devices display nacks (negative acknowledgements) to the master of the session. It splits up in Per 1m/5m/10m, displaying all nacks in the last one, five, and ten minutes, and Total, which lists all nacks from the beginning of a session. The total count can be reset using the 2 finger edit gesture. Doing this also resets the nacks in the other column.

|                                            |                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                   |
|                                            | Please check the network environment of a device if rates of NACKs are constantly above 0.  |

- Added a DSCP (Differentiated Services Field Codepoints) setting to the Network menu. It allows a prioritization of data packets and data protocols during a session. Set DSCP in Menu - Network - Station Control in the  **Session** area. Tap DSCP to define DSCP values for this separated types of network packets:

  - MA-Net DMX
  - MA-Net Data
  - Network Update
  - DMX Protocols
  - In/Out Protocols
    - Tapping one of the buttons mentioned above will open a dropdown menu with multiple values. The default values are marked "(Default)".

* |                                            |                                                                                                                             |
  | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
  | ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                   |
  |                                            | For more information about the individual values, see <https://www.iana.org/assignments/dscp-registry/dscp-registry.xhtml>. |

|                                                    |                                                                                           |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                          |
|                                                    | On grandMA3 onPC for Windows® the DSCP values are overwritten with the default value CS0. |

- Added a TTL (Time To Live) button to the Network menu. Set TTL in  Menu - Network - Station Control in the  **Session** area. The TTL value specifies the lifespan of an IP packet. Each time the packet passes the next hop (for example, a router or gateway), its TTL is reduced by one, and it is discarded when the value reaches zero. Tap TTL and set a value using the calculator. The **Default** value is "8".

- Added Failure Mode (x) to the Output Configuration: Users can predefine a failure behavior for DMX Ports. For example, if a console crashes, **Hold** will send the output that was lastly calculated to the fixtures. The user can select one of 7 timestamps of the output between 10 seconds and 1 hour and **Hold**. **Timeout 10s** is the default. Any value other than the default is displayed with a **T** for a timeout value or an **H** for Hold in the lower right corner of the DMX Port cell.

- Improved the DMX output when creating a new show while being in session: The DMX output will be set to no DMX / High-Z instead of 0.

- Improved the grandMA3 session behavior in general.
  - If a device reconnects unsuccessfully multiple times within a short period of time (five times within one minute), it will stop trying to join the session again.

- Processing units do not load show files from previous version from their hard drive anymore. They will receive the migrated show file from the GlobalMaster station.

- If the data negotiation master is lost during the data negotiation process, the corresponding pop-ups are closed automatically on other stations. 

- Preconfigured nodes and onPC stations retain their preconfigured connector configuration in a session. Make sure you remove the configurations for absent devices on the session master first. If stations are already set up and join the session, their port configuration is retained unless they have already been configured in the show file.

- Improved Session Data Merge: For a console with a higher prio that is joining a session, a pop-up gives you the options to Keep Session's Show File, Keep My Show File, or Cancel.

- If a console with a higher priority than the current master is invited to the session, a pop-up gives you the options to Keep Session's Show File, Take the Invited Station's Show File, or Cancel. The invited stations name and IP is shown in red text in the pop-up. The additional checkbox Merge All Data If Compatible lets you decide if you want to merge all data or just keep a specific show file. This pop-up also replaces the session data merge dialog in this case.

- Added settings to define the defaults for the Session Data Merge per station to the Session area in  Menu - Network - Station Control:

  - Data Merge Default Mode: The mode that is pre-selected when the Session Data Merge pop-up opens. This mode is also executed automatically when the countdown expires. By default it is set to **Merge**, the other options are **Cancel** and **Use Master**.
  - Data Merge Default Timeout: Allows the user to change the countdown of the Session Data Merge pop-up. By default the value is set to 1 minute. In case of choosing the value **Unlimited**, the pop-up will stay open until the user makes a choice. In case of setting it to **0s**, no pop-up will appear and the default mode selected will be executed immediately.

- |                                            |                                                                                                      |
  | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
  | ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                            |
  |                                            | Changes to DSCP, TTL, Data Merge Default Mode, and Data Merge Default Timeout require admin rights.  |
  The new [Session keyword](/grandma3/2-4/keyword_session/) addresses all stations that belong to the same session. This allows, for example, to reboot or dismiss all stations using the same session credentials at once.

- The NetworkSpeedTest keyword allows to execute a test of the network connection for the specified devices. When done, a pop-up informs the user about **Station**, **IP**, **TCP Speed**, and **UDP Speed. ** 

Syntax: NetworkSpeedTest \[DeviceType] \["Device\_Name" or Device\_Number] 

For more information on how to test the speed of the network see the [NetworkSpeedTest keyword](/grandma3/2-4/keyword_networkspeedtest/).

|                                            |                                                                                                                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                        |
|                                            | TCP and UDP Speed are displayed in percent. 100% refers to the recommended bandwith. For more information, see [Network Design](/grandma3/2-4/network_design/).  |

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved NDI:

- Streams are limited to 1920 x 1080p resolution. If higher resolution streams are received, the stream will be blocked. To indicate a blocked stream, the corresponding Video Pool object displays this pulsing icon ![](/img/grandma3/2-4/icon_ndi_v2-2-cb6a9b.png). You must reduce the video resolution of the source and restart the stream to get it to play again.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Art-Net input:

- If the Sequence field in an ArtDmx packet is set to 0x00, the grandMA3 software will no longer try putting incoming Art-Net packets into the correct order.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved MIDI:

- Added **In & Out** to MIDI Data Mode: With MIDI Data Mode set to **In & Out**, MIDI data can be received and different MIDI data can be output without outputting the incoming data.
- Renamed **In & Out & Thru** (prior Thru).
- Improved the System Monitor regarding changes of the MIDI Input/Output: Changing the MIDI mode now will be displayed over the system monitor. If the connection is lost, the system monitor will show the reason for the disconnection, for example, "Data Mode input disabled".

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png)   Improved the Message Center:

- Added notifications  to the Message Center:\
  New messages and changes regarding the message center will now be displayed in the upper right corner of all big screens. These notifications are displayed for all devices in the session and have the same background color as the indication in the message center (red, orange, or green).\
  Messages can have different priorities and the following icons: Alert (![](/img/grandma3/2-4/icon_alert_v2-2_15px-7ae71a.png)), Error (![](/img/grandma3/2-4/icon_error_v2-2_15px-458d02.png)), Spam (![](/img/grandma3/2-4/icon_spam_v2-2_15px-a127d2.png)), Warning (![](/img/grandma3/2-4/icon_warning_v2-2_15px-fdb389.png)). \
  All messages can be disabled by disabling Notifications in the title bar of the message center.
- Added Notification Type. To display notifications only for a span of 5 seconds, select **Timed;** To display the notifications permanently until closing them, select **Permanent**.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Pool Action settings:

- Several pools, such as timecodes, timecode slots, macros, and plugins now have the Pool Action setting.
- The **Call** value can now be set in macros and plugins pools: To execute this function, tap the object. This is also the default value.
- Use **Toggle** to turn macros on and off tapping on the pool object. 
- Use **Top** to start at the beginning of a timecode. This function is located in the Timecode Pool.
- Use **Toggle**, **Off** and a **Pause** action with Timecode Slots.
- Use **Goto **and **Load **with Sequences.
- Pools with the setting Pool Action now have an additional value called **None**.
- The action SelFix/At now has an icon: ![Update this description text.](/img/grandma3/2-4/icon_selfix_at_v2-2_15px-eb32f8.png)
- Changed the icon of SelFix/Extract to ![Update this description text.](/img/grandma3/2-4/icon_selfix_extrakt_v2-2_15px-5929bb.png)
- Changed the icon of At to ![Update this description text.](/img/grandma3/2-4/icon_at_preset_v2-2_15px-1fa869.png)

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added Individual Object Action Settings:

- Object Action settings are now available in individual sequences and presets. The Object Action settings in the individual objects are the same as the Pool Action settings in pools. They can be set in the **EditSetting** pop-up of the individual object.
- Use Object Action has been added to the pool settings of sequences and presets. When enabled, the selected object action is executed instead of the selected pool action.  Pool windows with Use Object Action enabled, are marked with a (**+**).
- Pool objects indicate the selected object action setting with a light grey icon in the background of the object, if Use Object Action is enabled. The icons are:

- ![Update this description text.](/img/grandma3/2-4/icon_selfix_at_v2-2_15px-eb32f8.png): SelFix/At (Presets)

- ![Update this description text.](/img/grandma3/2-4/icon_selfix_extrakt_v2-2_15px-5929bb.png): SelFix/Extract (Presets) 

- ![Update this description text.](/img/grandma3/2-4/icon_at_preset_v2-2_15px-1fa869.png): At (Presets)

- ![Update this description text.](/img/grandma3/2-4/icon_flash_15_v2-1-f18512.png): Flash

- ![Update this description text.](/img/grandma3/2-4/icon_goplus_15_v2-1-381189.png): Go+

- ![Update this description text.](/img/grandma3/2-4/icon_temp_15_v2-1-290073.png): Temp

- ![Update this description text.](/img/grandma3/2-4/icon_toggle_15_v2-1-8614b5.png): Toggle

- ![Update this description text.](/img/grandma3/2-4/icon_select_s_v2-2_15px-f56d1a.png): Select (Sequences)

- ![Update this description text.](/img/grandma3/2-4/icon_goto_v2-1-096e62.png): Goto (Sequences)

- ![Update this description text.](/img/grandma3/2-4/icon_load_v2-2-edf9a2.png): Load (Sequences)

- Extended the Assign command in order to assign playback keywords as object action. It is now possible to use a sequence or preset as target in the assign command. While doing so, the playback command will be entered as the object action of the specified sequence or preset.\
  Example: To set Temp as object action in sequence 5, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Temp At Sequence 5 |

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Timecode Pool:

- Objects in the Timecode pool now display the Timecode Slot in the upper left corner below the pool number. They are displayed in the color defined in the settings of the timecode slot object. The currently selected timecode slot is displayed in angle brackets. 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Window Settings:

- If you create a new window and preferences have already been stored in the settings of the same type of window, the top preference will be applied automatically.
- The settings and preferences are now separated per Preset pool. Exception: The preset pools of custom feature groups still share their settings and preferences.
- Added 2 Finger Edit to the settings of the preset pools and the sequence pool. Toggling this button disables or enables the possibility to edit objects by right-clicking or using the two-finger gesture.
- Renamed 2 Finger Edit in the Layout Viewer (prior Right Click to Edit).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the resizing of windows:

- Double tap the title bar to resize the window to the largest possible size on the screen. In pool windows double tap on the title field below the MA logo.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved New Show Files:

- When starting a new show file it is now directly initialized and the standard set of preset pools and the feature groups in the encoder bar are available right away.
- If you do not clear all data, the name of the old show file and the data that was taken over will be displayed in the description of the new show file.
- In new shows, the Settings bar is enabled by default.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Configure Display Pop-up:

- The pop-up displays in the title bar the number of the display that is to be configured.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Syntax when storing new Objects:

- If you do not specify a target during storing, the new object will be placed to the first free spot of the pool. For example, instead of Store Group 5 (where 5 is the explicit target in the group pool), a Store Group is enough to create a new group.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Add Window Menu:

- Unnecessary borders around icons have been removed. The maximum size of icons is reduced to 256 x 256 pixels.
- Pressing an alpha-numeric key automatically opens the All tab and the keyboard input is entered into the search field.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Handle tab of the **Assign Menu** and **Executor Configurations** pop-up:

- Icons for the Executor rows are now more realistic and similar to the actual Executors.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Patch Menu:

- The fixture type editor now has the CIE color picker for color wheels. It is possible to select colors outside the sRGB colorspace. Faders **x**, **y**, and **Y** were also added.
- A DMX Footprint column was added to the fixture type editor. The DMX Footprint is the number of DMX Channels a mode occupies, including not used DMX channels in between.
- The DMX Footprint is now displayed in brackets in the DMXChannels tab in the DMXMode editor, located in the Fixture Type editor.
- Speeded up the patch conversion in general, when exiting the patch after making changes to it.
- Fixture types with DMX breaks now display their DMX footprint per break in the fixture library.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Hardware Detection of grandMA3 onPC running on Windows:

- Made the hardware detection a bit more tolerant.
- A checkbox allows to suppress the pop-up on the next start in case of insufficient VRAM or RAM reports.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Clone Window:

- Fixtures that are cut from the Clone Source or the Clone Destination are indicated by a red background color.
- Added a total count of fixtures. Next to Clone Source and Clone Destination, the numbers in parentheses indicate the total number of fixtures on each side. 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Preset Pools:\
Presets with infinite circular references of recipes have an additional light red icon (![](/img/grandma3/2-4/icon_15_infinity_v2-1-b47483.png)) in the background of the pool object.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the automatic naming of presets, for example embedded presets:\
The mechanism uses the name of one preset of each used function group before using other preset names of the same function groups.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Playback Bar: Indicators for Masters are displayed in the top right corner of executors and special executors.\
They are:

- SM: Selected Master
- GM: Grand Master
- SP: Speed Master
- PB: Playback Master
- TM: Timing Master

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Selection button in the Encoder Bar: If a fixture is placed at a position in the selection grid other than 0/0/0, the button indicates which axis the fixture is positioned on with X, Y, and Z labels.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Random Generators:\
It is now possible to set a speed master for a generator.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Speed of the Total Reference Update Mechanism:\
The order of references to be updated was changed so all references of running playbacks are updated first.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the Command Line History:\
Commands, that are executed through macros and cue commands, now display the source of the commands in front of them.\
For example: 

|      |                                                       |
| ---- | ----------------------------------------------------- |
| OK : | Call Macro 1                                          |
|      | (Macro 1 'Select EncoderBar') OK: Select EncoderBar 1 |

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved Lua:

- Expanded the PropertyInfo() function: PropertyInfo(light\_userdata:handle, integer:property\_index): {'ReadOnly'=boolean:read\_only\_flag, 'ExportIgnore'=boolean:export\_ignore\_flag, 'ImportIgnore'=boolean:import\_ignore\_flag, 'EnumCollection'=string:enum\_collection\_name}

- Sequences have a LoadedCue field which can be retrieved using Lua: GetObject("Sequence 1").LoadedCue

- SetProgPhaser() and GetProgPhaser() changed to \['measure'=integer:percent].

- The Version() function has been improved: It is possible to get the individual parts of the version number as separate numbers; 

  return function()

  local textVersion, major, minor, streaming, ui = Version();

  Printf("Software version is: %s", textVersion)

  Printf("Major version number is: %i", major)

  Printf("Minor version number is: %i", minor)

  Printf("Streaming version number is: %i", streaming)

  Printf("UI version number is: %i", ui)

  end



![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the keyword **Label**:

- If no object type is specified after the keyword, Label is automatically applied to a cue. For example: Label 1 "Awesome" will label the first cue of the selected sequence with the new name "Awesome".

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added the possibility to asynchronously execute remote commands, using the /Async option keyword. 

For more information on how to use /Async see the [/Async option keyword](/grandma3/2-4/ok_async/).

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added the possibility to assign an object to multiple targets at the same time:

- To do so, enter into the command line Assign \[Object] \["Object\_Name" or Object\_Number] and then keep At pressed and select the objects you want to assign the first object to.
- Example: If you assign appearance 1 to sequences 1, 2, and 3, the command will look as follows:

|                                                                    |                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Appearance 1 At Sequence 1 + 2 + 3 |

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added new keyword **Copy****CrashLog:**

- CopyCrashLog allows you to copy crash logs to connected USB drives. If more than one USB drive is connected to your device, a pop-up will appear asking you to select the USB drive you would like to copy the crash logs to. If no USB drive is connected, a pop-up will ask if the file should be stored on the internal drive.

For more information on how to use CopyCrashLog see the [CopyCrashLog keyword](/grandma3/2-4/keyword_copycrashlog/).

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added the **option /Remove** as an extended functionality to **the CopyCrashLog keyword**. In combination with the CopyCrashLog keyword, the /Remove option keyword deletes crash logs on the device after copying.

For more information on how to use /Remove in combination with CopyCrashLog see the [/Remove option keyword](/grandma3/2-4/ok_remove/).

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added new keyword **List****CrashLog**. ListCrashLog lists all crash logs in the command line history.

For more information on how to use ListCrashLog see the [ListCrashLog keyword](/grandma3/2-4/keyword_listcrashlog/).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the keyword **DumpLog**:

- When there is one USB drive connected the log file will be stored on the USB drive directly. When there are several external drives connected, a pop-up will appear asking you to select the USB drive you would like to dump the log to. If no external USB drive is connected to your grandMA3 device, a pop-up will appear asking you if the file should be stored on the internal drive.
- Using the /Limit option keyword in combination with DumpLog keyword defines the number of lines that will be copied to the resulting file. The number you specify using the /Limit option keyword specifies the number of lines starting at the bottom of the list.

For more information on how to use /Limit in combination with the DumpLog keyword see the [/Limit option keyword](/grandma3/2-4/ok_limit/).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the If command:

- Objects can be used as an if filter for commands:\
  Example: Label Group Thru If Appearance 20 will open a label editor for all groups where appearance 20 is assigned.\
  For more information see the [If keyword](/grandma3/2-4/keyword_if/). 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the CleanUp keyword:

- The [/Type option keyword](/grandma3/2-4/ok_type/) now works in combination with the [CleanUp](/grandma3/2-4/keyword_cleanup/)[ keyword](/grandma3/2-4/keyword_cleanup/). The user has to define a value for /Type. These are the values:

  - NoReference: Deletes all objects that do not have any reference in the specified range. For example, it will delete presets that are not used in cues or recipes.
  - Recipe: Deletes recipes in the specified object that do not generate output.

- The new [/Recipe option keyword](/grandma3/2-4/ok_recipe/) can only be used if the type is set to **Recipe** in the Cleanup command. Using this option it is possible to define even more precisely which recipes are to be deleted:

  - NoOutput: Recipes that do not generate output are deleted. This combines the following values (NotCooked and CookedButOverwritten). When specifying /Type "Recipe" but not using /Recipe in addition, this action will take place.
  - NotCooked: This removes recipes that are not fully functional. For example, when the assigned preset cannot be used by the selection or when the assigned group is empty.
  - CookedButOverwritten: Deletes all recipes that could be cooked successfully but do not generate output. For example, when a later recipe in the same selection uses a preset with values of the same attributes. 

Example:

- To clean up all recipes that do not generate output in cue 2 part 0 of sequence 1, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CleanUp Sequence 1 Cue 2 Part 0 /Type "Recipe" |

or

|                                                                    |                                                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CleanUp Sequence 1 Cue 2 Part 0 /Type "Recipe" /Recipe "NoOutput" |

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added new keyword **HelpKeyword**. HelpKeyword directly triggers the list of keywords in the command line history. Execute **HelpKeyword** and subsequently tap ![Update this description text.](/img/grandma3/2-4/icon_ma_15_v1-7-c0ee8b.png) on the left in the command line. 

|                                                  |                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                     |
|                                                  | It is still possible to trigger the list executing Help + Please, however, it will be removed in a future version. |

For more information on how to use HelpKeyword see the [HelpKeyword keyword](/grandma3/2-4/keyword_helpkeyword/).

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Added the possibility to unassign objects from other objects (for example Tags from Sequences, or Appearances from Groups) by using commands that combine **Assign** and **Off**:

Assign Off \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

Example:

To unassign the appearance called "Red" from the group "Spots DS", type:

|                                                                    |                                                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Off Appearance "Red" At Group "Spots DS" |

---

 

## Changes

- New keywords:

  - [CopyCrashLog](/grandma3/2-4/keyword_copycrashlog/)
  - [Deactivate](/grandma3/2-4/keyword_deactivate/)
  - [EditRecipe](/grandma3/2-4/keyword_editrecipe/)
  - [HelpKeyword](/grandma3/2-4/keyword_helpkeyword/)
  - [ListCrashLog](/grandma3/2-4/keyword_listcrashlog/)
  - [NetworkSpeedTest](/grandma3/2-4/keyword_networkspeedtest/)
  - [Session](/grandma3/2-4/keyword_session/)
  - [Tag](/grandma3/2-4/keyword_tag/)

- New option keywords:

  - [/Async](/grandma3/2-4/ok_async/)
  - [/Recipe](/grandma3/2-4/ok_recipe/)

|                                            |                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                  |
|                                            | For more information about the new keywords, please read the corresponding sections above. |

New color theme colors:

- ColorDefinitions:

  - Global.DmxTest
  - PoolDefault.Executor
  - PoolDefault.Station
  - PoolDefault.Tags

- Colors:

  - Action.None
  - Action.Select
  - Action.Flash
  - Action.Go
  - Action.Temp
  - Action.Toggle
  - Assignment.Executor
  - Assignment.Station
  - GroupedProgLayerActive.DmxTest
  - GroupedProgLayerHas.DmxTest
  - Network.Missing
  - Network.OtherSession
  - OutputStation.Connected
  - OutputStation.GlobalMaster
  - OutputStation.Missing
  - OutputStation.OtherSession
  - OutputStation.Standalone
  - PoolWindow\.Recipes
  - PoolWindow\.Tags
  - RecipeEditing.Active
  - RecipeEditing.SoftFrame
  - RenderData.ButtonBackground
  - RenderData.EmptyButton
  - RenderData.EmptyButtonHover
  - RenderData.ExecuteIcon
  - RenderData.SelectedRowBorder
  - RenderData.Text
  - RenderData.TextBlack
  - SelectionGrid.XyzTextColor
  - Subfixture.DimmerBarBackground
  - Subfixture.DimmerBarForeground
  - Subfixture.DimmerBarFrame
  - Subfixture.MarkerBackground
  - TrackProgLayerActive.DmxTest
  - TrackProgLayerHas.DmxTest

- Changed color definitions:

  - SequenceGrid.ProgressTrig references now to SheetColor.Delay
  - Network.GlobalMaster is now blue instead of cyan

- Removed color theme colors:

  - Colors: 

    - Assignment.UpdatePreset
    - Assignment.UpdateSequence 

- New grandMA3 Lua Functions:

  - Acquire(light\_userdata:handle\[, string:class\[, light\_userdata:undo]]): light\_userdata:child\_handle
  - CloseMessageQueue(string:queue name): boolean:success
  - CopyFile(string:srcPath, string:dstPath): boolean:result
  - GetTextScreenLine(nothing): integer:internal line number
  - GetTextScreenLineCount(\[integer:starting internal line number]): integer:line count
  - OpenMessageQueue(string:queue name): boolean:success
  - SampleOutput(table:sampling points): table with results | boolean:false, string:result text
  - SendLuaMessage(string:ip/station, string:channel name, table:data): boolean:success

- Renamed Pool Action (prior Action)

- Changed the icon for SelFix/Extract to ![Update this description text.](/img/grandma3/2-4/icon_selfix_extrakt_v2-2_15px-5929bb.png)

- Changed the icon for At to ![Update this description text.](/img/grandma3/2-4/icon_at_preset_v2-2_15px-1fa869.png)

- Renamed the MIDI Mode In & Out & Thru (prior Through)

- Changed the minimum width and height of layout elements from 20 to 1

- The new Recipe Editor replaces the Programmer Parts window.

- Renamed Change on Encoder (prior Change on Encoder Event).

- Renamed 2 Finger Edit (prior Right Click to Edit).

- Renamed the values of Direction setting of the Arrangement Mode grid :

  - First X then y to X before Y
  - First Y then X to Y before X
  - First X then Z to X before Z
  - First Z then X to Z before X
  - First Y then Z to Y before Z
  - First Z then Y to Z before Y

- Removed the abbreviation **Net** in the **_NetworkNode keyword_**. This keyword uses the abbreviations **Node** and **NetworkN**. The **_NetworkspeedTest keyword_** uses the abbreviation **Net**.\
  For more information see the keywords [NetworkNode](/grandma3/2-4/keyword_networknode/) and [NetworkSpeedTest](/grandma3/2-4/keyword_networkspeedtest/). 

---

 

## Bug Fixes

### 3D

| Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| Pointing beams into the 2D camera lead to visual artifacts.                                                                           |
| If the 3D viewer was open and different groups were selected, illegal array values in 3D caused the console to freeze.                |
| Incompatible diver versions for AMD RX 5700 XT and RX 570 graphic cards could cause the software to crash when opening the 3D viewer. |
| When using Position Calibration, the calibration points were not displayed in the 3D Viewer window.                                   |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pressing and holding Help and then pressing Page+, Page-, or Oops executed the command additionally to opening the help viewer. This bug is now fixed. Now the corresponding topic opens in the help viewer without executing the command.                                                                                                                                                               |
| If you edited a macro, the command preview would sometimes be wrong.                                                                                                                                                                                                                                                                                                                                     |
| If you assigned a sequence to an empty sequence, a pop-up would ask whether you wanted to overwrite the new sequence although it was empty. If you pressed Yes, the sequence would be successfully assigned, however, the command line would show an "Illegal Object".                                                                                                                                   |
| If you used the Label keyword to label cues of a selected sequence, the command line would show an “Illegal Object Error”.                                                                                                                                                                                                                                                                               |
| Assigning a sequence to another sequence using the command line without writing "sequence" a second time, for example Assign Sequence 1 at 2, did not work.                                                                                                                                                                                                                                              |
| It was not possible to assign appearances and scribbles to mirrored sequences.                                                                                                                                                                                                                                                                                                                           |
| Assigning objects to sequences created new and empty sequences in the pool.                                                                                                                                                                                                                                                                                                                              |
| If you selected fixtures by typing the FIDs connected with a + in the command line, for example 1+2+3, all attributes would be knocked in into all fixtures except for the first fixture.                                                                                                                                                                                                                |
| A pop-up opened by a macro, that required an input which was not a string, only appeared on the screen that was in focus. This bug is now fixed. The pop-up now appears on all screens.                                                                                                                                                                                                                  |
| Oopsing lasso selection in the layout was not possible. Instead the command line was oopsed.                                                                                                                                                                                                                                                                                                             |
| If you copied fixtures from one layout to a different layout that already included the copied fixtures and tapped on "Create Empty Element" in the appearing pop-up, duplicates of the selected fixtures would be inserted.                                                                                                                                                                              |
| It was possible to store and overwrite view buttons after their view has been locked.                                                                                                                                                                                                                                                                                                                    |
| Assigning a sequence to an empty view button did not delete the screen content.                                                                                                                                                                                                                                                                                                                          |
| Elements were hidden by default when assigning fixtures to layouts.                                                                                                                                                                                                                                                                                                                                      |
| Keyboard shortcuts Ctrl+Z and Ctrl+Y both triggered Oops. Now only Ctrl+Z triggers Oops.                                                                                                                                                                                                                                                                                                                 |
| Commands that employ a defined range of objects using handles could fail.                                                                                                                                                                                                                                                                                                                                |
| If you opened the Off Menu pressing Off twice, one Off would still remain in the command line. This bug was fixed. Now the command line will be cleared after pressing Off twice.                                                                                                                                                                                                                        |
| It was not possible to use properties of encoder banks in variables.                                                                                                                                                                                                                                                                                                                                     |
| If you tried to delete an object in a layout that was not in setup mode, a pop-up would inform you that this is not possible, but Delete would still be shown in the command line and Delete would still light up.                                                                                                                                                                                       |
| If you created a customized encoder bar and made changes to the patch, this would occasionally break the selector of the encoder bank.                                                                                                                                                                                                                                                                   |
| MAtricks From/To properties are returned as integers instead of floats, for example, when using Lua "Printf(ObjectList('Cue 1 Part 0.1')\[1].FadeFromX)".                                                                                                                                                                                                                                                |
| If you edited a macro line or cue command and pressed Oops, the characters would not be deleted in the expected order.                                                                                                                                                                                                                                                                                   |
| Updating fixtures in other cue parts, except for part 0, could cause them to be moved to part 0 of the cue.                                                                                                                                                                                                                                                                                              |
| Updating a specific cue with the command line while another cue was running, for example _**Update Cue 1**_, did not update the specific cue, but the running one                                                                                                                                                                                                                                        |
| Changes to the device configuration, output configuration and local settings did not trigger a pop-up asking the user to save the show file.                                                                                                                                                                                                                                                             |
| If you imported a layout that contained multiple fixtures with the same name, only the first fixture with that name would appear in the imported layout.                                                                                                                                                                                                                                                 |
| If you changed the Action setting in a sequence pool to something other than Select and tapped on an empty tile in the pool, an empty sequence would still be created and selected.                                                                                                                                                                                                                      |
| When a gel was stored and recalled outside the sRGB color space, the stored gel was recalled on the edge of the sRGB color space.                                                                                                                                                                                                                                                                        |
| The software could crash after deleting a track or a single event in Timecode due to invalid memory access.                                                                                                                                                                                                                                                                                              |
| Cutting and Pasting** **multiple timecode events while you are in a session, may have caused other stations to drop out of the session.                                                                                                                                                                                                                                                   |
| In some cases, timecode events behaved as if Assert previous Events was enabled even if it was not.                                                                                                                                                                                                                                                                                                      |
| The software could crash when executing EditSetting for a recipe in a programmer part.                                                                                                                                                                                                                                                                                                                   |
| The command line, command line history, and system monitor would show an illegal property if you opened the color picker in the Special Dialog window in the Book  view and tapped on View  or Sort By.                                                                                                                                                                                                  |
| Some invalid syntax in the command line, for example _**Page 1.201 thru 1.203 at 100**_, created multiple unwanted objects.                                                                                                                                                                                                                                                                              |
| If you stored a cue using tracking shield, in some cases values from a previously referenced preset would be stored as hard values in the cue without the preset reference. The data output was not altered by this.                                                                                                                                                                                     |
| If you had multiple fixtures with the same name in a layout, copied them and pasted them to a different layout, only the first line would reference a fixture, the other lines would not display the selected fixtures.                                                                                                                                                                                  |
| If you selected a grouping fixture in the fixture sheet, sometimes the software would crash or the GUI would freeze.                                                                                                                                                                                                                                                                                     |
| If you imported pages with playback masters from a show file using PSR, the playback master would be an empty executor object.                                                                                                                                                                                                                                                                           |
| If you were renumbering cues, the incremental delta used to enumerate cues would not be taken from the first one in the list, but all cues would be processed.                                                                                                                                                                                                                                           |
| Sometimes the selected color of a fixture was bound to the sRGB color space, even if the fixture was capable of having colors outside of this color space.                                                                                                                                                                                                                                               |
| When having a lot of objects in a layout selected and then opening the layout editor the software scrolled through all selected items, and when finished it was not possible to select items.                                                                                                                                                                                                            |
| Layout elements did not have dependencies to their assigned objects. This bug is now fixed. When exporting and importing layouts or importing layouts using PSR, the dependencies are imported as well. When fixtures are exported as dependency, they need to exist in the destination show file as well. Sequences are not exported as dependencies, as they have usually also a lot of dependencies.  |
| The software could crash when overwriting an existing user profile during the import of user profiles.                                                                                                                                                                                                                                                                                                   |
| Importing of environmental fixtures via PSR did not import the 3D models correctly.                                                                                                                                                                                                                                                                                                                      |
| The software could crash after selecting a show file for PSR and initializing the PSR process.                                                                                                                                                                                                                                                                                                           |
| When fixing or unfixing a page, the assigned objects did not change their fix indication immediately.                                                                                                                                                                                                                                                                                                    |
| The software could crash when storing a preset using DMX as data source while having several programmer parts with duplicate values.                                                                                                                                                                                                                                                                     |
| If you cloned a large number of unordered fixtures, the cloning could fail and the command line history would only display a green bar instead of the syntax.                                                                                                                                                                                                                                            |
| Importing files with an apostrophe in the name could lead to the name of the file being interpreted as command line input and the file not being imported.                                                                                                                                                                                                                                               |
| If you were in a session and added a note to a cue using the command line, the note would not be visible on the connected stations.                                                                                                                                                                                                                                                                      |
| Using Dimmer Cue Only would sometimes track the stored dimmer value into the next cue if a fixture had two or more attributes in which dimmer was set in the special column in the attribute definitions.                                                                                                                                                                                                |
| Starting the PSR process could lead to broken handles in commands.                                                                                                                                                                                                                                                                                                                                       |
| In imported layouts that were previously exported, the appearance of some layout elements would sometimes not be imported.                                                                                                                                                                                                                                                                               |
| Imported sequences that had previously been exported had wrong values for individual timings below 0.1 seconds.                                                                                                                                                                                                                                                                                          |
| If you overwrote an existing cue, the name of the cue would be reset.                                                                                                                                                                                                                                                                                                                                    |
| If you extracted values from a preset and another preset could be updated with those values, Update would not light up.                                                                                                                                                                                                                                                                                  |
| On some mac devices an error appeared, stating that the hard drive was full. This can happen if the folder permissions are set up in a way that do not allow a "shows" folder to be created. This has been improved. A pop-up now informs the user about this and tells to check the folder permissions.                                                                                                 |
| Deleting a generator in data pool 2 or higher deleted the entire data pool.                                                                                                                                                                                                                                                                                                                              |
| When editing Column Sets while being in session, the changes were not immediately transferred to the other stations.                                                                                                                                                                                                                                                                                     |
| When storing to an existing view with an appearance and the screenshot functionality was not used when storing, the appearance was removed from the view.                                                                                                                                                                                                                                                |
| When Color Readout was set to **CMY** and channel sets of ColorRGB attributes were used, the values were not inverted.                                                                                                                                                                                                                                                                                   |
| When you loaded a show file where the Layout Element Defaults were renamed, a new set of Layout Element Defaults would be imported. This bug is now fixed. It is no longer possible to rename Layout Element Defaults. In v2.2, show files with renamed Layout Element Defaults are corrected when loading the show file. After that renaming is no longer allowed.                                      |
| If you imported a plugin in the show converter and then selected and imported another one, the first plugin would be added to Local a second time.                                                                                                                                                                                                                                                       |
| If you executed a command with IfOutput, all fixtures would be displayed on grid position 1/1 in the selection grid. This bug is now fixed. Now the fixtures are displayed as a linear selection in the selection grid for all except for selective presets.                                                                                                                                             |
| If you changed the FID of a fixture using Lua, the software would crash.                                                                                                                                                                                                                                                                                                                                 |
| If you exported a user profile after enabling Hide Environmental in the PSR Patch and imported it into a show file, the software would crash.                                                                                                                                                                                                                                                            |
| If you included an empty group in a command, the command would not be executed.                                                                                                                                                                                                                                                                                                                          |
| If you created a new page by pressing Page+ and assigned an executor configuration to that page, assigning an appearance to the new page would cause the executor configuration to be lost the first time.                                                                                                                                                                                               |
| Changing values for specific cue parts did not take the corresponding cue part into account. Instead, part 0 was used.                                                                                                                                                                                                                                                                                   |
| Show file names that contained a ' in the file name could not be loaded.                                                                                                                                                                                                                                                                                                                                 |
| The software could freeze when multiple pop-ups were open at the same time and the user tried to close the top one.                                                                                                                                                                                                                                                                                      |
| Assigning a Sequence to a ViewButton created a hidden object on this button. Afterwards it was not possible to move a View onto this ViewButton.                                                                                                                                                                                                                                                         |
| The Preset Timings defaults for cues in the Preferences and Timings menu displayed empty buttons when no additional feature groups were existing.                                                                                                                                                                                                                                                        |
| The software would sometimes crash when executing ListRef.                                                                                                                                                                                                                                                                                                                                               |

### Connections

| Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It could happen that a device was displayed twice in the output configuration if you joined and left a session several times and used Remove Absent in between.                                               |
| When the Root Bridge of an RSTP changed, the session did not work anymore.                                                                                                                                    |
| If DMX Remotes **In From** and **In To** were inverted (255-0), the resulting fader movements for the assigned object would not be executed.                                                                  |
| If you left a session with the master device, changed the sACN configuration and then rejoined the session and merged all data, the devices in the session would have different sACN configurations.          |
| If you joined a session with a different show file, a Session Data Merge pop-up would appear despite the show files not being compatible.                                                                     |
| While in a session, a station could drop out of the session if a sequence was deleted.                                                                                                                        |
| If two devices in a session were receiving two Art-Net or SACN streams input on the same local universe with HTP, the output of the connected station would flicker.                                          |
| PSR import of show file from external USB drive failed with an "PSR input file invalid" error message.                                                                                                        |
| grandMA3 onPC on running on Windows only listed real network interfaces. This bug is now fixed. grandMA3 onPC running on Windows also lists virtual network interfaces.                                       |
| When the grandMA3 software sent an RDM packet to an RDM fixture, for example when changing the DMX Personality, it could happen that the RDM packet was sent with the previous value instead of the new one.  |
| Sound input was not transferred to other devices in a session.                                                                                                                                                |
| When connecting to a processing unit using an older show state than on the console, an unnecessary Session Data Merge pop up appeared.                                                                        |
| Inviting or dismissing grandMA3 stations to a session changed the output when the current output was coming from tracked values and playbacks with blocked values in the background were still active.        |

### Patch

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you deleted data in a fixture type in the fixture type editor and then oopsed the deletion, physical descriptions that were linked would not be oopsed.                                                                                                                                                                                                                                                                                                                                                                      |
| If you changed the pretty name of the dimmer in the attribute definitions tab of the patch, all sheet modes, except for the fixture, would appear blank in the fixture sheet.                                                                                                                                                                                                                                                                                                                                                   |
| In some cases, if a station joined a session, there would be no option for the merge of show data. Instead, a pop-up would ask the user to choose between two show files without displaying the affected data. This could for example happen, if a station with a high priority dropped out of a session and rejoined the session after changes were made to preset data that was used as a default in the patch, resulting in patch changes.                                                                                   |
| Alphabetical sorting of the Fixture Type column in the patch did not work.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| If you performed a Partial Show Read with Merge PSR after changing the Attribute Definitions in the Patch, the changes would not be kept in the merged show file. This bug is now fixed. The Attribute Definitions of the local show file will be used when using Partial Show Read.                                                                                                                                                                                                                                            |
| With Partial Show Read some fixture of the local running show were deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| If the stages in the local show file had the same name (or default names), the same size and the same orientation, when you performed a Partial Show Read, stages of the local running show other than Stage 1 were deleted and all patched fixtures of the local show were added to Stage 1.                                                                                                                                                                                                                                   |
| PSR did not work with files that were stored on an external USB flash drive.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| If the mode of a fixture type was changed, for example from “Basic” to “Extended”, fixtures of this type would not share previous values of global preset data anymore. Instead, only the first patched fixture would keep values of the global preset data.                                                                                                                                                                                                                                                                    |
| If fixtures had been exchanged in the patch, recipes of cues containing the exchanged fixtures had to be recooked or merged again.                                                                                                                                                                                                                                                                                                                                                                                              |
| When editing a fixture type and then deleting the DMX Mode rows, conflicts would occur when pressing Oops.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| If a mode of a fixture type had conflicting attributes in geometry, for example two different color mixing systems, the fixture type could not be imported  in any mode, even if other modes did not have any conflicting attributes. This bug is now fixed. Now in the fixture type editor, conflicting modes and their channels are displayed in red and can be adjusted. Additionally, information about conflicting attributes in geometry are shown in the conflicts information window. All other modes work as expected. |
| Rearranging the order of stages in the patch would hide all fixtures.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| If a fixture had unused DMX channels, the DMX Footprint shown in the Library in the Patch would be wrong.                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Playback

| Description                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entering the desk lock while touching the faders kept the faders highlighted after releasing the fingers of the faders.                                                                                                                                                                                                          |
| If you oopsed a preset selection for a recipe in the programmer, the value in the programmer would be lost instead of returning to the previously selected preset.                                                                                                                                                               |
| Bitmaps and generators in programmer recipes did not generate output.                                                                                                                                                                                                                                                            |
| If you used the bitmap generator, switching off the source did not switch off the output.                                                                                                                                                                                                                                        |
| The Zoom fader of the bitmap generator did not refer to the center of the input, but to the center of the canvas.                                                                                                                                                                                                                |
| When increasing the value of virtual dimmers by using the relative layer, the color tone of the other ColorRGB channels increased further even if the first ColorRGB channel had already reached 100%.                                                                                                                           |
| If a sequence was not running, executing Go- or <<< would always trigger the first cue. This bug is now fixed. Now if a sequence is not running and Restart Mode is set to **First Cue**, executing Go- or <<< triggers the first cue. If Restart Mode is set to **Current Cue** or **Next Cue** it behaves the same way as Go+. |
| When addressing a non-existent cue in a playback command, either the first cue was executed if the sequence was off, or the current cue was executed again if the sequence was on. This bug is now fixed. When addressing a non-existent cue in a playback command, the command line now returns an error.                       |
| The output for mirrored sequences was not updated immediately. Instead, the sequence had to be restarted to see the changes.                                                                                                                                                                                                     |

### Windows

| Description                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The error pop-up "Load show failed." could appear on any screen. This bug is now fixed. Now the pop-up always appears on all screens.                                                                                                                                                                                                        |
| If you changed the width of a column in the sequence sheet, the column editor sometimes would not display all columns.                                                                                                                                                                                                                       |
| A screenshot that was previously stored on a view button would not disappear if you disabled the screenshot function and stored the view again.                                                                                                                                                                                              |
| Pool window preference settings were not applied directly after saving. This bug is fixed. When storing a pool window on the screen the first preference stored is used in all pool settings except for preset pools.                                                                                                                        |
| The Edit Columns pop-up in the sequence sheet could be opened several times.                                                                                                                                                                                                                                                                 |
| Removing fixtures in the selection grid by pressing - did not consider MAtricks positions, so the wrong fixtures were removed.                                                                                                                                                                                                               |
| If Setup was enabled in the selection grid, the selection of fixtures would not be cleared after moving them around and then selecting different fixtures. Pressing Clear now sets all fixtures as partly selected. Therefore, the workflow "Select -> Change -> Select" is possible.                                                        |
| Symbol and gobo previews were not displayed when imported from the symbols and gobos pool.                                                                                                                                                                                                                                                   |
| Properties of sounds were not displayed in the sounds tab of the running playbacks window.                                                                                                                                                                                                                                                   |
| If you toggled through the different column sets within the column set editor, the column area would be blank when cycling through the sets the first time.                                                                                                                                                                                  |
| When the login pop-up appeared, the cursor was set to the Password input field. This bug is now fixed. The cursor is now set to the User input field.                                                                                                                                                                                        |
| It was not possible to change the display intensity and color theme on xPort nodes and I/O nodes.                                                                                                                                                                                                                                            |
| The indicators for parked and DMX Tester did not analyze fine and ultra channels.                                                                                                                                                                                                                                                            |
| If you adjusted the hue value of a color using the color picker after changing the saturation, the saturation would jump to a different value.                                                                                                                                                                                               |
| If you created a square using the shaper dialog and tried to adjust it afterwards, the shapers would sometimes not work as expected and could jump to full or zero.                                                                                                                                                                          |
| If you resized layout elements in y direction in a layout in setup mode, the snap grid setting would not be respected and the elements could be resized without restriction.                                                                                                                                                                 |
| If you scrolled in the help using the two-finger gesture, the scrolling of the page would not be in sync with the movement of the fingers.                                                                                                                                                                                                   |
| It was not possible to edit a note in the Info Window by tapping anywhere below the last item in the note tab due to a very small text field. Now the text box extends to the bottom of the window and can be easily edited.                                                                                                                 |
| Recipes were displayed in the Notes tab of the Info window if they were children of cue part 1 or higher.                                                                                                                                                                                                                                    |
| When editing an appearance in the appearance pool, the fader for Background Color showed different values than those entered using the calculator.                                                                                                                                                                                           |
| In the Appearance Pool, it was not possible to select a color from the Color Picker if the RGB values were set to 0%.                                                                                                                                                                                                                        |
| If you changed values in the HSB color picker and then used the hue encoder within 2 seconds, the color picker unexpectedly jumped to the wrong position.                                                                                                                                                                                    |
| If you changed values in the dimmer encoder bank and then changed the encoder bank, and then pressed  Off + tapped the Dimmer encoder bank button, you could not enter the dimmer encoder bank again.                                                                                                                                        |
| Fixtures were deselected when doing a 2 finger scroll gesture in a Layout Viewer window while it had Setup enabled.                                                                                                                                                                                                                          |
| If you opened the on-screen keyboard for the command line and typed in Help, the help pop-up would not open.                                                                                                                                                                                                                                 |
| If you assigned elements to an Xkey and then tried to edit the Xkey, the **Edit** overlay would open on the small Screen 7, making it unusable. This is fixed and the Editor now opens on Screen 1.                                                                                                                                |
| If display 1 was not connected on CRV**** consoles, windows with encoder bar functions, such as the 3D Viewer window in Setup mode, did not display their encoder bar on the letterbox screen of the console.                                                                                                                 |
| Help overlay was displayed defective on small screens.                                                                                                                                                                                                                                                                                       |
| When using the virtual keyboard to write a description in the Backup menu, the text was not saved when tapping Please.                                                                                                                                                                                                                       |
| Entering special characters in notes using the on-screen keyboard resulted in incorrect text being entered in the note.                                                                                                                                                                                                                      |
| The list of stations in the Software Update menu did not refresh automatically after reboot.                                                                                                                                                                                                                                                 |
| Layout elements of fixtures could be displayed at full intensity but the intensity of the fixture was not set to 100%.                                                                                                                                                                                                                       |
| Changing the mode of a fixture could lead to data from a global preset not being applied to that fixture anymore.                                                                                                                                                                                                                            |
| If you had a user-defined area that was bigger than the display and had a special dialog window open on the shapers tab, scrolling down would lead to the visual being displayed on top of the command line instead of being hidden by it.                                                                                                   |
| If the fixture sheet was in channel mode, in some cases fixtures would be displayed with a red background despite not having active values in the programmer.                                                                                                                                                                                |
| In the Generator Editor, the Speed fader did not allow values above 60 BPM. This bug is now fixed. Now the maximum is 255 BPM with the fader and 3600 BPM with the calculator.                                                                                                                                                               |
| In the Info window, if you wrote a note for a sequence, after the fist letter the text would jump to the cue.                                                                                                                                                                                                                                |
| If Setup was enabled in the Layout Viewer, shutting down and restarting the console would shift the view by 50 px.                                                                                                                                                                                                                           |
| The ViewMode pop-up of the Agenda window did not display its items with the correct width.                                                                                                                                                                                                                                                   |
| If you loaded a new show file and Clock Source was set to **Timer**, the Clock Window** **would not display the default stopwatch from the Timers pool.                                                                                                                                                                       |
| Some editors, for example for macros and MAtricks, would stay open whenever logging in with a different user.                                                                                                                                                                                                                                |
| If you created a view with a help window and stored it with a changed the zoom factor, the content of the help window would not be zoomed if you recalled the view later.                                                                                                                                                                    |
| If you wanted to select elements in a window and the lasso was ended outside of the valid area, the selection would not be made.                                                                                                                                                                                                             |
| The output layer in the Layout Viewer did not show the output of unpatched fixtures.                                                                                                                                                                                                                                                         |
| If you had a grouping fixture that had a multi-instance fixture as a child, in some cases Hide Subfixtures would not hide the subfixtures of the multi-instance fixture.                                                                                                                                                                     |
| If Show Title Bar was toggled off in window settings, it was not possible to tap elements below the MA logo in the lower right corner.                                                                                                                                                                                                       |
| If you opened the network menu in the tab Station Control, it would be possible to operate some elements of the Stations tab if you tapped on the black areas.                                                                                                                                                                               |
| When activating the Setup mode of the Layout Viewer again, former selected layout elements could be displayed as selected.                                                                                                                                                                                                                   |
| Reset 1, Reset 2, Reset 3, and Reset 4 in the Encoder Bar of the Shapers Dialog did not work.                                                                                                                                                                                                                                                |
| The Recipe area in the Content Sheet did not display the recipes immediately after starting the sequence.                                                                                                                                                                                                                                    |
| If you pressed Please in the Label Dialog while having text in the Notes area selected, the selected text would be deleted and the remaining text would be applied at once. This bug is now fixed. Pressing Please in the Label Dialog while having text selected does not delete the selected text anymore, but applies the current state.  |
| The software could crash if you switched the Window Mode in the Info window.                                                                                                                                                                                                                                                                 |
| The Layout Viewer window did not display the information about the selected layout elements so that it was readable.                                                                                                                                                                                                                         |
| Enabling Transpose in the sequence sheet settings would lead to unnecessary line breaks and text being cut off.                                                                                                                                                                                                                              |
| When adjusting values in the Special Encoder bar of the Shaper Dialog, it could happen that the shaper jumped or the shapers did not move.                                                                                                                                                                                                   |
| AutoCreate for dimmer presets did not work when Dim2, Dim3, ... were used in the show file, and when they had the Special property set to Dimmer in the Attribute Definitions.                                                                                                                                                               |
| Recipe icons would display the wrong status in the sequence sheet if recipes in a cue part could not be cooked.                                                                                                                                                                                                                              |
| Vertical alignment for text did not work for layout elements that had  fixtures assigned. The text field was always above the fixture.                                                                                                                                                                                                       |

---

 

## Deprecated

|                                            |                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                              |
|                                            | The following is deprecated and will be removed in the software in the near future. Make sure you read the sections stated below, so you can adjust your macros and plugins accordingly, if necessary. |

- The command Help + Please no longer opens the list of all keywords and option keywords. It was replaced by the new **HelpKeyword** keyword. For more information see HelpKeyword in \
  [Other Enhancements](/grandma3/2-4/key_rn_v2_2/#h2_1198082799).

- The Lua function Aquire() is deprecated. It was replaced by Acquire(). For more information on the new Lua function Acquire() see [Changes](/grandma3/2-4/key_rn_v2_2/#h2_1879708368).

---

 

## Appendix

- We recommend you use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols we recommend you use a dedicated physical network for each protocol.
- The recommended workflow for executor configurations that are different, compared with the default executor configuration, is to create a new executor configuration, do the changes in the new configuration and save them.
- XML files with exported executor configurations from grandMA3 v1.2 and prior cannot be properly imported to grandMA3 v1.3 or later due to structural changes.
- XML files with exported analog remote setups from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.
- XML files with exported timecode shows from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.

---

 

## Known Limitations

|                                           |                                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/warning-99d629.png) | Software update via network to onPC stations requires confirmation during the install process at the destination system. |

|                                           |                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/warning-99d629.png) | When multiple GlobalMasters exist on the network, each with the same session and location name, the station with the higher priority takes over automatically. If all stations have the same priority, the station with the longest Online Time becomes the GlobalMaster of all stations. |

|                                           |                                                                                          |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/warning-99d629.png) | Recast will only recast presets to cues if there is a preset link in the absolute layer. |

|                                           |                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/warning-99d629.png) | Loading show files that were saved in previous versions deletes the programmer content. |

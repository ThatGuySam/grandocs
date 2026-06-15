---
title: "Release Notes 2.3"
description: "Do you need help getting started in grandMA3? Perfect! Here we describe a few quick steps to get you rolling. The manual will explain functionality in detail wh"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/key_releasenotes.html"
scrapedAt: "2026-06-15T18:25:59.771Z"
pagefind: false
---
- [Let's Get Started](/grandma3/2-3/key_releasenotes/#h2__1435677565)

- [Bug Fix Version 2.3.2.0](/grandma3/2-3/key_releasenotes/#h2_1781474115)

  - [](/grandma3/2-3/key_releasenotes/#h2__146634055)[Changes](/grandma3/2-3/key_releasenotes/#h2__1821394898)
  - [Bug Fixes](/grandma3/2-3/key_releasenotes/#h2__146634055)

- [Bug Fix Version 2.3.1.1](/grandma3/2-3/key_releasenotes/#h2_1781475297)

  - [Other Enhancements](/grandma3/2-3/key_releasenotes/#h2_1309759467)
  - [Bug Fixes](/grandma3/2-3/key_releasenotes/#h2_1309759467)

- [Release Version 2.3.0.4](/grandma3/2-3/key_releasenotes/#h2__1841901983)

  - [Features](/grandma3/2-3/key_releasenotes/#h2_727740091)

    - [Assign Menu](/grandma3/2-3/key_releasenotes/#h3_1856826362)
    - [Message Center](/grandma3/2-3/key_releasenotes/#h3__364189110)
    - [Sheet Masking and Filters](/grandma3/2-3/key_releasenotes/#h3_271449867)
    - [Phaser Speed Handling and Sync](/grandma3/2-3/key_releasenotes/#h3_778665917)

- [Other Enhancements](/grandma3/2-3/key_releasenotes/#h2_1198082799)

- [Changes](/grandma3/2-3/key_releasenotes/#h2__656690415)

- [Bug Fixes](/grandma3/2-3/key_releasenotes/#h2__146634055)

- [Deprecated](/grandma3/2-3/key_releasenotes/#h2__756870347)

- [Appendix](/grandma3/2-3/key_releasenotes/#h2__1835053169)

- [Known Limitations](/grandma3/2-3/key_releasenotes/#h2__1852571500)

---

## []()Let's Get Started

Do you need help getting started in grandMA3? Perfect! Here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning in the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let's go! To leave the Release Notes, tap I agree on the top right corner. The main screen of grandMA3 software opens. On the right side, you can see predefined views on view buttons. To switch between the views, tap the view buttons.

If this is your first time starting grandMA3 software, patch some fixtures first. Or you can load one of the demo shows delivered with the software. Either way, press Menu. If you use grandMA3 onPC software, there is a ![](/img/grandma3/2-3/icon_gear_15_v1-0_1-8f7ef1.png) symbol in the top left corner there. Clicking the ![](/img/grandma3/2-3/icon_gear_15_v1-0_1-8f7ef1.png) symbol is the same as pressing Menu on a console.

Tap Backup and then Load, now you are ready to load shows. Would you like to get right on it? Switch Shows to Demo Shows in the title bar first. To do so, tap Shows repeatedly until it says Demo Shows. Once Demo Shows is displayed, it is possible to select any demo show in the list. After you selected a demo show, tap Load.\
In case a show was already loaded, a pop-up will appear asking if you want to save the current show first before loading the new one. It's up to you!

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - there are view buttons there, which change the screen content. At the bottom, you will find the encoder bar and the command line. Technically that is all you need to get started. For more information, see the grandMA3 help menu. To access the help in the console or the onPC, tap the view buttons named Help or visit the Online Manuals on the MA Lighting website. If you want to learn the grandMA3 software step by step, please see the [Quick Start Guide](https://help.malighting.com/grandMA3/2.0/HTML/qsg.html) and join the MA e-Learning - it's free of charge and available on the MA Lighting website.

Have fun using our grandMA3 software! Find all the improvements and changes of this software version further down.

|                                            |                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                 |
|                                            | The grandMA3 software will start using the show file (or status) that was in operation before the software was shut down. |

---

## Bug Fix Version 2.3.2.0

## Changes

- Renamed **Export **in the color theme compare tool → previously **Export As**

---

## Bug Fixes

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In some cases, if you imported a user profile and logged in with a user that used this user profile, the step size of encoders of special executors was set to zero. As a result, turning the encoders of special executors did not change values as would be expected.             |
| If a PSR was performed and the target pool object was locked, a pop-up would inform the user about the cancelled action but the reason was not given. Now, an error message is displayed in the system monitor explaining that the import failed because the destination is locked. |

### Connections

| Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onPC rack-units granted parameters and were recognized in the software but did not output DMX.                                                                             |
| In some cases, if you were in a session and loaded a show file that had different data pools compared to the running show file, the software could crash.                  |
| If a show file had incorrectly built fixture types and subfixtures and you were in a session with processing units, in some cases, there was no DMX output.                |
| Improved reliability of USB reconnection. This update resolves issues that could lead to delayed system startup, unstable reconnections, and errors in the system monitor. |
| Reduced fader flickering in some cases by enhancing the stability of position readouts. Operation is now smoother and more consistent, even in harsh environments.         |

### Phaser

| Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you used a phaser preset that had a speed of 0 bpm in a sequence and played back the sequence, the phaser ran with the default speed of 60 bpm instead of 0 bpm. |

### Playback

| Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| While receiving a video stream for a bitmap, the software would sometimes crash if the bitmap was edited during an active playback. |

### Windows

| Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- |
| In the on-screen keyboard, some keys, such as Shift or Ctrl, stayed enabled if you closed the keyboard.  |
| In some cases, Backspace and Please did not work in the on-screen keyboard.                              |

---

## Bug Fix Version 2.3.1.1

## Other Enhancements

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Updated predefined content:

- Updated demo shows:

  - Demoshow\_grandMA3
  - Simple\_Show

---

## Bug Fixes

### 3D

| Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fixtures with gobo shake enabled could show artefacts on grandMA3 consoles.                                                                                                |
| For some fixtures, the 3D position calibration did not work. Therefore, tapping Solve in the position calibration pop-up did not put the fixtures in the correct position. |
| Show 3D Positions did not display any beams for the selected fixtures in either the patch or live patch.                                                                   |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The output of the Lua function Dump() did not return in the command line history anymore.                                                                                                                                                                                    |
| The returning output when executing the Lua function Dump() was capped at some point.                                                                                                                                                                                        |
| In OSC messages the spacing between the sequence name and cue number was not consistent. This bug is now fixed. There is now one space between the sequence name and the cue number within OSC messages.                                                                     |
| Using /Remove or /Release in order to reset pan and tilt offsets did not work as expected.                                                                                                                                                                                   |
| When going forward in a sequence using Go+, such as Go Cue 10, values were unexpectedly snapping. This bug is fixed. When going through the cue list for the first time, going forward will fade tracked values using the cue timing from the cue where the value is stored. |

### Patch

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The software could crash when leaving the patch after changing the mode for a particular fixture.                                                                                                                                                                                                                                                                                                                                               |
| The column sorting in the patch was lost when migrating show files from version 2.2.5.2 to version 2.3.                                                                                                                                                                                                                                                                                                                                         |
| The focus tool was not working anymore in Show 3D Positions.                                                                                                                                                                                                                                                                                                                                                                                    |
| It could happen that fixture types were shown with incompatible modes.                                                                                                                                                                                                                                                                                                                                                                          |
| Deleting multiple fixtures of the same fixture type in the patch could crash the software.                                                                                                                                                                                                                                                                                                                                                      |
| The software could crash in the MVR dialog, when importing specific MVR files.                                                                                                                                                                                                                                                                                                                                                                  |
| When migrating show files that had custom commands for encoders from software version 2.2 to version 2.3, the Use Custom Command setting was disabled. This bug is now fixed. When loading show files from version 2.2 to version 2.3.1.1 or newer, the Use Custom Command setting will be enabled. When loading show files from version 2.3.0.4 to version 2.3.1.1 or newer, the Use Custom Command setting will not be changed automatically. |
| Individual fixture type default, highlight, and lowlight values may be overwritten when patching a new fixture, or may be lost when loading a show file created with version 2.2.5.2 that contains such values.                                                                                                                                                                                                                                 |
| Loading a show file containing invalid speed master values could cause the software to crash.                                                                                                                                                                                                                                                                                                                                                   |
| Loading show files with invalid references to objects from older versions into version 2.3, could cause the software to crash.  This bug is now fixed. Instead the invalid references will be deleted, and the message center informs the user about all invalid references.                                                                                                                                                                    |
| It was not possible to import meshes using the show creator.                                                                                                                                                                                                                                                                                                                                                                                    |
| Dimensions of a mesh pool object were not automatically transferred when the mesh was added as a model of a fixture type in the fixture type editor.                                                                                                                                                                                                                                                                                            |

### Phaser

| Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Importing sequences, cues, cue parts, and presets could cause the level of the phaser bar in the command line to rise and never return to normal, which could lead to malfunctioning playbacks.                                                  |
| If the phaser speed was set below 3.75 BPM, after a while running, the phaser would jump to the starting point.                                                                                                                                  |
| Running phasers could jump when changing the speed in the recipe the phaser was used by command line.                                                                                                                                            |
| Changing the SpeedFromX value in a recipe line for a cue, which referenced to a preset with MAtricks values for SpeedFromX and SpeedToX, did not automatically change the MAtricks value for SpeedToX, resulting in an alternating phaser.       |
| While improving Phaser Speed Handling and Sync towards version 2.3, Grand Speed became functional in speed calculations. This is not intended for user editing. Grand Speed is again not functional in speed calculations and named as Reserved. |

### Playback

| Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The fixture sheet or the layout viewer incorrectly indicated a white marker as soon as a phaser or preset was running.                                                                                                                             |
| When a master was assigned to an empty executor, the executor did not use the master executor configuration, but instead used the executor configuration of playback masters.                                                                      |
| When using an invalid speed master in a cue, the software could crash when playing back the cue.                                                                                                                                                   |
| Using Go+ \[large] key or Go- \[large] key to trigger the selected sequence, that was assigned to an executor with a size bigger than 1x1, triggered the selected sequence multiple times.                                                         |
| In a session, it could happen that in bump sequences executed from a connected station, the sequence would stuck at the first cue with **Release** set to **Yes**, without releasing the second cue with **Trig Type** set to **Time**.  |

### Windows

| Description                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The appearance background color was no longer displayed in layouts.                                                                                                                                                                                   |
| Migrating older show files to version 2.3 did not transfer the pool actions for the world pool correctly.                                                                                                                                             |
| The functionality that allowed users to switch between Elapsed Time and Session Time in the Oops overlay was broken.                                                                                                                                  |
| The sequence setting   Executor Display Mode was not respected in the layout viewer.                                                                                                                                                                  |
| The values entered in the setup mode of the layout viewer were not transferred correctly.                                                                                                                                                             |
| On a console, the software could crash when changing Layer to **DMX** in the layout viewer.                                                                                                                                                           |
| Files migrated from version 2.2 or earlier did not migrate properly when multiple filters of the same type existed.                                                                                                                                   |
| The names of the filters in the mask toolbar were displayed permanently. This bug is fixed. The names are displayed while you press and hold MA.                                                                                                      |
| When migrating version 2.1 show files, agenda events with a **Call** action are not transferred.                                                                                                                                                      |
| After storing or updating a sequence, the corresponding sequence pool object was displayed dark and with an update symbol inside.                                                                                                                     |
| In a new show, the note section was missing in the Label pop-up.                                                                                                                                                                                      |
| When turning a preset into a Recipe Template, an error message appeared.                                                                                                                                                                              |
| There was a graphical glitch when ![](/img/grandma3/2-3/icon_filter_15px-3d7e4b.png) was enabled in the title bar of drop-down pop-ups: When you typed something, the text of the search results were only displayed on the left side of the pop-up.  |
| The console could crash if a running recipe was edited and the EditRecipe command was executed on a configuration line in the recipe editor.                                                                                                          |



---

## Release Version 2.3.0.4

## Features

The latest release of grandMA3 version 2.3.0.4 rolls out several enhancements that enrich your lighting experience. Besides numerous improvements based on your highly appreciated feedback, many new and clever features have found their way into the software. Read on for a quick introduction and find links for more information.

---

### Assign Menu

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The redesigned Handle tab on the left side of the assign menu provides an easier and faster way to assign functions to executors, special executors, and Xkeys. The executor section is displayed on the left and the selected executor button is indicated by a yellow frame, is brighter compared to executors that are not selected, and the title bar is blinking in red. The name of the assigned object is displayed in the middle of the title bar. The starting number of the executor on the left and the number of the assigned pool object on the right. 

The executor selection can be extended using any of the four resize corners (![](/img/grandma3/2-3/icon_resize_corner_15px-4c456c.png)). Executors can be expanded if there are empty executors next to them. If the executor cannot be expanded, the frame around the executor will turn red. If it is possible to expand the executor, the frame around the executor will turn green. To move the entire executor, tap and drag in the executor's title bar. Tapping an executor with a less saturated appearance will select this executor. The appearance of sequences and presets are displayed on the executor when the  Executor Display Mode setting is set to **Appearance only** or **Both**. Appearances of other objects that are assigned to executors are always displayed.

The selected executor comes with a corresponding icon (encoder, fader, or button) in the upper left corner. The selected function with the corresponding icon is displayed in the center. The color of the bar at the top of the executor button indicates the assigned object category (Sequence, Master, Group, etc.). The rest of the button will be the same color as the appearance color of the object if the button is not selected. If more than one trigger option is assigned to a button, the button will be split up according to the number of trigger options that are assigned to it.

In the title bar, Executor Config. displays the current executor configuration and its appearance. To edit or load executor configurations, tap Executor Config.. A pop-up opens. The grid options are similar to the ones in the executor configurations pool. For more information, see the [Executor Configurations](/grandma3/2-3/executor_configurations/) topic. You can select different data pools in the title bar. There are four buttons on the bottom of the pop-up:

- Insert New Configuration: Adds a new empty executor configuration. The new configuration line is added above the previously selected one in the pop-up.
- Delete: The selected executor configuration lines can be deleted.
- List Reference: Displays referenced objects.
- Recast Config: Transfers the functions that are stored inside the executor configuration to all executors that have this executor configuration assigned. The Width and Height of the executor configuration will not be recast.
- Load: The selected executor configuration line can be loaded.
- Save: The selected executor configuration line is saved and loaded. 

When you change a function of the loaded executor configuration, the corresponding executor icon (encoder, fader, or button) and the text in Executor Config. turn cyan. Tap Save in the Executor Config. pop-up to save the changes to the executor configuration. The icon in the upper left corner and the text in Executor Config. turn white again.

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                            | Changing the function of only one trigger option of an executor, turns all icons of this trigger cyan, even if they have not changed. If a function, for example for MA + Press has changed to **Empty**, the icon (![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_button_press_15_v2-3-5ae454.png)) is not displayed anymore, but the remaining Press icon (![](/img/grandma3/2-3/test2-2025-05-08-1-3bcdd3.png)) is still displayed in cyan.  |

On the right side of the menu, set different options in the selected executor. Depending on whether a key, fader or encoder is selected, the menu on the right changes. At the top, choose how to trigger the key, fader, or encoder.

A key can have up to four different trigger options:

- ![](/img/grandma3/2-3/icon_button_press_15_v2-3-5ae454.png): Press the key to trigger the selected function.
- ![](/img/grandma3/2-3/icon_button_release_v2-3-641a20.png): Release the key to trigger the selected function.
- ![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_button_press_15_v2-3-5ae454.png): Press and hold MA and press the key to trigger the selected function.
- ![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_button_release_v2-3-641a20.png): Release MA and the key to trigger the selected function.

An encoder has six different trigger options:

- ![](/img/grandma3/2-3/icon_encoder_left_v2-3-71979e.png): Rotate the encoder to the left to trigger the selected function.
- ![](/img/grandma3/2-3/icon_encoder_left_right_v2-3-59b5f1.png): Rotate the encoder to the left to decrease the value of the selected function and to the right to increase the value.
- ![](/img/grandma3/2-3/icon_encoder_right_v2-3-d615eb.png): Rotate the encoder to the right to trigger the selected function.
- ![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_encoder_left_v2-3-71979e.png): Press and hold MA and rotate the encoder to the left to trigger the selected function. 
- ![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_encoder_left_right_v2-3-59b5f1.png): Press and hold MA and rotate the encoder to the left to decrease the value of the selected function and to the right to increase the value.
- ![](/img/grandma3/2-3/icon_ma_key_15_v2-3-45ebd9.png)![](/img/grandma3/2-3/icon_encoder_right_v2-3-d615eb.png): Press and hold MA and rotate the encoder to the right to trigger the selected function.

A fader has one trigger option:

- ![](/img/grandma3/2-3/img_single_fader_15px-88f76d.png): Move the fader up or down to use the selected function.

|                                                    |                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                                                                                                                                    |
|                                                    | Pressing MA and triggering a fader or an Xkey is not offered as a trigger option. If an object is assigned to an Xkey, pressing MA and the Xkey will trigger the keyword printed on the Xkey. For example, if an object is assigned to X4 \| Layout, MA + X4 \| Layout triggers the Layout keyword. |

Find the list of all functions that can be selected for the key, fader, or encoder below the trigger options. It is also possible to tap and hold a trigger option above to open a drop-down list of all actions possible.

|                                            |                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                   |
|                                            | Depending on the assigned object and if it is assigned to a key, an encoder, or a fader, some actions are grayed out. For example, when a sequence is assigned to an encoder, Flash, Black, Temp, and Swap are grayed out for the encoder left and encoder right functions. |

If Flash, Black, Temp, or Swap is assigned to a key or MA + key, \<Flash>, \<Black>, \<Temp>, and \<Swap>, are automatically assigned to the related release trigger option. This indicates that they are press and hold functions.\
\
If a key, unpress key, MA + key, unpress MA + key, encoder left and encoder right, and MA + encoder left and MA + encoder right, is selected in the executor section, an additional input field for custom commands will appear on the right side. Tap the Custom Command input field to open the [Command Editor](/grandma3/2-3/command-editor/) and type in a command to save it as a function. Setting a custom command enables Use Custom Command. When Use Custom Command is enabled, the small keyboard icon of the input field turns yellow and the custom command is assigned to the selected executor. When disabled, the icon is white and the function selected above is assigned.\
Next to the input field on the right, there is an Add Executor button. Enabled, the corresponding executor is added to the custom command. When the function is executed in the command line, the executor will be added to the command.

|                                            |                                                                                                                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                              |
|                                            | When assigning a new function to an encoder or key via command line (for example, Assign Go+ At Executor 201), the set unpress function will be removed. This does not happen when the user does it manually by using the Assign Menu. |

To change the resolution for an encoder, or MA + encoder, select an encoder executor in the executor selection, and tap Step Size on the bottom right side of the menu. A pop-up opens and the encoder resolution can be set ranging from 0.01% to 100%. Tap - on the left to decrease the value by 1%. Tap + on the right to increase the value by 1%. To reverse the direction of rotation of the encoder, tap Invert Encoder.\
\
It is also possible to assign functions to keys and MA + key via commands now. For example, to assign Goto as an MA + key function, press Assign + Goto + MA + the key you want the function Goto be assigned to. 

---

### Message Center

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Added statuses to the message center.

The message center now offers a list of different statuses on the right side of the window. Status icons are displayed next to the command line input field on the right side in the command line. All status settings are set per user profile. For some statuses you can choose to see the corresponding status of all user profiles.

To show or hide a status icon in the command line, swipe the status in the message center. A drop-down displays the following options:

- **Never**: No icon for the status is displayed. The indicator bar of the corresponding status is gray.
- **On Activity**: Displays the icon when a setting or function is active. The indicator bar is white.
- **Always**: The icon is always displayed in the command line. If the setting or function is not active, the icon will be grayed out. The indicator bar is green.

The default for statuses in the Programmer and Filter section is **On Activity**.\
The default for statuses in the More and Toggles section, except for Battery, is **Always**. The default for Battery depends on the device.

For some statuses (Highlight; Lowlight; Solo; Timecode Record) you can select different sources for the status in the drop-down: 

- **My**: The status is active if triggered by the current user profile.
- **All**: The status is active if triggered by any user profile. When enabled, a small icon (![](/img/grandma3/2-3/icon_users_v2-3-a674b9.png)) appears in the status cell.

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                            | If the user profile is set to **All** and highlight, lowlight, solo, or a timecode record is triggered by another user profile, **e****xt** or **m****y+ext** is displayed below the icons. **ext** is displayed if the function is only triggered by another user profile. **my+ext** is displayed if the function is triggered by both the current and another user profile. If the function is triggered by the currently active user profile, no text is displayed below the icon.  |

The following statuses can be displayed in the command line:

**Programmer:**

- **Highlight** (![](/img/grandma3/2-3/icon_status_highlight_v2-2-26dc20.png)): Highlight is active. Tap the icon to open master controls.
- **Lowlight** (![](/img/grandma3/2-3/icon_lowlight_v2-3-175c46.png)): If Lowlight is active, the icon turns blue. Tap the icon to open master controls. 
- **Solo** (![](/img/grandma3/2-3/icon_status_solo_v2-2-c027f0.png)): Solo is active. Tap the icon to open master controls.
- **Blind** (![](/img/grandma3/2-3/icon_status_blind_v2-2-f81353.png)): Blind is active. Tap the icon to open master controls.
- **Preview** (![](/img/grandma3/2-3/icon_status_preview_v2-3-d5d9f7.png)): Preview is active.
- **Timecode Record** (**![](/img/grandma3/2-3/icon_status_timecode_recording_v2-3_15px-96f402.png)**): A timecode recording is active. When a timecode is recorded, the icon starts to blink. Tap the icon to open the off menu in the timecodes tab.
- **Recipe Editing** (![](/img/grandma3/2-3/icon_cooking-pot_12_v1-7-f630d9.png)): If the recipe editor is active, the icon is green.

**Filter:**

- **Filter** (![](/img/grandma3/2-3/icon_filter_15px-3d7e4b.png)): A filter other than Filter 1 is called or selected.
- **World** (![](/img/grandma3/2-3/icon_status_world_v2-2-47c4ba.png)): A world other than World 1 is selected.  

**Universe/Patch:**

- **Parked** (![](/img/grandma3/2-3/icon_status_parked_v2-2-6a1b33.png)): If fixtures are parked, the icon is blue.
- **DMX Tester** (![](/img/grandma3/2-3/icon_status_dmx_tester_output_v2-2-a07272.png)): If the DMX tester generates output, the icon is white. 
- **Not Enough Parameters** (![](/img/grandma3/2-3/icon_not_enough_parameters_15_v3_2-3-24c4dd.png)): The limit of parameters is exceeded. If the system is in overload and the DMX output refresh rate is slowing down, **Overload** is displayed below the icon.

**More:**

- **World Server** (![](/img/grandma3/2-3/icon_worldserver_24_v1-9-f1a2f3.png)): Displays if there is a connection to the world server. The functionality has not changed compared to 2.2. For more information, see [World Server](/grandma3/2-3/system_world/). 
- **Battery **(![](/img/grandma3/2-3/battery_icon_15_v2-2-8c5202.png)): The battery is now part of the message center. On full-size, light, full-size CRV, and light CRV consoles, the icon is displayed by default. Tap the icon to open the battery status pop-up. If the station has no battery, the icon is crossed (![](/img/grandma3/2-3/icon_battery_none_v2-3-686012.png)).
- **Phasers**: Graphically indicates the current processing workload dedicated to phaser calculation in the bar in the command line. The exact value is displayed as a tooltip in the command line. The functionality has not changed compared to 2.2.
- **Flow Control**: Graphically indicates the current workload of the network in the bar in the command line. The exact intensity of the flow control is displayed on a scale of 0 to 255 as a tooltip in the command line. The functionality has not changed compared to 2.2.

**Toggles:**

- **Keyboard Shortcuts** (![](/img/grandma3/2-3/icon_keyboard_15_v1-9-d04ccc.png)): If keyboard shortcuts are active, the icon is yellow.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release\
Improved the message center:

- The message center icon now displays the number of new messages, except spam messages, below the icon in the command line. If there is a new message, the icon flashes in the color of the message priority (Spam, Warnings, Errors, and Alerts).

- The latest message of each section is displayed in the cell in the main page.\
  If there is a new message, the background of the cell flashes in the color of the message priority.

- A timestamp is displayed next to each message in the list that appears if you click on a cell. The date and time is displayed in the format dd.mm.yyyy hh:mm:ss.

- To confirm all new messages, tap Confirm Messages in the title bar.\
  To confirm single messages, tap on the corresponding cell and then tap the message you want to confirm.\
  To confirm all messages of a category and priority, tap on the cell in the message center. Then tap the corresponding Confirm button below the messages.

- Each cell has a bell icon (![](/img/grandma3/2-3/icon_bell_15_v2-3-cba295.png)) to select a notification type. The color of the icon changes depending on the notification. Swipe the icon to display a drop-down list with all three types, or tap the icon in order to toggle through the different types:

  - **None**: No notification is displayed. (Gray icon)
  - **Notification**: A notification is displayed in the upper right corner of all big screens. (White icon) 
  - **Pop-up**: A pop-up is displayed in the middle of all screens. (Red icon)\
    The spam category cannot be set to show pop-ups.

---

### Sheet Masking and Filters

Sheet masking was added to the fixture sheet, the content sheet, and the tracking sheet in the sequence sheet. Sheet masking is controlled by filter objects. 

Hence, filter rules were added to the filter object editor. Filters can be static or dynamic.

|                                            |                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                              |
|                                            | Dynamic filter rules use sources where data often changes. These rules are based on individual sheets and users. As these filter rules are subject to change, they can only be used for sheet masking. |

The default filter pool objects now includes **Prog Only**,  **Selection Only,** and **Parked Only.** The **Prog Only** filter includes selected fixtures.

Copying a filter object to another filter object opens a pop-up with options to overwrite or cancel the task, but not the option to merge.

When creating a new empty filter pool object, the rule type **Attributes** is set per default.

The filter editor opens as a menu and is split into two sides, left and right. To adjust the width of the two sides:

1. Use the two-finger tap by placing one finger on each side of the menu.
2. Now drag your fingers left or right. The segmentation is adjusted.

Left Side: Here you can set up filter rules. Hierarchically, new filter rules can be added within different dependencies. Multiple filter rules can be collected inside a **Ruleset**. Filters inside a ruleset are logically connected by **AND** logic (indicated by ![](/img/grandma3/2-3/icon_and_15px_v2-3-f39ddd.png)). **AND** logic means all conditions must be met to display an object. Tap Insert New Filter Rule to insert a filter rule within a ruleset.\
Multiple rulesets are logically connected by **OR** logic (indicated by ![](/img/grandma3/2-3/icon_or_15px_v2-3-d2376b.png)). **OR** logic means one condition must be met to display an object. To create a new ruleset, tap Insert New Ruleset. If Settings in the title bar is enabled, Name, Scribble, Appearance, Tags, and Notes can also be set up. 

|                                            |                                                                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                              |
|                                            | The functionality for Programming Layers (previously Layers) has not changed. Please note that programming layers are not compatible with sheet masking or input and output filtering. |

Right Side: This is the attribute filter area. To enable the user interface for attribute filtering, select the corresponding Attributes rule type. When creating a new filter pool object, Attributes is selected per default. As multiple attribute filter rules can be set per object, the selected filter rule is indicated by a three-digit number in the heading on the right side, for example, Filter 8.2.1. The numbers describe the object number, the ruleset, and the filter rule. Also LineHeight, Select All, and Select None are located in the attribute filter area.

If the filter is locked, a lock icon is displayed next to the object name in the title bar of the filter object editor.

A dynamic filter rule is indicated by ![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png) displayed next to the filter type. The icon is also displayed in the top left corner of a filter pool object. **Dynamic Filte****r **is displayed below the object name. If it is static, no text or icon are displayed.

Filter rules can be definded using multiple options. These options are described as follows, beginning with the Type:

- Attributes : Filters the **Attributes**. Prior to that they were located in the filter object editor.
- Changed(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Shows changed values and hides cues if they do not contain any changed values.
- Cooked(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters for cooked values in recipes.
- DMX Mode: Filters the specified **DMXMode** of a fixture type.
- DMX Tested(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters attributes and fixtures with values currently in the DMX tester.
- Fade & Delay(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters values with individual fade and delay timings.
- Fixture Layer & Class: Filters fixtures by fixture **Layer** and **Class**.
- ID Type: Filters fixtures by **ID T****ype. **If the **From** and **To** values are left blank, all fixtures with the defined ID type will be included.
- IfActive(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters active values.
- IfOutput(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures that have output on stage with a dimmer value above 0%.
- IfProgrammer(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures and attributes in the programmer.
- Live(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures with a dimmer value above 0% or with a 0% value stored in the current cue. 
- MIB(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures and attributes in an MIB state.
- Multi Step(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures and attributes with more than one phaser step.
- Name: Filters the predefined fixture name in the **Name Filter**.
- Parked(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters parked fixtures and attributes.
- Patch: Filters fixtures that are patched to DMX channels between the DMX channel by predefined **From** and **To** values.
- Selected:(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)) Filters all selected fixtures. With **If Empty** set to **Ignore**, all fixtures will be displayed if there is no selection; this makes it work like the selection filter in previous grandMA3 versions. Leaving **If Empty** blank will result in an empty sheet if there is no selection; this makes it work like the selection filter in grandMA2.
- Selected Feature(![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): The **Mode** filters the feature groups.
- Stage: Filters fixtures by stage. 
- Used In Object: Filters predefined **Objects** in the assignment editor. Objects can be groups, worlds, presets, or sequences.
- Used in Selected Sequence: (![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png))Filters fixtures and attributes in the selected sequence. 
- Used in Show (![](/img/grandma3/2-3/icon_dynamic_filter_wave_px15-7dd81e.png)): Filters fixtures and attributes that are stored in the show.​

Invert: An empty cell indicates that the filter rule is used as described. Selecting  **Yes** inverts the filter rule.

Apply to Fixtures, Attributes: Filters for attributes and/or fixtures. The default is **Yes** for both, fixtures and attributes.

|                                            |                                                                                                                                                                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                        |
|                                            | A few filter rule types have specific options that only apply to them. Columns in the grid that do not apply to a specific filter option have a darker background in the corresponding configuration line and cannot be edited.  |

Filter rules can be imported and exported using Import and Export. The filter rule configuration lines can be copied, cut, pasted, deleted and oopsed, using Cut, Paste, Ooops, Delete, and Copy. Also List References shows related elements of the filter object.

Static filter rules support input and output filtering for sequences, presets, cue breaks, recipes, and the command line. In the assignment editor, Hide Dynamic in the title bar is enabled per default and dynamic filter objects are hidden. Disabling Hide Dynamic shows all dynamic filter rules in red. When Edit Recipe is enabled, the filter pool objects are grayed out. The command line displays an error when attempting to assign a dynamic filter to an object for which it cannot be used.

|                                                    |                                                                                                                                                                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                                                                                                                                                                                                               |
|                                                    | It is not possible to turn a static filter into a dynamic filter if it is assigned as an input filter, an output filer, or a cue break. Therefore, the dynamic filter rules are grayed out whenever you create a new filter rule.   |

To assign filter objects to sheets, for example, the fixture sheet, tap Mask Buttons in the corresponding sheet settings. Up to 16 sheet masks are available per sheet. Tapping a sheet mask button, for example Mask 1, opens the assignment editor. The assignment editor offers 5 options:

- Emtpy: No mask is active.
- \<Selected>: Links to the selected filter.
- \<Called>: Links to the called filter.
- Filter: Select a filter from the filter pool.
- World: Select a world from the world pool for masking.

The Mask Toolbar enables a toolbar in the corresponding sheet. To display the mask toolbar in the sequence sheet, Track Sheet must be enabled.

Filter and world objects can be assigned to the mask toolbar directly. Pressing Edit + tapping an assigned sheet mask button will open the corresponding filter or world object editor. Pressing Delete + tapping a sheet mask button will delete its assignment.\
Single sheet masks are toggle buttons. A single sheet mask button can be toggled on or off. Toggling on another sheet mask will deactivate the currently active sheet mask. An active sheet mask is displayed in yellow.

Mask buttons can also be displayed in the title bar of the corresponding sheet by enabling them in the Edit Title Bar settings. The mask toolbar and the mask buttons in the title bar are linked to each other.

In the fixture sheet, the filters  Prog Only and Selection Only are displayed in the mask toolbar as default sheet masks. In the content sheet and the sequence sheet, the filter Selection Only is displayed as a default sheet mask. 

Groups, worlds, presets, and sequences pool objects can be assigned to filter objects, for example by using the syntax Assign \[Source\_Object] \["Source\_Object\_Name" or Source\_Object\_Number] At Filter \["Filter\_Name" or Filter\_Number]. Assigning an object to an already existing filter pool object will create a new ruleset within the object including the **Used in Object** rule type that links to the corresponding object. If an object is assigned to an empty filter pool object, the **Used in Object** rule type will be created, which will then also link to the corresponding object.

|                                            |                                                                                                                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                       |
|                                            | Any object that can be used in the filter rule **Used in Object** can be assigned to a filter. For example, Assign Group X at Filter Y.The copy function for the corresponding objects to a filter is disabled. |

|                                                  |                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                     |
|                                                  | Importing filter objects that were exported in version 2.2.5.2 or earlier is not fully supported. Fixture patch information filters will be discarded after import. To migrate these settings, first import the filter objects into a show file in version 2.2.5.2, and then migrate them to the current version.  |

---

### Phaser Speed Handling and Sync

This release introduces several new functions, enhancements, and fixed bugs to provide an easier, more streamlined workflow regarding phasers. It improves the handling of phaser speed and phaser synchronization throughout the software.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Added **FastSync**, **ReSync**, and **Learn****** keywords. Use them to synchronize phasers to each other and to a beat. They best work in combination with speed masters.

- **[****](/grandma3/2-3/keyword_resync/)**[FastSync](/grandma3/2-3/keyword_fastsync/)**** adjusts the starting point of a multistep phaser at once.
- **[ReSync](/grandma3/2-3/keyword_resync/)** adjusts the starting point of a multistep phaser gradually.
- **[Learn](/grandma3/2-3/keyword_learn/) **combines the functionality of ReSync and [LearnSpeed](/grandma3/2-3/keyword_learnspeed/). Use Learn to adjust the starting point and speed of a phaser at the same time.

To apply these keywords to an object, use this syntax: \[Keyword] (\[Object] \["Object\_Name" or Object\_Number])

ReSync, FastSync, and Learn can be set as functions for executors.\
To determine the starting point of the phaser, tap the executor with the FastSync, ReSync, or Learn function once. For Learn**, **tap the executor multiple times to additionally adjust the speed of the phaser.

To sync phasers across sequences, set them to the same speed master and apply the keywords to the speed master.

|                                            |                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                         |
|                                            | Phasers with measures that can be divided by three cannot be synced with phasers containing measures that can be divided by two.  |



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

- The **Delay To Phase** column has been added to the sequence sheet. Delay to Phase can be set to **Yes** in the cue and cue part. The default is No. Additionally, Delay To Phase was added to the settings of the preset editor. Delay To Phase links the phase calculations of a phaser to the active individual delay time for the attribute. For more information on Delay to Phase see [Presets](/grandma3/2-3/presets/#h2_1390786845). 

- BPM analysis of the sound input is improved and more precise by working together with the user adjusted BPM value of the BPM speed master. This value can be adjusted with the fader or the keywords Learn and LearnSpeed.

- Knocking in running phasers into the programmer now keeps them synchronized with the running output.

- Knocking in the measure layer is now based on the number of steps while keeping the same speed. For example, if a phaser has four steps and you knock in the measure layer, the measure will be 4.

- If the same speed master is assigned to a sequence or cue part and an attribute, the speed master will be removed from the attribute when updating or storing the sequence or cue.\
  For example, **Speed1** is assigned to a dimmer attribute. Then you set **Speed1** for a cue and update it. **Speed1** is removed from the dimmer attribute.

- Speed masters assigned to attributes are always synced to the timeline of the speed master in the active cue or sequence.

- If no speed master is assigned to an attribute, but a speed master is set for the sequence or cue part, phasers in the cue apply the speed master depending on the cue part's sync setting:

  - Sync enabled for the cue: The phaser is synced to the common timeline. For example, if you tap **Flash**, it always begins at a different point of the phase. 
  - Sync disabled for the cue: The phaser is only using the speed of the speed master. For example, if you tap **Flash**, it always begins at the starting point of the phase. 

- Additionally, multiple bugs regarding phasers, speed handling, and sync were fixed. For more information, see [below](/grandma3/2-3/key_releasenotes/#h3__118549267).

---

## Other Enhancements

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Updated predefined content:

- Updated predefined MAtricks
- Added predefined filters
- New symbols for the different key functions of executors
- MA\_StartShow
- Updated the render qualities "Custom" and "Custom Haze" in the Demoshow\_grandMA3

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved preset pools:

- Color definitions and colors were added to the color theme for every default feature group. Preset pool colors can now be defined in the color theme.
- The add window pop-up displays the corresponding colors of pools of custom feature groups. When preset pool windows are created they use these defined colors. Additionally, there is one color defined for all All preset pools, and one color for the dynamic preset pool window. Preset pool windows of custom feature groups use the normal PoolWindow\.Presets color.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved presets: 

- Added At to the bottom of the preset editor. Tap  At to apply changes made in MAtricks directly to the programmer without closing the editor.



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved local settings:

- Added Mouse Cursor Size and Mouse Speed to the local settings in consoles. Tap Mouse Cursor Size and choose between **Small** (Default), **Medium**, and **Large**. Mouse Speed offers **Slow**, **Normal**, and **Fast** as options for the speed of the mouse cursor.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved MAtricks:

- Added ![](/img/grandma3/2-3/swap_15_v3_2-3-2fe77a.png) to the MAtricks editor and Swap Fade, Swap Delay, Swap Speed, and Swap Phase to the calculators for layer values. Tap to swap the from/to values. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved sheets:

- The Mask tab in the fixture sheet settings and the content sheet settings have two new buttons: Sorted By, which can either be **FID** or **CID**, and Group By ID Type. Enable Group by ID Type to sort the fixture sheet by ID type grouping.
- It is now possible to add Layer to the title bar, using the Edit Title Bar settings in the **Display** tab. In the content sheet, the setting is located in the **Mask** tab.
- The fixture and content sheet now display fixtures affected by a group master with a purple background.
- Removed obsolete settings in the fixture sheet settings due to sheet masking: Removed Fixture, Channel, Universal, MArker, Houselights, NonDim, Media, Fog, Effect, Pyro, Prog Only, Filter Selection, and Filter Toolbar toggle buttons + the Filter button in the Mask tab. 
- Removed obsolete settings in the sequence sheet settings due to sheet masking: Removed Selection Only, and Filter Toolbar toggle button + Filter button in the Mask tab.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved sequence sheet:

- The track sheet allows to edit values in empty cells.
- Added Show Fixture Name to the Mask tab of the sequence sheet settings. Enabling Show Fixture Name in track sheet mode shows or hides the fixture names in the sheet.
- To learn more about improvements about filters and masks regarding the sequence sheet, read [here](/grandma3/2-3/key_releasenotes/#h3_271449867).
- Executing a Goto Cue X command for a non-existing cue opens the Goto pop-up.
- It is now possible to assign an object to a property using a + in the syntax. For example, Set Cue X Property 'Break' At + Filter 'Only Dimmer'.
- The timing progress bar for cues now includes values from timing masters.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the sequence pool:

- Added Executor Style to the sequence pool settings. With Executor Style enabled, the pool objects display all cues of the sequence. The active cue is visualized with a blue moving bar, same as in the sequence sheet.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved layouts:

- Added Executor Style to the edit layout settings. With Executor Style enabled, sequences are displayed with their cues in layouts. 
- Added Icons to the arrangement tab of the edit layout elements settings. With Icons enabled, pool objects are displayed with their icons in layouts. 



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved MIB:

- If you select some prepositioned fixtures (MIB state) and turn on the dimmer, all prepositioned values of the selected fixtures are knocked in into the programmer.
- The user profile now has a KnockIn MIB property. By default it is set to **Post**, meaning that the attributes that have been prepositioned by Move in Black are activated in the programmer to ensure the current state of the fixtures is active. When KnockIn MIB is set to **Off**, only the actively changed attributes are activated in the programmer. This is same behavior as in previous versions. The moved in black attributes stay in the state of MIB and are not automatically activated in the programmer. This means that what is displayed in the output is not necessarily what was stored in the cue, which might result in a cue that looks different when it is played back to when it was stored. 

|                                                    |                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                                                                                     |
|                                                    | KnockIn MIB does not work with relative values. Instead, the tracked absolute values will be knocked in.  |

- Set the **MIB** property in the patch menu and the attribute definitions menu to **Disable** to disable the MIB functionality for the corresponding fixtures and attributes.\
  MIB can also be disabled per logical channel in the DMX Modes of fixture types.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the patch menu:

- The values in the **Offset** column of **Pan** and **Tilt **can be entered in physical degrees in the patch menu. 
- Tap Edit DMX Mode in the patch menu to quickly edit the DMX mode of the selected fixture.\
   

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved scribbles:

- Changes made in the scribble editor are applied to the scribble immediately. In this context Apply and Save were removed in the scribble editor. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved pool action settings:

- **Toggle** can be set for plugins to turn plugins on and off by tapping on the pool object.
- **Top** can be set in sequences to jump to the beginning of the sequence when tapping the pool object. The icon is ![](/img/grandma3/2-3/icon_top_15_v2-3-c3505c.png) .
- Added Pool Action to world pool settings. The following pool actions can be selected: **None**; **Select**; **SelFix**.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved pool objects:

- The render quality pool objects can be locked or unlocked via Lock within the editor of the corresponding object. Previously, this could only be done from the command line.
- Copying an object that is locked by the user automatically unlocks the target object.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved pool overlay:

- The pool overlays (for example, List + MA + X14 | Macro) have a DataPool selector.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved handles:

- Added Create Handle to the title bar of the [command editor](/grandma3/2-3/command-editor/). When enabled, the last object in the command is automatically resolved into a handle using the [#\[Object\]](/grandma3/2-3/keyword_hashsquarebrackets/) keyword.
- The conversion to handles happens via Please in the command line input, for example, in the macro editor.
- **Create Command Handle** is a user profile setting. When is set to Yes, Create Handle in the command editor is enabled by default.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved recipes:

- The Selection column of the recipe sheet now offers **\<From Value>**. When a selective preset is set in Values, **\<From Value>** refers to all fixtures of the selective preset. Additionally the selection pop-up has a DataPool selector.
- If edit recipe mode is enabled and the last selected preset of the last selected recipe is selected, rotating green dots will be displayed around the pool object. These rotating dots indicate it as the target of MAtricks or filter values. Also, the recipe line in the recipe editor displays the preset that was selected last with rotating green dots. If you tap a preset that is not part of a recipe in the recipe editor, the green dotted frame will appear around the preset. To select an already used preset (which has a green frame), press MA and tap the preset. Now MAtricks, filters, and worlds can be applied to the corresponding recipe. The corresponding line in the recipe editor is displayed with a green dotted frame.
- If EditRecipe is enabled, the MAtricks window and the MAtricks overlay will only work with recipes and will not affect the programmer. 
- An orange cooking pot icon is shown next to the cue in the sequence sheet when the cue has both, cooked and uncooked values.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the 3D viewer:

- The Misc settings of the 3D viewer now have a Lines Overlay button. This shows the direction of the fixture beam direction with a colored thin line. Unselected fixtures have a red line, selected fixtures have a yellow line, and sub selected fixtures have a brown line. The following values are available:

  - **Off**: No lines are showing.
  - **All**: Every fixture in the patch shows a colored line.
  - **All Dim 0**: All fixtures with dimmer at 0 shows the colored line.
  - **Sel**: All selected fixtures show a colored line.
  - **Sel Dim 0**: All selected fixtures with dimmer at 0 show a colored line.

- The 3D viewer now seamlessly visualizes the fading of color transitions in fixtures with color wheels.

- Improved the assignment of individual DMX channels to the correct geometries in the case of more complicated geometric structures (nested geometry references).

- Improved the performance if Show Label on Spot is enabled.

- It is now possible to add the setting Touch Mode to the title bar of the 3D viewer. To do so, tap MA in the upper left corner and enable Edit Title Bar. Then go to the Misc tab and tap Touch Mode.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved DMX protocols:

The Art-Net and sACN tabs in the DMX Protocols menu display "in" in green text when Enable Input is enabled and "out" in green text when Enable Output is enabled.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added a MIDI monitor to the MIDI Remotes tab of the In & Out menu: 

- The MIDI monitor displays all MIDI messages including CC messages.



![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added Create Groups /OddEven to the Create Groups tab of the Show Creator menu:

- Create Groups /OddEven creates two groups with the fixtures of the selected fixture type, class, or layer. It alternately stores the fixtures of the specified object in a first odd group and a second even group.
- Added /OddEven option keyword. The /OddEven option keyword also creates two groups as described above with the fixtures of a specific fixture type, class, or layer. It is also possible to create odd and even groups with the fixtures from a selection using the syntax Fixture x Thru y or the Selection keyword.\
  For example: AutoCreate FixtureType 13 At Group 21 /OddEven. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved countdown pop-ups:

- As soon as the countdown has stopped by tapping on the pop-up, a text is displayed in the countdown bar indicating which user stopped the countdown, for example "Stopped by User 4".



![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added an **Encoder Bar Type** column to user profiles configuration: 

- It offers three different encoder bar types (Default, Exec, Xkeys) that can be selected per user profile. The types can still be changed, using the [User1](/grandma3/2-3/keyword_user1/) and [User2](/grandma3/2-3/keyword_user2/) keywords. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved PSR:

- A progress bar indicates the progress of the operation.



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved special dialog shaper:

- If there are too many attributes per blade used in a fixture type, the system monitor will inform the user about this misconfiguration.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Help:

- Added the Command Bot to the help. Open elements, such as windows or settings, directly from the help window using the Command Bot.
- You can use the bot wherever [_![](/img/grandma3/2-3/robot-icon_white-274940.png)_       _ Paste to Command Line _](#ma_cmd?Menu%20%22CommandLineHistory%22)is displayed in the manual.

Use the Command Bot:

1. To paste the command to the command line, tap [![](/img/grandma3/2-3/robot-icon_white-274940.png)        Paste to Command Line ](#ma_cmd?Menu%20%22CommandLineHistory%22).
2. To execute the command, press Please.

|                                                  |                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                     |
|                                                  | If you change settings using the Command Bot, the changes are applied to all windows of the same type that are open at that time.  |

|                                            |                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                         |
|                                            | To open a window using the Command Bot, there must be free space on your screen.  |

There are examples in these topics: [Appearances](/grandma3/2-3/appear/); [Clock](/grandma3/2-3/si_clock/); [Scribbles](/grandma3/2-3/qsg_scribble/); [RDM](/grandma3/2-3/rdm/); [Clone Fixtures in the Patch](/grandma3/2-3/operate_clone_patch/); [Connect MIDI](/grandma3/2-3/fs_connect_midi/); [What is Tracking](/grandma3/2-3/cue_tracking/); [Add Fixtures to the Show](/grandma3/2-3/patch_add_fixtures/); [View Bar and View Buttons](/grandma3/2-3/ws_ui_view_bar_and_buttons/).

- Links in the help are now blue and underlined.
- Syntax now has a new and more prominent font. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the command line:

- Group can be set as default for the command line using the keyword **Group** + Please.



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Next and Previous keyword behavior to target objects:

When used in combination with the Cue keyword, Next and Previous can be used to target existing cues in relation to the current cue.

(\[Function]) \[Object] \["Object\_Name" or Object\_Number or Next]

**Examples:**

- To target the next or previous cue, type:

  |                                                                    |                              |
  | ------------------------------------------------------------------ | ---------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue Next |

  |                                                                    |                                  |
  | ------------------------------------------------------------------ | -------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue Previous |

* To target the next or previously indexed cue, type:

  |                                                                    |                                |
  | ------------------------------------------------------------------ | ------------------------------ |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue Next 1 |

  |                                                                    |                                    |
  | ------------------------------------------------------------------ | ---------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue Previous 1 |

- To store to the second next cue, type:

  |                                                                    |                                      |
  | ------------------------------------------------------------------ | ------------------------------------ |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue Next 2 |



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the access of buttons to the Next and Previous keywords:

In addition to the buttons, Next and Previous keywords can now be accessed using shortcuts closer to the keypad:

MA + (shortcut for Next) 

MA - (shortcut for Previous)

Opposed to the buttons Next and Prev, these shortcuts will not immediately execute the command. Instead, they will execute the command once you press Please.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the + (Plus) and - (Minus) keyword behavior:

When used in combination with the Cue keyword, + and - can be used to mathematically target numbers of cues relative to the current cue.

- To target the object that is +0.1 from the current cue object, type:

  |                                                                    |                                     |
  | ------------------------------------------------------------------ | ----------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue + 0.1 |

  If this object exists, the Store Cue Merge pop-up will be displayed. If this object does not exist, this command will create the object.

* To target the object that is +1 integer apart form the current cue object, type:

  |                                                                    |                                   |
  | ------------------------------------------------------------------ | --------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue + 1 |

  If this object exists, the Store Cue Merge pop-up will be displayed. If this object does not exist, this command will create the object.

- To target the object that is +1 integer apart from the current object, type:

  |                                                                    |                                    |
  | ------------------------------------------------------------------ | ---------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Update Cue + 1 |

  If this object does not exist, an error message will be displayed.

**Example:**

- To store values to cue 13.5 if you are in cue 12, type:

  |                                                                    |                                     |
  | ------------------------------------------------------------------ | ----------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue + 1.5 |

  If cue 13.5 already existed, the values will be updated, if cue 13.5 did not exist yet, a new cue 13.5 will be created (12 + 1.5 = 13.5).

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the method to create objects:

Using the + and - keyword without including the offset of numbers, creates objects.

If you do not specify the offset of numbers when using + or -, while also using any function keyword along with this (Store, Copy, Paste, Insert, Import and so forth),\
Store Cue + will insert a new cue before or after the current cue using an offset of 1, 0.1, 0.01 or 0.001, depending on the space available between the current and next or previous cue that already exists.

**Examples:**

- To create cue 12 if you are in cue 11 and there is no cue 12 yet, type:

  |                                                                    |                                 |
  | ------------------------------------------------------------------ | ------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue + |

- To copy cue 21 to a new cue between two existing cues 11 and 12 and you are in cue 11, type:

  |                                                                    |                                          |
  | ------------------------------------------------------------------ | ---------------------------------------- |
  | ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Cue 21 At Cue + |

  Cue 21 will be copied as a new cue 11.1 (offset = 0.1, as cue 12 already exists). 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the option keyword **/AutoFit**. It positions any window in the next free area of the specified screen respecting the minimum requirements:

Use this syntax to do so: \[Function] ScreenContent Default \["Window\_Name"] /AutoFit

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved IfOutput keyword:

- If you selected several fixtures, where dimmer is enabled and then select multiple groups afterward, entering IfOutput Selection into the command line and pressing Please will only select the fixtures where dimmer is open.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the option keyword /HighPrecision. However, it has more of an internal use rather than a general one. Using this option keyword shows more digits in the export of the geometry offset values. If you do not use /HighPrecision, the export will still be precise enough and also more intelligible.

Use this syntax to do so: Export \["FixtureType\_Name" or FixtureType\_Number] /HighPrecision

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved Lua:

- Added another boolean to SetBlockInput(boolean, boolean) to display a message on all screens, that the station input is blocked:

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added new value "GridPosition" in the /Type option keyword:

It can only be used with the CleanUp keyword. /Type "GridPosition" removes gaps in grid positions and resets offset to origin in one object.

Use this syntax to do so:

CleanUp \[Object] \["Object\_Name" or Object\_Number] /Type "GridPosition"

---

## Changes

- New keywords:

  - [FastSync](/grandma3/2-3/keyword_fastsync/)
  - [Learn](/grandma3/2-3/keyword_learn/)
  - [ReSync](/grandma3/2-3/keyword_resync/)

- New option keywords:

  - [/AutoFit](/grandma3/2-3/ok_autofit/)
  - [/HighPrecision](/grandma3/2-3/ok_highprecision/)
  - [/OddEven](/grandma3/2-3/ok_oddeven/)

|                                            |                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                  |
|                                            | For more information about the new keywords, please read the corresponding sections above. |

New color theme colors:

- ColorDefinitions:

  - Global.ButtonBackgroundTransparent75
  - PoolDefault.PresetDimmer
  - PoolDefault.PresetPosition
  - PoolDefault.PresetGobo
  - PoolDefault.PresetColor
  - PoolDefault.PresetBeam
  - PoolDefault.PresetFocus
  - PoolDefault.PresetControl
  - PoolDefault.PresetShapers
  - PoolDefault.PresetVideo
  - PoolDefault.PresetDynamic
  - PoolDefault.PresetAll 
  - StatusCenter.Visible

- Colors:

  - Beat.DownBeat
  - Beat.NormalBeat
  - Beat.InactiveBeat
  - Beat.DisabledBeat
  - ExecConfigEdit.ExecSizeFrame
  - FilterGrid.RulesetSeparator
  - FilterGrid.ResultingAttributes
  - Global.DefaultTransparent75
  - Help.Links
  - PoolWindow\.PresetDimmer
  - PoolWindow\.PresetPosition
  - PoolWindow\.PresetGobo
  - PoolWindow\.PresetColor
  - PoolWindow\.PresetBeam
  - PoolWindow\.PresetFocus
  - PoolWindow\.PresetControl
  - PoolWindow\.PresetShapers
  - PoolWindow\.PresetVideo
  - PoolWindow\.PresetDynamic
  - PoolWindow\.PresetAll
  - StatusCenter.Inactive
  - StatusCenter.Active
  - StatusCenter.Warning
  - StatusCenter.Error
  - StatusCenter.Visible
  - StatusCenter.Enabled
  - StatusCenter.Cooking
  - StatusCenter.Parked
  - StatusCenter.Alert
  - StatusCenter.Lowlight
  - Subfixture.DefaultMarkerColor
  - TitleButton.DynamicFilterIcon
  - TitleButton.DynamicFilterShadow
  - TitleButton.DynamicFilterText

- New grandMA3 Lua Functions:

  - CallRealtimeLockedProtected(function:name): result of function
  - ChannelTable(string:attribute\_name or integer:attribute\_index): table of ui\_channel\_index
  - GetBlockInput(boolean)
  - GetListItemAdditionalInfo(light\_userdata:handle, integer:index): string:value
  - GetVarVersion(light\_userdata:variables, string:varname): integer:version
  - HostRevision(nothing): string:hostrevision
  - RemoteCallRunning(nothing): boolean:remotecall\_is\_running
  - SelectionTable(nothing): table of subfixture\_index
  - SetListItemAdditionalInfo(light\_userdata:handle, integer:index, string:value): nothing

* In the copy cue pop-up, the buttons in the title bar changed from Load Defaults and Save Defaults to Load Preferences and Save Preferences.
* Removed the acronym **AS** in the **AutoStore keyword**. This keyword now uses the shortcut **Autos**. The **As **shortcut is now only used in the **Assign keyword**.
* Typing **C** in the command line now enters the Cue keyword.
* Typing **I** in the command line now enters the If keyword. 
* The white focus frames around selected pool objects are now slightly thinner.
* Renamed **Lock Executorin** the title bar of the assign menu ->previously **Lock Exec**.
* Renamed **Notification Mode** in the title bar of the message center -> previously **Notification Type**.
* Moved the **Frequency** column from DMX channels to DMX modes in the fixture type editor.
* Moved the **Delay To Phase** setting to the sequence sheet and the settings of the preset editor. The Delay to Phase setting is no longer part of Preferences and Timings - Timings window. 
* Pool windows with Use Object Action enabled that were marked with a ![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) are now marked with a ![](/img/grandma3/2-3/icon_clicking_hand_14_v2-3-cc0afd.png).

---

## Bug Fixes

### 3D

| Description                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visual artifacts in the form of grain appeared in the shadowed area of a beam.                                                                                                                                                              |
| Meshes could sometimes be lost after doing a PSR and restarting the software.                                                                                                                                                               |
| The calculator for the X,Y and Z rotation did not work correctly when the Rotation Mode in the encoder bar was set to **Group**.                                                                                                            |
| The Render Quality and Camera would not show any label text if a render quality or camera pool object had the default name.                                                                                                                 |
| When creating a new camera and setting Roll to a value other than 0, the camera was displayed incorrectly.                                                                                                                                  |
| In some cases subfixture selections would be displayed wrongly in the 3D viewer.                                                                                                                                                            |
| In rare cases the 2D Right camera in the 3D viewer would not display the bounding box.                                                                                                                                                      |
| Opening Calibrate Position and loading the show file again would cause a crash.                                                                                                                                                             |
| Depending on the size of the 3D viewer window, tapping ![](/img/grandma3/2-3/icon_selection-grid_15_v1-9-2ee8fe.png) resulted in different grid values in the selection grid.                                                               |
| Changing Multi LED Beam Mode in edit render qualities multiple times resulted in a decrease of beam brightness.                                                                                                                             |
| If you patched two MArkers to the same universe using data from multiple PSN sources, only one MArker would move in 3D.                                                                                                                     |
| When using the Position Calibration Dialog, the points P1 to P4 inside the 3D viewer window were displayed with an offset on the Z axis.                                                                                                    |
| If a stage had an offset position, the arrangement tool in the encoder bar would not always take the offset into account correctly.                                                                                                         |
| If you tapped Touch Mode in the 3D viewer settings multiple times to switch through the values, the selection would stop at **Follow**.                                                                                                     |
| Selecting fixtures and resetting the Pos X encoder in 3D Setup mode, and then re-aligning them, the fixtures were sorted incorrectly and did not respect the selection order of the selection grid.                                         |
| If you opened the patch on screen 2, enabled Show 3D Positions, and tapped 3D Position Settings, the settings pop-up would open on screen 1.                                                                                                |
| If you had Show 3D Positions enabled in the patch and opened the 3D position settings on the Label tab, the faders Background Alpha and Text Alpha would flicker.                                                                           |
| If a view included a 3D viewer window, the view would sometimes take longer to be be displayed fully. Now the 3D viewer displays the message "3D initializing ..." to indicate that the 3D viewer requires some time for data preparation.  |
| Translating and rotating a stage could result in wrong stage sizes and beam cutoffs.                                                                                                                                                        |
| An MVR-xchange file request could fail due to an invalid character in the commit message. This bug is fixed. Any invalid characters in the comment will now be converted to valid ones.                                                     |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you selected a subfixture of a multi-instance fixture and executed TopUp or pressed Up, the parent fixture would not be selected.                                                                                                                                             |
| If you opened the Oops overlay on onPC with the backspace shortcut, an additional oops was executed undoing the most recent command.                                                                                                                                             |
| After selecting a Gel and then pressing Oops, did not remove the Gel from fixtures.                                                                                                                                                                                              |
| If a user with setup rights was logged in, New Show in the Backup Menu was not grayed out.                                                                                                                                                                                       |
| Typing "Thru" in the calculator using the keyboard lead to wrong results.                                                                                                                                                                                                        |
| Cue commands in mirrored sequences would be executed even if Cue Command was set to Force No in the mirrored sequence.                                                                                                                                                           |
| Moving recipes to create a new order did not automatically trigger the cooking process.                                                                                                                                                                                          |
| Filters were not stored with individual names, for example with _**Store Filter 5 "My Filter"**_, the name was "Filter 5".                                                                                                                                                       |
| When editing the command with the handle inside again, handles to recipes became invalid.                                                                                                                                                                                        |
| In the Layout Viewer, when editing layout elements via _**Edit Layout x.y**_, the selected elements were edited instead of the one called via the command line.                                                                                                                  |
| Pressing MA to close the temporary command line history returned  "Failed:Menu "CommandLineHistory" in the command line history.                                                                                                                                                 |
| It was possible to copy empty strings from the cue command field to the clipboard.                                                                                                                                                                                               |
| If you executed Delete Sequence X If Tag 1 and Tag1 had no references, a warning would be displayed.                                                                                                                                                                             |
| If you typed **C** in the command line in order to enter the Cue keyword, the Call keyword would be entered instead. This bug is fixed and typing C now enters the Cue keyword.                                                                                                  |
| If you typed the **I** in the command line in order to enter the If keyword, the Import keyword would be entered instead. This bug is fixed and typing I now enters the If keyword.                                                                          |
| The ChangeMulticastBase command could not address the own device from which the command was executed. For example ChangeMulticastBase Console Thru /Type "Alternative" changed the multicast base address for all consoles in the network, except the executing console itself.  |
| If you copied a sequence in the sequence pool, the object action would not be copied to the new sequence.                                                                                                                                                                        |
| If you copied a cue to another cue in the sequence sheet, the options to copy values from the source cue would not be displayed in the pop-up.                                                                                                                                   |
| If you assigned functions to encoder left and right and then selected Empty on the encoder, encoder left and right would both be cleared.                                                                                                                                        |
| It was not possible to set up a MIDI In Device via the Lua command GetObject('root 2.2'):Set('onpcmidiindevicename','None').                                                                                                                                                     |
| If you executed the HelpKeyword command, the keywords CueDelay, CueFade, Bitmap, and Generator would not be listed in the command line history.                                                                                                                                  |
| If you created single groups using the command AutoCreate Group X these single groups would not respect the order of the fixtures in the selection grid.                                                                                                                         |
| If you loaded the "defaultDAYLIGHT" color theme and executed MA + MA + Clear, the "default" theme would not be reloaded.                                                                                                                                                         |
| If you opened the list of keywords in the command line history, the Multipatch keyword would show an incorrect abbreviation – F10. This bug is fixed. The command line history now displays the correct abbreviation – F+10.                                                     |
| Using the Goto keyword in combination with a cue that did not exist, for example Goto Cue 6.5, would lead to a syntax error. Now the Goto pop-up opens with focus on the nearest cue.                                                                                            |
| Enabling Assert Previous Events while a timecode was running, did not immediately perform an assertion on the running timecode.                                                                                                                                                  |
| When creating plugins, the property called "Tags" collided with its child container called "Tags".                                                                                                                                                                               |
| It could happen that the grandMA3 software crashed when moving a cue to an empty sequence.                                                                                                                                                                                       |
| It was not possible to assign subfixtures to a layout using the command line, for example by using Assign Fixture 1 Thru 4.Thru At Layout 1.                                                                                                                                     |
| Assigning an action to an executor, using a name that did not exist, created an empty executor if it did not already exist on a page.                                                                                                                                            |
| Moving an object from an executor to an Xkey with a width of 2, resized it to a width of 1. Moving it back again to a normal executor resized it again to a width of 2.                                                                                                          |
| Renumbering cues in the sequence sheet did not follow the user input regarding the decimals but the cue with the most decimals in the selection.                                                                                                                                 |
| Cloning fixtures referring to data pools, for example Clone Fixture 1 Thru 4 At Fixture 5 Thru 8 if Datapool 1, removed individual delay times of the cloned fixtures.                                                                                                           |
| Turning a recipe back to a preset could cause a crash.                                                                                                                                                                                                                           |
| Executing a collect command in combination with an asterisk (\*) would lead to to a freeze in the software.                                                                                                                                                                      |
| If a sequence was locked and you stored a cue with a decimal, the cue numbers would change.                                                                                                                                                                                      |
| Changing MAtricks in a recipe preset would sometimes not work as expected.                                                                                                                                                                                                       |
| Using Oops after cloning did not undo all changes to attributes from the cloning process.                                                                                                                                                                                        |
| Cancelling an operation using MA + MA + Esc while the "Reading Objects" bar was displayed, could crash the software.                                                                                                                                                             |
| Merging a preset into an embedded preset could cause references and data in and to the embedded preset to be wrong or lost.                                                                                                                                                      |
| If you selected **No Shuffle** for a recipe line in presets and referenced to a different preset in the values column, shuffle would not be disabled.                                                                                                                            |
| If there was only a single cue in a sequence and it was locked, it was still possible to store new values into the sequence with Store Sequence X.                                                                                                                               |
| MAgic presets that were created from recipes did not work.                                                                                                                                                                                                                       |
| Moving a range of cues, oopsing, and moving them again would result in cues with decimal numbers.                                                                                                                                                                                |
| Executing Store Sequence /DMX if the programmer was clear would store channels for the Universal fixture and RGB values.                                                                                                                                                         |
| If you assigned the selected Rate master to an executor, the speed master executor configuration would be assigned instead of the master executor configuration.                                                                                                                 |
| If you opened a menu, like for example the Add Window menu, that did not use encoders other than the screen encoder and the screen encoder setting was enabled in the user profile, all dual encoders behaved as screen encoders instead of only encoder 5.                      |
| Macros that trigger other macros, which then overwrite presets, could lead to a crash if they are executed too fast.                                                                                                                                                             |
| FaderSpeed At x Fade y could fail if the current speed was learned and is linked to a speed master.                                                                                                                                                                              |

### Connections

| Description                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you established a RemoteHID connection between two devices using the onscreen keyboard and tried to cut the connection, only the onscreen keyboard would close, the RemoteHID connection would not be cut.                             |
| Sometimes USB drives would be detected stating 0% free space, although they still had free space,                                                                                                                                         |
| Some USB devices, for example the SanDisk 3.2 Gen1 SCSI, were not detected as storage devices at all.                                                                                                                                     |
| The dual encoders on a command wing would not work if screen 1 of the onPC software was minimized.                                                                                                                                        |
| In rare cases, if you installed a new software version using network update with a slow network, some update processes would not be completed fully. This could lead to issues, for example missing wing connectivity or empty oops list. |
| If you added Art-Net or sACN data to a show file and performed a PSR with that show file, the Art-Net and sACN data would only be available in the new show file after saving and loading the show file.                                  |
| grandMA3 did not start on macOS version 11.7.10 on some devices.                                                                                                                                                                          |
| When playing a song on grandMA3 onPC for MacOS, the software would output sound even if the system volume was set to 0.                                                                                                                   |
| If the minimum or maximum X, Y, or Z position of a MArker was exceeded by using PSN input, the MArker would jump to the 0 position inside its movement space on the according axis.                                                       |
| Some devices advertised 2.5 Gbps as a possible link mode when connected to the network. This could lead to problems with the network, as not all devices support 2.5 Gbps.                                                                |
| The software could crash if an individual object action, for example, flash, was assigned to an sequence pool object and then the object was selected via web remote.                                                                     |
| If two consoles were in session and one console had a web remote connected, loading a show file on the other console multiple times would crash the console that was connected with web remote.                                           |
| RemoteHID did not work when used with Windows 11.                                                                                                                                                                                         |
| In session the master station could crash, if sACN was active and a show file was loaded ont the station.                                                                                                                                 |
| It was not possible to use the DumpSystemInformation command from terminal app.                                                                                                                                                           |
| Pasting a large amount of PSN trackers from an external system could crash the software. A limit was set for PSN trackers per system to avoid crashes. The new limit is 1024 trackers per PSN system.                                     |
| The software could crash when a fixture sent a RDM parameter description that exceeded the maximum allowed length of ANSI E1.20.                                                                                                          |
| Repatching a MArker to a new address via Live Patch while receiving PSN did not initialize the input to the new DMX channels.                                                                                                             |
| In some cases, if an extension wing was disconnected and then reconnected, the touch, buttons, and faders of the extension wing would stop working.                                                                                       |
| The software could crash when a command, for example, in a cue, was changed and was displayed multiple times across different displays.                                                                                                   |
| If MA-Net interface was set to **Auto** on consoles, the Class C IP address (192.168.x.y) was not preferred. Instead, the Class B IP address (172.16.x.y) was preferred.                                                        |
| In some bigger show files, if a console booted and automatically connected to a running session, the faders and buttons of the internal wings would not connect.                                                                          |
| The touch function of internal screens could stop working properly after the corresponding product had been running for a week.                                                                                                           |
| It was possible to invite xPort nodes running in Mode2 into grandMA3 sessions.                                                                                                                                                            |

### Patch

| Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you created a new DMX curve and assigned it to a fixture, the new DMX curve would not be applied to the output.                                               |
| Unassigned copies of automatically created spaces from MArkers were deleted after leaving the patch menu.                                                        |
| If you changed the IDType to "Fixtures", you could not enter the patch anymore.                                                                                  |
| The subcolumn of the DMX column in the edit fixture type menu of the geometries tab was incorrectly named **Offset**. It was renamed **Patch**.                  |
| If you reentered the patch after cutting and pasting a layer or class in the patch, the fixtures would not be in their corresponding layers or classes anymore.  |
| Editing an already patched fixture type could change the default values of some channels.                                                                        |
| With Partial Show Read the software could crash if universal fixtures had no CID.                                                                                |
| Replacing a used attribute with an unused attribute did not reinitialize the patch.                                                                              |
| The Feature selection pop-up in the Attribute Definitions tab was empty when a feature group with no features was selected.                                      |
| In PSR, renamed IDTypes would reset to their default names.                                                                                                      |
| Fixtures with indirect additive color mixing remained black when indirect color mixing attributes of the main instance were set to RGB 0/0/0.                    |
| Cutting and pasting fixtures in the patch could lose corresponding preset data in cues.                                                                          |
| PatchOffset in edit patch was calculated wrong if you set an offset for multiple fixtures.                                                                       |
| If you stored a show file called "NewShow" and performed a clean start, this show file was loaded instead of a blank new show file.                              |
| If you deleted fixtures in the patch and saved the changes, the programmer would be cleared.                                                                     |
| Exchanging a fixture type with broken channel functions would do nothing due to a missing channel conversion of physical values.                                 |
| In the description column of fixture types in the patch, only the first line of the description could be edited.                                                 |
| Oopsing a newly created channel set in the fixture type editor did not work. Instead the first channel set was removed.                                          |

### Phaser

| Description                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Using LearnSpeed after executing DoubleSpeed, HalfSpeed, or Speed1, did not scale the speed as correctly.                                                                                                                                                                                            |
| When KnockIn Measure was executed, the total width was knocked in instead of the phaser steps.                                                                                                                                                                                                       |
| Phaser values were not applied to attributes of subfixtures that were part of a subfixture.                                                                                                                                                                                                          |
| The console could crash if you had more than 25 steps for a phaser.                                                                                                                                                                                                                                  |
| If a speed master was assigned to a cue and Sync was set to **No** in the sequence sheet for the cue, the cue phase was still synchronized as if Sync was set to **Yes**. Hence, the cue phase did not start at the beginning of the phase when a cue was started and a phaser was already running.  |
| Cloning fixtures in a phaser preset with integrated selective presets, would result in the loss of inks to the selective presets.                                                                                                                                                                    |
| Dimmer phasers in multi-instance fixtures that had a phase set in the phaser would not fade out correctly with the determined fade out time.                                                                                                                                                         |
| Cloning in a phaser preset with integrated selective presets lead to loss of the link to these presets.                                                                                                                                                                                              |
| Stomping a phaser with relative values in a tracked cue would sometimes not work.                                                                                                                                                                                                                    |
| If a phaser had a value in step 1 that was equal to the value in a break cue, tracking of the phaser would continue after the break cue.                                                                                                                                                             |
| Speed7 was not selectable in the speed master calculator.                                                                                                                                                                                                                                            |

### Playback

| Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stomping a running phaser from a playback did not always offer the cue in the Update menu.                                                                             |
| Starting a sequence where fixtures had no values in the first cue and Off when Overridden was enabled, the sequence would be immediately disabled again.               |
| If Wrap Around was enabled for a sequence and Go+ Cue 1 was executed while the last cue was running, Cue 1 would have tracked values of the last cue in the sequence.  |
| If cues had **Type** set to **Follow **in the sequence sheet, executing Top would sometimes not work.                                                        |
| Timecode events could get lost when deleting a mirrored sequence.                                                                                                      |
| The **Break** property in cues did not work properly when tracking shield options are used.                                                                            |
| Setting a **Break** property for filters in cues did only work when storing the corresponding cue the second time.                                                     |
| In a session, it could happen that in bump sequences, pixels on different fixtures remained active for a short moment after the bump.                                  |
| If there was corrupted group data in a show file, patching a fixture into a grouping fixture could change the DMX output.                                              |
| The last event of a timecode show was not triggered if the time of the event did not match the actual duration.                                                        |
| If you renumbered cues, the tracking distance and MIB targets of the cue were not automatically updated.                                                               |
| If you saved a show while a sequence was running that had a tag with the tag type Kill Instant assigned, the sequence would not be running when you loaded the show.   |
| If you had executor time enabled and played back a sequence from an executor, the executor fade time would be applied even if an attribute was set to Snap.            |
| In some cases, fader values could jump when using negative or positive group masters.                                                                                  |

### Windows

| Description                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you had a fixture type with fixture type presets in it and then switched to FTPresets in the Fixture Types Editor, the calculator values would offer an incorrect range.                                                                                                            |
| If a sheet was opened on a console and then the Assign menu was used while the command line was visible on that same screen, the edit pop-up when creating new appearances or scribbles would open in the background.                                                                  |
| Certain fixture types could freeze the console due to a number of duplicated channel functions and channel sets.                                                                                                                                                                       |
| The Value column of the recipe sheet did not display the pool number of the All Presets pool when the pool was renamed.                                                                                                                                                                |
| It was not possible to open the pool window settings using the pool overlay.                                                                                                                                                                                                           |
| In the Master Controls overlay, the Playback Controls overlay, and Playback window, a long press on the title of an executor did not open the calculator.                                                                                                                              |
| The IDs for objects in the sMArt menu did not match the IDs in the encoder bar.                                                                                                                                                                                                        |
| If you edited columns in sheets, a white focus box would be drawn above the column edit menu.                                                                                                                                                                                          |
| Tap and hold on an object in the dropdown of Timecode in the title bar or the settings of the timecode viewer opened another timecode editor. This also happened if you selected New in the dropdown.                                                                                  |
| Pressing Delete and selecting an object in the Layout Viewer, without enabling the setup mode, would open the alert pop-up reminding you to enable setup mode. However, it did not remove the Delete command in the command line.                                                      |
| Scrolling through the sequence pool resulted in selecting empty pool objects and creating empty sequences.                                                                                                                                                                             |
| If you scrolled through preset pools some feature group indicator bar squares would display wrong colors.                                                                                                                                                                              |
| When appearances were assigned to layouts, they did not create a reference. Deleting appearances from layouts did not display the confirmation pop-up.                                                                                                                                 |
| On onPC the phaser editor overlay sometimes did not fit the full screen.                                                                                                                                                                                                               |
| In some cases, universal presets were displayed as available for a fixture, even if they could not be used.                                                                                                                                                                            |
| The plugin editor did not recall the previous state of the on-screen keyboard and had a button with an arrow instead of a keyboard icon in the title bar.                                                                                                                              |
| If you double-clicked on the header of a column in the import pop-up of a media pool (Images, Videos, Sounds, Symbols), all files would be imported. This bug is now fixed. Now if you double-click on a header, all rows in the column will be selected but no file will be imported. |
| If Hide Subfixtures was enabled in the fixture sheet, the attributes of the subfixtures would also be hidden in the main fixture. In Channel Sheet Mode, the main fixture would be hidden as well.                                                                                     |
| The XY Rotation pop-up in the selection grid would not close automatically after typing a value in the calculator.                                                                                                                                                                     |
| When tapping the sequence setting Executor Display Mode, a drop down menu would open instead of toggling through the different properties.                                                                                                                                             |
| When editing camera views in the 3D viewer, the title bar of the calculator did not show the range of values that were allowed.                                                                                                                                                        |
| Changing the mode in the Color Picker caused the window to lose focus.                                                                                                                                                                                                                 |
| Oops did not work as a backspace in the Show File Description area of the Backup menu.                                                                                                                                                                                                 |
| In the Special Dialog window, it was not possible to use arrow keys to navigate through colors in Book mode.                                                                                                                                                                           |
| Load Preferences and Save Preferences of the macro pool windows displayed the filter pool preferences.                                                                                                                                                                                 |
| The Add Window dialog stayed on the tab of the previously loaded show file when loading a different show file. This bug is now fixed. When loading a show file or starting a new show, the tab that opens the Add Window dialog is always reset to the Common tab.                     |
| If timecodes were locked, they could still be edited.                                                                                                                                                                                                                                  |
| Opening an existing timecode show and editing the timecode would display the wrong time in the calculator in Offset TC Slot of the timecode settings.                                                                                                                                  |
| If you saved a show file with a German Umlaut (ä, ö, ü), the show files character limit would be reached faster.                                                                                                                                                                       |
| With Sheet Mode set to **Dimmer+**, the fixture sheet did not display fixtures in a world without dimmer.                                                                                                                                                                              |
| It was not possible to move the tags column using column editing in recipes of the sequence sheet.                                                                                                                                                                                     |
| Tapping Ctrl on the on-screen keyboard could remain active after closing the on-screen keyboard. This bug is now fixed. Ctrl in the on-screen keyboard is now immediately released after using it once in combination with any other button of the on-screen keyboard.                 |
| The calculators in the camera pool object edit dialog did not display a range of valid entries in the title bar.                                                                                                                                                                       |
| When dragging the help overlay to the corners of the screen, the overlay was not displayed in full screen. Instead, it was larger than the size of the full screen.                                                                                                                    |
| If a view was stored with a window in Setup mode, disabling setup and calling the view again, setup was still disabled, except for Setup in the selection grid viewer.                                                                                                                 |
| Font sizes in layout elements would not adjust to the element as expected.                                                                                                                                                                                                             |
| When opening a custom master section window on grandMA3 onPC, disabling Show Title Bar, saving the window as a view and then recalling it, the title bar was displayed.                                                                                                                |
| It was not possible to directly label the first element with focus on in the edit layout menu using the keyboard.                                                                                                                                                                      |
| Assigning a tag from the label pop-up could cause the software to crash.                                                                                                                                                                                                               |
| The EncoderBars pool was listed under the category "Show Data" instead of "User Profile" in the all tab of the add window dialog.                                                                                                                                                      |
| After adding multiple events in the timecode viewer, the focus in the confirmation pop-up would be on Cancel instead of Add.                                                                                                                                                           |
| The bitmaps width and height dimensions that did not meet the Full HD restrictions could cause the grandMA3 software to crash.                                                                                                                                                         |
| The selection grid overlay opened and closed without using the Overlay Fade Time property of the user profile.                                                                                                                                                                         |
| Canceling the mirroring of sequences using swipey commands, for example, Assign Sequence 1 At Sequence 2 + Page x.x resulted in a loss of data instead of a rollback.                                                                                                                  |
| If you set the action of a layout element to **None**, and then saved and loaded the show, the previously set action changed to **\<Layout Default>**.                                                                                                                                 |
| The selection grid would not automatically adjust to fit all selected fixtures if you selected too many fixtures.                                                                                                                                                                      |
| Fixtures selections would not be displayed in selected order in the sequence sheet if Track Sheet and Fixture Sort were enabled.                                                                                                                                                       |
| If you set a feature group timing in the sequence sheet and switched to track sheet mode, the feature group timing would not be displayed.                                                                                                                                             |
| In some cases wrong colors were displayed in the feature graphics column in the track sheet.                                                                                                                                                                                           |
| Selected Rate and Grand Rate in the master controls displayed two times "%", for example "100%%".                                                                                                                                                                                      |
| If you ran the onPC software on a multi-touch screen and disabled Show Title Bar in the configure display menu, multi-touch would no longer work.                                                                                                                                      |
| Recipes in cue parts were not displayed in the content sheet.                                                                                                                                                                                                                          |
| Having a large number of presets in a show file and creating recipes using the Edit Values pop-up in the Recipe Editor would cause the editor to lag and eventually crash.                                                                                                             |
| On macOS, tapping the drive button in the backup menu multiple times did not always cycle through all drives.                                                                                                                                                                          |
| The software could crash while scrolling through a pool window which was opened using a macro.                                                                                                                                                                                         |
| In some cases, the fixture sheet did not display selected fixtures in the fixture sheet modes when the Prog Only mask was enbled.                                                                                                                                                      |
| It was not possible to display more than 127 wheel slots in the Channel Set Editor.                                                                                                                                                                                                    |
| Edit Display Preference in edit pop-ups, for example, the edit filter pop-up, did not work properly.                                                                                                                                                                                   |
| If you had a layout in setup mode, editing multiple fixtures at the same time by selecting them and tapping Edit Selected would not work.                                                                                                                                              |
| In show files with a very high amount of presets the calculator would not open immediately for some attributes.                                                                                                                                                                        |
| The Select DMX Mode pop-up in the filter editor would be missing the fixture type name and index for most modes.                                                                                                                                                                       |
| If you had the onPC software running on multiple monitors that had different resolutions and Show Title Bar was disabled, the grandMA3 window would not fit the screen.                                                                                                                |
| A few appearance colors made it very difficult to read text and values in the sequence sheet.                                                                                                                                                                                          |
| If the user rights were set to **None** for the logged in user after booting the console, screens 8 to 10 would display the wrong content.                                                                                                                                             |
| If you imported a fixture type, gobos would not be added to the next available slot in the gobo pool.                                                                                                                                                                                  |
| Tapping Park Selected in the DMX tester encoder bar did not work if the focus was not on the DMX sheet window.                                                                                                                                                                         |
| Calling a view with a fixture sheet, moving columns in the sheet and calling the view again, could cause the software to crash.                                                                                                                                                        |
| Dimmer values above 100% were displayed incorrectly in some sheets.                                                                                                                                                                                                                    |
| If you scrolled the content of the info window using a mouse wheel, the scroll direction would be opposite to other sheets and windows.                                                                                                                                                |
| If you opened a pool overlay with another pool overlay already open, the old overlay would close but the new one would not open.                                                                                                                                                       |
| If you pressed Menu and moved the Display menu on screen 7, there would be two instances of the menu.                                                                                                                                                                                  |
| It was possible to store empty screen content by pressing Store and tapping on a blank screen, which would block the screen and make it unusable.                                                                                                                                      |
| If you copied an empty scribble to a different slot in the pool and then tapped a combination of Revert, Clear, Oops, and Apply in the scribble editor of this copy, the software could crash.                                                                                         |
| If you had a note with more than one line in a cue and hid the Note column, the height of the cue row would not be adjusted.                                                                                                                                                           |
| For certain objects, their default key function was grayed out in the assign menu. This bug is fixed. The executor configuration for masters uses now Toggle instead of Flash for keys.                                                                                                |
| In some cases, the software could crash if you had the agenda window or sequence sheet open on multiple screens and updated the input of the command column.                                                                                                                           |
| In a specific show file, the selection grid window was flickering.                                                                                                                                                                                                                     |
| If opening the layout view in setup mode and deleted all layouts, tapping Snap to Grid would cause the software to crash.                                                                                                                                                              |
| In the sequence pool, objects that had an input / output / input and output filter assigned did not show the correct icon.                                                                                                                                                             |
| After importing meshes, the value of the **IsResource** column for the mesh in "Materials" changed.                                                                                                                                                                                    |
| The order of the tabs (Empty, Filter, and World) in the assignment editor was different from the order in the input and output filters in sequences.                                                                                                                                   |
| Illegal commands with presets, such as moving a locked preset, did not display an error message in the command line, only in the command line history.                                                                                                                                 |
| Tapping a parent in the Master or Preset tab closed the assign menu.                                                                                                                                                                                                                   |
| For certain fixture types, the color picker displayed the incorrect gamut when more than nine subfixtures were selected.                                                                                                                                                               |



---

## Deprecated

|                                            |                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                              |
|                                            | The following is deprecated and will be removed in the software in the near future. Make sure you read the sections stated below, so you can adjust your macros and plugins accordingly, if necessary. |

- The command Help + Please no longer opens the list of all keywords and option keywords. It was replaced by the new **HelpKeyword** keyword. For more information see HelpKeyword in [Other Enhancements](/grandma3/2-3/key_releasenotes/#h2_1198082799).
- The Lua function Aquire() is deprecated. It was replaced by Acquire(). For more information on the new Lua function Acquire(), see [Changes](/grandma3/2-3/key_releasenotes/#h2__656690415).

---

## Appendix

- We recommend you use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols we recommend you use a dedicated physical network for each protocol.
- The recommended workflow for executor configurations that are different, compared with the default executor configuration, is to create a new executor configuration, do the changes in the new configuration and save them.
- XML files with exported executor configurations from grandMA3 version 1.2 and prior cannot be properly imported to grandMA3 version 1.3 or later due to structural changes.
- XML files with exported analog remote setups from grandMA3 version 1.3 and prior cannot be properly imported to grandMA3 version 1.4 or later due to structural changes.
- XML files with exported timecode shows from grandMA3 version 1.3 and prior cannot be properly imported to grandMA3 version 1.4 or later due to structural changes.

---

## Known Limitations

|                                           |                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Software update via network to onPC stations requires confirmation during the install process at the destination system.  |

|                                           |                                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | When multiple GlobalMasters exist on the network, each with the same session and location name, the station with the higher priority takes over automatically. If all stations have the same priority, the station with the longest Online Time becomes the GlobalMaster of all stations.  |

|                                           |                                                                                          |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Recast will only recast presets to cues if there is a preset link in the absolute layer. |

|                                           |                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Loading show files that were saved in previous versions deletes the programmer content. |

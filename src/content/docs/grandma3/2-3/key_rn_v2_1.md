---
title: "Release Notes 2.1"
description: "](/grandma3/2-3/keyrnv21/#h22047761382)"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/key_rn_v2_1.html"
scrapedAt: "2026-06-15T18:25:59.942Z"
pagefind: false
---
- [Get Started](/grandma3/2-3/key_rn_v2_1/#GetStarted)

- [Bug Fix Version 2.1.1.5](/grandma3/2-3/key_rn_v2_1/#offline-topic)

  - [Other Enhancements](/grandma3/2-3/key_rn_v2_1/#h2__989068108)[\
    ](/grandma3/2-3/key_rn_v2_1/#h2__2047761382)
  - [Changes](/grandma3/2-3/key_rn_v2_1/#h2__2047761382)
  - [Bug Fixes](/grandma3/2-3/key_rn_v2_1/#h2__473760171)

- [Release Version 2.1.1.2](/grandma3/2-3/key_rn_v2_1/#h2__1841901983)

  - [Features](/grandma3/2-3/key_rn_v2_1/#h2_613882109)

    - [Partial Show Read (PSR)](/grandma3/2-3/key_rn_v2_1/#h3__228527687)
    - [3D](/grandma3/2-3/key_rn_v2_1/#h3_1570501958)
    - [Geometry Viewer](/grandma3/2-3/key_rn_v2_1/#h3__139560060)

  - [Other Enhancements](/grandma3/2-3/key_rn_v2_1/#OtherEnhancements)

  - [Changes](/grandma3/2-3/key_rn_v2_1/#h2__656690415)

  - [Bug Fixes](/grandma3/2-3/key_rn_v2_1/#BugFixes)

  - [Appendix](/grandma3/2-3/key_rn_v2_1/#Appendix)

  - [Known Limitations](/grandma3/2-3/key_rn_v2_1/#KnownLimitations)

---

 

## []()Get Started

Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning within the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let's go! To leave the Release Notes, tap I agree on the top right corner. The main screen of grandMA3 software opens. On the right side, you can see predefined views on view buttons. To switch between the views, tap the view buttons.

If this is your first time starting grandMA3 software, patch some fixtures first. Or you can load one of the demo shows delivered with the software. Either way, press Menu. If you use grandMA3 onPC software, there is a ![](/img/grandma3/2-3/icon_gear_15_v1-0_1-8f7ef1.png) symbol in the top left corner there. Clicking the ![](/img/grandma3/2-3/icon_gear_15_v1-0_1-8f7ef1.png) symbol is the same as pressing Menu on a console.

Tap Backup and then Load, now you are ready to load shows. You would like to get right on it? Switch Shows to Demo Shows in the title bar first. To do so, tap Shows repeatedly until it says Demo Shows. Once Demo Shows is displayed, it is possible to select any of them. After you selected a demo show, tap Load.\
In case a show was already loaded, a pop-up will appear asking if you want to save the current show first before loading the new one. It's up to you!

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - there are view buttons there, which change the screen content. At the bottom, you will find the encoder bar and the command line. Technically that is all you need to get started. For more information, see the grandMA3 help menu. To access the help in the console or the onPC, tap the view buttons named Help or visit the Online Manuals on the MA Lighting website. If you want to learn the grandMA3 software step by step, please see the [Quick Start Guide](https://help.malighting.com/Page/grandMA3/grandMA3_Quick_Start_Guide/en) and join the MA e-Learning - it's free of charge and available on the MA Lighting website.

Have fun with using our grandMA3 software - Find all the improvements and changes of this software version further down.

|                                            |                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                 |
|                                            | The grandMA3 software will start using the show file (or status) that was in operation before the software was shut down. |

---

 

## Bug Fix Version 2.1.1.5 

## Other Enhancements 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the notifications when loading show files: If a show file contains corrupted presets or cues, the Message Center will list the corrupted and discarded presets and cues in the System Errors mode of the message center. 

---

## Changes

- Reverted a Playback Bugfix from version 2.1.1.2: If you had a Sequence with absolute and relative dimmer values and turned off Soft LTP for the sequence, the dimmer did not behave correctly when playing back the sequence.

---

## Bug Fixes

### Command Line and Macro

| Description                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The duration of cues in newly created sequences after using Partial Show Read was always set to 0 seconds.                                                                                                                                          |
| The assignment of a sound to a track in a timecode show got lost when loading an older show file in v2.1.1.2.                                                                                                                                       |
| Recipes in the programmer that had selective presets selected would not cook on a connected station if a sequence was already running for the targeted fixtures and attributes.                                                                     |
| The software could crash when loading a show file from a previous version that used XYZ.                                                                                                                                                            |
| When loading a show file using Partial Show Read the Cue Destination in the timecode shows of the local show file got lost.                                                                                                                         |
| The software could crash when deleting sequences while being in a world.                                                                                                                                                                            |
| If the mode of a fixture type was changed, for example from “Basic” to “Extended”, fixtures of this type did not share previous values of global preset data anymore. Instead only the first patched fixture kept values of the global preset data. |

### Patch

| Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- |
| With some GDTF files, there were no DMX modes visible in the library, and the files could not be imported.  |

### Playback

| Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you updated a preset that was part of a running sequence, the updated values did not appear in the output of that running sequence until you restarted it.                                                                    |
| New cue values were not output when clearing the programmer after updating or storing into the running cue if the DMX mode of a fixture was changed before. This problem only occured in a session with other grandMA3 devices.  |

### Windows

| Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| It could happen that the Scale fader in the Layout Viewer window settings could only be at minimum or maximum value, but not at a value in between.  |
| Preset pools did not display the cyan pool number indicating how many fixtures currently use the preset.                                             |



---

 

## Release Version 2.1.1.2 

## Features

The latest release of grandMA3 version 2.1.1.2 rolls out several enhancements that enrich your lighting experience. Besides numerous improvements based on your highly appreciated feedback, many new and clever features have found their way into the software. Read on for a quick introduction and find links for more information.

---

 

### Partial Show Read (PSR)

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Partial Show Read allows to transfer objects from a different show into the currently loaded show file. Especially when dealing with objects that contain fixture data, Partial Show Read is able to transfer the data to the different patch of the loaded show file.

|                                                  |                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                              |
|                                                  | The show file to be PSR'ed needs to be saved with the current version that is running on the station where you do the PSR.  |

To access the PSR menu, go to Menu - Show Creator - PSR.\
A tab bar at the top with tabs in arrow shape guide the user through the different PSR steps.

In a first step, select a show file you want to PSR into your current loaded show file. This will be done in the Show tab. Select the desired show file from a drive, and then tap Patch in the tab bar or Select at the bottom for the next step. PSR offers only show files from the internal drive (of the current version) or from an USB drive.

A pop-up asks the user if they want to save the show file with a different name. This offers the possibility to continue with a new copy of the original show file.\
The show file will be saved with the new name. Enter the new name and then tap Rename. If you don't want to rename the show file, just tap Do Not Rename. Not changing the name and tapping Rename has the same outcome as tapping Do Not Remame.

If the selected file is suitable for PSR, the PSR menu will shift to the Patch tab. In this Partial Show Read Prepare menu the user can adjust the patch of both show files.\
The left side (PSR Patch) is the patch of the show file to be imported. The right side (Local Patch) represents the patch of the currently loaded show file. The title bars of both sides also display the show file names.

To reset all changes and filters, tap Reset.

When Hide Environmental is enabled, the environmental fixtures are not displayed in the menu.

In order to adjust the patch of the to be PSR'ed show file towards the resulting patch, the user can change the Stage, FixtureID, IDType, and CID by editing the corresponding cells. When the user changes any of these properties, the font color turns from white to cyan. The Default value for Stage means that the fixtures are imported into the same stage as in the PSR show file.\
Cells that cannot be edited have a darker background color. This applies to the PSR Patch and the Local Patch areas.\
In the IDType cells on the PSR Patch side, two names of IDTypes may appear in one cell. This happens when an IDType was renamed in the PSR show. They will be displayed with this naming scheme: Name in PSR Show (Name in Local Show). The names of the IDTypes of the PSR Show cannot be taken over into the Local Show. Also when changing the IDType of a fixture on the PSR Patch side, both IDType names may be displayed.\
Rows with fixtures on both sides are called matched.\
The fixtures inside the Patch are grouped together and follow this order:

1. Fixtures that are taken from the local show file.
2. Fixtures taken from the PSR show file.
3. Not taken fixtures from the local show file.
4. Not taken fixtures from the PSR show file.

These four blocks are separated by each other with white lines on both sides.

When entering the Patch tab the software automatically matches the fixtures in this order:

1. Fixture ID
2. Custom ID
3. Name
4. GUID

The fixtures with a green background will exist with their respective fixture types in the show file after completing the Partial Show Read Prepare step. To define which fixtures are used, use the tools that are located between both areas:

- ![](/img/grandma3/2-3/icon_ok_15_v2-1-bc9f38.png) (Use selected fixture): The selected fixtures will be marked to be used.
- ![](/img/grandma3/2-3/icon_flip_left_to_right_15px-e93648.png) (Swap selected fixture): The fixture on the other side will be marked.
- ![](/img/grandma3/2-3/icon_cancel_15_v2-1-e54335.png) (Don't use selected fixtures): The marking of the selected fixtures will be removed.

It is possible to use different fixtures on the right side and the left side. But it is not possible to use the fixtures of both sides of the same row.

Using the search field allows to filter the patches by fixture names, FixtureID and CID.\
Additional filters are available to filter the lists:

- Stage: Displays the fixtures of the selected stage. 

- Match Type: Displays the fixtures depending on their matching state.

  - **None**: No filtering applies.
  - **Matched**: Displays only fixture pairs that are matched together.
  - **Unmatched**: Displays only the fixtures that are not matched together.
  - **Conflicted:** Displays only the conflicting fixtures.

- FixtureType: Displays only the fixtures of the selected fixture type.

- Layer: Displays only the fixtures of the selected layer.

- Class: Displays only the fixtures of the selected class.

To reset all filters at once, tap Reset Filters.

The buttons at the bottom allow fast selection of which fixtures will be taken:

- Use PSR Only: The resulting patch contains only the fixtures from the PSR show file.
- Use Local Only: The resulting patch contains only the fixtures of the local show file.
- Merge PSR: The fixtures that exist only in the PSR show file are added to the fixtures of the local show file. Fixtures that exist on both sides will result in taking the ones of the current show file.
- Merge Local: The fixtures that exist only in the local show file are added to the fixtures of PSR show file. Fixtures that exist on both sides will result in taking the ones of the PSR show file.

If you applied filters to the lists, these buttons will only include the filtered items.

In case that a fixture might not have a Fixture ID and CID anymore in the resulting patch, the fixture will be set to the new IDType PSR and get a consecutive CID.\
This can happen when different fixtures may be set to the same IDType/CID combination and one of them has no Fixture ID set.

It is not allowed to match an environmental fixture with a normal fixture. In this case the system monitor informs the user.\
The resulting patch will use the Universal fixture, Universal fixture type, and the DMX Universe settings of the local show file.

When done with matching the patch, tap Import in the tab bar or Proceed at the bottom in order to switch over to import objects of the PSR show file. Before the Import tab will be entered, a summary pop-up informs the user about how many fixtures are taken from the PSR show file and how many are taken from the local show file, how many are matched, replaced and deleted, and how many fixtures from the PSR show file are not taken over to the local show file. To return to the patch without applying the displayed changes, tap Cancel in the summary pop-up.

The PSR Import menu is divided into two areas:

- The left area displays a tree view of the show file to be PSR'ed with its different pools, and displays the objects the user selected last for the selected object type in the tree of the left area.\
  The title bar also displays the name of the show file.
- The right side displays the corresponding pool in the local show file. The title bar also displays  the name of the show file. 

Navigate in the object tree to the objects you want to import.\
To unfold a level in the tree, tap  ![](/img/grandma3/2-3/triangle-right-38abb5.png) .\
To mark an object for import, tap its checkbox.\
If you select objects to import them, they will be listed in the center area, and will get a yellow checkmark in the tree view.

To indicate that some child objects are selected for import, the parent object (for example the Filter pool when selecting a filter)  shows a gray checkmark.\
When selecting an object that has a reference, the reference will be marked for import as well. In this case, the referenced object will get a purple checkmark. For example, when selecting an appearance, the referenced image will get the purple checkmark.\
The number behind the checkmark box indicates the level of hierarchy the object is in. This happens due to the automatic import because of a reference.

The colors of the indicator bars indicate the following states:

- Green: Compared to the local show file, this element contains newer data in the show file that PSR will read.
- Orange: The children of this element are a mixture of older and newer data in the PSR show file.
- Red: Compared to the local show file, this element contains only older data in the PSR show file.

The center area allows to define at which spot in the pool the object will be imported. Therefore change the Import Index property to the desired value, or use the pool in the Local area. The orange collected frames in the pool view on the right side will inform the user where the object will be imported. Only the objects that are selected in the PSR area can be defined where to be imported when tapping into the pool at the Local area. The Import Index value can also be set to \<Auto>. In this case, the same object exists in both show files, for example when both show files have the same show file as origin. When the Import Index is set to \<Auto>, the object to be imported will be merged to the matching object in the local show file.

When the desired objects are selected, tap Import in order to transfer the objects into the local show file.\
After tapping Collapse All the tree will be collapsed. The whole tree will be expanded when tapping Expand Selected.\
The selected elements will be cleared when tapping Clear Selection.

Objects that were imported are marked as imported in the object tree. They can not be imported again.

To remove already imported items from the PSR tree, tap Cleanup. This helps to see what has not been imported yet.

Going back to the Show tab closes also the Partial Show Read process. Also doing structural changes in the current show file, for example, changing the patch will close the Partial Show Read process.

System locked objects, for example, filter 1 or world 1, are not offered to be imported during PSR.

|                                                    |                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitations:**                                                                                                                                                                                                                                                     |
|                                                    | - By entering the Import tab, the programmer gets cleared.
- References from fixtures to custom appearances in the PSR show cannot be preserved when importing the fixtures.
- A Partial Show Read is only possible if the console is in Standalone or Idle master state.  |

For more information about PSR see the [Partial Show Read (PSR)](/grandma3/2-3/sc_psr/) topic in the help manual.

---

 

### 3D

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The Render Qualities define how haze is displayed in the 3D Viewer window.\
To do so, edit a Render Quality pool object, tap Haze Settings and enable Enabled.\
These are the settings the user can alter in order to change the rendering of the haze:

- Particle Quality: How accurate the clouds of haze are rendered.
- Particle Size: How much haze will be in the air.
- Haze Scale: Changes the resolution of the used haze texture.
- Layers: How many layers of haze are used in depth. The higher the value, the more spatial the haze looks.​
- Blend: Defines the visibility of the haze in the beams.
- Animation Speed: The speed at which haze moves around. The movement of the haze is only visible when the 3D Viewer window has Priority mode enabled.

Three pre-defined Render Qualities with haze enabled were added to the Render Quality pool in new shows.\
They are also available for import into older show files.

The existing settings of Render Qualities are part of the new Main Settings tab in the Render Quality editor.

If the fixtures are positioned in a resulting volume that is too big, the 3D Viewer window displays a message in the top right corner. Haze will not be rendered in this case.

|                                                  |                                                                                                                                              |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                               |
|                                                  | The more realistic the haze setting, the more performance is needed. Use it wisely! We recommend using haze only on a separate onPC station. |

|                                                    |                                                                                                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                       |
|                                                    | As soon as 90% of the 10GB Show Data limit are reached, the Haze feature will be disabled automatically. The 3D Viewer window will display a corresponding text when this is the case. |

For more information about Render Qualities and Haze see the [Render Quality](/grandma3/2-3/patch_render_quality/) topic in the help manual.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

- The 3D Viewer window can now display 3 gobo wheels of a fixture at the same time.
- Beams are now cut off at the boundaries of the stage bounding box in the 3D Viewer window even if Shadow is disabled.
- Dilution set to **Linear** or **Correct** as well as Shadow enabled in the Render Quality settings now work even if Gobo is disabled.

---

 

### Geometry Viewer

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The Geometry Viewer offers a 3D view of the selected geometry tree inside the Geometry tab of the Fixture Type editor.

The selected part of the geometry is displayed with a yellow color inside the 3D area on the right.\
The following tools are available:

- ![](/img/grandma3/2-3/icon_camera-15_v0-1-b4c5a4.png)(Camera focus): When enabled, the camera moves so that the selected geometry is in the center of the 3D area.
- ![](/img/grandma3/2-3/icon_globe_15_v1-7-1c9686.png)(World model transformation): Defines if the axis will follow the world or the selected geometry.
- ![](/img/grandma3/2-3/icon_move-15_v0-1-79e509.png)(Translation mode): Lets you move around the selected geometry. To do so, tap and hold the arrow of the selected axis and move it around. When finished, release your finger.
- ![](/img/grandma3/2-3/icon_rotate-15_v0-1-0f42c6.png)(Rotation mode): Lets you rotate the selected geometry.
- ![](/img/grandma3/2-3/icon_resize_15_v1_5-7ef491.png)(Scale mode): Lets you scale the selected geometry. When you tap the block in the center of the axis indicators, all 3 axis are scaled together.

For more information about Geometry Viewer see the [Link Models to Geometries](/grandma3/2-3/ft_link_models_geometries/) topic in the help manual.

---

 

## []()Other Enhancements

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)Improved the  grandMA2 to grandMA3 Show Converter: To see the improvements, go to the [grandMA2 Release Notes document](https://help2.malighting.com/Page/grandMA2/releasenotes/en/3.9).

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Updated predefined content:

- Demoshow\_grandMA3.show
- Simple\_Show\.show​
- Predefined views in new shows

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved executor labels: When you use Encoder Left Command or Encoder Right Command on the 300 or 400 row, the executor label displays 2 icons on the left side  indicating the current function. Only icons for the predefined functions can be displayed.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Assign menu: When assigning a function to an Encoder, functions that have already been assigned to Encoder Left Command and Encoder Right Command will be cleared, and vice versa. They are mutually exclusive.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the command wing Bar window: The command wing Bar window offers the same settings for configuration of the encoder bar area as the Encoder Bar window. The settings to configure the encoder bar area are located in the Encoder Bar tab of the window settings pop-up.\
The Custom Master Section tab has the settings related to the master section, and the Playbacks tab has all settings for the playback bar area.

 ![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The possibility to transfer values of properties to other objects also supports the following selected objects:

- Camera, Encoder Bar, and Render Quality
- Filter, World
- DataPool, ExecutorConfiguration, Filter, Layout, Page, and World
- User
- Attribute and FeatureGroup

To label group 1 with the name of the selected attribute, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Label Group 1 At Attribute |

To set the user variable myEncoderBar to the name of the selected encoder bar, type:

|                                                                    |                                                                                 |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> SetUserVariable myEncoderBar At EncoderBar Property "Name" |

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the behavior when using the Help pop-up:

- Help Please: Opens the temporary Help pop-up and keyboard focus is set to the Search field + Lists all keywords in the command line history.
- Press and hold Help and then press Any key: The temporary Help pop-up opens with the corresponding topic of the key.
- Help Any key Please: The temporary Help pop-up opens with the corresponding keyword topic.
- To open the help article that was opened last time, press 2x Help or tap 2x ?.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Help Viewer:

- The Search input field can be used with the on-screen keyboard.
- When opening a search result, all results remain open on the left side to jump quickly to a another topic.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Knob UI Style in the user profile: The value None is now also available. When set to None, operating a knob in the UI does nothing.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Clone Menu: The Filter pop-up in the Clone menu lets you select a filter from the filter pool when you tap Filter Pool.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Info window:

- Renamed Window Mode (before Link Type). The Window Mode setting now works when the Info window displays a macro.

- New value **All Cues** of the Window Mode setting allows you to see the notes of all cues at a glance.\
  When a cue has an appearance assigned and Use Target Appearance is enabled and Notes Appearance is set to **Label + Note**, the title row of the cue will display the image of the appearance and the note area of the cue will display the background part of the appearance.\
  The current cue has a green border, same as in the Sequence Sheet.\
  When Auto Scroll is enabled, the list of notes scrolls automatically further when going through the sequence.

- New value **Sequence and Cues** of the Window Mode is similiar to All Cues, but it also displays the sequence and its note at the top if the list.

- Renamed Link Type (before Auto List Reference).

- The notes of cue parts are also displayed in the Info window.

- The Settings pop-up allows you to change all settings. They were previously only available in the title bar. It is also possible to configure which settings should appear in the title bar.

- New settings were added to the Info window:

  - Tabs: When disabled, the tab bar in the Info window is hidden.

  - Selected Tab: Defines which tab is the selected one in the tab bar.

  - Edit Note: When enabled, all cues will be displayed, no matter of the Show Empty status. Also a notes area for every cue will be displayed. Tapping into the note area of the cue sets the cursor into the area and lets you edit the note of the cue. This button is displayed in the title bar by default.

  - Show Empty: Defines whether cues without notes are displayed or not. This setting is enabled by default.

  - Notes Appearance: Defines which parts in the Note tab display the appearance:

    - **Off**: No appearance will displayed.
    - **Note**: The note area only displays the appearance.
    - **Label + Note**: The appearance will be displayed in the note area and the title row of the cue.

- The Info window lets you save and load window preferences.



![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the possibility to display the name of the media files in case the name is automatically hidden or the pool object has a custom name. To do so, press and hold MA. In this case, the Appearance pool, Gobo pool, Image pool, Mesh pool, Sound pool, and Symbol pool will display the file names of the used files.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved Import dialog for Media Pool objects: Removed the Name column of the Import pop-up. The FileName column is still present. The FileSize column displays now the file size of the image. Removed unnecessary columns.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved Lua:

- The Lua Core has been updated to Lua v5.4.6.

- The ObjectList() API function got some options:

  - selected\_as\_default: Whent set to true, the selected object of the defined object type will be returned. To get the selected encoder bar, use this:\
    ObjectList('EncoderBar',{selected\_as\_default=true})
  - reverse\_order: When set to true, the order of the list will be inverted.

- The GetObject() function has been added.  It returns the first object matching the syntax, or the selected object if no unique match.

- The MessageBox() function got the AutoCloseOnInput property. When it is set to true (default) the message box will close when pressing Please. If it is set to false, pressing Please will set the focus to the next text input when the focus is already in a text input. In this example the property is set to false:

  local function main()

  \-- create inputs:

  local states = {

  {name = "State A", state = true, group = 1},

  {name = "State B", state = false, group = 1},

  {name = "State C", state = true, group = 2},

  {name = "State D", state = false, group = 2}

  }

  local inputs = {

  {name = "Numbers Only", value = "1234", whiteFilter = "0123456789"},

  {name = "Text Only", value = "TextOnly", blackFilter = "0123456789"},

  {name = "Maximum 10 characters", value = "abcdef", maxTextLength = 10}

  }

  local selectors = {

  { name="Swipe Selector", selectedValue=2, values={\["Test"]=1,\["Test2"]=2}, type=0},

  { name="Radio Selector", selectedValue=2, values={\["Test"]=1,\["Test2"]=2}, type=1}

  }



  \-- open messagebox:

  local resultTable =

  MessageBox(

  {

  title = "Messagebox example",

  message = "This is a message",

  message\_align\_h = Enums.AlignmentH.Left,

  message\_align\_v = Enums.AlignmentV.Top,

  commands = {{value = 1, name = "Ok"}, {value = 0, name = "Cancel"}},

  states = states,

  inputs = inputs,

  selectors = selectors,

  backColor = "Global.Default",

  \-- timeout = 10000, --milliseconds

  \-- timeoutResultCancel = false,

  icon = "logo\_small",

  titleTextColor = "Global.AlertText",

  messageTextColor = "Global.Text",

  autoCloseOnInput = true

  }

  )



  \-- print results:

  Printf("Success = "..tostring(resultTable.success))

  Printf("Result = "..resultTable.result)

  for k,v in pairs(resultTable.inputs) do

  Printf("Input '%s' = '%s'",k,v)

  end

  for k,v in pairs(resultTable.states) do

  Printf("State '%s' = '%s'",k,tostring(v))

  end

  for k,v in pairs(resultTable.selectors) do

  Printf("Selector '%s' = '%d'",k,v)

  end

  end



  return main

- Labels linked to UI Objects, for example the labels of inputs, are highlighted with yellow text color as soon the input field has focus.

- Added the possibility for Lua to wait for a number of Lua cycles:\
  coroutine.yield({lua=x}), where x is the number of cycles to wait.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)Improved the display of file sizes: The file sizes of images, meshes and plugin components are displayed in the best matching unit. The unit is also displayed with the file size.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)Improved the Off Menu and the Running Playbacks window:

- When My Playbacks Only is enabled, Started by is disabled, and its value switches to the same user. Disabling My Playbacks Only resets Started by to its previous value.

- The number in the lower right corner of each tab indicates how many playbacks of its object type are currently running. As soon as My Playbacks Only is active, or Started by is set to something else than **\<All Users>**, or DataPool is set to something else than **All DataPools**, two numbers will be displayed: x / y.

  - x represents the number of running playbacks based on the made settings.
  - y represents the number of all running playbacks.

- It is possible to move the Off menu to a different screen using the Screen Selector ( ![](/img/grandma3/2-3/icon_display_15_v1-9-4096ad.png)).

- The Sheet Style displays additional information, for example:

  - Sequences: Cue Number, Cue Name, Trigger, and User
  - Macros: Trigger, Line Number, Line Name, and User
  - Timecodes: User and Cursor
  - Presets: Trigger, Feature Group, and User
  - Timers: Trigger, Elapsed Time, Remaining Time, Timer Mode, and User

- The Trigger column indicates which object started the playback, for example, by an executor, by a cue, from the pool itself, the command line, etc. As soon as the starting object, for example, the pool window from where the playback was started, does not exist anymore, the Trigger cell will be cleared.

- When Hold List is enabled, playbacks that are switched off after enabling this feature are grayed out. This prevents the Off Menu and the Running Playbacks window from changing the list of running playbacks too much, especially if a lot of sequences are flashing all the time.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the command editor (macros, cue commands, and many more): When Preview Variables is enabled, the preview of the command displays the content of the specified variable. This only works if the variable already exists at that time.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the behavior of the Time key: No matter what value Time Key Target in the user profile is set to, once At is part of the command line, pressing Time will cycle through the value layer keywords. For example pressing At 5 0 Time will result in the command At 50 Fade.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the playback output when updating or storing cues:

- When updating or storing untouched fixtures do not assert their playback state anymore.
- When updating individual fade or delay times in the current cue, the ouput is not asserted again.
- When updating cues that are currently running one or more phasers, the speed and transition of the running phasers stays untouched.



![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the workflow with GDTF:

- GDTF files with the file extension .GDTF can now be imported.

- Improved the compliance with GDTF v1.2 (DIN SPEC 15800:2022-02):

  - The following geometry types are visible in the user interface but their specific properties are not listed or editable in the user interface or the data structure:

    - Added these Geometry types:

      - Laser 
        - Protocol
      - Wiring Object
        - PinPatch
      - Inventory
      - Structure
      - Support
      - Magnet

  - The following properties are available in the user interface:

    - Added ColorSpace.
    - Added the Default Channel Function setting to the DMX Channels of fixture types.

  - The following properties are not visible and not editable within the user interface or the data structure:

    - Added EmitterSpectrum property for the Beam geometry type
    - Added Gamut
    - Added the Properties collect
    - Added Animation System properties to Wheel Slot.
    - Added DominantWaveLength and DiodePart properties to the Emitter
    - Added Color property to a Filter
    - Added Gamut, ColorSpaceData, OriginalAttribute and CustomName property to the Channel Function
    - Added Fixture Type Macros
    - Added UserID and ModifiedBy properties to the Revision

|                                            |                                                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                      |
|                                            | The added properties, collects, and geometry types are saved in the show file and exported when exporting a GDTF or grandMA3 fixture type. This also applies if the GDTF is created as part of an MVR export.  |

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Camera editor: The Roll property of cameras is now available in the editor. The properties have also been rearranged a bit and are better grouped.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Content Sheet: The recipes of the currently displayed cue will be displayed in the same recipe area as in the sequence sheet when Show Recipes in the Mask tab of the window settings is enabled.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Special Dialog Shaper:

- The Shaper Dialog now supports fixtures that have less than 4 blades.
- The Shaper Dialog now supports fixtures that only have blade insert attributes, but not blade rotate attributes.
- When a fixture has less then 4 blades, or does not have a full set of attributes to control a blade, the faders of the missing blades or functions will be grayed out.
- When there are three attributes per blade used in a fixture type, the Conflicts pop-up will inform the user about this misconfiguration.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the network interfaces: It is possible to renew the DHCP Lease of an interface by setting RenewDHCP in the My Interfaces menu to Yes.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Fixture Sheet:

- Dimmer+ and Sheet/Filter sheet modes: The separator lines between a fixture and its subfixtures are thinner and are dashed.
- The new Mask setting Hide Subfixtures does not display subfixtures in the fixture sheet when it is enabled.
- When enabling Fixture Sort in the Fixture Sheet Settings: When you select all fixtures and go through them by pressing Next, the selected fixture is always displayed in the center of the sheet.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved Handles: It is possible to address the children of an object for which the handle was used:\
\#\[Object].Children

To delete macro lines 1 to 5 of macro 42 by using the handle of macro 42, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Delete #\[Macro 42].1 Thru 5 |

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved cue commands in sequences: Commands can be disabled per cue part.

The existing column for Command Delay is grouped together with the new Enabled column in a grouping column called Command. The single Command column stays separated in order to be able to change its size independently.\
The Enabled column can be set to Yes or No, and defines if the command of the cue part will be executed or not. It is only possible to edit this cell if there is a command set up in the cue part.

In addition, the Cue Command (former Command Enable) property of Sequences was adjusted: It can be set to these values:

- Enabled: The commands are executed per cue part respecting the Enabled setting of the cue part. 
- Force No: No command of any cue part will be executed. The Enabled setting of each cue part is overruled by this value.
- Force Yes: The commands of all cue parts will be executed. the Enabled setting of each cue part is overruled by this value.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the display of setting that is overruled: For example, Cue Command and MIB Mode settings of cue parts can be overruled by settings of the sequence (Cue Command and MIB with their Force values).\
If the overruling is active, the cells in the Sequence sheet display the overruled value surrounded by exlamation marks.\
For example: !Yes!\
In addition, the column header displays the forced value.\
For example:\
Enabled\
Force No

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the display and resizing of single columns that are part of a grouped column in the Sequence Sheet (for example, the Trig group column):

- To indicate a clear separation of the single columns within the group column, a gray separator line is displayed in the header row.
- Tap and hold the new separator line to resize single columns within grouped columns.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Pool Columns setting of pool windows:

- Take Current Width in the calculator of Pool Columns applies the current set width of the pool window as value for Pool Column.
- Scrolling is only possible in vertical direction for pool windows with Pool Column set to a value that is less or equal to the maximum number of columns the pool window could display.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the View Bar:

By tapping ![](/img/grandma3/2-3/icon_triangle-down_15_v1-8-da38f5.png) at the bottom of the View Bar, it is possible to scroll the View Bar to the next set of View Buttons. When having a horizontal View Bar, tapping ![](/img/grandma3/2-3/triangle-right-38abb5.png) scrolls further to the next set of View Buttons.\
The size of scrolling depends on the number of View Buttons in the View Bar.

To enable this feature, go to Menu - Configure Display and enable ![](/img/grandma3/2-3/icon_triangle-down_15_v1-8-da38f5.png).

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the display of the DMX Footprint when importing fixture types: Fixture Types that have geometry references display now their correct DMX Footprint in the Import dialog.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the merging of fixture type geometries:\
By default, geometries that do not have attributes that are used further down in the geometry tree will be merged together.\
With the **Merge Geometries** option in the Geometries tab of the fixture type editor, you can define manually whether geometries will be merged.\
For example, when setting Merge Geometries to No the merging for all geometries of an Martin MAC Aura in Extended mode, the fixture sheet will have this tree structure in the fixture sheet:

- Base instance with no attributes

  - Yoke instance with pan attribute

    - Head instance with tilt attribute

      - Beam instance with dimmer, color, beam focus, and control attributes
      - Aura instance with dimmer, color, and shutter attributes

When keeping the geometries merged together (Merge Geometries set to Yes), the structure for the same mode looks like this:

- Main instance with position attributes

  - Beam instance with dimmer, color, beam focus, and control attributes
  - Aura instance with dimmer, color, and shutter attributes

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the fixture type editor when working with geometries:

- When setting DMX break offsets of multiple geometry references at once, the offsets are automatically calculated depending on the linked DMX mode with the largest offset.
- The pop-up when selecting a link to a geometry of a DMX channel now displays the geometries in a tree view.



![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the possibility to see a preview of the subfixtures and attributes of a fixture mode within the Fixture Type Editor:\
The new tab Subfixture Overview when editing the Mode of a Fixture Type (Menu - Patch - Fixture Types - Edit - DMXModes - Edit) displays the different subfixtures of the DMX Mode along with the attributes each instance is using. This gives a preview of the structure and the distribution of the attributes across the subfixtures without the need to apply all changes to the patch and see the result in the fixture sheet only.\
When a subfixture has more than 128 attributes, the overhead will not be displayed.\
Attributes that are displayed in orange indicate that the attribute has no channel function that uses a valid attribute. For example, dimmer is a valid attribute and Dummy is an invalid attribute. Such attributes are not displayed in the fixture sheet.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the possibility to set a Default value for each Channel Function of a DMX Channel and select a Channel Function for the Default value of a DMX Channel of a fixture type:\
When editing the DMX Mode of a fixture type the column Default Channel Function defines which channel function of the DMX Channel is used for the Default value of the DMX Channel.This allows, for example, to set the default of the Gobo1 DMX Channel to the Gobo Rotation channel function instead of the Gobo Indexing channel function.\
The Default value of the DMX Channel is set into angular brackets, for example <30>. This indicates, that the value is coming from the Channel Function that is set as Default Channel Function. Changing it at one place will change it at the other place, too.\
When a ChannelFunction does not have a Default value set, the DMX From value of the Channel Function will be used.

Furthermore, by expanding the DMX Channel in the Fixture Type Editor down to the Channel Functions, the user can set a Default Value per Channel function.\
In addition the attribute calculator (pressing an encoder or editing a cell in the fixture sheet or in sheet mode of the sequence sheet) offers ChannelFunction Default in the Specials tab to set the value of the attribute to default value of the selected channel function.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Select Mode pop-up in the Patch: It is now possible to search for modes.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)  Improved the display of presets: When creating a circular reference from one preset recipe to another preset recipe, an infinity symbol (![](/img/grandma3/2-3/icon_15_infinity_v2-1-986e15.png)) appears. Furthermore, the Info window will display such references/dependencies in red font color.

 

 ![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added an indicator for cooked values from recipes: In Track Sheet mode, the Sequence Sheet displays a green square in the top right corner of the value cell when the value is a cooked value from a recipe.\
Also the color for recipes (for example, the cooking pot icon when there is no error in the recipe) changed in general from orange to green.

 ![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added a recipe related setting to presets: If Recipe Template setting is enabled in a recipe preset, the recipe itself will be loaded into the programmer part and will be cooked there. Presets that have this setting enabled, are shown with a cooking pot icon with the lid open ((![](/img/grandma3/2-3/icon_cooking_template_15_v2-1-c2913a.png)).\
With this new setting and the already existing functionality, these workflows are possible:

-  Recipes and Receipe Template enabled: Recipe itself will be loaded as recipe into the programmer part.
-  Recipe with selection and Recipe Template disabled: Cooked data will be loaded into the programmer. Attributes reference to the recipe preset.
-  Recipes without selection and Recipe Template disabled: Cooked data will be loaded into the programmer. Attributes reference to the preset used in the recipe.

If Recipe Template is enabled, there is no need to cook a recipe preset itself. In this case, Cook will be grayed out.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the indication why recipes could not be cooked: When a group used in the recipe is empty, the selection of the recipe cannot use the preset, the MAtricks don't allow to cook data for the selection of the recipe, or when the selected filter of the recipe hinders from cooking, the corresponding cell gets marked with red text color.\
When the selection of a recipe could not be fully cooked, the font color will turn orange.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the CleanUp functionality for recipes. If the recipe is not cooked it gets deleted in the cleanup process.\
To clean up all recipes in all parts of all cues in sequence 1, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Sequence 1.\*.\*.\* |

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png)** ** Added Flip to the list of Codes for Quickeys.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the opportunity to cancel long running operations, for example when copying or storing a huge amount of data.\
To do so, press and hold for 5s:

- MA + ESC or
- Shift + Esc

During the 5s, a red progress bar will appear at the bottom of the screen and informs about the initiation of the cancellation. A following red progress bar may appear when it takes a few moments to stop the running operation and oops the already done changes. At this time the user can release the pressed hard keys.

Operations that cannot be cancelled display a lock symbol on the left side of the progress bar.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added the Network Time Protocol (NTP): The Network Time Protocol allows to set the Session Time to an external time source. To do so:

1. Go to Menu - Settings - Date and Time - Time Server.
2. Set Extern TimeSync Mode from **None** to **NTP**.
3. Enter the IP or URL of the NTP server you want to use at Server IP or Server Name.

Once TimeSync Mode is set to **NTP**, date and time in the Session Time tab cannot be changed manually anymore.\
The IdleMaster or GlobalMaster station distributes the time into the session, even if other stations in the session have a different NTP server set up.

The right area in the Time Server tab displays the System Monitor messages that are related to the NTP feature.

When a Server Name is entered, the URL is automatically resolved to the IP of the server, and the IP is displayed as well at Server IP.

The time a NTP server will deliver is always the UTC time. To match it to your local time, adjust the Time zone in the Session Time tab.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Playback window: The Playback window lets you save and load window preferences. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the display of the lock symbol (![](/img/grandma3/2-3/icon_padlock_15_v1-0-f67852.png)). Each type has a different color:

- Orange: Locked by user via the [Lock command](/grandma3/2-3/keyword_lock/).
- Gray: Position locked. These objects cannot be moved around. For example, Timecode Slots.
- Red: System locked. These objects cannot be modified by the user at all. For example, World1 or Encoder Bar 1.

In addition, the Lock column in sheets displays different kinds of locks using more intuitive abbreviations:

- UL: User Lock
- PL: Position Lock
- SL: System Lock

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the workflow when managing pages: Page 1 can now be deleted or moved to a different page. But as page 1 always has to exist, a new page 1 will be automatically created when moving or deleting page 1.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added Stomp, SelFix, and Assign to the list of keys where the user can do several successive operations while pressing and holding the key.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Add Window dialog: The All tab now also shows the window icons.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Command Section overlay: It is possible to change the dimmer value by scrolling with the mouse wheel while the mouse is above the dimmer wheel area.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the handling of the universal fixture type: It is not possible anymore to delete the Default DMX Mode.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the DMX Mode pop-up: Used modes of a fixture type are listed first, then all unused ones.

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Timecode Viewer: When the View Mode is set to Text, the Play and Rec columns now also stay visible.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the System Info window: All graphs that can be viewed display in addition also the current value.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the Session Data Merge: Added the possibility to keep the show file currently running on your station. To do so, tap Keep my Show File in the Session Data Merge pop-up.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved Layouts: Layout elements will not be displayed anymore, when the IDs of the assigned fixture get removed. The layout editor still displays these layout elements, but changes the font color of the whole row to red.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the workflow when using MVR-xchange: A message appears when commiting a file in MVR-xchange that was already commited before.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Added indirect color mixing to the color picker: The color picker supports indirect color mixing in a defined RGB Color Space. A color space must be defined in the fixture type for indirect color mixing. To define the color space, edit the fixture type and go to the PhysicalDescriptions tab. Here you will find the Color Space collect. Add a new ColorSpaceData.\
You can choose between the predefined color spaces "sRGB" (Adobe sRGB, HDTV IEC 61966-2-1:1999), "ProPhoto" (Kodak ProPhoto ROMM RGB ISO 22028-2:2013) and "ANSI" (ANSI E1.54-2021). Or define a custom color space via "Custom".\
The color space needs to be linked by the "ColorSpaceData" property of the channel functions of the ColorRGB\_R, ColorRGB\_G and ColorRGB\_B channels used to control the indirect color mixing.

---

 

## Changes

- New keywords:

  - [ChannelFunctionDefault](/grandma3/2-3/keyword_channelfunctiondefault/)
  - [GoboImage](/grandma3/2-3/keyword_goboimage/)
  - [PSR](/grandma3/2-3/keyword_psr/)

- New option keywords:
  - [/SubTab](/grandma3/2-3/ok_subtab/)

|                                                  |                                                                                                                                                                                                                                  |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                   |
|                                                  | The /SubTab option keyword is only used by the PSR menu so far. But as the user has to follow a certain workflow through the PSR menu, it is not possible for the user to change the sub tabs of the PSR menu by using commands. |

|                                            |                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                  |
|                                            | For more information about the new keywords, please read the corresponding sections above. |

- New color theme colors:

  - ColorDefinitions:

    - Global.ButtonAdditionalText
    - Global.Cooked

  - Colors:

    - BandFader.Background
    - BandFader.FaderLocked
    - BandFader.Knob
    - BandFader.StripActive
    - BandFader.StripInactive
    - BandFader.TextActive
    - BandFader.TextInactive
    - ColorPicker.HSBIcon
    - FixtureSheetCell.FullyCookedIndicator
    - PoolButton.PositionLocked 
    - PoolButton.SystemLocked
    - PoolButton.UserLocked
    - Progress.NotCancellable
    - Progress.CancelBarLeft
    - Progress.CancelBar Right
    - Progress.CancelText
    - PSR.DefaultText
    - PSR.DisabledText
    - PSR.MatchMixBK
    - PSR.MatchOlderBK
    - PSR.MatchSameBK
    - PSR.MatchYoungerBK
    - PSR.Selected
    - PSR.SelectedDependency
    - PSR.SelectedInTree
    - PSR.SelectedText
    - PSR.Separator
    - TrackSheet.HeaderHintColor
    - UIGrid.ActiveBackground
    - UIGrid.SubColumnIndicator
    - UITab.AdditionalInfoText
    - UITab.ArrowBackground

- Changed color theme colors:

  - PoolButton.Cooking references now from Global.Cooked
  - PoolButton.Global references now from Global.GlobalPreset
  - PoolButton.Matricks references now from Global.Cooked

- Removed color theme colors:

  - Colors:

    - EndlessFader.Background
    - EndlessFader.FaderLocked
    - EndlessFader.Knob
    - EndlessFader.StripActive
    - EndlessFader.StripInactive
    - EndlessFader.TextActive
    - EndlessFader.TextInactive
    - PoolButton.Locked

* New grandMA3 Lua Functions:

  - GetAttributeColumnId(light\_userdata:handle, light\_userdata:attribute): integer:column\_id 
  - GetObject(string:address): light\_userdata:handle 
  - SelectedDrive(nothing): light\_userdata:handle

- The ActiveOnly property of filters was removed.

- The file permission of the grandMA3 onPC app on macOS changed to 775.

- Renamed the Slow column in the My Interfaces menu to Speed Mb/s. Also the values 100 or 1000 are displayed instead of Yes or No.

- Changed the icon for the test functionality in the Command cell in the Sequence Sheet to ![](/img/grandma3/2-3/icon_15_cmd_test_v2_1-efc423.png).

- Renamed the SoundFiles tab in the Off menu and Running Playbacks window to Sounds.

- Renamed the sequence setting Command Enable to Cue Command.

- The Settings dropdown in the main menu does not offer the Touch Configuration anymore on onPC stations, as this is handled by the operating system.

- Info Window:

  - Renamed Window Mode (before Link Type)
  - Renamed Link Mode (before Auto List Reference)

- When the Multicast Input limit for sACN (20 inputs) is reached, instead a pop-up a text at the bottom of the sACN menu will inform the user.

- "Dive Into" for DMX Modes in the Fixture Type editor can no longer be toggled in the Live Patch.

- The general color of recipes changed from orange to green.

- The maximum number for Fixture ID and CID was limited to 1 000 000. Show files with higher IDs won't be adjusted. The fixtures still work as expected, but when changing the IDs, no IDs above the limit can be set anymore.

- The scroll wheel direction for the 3D viewer zoom was inverted.

---

 

## []()Bug Fixes

### 3D

| Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Assigning a fully transparent appearance to the bounding box of the stage did not hide the bounding box.                                                                                                                                     |
| The 3D Window Settings pop-up was too big for screens 6 and 7.                                                                                                                                                                               |
| For big stages, the intensity of the Point Light was too bright.                                                                                                                                                                             |
| With many fixtures in a show, it could happen that shadows were displayed in the wrong beam in the 3D Viewer window.                                                                                                                         |
| Under certain circumstances, not all beams and spots of multi pixel fixtures were displayed in the 3D Viewer window when Multi Led Beam Mode was set to **Single Beam Dynamic Gobo** or **Single Beam Dynamic Gobo** and Shadow was enabled. |
| Visual artifacts could occur in the 3D Viewer window when Shadow was enabled while the Light Scale or Render Scale setting was set to a very low value.                                                                                      |
| The state of the gear indicating the rendering of a frame while the 3D Viewer window is running below 2 fps could be wrong if Render Scale or Light Scale was set to a value below 100%.                                                     |
| Beams could be drawn several times in the 3D Viewer window if Shadow was enabled while the 3D Viewer window was iterating.                                                                                                                   |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The display of a handle was not restored correctly when oopsing the deletion of the referenced object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| The auto-generated names of individual fixture groups could contain an additional counter,  if the fixture names themselves were already numbered consecutively.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| The command Fixture Thru. was not working anymore.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| When setting a sequence in the Timer Link Type setting from the command line, the specified sequence was not always entered.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| When importing a sequence that references a speed master or rate master, the reference was lost when importing the sequence. This bug is now fixed. The reference in the imported sequence is adjusted to the speed master with the same number in the new show file.                                                                                                                                                                                                                                                                                                               |
| The color of the resulting string in the preview of the command editor was wrong when concatenating strings and variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Concatenation of numbers and variables in order to create cue numbers, for example Store cue 1.$number, created a cue part.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Macros that contained only Clone as command in a macro line did nothing when being executed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| The space bar of the internal keyboard did not work in the Lua editor if keyboard shortcuts were enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| When editing a macro line that contained a handle, the first characters of the handle declaration ( #\[ ) could be cut off.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| The software could crash when repeatedly selecting multi-instance fixtures that had an invalid subfixture index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| The software could crash when moving a cue part to a different cue part.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| A cue part could get lost when moving it to a different cue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Return, the arrow keys, and Backspace could get blocked when CapsLock was active for a longer time when using grandMA3 onPC running on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| It could happen that the folders of installed previous grandMA3 versions were not available on grandMA3 onPC running on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| When changing properties of objects, such as the Wait property of macro lines, where the value can be a number or a name, the new value was not set when using a name as property value.                                                                                                                                                                                                                                                                                                                                                                                            |
| The POV value for the Shaper unit was not applied to the fixture when using the calculator of the POV fader in the Shaper Dialog.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The notes of presets got lost when updating presets that contained notes and MAtricks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| When using handles of sequences in commands for playing back sequences, additional specified timings were not used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Adressing cues by using handles was only possible, if the cue was adressed first and then the sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| A string followed by a handle was breaking the automatically added space in macros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| When a desk was locked, the faders could still be moved and influenced the playback. This bug is now fixed. Faders can still be moved during desk lock, but they don't change the playback anymore. When leaving the desk lock, the faders will return to their correct levels.                                                                                                                                                                                                                                                                                                     |
| Commands that used a handle to an encoder bar were not working after loading the show file again, as the handle to the encoder bar got corrupted.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The calculators for color faders, for example, in the Appearance editor did not apply the entered values correctly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| The software could crash when oopsing the deletion of a sequence while a filter was active.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Changes in cue recipes were not always taken into account when the value of the recipe was preset recipe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| The display of the charge level of the UPS on grandMA3 full-size and light consoles was inaccurate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| When cloning data only in one preset by using the Clone Menu, the resulting operation cloned data only in the programmer.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| When storing active values into a preset that were coming from a recipe, a reference to the recipe was stored as well, although storing embedded was disabled.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Using the Clone Menu for cloning from or to fixtures by adressing them via their CID did not work.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The software looked like freezed when doing large AutoStore operations. This bug is now fixed. A progress bar appears now in case of larger AutoStore operations.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Stations left the session when moving a recipe from one part to a another part of the same cue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| The option keyword /NoConfirmation did not work when using it in a Cook command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| When copying cues the cooking state of values was also copied to the destination, although the recipe itself was not copied. This lead to the problem when cooking later a different recipe in the destination cue, the other values were cleared as there was no corresponding recipe in the cue anymore.                                                                                                                                                                                                                                                                          |
| When editing a cooked value in the tracking sheet, the cooking state of the vaue was not removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Storing data directly into a recipe set the wrong preset mode for the recipe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| When editing commands, for example in macros, were misinterpreted when a string inside the command contained a pound sign (#).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| When taking screenshots for the appearance of views, the entire screen was used, not just the user-defined area, if the display scale was not set to 1.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Recipes could not be cooked when the used selection did not start at grid coordinate 0/0/0 and MAtricks in use had a value set for X, Y, or Z.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| When knocking out the relative layer on a connected station while the absolute layer still had active values, the output did not update correctly.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Oopsing the removal of fixtures in a group did not auto cook the corresponding recipes. This bug is fixed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Recipe settings like FadeFrom or FadeTo could be applied to previous recipes in the same cue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| When inviting processing units again into session all stations of the session could briefly output the playback state of the invited processing units.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Filters did not work as expected when the Phaser layers were excluded in the filter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| When assigning appearance to a range of cues, cues with dotted cue numbers were ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| The software could crash when toggling the control bar off and on using the screen encoder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| When enabling highlight while being in session with processing units, the fixtures that were highlighted last could flash up briefly with their highlight values.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The software could crash when cutting timecode events in the the Timecode Editor while the Selection Mode was set to TimeRanges.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| When deleting an embedded preset the presets that were embedded did not update their reference indicator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Normal timecode events could be mistakenly treated as automatically recorded events which did not play them back when Playback and Record was set to **Manual Events**.                                                                                                                                                                                                                                                                                                                                                                                                             |
| When creating and labeling cues within the same operation, the consecutive numbering of the cue labels did not work as expected.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Editing the value of an attribute using fixture sheet did not apply the new value when doing it the first time after enabling All Channel Sets.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Changing the Store Settings of the user profile using the command line applied the new settings after the next store operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| When changing the size of an executor the assigned handles that were not from the executor configuration in use were overwritten by the handles of the executor configuration,                                                                                                                                                                                                                                                                                                                                                                                                      |
| When targeting an non-existing attribute in a command, the command was instead executed for the selected attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| The software could crash when disabling Preserve Grid Position in the Selection Grid window while fixtures were selected that did not had a grid X value set up in the fixture type.                                                                                                                                                                                                                                                                                                                                                                                                |
| The Encoder Bar broke if a value was applied via a command to an attribute that did not exist in the selected Encoder Bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| The At Filter did not change the displayed attributes according to the selected world.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Typing a $ into a macro command could cause the command to break.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| During show migration, empty column sets were reset to visible in the sequence sheet with track sheet mode enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Encoders in physical read-out could be stuck on a specific value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| If the destination of the command line was changed, the Go+ \[large], Go- \[large], and Pause \[large] keys did not work.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| When changing wing IDs via command, the console could crash.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| It was possible to move a Timecode event beyond the beginning of the time range.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Objects the user locked in grandMA3 v1.9 could not be unlocked in grandMA3 v2.0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| The DMX Priority Input Merge did not work correctly for XYZ attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Recipes that had empty groups assigned were not automatically cooked when the group was filled with fixtures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The software could crash when letting the fader move automatically  for a long time and in parallel change the appearances of the assigned sequences all the time.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Knob UI Style set to None, allowed using the Rotate gesture to change values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| When starting the grandMA3 software, an additional output configuration could be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Preserve Grid Position in the Selection Grid window did not work when having Preview enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The Layout editor did not allow to set the Action of layout elements that had a World assigned to 'Select'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| The values of shaper attributes could jump around when having Link in the Shaper Dialog set to the value All.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The software could crash when trying to move or copy fixtures from one stage into a space.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Executing the command Lua "GetTokenNameByIndex(550)" crashed the software.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| The secondary handles (press and hold MA) on an encoder executor were not mutually exclusive between Encoder and Encoder Left/Right Command.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Macro lines that used handles were not executed correctly when the macro line had Execute set to No.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Exported user profiles contained invalid entries for non existing attributes. This increased the size of the user profile file.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Imported MAtricks from v1.9.7.0 or prior did not set the same values as they did in the past.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Commands could stay in the command line when they were coming from Quickeys that were triggered by macros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| When deleting a cue  with recipes and deciding that the data should be moved to 0, the recipes were not moved to part 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Moving cues to different sequences let a timecode event point to the cue in the new sequence, although the timecode track was pointing to the old sequence. This bug is now fixed. When moving a cue to a different sequence the corresponding timecode event get invalid: The Cue Destination and Token will be removed from the event. The cells in the text view will display a red background. Th events in the timeline view will display a **?**. Show files with timecode shows that have such a setup will be cleaned up when loading them the first time in v2.1 or later. |
| When a Quickey was executed by a macro the Code of the Quickey stayed in the command line and was executed until pressing Esc.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| It was not possible to unlock several locked objects at the same time using the user interface. For example, multiple cues in the Sequence sheet.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The predefined macros for circular copy were outdated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| In some cases when a timecode show was recorded and Playback and Record setting was set to **All Events** and changed to **Manual Events** afterwards, the events were not editable.                                                                                                                                                                                                                                                                                                                                                                                                |
| When executing Cook /Overwrite for objects that contained empty recipes, all values were removed from the cue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| When importing a preset that was previously exported, the values in the imported preset sometimes where changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| A cue did not store a phaser when the phaser was running in programmer part 2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| When patching or unpatching fixtures in the Live Patch, the DMX Sheet did not update correctly when DMX Channels in the Tester Encoder Bar was set to **Patched** or **Unpatched**.                                                                                                                                                                                                                                                                                                                                                                                                 |
| If you had several programmer parts and executed  Store Cue x Part y, only the data of programmer part y was stored. This bug is now fixed. Store Cue x Part y stores the content of all programmer parts into part y.                                                                                                                                                                                                                                                                                                                                                              |
| It was not possible to store a new sequence onto an executor when a cue was edited at the same time by a different user.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| When using From/To for Fade, Delay, Phase or Speed within the MAtricks in order to generate the values, the Rx, Ry, or Rz of the MAtricks was always treated as disabled.                                                                                                                                                                                                                                                                                                                                                                                                           |
| It was not possible to export or import Quickeys.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| It was not possible to record the levels of group masters or masters into timecode shows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| When oopsing the change of the Tester Output in the Tester Encoder Bar while having several channels selected, pressing Oops 1x oopsed it only for the last selected channel.                                                                                                                                                                                                                                                                                                                                                                                                       |
| When using AutoStore to store presets into a fixture type and using the Sheet Style in the Advanced Mode of the Show Creator, most times all presets were stored instead of the selected ones.                                                                                                                                                                                                                                                                                                                                                                                      |
| When pressing Time and toggling through the layer keywords, the last character of the command in the command line was removed with every cycle.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| It was not possible to oops the adjustments of faders in the Bitmap Editor or the Generator Editor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| When the Selection Mode of the Layout Viewer window was set to 2D Grid and the user executed Ctrl + A, the fixtures of assigned presets and sequences in the layout were selected, too.                                                                                                                                                                                                                                                                                                                                                                                             |
| The TimeOffset for onPC stations was also processed by consoles when loading a show file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| It was not possible to apply division or multiplication directly to timing inputs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CuePart numbers of Preset Pools were not respected when storing presets to a cue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| When opening the Off Menu by pressing Off twice, one Off still remained in the command line. This bug has been fixed. Now the command line gets cleared after pressing Off twice.                                                                                                                                                                                                                                                                                                                                                                                                   |

### Connections

| Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- |
| When using MIDI Control Changes to flash, black, or temp a sequence, the playback did not stop when releasing.    |
| When receiving sACN multicast packets again on the same station, not all packets were recognized.                 |
| OSC send feedback of the previous cue when going into the next cue.                                               |
| Faders that were controlled by a Remote would not work properly if the input range did not cover the whole range. |

|   |
| - |

### Patch

| Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The applied Offset values for Pan or Tilt were sometimes off by 1.                                                                                                          |
| The software sometimes crashed when patching a fixture type that had a relation to a different geometry than the follower of the relation.                                  |
| When exporting a fixture type using the Patch menu, the GDTF tab was also selectable when exporting a fixture type of source grandMA2.                                      |
| When entering a LongName for a new fixture type, the LongName was lost when leaving and re-entering the patch.                                                              |
| The software could crash when toggling **Dive Into** for the DMX Mode in the Live Patch.                                                                                    |
| If an appearance was assigned to a DMX universe, the DMX Universe List displayed neither the universe name in the name cell nor the appearance name in the appearance cell. |
| When copying fixtures in the patch, the following clone process did not clone layout elements.                                                                              |
| The software could crash when using XYZ and when the user deleted all DMX Modes of the universal fixture type.                                                              |
| Geometry references that referenced another geometry reference did not have a model linked.                                                                                 |
| The geometries of fixture types were internally created several times which increased the show file size.                                                                   |
| The software crashed when building an endless loop of two geometry references referencing each other.                                                                       |

### Phaser

| Description                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When multiple steps were selected and then the values were stolen from the programmer, the step selector in the encoder bar told the user that they are in step 1. This bug is now fixed. In this case, the step selector now correctly displays that all steps are still selected. |
| When building a color phaser, the fixture sheet in **Dimmer+** or **Sheet/Filter** was only displaying the color of the current step in the graphic.                                                                                                                      |
| Changed values of phaser layers in a preset could get lost if  the MAtricks of the preset were changed afterwards.                                                                                                                                                                  |
| The dimmer attribute was knocked in into step 1 when tapping Select All Steps in the encoder bar or in the Phaser Editor.                                                                                                                                                           |
| When tapping T\|T (Mirror Time) in the Phaser Editor while having only an absolute value step 1 and having multi-step values on other value layers, the absolute value was moved to step 2.                                                                                         |
| The software could crash when creating the third step of a phaser using this type of command: Step 3 Preset 1.3.                                                                                                                                                                    |
| In a multi user session Stomp affected multiple users.                                                                                                                                                                                                                              |
| It was sometimes not possible to Oops Stomp in a session.                                                                                                                                                                                                                           |

### Playback

| Description                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When updating a preset it could happen that a running cue could also be updated with the new preset, but the Update Menu would close and not offer to update the cue when it was opened again.                                                                                                                                          |
| When having keyboard shortcuts enabled, Shift + scrolling the mouse wheel did not execute the MAEncoderLeft and MAEncoderRight functions of a encoder knob.                                                                                                                                                                             |
| When changing the Tracking Distance setting of a cue, the output of the current cue did not change if it was affected by the changed tracking distance.                                                                                                                                                                                 |
| When attributes were released by the end of a tracking distance, the attributes snapped to their new values instead of using the respective fade time of the cue.                                                                                                                                                                       |
| Sequences that contained a relative phaser where in step a 0 was stored were immediately switched off when Off When Overriden was enabled.                                                                                                                                                                                              |
| Sequences were not always switched off when trying to switch them off using the Off command while the sequence was going through automatically triggered cues, for example, follow cues.                                                                                                                                                |
| When starting a preset playback using the Flash function, the playback stayed on upon the release of Flash.                                                                                                                                                                                                                             |
| Recipes in the programmer with MAtricks that use the Transform setting were not correctly played back as soon as a second recipe used the same selection.                                                                                                                                                                               |
| The image color of a Generator was not reset when the playback stopped.                                                                                                                                                                                                                                                                 |
| Generator values could remain in a cue after the corresponding Generator was deleted, and newly created Generators could be automatically linked to that cue.                                                                                                                                                                           |
| If you had a Sequence with absolute and relative dimmer values and turned off Soft LTP for the sequence, the dimmer did not behave correctly when playing back the sequence.                                                                                                                                                            |
| It was possible that after loading a show file MIB pre-positioned attributes already while the dimmer was not closed, yet.                                                                                                                                                                                                              |
| Cues with absolute values in the cue and relative values from a recipe in the cue could have not the mixed output of both layers.                                                                                                                                                                                                       |
| Recipes that used Generators as Value and used filters did not filter correctly.                                                                                                                                                                                                                                                        |
| The console could crash when replacing a video that was played back by a Bitmap.                                                                                                                                                                                                                                                        |
| The software crashed when a cue was played back that contained recipes with PanTilt presets and XYT presets for the same selection. This bug is fixed now. In these cases, the data of the last recipe will be used now. When loading show files from v2.0 or prior into v2.1 or later, all recipes will be automatically cooked again. |
| MIB could pre-position attributes in cues already when in a later cue part MIB was set to Early. although the dimmer was not-closed between both cues.                                                                                                                                                                                  |
| Timecode shows that include sequences were not triggered properly when using **Auto Start** or **Auto Stop**.                                                                                                                                                                                                                           |

### Windows

| Description                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| It was not possible to select multiple fixture types in the Advanced mode of the Show Creator.                                                                                                                                                                                             |
| When editing a note while keyboard shortcuts were active, pressing Space did not add a space.                                                                                                                                                                                              |
| When moving a layout element using the encoders, the yellow selection frame in the layout did not move immediately with the element.                                                                                                                                                       |
| When using the web remote with a user profile other than the default user profile, the Shaper Dialog always displayed the information of the default user profile.                                                                                                                         |
| The Clone menu generated wrong syntax when the user wanted to clone from or to subfixtures.                                                                                                                                                                                                |
| The Clone menu did not update the selected objects when new objects were added while the Clone menu was open. This bug is now fixed. When creating a new object, such as a sequence, while the Clone menu is open, the sequence button will change from All Sequences to Chosen Sequences. |
| When closing and reopening a full-screen display on a second screen in Microsoft Windows, the position of the mouse cursor was not displayed correctly.                                                                                                                                    |
| The content of the encoder bar area on grandMA3 compact and compact XT consoles could be mixed up when the user had a Timecode Viewer window in Setup mode, pressed U1 or U2 twice and then set focus back to the Timecode Viewer window.                                                  |
| The software could crash when using a color theme that did not contain all color definitions of v2.0 and then opening an Encoder Bar window that should display the endless faders.                                                                                                        |
| The faders of the Shaper Dialog did not work when calling a view that had the View Mode of the Shaper Dialog set to **Faders**.                                                                                                                                                            |
| The software could crash when using the POV fader of the Shaper Dialog with fixtures that had a blade rotation attribute assigned instead of the shaper rotation attribute.                                                                                                                |
| The Patch Offset buttons in the Insert new Fixtures dialog and the Edit Patch dialog had different styles.                                                                                                                                                                                 |
| The software crashed when the Clone menu was open and the user executed the command.                                                                                                                                                                                                       |
| The height of the buttons did not change immediately when tapping Line Height in the Filter overlay of the Clone menu.                                                                                                                                                                     |
| The Fixture Sheet did not display values for color attributes of multi-instance fixtures when the Sheet Mode was set to **Dimmer+** or **Sheet/Filter**.                                                                                                                                   |
| The Off Menu and the Running Playbacks window had unused space at their bottoms.                                                                                                                                                                                                           |
| When making changes in the Shaper Dialog and calling the same view again, the changes were not overwritten by the settings of the view.                                                                                                                                                    |
| The sheet modes Dimmer+ and Sheet/Filter of the fixture sheet displayed dimmer values always as snapping in the feature graphics area.                                                                                                                                                     |
| It was not possible to change the encoder resolution for an encoder which had only an attribute assigned to the outer encoder.                                                                                                                                                             |
| The dimmer bar in the fixture sheet could display a wrong value of the dimmer, when the master fader of the playback was not at 100 %.                                                                                                                                                     |
| The numbers in the Clock Viewer window could have different styles for the same window size but different position on the screen.                                                                                                                                                          |
| It was not possible to scroll in the Content Sheet when using the 2 finger scroll gesture.                                                                                                                                                                                                 |
| The Fixture Sheet set to Sheet Mode **Dimmer+** or **Sheet/Filter** did not release the blue background when a cue fade had finished.                                                                                                                                                      |
| The Fixture Sheet set to Sheet Mode **Dimmer+** or **Sheet/Filter** displayed always all attributes, also when they were not available in the current world.                                                                                                                     |
| The Content Sheet set to Sheet Mode **Channel** did not always display all Fixture IDs or CIDs.                                                                                                                                                                                            |
| When the Off menu was open or a Running Playbacks window was visible, the Oops History got unnecessary entries added as soon as a playback was started or switched off.                                                                                                                    |
| The fixture and feature graphics in the Fixture Sheet could be scaled wrong when using Sheet Modes **Dimmer+** or **Sheet/Filter**.                                                                                                                                                        |
| The Step Selector in the Phaser Editor or the Encoder Bar always displayed step 1 after calling phaser preset instead of 1/n. This bug is now fixed. When callign a 2 step phaser preset the Step Selector displays 1/2.                                                                   |
| The encoder bar showed graphical glitches in the web remote  during connection to a grandMA3 compact console.                                                                                                                                                                              |
| The Settings button in the title bar was not displayed in the Sequence Editor when it was displayed on screen 7.                                                                                                                                                                           |
| When scrolling horizontally in Content Sheet that was set to Cue Mode Manual the divider between the cue area and the data area could also be moved.                                                                                                                                       |
| When running grandMA 3 onPC on macOS it was not possible to hide the title bar, if the software was not in fullscreen mode.                                                                                                                                                                |
| Horizontal scrolling in the System Monitor was not possible if the front size was set to 28 or higher.                                                                                                                                                                                     |
| When creating a new filter no attributes were selected, and the select all button was not reacting at the first tap.                                                                                                                                                                       |
| The Sequence Sheet was sometimes executing Auto Scroll, even if the setting was disabled.                                                                                                                                                                                                  |
| The order of buttons in the control bar on the web remote was not identical to the control bar on the station itself.                                                                                                                                                                      |
| When the Fixture Sheet had Feature Sort enabled, the selected feature group was not always moved to the left side when changing the feature group directly after selecting some fixtures.                                                                                                  |
| The Edit Sound popup was missing buttons for Notes and Installed.                                                                                                                                                                                                                          |
| The columns editor did not display the different column sets when you tapped through them.                                                                                                                                                                                                 |
| In some cases in the calculator the mouse wheel could not be used to scroll the list of channel sets.                                                                                                                                                                                      |
| The fixture sheet did not indicate a position change with a blue marker when Wrap Around was enabled and the first cue was triggered by pressing Go +.                                                                                                                                     |
| When changing the colors by hovering over a fader and scrolling in the fader mode of the color picker, the other faders within the same grouping would jump to different positions.                                                                                                        |
| Pools did not display existing objects when Show Empty was disabled and the fixture selection could not use the object.                                                                                                                                                                    |
| It was not possible to see which fixtures where selected in the Patch window, when they were the selected at the cells that displayed the existing appearance of the fixture.                                                                                                              |
| The 1D graphs in the Phaser Editor could display the curve incorrectly.                                                                                                                                                                                                                    |
| When assigning a filter to the content sheet it sometimes was not applied immediately.                                                                                                                                                                                                     |
| The Calibrate Position menu of the 3D Viewer window could not be closed by pressing Esc.                                                                                                                                                                                                   |
| In the Running Playbacks window the focus sometimes jumped away from the window to the command line when switching tabs.                                                                                                                                                                   |
| In a session the connected station always displayed the group master marker in the fixture sheet when it was active previously.                                                                                                                                                            |
| Assignment editor pop-ups sometimes displayed a New Object line, for example when tapping Input Filter in the Preset Pool Window settings pop-up.                                                                                                                                          |
| When opening dropdowns, the focus could be set to an entry that was not the entry of the current value.                                                                                                                                                                                    |
| When storing a view on a web remote device, the screenshot of the display on the host device was taken.                                                                                                                                                                                    |

### Additional Bug Fixes

| Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In new shows the User Attribute Preferences were not initialized properly.                                                                                                                                                        |
| If you had a fixture selected and executed Unblock Cue Thru, in some cases the output of the fixture would be turned off.                                                                                                         |
| Updating a preset or cue could change their output.                                                                                                                                                                               |
| If Oops was applied after updating a cue, the restored values in the DMX Output and Fixture Sheet were wrong.                                                                                                                     |
| The software crashes when loading showfiles from version 1.5 or prior that contained plugins.                                                                                                                                     |
| The Thickness option in Scribbles did not work.                                                                                                                                                                                   |
| Setting a time, such as a cue fade, where the value came from a variable did not work.                                                                                                                                            |
| When importing fixtures using PSR, the positions of subfixture layout elements could change.Also, dimmer values in cues and presets could change to 0.This happened if a multi-instance fixture type had CanHaveChildren enabled. |
| In the speed calculator of the generators, the BPM only accepted values between 0 and 1. All results resulted in a Stop.                                                                                                          |
| Updating a preset could switch off other fixtures that were generating phaser output in the same cue where the updated preset is also used.                                                                                       |
| When loading a show in the PSR menu, mirrored sequences in the local show file broke.                                                                                                                                             |
| The fixture sheet could display wrong DMX values after leaving Preview mode.                                                                                                                                                      |
| When playing back a cue using X-Assert, the timing of other cue parts than cue part 0 used always the timing of cue part 0                                                                                                        |
| Updating a preset could remove the preset references of other presets on the relative layer in later cues.                                                                                                                        |
| In rare cases it could happen that a playback would get stuck and ignore commands such as Off, On, Go, or when toggling Off when Overridden.                                                                                      |
| The software could crash when streaming data in the network.                                                                                                                                                                      |



---

 

## []()Appendix

- It is recommended to use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols it is recommended to use a dedicated physical network for each protocol.
- The recommended workflow for executor configurations that are different compared with the default executor configuration is to create a new executor configuration, do the changes in the new configuration and save the changes.
- XML files with exported executor configurations from grandMA3 v1.2 and prior cannot be properly imported to grandMA3 v1.3 or later due to structural changes.
- XML files with exported analog remote setups from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.
- XML files with exported timecode shows from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.

---

 

## []()Known Limitations

|                                           |                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Software update via network to onPC stations requires confirmation during the install process at the destination system.  |

|                                           |                                                                                                                                                                                                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over automatically. If all stations have the same priority, the station with the longest Online Time becomes the GlobalMaster for all stations.  |

|                                           |                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Recast will only recast presets to cues if there is a preset link in the absolute layer.   |

|                                           |                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | Loading show files that were saved in previous versions deletes the programmer content. |

|                                           |                                                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | When using Partial Show Read, the models of fixture types that have no DMX channels (environmental fixture types) are not imported correctly. |

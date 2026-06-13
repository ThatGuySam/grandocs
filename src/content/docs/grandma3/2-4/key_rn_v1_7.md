---
title: "Release Notes 1.7"
description: "Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail w"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_rn_v1_7.html"
scrapedAt: "2026-06-12T21:25:49.413Z"
---
- [Get Started](/grandma3/2-4/key_rn_v1_7/#h2__1435677565)  

- [Bugfix Version 1.7.2.2](/grandma3/2-4/key_rn_v1_7/#h2__2030687499)​
  - [Fixed Bugs](/grandma3/2-4/key_rn_v1_7/#h2__1624482491)

- [grandMA3 Version 1.7.2.0](/grandma3/2-4/key_rn_v1_7/#h2_727740091)

- [Features](/grandma3/2-4/key_rn_v1_7/#h2_727740091)

  - [Presets](/grandma3/2-4/key_rn_v1_7/#h3_956339510)

    - [Executor Assignment and Playback of Presets](/grandma3/2-4/key_rn_v1_7/#h3_1832424387)
    - [Recipes](/grandma3/2-4/key_rn_v1_7/#h3__808614509)

  - [Sequences](/grandma3/2-4/key_rn_v1_7/#h3__1026008)

  - [Preview](/grandma3/2-4/key_rn_v1_7/#h3__2122125854)

  - [Phaser and Phaser Editor](/grandma3/2-4/key_rn_v1_7/#h3__946139376)

  - [Spaces](/grandma3/2-4/key_rn_v1_7/#h3_2096095723)

  - [MArker Fixture and XYZ](/grandma3/2-4/key_rn_v1_7/#h3_231964299)

  - [3D](/grandma3/2-4/key_rn_v1_7/#h3__1137860005)

    - [Render Quality](/grandma3/2-4/key_rn_v1_7/#h3__1135228353)
    - [glTF Support](/grandma3/2-4/key_rn_v1_7/#h3_1462499028)

  - [Session Data Merge](/grandma3/2-4/key_rn_v1_7/#h3_1469462798)

  - [MIDI Out](/grandma3/2-4/key_rn_v1_7/#h3__1503058193)

  - [Content Sheet](/grandma3/2-4/key_rn_v1_7/#h3_320348620)

  - [DMX Tester](/grandma3/2-4/key_rn_v1_7/#h3_1956195346)

  - [Backup Menu](/grandma3/2-4/key_rn_v1_7/#h3_1498318733)

- [Other Enhancements](/grandma3/2-4/key_rn_v1_7/#h2_1198082799)

- [What's Changed](/grandma3/2-4/key_rn_v1_7/#h2_563643534)

- [Fixed Bugs](/grandma3/2-4/key_rn_v1_7/#h2_895816868)

- [Appendix](/grandma3/2-4/key_rn_v1_7/#h2__1835053169)

- [Known Limitations](/grandma3/2-4/key_rn_v1_7/#h2__1852571500)

---

 

## []()Get Started 

Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning within the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let´s go! Once you leave the Release Notes by tapping I agree on the top right corner, you get presented with the main screen of grandMA3 software. On the right side, you can see predefined views. By tapping the view buttons you can switch between them. 

If this is your first time starting grandMA3 software you need to patch some fixtures first to get started. Or you can load one of the demo shows delivered with the software. In both cases, you need to press Menu key. If you are using grandMA3 onPC software there is a ![gear](/img/grandma3/2-4/gear_1-0b513c.png) symbol in the top left corner. Clicking the symbol is the same as pressing the Menu on a console.

Hit Backup and then Load, now you are ready to load shows. As you want to get started quickly you should change in the header bar from Shows to Demo Shows by tapping the button repeatedly. Once it says Demo Shows you can choose any of them by selecting it and then tapping Load. Just in case there was a show loaded already the software will ask you if want to save the current show first before loading the new one... your choice ;-)

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - on the right side are the view buttons to change screen content. At the bottom, you find the encoder bar and the command line. Technically that is all you need to get started. For more detailed information, refer to the grandMA3 help menu which you can reach by one of the view buttons named Help or via the MA Lighting website. If you want to learn grandMA3 software step by step please join the MA e-Learning - it's free of charge and available via the MA Lighting website.

Have fun with the grandMA3 software - next, you will find all the improvements and changes of this software version.

**Hint:**\
The grandMA3 software will start with the show file (or status) that was active when the software was closed. 

---

 

## []()Bugfix Version 1.7.2.2

## []()Fixed Bugs

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The software crashed during loading show file from v1.6 or earlier that had recipes in presets which in turn had no selection assigned. This bug is fixed. Recipes without a selection do not crash the software anymore during the migration of the show file.                                                                                                  |
| The software crashed when recipes were repeatedly stored into the programmer by pressing Store and then tapping New Recipe in the Programmer Part window. This bug is fixed. Repeatedly storing recipes in the Programmer Part window does not crash the software anymore.                                                                                       |
| Executing Fixture At Fixture on a connected console with a different user profile did not output the new programmer content. This bug is fixed. Fixture At Fixture works again in multi-user environments.                                                                                                                                                       |
| When attributes were stomped in a multi-user environment and processing units were connected, the stomped values could have become part of the programmer of a different user profile instead of the one that executed stomp. This bug is fixed. Stomping in multi-user environments puts the stomped values into the programmer of the user who executed stomp. |
| Copying symbol pool object to the image pool crashed the software. This bug is fixed. Copying objects from one pool to a different pool does not crash anymore.                                                                                                                                                                                                  |
| Importing a Lua plugin crashed the software when General Undo was disabled in the settings of the user profile. This bug is fixed. Disabled General Undo does not crash the software when importing data.                                                                                                                                                        |
| Addressing objects via their IDs in an OSC message did not trigger the object anymore. This bug is fixed. Triggering objects via their IDs in an OSC message works.                                                                                                                                                                                              |
| When switching off the network Art-Net or sACN were still being output. This bug is fixed. Disabling the network stops now also the output of DMX protocols.                                                                                                                                                                                                     |
| When you brought back a station into session where the session and the joining IdleMaster were both sending Art-Net or sACN, GlobalMaster and the connected station at times could output Art-Net or sACN. This bug is fixed. In sessions with two or more consoles only the GlobalMaster station outputs Art-Net or sACN.                                       |
| The keywords IfActive or IfProg selected fixtures with activated or deactivated values in the programmer of different user profiles. This bug is fixed. IfActive and IfProg only select fixtures that have actived or deactivated values in their own programmer.                                                                                                |

 

### Connections

| Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| After booting a grandMA3 console the sound input was not always recognized. This bug is fixed. The sound input via XLR now works directly after booting the console. |

 

### Patch

| Description                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adding new fixtures in the patch at the top of a grouping fixture caused layout elements to display the new fixtures instead of the fixtures of the same grouping fixture that were formerly assigned. This bug is fixed. The assigned objects in layouts are not changed anymore when adding new fixtures at the top of a grouping fixture. |
| The individual phase values of a phaser in a cue could get lost when exchanging fixture types in the patch. This bug is fixed. Exchanging fixture types should not delete individual values in phaser anymore when the new fixture type has the same attribute.                                                                              |

 

### Playback

| Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tracked absolute values were not considered during a cue playback. The cue was played back using only the new relative phaser data of the attribute. This bug is fixed. This bug is fixed. The output of a relative phaser in a cue respects the tracking absolute data of the same attribute. |
| When playing a sequence with HTP playback priority with dimmers at 0% in the cue, the former programmer values were still output. This bug is fixed. HTP playbacks of sequences where dimmers are stored at 0% have now the correct playback output.                                           |

 

### Windows

| Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The filtering in grids, for example the patch menu or the layout editor, could not filter all columns. This bug is fixed. Filtering in grids is fully functional again. |

---

 

## []()

## grandMA3 Version 1.7.2.0

## Features 

The latest release of grandMA3 version 1.7.2.0 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Presets

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Presets can now contain timing values only. For example, fade and/or delay. Together with this change, it is now possible to only call fade and/or delay times into the programmer. In cues, you cannot store timings only.

When calling a timing only preset into the programmer, adding absolute and/or relative values to the programmer for the same attributes, and then storing a cue, the cue will store the values of the timing without a preset reference.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Presets now store MAtricks directly into the preset. Whenever the MAtricks are active, storing a preset also stores the MAtricks settings in the preset. Should a preset contain MAtricks, the MAtricks icon will be displayed.\
To easily edit the MAtricks settings of a preset, open the EditSettings editor of the desired preset, and edit the MAtricks settings.

The new store setting MAtricks defines whether the active MAtricks is to be stored into the preset.

Whenever a preset contains fade times and/or delay times in its the MAtricks, the preset object in the pool displays the fade and or delay markers as well.

Calling a preset which contains MAtricks, the preset applies the data in this order:

1. MAtricks Grid settings
2. Preset values
3. MAtricks Layer settings (if they exist)

 

### []()Executor Assignment and Playback of Presets

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Presets can now be assigned to executors.\
In addition, the selective content of a preset can be either played back by starting an executor which has such a preset assigned or by executing a playback function with a preset in the preset pools, using Go+ for example.

Opening the EditSetting-tab of the assign menu of an executor that has a preset assigned, offers the same settings as for sequences, as long as they make sense for a preset. For more information on playback settings see [Sequence settings](/grandma3/2-4/cue_sequence_settings/).

Edit the global preset playback settings in Menu - Preferences and Timing - Preset.

The OffFade property of preset playbacks determines the fade time when switching off a preset playback.\
The new executor button function At allows to perform an At Preset x.y for the selected fixtures when having the At function assigned to a preset executor.

###  

### []()Recipes

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Creating recipes in presets has become easier and more comprehensive.\
It is possible to add one or more recipe lines to empty preset objects, or to convert already existing presets into recipes.\
Recipes in presets are useful when different MAtricks are to be executed with different fixture selections.

The recipe workflow:

1. Execute the command EditSetting on a preset object in the preset pool.
2. To create a recipe line, tap Turn into Recipe.\
   If the edited preset previously contained values, these will be converted into the recipe. \<Recipe> appeares in the column "Values".  \
   If the preset was empty, a preset can be entered in the "Values" column. Or values from the programmer can be stored in the recipe by pressing Store and then tapping the recipe line.
3. In order for the preset to have functionality, add a selection:\
   Either enter a group in the Selection column or tap Take Selection to take the selection from the programmer. In this case \<Recipe> is displayed in the Selection column.\
   It is also possible to use the "Store /Selection" command and then tap the recipe line.

If several recipe lines are created, the columns Values and MAtricks refer to the first recipe of the preset. This is indicated by MAtricks values which are displayed using <>, for example, <2>.\
This makes sense if you assign your own MAtricks values, for example, Fade or Speed, to a special selection.

It is also possible to assign other values to the Values column.

When tapping Reset Selected the individual MAtricks settings for the selected recipe line will be reset.\
If presets or groups used in recipes are edited, they will be cooked automatically. 

It is still possible to store attribute data into recipe presets, and to create recipes in normal presets using the Store Preset x.y.z command.

Recipes can now use the MAtricks settings Shuffle and Shift. The button Shuffle toggles the display of the corresponding columns in the recipe area and displays the corresponding section in the MAtricks area.

The Stored Data column informs the user of which type the data inside the preset or recipe is. This is important when calling a recipe preset that has no Selection stored inside of it.

Recipe presets that contain values, but not a selection, call the values of the preset for the current selection of the programmer into the programmer without having a reference to the preset.

---

### []()Sequences

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Each cue and cue part have now settings to assign a speed master and a speed scale to them. Access these settings in the sequence sheet using the Speed Master and Speed Scale columns.

Whenever a speed master is assigned to a cue or cue part, the speed of the cue or cue part will only be controlled by the speed master. A speed master that might be assigned to the sequence itself, does not influence such a cue or cue part.

---

 

### []()Preview

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Preview allows to have values in a separate programmer that will never generate output on a real stage.

To enter the preview mode, press Prvw. When Preview is on, Prvw will light up, and the borders of at least these windows will turn red:

- 3D
- Align Bar
- At Filter, window and overlay
- Color Picker
- DMX Sheet
- Fixture Sheet
- Layout
- MAtricks, window and overlay
- Phaser Editor, window and overlay
- Programmer Parts
- Selection Grid
- Smart
- Step Bar

To leave the preview mode, press Prvw again. Prvw will turn dark and the windows listed above will turn gray once again.

During preview mode, the output of the preview programmer will be displayed in the corresponding windows. Leaving and entering preview brings back the previous values of the preview programmer, unless they were manually cleared.\
The preview programmer behaves the same as the normal live programmer.

Editing cues and presets in the preview mode does not create a green frame (as it would in the normal programmer). Instead, the frame turns yellow. 

**Known Limitations:**\
\- In this version, Preview has a preview programmer only. The preview of playbacks will be integrated at a later point in time.\
\- Highlight, Lowlight, and Solo are not functional yet in Preview.

---

 

### []()Phaser and Phaser Editor

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The View Mode button in the title bar of the phaser editor was replaced by radio buttons. These allow switching directly between the view modes:

- Auto
- 1D
- 2D
- Sheet

The phaser editor offers new modes when ViewMode is set to 'Sheet'. The new mode Layer Sheet lists the values of different layers in rows. Every layer has their own row. Each column represents a step.\
If Layer Sheet is enabled, you can use the additional Attribute Sheet mode. When Attribute Sheet is enabled, the layers will be expanded to display the attributes separately.\
Find LayerSheet and AttributeSheet in the tab Sheet of the context menu.\
Selecting Sheet mode in the phaser overlay displays the data just like an active LayerSheet.\
The additional setting Show Empty Rows in the sheet view modes allows to show or hide empty rows within the sheet view modes.

At the top of this view mode, all used attributes are displayed. Disabling the used attributes by simply tapping them disables the attributes for further actions, e.g., adjusting the values. These attribute buttons are linked to the command filter that you can open with a long press on At.\
To toggle selection of all attributes, tap ![](/img/grandma3/2-4/icon_reset_filter_24_v_1_7-4dd029.png) on the right of the attribute bar.

The currently selected layer will be displayed in the layer view mode with a colored background in the layer column on the left side. The background color is the same color as the layer color, too.

Layers sharing their value with all steps display their value in the column of step 1.

At the bottom of the layer view mode, the used attributes also display their phaser as a graph, like in the 1D view mode.

The Filter button allows to show or hide empty lines within the different Sheet modes. When it is on, empty lines, e.g., of layers that do not contain values at the moment, are hidden. When it is off, all lines will be displayed.

Regarding the displayed presets, etc. within the phaser editor, the context menu of the phaser window offers now to choose the value readout, speed readout, and preset readout, as known from the fixture sheet, sequence sheet, and many more.

Furthermore, with the Transpose setting, it is possible to exchange the columns and rows in the sheet mode. The Transpose setting can be found in the Sheet-tab of the context menu (tap MA in the top left corner of the phaser window).\
The Sheet-tab allows also to set an individual Readout, Speed readout, and Preset readout that differs from the settings of the user profile.

To edit values in the Sheet view mode, tap and hold the cell. In Layer Sheet mode it is not possible to edit an absolute value cell or relative value cell when attributes of two or more feature groups are selected in the filter bar at the top of the window.

Furthermore, the phaser editor has now the possibility to display the step bar within the phaser editor. By default, the step bar is enabled. To hide or show it, open the context menu of the phaser editor and tap Step Bar.\
In addition, the Step Bar setting in the phaser editor includes 3 more small buttons to the right of the step bar, which define, which encoder bar the user gets displayed when the focus is set to the phaser editor: 2D Bar, Phaser Bar, or Preset Bar. Preset Bar is the normal attribute encoder bar.

The graph of the 1D phaser editor does not draw a new line for each single phase value that is active, but instead spreads the fixtures corresponding to their phase along with the graph.

The - tool in the left toolbar was removed, as this tool already exists in the right toolbar.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The indicator bars of the step bar buttons are functional:

- Purple indicator bar on the First Step button:

  - Step 2 or above is selected alone.
  - Some steps are selected.

- Purple indicator bar on the First Step button and the Select All Steps button. In addition, the icon of the Select All Steps button turns yellow:
  - All steps are selected.

- No indication:
  - Only step 1 is selected.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Keeping X5 | Step pressed and then tapping presets integrates these presets automatically into steps into the programmer. To be able to do so, executor 295 on the current page does not have an object assigned. As soon as an object is assigned, MA + X5 | Step needs to be pressed. Please refer to the [Other Enhancements](/grandma3/2-4/key_rn_v1_7/#OtherEnhancements) section within this document for more information about this Xkeys behavior in general.

When pressing X5 | Step and then tapping a preset integrates the preset into the current step. Tapping the next preset will behave differently depending on the attributes of the preset:

- Same attributes as already in the step: Next step will be entered and the new preset will be integrated there.
- Different attributes as already in the step: The new preset will be integrated into the current step.

Furthermore, when calling a preset into step 1 and then integrating a preset in step 2, the preset in step 1 will automatically be integrated, too.\
And when tapping a preset while being in step 2 or higher will also automatically integrate the tapped preset into the current step.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The new phaser layer, Measure (Unit: Beats), coupled with the phaser speed (Speed layer) defines the length of time a phaser cycle takes. For example, a phaser with 2 beats on the measure layer at 60 BPM will repeat every 2 seconds.

The Measure layer also affects how the width of each step is calculated.

**Hint:**\
When using the Measure layer, multiple Width value combinations can produce identical results. To ensure predictable timing, it is recommended to consider the Width value of a step as the percentage of a beat and ensure that the total width of all steps in the phaser equals the number of beats specified in the Measure layer.

The Measure layer affects the whole phaser, just as the speed layer and the phase layer do.

The vertical, bold, blue lines in the 1D view of the phaser editor represent beats, whether the Measure layer is in use or not.

When the Phaser encoder bar is displayed, the third dual encoder has the Width layer on the inner encoder, and Measure on the outer encoder.\
The phaser encoder bar only now only affects attributes that have two or more active steps.

 

Depending on the value of the Values button, the 2D Phaser encoder bar colors the indicator bars of the encoder labels:

- Absolute: Red color of the absolute layer
- Relative: Pink color of the relative layer
- Abs + Rel: Purple

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

It is now possible to set the width to values higher than 100%. The new limit is 3 200%.

---

 

### []()Spaces

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

A space is a defined area within a stage. It needs to be used by MArker fixtures to define in which area they can operate (Movement Space), or to attach the space to the MArker fixture in order to let fixtures point to a MArker (Target Space) by using XYZ attributes. A space can be used for both types simultaneously.\
By default, a Stage Space always exists. This space describes the size of the stage.\
The Movement Default space describes a wide area for MArker fixtures to move within. It will always be assigned to MArker fixtures by default, but user-defined spaces are also possible.\
The Target Default space describes an area that can be used as a target area for fixtures to point to when assigned as Target Space to a MArker fixture. This space will always be assigned to new MArker fixtures by default, but user-defined spaces are also possible.\
By default, each patched MArker fixture gets its own set of spaces that will be assigned to it as Target Space and Movement Space.

If a different space, e.g., a catwalk, is needed for a MArker fixture, go to Menu - Patch - Stages. Select the stage you want the MArker to be operated on, then tap Edit.\
In the Edit Stage menu, select the cell 'New Space', and then tap Insert new Space. The new space will be added.\
With the next steps, the size (Min X, Max X, Min Y, Max Y, Min Z, and Max Z) can be modified.

After setting up a new space, this space needs to be assigned as Target Space or as Movement Space to an existing MArker fixture. The Columns need to be set to **Full** in order to see these two columns. To do so, go back to the Patch tab within the Patch menu, and edit the Target Space cell or the Movement Space cell of the desired fixture. Select the new space from the drop-down list.\
By default, a MArker fixture has the Target Default space and/or the Movement Default space of its stage assigned.\
One space can be assigned to several fixtures within the patch.

A MArker fixture cannot move outside the edge of its assigned Movement Space within the grandMA3 system. When the input (e.g., via PSN) of a MArker fixture reports a position that is outside the boundaries of the Target space, the MArker fixture will be positioned as close as possible, but within the space.

The 3D window allows displaying the spaces that are assigned as Target Space to MArker fixtures. To see these spaces, enable Draw Target Spaces within the Misc-tab of the 3D Window settings. When a space has an appearance assigned, the outlines of the space will be displayed in the background color of the assigned appearance.

---

 

### []()MArker Fixture and XYZ

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The existing MArker fixture type has now 2 modes: Moving and Still.\
The moving mode reflects the behavior of the MArker fixture type as known from grandMA3 v1.6.\
The still mode has no DMX channels and therefore cannot be moved around by external input (e.g., PSN).

A still MArker fixture shall be used when fixtures shall point their beams to still stage elements by using the XYZ system. Still stage elements will not move around during the show, e.g., the drum riser. As soon as an element will move around during the show, the moving mode of the MArker fixture type is the way to go. Learn more about [MArkers](/grandma3/2-4/xyz_marker/).

To create a still MArker fixture, start creating a new fixture and select the MA Lighting MArker fixture type and within the fixture type select the Still mode. Once the still MArker fixture is created, a space can be assigned to it as Target Space. The still MArker fixture needs to be placed within the grandMA3 3D space in the same position as to where it is being placed on the real stage.

In addition, there is a new custom ID Type called MArker. MArker fixtures need to have a custom ID for the MArker custom ID type. The MArker custom ID type cannot be renamed. The XYZ attribute MArker (see below) points to a fixture by using the custom ID of the MArker ID type. The fixture sheet has also the option to hide or show fixtures that are using the MArker ID type by disabling or enabling the MArker mask within the fixture sheet settings menu.\
When patching MArker fixtures the MArker ID will automatically be set. The MArker ID starts with 1, but the user is also free to set any other number as MArker ID. The MArker ID is not linked to the fixture ID.

**Important:**\
It is possible to patch a maximum of 1,024 MArker fixtures within a show file.

 

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

XYZ is a different approach to position the beam of a fixture. Instead of using Pan and Tilt values to point a fixture to a spot on stage, the same position can also be described by a coordinate with X Y, and Z values. The grandMA3 system recalculates automatically the XYZ coordinate into Pan/Tilt values for the fixture.

**Important:**\
To get the most accurate result when using XYZ, it is necessary that the fixtures are placed as close as possible within the grandMA3 3D space compared to the real fixtures.\
The [Stage Calibration](/grandma3/2-4/patch_position_fixtures/) feature can be helpful to achieve this.

To be able to use the XYZ position system, XYZ needs to be enabled for all fixture types whose fixtures shall do XYZ. To do so, go to Menu - Patch - Fixture Types - select a fixture type - Edit. In the fixture type editor, XYZ needs to be enabled. The XYZ button is only displayed when the fixture is ready to be used for XYZ. An additional column called XYZ within the fixture type editor displays if XYZ is enabled or not for a DMX mode of a fixture. Enabling XYZ will add new virtual XYZ attributes to the selected mode of the fixture type. These attributes are:

- X, Y, Z: The attributes to enter the X, Y, and Z coordinates the beam of the fixture shall point to on stage.

- Flip: Defines which flip type shall be used (please read the description below to learn more about the different flip areas):

  - Negative: The negative flip areas that shall be used.
  - Center: The center flip area shall be used.
  - Positive: The positive flip areas that shall be used. 
  - Auto Flip: The software decides which flip area it uses.
  - No Tilt Flip: Flips only the pan attribute.
  - No Flip: The fixture tries not to flip.

- MArker: The custom ID the MArker fixture got assigned of the MArker custom ID Type the fixture(s) shall follow.

- Distance: The Distance attribute belongs to the Pan and Tilt attributes when using XYZ. With this attribute, the software can define a unique XYZ coordinate out of a pan/tilt position. The distance attribute sets the distance between the fixture and the point that will be calculated as the XYZ coordinate. Without this attribute, the combination of the pan and tilt attributes only describe an "endless" line within the space. When using the follow tool within the 3D window for pan and tilt, the distance will be automatically set to the value that represents the distance between the fixture and the position that was defined by the follow tool.

The value range of the X, Y, and Z attributes goes from 0% to 100%. This is done because the XYZ system can now use relative positioning within the Target Space of a MArker fixture.\
Let's have four fixtures that point to a 2 m x 2 m riser by using XYZ. These fixtures have a value of 1 set on the MArker attribute because the riser they point to is patched as a MArker fixture with this ID. The space of the riser is defined with an overall size of 2 m x 2 m x 2 m.\
With spreading the X attribute from 0% to 100% the four fixtures align nicely over the riser. Imagine you are now touring and in the next venue the riser is now 4 m wide. Instead of adjusting now the XYZ positions for all four fixtures, it is enough to adjust only the size of the space. With the relative XYZ position, the grandMA3 software adjusts automatically the four fixtures across the range of 4 m.

Together with the XYZ implementation, the Phaser Editor window allows defining which position attribute pair shall be used for a phaser when working in the 2D area. Therefore the phaser editor window has now Attributes added within its context menu. It can be set to PanTilt, or any 2D combination of the 3 XYZ attributes (XY, XZ, or YZ).

When using the follow tool of the 3D window, XYZ will be used as soon as a fixture has XYZ enabled within its fixture type, and when the encoder bar is set to display the attributes of the XYZ feature (X, Y, Z, Flip, and MArker). As soon as the encoder bar is set to any other feature (PanTilt) or feature group, the follow tool will use pan and tilt attributes.

**Known Limitations:**\
\- XYZ can work only with fixtures that have Pan and Tilt attributes and these attributes must be set up with a correctly structured geometry.\
\- Complex fixtures that have multiple pan axes or tilt axes are not supported, yet, for XYZ.\
\- Using XYZ with relative values may cause unexpected results. Therefore, please use only absolute values with XYZ.\
\- For v1.7 we recommend using only one type of position attributes (PanTilt or XYZ) for the same fixture within one sequence.\
\- PanTilt presets that were created before activating XYZ need to manually get the Distance attribute added.\
-Fading between two MArkers is not possible in grandMA3 v1.7.

 

A flip area is a pan or tilt area of 180°. How many flip areas a fixture has is defined by its physical range of pan and tilt. A fixture that has a pan range of 540° has the following flip areas for the pan attribute:

- Flip area -1: -270° to -90°
- Flip area center: -90° to +90°
- Flip area +1: +90° to +270°

The flip area starts always in the center of the physical range. From there the center flip area is defined by going 90° into each direction (negative and positive). Consequently, the center flip area also has a size of 180°.\
The following negative and positive flip areas attach seamlessly to the center area. A fixture that has a bigger physical range, will have then more negative and positive flip areas, e.g., a fixture with a pan range of 900° has these flip areas on the pan attribute:

- Flip area -2: -450° to -270°
- Flip area -1: -270° to -90°
- Flip area center: -90° to +90°
- Flip area +1: +90° to +270°
- Flip area +2: +270° to +450°

 

The negative and the positive flip areas are each limited to 10, which would cover physical ranges of 1800°.\
When a negative or positive flip is set in the flip attribute that the fixture cannot access, the closest one the fixture can access will be used.

---

### []()3D

### []()Render Quality

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The BeamQuality setting, BodyQuality setting, and some more settings within the 3D window got replaced by the Render Quality setting. The render quality setting refers to the new Render Quality pool.\
This pool has already some predefined and locked Render Qualities the user can select within their 3D windows. It is also possible to add new Render Qualities.

A Render Quality describes the render quality within the 3D window. Each Render Quality consists of numerous settings that can be freely combined by the user:

- Beam: None, Line, Standard, High, and High Fancy define the quality of the rendered beam.
- Shadow: Enabled, or Disabled defines if the beam shall also throw shadows when hitting another object. Therefore the 3D object needs the setting **Cast Shadow** enabled within the patch.
- Gobo: Disabled, Enabled, or Animated defines if gobos shall be rendered within the beam and spot, or not. Animated means that in addition to the gobo also gobo animations like gobo shake or gobo wheel spin are rendered. When gobo is only set to enabled, these animations won't be rendered.
- BodyQuality: None, Box, Low, Simple, Standard, High and Ultra define the quality of the rendered fixture body. In the qualities Standard, High, and Ultra the meshes are displayed natively up to a certain vertex count per fixture type. If this count is exceeded, the fixture will be displayed with default meshes. While there is no limit in Ultra, the maximum vertex count is 1 200 in Standard and 10 000 in High.
- Multi Led Beam Mode: Separated Beams, Single Beam Mean Color, and Single Beam Dynamic Gobo define if every beam of a multi-emitter fixture is drawn individually or if they are drawn combined to save performance. 
- Light Scale: Defines the resolution of the rendering of the light. 100% means native resolution. The lower the value, the lower the resolution of the rendered light. A lower resolution means less performance impact.
- Render Scale: This changes the resolution of the whole rendering in the 3D window continuously. 100% means that the 3D window is rendered with its native resolution. 0% means that the resolution of the 3D window is divided by 5 in width and height. Default: 100%
- Shadow \[Pix]: Defines the resolution of the shadow. A lower resolution means less performance impact. This only affects the rendering in Beam Quality "Gobo Shadow", "High Shadow" and "High Shadow Fancy". Default: 128
- Snap: If "Snap" is enabled, the Render Scale and Light Scale are divided with integer values. The fader then indicates the scale (1/1 to 1/5).

To address the pool object of the Render Qualities pool the new keyword **RenderQuality** is introduced.

 

To create a new Render Quality, open a Render Qualities pool (Add Window dialog - Pools - Render Qualities). Enter **Store** into the command line and then tap an empty pool object. The new Render Quality can now be edited which allows adjusting the parameters listed above.

### []()glTF Support

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Mesh files of the glTF (GL Transmission Format) format are supported now. Importing them to the mesh pool works the same way as importing a mesh file of the 3ds format. glTF files with the extensions \*.glb, \*.gltf and \*.gltf with related \*.bin file can be imported.

**Hint:**\
glTF version 2.0 is implemented to the grandMA3 software.

**Important:**\
There is a size limit of 10 MB for the mesh data and 128 MB for the whole glTF file (mesh + textures).

---

### []()Session Data Merge

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

When a console or onPC station rejoins a session (either by joining or invitation or network reconnect), the session recognizes that the station joining already was a part of the session at a previous point in time. If the same show file is loaded on both sides, the grandMA 3 software can merge both show files. This is useful in undetected scenarios such as a station being disconnected for a time from the rest of the session (maybe because of a defect in the network cable or other causes of failure). If on both sides (the remaining session and the disconnected station) users worked further on the show file, users have to decide to choose between one of the two show files. Meaning they had to reprogram the changes of the lost show file in the one that is kept. The new **Merge All Data** option combines the data of both show files in one show file.

The Session Data Merge pop-up is visible for 60 seconds. After 60 seconds without a response, the session data merge will be canceled. \
To pause the countdown, tap in the text area of the pop-up.

 

When such a station as described above now joins again the session, a pop-up informs the user about a **Session Data Merge**. The user has 3 options they can choose from:

- Merge All Data: Merges the changes of all connecting stations into one show file.
- Keep only Master Data: The changes in the show file data of the connecting device(s) is ignored. The show file of the Master side is maintained. Before overriding the show file of the connecting devices(s), the show file will be saved automatically on the connecting station.
- Cancel: The connecting station(s) will not join the session of the Master side and be made Standalone. The user can now investigate which show file is the correct one from their point of view,  then back up each show file, etc.

Merging the data of two show files is supported for these object types, at the moment:

- Sequences with Cue and Cue Part
- Presets
- Recipes
- Programmer and Programmer Parts
- Timecodes
- Macros, Plugins, and PluginComponents
- Pages and Executors
- Images and Videos
- DataPools
- Groups
- All other pools not explicitly mentioned here

**Known Limitations:**\
\- Changes made to the patch during the disconnection of a station disables the possibility to merge.\
\- Merging the deletion of parts of objects during the disconnection of a station is not fully working, yet. (e.g. Deleting one Macro line or deleting a Recipe line)\
\- Merging the movement of objects during the disconnection of a station creates duplicates: At the original spot and the new spot. This may result, for example, in having different sequences assigned to the same executor on different stations.

---

 

### []()MIDI Out

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The grandMA3 can now output MIDI notes, MIDI control change messages, and MIDI program change messages by executing the new command SendMIDI.

To enter the MidiNote keyword in the command line, use one of the options:

- Type **SendMIDI**
- Type the shortcut **Sendm**

Syntax:

**SendMIDI "Note" (Channel/)Note (Velocity) (Status)**

**SendMIDI "Program" (Channel/)Value**

**SendMIDI "Control" (Channel/)Controller (Value)**

 

If a MIDI channel is entered in the command, the entered MIDI channel will be used.\
If no MIDI channel is entered, MIDI channel 1 will be used.

If a velocity is entered in the command, the entered velocity will be used.\
If no velocity is entered, a velocity full (127) will be used.

If no status (On or Off) is entered in the command, On will be used.

To send out the MIDI note 42 on MIDI channel 2 with a velocity of 99, type:

User name\[Fixture]> SendMIDI "Note" 2/42 99

To send out the MIDI note 42 on MIDI channel 1 with a velocity of 99, type:

User name\[Fixture]> SendMIDI "Note" 42 99

To send out the MIDI note 37 on MIDI channel 1, type:

User name\[Fixture]> SendMIDI "Note" 37

To switch off MIDI note 37 on MIDI channel 1, type:

User name\[Fixture]> SendMIDI "Note" 37 Off

To send out the MIDI control value 64 to MIDI channel 1 controller 8, type:

User name\[Fixture]> SendMIDI "Control" 1/8 64

To send out a MIDI program change of 12, type:

User name\[Fixture]> SendMIDI "Program" 12

**Known Limitation:**\
MIDI Through for the MIDI hardware connectors is only working with MIDI Timecode.

---

### []()Content Sheet

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The Content Sheet is used to see the fixtures and values stored in cues. It looks a lot like the Fixture Sheet, but it has a functionality that only displays what is stored in a single cue. It is like a combined Sequence Sheet in Track Sheet mode and Fixture Sheet.

It works very similarly to the Sequence Sheet regarding the sequence to display (Link Type). With the Cue Mode the user can decide if they want to see the current cue, the previous cue, or the next cue.\
With the Show Tracked setting it is possible to display also values that are tracking into the displayed cue. When it is off, only attributes are displayed that will change their value within the displayed cue.

The data of the displayed cue is also separated by the cue parts the cue may have. Within each cue part the fixtures are positioned vertically and the attributes are placed horizontally, like in the fixture sheet. By tapping the headline of each cue part is it is possible to hide or show this specific cue part. A checkmark to the left of the headline bar indicates whether the data of the cue part is displayed or not.

When the new setting Fixture Select is enabled, tapping a cell in the Content Sheet will select these fixtures in the programmer. When this setting is disabled, selecting cells will not select their fixtures in addition.

---

 

### []()DMX Tester

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release​

The DMX tester feature allows to output DMX without addressing attributes of fixtures. This can be useful in order to find the correct DMX address of a dimmer channel, e.g., in a theater, or to check if a DMX channel addresses the correct functionality of a fixture. The DMX tester can be used on patched or unpatched DMX addresses.

To output a value via the DMX Tester feature, the keywords DmxAddress and DmxUniverse can be used.\
The syntax scheme is as following:

**DmxAddress/DmxUniverse \[Dmx-List] At (Readout-keyword) \[Value]**\
**\[Function] DmxAddress/DmxUniverse \[Dmx-List]**

 

To output 50% with the DMX Tester on the third DMX channel of universe 1, type:

User name\[Fixture]> DmxAddress 3 At 50

or 

User name\[Fixture]> DmxUniverse 1.3 At 50

It is also possible to output to a range of DMX channels. To output 42% with the DMX Tester to the DMX channels 8 to 15 on universe 2, type:

User name\[Fixture]> DmxAddress 520 Thru 527 At 42

or

User name\[Fixture]> DmxUniverse 2.8 Thru 15 At 42

To output 69% with the DMX Tester to DMX channels 11 to 15 on universes 3 to 5, type:

User name\[Fixture]> DmxUniverse 3 Thru 5.11 Thru 15 At 69

To output the 8 Bit decimal value 128 with the DMX Testet to all DMX channels of the 42th universe, type:

User name\[Fixture]> DmxUniverse 42 At Decimal8 128

**Hint:**\
The readout keywords are [Percent](/grandma3/2-4/keyword_percent_word/), [PercentFine](/grandma3/2-4/keyword_percentfine/), [Decimal8](/grandma3/2-4/keyword_decimal8/), [Decimal16](/grandma3/2-4/keyword_decimal16/), [Decimal24](/grandma3/2-4/keyword_decimal24/), [Hex8](/grandma3/2-4/keyword_hex8/), [Hex16](/grandma3/2-4/keyword_hex16/), and [Hex24](/grandma3/2-4/keyword_hex24/).

When a DMX channel outputs values through the DMX Tester, the corresponding cell within the DMX sheet has a white background.

To switch off the DMX Tester the Off keyword needs to be combined with the DmxAddress or DmxUniverse keywords. To switch off the DMX Tester on all DMX channels of all universes, type:

User name\[Fixture]> Off DmxAddress Thru

or

User name\[Fixture]> Off DmxUniverse Thru

**Important:**\
The former functionality that selected the fixture that was patched to a DMX address when executing the DmxAddress or DmxUniverse keywords, still exists, but it needs to be executed together with the SelFix command, e.g., SelFix DmxAddress 1 selects now the fixture that is patched to DMX channel 1 of universe 1.

**Known Limitation:**\
For grandMA3 v1.7 the DMX Tester can only be operated throughout the command line.

---

 

### []()Backup Menu

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

When opening the backup menu (Menu - Backup) a new first selection menu opens that offers the choices for Load, New Show, Save To \<Drive Name>, Save As, and Delete.\
The background coloring of these buttons helps also to distinguish fastly the different functions.\
At the top of the selection menu, the description input field is always visible. It displays the description of the currently loaded show file and allows also to modify it.\
On the bottom of this selection menu, the settings are now always visible.

Tapping Save To \<Drive Name>, for example, Save To Internal, will directly save the show file under the current show file name onto the selected drive. Save As opens a file list, and allows to overwrite other show files with the content of the current show file or to enter a new show file name. When a new show file name is entered, tap Save As ... in the bottom right corner to finally save the show with the new name.\
Load and Delete will also open the same style of file list where the selected show can be loaded or deleted by tapping then the corresponding button in the bottom right corner: Load or Delete.\
The buttons to select the type (e.g., Shows, Backup, or Demo Shows), and the drive selector button are now also part of the Load, Save As, and Delete menus.\
Tapping New Show opens an input pop-up where the user can enter the show file name for their new show, or take the suggested show file name. Applying it will start the new show.

When being in a file list (Load, Save As, or Delete), buttons at the bottom allow to display the history of the show file (Show History) or to display the description of the selected show file (Show Description / Edit Description). To go back to the selection menu, tap Back on the top left corner of the menu. Within the Save As list, the description of the show file can be also modified. Only one dialog of these two can be displayed at the same time.

Line breaks within the description input field can be made now by just pressing Please or Enter. The input field for the description now allows using the on-screen keyboard to enter the description. To do so, tap the keyboard icon at the right edge of the input field. A pop-up with the on-screen keyboard at the bottom to enter the description opens. If the on-screen keyboard is not visible, tap the triangle icon in the top left corner.\
When a description is longer than 2 lines, the description cell in the list of show files will display "\[...]" at the end of the second line to indicate this.

For, e.g., deleting show files, it is now possible to do multi selections within the list of show files. As soon as 2 or more show files are selected within the Load or Save As menus, the buttons Save As ... and Load are grayed out.

The warning pop-up which appears when loading a show while the changes are not saved to the current show now also displays the name of the current show file.

If you tap Save As ... and the file is not found in accordance to the search, the name of the show file being searched will be used as a suggestion. In case there is a match with the searched show file name, the first show file within the matching list will be suggested.

The backup menu is now a full-screen menu.

When being in the Load Show, Save As, or Delete the top right area of the menu informs the user about the available space on the selected drive. When saving a show file and the destination drive does not have enough space, a pop-up informs now the user that the show file could not be saved successfully.

**Hint:**\
On macOS the available space is the sum of free space and purgeable space.

As Windows stations will freeze when using certain names as show file names, the software does not allow to use such show file names anymore. A pop-up informs the user if they used an illegal show file name.\
The illegal show file names are:\
CON, PRN, AUX, NUL COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8,  and LPT9.

---

 

## []()Other Enhancements

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) The grandMA3 onPC software running on Windows now checks if the minimum and recommended [system requirements](/grandma3/2-4/onpc_system_requirements/) are fulfilled. If not, a pop-up will inform the user before the application starts.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The indicator icons on preset pool buttons and sequence pool buttons were reworked:

- In and out filter icons are now sharing the same spot: When only a filter for input is assigned, the filter icon looks like this: ![](/img/grandma3/2-4/icon_input_filter_fixed_15_v_1_7-e0e7f0.png); when only an output filter is assigned, the icon looks like this: ![](/img/grandma3/2-4/icon_output_filter_fixed_15_v_1_7-a834f2.png); when both, input filter and output filter are assigned, it looks like this: ![](/img/grandma3/2-4/icon_input_output_filter_fixed_15_v_1_7-c0daba.png). This is valid for presets (input filter only) and sequences (both, input and output filter).

- The indicators for referenced/embedded and integrated are also sharing the same spot:

  - Only referenced/embedded: ![](/img/grandma3/2-4/icon_referenced_fixed_v_1_7_1-d508cb.png)
  - Only integrated: ![](/img/grandma3/2-4/icon_integrated_fixed_v_1_7-a6610d.png)
  - Embedded and integrated: ![](/img/grandma3/2-4/icon_referenced_integrated_fixed_v_1_7-975c25.png)
  - Furthermore, these icons and the number of the fixtures that have the preset applied are now cyan by default.

- When a preset is set to be a MAgic preset, the indicators for the preset mode of the preset disappear now and on their spot, the MAgic icon appears.

- The indicator for multi step presets was also reworked: ![](/img/grandma3/2-4/icon_multi_step_fixed_15_v_1_7-6e0eb7.png)

- On top of the indicator icon row, layer indicators are now placed. It displays indicators when there are values of the following layers stored within the preset: Absolute, Relative, Fade, and Delay. The coloring of these indicators follows the coloring of the layers themselves. As long as there are only absolute values part of the preset, no indicator for absolute will be displayed.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Groups and MAtricks pool objects that are referenced to other objects, e.g., into layouts, recipes, etc. display now also the reference icon: ![](/img/grandma3/2-4/icon_referenced_fixed_v_1_7_1-d508cb.png)

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Import/Export menu was reworked regarding the ObjectType selection:

The ObjectType selection was moved from the title bar to the left side of the main area.\
Tapping ObjectType opens the ObjectType selection dialog across the whole Import/Export menu. After selecting one ObjectType or tapping ![](/img/grandma3/2-4/icon_triangle_left_fixed_v_1_7-f7f055.png), the ObjectType selection dialog closes.\
When opening the Import/Export menu for the first time, the ObjectType selection dialog opens automatically.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Agenda

- Pasting agenda events allow now directly to set a new start date by using the /Date option. To set the start date of the agenda event that will be pasted to 3.10.2042  as the second agenda event, type:

User name\[Fixture]> Paste Agenda 2 /Date "3.10.2042"

- It is now possible to copy all events of a day at once and paste them at another day, just by selecting the day within the ViewMode Year, Month, Week, or Day.\
  Within these view modes, it is only possible to select 1 day at all or 1 event at all.
- When using the Delete Old-functionality, a pop-up asks if the user wants to delete all events from the past.
- The title bar buttons for Reset Selection and Delete Old are now only displayed when the Agenda window has the Setup mode active.
- The workflow of the cut (![](/img/grandma3/2-4/icon_cut_15_v1-5-7cec1d.png)), copy (![](/img/grandma3/2-4/icon_copy_15_v1-5-1f7ee1.png)), and paste (![](/img/grandma3/2-4/icon_paste_15_v1-5-f54afb.png)) functionality in the setup mode of the agenda window changed and works now in the same way as in other places of the software: Select first the agenda entry, then tap the button of the desired action.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) IfOutput, IfActive, and IfProg

- IfOutput selects now only fixtures that have non default values.
- IfOutput, IfActive, and IfProg select fixtures now in the order of their fixture and/or custom ID.
- IfActive and IfProg are now selecting fixtures that have other attributes than the dimmer active or in the programmer.
- IfActive and IfProg can now filter by objects, e.g., presets, attributes, feature groups, etc. To select only the fixtures that have the red color preset active in the programmer, type:

User name\[Fixture]>IfActive Preset 4."red"

Learn more about [IfOutput](/grandma3/2-4/keyword_ifoutput/), [IfActive](/grandma3/2-4/keyword_ifactive/), and [IfProg](/grandma3/2-4/keyword_ifprogrammer/) in their help topics. 

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The dialogs "Select fixture type to import" and "Insert New Fixtures" in the patch were improved:

- Select fixture type to import dialog:

  - The list of fixture types to be selected for import is now redesigned and follows the same style as known from the different share sites (http\://fixtureshare.malighting.com or http\://gdtf-share.com): It has 3 columns (from left to right): Manufacturer, Fixture, and Mode.\
    Within these 3 columns, a list displays always the currently available data, depending on the former action and/or search. The user has to select first a manufacturer to see all the available fixtures of the manufacturer. After selecting a fixture, all available modes will be displayed.\
    An entry with yellow font color and a dark gray background is the selected entry. Light gray text under each manufacturer name, fixture name, and mode name, tells the user how many fixtures of the manufacturer are available, how many modes a fixture has, or how big the DMX footprint of the mode is.

  - The fixture types to import offers now all possible files from all available sources (MA, User, Shares) at once. There are no different tabs for each source anymore. To see and search only within a certain type of source, enable only the wanted source(s). Tap the icon of each source in order to enable or disable it for the search.\
    Shares as source is disabled by default, but can be enabled by the user any time.\
    The column for the fixtures of a manufacturer displays also per fixture from which source this fixture type os coming from.

  - The list of fixture types to patch new fixtures can be changed between the fixture types that are already part of the Show (Show) or to import one from the available libraries (Library).

  - Shares will be grayed out when there is no active connection with the world server. It will also be grayed out when the internal drive is not the selected one.

  - It is possible to navigate through the columns of Manufacturers, Fixtures, and Modes using the arrow keys.

    - Left and Right: Switch between the columns.
    - Up and Down: Scroll through the column.

  - Before the import of the fixture type to the show file, tap Description at the bottom to display the description and other information, like Version, Uploader, etc., of the fixture type. To adjust the vertical size of the description, tap, hold, and drag the top border of the area.

- Insert New Fixtures:

  - The list of fixture types to be selected for import is now redesigned. To learn more about this new style, please read the first sub bullet point from the bullet point "Select fixture type to import dialog" above.
  - The new cells Mode and Dmx Footprint display the information of the selected fixture type. Tap Mode to change the used mode of the fixture(s) that shall be created.
  - The Apply button was renamed to Create! and has now a green background color.
  - The FID or CID area now suggests, depending on the quantity set, IDs that can take all fixtures in a row without causing a collision with existing fixtures. IDs that would cause a collision are grayed out.
  - The Patch field now has three more buttons Patch To Next Free Address, Patch To Next Free Universe, and Patch Offset. Furthermore, the calculator for direct input of a patch address and the sheet view are now simultaneously displayed. To apply a DMX address from the sheet view, the desired DMX address needs to be double-tapped. PatchOffset determines how many DMX channels shall be between the first channel of each fixture that will now be patched.
  - The Insert New Fixtures dialog allows now to change the Columns mode, too. Therefore, the title bar has now the corresponding button. Changing the Columns mode here changes it also in the patch menu, and vice versa.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When editing cells, it is possible to set negative values to Pan Offset and Tilt Offset in the patch menu.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png)Exchanging fixture types should not create unnecessary selective preset data anymore by using existing global data for the swapped fixture type. When no existing global data exists for the fixture type, it will move/create global data for the new fixture type where global data exists for the old fixture type. Therefore the existing look is not explicitly preserved when there was no selective data for the fixture before the fixture swap.

**Known limitation:**\
If you swap all fixtures using two or more fixture types to a new fixture type, you might get selective data for all but the first fixture type. To avoid this limitation swap one fixture to the new fixture type and save the patch before swapping the rest of your fixtures.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) It is now possible to create a new line within grids, e.g., the macro editor or the recipe editor, by pressing Store and then tapping the New Line cell.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The color picker can now address fixtures that are using color wheels.

**Known Limitation:**\
\- When a fixture type has more than one color wheel, the color picker can only handle up to 255 different color combinations across the color wheels.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New keywords Collect and Collection allow adding object index locations of the same type together into the collection. Additional actions can then be executed with the collection, e.g., import, store, delete, move, and many more.

To enter the Collect keyword in the command line, use one of the options:

- Press Select Select
- Type **Collect**
- Type the shortcut **coll**

To enter the Collection keyword in the command line, use one of the options:

- Press Fixture Fixture Fixture
- Type **Collection**
- Type the shortcut **collecti**

To add an object into the collection, e.g., the second color preset, type:

User name\[Fixture]> Collect Preset 4.2

To add then color preset 10, type:

User name\[Fixture]> Collect Preset 4.10

To move the collection to the 20th color preset, type:

User name\[Fixture]> Move Collection At Preset 4.20

 

Pool objects that are part of the collection, have an orange frame and display the collection order number in orange color centered on the top edge of the pool object.

**Hint:**\
It is also possible to collect empty pool objects, e.g., for import or for store.

**Important:**\
A collection stays always at the collected spot.

To reset the collection, type:

User name\[Fixture]> Collect

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Updating multiple devices at once via the software update menu sends out the data now parallel to several devices at the same time and not in sequential order any more. To a maximum of 10 devices, the software update will be sent out simultaneously. As soon as the first device has received all data, the update for the next device will be sent out.\
During a running software update process, it is not possible to start a second one. As soon as the running process is done, a new software update process can be started again.\
If needed, a running software update process can now be stopped by tapping Cancel Update Process in the bottom right corner of the software update menu.

The Select Update File functionality improved and imports now also the selected files to the hard drive. Therefore the button is now labeled Select and Import Update Files.\
Furthermore, the new function Delete Update Files allows to delete selected update files from the hard drive.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Filter in the Network Menu and the Software Update Menu were split up: In the Network Menu it is called Session Filter and in the Software Update menu it is called Software Filter. This change allows to set up different values in the filters of each menu.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The fixture type editor now displays if there will be conflicts between the default value and the defined channel functions and channel sets, e.g., in case that the channel functions do not cover the set default value. In this case Show conflicts will be displayed at the bottom of the fixture type editor. Tapping it opens a pop-up that tells where the conflict is located.\
In addition, the name cell of the affected DMX Mode and the name cell of the affected attribute will be highlighted with a red font color, and the corresponding values will be highlighted in orange.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Xkeys can now access their secondary function directly as long as no object is assigned to the Xkey: Pressing X4 | Layout, for example, enters now Layout into the command line, when no object is assigned to this Xkey. Store and press X4 | Layout stores, as before, a new sequence to Xkey 4. From this point onwards, the keyword Layout can only be accessed by pressing MA + X4 | Layout, as before.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New master Grand.ProgXFade allows to crossfade the programmer. The new master Grand.ExecutorXFade allows to crossfade playbacks.

To enable the crossfade functionality, switch the corresponding master on. Switching it off again disables the crossfade functionality again. Switching on the corresponding time master disables the XFade master, and vice versa, as only one of the two functions can be used at a time.

When the Prog XFade is active, doing changes within the programmer will then put them into the programmer, but not output them until the Prog XFade fader is either pulled up to 100% or down to 0%, depending on its current fader position.

When the Executor XFade is active, going cues will then output them when the Executor XFade fader is either pulled up to 100% or down to 0%, depending on its current fader position.

Two new buttons in the top right corner of the executor bar display the program time (Prog Time) and the executor time (Exec Time). Depending on what is active, they display either the time or the XFade state. When the indicator bar on top of the button is blinking orange, XFade is active. When Time is active it will just be just orange without blinking.\
Furthermore, the master controls window got the Prog XFade fader added.

The Prog XFade master is a setting per user profile.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) The values coming from the programmer or playbacks of other users are now displayed with their own colors within the fixture sheet.

- By default, cells with a lighter gray background and white font color indicate a value that is active or deactivated within the programmer of another user profile.
- The values of playbacks started by other users have the same look as the playback of non-selected sequences from your user profile: Yellow font color.

The color definitions can be changed within the color theme:

- SheetColor.BackgroundOtherProgrammer
- SheetColor.TextOtherProgrammer
- SheetColor.TextOtherPlayback
- SheetColor.TextOtherPlaybackTracked

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New command options /Save and /NoSave: These options define if the show file will be saved or not when, e.g., shutting down, restarting, or rebooting the console/software, and when loading a show. These options are only taken into account when the /NoConfirm option is specified, too.

To shut down the grandMA3 console and automatically save the show file, type:

User name\[Fixture]> Shutdown /NoConfirm /Save

To shut down the grandMA3 console without saving the show file, type:

User name\[Fixture]> Shutdown /NoConfirm /NoSave

The shortcut for /Save is /S, for /NoSave the shortcut is /NS.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) grandMA3 consoles can now change their IP addresses during operation from AVAHI addresses (e.g., 169.254.x.y) to IP addresses assigned by a DHCP server. This will be the case if the DHCP server appears in the network after the console has booted. Furthermore, DHCP for the interface within the grandMA3 software has to be set to Yes.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) grandMA3 consoles now boot faster.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) grandMA3 onPC Windows Hardware Image:

- Updated to Windows 10 IoT Enterprise 21H2.
- Internet Explorer replaced by Microsoft Edge.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Macros and CMD input fields

- The grandMA3 software translates now entered commands within macro lines or CMD fields (e.g., Sequence Sheet or Agenda) of cues into the syntax the command line would execute later. This helps to detect typos and other mistakes directly when applying the entered command. Proper names that are entered within quotes (" or ') stay untouched from this interpretation.
- Pressing hard keys with commands, e.g., Delete, Fixture, At, and many more enters now their command into the input field of macro lines and into CMD fields.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) No title bar mode of windows

The

- 3D window
- Layout window
- Clock window

allow now to enter a mode where these windows hide their title bar. To do so, open the context menu of the window, and deactivate Show Title Bar. In the context menu of the 3D window this button is located within the Misc-tab. The title bar disappears now. In this mode, it is not possible to change the size of the window. Furthermore, a small MA logo will be displayed in the bottom right corner of each window that is in fullscreen mode. This mode is mainly intended for installations that want to prevent that untrained people, e.g., facility management, who need to do simple operations, are not reconfiguring the views by mistake.

In order to get close to a real fullscreen experience, the border of windows is thinner in this mode compared to the normal mode.

To temporarily disable this mode in order to enter the context menu again, etc., press both MA keys (in the command control area), or press Ctrl + Alt (Windows), or press Ctrl + Option (macOS). The title bar appears for the time that both keys are being pressed.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When entering a range of phase, the range will automatically be recalculated to the number of fixtures in a way that the first and last fixtures do not have the same phase value.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Update menu has now also the option to switch the input filter on or off by toggling InputFilter. The input filter setting applies only when updating presets.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When editing a fixture type, the list of DMX Channels allows now to define a resolution for virtual attributes (attributes without having an address for Coarse, Fine, and Ultra). To do so, the corresponding cell of the Virtual Resolution column needs to be edited. By default, it is set to 24bit.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Load and Goto:

- Load and Goto can now be assigned as button functions to executors. When pressing an executor button with such a function, the corresponding Load/Goto pop-up appears for the sequence that is assigned to the executor.
- When displaying the appearances within the Load/Goto pop-up the image used in the appearance are now also displayed.
- The width of the Load/Goto pop-up was reduced.
- The Load/Goto pop-up has now the possibility to move it to a different display by using the Edit Display Preferences functionality within the title bar.
- The Load/Goto pop-up has an improved focus handling:\
  When the pop-up opens, the focus is set to the search field. To set the focus into the list of cues press Please one time. To load or goto the selected cue press Please a second time.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The encoders display now in addition to the value also the name of a channel set if the value is part of a channel set.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) It is now possible to trigger EncoderLeftCmd and EncoderRightCmd of executors by using OSC. To turn the encoder of executor 315 on page 1 by one click in counter-clockwise direction, use this OSC string: "/Page1/Encoder315,i,-1".

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) MAtricks

With the introduction of MAtricks into presets, the MAtricks button within the encoder bar displays now also the preset object where the current active MAtricks are coming from. Furthermore, this button displays now also markers for the different layers (fade, delay, and phasers), when values for the corresponding layers are part of the called object.

All MAtricks properties, except the ones from the Layer section, provide now an additional value: No \<Property>, e.g., No Group, No Block, etc.\
This allows forcing MAtricks properties to be inactive when combining several MAtricks pool objects. For example: MAtricks 1 contains XBlock 4 and XWing 2. MAtricks 2 contains XGroup 2 and XWings No Wings. Calling first MAtricks 1 and then MAtricks 2 will result in XBlock 4 and XGroup 2. XWings will be set to No Wings, and therefore it will be ignored by modifying the selection.

It is possible to use the remove option when storing onto existing MAtricks pool objects. When an active MAtricks property is stored in a MAtricks pool object and it is active in the MAtricks of the programmer, then it will be removed from the MAtricks pool object.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) RDM over Art-Net:

- The order of enabling the different switches (Session, global RDM, Art-Net Out/In/Setup, and EnableRdm per Art-Net line) in order to get RDM over Art-Net working is not important anymore.
- The detection of RDM fixtures via Art-Net improved.
- Each Art-Net universe within an Art-Net data line creates now its own RDM Port when there are RDM fixtures on the universe.
  - Such RDM ports are labeled with the name of the Art-Net data line they are coming from.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) The new AutoCreate keyword creates objects depending on the given source objects, e.g., creates groups from the fixture types of the patched fixtures.

To enter the AutoCreate keyword in the command line, use one of the options:

- Type **AutoCreate**
- Type the shortcut **Ac**
- Type the shortcut **Au**

Syntax: **AutoCreate \[Source-list] At \[Destination-list] (/Option)**

Options:

- /Single: For auto-creation of groups. For each fixture of the source, an own group will be created.
- /All: For auto-creation of groups. For all fixtures of the source one single group will be created.

When executing AutoCreate and having Selection defined as source-list the current active MAtricks settings will be taken into account.

If a group exists already on the destination, a pop-up will appear and ask the user how they want to proceed: Overwrite, Merge, or Cancel.

Requirement for the next 3 examples:\
Enough fixture types need to be part of the show.

To create a group at group pool object 42 with all fixtures of fixture type 10, type:

User name\[Fixture]> AutoCreate FixtureType 10 At Group 42

To create single fixture groups starting at group pool object 24 for all patched fixtures of fixture type 9, type:

User name\[Fixture]> AutoCreate FixtureType 10 At Group 42 /Single

To create single fixture groups starting at group pool object 101 for all patched fixtures of fixture types 9 and 10, type:

User name\[Fixture]> AutoCreate FixtureType 9 + 10 At Group 101 /Single

To create single fixture groups starting at group pool object 1 for all currently selected fixtures, type:

User name\[Fixture]> AutoCreate Selection At Group 1

 

Requirements for the next example:\
Select 8 fixtures, set MAtricks XGroup to 2, and MAtricks X to 0.

To create a group at group pool object 21 with all main selected fixtures (odd fixtures of the current selection), type:

User name\[Fixture]> AutoCreate Selection At Group 21 /All

Requirments for the next examples:\
The used layer and class need to exist within the patch and fixtures need to be set to them. The demoshow has this already set up.

To create single fixture groups starting at group pool object 201 for all patched fixtures that are set to the layer "Backtruss" within the patch, type:

User name\[Fixture]> AutoCreate FixtureLayer "Backtruss" At Group 201 /Single

To create a group at group pool object 301 for all patched fixtures that are set to class "Spots" within the patch, type:

User name\[Fixture]> AutoCreate FixtureClass "Spots" At Group 301

To create single fixture groups starting at group pool object 401 for all fixtures of fixture type 9 that are also set to fixture class "Spots, type:

User name\[Fixture]> AutoCreate FixtureType 9 + 10 If FixtureClass "Spots"

**Known Limitations:**\
-  Auto Create is a command line only tool for version v1.7.\
\- For v1.7 the AutoCreate feature can only creates groups.\
\- The auto create collision pop-up does not report the colliding objects.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Keywords FixtureLayer, FixtureClass, FixtureType, and Stage can now be used in combination with the SelFix keyword. If only the first-named keywords are executed the same action is done as when executing the keyword together with SelFix.\
SelFix on one of these named keywords will select all fixtures of the specified object.

To select all patched fixtures of fixture type 3, type:

User name\[Fixture]> SelFix FixtureType 3

To select all fixtures patched on stage 1, type:

User name\[Fixture]> SelFix Stage 1

To select all fixtures that are set to class "Spots" within the patch, type:

User name\[Fixture]> SelFix FixtureClass "Spots"

To select all fixtures that are set to layer "Backtruss" within the patch, type:

User name\[Fixture]> SelFix FixtureLayer "Backtruss"

The keywords FixtureType, FixtureLayer, and FixtureClass have now these key shortcuts:

- FixtureType: MA + Fixture
- FixtureLayer: MA + Fixture + Fixture
- FixtureClass: MA + Fixture + Fixture + Fixture

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Deactivation groups

Deactivation groups define which other attributes shall be knocked out when activating an attribute. For example, when having active pan and/or tilt values in the programmer, the deactivation group "Position" takes care, that these attributes will be knocked out when activating XYZ attributes.

By default, there are 2 automatically generated deactivation groups: Position and Color.

A Deactivation Group can be set up within the patch: Menu - Patch - Attribute Definitions - Deactivation Groups.

The definition of which attributes are organized within a deactivation group is done via the activation groups. Therefore, the Activation Groups-tab has the new column "Deactivation Groups". Enter here per set up activation group if and to which deactivation group it should belong to.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Select Interface drop-down to select a network interface displays now a network icon that is colored green or red to indicate if the interface has a connection established or not.\
Furthermore, when such an interface is set to use DHCP, the UI will display **No cable** everywhere this interface is selected.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New user right View: This user right is only allowed to call views, and to login to a different user. With introducing this user right, the user right None is now only allowed to login to a different user.​

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) There are executor configurations within the executor configuration pool available for every object type that can be assigned to executors. Therefore, each object type has its own default executor configuration that will be used when assigning an object to an executor. To see the selected executor configuration of an object type, go to Menu - Preferences and Timing - Exec Configs. It is possible to change the selected executor configuration here by tapping the button of the desired object type and then selecting the desired executor configuration from the appearing drop down list.\
When migrating show files from older grandMA3 version to v1.7, the existing executor configurations are retained, but they will be shifted in the pool. They start now at pool object ID 14. This happens, because the new default executor configurations will be placed at the beginning of the pool.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The lists of available fader functions and button functions within the Assign Menu were reworked: Functions that are not functional for the object type of the assigned object were removed.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Clean start of the application on consoles, RPUs, and processing units: Press and hold Ctrl once the Mode Selection pop-up appears during the start-up process of the device.\
While holding Ctrl, either tap then the desired mode you want to enter or continue to hold Ctrl until the 10s countdown runs out. When allowing the timer to run out, the preselected mode (the button displayed with a lighter gray) will be used. After the Mode Selection pop-up has disappeared, release the Ctrl key.\
When you press and hold Ctrl and let the 10s countdown run out, the preselected mode (the button will be displayed with a lighter gray) will be clean started.\
When the clean start is performed, the grandMA3 software will start with no show file loaded and all user settings are set back to factory default.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Assign menu offers now all assignable object types to be assigned to executors.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) On grandMA3 light and grandMA3 full-size consoles (including the CRV models) the command line displays an [icon indicating the power status and the battery status](/grandma3/2-4/ws_ui_command_line/).\
When tapping now the icon the Battery status pop-up will appear. This pop-up reports more useful information about the power status and battery status like battery voltage, battery level, battery charging, A/C power status, UPS status, and if the battery is faulty.\
Furthermore, the charging behavior of the battery has been optimized to avoid prolonged charging and extend the lifetime of the battery.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The connector overlay can now easily be enabled within the Output configuration menu by tapping Show Connectors. To disable the overlay, tap the button again.

**Restriction:**\
The connector overlay is only available for grandMA3 full-size, grandMA3 full-size CRV, grandMA3 light and grandMA3 light CRV models.

 ​![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The system info window has now an HDD section that lists relevant information about the available disks, e.g, name, drive type, free space, and total space.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When using TrigType 'Follow' for cues, an additional TrigTime can be added. This follow time will start to count down after the transition (fade and delay times) into the cue has finished.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) The Set key is now highlighted by its backlight when MAtricks are active in the programmer. Furthermore, the Fixture and Channel keys are also highlighted, when Fixture or Channel is the default of the command line.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The structure of the user library folder regarding fixture types and fixture type resources changed. Fixture types are now located in gma3\_library/fixturetypes. It is no longer distinguished between grandMA3 fixture types and GDTF fixture types.\
The additional new folder "fixturetyperesources" with its two subfolders called "gobos" and "meshes" is now the location for gobos and meshes. Copy your custom gobos and meshes into these subfolders to be able to import them to your show. Exported gobos and meshes are also located there.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Typing fixture IDs into the command and then turning the dimmer wheel selects now automatically the fixtures and applies the dimmer values to them.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Additional selective data in global or universal preset can be deleted by using the Cleanup command with the selective option.\
To delete the selective data from the global or universal color preset 1 to 10, type:

User name\[Fixture]> Cleanup Preset 4.1 Thru 10 /Selective

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The new function Connect to viz-key (In Menu - Settings - onPC Settings) allows to define if a plugged in grandMA3 viz-key should or should not connect to the grandMA3 onPC. This can be useful when a third-party visualizer is running on the same computer and the viz-key should always connect to the visualizer for it to grant visualization parameters.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Executing Default, Remove, or Release without specifying selection or attributes, applies the corresponding values to all attributes of the current selection.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) It is possible to switch the feature groups in the encoder bar via shortcuts. To do so, press and hold Preset, and then press one of the numbers from 1 to 9 on the numeric keypad in the command area​. To switch to the color feature group, press Preset + 4.

---

 

## []()What's Changed

- The parameter count increased for these grandMA3 devices to the documented parameter count (when using grandMA3 software):

  - grandMA3 full-size and full-size CRV: 20 480 parameters
  - grandMA3 light and light CRV: 16 384 parameters
  - grandMA3 replay unit: 8 192 parameters
  - grandMA3 compact: 8 192 parameters
  - grandMA3 compact XT: 8 192 parameters
  - grandMA3 onPC command wing: 4 096 parameters
  - grandMA3 onPC fader wing: 4 096 parameters
  - grandMA3 onPC rack-unit: 4 096 parameters
  - grandMA3 onPC 2Port Node 2k: 4 096 parameters
  - grandMA3 onPC 2Port Node 2k PoE: 4 096 parameters
  - grandMA3 onPC 2Port Node DIN-Rail 2k: 4 096 parameters
  - All other grandMA3 devices stay unaffected by this change.

- When opening the All-tab of the Add Window dialog, the focus is now set to the search input field.

- The backup menu stays now open after saving a show.

- The installer of grandMA3 onPC checks now for the [minimum required Windows version number](/grandma3/2-4/onpc_system_requirements/).

- When using the SaveShow command and a show file name that is longer than 31 characters, the intended show file name will now be added as new first line to the description of the show file.

- Colors

  - The color of the preset indicator within the fixture sheet, encoder bar, and sequence sheet changed to cyan.
  - The color for the relative text and phaser text were adjusted. Relative text is now brighter and phaser text is darker. This improves the distinctiveness between the 2 layers.

- The icon of swipe buttons changed. A swipe button has now this icon: ![](/img/grandma3/2-4/icon_swipe_fixed_v_1_7-1e3917.png)

- When a transition into the OffCue is running, a backward running fade bar on the executor and sequence pool object indicates this now.

- The label dialog says now Label instead of Edit Name in its title bar. Furthermore, the object to label is now also displayed within the title bar, for example, Label Group 1 'All Spots'.

- Clearing the programmer now switches the Single Step setting off.

- Selecting an empty executor selects now the executor.
  - Furthermore, this does not create a new sequence anymore. The new sequence will then only be created when storing a new cue without specifying explicitly a sequence.

- The button labels within the context menu of the Custom/Master Section window replaced the term Section with Area.

- When opening a new fixture sheet window, sequence sheet window, or sequence content sheet window, the layer toolbar is now enabled by default.

- The LUA Core has been updated to LUA v5.4.4.

- When Split View mode is enabled and the Columns are set to Condensed, the patch menu does not have the tabs for ID Type, Layers, and Classes anymore.

- The 14D button in the AfterRoll calculator of TiemcodeSlots was removed.

- Renamed Sunlight to Daylight in the Date and Time menu and the Agenda.

- Agenda events are executed with Admin user rights only.

- The values active in the programmer of other users can now be stolen from these programmers by only knocking in these attributes into the own programmer.

- Presets that are set to CuePart 0 within their settings are now called into the selected programmer part, and not into programmer part 0 anymore. Presets with a different dedicated programmer part will always be called into this dedicated programmer part.

- Turning an encoder knocks in the attribute into the currently selected programmer part.

- The Lua function GetSubFixture() now returns the handle of the corresponding fixture type when using GetSubFixture().fixturetype. Use GetSubfixture(1):Get('FixtureType', Enums.Roles.Display) to get directly the name of the used fixture type.

- The default intensity of the Point Light and the Ambient Light in the 3D window was changed to 15 % (Ambient Light) and 50 % (Point Light).

- The settings Fixture Sort and Feature Sort in the fixture sheet, sequence sheet, and content sheet are disabled by default in new shows. 

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opening the dimmer of fixtures with blades the first time after loading a show animated a shaper movement within the 3D. This bug is fixed. Shapers do not animate anymore within a fixture when opening the dimmer for the first time.                                       |
| Gobos were not loaded correctly and displayed as "open" instead of from time to time, especially if the gobos had a high resolution. This bug is fixed. High-resolution gobos are now displayed reliably.                                                                     |
| Fixture Types that had geometries without a model linked did not display lenses under some circumstances in mesh qualities "Low", "Simple", and "Standard".                                                                                                                   |
| The "Pick Pivot" tool did not work correctly if meshes of a fixture were displayed with default meshes or boxes in lower body quality modes and the pan or tilt of the fixture were rotated. This bug is fixed. Pick pivot now works as expected in lower body quality modes. |
| Virtual DMX Channels like a virtual pan or tilt were not visualized in the 3D window. This bug is fixed. Virtual channels are visualized in the 3D window.                                                                                                                    |
| There was a crash if a fixture type had a lot of prism facets (48). This bug is fixed. It will not crash any longer if a fixture type's prism has a lot of facets.                                                                                                            |
| It could happen that certain fixture types did not render their lenses when a body quality lower than High was selected. This bug is fixed. Lenses of 3D models should now also be rendered also in lower body qualities.                                                     |
| High-resolution textures of 3D models were not correctly scaled to a lower resolution during mesh import in some cases. This bug is fixed. High-resolution textures are scaled down correctly now. The UV mapping is correct after scaling.                                   |
| The linearize and planar selection did not work as expected on a console. This bug is fixed. Linearize and planar selection now give the expected result on a console.                                                                                                        |
| Zoom to selection zoomed the camera to the origin of the 3D space. This bug is fixed. Zoom to selection zooms to best fit the selected fixtures in the 3D window.                                                                                                             |
| The beam of a fixture disappeared with shaking gobos in High Shadow Fancy render quality. This bug is fixed. Beams of fixtures do not disappear any longer if a gobo is shaking in High Shadow Fancy quality.                                                                 |
| Zooming the camera with the two-finger zoom multitouch gesture was not transferred to other stations on the network. This bug is fixed. Zooming the camera with the two-finger multitouch gesture is now synchronized to other stations on the network.                       |
| Parent geometries were not rendered in some cases while their children were. This bug is fixed. If a child is rendered, its parents will also be rendered.                                                                                                                    |
| Beams of multi-beam fixtures could have an offset between the beam geometry and the origin of the actual beam in some cases. This bug is fixed. Beams rendered with "Multi LED Dynamic Gobo" do not have an offset regarding their position any longer.                       |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When moving a recipe line while being in a session, the recipe line got lost on all other stations. This bug is fixed. Moving objects while being in a session should not result in loose of data anymore.                                                                                                                                                                     |
| When entering a negative timecode slot offset for a timecode show, each value needed to be set negative, e.g., -1m -30s to get a negative offset of 1m30s. This bug is fixed. To enter a negative timecode slot offset it is enough to enter the offset as one negative time, e.g., -1m30s.                                                                                    |
| When knocking in a new value for an attribute that playbacks a preset within a sequence knocked also the preset reference into the programmer. This bug is fixed. It should not be possible anymore to store a preset reference with a hard value into a cue.                                                                                                                  |
| It was possible to knock in a preset reference when a cue was running with a preset, and only turning the encoder. This bug is fixed. Activating hard values does not knock in the preset reference from a running cue anymore.                                                                                                                                                |
| When overwriting an MAtricks pool object, the previous label was not respected. This bug is fixed. Store /Overwrite on a pool object keeps the previous label.                                                                                                                                                                                                                 |
| The content of Lua plugins was not transferred within the session when a new station joined, and the Lua plugin was created on a station of the session. This bug is fixed. Lua plugins that are not imported into the software are now transferred correctly within the session.                                                                                              |
| Assigning objects to recipes did not work when specifying 2 sequences by using a +, e.g., Assign Group 1 At Sequence 6 + 9 Cue 1 Part 0.1. This bug is fixed. Defining a range by using + works now also with sequences and cues.                                                                                                                                              |
| Executing the help command with a search term that has no help topic specified did nothing. This bug is now fixed. Executing Help with any search term opens now always the help pop-up. In case of search terms that are not connected to specific topics, the help will search for the term within all topics.                                                               |
| It was possible to delete devices in the output configuration if they were part of the session. This bug is fixed. Devices of the session cannot be deleted anymore in the output configuration.                                                                                                                                                                               |
| Whenever the **If not empty** setting in the store settings was set to Merge or Overwrite, the preset mode was ignored when storing a preset. This bug is fixed. Presets are now stored with the correct mode no matter to which value the If not empty setting of the store settings is set to.                                                                               |
| Performing a store overwrite to an MAtricks pool object did also reset the name of the MAtricks pool object. This bug is fixed. Store overwrite to MAtricks pool objects does not overwrite the name of it anymore.                                                                                                                                                            |
| The command line content was kept when loading a different show. This bug is fixed. Loading a new show clears now the command line, too.                                                                                                                                                                                                                                       |
| Store /Merge could cause that following blocked values would be displayed in the sequence sheet in the wrong color. This bug is fixed. The sequence sheet in track sheet mode displays now values in the correct color after a Store /Merge operation.                                                                                                                         |
| Opening a drop-down within the store settings overlay removed **Store** as a keyword from the command line. This bug is fixed. **Store** is kept in the command line when opening a drop-down in the store settings overlay.                                                                                                                                                   |
| Switching off multiple executors on different pages did not work. This bug is fixed. Off Page Thru.Thru switches off now all assigned objects on all pages.                                                                                                                                                                                                                    |
| The handle assignments of executors could be restored to the default of the used executor configuration when assigning an appearance to a page. This bug is fixed. Assigning an appearance to a page should not change the executor handle assignment anymore.                                                                                                                 |
| Moving pages could corrupt fixed executors in a way that they could not be deleted or moved anymore. This bug is fixed. Moving pages does not corrupt executors anymore.                                                                                                                                                                                                       |
| When activating a value for an attribute, other layers could be knocked in, if the attribute had values run by a cue on other layers. This bug is fixed. Attribute values of layers that are played back by a sequence will now be knocked in and automatically deactivated when the attribute will be activated by changing the value of only one layer.                      |
| It was possible to rename the ShowData object. This bug is fixed. It is not allowed anymore to rename the ShowData object. Show files where this has happened will be fixed automatically when loading them in v1.7 or later.                                                                                                                                                  |
| The software could crash when attempting to open pop-ups by using Lua commands, e.g., Lua "Cmd('label group 1')". This bug is fixed. Pop-ups cannot be opened anymore by using non UI-threads.                                                                                                                                                                                 |
| The Lua function SetProgPhaser() did not accept negative values for acceleration and deceleration. This bug is fixed. Negative values within the Lua function SetProgPhaser are now handled correctly.                                                                                                                                                                         |
| Knockout as value did not work. This bug is fixed. For example, At Relative Knockout now switches off the relative values for the selected fixtures.                                                                                                                                                                                                                           |
| When a station joined a session with a higher master priority while the station and the session had the same show file loaded, already running timecode generators stopped. This bug is fixed. Timecode generators keep on running when a station with a higher master priority will join into the session.                                                                    |
| When updating the preset data for the fixture that was used to store a universal preset, the new data was used only globally for the fixtures of the same fixture type. All other fixtures still used the former universal data. This bug is fixed. Updating a universal preset applies now the new data to all fixtures that can use the universal preset.                    |
| The software crashed when invoking the Lua GetFader method outside of main coroutine in a plugin. This crash is fixed. The software does not crash anymore when calling the GetFader method.                                                                                                                                                                                   |
| It was not possible to permanently assign the Call function to buttons of executors which had plugins assigned. This bug is fixed. Plugins on executors are now able to get the Call function assigned to the executor button.                                                                                                                                                 |
| Cook /Merge of cues overwrote manually stored data of the cue. This bug is fixed. Manual data of a cue is now preserved when cooking the recipe of a cue again.                                                                                                                                                                                                                |
| Cloning fixtures within sequences that had preset links and hard individual timings lost the individual timing. This bug is fixed. Cloning within sequences clones now also individual timing correctly.                                                                                                                                                                       |
| Canceling the pop-up input of a macro executed the rest of the macro. This bug is fixed. Macros are switched off when canceling an input pop-up that was created by the macro.                                                                                                                                                                                                 |
| It was not possible to use LearnSpeed that was assigned to different executors simultaneously. This bug is fixed. Pressing several executor keys that have LearnSpeed assigned at the same time learn now the speed for their assigned object.                                                                                                                                 |
| Cloning did not respect the currently selected world. This bug is fixed. When being in a world, the clone function now only clones the fixtures that are part of the world.                                                                                                                                                                                                    |
| Exporting and importing a timecode show that had events of different cues assigned where the cue names are identical assigned always the first cue with this name to the corresponding timecode events. This bug is fixed. Importing a timecode show that has identical cue names for different cues assigned to different timecode events are now routed to the correct cues. |
| The corresponding keys (Channel or Fixture) did not lit up for the selected command line default or when MAtricks (Set) where active. This bug is fixed. The corresponding keys for the command line default and active MAtricks are now highlighted.                                                                                                                          |
| Using a global or universal preset for special values updated only the special values in the fixtures that held the global or universal values. This bug is fixed. Updating a global or universal preset updates the special values of all fixtures that use these presets for special values.                                                                                 |
| Storing a cue using the options/CueOnly and /Remove did not remove the values in the target cue and respecting cue only. This bug is fixed. Store /Remove /CueOnly now works as expected.                                                                                                                                                                                      |
| Deleting a data pool could not be oopsed. This bug is fixed. It is now possible to oops the deleting of data pools.                                                                                                                                                                                                                                                            |
| Blocking a cue could change the tracked values of attributes, too. This bug is fixed. When blocking a cue, the tracked values are only blocked, and not changed and blocked anymore.                                                                                                                                                                                           |
| It was not possible to execute the keyword of the current command line default, for example, Fixture. This bug is fixed. Executing, for example, Fixture, while Fixture is already the command line default now executes the command.                                                                                                                                          |
| Locked cues could change their content when using Bloc/Unblock or Store/Update. This bug is fixed. Locked sequences and cues cannot be modified anymore.                                                                                                                                                                                                                       |
| Importing the same plugin to the same plugin pool object, and not having made any changes to the plugin pool object itself, prevented the plugin to be executed again. This bug is fixed. Importing a plugin again does not block the execution of the plugin anymore.                                                                                                         |
| The visual progress of progress bars, for example, called by plugins was always one step behind. This bug is fixed. The visual progress of progress bars is now more intuitive.                                                                                                                                                                                                |
| The slot of a wheel was reset to the beginning of the corresponding channel function if the encoder was spun after a timeout when it was in physical readout. This bug is fixed. The value of an encoder controlling a wheel will not jump when spinning the encoder after a timeout.                                                                                          |
| Parking and unparking of unpatched DMX channels when using the DmxAddress keyword did not work. This bug is fixed. Parking and unparking of DMX channels now works with the DmxAddress keyword and the DmxUniverse keyword.                                                                                                                                                    |
| Tapping a user pool object, that had the default name, did not log in the user. This bug is fixed. Users with default names can log in by only tapping their user pool object.                                                                                                                                                                                                 |
| Copying a set of values from one fixture to another did not copy the active values that were the same as the default value of the attribute. This bug is fixed. Active, but unchanged values of attributes are now also copied from fixture to fixture.                                                                                                                        |
| Edit on empty pool object worked differently depending on the object type: Some pools created only a new object, while other pools created the object and opened their editor. This bug is fixed. Editing an empty pool object now creates the pool object                                                                                                                     |
| Creating a new user did not assign a user profile to the user. This bug is fixed. When creating a new user, the default user profile will be assigned to it.                                                                                                                                                                                                                   |
| The stage calibration put the fixtures always below the stage. This bug is fixed. The stage calibration now positions the fixtures in a better way.                                                                                                                                                                                                                            |
| The result when entering a formula for a value within the calculator of any MAtricks property was not correct. This bug is fixed. Working with formulas within the MAtricks calculators now works correctly.                                                                                                                                                                   |
| Storing color presets using fixtures that use more emitters than just RGB, could store the presets with only converted RGB values. This bug is fixed. Color presets are stored with the values that were active when storing the preset.                                                                                                                                       |

### Connections

| Description                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When connecting the MA viz-key via a USB hub to a computer it was not always recognized by the grandMA3 software. This bug is fixed. The MA viz-key should now always be detected when connecting it via a USB hub.                                                                                                                                     |
| It could happen that an Art-Net node was added as several nodes within the nodes tab in the Art-Net section of the DMX Protocols menu. This bug is fixed. A physical Art-Node will now be added as one single node within the nodes tab.                                                                                                                |
| Getting input to a dedicated timecode slot via MIDI timecode could let other timecode slots also shortly run for the time of their configured after roll time. This bug is fixed. Inputting MIDI timecode should only trigger the defined timecode slot anymore.                                                                                        |
| The software could crash when MIDI packets were received that are bigger than the allowed packet length. This bug is fixed. MIDI packets that exceed the maximum packet size are now ignored.                                                                                                                                                           |
| An input MIDI control change value of 127 to a master resulted in a master value of 99.9999940359. This bug is fixed. MIDI control change values of 127 are now correctly interpreted as 100%.                                                                                                                                                          |
| When switching off and on a command wing that was connected to grandMA3 onPC running on macOS the output configuration was reset to default. This bug is fixed. Restarting a command wing that is connected to a macOS computer preserves now the output configuration the user has set up manually for the command wing.                               |
| The software could crash when web remote connections were established and closed several times right after each other. This bug is fixed. Closing and establishing new web remote connections several times should not crash the software anymore.                                                                                                      |
| The grandMA3 software expected that a received MIDI Note On message will always have a MIDI Note Off received later. This bug is fixed. It is now possible to send several times the same MIDI Note On message and the corresponding Remote entry will always be triggered again.                                                                       |
| The software could crash when changing settings of RDM fixtures while having an RDM Device window open and the RDM tab within the Live Patch menu. This bug is fixed. The RDM Devices Window and the RDM-tab within the Live Patch menu can now be open at the same time and changes can be made to RDM fixtures without crashing the software anymore. |
| Executing macros via the web remote executed the macros using the user profile of the user that was logged in on the station the web remote was connected to. This bug is fixed. Executing macros via the web remote executes the macros using the user profile of the user of the web remote.                                                          |
| Flashing the TempFader of a DMX remote did not work. This bug is fixed. TempFader can now be flashed using DMX remotes.                                                                                                                                                                                                                                 |
| When triggering Load or Goto for a sequence using any remote, the corresponding pop-up did not appear. This bug is fixed. Load or Goto triggered by a remote now opens the corresponding pop-up.                                                                                                                                                        |

### Patch

| Description                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When patching new fixtures with two or more breaks and changing the number of devices in the Insert New Fixture dialog, the suggested DMX addresses would cause collisions in the new fixtures. This bug is fixed. When changing the number of multi-break fixtures within the Insert New Fixture dialog DMX addresses without a collision across all breaks are now suggested. |
| The universal fixture was exported to an MVR. This bug is fixed. The universal fixture is no longer exported to an MVR.                                                                                                                                                                                                                                                         |
| Exchanging the fixture type of fixtures could change global data of presets into selective data. This bug is improved. Exchanging fixture types should not create unnecessary selective preset data anymore.                                                                                                                                                                    |
| Moving fixtures inside the patch caused blank fixture sheets and fixtures could not be selected anymore. This bug is fixed. Moving fixtures inside the patch does not cause any issues anymore.                                                                                                                                                                                 |
| When changing the sorting of the columns in the patch menu, after leaving and entering the patch again, the sorting was reset. This bug is fixed. The column sorting within the patch menu is now remembered when leaving the patch menu.                                                                                                                                       |
| The number in the Used column was not correct in all tabs of the Split View mode. This bug is fixed. The Split View mode displays now the correct number in the Used column in all tabs.                                                                                                                                                                                        |

### Phaser

| Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When activating solo while being in a world, solo was applied to all fixtures of the show. This bug is fixed. Solo is now limited to the fixtures of the currently selected world.                                         |
| A phaser could still run after stomping it and updating the cue. This bug is fixed. Updating a cue with stomped attributes should not let run the phaser any longer.                                                       |
| Double tapping a preset did not execute stomp with this preset when the program time was enabled. This bug is fixed. Executing stomp using a preset and enabled program time now stomps within the specified program time. |

### Playback

| Description                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When having a label pop-up open it was not possible to playback a sequence by using Go+ \[large], Go- \[large], or Pause \[large]. This bug is fixed. The functionality of the large playback buttons is now still given when having pop-ups open.                                                                                           |
| Moving the executor fader of a sequence up, while having a flash button pressed for the sequence did not output the sequence accordingly to the fader after releasing the flash. This bug is fixed. The sequence output follows now the fader after releasing a flash when the fader was moved while having flash active.                    |
| The fade time of the off cue was ignored when the sequence was played back with HTP priority. This bug is fixed. HTP sequences will use the OffCue fade time when they are switched off.                                                                                                                                                     |
| Active temp faders were set to 100% when devices joined or left the session. This bug is fixed. Temp faders remain on their current level when the session is re-initialized.                                                                                                                                                                |
| Press and hold Flash, then press and hold Swop, and then releasing Flash as assigned button functions on an executor did not execute the Swop functionality. This bug is fixed. Starting a playback function first, then a second playback function, and after that releasing the first playback function, now executes the second function. |
| When starting a playback it could happen that other playbacks were not switched off by the Off when Overridden function when they should be. This bug is fixed. Off when Overriden switches now playbacks off correctly.                                                                                                                     |

### Windows

| Description                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Settings in the Edit-tab of the assign menu were always enabled when entering the Edit-tab. This bug is fixed. The state of the Settings-option is now always remembered across all locations.                                                                                                             |
| The list of show files in the backup menu always scrolled down when switching to a different drive. This bug is fixed. The backup menu does not scroll down the list of show files anymore unless the user scrolls it manually.                                                                                |
| The list of installed versions within the drive selector, e.g., in the backup menu, could be mixed in grandMA3 onPC running on macOS. This bug is fixed. In grandMA3 onPC running on macOS the order of installed versions within the drive selector is now in descending order, as on the other systems, too. |
| When preset objects were grayed out, scribbles remained lit up. This bug is fixed. When presets are now grayed out, scribbles on the presets are also grayed out.                                                                                                                                              |
| When tapping into the empty area of a fixture sheet (also when it was set to channel mode), fixtures were selected. This bug is fixed. Tapping into the empty areas of the fixture will not select fixtures anymore.                                                                                           |
| The EULA and Release Notes splash screens could be moved around. This bug is fixed. Splash screens are fixed in their position and size.                                                                                                                                                                       |
| Moving universes could hide fixtures within layout windows. This bug is fixed. Moving universes does not hide fixtures anymore.                                                                                                                                                                                |
| Help + tapping an element on one of the small screens opened the Help overlay on the small screens. This bug is fixed. Opening the help overlay for an element of the small screens opens the pop-up now on screen 1 in order to have it in a readable size.                                                   |

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

Software update via network to onPC stations requires confirmation during the install process at the destination system.

Deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over automatically. If all stations have the same priority, the station with the longest Online Time becomes the GlobalMaster for all stations.

Loading show files from previous versions deletes the programmer content.

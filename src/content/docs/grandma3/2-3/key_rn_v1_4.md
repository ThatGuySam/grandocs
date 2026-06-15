---
title: "Release Notes 1.4"
description: "Bug Fix Version 1.4.2.1"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/key_rn_v1_4.html"
scrapedAt: "2026-06-15T18:26:00.685Z"
pagefind: false
---
- [Bug Fix Version 1.4.2.1](/grandma3/2-3/key_rn_v1_4/#offline-content)

  - [Other Enhancements](/grandma3/2-3/key_rn_v1_4/#h2_1198082799)
  - [Fixed Bugs](/grandma3/2-3/key_rn_v1_4/#h2__1624482491)

- [grandMA3 Release Version 1.4.0.2](/grandma3/2-3/key_rn_v1_4/#h2_30567551)

  - [Features](/grandma3/2-3/key_rn_v1_4/#h2_727740091)

    - [Selection](/grandma3/2-3/key_rn_v1_4/#h3__786962412)

      - [​](/grandma3/2-3/key_rn_v1_4/#Selection)[Recursive Selection of Fixtures](/grandma3/2-3/key_rn_v1_4/#h3_195672305)
      - [General Selection Syntax](/grandma3/2-3/key_rn_v1_4/#h3__2047748697)
      - [Selection of Groups](/grandma3/2-3/key_rn_v1_4/#h3_1092467461)

    - [MAtricks](/grandma3/2-3/key_rn_v1_4/#h3__802038404)

    - [Phaser Editor](/grandma3/2-3/key_rn_v1_4/#h3__1379228610)

    - [Recipes](/grandma3/2-3/key_rn_v1_4/#h3__808614509)

    - [MA grid interpolation concept (MAgic)](/grandma3/2-3/key_rn_v1_4/#h3__1074724244)

    - [3D Window](/grandma3/2-3/key_rn_v1_4/#h3__673189665)

    - [PosiStageNet (PSN)](/grandma3/2-3/key_rn_v1_4/#h3__1538375422)

    - [Color Picker](/grandma3/2-3/key_rn_v1_4/#h3_1475112279)

    - [Remote Device Management (RDM)](/grandma3/2-3/key_rn_v1_4/#h3_1861064977)

    - [Remote Human Interface Device Control (Remote HID)](/grandma3/2-3/key_rn_v1_4/#h3_1141334809)

    - [Copy](/grandma3/2-3/key_rn_v1_4/#h3__911352779)

      - [Copy of Cues](/grandma3/2-3/key_rn_v1_4/#h3_937929976)
      - [Copy of Ranges](/grandma3/2-3/key_rn_v1_4/#h3__1241955370)
      - [Copy Pop-Up](/grandma3/2-3/key_rn_v1_4/#h3__1677612958)

    - [Sequence and Sequence Sheet](/grandma3/2-3/key_rn_v1_4/#h3_33384368)

    - [Timecode and Timecode Editor](/grandma3/2-3/key_rn_v1_4/#h3_519986610)

  - [Other Enhancements](/grandma3/2-3/key_rn_v1_4/#h2_1460263093)

  - [What's Changed](/grandma3/2-3/key_rn_v1_4/#h2_563643534)

  - [Fixed Bugs](/grandma3/2-3/key_rn_v1_4/#h2__1429873276)

- [Appendix](/grandma3/2-3/key_rn_v1_4/#h2__1835053169)

- [Known Limitations](/grandma3/2-3/key_rn_v1_4/#h2__1852571500)

---

Bug Fix Version 1.4.2.1

## []()Other Enhancements

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Layout window has the new property Use RightClick To Edit. When it is enabled, a right-click on a layout element or the 2 finger edit gesture edits the assigned object of the layout element. When it is off, a right-click or the 2 finger edit gesture into a layout will act like a normal tap or like a left-click.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The 2D grid perspective selection in the 3D window has been improved. The arrangement of fixtures in the grid should now be more precise in most use cases.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Installing grandMA3 onPC on Windows computers now only adds the general grandMA3 onPC shortcut on the desktop. This shortcut opens the last installed grandMA3 onPC version. Each version folder in the start menu contains a shortcut to its specific version. The start menu does not have the general shortcut anymore.

---

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Loading show files from v1.3 could crash onPC stations when opening a display that has a 3D window open. This bug is fixed. grandMA3 onPC stations should not crash anymore when opening displays with 3D windows.  |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The software could crash after selecting a fixture, copying the current selection to the other selection, and then selecting a different fixture in the other selection. This bug is fixed. Selecting fixtures after copying an existing selection does not crash the software anymore. |
| Assigning a group onto an executor did not work on grandMA3 onPC Windows stations. This bug is fixed. Groups can now be assigned to executors again.                                                                                                                                    |
| The software could crash when selecting a fixture that was added in the patch before an empty fixture line. This bug is fixed. The software does not crash anymore when selecting fixtures while having empty fixture lines in the patch.                                               |
| The software could crash when selecting all fixtures while having several color picker windows open. This bug is fixed. The software does not crash anymore when selecting all fixtures of a show and having multiple color picker windows open.                                        |
| The keyboard shortcuts were not disabled correctly when using calculators. This bug is fixed. Keyboard shortcuts are disabled in calculators. The only shortcut that is still possible to use is pressing T to enter Thru into the calculator.                                          |

### Connections

| Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The consoles could freeze when the user unplugged and replugged a USB mouse repeatedly. This bug is fixed. Unplugging and replugging a USB device should not freeze.                                                   |
| When rebooting a console while being in standalone mode, did not ouptut any DMX after the reboot. This bug is fixed. A console can now again output DMX immediately after rebooting, also if it is in standalone mode. |

### Patch

| Description                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changing the default, highlight, or lowlight values of fixture types in the live patch while being in a session, did not apply the changed values to the output immediately. This bug is fixed. Modified default, highlight, and lowlight values of fixture types are output immediately when doing the modification in the live patch. |
| Stage dimensions were not converted correctly from show files saved in versions prior v1.4. This bug is fixed. When loading a show file from an older software version the stage dimensions are converted correctly.                                                                                                                    |
| The software could crash when adding a new fixture to the show in the patch menu, while the patch menu had a filter active. This bug is fixed. Active filters in the patch menu do not crash the software anymore when adding new fixtures to the show.                                                                                 |

### Playback

| Description                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When calling a relative preset after an absolute preset into the programmer, the programmer did only play back the relative preset. This bug is fixed. Combinations of relative preset and absolute presets are now played back in sequences and in the progammer. |
| When fading from one cue to another cue, identical values between both cues could flicker slightly on the output. This bug is fixed. Fading between two cues now keeps the DMX output stable when the values do not change in these two cues.                      |

### Windows

| Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The default views displayed All pool 25, while the import predefined phaser macro imports the phaser presets into All pool 21. This bug is fixed. The default views in new shows display now All pool 21, when an All pool is displayed. |
| The default views did not have a mode in the color picker windows selected. This bug is fixed. The default views in new shows have now the CIE mode selected in color picker windows.                                                    |
| It was not possible to edit a keyboard shortcut definition by right clicking it. This bug is fixed. Keyboard shortcuts can now be edited again by right clicking them in Menu - Preferences and Timings - Keyboard Shortcuts.            |

---

 

## []()grandMA3 Release Version 1.4.0.2

## []()Features

The latest release of grandMA3 version 1.4.0.2 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Selection

### []()Recursive Selection of Fixtures

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

For a fast selection of all subfixtures (recursive selection), an additional dot (.) can be added to the selection syntax of the main fixture.

To select fixture 1 with all its subfixtures, type:

User name\[Fixture]> Fixture 1.

To select all subfixtures of fixtures 1 thru 3, type:

User name\[Fixture]> Fixture 1 Thru 3.

The dot selects all subfixtures downwards from the specified level. Therefore, it is also possible to select, e.g., only the pixels of an AlienPix. To do so, type:

User name\[Fixture]> Fixture 1.1.

To select all fixtures and subfixtures, type: 

User name\[Fixture]> Fixture Thru.

To still select all parents of all fixures, type: 

User name\[Fixture]> Fixture Thru

 

### []()General Selection Syntax

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

To gain a faster and more logical way of selecting fixtures in the hierarchical structure, the general syntax has changed:\
The main rules are:

- The dot (.) ends the selection on the current level and steps then one level down.
  - Instead of using the dot as a separator, dedicated keywords for the objects in the next level of the hierarchy can be used (e.g. Page 1 Executor 201).
- To restart at the top level of the hierarchy within one command, the starting keyword (e.g., Fixture) has to be entered again.

To select the second subfixture of fixture 5, type:

User name\[Fixture]> Fixture 5.2

To select only subfixtures 2 to 4 of fixtures 1 to 3, type:

User name\[Fixture]> Fixture 1 Thru 3.2 Thru 4

In this case, the first rule from above can be observed: First, all fixtures on the top level have to be selected (Fixture 1 Thru 3), and after the dot, the subfixtures are then selected (2 Thru 4).

To select subfixtures 8 to 10 of fixture 1, all subfixtures of fixture 2, and subfixtures 1 to 5 of fixture 3, type:

User name\[Fixture]> Fixture 1.8 Thru 10  Fixture 2. Thru  Fixture 3.1 Thru 5

In this example the second rule from above is applied: As .8 in "Fixture 1.8" steps down to the subfixture level, "Fixture 2" needs to be entered to restart at the top level with fixture 2. If "Fixture 2" would not be entered, the second subfixture of subfixtures 8 to 10 would be selected.\
This selection syntax is a replacement for doing a lasso selection in the fixture sheet starting at fixture 1.8 and ending it at fixture 3.5 excluding the parent fixtures.

To select all subfixtures on the first subfixture level for all fixtures, type: 

User name\[Fixture]> Fixture Thru.Thru

**Important:**\
These syntax rules not only apply to fixtures and all their levels of subfixtures, but furthermore apply to all types of objects that use a hierarchy structure, e.g. pages with executors, macro with macro lines, and many more.

To delete executor 201 on all pages, type:

User name\[Fixture]> Delete Page Thru.201

or type:

User name\[Fixture]> Delete Page Thru Executor 201

This second example describes the additional rule of the first rule from above: Instead of using Page x.y, the Executor keyword is used to address the executors.

### []()Selection of Groups

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Groups are now by default called differently into the selection:

- When fixtures are stored in groups with only coordinates along the X axis and have no gaps along this axis, the grid cursor will be set to the next grid position after calling this group. 
- As soon as the coordinates are different across two or all three axes, the grid cursor will stay at its current position when calling such a group.

**Hint:**\
This behavior can be changed in the EditOption menu of each group via the option Move Grid Cursor

In all cases, the fixtures are set relative to the selection grid starting at the current position of the grid cursor.

The new option Auto Remove X Gaps in the title bar of the selection grid allows to suppress existing gaps in the fixture selection. Gaps on the X axis can only be removed as long as no other fixture is placed on the same X coordinate but with a different Y or Z coordinate.

A group, for example, that has fixtures stored to the grid X positions 0, 2, and 4, will recall the fixtures to X 0, 1, and 2, as soon as this option is enabled.\
This option can also be enabled after calling a group or selecting fixtures.

It is also possible to remove the gaps via the command line on all three axes.\
To remove the gaps on the X axis only, type:

User name\[Fixture]> Remove Grid \*

 

To remove the gaps on the Y axis only, type:

User name\[Fixture]> Remove Grid / \*

To remove the gaps on the Z axis only, type:

User name\[Fixture]> Remove Grid / / \*

All these possibilities to remove the gaps on one axis can also be combined. To remove the gaps on all three axes at the same time, type:

User name\[Fixture]> Remove Grid \* / \* / \*

**Hint:**\
Between each slash ( / ) and asterisks ( \* ) a space needs to be entered. 

---

### []()MAtricks

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The design of the MAtricks window has changed significantly for better workflow.

The main area of the MAtricks window is now visually separated into 3 sections. One section for each axis. Each axis section has its own background color: X: red; Y: blue; Z: green.\
Each section can be individually displayed or hidden by the user. Therefore, the toolbar on the left side provides toggle buttons for X, Y, and Z.\
Within each section, different properties are available, but each section has the same kind of properties for its axis. E.g., Each axis section has properties for blocks, wings, shift, and so on. These kinds of properties are logically grouped together. These groups are called Grid, Layers, and Shuffle. With the help of the title bar buttons Grid, Layers, and Shuffle, these groups can also be displayed or hidden.\
As soon as a property is active, the background of the corresponding button of the section and the group will turn green.

The groups contain these properties:

- Grid: Single, Block, Group, Wings, and Width.
- Layers: Fade From/To, Delay From/To, Speed From/To, and Phase From/To. Learn more about these properties in the [Recipes](/grandma3/2-3/key_rn_v1_4/#Recipes).
- Shuffle: Shuffle, and Shift.

 

At the bottom are additional buttons displayed or hidden, depending on the state of Grid, and Shuffle:

- When Grid is enabled, additional buttons for invert are displayed. Read more about these options later in this paragraph.
- When Shuffle is enabled, additional buttons like Copy Values, Copy Sel, ActiveSel, Shuffle, and ShuffleMode are displayed.

The value buttons allow in addition to the normal value input a new style of modifying the value: Tap the value area, hold and slide in order to change the value. Depending on the direction when starting to slide, the value will change when dragging with the finger left or right.

It is now also possible to combine several MAtricks from MAtricks pool to the MAtricks of the programmer.

The MAtricks editor now has the same look and feel as the MAtricks window.

 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Invert options has been added to the MAtricks. The invert options allow an easier and more advanced manipulating of values. With invert, it is possible to define on which axis in the selection grid the values should be inverted when turning the encoder or applying a range of values. The fixtures that will be inverted, are displayed in green in the fixture sheet (font color), 3D (body color), and layout window (border color). Furthermore, it is also possible to limit the value invert to pan and/or tilt:

- InvertStyle: Defines if Invert shall be applied to Pan, Tilt, P+T (Pan and Tilt), or to All attributes.
- InvertX: Inverts the overall invert of the current individual inverts per MAtrick property on the X axis.
- InvertY: Inverts the overall invert of the current individual inverts per MAtrick property on the Y axis.
- InvertZ: Inverts the overall invert of the current individual inverts per MAtrick property on the Z axis.

In addition, all grid related MAtricks properties can also be inverted. Therefore, these properties have a small button with the invert symbol. These invert options allow an alternating invert.

When using Align in combination with Invert the alignment is still based on the arrangement of fixtures inside selection grid, however the aligned values will be inverted.  

**Restriction:**\
At the moment Align only works with the X axis.

---

 

### []()Phaser Editor

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The Phaser Editor has a new Layout mode called Step. To select it, tap Layout in the title bar of the Phaser Editor repeatedly, until the value is set to Step.

In the Step mode, a grid displays the values of all current steps currently running in the programmer. Each row displays a step, and each column displays the data of an attribute, like in the fixture sheet.

In addition, the phaser editor has now additional buttons in the tool bar on the left side:

- Form: Allows to define a form for the current phaser. Available forms are listed in the tool bar on the right side. They are: Rectangle, Sawtooth, Sine and Cosine. These forms modify the values of the transition layer, accel layer and, decel layer.

- Speed: Allows to change the speed of the current phaser. In the toolbar on the right side several possible options are available:

  - Loop: Multiplies the current speed by the number of steps.
  - Fixture: Divides the current speed by the number of fixtures you have selected.
  - x2 - x32: Multiplies the current speed by the chosen value.
  - /2 - /32: Divides the current speed by the chosen value.

The symbol of the phase tool has also changed, it does not display the sinus symbol anymore, but a phase symbol.

The encoder bar offers now additional Link Encoder settings when having a phaser layer selected. The existing At-Filter value of Link Phaser is still available.\
The new values are:

- Single: Only the values of the touched attribute in the selected phaser layer will be changed.
- Feature: The values of all attributes in the very same feature will be changed together when changing the value for one attribute.

A new button Phaser has been added to the encoder on the top right side. Tapping this button opens a temporary overlay of the phaser editor.

Each layer of phaser related layers in the encoder bar display now only encoders for the selected layer. For example, the transition layer displays now only an encoder for transition, and not other additional layers anymore.\
When setting focus into the 2D area of the phaser editor, the encoder bar switches to the phaser editor encoder bar with position feature group. The encoders are rearranged slightly, and the fourth encoder in the encoder bar scrolls now through the existing steps.\
When setting the focus into the 1D area of the phaser editor, the encoder bar changes to the At-Filter encoder bar. This encoder bar manipulates the phaser values for all attributes that are active in the At-Filter at that time. In addition, all encoders are labeled with "At:" in front of the encoder label.

The selected Programming Layer is displayed in the title bar for additional guidance.

### []()Recipes

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Recipes allow a fast workflow in adapting a show to different setups, and allow you to build your intention before you know your setup. As the setup changes you can use Recipes to recook the data in your presets and cues. Recipes contain the ingredients fixture selection (groups), values (presets), MAtricks, fade, delay, speed, and phase. Recipes can be added to presets, cue parts, and programmer parts. Each cue part and preset can contain several recipes. When cooking, the recipes will be read in the order. 

Cooking is the process of reading the ingredients and writing the data to the cue, preset, or programmer. When all ingredients are updated to the current setup, the recipes can be cooked, which adjusts the cue parts and presets to the changed setup. The data written by cooking is marked as cooked data and can later be removed with the cook remove command. The cook remove command will remove any values that are marked as cooked data regardless of recipe ingredients.

To create a recipe for a cue part, open the Sequence sheet, tap MA in the left corner of the title bar, tap Mask, and enable Show Recipes.\
At the bottom of the sequence sheet, the recipe area will be displayed. To enlarge the recipe area, tap, hold and drag the divider between the cue area and the recipe area upwards. When the recipe area has reached a desired size, release your finger.\
When selecting more than one cue part by doing a lasso selection, the recipes of the last selected cue part will be displayed.

To create a recipe in a preset, open the EditOptions-dialog for the desired preset. To do so, tap, hold and move your finger outside the preset in the preset pool in order to open the swipey. While keeping the finger pressed move it to the EditOption button and release then your finger.

To create a recipe in the programmer, open a Programmer Parts window, and unfold the programmer part you want to create the recipe into.

In all 3 cases, you can now add a new recipe by tapping and holding on New Recipe.\
In the newly created recipe, the ingredients can also be added by tap and hold of the corresponding cell. A drop-down opens and offers all possible types for the ingredient.\
Another way to add the ingredients is to assign them to the corresponding cell. To do so, press Assign, tap the desired ingredient, e.g. a group in the group pool, and tap then the cell in the recipe.

**Hint:**\
When a new recipe is added it will automatically capture the values set inside your MAtricks window.

After finishing the recipe, the cue or preset can be cooked by tapping Cook. The values will be applied to the cue data, preset data, and/or the programmer for the selected group with the desired modifiers (fade, delay, MAtricks, speed, and phase).

 

There are three cooking modes:

- Merge: Remove cooked data and add new data based on the recipe ingredients, but do not replace non-cooked data.
- Overwrite: Remove cooked data and add new data based on the recipe ingredients, and replace non-cooked data.
- Remove: Remove all cooked data from the destination object.

As recipe properties are changed the recipe will auto-cook using the merge mode as long as a selection (groups) is assigned to the recipe. If no group is assigned to the recipe it will not auto-cook.

There are a couple of special ways you can use recipes with presets:

- If recipes in a preset do not contain a group, calling that preset will cook the ingredients to the programmer using your current selection. This only works when the preset object does not contain any values.
- A second approach is to make recipes in a preset with groups and values. Again, if this preset object does not contain any values, calling this preset will cook the recipes directly into your programmer and you will also see those recipe lines in your programmer parts window. Remember to use cook remove to remove the values from your preset. Using presets this way makes it easy for you to build cue parts with recipes because any recipes you have in your programmer parts window will be stored to the cue or preset destination. 

To cook any object without entering the editor, the keyword Cook can be used. To cook preset 1.1, type:

User name\[Fixture]> Cook Preset 1.1

Cook is located on the shortcut: MA + Update.

To remove cooked data from preset 1.1, type:

User name\[Fixture]> Cook Preset 1.1 /Remove

Presets and cue parts with recipes display an orange pot icon.

---

 

### []()MA grid interpolation concept (MAgic)

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

MAgic presets are presented as a special ingredient for recipes but can be used for much more. They are used to align and interpolate preset values across a dynamic selection of fixtures without storing values for each fixture of the range. It is enough to define the edge values for a fixture range and dynamically recall those edge values for different selections. For example, 2 fixtures with 0% and 100% dimmer intensity stored as a MAgic preset allow recalling the preset across an arbitrary number of fixtures, where the first and last fixture of the selection have 0% and 100% intensity, while the fixtures in between are nicely aligned across the range. Edge values are defined by simple grid positions and then interpolated across a larger selection grid of fixtures. 

To build a MAgic Preset, select the fixtures and apply the values that shall represent the edges. Now the values need to be marked as a MAgic preset. This can be done with the command **At MAgic**. 

**Hint:**\
The command **At MAgic** captures the current grid position of your selected fixtures. 

**Important:**\
Always select all the fixtures that will be used with **At MAgic**. 

Now the MAgic preset can be stored like any other preset. The green MAgic wizard hat icon on the preset indicates that the preset contains MAgic information.  

If you need to knock out values on the MAgic layer you can use the Off MAgic button or syntax with your selection. 

**Hint:**\
Use **At MAgic **and **Off MAgic** in combination with your At Filter to limit what attributes will get MAgic values.  

The At quick command overlay features 2 additional buttons At MAgic and Off MAgic.

In addition, a new layer called MAgic has been added to the layer toolbar. 

**Hint****s****:** \
Up to 5 points can be defined per X / Y / Z axis. For example,  you could define a Green, Orange, White, Orange, Green pattern across two axes to create a very cool look on stage.  

 

**Known Limitations****:** \
\- Storing an MAgic preset only works with selective data as you cannot define multiple points across universal or global fixtures.\
\- Calling an MAgic preset into the programmer will extract the data and it will not reference the preset. We recommend to use MAgic presets in combination with recipes to maintain referenceable data.  \
\- The MAgic layer will show you the grid positions captured for the value, but you cannot manually enter or edit these grid position values using the calculator. 

---

### []()3D Window

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

An option to decrease the render resolution of the 3D window was added to the 3D window settings. Decreasing the render resolution will increase the frames per second that are rendered. Find this in the tab "Quality". There are several options:

- Render Scale: this changes the resolution of the whole rendering in the 3D window continuously. 100% means that the 3D window is rendered with its native resolution. 0% means that the resolution of the 3D window is divided by 5 in width and height. Default: 100%
- Light Scale: this changes the resolution of the light rendering in the 3D window continuously. 100% means that the 3D window is rendered with its native resolution. 0% means that the resolution of the light in the 3D window is divided by 5 in width and height. Default: 100%
- Shadow\[Pix]: this changes the resolution of the rendered shadows. The higher this value is, the higher is the resolution of the shadows. This only affects the rendering in Beam Quality "Gobo Shadow", "High Shadow" and "High Shadow Fancy". Default: 128
- Snap: If "Snap" is enabled, the Render Scale and Light Scale are divided with integer values. The fader then indicates the scale (1/1 to 1/5).

Render Scale and Light Scale can be used in combination. Setting both to 1/2 means that the whole 3D window is rendered with half of its resolution, while the light is rendered with a quarter of its resolution.

 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The 3D window visualizes Blades now. The attributes Blade1-4A, Blade1-4B, Blade1-4Rot, and ShaperRot are visualized.

**Hint:**\
There is no special dialog to control the shapers yet.

 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Added the two-dimensional grid selection. This selection type is activated by default. To switch to the linearized selection tap Selection Mode in the title bar of the 3D window. The 2D grid selection offers two different modes, "Planar" and "Perspective". Using the lasso selection to select fixtures in the 3D window now adds them as a two-dimensional selection to the selection grid. In planar mode, the camera position does not affect the selection order. Only the real position of the fixtures is significant. In perspective mode, the orientation of the camera additionally influences the order of the selection in the selection grid. 

To select fixtures in the 3D window using the planar selection, draw a lasso starting with a horizontal or vertical mouse movement. The color of the lasso changes to green when selection is locked to planar mode. To select fixtures in perspective mode, draw a lasso starting with a diagonal mouse movement. The color of the lasso changes to cyan when the selection is locked to perspective mode.

The "Linearize" selection mode is indicated with a yellow lasso. In linearize mode the selection is linearized to only the X axis of the selection grid depending on which direction the lasso was created (top/bottom - left/right). 

**Hint:**\
The projection distortion of the camera of the 3D window may affect the position of the fixtures in the selection grid if the perspective selection is used. In order to prevent this, use a 2D camera in the 3D window.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The 3D window visualizes Iris now. The attributes Iris, IrisStrobe, IrisStrobeRandom, IrisPulseClose, and IrisPulseOpen are visualized.

 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The 3D window visualizes Strobe now. The attributes ShutterStrobe, ShutterStrobePulse, ShutterStrobePulseClose, ShutterStrobePulseOpen, ShutterStrobeRandom, ShutterStrobeRandom, ShutterStrobeRandomPulse, ShutterStrobeRandomPulseClose and ShutterStrobeRandomPulseOpen are visualized.

---

 

### []()PosiStageNet (PSN)

PosiStageNet data is now received by grandMA3 stations.

To open the PSN menu, go to Menu - In & Out - PSN.\
When a PSN source is available in the network, adding a new PSN System by tapping Insert new System is required.\
Depending on the type of transmitting the data, the user may have to make some settings first: In case of sending the PSN data to a multicast address, the user has to manually add the multicast IP of the PSN system. In most cases, this may be the IP 236.10.10.10.\
If the sender is transmitting the data via unicast to the selected interface in the PSN menu, the PSN system automatically detects the data.

For each PSN system that is received, the user can map each axis to a different axis and/or invert the incoming data per axis. To do so, tap and hold the cell of an axis or of an invert option. In the case of mapping, a drop-down opens to choose the target axis. Invert just toggles the cell between No (=empty cell) and Yes (= data will be inverted).

As soon as an axis is mapped or inverted, the individual trackers display their values according to the settings made by the user.

**Hint:**\
At moment the PSN data is only received and displayed by the grandMA3 system.

---

### []()Color Picker

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Improved the color picker and the color engine underneath. The color picker now offers the possibility to be used in Constant Brightness Mode. Enable the Constant Brightness mode by tapping Constant Brightness in the title bar of the color picker. Default: "Off"

If the constant brightness is disabled, the selected color is mixed with its maximum brightness, when the brightness fader is set to 100 %. In this case, the output intensity of the fixture is not kept constant, but changes with the color. If the constant brightness mode is enabled, the maximum overall brightness is limited to the brightness of the weakest emitter of the fixture. Changing the color in constant brightness mode does not change the output intensity of the fixture.

**Hint:**\
If the constant brightness mode is enabled while the brightness fader is currently in a position above the constant brightness color mixing range, the fader indicator turns red and displays ">100%".\
To ensure constant brightness color mixing, the fader needs to be moved to <= 100 %.

**Hint:**\
The color mixing and the constant brightness mode works the better, the more precise the emitter data of the fixture type is.

Tap RGB/HSB Space in the title bar of the color picker to switch the color space of the color picker. There are several options:

- Fixture Type: the color space is defined by the emitters of the respective fixture type.

* Plasa: Plasa Standard E1.54 for Color Communication in Entertainment Lighting.

- Rec. 2020: ITU-R Recommendation BT.2020 for UHDTV

* Rec 709: ITU-Recommendation BT.709 for HDTV

Except for the Fixture Type color space, the gamut of the selected color space is displayed in the CIE color picker with a white line. Colors outside of the selected color space are displayed shaded in the HSB color picker. Color mixing in the Fader tab and the HSB Color Picker depends on the color coordinates of the RGB primaries of the selected color space.

**Hint:**\
If a color is picked in the CIE Color picker that is outside of the gamut of the selected color space, the faders in the Fader tab will show values below 0% or above 100%.

The CIE Color Picker now displays the black body curve. The black body curve describes the equivalent color temperature range of a white light source.

 

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The color picker window now supports the encoder bar operation of its controls. To display the related encoder bar set the focus to the color picker window by tapping its title bar.

---

 

### []()Remote Device Management (RDM)

Remote Device Management is a protocol that allows bi-directional communication between a grandMA3 device and RDM-ready devices attached to it (= RDM-ready fixtures) over a standard DMX line. ANSI E1.20 - 2010 by PLASA specifies the RDM standard as an extension of the DMX 512-A protocol (ANSI E1.11).

Manual settings, such as adjusting the DMX starting address, are no longer needed. This is especially useful for devices installed in a remote area.

RDM is integrated in DMX without influencing the connections. The RDM data is transmitted via the standard XLR-poles – new DMX cables are not required. RDM-ready and conventional DMX devices can be operated in one DMX line. The RDM protocol sends its own data packages in the DMX512 data feed and does not influence conventional devices.

To be able to use RDM, RDM has to be enabled at two different spots:

1. Globally within the show file. To do so, tap RDM in Menu - Network Menu, or tap RDM in Menu - Live Patch - RDM.
2. Per XLR port that shall use RDM. Therefore, the mode of an XLR port in the Output Configuration needs to be set from Out to RDM.

In RDM mode, DMX data is only sent when there are changes of DMX values. In addition, every 500ms a refreshing packet will be sent so that DMX fixtures will not switch into DMX fail mode.\
This RDM output mode allows more time on the DMX line for RDM configuration.

The new RDM Devices window lists all devices that are discovered via RDM. It can be opened via the Add Window dialog and is located in the More-tab.\
The same list is also displayed in Menu - Live Patch - RDM.

When an RDM fixture is detected on an XLR port, a new node called RDMPort will be added to the RDM devices list. Within each RDMPort node, all fixtures that are detected via RDM on this physical XLR port are listed. An RDM port is labeled with the IP of the device and the XLR port of the device, e.g., 192.168.0.4 - XLR D. If the device is not available anymore with the port, the font color turns red.\
For each different fixture type, detected per RDM, a new node in the RDMFixtureTypes node in the RDM Devices window will be created. Each RDMFixtureType contains general information of the RDM fixtures, that is similar to all fixtures of the same product, e.g., the parameter description, or the available DMX personalities.

The grandMA3 creates RDMFixtureTypes by itself depending on these three parameters: ManufacturerID, DeviceModelID, and SoftwareID.\
As soon as the same physical type of lighting fixtures have different software IDs due to different firmware versions, different RDMFixtureTypes are created.

 

This first implementation of RDM supports these RDM parameters, which can be set by the user:

- IDENTIFY\_DEVICE, 0x1000
- DEVICE\_LABEL, 0x0082
- DMX\_PERSONALITY, 0x00E0
- DMX\_START\_ADDRESS, 0x00F0
- PAN\_INVERT, 0x0600
- TILT\_INVERT, 0x0601
- DEVICE\_LABEL 0x0082
- DISPLAY\_INVERT 0x0500
- DISPLAY\_LEVEL 0x0501
- RESET\_DEVICE 0x1001
- FACTORY\_DEFAULTS 0x0090
- LAMP\_STATE 0x0403

Only the cells of properties that an RDM fixture provides as set-able can be edited in the RDM devices window.

In grandMA3 the RDM communication follows this process:

1. Discovery for new RDM fixtures.

   1. Check if detected fixtures are still available.
   2. Check for new RDM fixtures.

2. Get parameter and sensor data.

3. 1s Pause

4. Start again at 1.

Parameters that are not changing during the runtime of a fixture, e.g., Device Info, are only pulled via RDM once when creating the corresponding RDMFixtureType. All other parameters and sensors are pulled every time in step 2.\
As soon as an RDM fixture is not available for 3 discoveries in a row, it will be displayed in red in the list of RDM fixtures.

It is possible to match an RDM fixture with a fixture of the grandMA3 patch. To do so, edit the fixture cell of the desired RDM fixture in the RDM devices window. A pop-up opens and offers all fixtures of the current show file.\
In addition, it is also possible to match fixtures within the RDM window in the live patch. In the live patch, it is possible to open the fixture list in the same way as described above, and by selecting any cell of a fixture then tapping Match at the bottom of the window.\
To remove a match between an RDM fixture and a grandMA3 fixture, it is possible to tap Unmatch in the RDM window in the live patch or to tap Clear in the match pop-up.

---

 

### []()Remote Human Interface Device Control (Remote HID)

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The Remote HID feature allows controlling of other grandMA3 stations that are available in the network via a locally connected mouse and/or keyboard.\
A use case for this feature is controlling of onPC stations that are used for visualization right at a console. Instead of placing several mice and keyboards on the table, only one set of mouse and/or keyboard is needed.

To control another station from your local console, follow these steps:

1. Enable RemoteHID in Menu - Network Menu on the station you want to control.
2. Execute the RemoteHID command on your local station:

To connect to the station with the IP 192.168.0.4, type:

User name\[Fixture]> RemoteHID IP 192.168.0.4

To connect to the onPC station that has the name "3D", type:

User name\[Fixture]> RemoteHID onPC "3D"

3. When the connection has been established, the screen of the local station changes to olive green. During the connection, only the executors including the 100mm faders and Go+\[Large], Go-\[Large], and Pause\[Large] remain usable on the local station. All other elements are blocked.

4. Do the remote control settings, you need to do. E.g.; Change settings in the 3D window.

5. To end the remote control connection, use one of the following options:

   1. Press MA + MA + Off
   2. Use the shortcut Shift + Ctrl + Alt + E

**Important:**\
grandMA3 onPC on Windows controlled via RemoteHID, is not only limited to control the grandMA3 onPC application. Furthermore, the mouse and keyboard can also access remotely the entire system.

**Restriction:**\
RemoteHID can only be used on grandMA3 consoles and grandMA3 onPC on Windows.

**Restriction:**\
At the moment, it is not possible to use the touch displays of grandMA3 consoles to control the mouse remotely. 

---

 

### []()Copy

### []()Copy of Cues

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Copying of cues has been improved. The new options in the copy cue pop-up allow various combinations:

- Copy Src(Copy Source):

  - Content: Copies only the values stored in the source cue.
  - Status: Copies the status of the source cue. Status includes the values stored in the cue and all tracked values from former cues.
  - Look: Copies all values of attributes for fixtures where the dimmer is open in the source cue, no matter if the open dimmer value is set in this cue, or if it tracks into the source cue. All other fixtures used in the source sequence will get only their dimmer copied at 0.

- Cue Only:
  - When this checkbox is on, the copied cues will be inserted at the destination with activated cue only. Read more about cue only in the [Store Cues topic](/grandma3/2-3/cue_store/)​.

- Release:
  - Defines if Release values will be set when using cue only, or when overwriting with Overwrite (Status). When Release is off, the default values will be set instead of using Release values. Attributes that were before introduced with individual values will get their former values back when using cue only. Release and Default values will only be set in the copied cue when an attribute is not used in the copied cue but is used in the destination sequence already.\
    When a copied attribute is not part of the destination sequence, Release values or default values will be set for the attributes in the following cue, when cue only is activated.

The action buttons behave like this:

- Merge: Merges the data of the source to the destination. Existing data in the destination will be kept as long as both, the source and destination do not have data of the same attribute. If existing data in the destination is also part of the source, the data from the source wins and overwrites the destination.
- Overwrite (Status): Overwrites the tracking status (and therefore also the content) of the destination with the data of the source. In this case, the option Release ( described above) is important. Fixtures that track into the destination will be set to Release values or default values, depending on the state of the Release checkbox.
- Overwrite (Content): Overwrites only the content (stored values) of the destination with the values of the source.

When the destination cue does not exist, the copy cue pop-up will display only these action buttons:

- Copy: Copies the source to the destination. Prior cues at the destination will track into the destination cues.
- Copy (Status): Copies the source to the destination and sets tracking data from prior cues to Release values or default values, depending on the state of the Release checkbox.

In addition, there are some new command line options in order to achieve the copy actions that can be done via the copy cue pop-up. The basic command is always a copy cue command:

User name \[Fixture]> Copy Cue 1 At Cue 11

The following command options can be added to this basic command:

- /CopyCueSrc ( /CCS): Defines how the source cue is taken for copy. Read more above.

  - Content
  - Status
  - Look

- /CopyCueDst ( /CCD): Defines how the data is handled at the destination

  - Merge: Merges the data to the destination. Makes the most sense in combination with the overall merge action (see /Merge).
  - OverwriteRelease: Sets the data that is part of the destination, but not of the source to Release values in the destination. Makes the most sense in combination with the overall overwrite action (see /Overwrite).
  - OverwriteDefault: Sets the data that is part of the destination, but not of the source to default values in the destination. Makes the most sense in combination with the overall overwrite action (see /Overwrite).

- /CueOnly ( /CO): Defines if the copy action should be executed with cue only.

- /Release ( /Rel): Defines if Release values should be set in the following cue of the destination for attributes that will be introduced by the source.

- /Default ( /D): Defines if default values should be set in the following cue of the destination for attributes that will be introduced by the source.

- /Overwrite ( /O): Overwrites the existing cue data at the destination. The option /CopyCueDst should be used in addition to define how to overwrite the data at the destination.

- /Merge ( /M): Merges the data from the source to the destination.

- /NoConfirm ( /NC): Surpresses the copy cue pop-up. If this option is not set, the copy cue pop-up opens and the user can still manually change the settings.

 

### []()Copy of Ranges

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The copying object ranges can be divided into different parts: Cues and all other objects (e.g., Macros, Presets, Groups, and many more).

When copying ranges of cues these rules apply:

- When a natural order of cues is selected by using Thru, the console attempts to maintain all gaps from the source range at the destination.

Example:

_Precondition: Cues 1, 2, and 4 exist._

User name\[Fixture]> Copy Cue 1 Thru 4 At Cue 11

_Result: New cues 11, 12, and 14._

- If a cue exists already in the range of the destination spot (even if it would fit into a gap), the console suppresses the range at the destination, so that the original order of cues is uninterrupted. The console tries to set whole cue numbers. If this is not possible it appends dotted cue numbers. The console tries to use as less as possible decimals (1 -> .1 -> .01 -> .001).

Examples:

_Precondition: Cues 1, 2, 4, and 12 exist._

User name\[Fixture]> Copy Cue 1 Thru 4 At Cue 11

_Result: New cues 11, 11.1, and 11.3. The gap between cue 2 and 4 is maintained, but shifted, as the start of the destination is 11 and not 11.1._

_Precondition: Cues 1, 2, 4, and 11.1 exist._

User name\[Fixture]> Copy Cue 1 Thru 4 At Cue 11

_Result: New cues 11, 11.01, and 11.03. The gap between cue 2 and 4 is maintained, but shifted, as the start of the destination is 11 and not 11.1._

 

- When the source range of cues is selected in a reversed order by using Thru, the console ignores the gaps from the source range when creating the destination range. The same rule for the resulting cue numbers at the destination from above applies here as well.

Example:

_Precondition: Cues 1, 2, and 4 exist._

User name\[Fixture]> Copy Cue 4 Thru 1 At Cue 11

_Result:\
The content, status, or look of cue 4 is copied to cue 11.\
The content, status, or look of cue 2 is copied to cue 12.\
The content, status, or look of cue 1 is copied to cue 13._

- In case of defining the source range by using +, the arising gaps between the single cues can be maintained if the cues are selected in ascending order. If the order is reversed or mixed, then the gaps are suppressed. The same rule for the resulting cue numbers at the destination from above applies here as well.

Examples:

_Precondition: Cues 1, 2, and 4 exist._

User name\[Fixture]> Copy Cue 1 + 4 At Cue 11

_Result: New cues 11, and 14._

 

_Precondition: Cues 1, 2, and 4 exist._

User name\[Fixture]> Copy Cue 2 + 1 + 4 At Cue 11

_Result: New cues 11, 12, and 13._

- When the source list is generated by using a combination of Thur and +, the above rules apply. The Thru-part of the source list uses the rules of Thru, while the +-part uses the +-rules.

 

 

When copying other objects, these rules apply:

- When a natural order of objects is selected by using Thru, the console attempts to maintain all gaps from the source range at the destination.

Example:

_Precondition: Groups 1, 2, and 4 exist._

User name\[Fixture]> Copy Group 1 Thru 4 At Group 11

_Result: New groups 11, 12, and 14._

- In case of already existing objects at the destination spot would fit into gaps of the source list, the existing objects will be kept. In case of objects at the destination spot would collide with objects of the source list, the console asks the user how to proceed (Overwrite, Merge, or Cancel).

Examples:

_Precondition: Groups 1, 2, 4, and 13 exist._

User name\[Fixture]> Copy Group 1 Thru 4 At Group 11

_Result: New groups 11, 12, and 14. The already existing group 13 stays untouched._

_Precondition: Groups 1, 2, 4, and 12 exist._

User name\[Fixture]> Copy Group 1 Thru 4 At Group 11

_Result: New groups 11, and 14. For group 12, the console asks the user how to proceed._

- When the source list of objects is created by using Thru, but in a reversed order, the console ignores the gaps.

_Precondition: Groups 1, 2, and 4 exist._

User name\[Fixture]> Copy Group 4 Thru 1 At Group 11

_Result:\
Group 4 is copied to group 11.\
Group 2 is copied to group 12.\
Group 1 is copied to group 13._

 

- When the source list of objects is created by using +, the console ignores the gaps.

_Precondition: Groups 1, 2, and 4 exist._

User name\[Fixture]> Copy Group 1 + 2 + 4 At Group 11

_Result: New groups 11, 12, and 13._

- When the source list is generated by using a combination of Thru and +, the above rules apply. The Thru-part of the source list uses the Thru-rules, while the +-part uses the +-rules.

### []()Copy Pop-Up

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The copy pop-up displays now the source objects and destination objects in the title bar.\
As soon as there is more than one source or destination specified in the copy command, only the first source or destination object will be displayed, followed by three dots (...) as an indicator.

The general scheme is: Copy ID 'Name' At ID 'Name', e.g., Copy 1 'Intro' At 11 'Outro'\
The resulting string can be different when an object has no user-given name. In this case, the system generated name contains the object ID, and therefore, the ID is then discarded: Copy Cue 1 At 11 'Outro'.

---

 

### []()Sequence and Sequence Sheet

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The release behavior of sequences has been improved. From now on the first cue of a sequence will not be set to release mode anymore automatically. Instead of this, the new sequence setting Release First Cue determines if the tracking from the last to the first cue is released or not, when using wrap around.

When Release First Cue is enabled, and the first cue in a sequence does not have the cue property Release set to Yes, then a gray \<Yes> will be displayed for this cue in the Release cell.\
Release First Cue is enabled by default in all sequences. This includes new sequences and also sequences in shows of older software versions.

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The sequence sheet got several improvements to enhance the user experience:

It is not possible to sort the sequence sheet anymore, as the order of cues is determined by the cue IDs.

The sequence sheet received the Merge Cells option and displays now in track sheet mode the same values of the same feature as one value. Read more about [Merge cells](/grandma3/2-3/wvm_settings/).\
Tracked dimmer values of 0% are now displayed by a dot (.), instead of displaying a tracked 0. This improves the readability of the tracking sheet.\
Cue parts display now always values, also when the values are only tracked values, and a new value would be set in the same cue, but in a later part.

The value LinkLastGo is now part of the LinkType-option. When a sequence sheet is set to LinkLastGo, the sequence that was go-ed as last will be displayed by the sequence sheet.\
Executing one of these playback commands for a sequence will trigger LinkLastGo:

- <<<
- \>>>
- Go+, Go-
- Goto, Load
- On
- Select
- Top
- Temp, Flash
- Toggle On
- Pause

 

In addition, automatic cue triggers from timecode shows and cue commands trigger LinkLastGo as well. Follow and Time cue triggers are excluded from LinkLastGo.\
Sequences have a new option called Include Link Last Go. It is on by default. When it is set to off, playing back a sequence with the commands listed above will not trigger the LinkLastGo functionality.\
LinkLastGo displays only the sequence that is executed by the same user profile.

Custom IDs are now displayed with their corresponding ID type when the sequence sheet is in track sheet mode. Therefore, the cell with the fixture ID is split horizontally. The top row displays the ID type, while the bottom row displays the IDs (Fixture ID = FID; Custom ID = CID): FID:CID or CID. In case of having only a fixture ID for a fixture, the cell is not split.

When loading a cue, the sequence sheet jumps now to the loaded cue.

The sequence sheet in track sheet mode has now more values for the Preset readout option in the context menu:

- ID: Displays only the ID of a preset.
- ID+Name: Displays the ID and the name of a preset.
- ID+Name+Value: Displays the ID, name and the value of a preset.
- Name: Displays only the name of a preset. In former versions, this value was called "Preset".
- Name+Value: Displays the name and the value of a preset. In former versions, this value was called "Both".
- Value: Displays only the value of the preset.

The sequence sheet displays running timings now also on the name column. The running timings in the name cell and duration cell are set to blue progress bars by default.\
All cells that have a timing display now also a progress bar as soon as this time is running. Fade times are having a green progress bar, delay times and trigger times are having orange progress bars. All colors can be adjusted in the color theme in the UI color section SequenceGrid.

Countdown timing was added to the sequence sheet. Countdown can be set per sequence sheet in the context menu. When countdown timing is enabled, running cue timings will display the remaining time. The times are displayed as whole numbers without fractions of a second or frames. It has these options:

- Off: During the transition into a cue, all cells with timings still display the set times.
- Duration: During the transition into a cue, the duration cell of the cue displays the remaining time of the transition with a countdown analog to the progress bar.
- All: All cells with a running time display the remaining time with a countdown.

---

 

### []()Timecode and Timecode Editor

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Timecode shows got a bunch of improvements:

Markers in timecode shows are now always part of the track group. It is not possible anymore to define a dedicated track as a marker track.\
The default length of a marker is now 1 frame when adding markers without specifying a length. Adding markers with the quick add time marker tool (+M), are also 1 frame long.\
In the timecode editor context menu, a new option allows to displays the markers of the track group in a lighter version within each track of the track group: Marker in tracks. When it is off, the markers are only displayed in the track group.

The appearance of timecode events has changed:\
An event is now displayed by a diamond with a vertical line. The vertical line / the center of the diamond is placed at the frame of the event.\
In addition, the action of the event is displayed above the diamond.\
Cue number and cue name are displayed below the diamond.\
All four elements (diamond, symbol, cue number, and cue name) can be displayed separately or hidden, by enabling or disabling the corresponding options in the display section of the timecode editor context menu.

A Timecode section has been added to the Preferences and Timing menu. These settings are used when creating a new timecode show.

New timecode setting Record Go defines how go events are recorded into timecode shows: "as Go" records usual Go+ as action for events, while "as Goto (Status)" records Goto+ as action. By default "as Go" will also record a destination cue. That ensures that the correct cue will also be played back correctly when playing back the timecode show. It is possible to delete the destination from a Go+ event. In this case, a normal Go+ would be executed, which would then go to the next cue.

The new timecode setting Assert Previous Events makes sure that all previous events will be asserted when jumping to a position somewhere in the timecode show, when it is set to Yes. The previous events will be asserted in backward order starting at the current position the play head in the timecode show.

Timecode Slots are not recorded anymore automatically into timecode shows. They have to be set manually as a target to a track in order to be able to set events for timecode slots.

The Selection Target (Select. target) type can now be defined in the title bar of the timecode editor.

It is now possible to define per timecode event, if cue commands shall be executed within this event, or not. Therefore the column Execute Cmd has been added. When it is set to No for an event, the cue command is not executed.

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

In addition, several improvements were made to the timecode editor:

When adding an event into a time range, the select mode will automatically change to time range.\
When using the add event tool in order to add a time range into a track group, the select mode will automatically change to time range.\
Adding events or time ranges via the toolbar in the timecode editor, changes now also the selection mode in the tool bar to event or time ranges.

New buttons to jump to markers were added to the timecode navigation bar at the bottom of the timecode editor: M<< and M>> jump directly to the beginning of the next marker in the chosen direction.\
The default color of new markers is white.

When the timecode editor is in playback mode, the record button disappears now from the timecode navigation bar at the bottom.

When tapping Zoom to Fit, the timecode editor zooms now to a scaling where all recorded events can be seen. In addition, 1s before the first event and 1s after the last event will also be displayed.

Collapsed track groups display a smaller summary of all tracks in the track group.

The image color of the assigned appearance is now used to color the track when no background color is defined in the appearance.

When adding a marker to a track group, a pop-up asks now to enter a name for the marker. In addition, it is possible to select an appearance in the label pop-up.

It is now possible to select track groups. To do so, press Select and tap the desired track group in the timecode window. Or execute Select Timecode x.y where x is the ID of the timecode pool object and y is the ID of the track group. When adding markers or new tracks to the timecode show, they will be added to the selected track group.

The elements in the context menu of the timecode editor and the settings menu of timecode shows are rearranged.

The arrangement of the encoders in the timecode editor encoder bar changed:

- Dual encoder 1 outer ring: Marker
- Dual encoder 1 inner ring: Cursor
- Dual encoder 2 outer ring: TimeRange
- Dual encoder 2 inner ring: Track
- Dual encoder 3: Event
- Dual encoder 4 outer ring: Duration
- Dual encoder 4 inner ring: Time

 

The marker encoder in the timecode encoder bar displays now also the track group the marker belongs to.\
Pressing the track encoder in the timecode editor encoder bar opens now a track selection pop-up.\
Pressing the inner encoder of the event encoder opens the token selection pop-up, while pressing the key for the outer encoder of the event encoder allows to select events of the current track.\
The encoders for cursor, time, and duration open now an input calculator when the encoder or its corresponding key is pressed.\
Pressing the keys of the time range encoder and marker encoder opens a drop-down for a direct selection of a time range or marker.

When selecting an event in the text mode, it will also be selected in the timeline and vice versa.\
New text mode "Markers" when the editor is in text mode or both mode: Markers will only display the markers.\
Text mode is sorted by time per default.\
The text mode has now a column in order to display the track group of each event.\
The text view does not display the No (number) column anymore.\
Switching the View Mode to Text, the text area is now scaled as big as possible.\
Events and markers display the track appearance or the appearance of the track group in the track cell in the text area of the view modes Text and Both.

The command line has now priority above the selected tool in the timecode editor. For example, the add tool is selected and the command line has Label as input. Tapping a time range will label the time range instead of adding a new one to the track group.

The option Last Event in the timecode editor works now also in record mode.

---

 

## []()Other Enhancements

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Network

The Network Menu features 2 separate columns called "Version Big" and "Version Small". Nodes only have to match up with the "Version Small" number for compatibility. The versions of consoles and processing units have to match the "Version Big".

The dropdown for selecting the interface used for MA-Net in the network menu has now also an Auto value. When the MA-Net interface is set to Auto, the grandMA3 software determines the interface to use by itself. In this case, the IP of the selected interface is set into angle brackets on the MA-Net Interface button, e.g., <192.168.0.4>.

The automatically determined interface in Auto mode is specified by the order of the following rules:

1. When a Class C IP address (192.168.x.y) is found, the interface if this IP will be taken. No matter of the link state of this interface. (At onPC on Mac the interface link state must be active.)
2. When no Class C IP is found, the software searches for a Class B IP (172.16.x.y). Only if the interface has an active link state.
3. If also no Class B IP address is available, a Class A IP in the range of 10 (10.x.y.z) will be searched. Only if the interface has an active link state.
4. If this also fails, a Class A IP in the range of 2 (2.x.y.z) will be searched. Only if the interface has an active link state.
5. If no Class A IP is available, the loopback interface will be used.

The user can still always change the selected interface from Auto to his preferred interface.

On grandMA3 consoles, Processing Units, and xPort Nodes, the first interface will still be selected as the default interface after a Full Install.\
Per default grandMA3 onPC on Windows and macOS will be set to Auto.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Web remote

- The web remote menu displays now for every connection the requested resolution.
- New show files will have an additional user called "Remote" and has its own ScreenConfig "Remote" assigned. This allows independent use of the web remote compared with the console.
- When connecting to a grandMA3 station via web remote, the Remote user will be logged in automatically.
- Command-line linking allows the user to see the input into the command line of a station on all other stations that are logged in with users that use the same user profile. Command line linking can be activated on the device that is logged in via web remote. Right of the command line, a button with a chain-link symbol is located. When command line linking is enabled, the background of the linked command lines turns slightly yellow.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) When a show was saved a small temporary overlay will be displayed for 1s by default at the bottom of all displays. By default the overlay is green. The color can be changed within the color theme: UI color definition Display.SaveShow.\
It is possible to enable or disable the overlay for each display separately. To do so, open the display configuration and tap Show Feedback. This needs to be done for each display on its own.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Timecode Slots have now additional colors for off (gray), running with an external source (green), and running via generator (orange). All colors can be changed individual per timecode slot.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Dropdowns that display appearances or presets, display now a small thumbnail with the appearance or the preset display information (e.g., dimmer intensity, color, gobo, etc.). This can be observed for example in the assign menu of executors that have sequences assigned.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Update menu

The update menu has now a button called Sequence Mode with these values:

- All: All sequences are displayed.
- Selected: Offers only the selected sequence to update.
- Last Called: Offers only the last called sequence to update.

The Cue Filter property interacts with the Update Mode.

The update menu offers now only cue parts to update, and not the cue and its cue parts. In addition, the columns in the sequence area were reworked. Now only the labels and IDs of the sequence, cue, and cue part are displayed.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Delete with Cue Only option works now.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Backup menu

When saving a show with a new name, a pop-up asks now the user if he wants to change the name. In addition, a pop-up warns also the user if a show with the same name also exists when tapping Save Show As.

The default tab in the backup menu is now the Save-tab.

The ".show" file extension of show files is now suppressed in the input field in the backup menu.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The commands SelFix and Off work now also in combination with programmer parts.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Network menu and Update menu

The network menu and the update menu display now the following states of stations within the list of network devices:

- IP address of other IP address range: Red font color of the IP.
- Invite disabled: Orange font color of the station name.
- Station is in update mode: Yellow font color of the status.
- Different software version: Orange font color of the version numbers.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The on-screen keyboard is now equipped with buttons to navigate through the displayed text.

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Layout View:

- MAtricks can be assigned to a layout.
- The default token for newly assigned objects to a layout is selfix.
- The Layout window displays the cue number and cue name of assigned sequences.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The Preset editor can be moved to different screens by tapping the edit display preference button in the upper right corner.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the presentation of colors that are outside of the sRGB color space in the 3D window.

---

 

## []()What's Changed

- The custom/master section window allows now a minimum width of one square. This is handy when it should only display the page section.

- The launcher on macOS displays the different versions now by increasing version numbers.

- Backup menu: The name of the autosave time has been changed from Timeout to Interval.

- Release and Assert are now set in CueZero instead of Cue 1 in new sequences.

- Analog Remotes are renamed to DC Remotes.

- The DC Remote input Signals are now assignable via their absolute number (1-64). The Slot/Signal (1-8/1-8) system is replaced. For example, Slot 5/Signal 1 is now Signal 33.

- Stomp on a running phaser stopped the phaser and knocked the current values into the programmer. This behavior changed: Stomp on a running phaser now knocks the attribute values of step 1 into the programmer and discards all other steps.

- Midi is now always renamed to MIDI.

- The sorting mechanism in the fixture sheet sorts now in this order:

  - By Fixture ID
  - By ID Type
  - By Custom ID within each ID Type

- The possible range of phase has been extended. Now it is possible to set phases between -720° and +720°.

- When Art-Net configuration lines are set to Auto mode, and no Art-Net receiver subscribed for Art-Net universes, Art-Net of this configuration line is now sent as Broadcast. As soon as a subscriber is available, the existing rules for Auto are applied: Until the number of subscribers does not exceed the broadcast threshold, Art-Net will be sent as Unicast.

- Keyboard Shortcuts are not automatically disabled anymore when opening a pop-up with a calculator.

- Coordinates of stage elements now display only 3 digits.

- The setting MIBDynamic is changed to MIBMultiStep 

- The arrangement of the buttons common tab, pools tab, and more tab in the add window dialog was changed.

- The Network menu and the Software update menu is sorted by IP address by default.

- The last logged user name is remembered. If a new show is created and the user is not available, the user Admin will be used. 

- The hardkey shortcut MA + . is entered in the command line instead of executed immediately.

- The At button in the Control Bar displays now an additional filter symbol instead of Yes or No. When a different filter than filter 1 is selected, the icon and the At will turn yellow.

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The projection of a gobo in the 3D window that was pointing into the camera was displayed in the opposite direction of the stage bounding box in some cases. This bug is fixed. If a beam containing a gobo is pointing into the camera, there is no projection shown on the backside of the bounding box.  |
| The color of several single color emitters on the same level of the geometrical tree was not treated as a single color but as a combined color mixing system. This bug is fixed. Single additive colors of different geometries on the same level are not mixed together any longer.                        |
| Wrong values were visualized at the lower and upper end of a channel function if the DMX channel had a resolution of 16 bits. This bug is fixed. DMX channels with a 16-bit resolution bit are now visualized correctly at the whole range of its channel functions.                                        |
| The lasso of the selection was not restricted to the borders of the 3D window. This bug is fixed. Lasso selection now respects the borders of the 3D window.                                                                                                                                                |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macros that opened multiple text input pop-ups within one macro line, rearranged the input values to wrong positions. This bug is fixed. Commands executed by macros should not rearrange the syntax anymore.                                                                                                                                                               |
| The LUA HTTP library included other libraries wrong. This bug is fixed. The LUA HTTP library is now included properly.                                                                                                                                                                                                                                                      |
| It was not possible to store a show that was named "show". This bug is fixed.                                                                                                                                                                                                                                                                                               |
| Switching off the recording of a timecode show recorded off events for all recorded playbacks. This bug is fixed. Switching off the record mode of a timecode show does not add off events anymore to the timecode tracks.                                                                                                                                                  |
| Updating values from presets with individual timings in a cue remained in the preset link even if the new preset had no individual timings. This bug is fixed. Updating values in a cue where the original preset contained individual timings transform the individual timings into hard timing values when the new preset has no individual timings.                      |
| Changing the time of a timecode event using the time encoder could not be oopsed by executing Oops once. Each encoder click was one event for oops. This bug is fixed. Turning the time encoder of a timecode event can now be oopsed at once by executing oops one time.                                                                                                   |
| It was not possible to manually set a fader value above 59% in a timecode show. This bug is fixed. Editing the fader value of a timecode show event allows now input up to 100%.                                                                                                                                                                                            |
| When re-recording a timecode show and an executor fader movement was recorded again, the resulting fader graph was a mix of the old and the new fader movement. This bug is fixed. Recording the fader movement again in a timecode show overwrites the old fader movement now completely.                                                                                  |
| Auto Start and Auto Stop in timecode shows did not work independently. This bug is fixed. Auto Stop works now also, even when Auto Start is disabled.                                                                                                                                                                                                                       |
| Padding Top and Padding Bottom in layout elements were interchanged. This bug is fixed. Padding Top affects now the top padding and Padding Bottom affects the padding at the bottom of a layout element.                                                                                                                                                                   |
| The console crashed when Exchange was executed with lasso selections in the sequence sheet. This bug is fixed. Exchange with lasso selections in the sequence sheet does not crash the console anymore.                                                                                                                                                                     |
| When copying a timecode show the action was reset to Go+ and the destination was deleted. This bug is fixed. Copying a timecode show copies it now 1:1.                                                                                                                                                                                                                     |
| It was not possible to alter the values of an attribute by turning the encoder, when the user dialed the encoder before to the upper limit of the current channel function and selected then a different channel function for the encoder. This bug is fixed. Turning an encoder should now always alter the values of the attribute of the selected fixtures.              |
| Copying a cue range did not respect gaps in the cue numbers or cue numbers with points. This bug is fixed. Gaps in the cue numbers or cue numbers with points are now respected when copying a cue range.                                                                                                                                                                   |
| A provided cue part number was not respected when copying cues. This bug is fixed. Cue part numbers are obeyed when copying cues.                                                                                                                                                                                                                                           |
| Editing a color in the color theme editor did not automatically disable the keyboard shortcuts. This bug is fixed. Keyboard shortcuts are now disabled when editing colors in the color theme editor.                                                                                                                                                                       |
| The system monitor in grandMA3 onPC on macOS displayed from time to time the error message "kevent failed with Operation now in progress(36)". This bug is fixed. All errors with kevent should be fixed now.                                                                                                                                                               |
| The commands Blind On and Blind Off did not change the state of the blind mode accordingly. This bug is fixed. Blind On and Blind Off work now again as expected.                                                                                                                                                                                                           |
| The predefined macro "Circular Copy X Plus" referenced not to itself in a macro line. This bug is fixed. The predefined macro "Circular Copy X Plus" should work now as expected.                                                                                                                                                                                           |
| Pressing Page + or Page - several times while having already a part of a command inside the command line, e.g., Copy Page 1.201, removed with the second press and every additional press one character from the existing command. This bug is fixed. Changing pages while having already a command in the command line does not delete characters of this command anymore. |
| The commands Off and On did not interact properly with the encoder bar attributes and layers. This bug is fixed. Off an On do interact with the encoder bar attribute and layers.                                                                                                                                                                                           |
| Next X in an only in Y axis oriented selection in the Selection Grid did not work as expected. This bug is fixed. Next X in an only Y axis oriented Selection performs a selection clear and applies next X.                                                                                                                                                                |
| Adding a Timecode marker on top of another marker changed the first marker duration to 0. This bug is fixed. Adding a Timecode marker on top of another marker is not possible anymore.                                                                                                                                                                                     |
| The command On and Off did not allow defined switching of Highlight, Lowlight, Solo and Blind. This bug is fixed. Defined switching for Highlight, Lowlight, Solo and Blind works as expected.                                                                                                                                                                              |
| Copy and paste of a Time range in a Timecode show did not work as expected. This bug is fixed. Copy and Paste of a Time range works as expected.                                                                                                                                                                                                                            |
| Executor knob events were not recorded within a Timecode show. This bug is fixed. Executor knob events are recorded in a Timecode show.                                                                                                                                                                                                                                     |
| The grand master knob function encoderclick was not assignable with e.g. black. This bug is fixed. The grand master knob function encoderclick can be assigned.                                                                                                                                                                                                             |
| When shortcuts were enabled, the label function was not working with the onscreen keyboard. This bug is fixed. When shortcuts are enabled, the label function is working with the onscreen keyboard.                                                                                                                                                                        |
| The command label selection did not work as expected. This bug is fixed. Label Selection is working correct.                                                                                                                                                                                                                                                                |
| While recording a timecode show and moving a fader slowly, an event at the start of the movement was not recorded. This bug is fixed. Fader movements during timecode recordings are now recorded properly.                                                                                                                                                                 |
| Appearances could not be assigned to groups that contain only one fixture. This bug is fixed. Appearances can now be assigned to single fixture groups.                                                                                                                                                                                                                     |
| When setting options to commands and a pop-up was then spawned by the command, the options were not displayed anymore in the pop-up. This bug is fixed. Pop-ups of commands (e.g., Store pop-up) display always all options, also when they are already set by the command line.                                                                                            |
| Editing fade or delay cells in the sequence sheet in tracking sheet mode corrupted the timings. This bug is fixed. Editing timings in the tracking sheet applies now the timings the user inputs.                                                                                                                                                                           |
| Assigning a filter to a preset pool did not work by pressing Assign, then tapping the filter in the filter pool and tapping the preset pool. This bug is fixed now. Filters can now be easily assigned to pools.                                                                                                                                                            |
| When keyboard shortcuts were enabled, pressing one Shift key was interpreted as pressing both MA keys. This bug is fixed. The Shift keys are now handled separately when having keyboard shortcuts enabled.                                                                                                                                                                 |
| SelFix assigned to executor buttons did not work for groups assigned to the executor. This bug is fixed. SelFix on executors for groups assigned to the executor selects now the fixtures of the group.                                                                                                                                                                     |

### Connections

| Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The delay of Art-Net and sACN configurations were set to 0.1000000015 ms. This bug is fixed. The default delay is set to 0.1 ms.                                                                                                |
| Sending and receiving OSC was only possible on port 8000. This bug is fixed. OSC can now be sent and received on all ports.                                                                                                     |
| The input of DC remotes was not streamed within the session. The data was only processed locally. This bug is fixed. DC remote input is now transmitted within the session. The data is processed at the global master station. |
| The console could crash when moving the master fader of a group via OSC. This bug is fixed. The console should not crash anymore when moving a fader via OSC.                                                                   |
| When a web remote device requested a resolution of 0x0 pixels, the console could crash. This bug is fixed. The console should not crash anymore when a web remote device requests an invalid resolution.                        |

### Patch

| Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The MIB fade calculator for attributes had a wrong range of the maximum allowed time. This bug is fixed. The MIB fade calculator allows now up to 14D of fade time.                                                  |
| The console could crash when exchanging the fixture type of a fixture with a dimmer fixture type. This bug is fixed. The console should not crash anymore when exchanging the fixture type of a fixture.             |
| Importing an MVR file with a huge amount of scene objects could cause the grandMA3 application to freeze. This bug is fixed.                                                                                         |
| The Layer and Class information was not kept when performing a cut/paste operation in the patch. This bug is fixed. The Layer and Class information is kept when performing cut/paste inside the patch.              |
| Leaving the Live Patch asked for a confirmation. This bug is fixed. Leaving the Live patch does not ask for confirmation anymore.                                                                                    |
| After the import of a GDTF file, the stage in the patch was set to "All Stages". This bug is fixed. The import of a GDTF file does not change the stage.                                                             |
| The DMX Change Time Limit calculator for attributes rounded the input time in a wrong way. This bug is fixed. The DMX Change Time Limit calculator applies now the time the user inputs without rounding errors.     |
| Individual timings were discarded from cues, when adding new fixtures to the patch or replacing fixture types. This bug is fixed. Individual timings should not get deleted anymore when doing changes in the patch. |

 

### Playback

| Description                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The fixture sheet and encoders displayed the wrong tracking colors when going back in the sequence. This bug is fixed. The tracking state should now always be in sync between the sequence sheet, fixture sheet, and encoders.                                              |
| When adjusting the master of an empty group, the output of all fixtures was adjusted. This bug is fixed. Empty group masters do not influence the output of any fixture anymore.                                                                                             |
| Timed fades between 2 cues or sequences did not fade to the correct values when the master fader was pulled down. This bug is fixed. Fades between cues respect now the position of the master fader.                                                                        |
| Go+ reasserted the tracking state of a playback, even when the programmer had a different value active for the same attributes. This bug is fixed. Programmer values of attributes are not overwritten by playbacks when the cue has only tracked values for the attributes. |
| Setting Release to off in the first cue released nevertheless the values when going from the last cue to the first cue with wrap around. This bug is fixed. Wrap around works now also with release set to off in the first cue.                                             |
| Fast backward (<<<), fast forward (>>>), and goback (Go-) triggered the next cue, when it was a timed cue (Follow or Trigger Time). This bug is fixed. Timed cues are not triggered anymore when going to a cue with <<<, >>>, or Go-.                                       |
| <<< in the sequence sheet encoder bar executed always a Go- instead of <<<. This bug is fixed. All playback buttons in the sequence sheet encoder bar execute now the actions of their labels.                                                                               |
| Updating a sequence asserted the sequence completely. This bug is fixed. Stolen attributes of other playbacks are not asserted anymore when updating a sequence.                                                                                                             |
| When activating highlight while being in blind mode with the programmer, the highlight values ignored the blind mode and were output. This bug is fixed. Highlight values are not output anymore while being in blind mode.                                                  |

 

### Windows

| Description                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The German on screen keyboard had / and ? twice. This bug is fixed. - and \_ are now available on the German on screen keyboard. The German onscreen keyboard Alt did not work properly. This bug is fixed. The German Alt key at the on screen keyboard is working now.                                                                                                   |
| The timecode editor window offered the possibility to select a different timecode pool object. This bug is fixed. The timecode editor is now limited to the edited timecode pool object. The timecode window still allows to select and display a different timecode pool object.                                                                                          |
| The color theme editor had two Delete buttons. This bug is fixed. The second delete button is now labeled as Delete Color Theme.                                                                                                                                                                                                                                           |
| The window title of the In & Out menu was wrong. This bug is fixed. The In & Out menu title is now In & Out.                                                                                                                                                                                                                                                               |
| When delay times were coming from presets, the sequence sheet in track sheet mode did not display the link, but only the hard values. This bug is fixed. All values, coming from a preset display now the preset link in the tracking sheet.                                                                                                                               |
| The sequence sheet did not store the scroll position into a view. This bug is fixed. The scroll position of the sequence sheet is now recalled when calling a view. Auto-scroll has to be disabled.                                                                                                                                                                        |
| Auto-scroll in the sequence sheet did not scroll back to the left when track sheet mode and transposed mode were enabled and it jumped to the next row. This bug is fixed. The sequence sheet displays now with auto-scroll always the current cue, also when the transposed mode is enabled.                                                                              |
| The sequence sheet displayed markers for phaser values accidentally when storing release values. This bug is fixed. Phaser markers are only displayed when phaser values are present.                                                                                                                                                                                      |
| The default width of columns in the sequence sheet was chosen unluckily. This bug is fixed, The width of columns in the sequence sheet are now better adjusted to the purpose of every single column.                                                                                                                                                                      |
| Enabling track sheet mode in the sequence sheet could crash the console. This bug is fixed. The console should not crash anymore when enabling the track sheet mode of the sequence sheet.                                                                                                                                                                                 |
| Opening a default 3D view caused a crash in some cases. This bug is fixed.                                                                                                                                                                                                                                                                                                 |
| Load and Save did not work in the timecode view context menu. This bug is fixed. The window settings can now be saved and recalled in the timecode view.                                                                                                                                                                                                                   |
| The round corners of pop-ups on the xPort nodes had a black background. This bug is fixed. Round corners of pop-ups have now always a transparent background.                                                                                                                                                                                                              |
| Spinning an encoder directly after switching its channel function could cause the first ticks of the encoder to be lost. This bug is fixed. The first ticks of the encoder do not get lost if the channel function is switched.                                                                                                                                            |
| When entering times for CueFade or CueDelay, which were different for in and out timing, the background of the cell changed to black. This bug is fixed. CueFade and CueDelay cells in the sequence sheet have always a gray background when they can be edited.                                                                                                           |
| When editing values in a sheet by doing a long-press beforehand, a lasso selection was initiated when closing the calculator. This bug is fixed. Opening a calculator by long-pressing a cell does not start a lasso selection anymore.                                                                                                                                    |
| From time to time pressing objects in pools was not recognized. This bug is fixed. All pool objects should now be accessible after resizing a pool window.                                                                                                                                                                                                                 |
| Selecting a single attribute cell in the fixture sheet activated the entire row. This bug is fixed. Selecting a single attribute in the fixture sheet is possible.                                                                                                                                                                                                         |
| When resizing the application window of grandMA3 onPC on Windows, the not touched edges of the window moved slighty on the desktop. This bug is fixed. Resizing the grandMA3 onPC application on Windows does not move the window across the window.                                                                                                                       |
| When a show file was converted from grandMA2 to grandMA3 with a grandMA2 onPC or Mode2. If the grandMA3 software was started on the same machine after that, graphical issues in the user interface occurred. This bug is fixed. There are no longer graphical issues in the user interface of grandMA3 after a show file was converted from grandMA2 on the same machine. |
| When having gaps between data pools, the assign menu displayed the wrong data pool on the data pool button. This bug is fixed. The assign menu displays now always the selected data pool om the data pool button.                                                                                                                                                         |
| The All preset pools disappeared from the Add window dialog, when they were renamed. This bug is fixed. The All preset pools are always displayed in the Add window dialog, no matter if they are labeled, or not.                                                                                                                                                         |
| Multi-line editors, like the plugin component editor, highlighted the wrong characters, when the user did selections across multiple lines. This bug is fixed. Selections in multi-line editors highlight now the selected characters.                                                                                                                                     |
| Not all pool buttons in the Add window dialog displayed their pool color in the indicator bar of their button. This bug is fixed. All pools display now their color in the indicator ar in their buttons in the Add window dialog.                                                                                                                                         |
| Scrolling via the mouse wheel in the main menu did not work properly. This bug is fixed. Scrolling with mouse wheel in the main menu is working as expected.                                                                                                                                                                                                               |
| The Software update menu did not show the selected update file when reopening the menu. This bug is fixed. The Software update menu shows the selected file continuously.                                                                                                                                                                                                  |
| The selected Timecode Trackgroup was not displayed properly. This bug is fixed. The selected Timcode Trackgroup is displayed with yellow text.                                                                                                                                                                                                                             |
| The power loss pop-up did not appear on the letterbox screens if the console was locked. This bug is fixed. The power loss pop-up does now always appear when there is a loss off power.                                                                                                                                                                                   |
| The Add Window did not show colors for all pools and presets. This bug is fixed. Pool and Preset Colors are displayed in the Add Window.                                                                                                                                                                                                                                   |
| The Edit User pop-up was too big for the small screens. This bug is fixed. The Edit user pop-up fits now into the small screens.                                                                                                                                                                                                                                           |

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

Step Recipes and the Step Creator are not anymore part of v1.4 or newer. Existing step recipes of show files in versions up to v1.3.1.3 will be discarded.

Independent tracking of absolute and relative values in the same sequence is currently not possible.

Moving cues/cue parts does not move the data correctly. It is recommended to use the copy command.

Show files saved with versions v1.3.1.3 or prior discard the content of the programmer when loading the show file in v1.4 or newer.

The grandMA3 system supports at the moment only one external DMX source per universe for merging DMX into the system.

Software update via network to onPC stations requires confirmation during the install process at the destination system.

When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

Show files saved with versions prior to v1.0.0.3 cannot be loaded using this version.

When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over without user input. If all stations are of the same priority, then the station with the longest Online Time becomes the GlobalMaster for all stations.

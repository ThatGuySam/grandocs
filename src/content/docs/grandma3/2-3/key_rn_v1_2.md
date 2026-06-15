---
title: "Release Notes 1.2"
description: "Features"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/key_rn_v1_2.html"
scrapedAt: "2026-06-15T18:26:00.928Z"
pagefind: false
---
- [Features](/grandma3/2-3/key_rn_v1_2/#offline-title)

  - [Cue Part and Programmer Part Management](/grandma3/2-3/key_rn_v1_2/#h3__1052496443)

  - [Cue Transition](/grandma3/2-3/key_rn_v1_2/#h3__911910712)

  - [Move in Black](/grandma3/2-3/key_rn_v1_2/#h3_500261061)

  - [Selection](/grandma3/2-3/key_rn_v1_2/#h3__786962412)

    - [Shuffle Selection](/grandma3/2-3/key_rn_v1_2/#h3__1057755481)
    - [Multiple Selections](/grandma3/2-3/key_rn_v1_2/#h3_968851195)
    - [Shift Selection](/grandma3/2-3/key_rn_v1_2/#h3__1252988096)

  - [Variables](/grandma3/2-3/key_rn_v1_2/#h3_442277137)

  - [Trackpad Window](/grandma3/2-3/key_rn_v1_2/#h3__438336978)

  - [3D Window](/grandma3/2-3/key_rn_v1_2/#h3__673189665)

  - [Frame and Time Readout](/grandma3/2-3/key_rn_v1_2/#h3__1969116833)

  - [Preferred IP for DMX protocols](/grandma3/2-3/key_rn_v1_2/#h3__1107293925)

- [Other Enhancements](/grandma3/2-3/key_rn_v1_2/#h2_1198082799)

- [What's Changed](/grandma3/2-3/key_rn_v1_2/#h2_563643534)

- [Fixed Bugs](/grandma3/2-3/key_rn_v1_2/#h2__1624482491)

- [Appendix](/grandma3/2-3/key_rn_v1_2/#h2__1835053169)

- [Known Limitations](/grandma3/2-3/key_rn_v1_2/#h2__1852571500)

---

Features

The latest release of grandMA3 version 1.2.0.2 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Cue Part and Programmer Part Management

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

With the new properties Static Part, Dynamic Part From and Dynamic Part To it is possible per preset pool and per single preset to determine into which programmer part the preset will be called. Each preset containing a phaser will be called into a single part of the corresponding dynamic part range.\
By default, static values will be called into part 0. The dynamic ranges are separated per feature group and include 100 parts each.\
The start of the dynamic range for each feature group is the corresponding number range in the hundreds of the feature group ID. For example, feature group dimmer (= ID 1) has a dynamic range from part 100 to 199.\
All preset pools are also using this style of numbering. All preset pool 1 starts at 2100 with its dynamic range.\
These part properties can be set individually per data pool.

The former PartMode property of preset pools and presets is obsolete now.\
When loading older show files the made PartMode settings are skipped and the new defaults will be applied.

When storing a cue (without specifying a dedicated cue part) the programmer content with all its parts will be stored as a cue with corresponding cue parts.\
When storing a cue with specifying a dedicated cue part the programmer content of the actual selected programmer part will be stored into the specified cue part.

In the sequence sheet are now two separated columns for the cue number (No) and the part number (Part). This allows now also a free editing of the part number. When renumbering a cue part, the same rules and logic for renumbering a cue apply.

---

 

### []()Cue Transition

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The new cue part property cue transition allows to modify the path of values during the fade from one cue to another cue. The transition can be set per cue part.

There are nine different transition forms available:

| Transition Type | Illustration                                   |   | Transition Type | Illustration                              |   | Transition Type | Illustration                                  |
| --------------- | ---------------------------------------------- | - | --------------- | ----------------------------------------- | - | --------------- | --------------------------------------------- |
| Linear          | ![](/img/grandma3/2-3/linear_2-f45c58.png)     |   | Fast            | ![](/img/grandma3/2-3/fast_1-cd23d8.png)  |   | Fast+           | ![](/img/grandma3/2-3/fastplus_1-797d06.png)  |
| SCurve          | ![](/img/grandma3/2-3/scurve_1-dba833.png)     |   | Slow            | ![](/img/grandma3/2-3/slow_1-80113f.png)  |   | Slow+           | ![](/img/grandma3/2-3/slowplus_1-3f533e.png)  |
| Swing-          | ![](/img/grandma3/2-3/swingminus_1-1f7126.png) |   | Swing           | ![](/img/grandma3/2-3/swing_1-2e132b.png) |   | Swing+          | ![](/img/grandma3/2-3/swingplus_2-be0ae2.png) |

---

 

### []()Move in Black

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Move in Black (MIB) is a function which in a tracking sequence will look ahead and preposition attributes of fixtures that are fading the dimmer in from zero, to automatically prevent "ugly" transitions where you would normally see the fixture move the attributes into position, while the fixture is fading in.

MIB is enabled individually per cue part by giving the MIB property of the cue part a value which tells the console when it should do the prepositioning.

There are several options and properties that modify the MIB behavior:

- MIB Fade is the fade time of attributes that will be positioned by MIB. It is available at different places. There is also an order of importance which MIB fade time to apply:

  1. Per cue part
  2. Per attribute in a fixture type
  3. Global in the show file

When an MIB fade time is specified in the cue part, the individual attribute MIB fade time will be ignored. When the MIB fade time of the cue is set to default the global MIB fade time will be applied, unless an attribute has an individual MIB fade time set.

- MIB Delay is the time the attributes wait from having the dimmer closed until the MIB fade will be performed. The MIB delay time can be specified per cue part or global in the show file.

The same ruleset as for MIB fade applies: When the MIB delay time of the cue is set to default the global MIB delay time will be applied.

The global MIB fade time and MIB delay time can be set in the Timing tab located in Menu - Preferences and Timing.

When performing an MIB fade and/or MIB delay the MIB times of the cue part where the dimmer opens again will be applied.

The sequence sheet displays now several columns for the different additional MIB settings. All MIB related columns can be displayed or hidden together by the new mask MIB Settings within the sequence sheet context menu.

 

- MIB Preference: The user can specify the suitability of a cue for MIB. Any value between 0 and 100 can be chosen. The higher the value the better is the suitability to execute MIB in this cue. There are also special values available:

  - Never (0)
  - Worst (1)
  - Bad (25)
  - Normal (50)
  - Good (75)
  - Best (100)

For example if the cue is very silent, the user can set the MIB preference to Never, as he maybe does not want to have an MIB transition during this cue. The MIB mode values Early, Late and UponGo will then look, which cue has the highest rated suitability and will choose this cue then for executing the MIB. MIB mode Defined does not respect the MIB Preference!

- MIB Mode: Defines how early or late the MIB shall be performed per cue part.

  - Default performs MIB corresponding to the MIB mode setting of the sequence property "MIB mode". Please read below about the sequence-wide MIB settings.
  - None: MIB will not be performed for this cue.
  - Defined: In the MIB target cell, the user can specify a cue to perform the MIB. When the specified cue is active, the MIB will then be executed.
  - Early will perform the MIB as soon as the dimmer is closed. If the next cue transition would already open the dimmer again, then an early MIB will be performed.
  - UponGo performs the MIB with the next cue transition after the dimmer has closed. If the next cue transition would already open the dimmer again, then an early MIB will be performed.
  - Late performs the MIB latest in the cue before the dimmer opens again. If the next cue transition would already open the dimmer again, then an early MIB will be performed.

- MIB Target: A specific cue when MIB shall be performed for this cue part, see MIB mode.

- MIB Fade: The MIB fade time per cue part. Can be a user set time or default. Default takes the global show file MIB fade time or an individual MIB fade time per attribute specified in the fixture type (see above at MIB fade).

- MIB Delay: The MIB delay time per cue part. Can be a user set time or default. Default takes the global show file MIB delay time.

- MIB Dynamic: The user can decide whether a phaser where the fixtures are already prepositioned shall keep running with the closed dimmer, or if they shall be paused. This can prevent unwanted noise of stepper motors of prepositioned fixtures that are running a phaser, especially when it is very quiet in the audience.

  - Running: A phaser is running with closed dimmer.
  - Paused: A phaser will be prepositioned but does not start running until opening the dimmer.

The sequence sheet hides those MIB cells, that are not considered for the different combinations of MIB settings or if a cue or cue part is not suitable for MIB. When setting an MIB target the MIB mode will be changed to Defined, and vice versa, when changing an MIB mode to not Defined will remove the MIB target.

 

For a more simple way of configuring MIB, the user can also define sequence-wide MIB settings within the sequence settings. To enter the sequence settings you can do one of the following actions:

- Edit + tap the sequence in the sequence pool and then tap Settings.
- Open the assign menu of the executor the sequence is assigned to (Assign + press the executor button) and then tap Settings.
- Tap Settings in the title bar of the sequence sheet. This opens the settings for the displayed sequence.

The column MIB hosts all available MIB settings for the sequence:

- MIB:

  - Enabled: MIB will be performed according to the cue and cue part MIB settings.
  - Never: MIB will never be performed for this sequence. All cue and cue part specific MIB settings will be ignored. When this setting is selected it will be displayed in the MIB mode column of the sequence sheet as "Never!".
  - Force Early: Will perform the MIB for all cues that can perform MIB as soon as the dimmer is closed. Further MIB settings specified by the user per cue or cue part will be ignored. When this setting is selected it will be displayed in the MIB mode column of the sequence sheet as "Early!".
  - Force UponGo: MIB will be executed with the next cue transition after the dimmer is closed. For all cues that can perform MIB. Further MIB settings specified by the user per cue or cue part will be ignored. When this setting is selected it will be displayed in the MIB mode column of the sequence sheet as "UponGo!".
  - Force Late: Performs the MIB latest in the cue before the dimmer opens again. For all cues that can perform MIB. Further MIB settings specified by the user per cue or cue part will be ignored. When this setting is selected it will be displayed in the MIB mode column of the sequence sheet as "Late!".

- MIB Mode: This setting defines which MIB mode will be executed for any cue parts whose MIB mode is set to Default.

  - None
  - Early
  - UponGo
  - Late

For more information about the single MIB mode types, please read above. When the MIB setting per sequence is set to Force Early, Force UponGo or Force Late it still pays attention to the MIB preference per cue.\
 

To change the global MIB preferences go to Menu - Preferences and Timing.\
In the MIB preferences column of the Cue section, it is possible to change the defaults that will be set to a new cue when storing it:

- MIB Mode: The mode that shall be set when storing a new cue that is able to execute MIB.
- MIB Fade: The MIB fade time that shall be set when storing a new cue that is able to execute MIB.
- MIB Delay: The MIB delay time that shall be set when storing a new cue that is able to execute MIB.
- MIB Dynamic: The MIB dynamic mode that shall be set when storing a new cue that is able to execute MIB.

For more information about these MIB properties, please read above.

 

The section Timing allows to set the global MIB settings:\
The global MIB fade and MIB delay times can be set here. For more information about MIB fade and MIB delay, please read above.\
The property MIB transition defines which transition type will be applied to the fade of MIB. Read more about the different types of transition in the [Cue Transition paragraph above](/grandma3/2-3/key_rn_v1_2/#CueTransition).\
The MIB transition can only be defined for all MIB fades globally in the show file. It is not possible to define a different transition type for a single MIB fade per cue or cue part.

Attribute values that are already prepositioned or currently doing a move in black will be displayed with special colors within the fixture sheet and sequence sheet (in track sheet mode):

- During an MIB fade (only fixture sheet)

  - The background color of attribute cells that are fading will be displayed in a brighter peacock green.
  - The font color of attribute cells that are fading is black.

- Prepositioned

  - The background color of attribute cells that are prepositioned by MIB is a darker peacock green.
  - The font color of attribute cells that are prepositioned by MIB is black.

All these colors are defined in the color theme:

- Color definition group SheetColor

  - TextMIBFade
  - BackMIBFade
  - TextMIB
  - BackMIB

- ColorGroup FixtureSheetCell

  - MIBActive
  - TextPlaybackMIB
  - BackgroundPlaybackMIB
  - TextMIBFade
  - BackgroundMIBFade
  - TextSelectedPlaybackMIB
  - BackgroundSelectedPlaybackMIB
  - TextSelectedPlaybackMIBFade
  - BackgroundSelectedPlaybackMIBFade

---

 

### []()Selection

### []()Shuffle Selection

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The new keyword Shuffle allows to shuffle the selection order in a random sort. Shuffle is part of the MAtricks toolset.

To enter the Shuffle keyword in the command line, use one of the options:

- Press SelFix SelFix
- Type **Shuffle**
- Type the shortcut **Shuf**

By default Shuffle will randomize the selection order on all 3 axes.

To shuffle on a single axis only the user has to enter a value for shuffle of the desired axis in the MAtricks.\
To do so, open an MAtricks window, and tap + for XShuffle, YShuffle and/or ZShuffle, or tap XShuffle, YShuffle and/or ZShuffle to enter a value for the settings.\
When having a value greater 0, it is also possible to decrease the value by tapping -.

Each shuffle setting per axis can be set to a value from 0 (=None) up to 32768. Each value represents a different shuffled selection order. When selecting the very same amount of fixtures again and again, the same shuffle value will result in the same shuffled selection order. This can be helpful when you have found a nice shuffled selection order for e.g. 20 fixtures and you want to have the same shuffled selection order for other 20 fixtures. In this case apply the same shuffle value in the MAtricks when having the new fixtures selected.\
These shuffle values can also be stored into MAtricks in the MAtricks pool.

By tapping Shuffle in the MAtricks window, shuffle will be executed for all three axes.

(The following examples require a selection that has fixtures placed on more than one positions along the axis that shall be shuffled. For more information read about the [selection grid](/grandma3/2-3/operate_selection/) and the [grid keyword](/grandma3/2-3/keyword_grid/).)

To shuffle the current selection on the x-axis, type:

User name\[Fixture]> MAtricks "XShuffle" +

To shuffle the current selection on the y-axis, type:

User name\[Fixture]> MAtricks "YShuffle" +

To shuffle the current selection on the z-axis, type:

User name\[Fixture]> MAtricks "ZShuffle" +

It is also possible to set a certain value to any of the three shuffle settings. To set the shuffle to 4 for the y axis, type:

User name\[Fixture]> MAtricks "YShuffle" 4

3 shuffle modes are available:

- Auto: When doing shuffle only for one dimension this behaves like Linked. Shuffling on two or three axes behaves like Unlinked.
- Linked: All fixtures that are placed on the same position along the axis that will be shuffled but have different position on the other axis, will keep their alignment along the other axis.
- Unlinked: The fixtures placed on other axis than the axis that will be shuffled but have the same position on the shuffled axis will be shuffled independently.

To switch between these shuffle modes, tap ShuffleMode in the MAtricks window.

**Hint:**\
When deactivating or resetting the MAtricks, the original selection order will be restored.

**Known issue:**\
The shuffle command generates greater numbers for the MAtricks shuffle settings than the user can enter manually.

---

 

### []()Multiple Selections

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Each user profile has now 2 different selections called Selection 1 and Selection 2.\
At the moment, the active selection is displayed in the MAtricks window. The button ActiveSel displays a 1 for selection 1 and a 2 for selection 2.\
To switch between the two selections tap or tap and hold ActiveSel in the MAtricks window. To switch from selection 1 to selection 2, type:

User name\[Fixture]> Select Selection 2

It is possible to copy the selection from one to the other selection. Copy Sel copies the current selection to the other selection. To copy selection 1 to selection 2, type:

User name\[Fixture]> Copy Selection 1 At Selection 2

You can also clone the values from one to the other selection. To clone the values from selection 1 to selection 2, type:

User name\[Fixture]> Clone Selection 1 At Selection 2

Or select the target selection and then tap Copy Values in the MAtricks window.

The combination of Shuffle and Copy Values allows to shuffle the existing values across the shuffled selection. To do so follow these steps:

1. Do the initial selection and apply the values.
2. Copy the current selection to the other selection.
3. Shuffle the current selection by tapping Shuffle.
4. Copy the values from the other selection to the current selection.
5. With each additional copy action the values will be shuffled again.

---

### []()Shift Selection

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The new MAtricks setting Shift allows to shift the current selection within the actual grid positions. This can be done per axis in the grid. Therefore, change the values for XShift, YShift or ZShift.\
Positive values shift to the right (x axis), to the bottom (y axis) and to the front (z axis). According to this, negative values shift into the opposite direction.

In combination with the 2 selections per user profile it is possible to do a circular copy of values. To do so follow these steps:

1. Do the initial selection and apply the values.
2. Copy the current selection to the other selection.
3. Shift the current selection by the shift value of your choice.
4. Copy the values from the other selection to the current selection.
5. With each additional copy action the values will be shifted again by the set shift value.

---

 

### []()Variables

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Variables of each type can be concatenated together. 

Precondition: The variables need to be created by the user first.

OK:GetUserVar "\*"\
answer Integer 42\
grandMA Integer 3\
greeting Text "Hello World"

To concatenate the values of the variables greeting and answer into one variable called result, type:

User name\[Fixture]> SetUserVar result $"greeting"$answer

OK:GetUserVar "result"\
result Text "Hello World42"

To concatenate the values of the variables greeting and answer into one variable called result but with a space in between, type:

User name\[Fixture]> SetUserVar result $"greeting"" "$answer

OK:GetUserVar "result"\
result Text "Hello World 42"

To concatenate the integer values of the variables grandMA and answer as a string into one variable called result, type:

User name\[Fixture]> SetUserVar result $"grandMA"$"answer"

OK:GetUserVar "result"\
result Text "342"

To do a mathematical addition of the values of the variables grandMA and answer into one variable called result, type:

User name\[Fixture]> SetUserVar result $grandMA$answer

OK:GetUserVar "result"\
result Integer 45

With a smart use of quotes and setting variables it is also possible to convert the variable types:

Precondition: Variable of the type integer:

OK:GetUserVar "answer"\
answer Integer 42

To convert the integer to text, type:

User name\[Fixture]> SetUserVar answer $"answer"

OK:GetUserVar "answer"\
answer Text "42"

This works also vice versa. The same rules for working with integer variables apply also to variables of tye double (e.g., 1.500000).

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The user can now also add single quotes into a text value. To create the variable called command which shall contain the value "Store Group 1 'Spot'", type:

User name\[Fixture]> SetUserVar command "Label Group 1 'Spot'"

OK:GetUserVar "command"\
command Text "Label Group 1 'Spot' "

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Setting a variable into quotes when calling it will handle the value of the variable as a quoted string, no matter of which data type the variable is defined.

To get the string interpreted as a command call the variable without quotes, type:

User name\[Fixture]> $command

OK: Label Group 1 "Spots"

To call the value as a string put the variable name into quotes, type:

User name\[Fixture]> $"command"

Fixture "Label Group 1 'Spots' "

---

### []()Trackpad Window

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The trackpad window can be used in two different modes: PanTilt and Mouse. 

It can be opened when tapping into the free area of the user defineable area. The Add Window pop-up opens. Tap Other and then Trackpad.\
The minimum size of the trackpad window is 4x4 half-size squares.

To change the mode of the trackpad window, tap Mode in the title bar of the trackpad window.\
In Pan/Tilt mode the pan and tilt attributes of the selected fixtures can be controlled. To change the resolution of the trackpad in PanTilt mode, tap Resolution in the title bar. It will change between the resolutions Coarse, Normal and Fine. The trackpad resolution is independent of the encoder resolution. A gray grid is displayed for better axis guidance.\
In addition, it is possible to invert pan and/or tilt with Invert Mode. P/T Mode allows to move only one axis or both axes for a more precise input. 

When switching the mode to Mouse, the user can use the trackpad as a substitution for a hardware mouse. It provides two mouse buttons at the bottom: Left and Right. In mouse mode, it is also possible to adjust the resolution. The resolutions of mouse mode and pan tilt mode are independent from each other.\
The cursor fades out after 5 seconds of idle time and returns at the last used position when using it again. When the cursor returns, it is displayed zoomed for 3 seconds and will then shrink to its normal size. With Reset Mouse, it is possible to respawn the cursor centered at screen one.\
When Tap for Click is activated the user can also tap into the trackpad area to execute a left click. When it is disabled, only tapping Left will execute a left click.

**Important:**\
The main usage of the trackpad window is on devices with a touch screen. Therefore, it is necessary to click and hold the mouse key on a physical mouse when you try to operate the trackpad window with a normal mouse.

---

 

### []()3D Window

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Prisms are visualized in the 3D window now. The visualization of prisms is not limited to circular or linear prisms.\
In the current state the attributes "Prism" (prism selection), "PrismPos" (prism indexed rotation) and "PrismPosRotate" (prism continuous rotation) are visualized.\
Each prism needs to be defined with its facets as one slot of a wheel.

In Beam Quality "Line" the beam is visualized with only one line even if a prism is inserted. To display one line for every facet of a prism go to the Window Settings of the 3D Window and enable Prism Lines. It is disabled by default.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

CTO, CTB and CTC are visualized in the 3D window now. The color temperature can be defined by the physical values of a related channel function or its channel sets and the property "ColorTemperature" of the Geometry Type "Beam". If both are defined, the value of the channel has priority over the value of the geometry.

**Hint:**\
Fixture Types that are imported from previous versions of grandMA3 or are part of show files from previous versions may show a wrong color temperature. In this case, exchange the fixture type with one from the grandMA3 fixture library of version 1.2 or correct the physical values of the fixture type.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Additional support of multi-touch gestures was added. Use 2 fingers scroll gesture to move the camera and the 2 finger zoom gesture to zoom the camera to the center of its view. For more information about the gestures, read the [gestures topic](/grandma3/2-3/ws_gestures/).

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

A new Beam Quality was added. Select the new Beam Quality "High Shadow Fancy" in the title bar of the 3D window. This quality setting offers a less technical representation of the beams in favor of a more realistic look.

---

 

### []()Frame and Time Readout

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

With the frame and time readout is it possible to choose a preferred display format for timings. It is divided into 2 readouts: Time and Frame.\
Time includes days, hours, minutes and seconds, while frame defines the display format of fractions of a second.

As time readout are 4 different format available:

- 10d11h23m45: All values, except seconds, display their unit. In this case days are d, hours are h and minutes are m.
- 251h23m45: All values, except seconds, display their unit. Days are converted to hours.
- 10.11:23:45: The units are not displayed. Days and hours are separated with a dot (.) , while all other units are separated with a colon (:).
- 251:23:45: The units are not displayed. Days are converted to hours.

The preferred time format and frame readout can be set in the user profile. The applied values are used at several places:

| Location                                | Time Readout                     | Frame Readout                                                                          |
| --------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| Fixture Sheet                           | Yes                              | Yes                                                                                    |
| Sequence Sheet                          | Yes                              | Yes                                                                                    |
| Macros                                  | Yes                              | Yes                                                                                    |
| Timecode Slot                           | Yes                              | Frame Readout is determined by the incoming timecode source or the timecode generator. |
| Timecode running with internal clock    | Yes                              | Yes                                                                                    |
| Timecode running with external timecode | Yes                              | Determined by the timecode slot                                                        |
| Timecode Editor                         | Determined by the timecode show  | Determined by the ​timecode show                                                       |
| Timecode Viewer                         | Determined by the ​timecode show | Determined by the ​timecode show                                                       |
| Clock (ClockSource set to Timecode)     | Determined by the timecode slot  | Determined by the timecode slot                                                        |
| Preferences and Timing                  | Yes                              | Yes                                                                                    |

 

The readout can be changed individually for each location in the corresponding settings of the windows or objects, except for macros, and the preferences and timing menu. When a readout value is set into angled brackets, e.g., \<Seconds>, then the readout is set to default at this place and the readout value from the level above in the hierachy is used.

**Hint:**\
The user defined time readout is used in the encoder bar even if the readout for an e.g. fixture sheet is changed separately.

When opening a timing calculator, e.g., for the fade time, the preselected frame readout is determined by the settings in the user profile. Timing calculators offer only timing formats like seconds, 24 fps, 25 fps, 30 fps and 60 fps. Speed calculators offer only speed formats as seconds, Hertz or BPM.

The timecode generator frame unit is always set to seconds by default.

The sequence sheet displays timings are now right aligned in columns where only one time is displayed. This leads to having the same parts of a time always aligned to the same location within the cell. The readability is improved. When the condensed timing option is enabled in the sequence sheet the combined timing columns are center aligned.

To provide a better optical representation, the trailing zeros of seconds are always suppressed. When the frame readout is set to a frame unit the times will always display trailing zeros.\
To easily distinguish between fractions of a second and frames, fractions of a second will be separated with a dot (.) from the seconds, while frames will be separated with a colon (:) from the seconds.

**Restriction:**\
It is not possible to enter times with frames as fractions of a second by entering it as second:frame, e.g., 2:5.\
Timing calculators in condensed timing columns, e.g., in the sequence sheet, do not allow the input of frame formats, e.g., 2:5/4:8 or 2S5F/4S8F 

---

 

### []()Preferred IP for DMX protocols

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

DMX protocols (Art-Net or sACN) choose now their interface in auto mode depending on the setting made in the Preferred IP setting.\
Preferred IP is available for each DMX protocol separately in Menu - DMX Protocols.\
The first interface that fits into the IP range of preferred IPs will be chosen to handle the protocol.\
When an interface is selected, the label of the auto mode value will change from Auto to \<Con x(x.y.z.a)>, e.g., \<Con 2(10.0.69.42)>.\
When no interface could be determined, then \<None> will be displayed. The user can then change the preferred IP or change the selected interface manually.

Tap Preferred IP in order to enter a new preferred IP.\
The preferred IP can be entered in different styles. The most accurate style is IP/Prefix, e.g., 10.0.0.0/8. The prefix defines the area of IPs to search for the best interface.\
A prefix defines the amount of possible IPs. The start of the possible IP range and the range itself depends on the common rules and definitions of IPv4 networks. Prefix 0 includes 4,294,967,296 IPs (255 \* 255 \* 255 \* 255) up to prefix 32 which is only one IP.\
When entering an IP without a prefix, the prefix will automatically be determined by the software. IPs of the class A area (0.0.0.0 - 127.255.255.255) get prefix 8, class B (128.0.0.0 - 191.255.255.255) gets prefix 16 and class C (192.0.0.0 - 223.255.255.255) gets prefix 24.

The user can also only enter the beginning of an IP and the software completes it to the first IP of this range, e.g.:

- 10 will be completed to 10.0.0.0/8
- 172.16 will be completed to 172.16.0.0/16
- 192.168 will be completed to 192.168.0.0/24

In addition the output configuration (Menu - Output Configuration) has now the properties ArtnetInterface and SACNInterface. These properties display only the index of the selected interface (not auto mode) or Auto when auto mode is selected.

---

 

## []()Other Enhancements

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Sequence sheet:

- Cue number and cue part number columns are now in front of the name column.

- Sequence sheet shows a world indicator if the user is in a different world than world 1.

- The column coloring improved so that related columns are grouped together.

- Sequence appearance and scribble options are available in the sequence settings pop-up.

- The sequence sheet context menu is updated:

  - The display tab is now more structured.
  - Properties that mask the sequence sheet, e.g., Cue Settings, Preset Timings, etc. are moved to the new tab Mask.

- In newly created sequence sheets the preset timing is hidden by default. It can be displayed any time by enabling Preset Timing in the mask tab in the context menu of the sequence sheet.

- Sequence sheet in track sheet mode distinguishes now between increasing and decreasing dimmer values. Increasing dimmer values are displayed with a cyan font color, while decreasing dimmer values are displayed with a green font color.

- The sequence sheet in track sheet mode allows to change values of stored attributes. To do so, tap and hold or do the 2-finger edit gestures. The editor for the selected cell(s) opens. it is now possible to change the value to another value/channel set, a preset, a sound code or execute a special function like removing the value or releasing the value.\
  It is possible to select values across different cues and attributes and fixtures. To do so, press and hold Ctrl and tap single cells and/or do a lasso selection.\
  The option CueOnly in the title bar allows to change the values with the cue only option. This option can be modified in the calculator as well. CueOnly is only displayed in the title bar when the track sheet mode is enabled.\
  Destination Attribute(s) defines if the values should only be changed for the selected cells (=Selection), for all attributes of the feature group of the selected attributes (=Feature), for all attributes that are part of the same activation group the selected attributes are part of (=Activation Group) or for all attributes of all fixtures used in this cue part (=All Fixtures). \
  Tapping Apply to steps through the different values Selected Parts, All Parts in sel. Cues and All Cues/Parts in order to define where to change the values to the new value:

  - Selected Parts: Changes the value only in the cue parts of the selected cells.
  - All Parts in sel. Cues: Changes the value for all fixtures and attributes in all parts of the cues, where cells are selected.
  - All Cues/Parts: Changes the value for all selected attribute cells in all cues.

- In addition to the above way of editing values in the track sheet mode, it is possible to edit the values with the value encoder of the sequence sheet encoder bar. To do so, tap into the title bar of the sequence sheet. The sequence sheet encoder bar will pop-up on the encoders. Switch to the Data Edit page by tapping Page several times in the encoder bar. The value encoder changes its label depending on the selected layer of the sequence sheet, e.g., Absolute, Relative, Fade, and so on. To change the layer in the sequence sheet enable the Layer Toolbar in the settings of the sequence sheet. As above, Cue Only editing is here also possible by enabling Cue Only in the title bar of the sequence sheet.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) grandMA3 supports now USB drives formatted with the exFAT file system for the show file handling.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Objects in the Mesh Pool displays a thumbnail preview of the mesh now.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) MIDI

- The system monitor outputs now also messages for MIDI Control Changes if the option Show MIDI Data in System Monitor is enabled.
- MIDI Control Changes are now respecting the MIDI Offset of the Output Configuration.
- It is now also possible to set a MIDI remote that reacts to MIDI Control Change address 0.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) It is now possible to enter simple mathematic formulas into input calculators, e.g., the attribute calculator.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Filters for filtering tables, e.g., patch or layout editor, have now an option to filter also blank cells. To display only data entries with blank cells, choose the option \<Blank>. To remove the column from the filter, choose the option \<No Filter>.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The style of the attribute calculators changed. The right section with the buttons allows showing the list of special categories like Specials, Presets, Channel Sets and Sound Codes permanently. The last selected category will be remembered when opening the calculator again. The calculators in the fixture sheet, encoder bar and sequence sheet (in track sheet mode) remember their state individually.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Output configuration: Column modes Condensed and XLR Only open now an editor when editing an XLR port. The editor allows to change all possible properties of the port at the same time. When setting a port to input, the additional property Merge mode appears. When the merge mode is set to Prio the property Prio will be also displayed.\
It is also possible to edit the same port on multiple devices at a time. When doing so, you can also specify a range of universes when editing a port with the help of the Thru keyword, e.g., 1 Thru 5. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) When copying cues, the copy cue pop-up allows now to choose if the cue should copied by applying cue only to the target cue and/or copying the values with or without calling the cue status. To do so, enable or disable Cue Only or Status in the pop-up. These buttons will appear in the pop-up when the copy operation allows to use these options.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New command TopUp selects the top instance of the currently selected subfixtures.

To enter the TopUp keyword in the command line, use one of the options:

- Press Set Up
- Type **TopUp**
- Type the shortcut **TopU**

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Encoder bar was added to the Phaser Editor. When setting focus to the Phaser Editor by tapping the title bar, the encoder bar will change to the Phaser editor encoder bar. The encoders work only for position phasers.\
The encoders MoveX, MoveY, Handle, Size, Aspect and Rotate work and control their corresponding tools in the Phaser. 

The displayed values next to the encoders currently show the value delta in percent. After finishing the turning of an encoder the new values are applied to the fixtures, and the value will turn gray in the encoder display. The encoder displays the percentage of change in percentage compared to the prior values of the fixture. When the values turn gray, the encoders still display the percentage value until the next changes are made.

The screen encoders behave differently than in all other places of the software: Screen Y cycles through the single steps of the phaser.\
Screen X cycles through the fixtures of the current selection.\
Toggling between single and all steps is possible by pressing the inner or outer ring of the screen encoders (dual encoder 5).

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)Fixtures that are limited by a group master display now a light purple marker in the IDType column of the fixture sheet.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) SelFix, On and Off works now also in conjunction with DMXUniverse, e.g. SelFix DMXUniverse 1 selects all fixtures patched to universe 1.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved the general network experience in sessions.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The update menu now also offers cue parts to update into.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The fixture sheet now displays a red marker per attribute and fixture when an attribute is active in a different programmer part or step.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) New macros were added to the macro library and MAtricks were added to the MAtricks library.

---

 

## []()What's Changed

- The folder for demoshows moved from the folder shared to shared/resources.

- The default IP for Con2 is changed to be an address in the range of 10.x.y.z. This changes applies only after a format and install of the new version.

- grandMA3 onPC on macOS puts the local loop back adapter to the first place in the order of network interfaces and does not offer virtual interfaces anymore.

- The value for the timecode slot of timecode shows is now 1-normalized. These values are possible:

  - -1 = Internal
  - 0 = Selected Timecode Slot
  - 1-8 = Timecode Slots 1 - 8.

- The maximum allowed size per mesh is now restricted to 10MB.

- The world indicator in sheets changed from "World:" to the world icon.

- Shutdown and Display are removed from the control bar in the web remote.

- The input for the unicast IP address in the DMX protocols menu and in the OSC menu is now a numeric calculator instead of a text input.

- On all places where it makes sense to enter an IP address together with a prefix it is now possible to do so, e.g., My Interfaces Menu and Preferred IP.

- The color picker to change colors in the settings of a pool window displayed a non-functional button for the Swatch Book. The button is now removed. 

- The default for the timecode after roll is now set to 0.5s.

- ​In new show files the sync option for user profiles and cues is now set to off.

- grandMA3 onPC on Windows does not open the single terminal window anymore.

- ​Newly opened fixture sheets have Fixture Sort enabled.

- The input calculator for the Address in the DMX Remote menu allows now only to enter numbers and the dot.

- The maximum possible dimensions for stages are now limited to -11500km to +11500km on X and Y axis. Z axis is limited to -20km to +20km. On the XY plane the resulting area is as big as the surface of the earth itself.

- The default overall intensity of beams and spots in the 3D window is adjusted. Beams and spots have less intensity now by default.

- The readout of the overall intensity of spot and beam in the 3D window options is changed. The intensity of spots and beams can be adjusted between 0% and 400%. The default is 100%.

- The wait time of macro lines is now a real time and is not rounded to the next DMX frame anymore. Nevertheless a macro line can still only be executed within one DMX calculation cycle.

- New hard key shortcuts:

  - Scribble : MA + X4|Layout + X4|Layout + X4|Layout
  - ListRef: MA + List
  - Timecode Slot: MA + X6|TC + X6|TC

- The Prefix column in the network menu is renamed to Mask, as it displays the subnet mask.

- Unpatched fixtures do not show any output in the 3D window. Unpatched fixtures are displayed with a dark red color in the 3D window. This marking can be disabled in the window settings of the 3D window by disabling Mark Unpatched in the tab "Misc". Default: Enabled.

- Fixture Type: the properties "MIBFade" and "DMXChangeTimeLimit" were moved from the DMX Channel to the Logical Channel.

- The limit of chat messages is now set to 2,500 characters.

- The version column in the network menu and software update menu moved more to the left, so that it is always visible when opening these menus on the big displays.

- The names of presets that are played back by a sequence are only displayed in the absolute layer. All other layers display only the value and a preset marker. To learn more about markers in the fixture sheet, read [here](/grandma3/2-3/ws_colors_markers/).

- The default color for sounds has changed from a bright orange to a dark purple. This color is applied to new sound pool windows, and to the color indicator of the sound codes.

- In Menu - Preferences and Timings the Timing tab is renamed to Cue Defaults , the Sequence Preferences to Sequ Defaults , and a new tab for global Timing , accomodating MIB global timing, is added.

- Data lines that are added to the Art-Net and sACN configuration are created "not enabled" to avoid any conflicts with active output.

- The physical XLR Input ports are set to mode IN per default.

- Layout element properties DimensionX and DimensionY are renamed to PositionX and PositionY.

- DMX protocols are now sent with 30Hz instead of 60Hz.

- Frames per second in the 3D window is shown without decimals now.

- The 3D window does not show line beams if wireframe is activated and the Beam Quality is set to "None"

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No label was displayed if a fixture did not have a Fixture ID. This bug is fixed. A label is shown even if a fixture only has a Custom ID.                                                                                                                                                   |
| A label was shown even if 3D visible of a fixture was set to "No" in the patch. This bug is fixed. If a fixture is hidden also its label is not displayed.                                                                                                                                   |
| ColorRGB attributes linked to different geometries on the same level in the hierarchy were mixed together. This bug is fixed. ColorRGB attributes now only affect the geometry they are linked to and not other geometries on the same level.                                                |
| 3ds mesh files were not imported correctly if there was a dot (.) in the name of the file. This bug is fixed. 3ds files that have a dot in the file name are now imported correctly.                                                                                                         |
| The Center button in the 3D Setup Encoder Bar did not work as expected. This bug is fixed. Tapping Center resets the value of the axis that is not part of the Axis Group Type selected in the Arrangement.                                                                                  |
| The grandMA3 application did possibly crash if a 3ds file with a lot of linked materials was imported. This bug is fixed. 3ds files with a lot of linked materials do not possibly cause a crash any longer.                                                                                 |
| Opening a 3D window with very detailed meshes or a very high count of meshes and a Selection Grid on the same display could cause a crash. This bug is fixed.                                                                                                                                |
| Executing SelFix and At to a preset very fast and having individual times in the preset did not display the timings correctly in the 3D. This bug is fixed. Selecting fixtures and executing a preset very fast right behind each other is now displayed with the correct timings in the 3D. |
| In the 3D setup encoder bar the first one or two ticks of the dual encoder were not recognized. This bug is fixed. Now also the first ticks of the encoder are recognized.                                                                                                                   |
| When editing a camera in the camera pool Reload Camera did not apply changes of FOV, Camera Mode and Zoom. This bug is fixed. Changes on FOV, Camera Mode and Zoom are applied to the camera with the when tapping Reload Camera.                                                            |
| A recall of the camera in the 3D window was executed if another camera was selected in the camera pool. This bug is fixed. The active camera in the 3D window if the selected camera is changed in the camera pool.                                                                          |
| The position of the pink preview boxes of the 3D setup encoder bar arrangement tool was not in sync with other stations on the network. This bug is fixed. The position of the pink preview boxes is synced to other stations on the network now.                                            |
| Rotate to circle center did not work properly if the Angle Range of the circle was not 360 degree. This bug is fixed. Return to circle center in the arrangement tool circle now works as expected with Angle Range and Angle Start.                                                         |
| Labels in the 3D window were drawn above the fps indication. This bug is fixed. Labels are not drawn above the fps counter any longer.                                                                                                                                                       |
| The label of a fixture was shown even if "3D Visible" of the fixture was set to "No". This bug is fixed. Labels are shown only for fixtures that are set to visible in the 3D window.                                                                                                        |
| Changing the rotation of a fixture directly after using the "Rotate to Circle Center" functionality of the arrangement tool caused a jump of rotation of the fixtures. This bug is fixed. Changing the rotation does not cause a jump after Rotate to circle center.                         |
| Changing the Throw Ratio of a fixture type with a rectangular beam did not change the throw ratio of the beam in the 3D window. This bug is fixed. The 3D window now shows the correct Throw Ratio of the fixture type.                                                                      |
| The title bar of the 3D window displayed the selected tool only after changing the tool once. This bug is fixed. The selected tool is immediately shown once the 3D window is open.                                                                                                          |
| Column Interval and Row Interval in the arrangement tool "Grid" were swapped. This bug has been fixed. Column Interval now adjusts the offset between several columns.                                                                                                                       |
| 3 finger scroll did not work if all three fingers were inside a 3D window. This bug is fixed. 3 finger scroll works now also in the 3D view.                                                                                                                                                 |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tap and hold of Page Down in the executor bar did not switch to page 1. This bug is fixed. The selected page switches now to page 1 when the user taps and holds Page Down in the executor bar.                                                                                                                                                                 |
| The calculator for entering MAtricks values displayed too many decimals. This bug is fixed. MAtricks calculators allow now only to enter integer numbers.                                                                                                                                                                                                       |
| Turning an encoder in the layout encoder bar to the end and beyond turned the encoder internally further. This bug is fixed. Turning encoder in the layout encoder bar to the end and then turning into the other direction continues directly with changing the values.                                                                                        |
| Reducing the height of a layout element to smaller than 25 removed the dimmer bar of the element. This bug is fixed. Small layout elements keep their dimmer bars.                                                                                                                                                                                              |
| Pressing Power several times on a console let the shutdown pop-up several times. This bug is fixed. The shutdown pop-up can only appear once.                                                                                                                                                                                                                   |
| Labelling of an executor opened only a keyboard without the possibility to add a scribble. This bug is fixed. An input field with the option to display an on screen keyboard and a scribble area opens now when labelling an executor.                                                                                                                         |
| Help listed the shortcuts in the entries for the custom ID types in different styles. This bug is fixed. Help displays now the entries of the custom ID types in the same style in the command line feedback.                                                                                                                                                   |
| Macro wait times allowed up to 10 decimals. This bug is fixed. The maximum allowed digits for macro wait times is set to 3.                                                                                                                                                                                                                                     |
| Setting the maximum allowed wait time within a macro switched the wait time to trigger Go. This bug is fixed. Entering the maximum possible wait time applies it now correctly to the macro line.                                                                                                                                                               |
| Entering a wait time for a macro line that was a bit smaller than the maximum allowed time rounded the time up to be above the limit. This bug is fixed. The wait time is not rounded anymore to be above the maximum allowed wait time.                                                                                                                        |
| The software could crash when cutting and pasting a huge amount of objects. This bug is fixed. The software does not crash anymore when doing cut and paste.                                                                                                                                                                                                    |
| Pause assigned to an executor button was only activated during press and hold of the executor button. This bug is fixed. The pause function assigned to an executor button can now be toggled.                                                                                                                                                                  |
| The software crashed when deleting several layout elements that were selected with the lasso tool and the sorting order was not subsequent. This bug is fixed. The software does not crash anymore when deleting layout elements.                                                                                                                               |
| It was not possible to oops the creation of a time range within a timecode show. This bug is fixed. It is now possible to undo the creation of a time range.                                                                                                                                                                                                    |
| Entering mathematic calculations into a timing calculator did not calculate the correct results. This bug is fixed. Doing mathematic calculations within a timing calculator are now done correctly. All input times will be converted into seconds before doing the calculation.                                                                               |
| It was possible to overwrite the demo shows when having one loaded and displaying the network for one of the stations that were part of the session. This bug is fixed. Demo shows can not be overwritten anymore.                                                                                                                                              |
| Key presses were not recognized by grandMA3 onPC on Windows when one of the windows was minimized. This bug is fixed. grandMA3 onPC on Windows now always recognizes key presses if any of the windows has the focus.                                                                                                                                           |
| When closing grandMA3 onPC and starting it again the former display setting such as size and position were not remembered. This bug is fixed. Starting grandMA3 onPC remembers now the former display settings.                                                                                                                                                 |
| It could happen that macro lines were not triggered after the wait time expired. This bug is fixed. Macro lines will be executed after the wait time expires.                                                                                                                                                                                                   |
| The maximum possible length of variable names was limited to 15 characters. This bug is fixed. The maximum length of variable names is now set to 4,096 characters. Exceeding this limit will cut off the rest of the name.                                                                                                                                     |
| Copying one cue to another via the "At" keyword was not possible. This bug is fixed. Copying Cue 1 At Cue 2 is possible.                                                                                                                                                                                                                                        |
| LUA Obj.Get command was not working properly together with timecode events. This bug is fixed. Obj.Get command is working as expected when using together with timecode events.                                                                                                                                                                                 |
| The input of input pop-ups was always interpreted as string. This bug is fixed. The input pop-ups detect now the type of the inputted values and treat it in the correct way: Integers are handled now as numbers and not as strings. When the input shall be handled as a string, the pop-up needs to be created with quotes, e.g., ("Enter your input here"). |
| Exchange Filter y At Filter y deleted filter y. This bug is fixed. Exchange of filters in the filter pool does not delete filters anymore.                                                                                                                                                                                                                      |
| Select Layout x.y did not select the layout element y of layout x. This bug is fixed. Select Layout can now select layout elements.                                                                                                                                                                                                                             |
| Lasso selection in layouts did not always work as expected depending on the direction of drawing the lasso. This bug is fixed. A lasso selection in the layout window selects now the layout elements in the correct order.                                                                                                                                     |
| Using %s in functions but referencing to a number instead a string crashed the software. This bug is fixed. %s and referencing to numbers returns now an error in the system monitor.                                                                                                                                                                           |
| When selecting fixtures in a not consecutive order while being in a world added gaps between the fixtures in the selection grid. This bug is fixed. Selecting fixtures while being in a world puts the fixtures now on the correct grid positions.                                                                                                              |
| The large Go+, Go- and Pause did not work when a pop-up was open. This bug is fixed. Large Go+, Go- and Pause can now always be operated.                                                                                                                                                                                                                       |
| Delete Programmer did not work. This bug is fixed. Delete Programmer deletes now the selected steps of the current selected programmer.                                                                                                                                                                                                                         |
| While being in the patch and pressing Edit + Please closed the patch without asking how to proceed with the changes. This bug is fixed. Edit + Please does not do anything anymore while being in the patch.                                                                                                                                                    |
| MA + X9, X10, X11 or X12 entered the keyword Executor into the command line. This bug is fixed.  MA + X9, X10, X11  or X12 does not enter a keyword into the command line anymore.                                                                                                                                                                              |
| Loading a show file from v1.1.3.2 in v1.1.4.2 or newer moved all timecode events to 0s. This bug is fixed. Loading show files from prior versions recall the timecode events as they were stored.                                                                                                                                                               |
| Update of preset did not take the preset mode of the store options into account. This bug is fixed. Updating presets uses now the preset store mode.                                                                                                                                                                                                            |
| Empty card readers were listed as nameless drives. This bug is fixed. Card readers that have no card inserted are not listed anymore.                                                                                                                                                                                                                           |
| Parts that were labeled with the default name (e.g., Part 1) did not change their label when they were moved to a different part index. This bug is fixed. Part labels are now updated when moving parts.                                                                                                                                                       |
| Macros were listed still as running when the last macro line had set the wait time to Go. This bug is fixed. Macros are not staying on anymore when the last macro line is triggered by a Go.                                                                                                                                                                   |
| It was not always possible to select fixtures in the fixture sheet by tapping them when the sheet was set to channel mode. This bug is fixed. Tapping fixtures in the fixture sheet in channel mode selects them now always.                                                                                                                                    |
| Exporting data pool 1 crashed the console. This bug is fixed. The console does not crash anymore when exporting the first data pool.                                                                                                                                                                                                                            |
| It was possible to keep a pressed flash on forever. This bug is fixed. Pressed down flashes are released when loading the show file again.                                                                                                                                                                                                                      |
| Clearing the programmer and having a command filter active did not stop the blinking of the At key. This bug is fixed. At stops blinking when clearing the programmer completely and having a command filter active before.                                                                                                                                     |
| Pressing Set resetted the MAtricks. This bug is fixed. Set toggles now the activation of the MAtricks instead of resetting them.                                                                                                                                                                                                                                |
| Labelling an executor added "Exec:" in front of the actual object name. This bug is fixed. Labelling an executor does not add extra terms in front of the original object name.                                                                                                                                                                                 |
| Tapping Save when loading a different show did not always save the show. This bug is fixed. When saving a show it is now always saved.                                                                                                                                                                                                                          |
| Edit + tapping a dual encoder crashed the console. This bug is fixed. Tapping a dual encoder while having Edit in the command line opens now the attribute calculator.                                                                                                                                                                                          |
| Store Please and Store Cue Please did not store a new cue of the selected sequence or did not store into the current cue of the selected sequence. This bug is fixed. Store Please now creates a new cue at the end of the selected sequence, while Store Cue Please stores into the current cue of the selected sequence.                                      |
| When closing grandMA3 onPC on macOS a new terminal window was opened. This bug is fixed. During shutdown of grandMA3 onPC on macOS the terminal window is needed, but it will close the application afterwards. For existing terminal sessions the user will be asked if they should be closed.                                                                 |
| Keyboard shortcuts were not disabled temporarily when opening the import MVR dialog. This bug is fixed. Keyboard shortcuts are not disturbing the input into the import MVR dialog anymore.                                                                                                                                                                     |
| Copying a sequence while being in a session resulted in a wrong output when playing it back. This bug is fixed. Playback of copied sequences creates now the correct output when being in a session.                                                                                                                                                            |
| When copying locked objects the lock state was discarded. This bug is fixed. A copy of an object creates now an excat 1:1 copy of the object.                                                                                                                                                                                                                   |
| Export and import of timecode shows ignored the leading zeros of decimals in the times of events. This bug is fixed. After exporting and importing timecode shows the correct times of events are applied.                                                                                                                                                      |

### Connections

| Description                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Art-Net poll replies were not sent by the grandMA3 every time. This bug is fixed. Art-Net poll replies are now send after every poll.                                                                                                                                                 |
| grandMA3 onPC on macOS could crash after a long time being in a session. This bug is fixed. grandMA3 onPC running on macOS should not crash anymore while only being idle in a session.                                                                                               |
| If the console was connected to a switch with DHCP disabled, changing the date and time was not possible during the first startup after a full install. This bug is fixed. Changing the date and time is possible after performing a full install and starting up for the first time. |
| Setting the world server address to loopback device or another MA station in the network caused the application to crash. This bug is fixed. Setting the world server address to different IP/URL does not crash the application anymore.                                             |
| An extension did not keep its custom set name when rebooting or repowering it. This bug is fixed. A custom set name on an extension remains until the user changes it again.                                                                                                          |
| The control bar and the message center used the same shortcut (Alt M). This bug is fixed. The shortcut for the control bar is now Alt B.                                                                                                                                              |
| Connections via the web remote did not always work, especially when using Google Chrome as browser. This bug is fixed. A web remote connection can now be established again when using Google Chrome.                                                                                 |
| Web remote connections to grandMA3 onPC running on macOS displayed only the bottom left quarter of the real display. This bug is fixed. Web remote connections to grandMA3 onPC on macOS display now again the full screen content.                                                   |
| The user layout element defaults were not always transmitted to connected stations within a session. This bug is fixed. Changing layout element defaults are now transmitted within a session to other stations.                                                                      |
| Timecode stopped immediately if the timecode was input on a connected station and the connected station disappeared from the network. This bug is fixed. Timecode after roll is triggered also when the incoming timecode signal of a connected station disappears.                   |
| xPort nodes did not always display the correct show file name when loading a different show file in the session. This bug is fixed. xPort nodes now update the show file name when loading a different show file in the session.                                                      |
| The show file was not saved before a station with higher priority was invited or joined the session. This bug is fixed. The show file is saved before a show file from another station is downloaded.                                                                                 |

### Patch

| Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotations of geometries were not processed correctly in some cases when editing a fixture type. This bug is fixed. Rotations are now applied correctly to geometries.                                                                        |
| The toolbar at the bottom of the window of the edit fixture type menu did not refresh when changing the tab of the menu. This bug is fixed. The toolbar is now updated according to the selected tab.                                        |
| Changes in the DMX footprint of a fixture type were only applied after leaving the patch once. This bug is fixed. Changes in the DMX footprint of a fixture type are now effected even without leaving the patch.                            |
| Cut and Paste of environment objects in the patch caused the link to the fixture type to break. This bug is fixed. Cut and pasted instances of environment objects do not lose their link to the correct fixture type.                       |
| Dimensions follow ratio did not work properly for all meshes when editing the properties of the model of a fixture type. This bug is fixed. Dimensions follow ratio does now also work if a mesh originally has a dimension of 1m x 1m x 1m. |
| When adding fixtures to the patch it could happen that cues lost the preset link for already programmed fixtures. This bug is fixed. Preset links in existing cues are not lost anymore when adding new fixtures to the show.                |

### Phaser

| Description                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The grouping fixture could not be used in the step creator. This bug is fixed. The step creator can also create phasers now with the grouping fixture.                                                            |
| Values created by the step creator were displayed as deactivated values in the fixture sheet. This bug is fixed. Values created by the step creator are now displayed as active in the programmer.                |
| Changing the speed of a running phaser restarted the phaser with every single encoder turn. This bug is fixed. Changing the speed of a phaser adjusts the speed now smoothly without restarting the phaser again. |

 

### Playback

| Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Timecode events were not triggered when the after roll was running. This bug is fixed. Timecode events will always be triggered when the timecode show is running. |

### Windows

| Description                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When switching on Selection Only in the DMX sheet the focussed cell was scrolled to the bottom of the DMX sheet. This bug is fixed. The DMX sheet scrolls now again to the top of the window when enabling Selection Only.                                                                                        |
| The priority drop down menu displayed HTP. This bug is fixed. Priority HTP is now displayed correctly as HTP in the priority drop-down.                                                                                                                                                                           |
| The shadow of text in the DMX sheet was not linked to the color theme. This bug is fixed. The color definition Global.Shadow is now also used in the DMX sheet.                                                                                                                                                   |
| It was not possible to clear the search in the color picker swatch book by one click. Thus bug is fixed. Clear Filter is added to the color picker swatch book.                                                                                                                                                   |
| All buttons to add a new entry into a table were labeled with "Insert New xyz". This bug is fixed. Buttons to add a new entry to a table are now labelled with "Insert new xyz".                                                                                                                                  |
| The LED indicator in ? in the control bar did not light up when tapping it. This bug is fixed. The LED indicator in ? in the control bar lights up when it is activated for the context sensitive help.                                                                                                           |
| The MAtricks editor displayed buttons like Insert, Delete and Paste which were not really useable in this kind of editor. This bug is fixed. The MAtricks editor displays now only useful buttons.                                                                                                                |
| The calculator for fixture positions always added m (for meter) to existing values which failed then when extending the value with a range. This bug is fixed. The values for fixture position in the calculator are now always recalled without a unit.                                                          |
| The table header of a timecode show in text mode could be displayed at the bottom of the window. This bug is fixed. The table header in text mode in the timecode window is always displayed at the top.                                                                                                          |
| It was not possible to switch to the empty tab in the object area of the assign menu. This bug is fixed. Executors can now be set to no object again.                                                                                                                                                             |
| The appearance menu displayed always Appearance also when no object was assigned. This bug is fixed. Appearance is now only displayed within the assign menu when an object is assigned.                                                                                                                          |
| Turning the executor knob within a playback window ignored assigned EncoderLeft and EncoderRight actions. This bug is fixed. The playback window uses now also assigned ExecutorLeft and ExecutorRight actions when turning the executor knob within the window.                                                  |
| If the on-screen keyboard for labeling in a store view popup was used, the text was not selected. This bug is fixed. The text will be selected when storing a view and using the onscreen keyboard.                                                                                                               |
| The assign menu did not offer to choose an executor configuration from a different data pool. This bug is fixed. It is now possible to select a data pool in the title bar of the assign menu in order to select an executor configuration from a different data pool.                                            |
| It was possible to delete entries in the all tab of the add window dialog. This bug is fixed. Entries in the all tab of the add window dialog can not be deleted anymore.                                                                                                                                         |
| The timecode settings window was displayed too big when opening it on the small screens. This bug is fixed. The size of the timecode settings window is now scaled to the size of the screen when opening it on one of the small screens.                                                                         |
| The styles of LinkType in the sequence sheet, Universe and Address in the DMX sheet were different between the context menu and the title bar of these windows. This bug is fixed. Button styles of sequence sheet buttons and DMX sheet buttons are now the same in the context menu as in the title bars.       |
| The help window used the keyboard shortcuts when they were enabled. This made it impossible to enter a search string. This bug is fixed. When setting focus to the help window, the keyboard shortcuts will be disabled temporarily.                                                                              |
| Opening the calculator for entering a new trigger time for a cue opened a normal numeric calculator. This bug is fixed. The calculator for the cue trigger time is now a timing calculator.                                                                                                                       |
| Deleting a step in the step creator did not work correctly. This bug is fixed. Deleting steps in the step creator works now as expected.                                                                                                                                                                          |
| Resizing a playback window to a smaller size and then resizing it again to a bigger size kept the fader area limited to the former and smaller size. This bug is fixed. The faders in the playback window use now the real estate of the available screen space.                                                  |
| Activating Shift or Caps Lock on the on screen keyboard moved the keyboard on the display to a different position. This bug is fixed. Using Shift or Caps Lock keeps the on screen keyboard now in its place.                                                                                                     |
| Scaling a calculator to a smaller size allowed to change it nearly to zero height. This bug is fixed. The minimum size for calculators is now set to a useful value, so that the calculators can always be operated.                                                                                              |
| Sorting by object column when editing a layout could crash the application. This bug is fixed. Sorting by any column is possible when editing a layout.                                                                                                                                                           |
| Layout Element Defaults menu allowed to add, delete, copy and paste entries. This bug is fixed. Layout Element Defaults can now only change their properties, but it is not possible to add, delete, copy or paste defaults.                                                                                      |
| The width of columns in the step creator window was unfortunate depending on the mode of the step creator. This bug is fixed. The column width in the step creator offers now the best readability when opening a step creator window.                                                                            |
| The naming of buttons and columns in the step creator were not clear. This bug is fixed. Ins Step is renamed to Insert Step, Del Step is renamed to Delete Step and the column Preset Ref is renamed to Preset Reference.                                                                                         |
| Calling a group with fixtures inside in a not consecutive order did not display the selection order correctly in the fixture sheet when fixture sort was enabled. This bug is fixed. Enabled fixture sort in the fixture sheet represents now also not consecutive selection orders, e.g., from groups.           |
| The black shadow on texts in the daylight color theme made some texts unreadable. This bug is fixed. The text shadow in the daylight color theme is now changed to a brighter color. This makes texts also on dark backgrounds readable.                                                                          |
| The graphs of the system info window could escape out of the window boundaries. This bug is fixed. The graphs of the system info window are not displayed outside the window anymore when the graph would exceed the window border.                                                                               |
| The playback window cut off the elements at the bottom when changing the width of the window. This bug is fixed. The playback window displays always all elements of a column. Depending on the ratio of width and height it will hide whole columns beginning on the right.                                      |
| When scrolling through a DMX sheet the separator line between single universes flickered. This bug is fixed. The universe separator line in the DMX sheet does not flicker anymore when scrolling.                                                                                                                |
| The executor bar displayed the white touch frame also when pressing a key and the outfade faded to black and jumped then to the correct colors. This bug is fixed. The executor bar displays only the touch frame when touching a hardware fader. The outfade fades now directly to the correct background color. |
| Help + tapping an element in one of the letterbox displays opened the help on the letterbox displays. This bug is fixed. As the letterbox displays are too small to display the help window in a readable size, the help window now opens on the corresponding large display.                                     |
| The scribble editor did not offer the complete possible area of the scribble. This bug is fixed. The scribble area in the scribble editor takes now advantage of the maximum possible scribble size.                                                                                                              |
| Scaling to canvas or elements in a layout window did not work correctly when the elements are not centered. This bug is fixed. Layout window zooms now correctly, even when the layout elements are not centered.                                                                                                 |
| Pool Appearance and Canvas Appearance in the layout editor displayed the same appearance in different styles. This bug is fixed. Pool Appearance and Canvas Appearance are now displayed in the same style.                                                                                                       |
| The white touch frame around executor labels in the executor bar was also displayed when pressing an executor key. In addition it faded in. This bug is fixed. The white touch frame in the executor bar is now only displayed when touching a fader. It only fades out.                                          |
| The screen encoder did not work in the Add Window dialog. This bug is fixed. The Add Window dialog can now be operated with the screen encoder.                                                                                                                                                                   |
| Sequence sheet offered LastGo as value for Link Type. This bug is fixed. As LastGo is not yet implemented it is removed as value for Link Type in the sequence sheet.                                                                                                                                             |
| Timecode events set to a time smaller than 1s were displayed in gray. This bug is fixed. Timecode events between 0s and 1s are also displayed in white.                                                                                                                                                           |
| Turning off the title bar on Windows onPC displayed the desktop behind the former title bar position. This bug is fixed. When disabling the title bars on Windows onPC the window makes now use of the new free space.                                                                                            |
| If a gobo was imported to the gobo pool from a USB drive this was not stored into the show file if the show file was saved to the local drive. This bug is fixed. The gobo is stored to the show file now if the show file is saved on the local drive.                                                           |
| Reload Camera did not work reliable when editing the properties of a camera. This bug is fixed. Reload Camera now applies the values to the camera in a reliable way.                                                                                                                                             |

---

 

## []()Appendix

- It is recommended to use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols it is recommended to use a dedicated physical network for each protocol.

---

## []()Known Limitations

The grandMA3 system supports at the moment only one external DMX source per universe for merging DMX into the system.

Software update via network to onPC stations requires confirmation during the install process at the destination system.

When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

Show files saved with versions prior to v1.0.0.3 cannot be loaded using this version.

When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over without user input. If all stations are of the same priority, then the station with the longest Online Time becomes the GlobalMaster for all stations.

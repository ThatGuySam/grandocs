---
title: "Release Notes 1.5"
description: "Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail w"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_rn_v1_5.html"
scrapedAt: "2026-06-12T21:25:49.576Z"
---
- [Get Started](/grandma3/2-4/key_rn_v1_5/#GetStarted)

- [Bugfix Version 1.5.2.3](/grandma3/2-4/key_rn_v1_5/#h2__1437913018)

  - [Other Enhancements](/grandma3/2-4/key_rn_v1_5/#h2_1198082799)
  - [​](/grandma3/2-4/key_rn_v1_5/#Bugfix)[What's Changed ](/grandma3/2-4/key_rn_v1_5/#h2_563643534)
  - [Fixed Bugs](/grandma3/2-4/key_rn_v1_5/#h2__1624482491)

- [grandMA3 Version 1.5.2.1​](/grandma3/2-4/key_rn_v1_5/#h2__234416704)

- [Features](/grandma3/2-4/key_rn_v1_5/#h2_727740091)

  - [Playback Engine](/grandma3/2-4/key_rn_v1_5/#h3__1886388219)

    - [Absolute and Relative Layers](/grandma3/2-4/key_rn_v1_5/#h3_611999356)
    - [Release Values](/grandma3/2-4/key_rn_v1_5/#h3_535471253)
    - [Stomp and Capture](/grandma3/2-4/key_rn_v1_5/#h3__1231776360)

  - [Cue Parts and Programmer Parts](/grandma3/2-4/key_rn_v1_5/#h3_1922197212)

  - [Special Values and Pan/Tilt Offset](/grandma3/2-4/key_rn_v1_5/#h3_100054290)[​](/grandma3/2-4/key_rn_v1_5/#Features)

  - [Agenda](/grandma3/2-4/key_rn_v1_5/#h3__1229996058)

  - [Layout](/grandma3/2-4/key_rn_v1_5/#h3__2084382304)

  - [3D Window](/grandma3/2-4/key_rn_v1_5/#h3__673189665)

  - [Import/Export Menu](/grandma3/2-4/key_rn_v1_5/#h3__671156747)

  - [Readout and Encoder Resolution](/grandma3/2-4/key_rn_v1_5/#h3_1424464029)

  - [Patch and Live Patch Menu](/grandma3/2-4/key_rn_v1_5/#h3_25192502)

  - [Special Executors](/grandma3/2-4/key_rn_v1_5/#h3__1819526639)

  - [DMX Curves](/grandma3/2-4/key_rn_v1_5/#h3_1465530181)

  - [Assign Menu and Settings Editor](/grandma3/2-4/key_rn_v1_5/#h3_53454221)

  - [onPC Improvements](/grandma3/2-4/key_rn_v1_5/#h3_539032469)

    - [USB MIDI Support](/grandma3/2-4/key_rn_v1_5/#h3_847521682)
    - [Audio In Selection](/grandma3/2-4/key_rn_v1_5/#h3__1163635527)

  - [MVR Merge](/grandma3/2-4/key_rn_v1_5/#h3_27294869)

- [Other Enhancements](/grandma3/2-4/key_rn_v1_5/#h2_596831770)

- [What's Changed](/grandma3/2-4/key_rn_v1_5/#h2__570807996)

- [Fixed Bugs](/grandma3/2-4/key_rn_v1_5/#h2_301368596)

- [Appendix](/grandma3/2-4/key_rn_v1_5/#h2__1835053169)

- [Known Limitations](/grandma3/2-4/key_rn_v1_5/#h2__1852571500)

---

 

## []()Get Started

Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning within the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let´s go! Once you leave the Release Notes by tapping I agree on the top right corner, you get presented with the main screen of grandMA3 software. On the right side, you can see predefined views. By tapping the view buttons you can switch between them. 

If this is your first time starting grandMA3 software you need to patch some fixtures first to get started. Or you can load one of the demo shows delivered with the software. In both cases, you need to press the Menu key. If you are using grandMA3 onPC software there is a ![gear](/img/grandma3/2-4/gear_1-0b513c.png) symbol in the top left corner. Clicking the symbol is the same as pressing the Menu key on a console.

Hit Backup, and tap Load tab in the pop-up menu. Now you are ready to load shows. As you want to get started quickly you should change in the header bar from Shows to Demo Shows by tapping the button repeatedly. Once it says Demo Shows you can choose any of them by double-clicking on it or selecting it and then tap Load Show. Just in case there was a show loaded already the software will ask you if want to save the current show first before loading the new one... your choice ;-)

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - on the right side are the view buttons to change screen content. At the bottom, you find the encoder bar and the command line. Technically that is all you need to get started. For more detailed information, refer to the grandMA3 help menu which you can reach by one of the view buttons named Help or via the MA Lighting website. If you want to learn grandMA3 software step by step please join the MA e-Learning - it's free of charge and available via the MA Lighting website.

Have fun with the grandMA3 software - next, you will find all the improvements and changes of this software version.

**Hint:**\
The grandMA3 software will start with the show file (or status) that was active when the software was closed. 

---

 

## []()Bugfix Version 1.5.2.3

## []()Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Windows IoT image for the grandMA3 command wing XT and the grandMA3 onPC rack-unit got updated: The Windows IoT version is now 20H2.\
Furthermore, drivers got updated, too.

---

## []()What's Changed

- onPC stations without grandMA3 onPC hardware connected directly to the station generate now a unique serial number. This serial number can be seen in the command line history after executing the [version](/grandma3/2-4/keyword_version/) keyword.

---

 

## []()Fixed Bugs

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Changes in a show file were saved, even when tapping Do not save. This bug is fixed. Choosing Do not save does not save the current show file anymore.                                                                                                                         |
| Executing IfOutput together with a dimmer value, e.g., IfOutput At 0 crashed the software. This bug is fixed. IfOutput At 0 does not crash the software anymore.                                                                                                               |
| MIDI messages were still received when MIDI via onPC command wing was disabled. This bug is fixed. MIDI messages input into onPC command wings are only processed when MIDI via onPC command wing is enabled.                                                                  |
| It was not possible to load a show by using the SHOW argument of the grandMA3 onPC Windows executable file anymore. This bug is fixed. grandMA3 onPC on Windows can again load a show file on startup.                                                                         |
| The software could crash when loading several show files quickly in a row and the layout window was displayed in the show files. This bug is fixed. Fast and successively loading of different show files should not crash the software anymore.                               |
| Turning an encoder and while that changing to press and turn made the attribute jump to an unexpected value. This bug is fixed. Changing from turning an encoder to press and turn continues to change the value flawlessly.                                                   |
| grandMA3 onPC on macOS could crash during startup when the user tried to change the size of the window. This bug is fixed. grandMA3 onPC does not crash anymore when the size of the window will be changed during the startup process.                                        |
| The software could crash when storing cues with cue only activated. This bug is fixed. Activated cue only should not crash the software when storing a cue.                                                                                                                    |
| When disabling the screen encoder, a possible fifth attribute encoder displayed always the encoder resolutions instead of the channel functions. This bug is fixed. The fifth attribute encoder displays now the channel functions and on pressing MA the encoder resolutions. |

### Playback

| Description                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sequences were triggered from time to time, when DMX remotes were set up for them, also when there was no trigger event happening for them. This bug is fixed. DMX remotes are working as expected again and do not trigger sequences anymore unexpectedly. |
| Playing back sequences with HTP priority did not work as expected. This bug is fixed. Sequence priority HTP works now again as expected.                                                                                                                    |
| Adding a huge amount of attributes to an already running sequence could cause wrong output. This bug is fixed. The output of a running sequence won't be corrupted anymore when adding a lot of attributes to the sequence.                                 |

### Windows

| Description                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The software could crash when a layout window and several encoder bar windows were displayed at the same time. This bug is fixed. The software does not crash anymore when several encoder bar windows and layout windows are displayed.                      |
| Some fixtures could flicker within the layout window. This bug is fixed. Layout elements displaying fixtures should not flicker anymore.                                                                                                                      |
| The software could crash when importing a color theme, that had not the color MiniEncoder - IndicatorBack defined. This bug is fixed. Importing a color theme that has not the color MiniEncoder - IndicatorBack defined does not crash the software anymore. |
| The software could crash when it tried to render a character that is not part of the used font. This bug is fixed. Characters that are not part of the used font type are not tried to be rendered anymore.                                                   |
| Tapping on the executors in the executor bar could crash the software when another editor, e.g., the macro editor, was already open. This bug is fixed. Opening the assign menu by tapping executors in the executor bar does not crash the software anymore. |

---

## grandMA3 Version 1.5.2.1

## []()Features

The latest release of grandMA3 version 1.5.2.1 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Playback Engine

### []() Absolute and Relative Layers

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The playback engine has now the absolute and relative layers separated from each other. This allows now an easy combination of absolute and relative data coming from different presets.

**Known Limitations:**\
MIB works only with absolute values.

After calling the values of a Preset, the next tap of that preset will discard the programmer values for Layers not included in the Preset.  

 

### []() Release Values

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

When setting a release value in the programmer for any attribute, a real release value will now be stored.

 

### []() Stomp and Capture

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The behavior of Stomp improved again. When stomping multistep relative phasers, steps 2 and above will be deleted, and the relative values will be set to 0.\
The values in step 1 will be set to the default values on the absolute layer and to 0 on the relative layer.

It is now possible to execute stomp directly when calling a preset. Example:\
A relative circle is running around the absolute drummer position. Select some fixtures, press Stomp, and then tap a different absolute position preset, e.g., the one for the singer.\
In this case, the lights will point to the singer without doing the circle anymore.\
When the singer preset would have been called without stomp, the lights would circle around the singer in this case.

In addition, it is now also possible to define per preset if it shall be called automatically with stomp. When editing the settings of a preset, Stomp can be enabled.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The new keyword Capture (Stomp Stomp) knocks the current non-default values of the selected fixtures into the programmer. During a running multistep phaser, it's not the value of a step that is knocked in, but the current output value when executing Capture will be knocked in. This can be any value between 2 steps, depending on the moment of the execution.

Capture allows also to knock in the current output values when fading into a new cue, or when doing a crossfade.

---

### []()Cue Parts and Programmer Parts

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The displaying of parts in the track sheet and the fixture sheet improved.

Sequence sheet:\
When a cue has several parts, but only one value for one attribute in one of the parts, it is not necessary to expand the whole cue in the track sheet mode to see the values that are living in other parts than part 0. The track sheet merges the values of all cue parts into the cue line when the cue is collapsed. Therefore, values from other parts will display the part it is coming from in the lower right corner of the value cell.

Fixture Sheet:\
When the programmer has values from different parts, all cells of attributes that are not part of the currently selected programmer part are displayed with darker color.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release​

With the changes regarding absolute and relative values, the different part properties of presets were reduced to only Cue Part. Cue Part defines into which part the preset will be called. By default, the value is set to 0 for all presets. To change this setting, enter EditSetting into the command line and then tap the desired preset. In the EditSetting pop-up, tap Cue Part, enter the new value and apply it by tapping Please. This defined part will also be used when activating values in the programmer via the encoders.

**Important:**\
When loading show files saved within grandMA3 v1.4 or older, the old part properties are discarded.

---

### []()Special Values and Pan/Tilt Offset

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Special values are used to modify the default values, highlight values, and lowlight values of attributes per fixture instead of using the values defined by the fixture type.\
This can be used for example when a single fixture should not return to pan/tilt 50%/50% after clearing the programmer. Or when single fixtures should turn to green instead to open white when the highlight function is activated. In both cases, the corresponding values of these fixtures themselves can be modified to reach the goal.

 

When a preset is used as a default value for an attribute, the fixture sheet will display the new default value by displaying also the preset information, e.g., 1.1 Closed instead of 0. The style of displaying the preset information follows also the Preset setting of the fixture sheet.

**Hint:**\
When using a preset as a special value while updating the values in the preset, the special values will also use the updated value of the preset.

Special values can be set by using different ways:

By editing a fixture:

1. To do so, execute, e.g., Edit Fixture 1, or do a right-click onto the fixture name in the fixture sheet.
2. The fixture editor opens and offers a list of all attributes of this fixture at the bottom. The corresponding cells for Default, Highlight, and Lowlight can be edited by doing a long-press on them, or by right-clicking them.
3. A calculator opens that allows entering any value directly. To choose one of the presets the fixture can call, tap Preset in the right area and tap the desired preset, or return to the standard values stored in the corresponding fixture type by tapping Specials and then choose the option Reset to Original. The special section offers to choose Extract. Extract takes the values of the preset and applies it without a link to the preset. The values of the preset are still kept by the attribute, but won't change anymore when updating the preset in the future.\
   Alternatively, it is possible to choose a preset by editing the corresponding preset cell (Default Preset, Highlight Preset, or Lowlight Preset). When doing so, a drop-down opens to select one of the available feature groups of the show file first, and then a preset that can be used by the selected fixture for the desired attribute.\
   When using the approach to edit the preset cell, the drop-down offers also to Reset to Original, and Extract.

Modifying the RTChannels (Realtime Channels) in the Parameter List:

1. After entering the parameter list (Menu - Patch / Live Patch - Parameter List), scroll to the desired attribute of the desired fixture, and follow the steps of opening the calculator described above in the "By editing a fixture" description.

 

Via command line:

**Requirement:**\
The desired presets or values have to be set actively into the programmer, e.g., by calling a preset or turning attribute encoders.

- To store the currently active values as default values, type:

User name\[Fixture]> Store Default

- To store the currently active values as highlight values, type:

User name\[Fixture]> Store Highlight

- To store the currently active values as lowlight values, type:

User name\[Fixture]> Store Lowlight

To reset any of the special values, set the corresponding attributes to Remove values in the programmer and store to the desired type of special values. Or set any value for the corresponding attributes and do a store remove. To store remove the currently active values for the default values, type:

User name\[Fixture]> Store Default /Remove

For resetting the special values of highlight and lowlight, follow the example above but replace Default with Highlight, or Lowlight.\
In addition, storing Release values to the special values will do the same as Remove.

**Hint:**\
For which fixtures the special values will be changed when using the command line approach, the Use Selection setting and the If not empty setting of the Store Options are important.\
To learn more about the Use Selection setting and the If not empty setting, read in the [Store Options topic](/grandma3/2-4/cue_store_settings_preferences/).

**Restrictions:\
- **It is only possible to store special values using absolute values. Relative values will be ignored.\
\- Presets with more than 1 step ("Phaser presets") will only use step 1 when using them as special values.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

It is now possible to define Pan Offset and Tilt Offset per fixture. This can be very useful if the show has been preprogrammed or it is a touring show, and the fixtures are not hung the way they were planned to be. The offset value is not visible in the Fixture Sheet, but it can be seen in the DMX Sheet. It is a nice function as long as the fixtures do not come all the way out to their endpoints in the programming.\
To see the columns for Pan Offset and Tilt Offset, go to Menu - Patch/Live Patch, and set Columns to Full. To change the values for an offset, select the desired cells, and tap and hold them. A calculator opens. Enter the desired values and apply them.

At the moment, the offsets are displayed corresponding to the selected DMX Readout within the user profile.

It is also possible to define the offset without the need to enter the patch. Call a preset into the programmer, or play a cue, for the lamps that need an offset to be applied. The position should be possible in 3D and on the real stage. Now adjust pan and tilt in the programmer for these fixtures in a way, that the fixtures hit the exact same position on the real stage, as they should do when no offset would be needed.\
Then execute:

User name\[Fixture]> Store Offset

This calculates the offset values and enters them for the selected fixtures.

The Offset keyword can be reached via the shortcut MA + Update when Store is already input into the command line.

**Hint:**\
\- Store Offset is more precise when the resulting offsets are as small as possible.\
\- For the Offset keyword it is also possible to use relative values in the programmer.

**Restriction:**\
\- At the moment, it is only possible to enter positive values for offset in the patch menus.

 

### []()

---

### Agenda

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The Agenda is used to execute scheduled commands on the console, according to the calendar. The agenda also allows to schedule events repeatedly, e.g, the Christmas eve cue every year.

To enter the agenda, open an agenda window by using the [Add windows dialog](/grandma3/2-4/wvm_add_window/), tap More, and then Agenda.

The agenda window offers several modes for displaying the data. To change between these modes, tap ViewMode in the title bar of the agenda window. These modes are:

- Sheet: Lists all agenda entries at a glance.
- Year: Displays a calendar view of the whole year. The current date has a light green background. Days with at least one enabled event will be displayed with a dark green background. Days that have all events disabled (also when the whole Agenda is not running) have a bright red background.
- Month: Displays a calendar view of the currently selected month with all its agenda entries. Disabled agenda events are displayed with red font color.
- Week: Displays a calendar view of the currently selected week with all its agenda entries. Disabled agenda events are displayed with red font color.
- Day: Displays a smaller monthly overview and the agenda entries of the selected day. Disabled agenda events are displayed with red font color.

Disabled agenda events are displayed within the month, week, and day view mode with red font color. Repeated events in the month, week, and day view mode have the ![](/img/grandma3/2-4/icon_refresh_arrow_15_v1_5_1-8f4052.png) icon on the right side. Each day in the month, week, and day view mode display also the number of events that will be scheduled throughout each day. An event that will be repeated several times within each day is counted as one event in this case.

The Agenda can be enabled or disabled by Running.

The calendar view modes offer to jump to the current month, week, or day by tapping Today in the title bar.

With the arrow keys next to Today, it is possible to step forward and backward in calendar view modes.

To create a new agenda entry, switch to sheet view mode and right-click New AgendaEvent, or in the other view modes use Setup in the title bar to open the toolbar and select + followed by the desired date.

An agenda entry offers several properties the user can define:

- Name: The name of an agenda entry will be displayed in all different modes.

- Appearance: Each agenda entry can have an appearance. Assigned appearances define also how an entry looks like in the calendar views.

- Mode: Instead of using the entered start time when set to absolute, twilight times like dawn, sunrise, sunset, and dusk can be used. When using twilight times, the local time zone and location need to be set up properly in the [Date and Time menu](/grandma3/2-4/si_date_and_time/).

- Start Date: Sets the start day of the agenda entry. Editing the cell opens a pop-up where the user can edit the day, month, and year separately. Today is a quick option to apply today's date.

- Start Time: Sets the start time of the agenda entry. Editing the cell opens a pop-up where the user can edit the hour, minute, and second separately. Now is a quick option to set the current time.

- Sunlight Offset: Defines the offset for an event when a twilight time is set in the Mode column. This allows for example to trigger an event 30 minutes before sunrise.

- Valid Duration: If the console is not switched on, or the agenda is disabled during a scheduled entry, the entered duration allows to backcast events whose start time falls into the time from now on backward until the duration is over.

- Enabled: To enable or disable single agenda entries.

- Object: Defines which object, sequence, macro, or plugin shall be executed within the agenda entry.

- Action: Defines which action to use when the defined object is executed.

- Command: Instead of defining an object to be triggered, a command can be defined instead. E.g., for shutting down the system at a certain time.

- Repeat: Editing the repeat property offers the possibility to define how often the entry is repeated, e.g., every day, every second week, etc. To do so, change the available options to your needs in the tabs Schedule and Iterations. To reset the repeat setting you made before, tap Reset Pattern in the title bar of the pop-up. At the bottom of both tabs you find information fields for how often the event will be repeated (Total Repeat), and on how many days the event will be repeated (Repeated days). The repeat logic repeats the agenda event firstly between the start time and end time within a day and repeats this furthermore then between the start date and the end date.

  - Schedule: Allows to set up a start date, start time, and end date. The start date and start time are linked to the corresponding settings of the agenda event itself. By default the start and end dates and times are identical. To get repetitions, the user must set at least a different end date or end time.\
    Tapping Reset End resets the end date and end time back to the start date and start time of the agenda event.\
    By enabling or disabling one of the day settings (Mon, Tue, Wed, Thu, Fri, Sat, or Sun), week settings (1st Week, 2nd Week, 3rd Week, 4th Week, 5th Week, or 6th Week), or month settings (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, or Dec) the user can decide at which days, weeks or months the event shall be repeated. The week settings are the weeks within a full month: E.g., 1st week is the first week of a month, and not the first week of the agenda event itself.
  - Iterations: Allows to define a repeat per minute, days, weeks, and month. This allows repeating an agenda event, e.g., every 30 minutes, and/or every second week. These settings are counting from the start date onwards. In addition, when setting Repeat every year to Yes, the event will be repeated every year again.\
    When a repeat per minute is set, the setting End Time will become active. The time between Start Time and End Time defines the interval in which the minute repeats will be effected.

- Countdown: The remaining days or time until the next launch of the event.

- Planned Date: The next date when the event will be launched.

- Planned Time: The next time when the event will be launched.

- Repeat Count Days / Total: Similar to the edit repeat popup the repeat pattern can be double verified.

When editing an agenda event within one of the view modes that are not the sheet view mode and the year view mode an edit agenda pop-up opens and offers to modify the same properties as in the sheet view mode.

The sheet mode offers an additional button for testing the selected agenda entries. Tapping Test selected in the title bar executes the selected agenda events immediately. This allows checking if the set object or command will be executed correctly.

Delete Old erases all preceded events (includes also the valid duration).

It is also possible to display a toolbar on the left edge of the agenda window. To enable the toolbar, tap Setup in the title bar.\
Available tools are:

- Mouse Pointer: Select tool, e,g, select a day in the day view mode.
- +: When the add tool is selected, tapping into a day will add a new event.
- \-: Tapping an event while delete is active will delete the event.
- Test(![](/img/grandma3/2-4/icon_test_1_15_v1-5-5e6ab9.png)): Tapping an event while test is active will execute the agenda event immediately.
- Edit(![](/img/grandma3/2-4/icon_tools_15_v1-5_1-1d0757.png)): Tapping an event in edit mode allows to edit a single event within a pop-up.
- Cut(![](/img/grandma3/2-4/icon_cut_15_v1-5-7cec1d.png)): Tapping an event while cut is active cuts the event out of the agenda. The Paste tool will be activated after cutting an event.
- Copy(![](/img/grandma3/2-4/icon_copy_15_v1-5-1f7ee1.png)): Tapping an event while copy is active will copy the event. The Paste tool will be activated after copying an event.
- Paste(![](/img/grandma3/2-4/icon_paste_15_v1-5-f54afb.png)): The event that is in the clipboard (cut or copy) will be pasted when clicking into a day.

---

### []()Layout

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

There are several improvements for layouts.

The layout editor features a new option called ViewPosActive. When it is enabled the previously stored zoom and position values of the view will be recalled when loading the layout again. When it is switched off the stored zoom and position values of the view can only be recalled when calling the whole view again. This button is switched off by default.

Assigning a selection to a layout utilizes the grid position of the selected fixtures.

In setup mode, it is possible to transform your current selection position in the layout to a position similar to your camera view in the 3D window. To apply this function change the layout encoder bar to the Arrangement function. Tap Layout Type until it is set to Camera. It is now possible to define some parameters on the encoders before the new positions will be applied:

- Camera (Encoder 1): Select the desired camera.
- Scale (Inner encoder 2): Scales the whole selection in X and Y direction.
- Ratio (Outer encoder 2): Defines the ratio of the selection.
- Move X (Inner encoder 2): Move the whole selection in the X direction for a more convenient position.
- Move Y (Outer encoder 2): Move the whole selection in the Y direction for a more convenient position.

Tapping an encoder will open a calculator for direct value input. The calculator for the camera allows to select a camera out of the list of existing cameras or to enter a camera ID directly.

The new Resize Fixed Ratio (![](/img/grandma3/2-4/icon_resize_fixed_15_v1_5_1-6caa54.png)) tool allows resizing of a layout element by keeping its actual aspect ratio.\
To resize a layout element with the possibility to change also the aspect ratio, chose the normal Resize (![](/img/grandma3/2-4/icon_resize_15_v1_5_1-95b14f.png)) tool.

The Grid property of a layout window is split up into SnapGrid and VisibleGrid. SnapGrid defines the grid size of a grid that is used when moving layout elements.

VisibleGrid defines the grid size of the visible grid.

The keyboard keys Del, Ins, and the shortcut Ctrl + A can be used with a layout view.

Layout elements can now have text with definable text settings and definable borders. These properties are new:

- Custom Text: The individual text the user can enter.

- Font Size: The size of the text.

- Text color: The color of the text.

- Text Horizontal: The horizontal text alignment. Possible values:

  - Center: The text will be aligned to the horizontal center of the layout element.
  - Left: The left end of the text will be positioned within the left edge of the layout element.
  - Right: The right end of the text will be positioned within the right edge of the layout element.

- Text Vertical:

  - Center: The text will be aligned to the vertical center of the layout element.
  - Top: The text will be placed within the layout element at the top edge.
  - Bottom: The text will be placed within the layout element at the bottom edge.
  - Above: The text will be placed outside the layout element at the top edge.

- Border color: The color of the border.

- Border size: The thickness of the border itself.

- Indicator Bar: Defines if the indicator bar on top of pool objects will be displayed also on top of the layout element.

- Selection Relevance: When selection relevance is enabled, the image of a layout element will be colored with the For All or For Some color depending on the current selection. This setting applies only to layout elements that have a pool object assigned, e.g., a group.

In addition, there is now a drawing hierarchy of layout elements. The hierarchy defines which layout element can be overlayed by other layout elements.\
The following hierarchy applies:\
(Highest to lowest level) 

1. The selected objects will always be displayed above all other elements.
2. Layout elements that have objects assigned.
3. Layout elements that have environment fixtures assigned.
4. Empty layout elements (this includes also layout elements that have only a text or border defined) are always displayed at the lowest level.

Layout elements can be hidden by disabling Element Visible.

Layout element dimensions are now allowed to a maximum size of 14 000 x 14 000 pixels to fill the entire canvas.

The Fixture ID, Custom ID, or both can be displayed on layout elements by enabling or disabling ID (= Fixture ID), and or CID (= Custom ID). When the custom ID will be displayed, the corresponding ID type will also be displayed when the size of the layout element is big enough to do so. The ID type will be then displayed in front of the IDs. The IDs are displayed separately when the Fixture ID and the Custom ID are not equal. The style is then FID:CID.

An example would be: Channel 1:1001. In this case, the assigned fixture of the layout element has the Fixture ID #1 and the Channel ID #1001.

Presets can now be assigned to layouts. They behave like presets in preset pools when tapping them.

**Restriction: **\
Existing show files cannot get Layout Element Defaults for presets. Only new shows will have a layout element default for presets.

---

### []()3D Window

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The 3D window visualizes additional iris attributes now. The attributes IrisRandomPulseClose and IrisRandomPulseOpen are visualized now.

Separate beams of multi-pixel fixtures are merged into one beam if the pixels are on the same plane. This will increase the performance for that kind of fixture type. The rendering method of the merged beam is used if the array of pixels has a circular or a rectangle shape with a ratio close to 1.\
How much the individual pixels are blurred into each other can be defined via the property "Multi-Beam Blur" per beam geometry. The value range for this property is from 0.1 to 1. The higher the value, the more the beams are blurred together.

The beam quality "Gobo Animated" was added. With this beam quality and the higher beam qualities, the transition of wheel slots of gobo wheels is animated now. Snapping transition, as well as a fading transition between slots, is visualized. In addition, also the attributes Gobo#SelectShake, Gobo#WheelSpin, and Gobo#PosShake are visualized now.\
Wheels in fixture types have now a property called "Allow Shortcut". This defines whether a wheel takes the shortest distance between two wheel slots or if it is following an ascending or descending DMX value. The default is set to "No".

**Hint:**\
The attribute Gobo#WheelSpin is also visualized with the beam quality "Gobo" but without animation between the wheel slots.

---

### []()Import/Export Menu

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The new menu for import or export can be entered via the main menu: Menu - Import / Export. Within the menu, the user can choose whether he wants to import or export data by tapping Import or Export in the tab bar on the left side.

Both tabs have a similar structure, but the main areas (which will be described in the following sentences) may be interchanged, depending on import or export.\
The main area is divided into two parts, the drive part, which represents the files on the hard drive or USB drive, and the local part which represents the data inside the show file.\
In the Import tab, the drive part is on the left side, and the local area is on the right side. In the Export tab, it is interchanged: the local area is on the left side, and the drive part is on the right side.\
Besides these two main areas, the title bar of the import/export menu allows switching between the different types of objects that can be imported/exported, e.g., groups, sequences, macros, MAtricks, and many more. To do so, tap ObjectType to toggle through the different object types or tap it, hold the finder and drag it outside the button. The dropdown is divided into 3 columns. The first column contains object types that are not organized within data pools, e.g., Appearances, Scribbles, User Profiles, and so on. The second column contains all different types of media: Images, Videos, Sounds, etc. The last column lists all object types that are organised within data pools and data pools itself, too. As all other objects types are children of the data pools, these object types have a ![](/img/grandma3/2-4/triangle_right_15_1-492f3b.png) in front of their labels. When selecting, e.g. PresetPools or GelPools, an additional tab bar will be displayed above the main area to switch between the different preset pools or gel pools.

In addition, the selected drive can also be changed by tapping Internal in the title bar of the drive part.\
Within the local area, DataPool allows switching between the different available data pools of the show file.\
Enabling Sheet Style displays the pool of the selected ObjectType in a sheet style instead of the default pool style.\
The drive area offers also to search for files by entering a search string into the input field behind Name.

The export tab has, in addition, one special function in the local area. Tapping Select All selects all elements of the current object type. After tapping Select All, the button changes to Deselect All, which will clear the selection of elements.

Each area allows the selection of several entries at once. In sheet style it is possible to do a lasso selection or tap single entries while having Ctrl pressed. When the local area is not in sheet style, tapping several pool objects after each other will select them in addition to the current selection. Deselection is possible by tapping a selected pool object again.

To export objects, select them in the local area of the export tab, enter a file name in the drive area, or tap an existing file in the drive area, and tap Export.

To import objects from a file, select the file in the drive area of the import tab, select the desired spots in the local area, and tap Import.

When importing images, the menu offers to immediately create appearances with the imported images. To do so, enable Create Appearance at the bottom of the import tab.

---

### []()Readout and Encoder Resolution

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The new readout "Natural" allows defining the desired readout type per attribute. E.g., dimmer values are at best displayed in percentage readout, while pan or tilt values are better readable using the physical readout which displays the pan and tilt values as degrees.\
When setting the readout for the fixture sheet, sequence sheet, or user profile, natural can be selected instead of percent, physical, etc.

The Natural readout can be defined per attribute in Menu - Patch / Live Patch - Attribute Definitions. The cells in the column Natural Readout can be edited. New shows will come up with a predefined set of natural readouts. New attributes will be set to Percent for the natural readout.\
\
In addition, the natural readout can also be defined per attribute within each user profile. To do so, go to Menu - Settings - User Configuration - Profiles - Select a user profile - Edit Encoder Bar.\
When creating a new user profile within a show, the natural readout for all attributes is linked to the one in the attribute definitions by using the default value.

When starting a new show, or creating a new user profile, the readout is set by default to Natural.\
When loading show files stored with grandMA3 v1.4 or prior are applying the same readouts for the natural readout within the attribute definitions. In addition, all user profiles will be set to natural value readout when migrating the show file once from v1.4 or prior to v1.5 or later.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Encoder resolution can now be defined per attribute. The encoder resolution defines how big the change of an attribute value will be when turning a dual encoder by 1 click. The encoder resolution can be changed per attribute in the Encoder Resolution column within the attribute definitions (Menu - Patch / Live Patch - Attribute Definitions). The size of the value change is also dependent on the current readout per attribute.

Parallel to the natural readout, the encoder resolution can also be defined per user profile within the Edit Encoder Bar menu in the user profile menu.\
When creating a new user profile, the current encoder resolution settings will also be copied from the Attribute Definitions to the user profile.

It is also possible to change the encoder resolution directly on an encoder. To do so press and hold MA. During the hold, the channel function area of each encoder will switch to display the possible resolutions. By tapping the resolution area of an encoder, the selected resolution of the encoder will change to the next resolution. This will change the encoder resolution of the attribute within the user profile. When the desired resolution is selected, release MA.

**Hint:**\
\- An encoder has 24 clicks for one turnaround.\
\- 5 turns of an encoder are needed to cross the whole range of the attribute from its minimum to the maximum while using the coarse encoder resolution.

The possible resolutions are:

- Coarse: This is the most coarse resolution. One encoder turn click will change the value depending on the readout:​

  - Percent: 1
  - PercentFine: 1
  - Physical: (MaxValue-MinValue)/(24\*5)\
    When fixtures of 2 or more different fixture types are selected, the smallest physical range of one of these fixtures determines the size of one turn click.
  - Dec8: 255/(24\*5), therefore 1 click equals 2.125.
  - Dec16: 65 535/(24\*5), therefore 1 click equals 546.125.
  - Dec24: 1 677 216/(24\*5), therefore 1 click equals 13 976.8.
  - Hex8: 255 (=FF)/(24\*5), therefore 1 click equals 2.125.
  - Hex16: 65 535 (FFFF)/(24\*5), therefore 1 click equals 546.125.
  - Hex24: 1 677 216 (=FFFFFF)/(24\*5), therefore 1 click equals 13 976.8.

* Fine: Fine has a 10x finer resolution than coarse.
* Increment: When the resolution is set to Increment one encoder turn click will change the lowest digit of the displayed readout. 
* Native: The value layers Absolute and Relative offer this mode to have direct access to the smallest possible value change of the parameter resolution.

**Hint:**\
In Native mode, If a e.g. dimmer channel is based on 8/16/24 bit, one encoder turn always results in one digit change of the DMX output. 

An encoder displays the current resolution in the center of the encoder symbol within the encoder bar: Depending on the resolution a circle of four dots (=Coarse), a circle of eight dots (=Fine), or a circle with four dots and four bars (=Increment) will be displayed. Native resolution is represented by a gear symbol.

Furthermore, the factors of value change between turning the inner encoder and all other encoder actions (press and turn the inner encoder, turn the outer encoder, and press and turn of the outer encoder) can be defined within the Edit Encoder Bar menu. These are the available factors:

- Encoder Press Factor: Press and turn the inner encoder, definable per attribute.
- Dual Encoder Factor: Turning the outer encoder, definable as a general factor.
- Dual Encoder Press Factor: Press and turn the outer encoder, definable as a general factor.

The available values for the different factors are these ones:

- Div50
- Div25
- Div10
- Div5
- Div2.55
- Div2
- One
- Mul2
- Mul2.55
- Mul5
- Mul10
- Mul25
- Mul50
- Disabled

When creating a new user profile these factors are set to Mul5 for the encoder press, Div5 for the dual encoder, and Div25 for the dual encoder press.

The buttons TimeLayerResolution and PhaserLayerResolution offer to set different desired resolutions depending on the selected layer. TimeLayerResolution is by default set to Fine and PhaserLayerResolution is by default set to coarse.

Link Resolution defines if switching the encoder resolution should switch the resolution for all other attributes of the same feature group as well (Link Resolution set to FeatureGroup), or if it should switch the resolution only for the one attribute where you change the resolution now (Link Resolution set to Single). This setting can also be accessed in the encoder bar by pressing and holding MA in order to change the encoder resolution.

---

 

### []()Patch and Live Patch Menu

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

In order to have a more structured workflow inside the Patch Menu, a couple of improvements were made.

The navigation in the patch menus changed in such a way, that a tab bar is now used on the left-hand side. This lets the user always know at which part of the patch he is looking, especially when a section has sub-sections, like the attribute definitions. In this case, a tab bar will appear at the top of the section area which allows navigating through the subsections.

Furthermore, there are now 2 different styles to look at the real fixture patch. In the title bar, you can toggle Split View. When Split View is deactivated, you can see the complete tree-structured overview of the fixture patch, like known from former versions of grandMA3.\
When it is activated, you can see the new Split View. The tab bar at the top offers to display the patch split by Layers, Classes, ID Types, FixtureTypes, DMX Universes, Filters, or Hierarchy. The left area of the split view displays the corresponding objects. Selecting one of these objects by tapping it will display fixtures on the right side, influenced by these objects:

- FixtureTypes: Selecting one fixture type on the left side will display all patched fixtures that use this fixture type.
- DMX Universes: The split is done by DMX Universes, which results in displaying all fixtures patched to the selected universe.
- ID Types: All ID types can be selected. The fixture area will display all fixtures that have the selected ID type assigned. Fixtures that have an ID type other than Fixture are only displayed in the corresponding ID Type, also when they have an additional FID set up. The left area allows also to label the custom ID types.
- Filters: The split is done by the patch information in filters. Read more in the [Create a Filter](/grandma3/2-4/worldfilter_filter_create/) topic.
- Layers: All layers set up in the show can be selected. The fixture area will display all fixtures that have the selected layer assigned. The left area allows also to manage the layers of the show file.
- Classes: All classes set up in the show can be selected. The fixture area will display all fixtures that have the selected class assigned. The left area allows also to manage the classes of the show file.
- Hierarchy: The left side lists the hierarchical structure of the patch. It lists the parent elements and can be unfolded. The right side displays the elements directly dependent on the selected object on the left side. The top-level where the hierarchy starts is the level of the stages.

  **Hint:**\
  In every tab of the Split View there is a \<All> and a \<No Layers/Classes/...>. In \<All> you can find all elements no matter which category they belong to. In \<No Layers/Classes/...> you can find all elements that are not assigned to any Layers/Classes/... .

When adding a new fixture while being in split mode, the fixture wizard populates the current split by setting, e.g, selecting a layer in Split by Layer will enter the selected layer in the fixture wizard. Or selecting a fixture type in Split by Fixture Type will create a fixture of the selected fixture type.

Cutting and Pasting between categories will automatically adjust the category to which the element is pasted to.

The patch menu remembers which tab was selected last when leaving the patch the last time and returns to this tab when entering it again.

Leaving the patch without changes does not create a pop-up anymore and will not clear the oops stack anymore.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

When a Fixture Type has the flag CanHaveChilderen="No", fixtures of this Fixture Type cannot be the parent of any fixtures. The default of the CanHaveChildren flag was set to "No" for most Fixture Types. It still can be manually set to "Yes" if desired.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

In the EditPatch menu, the following new buttons were added:

- Move Patched To Selected Universe: This moves the fixtures to the selected universe and keeps the DMX address.
- Patch To Next Free Address: This gives the fixtures the next available DMX addresses.
- Patch To Next Free Universe: This patches the fixtures to the next completely empty universe.
- PatchOffset: This can be used to set the desired number of DMX channels between the start address of each fixture. To make advantage of the Patch Offset, the value for the Patch Offset needs to be greater than the fixtures have DMX channels. In case that the chosen Patch Offset is smaller than the amount of DMX channels of the fixtures, the fixtures will be patched as close as possible.

When inserting a new fixture you can find a new Column called "No" (Number) in the tab "In current show" of the "Select DMX Mode to use". This is the index number from the Fixture Types list.

The patch menu, live patch menu, the fixture type section and the insert new fixture dialog have a new button called Hide Environmental in the title bar of these menus. When it is active all fixture types, that do not have at least a DMX address assigned to one DMX channel will be hidden. These fixture types are mainly environmental fixture types, e.g., stage elements, trusses, and many more. For the case of hierarchical patch items, it searches recursively, thus showing the parents if a child object is found that has DMX channels with DMX addresses.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The fixture library now offers the possibility to download GDTF fixture types directly from GDTF-Share.com. In order to do this an active internet connection with connection to the [world server](/grandma3/2-4/system_world/) is needed. This is indicated by a green world server icon right beside the command line.

Go to the patch (Menu - Patch) and tap Insert new Fixture. The insert new fixture dialog opens. Besides the already existing fixture libraries tap GDTF Share. The list of fixture types is downloaded.

**Hint:**\
Downloading the list of fixture types and downloading individual fixture types may take a while depending on the speed of your internet connection.

After selecting a fixture type tap Select. A local copy of the GDTF file is downloaded to the folder gma3\_library/fixturetypes/gdtfs on the selected drive and added to the show file. To learn more about the folder structure in the [Other Enhancements](/grandma3/2-4/key_rn_v1_5/#OtherEnhancements) section of this document.

The GDTF Share fixture library has two additional properties. "Uploader" indicates whether the file was uploaded to the GDTF Share by a user or a registered manufacturer. "Rating" displays the average user rating of the fixture type between 1 and 5, where 5 is the best rating.

**Hint:**\
The GDTF Share fixture library only displays fixture types whose release status on GDTF-Share.com is set to "Release".\
Furthermore, ratings, comments, and many more can only be added by visiting GDTF-share.com with a normal web browser. This is not possible within the grandMA3 software. This requires also a GDTF share user account.

---

 

### []()Special Executors

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The special executors are reworked which helps to have a better overview of them. They are now arranged in this way:

- SpecialExecutor 1: The left 100mm fader.
- SpecialExecutor 2: The right 100mm fader.
- SpecialExecutor 3: The key and mini encoder above the left 100mm fader.
- SpecialExecutor 4: The key and mini encoder above the right 100mm fader.
- SpecialExecutor 5: The GrandMaster.
- SpecialExecutor 10: The lowest key below the left wheel (grandMA3 full-size (CRV) and extension).
- SpecialExecutor 11: The lowest key below the right wheel (grandMA3 full-size (CRV) and extension).
- SpecialExecutor 20: The left wheel and the key below the left wheel (grandMA3 full-size (CRV) and extension).
- SpecialExecutor 21: The right wheel and the key below the right wheel (grandMA3 full-size (CRV) and extension).
- SpecialExecutor 30: The lower encoder (grandMA3 full-size (CRV) and extension).
- SpecialExecutor 40: The upper encoder (grandMA3 full-size (CRV) and extension).

Together with the hardware elements merge of the special executors, the special executor area in the executor bars was cleaned up, too. As a result of this, the special executor area on the left executor bar on a full-size (CRV) and on extensions does not need a scroll bar anymore. With the new structure, all special executors now fit natively into the executor bars.\
Furthermore, the special executor area of the [master section](/grandma3/2-4/do_control_master/) displays now at its top in a 2x2 arrangement the special executors 1 to 4. The bottom area displays now always the selected sequence.

The special executor configuration menu with the overview of all special executors is now gone. This menu opened in between when the users wanted to open the assign menu for a special executor.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

A new option per user profile (Mirror SpecialExecutor) allows defining if the special executor areas of grandMA3 extensions should use all together the same set of special executors (Mirror SpecialExecutor set to Yes), or if each individual extension should use its own set of special executors (Mirror SpecialExecutors set to No).\
In the case of setting Mirror SpecialExecutor to Yes, the same special executors are used as the left executor area of a grandMA3 full-size (CRV) uses.\
The sets of special executors are managed by the set WingID of a grandMA3 extension. When 2 connected extensions are set to the same WingID, and Mirror SpecialExecutor is switched off, theses both extensions will display and use the same special executors. To read here more about the [grandMA3 extension](/grandma3/2-4/do_extension/), how to [connect it](/grandma3/2-4/fs_connect_extension/), and [WingIDs](/grandma3/2-4/executor/).

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

When the assign menu for a special executor is open, the executor label of the chosen special executor alternates now between a red coloring and its normal look.

When any other object, then the Grand Master object, is assigned to special executor 5 (which represents the physical grandmaster knob), the encoder bar reduces the area of the grandmaster fader. In the now free area at the bottom of the encoder bar, a special executor label will display the assigned object of special executor 5.

In addition, the [control bar](/grandma3/2-4/ws_ui_control_bar/) has now the possibility to open a temporary overlay of the Custom/Master Section window. To open the overlay, tap ![](/img/grandma3/2-4/icon_special_master_15_v1-5_1-45e90b.png).

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Together with the restructuring of the special executors the Custom/Master Section Window got a brush up as well:\
The settings of the custom/master section has now less properties compared with former versions. These are the current properties:

- Show Labels: Displays or hides the labels for all special executors.
- Show Hardware Buttons: Displays or hides the hardware buttons for all special executors.
- Show Custom Section: Displays or hides the complete custom section with special executors 10 to 40. 
- Show Master Section: Displays or hides the complete master section with special executors 1 to 4, and Go+ \[large], Go- \[large], Pause \[large].
- Show Master Section Knobs: Displays or hides special executors 3 and 4. This allows to adjust onPC stations or compact (XT) consoles to display only the parts of the master section which they have as hardware.
- Show Grand Master: Displays or hides special executor 5 (by default the grand master).
- Show Page Section: Displays or hides the page button section with Page+, Page x and Page- that is located on the right side of the executor bars.

The custom/master section window now displays the assigned fader function on top of each fader.

**Important:**\
All settings of custom/master section windows within show files saved with v1.4 or prior will be reset to default when loading these shows in v1.5!

---

 

### []()DMX Curves

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

DMX curves allow to modify the usual linear output of DMX channels. This makes it possible for example to define that 100% of the dimmer attribute of a fixture should only output a DMX value of 90% when the dimmer needs to be limited. Another use case could be a DMX channel that shall be treated as a switch channel.

DMX Curves can be managed within the DMX Curves section of the Patch menu: Menu - Patch - DMX Curves. It is possible to have up to 9 999 DMX curves within one show file.\
It is possible to define 3 different CurveModes:

- MinMax: This allows to define a simple line as a DMX curve, e.g., when the maximum needs to be limited.
- Switch: A switch curve allows to define at which point the signal should be switched from its minimum to maximum value and vice versa. It is possible to define different switching points for increasing and decreasing values. The increasing curve is marked with an upwards arrow on the curve, while the decreasing curve is marked with a downwards pointing arrow on the line of the curve.
- Custom: Allows to create own curves with linear connections between each defined point. Up to 63 points are possible within a custom DMX curve.

To create a new DMX Curve, tap New DmxCurve in the DMX Curves menu, and then tap Insert new DmxCurve.\
Change the CurveMode to the desired mode.\
To move points around within the graph area on the right side, select them with the select tool (Mouse pointer icon).\
Then switch to the move tool (Arrow-cross symbol), tap and hold the selected point and move your finger around. Release the finger when the desired position is reached.\
 

The custom curve mode has some more tools that can be used:

- Selecting the add point tool (+) allows adding of additional points to the curve. When the tool is selected, tap at the desired position in the graph. The previous and the next point along the In axis will automatically be connected to the newly added point.
- For deleting points within a custom DMX curve, select the delete tool (-) and tap the point you want to delete.
- For the custom curve mode, it is also possible to move the handles of each point in order to modify the incoming part (Decel) or the outgoing part (Accel) of the curve. This allows forming of the linear curve into a round curve. To do so, select the move handle tool (Outlined arrow-cross symbol). The possible handles that can be modified will be displayed in the graphical area. Each handle has a peacock green line and a yellow dot at the end. By tap, hold and move of one of the yellow dots, the corresponding handle can be moved. The curve will transform accordingly. When the desired form is reached, release your finger. It is also possible by tap, hold, and move of the DMX curve point itself to adjust both handles of the point simultaneously.
- In the custom mode it is also possible to move around more than one point at the same time. To do so, select all desired points with the select tool. Then switch to the move tool. Tap, hold and move your finger within the graphical area. It is important to tap into free space within the graphical area and not on an existing point.

The graph view has in both directions (In and Out) rulers which change their labels depending on the selected DMXReadout. The horizontal direction (In) represents the input value of the attribute, while the vertical direction (Out) represents the resulting DMX output.\
The points of the curve within the graph view display their names or IDs for better identification.

Within a custom DMX curve it is possible to move the resulting curve outside of the allowed value range by using the handles. This behavior may be wanted by the user, in case of over-shooting, for example. The resulting DMX value will be cut to the corresponding limit (0 or 255) in this case. Furthermore, the software displays in case of such a curve a new button with the DMX Curves-tab: Show Warnings. By tapping it, the user will be informed, which curves are set up like described before.\
\
For fine adjustment, the grid on the left side offers to enter the In and Out values for each point. To see each point of a DMX Curve, expand the DMX Curve by tapping the triangle icon in front of the name.\
MinMax curves and Switch curves are limited to two points. The points are named Min and Max. It is not possible to add more points to these two types.\
The grid allows also to adjust Accel and Decel of a custom DMX Curve by editing the corresponding cells.

**Hint:**\
There are 3 predefined DMX curves available to be imported. These curves are of the DMX curve type Custom, and have curves prepared for Sinus, Square, and Power Correction shape.

DMX Curves can be applied to attributes within fixture types or to realtime parameters: For attributes inside a fixture type, edit the fixture type (Menu - Patch - Fixture Types - Select the desired fixture type - Edit), tap DMXModes, expand the desired DMX Mode, expand the DMX Channels. Then edit the DMX Curve cell of the desired DMX Channel.\
A pop-up opens and offers to select one of the existing DMX Curves within this show file in the DMX Curve tab. Or remove an assigned DMX Curve by tapping Empty.

For realtime parameters (Menu - Patch / Live Patch - Parameter List) it is possible to assign DMX Curves as well. To do so, open the parameter list, scroll down to the desired parameter (check IDType, CID and ChannelName to identify the desired parameter), and edit the DmxCurve cell. A drop-down opens and offers all DMX Curves of the show file. In addition, the drop-down also allows ignoring a possibly assigned DMX Curve from the fixture type. To do so, select Ignore FT.\
In case, the parameter has already a DMX Curve assigned, and the user wants to remove it, it is also possible to use the DMX Curve of the attribute that is defined within the fixture type. To do so, select Follow FT.

**Hint:**\
In case of patching a fixture that has a DMX Curve assigned to a realtime parameter to a different DMX address, the DMX Curve on the realtime parameter will also move to the new DMX address.

---

### []()Assign Menu and Settings Editor

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

To have a unified experience when assigning or editing settings of objects, the executor assign menu has been reworked.

On the left side, the displayed tabs are reduced to Object, Handle, Edit Setting, and Edit (if available for the object).

The buttons for Name, Scribble, and Appearance moved to the Edit Setting area of the assigned object.

Editing a sequence or macro opens the associated editor inside the assign menu, allowing to go back to other settings by using a different tab on the left side.\
The settings of an assigned object, e.g., group or world, can be edited directly by tapping Edit Setting. 

In addition, the Settings Editor has a similar layout across the editable objects. Name, scribble, and appearance are always displayed at the left side in the settings.

When opening the assign menu, it depends now how the assign menu was called, and therefore the assign menu will be opened with a defined tab:

- Edit: Opens the assign menu and selects the Edit tab. If the assigned object does not provide the Edit tab, it will switch to the Edit Setting tab.
- EditSetting: Displays the Edit Setting tab of the assign menu when it opens.
- Assign: Opens the assign menu with the Handle tab selected. When doing this with an empty executor, the assign menu will open up with the Object tab selected.

This can also be achieved via command line and using the new /Tab-option:

To open the Edit-tab via the Assign command of executor 201 on page 1, type:

User name\[Fixture]> Assign Page 1.201 /Tab "Edit"

It is also possible the other way round. To open the assign menu and get the Handle tab displayed by using the Edit command, type:

User name\[Fixture]> Edit Page 1.201 /Tab "Handle"

The possible values for the /Tab-option are Object, Handle, EditSetting, and Edit.

Furthermore, tapping the executor in the executor bar without any of these special additions remembers now the selected tab when having the assign menu open the last time before.\
When the assign menu is now open, the executor label of the chosen executor alternates now between a red coloring and its normal look.

---

### []() onPC Improvements

### []()USB MIDI Support

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

grandMA3 onPC for macOS and Windows now supports USB MIDI Interfaces. 

To configure your USB MIDI Interface, go to Menu - Settings - onPC Settings. In the MIDI columns, it can be decided if the MIDI ports from the command wing should be used for input and output: MIDI via onPC command wing. If it is enabled, the MIDI input and output is routed through the connect grandMA3 onPC command wing. If it is disabled, the below configured device is used. Select the desired device for the input and output separately by tapping MIDI In or MIDI Out and choose the device in the pop-up.

MIDI Offset allows defining the shift of incoming MIDI Notes and Control Changes (CC) for the selected MIDI In Device. The incoming notes and CCs will then be shifted by the defined offset.\
MIDI TimecodeSlot defines the timecode slot for the selected MIDI In Device.

 

### []()Audio In Selection

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

grandMA3 onPC for Windows now supports selecting the audio interface that shall be used when using sound input into the grandMA3 onPC software.

To configure the audio in selection, go to Menu - Settings - onPC Settings. In the Sound column, tap Audio In Device in order to open the pop-up with the different possible sources for audio. Tap the desired interface, to select it. Selecting None disables the audio input into the grandMA3 onPC software. Besides None and the other available sources, the pop-up also offers to select the Default audio in device of the operating system. This can be done by tapping Default \<Name of the audio in device>.\
In addition, the Sound window offers now to select the audio in device by tapping Audio In Device within the title bar. This button is only displayed on onPC stations.

---

 

### []()MVR Merge

The import of MVR files has now the possibility to merge the content of an MVR file with the show file, where the user can decide per fixture if he wants to apply a change coming from the MVR file.

Enter the patch (Menu - Patch) and tap Import MVR. Choose an MVR file in the file browser and tap Import. The MVR Merge menu opens. This menu compares the current content of the show file with the content of the MVR file matched by the Fixture ID.

The left side (My) displays the patch content of the show file, while the right side (Other) displays the content that is coming from the MVR file that is imported.

**Hint:**\
The left side will be empty if there is no fixture in your show file.

The user can decide per fixture if he wants to keep the existing data of the show file or overwrite it with the data coming from the MVR file. A blue background marks the data set of a fixture (My or Other) that will be applied.

In each line either My or Other can be active. To select one of the sides of a row, tap the side you want to keep. The blue background changes to the side that is selected. To import the selection to the show file tap Import MVR.

Like the patch, the MVR Merge Menu allows changing the set of displayed columns, by tapping Columns in the title bar of the MVR Merge pop-up.\
When Columns is set to Condensed, only the most important information is displayed. These are FixtureID, Name, Fixture Type, and the Patch address.\
In the full columns mode, additional information, like the position, the rotation, or the class are displayed.

---

 

## []()Other Enhancements

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) grandMA3 onPC on macOS supports now the new Apple Silicon system architecture.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When having several timecode events selected and turning the time encoder in the encoder bar of the timecode editor moves the selected events now relatively to each other.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Drop-down lists that were scrollable, are not displayed as scrollable lists anymore, but they display all their values as a grid, e.g., when editing the function of a key in the assign menu, or when tapping Appearance while editing the options of a group.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Appearances:

Appearances are displayed at more places:

- Appearances of fixtures are now displayed in the fixture sheet when enabling Fixture Appearance in the context menu of the fixture sheet window. The image and the background color of the appearance are displayed right before the name of the fixture.

- Appearances can now be assigned to cues. Depending on the set value of the CuePart Appearance setting in the context menu of the sequence sheet, the appearance is displayed in these ways:

  - Off: Appearance is not displayed
  - Number: The No, and Part columns display the background color of the assigned appearance. The image of the appearance is displayed in front of the cue name.
  - Num + Name: The No, Part, and Name columns display the background color of the assigned appearance. The image of the appearance is displayed in front of the cue name.
  - All: All columns in the sequence sheet display the background color of the assigned appearance. The image of the appearance is displayed in front of the cue name.

- Drop-down lists that offer to select an appearance display now in front of each appearance name a small preview of the appearance.

- If a Sequence is activated, the running cue appearance is displayed at the sequence object, if deactivated, the sequence defined appearance is used.

Appearances allow now to rotate assigned images. To do so, edit an appearance, and tap ImageRotation until the desired rotation is set. It is possible to rotate images in steps of 90°.\
In addition, the image can now also be mirrored with the new property ImageMirror. ImageMirror can be set to Horizontal, Vertical, or Both. The image will then be mirrored in the set direction.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Macros:

- The macro editor offers now to test only the selected line by tapping Test Macro Line. The Go button was renamed to Test Macro.
- The macro editor offers a button CLI to toggle Command-Line Interaction. Deactivated CLI is displayed in red letters on the macro pool object.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Steps can be deleted using the - in the tool area in the phaser editor. Delete as well as Insert is also available via command line.

To delete step 3:

User name\[Fixture]> Delete Step 3

To insert step 2:

User name\[Fixture]> Insert Step 2

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) It is now possible per station and DMX protocol (Art-Net or sACN) to define if the station shall send these DMX Protocols while being an IdleMaster. This is useful for larger setups with several consoles. If one console gets separated from the original session, it will still send these protocols if the option is enabled. This can cause the receiving devices to jump all the time between these sources.\
To enable or disable the settings, press Menu - DMX Protocols - Art-Net or sACN. Tap SendArtnetIfIdleMaster or SendSacnIfIdleMaster to enable or disable the settings.\
Or go to Menu - Output Configuration and scroll to the right. Here you can set the values for SendArtnetIfIdleMaster or SendSacnIfIdleMaster for every console being part of the current session.\
This setting is enabled by default for all consoles and onPC stations. Also when updating consoles from v1.4 or prior to v1.5 and later, SendArtnetIfIdleMaster and SendSacnIfIdleMaster will be enabled.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When storing onto existing MAtricks Pool Objects, the software asks now the user if the existing one should be overwritten, merged, or if the user wants to cancel.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) grandMA3 extensions allow now to change the IP address of the device without having it connected to a host. To do so, tap ![gear](/img/grandma3/2-4/gear_1-0b513c.png) in the lower left corner in the display of the grandMA3 extension. A pop-up opens, that is similar to the IP configuration within the grandMA3 software. To read more about Interfaces and IP, read the [Interfaces and IP](/grandma3/2-4/network_interface/) topic. \
In addition, it is possible to reset the current settings of the grandMA3 extension to the factory settings by tapping Factory reset.

**Important:**\
This is also possible for the internal wings of grandMA3 full-size consoles and grandMA3 light consoles, but we recommend to use this menu only by instruction of the Tech Support!

​​![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png)​ The Video Pool now features importing of videos. These videos can be used in appearances instead of images.

**Important:**\
Video files count into the overall size limit of 200MB for media pools within a show file.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The folder structure on the hard drive and USB drives changed.\
All user data will now be stored in the gma3\_library folder. The folder is on the same level as the gma3\_vx.y.z folders on hard drives. This allows version-independent management of user files. On USB drives the folder is placed within the grandMA3 folder, which in turn is placed into the root of the USB drive.\
Exporting data from the grandMA3 software creates the files now in the gma3\_library folder. The folders inside the gma3\_vx.y.z folders are now only used for default content the software installs by itself.\
On USB drives, the gma3\_library folder will be created automatically after plugging the USB drive into a station that is running the grandMA3 software, and opening the USB drive in the backup menu.

Within the gma3\_library folder, the data is structured into subfolders. These subfolders are created together with the gma3\_library folder. These subfolders are mainly representing the internal data structure. These are the created folders:

- agendas

- appearances

- certificates

- colorthemes

- datapools

  - executorconfigurations
  - executorpages
  - filters
  - groups
  - layouts
  - macros
  - matricks
  - plugins
  - presets
  - sequences
  - timecodes
  - worlds

- fixturetypes

  - fixtureicons
  - gdtfs
  - gobos
  - meshes

- inout

  - artnet
  - dcremotes
  - dmxremotes
  - midiremotes
  - osc
  - outputconfigurations
  - sacn

- media

  - images
  - sounds
  - symbols
  - videos

- mvr

- netkeys

- patch

  - dmxcurves
  - stages

- scribbles

- userprofiles

  - cameras
  - screenconfigurations
  - viewbuttons
  - views

- users

**Hint:**\
The location of show files did not change, as they are more version dependent than exported files. Show files are located here:\
\- onPC Windows® from the folder **C:\ProgramData\MALightingTechnology\gma3\_x.y.z\shared\shows\
- **onPC Apple macOS® version from the folder **HD\users\\\[username]\MALightingTechnology\gma3\_x.y.z\shared\shows **\
\- on USB drives from the folder **\grandMA3\shared\shows**

Object types that are not part of the list above, like masters or RDM data, will be exported directly into the "gma3\_library" folder.\
Furthermore, when exporting the parent level of an object, a single file with a sub extension will be placed into the corresponding folder.\
E.g., DMXProtocols (Export Root "DeviceConfigurations"."DMXProtocols" "MyPerfectDMXProtocolsSetup") instead of Art-Net and/or sACN as separate exports. In this case, a file with the name "MyPerfectDMXProtocolsSetup.dmxprotocols.xml" will be created in the "inout" folder.\
This applies to more object types, e.g., all remotes, all camera, and so on.\
In addition, when exporting a child object, e.g., a cue (child of a sequence), the exported file will be created in the folder "sequences" of the parent object (sequence), and gets also a subextension. In this case "cuename.cue.xml".

With this change of the folder structure, it is still possible to import files that are part of older software installations that are installed on your grandMA3 device.\
To be able to use the existing files on USB drives a copy file functionality has been implemented. The grandMA3 software detects the existing old folder structure as soon as a USB drive is recognized. A pop-up asks then if the old data should be migrated to the new folder structure. The user has these choices:

- Yes, But Keep Old: In this case, the files will be copied from the old folders to the new folders. Old and new software versions can use the files.
- Yes, And Delete Old: The files will be moved from the old folders to the new folders. In this case, when using an old software version later again, the old software version is not able to access the files anymore.
- Not Now: Nothing is done at moment. The pop-up appears again when starting the software again, or when unplugging and plugging again the USB drive.
- No And Don't Ask Again: Nothing is migrated into the new folder structure, and the pop-up will not appear in the future for this USB drive. In this case a small additional text file will be placed on the USB drive to be able to remember this choice.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New command line options when working with files (Import/Export, SaveShow/LoadShow, List):\
It is now possible to specify a path for files with the command line option /Path. This is handy for example when files are located within subfolders.

Examples:

The macro library file "bestmacro.xml" is located within "gma3\_library/data/macros/myfavorites".\
To import this library file, type:

User name\[Fixture]> Import Macro Library "bestmacro.xml" At Macro 5 /Path "myfavorites"

When the file is in the same folder, but on the first connected USB drive, type:

User name\[Fixture]> Import Macro Library "bestmacro.xml" At Macro 5 If Drive 2 /Path "myfavorites"

With the path option, it is also possible to import library files that are not placed within the grandMA3 folder structure. To import the same file, but from the folder "My\_grandMA3\_files" that is placed directly in the root of the USB drive, type:

User name\[Fixture]> Import Macro Library "bestmacro.xml" At Macro 5 If Drive 2 /Path "/My\_grandMA3\_files"

When the value of the path option starts with a slash (/), the system starts to navigate in the root of the drive (See the example from above). When the value of the path starts directly with a name, the system starts to navigate from the corresponding library folders, e.g., the macro folders in the gma3\_library and the resources.

With the new gma3\_library (please read above), there are now also 2 places available where library files are located. With the /Type option can now be distinguished between user library files (/Type "User") and system library files (/Type "System").

To list only the library files of the user MAtricks, type:

User name\[Fixture]> List MAtricks Library /Type "User"

To list all library files of the predefined MAtricks, type:

User name\[Fixture]> List MAtricks Library /Type "System"

The type option can also be used when a library file exists with the same name in the user library and the system library. To import the save\_show macro from the system library instead of the user library, type:

User name\[Fixture]> Import Macro Library "save\_show\.xml" At Macro 21 /Type "System"

The type option is also available for LoadShow, but with different values: The normal shows are /Type "Shows", demo shows are /Type "Demo", and backup files can be specified with /Type "Backup"

To load the demo show from the demo shows folder, type

User name\[Fixture]> LoadShow "Demoshow\_grandMA3.show" /Type "Demo"

**Restriction:**\
The /Type option can only be used for LoadShow, Import or List.

**Important:**\
When no type is specified, the type "User" has priority.

 

A third and new option is /NoRefresh. When for example listing the library files of a certain type and path, it takes a while to type the options into the command line. When a file shall be imported afterward from the specified type and path, they need to be entered again.\
With /NoRefresh it is not necessary anymore to enter /Type and/or /Path again for the following command.

Example:

List all macro libraries within a specific path:

User name\[Fixture]> List Library If Drive 2 /Path "/My\_grandMA3\_files/macro/archive"

To import the second library then to macro 1, type:

User name\[Fixture]> Import Library 2 At Macro 1 /NoRefresh

Without the /NoRefreshOption, the user would have to execute this command:

User name\[Fixture]> Import Library 2 At Macro 1 If Drive 2 /Path "/My\_grandMA3\_files/macro/archive"

 

Also, a new command line option is /Gaps. This option allows specifying whether the number of gaps between pool objects shall be preserved during import, or not. During export, the gaps are always exported. In our following example, the macro pool has macros 1, 2, 4, and 8, and all these macros shall be exported into one XML file.

To export the macros from our example, type:

User name\[Fixture]> Export Macro 1 Thru 8 "mymacros.xml"

Let's continue and import the exported macros again to macros 11 onwards without the gaps, type:

User name\[Fixture]> Import Macro Library "mymacros.xml" At Macro 11 /Gaps "No"

But if you want to import the macros and get the former gaps back, then type:

User name\[Fixture]> Import Macro Library "mymacros.xml" At Macro 11 /Gaps "Yes"

In this case, it would also be possible to not specify the /Gaps-option, as the XML file contains these gaps already:

User name\[Fixture]> Import Macro Library "mymacros.xml" At Macro 11

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When opening the calculator of the DMX personality cell, the special area on the right side displays a button for each DMX personality. These buttons use the same naming scheme as mentioned above.\
When selecting several RDM fixtures of different RDM fixture types, the calculator displays only the personality of the first selected RDM fixture.When selecting one of the DMX personalities in this example, the DMX personality will only be changed for the corresponding RDM fixtures.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) If an absent RDM fixture is connected to a different RDM port, the RDM fixture will be deleted from the previous RDM port.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Disabled properties, objects, etc. are now displayed with a red text color at these places:

- Macro lines are displayed in red when the Enabled property of the macro line is set to No.
- The sequence sheet displays entered commands in the Cmd cell with a red font color when the Cmd Enable setting of the sequence is switched off.
- Layout elements are displayed in the layout editor with a red text color when the visibility of the element itself is set to Hidden, or when the assigned object of a layout element is not part of the currently selected world.
- Agenda entries are displayed with a red font color when the agenda entry property Enabled is set to No or when the Agenda itself is totally switched off.
- Disabled remote (DC Remotes, DMX Remotes, and MIDI Remotes) entries are also displayed with a red font color.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Command Controls overlay allows now to use the area of the dimmer wheel for changing the dimmer values. To alter the dimmer values of the selected fixtures, tap into the dimmer wheel above Full, hold, and move the finger up or down. When the desired dimmer value is reached release the finger.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The grandMA3 onPC for macOS can now only be installed when an already installed grandMA3 onPC version is not running. The grandMA3 onPC installer on macOS informs the user with a pop-up if this is the case.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Date & Time menu

- In addition to the implementation of the Agenda, the Date and Time menu displays now the sunlight times (Dawn, Sunrise, Sunset, and Dusk) of yesterday, today, and tomorrow in the Sunlight view.

**Important:**\
All times are local times taking the time zone into account. Predictions will only work if the correct global location is given! Times are calculated for a flat horizon at sea level. Maximum precision for all times is +- one minute.

- The time zone pop-up offers now to choose a time zone not only by entering an offset in relation to the UTC time but offers now also to choose a time zone from a list of the usual time zones. The list has an alphabetical order. The time zone pop-up allows searching within the list of available time zones. All time zones are listed by their official names and their offset to the UTC time. For all time zones that change to daylight saving time in summer, there are additional daylight saving time zones available.
  - The timezones.xml file within the resource folder of each grandMA3 version allows to add own time zones or to edit the existing time zones. The changes at this file are only visible after restarting the grandMA3 software.
- The input fields for latitude and longitude were interchanged to meet the usual notation of coordinates.

**Hint:**\
Executing a clean start for grandMA3 onPC pulls the current time and time zone from the operating system and sets it as time and time zone within the grandMA3 onPC software.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png)Clock window

- The Clock window has a new ClockSource called Time Zone Clock. When Time Zone Clock is active, a Timezone can be set up in addition. The time zone pop-up is the same as in the date and time menu described above. The clock window will then display the current time of the specified time zone in relation to the setup time in Menu - Settings - Date and Time.
- The Clock window has a new property in its context menu called Title Prefix. The title prefix allows the user to enter a custom name, e.g., to enter a city that corresponds with the chosen time zone.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The OSC, PSN, and DMX Protocols menus display a "No Output Station" message in the Interface area and prevent any changes if no output configuration is generated for the station.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The copy cue pop-up was reworked: Instead of dropdowns, the options are now displayed with radio buttons which allows a faster overview and operation. In addition, the labels were reworked, too.

- CopySrc is now called Source Cue

- The buttons Merge, Overwrite (Status), and Overwrite (Content) have been removed. They are replaced by the Copy button and the new setting Destination Cue:

  - Merge: Defines that the content of the source cue will be merged to the existing content of the destination cue.
  - Overwrite: Overwrites the content of the destination cue.

- The new option Tracking into Destination Cue defines what should happen with the content that is tracking into the destination cues:

  - Keep: Attributes that are tracking into the destination cue, and not touched by the copied attributes, will stay as tracked values.
  - Force Release: Attributes that track into the destination will be set to Release.
  - Force Default: Attributes that track into the destination will be set to their default values.

- Cue Only offers now 3 options in direct access:

  - Off: Cue Only is off for the copy operation.
  - On: The copied cues will be inserted at the destination with activated cue only. Attributes that will be introduced by the copy operation will be set back to Release in the following cue. Read more about cue only in the [Store Cues topic​](/grandma3/2-4/cue_store/).
  - On (Default New): Works the same way as On, but instead of setting Release values, the attributes will be set to default values.

This revision also makes it necessary to change the command line options slighty:

- /CopyCueDestination has now the possible values Keep, ForceRelease, and ForceDefault.
- /CueOnly has the possible values Off, On, and OnDefaultNew.
  - Instead of /CueOnly "On" it is enough to specify only /CueOnly, when the default for CueOnly is set to Off.

The workflow how the copy cue pop-up remembers its settings has also changed: The settings are now stored for the next copy operation when tapping Save in the title bar of the copy cue pop-up. After having changed the settings and you want to revert to the stored settings, tap Load.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) It is now possible to set the trig type for the OffCue. To be able to do so, wrap around in the sequence settings has to be disabled. The following values can be applied: 

- NoTrigger: The OffCue will only be executed when switching the sequence off manually.
- Go: When the last cue is active, pressing go again will execute the OffCue
- Time: The OffCue will be triggered after the defined TrigTime.
- Follow: The OffCue will be started when the previous cue has finished its transition.
- Sound: Triggers the OffCue via the sound signal when the last cue is active.
- BPM: Triggers the OffCue via the BPM signal when the last cue is active.

To learn more about cue triggers, read the [Look at Cues and Sequences topics](/grandma3/2-4/cue_sequence_sheet/). 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The system monitor displays now proper feedback when sending OSC messages fails. The feedback displays also the number and name of the corresponding OSC configuration line of the OSC menu.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Executor bar

The executor bar design was updated:

- The selected sequence is now displayed with a yellow background of the label area within the executor bar. Other selected objects, e.g., the selected world, are still displayed by a yellow border around the executor label. This gives a better indication of the selected sequence on the executors.

- The value of a fader does not display decimals anymore when it is a percent value.

- The function of a fader itself is now recognizable by the background color of the fader bar:

  - Yellow: Master
  - Green: Rate
  - Purple: Speed
  - White: All other fader functions, like Crossfade, Crossfade A, Crossfade B, Temp, Highlight, Lowlight, and Solo.

- The abbreviation of the fader function Speed changed from SPD to SP. Furthermore, when the speed readout of the user profile is set to BPM, only a B will be used for this unit. In addition, in speed readout BPM no decimals are displayed anymore. All three changes allow now to display the full information within the fader bar of an executor label.

- An appearance of a sequence is now displayed in the background of the executor. Therefore it will be displayed a bit darker than normal.\
  When a sequence does not have an appearance, but part 0 of a cue within the sequence has an appearance, the appearance of part 0 will be displayed in the background of the executor, as soon as the cue is active.\
  Each cue in the cue list of an executor displays the appearance of part 0. The image of the appearance will be displayed right in front of the cue number. The whole cue line will display the background color of the appearance.

- The object number (in the top right corner), e.g., of a sequence, will now be displayed a bit brighter compared with the executor number in the top left corner of an executor.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Sequence settings

Sequences have 2 more options regarding the look of the sequence on executors and in the layout:

- PreferCueAppearance: When this option is enabled, and the current cue has an appearance, the cue appearance will be displayed on the executor or in the layout, instead of the sequence appearance.

- ExecDisplayMode: The ExecDisplayMode defines how the sequence will be displayed on an executor:

  - DataOnly: Only the cues with their appearances will be displayed. The cue appearance is only displayed in the line of the cue, and not in the background.
  - AppearanceOnly: Only the sequence or cue appearance will be displayed. No cue names, fade bar, etc. will be displayed. This can be handy for sequences with only one cue, or for sequences with only color cues or gobo cues.
  - Both: Each cue line displays its cue appearance, and the sequence appearance or the appearance of the current cue will be displayed in the background of the executor.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) It is now possible to create a new sequence directly by selecting an empty sequence in the sequence pool or selecting an empty executor. In case of selecting an empty executor, and the user did not use such a created and empty sequence, selecting then a different executor deletes the first created sequence and makes a new sequence on the newly selected executor.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Backup menu

A new setting in the backup menu allows defining if media files shall be additionally exported to the hard drive or USB drive when saving a show. The option Export Media on Show Save is located in Menu - Backup - Settings. When it is enabled images, plugins, meshes, and some more that are part of the show file will be exported to the drive the user saves the show to. When it is disabled, the mentioned objects won't be exported.

Together with the new option, the Settings tab of the backup menu got a small restyling: The Interval button got renamed to AutoSave Interval, and the label on the left side of AutoSave Interval is now gone.

 Presets display now markers for absolute values and/or relative values depending on their stored values. The markers are squares in red or violet (same colors as in the layer toolbar).

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Pop-ups for Goto and Load are now implemented. To open such a pop-up, enter Goto or Load into the command line. This can be done by entering the terms using a keyboard or by pressing Goto for Goto or Goto Goto for Load.\
After that, press the sequence or executor the pop-up should be opened for. Executing Goto or Load directly opens the corresponding pop-up for the selected sequence.

Within the pop-up, scroll to the desired cue, and tap it. It is also possible to search for cues by entering the desired name within the filter input field at the top of the pop-up.

Both pop-ups allow also to display the cue appearance. To do so, tap Cue Appearance in the title to display or hide the cue appearance. Both pop-ups share this setting.

**Known Limitation:**\
It is not possible yet to use Goto or Load as a direct button function on an executor for this.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Swop can be assigned as a button function for an executor. Pressing the executor button plays then the sequence back with the swop functionality. Swop as button function is a temporary function, same as with Flash and Temp.

In addition, sequences can be protected against swop. To do so, edit the settings of the desired sequence, and enable Swop Protect. This sequence will not be set to 0 anymore when executing swop with an other sequence.

Swop is also affected by the playback master. When swopping a sequence that has a playback master assigned, only the sequences that have also the same playback master assigned will go to zero. Sequences outside of this playback master are not affected. Swop protect within the playback master is also respected.\
A sequence that will be swopped and that has no playback master assigned puts only sequences to zero that are also not having a playback master assigned.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Installed option

Images, videos, and plugins can use the new setting Installed. When this setting is enabled, the station uses the resource from the drive from where it was imported, instead of taking it into the show file. This can reduce the size of show files. When taking new stations into the session, the user has to take care, that the files marked as installed are also available on these stations.\
When the Installed setting is disabled, the file will be imported into the show file and used from there. During a session upload, these resources will be transmitted to the joining devices, too.\
By default Installed is disabled.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New command HelpLua. Executing HelpLua exports a file named "grandMA3\_lua\_functions.txt" into the gma3\_library folder on the internal drive. This file contains all grandMA3 specific Lua functions.\
Furthermore, the manual provides now more detailed topics for the grandMA3 specific Lua functions. To learn about these functions, please read the [Lua functions topic and its subtopics.](/grandma3/2-4/lua_objectfree/) The manual does not describe all gandMA3 specific Lua functions, yet. It will be expanded all the time. To read the newest updates, please visit the online manual pages at [https://help.malighting.com](https://help.malighting.com/grandMA3/2.4/HTML/help.html).

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The software update menu got a small rework:​

- The buttons Select Update File, Import Selected Update File, and Update Devices are reordered to get a useful order that reflects the workflow: 1. Select the file, then the user can import a file or update devices.
- The buttons Import Selected Update File, and Update Devices are grayed out, as long as no update file is selected.
- When selecting a file to use for updating devices, the End User License Agreement (EULA) pops up, as the update process cannot prompt the user with the EULA on the updated device.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The color engine has been improved. It now makes use of color-measured fixture types with a subtractive color mixing system.

If a fixture type has measured emitters or filter data, a DMX curve is created from this data and automatically applied to the corresponding logical channel of the fixture type. In the case of a fixture that has additive color mixing at least one color measurement with a color point at full output per emitter is needed. A DMX curve is created only if there is more than one measurement. In the case of a fixture that has subtractive color mixing at least two color measurements with spectral data are needed. One of these must be at maximum insertion and one at minimum insertion.

**Hint:**\
Additional measurement values at different emitter output levels or filter insertions can significantly improve the accuracy, especially for emitters with non-linear brightness curves or filters with non-linear saturation curves.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The color theme got a new color definition for the selected color of pool buttons. It is called Selected and is located within the PoolButton color group. This allows defining a different color for the selected pool elements, e.g., Sequences, compared with the selection color of fixtures.

---

 

## []()What's Changed

- Include Link Last Go moved in the settings of a sequence to the protect column.
- Entering one IP out of the following ranges is not allowed anymore. The check will be done when the user tries to apply these IPs in the corresponding calculator. In case one of these IPs has been entered, a pop-up will inform the user about the illegal input.\
  These are the blocked IP address ranges:\
  192.168.33.0/24\
  0.0.0.0/8\
  127.0.0.0/8\
  224.0.0.0/4\
  255.255.255.255/32
- Configuration lines in the Art-Net or sACN menu change the font color of their name to green when a corresponding packet is sent. When no packet is sent, the font color turns back to white.
- The buttons in the timecode slot editor were rearranged, and the editor displays now also the IP address of the receiving station.
- onPC stations that crash offer now to cancel the automatic restart. A pop-up will be displayed for 10s when the software crashed. The focus is set to Restart Now, which will restart the software when tapping the button, or after 10s when taking no further action. In case of choosing Cancel, the software will not start again after 10s.
- When a selection has different attribute values set, the corresponding attribute encoder displays now the value of the last selected fixture.
- When a pool element, e.g., a preset cannot be called by the current selection, the indicator bar on top of the pool object will display now the For None color of the pool window.
- The root index numbers are reorganized. Direct index access commands may have to be adjusted.
- The icon of the resize tool in several windows (Phaser Editor, Layout Window, and Timecode Window) has changed. This is the new icon: ![](/img/grandma3/2-4/icon_resize_15_v1_5_1-95b14f.png)
- Toggling through the different channel functions on an encoder does not activate the attribute anymore. The attribute will be activated when changing the value of the attribute afterward.
- The syntax of MAtricks has changed: The former keyword MAtricksPool to address the MAtricks object in the MAtricks pool is now gone. To address them now, use the MAtricks keyword: SelFix MAtricks 3 will apply the third MAtricks object in the pool to the current selection.\
  To modify the MAtricks of one of the selections, address them with the combination of the keywords Selection and MAtricks. To set the XBlocks of the current selection to 3, type:

User name\[Fixture]> Set Selection MAtricks "XBlock" 3

**Restriction:**\
Existing macros with MAtricks syntax cannot be converted by the system.

-  In the case of an RDM fixture that sends data from a non-supported RDM version, the RDM fixture will be displayed with orange font color within the RDM Devices window.
- The specific library keywords (ColorThemeLibrary, FixtureTypeLibrary, GDTFLibrary, MacroLibrary, MenuLibrary, MeshLibrary, and PluginLibrary) are replaced by keyword combinations of the corresponding object keyword and Library:\
  For example, Macro Library replaces MacroLibrary,  ColorTheme Library replaces ColorThemeLibrary, and FixtureType Library replaces FixtureTypeLibrary.\
  The GDTFLibrary keyword is replaced by a special combination together with the path option:\
  FixtureType Library /Path "../gdtf"\
  This style also allows to address the fixture types that are converted from grandMA2:\
  FixtureType Library /Path "../grandma2"

**Restriction:**\
Existing macros that use one of the mention object specific keywords cannot be converted to use the new syntax.

- The LUA Core has been updated to LUA v5.4.

- Changed the name of the ANSI E1.54 colorspace from "Plasa" to "Standard" in the color picker window.

- The Magic workflow changed:

  - The MAgic layer was renamed to GridPos.
  - The MAgic values (now GridPos values) are now always activated automatically when entering attribute values or if calling presets. Therefore, they are automatically part of a preset when a preset will be stored.
  - With the automatic creation of the MAgic values (now GridPos values) on the GridPos layer, it is now possible to have different GridPos values for different attributes of the same fixture which expands the creativity.
  - Presets have now a MAgic property (edit the options of a preset, e.g., by executing EditOption Preset x.y). When the MAgic property is enabled, the preset will behave as a MAgic preset and distribute its values across the range of selected fixtures when calling it.
  - The Commands At MAgic and Off MAgic are obsolete now. If you change the grid position of fixtures and would like to apply the new GridPos value you can use At GridPos.

**Important:**\
MAgic Presets must be stored as selective.

- The EditOption keyword changed to EditSetting.

- As executor is the correct word, most places where exec was used instead of executors were refactored. Among others these are:

  - The SpecialExec keyword changed to SpecialExecutor.
  - ExecTime changed to Executor Time.

- Selection of groups, MAtricks, etc. is not possible anymore. As a result of this change, only the selected sequence can now interact with Go+ \[large], Go+ \[large], and, Pause \[large].

- The TTL of MANet3 network packets is now set to 8.

- The phaser editor window uses now ViewMode instead of Layout to change between the different modes to display the data.

- All windows that used to have the ability to set the window into a setup mode are having now a Setup toggle button instead of the 2 state button that changed between Normal/Playback and Setup. In detail, these are the 3D window, layout window, timecode window, and timecode editor.

- The columns Enable and input (Signal, MIDI Channel, MIDI Index and MIDI Type) in the different remote types menus are moved more to the front. They are all now located right after the name column.

- The show file migration converts the preset readouts for sheets (e.g., fixture sheet) of show files from v1.3 or prior in this way:

  - Preset to ID+Name
  - Both to Name+Value

- Exporting filters exports now also the names of the attributes.

- When the software starts, it tries to load the last show file from its last location (e.g., USB drive). If the last location is not connected anymore, the software tries to load a show file with the same name from the internal drive.

- Show files that will be loaded from drives, that are not the internal drive, will be internally marked as to be saved. This will trigger the save dialog when loading another show later or when shutting down the system.

- The system does not ask anymore to save a show later if loading the show failed, and therefore the show will stay empty. This prevents that the user may accidentally overwrite the existing show file.

- The name of the FixtureIcon pool changed to Symbol. In new shows, there will be added some more symbols. Furthermore, a new lib\_symbols folder with many new symbols will be installed with this version onwards. The symbol library folder is located in gma3\_vx.x.x.

- The sequence setting Off when Overwritten was renamed to Off when Overridden.

**Important:**\
When importing sequences that were exported with v1.4 or earlier, the Off when Overwritten setting inside these files cannot be imported. In this case, Off when Overridden will be set to the default state.

- The layers CueID and CueIDEffect within the layer toolbar of the fixture sheet are renamed to CueAbs and CueRel. CueAbs displays the references to the cue, where the played back absolute value is coming from, and CueRel displays the references to the cue, where the relative value of the output is coming from.
- The layer toolbar in the fixture sheet was rearranged: Output, DMX, CueAbs, and CueRel are now placed behind Auto. These items are followed by the layers, that are also directly available within the encoder bar. While being on Auto, the layers within the fixture sheet change together with the ones in the encoder bar. 
- When calling MAtricks pool objects they will now always be activated, no matter if MAtricks were active or not, when storing the MAtricks pool object.
- Web remote devices display now always by default the command line, and the control bar.
- When activating the To value of any MAtricks property, and the From value is not set, yet, the From value will be activated with its default, e.g., 0s, 60 BPM, or 0°.

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Labels on Spot were not displayed for spots of subfixtures while Selection Only was active. This bug is fixed. The spots of subfixtures now display a label even if selection only is activated.                                                          |
| Visual artifacts were displayed for fixtures with rectangle beams in the 3D window. This bug is fixed. A rectangle beam should not disappear any longer in any perspective. Also, there should not be visual artifacts with rectangular spots any longer. |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When loading a different show and tapping Save, the previous show file was not always saved. This bug is fixed. Show files are now always saved when tapping Save.                                                                                                                                                                                                    |
| Command line pop-ups that were triggered via the LUA function cmd() could crash the console. This bug is fixed. Command line pop-ups triggered by LUA are not crashing the console anymore, but post an error message in the system monitor.                                                                                                                          |
| Locking the console by pressing MA + MA + Pause \| Fix kept these buttons still highlighted during desk lock. This bug is fixed. Locking a console lights up now only the buttons that were highlighted before locking the console.                                                                                                                                   |
| When holding List pressed and then pressing an object hard key, e.g., Group, the List keyword was also posted into the command line. This bug is fixed. The List keyword will now only be posted into the command line when releasing List, and no other actions have been done.                                                                                      |
| Selecting the children of a fixture and specifying the name of the main fixture, e.g., Fixture "Spot\*", failed. This bug is fixed. Recursive selection of fixtures works now also when specifying the name of the main fixture.                                                                                                                                      |
| Selection commands where a range was specified and the range used at least one name, e.g., Fixture 1 Thru "Spot 8", did not work. This bug is fixed. Selection ranges can now be specified using names.                                                                                                                                                               |
| It was not possible to add a new selection to a recursive selection within one command, e.g., "Fixture 1. + Fixture 2". This bug is fixed. Recursive selection is now also at the beginning of a selection syntax possible.                                                                                                                                           |
| When doing a recursive selection with fixture IDs that are not valid, all main fixtures were selected, e.g., Fixture 30. Thru in the Demoshow. This bug is fixed. Using invalid fixture IDs for a recursive selection returns now an error in the command line.                                                                                                       |
| When tapping MA + Update in the Command Section overlay Cook was not entered into the command line and instead, the update menu opened. This bug is fixed. MA + Update in the Command Section overlay inserts now Cook into the command line.                                                                                                                         |
| Renaming groups that contained only one fixture renamed also the fixture itself. This bug is fixed. Fixtures are not renamed anymore when renaming a single fixture group.                                                                                                                                                                                            |
| Single fixture groups always displayed the appearance of the fixture. This bug is fixed. When assigning a third appearance to a single fixture group, the new appearance will now be displayed on the group pool object. The appearance of the fixture itself stays unchanged.                                                                                        |
| The input of a recursive selection command like "Fixture 301. Thru .1" was not possible via the keys. This bug is fixed. Pressing . in conjunction with a selection command should work now in every case as expected.                                                                                                                                                |
| When disabling the general undo for a user profile, users using this user profile could still oops the operation of the sliders in the MAtricks window. This bug is fixed. Oopsing the operation of the MAtricks sliders is now dependent of the undo general setting within the user profile.                                                                        |
| Importing a view that contained a layout window set to a dedicated layout object, the layout window was reset to the selected layout. This bug is fixed. Importing views with layout windows imports the setting of the selected layout object now correctly.                                                                                                         |
| The console failed to export a color theme for the first time. This bug is fixed. Exporting a color theme does now always work.                                                                                                                                                                                                                                       |
| Exporting to a USB drive failed when the USB drive was selected by tapping, holding, and dragging the drive select button, and then choosing the USB drive from the list. This bug is fixed. The correct USB drive will now also be selected when choosing it from the drop-down list of the drive select button.                                                     |
| The software could crash when copying cues that had values for attributes without a feature definition. This bug is fixed. Attributes without a feature defined do not cause a crash anymore when copying cues.                                                                                                                                                       |
| Storing an MAtricks object and specifying a name applied the name to the MAtricks object. This bug is fixed. Store MAtricks "Cool Setup" will now create an MAtricks object that is called "Cool Setup".                                                                                                                                                              |
| It was possible to set non-existing values for properties when using a number instead of the value name. This bug is fixed. Set Selection 1 MAtricks "InvertStyle" 100 does not apply 100 as value anymore, as this property has not 100 different values.                                                                                                            |
| Importing multiple objects at once and not specifying a target spot, did not ask the user how to proceed when at least one target spot was not empty. This bug is fixed. Import asks now always when the destination is not empty.                                                                                                                                    |
| When exporting and importing a sequence that used individual timings the timings were set to 0 after the import. This bug is fixed. Individual times within sequence are now preserved during export and import.                                                                                                                                                      |
| The command Off Page x to turn off the executors of a specific page did not work. This bug is fixed. Off Page x works now as expected.                                                                                                                                                                                                                                |
| It was possible to assign the same fixture several times within a layout by creating several layout elements and editing the object cell within the layout editor. This bug is fixed. Fixtures and subfixtures can now only be assigned once within one layout.                                                                                                       |
| The import of sequences ignored individual fade and delay times. This bug is fixed. Individual fade and delay times within sequences will be imported correctly.                                                                                                                                                                                                      |
| Stack labeling of objects did not obey leading zeros. This bug is fixed. Leading zeros are kept during relabeling objects.                                                                                                                                                                                                                                            |
| Calling an MAtricks object with an assigned appearance and/or scribble into a selection called also the appearance and/or scribble. Storing then a new MAtricks object also included the appearance and/or scribble assigned. This bug is fixed. Calling a MAtrick that has an appearance and/or scribble assigned does not call the assigned objects anymore.        |
| Moving or deleting layout 1 created immediately a new layout. This bug is fixed. It is now possible to delete all layouts within the layout, and it is possible to not have a layout 1.                                                                                                                                                                               |
| Closing the assign menu for an executor with no object assigned kept an empty executor object. This bug is fixed. Empty executors are now deleted when closing the assign menu.                                                                                                                                                                                       |
| List Library did not display library files that were added during the runtime of the software. This bug is fixed. Listing the library files of an object displays now also files that were added since listing them the last time.                                                                                                                                    |
| Importing objects into locked objects changed the locked objects. This bug is fixed. Locked objects as import targets are not modified anymore.                                                                                                                                                                                                                       |
| The software could crash when importing a data pool into an existing one. This bug is fixed. Importing data pools should not crash the software anymore.                                                                                                                                                                                                              |
| Importing a timecode show could not display the events of the first track in the timeline view mode. This bug is fixed. Importing a timecode show imports all events correctly.                                                                                                                                                                                       |
| Merging into an existing group switched off the Move Grid Curser setting. This bug is fixed. Move Grid Cursor won't be disabled anymore when merging into a group.                                                                                                                                                                                                    |
| Listing groups did not display the Move Grid Cursor setting of the groups. This bug is fixed. The command line history returns now also the Move Grid Cursor settings of groups when listing them.                                                                                                                                                                    |
| Moving objects in pools to IDs above 9 999 were lost. This bug is fixed. Move actions to pool IDs above 9 999 won't take place anymore. When moving several objects at the same time, and only some of them will moved to be above pool ID 9 999, only the objects below 9 999 will be moved.                                                                         |
| When changing the target of a timecode track, the events inside the track still referenced to the former target. This bug is fixed. Targets of timecode tracks are now also referencing to the new target when the target of the track will be changed.                                                                                                               |
| When deleting cues of sequences that are used in timecode shows, the now empty events within the timecode show were handled as Go+ when playing back the timecode show. This bug is fixed. Empty timecode events won't trigger the next cue anymore.                                                                                                                  |
| The cue part number was lost when copying sequences. This bug is fixed. Sequences are now copied without discarding the cue part numbers.                                                                                                                                                                                                                             |
| Exporting a data pool, and importing it again, lost all presets in the imported data pool. This bug is fixed. Importing a data pool preserves now presets.                                                                                                                                                                                                            |
| Executing "Copy Cue 1" could crash the software. This bug is fixed. Copying a cue into the clipboard should not crash the software anymore.                                                                                                                                                                                                                           |
| Pressing Blind while being in the update menu, updated the current cue of the selected sequence. This bug is fixed. Pressing Blind does not update cues anymore while having the update menu open.                                                                                                                                                                    |
| Fixture At Fixture within layouts did not work. This bug is fixed. Having fixtures selected, adding At into the command line, and then selecting fixtures within a layout window, executes now the Fixture At Fixture functionality correctly.                                                                                                                        |
| Oopsing the store operation into an existing view could cause an empty view button when trying to call the original view button later again. This bug is fixed. View buttons won't be empty anymore when oopsing the store operation into them when they existed already.                                                                                             |
| Recording timecode events did not always record all events that had a trigger time of 0s. This bug is fixed. Timecode events should now always be recorded, no matter of the setup trigger time.                                                                                                                                                                      |
| Tapping Shuffle in the MAtricks window did not shuffle correctly. This bug is fixed. Shuffle creates now again new values when tapping Shuffle in the MAtricks window.                                                                                                                                                                                                |
| Entering commands with specifying the input readout for the value, did not work correctly when using Decimal16 or Hex16 readouts. This bug is fixed. Commands like "At Decimal16 512" set now the value to 512 in decimal readout.                                                                                                                                    |
| Macros with command keywords, e.g., Move, that had AddToCmdline set to Yes and Execute set to No, executed the command immediately when tapping the first object. This bug is fixed. Macros with a command functions keyword that requires to specify a source and a destination object by tapping them work now as expected.                                         |
| The store modes All and All For Selected did not store the attributes that were expected. This bug is fixed. Store modes All and All For Selected store now all attributes of the show, or all attributes of all selected fixtures.                                                                                                                                   |
| Storing into an existing preset while having still the values of a different fixture for this preset deactivated in the programmer did not retain a preset link for the new fixture in the programmer. This bug is fixed. Deactivated preset links in the programmer do not prevent other fixtures to get a preset link in the programmer when storing into a preset. |
| Moving a list of objects failed, when the destination was also part of the source, e.g., Move Group 1 Thru 3 At Group 3. This bug is fixed. Move with overlapping source and destination works now.                                                                                                                                                                   |
| Moving a range of objects, where the range of objects had gaps, removed the gaps at the destination. This bug is fixed. Having groups 1 and 3, and moving them with Move Group 1 Thru 3 At Group 11 results now in groups 11 and 13, and not groups 11 and 12.                                                                                                        |
| The software crashed when trying to record new events into a locked timecode show. This bug is fixed. Trying to record events into a locked timecode show does not crash the software anymore.                                                                                                                                                                        |
| Overwriting all integrated data within a preset kept the integrate symbol on the preset. This bug is fixed. The integrate marker will be removed when overwriting all integrated data of a preset.                                                                                                                                                                    |
| Storing into a range of cues created new, but unwanted cues. This bug is fixed. New cues will not be created anymore when storing into a range of existing cues.                                                                                                                                                                                                      |
| When entering values using the numeric keypad of a grandMA3 console while editing an XLR port of the output configuration, pressing Please was not recognized. This bug is fixed. The Edit XLR pop-up can now be closed by pressing Please on the numeric keypad of grandMA3 consoles.                                                                                |
| Press, hold and turn of an attribute encoder reset align immediately when releasing the encoder. This bug is fixed. Align is not reset anymore when releasing a pressed attribute encoder. It will be reset first when starting to use an encoder of a different attribute.                                                                                           |
| When unzipping grandMA3 onPC for Windows zip files with the Archive Utility of macOS, the extracted files were malformed. This bug is fixed. The macOS Archive Utility can now be used again to unzip grandMA3 onPC zip files.                                                                                                                                        |
| Changing the background color of an appearance to black changed the size of an additionally used image within the appearance. This bug is fixed. The size of an image is not changed anymore when changing the background color of an appearance.                                                                                                                     |
| The cue only setting and the sequence mode setting of the update menu was not stored when tapping Save Preferences. This bug is fixed. The preferences of the update menu include now the cue only setting and the sequence mode setting.                                                                                                                             |
| When storing a cue right after storing a preset while having Keep Activation enabled did not store the preset link into the cue. This bug is fixed. Storing right behind preserves now the link to presets.                                                                                                                                                           |
| Importing an MAtricks object did not import the speed values correctly. This bug is fixed. MAtricks are now imported correctly.                                                                                                                                                                                                                                       |
| Storing an attribute into part 0 of a cue, that is already stored in a different cue part, did not respect the Allow Duplicate setting. This bug is fixed. Allow Duplicates is now respected when storing explicit into part 0.                                                                                                                                       |
| Timecode events that were placed at the beginning of the time range were not always played back. This bug is fixed. Timecode events that are placed at the edges of the time range are now played back correctly.                                                                                                                                                     |
| Selecting fixtures by pressing the SelFix key of an executor did not select the fixtures within the layout when the layout window was switched into the setup mode. This bug is fixed. Fixtures within the layout window will be selected when pressing SelFix on an executor where these fixtures are part of the assigned object.                                   |
| Values on phaser layers were not stored into presets when the value was set to the default value. This bug is fixed. Values of phaser layers are now always stored into presets when they are active.                                                                                                                                                                 |

### Connections

| Description                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When having a session with two or more grandMA3 onPC stations running on macOS, it could happen that both stations were displayed alternating on the same line in the network menu. This bug is fixed. Each grandMA3 onPC station running on macOS is now displayed in its own line within the network menu.                             |
| When inviting a station into a session, it could happen that both stations used the same Session Slot. This bug is fixed. When initializing a session, or inviting stations into a session, each station gets now its own and unique Session Slot.                                                                                       |
| Layout windows being displayed within a web remote connection could flicker. This bug is fixed. Layout windows displayed within a web remote connection do not flicker anymore even if the same layout is not displayed on the host station.                                                                                             |
| It was not possible to output DMX locally when a console booted up in standalone mode. This bug is fixed. Local DMX output is now always immediately possible when a console finished its boot process.                                                                                                                                  |
| The software could crash when a web remote connection was not finally established and one of the connection participants already tried to use the connection. This bug is fixed. The software should not crash anymore when a web remote connection is not ready, yet.                                                                   |
| When receiving a long OSC command followed by a short one, fragments of the long one could be visible in the system monitor. This bug is fixed. Fragments of long OSC messages are not visible when followed by a short one.                                                                                                             |
| If a key with a macro assigned to start a sequence was triggered through OSC, the console GUI could freeze. This bug is fixed. Macros assigned to keys to start a sequence can be triggered through OSC.                                                                                                                                 |
| OSC commands were not sent if triggered from a connected console in a session. This bug is fixed. OSC commands are sent from connected consoles in a session as well.                                                                                                                                                                    |
| The Toggle buttons for OSC input and output did not work correctly. This bug is fixed. OSC input and output buttons toggle each property right.                                                                                                                                                                                          |
| OSC commands were only sent if Send and SendCmd were enabled in the OSC configuration menu. This bug is fixed. OSC commands are sent also if only SendCmd is enabled.                                                                                                                                                                    |
| The after roll of a timecode slot was not started when the timecode signal was input into an I/O node and the I/O node lost its connection. This bug is fixed. The timecode slot after roll will be started when an I/O node disappears from the session.                                                                                |
| The DMX input of sACN packets ignored the start code and therefore processed alternative sACN packets as DMX sACN packets. This bug is fixed. The DMX input of sACN processes now only DMX sACN packets.                                                                                                                                 |
| Connecting via SFTP to a console did not allow to access the user data of other installed versions. This bug is fixed. Accessing the console via SFTP now also allows to enter the folders of other installed software versions.                                                                                                         |
| The software crashed when trying to change the IP address for an interface, but keeping the input field empty. This bug is fixed. Applying an empty IP address does not crash the software anymore. In this case, the former IP will stay.                                                                                               |
| Changing the IP address of a station that is part of a session caused unexpected session behavior. This bug is fixed. Changing the IP address of a station within a session to a totally different subnet does not keep the station trying to join the session all the time.                                                             |
| The station priority of an onPC station was reset to Normal when connecting an onPC command wing or onPC fader wing the first time after starting the application. This bug is fixed. The station priority does not change anymore when connecting an onPC command wing or onPC fader wing after starting the grandMA3 onPC application. |
| The takeover from the main timecode source to the backup timecode source was not smooth. This bug is fixed. When the first received timecode input fails, the input on a different station takes now over seamlessly.                                                                                                                    |

### Patch

| Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Copy and paste of fixtures in the patch caused duplicated UUIDs for those fixtures. This bug is fixed. Copy and paste of fixtures do not create duplicate UUIDs for those fixtures or export them if a patch was exported as MVR.                                        |
| Oopsing the assignment of a Mode Master when editing a fixture type could cause a crash. This bug is fixed. Oppsing a Mode Master assignment does not cause a crash anymore.                                                                                             |
| A fixture without an assigned fixture type in the patch could crash the software when trying to select this fixture. This bug is fixed. Selecting a fixture without an assigned fixture type does not crash the software anymore.                                        |
| The DMX footprint of a fixture type with nested geometry references was calculated wrong. This bug is fixed. A fixture type with nested geometry references now has a correct DMX footprint.                                                                             |
| Changing a Fixture ID to an already existing ID did not inquire the user. This bug is fixed. Switching a Fixture ID to an already used one displays a pop-up to review the operation.                                                                                    |
| Editing the mode of a fixture displayed all modes available in the show file. This bug is fixed. Editing the mode of a fixture only displays the modes available for the selected fixture.                                                                               |
| Applying the same label command again on fixtures resulted in multiple equally labeled fixtures. This bug is fixed. Relabeling multiple fixtures now counts up the right way.                                                                                            |
| The universal fixture could be deleted or moved. This bug is fixed. It is not possible to delete, move, or cut and paste the universal fixture anymore.                                                                                                                  |
| "Global" could be assigned as a ID Type. This issue has been fixed. The "Global" Fixture Type and the Global Stage are now hidden and can't be edited nor assigned.                                                                                                      |
| Cut and paste of fixtures in Patch was losing Layer and Class information. This bug is fixed. Cut and paste of fixtures in Patch keeps Layer and Class information                                                                                                       |
| Setting the option "React to master" to "None" or "Group" for fixtures in the patch did not work. This bug is fixed. Now, after leaving the patch the setting is saved.                                                                                                  |
| The property "RealAcceleration" of a channel function was not imported when a GDTF was imported. This bug is fixed. The RealAcceleration property of a GDTF is now correctly imported.                                                                                   |
| Channel functions were imported with their default name instead of their custom name when a GDTF was imported. This bug is fixed. Custom names of channel functions of a GDTF are imported correctly now.                                                                |
| Adding new layers or classes between existing ones changed also the assignment of layers or classes of fixtures when entering the patch later again. This bug is fixed. Layer or class assignments of fixtures are not changed anymore when adding new ones to the show. |
| Assigning a fixture that has now DMX patch into a layout crashed the software. This bug is fixed. The software does not crash anymore when adding a fixture without a DMX address into a layout.                                                                         |
| The software could crash when adding hundreds of millions new fixtures. This bug is fixed. Trying to add too many fixtures does not crash the software anymore.                                                                                                          |

### Phaser

| Description                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When editing a phaser and changing the speed in wide steps, the software could crash. This bug is fixed. Editing the phaser speed in wide steps does not crash the software anymore.                                                                                                                                                  |
| Changing the form of a phaser by using the phaser editor, reset the phase values to 0°. This bug is fixed. Individual phase values are now kept when changing the form of a phaser.                                                                                                                                                   |
| When having multiple steps, select them together, and then turning the encoder of an until now not involved attribute set different values for this attribute within the selected steps. This bug is fixed. Activating attributes for multiple selected steps by turning the encoder sets now the same value into the selected steps. |

### Playback

| Description                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When storing normal values with the cue only option into empty cues, it could happen that the cue displayed the phaser marker. This bug is fixed. Cues should now only display the phaser marker when there is more than 1 step in the cue.                                                                                                                                                            |
| The I< button in the sequence encoder bar jumped to CueZero. This bug is fixed. The I< button now jumps to the first cue.                                                                                                                                                                                                                                                                              |
| When switching off a sequence where the OffCue has timings, and the master of the sequence was below 100%, the fade and delay to off took place only at the last time frame that was proportional to the position of the master of the sequence. This bug is fixed. The timings of the OffCue are now running completely when switching off a sequence, no matter of the master level of the sequence. |
| The position of the master fader of a sequence was not respected when activating attributes that use a preset. This bug is fixed. Knocking in attributes that use presets which are played back by a master scaled sequence activates now the value in respect of the scaled master fader.                                                                                                             |
| Playing back recipes with a set phase did not use the phase of the recipe, but used the phase of the preset that was specified within the recipe. This bug is fixed. Recipes use now their set phase, instead of the one of the preset.                                                                                                                                                                |
| Restart Current Cue did not restart the current cue when the sequence was switched off before by using a fade time within the OffCue. This bug is fixed. Restart Current Cue works now also when the OffCue has a fade time.                                                                                                                                                                           |
| Pausing a follow cue by pressing Pause was not possible. This bug is fixed. Follow cues can be now paused.                                                                                                                                                                                                                                                                                             |

### Windows

| Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The timecode markers and time ranges were sorted by their ID in their pop-ups. This bug is fixed. Markers and time ranges are now sorted by their start time.                                                                                                                                                                                                                                                          |
| When changing between the different tabs of the backup menu, the selected file was not kept selected. This bug is fixed. The selected file stays now selected when changing to a different tab in the backup menu.                                                                                                                                                                                                     |
| The encoder bar window created several errors in the system monitor when being on another screen than screen 1 and entering the setup mode of the layout window. This bug is fixed. The encoder bar window should not create errors in the system monitor anymore.                                                                                                                                                     |
| Tapping - the first time for the layer MAtricks property in the MAtricks window, while this property did not have any active value, set the value to non-logical values. This bug is fixed. Tapping - the first time for a layer MAtricks property sets the value to its default values, e.g. 60 BPM for speed MAtricks properties.                                                                                    |
| At some places within the recipe editors, MAtricks was spelled wrong. This bug is now fixed. The user interface should now always display MAtricks correctly spelled.                                                                                                                                                                                                                                                  |
| When entering the setup mode of the timecode editor, the encoder bar did only change to the timecode editor encoder bar when tapping into the title bar of the timecode editor in addition. This bug is fixed. The timecode editor encoder bar is now always displayed when entering the setup mode of the timecode editor.                                                                                            |
| In the Fixture sheet, the display rules for selected CIDs were not consistent with the FID rules. This bug is fixed. Selected CIDs are displayed the same way as the FID rules.                                                                                                                                                                                                                                        |
| On 2Port nodes the port configuration did not display valid data for port 1. This bug is fixed. The port configuration menu on 2Port nodes displays now again all ports for configuration.                                                                                                                                                                                                                             |
| The performance of the UI slowed down when a layout window with huge images was displayed. This bug is fixed. Images with big resolutions do not drastically slow down the UI performance anymore.                                                                                                                                                                                                                     |
| The timecode editor did not always appear when editing a timecode show. This bug is fixed. When entering the setup mode of a timecode window or when editing a timecode show, the timecode editor bar will now always be displayed immediately.                                                                                                                                                                        |
| When having an overlay above a pool window, and scroll in the pool window behind the overlay, the focus frame of the selected pool object shone through. This bug is fixed. Selected elements behind overlays do not display the white focus frame on top of the overlay anymore.                                                                                                                                      |
| Groups in layouts disappeared in the layout window when being in a world where not all fixtures of the group are part of the world. This bug is fixed. Groups are now always displayed, also when the current world is limited to a subset of fixtures that do not allow to select any fixture of the group.                                                                                                           |
| The different properties in the Date & Time menu had the wrong input ranges defined. This bug is fixed. The Date & Time menu has now useful input ranges defined per property.                                                                                                                                                                                                                                         |
| Using the color picker with a fixture that had DMX channels for Hue and Saturation of an HSB color mixing system caused a crash. This bug is fixed.                                                                                                                                                                                                                                                                    |
| When changing the timecode slot generator start time, the displayed time was not updated right away. This bug is fixed. Changing the timecode slot generator start time updates the display directly.                                                                                                                                                                                                                  |
| The Timecode display colors for Generator and External source did not work like expected. This bug is fixed. The display color for Generator and External Source is used correctly in the timecode slot pool and clock set to timecode clock.                                                                                                                                                                          |
| Identical channel functions of different subfixtures were not merged in the channel function selector of the encoder and in the calculator of an encoder in some cases. This bug is fixed. Identical channel functions are merged correctly now.                                                                                                                                                                       |
| The layout window could display the wrong dimmer values for fixtures when changing the dimmer value of another fixture. This bug is fixed. The layout window displays now always the correct dimmer values for each displayed fixture.                                                                                                                                                                                 |
| The order of the toolbar copy/cut/paste buttons was inconsistent across several windows. This bug is fixed. The order of the toolbar buttons is now unified.                                                                                                                                                                                                                                                           |
| If the onscreen keyboard was changed to Russian language, the yY letter was displayed wrong. This bug is fixed. The Russian onscreen keyboard does not display two eE buttons anymore.                                                                                                                                                                                                                                 |
| The additional input buttons on the left side of a calculator did not work properly if the calculator was moved. This bug is fixed. Selecting for example a channel set in the calculator of the encoder bar is working fine again after moving the calculator.                                                                                                                                                        |
| When assigning a sequence or group to an executor not equipped with a fader or encoder, or changing the fader/encoder assignment to empty afterwards, the "MST" for the fadermaster was still displayed in the playback bar. This bug is fixed. "MST" is not displayed anymore when assigning a sequence or group to an executor not equipped with a fader or encoder or changing the fader/encoder function to empty. |
| Special executors without an assigned object displayed their internal name on the special executor label which made the user think, that this special executor is not empty. This bug is fixed. Empty special executors do not display a name anymore.                                                                                                                                                                 |
| The speed values on executor labels were wrong when the speed readout was set to Seconds. This bug is fixed. Speed readout Seconds displays now the correct values on executor labels.                                                                                                                                                                                                                                 |
| Opening and closing the phaser editor from the encoder bar within a new show file created black layer buttons in the encoder bar. This bug is fixed. The layer buttons do not turn black anymore when toggling the phaser editor from the encoder bar within a new show file.                                                                                                                                          |
| The smart view objects, appearances, and presets that had only an appearance assigned did not display a shadow around their labels in their pools. This bug is fixed. All pool objects that have an appearance assigned, display a pie chart, a color or a scribble in the background have now a text shadow for their labels.                                                                                         |
| The fixture sheet displayed as IDs of subfixtures always the fixture ID in the CID cell. This bug is fixed. When a fixture has subfixtures and a CID, the CID is now displayed for the subfixtures.                                                                                                                                                                                                                    |
| The IP calculator had the buttons for 0 and . interchanged compared with the layout of the keys on consoles. This bug is fixed. The IP calculator matches now for all buttons, except / the key layout of the consoles.                                                                                                                                                                                                |
| It could happen, that not all layout elements were displayed when the layout window was displayed on one of the small screens (display 6 and 7). This bug is fixed. Layout windows on the small screens display now always all layout elements that are placed in the visible area of the layout.                                                                                                                      |
| When entering the In & Out menu again, the last selected tab was not remembered. This bug is fixed. The In & Out menu remembers now the last tab the user selected the last time when entering it again.                                                                                                                                                                                                               |
| Changing the WingID of an internal wing did not update the content of the executor to the new WingID. This bug is fixed. The content of the letterbox screens is updated immediately when changing the WingID of an internal wing.                                                                                                                                                                                     |
| The button Frame Readout within the settings of a timecode show did not display the set frame readout. This bug is fixed. Frame Readout displays now the correct value.                                                                                                                                                                                                                                                |
| The executor label within the playback bar did not display newly stored cues. This bug is fixed. New stored cues appear now immediately within the executor label when the new cue will be the next cue after the current cue.                                                                                                                                                                                         |
| The order of the available DMX Readouts was not the same at all places where the user can choose it. This bug is fixed. The order of the DMX Readout values should now be the same on all places where it is used.                                                                                                                                                                                                     |
| When having shortcuts enabled, the Xkeys window did not display the corresponding shortcuts. This bug is fixed. The Xkeys window displays now the shortcuts on its buttons when they are activated.                                                                                                                                                                                                                    |
| The software could crash when opening a 3D window after importing an MVR file. This bug is fixed. The software should not crash anymore when opening a 3D window.                                                                                                                                                                                                                                                      |
| The settings window of the clock window was too big for screens 6 and 7. This bug is fixed. The settings window of the clock window scales now properly for the two small screens.                                                                                                                                                                                                                                     |
| It was not possible to tap I agree or I DO NOT agree within the EULA pop-up after installing a new version on screens 6 and 7. This bug is fixed. The End User License Agreement can now be operated again on the small displays of grandMA3 light and full-size consoles.                                                                                                                                             |
| The layout window could display the wrong or no IDs for subfixtures. This bug is fixed. The layout window displays now the IDs of subfixtures correctly                                                                                                                                                                                                                                                                |

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

When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over without user input. If all stations have the same priority, then the station with the longest Online Time becomes the GlobalMaster for all stations.

Programmer content is discarded when loading show files from previous versions.

NDI as a video source is a feature preview.​

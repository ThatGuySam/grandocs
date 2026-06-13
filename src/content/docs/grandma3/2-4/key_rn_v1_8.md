---
title: "Release Notes 1.8"
description: "Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail w"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_rn_v1_8.html"
scrapedAt: "2026-06-12T21:25:49.015Z"
---
- [Get Started](/grandma3/2-4/key_rn_v1_8/#h2__1435677565)

- [Bug Fix Version 1.8.8.2](/grandma3/2-4/key_rn_v1_8/#h2__146634055)

  - [Other Enhancements](/grandma3/2-4/key_rn_v1_8/#h2_1198082799)
  - [What's Changed](/grandma3/2-4/key_rn_v1_8/#h2_563643534)
  - [Bug Fixes](/grandma3/2-4/key_rn_v1_8/#h2__146634055)

- [Release Version 1.8.1.0](/grandma3/2-4/key_rn_v1_8/#h2__1841875975)

  - [Features](/grandma3/2-4/key_rn_v1_8/#h2_727740091)

    - [Multi Patch](/grandma3/2-4/key_rn_v1_8/#h3_1063964535)
    - [Grid Tools](/grandma3/2-4/key_rn_v1_8/#h3_1278483279)
    - [XYZ](/grandma3/2-4/key_rn_v1_8/#h3__1797581261)
    - [Store Sources](/grandma3/2-4/key_rn_v1_8/#h3_1020479761)
    - [Device Configuration](/grandma3/2-4/key_rn_v1_8/#h3__329342182)
    - [Extract](/grandma3/2-4/key_rn_v1_8/#h3__508884835)
    - [Content Sheet](/grandma3/2-4/key_rn_v1_8/#h3_320348620)
    - [Plugin Editor](/grandma3/2-4/key_rn_v1_8/#h3__46089734)
    - [Layout Window](/grandma3/2-4/key_rn_v1_8/#h3__1430353876)
    - [DMX Tester](/grandma3/2-4/key_rn_v1_8/#h3_1956195346)
    - [Update Menu](/grandma3/2-4/key_rn_v1_8/#h3__1345480982)
    - [Master Modes](/grandma3/2-4/key_rn_v1_8/#h3_1462218188)

  - [Other Enhancements](/grandma3/2-4/key_rn_v1_8/#h2_1084249605)

  - [What's Changed](/grandma3/2-4/key_rn_v1_8/#h2_193902598)

  - [Bug Fixes](/grandma3/2-4/key_rn_v1_8/#h2_821083107)

- [Appendix](/grandma3/2-4/key_rn_v1_8/#h2__1835053169)

- [Known Limitations](/grandma3/2-4/key_rn_v1_8/#h2__1852571500)

---

 

## []()Get Started

Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning within the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let's go! To leave the Release Notes, tap I agree on the top right corner. The main screen of grandMA3 software opens. On the right side, you can see predefined views on view buttons. To switch between the views, tap the view buttons.

If this is your first time starting grandMA3 software, patch some fixtures first. Or you can load one of the demo shows delivered with the software. Either way, press Menu. If you use grandMA3 onPC software, there is a ![](/img/grandma3/2-4/icon_gear_15_v1-0_1-64afe6.png) symbol in the top left corner there. Clicking the ![](/img/grandma3/2-4/icon_gear_15_v1-0_1-64afe6.png) symbol is the same as pressing Menu on a console.

Tap Backup and then Load, now you are ready to load shows. You would like to get right on it? Switch Shows to Demo Shows in the title bar first. To do so, tap Shows repeatedly until it says Demo Shows. Once Demo Shows is displayed, it is possible to select any of them. After you selected a demo show, tap Load.\
In case a show was already loaded, a pop-up will appear asking if you want to save the current show first before loading the new one. It's up to you!

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - there are view buttons there, which change the screen content. At the bottom, you will find the encoder bar and the command line. Technically that is all you need to get started. For more information, see the grandMA3 help menu. To access the help in the console or the onPC, tap the view buttons named Help or visit the MA Lighting website. If you want to learn the grandMA3 software step by step, please join the MA e-Learning - it's free of charge and available on the MA Lighting website.

Have fun with using our grandMA3 software - Find all the improvements and changes of this software version further down.

**Hint:**\
The grandMA3 software will start using the show file (or status) that was in operation before the software was shut down. 

---

 

## []()Bug Fix Version 1.8.8.2

## []()Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When in the Fixture(s) to Patch dialog of the DMX Tester Encoder Bar, pressing the screen encoder patches the selected fixture to the set up patch address.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Multistep Phasers have a new show setting: DelayToPhase. The user can choose how delay timings are used to mimic the use of phase values of a phaser.\
When DelayToPhase is enabled, delay times across a range of fixtures with the same phase value creates a look similar to using a range of phase values without delay. For example, using an individual delay of 0 to 1s on a phaser having the same phase value, speed of 60 BPM, and the total sum of all step widths is 100%, will look similar to using a phase of 0 to 360 without delay.

When DelayToPhase is disabled, delay values can be used to delay the start of multistep phasers and keep the triggered channels aligned to the phase values of the phaser.

Access this new setting in Menu - Preferences and Timing - Timing.  

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved stability of MA-Net3 protocol and error handling.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Absolute and relative layers are now handled separately during preset update. When adding a relative layer value to a preset with an existing absolute layer value, the relative value will not be added to the cue where the preset is already used. Vice versa when adding an absolute layer value to a preset with an existing relative layer value, the absolute value will not be added to the cue where the preset is already used. 

**Known Limitation**:\
Recast will only recast presets to cues if there is a preset link in the absolute layer. 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Preset pool objects can display only text, symbols, or both. The respective setting "Display Mode" is located in the settings of each preset pool window. These are the possible values:

- Text and Symbol: Displays the name of the preset and the symbol (Pie charts or gobo images for example).
- Text: Displays only the name of the preset.
- Symbol: Displays only the symbol.

 

 Improved the speed of the Global Preset Update mechanism and added a red LED indicator to the MA logo of the command line to show when it is running.

**Known Limitation:**\
Deleting, changing, moving, or exchanging objects while a Global Preset Update is processing is not yet fully supported for the following object types:\
-Data Pools\
-Presets (Selective, Global, and Universal)\
-Sequences\
-Cues, Cue Parts\
-Recipes\
The red indicator in the MA logo of the command line appears when a Global Preset Update is currently processing! The time needed for the process depends on the size of the show file and the number of references between objects.

---

 

## []()What's Changed

- The following properties cannot be changed in the Live Patch anymore:

  - Toggling fixture types "Share Global" and "Is MArker";
  - Editing the attributes "Physical From / To" and "DMX To" in fixture types; 
  - Activation Group of attributes;
  - Deactivation Groups of Activation Groups;
  - Position, Rotation, and IsMainBeam of Geometries in fixture types;
  - Relations of DMX Modes in fixture types.

- Releasing Flash does not reset the Temp Fader and keeps Flash active, when Flash and Temp Fader is used on a single cue. If Flash and Temp fader is used on a sequence containing more than 1 cue, the Temp Fader crossfades into the second cue.

- Progress bars of processes that run in the background, for example, "Global Preset Update", are displayed at the top of the displays.

- Merge All Data is temporarily not available in the bug fix.\
  This feature is under revision. We recommend not to use it in earlier versions.

---

 

## []()Bug Fixes

### 3D

| Description                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Displaying gobos could cause a freeze on Intel graphics cards. This bug is fixed. There is no freeze when a gobo is displayed.                                                                                                                                              |
| Labels incorrectly indicated fixtures as multipatch if more than one stage was used. This bug is fixed. The indication of multipatch is correct for more than one stage.                                                                                                    |
| Fixture types of the manufacturer 'Set' in the internal fixture library did not display any of their related textures. This bug is fixed. Set fixture types display their related textures.                                                                                 |
| GLTF mesh files of environmental objects were not exported using MVR. This bug is fixed. GLTF meshes are now exported using MVR.                                                                                                                                            |
| It was not possible to control the DMX value of a channel if the Frequency property for that attribute was used in a fixture type. This bug is fixed. The DMX values of channels can be controlled via the encoders, that use the Frequency property in their fixture type. |
| There was a possible crash when a show file contained an excessive number of meshes. This bug is fixed.                                                                                                                                                                     |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When attributes had different channel sets with the same name, it was not possible to select these channel sets. This bug is fixed. All channel sets with the same name can be applied again.                                                                                                                                                                                                                                                                                                   |
| Starting to record a timecode show in the user interface failed, when the timecode show was renamed. This bug is fixed. The record mode starts, also when the timecode show was renamed.                                                                                                                                                                                                                                                                                                        |
| Migrating show files from v1.7 or earlier to v1.8.1.0 lost the fader type of events in timecode shows. This bug is fixed. Migrating show files stored with v1.7 or earlier directly to this version does not lose fader events of timecode shows. When show files were already migrated to v1.8.1.0, then please get in contact with tech support for further assistance to restore the fader events.                                                                                           |
| Buttons in the encoder bar could be empty when joining a session. This bug is fixed. The graphical user interface displays all elements after joining a session.                                                                                                                                                                                                                                                                                                                                |
| Changing the speed scale of cue/cue part to value "One" did not adjust the resulting speed when running grandMA3 on consoles or when running grandMA3 onPC on macOS. This bug is fixed. The speed scale value "One" works again as expected.                                                                                                                                                                                                                                                    |
| The software could crash during copy and paste of new track groups and tracks in timecode shows. This bug is fixed. Copy and paste new timecode tracks and track groups do not crash the software.                                                                                                                                                                                                                                                                                              |
| When the Fixture(s) to Patch dialog of the DMX Tester Encoder Bar was open, all dual encoders behaved as screen encoders. This bug is fixed. Only the 5th dual encoder can behave as the screen encoder in the Fixture(s) to Patch dialog of the DMX Tester Encoder Bar.                                                                                                                                                                                                                        |
| When the selected executor was empty and you tried to open the Master Controls overlay, the software crashed. This bug is fixed. Opening the Master Controls overlay does not crash the software anymore when an empty executor is selected.                                                                                                                                                                                                                                                    |
| The default device configuration was loaded starting the grandMA3 when the last time a device configuration with a custom name was active. This bug is fixed. Custom device configurations are not ignored when starting the grandMA3 software.                                                                                                                                                                                                                                                 |
| If you used Capture, PanTilt and XYZ attributes were activated together in the programmer when using Capture. This bug is fixed. Capture knocks in only the attributes of one positioning system. This positioning system will activate its attributes with values that represent the current output position. When crossfading between both positioning systems, XYZ attributes will become only active when only XYZ data is output.                                                          |
| When updating only relative data into a preset that contained also only relative data, absolute data was also added. This bug is fixed. Updating a preset brings only active data into the preset.                                                                                                                                                                                                                                                                                              |
| When storing a cue where fixtures could perform MIB, MIB settings for this cue were not always offered. This bug is fixed. Cues that contain data of fixtures that can be prepositioned using MIB always offer MIB settings.                                                                                                                                                                                                                                                                    |
| When restarting or rebooting Mode2 or grandMA3, the main screen was not cleared immediately and the process could be paused. This bug is fixed. Restart or Reboot in Mode 2 or grandMA3 is executed immediately.                                                                                                                                                                                                                                                                                |
| If the Grand Master knob was turned while pressed, the pressed value was used when releasing the knob. This bug is fixed. Pressing and turning the Grand Master knob asserts the adjusted value when releasing.                                                                                                                                                                                                                                                                                 |
| The software could crash while loading a show file on a Windows onPC station that was part of a session. This bug is fixed. Loading show files on a Windows onPC station while being in session should not crash the software.                                                                                                                                                                                                                                                                  |
| The software could get in an endless loop of the global preset update process when doing changes in the patch. This bug is fixed. The global preset update process should not get in an endless loop anymore.                                                                                                                                                                                                                                                                                   |
| Storing a cue with the cue only option crashed the software when XYZ fixtures had active values in the programmer. This bug is fixed. Storing cues with Cue Only enabled should not crash the software when the fixture has XYZ enabled.                                                                                                                                                                                                                                                        |
| Calling a channel set did not set the correct channel function of mode depending channels. This bug is fixed. When a channel set is called, the correct channel function of mode depending channels is activated.                                                                                                                                                                                                                                                                               |
| Properties in copied user profiles pointed to the source user profile. This bug is fixed. Copied user profiles reference only to their own properties.                                                                                                                                                                                                                                                                                                                                          |
| If a station loaded a new show file and left the session during upload, other stations could freeze during the show download. This bug is fixed. If the station loads a different show file and leaves the station, stations will cancel the show download. If the station has a previous version of the new show file on its hard drive, this show file will be loaded instead. If the station does not have this show file on its hard drive, a new show file with this name will be created. |
| Park fixture X did only park the main fixture and not the multipatch fixtures. This bug is fixed. Park fixture x now includes the multipatch fixtures.                                                                                                                                                                                                                                                                                                                                          |
| Highlight and Solo did not work correctly within a multiuser session, utilizing different worlds. This bug is fixed. Highlight and Solo now work in multiuser sessions with different worlds.                                                                                                                                                                                                                                                                                                   |
| Off Selection did not deselect fixtures when used in combination with a world. This bug is fixed. Off Selection deselects fixtures in a world as well.                                                                                                                                                                                                                                                                                                                                          |
| Updating a preset or cue could also update values from other user profiles into the update target. This bug is fixed. Only values from the user profile which updates an object are updated into the updated object.                                                                                                                                                                                                                                                                            |
| When a proper name of an object started with a T or D and was not set into quotes by the user, the T or D were replaced by the keywords Thru or Default when calling the object via a command. This bug is fixed. Proper names are now handled correctly, even when the user does not put them into quotes.                                                                                                                                                                                     |
| It was possible to move a recipe from a cue part into a cue. This bug is fixed. Moving recipes into cues is prohibited now.                                                                                                                                                                                                                                                                                                                                                                     |
| The grandMA3 software crashed when calling a view that contains a layout window that had a non-existing layout selected. This bug is fixed. The software does not crash anymore when a view is called that contains a layout window that has a non-existing layout selected. In this case, the layout window is changed to display the selected layout.                                                                                                                                         |
| Commands that were already entered into the command line could be executed by touching only the fader caps of an executor. This bug is fixed. Touching the fader caps of executors does not execute commands anymore.                                                                                                                                                                                                                                                                           |

### Connections

| Description                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| xPort nodes did not output the correct DMX values when the master of a session changed and DMX was input via Art-Net or sACN. This bug is fixed. xPort nodes output the correct DMX values when the master changes.                                                                                      |
| RDM fixtures connected to xPort nodes were only detected when the user pressed Remove Absent and/or Add Present in the Output Configuration menu, in case the xPort node got later invited to the session. This bug is fixed. RDM works with xPort nodes immediately after inviting them to the session. |
| The grandMA3 software sent out the wrong Port ID in its RDM packets. This bug is fixed. RDM packets send by a grandMA3 device have the correct Port ID.                                                                                                                                                  |
| Running grandMA3 onPC on Windows 11 version 22H2 did not detect USB drives. This bug is fixed. Running grandMA3 onPC running on Windows 11 version 22H2 provides USB drives.                                                                                                                             |
| A station could enter a wrong standalone state, not being able to get invited to a session again. This bug is fixed. A device in standalone mode can be invited to the session.                                                                                                                          |
| Session data merge was appearing even when the two show file names are different. This bug is fixed. When show file names are different, they are recognized as separate show files.                                                                                                                     |
| When a large number of objects was moved or copied in a session, the connected station could become disconnected. This bug is fixed. Move or copy of objects does not disconnect stations.                                                                                                               |
| The software crashed when several text input pop-ups were opened at the same time. This bug is fixed. Opening several text input pop-ups at the same time does not crash the software anymore.                                                                                                           |
| When a Processing Unit joined a session, it outputted the default values of the fixtures for a short moment. This bug is fixed. Inviting a Processing Unit to a session outputs the correct values after the output is initialized.                                                                      |
| The grandMA3 software crashed when using IAC audio driver in a different application and it sent MIDI notes. This bug is fixed. grandMA3 software does not crash anymore when receiving MIDI messages that were sent to it by using the IAC audio driver.                                                |
| Unplugging a USB drive while having the desk locked terminated the desk lock. This bug is fixed. Desk lock stays active when unplugging a USB drive.                                                                                                                                                     |

### Patch

| Description                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active programmer values could get stuck if the patch was changed at the same time in a session. This bug is fixed. The patch can be changed while having active programmer values.                                                               |
| Editing any value of a fixture type in the fixture type editor, set the value to 0 when the DMX Readout was set to Percent. This bug is fixed. Changing values in fixture types is also possible in DMX Readout Percent.                          |
| Deleting attributes in a fixture type recalculated color attribute values in presets. This bug is fixed. Deleting attributes in fixture types does not change values in presets for the remaining attributes.                                     |
| When the patch was changed, absolute color values were added to presets containing only relative color values. This bug is fixed. No absolute color values are added to presets containing only relative color values, when the patch is changed. |
| When copying a fixture several times in the patch, show data was only cloned to the first copy. This bug is fixed. Copying fixtures in the patch clones the data to all copies.                                                                   |
| The software crashed when the user added multipatch fixtures to fixtures that have XYZ enabled. This bug is fixed. Multipatch fixtures can be added to XYZ fixtures.                                                                              |

### Phaser

| Description                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changing attribute values on a connected station encoder utilized an active program time or individual time. This bug is fixed. Turning an encoder on a connected station does not use individual time or program time.                     |
| Tapping a preset three times in a row stomped running phasers of the same attributes running in the programmer. This bug is fixed. It takes only 2 presses of a preset to stomp other phasers on the same attributes in the programmer.     |
| If cues with individual delay times, containing phasers reversing each other were triggered in a certain order, attributes were not properly asserted. This bug is fixed. Running cues with phasers reverting each other works as expected. |
| Calling and storing two different presets with phasers at different speeds into a cue resulted in playing both phasers at the same speed. This bug is fixed. Different phasers retain their look when being stored into the same cue.       |
| When using the step keyword to integrate presets with only the main fixture selected, no steps for the subfixtures were created. This Bug is fixed. Step creates also steps for subfixtures if only the main fixture is selected.           |
| A preset containing a last step without absolute or relative value was not called correctly into the programmer. This bug is fixed. All steps from the preset are now called correctly into the programmer.                                 |

### Playback

| Description                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In a certain combination of individual timing and cue timing, the cue output was not as expected. This bug is fixed. Using individual and cue timing does not create an output glitch anymore.                                                                                                                                                                                        |
| When editing the recipe of a running cue, the old data of the recipe was still running on the output. This bug is fixed. Edited recipes update their output and release old data when the cue with the recipe is still running.                                                                                                                                                       |
| When storing data into a cue of a sequence that was already running and had fixtures prepositioned by MIB, the prepositioning could be overwritten by data in previously started playbacks. This bug is fixed. When storing data into running sequences fixtures that were prepositioned by MIB do not get their current output values overwritten from previously started sequences. |
| DMX channels could flicker when updating or storing a cue. This bug is fixed. DMX channels should not flicker anymore when updating or storing a cue.                                                                                                                                                                                                                                 |
| If the Program Time was set to 0 and activated, sequences with "Off on overridden" could be switched off when the programmer contained all fixtures of these sequences. This bug is fixed. Sequences with "Off On Overwridden" are not affected by the programmer with active Program Time.                                                                                           |
| When a preset including MAtricks was assigned to an executor, the playback always had to be restarted. This bug is fixed. MAtricks changes are updated directly in presets that are played back.                                                                                                                                                                                      |
| MIB was not working repeatedly, when MIB was used with Wrap Around activated. This bug is fixed. MIB is working continually, when Wrap Around is enabled.                                                                                                                                                                                                                             |
| Sending a go command to a cue part could cause a crash. This bug is fixed. Cue parts cannot be executed independently by Go command.                                                                                                                                                                                                                                                  |
| MIB could be executed when a dimmer phaser was running. This bug is fixed. A running dimmer phaser does not execute MIB.                                                                                                                                                                                                                                                              |
| When starting a playback it could happen that not all attributes which contained data in the programmer were overwritten by the playback. This bug is fixed. Active values in the programmer are overwritten by a playback when starting it while Freeze is switched off.                                                                                                             |
| While playing back a timecode show, it could happen that timecode events did not trigger cues. This bug is fixed. Events in timecode shows always trigger their cues when played back.                                                                                                                                                                                                |
| Cues were not triggered when two timecode shows were played back at the same time and both timecode shows triggered the same sequence. This bug is fixed. Playing back two timecode shows triggers the cues when they are in the same sequence.                                                                                                                                       |

### Windows

| Description                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The master indicator colors could be displayed wrong if the Masters Overview in preferences and timing was opened if a session was established. This bug is fixed. The master indicator colors are displayed correctly after a session is established.                                 |
| The Content Sheet was not updated as expected if Link Type was set to "Selected" and Cue Mode "Manual" was selected. This bug is fixed. If an empty executor is selected while Link Mode is set to "Selected" and Cue Mode is set to "Manual" the content sheet is updating correctly. |
| The default preset reference was missing in the Fixture Sheet. This bug is fixed. The default preset reference is displayed in the fixture sheet.                                                                                                                                      |
| The software could crash when scrolling a timecode window that displayed a new timecode show which contained only one track group. This bug is fixed. Scrolling the timecode window does not crash the software when the displayed timecode show is empty.                             |
| Migrating show files from v1.7 or earlier to v1.8.1.0 caused a black area in views where the Mesh3DS pool was located before. This bug is fixed. Mesh3DS pool windows in views are migrated into Mesh pool windows when migrating a show file from v1.7 or earlier to this version.    |
| Unchecking the first cue part while in a scroll position displayed cue parts in the content sheet incorrectly. This bug is fixed. Unchecking parts in the content sheet while being in a scroll position displays all cue parts correctly.                                             |
| Closing the Import/Export menu in a new show crashed the software. This bug is fixed. The software does not crash when closing the Import/Export menu.                                                                                                                                 |
| After a restart of the grandMA3 application, the Display Selector could not appear when pressing Menu. This bug is fixed. When pressing Menu, the Menu and the Display Selector are always displayed.                                                                                  |

---

 

## []()Release Version 1.8.1.0

## []()Features

The latest release of grandMA3 version 1.8.1.0 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

### []()Multipatch

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Multipatch is a function that adds extra fixtures to a fixture. Any multipatch fixture needs its own DMX patch. Adding multipatch fixtures to the patch will also add an extra virtual fixture in 3D.\
This can be used when two or more real lights should be controlled by the same patched fixtures. For example, an ACL bar consisting of 8 PAR cans that are controlled by only 1 dimmer channel.\
When the primary fixture has a DMX patch address, it does not cost you any parameters to add multipatch fixtures. When the primary fixture has no DMX patch address the parameters of the multipatch fixture count against your licensed parameters.\
Multipatch fixtures cannot be programmed individually. They are connected to the same ID(s) as the primary fixture. All fixtures, the primary and the multipatch fixture do the same. Any programming that existed on the primary fixture is also outputted on the multipatch fixtures.

To add multipatch fixtures to your patch follow these steps:

1. Press Menu - Patch.
2. Select the fixtures you want to add multipatch fixtures to, then tap Create Multipatch.
3. A calculator appears. Enter the number of multipatch fixtures you want to add to every selected fixture.
4. Tap Please. 
5. The multipatch fixtures are now added to the selected fixtures.
6. Assign every multipatch fixture a DMX address by tapping and holding their Patch cells.
7. In the Edit Patch dialog enter the desired DMX address and apply it.

The multipatch fixtures are now added to your patch/show.\
In the multipatch fixtures, the values of all properties that will be inherited from the primary fixture are set into angular brackets (\<Value>).\
In addition, the inherited properties that cannot be modified by the user for the multipatch fixtures, are grayed out.

It is possible to position them in 3D by changing their position in the patch menu. Use the encoders in the setup mode of the 3D window to arrange the multipatch fixtures in the 3D space.

**Known Limitation:**\
Aligning several selected multipatch fixtures by using the encoders is not supported.

 

Cutting a primary fixture will also cut its multipatch fixtures. It is possible to transfer a multipatch fixture to a different primary fixture by using the copy and paste functions. Copying a multipatch fixture to a primary fixture of a different fixture type takes over the settings of the new primary fixture, for example, FixtureType, FID, IDType, CID, and further.\
Pasting works as before: The fixture will be pasted into the selected line, which will move the currently selected line and all the following lines one line down. This means, that pasting a copied multipatch fixture will be bound to the primary fixture above the currently selected primary fixture.

Each multipatch fixture gets automatically a CID of the new IDType Multipatch assigned. This allows addressing the multipatch fixtures, for example, to select them for setting them up in the 3D window or for patching them via the command line.\
To enter the Multipatch keyword in the command line, use one of the options:

- Press Channel repeatedly until Multipatch appears in the command line
- Type **Multipatch**
- Type the shortcut **Mu**

Multipatch fixtures can be addressed with a combination of Fixture ID and relative Multipatch ID. The selection color of multipatch fixtures is light red, for example in the layout window. When a multipatch fixture is selected, its primary fixture will alternate its selection color between yellow and light red, for example in the fixture sheet and the layout window. Selected multipatch fixtures do not get a position in the selection grid, and therefore cannot be used with MAtricks.

Precondition:

Have 5 fixtures (Fixture ID 1 to 5) with each one having 4 multipatch fixtures.

To select the second multipatch fixture of fixture 4, type:

User name\[Fixture]> Fixture 4 Multipatch 2

Now the user can use the encoders in the setup mode of the 3D window to arrange the muti-patch fixtures in the 3D space.

To patch the third multipatch fixture of fixture 2 to DMX address 6 on DMX universe 42, type:

User name\[Fixture]> Patch Fixture 2 Multipatch 3 42.6

When having multipatch fixtures selected, it is also possible to enter values for the attributes to them, but these values will be redirected to their primary fixture immediately.

---

 

### []()Grid Tools

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The Grid Tools allow modifying the current selection in the selection grid. The Grid Tools are available on the left side of the Selection Grid window.\
The available tools are:

- ![](/img/grandma3/2-4/icon_phaser_swap_form_15_v1_8-c68fb1.png) (Transpose): Interchanges the X and Y grid coordinates of every selected fixture.
- ![](/img/grandma3/2-4/icon_linearize_15_v1_8-5e6b8f.png) (Linearize Numerical): The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. The new order of the fixtures is in ascending order by their Fixture IDs (and secondarily by the CIDs).
- ![](/img/grandma3/2-4/icon_left_to_right_15_v1_8-8d87f8.png) (Linearize Left To Right, Top to Bottom): The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. The new order of the fixtures is determined working from left to right first, and then from top to bottom, based on the current grid arrangement.
- ![](/img/grandma3/2-4/icon_top_to_bottom_15_v1_8-f9dd63.png) (Linearize Top to Bottom, Left to Right): The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. The new order of the fixtures is determined working from top to bottom first, and then from left to right, based on the current grid arrangement.
- ![](/img/grandma3/2-4/icon_phaser_rotate_clockwise_15_v1_8-99e473.png) (Rotate 90° clockwise): Rotates the currently selected fixtures by 90° in clockwise direction along the XY plane.
- ![](/img/grandma3/2-4/icon_phaser_rotate_15_v1_8-ab2c0b.png) (Rotate 90° counterclockwise): Rotates the currently selected fixtures by 90° in counterclockwise direction along the XY plane.
- ![](/img/grandma3/2-4/icon_phaser_mirror_x_15_v1_8-a6dd41.png) (Mirror Grid at X-axis): Mirrors the fixtures in the grid along a vertical mirror line.
- ![](/img/grandma3/2-4/icon_phaser_mirror_y_15_v1_8-3c4585.png) (Mirror Grid at Y-axis): Mirrors the fixtures in the grid along a horizontal mirror line.
- ![](/img/grandma3/2-4/icon_center_15_v1_8-1f95a2.png) (Center Alignment): When having different numbers of fixtures selected on different Y coordinates, they will be aligned together to their center on the X-axis.
- ![](/img/grandma3/2-4/icon_compress_15_v1_8-74ccf9.png) (Compress): Removes all gaps between fixtures, and moves the selection to the left and up, so that the selection starts at 0/0/0.

It is possible to trigger the grid tools via command line using the Grid keyword.\
These are the commands for each tool:

- Transpose: Grid 'Transpose'
- Linearize Numerical: **Grid 'Linearize' 'Numerical'**
- Linearize Left To Right, Top to Bottom: Grid 'Linearize' 'LeftToRight'
- Linearize Top to Bottom, Left to Right: Grid 'Linearize' 'TopToBottom'
- Rotate clockwise: Grid 'Rotate' 'Right'
- Rotate counterclockwise: Grid 'Rotate' 'Left'
- Mirror Grid at X-axis: Grid 'Flip' 'X'
- Mirror Grid at Y-axis: Grid 'Flip' 'Y'
- Center Alignment: Grid 'Align'
- Compress: Grid 'Compress'

---

 

### []()XYZ

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

- Fading fixtures between XYZ and PanTilt or vice versa fades directly between the old and the new position.
- Fading fixtures from one MArker to a different MArkers is supported. The MArker attribute of fixture types that have XYZ enable has Snap disabled.
- The calculators and encoders set to the physical readout of the attributed X, Y, and Z are displaying the values of the assigned space with the unit Meters instead of Percent.
- Editing a space by right-clicking it in the drop-down list when selecting a Target Space or Movement Space opens an editor for this space instead of the stage editor.
- To enable XYZ for a fixture type it is also possible to change XYZ cell in the fixture type editor to Yes.

**Known Limitation:**\
\- Using Goto or Load to transition from XYZ to Pan/Tilt or from Pan/Tilt to XYZ may not create a smooth fade.\
- Enabling Assert for a Cue that is transitioning from XYZ to Pan/Tilt or from Pan/Tilt to XYZ may not create a smooth fade.\
- CueParts with enabled Allow Duplicates do not work with fixtures that have XYZ enabled.

---

 

### []()Store Sources

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Incoming DMX data on DMX channels that have fixtures patched can be used as store source for presets and/or cues.

To store the incoming DMX data, the **Data Source** in the Store Settings (Press and hold Store) needs to be set to DMX.

For this **Data Source**, the **Use Selection** setting in the Store Settings needs to be set to All or All For Selected.\
When switching the **Data Source** to DMX, **Use Selection** will switch to All, when it is set to a different value as named before.\
Selecting a different **Use Selection** value is not possible when **Data Source** is set to DMX, and therefore these buttons will be grayed out

When storing the incoming DMX, only the values are stored that are not at the default of the fixture type. In addition, values that are at fixture type default will be stored into the sequence when the sequence contains already this attribute with a different value.

The resulting DMX output after the masters (sequence master, group master, playback master, grand master, etc.) can also be stored by using Output as **Data Source**.\
For this Data Source setting, the **Use Selection** needs also to be set to All or All For Selected.

When using the command line, the options /Programmer, /DMX, and /Output can be used to determine the desired data source.\
To store the incoming DMX data to sequence 1 cue 42 for all attributes of the selecte fixtures, type:

Fixture\[User name]> Store Sequence 1 Cue 42 /DMX /AllForSelected

---

 

### []()Device Configuration

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

Added new functionality to save and load device configurations. A device configuration includes the output configuration and DMX protocol (Art-Net and sACN) configuration.\
To save a device configuration follow these steps:

1. Go to Menu - Output Configuration.
2. Tap Save Device Configuration. A pop-up opens.
3. Enter the file name for the device configuration, for example "My nice configuration".
4. Tap Save.

Tapping Load Device Configuration allows to select a saved device configuration and then load it by tapping Load. The title bar of the Output Configuration menu displays also the file name of the saved or loaded device configuration.

The allocation between a real grandMA3 device and a line in the output configuration is done by matching IP addresses. Therefore, the IP address of a device in the output configuration can be changed by pressing and holding the IP cell.\
New devices, that are not already part of the session can by added to the device configuration by inserting a new device within the desired device type category. To do so, expand, for example the onPC section by tapping ![](/img/grandma3/2-4/triangle_right_15_1-492f3b.png) in front of the onPC line, then tap and hold New onPC.

**Hint:**\
When adding a new onPC device, it is also possible to add up to two configuration lines for the maximum number of onPC fader wings, that can be connected to a grandMA3 onPC station. To do so, unfold the configuration line of the desired onPC station itself.

---

 

### []()Extract

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

It is possible to extract values of presets by specifying the preset, selection, fixture, cue, feature group, or attribute:

- To extract all values from presets (that are currently active in the programmer) for the selected fixtures, type:

User name\[Fixture]> Extract Selection

To call the extracted values from preset 2.3 into the programmer for the selected fixtures, type:

User name\[Fixture]> Extract Preset 2.3

To extract all values from presets (that are currently in the programmer) for fixtures 2 to 4, type:

User name\[Fixture]> Extract Fixture 2 Thru 4

To extract the values from presets that are in cue 42 for the selected fixtures, type:

User name\[Fixture]> Extract Cue 42

**Hint:**\
When extracting by specifying a fixture, selection, feature group, or attribute, presets must be active in the programmer for the desired fixtures.

When extracting embedded presets or phaser presets which have presets integrated into their steps, extract will call directly the values of the source presets.\
Using the **/Single** option together with Extract makes it possible to extract one level down in the hierarchy of the presets.\
For example, create 2 color presets ("red" and "blue" presets) that are embedded into a different color preset ("odd/even red/blue"). The second preset color preset ("odd/even red/blue") is embedded into All preset 21.1 ("cool look").\
Select some fixtures and apply the All preset ("cool look") to them.\
Executing Extract Selection /Single calls the second color preset ("odd/even red/blue") into the programmer.\
Executing Extract Selection /Single again calls the first color presets ("red" and "blue" presets) into the programmer.\
When executing Extract Selection /Single a third time, the user gets the same result as when they would have used Extract Selection in the first step: The hard red and blue values without a preset link.

**Known Limitation:**\
At the moment, Extract /Single works only with presets that are active in the programmer.

---

 

### []()Content Sheet

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

- It is possible to select multiple cells in the horizontal direction.
- Show Parts On separates the data into different sections per cue part. Show Parts Off, the entire data of the cue is displayed in one grid.
- Cue Mode Manual allows to look at cues independent from the output cue. When Cue Mode is set to Manual, a cue list on the left side will be displayed. Selecting a cue in this cue list displays its content on the right side.
- The Content Sheet allows a data merge of the cells of the same feature, when the values are identical. To merge cell, tap Merge Cells in the Content Sheet Settings.

---

### []()Plugin Editor

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

- When editing a LuaComponent, the editor displays the line number of each line in front of them. The line number of the line the cursor is set to is highlighted in white.
- Entering a tab character to the code of the plugin, the tab character is highlighted by a gray > at the beginning of the tab character.
- To display the entire selection of available Lua code templates, tap Lua Code Templates in the title bar of the LuaComponent editor. To select the desired template tap into the code area of a template. A yellow frame around the template shows which one is selected. Tap Use Template at the bottom, to paste the selected template into the editor. A pop-up appears warning the user before overwriting the existing code. A code template provides a sample of code for a certain functionality, for example, a progress bar.
- Tapping API Description in the title bar shows or hides the API area on the right-hand side of the editor. The API area offers all grandMA3 specific Lua functions. A search field at the top allows searching for functions. Tap a function to get more information displayed in the information section below the list of API functions. To enter the selected function to the position of the cursor in the editor, tap + on the right side of the information section, or double-tap the desired API function.
- If syntax errors prevent the Lua component to be loaded into the Lua engine, the SyntaxError property turns to **Yes** and the component line turns red.

---

 

### []()Layout Window

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

- Having multiple layout elements selected and editing them edits all of them simultaneously. When aligning values across the selected layout elements the selection order determines the alignment order. When toggling layout element properties while having multiple layout elements selected with different property values, they will switch to the same value and from there change their value together.
- To enter the layout element editor from the Layout Encoder Bar, tap Edit Selected in the Layout Encoder Bar.
- Cloning in layouts is possible by using this syntax: Clone \[Source\_List] At \[Destination\_List] If Layout \["Layout\_Name" or Layout\_ID]\
  This clone operation will add the fixtures of the Source-List into the specified layout at the position of the fixtures defined in the Destination-List. To be able to distinguish both layout elements, the new layout element will be placed with a small offset to the existing layout element. Also all settings of the layout element will be cloned, too.
- The Rotate Encoder in the Layout Encoder Bar rotates the selected fixtures as a group. When only one fixture is selected, the encoder is grayed out. This functionality rotates the selected fixtures on the layout canvas and changes their position.
- The Scale Encoder scales the arrangement of the selected elements in the X and Y direction. The Ratio Encoder scales the arrangement of the selected elements in the X direction.
- When having elements in a layout selected and then editing the layout itself, the layout editor will automatically select these elements.
- When assigning a fixture again into a layout, a pop-up offers to Overwrite the layout, Merge it into the layout, Remove the fixture from the layout, or to Cancel the operation.
- Show Selection in the Layout View Settings allows displaying the selection (for example yellow border) at layout elements. To enable or disable the yellow frame of selected layout elements in the layout view, tap Show Selection in the Layout View Settings. When being in Setup mode, this setting is ignored and the selection is always displayed.
- Leaving and entering the Setup mode the layout window resets the selected tool to the select tool (![](/img/grandma3/2-4/icon_select_15_v1_5-1307b6.png)).

---

 

### []()DMX Tester

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

When enabling Tester Encoder Bar in the title bar of a DMX sheet and then setting focus into the DMX sheet, the encoder bar switches over to the DMX Tester Encoder Bar.\
The DMX Tester Encoder Bar allows fast access to the DMX Tester feature. There are four encoders available:

- Universe: Changes the selected DMX address to a different universe. Tap Uni / Abs on the left side of the Universe encoder defines if the DMX channel selected for the DMX tester is set via a combination of Universe and Address (= Uni) or via an absolute DMX address (= Abs). In case of an absolute DMX address mode, the Universe encoder is grayed out.
- Address: Changes the selected DMX address.
- Tester Output: Defines to change the output of the DMX Tester to the selected DMX channel.
- Patch: Opens an overlay to patch a fixture to the DMX channel that is set up on the Universe and Address encoders. The overlay displays the fixtures of the currently selected stage. To change to a different stage, tap Stage in the title bar in order to cycle through the available stages.\
  ​Tap the cell of the DMX break of the fixture you want to patch to the new DMX address and then tap Patch ! at the bottom of the overlay. Enabling Show Unpatched Only displays fixtures that don't have all of their DMX breaks patched. When disabled, all fixtures are displayed.

The buttons above the encoders execute special actions:

- Retain: Off will release the values on the former selected DMX address when changing the address. Retain On keeps the DMX tester value on the former selected DMX addresses until the user releases them.

- DMX Channels:

  - All: All DMX channels can be used by the DMX Tester.
  - Patched: Only DMX channels that have fixtures patched to are useable.
  - Unpatched: Only DMX channels without patched fixtures can be used by the DMX tester.

- Select All: Selects all DMX Channels that have an output by the DMX Tester. A blue frame around the cell of the DMX channel indicates the selection.

- Release Selected: Release the DMX Tester values from the selected DMX channels.

- Release Unselected: Release the DMX Tester values from all non-selected DMX channels.

- Release All: Releases the DMX tester values on all DMX channels.

- Park Selected: Parks the selected DMX channel.

- UnPark Selected: Unparks the selected DMX channel.

When a universe has DMX channels that output values from the DMX Tester, the universe pool object in the universe pool shows a T ( Tester). And also the fixture sheet indicates values from the DMX Tester with a white background on the DMX layer.\
Saving a show file while the DMX Tester is active does not store the DMX Tester values into the show file. When loading the show again, the DMX Tester does not output value.

---

 

### []()Update Menu

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The settings in the update menu are split into settings for presets and cues. All buttons are now at the bottom and arranged below the preset section on the left and below the cue section on the right. The following settings are available in the update window:

- Presets:

  - Preset Update Mode: Original Content Only and Add New Content determine if only already existing attributes in the preset will be updated, or if also new attributes may be added to the preset.
  - Preset Mode: Auto, Selective, Global, ForceGlobal, and Universal define if the updated data will be added as selective, global, or universal data to the preset.
  - Input Filter: Defines if attributes of other feature groups may be updated to the preset (Input Filter is Off), or if only attributes of the same feature group of the preset may be updated to the preset  (Input Filter is On).

- Cues:

  - Sequence Update Mode: Original Content Only and Add New Content determine if only already existing attributes in the cue will be updated, or if also new attributes will be added to the cue.
  - Sequence Mode: Defines which cues will be offered for updating: All shows all possible cues. Selected offers only cues of the selected sequence, Last Called displays only cues of the sequence that was called as last one.
  - Cue Only: When Cue Only is on, the data will be updated for this cue only, and returns in the next cue to the status of values before the updated cue. The Cue Only setting in the update window is not linked with Cue Only in the Store Settings anymore.

The update menu displays each possible object to update now within one row. Each row shows the following information from left to right:

- Preset Pool No + Name
- Preset No + Name

and respectively

- Sequence No + Name
- Cue No + Name
- Part No + Name 

---

 

### []()Master Modes

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

All masters, for example the grand master, a speed master, playback master, and other, can change their mode between Toggle, AlwaysOn, and Disabled.

- Toggle: Switch the master on or off. The fader value of the master can always be changed and affects the output when the master is on. The indicator colors are gray (Off) and green (On).
- AlwaysOn: The master is always on and cannot be switched off. The fader value of the master can always be changed and affects the output. The indicator color for AlwaysOn is white.
- Disabled: The master is switched off and its fader value internally uses its default value. For example the grandmaster uses 100% for the grand master or the program time uses 0s. The indicator color for Disabled is red.

The modes of all masters can be changed in Menu - Preferences and Timings - Masters.\
This menu displays the masters separated by their type and their membership in the show file. Masters can have a global membership which means that these masters are controlled by all users of the show file. Masters with a user membership are located within the user profile which means that every user profile has its own and individual set of these masters. Changing one of these masters does not affect the same master in a different user profile. The section of masters that are controlled by the user profile displays the name of the user behind their type, for example, **Selected (Admin)** for the masters that control the selected sequence of the Admin user. Masters of the global membership display (Global) behind their type, for example **Playback (Global)**.

---

 

### []()MAtricks

To read more about this function, see [Transform](/grandma3/2-4/matricks_transform/) topic in the help system.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Added MAtricks setting Transform. Transform set to Mirror mirrors values depending on the other MAtricks settings, for example, Blocks, Groups, Wings.

When Transform is set to Mirror:

- The font color of the Transform button will change to yellow.
- InvertStyle will change to Pan.

When Transform is set back to None:

- Inverts will be switched off.

When a MAtricks settings, for example XWings, is set to None and Transform is set to Mirror, Invert for this setting will be disabled.\
If there are only values for one step active, the values will be mirrored in this step. As soon as there are attributes with two or more steps, Mirror will only mirror the values of the multi-step phasers.

When working with Wings and an odd number of fixtures is selected (for example 7 fixtures are selected and XWings is set to 2), the center fixture will be marked as edge fixture (lighter green selection color compared with inverted selected color in the fixture sheet, selection grid window, 3D, and other). An edge fixture does not follow all values, for example when creating a mirrored circle with the seven selected fixture, the edge fixture in the center will only tilt, but not pan. This is done in order to keep the symmetry.

Transform Mirror works by transforming values of the inverted fixtures to create symmetry. This requires altering the original values in the programmer. If you are transforming values that are called directly from a Preset or Integrated from Presets it is important to know that the transformed values will not have reference to the Preset. Storing the transformed values directly to a Cue will break the references to the presets for transformed values. To avoid losing references, store the transformations with MAtricks to a new Preset object. With the combination of transformed values with MAtricks the reference links will be automatically saved to the preset object. Calling this Preset with transformation MAtricks included will keep the links when you then store it to a Cue. 

In the MAtricks window, the PhaseTo calculators have buttons to set the value directly to 90°, 180°, 270°, or 360°.

---

 

## []()Other Enhancements

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New playback functions HalfSpeed and DoubleSpeed which result in halving or doubling the current speed of speed masters, presets, or sequences.\
HalfSpeed and DoubleSpeed can be assigned as button functions to executors that have speed masters or sequences assigned to them. For more information see [HalfSpeed](/grandma3/2-4/keyword_halfspeed/) and [DoubleSpeed](/grandma3/2-4/keyword_doublespeed/) help topics.\
When using HalfSpeed or DoubleSpeed the SpeedScale property of the master is modified accordingly.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Output Configuration menu:

- To enable or disable RDM, tap RDM in the Output Configuration menu. The RDM button in the Network menu is linked with this new RDM button.
- When switching the universe on an XLR port that is set to be an input port, the settings for Merge and Priority are taken from the new universe.
- The name, type, and IP of the station that displays the output configuration are marked with a green background, also when no session is active.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) DMX In Merge Mode Prio got the possible priorities reorganized. From now on, these priorities are available: Lowest, Low, LTP, High, Highest, Prog, and Super.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the DMX Protocols menu. It allows setting the Merge Mode for the universes DMX data is input to per configuration line. When changing the Merge Mode for a configuration line, all universes that are defined by Local Universe and Amount are changed together. In the DMX Universes-tab of the Patch and Live Patch menu or by editing a universe in the pool it is still possible to change the Merge Mode for single universes independently. As soon as two or more universes of a configuration line have different Merge Modes, the Merge Mode cell will display **...** to indicate this. The Input Priority field is only editable when the Merge Mode is set to Prio.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the PSN menu (Menu - In & Out - PSN):

- The Merge Mode can be set here as in the DMX Protocols menu (see above). It is necessary to have patched MArker fixtures assigned to trackers, in order to be able to change the Merge Mode. If no trackers have a patched MArker fixture linked to them, the Merge Mode cell displays "No MArker" in orange font color. The Merge Mode cell displays the Merge Mode of the universes of the MArker fixtures that are assigned to the PSN trackers.
- The ID of the PSN tracker is displayed in the new PSN ID column. Edit this column to pre setup trackers before the PSN system sends information.
- The IDType column is removed, and the ID column is renamed to MArker ID. As PSN trackers need to be connected to MArker fixtures, and the MArker fixtures need to have a CID of the MArker IDType in order to be able that fixtures follow the MArker, it is now only possible to set MArker IDs to PSN trackers.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The shortcut MA + 5 on the keypad of grandMA3 devices executes the same as pressing Please on the internal keyboard. This allows a faster editing of cells or buttons when navigating the focus by using MA + 2 / 4 / 6 / 8.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Sequence Rate:

- When moving a rate fader of a sequence up to 100%, the rate is now set to infinity which results in fade times of 0s. This applies also for speed masters that are assigned as rate master to sequences
- Fade times modified by a rate master are displayed within the sequence sheet. In addition to the new resulting time, an asterisk (\*) will be displayed in front of the time in order to indicate the modification by a rate master. For example: \*10.42 When the rate master is pulled down to 0%, the times will be displayed as \*Stopped, and the executor label displays Stopped. When the rate master is pulled up to 100%, the executor label displays 1:∞.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When incoming packets are processed the font color for the name of the configuration line in the DMX Protocols menu name flashes to yellow. Similar to the green flashing when packets are sent out.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The DMX Curves editor allows adding points for DMX curves of Curve Mode 'Custom' in the grid area on the left side. Until now it was only possible to add points for custom curves in the 2D area o the right side.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) MIDI Mode 'Through' receives and forwards MIDI Notes, MIDI Control Changes, and MIDI Program Changes.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the color of an attribute doing a fade. The attribute gets a dark blue background during the fade.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) The speed masters' indicator bar blinks in accordance with the speed. This gives visual feedback about the speed that was set.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) In the Phaser Editor, the forms are expanded by a circle form. To create a circle with this form, follow these steps:

1. Select at least one moving light fixture.
2. Add 2 points in the 2D area of the phaser editor.
3. Tap Form on the left tool bar.
4. Then tap Circle in the right tool bar.

A perfectly shaped circle will be created.

The circle form applies to the layer chosen in the Values button of the title bar of the Phaser Editor. If one or two steps are active in the programmer on the Absolute layer and Values is set to Absolute, the circle will be created on the Absolute Layer. If one or two steps are active in the programmer on the Relative layer and Values is set to Relative the circle will be created on the Relative layer. As it's very common to create a circle around an absolute position, if there is an active single-step value on the Absolute layer, you can immediately create a circle on the Relative layer by setting Values to Relative and tapping the circle form.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) It is possible to start recording a timecode show via command line using the new keyword Record. For more information see [Record](/grandma3/2-4/keyword_record/) help topic.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The Store Settings allows storing the current look in conjunction with the selected Use Selection option into cues or presets. For example, when Look is enabled and Use Selection is set to Active For Selected it stores the active values of the selected fixtures which have an open dimmer. Fixtures that have a closed dimmer, but other attributes active will get only their closed dimmer stored.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) 3D:

- If a fixture is unpatched, the Patch label in 3D displays "Unpatched" for fixtures and "N/A" for environment objects.
- To deselect fixtures using the 3D window,  press - and then draw a lasso around the fixtures.
- ​Beams and spots in the 3D window look more identical between the different render quality settings. This includes both the general look and the intensity, while the beam is "Open" or has a gobo inserted.
- Show Selection in the 3D Settings defines if the models of fixtures in the 3D window shall display their selection state, or not. To enable or disable the display of the selection, tap Show Selection in the 3D Settings. When in Setup mode, this setting is ignored and the selection is always displayed.
- The property Select by Label in the Label-tab of the 3D Settings allows defining if the user can select fixtures by selecting the labels on the spot of the fixtures in 3D. To be able to use this property, Show Label on Spot and any of the properties Add Fixture ID, Add CID, Add Patch, or Add Name need to be enabled.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The color picker supports direct control of the GDTF HSB attributes HSB\_Hue, HSB\_Saturation, and HSB\_Brightness. Only HSB attributes of GDTF files are supported by now.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Fixture library updated to Carallon 18.2.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Fixture types that have errors are displayed with a red font color in the Fixture Types-tab of the Patch menu. As long as a fixture type has errors, the corresponding fixtures are not displayed in the rest of the software, because they cannot work correctly. Editing the fixture type provides a more detailed description of the error when tapping Show Conflicts. Fixture Types that have an orange font color indicates a warning. These fixture types may not work properly, but they are accessible.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Calculators of attributes that have many channel functions available, display ![](/img/grandma3/2-4/icon_triangle_left_fixed_v_1_7-f7f055.png) and ![](/img/grandma3/2-4/triangle_right_15_1-492f3b.png) on the left and right side of the tab-bar, in order to indicate the presence of more channel functions and to scroll through the different channel functions. It is also possible to scroll through the tab bar by using scroll gestures.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The software update menu displays a progress bar during a version import to the hard drive when using the Select and Import Update Files functionality.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) A pop-up informs the user if they try to assign an IP address to an interface while a different interface has already an IP of the same subnet assigned. A pop-up also appears when the user tries to enter an IP address that is already used on a different station in the network.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved the network experience when using IGMP.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Sequences that are assigned to executors are displaying the reference icon (![](/img/grandma3/2-4/icon_referenced_fixed_v_1_7_1-d508cb.png)) on their sequence pool object.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The backup menu displays the free disk space in the upper right corner of the menu.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The timecode property RawTCOffsetSlot returns the raw time of the set timecode slot offset.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Knock in and knock out behavior improved:

- Knocking in or out a layer only affects the layer in the selected feature group.
- When knocking in or out an attribute while having the absolute layer selected, all layers are affected.
- When having a different layer than the absolute layer selected, the attribute will be only knocked in or out in the selected layer.
- Knocking in or out only the absolute layer can be done by using the command line. To knock out the absolute layer for the dimmer attribute, type:

User name\[Fixture]> Off Absolute Attribute "Dimmer"

---

 

## []()What's Changed

- The maximum number of remote entries per remote type is set to 10 000. For OSC it is set to 1 024.

- When a grandMA3 extension is connected to a grandMA3 console that is in a session and the session credentials are matching between both stations, the extension has also a green background in the Network menu. When using the Session Filter "My Session", the grandMA3 extension appears only, when the session credentials are matching between the console and the extension.

- Pressing Channel repeatedly switches through Channel, Universal, and used IDTypes. IDTypes that have no patched fixtures assigned are not appearing in the command line.

- These fixture properties were renamed:

  - Ray Traceable is now called Follow Target
  - 3D Selectable is now called Selectable 3D
  - 3D Visible is now called Visible 3D

- Attributes that change their value to a hard value, for example in a cue, with a fade time display the fading values on the absolute and relative layer, too.

- When MArker fixtures were set to a different IDType than MArker, the IDType would be forced to be MArker when loading a show file from a previous version in grandMA3 v1.8 or later. A possible set CID is reset to None. When having such MArker fixtures connected to PSN trackers, they have to be connected again in the PSN menu. This applies also to other fixtures of other fixture types that have IsMarker set to Yes.

- The assignment of SpecialExecutors 10 and 11 in new shows changed to the speed masters Speed 1 and Speed 2.

- The color of the indicator bar of an active Prog Time and Exec Time changed from orange to green.

- The order of keywords on X8 | DMX interchanged:

  - Press MA +  X8 | DMX to enter DMXUniverse.
  - Press MA +  X8 | DMX +  X8 | DMX to enter DMXAddress.

- The abbreviations of the following keywords changed:

  - DMXAddress: Dmxa
  - DMXUniverse: Dmx
  - DMXMode: Dmxm

- In the Update Menu value LastCalled of the Sequence Mode setting changed to LastGo.

- The windows of the default views in a new show has no filters assigned anymore.

- The LuaComponent property IsRessource changed to IsResource.

- When Con3 on grandMA3 consoles are set to DHCP and no DHCP server is available, the interface gets no IP address instead of an AVAHI IP address, which could conflict with Con1 if there was also no DHCP available.

- The Mesh3DS keyword changed to Mesh.

- The text "No Cable" when a network interface is down changed to "No IP".

- In the timecode editor and timecode window the button label changed from Select. target to Selection Target.

- When you are on the Absolute layer, toggling the activation will now toggle the activation of all attributes on the Absolute layer and any non-default values on all other layers. If you are not on the Absolute layer, toggling activation will only toggle values of the current layer.

- The MAtricks button in the recipe editors was renamed to Grid in order to match the naming of the MAtricks window. The order of the buttons changed to Reference, Grid, Layers, Shuffle, X, Y, and Z. The Invert toggle was removed, and all Invert properties are part of the Grid section.\
  This change also affects the Programmer Parts window.

- When storing the content of the programmer, the selected step will be reset to step 1.

- These properties changed their names:

  - Cues:

    - Cmd to Command
    - CmdDelay to CommandDelay

  - Sequences:
    - CmdEnable to CommandEnable

  - OSC:

    - ReceiveCmd to ReceiveCommand
    - SendCmd to SendCommand

  - Timecode Event:
    - ExecuteCmd to Execute Command

- CmdDelay keyword is renamed as CommandDelay.

---

 

## []()Bug Fixes

### 3D

| Description                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The beam and the spot of multi-pixel fixtures were not visualized correctly when the Multi Led Beam Mode was set to Single Beam Dynamic Gobo. This bug is fixed. Beam and Spot are visualized correctly even if the dimmer of the first pixel of the multi-pixel fixture is closed.                                                                                                      |
| Fixtures were not visible in some cases when loading a show file from a prior version of grandMA3. This bug is fixed. The scaling of fixtures is reset to 1:1:1 on the X, Y, and Z axes when loading a show file from an older grandMA3 version.                                                                                                                                         |
| The attributes Blade1B, Blade2B, Blade3B, Blade4B, and ShaperRot were not visualized in the 3D. This bug is fixed. These attributes are visualized again in the 3D window.                                                                                                                                                                                                               |
| It was not possible to select a fixture in the 3D window by tapping its label in the spot. This bug is fixed. A fixture can be selected by tapping its label in the spot.                                                                                                                                                                                                                |
| Beams pointing to x=y=z=0 while using the 2D Top camera were not displayed. This bug is fixed. Beams pointing to the 3D origin and using the 2D Top camera are displayed now.                                                                                                                                                                                                            |
| Shadows were not drawn after moving a fixture that then cast a shadow into the beam of another light source. This bug is fixed. A shadow will be drawn once a fixture that casts a shadow is moved into another light beam. When using the 3D encoder bar to move the fixture it will take a short timeout until the new position of the fixture is updated and the shadow is displayed. |
| Beams disappeared when pointing them into the camera on grandMA3 onPC stations that used recent series of AMD graphic cards. This bug is fixed. Beams will no longer disappear when pointing into the camera on a grandMA3 onPC station running on a recent AMD graphics card.                                                                                                           |

 

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Using the Lua function printf() could crash the software when a string variable was to be printed, but the value was of a different data type. This bug is fixed. Lua printf() does not crash the software anymore when returning a value of a different data type than it was specified.                                                                                                                                                                                                                   |
| When changing the value of one attribute that is part of an activation group, the other attributes of the same activation group kept their preset references. This bug is fixed. When changing one attribute all other attributes of the same activation group now remove their preset references.                                                                                                                                                                                                          |
| When the current command has a number, it was not possible to enter a keyword by pressing the key that is put at the key of the current command line default. For example, when Fixture is the command line default it was not possible to enter the collection keyword by pressing Fixture + Fixture + Fixture for this command: Move Preset 1.1 Thru At Collection. This bug is fixed. It is possible to enter keywords that have their shortcut on the key the command line default is set to at moment. |
| Selecting several executors and then storing sequences to it, kept only the first executor selected. This bug is fixed. All sequences stay selected when having several executors selected and then storing sequences onto them.                                                                                                                                                                                                                                                                            |
| Specifying a specific DMX address on an open range of DMX universes for the DMX tester failed. This bug is fixed. DMXUniverse Thru.1 At 100 works now as expected.                                                                                                                                                                                                                                                                                                                                          |
| Applying the default value to attributes that have several channel function and the default value is not part of the first channel function applied the corresponding value in the range of the first channel function. This bug is fixed. Setting the default value for attributes respects the correct channel function.                                                                                                                                                                                  |
| When keyboard shortcuts are enabled, they were not always automatically disabled when setting the focus into the input field of the Import/Export menu or the Load Show dialog. This bug is fixed. Keyboard shortcuts are automatically disabled in the input fields of the Import/Export menu or the Load Show dialog.                                                                                                                                                                                     |
| SelFix on a sequence put the fixtures always onto original grid position that was stored in the sequence. This bug is fixed. SelFix on sequences respects the current position of the grid cursor and adds the fixtures to the grid there.                                                                                                                                                                                                                                                                  |
| The arrangement tool of the layout window arranged fixtures in their ascending order of fixture IDs. This bug is fixed. The arrangement tool of the layout window now respects the selection order of the layout elements.                                                                                                                                                                                                                                                                                  |
| Storing Remove values to a cue using the options /Merge /CueOnly did not remove the values in the target cue and respecting cue only. This bug is fixed. Store /Merge /CueOnly with Remove values removes values in the target cue and respects cue only.                                                                                                                                                                                                                                                   |
| Entering very long commands into macros froze the UI for a time. This bug is fixed. Long commands input into macros are now processed faster so that the UI does not freeze anymore.                                                                                                                                                                                                                                                                                                                        |
| Channel sets called the wrong values in some cases if the readout of the encoder bar was set to Dec8, Dec16, Dec24, Hex8, Hex16, or Hex24. This bug is fixed. Channel sets call the correct values now even in the decimal and hexadecimal readouts.                                                                                                                                                                                                                                                        |
| When selecting a group and a fixture that is part of a group in a layout window, only the fixture was selected. This bug is fixed. Selecting several layout elements with different object types assigned selects them all reliable.                                                                                                                                                                                                                                                                        |
| When turning the transition encoder in the phaser encoder bar the value could jump from 100% to 0%. This bug is fixed. The transition value when turning the encoder follows the turning of the encoder.                                                                                                                                                                                                                                                                                                    |
| When turning the inner dual encoder rapidly down to 0% and then up again it could happen, that the value was stuck at 0%. This bug is fixed. The value of an encoder follows the encoder when turning it fast down to its software limit and then up again.                                                                                                                                                                                                                                                 |
| When storing MAtricks with InvertStyle set to Pan, then switching it to any other value and recalling the MAtricks from the pool, InvertStyle was not set to Pan. This bug is fixed. The MAtricks settings InvertStyle, Transform, and ShuffleMode are always stored into MAtricks.                                                                                                                                                                                                                         |
| Setting a negative value for Acceleration and Deceleration via command line failed. This bug is fixed. Negative values for Acceleration and Deceleration can be set again by using the command line.                                                                                                                                                                                                                                                                                                        |
| When setting a value via command line on the Acceleration or Deceleration layer and then opening its calculator, the value in the calculator could not be the same value as before. This bug is fixed. The calculator for Acceleration Deceleration open with the same value that was set before via encoders or command line.                                                                                                                                                                              |
| Toggling a selection (Please Please) and then selecting different fixtures, the previous selected fixture stayed selected. This bug is fixed. Toggling fixtures and then selecting different fixtures unselects the previously selected fixtures.                                                                                                                                                                                                                                                           |
| The shortcut for the options /Save and /Screen was set to /S for both. This bug is fixed. /S is the shortcut for /Screen and /Sa is the shortcut for /Save.                                                                                                                                                                                                                                                                                                                                                 |
| Newly created MIDI remotes set the In To property to a value of 128. Exporting and importing this MIDI remote again set the value to -128. This bug is fixed. New MIDI remotes have a value of 127 for the In To property and it is not possible to set a higher value.                                                                                                                                                                                                                                     |
| Executing a specific macro line failed when using the scheme Macro x.y. This bug is fixed. Macro 1.2 will execute the second macro line of the first macro.                                                                                                                                                                                                                                                                                                                                                 |
| Updating a preset that contained additional selective data removed this data when using Preset Mode Auto. This bug is fixed. Preset Mode Auto does not remove selective preset data when updating a preset.                                                                                                                                                                                                                                                                                                 |
| When dragging a lasso around a layout element that was set to action 'None', a SelFix command was executed instead. This bug is fixed. Selecting layout elements with set the action to 'none' does nothing anymore.                                                                                                                                                                                                                                                                                        |
| Labeling more than two DMX universes at the same time did not automatically increment the name when the name had a number at the end. This bug is fixed. The names of DMX universes will be automatically incremented during the labeling process.                                                                                                                                                                                                                                                          |
| When adding a new character in the middle of a command that will be entered into a command input, the command was translated into keywords and the cursor jumped to the end of the command. This bug is fixed. Changing single characters in a command of a command input does not let the cursor jump to the end.                                                                                                                                                                                          |
| When turning a preset or cue into a recipe and then editing the recipe, set the programmer par ID to 4 294 967 295. This bug is fixed. Editing the recipe after creating it by turning a preset or cue into a recipe does not change the programmer part ID to unexpected values.                                                                                                                                                                                                                           |
| The software could crash when moving a recipe in a cue. This bug is fixed. Moving a recipe in a cue moves the recipe to the specified spot.                                                                                                                                                                                                                                                                                                                                                                 |
| Store /Remove removed also attributes that were deactivated in the programmer from the selected cue or preset. This bug is fixed. When removing attributes from cues or presets, deactivated values in the programmer are ignored.                                                                                                                                                                                                                                                                          |
| Commands in macros that were separated by a semicolon in a command cell were not applied correctly when the command behind the semicolon contained a clear keyword. This bug is fixed. Commands separated by a semicolon are correctly applied.                                                                                                                                                                                                                                                             |
| It was not possible to enter Oops or Undo into the command cell, for example in a macro. This bug is fixed. Oops or Undo can be entered into command cells. When the input field of a command cell contains a string pressing Oops works as backspace, until the field is empty. Then pressing Oops enters Oops into the input field.                                                                                                                                                                       |
| It was possible to move a locked executor. This bug is fixed. Locked executors cannot be modified.                                                                                                                                                                                                                                                                                                                                                                                                          |
| The software crashed when executing blackout for the grand master while editing a macro line. This bug is fixed. While editing a macro line executing blackout for the grand master does not crash the software anymore.                                                                                                                                                                                                                                                                                    |
| Selecting a group after selecting manually different fixtures put the fixtures of the group at the same starting point in the grid as the manual selection had. This bug is fixed. Selecting fixtures by calling a group puts the fixtures into the grid starting at the current position of the grid cursor.                                                                                                                                                                                               |
| Opening the calculator of an attribute that had a lot of channel sets (65 k) crashed the console. This bug is fixed. Opening the calculator of an attribute with a lot of channel sets does not cause a crash any longer.                                                                                                                                                                                                                                                                                   |
| The wrong channel function could be active on attributes that are following mode dependencies if the from and to values of the mode dependency had a small range while the encoder controlling the mode master was set to coarse resolution. This bug is fixed. Mode followers will have the correct channel function active even if the encoder of the mode master attribute is set to coarse.                                                                                                             |
| The store settings were not reset to default when executing a clear command via macro or typing it manually in the command line. This bug is fixed. Executing any clear command via any command cell or by typing it in the command line.                                                                                                                                                                                                                                                                   |
| When moving a preset that was used in a recipe, that value drop-down of the recipe editor did afterwards not offer the feature group anymore the moved preset is part of. This bug is fixed. The value drop-down in the recipe editor offers always all available feature groups in order to choose presets from.                                                                                                                                                                                           |
| The console crashed when moving recipes in a cue or preset. This bug is fixed. Moving recipes in a preset or cue works.                                                                                                                                                                                                                                                                                                                                                                                     |
| When using the dimmer wheel shortly behind with different fixtures selected, the value change of the second selection started at the starting value of the first selected fixtures. This bug is fixed. When using the dimmer wheel the dimmer value starts to change from the current value of the fixtures onwards.                                                                                                                                                                                        |
| The Scroll Lock LED on grandMA3 consoles did inform the user about the current state. This bug is fixed. The Scroll Lock LED works again.                                                                                                                                                                                                                                                                                                                                                                   |
| It was not possible to move a fader over time when using grandMA3 onPC on Apple Silicon hardware. This bug is fixed. Executor 201 At 0 Fade 5 for example is now also possible on Apple Silicon hardware.                                                                                                                                                                                                                                                                                                   |
| The views of the default user profile and of copies of the default user profile could be overwritten by the default views when loading a new show and then loading the former show again. This bug is fixed. The default views are only initialized when starting a new show.                                                                                                                                                                                                                               |
| Importing user profiles by using the Import/Export menu could crash the software when it tried to import onto the default user profile. This bug is fixed. Importing user profiles onto the default user profile is prohibited.                                                                                                                                                                                                                                                                             |
| Copying an agenda event that had no object assigned, had the Root object assigned when pasting it. This bug is fixed. Copying empty agenda object copies them 1:1.                                                                                                                                                                                                                                                                                                                                          |
| The software could crash when trying to use the CommandCall() function for the root object in a plugin, but outside of the main function. This bug is fixed. The software does not crash anymore when using the CommandCall() function outside the main function of a plugin.                                                                                                                                                                                                                               |
| The software could crash when a connected drive reported a size of 0 bytes while using the backup menu. This bug is fixed. USB drives reporting a size of 0 bytes do not crash the software anymore.                                                                                                                                                                                                                                                                                                        |
| It was not possible to delete an empty layout while being in a different world than world 1. This bug is fixed. Empty layouts can be deleted, also when being in another world.                                                                                                                                                                                                                                                                                                                             |
| Processing units kept values cleared when saving a show file, clearing the programmer and then loading the show file with the programmer values again. This bug is fixed. Loading a show file restores the correct programmer values, also on processing units.                                                                                                                                                                                                                                             |
| The software crashed when deleting a sequence that was assigned to Xkeys and where the used executor configuration was set to be higher or wider than 1. This bug is fixed. Assigned sequences on Xkeys can be deleted without crashing the software.                                                                                                                                                                                                                                                       |
| The software crashed when the user tried to use the color picker with a fixture where the intensity of the emitters was very small. This bug is fixed. The color picker does not cause a crash anymore when a fixture type as unusual emitter intensities set.                                                                                                                                                                                                                                              |
| The software crashed when the user tried to edit the assigned movement or target space of a MArker fixture by editing the MArker fixture itself. This bug is fixed. It is only possible to change the assigned spaces of MArker fixtures when being in the Patch menu.                                                                                                                                                                                                                                      |
| It was not possible to enter the command Next Step into a command cell, for example in a macro. This bug is fixed. Next Step as command can be entered again into command cells.                                                                                                                                                                                                                                                                                                                            |
| IfOutput, IfActive, and IfProg did not select instances of multi-instance fixtures. This bug is fixed. Multi-instance fixtures get selected when using IfOutput, IfActive, or IfProg.                                                                                                                                                                                                                                                                                                                       |
| When toggling a grouping fixture and a child of the grouping fixture, only these two fixtures were toggled. This bug is fixed. Toggling grouping fixtures toggles all children of the grouping fixture.                                                                                                                                                                                                                                                                                                     |
| When moving a fader after a page change, it could happen, that the fader did not recognize the movement and wanted to go back to its previous position. This bug is fixed. A fader should not work against the movement done by the user.                                                                                                                                                                                                                                                                   |
| The software could crash when feature groups were switched and the maximum amount of 32 768 channel functions in the show file was exceeded. This bug is fixed. The limit of allowed channel functions was increased to 65 535. The software does not crash anymore when changing feature groups while the limit is exceeded.                                                                                                                                                                               |
| Deleting a locked sequence that is played back let the pop-up appear that warned the user that the object to be deleted has references that may affect the output. This bug is fixed. Locked objects cannot be deleted, and therefore the locked error message appears directly in the command line.                                                                                                                                                                                                        |
| Step appeared again and again in the command line when pressing MA + X5 \| Step and releasing MA first and then X5 \| Step and then pressing Clear. This bug is fixed. No keyword should appear in the command line when pressing Clear.                                                                                                                                                                                                                                                                    |
| Deleting layout elements, while not being in the setup mode with the layout window, deleted the assigned object of the layout element, too. This bug is fixed. Deleting layout elements is only possible when the layout window is in setup mode.                                                                                                                                                                                                                                                           |
| Exporting plugins that were created in the grandMA3 software did only export a XML, and did not create the corresponding Lua file. This bug is fixed. Plugins that were created in the grandMA3 software are exported as XML files which contain the content of the plugin encoded in Base64. Plugins that were created in the grandMA3 software, where the user entered a FileName manually, a XML file and a corresponding Lua file will be created.                                                      |

 

### Connections

| Description                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When changing the readout temporarily in a calculator of the In & Out menu, the entered value was not interpreted for the new readout. This bug is fixed. The entered value of calculators in the In & Out menu is applied respecting the temporarily changed readout.           |
| NDI input could have interchanged red and blue colors. This bug is fixed. The input of NDI streams is now checked in which color format the data is received and does not interchange red and blue anymore.                                                                      |
| When the name of a PSN tracker changed in the PSN stream, the new name would not be recognized by the grandMA3 software. This bug is fixed. Changing the name of a PSN tracker on the PSN sender changes also the name of the tracker in the PSN menu of grandMA3.               |
| When connecting an external monitor while the console or onPC was locked, the new display would not display the desk lock. This bug is fixed. Connecting new monitors display the desk lock information when it is active during the connection process.                         |
| When a station changed its status to IdleMAster it could happen, that Art-Net or sACN were not output, though Send If IdleMaster for the corresponding protocol was enabled. This bug is fixed. Stations that are IdleMAster send out DMX network protocols when they should do. |
| RDM did not work with fixtures that were connected to a grandMA3 xPort node or a processing unit. This bug is fixed. RDM works again with xPort nodes and processing units.                                                                                                      |
| It was not possible to delete the gateway entry of an interface. This bug is fixed. Gateways IP of interfaces can be deleted.                                                                                                                                                    |
| The connected stations of a session did not display the Sender IP of a PSN system. This bug is fixed. The PSN menu displays the Sender IP on all stations of a session.                                                                                                          |

### Patch

| Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When saving and loading a show file the set DMX curves in attributes in fixture types were lost. This bug is fixed. Saving and loading a show files preserves the DMX curves in fixture types. |
| Exporting an MVR from the Live Patch did not work. This bug is fixed. Exporting MVRs is possible also when being in the Live Patch menu.                                                       |
| The source column of fixture types that were imported from an MVR file displayed "2". This bug is fixed. Fixture Types imported from an MVR file display "GDTF" as source.                     |

### Phaser

| Description                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The allowed input range in the calculators for Acceleration and Deceleration was set to -100 % to +100 %. This bug is fixed. The allowed value input range for Acceleration and Deceleration matches now the limits of the encoders: -3 200 % to 3 200 %. |
| Phasers restarted when changing their speed. This bug is fixed. Phasers change to their new values without restarting when adjusting the phaser layers.                                                                                                   |

 

### Playback

| Description                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When flashing the temp fader of a sequence via a DMX remote, MIDI remote, DC remote from 0% upwards, the sequence did not play back. This bug is fixed. Remote input to the temp fader of a sequence controls the sequence in all situations.                                                                                          |
| When dimmers decreased in a cue, and tracking was disabled in the sequence, the normal cue timing was applied. This bug is fixed. When dimmers decrease in a non-tracking sequence, the out timing is applied.                                                                                                                         |
| Assigning a preset to an executor could later not playback the preset via the executor when the preset was played back via the preset pool at the time of the assignment. This bug is fixed. Selective presets can always be played from executors.                                                                                    |
| Going to the next cue during a partial crossfade did not release attributes when they had to release. This bug is fixed. Attributes that should release in the next cue, are now released after a not finished crossfade with an addition Go+ into the cue.                                                                            |
| The applied output filter for preset playbacks excluded the fixtures of the output filter. This bug is fixed. The output filter for preset playbacks includes the fixtures of the filter and excludes all other fixtures.                                                                                                              |
| When playing back a cue with phasers and then moving up the fader, the phaser could be out of sync. This bug is fixed. Playing back cues with phasers keeps the attributes in the phaser in sync.                                                                                                                                      |
| Attributes that were set to Snap faded when using a crossfade functionality, for example ProgramXFade or ExecutorXFade. This bug is fixed. Snap attributes are always snapping when a crossfade is performed.                                                                                                                          |
| When initializing a cue, for example after updating it, that was output at the same time, the command set in the cue was also executed again. This bug is fixed. Cue commands are only executed when starting the cue.                                                                                                                 |
| Oopsing the value change of an attribute on a connected console did not update the DMX output. This bug is fixed. DMX output follows the value change, also when oopsing attribute changes of a connected station.                                                                                                                     |
| When fixtures faded to a new position with stomped phasers, the fixtures first moved towards a wrong position before they started to fade to their correct and new position. This bug is fixed. Stomping a phasers to a new position lets the fixtures move correctly and straight to their new position.                              |
| When tracking a relative phaser the phaser could restart every time going into a new cue. This bug is fixed. Tracked phasers do not restart when going into a new cue.                                                                                                                                                                 |
| When starting a playback again while the fade of the OffCue was running, the output values would jump. This bug is fixed. The output values of a playback do a smooth transition when starting the playback again while the fade of the OffCue is running.                                                                             |
| When changing the speed of a preset playback using the encoder of the executors in row 300 or 400, while the executor time was active, faded the speed down to 0. This bug is fixed. Changing the speed of preset playbacks on 300 and 400 executors is also possible when the executor time is on.                                    |
| When stomping the playback of a relative phaser by starting a new playback, the fixtures moved in an unexpected direction before going to their static value. This bug is fixed. Stomping the playback of relative phasers moves the fixtures directly to their new value.                                                             |
| Played back presets could not be switched off anymore when the preset was changed from being selective to global or universal. This bug is fixed. Global and universal presets can be switched off when their playback was started when they were selective. Starting a playback of global or universal presets is not possible.       |
| When switching off a XYZ playback with a fade time in the OffCue, the fixtures always flipped during the fade. This bug is fixed. Fixtures only flip during the fade of an OffCue of a XYZ playback when it cannot be avoided. This depends on the current pan/tilt value combination the fixtures have and to where they should fade. |

 

### Windows

| Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Closing the Edit Encoder Bar menu brought the user back to different locations depending on whether you pressed ESC or tapped X. This bug is fixed. Closing the Edit Encoder Bar menu brings the user back to the User Profile menu.                                                                                                                                                                                              |
| When opening the dropdown for an interface in the output configuration, the Auto entry was always highlighted. This bug is fixed. The currently selected interface will be highlighted when opening an interface dropdown in the output configuration.                                                                                                                                                                            |
| When switching off a sequence and the Content Sheet was set to Cue Mode Next, the next cue that would be played back when starting the sequence again was not displayed. This bug is fixed. The Content Sheet displays always the next cue when Cue Mode is set to Next.                                                                                                                                                          |
| When disabling and enabling the encoder bar of the color picker, the Mode was reset to Auto. This bug is fixed. When opening the color picker encoder bar again the Mode is remembered correctly.                                                                                                                                                                                                                                 |
| While dragging a lasso in a layout window doing a right-click the lasso frame did not disappear anymore until clicking one more time into the layout window. This bug is fixed. Right-clicking in the layout window while dragging a lasso removes the lasso frame now.                                                                                                                                                           |
| When changing the WingID of a module, the content of the corresponding letter box display did not follow to the new WingID. This bug is fixed. Letter box displays follow with their conent to the new WingID when it is changed.                                                                                                                                                                                                 |
| When presets were played back from sequences the attributes in the fixture sheet did not display a preset marker. This bug is fixed. Preset markers are displayed when playing back presets in sequences.                                                                                                                                                                                                                         |
| When entering the layout editor and column filtering was active, two lines of filters could appear. This bug is fixed. The layout editor displays only one row of filters.                                                                                                                                                                                                                                                        |
| When having the layout encoder bar or the 3D encoder bar open the screen encoder was not accessible. This bug is fixed. The screen encoders are available when the layout encoder bar or the 3D encoder bar active.                                                                                                                                                                                                               |
| The Pos X, Pos Y, Width, and Height encoder were not available for layout elements that had something else than a fixture assigned and when the Arrangement was set to Camera. This bug is fixed. The position and size of layout elements can be changed even if the Arrangement mode is set to Camera.                                                                                                                          |
| When a preset or cue was updated and the update menu stayed open, the settings of the update menu were reset to their defaults. This bug is fixed. The settings of the update menu are kept as long as the update menu is open. They are reset when closing and opening the update menu.                                                                                                                                          |
| The order of the tabs in the Object section of the assign menu was different between the different supported operating systems, and the order could change with every start of the grandMA3 software. This bug is fixed. The tabs in the Object section of the assign menu have a fixed order.                                                                                                                                    |
| The fixture sheet displayed parked fixtures when enabling Prog Only. This bug is fixed. Prog Only enabled in the fixture sheet displays only attributes and fixtures that are in the programmer.                                                                                                                                                                                                                                  |
| The entered show file name was reset to the current show file name when changing the drive in the Save As dialog of the backup menu. This bug is fixed. The desired show file name is not discarded when changing the selected drive in the backup menu.                                                                                                                                                                          |
| The plugin editor was not readable when using the daylight color theme. This bug is fixed. The plugin editor is useable, also when using the daylight color theme.                                                                                                                                                                                                                                                                |
| The content sheet displayed tracked values in cyan color when a different user profile than the default one was used. This bug is fixed. The content sheet displays the correct tracking colors no matter which user profile is used.                                                                                                                                                                                             |
| Tapping fixtures several times in the Content Sheet, DMX Sheet, or Layout View toggles the fixtures in the programmer. This bug is fixed. It is not possible to toggle fixtures by tapping them several times in the Content Sheet, DMX Sheet or Layout View.                                                                                                                                                                     |
| When hovering the buttons of the timecode editor or the timecode encoder bar, icons on these buttons changes their color to white. This bug is fixed. Hovering buttons in the timecode editor or the timecode encoder bar does not change the color of icons anymore in order to identify their states all the time correctly.                                                                                                    |
| When starting to slide in the + or - area of an MAtricks slider, and releasing the finger within the same area, the displayed value was not applied. This bug is fixed. Sliding and releasing in the MAtricks sliders applies the displayed values.                                                                                                                                                                               |
| The text alignment of some cells was unfortunate for a good readability. This bug is fixed. The Command Cells in Sequence Sheet, Macro editor, and Agenda, the cells Fixture Type, Mode, Layer, and Class in the Patch menus are displaying their values aligned to the left.                                                                                                                                                     |
| Toggling the criterions in the recipe editor, or attributes in the filter editor toggled other elements in the editors when using Apple Silicon hardware. This bug is fixed. Clicking on toggle buttons when using Apple Silicon hardware toggles the clicked button.                                                                                                                                                             |
| When having the layout editor open and then editing a different layout, the layout editor still displayed the content of the formerly edited layout. This bug is fixed. Layout and macro editor display the correct content when editing elements, also when changing to a different object and keeping the editor open.                                                                                                          |
| The fixture sheet changed the font color of attributes to yellow (playback from a different user), also when the values were still coming from the selected sequence. This bug is fixed. Font colors of attributes indicates always if the values are coming from the selected sequence (green, cyan, white, or purple) or if they are coming from a non-selected sequence (yellow) no matter which user plays back the sequence. |
| The sequence sheet in track sheet mode displayed the wrong cue part ID, when the cue was collapsed while the value was not stored in part 0. This bug is fixed. The attribute cells in the sequence sheet display the correct cue part ID when the cue is collapsed.                                                                                                                                                              |
| The faders in the color picker could go crazy when having two or more color picker windows open at the same time. This bug is fixed. Having two or more color picker windows open at the same time does not let the faders in the color picker jump around.                                                                                                                                                                       |
| The unpatched section in the Split By view of the patch menu hides fixtures that had not all of their DMX breaks patched. This bug is fixed. Unpatched are all fixtures that have not all of their DMX breaks patched.                                                                                                                                                                                                            |

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

Recast will only recast presets to cues if there is a preset link in the absolute layer.

Deleting, changing, moving, or exchanging objects while a Global Preset Update is processing is not yet fully supported for the following object types:\
-Data Pools\
-Presets (Selective, Global, and Universal)\
-Sequences\
-Cues, Cue Parts\
-Recipes\
​The red indicator in the MA logo of the command line appears when a Global Preset Update is currently processing! The time needed for the process depends on the size of the show file and the number of references between objects.

Loading show files that were saved in previous versions deletes the programmer content.

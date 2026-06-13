---
title: "Release Notes 1.6"
description: "Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail w"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/key_rn_v1_6.html"
scrapedAt: "2026-06-12T21:25:49.361Z"
---
- [Get Started](/grandma3/2-4/key_rn_v1_6/#h2__1435677565)

- [Bugfix Version 1.6.3.7](/grandma3/2-4/key_rn_v1_6/#h2_551141764)

  - [Other Enhancements](/grandma3/2-4/key_rn_v1_6/#h2_1198082799)
  - [What's Changed](/grandma3/2-4/key_rn_v1_6/#h2_563643534)
  - [Fixed Bugs](/grandma3/2-4/key_rn_v1_6/#h2__1624482491)

- [Bugfix Version 1.6.3.5](/grandma3/2-4/key_rn_v1_6/#h2_1713941178)

  - [What's Changed](/grandma3/2-4/key_rn_v1_6/#h2__924702632)
  - [Fixed Bugs](/grandma3/2-4/key_rn_v1_6/#h2__759464123)

- [grandMA3 Version 1.6.1.3](/grandma3/2-4/key_rn_v1_6/#h2_594421974)

- [Features](/grandma3/2-4/key_rn_v1_6/#h2_727740091)

  - [​](/grandma3/2-4/key_rn_v1_6/#Features)[Presets](/grandma3/2-4/key_rn_v1_6/#h3_956339510)
  - [Command Wing Bar](/grandma3/2-4/key_rn_v1_6/#h3__422989463)
  - [CleanUp Command](/grandma3/2-4/key_rn_v1_6/#h3__1195489397)
  - [Stomp](/grandma3/2-4/key_rn_v1_6/#h3__938816491)
  - [RDM](/grandma3/2-4/key_rn_v1_6/#h3__1132175009)
  - [Markers](/grandma3/2-4/key_rn_v1_6/#h3__430960067)
  - [Backup Menu](/grandma3/2-4/key_rn_v1_6/#h3_1498318733)

- [Other Enhancements](/grandma3/2-4/key_rn_v1_6/#h2_34494591)

- [What's Changed](/grandma3/2-4/key_rn_v1_6/#h2__2036553563)

- [Fixed Bugs](/grandma3/2-4/key_rn_v1_6/#h2_1665398321)

- [Appendix](/grandma3/2-4/key_rn_v1_6/#h2__1835053169)

- [Known Limitations](/grandma3/2-4/key_rn_v1_6/#h2__1852571500)

---

 

## []()Get Started

Do you need help getting started in grandMA3? Perfect - here we describe a few quick steps to get you rolling. The manual will explain functionality in detail while the MA e-Learning within the MA University offers you all kinds of training. All information can be accessed through the MA Lighting website www\.malighting.com.

Let´s go! Once you leave the Release Notes by tapping I agree on the top right corner, you get presented with the main screen of grandMA3 software. On the right side, you can see predefined views. By tapping the view buttons you can switch between them. 

If this is your first time starting grandMA3 software you need to patch some fixtures first to get started. Or you can load one of the demo shows delivered with the software. In both cases, you need to press Menu key. If you are using grandMA3 onPC software there is a ![gear](/img/grandma3/2-4/gear_1-0b513c.png) symbol in the top left corner. Clicking the symbol is the same as pressing the Menu on a console.

Hit Backup, and tap Load in the pop-up menu. Now you are ready to load shows. As you want to get started quickly you should change in the header bar from Shows to Demo Shows by tapping the button repeatedly. Once it says Demo Shows you can choose any of them by double-clicking on it or selecting it and then tap Load Show. Just in case there was a show loaded already the software will ask you if want to save the current show first before loading the new one... your choice ;-)

Here we go! Now you are ready to work with the grandMA3 software. It is as easy as that! Again - on the right side are the view buttons to change screen content. At the bottom, you find the encoder bar and the command line. Technically that is all you need to get started. For more detailed information, refer to the grandMA3 help menu which you can reach by one of the view buttons named Help or via the MA Lighting website. If you want to learn grandMA3 software step by step please join the MA e-Learning - it's free of charge and available via the MA Lighting website.

Have fun with the grandMA3 software - next, you will find all the improvements and changes of this software version.

**Hint:**\
The grandMA3 software will start with the show file (or status) that was active when the software was closed. 

---

 

## []()Bugfix Version 1.6.3.7

## []()Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) grandMA3 onPC works now also on Apple Macs running macOS 12 (Monterey).

---

## []()What's Changed

- Using all tools, except the follow tool, within the 3D window does not trigger the temporary Single Step functionality anymore.

---

## []()Fixed Bugs

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unblocking could remove the references to presets and left hard values when presets were used. This bug is fixed. Unblocking should not delete preset references anymore.                                                                                                                                      |
| When storing a cue the MAtricks setting were not always respected. This bug is fixed. The current MAtricks settings are now again taken into account when storing a cue.                                                                                                                                       |
| Storing into an existing cue by using the Release option created an additional step in the cue that contained the release values. This bug is fixed. Store release does not create additional steps in the target cue anymore.                                                                                 |
| The size of the value change when turning an encoder could change when the encoder was switched off through a macro that addressed the whole encoder page. This bug is fixed. Off EncoderPage within an executed macro does not change the size of the value change anymore when turning an encoder afterward. |

### Connections

| Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It was not possible anymore to connect grandMA3 devices of different subnets using a gateway. This bug is fixed. grandMA3 sessions can be established again across different subnets.  |

### Patch

| Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moving fixture types within the patch could crash the software when applying the changed patch structure. This bug is fixed. The software should not crash anymore when moving fixture types within the patch. |

### Phaser

| Description                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Having a preset called in step 1 and then integrating a preset into step 2 set the preset of step 1 also in step 2 into the programmer. This bug is fixed. When integrating presets into steps, the desired preset is integrated again.                                                                                              |
| Calling a multi-step preset and then integrating a different preset in one of the steps did not store the resulting phaser correctly. This bug is fixed. Phasers are now stored correctly, also when calling them from a preset and then exchanging one used preset within the programmer.                                           |
| Storing a phaser that was created within the programmer and that has presets integrated into two or more steps, displayed hard values within the tracking sheet and fixture sheet when it was stored into a sequence. This bug is fixed. Integrated presets within directly stored phasers in sequences are now displayed correctly. |

### Playback

| Description                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moving a temp fader up and down could cause a fader error mode. This bug is fixed. Executor faders that have the temp fader function assigned should not go into error mode anymore by only moving the fader up and down unless there is a real issue with the fader itself. |
| A large number of running multi-step phasers could sometimes result in a channel not refreshing with each frame. This is fixed. Channels are always refreshing even with a large number of multi-step phasers.                                                               |

---

 

## []()Bugfix Version 1.6.3.5

## []()What's Changed

- Executor labels that are not at 0% or at 100% display now a value of at least 1% or 99%.
- The SequenceMode in the update menu is reset to All for all user profiles when loading a show file the first time in this version.

---

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On Apple M1 systems all beams were flickering if a dimmer phaser was running on some of them. This bug is fixed. Beams on Apple M1 systems do not flicker if a dimmer phaser is running. |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When changing the patch by e.g., adding or deleting fixtures, existing worlds were reset to have all fixtures included. This bug is fixed. Worlds are not changed anymore when changing the patch.                                                                                                                                                                                                           |
| The software could crash when editing the time position of a marker in a timecode show using a plugin. This bug is fixed. The software does not crash anymore when changing the position of a marker.                                                                                                                                                                                                        |
| The software could crash when moving an executor or Xkey. This bug is fixed. Moving executors or Xkeys does not crash the console anymore.                                                                                                                                                                                                                                                                   |
| Loading a show file from v1.5 or prior could crash the software. This bug is fixed. Loading show files from older software versions does not crash the software anymore.                                                                                                                                                                                                                                     |
| Global presets could not always be called for all subfixtures of the same geometry. This bug is fixed. All subfixtures using the same geometry can use the same global presets again.                                                                                                                                                                                                                        |
| The functionality of some hard keys within popups was blocked when using hard keys before in combination with MA and releasing MA first. This bug is fixed. The hard keys should now always work in pop-ups.                                                                                                                                                                                                 |
| Deleting an executor where the originally used executor configuration was resized after creating the executor deleted also the next executors. This bug is fixed. Resizing an executor configuration when it is already in use does not influence further actions with executors anymore.                                                                                                                    |
| The software could crash when moving a layout element from one layout to another layout or oopsing this action. This bug is fixed. Moving layout elements into a different layout or oopsing this does not crash the software anymore.                                                                                                                                                                       |
| The software could crash when turning the encoder of an attribute where the default was set to a value that was not covered by the defined ranges of its channel functions. This bug is fixed. The software does not crash anymore when the default value of an attribute is not part of the value range of its channel functions and the encoder will be turned for it.                                     |
| When loading show files from v1.5 or prior including global presets where different modes of a fixture type were stored, the global data of only one mode was correctly migrated. This bug is fixed. Individual global values within a preset of different modes of the same fixture type are now migrated correctly into v1.6.                                                                              |
| Selective phaser presets that had global presets integrated lost their reference to the integrated presets when one of the integrated presets was updated. This bug is fixed. Updating presets that are integrated into other presets do not remove the reference in the other preset anymore.                                                                                                               |
| A preset could lose its reference to another preset when the source preset would be moved. This bug is fixed. Moving a preset does not lose its references anymore.                                                                                                                                                                                                                                          |
| Deleting the cue that holds the same data before a cue that has the same data blocked, kept the block status of the second cue. This bug is fixed. Deleting cues checks now the block status of the following cues and resolves them if necessary.                                                                                                                                                           |
| Storing a new cue with the same data in front of an existing cue did not block the data in the already existing cue. This bug is fixed. Adding cues in front of existing cues checks now if blocking is needed and blocks it then.                                                                                                                                                                           |
| Blocking a cue that tracks phasers created a new cue part. This bug is fixed. When blocking a cue with phaser data, the values will be blocked correctly in their original cue part.                                                                                                                                                                                                                         |
| It was possible to create executors that did not interact with all commands. This bug is fixed. It is not possible anymore to create executors that are not fully functional.                                                                                                                                                                                                                                |
| Moving an open range of cues, e.g., Move Cue 1 Thru At Cue 501, made it impossible to move the first cue of this range later again. This bug is fixed. Moving an open range of cues does not prevent anymore the first cue of the range to be moved later again.                                                                                                                                             |
| It was possible to move a special executor to a normal executor. This bug is fixed. Special executors cannot be moved anymore.                                                                                                                                                                                                                                                                               |
| The automatic blocking of attributes did not work correctly when storing a second cue, and the first fixture of the selection did not have all attributes that should be stored active. This bug is fixed. The automatic blocking when storing or updating a cue works now with all combinations of fixture selection and attributes.                                                                        |
| Storing a fixture at the same level as the previous cue did not block the cue correctly if the previous cue had tracked data for the attribute. This bug is fixed. When storing a cue the automatic blocking works now also when the previous cue had only tracked data.                                                                                                                                     |
| The software crashed when oopsing the copy and paste of timecode events. This bug is fixed. Oopsing the copy and paste of timecode events should not crash the software anymore.                                                                                                                                                                                                                             |
| Activating the timecode setting Ignore Follow recorded again timecode events when the timecode show was passing by already recorded timecode events. This bug is fixed. Existing timecode events are not recorded anymore into timecode shows.                                                                                                                                                               |
| Storing into a preset with the /Remove option did not remove relative values from the preset when relative values were active, but set the relative value to 0. This bug is fixed. Store with the use of the /Remove option removes now also relative values from presets.                                                                                                                                   |
| Unblocking a cue did not remove preset references for the attributes that used presets. This bug is fixed. Preset references are now removed when unblocking cues that use presets.                                                                                                                                                                                                                          |
| Storing a stomped attribute into a cue where a preset reference was already stored for the attribute did not remove the preset reference for this attribute. This bug is fixed. Storing a stomped attribute with a hard value into a cue removes now also the preset reference for the attribute within the cue.                                                                                             |
| Stomp could sometimes keep a preset reference to the first step of the other layer of a multi-step preset which could result in storing a reference to the wrong information. This bug is fixed. Stomp will now try to link to a single-step preset or use hard values.                                                                                                                                      |
| Knocking-in an attribute with a hard value that was already played back by a cue with a preset, knocked in the preset reference from the cue. This bug is fixed. It should not be possible anymore to store a hard value with a preset reference into a cue.                                                                                                                                                 |
| Editing an attribute in the sequence sheet in track sheet mode and changing from a hard value to a preset did not set the block state correctly. This bug is fixed. Editing values in the tracking sheet now updates the block states correctly.                                                                                                                                                             |
| When cloning, the system created new phasers in the background. This bug is fixed. Cloning does not create new phasers in the phaser engine anymore.                                                                                                                                                                                                                                                         |
| It could happen that the ABS and/or REL layer values in a cue or embedded preset were overwritten when only one layer was referencing a preset that contained values for both layers. This bug is fixed. The preset update process will correctly keep the layers separated when updating the referenced values.                                                                                             |
| It was not possible to store merge into several cues, that were specified by using + within the command, e.g., Store Cue 1 + 2 /Merge. This bug is fixed. It is possible again to store merge into several cues by using + to specify the cues.                                                                                                                                                              |
| The software could crash when cooking recipes. This bug is fixed. The software should not crash anymore when cooking recipes.                                                                                                                                                                                                                                                                                |
| Cooking a recipe that had a group with more fixtures assigned, than the assigned selective preset had stored, created unwanted data for the fixtures that were part of the group, but were not part of the preset. This bug is fixed. Cooking a recipe that has different fixtures in the used group and the used preset creates only data for the fixtures that are part of both, the group and the preset. |
| The software could freeze when the user tried to set a cue fade time to a range of cues, and the range included the OffCue. This bug is fixed. Addressing a range of cues with the OffCue included does not freeze the software anymore.                                                                                                                                                                     |

### Connections

| Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The DMX input merge was only processed on the global master station after another device joined the session. This bug is fixed. DMX input merge works now correctly after devices joined the session. |

### Patch

| Description                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The software could freeze when having the patch open in split view mode and then trying to open the patch again on a second display. This bug is fixed. Trying to open the patch a second time should not freeze the software anymore.                                      |
| When leaving the patch and applying changes, the preset modes of all preset pools were reset to the defaults of a new show. This bug is fixed. The preset modes are now preserved when leaving the patch and applying changes.                                              |
| The software could crash if a geometry reference of a fixture type was not linked to any geometry. This bug is fixed. Geometry references without a link to a geometry do not crash the software any longer.                                                                |
| Exchanging a single-instance fixture to a multi-instance fixture type did not convert global presets correctly. This bug is fixed. Global presets are now converted correctly when exchanging the fixture type of relevant fixtures from single-instance to multi-instance. |
| The software could crash when copying and pasting a fixture within the patch. This bug is fixed. Copy and paste of fixtures within the patch menu should not crash the software anymore.                                                                                    |

### Playback

| Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The output level of sequences could be changed to 0 when updating a preset. This bug is fixed. Updating a preset should not change the output of an unattended sequence to 0 anymore.                                                                                                                                                       |
| It could happen that a DMX universe did not recognize the change of values at the first cycle and therefore did not send out the changes immediately. This bug is fixed. DMX universes have been further optimized for value changes and output changes immediately.                                                                        |
| The playback of a timecode show was not triggering the playbacks correctly when the user profile which recorded the events did not exist anymore. This bug is fixed. Timecode shows generate always the correct playback, even when user profiles were deleted.                                                                             |
| A sequence that was already triggered by a timecode was switched off when the incoming timecode signal was lost and reappeared during the After Roll time with a previous time again. This bug is fixed. Restarting the timecode sender does not switch off sequences anymore when the signal is coming back during the After Roll timeout. |
| Disabling the timecode setting Assert Previous Events still turned off the sequence when no previous events were found. This bug is fixed. Only when Assert Previous Events is enabled will the software turn off the sequence when no previous events are found.                                                                           |

### Windows

| Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The fixture sheet did not display the phase and speed values on fixtures when the phaser was operated by a sequence. This bug is fixed. The phase and speed values of played back phasers are now displayed within the fixture sheet. |
| The software could crash when opening a sequence sheet or when editing a sequence. This bug is fixed. Opening the sequence sheet does not crash the software anymore.                                                                 |

---

 

## []()grandMA3 Version 1.6.1.3

## []()Features

The latest release of grandMA3 version 1.6.1.3 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Presets

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Global data has been streamlined to make it easier for the user to manage. The global data is now stored on real fixtures within the patch. In addition, universal presets can now reference data stored to a real fixture patched within the show file.

When storing new global presets, the global data will be created within the new preset automatically. When all data for the fixture type is the same, the first fixture from the stored data will be used to hold the global data within the preset. Each fixture type gets its own global data value so that you can adjust the global value per fixture type.

When adding selective data to the preset for one of the fixtures that hold the global data, or when deleting the fixture from the show, the global data will be moved to the first patched fixture for the fixture type. In the case that the global data was held before by the first fixture, the data will be moved to the next patched fixture of this fixture type.

When editing a preset with global data, the fixtures with the global data in the programmer will display a yellow square marker in the top right corner of the attribute cell within the fixture sheet.

**Important:**\
When converting old show files from grandMA3 v1.5 or prior to grandMA3 v1.6 or later the data from the global fixture type object will be migrated to the first patched fixture of the same fixture type that is not already holding selective data.

The global value is determined by the average across all values of attributes within the same activation group:

```
(Value of fixture 1 + Value of fixture 2 + Value of fixture 3 + ... value of fixture n) / Number of used fixtures = Average value
```

The value that is closest to the calculated average value will be the global value. The fixture with this value will then hold the global value. In the case of color, all color attributes are handled together when choosing the global value.

Furthermore, the method to determine the global data across several attributes is now taking all attributes of the same activation group into account. This will result in taking all attributes of the same activation group of one fixture, and not taking the different attributes from different fixtures.

 

Together with the new global data handling, the preset modes for storing or updating were improved:

- Auto: When updating or storing into an existing preset, the preset mode of the preset will be respected. In the case of global preset mode, selective data will be added to the preset when at least one fixture that can use the preset is active with new values. When creating a new preset Auto mode will take the mode defined by the pool and use the rules described here for each mode.
- Selective: The data will be added as selective data for each fixture that has active data in the programmer.
- Global: The data will be added mainly as global data. If there are several fixtures of the same fixture type but with different values, then the global data will be determined by average as described above, and selective data will be added for the other fixtures which have divergent data.
- ForceGlobal: Data will be added as global data, and untouched existing selective data will be discarded within the preset for the fixtures of the same fixture type. ForceGlobal will discard the selective data when updating a preset or when storing with the merge option into an existing preset.
- Universal: Data will be added as global data, and the PresetMode will be set to Universal.

The universal preset gets more versatile and can now use the data from a real fixture with global values when the universal fixture has no data inside the preset. This has the added benefit that you can create your universal presets using a real fixture from your stage, in the case that the universal fixture has these attributes. When calling a universal preset, the software uses global fixture type data first and then uses the data from the universal fixture. When no data exists for the universal fixture the first fixture with global data is used instead.

**Hint:**\
When calling universal color, it will be transformed through the color engine. If you use a 7-color LED to create a color and call that data universal, you will get the similar color on the RGBA fixture.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

When the same fixture type (attributes, their order, and their physical from and physical to values) is used several times within a show file, the patched fixtures of these fixture types can now use the global presets that are only stored for one of these fixture types. Therefore, the new fixture type property Share Global needs to be set to Yes for the fixture types. Share Global is set to Yes by default.

The fixtures of the fixture type that are set to No cannot call global presets that will be created or modified later by using the other fixture type. When switching Share Global to No when there are already global presets for the fixtures of the fixture type that could use data from a different fixture type, the presets will get copied the global value from the original fixture type to the fixture type that has now Share Global set to No.

**Hint:**\
To break up the usage of global presets by fixtures of the other but similar fixture type, the Share Global property needs to be set to No for the fixture type that should not be allowed to use the global presets. Switching Share Global to No for the fixture type of fixtures that hold the global value will not influence the preset call ability of the other fixture types.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

When exchanging the fixture type of a fixture, the data within the global presets will now be converted so that the fixtures with the new fixture type can immediately use these global presets, too.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The update menu and the store preset pop-up have now also PresetMode buttons.\
PresetMode within the update menu is independent of the PresetMode within the store settings.\
PresetMode within the store preset pop-up populates the value of the store settings and can be changed temporarily for only this certain store action. After that it will fall back to the value of the store settings.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The title pool objects of preset pools display now on their upper right corner an S, G, or U depending on the preset mode of their feature group. This preset mode will be mainly taken when storing new presets into that pool by using the preset mode Auto.

---

 

### []()Command Wing Bar

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

The Command Wing Bar window can be opened by tapping More, and then Command Wing Bar within the Add window dialog.\
It provides access to the encoder bar, the first ten executors of the selected WingID, the grand master, and the special executor section of wing 1.

In the command wing bar window settings, it is possible to display or hide the grand master by tapping Show Grand Master. The same procedure is available for the special executor section by tapping Show Master Section. Furthermore, with the settings Display Mode Executors and Display Mode Masters can be decided if the labels or the hardware buttons of the executors should be displayed.

The displayed Page and WingID can be selected via the settings pop-up or the title bar.

The Command Wing Bar can also be displayed in the encoder bar area on onPC systems. Simply tap ![](/img/grandma3/2-4/icon_commandwingbar_15_v1_6-c5bf10.png) in the control bar to display or hide it. Or use the shortcut Alt + W.

---

### []()CleanUp Command

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png)  New in this release

The CleanUp command allows deleting unused (contains no reference) objects in the show file. For example, sequences that are not assigned to an executor. A pop-up asks the user for confirmation to delete the unused objects and it tells the user how many objects will be deleted.

- To delete all unassigned sequences, type:

User name\[Fixture]> Cleanup Sequence Thru

- To delete all unused color presets in the color preset pool, type:

User name\[Fixture]> Cleanup Preset 4.\*

- To delete all images which have no reference, type:

User name\[Fixture]> Cleanup Image 3.1 Thru

---

 

### []()Stomp

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Stomp now knocks in the last used single-step value for the absolute and/or the relative layer of the attribute.\
This can be a value from the programmer or from a playback. If no single-step value is found then it uses the default value.

---

### []()RDM

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

The RDM implementation in grandMA3 supports now more RDM parameters. These are the newly supported RDM parameters:

- PROXIED\_DEVICES, 0x0010
- PROXIED\_DEVICE\_COUNT, 0x0011
- DEVICE\_MODEL\_DESCRIPTION, 0x0080
- LANGUAGE\_CAPABILITIES, 0x00A0
- SOFTWARE\_VERSION\_LABEL, 0x00C0
- BOOT\_SOFTWARE\_VERSION\_ID, 0x00C1
- BOOT\_SOFTWARE\_VERSION\_LABEL, 0x00C2
- SLOT\_INFO, 0x0120
- SLOT\_DESCRIPTION, 0x0121
- DEFAULT\_SLOT\_VALUE, 0x0122
- SENSOR\_DEFINITION, 0x0200
- SENSOR\_VALUE, 0x0201
- DEVICE\_HOURS, 0x400
- LAMP\_HOURS, 0x401
- LAMP\_STRIKES, 0x402
- LAMP\_ON\_MODE, 0x404
- DEVICE\_POWER\_CYCLES, 0x405
- PAN\_TILT\_SWAP, 0x602
- POWER\_STATE, 0x1010

**Important:**\
Not all of these RDM parameters allow the user to set values for them.

 

 

As SENSOR\_DEFINITION and SENSOR\_VALUE are now supported, the RDM Fixtures display the sensors with their values within the RDM Devices Window. To watch the sensors and their values, unfold the desired RDM fixture by tapping ![](/img/grandma3/2-4/triangle_right_15_1-492f3b.png) in front of the RDM fixture.\
For each sensor, an own line will be displayed as child of the RDM fixture. In most cases, the user has to scroll to the right to see the columns Present Value, Lowest, Highest, and Recorded:

- Present Value: The current value of the sensor.
- Lowest: The lowest value the sensor can reach.
- Highest: The highest value the sensor can reach.
- Recorded: The value that was stored by the fixture itself, when RECORD\_SENSORS, 0x0202 was executed.

**Hint:**\
RECORD\_SENSORS needs to be executed by a different RDM controller in order to display a value.

 

grandMA3 can now also deal with RDM proxy devices, such as radio DMX links. The RDM parameters PROXIED\_DEVICES, 0x0010 and PROXIED\_DEVICE\_COUNT, 0x0011 are responsible for this feature. A proxy device, in our case of a radio DMX link, is the transmitting device. This device will also show up in the RDM Devices window. The number within the column Proxied Devices reports how many RDM devices are handled by this device. The receiver of the radio DMX/RDM signal counts also into this number.

**Important:**\
In our tests, we were only able to get RDM devices working that were connected to a corresponding radio DMX receiver device.\
Fixtures that were directly linked to the radio DMX transmitter, because these fixtures have a built-in radio DMX module, were not detected. Also not by other 3rd party RDM controllers.

To learn more about using RDM within the grandMA3 software, please read the [RDM topic](/grandma3/2-4/rdm/).

---

 

### []()Markers

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

A Marker is a virtual fixture, that allows operating (e.g., moving around or rotating) objects such as fixtures, actors, or stage props in the 3D stage environment.

To do so, for each object or group of objects that shall be operated separately an own marker fixture needs to be patched. A fixture type called Marker from the Manufacturer MA Lighting is now part of the fixture library.\
As soon as a Marker fixture is patched, other patched fixtures can be added as children of the Marker.\
After applying these changes to the patch, the Marker fixture can be operated like any other fixture in the show.

At the moment, a marker fixture provides these attributes:

- X, Y, and Z for moving the Marker and all its children together along the corresponding axes.
- Rot X, Rot Y, and Rot Z rotate the Marker and all its children together around the corresponding axes.

These attributes are located within the features XYZ and Rotation within the feature group Position in the encoder bar.

Select the Marker fixture and turn the encoders for the described attributes in order to see the Marker and its children moving around in the 3D window.\
The children of a Marker are always moved around relative to the set up position of the Marker itself.

**Important:**\
A Marker fixture needs to have a DMX address patched in order to be able to see its changes within the 3D, etc.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Together with the implementation of Markers, the input of PSN trackers can be linked to Markers. This allows moving around the Marker and its children via an external tracking system.

To do so, set up the number of Markers you need, add the desired children to them within the grandMA3 software. Then set up the PSN system and configure the [PSN input](/grandma3/2-4/remote_inputs_psn/) within the grandMA3 software. Within the PSN menu, new columns called IDType and ID allows entering the IDType and ID of the Marker fixture that shall be linked to the input of each tracker.\
The column DMX Priority defines at which level of the grandMA3 playback priorities the PSN data shall be processed. This allows overwriting the input of the PSN system by using a sequence with a higher priority if needed.

**Important:**\
The DMX universes the Marker fixtures are patched to which are receiving data from PSN trackers need to be set to the [Merge mode Prio](/grandma3/2-4/patch_dmx_universe/).

---

 

### []()Backup Menu

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved in this release

Show files are now saved with the timestamp of the current session time. The resulting files on the hard drive of the system will be also stamped using the current session time.

 

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) New in this release

At the bottom of the backup menu, an area allows you to enter and read the description of the currently loaded show file. Modifying or entering a description will only be applied to the show file when saving it afterward.\
Pressing Enter while editing the description immediately saves and closes the backup menu. Shift + Enter can be used to add another line.

By enabling History in the title bar of the backup menu, the history of the selected show file will be displayed at the bottom of the backup menu.\
The history gives useful information regarding the dates and time, used software version, the type of the software, the name, time zone, and UTC time when saving the show file.\
A new entry within the history will be entered when the show file will be saved again and one of these criteria has changed: Version, type, name, time zone, or description. The newest entry will be on top of the history list.

The option Enumerate Show File Name when Description Changes in the Settings of the backup menu provides an automatic increase of a 3 digit number, added to the end of the show file name if the description is changed when saving the show.\
If the original show file name is too long to add the number, the command line will return an error. In this case, the former show file name will be used again.

Enumerate is always looking at the last three characters of the show file name. When three numbers are found it increases the number by 1. When 999 is found, it will change the number to 001. 

Enumerating a show file can also be called with the /Enumerate option. To do so, type:

User name\[Fixture]> SaveShow /Enumerate

**Hint:**\
When saving your show file for the first time, add a custom character to the end of your show file name so it's easier to see the enumeration (e.g. ShowName# or ShowName\_v or ShowName-)

---

 

## []()Other Enhancements

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The network menu allows filtering stations by "My Location".

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Reduced show upload time by transferring media objects in the background.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The "Insert New Fixtures" dialog now allows simultaneous access to the grandMA3 Fixture Share and the GDTF Share. Therefore, the GDTF Share tab is renamed to Shares. The column "Source" indicates from which of the two Share sites the fixture originates.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The label process prevents entering system reserved characters when the label pop-up is used. In this case, the title bar of the label dialog turns for about 2s into orange and displays "Character '.' not allowed." Depending on the character the message might be different, as every character that is not allowed but was pressed by the user will be reported within this message.\
When labelling an object by using the label command, the disallowed characters will be removed by the software, and the objects gets a new label with this reduced name:

Labeling group 1 with the desired name "Back.Truss" by using this command, will result in the name "BackTruss" for group 1:

User name\[Fixture]> Label Group 1 "Back.Truss"

In this case, the command line history will report this modification as well:

Not allowed characters in name "Back.Truss" changed to "BackTruss"

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The operation of encoders in physical readout (includes also attributes in natural readout that are set to physical for the natural readout) when having at minimum 2 fixtures of different fixture types selected, improved. In this case, stepping through the selection with Next and Previous now also uses always the smallest physical range to determine the size of an encoder click. In previous versions the size of an encoder click changed between the different fixtures of the different fixture types when using Next and Prev.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Master faders in the executor label now display their temporary value while flashing or blacking them. Furthermore, the background of the fader bar in the executor label turns red while flash or black, when the value of the master fader is different to the value during flash or black.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The playback window has now a setting that allows how many sections of each 5 faders shall be displayed. To change this setting, tap MA in the top left corner of the playback window, then tap #Sections repeatedly until the desired value is set. The value can be set to Auto, 1, 2, or  3. When set to Auto, the playback window decides by its size how many sections will be displayed. This is anyway how it worked in previous versions. When choosing 1, 2, or 3, the first 5, 10, or 15 faders of the selected WingID will be displayed. This happens independently from the size of the playback window.

 

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Tapping ![](/img/grandma3/2-4/icon_power_15_v1-0_1-204153.png) within the control bar opens now the new shutdown menu. It offers to

- ![](/img/grandma3/2-4/icon_power_15_v1-0_1-204153.png): To shutdown the grandMA3 device or to close the grandMA3 onPC software.
- ![](/img/grandma3/2-4/icon_refresh_arrow_15_v1_5_1-8f4052.png): To restart the grandMA3 application.
- ![](/img/grandma3/2-4/icon_padlock_15_v1-0_1-b5dd31.png): To lock the desk.

In addition to this improvement, the Desk Lock button has been removed from the control bar.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The new timecode show setting Ignore Follow allows controlling whether follow cues of sequences should be triggered by the timecode show or by the sequence. When it is off, the follow cues will be triggered by the timecode show.\
When it is on, the sequence will trigger its follow cues. In this case the events within the timecode show for the follow cues will be marked with a prohibition sign on top of the event icon within the timeline view.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Move of executors:

- Moving executors behave now like moving objects within a pool. For executors, each Wing (15 executors) behaves like a pool.
- Moving an executor that is 2 or more wide to a different executor, in a way, that the former executor would be spread across 2 banks (5 executors), the executor will be split into 2 executors, one each on one of the banks. In the past, the executor has been scaled down to only use the executors of the left bank. This works only across the banks of the same wing, and not across wings.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The conversion of channel functions has been improved in the grandMA2 to grandMA3 Show Converter. In the grandMA2 the non-linear physical characteristic of channel functions was described within the physical values of the channel sets. This could cause unexpected behavior of the encoders in natural and physical readout because of the channel function's invalid range of physical values. The conversion has been improved to the extend that converted channel functions now have a valid range of physical values according to their channel sets.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) 3D Window: Additional mesh qualities for the BodyQuality setting were added.

- **None:** No meshes of fixtures are visualized. Nevertheless, environment objects are displayed.
- **Box:** A whole fixture's body is visualized as one box. This box has the dimensions of the fixture.
- **Low:** Every geometry of a fixture is visualized as a box. If one of the fixture's meshes is a default cylinder, this is not changed.
- **Simple:** Fixtures with a common geometrical structure of a moving head (Base - Yoke - Head - Lens with or without Pigtail) are visualized with grandMA3 default meshes. All other fixtures are visualized like in "Low" mode.
- **Standard:** Fixtures with a vertex count above 1 200 are visualized as in "Simple" quality mode. The meshes of fixtures with a vertex count lower than 1 200 are not changed.
- **High:** All fixtures are displayed with their original meshes.

By default, the BodyQuality is set to Standard.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Surfaces has been renamed to Stage Volumes: A stage volume is a defined space within a stage. By default, a volume (Volume 1) always exists, and its size is always the size of the stage.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) The assign menu allows now to lock or unlock the executor by tapping Lock Exec in the title bar. When locking ur unlocking the executor via the lock or unlock command, this button reflects also the correct state.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When an event will be repeated every year, the repeat cell of the event displays now in addition "repeat annually" to indicate this repetition.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When creating a new show, the software will now create a prompt asking the operator now if a new show should really be created.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) When canceling a store operation the next time doing a store operation the store preferences are loaded again. In addition, pressing ESC once when the store options overlay is open, closes now the overlay. Store and Update work now uniformly regarding closing the menus or canceling the operation.

![](/img/grandma3/2-4/icon_plus_v0-9-131aa6.png) Fixtures that are modified by a additive group display now also a marker in their ID type cell within the fixture sheet. The color of the marker is lavender by default, and can be changed in the color theme: Color definition SheetColor.AdditiveMasterActive and color FixtureSheetCell.AdditiveMasterActive.

---

 

## []()What's Changed

- The ListRef button in the Update Window was removed as it is obsolete now.
- The automatic label functionality of cues changed and does not use the commas (,) anymore to separate different presets within the name. It uses now the slash (/) to separate presets within the cue name.
- The first element within the cue list on an executor label shows now always the previous cue of the sequence order, ad not anymore the previous played back cue.
- The fixture sheet has now an additional title bar button for the Prog Only setting.
- The tab Time within the date and time menu got renamed to Session Time. Session Time is the time the grandMA3 session is running at. In addition, the ClockSource System Time within the clock window got renamed to Session Time. The session time can be different compared to your local time.
- With the improvement to presets the universal fixture is now part of Stage 1.
- The Store options overlay was renamed to Store Settings.

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The property "Beam Diameter" of the Beam geometry type was not visualized correctly if a fixture had an iris channel. This bug is fixed. The correct beam diameter is visualized at the origin of the beam, even if a fixture has an iris.                                                            |
| Gobo rotation was visualized with the wrong center of rotation if the position of a gobo wheel was between two slots. This bug is fixed. Gobos are rotating around their own center point now if the gobo wheel is positioned between two slots.                                                      |
| Fixture types with a complex geometrical structure (nested geometry references) were not visualized correctly in all cases. This could cause unexpected behavior of intensity or color of subfixtures. This bug is fixed. Fixture types with nested geometry references are visualized correctly now. |
| Gobos in the 3D window were flashing when changing the selection or changing settings in the 3D window. This bug is fixed. Fixtures with gobos are not flashing any longer when making changes elsewhere in the software or the 3D window.                                                            |
| The visualization in the 3D window did not utilize the RealFade values of the fixture type. This bug is fixed. Values of RealFade are now utilized again.                                                                                                                                             |
| Iris animations like strobe or pulse were visualized with a much too high speed. This bug is fixed. Iris animations are visualized correctly now.                                                                                                                                                     |
| Textures of meshes were not imported correctly if the mesh and the texture were located in a subfolder. This bug is fixed. Textures are now imported correctly, even from a subfolder.                                                                                                                |
| Single Step was switched off when doing a lasso selection in the 3D window. This bug is fixed. A lasso selection in the 3D window will not disable single step.                                                                                                                                       |
| Fixtures with Blade channels did not show proper beams on a Mac onPC running on Apple M1 hardware. This bug is fixed. Blades are visualized correctly on Apple M1 hardware.                                                                                                                           |

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fade in combination with FaderMaster did not obey a specified fade time. This bug is fixed. FaderMaster Page 1.201 at 100 fade 5 is working as expected.                                                                                                                                                                       |
| If several different show files were loaded in a short amount of time, the software could crash. This bug is fixed. Rapid loading of different show files does not crash the software anymore.                                                                                                                                 |
| Export and import of user profiles removed the link to default for properties, and therefore the values were set to the hard default value. This bug is fixed. Properties of user profiles are now keeping their link to the default value when the user profile will be exported and imported.                                |
| The encoder could be stuck for a while at value 255 when being in Dec8 readout and turning the encoder several times without interruption from 0 to 255 and vice versa. This bug is fixed. Encoders should not stick to a value anymore when turning them very fast from one end to the other end and back.                    |
| The fifth encoder in grandMA3 onPC running on Windows was still acting as screen encoder when the screen encoder was switched off. This bug is fixed. The fifth encoder works now always within the function it displays.                                                                                                      |
| Changing the used preset while being in the update mode for a cue changed also the name of the cue. This bug is fixed. Cues labeled by the user won't change their name anymore when using the edit mode for a cue and changing a used preset.                                                                                 |
| When auto start was enabled for a sequence and the master fader of this sequence was set to 100% before starting a timecode show, the first go+ event for this sequence was not triggered by the timecode show. This bug is fixed. All timecode show events should be triggered correctly now.                                 |
| When changing agenda events where the valid duration was not over, yet, were triggered again. This bug is fixed. Agenda events won't be executed again, when their duration is still valid and changes are made to the agenda event.                                                                                           |
| Single Step was always temporarily activated when tapping into any kind of a color picker. This bug is fixed. Only the color picker for attributes activates now temporarily Single Step when tapping into the color picker in order to choose a color.                                                                        |
| Commands with non-existing variables in it were executed in a way that the non-existing variable was ignored. This bug is fixed. Commands with non-existing variables won't be executed anymore. The command line history returns an error in this case.                                                                       |
| Filters did not update their filter results when the properties of fixtures were changed, and these properties were used as a filter criterion. This bug is fixed. Changing fixture properties updates now also the results of filters.                                                                                        |
| It was not possible to store a new executor when the selected page was deleted before. This bug is fixed. After deleting the selected page it is now possible again to store immediately new executors on page 1.                                                                                                              |
| Mode dependencies caused other channels that were dependent to be knocked into the programmer if the active channel function of this channel was changed because of the mode dependency. This bug is fixed. The channel function is changed, but this does not cause the channel to be knocked into the programmer any longer. |
| Copy and paste of cues inserted the cues with their former cue number. This bug is fixed. Copy and paste of cues adjust now the cue number of the pasted cue to fit into the cue numbering at the destination.                                                                                                                 |
| The software could crash when data was imported to the wrong destination. This bug is fixed. The software should not crash anymore when data was imported to the wrong destination.                                                                                                                                            |

### Connections

| Description                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When having 2 consoles in a session with a parallel input of LTC Timecode, the backup console did not take over the LTC smoothly. This bug is fixed. On signal loss, the backup console takes over within half of the defined afterroll time.             |
| In the onPC settings menu, the "MIDI via onPC command wing" button did not work as expected. This bug is fixed. When the button is toggled "on" the MIDI Signal from command wing is used, if toggle "off" the Signal of the selected USB device is used. |
| The target settings in the In/Out menu did not work properly. This bug is fixed. Selecting "Empty" as a target is working again.                                                                                                                          |
| The software could crash when sending an OSC string without specifying an OSC address. This bug is fixed. OSC strings without an address do not crash the software anymore.                                                                               |

### Patch

| Description                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the "Insert New Fixtures" popup, if the DMX sheet was used to directly chose the address, tapping on the address directly was not possible. This bug is fixed. Choosing the desired address directly by tapping is working now.  |
| In the "Insert New Fixtures" popup, if the DMX sheet was used and resized very small, it was not possible to change the size again. This bug is fixed. Resizing the DMX sheet is working as expected.                               |
| Changing the mode master of a patched fixture type could lead to shifting of default values between DMX channels. This bug is fixed. Default values will not be changed any longer when a mode master of a fixture type is changed. |
| Sometimes the Offset value was in the wrong Fixture. This bug is fixed. The Offset value is now in the correct fixture.                                                                                                             |

### Phaser

| Description                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activating the attributes that were running a phaser discarded the values for fade, delay, speed, and phase when a processing unit is part of the session. This bug is fixed. While having processing units in the session the knock-in of attributes does not discard values anymore when they are running a phaser. |
| Changing the speed of a phaser by using the Speed From and Speed To properties within the MAtricks window always restarted the phaser. This bug is fixed. Phasers adjust their speed now flawlessly when changing the speed by using Speed From and Speed To within the MAtricks window.                              |
| Oopsing the stomping of a phaser did not work. This bug is fixed. The stomping of phasers can now be reverted by using Oops.                                                                                                                                                                                          |

### Playback

| Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The sequence setting "HTP" was not working properly. This bug is fixed. The sequence setting "HTP" is working as expected.                                                                                    |
| Sequences with SoftLTP off outputted their values first when moving their master fader. This bug is fixed. Sequences with SoftLTP off output their resulting value now immediately when they will be started. |

### Windows

| Description                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the sequence edit overlay, the auto-scroll option did not work properly. This bug is fixed. Enabled auto-scroll in the sequence edit sheet jumps to the currently edited cue.                                                                                                                                                                                           |
| The sequence sheet did not display individual fade, delay, and duration times correctly. This bug is fixed. The individual times in the sequence sheet are displayed properly now.                                                                                                                                                                                         |
| Saved preferences in the update menu did not include all options. This bug is fixed. Saving and recalling the preferences in the update menu is working as expected.                                                                                                                                                                                                       |
| If multiple encoder bars and layout views were used at the same time, the onPC software could crash. This bug is fixed. Several encoder bars and layout views can be used in parallel.                                                                                                                                                                                     |
| When changing the DMX sheet to Levelbar "Bar", the values were not displayed properly. This bug is fixed. Level bars are displayed properly in the DMX sheet now.                                                                                                                                                                                                          |
| The Trackpad, set to mode Pan/Tilt was not working with physical readout. This bug is fixed. The Trackpad in Pan/Tilt mode also works with physical readout.                                                                                                                                                                                                               |
| The values that were displayed within the fixture sheet for a collapsed grouping fixture could flicker from time to time. This bug is fixed. The values of grouping fixtures do not flicker anymore within the fixture sheet.                                                                                                                                              |
| The HSB Color Picker and the fader page of the color picker did not work for fixture types with subtractive color mixing and only one measurement of the color flags at 100 % insertion. This bug is fixed. The color picker is working for subtractive color mixing with only one measurement defined for a fixture type.                                                 |
| In Agenda setup mode, if the entry "New Agenda Event" was copy and pasted on itself, a loop was created. This bug is fixed. If the first entry is copy and pasted on itself only one more event is created.                                                                                                                                                                |
| The fixture sheet did not display the correct fixtures when leaving the edit mode and the Global mask was enabled. This bug is fixed. After using the edit mode, the fixture sheet redraws properly when using the Global mask.                                                                                                                                            |
| Pie charts of color presets displayed a black pie if a fixture with subtractive color mixing had measured filter data. This bug is fixed. Pie charts of color presets now show the correct color even for a fixture with subtractive color mixing and measured filter data.                                                                                                |
| The Audio In Device pop-up could display (null) instead of the device name or the manufacturer. This bug is fixed. The Audio In Device pop-up displays now "Device x" when the device name is not provided by the device or it displays "Manufacturer unknown" when the manufacturer is not provided by the device.                                                        |
| It could happen that not all feature groups were offered as preset pools within the Add window dialog. This bug is fixed. All feature groups of a show file are now offered to create preset pool windows for.                                                                                                                                                             |
| It was not possible to scroll through the list of cues within the edit sequence window by using the screen encoder when the sequence had not enough cues to get the whole list scrolling on the display. This bug is fixed. It is now always possible to scroll through the list of cues within the edit sequence window by using the screen encoder.                      |
| EditSetting + tapping the area of the selected sequence in the letterbox display opened the sequence setting menu on the letterbox display. This bug is fixed. The sequence settings of the selected sequence will now be opened on display 2 when having EditSetting in the command line and then tapping the area of the selected sequence within the letterbox display. |
| The ViewMode Month of the agenda displayed also the last week of the former month, when the week day of the first day of the month matched up with the set up day in the StartOfWeek setting. This bug is fixed. The ViewMode Month in the agenda window does not display unnecessary whole weeks of the former month anymore.                                             |
| The command line history window and overlay displayed a black background when having the daylight color theme active. This bug is fixed. The command line history window and overlay respect now the colors of the color theme.                                                                                                                                            |
| It was not possible to open the name input popup for a timecode track by using the screen encoder. This bug is fixed. The screen encoder can now be used to open the name input popup for timecode tracks.                                                                                                                                                                 |
| It was not possible to switch between the different feature groups within the Export-tab Import/Export menu when the local area had sheet style enabled. This bug is fixed. The Export-tab of the Import/Export menu allows now to switch between feature groups when sheet style is enabled.                                                                              |
| The Off menu could be moved outside the visible screen area. This bug is fixed. The Off menu cannot be dragged around on the screen anymore.                                                                                                                                                                                                                               |
| The phaser overlay reset its settings every time when it was closed. This bug is fixed. The settings are only reset after a clear.                                                                                                                                                                                                                                         |
| Executor labels displayed the cues of the sequence repeatedly when the off cue would have been used for switching off the sequence, and when the executor label was higher than 1 row. This bug is fixed. High executor labels display now only one set of their cues when the off cue has any time set up.                                                                |
| Calling menus on displays that were not defined for the menus could crash the software. This bug is fixed. Menus won't open anymore on displays that are not defined for the menus.                                                                                                                                                                                        |
| The temporary pool overlays of views and sequences did not use their pool color. This bug is fixed. All temporary pool overlays use now always the defined pool color of their object type.                                                                                                                                                                                |
| The fixture sheet did not display values for attributes in the DMX layer when the values were on their default value. This bug is fixed. The DMX layer in the fixture sheet displays now always the value for each attribute.                                                                                                                                              |

---

 

## []()Appendix

- It is recommended to use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols it is recommended to use a dedicated physical network for each protocol.
- The recommended workflow for executor configurations that are different compared with the default executor configuration is to create a new executor configuration, do the changes in the new configuration and save the changes.
- XML files with exported executor configurations from grandMA3 v1.2 and prior cannot be properly imported to grandMA3 v1.3 or later due to structural changes.
- XML files with exported analog remote setups from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.
- XML files with exported timecode shows from grandMA3 v1.3 and prior cannot be properly imported to grandMA3 v1.4 or later due to structural changes.
- XML files with exported presets from grandMA3 v1.5 and prior cannot be properly imported to grandMA3 v1.6 or later due to structural changes.

---

 

## []()Known Limitations

Exchanging a multi-instance fixture to a single-instance fixture type might not convert presets when the parent fixture has not the attributes.

Software update via network to onPC stations requires confirmation during the install process at the destination system.

When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

When multiple GlobalMasters exist on the network, each having the same session and location name, the station with the higher priority takes over without user input. If all stations have the same priority, then the station with the longest Online Time becomes the GlobalMaster for all stations.

Programmer content is discarded when loading show files from previous versions.

Sound input via Apple Silicon hardware is not implemented, yet.

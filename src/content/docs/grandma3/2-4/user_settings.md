---
title: "User Settings"
description: "Many settings are connected to the User and the User Profile."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/user_settings.html"
scrapedAt: "2026-06-12T21:24:46.430Z"
---
Many settings are connected to the **User** and the **User Profile**.

## User Settings

There are two places in the GUI where the settings can be viewed and edited.

The first place is the Users pool. Editing a pool object opens an editor where the settings can be changed. Learn more about the users pool in the [Create User topic](/grandma3/2-4/user_create/).

The second place is the **User Configuration menu**. Navigate to it using these steps:

1. Press the Menu key.
2. Tap the Settings button.
3. Tap the User Configuration button.

The User Configuration menu can also be opened using this command Menu "UserConfiguration". [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22UserConfiguration%22%20%2FTab%20%22Users%22) 

This opens the list of users in the show. Edit any field to change the setting.

There are some different user settings.

- **Name**:\
  This is the name of the user. This is the login name used with the [LogIn keyword](/grandma3/2-4/keyword_login/).****
- **Scribble**:\
  A user can have a scribble assigned. The scribble is only used in the [User pool](/grandma3/2-4/user_create/).
- **Appearance**:\
  A user can have an appearance. The appearance is used in the user pool and when the station is locked.
- **Note**:\
  A note can be added to the user.
- **Tags**:\
  Tags can be assigned to the user.
- **Password**:\
  This is an optional password that can be set to the user. It needs to be provided when the user is logging in.
- **Profile**:\
  Each user has a User Profile assigned. Read more [below](/grandma3/2-4/user_settings/#h2_989550839).
- **Screen Config**:\
  Different screen configurations can be created. This input field defines the selected screen configuration. The selected screen configuration is called when the user logs in. Learn more in the [Screen Configuration topic](/grandma3/2-4/user_screen_config/).
- **Rights**:\
  There are six different levels of rights. Read more [below](/grandma3/2-4/user_settings/#h2__2113361792).
- **Keyboard**:\
  The on-screen keyboard can have different layouts. This setting can be used to select one of the available layouts.
- **Privacy Policy** (Only in the User Configuration menu):\
  This setting can be toggled between Yes and No. Yes means that this user has agreed to the **Privacy Policy**. The policy can be found in Menu - Settings - Software Update - Privacy Policy.
- **Web Remote Login** (Only in the User Configuration menu):\
  This is information only. It indicates if the user can log in using the web remote.

 

## []()User Profile Settings

The user profiles contain most of the settings relevant to the users. The programmer information, views, selected elements, values, preferences, and much more.

Many of these elements are stored and selected by using the software. Some settings can be set in the **User Profiles** menu.

Navigate to the menu:

1. Press the Menu key.
2. Tap the Settings button.
3. Tap the User Configuration button.
4. Tap the Profiles button on the left menu.

The user profile settings can also be opened using this command Menu "UserConfiguration" /Tab "Profiles". [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22UserConfiguration%22%20%2FTab%20%22Profiles%22) 

Some of these settings can also be changed in relevant places in the software. For instance, the value readout setting can be changed in the [Encoder Bar](/grandma3/2-4/ws_encoder_bar/).

- **Name**:\
  This is the name of the user profile.

- **Note**:\
  This is a note for the user profile.

- **Tags**:\
  Tags can be added to the user profile.

- **DMX Readout**:\
  This is used to change the readout of DMX values. This is useful when editing [fixture types](/grandma3/2-4/fixture_types/).

- **Normal Value**:\
  This is the intensity value used when the [Normal keyword](/grandma3/2-4/keyword_normal/) is used - typically by pressing the [At key](/grandma3/2-4/key_at/) twice. It is a DMX value, so the DMX readout setting affects how to input a value in this field.

- **Wheel Resolution**:\
  This can be used to change the resolution of the wheels on the consoles. The options are: Coarse, Normal, and Fine.

- **Wheel Mode**:\
  This setting changes how the wheels work. Read more [below](/grandma3/2-4/user_settings/#h2_1355706332).

- **Knob UI Style**:\
  This defines how on-screen rotating knobs can be adjusted. There are three modes:

  - **None**: This disables using gestures to adjust the values of knobs.
  - **Rotate**: Change the value by rotating around the encoder or knob.
  - **Drag**: This can open a special pop-up that can be used to edit the value. Read more in the [Gestures topic](/grandma3/2-4/ws_gestures/). 

- **Encoder UI Style**:\
  This defines how on-screen encoders can be adjusted. There are two modes:

  - **None**: This disables using gestures to adjust the values of encoders. 
  - **Rotate**: Change the value by rotating around the encoder or knob.
  - **Drag**: This can open a special pop-up that can be used to edit the value. Read more in the [Gestures topic](/grandma3/2-4/ws_gestures/).

- **Precise Edit**:\
  This function is used when editing values in sheets. It can be difficult to hit a field precisely in a sheet with fingers. Turning this Off makes it easier to select a field without accidentally creating a new selection. Learn more about this in the [Gesture topic](/grandma3/2-4/ws_gestures/).

- **Screen Encoder**:\
  When this option is enabled, the rightmost dual encoder becomes a screen encoder. Turning the inner encoder moves the focus in a vertical direction while the outer encoder scrolls in a horizontal direction. To create a lasso selection in a grid, like in the patch menu, press, hold and turning the inner encoder. Press and release the inner encoder or the dual encoder key to edit the currently focussed object.\
  The screen encoder label in the encoder also displays which display the encoder is currently active. This option is enabled by default.

- **Time Key Target**:\
  The [Time key](/grandma3/2-4/key_time/) can have two different targets: Cue or Fixture. This defines if the key defaults to keywords relating to cue timing or fixture layers.

- **Encoder Bar Type**:\
  This setting can be useful in grandMA3 onPC or the grandMA3 compact consoles. It changes the look of the Encoder Toolbar at the bottom of screen 1. See also the [User1](/grandma3/2-4/keyword_user1/) and [User2](/grandma3/2-4/keyword_user2/) keywords.

  - **Default**: The standard Encoder Bar is displayed.
  - **Exec**: The Executor Bar is displayed with labels for the executors.
  - **Xkeys**: The labels for the Xkeys are displayed.

- **TCSlot**:\
  This displays the currently selected timecode slot. Read more in the [What are Timecode Slots](/grandma3/2-4/timecode_slots/) topic.

- **Value Readout**:\
  This is the default value readout. Many sheets can be set to show a readout, which can be a specific readout type or follow this default type. This setting can be changed in the [Encoder Bar](/grandma3/2-4/ws_encoder_bar/).

- **Speed Readout**:\
  This is the default speed readout. The options are Hertz, BPM, and Seconds. Speed is used in [Phasers](/grandma3/2-4/phaser/).

- **Preset Readout**:\
  This changes the way presets are displayed in Fixture and Sequence Sheets. The preset can be displayed with a combination of three elements:

  - **ID**: The ID number of the preset.
  - **Name**: The name of the preset.
  - **Value**: The values in the preset.

- **Help Popup Zoom Factor**:\
  This is the default zoom factor in the help pop-up.

- **Overlay Fade**:\
  This time sets a fade time used by pop-ups and menus in the user interface. The default time is 250 ms.

- **Time Readout**:\
  This is the default time readout for the user profile. Read more about the readout [below](/grandma3/2-4/user_settings/#time_readout).

- **Frame Readout**:\
  This is the default frame readout for the user profile. Read more about the readout [below](/grandma3/2-4/user_settings/#frame_readout).

- **Color Readout**:\
  This is the default color readout. This default is used in the [encoder toolbar](/grandma3/2-4/ws_eb_encoder_toolbar/) and most sheets - unless a different readout is selected for the sheet.

- **Oops Views**:\
  This setting toggles if view operations are oopsable. **Create Oops** needs to be enabled for this function to work.

- **Oops Programmer**:\
  This setting toggles if programmer operations are oopsable. **Create Oops** needs to be enabled for this function to work.

- **Oops Selection**:\
  This setting toggles if selection operations are oopsable. **Create Oops** needs to be enabled for this function to work.

- **Create Oops**:\
  This setting toggles if the Oops function in general is turned On or Off. "Yes" means that the Oops function is On.

- **Oops Confirmation**:

  - **Always**: All oops actions need confirmation.

  - **Main**: This will require a confirmation for the following actions:

    - Create
    - Delete
    - Exchange
    - File actions while loading from a file.
    - Insert
    - Layout
    - Move
    - Remove

  - **Never**: Actions are oopsed without confirmation.

- **Mirror Special Executor Pages**:\
  This setting is for the custom section of the [grandMA3 extension](/grandma3/2-4/do_extension/). If the setting is "Yes" then the extension has the same assignment as the custom section of the station the extension is connected to. If the setting is "No", then each extension can have its own assignments in the custom section. grandMA3 extensions with the same WingID are always mirrored - they are essentially defined as the same. Learn more about connecting grandMA3 extensions in the [Connect grandMA3 extension topic](/grandma3/2-4/fs_connect_extension/).

- **Show Appearance In Cue Input**:\
  This setting is used to define if the cue appearances are shown in pop-ups where cues can be selected. For instance, the pop-ups that appear using the [Goto](/grandma3/2-4/keyword_goto/) and [Load](/grandma3/2-4/keyword_load/) commands without a specified target.

- **Show Settings In Editors**:\
  Toggling this shows or hides the settings in some editors. This setting is also in the title bar of the editors, where this can be toggled.

- **Single Digit Input**:\
  If this is set to "Yes", then all input integer dimmer values below 10 are multiplied by 10. The following rules apply:

  - Whole numbers from 1 to 9 are applied as values 10, 20, 30, 40, 50, 60, 70, 80, or 90.
  - Digits with decimal places, for example, 1.5, are deemed as 1.5.
  - When specifying any attribute in a command (Attribute "Dimmer" ...), single digit input is not applied.
  - When using the At command without any additional attributes being specified, the value is taken by the natural readout of the dimmer of the user profile.

- **Resolve Executor Assignments**:\
  This setting is used in the [Command Editor](/grandma3/2-4/macro_create/). When it is "Yes" and a command is edited by pressing executor buttons, then the handle of the object is used instead of the reference to the executor.

- **Preview Variables**:\
  This setting changes how variables are previewed in the [Command Editor](/grandma3/2-4/macro_create/). When this is "Yes", the command preview displays the specified variable's content. This only works if the variable already exists at that time.

- **Create Command Handle**:\
  When this is set to "Yes", then **Create Handle** is active by default in the **Edit Command pop-up**. Learn more in the [Command Editor](/grandma3/2-4/command-editor/).

- **Show Connectors**:\
  This setting shows or hides the Connector image pop-up. Learn more about the Connector image in the [Output Configuration topic](/grandma3/2-4/dmx_port_config/).

- **DMX Tester Address Mode**:\
  The following settings relate to the [DMX Tester](/grandma3/2-4/patch_dmx_sheet/#DMX_tester).

  - **Uni**: This splits the DMX address into universes and universe addresses.
  - **Abs**: This shows the DMX address as an absolute DMX address.

- **DMX Tester Retain Mode**:\
  Toggles the retained mode in the DMX tester.

- **DMX Tester Mode**:

  - **All**: All DMX addresses are available for testing.
  - **Patched**: Only patched addresses can be tested.
  - **Unpatched**: Only unpatched addresses can be tested.

- **DMX Tester Test Value**:\
  This is the test values used by the DMX tester.

- **Move Grid Cursor**:\
  This is the same setting as the one available in the **Selection Grid** window. Learn more in the [Selection Grid Window topic](/grandma3/2-4/operate_selection/).

- **KnockIn MIB**:\
  Learn details about this feature in the [Move In Black topic](/grandma3/2-4/cue_mib/).

  - **Off**: The feature is not active and will not knock in any attribute values.
  - **Post**: When pre-positioned fixtures (MIB state) are selected and the dimmer attribute is activated above 0, all the pre-positioned values of the selected fixtures are activated in the programmer.

## []()User Attribute Preferences

From the profile setting, the **User Attribute Preferences** can be accessed by tapping Edit Encoder Bar.

This is used to set the user profiles preferred readout type for the natural readout. It also has different resolutions and encoder press resolution multipliers.

Resolution multipliers define the factor by which an encoder changes a value when the encoder is pressed or, in the case of the dual encoders, the difference between the inner and outer ring.

At the top, there are some settings:

- **Time Layer Resolution**:\
  Sets the encoder resolution for the time-related layers.
- **Phase Layer Resolution**:\
  Sets the encoder resolution for the phaser-related layers.
- **Dual Encoder Factor**:\
  This defines the multiplier the outer encoder ring uses in relation to the inner encoder ring.
- **Dual Encoder Press Factor**:\
  This defines the multiplier for the outer encoder ring when the dual encoder key is pressed while turning the outer encoder ring.
- **Link Resolution**:\
  This setting defines how the encoder resolution is linked between features. The options are **Single** and **Feature Group**. Learn more about this setting in the [Encoder Toolbar topic](/grandma3/2-4/ws_eb_encoder_toolbar/).

The rest of the pop-up lists all the attributes in rows.

Three different columns with values can be changed for each attribute:

- **Natural Readout**:\
  The Natural readout allows defining the desired readout type per attribute. For instance, dimmer values are best displayed in percentage readout. In contrast, pan or tilt values are better readable using the physical readout, which displays the pan and tilt values as degrees. This setting selects the desired readout when Natural is selected in sheets and encoders.\
  The user-defined readout has a higher priority than the readout defined for the attribute. The user-defined readout can be linked to the default (from the attribute definition). This option is called Default, and the actual readout is shown in angle brackets.
- **Encoder Resolution**:\
  The encoder resolution defines how big an attribute value change will be when turning a dual encoder by 1 click. This setting can also be changed by pressing MA and tapping the channel function area in the encoder toolbar. Learn how in the [Encoder Resolution topic](/grandma3/2-4/operate_encoder_resolution_multiplier/).
- **Encoder Press Factor**:\
  This multiplier is used when the inner encoder is pressed and turned for this attribute.
- **Ignore Channel Functions**:\
  When this is set to "Yes", the Channel Sets area displays the channel sets of all channel functions at the same time

Learn more about the different resolutions available in the [Encoder Resolution topic](/grandma3/2-4/operate_encoder_resolution_multiplier/).

---

## []()Wheel Mode

There are four different level wheel modes:

**Additive**:\
Additive keeps the difference between dimmer values until they reach 0% or 100%, using the level wheel. After 0% or 100 % is reached, the values will be leveled out.

Example:\
Fixture 1 has a value of 50, and fixture 2 is at 60. When the level wheel is used to take them both up to 100 and then back down, they both go down from 100 at the same time and at the same level.

**Incremental:**\
Incremental would always keep the difference between the dimmer values, even if you reached 0% or 100% by using the dimmer wheel.

Example:\
Fixture 1 has a value of 50, and fixture 2 is at 60. When the level wheel is used to take them both up to 100 and then back down, fixture 1 will start coming down first, and then fixture 2 will follow when fixture 1 is at 90.

**Prop.+** (Proportional positive):\
When using the level wheel to turn up the dimmer values, the difference in the dimmer values will **decrease**. Turning up to 100% will make all channels reach 100% at the same time.

**Prop.-** (Proportional negative):\
When using the level wheel to turn up the dimmer values, the difference in the dimmer values will **increase**. Turning down the values will make all channels reach 0% at the same time.

## []()User Rights

There are seven different levels of user rights in the system. They are a user setting - read more above.

![](/img/grandma3/2-4/popup_select-rights_v1-7-116999.png)

_Select Rights pop-up is used to select one of the rights levels_

The settings are:

- **Admin**:\
  This is the right to change everything in the console, system, and show.
- **Setup**:\
  This will limit access to some of the elements in the console. There are other console settings that can be accessed.
- **Program**:\
  At this level, the user cannot make major changes to the patch. It only gives access to the "Live Patch". Most programming operations can be done.
- **Presets**:\
  This level allows for updating existing presets. However, the user cannot edit the cue content.
- **Playback**:\
  This level allows playback and running a programmed show. But the user cannot store anything.
- **View**:\
  With this user right, it is not allowed to use a programmer. The user is allowed to call views and log in as a different user.
- **None**:\
   The user is only allowed to log in as a different user.

## []()Time and Frame Readout

The applied values are used in most places the time is displayed.

|                                            |                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                |
|                                            | The Readout can be changed for individual sheets in the [window settings](/grandma3/2-4/wvm_settings/).  |

There is a hierarchy of the readout/format settings. The default is set in the user profile. If this default is changed in a window, then the window setting is used.

Timecode is an example of an area with many layers in the hierarchy. Read more about the timecode in the [Timecode section](/grandma3/2-4/timecode/).

|                                            |                                                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                        |
|                                            | The user profile defined time readout is used in the encoder bar even if the readout for an, for instance, fixture sheet is changed separately.  |

The timing calculator value indicator is aligned with the preselected frame readout.

To provide better optical representation, the trailing zeros from frames or seconds are always suppressed. When the frame readout is set to a frame unit, the times will always display trailing zeros.

To easily distinguish between fractions of a second and frames, fractions of a second are separated from second using a dot (.), while frames are separated from seconds using a colon (:).

The time options are:

- **10d11h23m45**:\
  The time is separated into days, hours, minutes, and seconds using letters as separators.
- **251h23m45**:\
  This is separated into hours, minutes, and seconds using letters as separators. The hour number can become more than 24 if time is more than a day.
- **10.11:23:45**:\
  The time is separated into days, hours, minutes, and seconds using a dot and colons as separators.
- **251:23:45**:\
  This is separated into hours, minutes, and seconds using colons as separators. The hour number can become more than 24 if time is more than a day.

## []()

The frame options are:

- **Seconds**
- **24 fps**
- **25 fps**
- **30 fps**
- **60 fps**

|                                            |                                                                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                           |
|                                            | If frame readouts (24, 25, 30, 60 fps) are used, fractions are separated by a colon, and fractions of seconds are divided by dots.  |

Fps means frames per second.

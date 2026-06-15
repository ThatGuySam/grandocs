---
title: "Release Notes 1.1"
description: "The latest release of grandMA3 version 1.1.3.2 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find li"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/key_rn_v1_1.html"
scrapedAt: "2026-06-15T18:26:00.966Z"
pagefind: false
---
- [Bugfix Version 1.1.4.2](/grandma3/2-3/key_rn_v1_1/#h2__1590821963)

  - [What's Changed](/grandma3/2-3/key_rn_v1_1/#h2_563643534)
  - [Fixed Bugs](/grandma3/2-3/key_rn_v1_1/#h2__1624482491)

- [grandMA3 Version 1.1.3.2](/grandma3/2-3/key_rn_v1_1/#h2__488082198)

  - [Features](/grandma3/2-3/key_rn_v1_1/#h2_727740091)

    - [Network Software Update](/grandma3/2-3/key_rn_v1_1/#h3_799040378)
    - [Park](/grandma3/2-3/key_rn_v1_1/#h3__1516408206)
    - [Layout](/grandma3/2-3/key_rn_v1_1/#h3__2084382304)
    - [Cue Only](/grandma3/2-3/key_rn_v1_1/#h3__1071679005)
    - [Tracking Distance](/grandma3/2-3/key_rn_v1_1/#h3__311019666)
    - [UI Scaling](/grandma3/2-3/key_rn_v1_1/#h3_1763414465)
    - [Shortcuts](/grandma3/2-3/key_rn_v1_1/#h3__675591373)
    - [3D](/grandma3/2-3/key_rn_v1_1/#h3__1137860005)
    - [Output Configuration](/grandma3/2-3/key_rn_v1_1/#h3__1806759397)
    - [Web Remote](/grandma3/2-3/key_rn_v1_1/#h3__1621231930)
    - [Presets](/grandma3/2-3/key_rn_v1_1/#h3_956339510)
    - [grandMA3 Extension](/grandma3/2-3/key_rn_v1_1/#h3_545259682)

  - [Other Enhancements](/grandma3/2-3/key_rn_v1_1/#h2_1198082799)

  - [What's Changed](/grandma3/2-3/key_rn_v1_1/#h2_279488008)

  - [Fixed Bugs](/grandma3/2-3/key_rn_v1_1/#h2_1272181069)

- [Appendix](/grandma3/2-3/key_rn_v1_1/#h2__1835053169)

- [Known Limitations](/grandma3/2-3/key_rn_v1_1/#h2__1852571500)

 

## []()

---

## Bugfix Version 1.1.4.2

## []()What's Changed

- The maximum allowed time for any cue timing is now set to 14 days.

## []()

---

## Fixed Bugs

### Command Line and Macro

| Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Oopsing the creation of a cue part crashed the console. This bug is fixed. Reverting the creation of a cue part does not crash the console anymore.                                                                                                    |
| Importing a user profile discarded the scroll positions of pools in the stored views. This bug is fixed. Import and export of user profiles restore now the saved scroll positions in pools.                                                           |
| It was not possible to oops the creation of a time range within a timecode show. This bug is fixed. It is now possible to oops the creation of a time range.                                                                                           |
| The timecode settings menu did not always open on every attempt to open it. This bug is fixed. The timecode settings menu should now always open.                                                                                                      |
| It was possible to delete the fonts of the UI. This bug is fixed. It is not possible to delete the fonts anymore.                                                                                                                                      |
| If you turned an attribute encoder and the program time was enabled at the same time, the attribute faded using the program time. This bug is fixed. Program time is not applied when turning attribute encoders.                                      |
| Layout encoder bar did not respect subselections when modifying layout elements. This bug is fixed. Going through a fixture selection using Next and Prev now only modifies the subselected fixtures upon turning encoders in the layout encoder bar.  |
| An already executed keyboard shortcut could return to the command line again. This bug is fixed. Keyboard shortcuts do not return to the command line again.                                                                                           |

### Connections

| Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The internal wings of a Compact or Compact XT console did not always initialize properly when doing a restart. This bug is fixed. The internal wings of Compact and Compact XT consoles now always connect to the system.                        |
| Selecting the own console in the network menu and tapping Join resulted in a freeze of the station. This bug is fixed. Trying to join the very same console does not freeze the console anymore.                                                 |
| The timecode generator did only work when the station had the network enabled. This bug is fixed. The timecode generator works now also in standalone mode.                                                                                      |
| witching the timecode slot for an incoming Art-Net timecode routed the timecode signal to the old and the new slot. This bug is fixed. When switching the timecode slot for an incoming Art-Net timecode the time will run only on the new slot. |
| A network session created too many negative acknowledgments messages in the system monitor although there were no NACKs. This bug is fixed. The system monitor displays now only NACKs when they are really occur.                               |
| It was not possible to connect to the world server. This bug is fixed. grandMA3 stations connect now again to the world server when it is available.                                                                                             |

### Playback

| Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Loading show files from v1.0 did not display always all tracking values. This bug is fixed. Show files stored with v1.0 are now restoring their tracking values correctly when loading the show with v1.1.4.2 for the first time. |

### Windows

| Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scrolling around several times in an unfolded fixture sheet could display single attributes at the wrong fixtures. This bug is fixed. Scrolling around in a fixture sheet displays the attributes at the correct fixtures. |
| The clock window displayed Sytem Clock on Clock Source. This bug is fixed. Clock Source displays System Clock when the internal clock is displayed.                                                                        |
| Locking the Position in the layout settings did not disable the scroll bars. This bug is fixed. The scroll bars are disabled if "lock position" is applied.                                                                |
| Scaling or moving the visible canvas area of a layout was not transmitted within a session to other stations. This bug is fixed. Changes in the layout window are now correctly transmitted in the session.                |
| Label of the layout encoder displayed Position/Rotation. This bug is fixed. As layout elements can only be positioned and not rotated at the moment, the label is changed to Position.                                     |

---

 

## []()grandMA3 Version 1.1.3.2

## []()Features

The latest release of grandMA3 version 1.1.3.2 rolls out several enhancements that enrich your lighting experience. Read on for a quick introduction and find links for more information.

---

### []()Network Software Update

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

**Restriction:**\
Only devices running grandMA3 software v1.0.0.3 or higher can be updated via the Network Software Update feature.

The Network Software Update is located in Menu - Settings - Software Update.

In order to update onPC stations, the installer needs an XML file for the package description. Therefore, both files are bundled in a zip file container.

**Restriction:**\
Mac systems receive and launch the installer. However, you have to enter the user password in order to install the new software version.\
After the installation finished, launch the grandMA3 onPC application.

There are separate packages for grandMA3 hardware (consoles, RPUs, Processing Units and xPort nodes), grandMA3 onPC Windows and grandMA3 onPC macOS available.\
All of these packages can be sent to all of the different types of stations. This allows to update the target station with the correct package later even if the source system cannot install the file itself. For example sending all packages to an grandMA3 onPC Windows makes it possible for this grandMA3 onPC station to update all other devices that are running grandMA3 software later.

Copy the update files onto an USB drive, to be able to update other stations from one grandMA3 station:

- grandma3\_stick\_vx.y.z.a.zip: Decompress the zip file and copy all folders ("ma" and "EFI") with all its content and all files ("update.scr") to the root of a USB drive. For more information read [Update grandMA3 consoles](/grandma3/2-3/update_consoles/).
- grandma3\_onPC\_win\_vx.y.z.a.zip: Decompress the zip file. A folder called "ma" will be created. Copy this folder to the root of your USB drive.
- grandMA3\_onPC\_mac\_vx.y.z.a.zip: Decompress the zip file. A folder called "ma" will be created. Copy this folder to the root of your USB drive.

Plug this USB drive to your onPC computer or console and choose the USB drive in the pop-up when tapping Choose update file. Choose also the software version and host system you want to update by selecting the corresponding xml file in the pop-up.\
To copy the files to the hard drive of the station, tap Import selected update. On onPC stations, the files will be copied to C:\ProgramData\MALightingTechnology\installation\_packages on Windows stations or to \~/MALightingTechnology/installation\_packages.

When an update file is selected, the stations that are to be updated can be selected in the grid of stations within the Software Update menu. Tap Update devices.\
The files will be send to the destinations. After the stations received all files, they will reboot in order to install the update.\
It is possible to hide or display different stations by selectiong a Filter in the title bar of the software update menu.All: Displays all stations in the network.

- My Session: Displays all stations that are member of the current session.
- Not My Session: Displays all devices that are not part of the current session.
- Wrong Version: Displays all stations in the network that have not the same software version as the station you are working on.

**Hint:**\
Some zip applications do not unzip all files correctly. Files like ma\grandMA3\_onPC\_v.x.y.z.a.zip cannot be used correctly by the software. In this case use a different zip software then.

---

### []()Park

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Parking fixtures allows preventing DMX channels of fixtures to change their value accidentally.

The syntax to park fixture 1 with all its attributes, type:

User name\[Fixture]> Park Fixture 1

To park the current selection, type:

User name\[Fixture]> Park

It is also possible to enter Park into the command line and tap a cell in the fixture sheet to park a certain attribute.

To unpark fixtures and/or attributes the keyword **Unpark** can be used in the same way as the keyword **Park**.

To enter Park into the command line using keys, press Pause twice.\
Enter Unpark into the command line using keys with pressing  Go+ twice.

**Important:**\
When parking a fixture and/or attribute the corresponding DMX channel will be parked.

It is also possible to park a fixture at a certain value:

User name\[Fixture]> Park Fixture 1 At 50

**Hint:**\
The command Park Fixture At will park all DMX channels of the fixture to the set value.

To park only DMX channels for a certain FeatureGroup or Attribute, the FeatureGroup/Attribute can be specified with the If-Appendix:

User name\[Fixture]> Park Fixture 1 At 50 If FeatureGroup 1

It is also possible to park a DMX universe:

User name\[Fixture]> Park DMXUniverse 2

The desired universe can also be specified by tapping a universe in the universe pool after entering **Park** or **Unpark** in the command line.

To park DMX channel 20 on the first universe, type:

 User name\[Fixture]> Park DMXUniverse 1.20

The desired DMX channel can also be specified by tapping a channel in the DMX sheet after entering **Park** or **Unpark** in the command line.

If there are parked channels in a universe, this will be indicated by a blue **P** icon in the universe pool.

Parked Fixtures and Attributes are also marked in the Fixture sheet via a blue marker.

---

 

### []()Layout

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

It is now possible to select several elements while pressing Ctrl on the internal keyboard.

When being in the setup mode of a layout, the selection is synced with the selection in the programmer.\
The former selection is also discarded when no values were changed and the new selection is carried out in the layout window that is set to setup mode. This is the main difference to the normal selection when only working in the programmer.

The layout /layout window can be locked with 2 different types of lock:

- Lock Position: A layout window can be set to a position lock. This will lock the layout area of this very special layout window so that the visible layout area cannot be dragged anymore. Nevertheless, it is still possible to move single layout elements within the visible area.\
  To enable the position lock of a layout window, tap MA in the top left corner of the layout window and tap Lock Position in the context menu.\
  When Lock Position is active, Fit Type and Zoom to Fit in the title bar are grayed out.\
  Other layout windows that may be open at the same time are unaffected from this setting. 

- Lock Layout: This lock is set per layout pool element and locks the layout against changes itself. With this lock it is not possible anymore to edit a layout with its elements. Nevertheless, it is still possible to move the visible area of a layout or to do fixture selections, etc. within the layout.\
  When a layout is locked,  Mode in the title bar is grayed out.\
  There are several ways to lock a layout:

- User name\[Fixture]> Lock Layout x

- Long press/right-click on Layout in the title bar of a layout window, and then tap the padlock icon in the title bar of the layout editor.

In the Layouts, the encoder bar uses the same arrangement tools as the 3D encoder bar when in setup mode.

**Hint:**\
The Line mode in the arrangement tool places the layout elements around the origin of the layout, while grid and circle mode place the layout elements around the center of the current selection.

**Restriction:**\
Assigned default actions and layout element actions are reset to factory default when loading a show file from v1.0.

**Restriction:**\
The maximum amount of layout elements is set to 10,000 elements.

**Important:**\
It is no longer possible to assign the same fixture more than once in a layout. A message box will pop-up if you try to do so, and cancel the operation for this fixture.

---

### []()Cue Only

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Cue Only is a store option for cues. When storing into a cue with the Cue Only, the tracked values will be blocked in the next cue or cue part to preserve the previous look on stage. The actual values of the programmer will only be stored in the target cue or the cue part.

Cue Only is available for several workflows:

- As command line option /CueOnly or /CO:

User name\[Fixture]> Store Cue 5 /CueOnly

Will store the actual programmer content as cue only into cue 5 of the selected sequence.

- In the store options: To open the store options, press and hold Store for at least 2 seconds. To toggle the Cue Only option, tap CueOnly.
- In the Store Cue pop-up: When storing onto an existing cue, the Store Cue pop-up will appear and ask whether to Overwrite, Merge, Remove, Release or Cancel the current store operation. It is also possible to decide if the cue is to be stored with active cue only within the pop-up. Remove and Release can be used for Cue Only. The pop-up only appears if the desired cue is not the last one in the sequence.

When storing using Cue Only, and new cue part needs to be created for the blocked values created by Cue Only, the cue part will be labeled Cue Only.\
When storing Cue Only, the grandMA3 software decides, on the basis of the 3 following rules, in which cue part it will block the original values:

1. The default cue part for static values is cue part 0.
2. If the next cue already contains a part that has the same name as the cue part the original value is coming from, the blocked value will be used in this part.
3. If the cue already contains attributes of the same feature group, the previous values will be blocked in this cue.

If none of the rules turn out to be true for phaser values, a new cue part will be created where the previous values will be blocked.

---

### []()Tracking Distance

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

With the new cue part option Tracking Distance (TD), it is possible to dynamically return to previously tracked values.

The tracking distance can be set a relative positive offset of cues or set to an absolute specific cue.

Example 1:

|       | Fixture 1 Dim | TD  |
| ----- | ------------- | --- |
| Cue 1 | **100%**      |     |
| Cue 2 | _100%_        |     |
| Cue 3 | **50%**       | Δ+2 |
| Cue 4 | _50%_         |     |
| Cue 5 | _50%_         |     |
| Cue 6 | _100%_        |     |
| Cue 7 | _100%_        |     |
| Cue 8 | _100%_        |     |

In this example, the values 100% in cue 1, and 50% in cue 3 are stored (**blocked**) values. All other values are _tracked _values. If you set the tracking distance to Δ+2 (delta +2), the 50% will track all following cues from the current cue number plus 2. The value in cue 1 returns in cue 6.\
When setting the tracking distance to Δ+2.4 it would include all cues until cue 5.4.

Example 2:

|       | Fixture 1 Dim | TD |
| ----- | ------------- | -- |
| Cue 1 | **100%**      |    |
| Cue 2 | _100%_        |    |
| Cue 3 | **50%**       | 7  |
| Cue 4 | _50%_         |    |
| Cue 5 | _50%_         |    |
| Cue 6 | _50%_         |    |
| Cue 7 | _50%_         |    |
| Cue 8 | _100%_        |    |

In this example, the values 100% in cue 1, and 50% cue 3 are stored (**blocked**) values. All other values are _tracked _values. If you set the tracking distance to cue 7, the 50% will track from cue 3 to cue 7. The value in cue 1 returns in cue 8.

If you change the value in cue 1 afterwards, the change will affect the tracking in the cues following the cues with tracking distance.

The tracking distance of a cue is only applied to the stored values of the cue.\
It is also possible to embed or overlap a range of cues using tracking distance inside an existing tracking distance.

The tracking sheet displays the tracked values within a tracking distance and returns to the former tracking values at the end of a tracking distance. This is indicated by a white vertical line on the left side of the affected value cells. In addition, the end of the tracking distance will be marked with a white horizontal line covering the left part of the bottom border.

---

### []()UI Scaling

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

​​UI Scaling for high dpi monitors can be accessed through the Configure Display dialog.

The Scale value is located in Menu - Display  - Configure Display.

**Hint:**\
Access the Scale settings also via the Add Window function followed by tapping Configure in the upper right corner.

---

 

### []() Shortcuts

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

**Keyboard Shortcuts:**

Keyboard shortcuts are implemented. They allow fast operation of the console and onPCs.\
To activate the keyboard shortcuts, press F10 or tap ShCuts on the right of the command line.

Keyboard Shortcuts are part of the UserProfile. This makes it possible for every user/user profile to use their own shortcut definitons within a show file.\
To modify the shortcut definitions for the current user go to Menu - Preferences and Timing - Edit Keyboard Shortcuts, or right-click/long-press ShCuts on the right of the command line.

In the Edit Shortcuts menu it is possible to define shortcuts for each keycode/executor.\
When entering a shortcut that is already in use, a pop-up will warn the user.\
As Enter can also be used as a shortcut, it is not possible to close the Edit Keyboard Shortcut pop-up with Enter.

- To confirm the shortcut, tap Ok.
- To clear the shortcut, tap None.
- To cancel the edit, tap X.

**Hint:** \
The Shift keys are always bound to the MA keys. 

When shortcuts are enabled, the Playback and Command Controls overlay will display the shortcuts for each button below the button label with a smaller font size. 

The shortcuts symbol at the right end of the command line turns yellow when the shortcuts are activated. In certain overlays and pop-ups where the shortcuts are not relevant, they are switched off and back on automatically. The shortcut symbol turns red.

The shortcut color in the Playback and Command Controls overlay and the "automated switched off" color can be set in the color theme.

There is a new keyword called KeyboardShortcut. KeyboardShortcut keyword can edit and list the keyboard shortcuts. To modify the keyboard shortcuts, use the [Set](/grandma3/2-3/keyword_set/) keyword.

These shortcuts are available on all OS through several input methods:

**Desk lock:**

- Keyboard

  - F9 
  - Pause 

- Key
  - MA + MA + Pause

- Button
  - Lock

**Toggle keyboard shortcuts:**

- Keyboard
  - F10
- Button
  - ShCuts

**Print screen:**

- Keyboard

  - F11
  - Print

**Reload UI (If the color theme is set to unreadable values):**

- Key
  - MA + MA + Clear

---

 

### []()3D

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

Fixtures can be hidden in the 3D window. Find the related flag per fixture in the Patch and the Live Patch. It is called "3D Visible". If it is set to "Yes" the fixture is displayed in the 3D window. Default: "Yes"

Fixtures can be excluded from the rope selection in the 3D window. Find the related flag per fixture in the Patch and the Live Patch. It is called "3D Selectable". If it is set to "Yes" the fixture can be selected in the 3D window using the rope selection. Default: "Yes".

---

### []()Output Configuration

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

The Output Configuration has now different view modes. The title bar button Columns can be set to one of these values:

- Condensed (default)
  - Displays a reduced view of the XLR ports and all other essential properties like SMPTE Mode, SMPTE TC, Midi TC, Analog Start.
- XLR only
  - Only displays the XLR ports.
- Full
  - Displays the full data of the output configuration.

​​All 3 modes display essential information such as name, type, and IP.

The Output Configuration will only display as many physical XLR ports as the device has. At the moment only the universe of an XLR port can be changed when in condensed mode or XLR mode. To change the mode or merge settings, enter full mode.

The universe objects in the universe pool now also display the colors of the output configuration and the DMX protocols:

- If any XLR connector is used in a universe, the universe pool object will display the XLR 5pin symbol. The color of the symbol stands either for:

  - All XLRs that are used as output: dark green;
  - All XLRs that are used as RDM output: jade;
  - All XLRs that are used as input: orange;
  - A mix of output, RDM output and/or input: cyan.

- If input is created using DMX protocols, the corresponding DMX protocol will flash up on the universe pool object in the color of the input.

- Output via DMX protocols will be displayed per universe pool object with an A or S for Art-Net or sACN. On the station that is IdleMaster or GlobaMaster the letters will be highlighted in green when DMX packets will be sent.

The XLR mode Out sends now DMX packets with a refresh rate of 30Hz. The XLR mode RDM remains unchanged: If DMX values are changed, they are send immediately. If there are no changes of DMX values, then refresh packets will be send with a rate of 2.1Hz.\
The XLR mode Out is now the default when starting a new show. There may be lighting fixtures that are not capable of the low refresh rate of 2.1Hz in the RDM mode. It is then recommend to switch the XLR mode to Out.

---

### []()Web Remote

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Web remote settings can be set in Menu - Network - Web Remote.

To toggle the web remote, tap Web Remote.\
To set the maximum transmitted resolution, tap Resolution Limit:

- 480p
- 720p
- 1080p
- Unlimited

The smaller the resolution the faster the transmission of the data.

To change the maximum allowed web remote connections, change Connection Limit.

Consoles allow a maximum of 2 connections. onPC stations allow a maximum of 5 connections.

The main part of the Web Remote menu displays all established connections of web remote devices connected to this grandMA3 station:\
The column IP displays the IP of a connected device and UserAgent displays information about the operating system, web browser, and further information.

**Hint:**\
All settings and information in the Web Remote menu are designated for one grandMA3 console or grandMA3 onPC only.

---

 

### []()Presets

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved in this release

Only the normal preset pools (not the all preset pools) have the preset mode property. A preset itself does not have the preset mode property any more.\
The preset mode in Menu - Patch - Attribute Definitions - Feature Groups is now linked with the preset pools.

If you store to an existing preset using the merge mode, the selected PresetMode in the store options is considered.

IfOutput for presets can deal also with relative values in presets and with integrated presets.

It is now possible to store a universal preset using a normal fixture. To do so, select a fixture, adjust the values and select preset mode universal in the store options.\
Or: set the preset mode for the preset pool to universal. In this case, store options have to be set to default. 

---

### []()grandMA3 extension

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New in this release

The grandMA3 extension allows to extend the amount of physical executor handles for a grandMA3 full-size, grandMA3 light or RPU.

A grandMA3 extension has to be connected to the same network or network interface that is used for the MA-Net communication. Furthermore, an extension will connect to a specific console but not to a session.

**Restriction:**\
It is only possible to connect extensions to grandMA3 full-size, grandMA3 light or grandMA3 RPUs.\
The maximum connection amount for extensions depends on the device type:\
grandMA3 full-size: 1x extension\
grandMA3 light: 2x extensions\
grandMA3 RPU: 3x extensions

To establish a connection with an extension, the IP address of the extension has to be in the same IP range of the console. The IP address of an extension can only be changed remotely from a console or onPC station. To do so, go to Menu - Network Menu and select the entry of the extension and long-press the IP cell. Use the pop-up to change the IP settings of the extension remotely.

To establish a connection between a console and an extension, select the extension in the network menu on the console you want to connect, then tap Invite Station. The connection will be initiated.\
It is not possible to invite the extension to a third console when it is already connected to a different console. First, cancel the connection on the console the extension is connected to at the moment. To do so, select the console in the network menu and tap Dismiss Station. After that it can be connected to a different console.\
The column Remote IP in the network menu displays to which console the extensions are connected at the moment.

When an extension is connected successfully to a console, it will display the first wing of executors by default. To display a different executor wing, go to Menu - Settings - Extension Configuration. Within the Extension Configuration Menu it is only possible to change the WingID for the connected extension.\
There are 2 column modes: Condensed (default) and Full. Condensed mode only displays information about the connection state, IP and WingID. Full mode displays the columns Connected Count and Device Type in addition.

- Connection State: Can be Yes or No. This cell cannot be edited by the user and displays if the extension is connected with the console or not.
- IP: Displays the IP address of the extension. This cell also cannot be edited by the user.
- Wing ID: Displays the ID of the executor wing the extension controls. This property can be changed by the user.
- Connected Count: The higher the number the more often the extension tried to connect to the console. In a faulty network environment the number can increase fast due to reconnection. This value cannot be edited by the user.
- Device Type: This column displays the device type of the extension. Typically it is grandMA3 Fader Module Encoder (MFE). This cell also cannot be edited.

The desk light of an extension is controlled together with the desk lights of the console.\
Also the custom section of an the extension is not independent from the custom section of the console.

---

 

## []()Other Enhancements

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Soft LTP: Having Soft LTP activated or deactivated works now in both cases as expected.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) It is possible to specify a show file or a plugin that is to be be loaded upon starting the onPC application.\
To do so, add the SHOW or RUNPLUGIN parameter to the shortcut that launches the onPC application:

- "C:\Program Files\MALightingTechnology\gma3\_1.1.4\bin\app\_system.exe" HOSTTYPE=onPC SHOW="startshow\.show"

- "C:\Program Files\MALightingTechnology\gma3\_1.1.4\bin\app\_system.exe" HOSTTYPE=onPC RUNPLUGIN="startplugin.xml"-x

  - x represents the number of the LUA component in the plugin that is to be started, e.g., 1
  - It is not recommend to specify a path for the plugin although the plugin may be put into a subfolder.

In addition, the optional parameters NOLOAD and CLEANSTART are also available when starting the onPC.

- NOLOAD will not load the last show file but start with an empty show. Other device related configurations are kept.
- CLEANSTART will reset device related configuration back to default and come up with an empty show file.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)** **In the MIDI Remotes menu, the option to display the incoming MIDI messages in the System Monitor was added.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Lasso selections, e.g., in the fixture sheet, DMX sheet, sequence sheet or layout window, etc. interact now with the command line. If you enter a keyword in the command line and drag a lasso selection around cues, fixtures, etc., the command will be executed for the selected objects.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Speeded up the MVR export if there are a many of objects.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Grand Master and Speed Masters are displayed in BPM instead of %.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) SelFix selects the fixtures via specifying a DMX address in absolute notation or tapping one DMX channel in the DMX sheet.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) DMXProtocols interface is by default on auto and the correct interface is selected as soon as the device is master. First it will look for an interface with a Class A IP (2. or 10.). If this rule turns out not to be true, it will select for Art-Net the same interface that is used for MA-Net. \
The same rules apply for sACN except it will not select an interface with an IP in the range of 2.x.y.z.     

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) DMX Protocols now support the input priorities. To set the input priority for incoming data, change the input priority setting in the DMX Protocols menu. The input priority can be set individually per data line in the DMX Protocols. Each grandMA3 universe that gets data input with different priorities has to to be set to Merge Mode "Prio" when editing the universe in the universe pool or in the DMX list in the Patch.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) The title bar of the fixture sheet, layout, and 3D displays the selected world, except for world 1.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Names and IP addresses within a network of grandMA3 stations can now be changed from the network menu of one station. If the console is running the software version that supports this feature, the corresponding fields can be edited (light gray background color). If a station is in a session with at least one other grandMA3 device, the name cannot be edited.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) All grandMA3 hardware stations (except for grandMA3 onPC software) can be switched from grandMA3 software to Mode2 using the command SwitchGma2Mode.\
Executing this command without specifying a station will reboot the current station into Mode2. To specify a certain station, use an IP or device type.\
To switch the device from grandMA3 software to Mode using the IP address 192.168.0.4, type:

User Name\[Fixture]> SwitchGma2Mode IP 192.168.0.4

To switch the second xPort Node of all xPort nodes available to Mode2, type:

User Name\[Fixture]> SwitchGma2Mode Node 2

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) When searching for files in the backup menu or an import dialog, the search input field is no longer case-sensitive.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Add Window: The tab All is implemented. The current default sorting is in alphabetical order. It is possible to search within the list of this tab and to filter by the different types of possible windows.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png)The layer CueID - located  in the layer toolbar - displays the playback in which the current phaser is stored. 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The cue progress bar displays the different kinds of crossfades with different colors. The colors are defined in the color theme in the color group CrossFade.

 

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) User meshes and user gobos are stored into the show file when saving it. They will also be transmitted to other session members in the network. Copy user gobos into the folder shared\lib\_fixture\_types\gobos\user and user meshes into the folder shared\lib\_fixture\_types\meshes\user.

**Important:**\
User gobos and meshes that are part of a show file will be copied to these folders once a show file is saved. Files in these folders that have the same name are overwritten.

**Important:**\
In order to export an MVR file or GDTF file that contains user meshes and gobos, save the show file to the local hard drive before exporting.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The System Info window has a new section called ShowData. This section displays the memory consumption of the loaded show file (=data of the show). The limit for a loaded show file is set to 10GB.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New command RemoteCommand is implemented: RemoteCommand can send commands to any grandMA3 station within a network. The commands will be executed by the currently logged in user on the receiving station.\
To address the target grandMA3 device, use the IP keyword or corresponding keyword for the target station type (e.g., [Console](/grandma3/2-3/keyword_console/), [PU](/grandma3/2-3/keyword_processingunit/), [onPC](/grandma3/2-3/keyword_onpc/) or [Node](/grandma3/2-3/keyword_networknode/)).

To send the command Store Cue 1 to the station using the IP address 192.168.0.4, type:

User name\[Fixture]> RemoteCommand IP 192.168.0.4 "Store Cue 1"

To switch all onPC stations to view 1 on display 2, type:

User name\[Fixture]> RemoteCommand onPC \* "View 1 /Screen '2' "

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) Stomp of a group is now possible.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Improved network experience.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Sequence sheet now represents a tracking release with a white line on top of the applied row.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) The user interface for Processing Units improved:

- Removed unnecessary elements in the info view.
- In addition to the graph the workload view displays the values for CPU and memory usage.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) It is now possible to do a clean start for grandMA3 onPC on macOS. To do so, keep Alt/Option pressed while executing the grandMA3 onPC application.

![](/img/grandma3/2-3/icon_arrow_up_right_v0-9-8d3f40.png) Renumbering of cues is more clever now: It is not possible anymore to give the same cue number to two or more cues. Setting the cue number to a previous number that is already used is prevented by the system. Entering a cue number that is used later in the sequence, all following cues will be renumbered until no collision with existing cue numbers occurs.

![](/img/grandma3/2-3/icon_plus_v0-9-2719fc.png) New property "Real Acceleration" was added to the Channel Function of a fixture type. This property is related to the already existing "Real Fade" and is used for visualization. Real Acceleration describes the time that is needed to accelerate from resting state to maximum velocity. Unit: seconds.

---

 

## []()What's Changed

- The maximum amount of data pools, user profiles and users within a show file is now limited to 128 objects. All other pools, the user can store data into, are now limited to 9999 objects. Objects that were stored in grandMA3 v1.0 above the new limits are now not accessible anymore.

- The maximum amount of OSC configurations within a show file is now limited to 1024.

- To enter DMX Address and DMX Universe keywords, press MA + X8 and MA + X8 + X8.

- The DMX sheet displays not granted universes now with a red font color in the title column of the sheet only. 

- The Layout Element Defaults of a UserProfile were moved from the UserProfiles menu to the Preferences and Timing menu.

- When the limit of multicast inputs (sACN) is reached, a warning pop-up appears. The limit is set to 20 multicast inputs.

- The image pool is limited to 200MB in total. If the limit would be exceeded during import of an image, a popup will inform the user.

- Interface is renamed to MA-Net Interface in the Network menu.

- Pools with icons (e.g., Group pool) display now pool name and icon in the title pool object. Therefore, the MA logo is smaller.

- Long-press on pool objects now only performs a store operation if the pool object is empty. Long-press on a view button always performs a store operation if empty or a view object is assigned.

- Pressing 3x Clear or executing ClearAll now also resets the command filter. In general, Clear is independent on the set filter.

- The properties ArtnetIP and SACNIP in the output configuration are renamed to Art-Net IP and sACN IP.

- Activating one onPC window on Windows brings also all other onPC windows to the front.

- The keyword shortcut for MyRunningSequence, MyRunningMacro, RunningSequence and RunningMacro were changed in order to be aligned:

  - MyRunning = MyRunningSequence
  - MyRunningM = MyRunningMacro
  - Running = RunningSequence
  - RunningM = RunningMacro

- grandMA3 onPC puts the local loopback adapter to the first place in the order of network interfaces and does not offer virtual interfaces anymore.

- The properties PositionX and PositionY of layout elements were renamed to PosX and PosY.

---

 

## []()Fixed Bugs

### 3D

| Description                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gobo Rotation was not visualized correctly in the 3D window of an onPC running on Windows with some types of AMD Radeon graphics cards. This bug is fixed. Gobo rotation is now correctly visualized also on AMD Radeon Graphics Cards.                                                                                                               |
| The position of the labels was not updated when zooming in the 3D window using the mouse wheel. This bug is fixed. The position of the labels is now updated correctly when zooming in the 3D window using the mouse wheel.                                                                                                                           |
| When using the arrangement tool "Circle", the position of the center of the circle was shifted with other than the default settings of Angle Range and Radius Delta. This bug is fixed. The center of the circle stays in position at the center of the selection.                                                                                    |
| When changing the position or rotation of a parent fixture the children were not updated in real-time. This bug is fixed. Children are moved and rotated in real-time if the position or rotation of the parent is changed.                                                                                                                           |
| The option "Rotate to circle center" in the circle arrangement tool did not rotate correctly single fixtures. This bug is fixed. Rotate to circle center rotates fixtures correctly to the center of a circle. In addition, it is possible to step through other possible combinations of rotations by tapping Rotate to circle center several times. |

 

### Command Line and Macro

| Description                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calling a view again after changing something inside the view did not recall the view. This bug is fixed. Calling a view is now always executed.                                                                                                                                                                                    |
| Having Edit in the command line and closing the Playback Controls overlay removed Edit from the command line. This bug is fixed. Edit will not be removed from the command line when closing any overlay.                                                                                                                           |
| Console could freeze when entering a wrong password while logging in a new user. This bug is fixed. Entering a wrong password upon user login does not freeze the console anymore.                                                                                                                                                  |
| Listing references of a sequence displayed the wrong preset numbers. This bug is fixed. References and dependencies of sequences are now displayed correctly again.                                                                                                                                                                 |
| The console could crash when calling the PopupInput function in LUA. This bug is fixed. Calling the PopupInput function in LUA does not crash the console anymore.                                                                                                                                                                  |
| Oopsing the creation of timecode events could delete other timecode events instead. This bug is fixed. When oopsing the creation of timecode events the correct event is now removed.                                                                                                                                               |
| It was possible to delete a locked group. This bus is fixed now. Locked groups cannot be deleted anymore.                                                                                                                                                                                                                           |
| Importing the predefined phasers into an empty show file crashed the console. This bug is fixed. The console does not crash anymore when importing the predefined phasers into a new show file.                                                                                                                                     |
| Clearing the selection did not clear the selection of all elements in a layout either. This bug is fixed. All selected elements of a layout will now be deselected when executing Clear or ClearSelection.                                                                                                                          |
| The encoders in the layout encoder bar were changing size in the opposite direction. This bug is fixed. The encoders in the layout encoder bar change now the size of an element in the same direction when turning                                                                                                                 |
| Changing the default border size for layout elements in the user profile was not applied to new layout elements. This bug is fixed. New layout elements apply now the correct default border size of the user profile.                                                                                                              |
| Tapping an empty sequence in the sequence pool while having Off posted in the command line switched off the selected sequence. This bug is fixed. Tapping an empty sequence while having an action keyword already in the command line will not execute this action anymore for the selected sequence.                              |
| Storing a show file while the internal timecode generator is running continued the timecode generation when loading the show file the next time. This bug is fixed. Running timecode generators will be stopped when loading a show file.                                                                                           |
| It was not possible to edit a LUA component twice while keeping the Plugin editor open. This bug is fixed. LUA components can be edited several times.                                                                                                                                                                              |
| Layouts in show files of v1.0 did not display the layout elements and were set to the incorrect layers. This bug is fixed. Layouts are now converted correctly from v1.0 to v1.1.                                                                                                                                                   |
| It was not possible to store Release values in a cue. This bug is fixed. Release values can be stored in cues again.                                                                                                                                                                                                                |
| The unblock command did not work correctly. This bug is fixed. Unblock is now functional.                                                                                                                                                                                                                                           |
| Preset References were not updated properly when copy was applied. This bug is fixed. Preset References are updated properly.                                                                                                                                                                                                       |
| Deleting a feature group from the encoder bar was possible. This bug is fixed. Deleting a feature group is not possible any more.                                                                                                                                                                                                   |
| Entering values for a grouping fixture via an attribute calculator did not forward the values to the members of the grouping fixture. This bug is fixed. A grouping fixture now always forwards its values to its members.                                                                                                          |
| The timecode generator did not work when in a session. This bug is fixed. The timecode generator also works in sessions.                                                                                                                                                                                                            |
| If you deleted a group that had a limited master, the fixtures stayed limited. This bug is fixed. Deleting a group always resets the limitation of involved fixtures.                                                                                                                                                               |
| Changing the selected interface for a DMX protocol via command line did not work the first time around. This bug is fixed. The interface for DMX protocols can now always be changed.                                                                                                                                               |
| Shutting down, restarting or rebooting a couple of stations via command line did not execute the action on the executing station also if it was included. This bug is fixed. Sending commands to stations in the network executes the command also on the station that sends the command if it is included in the destination list. |
| Deleting selections from groups, presets or cues did not work. This bug is fixed. Selections can now be deleted from groups, presets and cues.                                                                                                                                                                                      |
| USB drives without names were listed with an empty label. This bug is fixed. USB drives without names do not have empty labels anymore. Furthermore, they are listed with a replacement name.                                                                                                                                       |
| SelFix as assigned button function on an executor button did not work. This bug is fixed. SelFix on an executor button selects the fixtures used in the assigned object.                                                                                                                                                            |
| Fixture At Fixture ignored relative values. This bug is fixed. Fixture At Fixture and cloning work with relative values as well.                                                                                                                                                                                                    |
| Executing At Full in a new show crashed the console. This bug is fixed. The console does not crash anymore when executing At Full in a new show.                                                                                                                                                                                    |
| Storing data pools while being in a session could crash the console. This bug is fixed. Creating data pools in a session does not crash the console anymore.                                                                                                                                                                        |
| Store /merge on a view button did not open the store view pop-up. This bug is fixed. Storing on a view or view button opens always the store view pop-up.                                                                                                                                                                           |
| Update Please did nothing. This bug is fixed. Update Please updates now the selected sequence.                                                                                                                                                                                                                                      |
| Starting to type for labelling an object surpressed the first character when being in a session. This bug is fixed. The first character when labelling an object is recognized and used.                                                                                                                                            |
| Copy or import of user profiles replaced the user defined views with the default views. This bug is fixed. User created views in the first slots of the view pool are not overwritten with the default views anymore.                                                                                                               |
| Storing a cue with a custom user profile labeled cues with Cuepart Zero. This bug is fixed. Creating a cue gives the cue always a proper label.                                                                                                                                                                                     |
| Entering a file name that is longer than 31 characters did not inform the user about the limitation. This bug is fixed. When exceeding the limitation of the file name length the console will inform the user with a pop-up.                                                                                                       |
| Moving data pools in a session crashed the console. This bug is fixed. The console does not crash anymore when moving a data pool.                                                                                                                                                                                                  |
| Copying a user profile did not copy the selected page. This bug is fixed. The selected page is now copied with the user profile.                                                                                                                                                                                                    |
| Store Sequence x Cue y Part 0 did not work. This bug is fixed. Storing into a specific cue part now also creates the correct cue part and stores the data into this part.                                                                                                                                                           |
| Selecting a gobo in the gobo attribute calculator while the value readout is set to physical did not set the correct value for the attribute. This bug is fixed. No matter which value the readout is set, the channel sets will call the correct values.                                                                           |
| Gobo thumbnail on gobo encoder and fixture sheet showed gaps between slots although there were no gaps. This bug is fixed. The gobo encoder and the fixture sheet continuously show gobo thumbnail if a value range is well defined with gobo slots.                                                                                |
| Playing back a timecode show with an offset of the timecode did not respect the offset. This bug is fixed. Timecode shows with an offset are played back correctly.                                                                                                                                                                 |
| Importing a macro to an empty macro pool object opened a pop-up that asked if the object should be overwritten, inserted or if it should cancel the operation. This bug is fixed. Importing a macro to an empty pool object does not open pop-ups anymore.                                                                          |
| When working in a session it could happen, that controlling an attribute changed the values on a different attribute. This bug is fixed. When controlling an attribute the correct DMX channel is now changed.                                                                                                                      |

### Connections

| Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| When receiving commands for sequences via OSC, not all of the commands worked. This bug is fixed. All received commands for sequences are executed.                                                                                  |
| Creating analog remote entries did not transmit all the data for it within the session. This bug is fixed. Analog remote configurations are displayed now correctly on all stations.                                                 |
| Creating hundreds of Art-Net, sACN or OSC entries crashed the console. This bug is fixed. The console does not crash anymore when creating a huge amount of Art-Net, sACN or OSC entries at the same time.                           |
| DMX Protocol in and outputs were not displayed properly in the universe pool on a slave station. This bug is fixed. DMX Input / Outputs are now displayed correctly in the universe pool of the slave.                               |
| MIDI Remote in and outputs did not display the correct values. This bug is fixed. Midi values are displayed properly.                                                                                                                |
| It was possible to send the wrong update files to a station for a network update. This bug is fixed. Sending the wrong files to update is not possible anymore.                                                                      |
| The maximum start for analog remotes was too big. This bug is fixed. The maximum start for analog remotes is now 64 as the system can handle a maximum of 64 analog remotes.                                                         |
| Receiving timecode for the same slot in a network did not work properly. This bug is fixed. Receiving timecode for the same slot in network is working properly.                                                                     |
| If a timecode signal was lost, the after roll was processed until the backup signal was selected. This bug is fixed. If a timecode signal is lost, the backup signal will be selected within 2s.                                     |
| Timecode was not displayed properly in the clock window when the time was exceeding 24h. This bug is fixed. Timecodes are displayed properly.                                                                                        |
| Timecode after roll was not transmitted properly in the network. This bug is fixed. Timecode after roll is transmitted properly in the network.                                                                                      |
| Store CueFade x did not store a new cue with the given cue time. This bug is fixed. A new cue with the given cue timing is now stored when executing store with cue timing specified.                                                |
| It was possible to change the IP of an interface to 0.0.0.0. This bug is fixed. It is not possible to change the IP to 0.0.0.0 anymore for any interface.                                                                            |
| The intensity of the left desk light was not restored correctly after booting the console. This bug is fixed. Both desk lights are initialized with the correct intensity stored in the show file after booting the console.         |
| Consoles with a built-in UPS did not remove the Power Loss pop-up when the power came back. This bug is fixed. The Power Loss pop-up will be removed correctly when the power comes back.                                            |
| Switching an interface from a static IP to DHCP kept the the old static IP in addition to the DHCP IP address. This bug is fixed. When switching from a static IP address to DHCP, the static IP address will be removed completely. |
| Pulling and re-plugging a network cable did no re-establish the network communication. This bug is fixed. Re-plugging a network cable continues now with sending and receiving DMX protocols and network protocols.                  |
| It could happen, that grandMA3 onPC stations running on macOS crashed while being part of a session. This bug is fixed. grandMA3 onPC running on macOS should not crash anymore while only being idle in a session.                  |

### Patch

| Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| It was possible to assign Scribbles and Appearances to Layers and Classes. This bug is fixed. Scribbles and Appearance cannot be assigned to Layers and Classes anymore.                                                                                     |
| Importing a patch into a show while lacking a couple of fixture types crashed the console. This bug is fixed. Importing invalid patch data does not crash the console anymore.                                                                               |
| A crash occurred if an attribute used in a fixture type was not linked to a valid Feature Group and Feature. This bug is fixed. There is no crash any longer if an attribute is not linked to a Feature Group or Feature.                                    |
| Selecting a channel set in the calculator did not set the corresponding channel function on the encoder to active. This bug is fixed. If a channel set is selected in the calculator the corresponding channel function is activated.                        |
| Calling a preset did not set the corresponding channel function on the encoder to active. This bug is fixed. If a preset is called the corresponding channel function on the related encoder is set to active.                                               |
| DMX addresses of granted universes without patched fixtures were displayed in red color in the DMX sheet. This bug is fixed. Unpatched but granted DMX addresses won't be displayed as ungranted DMX addresses anymore.                                      |
| An exported GDTF file had wrong Wheel Slot Indices. There was an offset of -1. This bug is fixed. A GDTF file has correct Wheel Slot Indices after it is exported.                                                                                           |
| An exported GDTF file lost its Mode Dependencies if the ModeMaster was pointing to a DMX Channel. This bug is fixed. Mode Dependencies are exported correctly to a GDTF file now.                                                                            |
| Global fixtures of unused fixture modes were used in the show. This bug is fixed. Unused modes of fixture types do not create global fixtures for them.                                                                                                      |
| Fixtures stored in worlds could become uncontrollable when the patch was entered afterwards. This bug is fixed. Fixtures stored in worlds are controllable after entering the patch again.                                                                   |
| Phaser and 3D window follow tool did not work if a fixture type was part of the show that had a Pan2 or Tilt2 attribute. This bug is fixed. Phaser and 3D window follow tool work if a fixture type with attributes Pan2 and Tilt2 is part of the show file. |

 

### Phaser

| Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oopsing the creation of phaser steps with the Step Creator was not possible. This bug is fixed. Creating steps with the Step Creator can now be undone. |
| The Step Creator entered Remove values into the programmer when using presets. This bug is fixed. The Step Creator works with presets.                  |

### Playback

| Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If a timecode show was stopped several times, events may have not been triggered when the show was started again. This bug is fixed. Timecode events are now triggered always when they should be triggered.                                            |
| Deleting a sequence, cue or cue part could crash the console. This bug is fixed. Deleting a sequence, cue or cue part does not crash the console anymore.                                                                                               |
| The console crashed when 240 programmer parts were created. This bug is fixed. The console does not crash when creating 240 programmer parts.                                                                                                           |
| Switching off tracking for a mirrored sequence crashed the console. This bug is fixed. The console does not crash anymore when switching off the tracking for a mirrored sequence.                                                                      |
| Playing back a cue did not execute an assert for blocked values in the cue. This bug is fixed. An assert is now executed for blocked values in a cue, when it is needed.                                                                                |
| When fading from a phaser in a cue to a static value in the next cue let the fixtures snap to the static value, also if a fade time was specified. This bug is fixed. Fixtures do not snap anymore from a phaser value to a static value during a fade. |

### Windows

| Description                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Insert new fixtures dialog had different alignments of the input fields. This bug is fixed. All input fields in the Insert new fixtures dialog are now aligned to the left.                                                                                                                                            |
| If you tapped and held the title bar and simultaneously moved context menus, the main window, the context menu belongs to, was resized. This bug is fixed. Tap, hold and move of context menus does not resize the main window anymore.                                                                                |
| Backup menu displayed drives of the current version (Internal) and of the same streaming version again. This bug is fixed. The drive selector in the backup menu displays only the internal drive for the current streaming version.                                                                                   |
| The scribble pad was smaller in the "edit scribble" pop-up than in the label pop-up. This bug is fixed. Both edit popups have the same field size.                                                                                                                                                                     |
| The Priority property in the Output configuration menu always opened a calculator. This bug is fixed. The Priority property in the Output Configuration offers now only a dropdown with all possible priorities.                                                                                                       |
| Timecode was displayed on top of the timecode slot pool object. This bug is fixed. Timecode is displayed on bottom of the timecode slot pool object.                                                                                                                                                                   |
| The fixture sheet did not expand the children of a fixture when entering them with the down command. This bug is fixed. The fixture sheet will expand now automatically when selecting a collapsed subfixture. There is no automatic collapsing yet.                                                                   |
| The sheet in the network menu did not update correctly when choosing a filter. This bug is fixed. The network menu refreshes correctly when choosing a filter.                                                                                                                                                         |
| The sequence sheet did not jump to the current cue when opening the sequence sheet or selecting a different sequence while AutoScroll was activated. This bug is fixed. AutoScroll in the sequence sheet now jumps to the current cue.                                                                                 |
| Patching a grouping fixture did not allow to set the focus to Apply in the Insert new fixture dialog. This bug is fixed. It is now possible to navigate the focus to Apply when patching a grouping fixture.                                                                                                           |
| It was not possible to close the context menu of the layout window by pressing ESC. This bug is fixed. The layout window context window can now also be closed by pressing ESC.                                                                                                                                        |
| The Add window dialog displayed a scroll bar in the Pools tab also when the dialog was big enough to display all buttons. This bug is fixed. The Add window dialog displays only scroll bars if they are needed.                                                                                                       |
| The caption in the title bar of the align bar window and selection bar window were cut off when the height was set to half of the row. This bug is fixed. The align bar window and selection bar window display always the caption.                                                                                    |
| Adding multiple events in the timecode editor did not allow to cancel the pop-up. This bug is fixed. The add multiple events pop-up can be cancelled now.                                                                                                                                                              |
| Sometimes the timecode toolbar in the timecode editor was displayed too small. This bug is fixed. The timecode toolbar is displayed correctly.                                                                                                                                                                         |
| Windows could overlap in a view when storing into an existing view in a multi-user environment. This bug is fixed. It is not possible anymore to create views with overlapping windows. When loading a show from 1.0 with views having this issue we recommend you delete the views with this issue and recreate them. |

 

## []()

---

## Appendix

- It is recommended to use a dedicated and a separate physical network for each grandMA3 session.
- When using DMX protocols it is recommended to use a dedicated physical network for each protocol.

---

 

## []()Known Limitations

The grandMA3 system supports at the moment only one external DMX source per universe for merging DMX into the system.

Software update via network to onPC stations requires confirmation during the install process at the destination system.

When deleting a preset that is referenced by a cue the reference cannot be restored when oopsing the deletion.

Show files saved with versions prior to v1.0.0.3 cannot be loaded using this version.

---
title: "Status Center"
description: "Status icons indicate activities and statuses in the software. They are displayed on the right side in the command line next to the command line input field."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/statuses.html"
scrapedAt: "2026-06-12T21:25:08.826Z"
---
Status icons indicate activities and statuses in the software. They are displayed on the right side in the command line next to the command line input field.

All status settings are set per user profile. For some statuses you can choose to see the corresponding status for all user profiles.

To show or hide a status icon in the command line, swipe the status in the message center window.\
A drop-down displays the following options:

- **Never**: No icon for the status is displayed. The indicator bar of the corresponding status is gray.
- **On Activity**: Displays the icon when a setting or function is active. The indicator bar is white.
- **Always**: The icon is always displayed in the command line. If the setting or function is not active, the icon is grayed out. The indicator bar is green.

Most statuses additionally have three **Blink** options:

- **None**: The background of the status in the command line does not blink when the status is active.
- **Once**: The background of the status blinks red once when active.
- **Always**: The background of the status blinks red continuously when the status is active.

|                                            |                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                            |
|                                            | For the statuses **Highlight**, **Blind**, **Solo**, **Grand Master**, **World Master**, and **Disk Space** "Blink" is set to **Always** by default.  |

Additionally, the icon and title bar of a status light up in the corresponding color if the status is active.

The default display mode for statuses in the **Programmer**, **Filter**, and Universe/Patch section is **On Activity**.\
The default display mode for statuses in the **More** and **Toggles** section, except for Battery, is **Always**. The default for Battery depends on the device.

For some statuses (Highlight; Lowlight; Solo; Timecode Record) you can select different sources for the status in the drop-down: 

- **My**: The status is active if triggered by the current user profile. If **My** is selected as user profile, ![](/img/grandma3/2-4/icon_user_15_v1-7-7e47bb.png) is displayed in the status cell.
- **All**: The status is active if triggered by any user profile. If **All** is selected as user profile, ![](/img/grandma3/2-4/icon_users_v2-3-f2e7a7.png) is displayed in the status cell.

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                            | If the user profile is set to **All **and highlight, lowlight, solo, or a timecode record is triggered by another user profile, **e****xt** or **m****y+ext** is displayed below the icons. **ext** is displayed if the function is only triggered by another user profile. **my+ext** is displayed if the function is triggered by both the current and another user profile. If the function is triggered by the currently active user profile, no text is displayed below the icon.  |

The following statuses are available:

**Programmer:**

- **Highlight** (![](/img/grandma3/2-4/icon_status_highlight_v2-2-e7f66b.png)): [Highlight](/grandma3/2-4/keyword_highlight/) is active. Tap the icon to open the temporary master controls.
- **Lowlight** (![](/img/grandma3/2-4/icon_lowlight_v2-3-9a8d79.png)): If [Lowlight](/grandma3/2-4/keyword_lowlight/) is active, the icon turns blue. Tap the icon to open the temporary master controls.
- **Solo** (![](/img/grandma3/2-4/icon_status_solo_v2-2-c91620.png)): [Solo](/grandma3/2-4/keyword_solo/) is active. Tap the icon to open the master controls.
- **Blind** (![](/img/grandma3/2-4/icon_status_blind_v2-2-0ba4ce.png)): [Blind](/grandma3/2-4/keyword_blind/) is active. Tap the icon to open the master controls. 
- **Preview** (![](/img/grandma3/2-4/icon_status_preview_v2-3-3d3ec2.png)): If [Preview](/grandma3/2-4/keyword_preview/) is active, the icon is orange.
- **Timecode Record** (**![](/img/grandma3/2-4/icon_status_timecode_recording_v2-3_15px-2cbe0b.png)**): A [timecode recording](/grandma3/2-4/timecode_create/#h2_1497943987) is active. When a timecode is recorded, the icon starts to blink. Tap the icon to open the off menu in the timecodes tab.
- **Recipe Editing** (![](/img/grandma3/2-4/icon_cooking-pot_12_v1-7-c4818c.png)): If the [recipe editor](/grandma3/2-4/recipes/#h2_1768861353) is active, the icon is green.
- **Grand Master** (![](/img/grandma3/2-4/icon_fader_master_15_v3-2-4-749a36.png)): Grand master is not at full. Tap the icon to open the temporary master controls. 
- **World Master** (![](/img/grandma3/2-4/icon_fader_master_15_v3-2-4-749a36.png)): World master is not at full. Tap the icon to open the temporary master controls. 
- **Grand Rate** (![](/img/grandma3/2-4/icon_fader_master_15_v3-2-4-749a36.png)): Grand rate master is not at 1:1. Tap the icon to open the temporary master controls. 

**Filter:**

- **Filter** (![](/img/grandma3/2-4/icon_filter_15px-78282b.png)): A [filter](/grandma3/2-4/worldfilter/#h2_271449867) other than Filter 1 is called or selected.
- **World** (![](/img/grandma3/2-4/icon_status_world_v2-2-34aa13.png)): A [world](/grandma3/2-4/worldfilter/#h2__1253470035)  other than World 1 is selected.  

**Universe/Patch:**

- **Parked** (![](/img/grandma3/2-4/icon_status_parked_v2-2-b8f575.png)): If fixtures are [parked](/grandma3/2-4/keyword_park/), the icon is blue.
- **DMX Tester** (![](/img/grandma3/2-4/icon_status_dmx_tester_output_v2-2-a24a68.png)): If the [DMX tester](/grandma3/2-4/patch_dmx_sheet/#DMX%20Tester) generates output, the icon is white. 
- **Not Enough Parameters** (![](/img/grandma3/2-4/icon_not_enough_parameters_15_v3_2-3-99f2d6.png)): The limit of [parameters](/grandma3/2-4/system_parameter/) is exceeded. If the system is in overload and the DMX output refresh rate is slowing down, **Overload** is displayed below the icon.
- **No Fixtures Patched** (![](/img/grandma3/2-4/icon_nofixture_15_v3-2-3-ec84e3.png)): No fixtures are patched in the current show.
- **Patch Open** (![](/img/grandma3/2-4/status_patch_v2-4-962b29.png)): Another user is in full patch. 

**More:**

- **World Server** (![](/img/grandma3/2-4/icon_worldserver_24_v1-9-0bc73e.png)): Displays if there is a connection to the [world server](/grandma3/2-4/system_world/).
- **Encoder Bar** (![](/img/grandma3/2-4/icon_encoder_bar_15p-e44e5b.png)): A different encoder bar and not the default encoder bar is selected. 
- **Phasers**: Graphically indicates the current processing workload dedicated to [phaser](/grandma3/2-4/phaser/) calculation in a bar in the command line. A green indicator rises with the number of parameters with actively running phasers. The exact value is displayed as a [tooltip](/grandma3/2-4/atm_open_help_console/#h2__1802410938) in the command line.
- **Flow Control**: Graphically indicates the current workload of the network with a green indicator in the bar next to the envelope icon (![](/img/grandma3/2-4/icon_message_15px-a09bd6.png)) in the command line. The exact intensity of the flow control is displayed on a scale of 0 to 255 as a [tooltip](/grandma3/2-4/atm_open_help_console/#h2__1802410938) in the command line. The flow control level is also displayed in the network menu. For more information see [Session](/grandma3/2-4/network_session/#stations_view).

**Hardware:**

- **B****attery** (![](/img/grandma3/2-4/battery_icon_15_v2-2-ec0efb.png)): Displays the [power status](/grandma3/2-4/system_message_center/) of the device. On full-size, light, full-size CRV, and light CRV consoles, the icon is displayed by default. Tap the icon to open the battery status pop-up. For stations with no battery, the icon is crossed (![](/img/grandma3/2-4/icon_battery_none_v2-3-1c9c8e.png)).\
  If a device runs on battery, the system differentiates between the battery status of your own device and those of other devices in the session. Depending on the configuration, **e****xt** or **m****y+ext** is displayed below the icons to indicate which device is affected. **ext** is displayed if a different device is affected, **my+ext** is displayed if the current device and a different device are affected. If the current device is affected, no text is displayed below the icon. The tooltip in the command line and alert message in the message center provide further information. 

  \[+] [Show Image](javascript:void\(0\))

  \[-] [Hide Image](javascript:void\(0\))

  ![](/img/grandma3/2-4/window_status-20center_02_v3-2-4-c51996.png)

  For more information on the battery and power status, see [UPS Battery](/grandma3/2-4/do_ups_battery/).

- **USB Network** (![](/img/grandma3/2-4/icon_status_usb_network-be37e6.png)): USB network is active. This status is not available in the onPC software. For more information, see [USB Network](https://malighting.clickhelp.co/smart/grandma3-user-manual-publication/rn_beta_features-2-4/a/h2_235466206) in Features.  

- **ShowData** (![](/img/grandma3/2-4/icon_showdata_15px-8cd6c5.png)): Previously named Memory.

- **CPU **(![](/img/grandma3/2-4/icon_cpu_15px-895666.png)): Displays the CPU usage as a percentage below the status icon in the command line. 

- **Memory**** **(![](/img/grandma3/2-4/icon_memory_15px-1f3403.png)): Displays the memory usage in MB below the status icon in the command line.

- **CPU Temperature** (![](/img/grandma3/2-4/icon_cpu_15px-895666.png)): Displays the CPU temperature in °C below the status icon in the command line. 

- **GPU Temperature** (![](/img/grandma3/2-4/icon_gpu_15px-75751b.png)): Displays the GPU temperature in °C below the status icon in the command line. 

- **Fan Speed** (![](/img/grandma3/2-4/icon_fan_15px-58b268.png)): Displays the fan speed as a percentage below the status icon in the command line.  

- **Disk Space** (![](/img/grandma3/2-4/icon_status_diskspace_v2_4-0c4327.png)): Displays the available free space in GB of the HDD below the status icon in the command line.

**Toggles:**

- **Keyboard Shortcuts** (![](/img/grandma3/2-4/icon_keyboard_15_v1-9-3cfa21.png)): If [keyboard shortcuts](/grandma3/2-4/do_shortcuts_keyboard/) are active, the icon is yellow.

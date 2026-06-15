---
title: "Network Update"
description: "Use Software Update to update one or more stations on a network."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/update_network.html"
scrapedAt: "2026-06-15T18:25:38.501Z"
pagefind: false
---
Use Software Update to update one or more stations on a network.

|                                                  |                                                                                                                                                                                                      |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                       |
|                                                  | Make sure that all devices are in the same network (check network adapter). To learn more about network settings, read the Networking, [Interfaces and IP](/grandma3/2-3/network_interface/) topic.  |

### Preliminary Procedures

- Connect all grandMA3 devices to a network with an etherCON/RJ45 connector.
- Download the required installation packages from www\.malighting.com, **Downloads. **
- Copy all installation packages for grandMA3 software into the root directory of your USB flash drive. For more information, see [Update the Software](/grandma3/2-3/update/).
- Insert the USB flash drive in the device's USB port.
- For Windows systems, copy the zipped files from the ma folder into the directory C:\ProgramData\MALightingTechnology\installation\_packages.
- For macOS systems, copy the files from the ma folder into the directory \~/MALightingTechnology/installation\_packages.

### Procedure

To update the grandMA3 device, follow the onscreen instructions that appear during the update.

To access Software Update:

1. Press Menu or tap ![gear](/img/grandma3/2-3/icon_gear_15px-1dd78f.png).
2. Tap Settings and then tap Software Update. The Software Update window opens, as shown in the image below:

![](/img/grandma3/2-3/img_network_update_v2-2-1ae7f1.png)

Software Update window

3. To select a file, tap Select and Import Update File. The Select Update pop-up opens:

![](/img/grandma3/2-3/popup_update_full_package_v2-3-4f7f5c.png)

Select Update pop-up

4. Make sure the correct update file location is selected (Internal or external device). Select the desired update file. 
5. Tap Select. The pop-up closes and the End User License Agreement (EULA) opens.
6. Scroll down to read the complete EULA. The button I agree in the upper right corner of the pop-up turns white. To close the EULA, tap I agree.
7. Select the desired device(s). The selected devices are marked in blue.
8. Tap Update Devices. The software update starts copying files.

|                                            |                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                 |
|                                            | The selected update file will be displayed in the title bar of the software update menu.  |

- Cancel Software Update Process: Tap to cancel the current update process. For more information, see [CancelSoftwareUpdate keyword](/grandma3/2-3/keyword_cancelsoftwareupdate/).

|                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                  | It is also possible to update the grandMA3 [onPC](/grandma3/2-3/onpc/), [consoles](/grandma3/2-3/update_consoles/), [xPort Nodes](/grandma3/2-3/update_nodes/), [onPC command wing XT](/grandma3/2-3/update_windows_hardware/), [processing unit](/grandma3/2-3/update_consoles/) and [onPC rack-unit](/grandma3/2-3/update_windows_hardware/) directly. Select the correct XML file for each device. For more information on which XML file to use for which device, see [Update the Software](/grandma3/2-3/update/#h2_2074272643).   |

Update Confirmation

After copying the files to the grandMA3 device, a warning pop-up will appear:

![](/img/grandma3/2-3/popup_network_update_v1-9-10306d.png)

Pop-up in the update process

- **Update and Reboot:** Updates and reboots the device.
- **Update Later and Cancel Reboot:** Delays the update and leaves a red indicator in the control bar ![](/img/grandma3/2-3/icon_power_15_v1-9-9d4090.png).
- **Discard Update and Reboot:** Aborts the update and reboots the device.

|                                            |                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                             |
|                                            | The update will start automatically when the countdown in the pop-up window expires.  |

Tap ![](/img/grandma3/2-3/icon_power_15_v1-9-9d4090.png) in the Shutdown Menu to install delayed updates. This will open a second warning pop-up.

![](/img/grandma3/2-3/popup_shut_down_update_v1-9-62627a.png)

Shutdown pop-up

- **Update and Reboot:** Updates and reboots the device.
- **Update Later and Cancel Shutdown:** Delays the update and leaves a red indicator in the control bar ![](/img/grandma3/2-3/icon_power_15_v1-9-9d4090.png).
- **Discard Update and Shutdown:** Aborts the update and shuts down the device.

|                                            |                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                         |
|                                            | Tapping ![](/img/grandma3/2-3/icon_refresh_arrow_15_v1_5-6d6abc.png) (Restart) in the Shutdown Menu opens an Update Confirmation pop-up as well.  |

For more information about shutting down, see [Shut Down the System](/grandma3/2-3/shutdown_the_system/).

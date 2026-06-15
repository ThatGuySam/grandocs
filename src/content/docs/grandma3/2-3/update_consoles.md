---
title: "Update grandMA3 Consoles"
description: "This topic describes the software update with additional options such as factory reset, etc."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/update_consoles.html"
scrapedAt: "2026-06-15T18:25:38.358Z"
pagefind: false
---
This topic describes the software update with additional options such as factory reset, etc.

For a simple software update via the user interface, follow the instructions in the [Network Update topic](/grandma3/2-3/update_network/).

For a processing unit, the following update process is also valid.

|                                                  |                                                                                                                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                     |
|                                                  | - The folders EFI, ma, and the update.scr file have to be directly accessible on the flash drive and must not be located in an extra folder. - The USB flash drive's data system has to be FAT32.  |

## Download the Software Package

1. To update a grandMA3 device, download the latest software version from [www.malighting.com](https://www.malighting.com/).\
   The required installer is called grandMA3 Software x.x.x.x.
2. Extract the zip file "grandMA3\_stick\_v.x.x.x.x.zip" and copy the folders EFI, ma, and the update.scr file into the root directory of your USB flash drive. 

## Turn off the console

1. Press the [power key](/grandma3/2-3/key_power/) on the front panel.\
   A warning pop-up appears:\
   ![](/img/grandma3/2-3/popup_shut-down_v1-5_1_1-d76ce5.png)

2) Tap OK.\
   The grandMA3 console shuts down.
3) Turn off the power switch on the rear panel

## Install the Software Package on the Console

1. Turn on the power switch on the rear panel.
2. Insert the USB flash drive in a USB port.
3. For devices without an integrated keyboard (e.g. grandMA3 compact console), connect an external keyboard with a USB port. 
4. Press the power key on the front panel. The grandMA3 device starts.
5. Press the key 8/F8 on the internal or the external keyboard several times.\
   The **Boot Manager** opens.
6. Scroll down to EFI USB Device using the arrow keys.
7. Press Enter on the (external) keyboard. \
   The console starts to boot. The EULA screen opens.
8. Accept the EULA.

|                                                  |                                                                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                            |
|                                                  | If the USB flash drive contains more than 1 version, select the version you would like to install first.  |

The Install Selector dialog appears:

![](/img/grandma3/2-3/img_installer-dialog_v0-9_3-af1f03.png)

- Select option 1 to keep the shows and user data.
- Select option 2 to delete the shows and user data. 
- Select option 3 for a complete factory reset to clean the system before installing the software.
- Select option 4 to save the shows on the USB flash drive. 
- Select option 5 to reboot the grandMA3 device. 

1. Press Enter on the (external) keyboard. \
   Wait for completion. The grandMA3 device reboots.
2. Remove the USB flash drive. 

The Mode Selection dialog appears. 

![](/img/grandma3/2-3/img_select-mode_v0-9_3-26224a.png)

_Select mode_

3. Select one of the modes.  For more information about grandMA3 mode2, read the [Mode2 topic](https://help2.malighting.com/Page/grandMA2/mode2_introduction/en) in the section grandMA3 Mode2 of the [grandMA2 User Manual](https://help2.malighting.com/Page/grandMA2/grandma2/en/).\
   If no selection is made, the device automatically starts in grandMA3 mode.
4. Screens 1, 2, 3 are initializing.\
   The letterbox screens go into self-test mode (red, green, blue, white, and black color changer).\
   The command screens stay black.\
   It can take several seconds for them to start initializing. 
5. The installation is complete.

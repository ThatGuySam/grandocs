---
title: "grandMA3 net duct"
description: "The grandMA3 net duct serves as the basis for the MA-Net3 connection between grandMA3 devices and external tracking systems or media servers. To connect a track"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/update_net_duct.html"
scrapedAt: "2026-06-12T21:25:10.744Z"
---
The grandMA3 net duct serves as the basis for the MA-Net3 connection between grandMA3 devices and external tracking systems or media servers. To connect a tracking system or media server to your grandMA3 system via MA-Net3, the grandMA3 net duct must be installed in the third-party software, which must be the same version as your grandMA3 devices.

**Requirements:**

- Download the latest grandMA3 net duct software version from[ www.malighting.com](https://www.malighting.com/downloads/products/grandma3/). For more information, see [update the software](/grandma3/2-4/update/).
- Have an external tracking system or media server ready that supports the grandMA3 net duct.

---

## Install and Update grandMA3 net duct

### Install and Update per USB Stick

|                                            |                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                             |
|                                            | For the first initialization and also to update, the external device must be running in the update mode. For more information, see the manual of the external device. |

|                                            |                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                               |
|                                            | To establish a connection, the external device has to be updated to match the current version of the grandMA3 device.   |

**Requirement:** The USB flash drive's file system must be FAT32. 

1. Extract the zip file grandMA3\_viz\_key\_net\_duct\_vx.x.x.x.zip and copy the ma folder into the root directory of the USB flash drive.
2. Insert the USB flash drive in the grandMA3 onPC or console USB port.

Follow the next steps from point 4.

### Install and Update via the Local Hard Drive

1. Extract the zip file grandMA3\_viz\_key\_net\_duct\_vx.x.x.x.zip.

2. Open the folder ma.

3. On Windows, copy the files from the ma folder to C:\ProgramData\MALightingTechnology\installation\_packages. On macOS, copy the files from the ma folder to the directory \~/MALightingTechnology/installation\_packages. For more information, see [Folder Structure](/grandma3/2-4/fm_folder_structure/).

4. To access Software Update, tap ![gear](/img/grandma3/2-4/icon_gear_15px-4a7044.png).

5. Tap Settings.

6. Tap** **Software Update. The Software Update window opens.

7. Tap Select and Import Update Files. The Select Update pop-up opens.\
   ![](/img/grandma3/2-4/popup_update_net_duct_v2-2_-dfede4.png)\
   _Select Update pop-up_

8. Select the location that contains the update files (internal or any plugged-in external device). Select the release\_viz\_key\_net\_duct\_vx.x.x.x.xml file.

9. Tap Select. The pop-up closes, and the End User License Agreement (EULA) opens.

10. Confirm the End User License Agreement (EULA) by scrolling down and then tapping I agree.

    |                                            |                                                                                                                    |
    | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                          |
    |                                            | The currently selected update file is displayed at the title bar of the software update window.                    |

11. In the device list, tap the external device you want to install the grandMA3 net duct. The selected devices turn into bright blue.

    |                                                  |                                                                                                                                            |
    | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                             |
    |                                                  | Only devices with the **Type "**TrackingServer"  or "MediaServer" can be updated. The devices are listed in the NetworkNode category. |

12. Tap Update Devices. The software update starts copying files.

13. After the files are transferred, you might need to restart the external device and follow its manual.  ![Update this description text.](/img/grandma3/2-4/menu_network_netduct_v2-2-633e5e.png)

    Network menu

####

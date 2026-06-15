---
title: "grandMA3 net duct"
description: "The grandMA3 net duct forms the basis of the MA-Net3 connection between grandMA3 devices and external tracking systems or media servers. In order to connect a t"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/update_net_duct.html"
scrapedAt: "2026-06-15T18:25:38.528Z"
pagefind: false
---
The grandMA3 net duct forms the basis of the MA-Net3 connection between grandMA3 devices and external tracking systems or media servers. In order to connect a tracking system or media server to your grandMA3 system via MA-Net3, the grandMA3 net duct must be installed in the third-party software, which must have the same version as your grandMA3 devices.

**Requirements:**

- Download the latest grandMA3 net duct software version from[ www.malighting.com](https://www.malighting.com/downloads/products/grandma3/). For more information, see [update the software](/grandma3/2-3/update/).
- Have an external tracking system or media server ready that supports the grandMA3 net duct.

---

## Install and Update grandMA3 net duct

### Install and Update per USB Stick

|                                            |                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                             |
|                                            | For the first initialization and also to update, the external device must be running in the update mode. For more information, see the manual of the external device. |

|                                            |                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                               |
|                                            | To establish a connection, the external device has to be updated to match the current version of the grandMA3 device.   |

**Requirement:** The USB flash drive's data system has to be FAT32. 

1. Extract the zip file grandMA3\_viz\_key\_net\_duct\_vx.x.x.x.zip and copy the the ma folder into the root directory of the USB flash drive.
2. Insert the USB flash drive in the grandMA3 onPC or console USB port.

Follow the next steps from point 4.

### Install and Update via the Local Hard Drive

1. Extract the zip file grandMA3\_viz\_key\_net\_duct\_vx.x.x.x.zip.

2. Open the folder ma.

3. For Windows systems, copy the files from the ma folder into the directory C:\ProgramData\MALightingTechnology\installation\_packages. For macOS systems, copy the files from the ma folder into the directory \~/MALightingTechnology/installation\_packages. For more information, see [Folder Structure](/grandma3/2-3/fm_folder_structure/).

4. To access Software Update, tap ![gear](/img/grandma3/2-3/icon_gear_15px-1dd78f.png).

5. Tap Settings.

6. Tap** **Software Update. The Software Update window opens.

7. Tap Select and Import Update Files. The Select Update pop-up opens.\
   ![](/img/grandma3/2-3/popup_update_net_duct_v2-2_-509eb2.png)\
   _Select Update pop-up_

8. Select the location that contains the update files (internal or any plugged-in external device). Select the release\_viz\_key\_net\_duct\_vx.x.x.x.xml file.

9. Tap Select. The pop-up closes and the End User License Agreement (EULA) opens.

10. Confirm the End User License Agreement (EULA) by scrolling down and then tapping I agree.

    |                                            |                                                                                                                    |
    | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                          |
    |                                            | The currently selected update file is displayed at the title bar of the software update window.                    |

11. In the device list, tap the external device you want to install grandMA3 net duct. The selected devices turns into bright blue.

    |                                                  |                                                                                                                                            |
    | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
    | ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                             |
    |                                                  | Only devices with the **Type "**TrackingServer"  or "MediaServer" can be updated. The devices are listed in the NetworkNode category. |

12. Tap Update Devices. The software update starts copying files.

13. After the files are transferred you might need to restart the external device and follow the manual of the external device.  ![Update this description text.](/img/grandma3/2-3/menu_network_netduct_v2-2-cca48b.png)

    Network menu

####

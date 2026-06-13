---
title: "Connect grandMA3 extension"
description: "The grandMA3 extension allows you to increase the number of physical executor handles for a grandMA3 full-size (CRV), grandMA3 light (CRV), or grandMA3 replay u"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/fs_connect_extension.html"
scrapedAt: "2026-06-12T21:24:18.156Z"
---
The grandMA3 extension allows you to increase the number of physical executor handles for a grandMA3 full-size (CRV), grandMA3 light (CRV), or grandMA3 replay unit.

For more information about this device, please refer to [grandMA3 extension](/grandma3/2-4/do_extension/) in the Device Overview section.

The number of grandMA3 extensions connected to a grandMA3 console depends on the console type:

| Device                             | Number of grandMA3 extensions |
| ---------------------------------- | ----------------------------- |
| grandMA3 full-size / full-size CRV | 1                             |
| grandMA3 light / light CRV         | 2                             |
| grandMA3 replay unit               | 3                             |

**Requirements:**

- The grandMA3 extension needs to be in the same IP subnet as the console. For more information about the network, see  [Networking](/grandma3/2-4/network/).
- The grandMA3 extension software version must match the console software version.

---

To display the software version on an extension:

- Boot the extension. The software version is displayed in the lower-left corner.

To display the extension software version on a console:

1. Tap Menu and Network. The Network window opens.
2. Tap on the arrow ![](/img/grandma3/2-4/icon_network_arrow-bb83b7.png) next to Extension. The flip-menu opens.
3. The software version is shown under Version Big in the grandMA3 extension column.

![Update this description text.](/img/grandma3/2-4/menu_network_extensio_v2-3-f3cae7.png)

Network menu

---

|                                            |                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                        |
|                                            | An extension only connects to a specific console. It is not a standalone device. |

|                                                  |                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                            |
|                                                  | To establish a connection with an extension, the IP address of the extension must be in the same IP range as the console. |

To change the extension's IP address remotely from a console or onPC station:

1. Tap Menu and Network. The network window opens.
2. Select the grandMA3 extension entry, then click IP address / tap and hold it.
3. Use the pop-up window to change the IP settings.

To change the IP address on the extension:

1. Turn on the extension.
2. Tap the gear icon ![](/img/grandma3/2-4/icon_gear_15_v1-0-2ad84a.png) to open the Network Interface. A network interface pop-up opens.
3. Tap on the IP address. The IP editor opens.

![](/img/grandma3/2-4/window_grandma3_extension_1_v1-8-65256d.png)

Gear icon on the grandMA3 extension

![](/img/grandma3/2-4/popup_grandma3_extension1_v1-8-0bc077.png)

Network Interfaces on the grandMA3 extension

To establish a connection between a console and an extension:

1. Select the extension in the network menu on the console,
2. Tap Invite Station. The connection will be initiated.

|                                                  |                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                          |
|                                                  | It is not possible to invite the extension to a second console when it is already connected to another. |

To disconnect the extension from a console, cancel the connection on the console the extension is connected to at the moment:

1. Select the extension in the network menu on the console.
2. Tap Dismiss Station. The connection will be disconnected.



It can now be connected to a different console.

---

The Remote IP column in the network menu shows which console the extensions are currently connected to.\
 

When an extension is successfully connected to a console, it displays the first wing of executors by default.

To display a different executor wing:

- Tap Menu - Settings - Extension Configuration. In the Extension Configuration menu, you can only change the WingID for the connected extension.

![Update this description text.](/img/grandma3/2-4/menu_extension_configuration_v2-3-cf65c4.png)

Extension Configuration menu

There are 2 column modes: Condensed (default) and Full.

1. The condensed mode only displays information about the connection state, IP, and WingID.
2. The full mode also displays the columns "Connected", "Count", and "Device Type".

- Connection State: Can be Yes or No. This cell cannot be edited by the user and indicates whether the extension is connected to the console.
- IP: Displays the extension's IP address. This cell also cannot be edited by the user.
- Wing ID: Displays the ID of the executor wing that the extension controls. This property can be changed by the user.
- Connected Count: The higher the number, the more often the extension tried to connect to the console. In a faulty network environment, the number can increase quickly due to reconnection. This value cannot be edited by the user.
- Device Type: This column displays the extension's device type. Typically, it is the grandMA3 Fader Module Encoder (MFE). This cell also cannot be edited.

The extension desk light is controlled together with the console's desk lights.

The custom section of an extension can mirror the console's [Custom Area](/grandma3/2-4/do_control_custom/) or be independent of it, depending on user settings.

To learn more about user settings, read the [User settings topic](/grandma3/2-4/user_settings/).

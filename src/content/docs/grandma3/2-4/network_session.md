---
title: "Session"
description: "MA devices are connected in Sessions."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_session.html"
scrapedAt: "2026-06-12T21:24:44.947Z"
---
MA devices are connected in **Sessions.**

Controlling devices (grandMA3 onPC, grandMA3 replay unit, and grandMA3 consoles) are called **Stations**.

Multiple sessions can exist in the same network and are identified by a session name and location.

|                                            |                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                 |
|                                            | Learn more about different ways the grandMA3 system can work in a networked environment in the [System Overview](/grandma3/2-4/system/).  |

## Session Rules

The grandMA3 Session is an essential part of a working system.

The rules for accomplishing and maintaining a stable session are listed below to help understand the system's behavior.

- A session always creates a **Master** station.
- A session always creates a unique, matching **Session Index**, which the user cannot set.
- A session always needs a unique, matching **Session Name** across all members.
- A session always needs a matching **Location** across all members.
- All session members (stations) are displayed with a green background in the **Stations** tab in the **Network Menu**.
- All members must have the same **Streaming Version** of the software - the first three numbers of a software version number.
- Devices can be invited or intentionally join the session.
- Devices can be protected from being invited.
- Devices that lost the connection to their session will be auto-invited when coming back online - if stated in the network list of the show file and the Invite button is activated.
- Two devices with the same Session Index in the same network will cause a session data conflict when both are in Master states. The session data conflict only needs user interaction if the system cannot solve it automatically.
- All DMX network protocols will be output from the **Master** station only.
- A maximum of 32 sessions are possible in one network domain with a maximum of 1 fully loaded session (262 144**** Parameter) as a total.
- Consoles in session with the same user logged in will work in **Full-Tracking Mode**.
- Consoles in session with different users logged in will work in **Multi-User Mode**.
- The network needs a latency of less than 2ms for data-package transmission (for synchronization) to avoid output jitter!
- The session timeout (before action will be taken when a station loses connection) is 5s!

Many of the elements above can be seen and edited in the network menu.

MA devices recognized in the network can be seen in the network menu.

The menu can be accessed in multiple ways.

|                                                  |                                                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                         |
|                                                  | When stations are in network overload, up to three progress bars indicate the stations that are most overloaded. This can be the case when transferring huge amount of data in the session, for example when copying a huge data pool or during show data negotiation. |

### Open the Menu Using the Command Line

Type the following command in the command line input and execute it:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Menu "Network" |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%27Network%27)

### Open the Menu from the Menu Pop-up

This is a combination of keys and buttons. It executes the same command as above.

1. Press Menu.
2. Tap Network on the menu selection pop-up.

### Open the Menu Using the Dedicated Button

The [Command Line](/grandma3/2-4/ws_ui_command_line/) has a dedicated button for the network menu (it can have different colors):

![](/img/grandma3/2-4/img_network-button_v0-91-2ce84b.png)

Tap this button to open the menu.

![This is the network menu showing the stations in system.](/img/grandma3/2-4/menu_network_v2-2-36a7da.png)

_The Network menu lists all MA devices in the network_

The title bar has the normal close button (![](/img/grandma3/2-4/icon_cross_15px-9b559c.png)). Next to this are buttons that display the device's current status, a filter button, and a button that opens a [My Interfaces pop-up]() where the network interfaces are listed and can be modified.

The possible filters are:

- **All**:\
  This lists all stations.
- **My Session**:\
  This only lists the stations that are in the same session as this station.
- **Not My Session**:\
  This lists the stations that are not part of this station's session.
- **Wrong Version**:\
  This lists stations that have software version numbers that are different from this station.
- **My Location**:\
  This lists the stations that have the same **Location** value. Read about the location setting below.

The tool buttons on the left side have four buttons: Stations, [Keys](/grandma3/2-4/network_session_key/), [Web Remote](/grandma3/2-4/network_webremote/), and [Station Control](/grandma3/2-4/network_station_control/).

There are four buttons on the left side at the bottom: [Invite Station](/grandma3/2-4/network_session_invite/), [Dismiss Station](/grandma3/2-4/network_session_dismiss/), [Join Session](/grandma3/2-4/network_session_join/), and [Leave Session](/grandma3/2-4/network_session_leave/).

Some input buttons change the session settings for the station being operated.

This is a short explanation of each field:

- **HostName**:\
  The name of this device. The name can be changed freely. It does not influence the session. It can be used to identify individual devices. It can only be edited when the station is not in a session.
- **Session**:\
  The name of the session. Three elements need to match before devices can connect in the session. The session name, the **Location**, and the **Key**. It can only be edited when the station is not in a session.
- **Location**:\
  The session location. It can be anything. It does not need to be the actual location for the session. It is used together with the session name to identify the session. It can only be edited when the station is not in a session.
- **Multicast Base**:\
  The multicast base value defines the first three numbers in the multicast IPv4 address for the MA-Net3 session. The options are **Default** and **Alternative**. Learn more about the multicast addresses in the [Protocol Details topic](/grandma3/2-4/network_design_protocols/). Changing this setting while in a session also changes this setting for all grandMA3 devices in the session. Changing it while not in a session only changes the setting for this station.\
  Changing the base address opens a pop-up that warns about the potential drawbacks of the change and asks for confirmation.

|                                            |                                                                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                           |
|                                            | Be careful when changing the Multicast Base address, as it affects the entire network structure. Each grandMA3 device must use the same multicast address to enable communication between devices.  |

- **MA-Net Interface**:\
  Tapping the Interface field opens a small **Select Interface pop-up**. This lists the possible network interfaces, including an Auto option (Read more about this option [below](/grandma3/2-4/network_session/#auto_option)). Read more about changing the IP addresses in [Interfaces and IP](/grandma3/2-4/network_interface/).
- **World Server**:\
  This input field is used to define what world server to contact. Read more about it in the [World Server topic](/grandma3/2-4/system_world/).
- **Key**:\
  The key is a password for the session. Tapping this field opens a small **Select Key pop-up** that lists the possible keys - including the option to create a new one. Read more about key creation in [Create a Custom Key](/grandma3/2-4/network_session_key/).
- **Master Priority**:\
  This field is used to set the priority for this device. Tapping this field opens the small **Select MasterPriority pop-up**. It can only be edited when the station is not in a session.\
  There are several levels of priority: **Never** (not able to be master), **Very Low**, **Low**, **Normal**, and **High**. If stations have the same priority, then the station with the lowest slot number becomes master. Slot numbers are automatically assigned depending on the order of devices joined in the session. The slot number is listed in the station table.

|                                            |                                                                                                                                                                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                |
|                                            | Each station in a session has a priority. The session needs to have one station, which is the master in the session. If there is only a station with the never priority, then the session is terminated since this station can never become the master.  |

- **Invite**:\
  This On/Off button toggles **Invites**. Disabling this prevents this station from being invited into a session. It is still possible to join a session from this station, but it is an action that needs to be performed locally at the station.

- **Web Remote**:\
  This On/Off button toggles the **Web Remote** access. Turning this off prevents web remote connections.

- **Remote HID**:\
  This On/Off button toggles **Remote HID**. Learn more about this in the [Remote HID topic](/grandma3/2-4/comad_remotehid/).

- **RDM**:\
  This is a global RDM On/Off button. Learn more about RDM in the [RDM section](/grandma3/2-4/rdm/).

- **Enable button** (![](/img/grandma3/2-4/icon_power_15_v1-0-642ae2.png)):\
  This button [enables or disables](/grandma3/2-4/network/) the network connections.

  - A red icon means the network connection is disabled. The text beneath the icon describes whether a session is created or joined if the network is enabled.
  - A green icon means the network connection is enabled.
  - A green icon with a red background means the connection is enabled, but the interface is not connected.

## []()Auto Option in MA-Net Interface Select Interface Pop-up

The dropdown for selecting the interface used for MA-Net in the network menu has an **Auto** option.

When the MA-Net interface is set to Auto, the grandMA3 software determines the interface to use. In this case, the IP of the selected interface is set into angle brackets on the MA-Net Interface button, for example, <192.168.0.4>.

The order of the following rules specifies the automatically determined interface in Auto mode:

1. When a Class C IP address (192.168.x.y) is found, the interface with this IP will be taken. No matter the link state of this interface. (With onPC on Mac, the interface link state must be active.)
2. When no Class C IP is found, the software searches for a Class B IP (172.16.x.y). Only if the interface has an active link state.
3. If also no Class B IP address is available, a Class A IP in the range of 10 (10.x.y.z) will be searched only if the interface has an active link state.
4. If this also fails, a Class A IP in the range of 2 (2.x.y.z) will be searched only if the interface has an active link state.
5. The loopback interface will be used if no Class A IP is available.

Changing the selected interface from Auto to the preferred interface is always possible.

After a full install, the first interface will be selected as the default interface on grandMA3 consoles, processing units, and xPort nodes.

Per default, grandMA3 onPC on Windows and macOS will be set to Auto.

---

The **Stations** view of this menu displays all the MA devices organized by type. The devices with the green background are connected devices. The device with green text is the one you are currently viewing.

This is a short description of the columns:

- **Lock**:\
  A row can be locked by the user. Editing the field toggles between empty and "UL" (User Locked).
- **No**:\
  This is the row number. Notice that a row can be a child of a parent object. If there is a number in parentheses, then it is the number of children in the parent object. 
- **Name**:\
  This is the name of the device or device type.
- **Type**:\
  This shows the type for each device. OnPCs might be listed as "Undefined".
- **IP**:\
  This is the IP address for the device's MA-Net interface.
- **Session**:\
  This is the name of the session the device is a part of.
- **Location**:\
  This is the location for the session. For devices to connect, the session name, location, and key must match.
- **Show File**:\
  This is the name of the active show file on the device.
- **Status**:\
  This is the device's session status.
- **Master Prio**:\
  This is the priority for the station.
- **Version Big**:\
  This is the software version for the device. The **Version Big** number indicates the version number that needs to match for stations and processing units to connect in a session.
- **Version Small**:\
  This is the software number that needs to match for grandMA xPortNodes to be able to connect to a session.
- **Enabled**:\
  This shows if the network connection is enabled.
- **Online Time**:\
  This is the time the device has been online in the session. When the station connects to a session, then the online time resets.
- **Session Index**:\
  Each session is automatically assigned a number. This is the session number for each device. There is a maximum of 32 sessions in the same network.
- **Session Slot**:\
  Each station in a session has a unique slot ID. This is the ID number for each device.
- **Remote IP**:\
  Some MA devices are connected to a station. For instance, the grandMA3 extension. This field shows the IP address of the station these devices are connected.
- **Mask**:\
  This is the station's sub-net mask.
- **Flow Control Level**:\
  This shows information about congestion and data loss in a session. It displays, on a scale of 0 to 255, the intensity of flow control.
- **NACK Count Per 1m/5m/10m**:\
  This shows information about negative acknowledgments (Nack). Nack's can happen when network packages fail to properly get though the network.\
  This shows the amount of nacks in the last one, five, and ten minutes. It can be reset by editing the cell. This also resets the total count (read below).
- **NACK Count Total**:\
  This shows the total amount of nacks since the session started. It can be reset by editing the cell. This also resets the nack counters described above.

|                                                  |                                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                              |
|                                                  | Please check the network environment of a device if rates of nacks are constantly above 0.  |

|                                                  |                                                                |
| ------------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                 |
|                                                  | The NACK's are only shown on the master station in a session.  |

## Session Maximums

There are some maximum numbers for a session. These describe some limits in a session that can be good to know.

There should only be one fully loaded session in a network domain. If more is needed, great care should be taken to ensure the network can manage the traffic without creating bottlenecks.

These numbers are for one session.

A session can control up to **262 144 parameters**. The [Parameters topics](/grandma3/2-4/system_parameter/) explain this and how the parameters can be expanded to the limit.

### MA Devices

All MA devices in a session belong to one of the following three categories. 

**Category A** - maximum **32 devices** in a session.

These stations and devices calculate the show file information and parameters for the output. This includes grandMA3 consoles, grandMA3 replay-units, grandMA3 onPC stations, and grandMA3 processing units.

|                                            |                                                                                                                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                     |
|                                            | When adding several devices to the session simultaneously, they will be added following their internal order in the software. This order is represented by the No column in the Network menu. |

A grandMA3 onPC counts as one station, no matter how many onPC wings are connected. The grandMA3 onPC wings do not count as devices in the session.

All category A devices should be on the same switch or at least on directly connected switches.

**Category B** - maximum **64 devices** in a session.

Depending on their task, these stations and devices handle specific show file information. This includes grandMA3 consoles, grandMA3 replay-units, and grandMA3 onPC stations which have session priority “Never”.

Also, grandMA3 processing units can be in category B. The system automatically moves processing units into this category whenever category A is full. In this way, the maximum parameter count in a session can be reached, no matter how many processing units of a specific type (M, L, or XL) are needed.

**Category C** - maximum **128 devices** in a session.

These are MA devices that use the calculated parameters and are in session. MA Nodes running in grandMA3 mode are category C devices.

|                                                  |                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                       |
|                                                  | Network nodes that run in sACN or Art-Net mode do not count against the limitation.  |

## Subtopics

- [Create a Session](/grandma3/2-4/network_session_create/)
- [Join a Session](/grandma3/2-4/network_session_join/)
- [Leave a Session](/grandma3/2-4/network_session_leave/)
- [Invite a Station into a Session](/grandma3/2-4/network_session_invite/)
- [Dismiss Stations from a Session](/grandma3/2-4/network_session_dismiss/)
- [Create a Custom Key](/grandma3/2-4/network_session_key/)
- [Session Master Selection](/grandma3/2-4/network_session_master/)

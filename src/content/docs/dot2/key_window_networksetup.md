---
title: "Network Setup"
description: "To go to the Network Setup, press Setup and tap at Sessions."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_networksetup.html"
scrapedAt: "2026-06-12T21:29:44.771Z"
---
To go to the Network Setup, press Setup and tap at Sessions.

![](/img/dot2/dot2_viewsandwindows_networksetup01_1-2-588de9.png)

_Figure 1: Network Setup Window_

In this window, you can:

- Start, join, stop, or leave a session
- Add or remove devices into or from the session
- Assign a different DMX out universe to the XLR connectors (tab consoles and DMX Nodes)

The session status is independent from the show file.

Below the title bar is the session status displayed.\
By default, the console is standalone. To connect other devices to the console, you need to start a session first.

To start a session, tap at Start new or join an existing session. The [select session number window](/dot2/key_window_selectsessionnumber/) opens.

If the console is in a session, the session number is displayed in the session status text.

## Connected Devices Area

In the connected devices area are all connected and previous connected devices displayed.\
The devices are organized in the tabs:

- Consoles
- OnPC
- 3D
- DMX Nodes

To select a tab, tap at the device name, e.g. 3D.

The columns displays the IPv6 address, the hostname and the version of the connected device.\
For consoles and DMX Nodes, the type and the XLR connectors are displayed as well.

**Important:**\
Only the hostname of the Node4s are changeable. All other hostnames are readonly.

To change the hostname of a Node4, tap and hold in a cell of the hostname or press the screen encoder. The virtual keyboard opens.\
The assigned hostname is displayed at the front end display of the Node4.

To change the DMX out universe, tap and hold in a cell of the XLR connector or press the screen encoder. The [Calculator](/dot2/key_view_calculator/) opens.\
If only 1 universe in total is patched but different XLR outs are necessary, you can assign the same universe to more than one XLR out.

**Important:**\
To change the universe, a session is NOT required.

To add a device, tap Add. The [select station... window](/dot2/key_window_selectstation/) opens.

**Hint:**\
To add a device, it is not necessary to select the device column first.

**Important:**\
The connected devices and the hostnames of the Node4´s will be saved in the show file. 

To remove a device, select the device in the table, tab Remove. The device is removed from the session.

A device can have four different status:

![](/img/dot2/dot2_viewsandwindows_networksetup02_1-0-1cff15.png)\
**Light Green:**\
This is your station.

![](/img/dot2/dot2_viewsandwindows_networksetup03_1-0-325100.png)\
**Dark Green:**\
This device is session member.

![](/img/dot2/dot2_viewsandwindows_networksetup04_1-2-c0e828.png)\
**Red Background:**\
This device is not connect.\
The device was connected and is off now.

![](/img/dot2/dot2_viewsandwindows_networksetup05_1-2-fecb22.png)\
**Red Version Number:**\
The device can not connect. If the version number is red, you tried to connect devices with different versions. Update the dot2, dot2 onPC or dot2 3D to the latest version.

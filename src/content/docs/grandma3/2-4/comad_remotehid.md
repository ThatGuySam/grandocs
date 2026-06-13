---
title: "RemoteHID"
description: "The Remote HID feature lets you use local HID devices (typically a mouse and keyboard) to control other grandMA3 stations on the network, as if they were connec"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/comad_remotehid.html"
scrapedAt: "2026-06-12T21:25:14.008Z"
---
The Remote HID feature lets you use local HID devices (typically a mouse and keyboard) to control other grandMA3 stations on the network, as if they were connected to the remote device.

A use case for this feature is controlling onPC stations used for visualization directly from a console. Instead of placing several mice and keyboards on the table, only one set of mouse and/or keyboard is needed.

|                                                    |                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                  |
|                                                    | It is not a remote desktop feature. The remote device's display must be visible.  |

To control another station from the local console, follow these steps:

1. Enable RemoteHID in Menu - Network menu on the remote station.
2. Execute the RemoteHID command on the local station:

RemoteHID IP \[remote\_ip\_address]

 - Or -

RemoteHID \[remote\_station\_type] \["remote\_hostname"]

3. Once the connection is established, the local station's screen changes to olive green. During the connection, only the executors, including the 100mm faders and Go+\[Large], Go-\[Large], and Pause\[Large] remain usable on the local station. All other elements are blocked.

The remote function can be ended using one of the following options:

- Press MA + MA + Off
- Use the keyboard shortcut Shift + Ctrl + Alt + E

### Example

A pre-programming setup with a console and a powerful graphics computer running grandMA3 onPC, optimized for 3D visualization. They are connected in a session on a local LAN network.

The grandMA3 onPCs hostname is "3D," and RemoteHID is enabled.

From the console, you need to change a setting in the 3D window of the grandMA3 onPC.

In the command line, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>RemoteHID onPC "3D" |

Now, the mouse and keyboard connected to the console can be used to operate the computer.

Finish the connection by pressing MA + MA + Off

---
title: "Standalone Device"
description: "If a console is not connected to anything, then it is a Standalone system. It is also a standalone system using a grandMA3 onPC with a connected grandMA3 onPC c"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/system_standalone.html"
scrapedAt: "2026-06-12T21:24:17.107Z"
---
If a console is not connected to anything, then it is a **Standalone** system. It is also a standalone system using a grandMA3 onPC with a connected grandMA3 onPC command wing.

Any grandMA3 device that can create and run a [session](/grandma3/2-4/network_session/) is called a **Station**.

Stations with network disabled are in **Standalone** mode.

A station is in **IdleMaster** mode when the network is On, and it is ready to be in a session with other stations, but currently, it is alone. A console connected to a network but not in a session with other stations is considered a master, ready to connect to other stations.

The current status is displayed in the [Network menu](/grandma3/2-4/network_session/). The title bar has an area that displays the status.

The current status is also displayed in the icon area on the right in the [Command Line](/grandma3/2-4/ws_ui_command_line/).

- ![](/img/grandma3/2-4/img_network-icon_gray_v2-2-ea7b98.png) This icon indicates the **IdleMaster** status.

- ![](/img/grandma3/2-4/img_network-icon_red_v2-2-77fa24.png) This icon indicates the **Standalone** status and that the network connection is turned off.

- ![](/img/grandma3/2-4/img_network-icon_green_v2-2-bf9cef.png) This icon indicates that the station is in a session as a **Connected** member. Learn more in the [Locally Networked Devices topic](/grandma3/2-4/system_local/).

- ![](/img/grandma3/2-4/img_network-icon_blue_v2-2-5723ab.png) This icon indicates that the station is in a session as a **GlobalMaster**. Learn more in the [Locally Networked Devices topic](/grandma3/2-4/system_local/).

If the station is in a session and it needs to be set to Standalone mode, then turn off the network. This can be done using the [GUI](/grandma3/2-4/network_session_leave/) or the command line ([LeaveSession keyword](/grandma3/2-4/keyword_leavesession/)).

 

In **Standalone** or **IdleMaster** mode, the station is limited to controlling only the number of [parameters](/grandma3/2-4/system_parameter/) the console/onPC unlocks.

It is only possible to use the DMX ports on the console/wings.

If DMX is output over an Ethernet connection, the console must be in a session. Even though it is not connected to other stations, it still needs to run an active session as IdleMaster.

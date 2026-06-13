---
title: "World Server"
description: "Each station can be connected to the internet and a world server."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/system_world.html"
scrapedAt: "2026-06-12T21:24:17.260Z"
---
Each station can be connected to the internet and a world server.

The station automatically tries to connect to a world server if an internet connection is detected.

The connection status of the world server can be displayed in the [Command Line](/grandma3/2-4/ws_ui_command_line/). A globe icon indicates the connection status.

![](/img/grandma3/2-4/icon_worldserver_24_v1-9-0bc73e.png)

If the globe is green, then the station is connected to the server.

Learn more about networking in the [Networking topic](/grandma3/2-4/network/).

Learn more bout how to display icons in the command line in the [Message Center topic](/grandma3/2-4/system_message_center/).

The address of the official world server, provided by MA Lighting, is **worldserver.malighting.de**

The server address can be changed in the Network Menu. Learn more about this in the [Session topic](/grandma3/2-4/network_session/).

The server offers two functions: Fixture type files and Crash Log upload.

## Fixture Type Files

Fixture type files from the GDTF-share and grandMA3 Share are provided as a direct import to the show file. Learn more about manually importing GDTF in the [Import GDTF topic](/grandma3/2-4/ft_import_gdtf/) and patching fixtures in the [Add Fixtures to the Show topic](/grandma3/2-4/patch_add_fixtures/).

## Crash Logs

A station creates a crash log if it crashes. These log files are automatically sent to the server when there is a connection. This means that the file is sent the next time the station is connected. This is also true if the station returns from a job and is connected to the world server when it returns to the workshop and is connected to the Internet.

If Tech Support is needed, please make sure the station has been online and provide the Tech Support date and time the crash happened, and the station's serial number (grandMA3 onPC stations also have a generated serial number). The serial number can be found using the [Version Keyword](/grandma3/2-4/keyword_version/) - grandMA3 onPC has an automatically generated unique serial number.

|                                                  |                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                      |
|                                                  | If these functions are not desired, then change the server address in the **Network menu** to "0".  |

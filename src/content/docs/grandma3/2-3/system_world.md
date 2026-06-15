---
title: "World Server"
description: "Each station can be connected to the internet and a world server."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/system_world.html"
scrapedAt: "2026-06-15T18:24:52.778Z"
pagefind: false
---
Each station can be connected to the internet and a world server.

The station automatically tries connecting to a world server if an internet connection is detected.

The connection status of the world server can be displayed in the [Command Line](/grandma3/2-3/ws_ui_command_line/). A globe icon indicates the connection status.

![](/img/grandma3/2-3/icon_worldserver_24_v1-9-f1a2f3.png)

If the globe is green, then the station is connected to the server.

Learn more about networking in the [Networking topic](/grandma3/2-3/network/).

Learn more bout how to display icons in the command line in the [Message Center topic](/grandma3/2-3/system_message_center/).

The address of the official world server, provided by MA Lighting, is **worldserver.malighting.de**

The server address can be changed in the Network Menu. Learn more about this in the [Session topic](/grandma3/2-3/network_session/).

The server offers two functions: Fixture type files and Crash Log upload.

## Fixture Type Files

Fixture type files from the GDTF-share and grandMA3 Share are provided as a direct import to the show file. Learn more about manually importing GDTF in the [Import GDTF topic](/grandma3/2-3/ft_import_gdtf/) and patching fixtures in the [Add Fixtures to the Show topic](/grandma3/2-3/patch_add_fixtures/).

## Crash Logs

A station creates a crash log if it crashes. These log files are automatically sent to the server when there is a connection. This means that the file is sent the next time the station is connected. This is also true if the station returns from a job and is connected to the world server when it returns to the workshop.

If Tech Support is needed, please make sure the station has been online and provide the Tech Support date and time the crash happened and the station's serial number (grandMA3 onPC stations also have a generated serial number). The serial number can be found using the [Version Keyword](/grandma3/2-3/keyword_version/) - grandMA3 onPC has a generated serial number.

|                                                  |                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                      |
|                                                  | If these functions are not desired, then change the server address in the **Network menu** to "0".  |

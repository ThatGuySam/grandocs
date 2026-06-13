---
title: "Telnet remote"
description: "The grandMA2 can be remote controlled via Telnet."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_remote_control_telnet.html"
scrapedAt: "2026-06-12T21:28:21.390Z"
---
The grandMA2 can be remote controlled via Telnet.

This gives access to command line. Any command that can be executed locally in the command line on a station, can also be done using the Telnet connection.

 

It needs to be enabled in the Global Settings: **Setup -> Console -> Global Settings -> Telnet**

Here is a setting called "Telnet" with two options: **Login Disabled** and **Login Enabled**.

When it is enabled, then the station (Console or onPC) can be reached by its IP address and the IP port number 30000 - do not use the Telnet default IP port 23.

**Hint:**\
Using port 30001 gives read only access to the [System Monitor](/grandma2/key_ost_system_monitor/).

Using this IP address and port number will give access to the command line.

 

Using a telnet program like PuTTy the feedback from the grandMA2 will look like this:

![](/img/grandma2/img_putty_v3-3-7c3247.png)

_PuTTy Telnet feedback_

It is not actually logged in as the default **guest** user, even though the feedback writes it.

Before any commands can be sent to the system, there needs to be a [login command](/grandma2/key_keyword_login/) for one of the users in the show.

**Hint:**\
In installations where Telnet is used to control a grandMA2 system, it might be a good idea to create a special user for the Telnet commands. Be aware that the telnet connection is case sensitive with the username and password.

After the login, any commands can be written to the system.

**Restriction:**\
Pay close attention when accessing the fixture setup and schedule from the telnet connection. It lock access for other users and there is no explaining warning.

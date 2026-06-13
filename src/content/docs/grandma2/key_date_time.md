---
title: "Date & Time"
description: "Sometimes the console needs to know the current date and time, and sometimes also the location of the console. These settings are important if an Agenda is used"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_date_time.html"
scrapedAt: "2026-06-12T21:28:29.004Z"
---
Sometimes the console needs to know the current date and time, and sometimes also the location of the console. These settings are important if an **Agenda** is used. For more information, read the **[Agenda](/grandma2/key_agenda/)** topic. 

The date and time settings are located in the **Setup I Console I Date & Time**.

![](/img/grandma2/window_time_date_v3_3-85373d.png)

_Date & Time window_

## Date and Time

To adjust the date and time, tap the green squares with hour, minute, second, day, month or year. This will open a calculator where it is possible to enter the current value.

**Important:**\
If the console is connected to an NTP server or a GPS, the date and time will be synchronized from the server or maybe the GPS and it will not be possible to set these manually. Read more about NTP server and GPS below.

 

---

## Location

In the **Location** tab, it is possible to enter the current timezone and the current longitude and latitude.

The Timezone refers to international standard GMT or UTC. Tap the green square and a calculator appears. Enter the current timezone, for example +1 for Central Europe, -5 for New York or +3 for Moscow.

It is also possible to enter the current location by tapping the green squares at Longitude and Latitude. The default position (9.94 - 49.79) is the center of Würzburg in Germany.

If the longitude is above zero, the position is north of the equator, and if it is below zero, the position will be placed on the southern hemisphere.

If the latitude is above zero, the position will be east of Greenwich (London) and if it is below zero, the position will be west of Greenwich.

---

## Daylight Saving

Daylight Saving is the practice of setting the clocks forward 1 hour from standard time during the summer months, and back again in the fall, in order to make better use of natural daylight.

Use the green squares to set the day, month and time where the daylight saving starts and stops.

To enable or disable daylight saving, tap Daylight Saving Enable.

---

## NTP

Network Time Protocol (NTP) is a networking protocol for clock synchronization. There are NTP servers all over the world, and it is a good idea to find a server in the local area.

 

**Important:**\
To use this function, a station with an internet connection (onPC) or connection to an NTP server must be in the session.\
The NTP Server must be connected with the station that is the session master. 

---

Tap NTP info and a pop-up appear.

![](/img/grandma2/popup_ntp_info_v3_3-c865bc.png)

_NTP info pop-up_

The steps to let all of the consoles in the session synchronize to an NTP server. This has to be done on a station with a connection to the NTP server:

1. Tap the green field and type in the IP-address of the NTP server
2. Tap Sync with NTP, until it shows **Enable**

A note in the bottom of the pop-up labeled **NTP server found: Received Time stamp** appears when there is a connection to the server.

**Hint:**\
The IP address on the image above is the NTP server on VirginiaTech University, connected by an onPC with an internet connection.

 

---

 

## Daylight Info

To get information about Sunrise, Sunset, Dusk, and Dawn according to the position or timezone, tap Daylight Info.

![](/img/grandma2/popup_daylight_info_v3_3-e50e1c.png)

_Daylight info pop-up_

These are the times the **Agenda** uses.

 

---

## GPS

Tap GPS to open the GPS pop-up

**Important:**\
To use the GPS function, an NMEA 0183 (4800/8-N-1) USB GPS receiver has to be connected.

![](/img/grandma2/popup_gps-info_v3-3-5c436c.png)

_GPS info pop-up_

To use a GPS on the system do as followed:

1. Connect the GPS to one of the USB ports
2. Tap GPS until it is labeled Enable
3. \[Optional] Tap Sync with GPS to synchronize the system time with the GPS UTC time. Tap until it is labeled Enabled. Then, it is not possible to set the time manually.
4. \[Optional] Tap Timezone until it is labeled **Auto**, to let the GPS manage the timezones. Then, it is not possible to set the timezone manually. 

The GPS Master refers to the console where the GPS is connected.

---
title: "Date and Time"
description: "Sets date and time."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/si_date_and_time.html"
scrapedAt: "2026-06-15T18:25:37.064Z"
pagefind: false
---
Sets date and time.

To access **Date and Time**:

1. Press Menu.
2. Tap Settings. A drop-down menu opens.
3. Tap**** Date and Time. The Date and Time window opens. 

 

## Session Time

The Session Time tab provides an overview about the current **Time**, **Date** and **Location**.

![Date and Time window with Session Time settings](/img/grandma3/2-3/menu_date_and_time_session_time_v2-1-8c9632.png)

Date and Time window with Session Time settings

#### Date and Time:

To set date and time manually:

1. Go to Session Time.
2. Tap the buttons with a gray title bar. The calculator opens.
3. Enter values and tap Please.

Date and time are set. 

|                                                  |                                                                                                                                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                               |
|                                                  | If Date and Time is NTP synchronized, it is not possible to adjust the values manually. Go to the Time Server tab first. Set Extern TimeSync Mode to None. Now go back to Session Time and adjust manually.  |

|                                                    |                                                                                                                                                                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                                                                                                          |
|                                                    | When using grandMA3 onPC with **m****acOS**, avoid changing the system time in the general system settings of macOS as it can cause critical time conflicts in different parts of the onPC software. Adjusting the session time in the onPC software with macOS is safe.  |

####

#### Location:

The time zone refers to the international time standard UTC. 

1. To enter the current location, tap each of the buttons –Timezone, Longitude, Latitude – on the right of the column Location.\
   The calculator opens.
2. Enter values and tap Please.

Location is set.

---

## Daylight Info

The Daylight Info tab, displays yesterday's, today's, and tomorrow's dawn, sunrise, sunset, and dusk.

![Date and Time window with Daylight Info settings](/img/grandma3/2-3/menu_date_and_time_daylight_v2-1-ce9da1.png)

Date and Time window with Daylight Info settings

All times are based on the Location settings in the tab Session Time. The times are calculated at sea level without any elevation on the horizon. Maximum precision for all times is +/- 1 minute. Dawn and Dusk are calculated using nautical twilight.

---

## Time Server

The Time Server tab allows you to synchronize the Session Time with an external time source through Network Time Protocol (NTP). 

![Date and Time window with Time Server settings and NTP Monitor](/img/grandma3/2-3/menu_date_and_time_time_server_v2-1-452c0b.png)

Date and Time window with Time Server settings and NTP Monitor

The Time Server tab offers several options:

- **Extern TimeSync Mode**: When set to NTP, Time and Date are synchronized with the NTP settings referring to Server IP and Server Name. Setting it to None, Date and Time can be set manually in the [Session Time](/grandma3/2-3/si_date_and_time/#h2__1681385269).
- **Server IP**: Tap on Server IP. A calculator opens. Type in any IP address from an NTP server. The NTP server now provides Date and Time.  
- **Server Name**: Type in any Server Name of an NTP server. This displays the Server IP automatically. The NTP server now provides Date and Time.   

The **NTP Monitor** on the right side displays details about the server's connection. 

|                                                  |                                                                                                                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                              |
|                                                  | The NTP server delivers always Coordinated Universal Time (UTC +0:00). To match it to your local time, adjust the Time zone in the **[Session Time](/grandma3/2-3/si_date_and_time/#h2__1681385269)** tab.  |

|                                                  |                                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                         |
|                                                  | The **IdleMaster** or **GlobalMaster** station determines the time of the session, even if other stations in the session have different NTP servers set up.  |

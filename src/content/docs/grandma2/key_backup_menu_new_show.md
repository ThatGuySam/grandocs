---
title: "New show"
description: "Several tabs in the backup menu offers the option to start a new show. It is not possible in the read only tabs."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_backup_menu_new_show.html"
scrapedAt: "2026-06-12T21:28:05.514Z"
---
Several tabs in the backup menu offers the option to start a new show. It is not possible in the read only tabs.

 

## The New Show pop-up

Pressing the new show button in the backup menu opens a pop-up that could look like this:

![](/img/grandma2/popup_new-show_v3-2-8ed444.png)

_New Show pop-up_

 

In this pop-up it can be chosen what show information from the currently loaded show will be cleared or removed.

In the top it is possible to write the name for the new show.

Pressing the ![](/img/grandma2/icon_cross_v3-2-5a33b3.png) opens an on-screen keyboard.

Below the name there are different boxes that can be selected. This is the different parts of the show file.

The idea is that when a new show is started there is the option to keep some of the existing data from the currently loaded show.

### Clear Show Data

This is activated as a default. The show data is the patch and fixture schedule, stored sequences, presets, groups, effects, and so on. Basically everything that is in a pool somewhere and the imported 3D elements.

### Clear Time Config

The time configuration is the current time, location, daylight savings settings and NTP (Network Time Protocol) setup. If this is cleared then the console will reset the location to the default location (The parking lot outside McFIT Fitnessstudio in Würzburg, Germany) and take the time from the computer Bios. 

### Clear Global Settings

The global settings are the ones found in Setup -> Console -> Global Settings. The settings here are shared in the session and includes enabling and disabling the Remote and Telnet, RDM, WYSIWYG, and so on.

### Clear Local Settings

The local settings are the ones found in Setup -> Console -> Local Settings. These settings only affects the local console and not all consoles in a session. It includes settings like the console language and LED background light settings.

### Clear Network Protocols

Network protocols are the settings for outputting DMX via an Ethernet connection. It includes ArtNet, sACN, ETC-Net2, KiNet1, Pathport and Shownet. These settings are found in Setup -> Network -> Network Protocols.

### Clear Network Config

Network configuration is the settings for what devices should be in the session and the DMX port setup.

### Clear User Profiles

User profiles keep all the data that is connected to the users. Clearing this data leaves only the Administrator and Guest users and the Default user profile.

 

There is a Clear All button that selects all the above boxes.

When the desired selection is made, then tap the Please button in the pop-up. 

## New show using the command line

It is possible to create a new show using the command line. The command is called NewShow. Read more about it [here](/grandma2/key_keyword_newshow/).

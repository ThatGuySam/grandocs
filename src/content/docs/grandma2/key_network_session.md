---
title: "Session control"
description: "To connect MA devices you need to create a session."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_session.html"
scrapedAt: "2026-06-12T21:28:07.237Z"
---
To connect MA devices you need to create a session.

## MA Network Control

Sessions and Stations (consoles and onPC) relation to sessions are controlled in **MA Network Control** found in the Setup menu.

It can be opened it by pressing Setup and then tap MA Network Control.

It could look like this:

![](/img/grandma2/menu_ma-network-control_v3-2-8d1632.png)

_Menu MA-Net Control_

The left side of this menu displays the different sessions in the network.

There can be a maximum of 31 sessions. Each session needs a unique session number (between 1 and 31).

There is always a line in the session control that "holds" the stations that are not currently in a session. This line is called **Not connected**.

The right side of the menu lists the different stations that are in the session selected on the left side (including the "Not connected").

## Master and Connected

In a session there is always one station that have the **Master** role. If there is more stations in the session, then the others will have the **Connected** role.

The Master is the one that transmit DMX on the network. It is also the console that executes the commands that are triggered by the sequences. If you are using MIDI, then it is important to know that the Master is the one that will transmit the MIDI information, and the station that needs the MIDI signal.

The Master is also the one that will upload the show file to new devices added to the network.

The Master and the Connected stations are all equal members in the session any one can run cues and they share all the information. If you save the show on one station it is saved on all stations.

If one session member changes the show while in a session, then all members will get the new show.

## Station priorities

You can control what station gets the Master role using the **Station Priority** setting. If one station has the "High" priority, then this station will be the Master.

There are four different priorities:

- **Never:**\
  A station with this priority will connect to a session, but it cannot create a session, and if it is the only station left then the session will end!
- **Low:**\
  A station with this priority will connect to a session. It will only be the Master if there is no one else with a higher priority.
- **Normal:**\
  This is the default priority.
- **High:**\
  In the ideal system you will have one station that have the high priority.

It is only possible to change the priority when a station is not connected to a session.

## Speed and Link Speed

The session list will display the session number, name, IP address of the master and a **Speed**. This speed can be Fast or Slow.

A **Fast** session means that the session is running at maximum speed and data packets are sent as fast as possible and in burst.

A **Slow** session means that data packets are being cued up and sent at a slower rate. Then older hardware (grandMA1 era) - with slower network cards - have a chance to keep up.

The session speed is automatically changed if the master detects older hardware directly behind the network adapter and only when the station is switched on - when the first device is a gigabit switch, it is always fast. The only way to manually change the speed is to limit a Ethernet connection to 100Mbit in the switch or in the station.

Each station also have a Link Speed column. Here it shows directly the Mbit speed connection for the station. You can change what the network card in the console is set to using the [SetNetworkSpeed command](/grandma2/key_keyword_setnetworkspeed/).

 

Please read the following pages to learn about creating sessions and adding more devices to the session.

## Subtopics

- [How to create a session](/grandma2/key_network_session_create/)
- [Protecting the session and station](/grandma2/key_network_session_protect/)
- [Adding devices to the session](/grandma2/key_network_session_add_device/)
- [How to end or leave a session](/grandma2/key_network_session_end_leave/)
- [Session collision](/grandma2/key_network_session_collision/)

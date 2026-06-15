---
title: "Locally Networked Devices"
description: "When more stations are connected in a session, then it is a networked system. Local networked systems are sessions running in the same network. This might be a "
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/system_local.html"
scrapedAt: "2026-06-15T18:24:52.773Z"
pagefind: false
---
When more stations are connected in a [session](/grandma3/2-3/network_session/), then it is a networked system. Local networked systems are sessions running in the same network. This might be a big network spanning a big area, but if it is a closed system without contact with the rest of the world (for instance, through the internet), then it is considered a local networked system. 

The smallest networked system is two stations running in a session together, where one is the master of the session, and the other is connected and running as a backup. A single station that outputs DMX locally is considered a [standalone system](/grandma3/2-3/system_standalone/).

Many systems have one console with one backup console or onPC and some networked devices to output the DMX.

If the devices that translate Ethernet data to DMX are MA nodes, then the DMX output is in sync, no matter where the DMX is output. So, a blackout cue on LED fixtures is in sync when some LEDs get a signal from the console and some LEDs from a node somewhere in the system.

Besides the stations, there are a lot of different devices that can be added to the system. Read more about the different devices in the [Device Overview topics](/grandma3/2-3/device_overview/).

In all networked systems, there is one station, the session master, called **GlobalMaster**. This station is in charge of communication and executes commands triggered by remote inputs or from a command in a sequence.

Other stations in the system are in a **Connected** status. They are connected to the master station.

Traditionally, we recommend creating local networks with good-quality switches, cables, and equipment. Most systems are local systems without any connection to the outside world.

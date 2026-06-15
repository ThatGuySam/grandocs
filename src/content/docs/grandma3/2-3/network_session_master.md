---
title: "Session Master Selection"
description: "Some rules define what station becomes the master of a session."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/network_session_master.html"
scrapedAt: "2026-06-15T18:25:19.085Z"
pagefind: false
---
Some rules define what station becomes the master of a session.

A key element to this is the stations' priorities.

## Inviting Stations into a Session

A session always has a master. If there is only one station in the session, it is **IdleMaster**. If there are more stations, it is **GlobalMaster**.

Adding another station to the session can have different outcomes:

- The joining station has a **lower priority**:\
  The station joins the session and downloads the showfile. The station's status becomes **Connected**.
- The joining station has the **same priority**:\
  The station joins the session and downloads the showfile. The station's status becomes **Connected**.
- The joining station has a **higher priority**:\
  The station joins the session, takes over the **GlobalMaster** status, and uploads its show to all connected stations. The show is replaced.

## Session Master Selection Rules

A set of rules takes effect in a situation where a new master needs to be selected among the remaining stations.

This situation can appear if the current session master disappears. For instance, if the network connection disappears.

It also happens when several stations booting up were previously part of a session.

Three rules define how the master is selected. They are in prioritized order:

1. The station with the highest priority wins. If there is more than one station with the same priority, go to rule two.
2. The stations' online time defines the master. The highest online time (+/- 5 seconds) wins. If more than one station has the same online time (+/- 5 seconds), go to rule three.
3. The station with the lowest IP address becomes the master.

The online time can be seen in the [Network Menu](/grandma3/2-3/network_session/).

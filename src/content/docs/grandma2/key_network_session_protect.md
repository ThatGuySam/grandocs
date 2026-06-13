---
title: "Protecting the session and station"
description: "In a networked solution multiple stations and devices might be connected to the same network. This can give some unfortunate situations."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_session_protect.html"
scrapedAt: "2026-06-12T21:28:07.356Z"
---
In a networked solution multiple stations and devices might be connected to the same network. This can give some unfortunate situations.

## Password protect the session

Anyone who connects to the network can choose to join your session. This will give a show upload. The system stops DMX output while the show upload is running. This can be catastrophic in a live situation.

It can be prevented that unwanted stations join the session by giving the session a password. A running session cannot get a password. Passwords needs to set before the session is created.

If a session has a password, then there will be a "PW" in front of the session name.

A session member can invite stations without having to type the password on the invited stations.

## Disable invite

Default settings allow a different station to invite a station where a user might be working on something else. This means that a different show file would be pushed to that station and unsaved work is lost - this might be unfortunate. This can be prevented by **Disable Invite** in **MA Network Control**.

In the upper right corner, of the MA Network Control menu, there is a button. This can have two states:

- **Invite Enabled:**\
  The station can be invited into a session.
- **Invite Disabled:**\
  The station cannot be invited into a session.

 

## Autojoin

Autojoin is a function that is related to devices and stations in the session. If a device - assigned to the session - reboots, then Autojoin will tell the device to rejoin the session when it is done rebooting.

This however can prompt a show upload - same as when a station joins the session. If this happens when a cue is suppose to run, then it can be catastrophic to the show. Of course if the system is one console and one NPU and all DMX comes from the NPU, then it is very important to get the NPU back as soon as possible. But there might be situations (typically in bigger setups), where it is more desirable to miss a section of the fixtures, until it is an optimal time to do the show upload, than having all the fixtures freeze while the show uploads.

It is up to the user to decide what the system should do by toggling Autojoin in the MA Network Control - it is the second button from the top on the right side.

It is not all devices that prompts a show upload. Nodes are generally just listening to the network traffic, and do not need a show upload.

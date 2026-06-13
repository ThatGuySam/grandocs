---
title: "Single User and Multi User Systems"
description: "The grandMA3 system can handle small and big systems with one or many users simultaneously."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/user.html"
scrapedAt: "2026-06-12T21:24:46.277Z"
---
The grandMA3 system can handle small and big systems with one or many users simultaneously.

grandMA3 systems are often referred to as a **Session**.

An Ethernet network can have several sessions running.

A session can have one, some, or many MA devices as members or listeners.

This page describes some differences between the two primary ways to have a system.

## Single User Session

In a single-user session, there is one operator/programmer. This person might have one or several stations (consoles or onPC).

When there is only one user, all stations are logged in as the same **User**.

This is also called a **Full Tracking Backup**. The stations are all in sync and share views, and the programmer content is the same on all stations.

This is useful for the single operator. If one station fails, the operator can move to another station and continue working without losing anything.

A version of this involves a single operator adding multiple **Users** with the same **User Profile** but different **Screen Configurations**. This allows the user to have different views on the stations' screens while still having the same programmer content. 

The single operator will usually have full admin rights to the entire system.

## Multi User Session

In a multi-user session, there are several operators. They might use the same stations and take turns (working in shifts or at different process phases). It can also be a system with multiple users working simultaneously on different stations.

For this setup, the operators must create more **Users** and, most likely, more **User Profiles**. Each operator will then log into the station using their User and may control the complete system or just a part of the system.

The stations share the show file, and the sequences are all in sync, but the users can have different views on the screens, and their programmer is not shared - the output is.

Sometimes systems are a combination of multi-users and full tracking backups. There are several operators (Multi User), but each operator has two (or more) stations logged in with their user (Full Tracking Backup).

In a multi-user system, it is possible to have users with different operator rights. There are several levels of rights. They span from complete access to only being allowed to change the view.

## Subtopics

- [Create User](/grandma3/2-4/user_create/)
- [User Settings](/grandma3/2-4/user_settings/)
- [Object Ownership](/grandma3/2-4/user_ownership/)
- [Screen Configuration](/grandma3/2-4/user_screen_config/)

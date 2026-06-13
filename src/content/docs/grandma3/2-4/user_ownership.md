---
title: "Object Ownership"
description: "A multi-user setup presents a situation where multiple users can try to edit the same object. This could cause unpredictable problems."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/user_ownership.html"
scrapedAt: "2026-06-12T21:24:46.437Z"
---
A multi-user setup presents a situation where multiple users can try to edit the same object. This could cause unpredictable problems.

The grandMA3 system has a locking mechanism that temporarily prevents multiple users from editing the same object.

When a user starts to edit an object, the other users are presented with a pulsing lock icon and some text offering information about the station and the user editing the object.

![](/img/grandma3/2-4/img_pool-object_locked-by-other-user_v2-2-9e2502.png)

Position preset 1 is being edited by a different user

An object can be fully locked by another user editing the entire object. A big red lock indicates this (see the example above). A big yellow lock indicates that an object is partially locked. This means that only a part of the object is being edited and is currently locked. Other elements of the object can still be edited.

![](/img/grandma3/2-4/img_pool-object_partially_locked-by-other-user_v2-2-4dac5e.png)

A macro line is being edited by a different user

All users can use the objects while they are being edited, but using the object before the edit is done might not reflect the edited values.

The user editing the object has ownership of the object while it is being edited. The station being used to edit the object will have a green frame in the relevant window while it is being edited.

Suppose the editing user is logged into several stations. In that case, other stations with this user display a yellow frame around the windows to indicate the user has started editing an object on a different station.

If a different user tries to edit a temporarily locked object, a pop-up appears with additional information:

![](/img/grandma3/2-4/popup_ownership-conflict_v1-9-20f58d.png)

Ownership Conflict pop-up

The pop-up has a 10 seconds countdown that automatically closes the pop-up. It can be closed before the countdown ends by tapping Ok.

A user can try to get ownership of a temporarily locked object using the [DropOwnership keyword](/grandma3/2-4/keyword_dropownership/).

This presents a pop-up at the stations belonging to the user who owns the object:

![](/img/grandma3/2-4/popup_drop-ownership_v1-9-8dabfa.png)

Drop Ownership pop-up

In this pop-up, the current owner can choose to drop the ownership by tapping Drop Ownership or keep it by tapping Keep Ownership.

This pop-up also has a countdown of 10 seconds. If the time runs out, then the ownership is dropped. This is the default action that allows other users to get objects currently owned by a user who has left the stations and simultaneously allows a user to keep ownership as an active choice.

The [ListOwnership keyword](/grandma3/2-4/keyword_listownership/) can list all or specific ownerships in a session. The result is shown in the [Command Line History window](/grandma3/2-4/ws_ui_command_line/).

|                                            |                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                                            |
|                                            | Objects can also be locked by automatic processes that start as a follow-up of the user's actions.For example, when a user updates a preset, the Total Reference Update mechanism locks the needed objects with ownership while running. The automatic process owns the objects while the update process is running. |

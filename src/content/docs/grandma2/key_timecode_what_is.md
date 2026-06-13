---
title: "What is timecode and timecode shows"
description: "Timecode is a timing signal. The signal can come from an external source (SMPTE or MTC) or it can be generated from the grandMA2 software."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_timecode_what_is.html"
scrapedAt: "2026-06-12T21:28:21.587Z"
---
Timecode is a timing signal. The signal can come from an external source (SMPTE or MTC) or it can be generated from the grandMA2 software.

This timing signal can be used as a trigger for cues. It can also be used to create complex executor operations, stored as [Timecode Shows](#timecode_shows).

 

The grandMA2 is capable of receiving 8 different external timecode signals at the same time. They are organized in the [Timecode Slots](#timecode_slots).

 

## []()Timecode Slots

The 8 timecode slots are organized in a pool. It could look like this:

![](/img/grandma2/window_timecode-slots-pool_v3-3-0cbaaf.png)

_Timecode Slots pool - pool style_

This pool is different than all other pools. It is not possible to Delete, Add, Move, Copy, or alter anything that would change the amount of the pool objects. There are 8 and they can be used and controlled, but the amount cannot be changed. Other pool options apply and they are described in the [Pools in General section](/grandma2/key_pools/).

The pool can be changed to the "Sheet Style" in the options. Then it could look like this:

![](/img/grandma2/window_timecode-slots-pool_sheet-style_v3-3-a962bf.png)

_Timecode Slots pool - sheet style_

Now it is possible to a see a lot that actually can be changed for each of the 8 timecode slots. They are all explained in the [Playing Back a Timecode Show topic](/grandma2/key_timecode_playing/).

 

The time and status for each timecode slot is distributed in a session. This means that the time is shared by all stations in the session. The signal can enter the session at any station. The one that "hears" the signal first is the one distributing it to the others.

The timecode slot can also generate a time signal. This means that one operator in a session can start the generation of time and then all other stations can see and run shows based on this time signal. Read more about the generator in the [Playing Back a Timecode Show topic](/grandma2/key_timecode_playing/).

 

The clock can be used to display the time of the timecode slots. This also offers fast access to the basic generate control. It could look like this (generated time signal):

![](/img/grandma2/window_clock_timecode-slot-1_v3-3-cc0494.png)

_Clock with Timecode Slot 1_

The second button from the right in the clock title bar is used to select which slot is displayed.

In the picture above it is linked to the **selected** timecode slot. The selected one is the one with the green background in the name part of the timecode slot pool (green number if in the "Sheet Style").

 

 

The default in a new show is that the SMPTE or LTC input on the station is assigned to slot number 1. The MIDI In port is assigned to slot number 2.

This can be changed in the **Setup -> Network -> MA Network Configuration -> Console** or **onPC**. There are two columns here called **MIDI TC** and **SMPTE TC**. Here it is possible to select different timecode slots that the incoming signal should be routed to.

 

---

## []()Timecode Shows

Timecode shows are a recording of possibly complex executor actions. It can store any executor actions, like Go and Goto, but it also stores the fader position and movement.

They are organized in the timecode pool. It could look like this when in pool style:

![](/img/grandma2/window_timecode-pool_v3-3-4bb081.png)

_Timecode pool - pool style_

It looks different than most pools, since the two first pool objects are replaced with a time information object. This area displays the time from the slots assigned to the inputs on your station - read about the timecode slots above. It is only for information, It cannot do anything. The time format and colors are discussed more in the [Playing Back a Timecode Show topic](/grandma2/key_timecode_playing/).

The pool behaves otherwise like most other pools - please read the [Pools in General section](/grandma2/key_pools/).

The timecode pool could look like this if changed to the "Sheet Style":

![](/img/grandma2/window_timecode-pool_sheet-style_v3-3-07d190.png)

_Timecode pool - sheet style_

Now it is possible to see a lot more options about each timecode show. All these things are explained in the following topics.

Notice the "Slot" column. Here it is possible to selected if the timecode thow should run using an internal time signal or it should be linked to one of the timecode slots - possibly linked to the selected slot.

 

The timecode pool objects gives a lot of information even when in the pool style.

The lower half of the pool object displays the same information as in the Name column - the name of the timecode show.

The middle line will start as light gray and get a green bar moving from left to right as the time passes through the length of the show. The line can be dark gray for show that are inactive.

Above the line is displayed the current time of the timecode show - same as the Time column.

The pool object can also have some playback symbols in the top right side of the pool object. The same symbols will be displayed in the Time column.

If the timecode show is linked to a timecode slot, then this will be indicated by an extra number in the pool object. The number is green if it is the selected timecode slot, otherwise it will be white.

 

---

## []()Timecode View

A recorded timecode show can be viewed in the **Timecode View window**. It could look like this:

![](/img/grandma2/window_timecode-view_v3-3-2bff98.png)

_Timecode View window_

This window shows the playback status and current time of the timecode show. The show cannot be edited in this window it is "read only".

The timecode view is very similar to the timecode editor, except the editor has more options. Please read the [Edit a Timecode Show topic](/grandma2/key_timecode_editor/) for more information about the editor and thereby also this viewer.

---
title: "Speed Masters"
description: "There are 16 different speed masters. They can be used to determine and synchronize the speed of objects and elements such as cues or phasers."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/masters_speed.html"
scrapedAt: "2026-06-12T21:24:56.938Z"
---
There are 16 different speed masters. They can be used to determine and synchronize the speed of objects and elements such as cues or phasers.

Speed masters have values between 0 and 225 BPM.

Speed masters can be assigned to executors and special executors. For more information see [Assign Object to an Executor](/grandma3/2-4/executor_assign/).

The green square in the speed master label in the [playback bar](/grandma3/2-4/ws_playback_bar/) blinks in accordance with the speed if a speed master is assigned to an executor. This gives visual feedback about the current speed of the master.

The speed of speed masters can be manipulated by applying a multiplier or divider to the master.  To do so, use the settings **Speed Scale** and **Learn Mode**.\
The easiest way to change the settings of a speed master is the Edit Setting tab in the [assign menu](/grandma3/2-4/executor_assign/#h2_1346742513).\
To access the speed master settings in the assign menu, the master has to be assigned to an executor or special executor.

---

## Synchronize Output Using Speed Masters

Speed masters can be assigned to sequences, cues, cue parts, attributes, presets, generators, and phasers. This makes it easy to synchronize output to the same speed.\
To do so, assign the same speed master to multiple elements.

Speed masters that are assigned to an attribute are always synchronized to the speed master in the active cue or sequence.\
If the same speed master is assigned to a sequence or cue part and an attribute, the speed master will be removed from the attribute when updating or storing the sequence or cue.

---

## BPM Master

Speed master 16 is a BPM master. It is controlled by incoming audio and automatically adopts the detected beats per minute (BPM) as the master speed. For more information on the BPM master and using sound input see [Sound Viewer](/grandma3/2-4/sound_viewer/#h2__1355491982).

If the BPM master fader is moved, the BPM master adjusts to the nearest multiple of the detected BPM. For example: If a song has a speed of 60 BPM and the speed master fader is manually moved to 130 BPM, the speed master will move to 120 BPM.

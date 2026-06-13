---
title: "Executors"
description: "Executors are the faders and keys below the screens (except the right screen)."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_wi_executors.html"
scrapedAt: "2026-06-12T21:29:36.134Z"
---
Executors are the faders and keys below the screens (except the right screen).

They come in two versions. One with two keys and a fader and the other is just one key.

The keys have a printed symbol on them. It's ![go](/img/dot2/go_1-db7d7b.png) and for the ones with two keys there's also a ![flash](/img/dot2/flash_1-0a29ca.png). You can change the function of these keys using the [Change Functions of Executor window](/dot2/key_window_changefunctionsofexecutor/) or in the [Settings of Executor menu](/dot2/key_window_settingsofexecutor/).

You can have many pages with executors. As a default, if you have an active executor and change page then your executor will automatically be fixed and will stay visible. Anything that might be on that executor on the new page will not be available before the other executor (from the previous page) isn't active anymore. When it becomes inactive then it is automatically returned to the original page. This is called Autofix and can be globally disabled in Setup -> [Global Settings](/dot2/key_window_globalsettings/).

You can also choose to fix the executors using the [Fix commands](/dot2/key_keyword_fix/) and [Key](/dot2/key_key_fix/).

Active executors have a brighter colored frame then non active faders. You can make an executor non-active by pressing the Off key and then a key associated with the executor. Many executors will become non-active when the fader reach 0%, but not the Special Masters (read below for more on this).

 

The executors can have different roles. The following is a description of them.

## Cues

You can have cues and cue lists. When you store cues on an executor, then you get a cue list with one or more cues.

Now you can play back these cues using the executor keys and faders.

This is the default use for Executors.

## Chaser

A cue list can run in Chaser mode. Then it ignores the timing in the cue list and instead runs the cues in a loop with an overall timing. This can be changed in the [Settings of Executor menu](/dot2/key_window_settingsofexecutor/).

## Group Masters

You can store groups to executors and then you get groups masters. These can be used to limit the dimmer output on the fixtures in the group. It doesn't affect other attributes (e.g. Pan/Tilt, Color, Gobo, etc.) than dimmer.

## Special Masters

There are seven special masters available. They can be found in the [Magic Speed view](/dot2/key_viewitem_speed/), but they can also be assigned to executors - it only makes sense to have them on a fader executor.

This is a short description of the four masters:

### Master Speeds 1-4

This master controls the speed of the effects stored in cues and the chaser speed.

It's a global time and will affect all executors. It can be disabled in the [Settings of Executor menu](/dot2/key_window_settingsofexecutor/) for each executor if you don't want it to follow the master.

When this is active, then you'll see a ![](/img/dot2/dot2_viewsandwindows_statusmessages22_1-1-3-4925b1.png) icon next to your command line on the right screen.

### Master Rate

This master is used to modify the timing of cues using what's called a divider. The default value is 1. This means that the time values in the cue is divided with one = the same time as stored. If you move the fader below 50% (default position for the transition fader) then you get a fader value lower than 1. If the fader is at 25% then you get a value of 0.50. So if your original cue fade is 2 seconds then it's divided by 0.5 and the result is 4 seconds.  Moving the fader to 0% will stop all fades. If you move the fader above 50% then you get a higher fader value. If you put the fader at 75% then your value is 2. 2 divided by 2 is 1, so you fade time is 1 second. Taking it to 100% will basically give you fade time of 0 seconds.

It's a global time and will affect all executors. It can be disabled in the [Settings of Executor menu](/dot2/key_window_settingsofexecutor/) for each executor if you don't want it to follow the master.

When this is active, then you'll see a ![](/img/dot2/dot2_viewsandwindows_statusmessages23_1-1-3-23c47c.png) icon next to your command line on the right screen.

### Executor Time (Exec Time)

The Exec Time can be used to overwrite the stored cue Fade timing and use the time this executor is set to - The stored Delay times are ignored. When you move the fader up you get a value between 0 and 10 seconds. The two keys associated with the executor can be used to turn the Exec Time fader On or Off.

When this is active, then you'll see a ![](/img/dot2/dot2_viewsandwindows_statusmessages24_1-1-3-882e38.png) icon next to your command line on the right screen.

### Programmer Time (Prog Time)

The Prog Time master is used to set a time on your programmer. This is very useful if you are running live shows and are want to fade from one programmer value to another. When you move the fader up you get a value between 0 and 10 seconds. The two keys associated with the executor can be used to turn the ProgT fader On or Off. When it's On then all programmer values will use the time your fader is set to - including when you press Clear.

When this is active, then you'll see a ![](/img/dot2/dot2_viewsandwindows_statusmessages25_1-1-3-e71497.png) icon next to your command line on the right screen.

 

## Related links

[What are cues](/dot2/key_wi_cues/)

[What is the Programmer](/dot2/key_wa_programmer/)

[Exec (Executor) Key](/dot2/key_key_exec/)

[Executor Command](/dot2/key_keyword_executor/)

[Executor Bar](/dot2/key_window_playback/)

[Executor Pool](/dot2/key_viewitem_executorpool/)

[Magic Speed view](/dot2/key_viewitem_speed/)

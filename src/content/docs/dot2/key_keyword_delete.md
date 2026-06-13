---
title: "Delete"
description: "This page describes the syntax and how to use thelete command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_delete.html"
scrapedAt: "2026-06-12T21:29:48.345Z"
---
This page describes the syntax and how to use the**** delete command.

To go to the delete command, press Delete on the console.\
Delete is in the [command line](/dot2/key_widget_commandlineinput/), now.

## Description

With the delete command, you can

- delete cues from a cue list
- delete pool objects (e.g. preset type, groups) from the respective pool (e.g. position [preset type pool](/dot2/key_viewitem_preset/), [groups pool](/dot2/key_viewitem_group/))
- unpatch fixtures from the DMX universe

## Syntax

1\. Delete a cue from a cue list.

Delete Cue 1 Executor 1

2\. Delete a pool object from the respective pool.

Delete Preset 1.1

3\. Unpatch a fixture from the DMX universe.

Delete Fixture 1

## Example 1

Let´s assume, you will delete cue 1 from the main executor.

There are three different ways to do this:

a) Press Delete 1 (= Cue 1) Please.

b) Press Delete 1 (= Cue 1) and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).

c) Press Delete 1 (= Cue 1) and press the large Go on the console.

If a cue list is stored on the main executor, the console ask to [choose the delete method](/dot2/key_window_choosedeletemethod/).

## Example 2

Let´s assume, you will delete cue 1 from a executor 1.

There are three different ways to do this:

a) Press Delete 1 (= Cue 1) Exec 1 Please.

b) Press Delete 1 (= Cue 1) and tap on the executor 1 in the [executor bar view](/dot2/key_window_playback/).

c) Press Delete 1 (= Cue 1) and press the respective executor button  ![go](/img/dot2/go_1-db7d7b.png) on the console.

If a cue list is stored on executor 1, the console ask to [choose the delete method](/dot2/key_window_choosedeletemethod/).

## Example 3

Let´s assume, you will delete the dimmer preset 1 in the dimmer preset pool.

1\. Open the [dimmer presets pool](/dot2/key_viewitem_preset/).

There are two ways to do this:

a) Press Delete Preset 1 Please.

b) Press Delete and tap on preset 1 in the dimmer presets pool.

Preset 1 is deleted from the dimmer preset pool.

If the preset is used in a cue, the console asks to confirm the process.\
The connection from the preset to the cue will be lost and the values from the preset will be directly stored in the cues.\
 

## Example 4

Let´s assume, you will unpatch fixture 1 from the DMX universe.

Press Delete and tap on fixture 1 in the fixtures view.

The console asks to confirm the unpatch process.

Tap OK.

Fixture 1 is unpatched.

Double check the patched fixtures in the [Patch and Fixture Schedule](/dot2/key_window_patchandfixtureschedule/).

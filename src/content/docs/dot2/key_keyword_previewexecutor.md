---
title: "Preview"
description: "This page describes the syntax and how to use the preview command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_previewexecutor.html"
scrapedAt: "2026-06-12T21:29:50.458Z"
---
This page describes the syntax and how to use the preview command.

To go to the preview command, press Prvw on the console.\
Preview is in the [command line](/dot2/key_widget_commandlineinput/).

## Description

With the Preview command you get a preview of the programmed output in the [fixtures view](/dot2/key_viewitem_fixture/) and in the dot2 3D, without having an actual DMX output.

You can use the Preview command for preview

- executors
- cues

**Hint:**\
If the console is in the preview mode, the Prvw key is blinking and the title bar of the fixtures sheet changes into red.

**Hint:**\
To leave the preview mode, press Esc or Off Prvw on the console.

## Syntax

1\. To get a preview from an executor 102.

Preview ExecButton1 1.102

2\. To get a preview from cue 1 on the main executor.

Preview Cue 1

## Example 1

Let´s assume you will have a preview of the programmed executor 102 without having an actual DMX output.

There are five ways to do this:

a) Press Prvw and tap at executor 102 in the [executor bar window](/dot2/key_window_playback/).

b) Press Prvw and tap at executor 102 in the [executor pool view](/dot2/key_viewitem_executorpool/).

c) Press Prvw and tap at executor 102 in the [virtual playbacks view](/dot2/key_viewitem_virtualplayback/).

d) Press Prvw and press the actual executor button of executor 102 on the console.

e) Press Prvw Exec 1 0 2 Please.

The preview of executor 102 is visible in the [fixtures view](/dot2/key_viewitem_fixture/) without having a DMX output.

**Hint:**\
To have a quick overview in the preview mode about different executors at the same time, press and hold the Prvw key and press the different executor buttons on the console.

## Example 2

Let´s assume you will have a preview of cue 1 on the main executor without having an actual DMX output.

**Requirement:** The main executor is off.

There are three ways to do this:

a) Press Prvw and tap at cue 1 in the [cues view](/dot2/key_viewitem_cue/) of the main executor.

b) Press Prvw Cue 1 Please.

c) Press Prvw Please.

The preview of cue 1 on the main executor is visible in the [fixtures view](/dot2/key_viewitem_fixture/) without having a DMX output.

## Example 3

Let´s assume you will step thru the cue list on the main executor with cue timing and without having an actual DMX output.

1\. Open the main executor in the preview mode, press Prvw Please.\
Cue 1 on the main executor is in preview.

2\. Press the small Go+ (=Go) Prvw.\
Cue 2 on the main executor is in preview with cue timing, e.g. fade.

**Hint:**\
To go back from cue 2 to cue 1 in the preview mode use the small Go- and Prvw on the console.

## Example 4

Let´s assume you will step thru the cue list stored on executor 2 without having actual DMX output.

1\. Open executor 2 in the preview mode, press Prvw and the executor button of executor 2 ![go](/img/dot2/go_1-db7d7b.png)\
Cue 1 of Executor 2 is in preview.

2\. Press Prvw and then Next.\
Cue 2 of Executor 2 is in preview.

3\. Repeat step 2 until you reach the end of the cue list.

**Hint:**\
To step thru the cue list backwards, press Prvw Prev.

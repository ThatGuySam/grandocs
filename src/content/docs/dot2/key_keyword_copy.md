---
title: "Copy"
description: "This page describes the syntax and how to use thopy command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_copy.html"
scrapedAt: "2026-06-12T21:29:48.095Z"
---
This page describes the syntax and how to use the**** copy command.

To go to the copy command press Copy on the console.

## Description

With the copy command, you can copy:

- Groups to another group
- Cues to another cue
- Pages to another page in the [page pool](/dot2/key_viewitem_page/)
- Executors to another executor

## Syntax

1\. Copy a group to another group.

Copy Group 1 At 2

2\. Copy a cue to another cue on the main executor.

Copy Cue 1 At 2

3\. Copy a cue from the main executor to another executor.

Copy Cue 1 At 2 Executor 4

4\. Copy a cue to another cue on a normal executor.

Copy Exec 2 Cue 1 At Exec 2 Cue 3

5\. Copy a page to another page in the [page pool](/dot2/key_viewitem_page/).

Copy Page 1 At Page 2

6\. Copy the main executor to another executor.

Copy Executor 0.1.1 At Executor 1.2

## Example 1

Let´s assume, you will copy a group 1 at group 2.

There are two ways to do this:

a) Press Copy Group 1 At 2 Please.

b) Press Copy, then tap at the group 1 in the [groups view](/dot2/key_viewitem_group/) and then tap at group 2.

Group 1 is copied at group 2.

## Example 2

Let´s assume, you will copy cue 1 at cue 10 on the main executor.

Press Copy 1 (= Cue 1) At 10 Please.

The console ask to [choose the copy method](/dot2/key_window_choosecopymethod/).

Cue 1 is copied at cue 10 on the main executor.

## Example 3

Let´s assume, you will copy cue 1 from the main executor at cue 2 on executor 4.

Press Copy 1 (= Cue 1) At 2 Exec 4 Please.

The console ask to [choose the copy method](/dot2/key_window_choosecopymethod/).

Cue 1 is copied from the main executor at cue 2 on executor 4.

## Example 4

Let´s assume, you will copy cue 1 on executor 2 to cue 2 on executor 2.

Press Copy Exec 2 Cue 1 At Exec 2 Cue 2 Please.

Cue 1 from executor 2 is copied at cue 2 on executor 2.

## Example 5

Let´s assume, you have a repertoire of pages with all possible songs and you will pick some pages (songs) for tonights event.

There are two ways to do this:

a) Press Copy Page 100 At 1 Please.

b) Press Copy, tap at page 100 in the [page pool](/dot2/key_viewitem_page/), press At, tap at page 1.

Page 100 is copied at page 1.

## Example 6

Let´s assume, you will copy the main executor to executor 2 on page 1.

There are three ways to do this:

a) Press Copy and then one of the large main executor buttons, e.g. the large Pause and then press executor button 2 ![go](/img/dot2/go_1-db7d7b.png) .

b) Press Copy tap at the main executor in the [executor bar window](/dot2/key_window_playback/) and then tap at the empty executor 2.

c) Press Copy Exec 0 . 1 . 1 At Exec 1 . 2 Please.

The main executor is copied to executor 2 on page 1.

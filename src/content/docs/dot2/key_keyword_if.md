---
title: "If"
description: "This page describes the syntax and how to use the if command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_if.html"
scrapedAt: "2026-06-12T21:29:49.414Z"
---
This page describes the syntax and how to use the if command.

To go to the if command, press and hold  ![ma](/img/dot2/ma_1-85eed0.png)  + If (= If) on the console.

## Description

With the if command you can e.g.

- deselect fixtures from the current selection if they are not in a group
- limit the [clone command](/dot2/key_keyword_clone/) and clones only if the fixtures is stored on an executor
- limit the [delete command](/dot2/key_keyword_delete/) and deletes only a fixture from a cue
- select fixtures only if they are overlapping

## Syntax

1\. Deselect fixtures from the current selection if not stored in group 1.

If Group 1

2\. Limit the clone command.

Clone Fixture 33 If Executor 1

3\. Limit the delete command.

Delete Cue 3 If Fixture 1

## Example 1

Let´s assume, you will deselect all current selected fixtures if they are not stored in group 1.

Press and hold  ![ma](/img/dot2/ma_1-85eed0.png)  + If (= If) Group 1 Please.

All fixtures which are not stored in group 1 are deselected.

## Example 2

Let´s assume, you will clone the fixture 1 only on executor 2, because you need one more fixtures for the actors light.

Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 1 At 33 Thru 35  ![ma](/img/dot2/ma_1-85eed0.png)  + If  (= If) and the respective executor button ![go](/img/dot2/go_1-db7d7b.png)  Please.

The console will ask you to [choose the clone method](/dot2/key_window_chooseclonemethod/).

Fixtures 1 is cloned at fixture 33 thru 35, only on executor 1.

## Example 3

Let´s assume, you will delete just fixture 1 from cue 2 on the main executor.

Press Delete 2 (=Cue 2)  ![ma](/img/dot2/ma_1-85eed0.png) +  If (= If) Fixture 1 Please.

Fixture 1 is deleted from Cue 2 on the main executor.

## Example 4

Let´s assume, you will only select the fixtures if they are in the group 1 (front truss) and group 2 (wash lights).

Press Group 1 ![ma](/img/dot2/ma_1-85eed0.png) + If (= If) Group 2 Please.

All fixtures which are overlapping in group 1 and 2 are selected in the fixtures view.

## Related Links

- [If Key](/dot2/key_key_if/)
- [Clone Command](/dot2/key_keyword_clone/)
- [Delete Command](/dot2/key_keyword_delete/)

---
title: "Replace"
description: "This page describes the syntax and how to use the replace command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_replace.html"
scrapedAt: "2026-06-12T21:29:50.697Z"
---
This page describes the syntax and how to use the replace command.

To go to the replace command, press and hold ![ma](/img/dot2/ma-36da5c.png) and Move on the console.\
Replace is in the command line.

If you press Move after a Replace is in the command line, the command will be With.

## Description

With the replace command, you can replace

- Presets with Presets
- Fixtures with Fixtures
- Groups with Groups

for an executor or in the show file.

## Syntax

1\. Replace a preset if it is used on a executor.

Replace Preset 1 With Preset 2 If Executor 1.2

2\. Replace a fixture.

Replace Fixture 1 With Fixture 2

3\. Replace a group.

Replace Group 1 With Group 2

## Example 1

Let´s assume, you will replace position preset 4 "Singer" with position preset 5 "Piano" if it is used on executor 2.

1. Open the position presets pool.
2. Press ![ma](/img/dot2/ma_1-85eed0.png) + Move (=Replace), tap at preset 4, press Move (=With), tap at preset 5, press If and executor button 2 ![go](/img/dot2/go_1-db7d7b.png) Please.

Replace Preset 2.4 With Preset 2.5 If ExecButton 1.2

The console gives you an overview about how many objects will change and asks, to confirm the replace operation.\
To apply and leave the window,tap Ok.\
To apply and get a detailed report, tap Ok Create Report.

Preset 4 "Singer" is replaced with preset 5 "Piano" if it was used on executor 2.

## Example 2

Let´s assume, you will replace fixture 1 with fixture 2 if it is used on executor 1.

Press ![ma](/img/dot2/ma_1-85eed0.png) + Move (=Replace) Fixture 1 Move (=With) Fixture 2 If, press executor button 1 ![go](/img/dot2/go_1-db7d7b.png).

Replace Fixture 1 With Fixture 2 If ExecButton 1.1

The console gives you an overview about how many objects will change and asks, to confirm the replace operation.\
To apply and leave the window,tap Ok.\
To apply and get a detailed report, tap Ok Create Report.

Fixture 1 is replaced with fixture 2 if it was used on executor 1.

## Example 3

Let´s assume, you will replace group 1 with group 2.

**Important:**\
Replace group will not replace the group in the groups view.\
It will replace the fixtures using in the group in the show file. This is the same as replace fixture with fixture.

There are two ways to do this:

a) Press ![ma](/img/dot2/ma_1-85eed0.png) + Move (=Replace) Group 1 Move (=With) Group 2 Please.

b) Open the [groups view](/dot2/key_viewitem_group/). Press ![ma](/img/dot2/ma_1-85eed0.png) + Move (=Replace), tap at Group 1, press Move (=With), tap at  Group 2 Please.

The console gives you an overview about how many objects will change and asks, to confirm the replace operation.\
To apply and leave the window,tap Ok.\
To apply and get a detailed report, tap Ok Create Report.

All fixtures stored in group 1 are replaced with the fixtures stored in group 2.

## Example 4

Let´s assume, you will delete fixture 1 from all places where it is stored in (groups, presets and executors).

Press ![ma](/img/dot2/ma_1-85eed0.png) + Move (=Replace) Fixture 1 Move (=With) Please.

The console gives you an overview about how many objects will change and asks, to confirm the replace operation.\
To apply and leave the window,tap Ok.\
To apply and get a detailed report, tap Ok Create Report.

Fixture 1 is deleted from all places in the show file, where it was stored in.

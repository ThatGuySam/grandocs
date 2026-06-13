---
title: "Choose Delete Method"
description: "If you try to delete a cue from a cue list, the console ask to choose the delete method."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_choosedeletemethod.html"
scrapedAt: "2026-06-12T21:29:42.549Z"
---
If you try to delete a cue from a cue list, the console ask to choose the delete method.

![](/img/dot2/dot2_viewsandwindows_choosedeletemethod01_1-1-3-784c76.png)_Figure 1: Choose Delete Method Window_

There are two delete methods available.

To leave the window, tap Esc in the title bar or press Esc on the console.\
The delete process is canceled.

For more information about delete, refer to [Delete Command](/dot2/key_keyword_delete/) and [Delete Key](/dot2/key_key_delete/).

The following tables explains the functions of the two methods on an example.

## Initial Situation

| Cue list | Fixture 1           | Fixture 2          | Fixture 3 |
| -------- | ------------------- | ------------------ | --------- |
| Cue 1    | 100 %               | 0 %                | 0 %       |
| Cue 2    | 100 % tracked value | 50 %               | 0 %       |
| Cue 3    | 100 % tracked value | 50 % tracked value | 25 %      |

## Normal Delete

| Cue list | Fixture 1           | Fixture 2     | Fixture 3     |
| -------- | ------------------- | ------------- | ------------- |
| Cue 1    | 100 %               | 0 %           | 0 %           |
| Cue 2    | Normal delete       | Normal delete | Normal delete |
| Cue 3    | 100 % tracked value | 0 %           | 25 %          |

## Delete Cue Only

| Cue list | Fixture 1           | Fixture 2       | Fixture 3       |
| -------- | ------------------- | --------------- | --------------- |
| Cue 1    | 100 %               | 0 %             | 0 %             |
| Cue 2    | Delete cue only     | Delete cue only | Delete cue only |
| Cue 3    | 100 % tracked value | 50 %            | 25 %            |

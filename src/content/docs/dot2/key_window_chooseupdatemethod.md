---
title: "Choose Update Method"
description: "If you try to update a cue in a cue list, the console ask to choose the update method."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_chooseupdatemethod.html"
scrapedAt: "2026-06-12T21:29:42.737Z"
---
If you try to update a cue in a cue list, the console ask to choose the update method.

![](/img/dot2/dot2_viewsandwindows_chooseupdatemethod01_1-1-3-ce29a0.png)_Figure 1: Choose Update Method Window_

There are two update modes available.

To leave the window, tap Esc in the title bar or press Esc on the console.\
The update process is canceled.

For more information about Update, refer to [Update command](/dot2/key_keyword_update/) and [Update key](/dot2/key_key_update/).

The following tables explains the functions of the two methods on an example.

## Initial Situation

| Cue list | Fixture 1           | Fixture 2          | Fixture 3         |
| -------- | ------------------- | ------------------ | ----------------- |
| Cue 1    | 100 %               | 0 %                | 0 %               |
| Cue 2    | 100 % tracked value | 50 %               | 0 % tracked value |
| Cue 3    | 100 % tracked value | 50 % tracked value | 25 %              |

## Normal Update

| Cue list     | Fixture 1          | Fixture 2          | Fixture 3 |
| ------------ | ------------------ | ------------------ | --------- |
| Cue 1        | 100 %              | 0 %                | 0 %       |
| Cue 2 Update | 30 %               | 30 %               | 30 %      |
| Cue 3        | 30 % tracked value | 30 % tracked value | 25 %      |

## Cue Only Update

| Cue list     | Fixture 1 | Fixture 2 | Fixture 3 |
| ------------ | --------- | --------- | --------- |
| Cue 1        | 100 %     | 0 %       | 0 %       |
| Cue 2 Update | 30 %      | 30 %      | 30 %      |
| Cue 3        | 100 %     | 50 %      | 25 %      |

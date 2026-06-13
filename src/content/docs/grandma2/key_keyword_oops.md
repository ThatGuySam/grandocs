---
title: "Oops"
description: "To get the Oops keyword in the command line, type Oops or the shortcut O in it."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_oops.html"
scrapedAt: "2026-06-12T21:27:57.212Z"
---
To get the Oops keyword in the command line, type **Oops** or the shortcut **O** in it.

## Description

The Oops keyword is a function keyword to undo the last:

- Command line actions
- Fixture selections
- Programmer actions

Oops can undo the last 100 actions.

For more information, see [Oops and undo](/grandma2/key_ws_oops/).

## Syntax

**Oops / \[Option]**

## Options

To get a list of all available option to the Oops keyword, type in the command line:

\[Channel]> Oops /?

| Option    | Option Shortcut | Description                              |
| --------- | --------------- | ---------------------------------------- |
| noconfirm | nc              | Suppress the confirm undo pop-up.        |
| clear     | c               | Clears the oops list in the oops pop-up. |

## Examples

- To undo the recent done action, type in the command line:

\[Channel]> Oops

The confirm undo pop-up opens.

![](/img/grandma2/popup_confirm-undo_v3-2-96d397.png)

_Confirm undo pop-up_

---

- To undo the recent done action and suppress the confirm undo pop-up, type in the command line:

\[Channel]> Oops /noconfirm

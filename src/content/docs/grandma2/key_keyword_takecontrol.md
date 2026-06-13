---
title: "TakeControl"
description: "To go to the TakeControl keyword, type TakeControln the command line or use the shortcut Ta."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_takecontrol.html"
scrapedAt: "2026-06-12T21:28:03.310Z"
---
To go to the TakeControl keyword, type **TakeControl** in the command line or use the shortcut **Ta**.

## Description

TakeControl is a keyword used if multiple users are in a session.

The TakeControl keyword, takes the exclusive control of channels or attributes from fixtures, for the current user profile.

All other users can not start these fixtures or channels anymore as playback. The fixtures or channels are still controllable in the programmer.

The user who executes the TakeControl command has only the control about playbacks with the Takecontrol fixtures. The control about all other playbacks is lost.

![](/img/grandma2/window_fixture-sheet-takecontrol-cmd_v3-2-c57029.png)

_Fixture Sheet with controllable (gray font) and not controllable (dark blue font) attributes from playbacks_

For more information about the system colors, see [Colors](/grandma2/key_ws_colors/).

To drop the control of the fixtures or channels back, use the [DropControl keyword](/grandma2/key_keyword_dropcontrol/).

## Syntax

TakeControl \[fixture-list]

TakeControl \[channel-list]

TakeControl \[sequence-list]

## Example

Take the exclusive control of fixture 1 through 10 for the current user profile. All other fixtures are not controllable from playbacks anymore.

\[Channel]> TakeControl Fixture 1 Thru 10

---
title: "PSRPrepare"
description: "To use to the PSRPrepare keyword, type PSRPrepare or the shortcut PSRn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_psrprepare.html"
scrapedAt: "2026-06-12T21:27:58.651Z"
---
To use to the PSRPrepare keyword, type **PSRPrepare** or the shortcut **PSR** in the command line.

## Description

PSRPrepare prepares a showfile for PartialShowRead.

The PSRPrepare keyword used standalone opens the Partial Show Read Prepare Window.

For more information, see [Partial Show Read (PSR)](/grandma2/key_psr/).

The PSPPrepare keyword is a function keyword.

## Syntax

PSRPrepare \[filename] / \[option]

## Options

To get a list of all available options to the PSRPrepare keyword, type in the command line

\[Channel]> PSRPrepare /?

The PSRPrepare keyword has the following options.

| Option     | Short Cut | Description                                          |
| ---------- | --------- | ---------------------------------------------------- |
| usemine    | u         | Uses the current setup.                              |
| mergeother | mo        | Merges with the new setup.                           |
| useother   | uo        | Overwrites the current setup and uses the new setup. |

## Example

Open the Partial Show Read Prepare Window for the demo dimmer and more show.

\[Channel]> PSRPrepare "demo dimmer and more.show\.gz"

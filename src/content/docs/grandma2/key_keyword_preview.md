---
title: "Preview"
description: "To go to the Preview keyword, press Prvw."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_preview.html"
scrapedAt: "2026-06-12T21:27:58.073Z"
---
To go to the Preview keyword, press Prvw.

You can also type **Preview** in the command line.

## Description

The Preview keyword creates a preview of the programmed output without having an actual DMX output.

Preview loads the given cue or part in Previeweditor and enables this editor. (PreviewEdit On)

If no cue is given, the current cue of the selected executor will be used.

The Preview keyword is a function keyword.

**Hint:**\
If the console is in the preview editor, the Prvw key is blinking and the title bar from the sheets changes into red.

**Hint:**\
To leave the preview editor, press Esc or Off Prvw or Prvw Prvw on the console.

## Syntax

Preview \[cue-object] / \[option] = \[option value]

Preview \[part-object]

Preview Next

Preview Previous

## Options

To get a list of all available options to the preview keyword, type in the command line

\[Channel]> Preview /?

The preview keyword has the following options.

| Option         | Option Shortcut | Option Value | Description                                     |
| -------------- | --------------- | ------------ | ----------------------------------------------- |
| add            | not available   | False, True  | Additional preview playback.                    |
| autoupdate     | au              | False, True  | Every programmer value updates automatically.   |
| keepselection  | ks              | False, True  | Keeps selection when entering preview.          |
| keepprogrammer | kp              | False, True  | Keeps programmer content when entering preview. |

## Examples

- Load cue 5 from the selected executor in the preview editor.

\[Channel]> Preview Cue 5

 

- Load cue 5, part 2 of the selected executor in the preview editor.

\[Channel]> Preview Cue 5 Part 2

 

- Load current cue of executor 3 in the preview editor.

\[Channel]> Preview Executor 3

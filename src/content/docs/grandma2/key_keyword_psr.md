---
title: "PSR"
description: "To go to the PSR keyword, type PSR in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_psr.html"
scrapedAt: "2026-06-12T21:27:58.571Z"
---
To go to the PSR keyword, type **PSR** in the command line.

## Description

**Requirement:** The partial show read is prepared.

The PSR keyword executes a partial show read for the specified object.

The PSR keyword is a function keyword.

For more information, see [Partial Show Read (PSR)](/grandma2/key_psr/).

## Syntax

PSR \[Object] If \[Object-list] /\[Option]

## Options

To get a list of all available options to the PSR keyword, type in the command line

\[Channel]> PSR /?

The PSR keyword has the following options.

| Option    | Short Cut | Description                |
| --------- | --------- | -------------------------- |
| merge     | m         | Adds to existing content.  |
| overwrite | o         | Replaces existing content. |

## Examples

- Partial show read on sequence 1.

\[Channel]> PSR Sequence 1

 

- Partial show read on sequence 1, if channel 1 through 3 are used.

\[Channel]> PSR Sequence 1 If Channel 1 Thru 3

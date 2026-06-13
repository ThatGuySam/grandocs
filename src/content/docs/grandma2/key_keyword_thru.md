---
title: "Thru"
description: "To go to the Thru keyword, press Thru."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_thru.html"
scrapedAt: "2026-06-12T21:28:03.086Z"
---
To go to the Thru keyword, press Thru.

You can also type **Thru** in the command line or use the shortcut **T**.

## Description

The Thru keyword reference a range of objects / values.\
If the start or end is not defined, it will be used the first or last available object / values.

## Syntax

\[Start of range] Thru \[End of range]

## Example

1\. Select fixture 3 through 6.

\[Channel]> Fixture 3 Thru 6

2\. Select all fixture from the beginning through 10.

\[Channel]> Fixture Thru 10

3\. Delete all cues, beginning with cue 3, from the selected executor.

\[Channel]> Delete Cue 3 Thru

4\. Select all fixtures. Press Thru (= Fixture Thru).

\[Channel]> Fixture Thru

5\. Turn off all executor from the current page.

\[Channel]> Off Thru

6\. Start executors from 4.2 to 5.9.

\[Channel]> Go Page 4 thru 5 Exec 4 thru 5

**Hint:**\
Calling x.y Thru a.b is not a supported range, e.g., "Go Executor 4.2 Thru 5.9" because you cannot call executor ranges across pages.

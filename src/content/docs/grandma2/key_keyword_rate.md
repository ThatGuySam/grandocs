---
title: "Rate"
description: "To get the Rate keyword into command line type Rate."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rate.html"
scrapedAt: "2026-06-12T21:27:58.803Z"
---
To get the Rate keyword into command line type **Rate**.

## Description

The Rate keyword is a function to adjust the Rate of an executor.

## Syntax

Assign Rate (At) \[Executor-list]

**Rate \[value] \[Executor-list] (Fade \[seconds])**

## Example

- To assign a rate fader for a sequence on executor 6.

\[Channel]> Assign Rate Exec 6

- Set the rate for a sequence on executor 1 and 5 to 2.

\[Channel]> Rate 2 Executor 1 + 5

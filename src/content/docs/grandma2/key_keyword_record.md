---
title: "Record"
description: "To get the Record keyword in the command line, press !ma + Store (= Record)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_record.html"
scrapedAt: "2026-06-12T21:27:59.544Z"
---
To get the Record keyword in the command line, press ![ma](/img/grandma2/ma_1-290dfd.png) + Store (= Record).

You can also type **Record** or the shortcut **Rec** in the command line.

## Description

The Record keyword records real time actions as timecodes or macros. For more information, see [record a timecode show](/grandma2/key_timecode_record/) or [record a macro](/grandma2/key_macro_record/).

It toggles between start and stop.

The Record keyword is a function keyword.

## Syntax

Record \[Object]

## Examples

- Start to record executor actions as timecode 1.

\[Channel]> Record Timecode 1

---

-  Stop all running timecode records from the timecode pools.

\[Channel]> Record Timecode

---

- Start to record command line actions as macro 5. The **macro record icon** ![](/img/grandma2/icon_macro-record_v3-2-6168b1.png) is visible in the command line, if in the message center options for macro status yes selected is. The keys Learn and Macro are flashing.

\[Channel]> Record Macro 5

---

- Stops all running macro records from the macro pools.

\[Channel]> Record Macro

---

- Record the receiving timecode as **trig time** by calling the cue, if the selected trigger is **timecode**. The **timecode record icon** ![](/img/grandma2/icon_timecode-record_v3-2-2c68d2.png) is visible in the command line.

 \[Channel]> Record Executor 1

---

-  Turn off the timecode executor record from executor 1.

\[Channel]> Record Off Executor 1

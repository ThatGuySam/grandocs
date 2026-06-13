---
title: "Timecode"
description: "To get the Timecode keyword in the command line, press Macro Macro (= Timecode)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_timecode.html"
scrapedAt: "2026-06-12T21:28:03.180Z"
---
To get the Timecode keyword in the command line, press Macro Macro (= Timecode).

You can also type **Timecode** in the command line or use the shortcut **TC**.

## Description

The Timecode keyword, select the timecode by default.

With the Timecode keyword, you can

- store
- play (go)
- record
- edit
- label
- assign
- rewind (top)

timecode shows.

The Timecode keyword, is an object keyword.

For more information, see [Timecode](/grandma2/key_timecode/).

## Syntax

\[Function] Timecode \[ID]

Assign Timecode \[ID] / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameters by using the [Assign keyword](/grandma2/key_keyword_assign/).

| Parameter                                              | Parameter Value                                                            | Description                                                                                                                                                                                                  |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name                                                   | "Timecode show name"                                                       | Assign the timecode show name.                                                                                                                                                                               |
| Slot                                                   | "Intern" (-1), "Link Selected" (0), "1", "2", "3", "4", "5", "6", "7", "8" | Assign the timecode show to a timecode slot.                                                                                                                                                                 |
| Length                                                 | 0s to 255h59m58.96s                                                        | Assign the timecode show length in total.                                                                                                                                                                    |
| Offset                                                 | 0s to 255h59m58.96s                                                        | Assign an offset to the timecode show, to move the entire timecode show forward.                                                                                                                             |
| Runs                                                   | "Endless Repeat" (0), "No Repeat" (1), 2..1000                             | **Only for timecode shows syncing to the internal clock.** Assign, if the timecode show runs:* Endless (Endless Repeat)
* Once and stop (No Repeat)
* A specific number of times (number between 2 and 1000) |
| SwitchOff                                              | "Playbacks Off", "Keep Playbacks"                                          | Assign,  if the playbacks running during a timecode show:* Turns off (Playbacks Off)
* Stays on (Keep Playbacks)when the timecode show turns off.                                                            |
| StatusCall                                             | "On", "Off"                                                                | Assign, if the timecode show will:* Sync with the timecode signal instantly (on)
* Execute the signal when they are reached (off)                                                                            |
| TimeUnit                                               | "1/100 Seconds", "24 FPS", "25 FPS", "30 FPS"                              | Assign the time unit for the graphic display mode.                                                                                                                                                           |
| WhenEnding                                             | "Stop", "Pause"                                                            | **Only for timecode shows syncing to the internal clock.** Assign what happens when the timecode show runs out of recorded time.                                                                             |
| WhenStopping                                           | "Do Nothing", "Rewind"                                                     | Assign what happens when the timecode show is stopped.                                                                                                                                                       |
| AutoStart (only available with external timecode slot) | "Off", "On"                                                                | **Only available when syncing to an external source.** If a timecode signal is received, the timecode show switches from the off mode into the play mode.                                                    |
| User Bits                                              | 0 .. FFFFFFFF, 0 .. 4294967296                                             | **Only available when syncing to an external source.** Assign user bits in hex or decimal to distinguish several timecode streams.                                                                           |
| Info                                                   | "Information Text"                                                         | Assign additional information.                                                                                                                                                                               |

## Examples

- Store new timecode show 2 in the timecode pool.

\[Channel]> Store Timecode 2

---

- Record executor action for timecode show 2.

\[Channel]> Record Timecode 2

![](/img/grandma2/img_pool-object-record-timecode_v3-2-16e5db.png)

_Pool Object Record Timecode_

 

---

- Play timecode show 2.

\[Channel]> Go Timecode 2

![](/img/grandma2/img_pool-object-go-timecode_v3-2-5a1b6d.png)

_Pool Object Go Timecode_

 

---

- Rewind timecode show 2.

\[Channel]> Top Timecode 2

---

- Label timecode show 2 in the timecode pool. The Enter Name for Timecode pop-up opens.

\[Channel]> Label Timecode 2

![](/img/grandma2/popup_enter-name-for-timecode_v3-2-4dfebf.png)

_Enter Name for Timecode pop-up_

 

---

- Assign timecode show 1 the timecode slot 3.

\[Channel]> Assign Timecode 1/Slot = 3

Timecode slot 3 is assigned to timecode show 1.

---
title: "Assign"
description: "Assigns a function used to define relationships between objects or give values to properties."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_assign.html"
scrapedAt: "2026-06-12T21:27:45.080Z"
---
**Assign** is a function used to define relationships between objects or give values to properties.

To execute the keyword Assign press the key Assign, type **Assign** or the shortcut **As** into the command line. 

## Syntax

Assign \[Object-list 1] (At) \[Object-list 2]

Assign \[Function] (At) \[Object-list]

Assign \[Helping-keyword] \[Value-list] \[Object-list]

Assign \[Object-list] /\[property1]=\[value] /\[property2]=\[value]

Assign \[Object]

 

## Options

To get a list of all available options for the keyword Assign in the command line feedback window type the following into the command line:

\[Channel]> Assign /?

The keyword Assign has the following options:

| Option     | Shortcut | Option value                            | Description                     |
| ---------- | -------- | --------------------------------------- | ------------------------------- |
| break      | b        | 1-8                                     | Sets patch break.               |
| multipatch | m        | 0 to 10,000                             | Sets multi patch slot.          |
| reset      | r        | no option value                         | Removes existing patch.         |
| x          |          | -10,000 to +10,000                      | Sets the x-coordinate.          |
| y          |          | -10,000 to +10,000                      | Sets the y-coordinate.          |
| noconfirm  | nc       | no option value                         | Suppresses confirmation pop-up. |
| special    |          | normal; default; highlight              | Sets special mode of Preset.    |
| cue\_mode  | cm       | assert; xassert; break; xbreak; release | Sets cue mode.                  |

If no object type is given for the object list, the objects at the current destination are used. If the current destination is root (no destination), the current default object type of the command line is used.

 

**Hint:**\
Assign is the only function that may be directly proceeded by another function.

 

## Example:

\[Channel]> ​Assign Dmx 2.101 At Channel 5

 

Patches DMX address 101 on the second universe to channel 5.

 

\[Channel]> ​Assign Sequence 1 Thru 5 At Executor 6 Thru 10

 

Assigns Sequence 1 thru 5 to Executor 6 thru 10.

 

\[Channel]> ​Assign Toggle At Executor 101

 

Assigns a toggle button to Executor 101.

 

\[Channel]> ​Assign Fade 3 Cue 5

 

Assigns a fade time of 3 seconds to cue 5 of the selected executor.

 

\[Channel]> ​Assign User JohnDoe /password=qwerty

 

Sets the password for JohnDoe to "qwerty".

 

\[Channel]> ​Assign Executor 1

 

Opens the Assign Menu dialog for executor 1.

 

\[Channel]> Assign Group 1 Layout 1 /x=5 /y=2

Assigns group 1 into layout 1 at position x 5 and y 2. 

 

\[Channel]> Assign Go ExecButton1 1.1 /cue\_mode=xassert

Assigns Go button with cue mode "xassert" to ExecButton1 of the executor 1 on page 1.

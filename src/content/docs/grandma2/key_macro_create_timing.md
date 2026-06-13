---
title: "Macro timing"
description: "As you may have noticed within the Edit Macro pop-up, in addition to the command text field, there is also a wait field for each macro line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_create_timing.html"
scrapedAt: "2026-06-12T21:28:22.647Z"
---
As you may have noticed within the Edit Macro pop-up, in addition to the command text field, there is also a wait field for each macro line.

By default the macro will proceed immediately and start processing the next line, however this "Follow" may be changed to either a wait time in seconds, or a trigger to pause and wait for next Go (to the macro), before the macro proceeds with next line.

The last wait time is not needed and the value here will be displayed in red text.

## Setting a time

Wrong timing is the major pitfall when creating complex macros. The console is multi-tasking so when a command immediately follows another, the second command will start processing, even if the previous has not yet finished processing.

If a macro-line depends on an earlier line, to be processed correctly, you may need to add a wait-time, to prevent the next command to follow immediately and be processed too early. If you experience that a command works if you type it manually but not when you run it in a macro, then it can also be a sign that you need to add a small wait time.

### Example:

Let us create a Macro that Parks Channel 10 at 50%:

| No. | CMD              | Wait   |
| --- | ---------------- | ------ |
| 1   | Channel 10 At 50 | Follow |
| 2   | Park Channel 10  | Follow |

With the default "Follow" trigger, this macro does not work. Setting channel 10 to 50% takes a little bit of time, and our second macro line parks the channel before the first line has been fully processed.

Giving the first line 50 millisecond to be processed, before proceeding to the next line, solves the problem in this case:

| No. | CMD              | Wait   |
| --- | ---------------- | ------ |
| 1   | Channel 10 At 50 | 0.05   |
| 2   | Park Channel 10  | Follow |

When creating complex macros it is wise to start with a small timing of something like 100 milliseconds per line (0.1 seconds). Then you might be able to speed it up by setting a smaller wait or set lines to "Follow" if the commands are running correctly.

 

**Important:**\
Necessary processing-time is not fixed. You may experience that a timing that worked when in Standalone is not enough in a session with multiple stations and NPUs.

## Using Go

You can use a "Go" instead of a wait time or the "Follow" time. This means that the macro will halt when it reaches a "Go" in the wait column. It will continue running only when receiving a go command.

Go is the default function for an executor key, when the macro is assigned to executors.

### Example:

Here is a fun example of a macro that turns on or off the sACN output and input. It also re-labels the macro depending on the status **and** it change the frame color.

| No. | CMD                                                              | Wait   |
| --- | ---------------------------------------------------------------- | ------ |
| 1   | Assign Root "DMX\_Protocols"."sACN" /OutActive=on /InActive=on   | Follow |
| 2   | Appearance Macro "sACN OFF/on" /h=100 /s=100 /br=100             | Follow |
| 3   | Label Macro "sACN OFF/on" "sACN ON/off"                          | Go     |
| 4   | Assign Root "DMX\_Protocols"."sACN" /OutActive=off /InActive=off | Follow |
| 5   | Appearance Macro "sACN ON/off" /h=30 /s=100 /br=100              | Follow |
| 6   | Label Macro "sACN ON/off" "sACN OFF/on"                          | Follow |

The macro needs to be labeled "sACN OFF/on" before running it the first time.

Line 1 and 4 are the ones that actually change the settings for sACN output and input.

Line 2 and 5 changes the frame color (appearance).

Line 3 and 6 re-labels the macro.

All line are have a "Follow" in the wait column except line 3. This is the one that separates the "on" and "off" parts, so this is where the macro needs to halt and wait for a new "Go".

If the "[Top](/grandma2/key_keyword_top/)" command is sent to the macro then it will run the macro from the first line.

"[GoBack](/grandma2/key_keyword_goback/)" will execute the previous macro line in a multi line macro. Looking at the example above it will run line 2 if the macro is at line 3 waiting for a Go. If the macro is not active then "GoBack" will run the last macro line.\
\
Running macros can be paused using the "[Pause](/grandma2/key_keyword_pause/)" command. This only makes sense for timed macros with enough time to actually pause it before it is done.**** You need to do a Go command for the macro to continue.

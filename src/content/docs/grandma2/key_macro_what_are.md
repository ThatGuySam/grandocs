---
title: "What are macros"
description: "Macros are commands stored in a pool object."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_what_are.html"
scrapedAt: "2026-06-12T21:28:22.366Z"
---
Macros are commands stored in a pool object.

The commands can be simple, very complex, and everything in between.

This makes programming faster and more convenient. This allows you to do trivial or complex operations by a push of a button.

Macros are stored in the **Macro Pool** but can be assigned to physical keys. The macro pool is shared between all Users in the show file. This means that if user number 1 is storing a macro on pool object number ten then it will also be available for User number 2 as macro number ten.

If you do not know about pools, then please read the [Pools in General topic](/grandma2/key_pools/). 

## Macro Pool

The Macro pool could look like this:

![](/img/grandma2/window_macro-pool_v3-3-32c8a5.png)

_Macro Pool - pool style_

This is what it looks like in the pool style. It can be changed in the options to Sheet Style. Then it looks like this:

![](/img/grandma2/window_macro-pool_sheet-style_v3-3-8f21ae.png)

_Macro Pool - sheet style_

Read the [Manually create a macro topic](/grandma2/key_macro_create/) to learn more about creating macros.

## Running Macros

You can run the macros by tapping them in the pool, using the keys, or using the command line. For example, press Macro 5 Please to run macro number 5. Type macro 5 followed by Enter/Please to run it from the command line. Read more details about the macro command in the Macro keyword topic.

Macros can also be assigned to Executors, X Keys, or View buttons. To learn more please read the [Assign a macro to a button topic](/grandma2/key_macro_assign/).

## Advanced macros

Macros can be advanced. This means that you can make macros that present a pop-up asking for user input, calculations, conditional macros lines, and user-definable or system-wide variables.

Since the grandMA2 is a command line driven software, you can do almost anything with macros.

Please read the [Manually create a macro topic](/grandma2/key_macro_create/) and the subtopics for more about advanced macros.

If you need even more advanced access to the system behind the grandMA2 then you can use the grandMA2 Plugins. They allow for LUA scripts to be used to interact with the software. This is for the very advanced users. Read more about this in the [Plugins section](/grandma2/key_plugins/).

## Timed or triggered macro lines

Macros can run as fast as possible, where a macro with multiple lines will run the commands in each line as fast as possible. But they can also be timed so there is a delay between the execution of the next macro line. This can be a good idea if the command is something that might take a little while for the software to execute. For instance, if a macro line is storing 1000 cues. It does not take the macro a long time to run the command, but the software might need half a second to actually to it. Then if the next macro line jumps to cue number 999, then you need to delay this macro line - the software needs to create the cues before you can jump to it.

A third option is a macro line that waits until it is triggered again by a user.

Read more about these options in the [Macro timing topic](/grandma2/key_macro_create_timing/).

## Import and Export

Macros can also be imported and exported. You can import macros stored on a USB stick or from the predefined macros in the software. Read more in the [Export and Import section](/grandma2/key_export_and_import/) to learn more about how to export and import.

## Learn how to write macros

Macros are basically lines of text. The lines are executed as command line input for processing by the grandMA2 software. The power of macros is based on the power of the command line. If something can be done using the command line then a macro can do it.

To learn macros, you need to learn the grandMA2 command line syntax. This is described in details in the [Command Syntax and Keywords section](/grandma2/key_command_syntax_and_keywords/).

Sitting down and learn everything about the grandMA2 syntax and keywords is a very big task. The easier way to begin to understand how it works is to always have a **Command line Feedback window** visible on one of your screens:

![](/img/grandma2/window_command-line-feedback_v3-3-fdeafb.png)

_Command Line Feedback window_

Most of your actions on the console will result in an entry in this window and will be listed as "Executing", "Realtime", or "Macro".

\[time] : Executing : Channel 1 At 50

\[time] : Realtime : Go Executor 1.8

\[time] : Macro : SaveShow

You do not have to worry about these three different classifications. This indicates the source of the processed command. **Executing** means that you have executed a command by pressing keys or other normal user input. **Realtime** means that the command originated from your pushing executor buttons and has been processed with a high priority. **Macro** means that the command is originating from some direct key press (like double-tapping the Backup key), or a macro.

If it comes from a macro in the macro pool, then it also writes the macro number and the line number that executed the command.

If the commands come from a command in a cue, then it displays the sequence and cue number. This makes it easy to identify where the command comes from.

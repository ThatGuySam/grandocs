---
title: "Command line interaction"
description: "Command line interaction can mean two different things when we talk about macros - they are however connected."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_cli.html"
scrapedAt: "2026-06-12T21:28:22.836Z"
---
Command line interaction can mean two different things when we talk about macros - they are however connected.

It can be the execution of the macro that you can choose to go to the command line - This is called CLI.

And it can be the commands in the macros that interact with the command line - This can be done using the special character "@".

 

## CLI

You can turn on or off the CLI when you create or edit a macro - read more about this in the [Manually create a macro topic](/grandma2/key_macro_create/) and the [Edit a macro topic](/grandma2/key_macro_edit/).

When CLI is turned off for a macro, the actual press of the macro will no longer interact with your command line, but directly execute its commands. This means that if you, for instance, want to edit or delete a macro, you cannot just press the command key and then the macro button, you will need to type the actual keyword and ID - using keys or type in the command line. For example, Edit Macro 5 will allow you to edit macro 5 if CLI is off. Delete ViewButton 11.5 will remove a macro from the User1 X5 key. By disabling the command line interaction of the current button or key press, you can make the commands of the macro lines interact by the use of the @ character.

## @

This special command is only relevant in macros. It can be used ahead of a macro command or behind it.

It is a placeholder for user commands. This allows you to interact with macro commands.

### Ending a macro line with @

When it is used at the end of a macro line, the line will not execute the command line. It will simply put the command in the Command Line Input and then wait for you to complete the command. If your macro has several lines, it will then continue with the next macro line after your input.

### Example:

You have a group (number 4) that you want to give a value and store as the next cue. You want to manually type the value.

| No. | CMD          |
| --- | ------------ |
| 1   | Group 4 At @ |
| 2   | Store Cue    |

Running this macro will give you the following command line input:

\[Channel]> Group 4 At

Then it waits for you to type the value and finish with a Please.

After the please it will run macro line 2 and store the (next) cue.

### Beginning a macro line with @

If you begin the macro line with @, it will append the macro line to already typed input.

**Important:**\
It is important that you turn off CLI for your macro for this to work properly - otherwise, your commands will fail.

### Example:

Let us imagine that you like two different fade times: 5 seconds and 10 seconds. Every cue you make uses these twice.

You can create the following macro (Macro 1):

| No | CMD      |
| -- | -------- |
| 1  | @ Fade 5 |

And the other macro (Macro 2):

| No. | CMD       |
| --- | --------- |
| 1   | @ Fade 10 |

Now you can use these macros when you store a cue. For instance cue number 5:

Store Cue 5 and before pressing Please you tap the macro 2 instead. This is how your command line responds:

\[time] : Executing : Store Cue 5 Fade 10

This can also be used to give individual fade time to fixtures:

Fixture 8 At 80 Macro 1

Will give fixture number 8 a dimmer value of 80 % and an individual fade time of 5 seconds.

### @ before and after

You can surround a command in @s. This will just put the command in the command line. This allows you to create your own keys with commands that you use often but that do not have their own dedicated keys.

### Example:

You often use the "Layout" command and you do not want to press MA+Group to execute the command. Then you can create the following macro (remember to turn off CLI)

| No. | CMD        |
| --- | ---------- |
| 1   | @ Layout @ |

Now you can assign this macro to an executor or view button and just press that whenever you want to use the layout command. Read more about assigning macros in the [Assign a macro to a key topic](/grandma2/key_macro_assign/).

 

You can read more about the @ command in the [At @ topic](/grandma2/key_keyword_at_-/).

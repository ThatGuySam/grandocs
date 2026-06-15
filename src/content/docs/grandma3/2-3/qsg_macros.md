---
title: "09 - Macros"
description: "A macro is a command or a set of several commands that can be executed when the macro is called."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/qsg_macros.html"
scrapedAt: "2026-06-15T18:25:40.837Z"
pagefind: false
---
A macro is a command or a set of several commands that can be executed when the macro is called.

Macros are stored in the **Macros** Pool (found in the Data Pool tab). The previous chapter introduced the pools and how to use them.

So, create a macro pool in the user-defined area and edit the first empty pool object.

The macro editor looks like this - with 'Settings' toggled On in the title bar:

![](/img/grandma3/2-3/qsg_09_macro-editor-empty_v2-3-b6d3f2.png)

In the editor, we can create macro lines. Each line is executed one by one. A macro needs at least one line.

The commands are the same as the ones we use in the command line input.

We do not write a please command at the end; it is automatically added if the **Execute** column says **Yes**.

Click Insert New Macro Line.

Now we have a macro line where we can add a **Command**.

We get a command editor where we can write a command and see how the system would interpret the command.

We are going to create a simple macro that saves the show.

Edit the command field in the editor and write SaveShow.

![](/img/grandma3/2-3/qsg_09_command-editor_v2-3-0377bc.png)

It is important that it is one word. Confirm the input with a 'Please' / 'Enter'.

Edit the Name input button at the top of the editor and write Quicksave. If you do not see a 'Name' button at the top, Click Settings in the title bar to show the settings at the top.

Close the editor and click the macro in the pool:

![](/img/grandma3/2-3/qsg_09_macro-pool_v2-2-733840.png)

This was one of the most simple macros. A single keyword that saves our show.

Macros can be more complex using elements like user-defined variables and something called "Handles". That is outside the scope of this Quick Start Guide.

We are going to create another macro. It uses multiple lines and a temporary group (number 999).

Edit a new empty macro pool object. Add a new macro line and write Delete Group 999 /NoConfirmation in the command editor. This deletes any group stored at number 999 without asking for confirmation.

Make sure to click New Macro Line below the command we just added, and then Insert New Macro Line. Now, we have a new macro line that will be executed right after the first line.

Write Store Group 999 /Merge. This stores the current selection in a new group.

We need another line with the command Fixture Thru - Group 999. This selects all fixtures except the ones in group 999.

The next line should be At 0. This gives the selected fixtures a dimmer value of 0 %.

The next line is Group 999. This reselects the original fixtures.

The final line is the same as the first line Delete Group 999 /NoConfirmation. This is a bit of house cleaning, removing the group we no longer need.

All these lines are executed one after the other as fast as possible. This is nice, but some actions might take milliseconds to perform, such as storing a big group. So, we want to add a small delay between the macro lines. The **Wait** column defines the wait time before the next line is performed. It currently says "Follow". This means that the next line follows as fast as possible. Select all the lines in the **Wait** column and edit the value to 0.1. This introduces a 100-millisecond wait time before executing the next macro line.

Edit the name of the macro and change it to "RemOff".

The result should look like this (I have added notes to each line for information only):

![](/img/grandma3/2-3/qsg_09_macro-2-final_v2-2-9508e6.png)

Notice that the wait time in the last line is in red text. This is because no more lines exist, and wait is not performed or needed.

Let us do one more macro.

Edit a new empty macro pool object.

Now click Import.

This opens a long list of previously exported macros and factory-created macros. Filter the list or scroll down to find "help context sensitive.xml", select it and click Import.

Now, you have imported all the settings for this macro, including a macro name. One of the settings is the **Execute** setting. This is set to "No". This means that the macro line is not automatically executed. It basically just adds the command to the command line and then waits for a user action that executes the command.

You can close the macro editor.

This macro can be used to open relevant help pages. Try it out by clicking the macro and then the macro pool title field. This opens the help page about macros.

 

Close the help pop-up and add more macros if you feel like it.

![](/img/grandma3/2-3/qsg_09_macro-pool_final_v2-2-3377ed.png)

You can click the macros in the pool to run them. A command can also trigger them, for example, Macro 1.

---

## Recap

This chapter was a quick look at the macro system.

The main manual has an entire [Macro section](/grandma3/2-3/macros/) about macros.

Feel free to add more macros in the following chapters if you feel it makes sense.

In the [next chapter](/grandma3/2-3/qsg_cue_executor/), we are finally going to create some cues.

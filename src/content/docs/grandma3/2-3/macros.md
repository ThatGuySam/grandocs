---
title: "Macros"
description: "Macros are commands stored in a pool object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/macros.html"
scrapedAt: "2026-06-15T18:25:26.741Z"
pagefind: false
---
### What are Macros

Macros are commands stored in a pool object.

The commands can be simple, very complex, and everything in between.

Macros can make programming faster and more convenient. They allow you to perform trivial or complex operations with a button push.

### []()Macro Pool

Macros are stored in the **Macro Pool** but can be assigned to physical keys and view buttons. The macro pool is shared between all users in the show file. For example, User A stores a macro on pool object number 10, it will also be available for User B as macro number 10.

A Macro Pool can be created like any other window. [See Pools Window topic](/grandma3/2-3/wvm/). It is under the **Data Pools** tab.

The Macro Pool could look like this:

![](/img/grandma3/2-3/window_macro_pool-bcc8aa.png)

_Macro pool_

 

### []()Elements in a Macro

A macro consists of one or more rows.

![](/img/grandma3/2-3/window_macro_editor-b75bf4.png)\
_Macro Editor_

Each row has information about a **Command** the row executes.

Each row has several cells that specify how the row is handled:

The **Wait** cell adds a wait time before moving to the next row in the macro. This wait time is added after the command in the row is executed. It is relevant if there is more than one row in a macro. The first row will execute, wait the specified time, and then execute the next row. There are two special wait commands. They are not a time value but a special value:

- **Follow**: This is the same as having a wait time of 0. The next row will be executed as soon as this row has executed the command.
- **Go**: This special value pauses the macro after this row until it receives a new Go+ command.

The **Enabled** field indicates if the row is enabled. This is a **Yes** or **No** field. If it is **Yes**, it is executed when the macro row is triggered.

The **AddToCmdline** function allows you to append the command from the macro line to existing content in the command line. This is a **Yes** or **No** field. If set to **Yes,** it is added to the command line.

The **Execute** field defines whether the macro row is automatically executed. If set to **Yes**, the row is executed (an automatic "Please" is executed at the end of the row). If set to  **N****o**, the command will be placed on the command line, ready for user interaction.

### Importing Macros from the Library

A factory library of macros can be imported using the import command.

For more information on how to import macros, read the [Import Macros](/grandma3/2-3/macro_import/) topic.

Read more about importing in the [Import Keyword topic](/grandma3/2-3/keyword_import/).

Subtopics

- [Command Editor](/grandma3/2-3/command-editor/)
- [Create Macros](/grandma3/2-3/macro_create/)
- [Import Macros](/grandma3/2-3/macro_import/)
- [Edit Macros](/grandma3/2-3/macro_edit/)
- [Assign Macros to Keys and Buttons](/grandma3/2-3/macro_assign/)
- [Variables](/grandma3/2-3/macro_variables/)
- [Properties](/grandma3/2-3/use-property/)
- [Example Macros](/grandma3/2-3/macro_examples/)

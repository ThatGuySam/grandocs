---
title: "Example Macros"
description: "This topic has some example macros. They are meant as inspiration for other macros. In addition, they show some of the possibilities with macros."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/macro_examples.html"
scrapedAt: "2026-06-15T18:25:27.201Z"
pagefind: false
---
This topic has some example macros. They are meant as inspiration for other macros. In addition, they show some of the possibilities with macros.

### Calling Macros by Macros

This example shows how macros triggered by other macros can have different results.

1. Create two Macros as shown below:

Macro 1

| Lock | No | Name        | Command                                          | Wait   | Enabled | AddToCmdl | Execute |
| ---- | -- | ----------- | ------------------------------------------------ | ------ | ------- | --------- | ------- |
|      | 1  | MacroLine 1 | Macro 2; Echo "Macro 1 Line 1 - Trigger Macro 2" | Follow | Yes     | No        | Yes     |
|      | 2  | MacroLine 2 | Echo "Macro 1 Line 2"                            | Follow | Yes     | No        | Yes     |
|      | 3  | MacroLine 3 | Echo "Macro 1 Line 3"                            | Follow | Yes     | No        | Yes     |
|      | 4  | MacroLine 4 | Echo "Macro 1 Line 4"                            | Follow | Yes     | No        | Yes     |
|      | 5  | MacroLine 5 | Echo "Macro 1 Line 5 - Last"                     | Follow | Yes     | No        | Yes     |

Macro 2 

| Lock | No | Name        | Command                      | Wait   | Enabled | AddToCmdl | Execute |
| ---- | -- | ----------- | ---------------------------- | ------ | ------- | --------- | ------- |
|      | 1  | MacroLine 1 | Echo "Macro 2 Line 1"        | Follow | Yes     | No        | Yes     |
|      | 2  | MacroLine 2 | Echo "Macro 2 Line 2"        | Follow | Yes     | No        | Yes     |
|      | 3  | MacroLine 3 | Echo "Macro 2 Line 3"        | Follow | Yes     | No        | Yes     |
|      | 4  | MacroLine 4 | Echo "Macro 2 Line 4"        | Follow | Yes     | No        | Yes     |
|      | 5  | MacroLine 5 | Echo "Macro 2 Line 5 - Last" | Follow | Yes     | No        | Yes     |

2. Tap Macro 1. As a result, all lines except line 5 of macro 2 are executed.
3. Disable lines 3 and 4 of Macro 1. As a result, Lines 1, 2, and 5 of Macro 1 are executed and Lines 1 and 2 of Macro 2 are executed.

Macros triggered by other macros in this way will also stop when the first macro stops. In order to overcome this, Call Macro X command should be used.

### Change User

This macro opens the login window where you can enter a new username and password.

| Lock | No | Name        | Command | Wait   | Enabled | AddToCmdl | Execute |
| ---- | -- | ----------- | ------- | ------ | ------- | --------- | ------- |
|      | 1  | MacroLine 1 | LogIn   | Follow | Yes     | No        | Yes     |

### World Is Selection

This predefined macro will create a temporary world for the selected fixtures.

| Lock | No | Name        | Command                          | Wait   | Enable | AddToCmdl | Execute |
| ---- | -- | ----------- | -------------------------------- | ------ | ------ | --------- | ------- |
|      | 1  | MacroLine 1 | Delete World 999 /NoConfirmation | Follow | Yes    | No        | Yes     |
|      | 2  | MacroLine 2 | Store World 999                  | Follow | Yes    | No        | Yes     |
|      | 3  | MacroLine 3 | World 999                        | Follow | Yes    | No        | Yes     |

### Block Sequence

This macro will prompt you for a sequence ID and a cue number to block.

| Lock | No | Name        | Command                                 | Wait   | Enable | AddToCmdl | Execute |
| ---- | -- | ----------- | --------------------------------------- | ------ | ------ | --------- | ------- |
|      | 1  | MacroLine 1 | Block Sequence (Sequence #) Cue (Cue #) | Follow | Yes    | No        | Yes     |

|                                            |                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                         |
|                                            | If no cue number is entered, the entire sequence will be blocked  |

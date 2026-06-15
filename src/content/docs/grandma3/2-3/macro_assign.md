---
title: "Assign Macros to Keys and Buttons"
description: "The macros can be assigned to executors or view buttons for easy access."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/macro_assign.html"
scrapedAt: "2026-06-15T18:25:27.043Z"
pagefind: false
---
The macros can be assigned to executors or view buttons for easy access. 

The macro is still in the macro pool. The executor or view button simply runs the macro in the pool. It is, therefore, a requirement to have the macro in the pool before assigning it anywhere.

There are different ways to assign macros to keys or buttons:

### Assign Macros by Using the Keys

**Requirements**: A visible macro pool and a stored macro.

This is maybe the fastest way to assign the macro when using a console:

1. Press Assign.
2. Press MA while pressing X14 | Macro.
3. Enter the macro number using the numeric keys.
4. Press the button or tap the key where the macro is to be assigned.

Alternatively, if the macro pool is visible:

1. Press Assign.
2. Tap the macro to be assigned in the macro pool.
3. Press the button or tap the key where the macro is to be assigned.

### Assign Macros by Using the Swipey Commands

**Requirement:** Have the macro pool visible on the screen.

1. Tap and hold the macro pool object.
2. Swipe out of the pool object. The swipey commands open.
3. Swipe to the Assign button and release the screen.
4. Press the button or tap the key where the macro is to be assigned.

The macro is assigned to a key.

### Assign Macros by Using the Assign Menu for Executors

1. Press Assign and press the desired executor. The Assign Menu opens:

![](/img/grandma3/2-3/window_assign_menu-a3f606.png)

1. Tap Object on the left.
2. Tap Macro at the top of the menu.
3. Tap the desired macro in the list.
4. Close the Assign Menu.

The macro is assigned to an executor.

 

### Assign to an Executor Using the Command Line

To assign a macro to an executor on a specific page, use this syntax:

|                                                                    |                                                                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Macro \["Macro\_Name" or Macro\_Number] At Page \["Page\_Name" or Page\_Number].\[Executor\_Number] |

To assign a macro to the current page, use this syntax:

|                                                                    |                                                                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Macro \["Macro\_Name" or Macro\_Number] At Executor \[Executor\_Number] |

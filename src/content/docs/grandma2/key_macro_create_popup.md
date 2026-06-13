---
title: "Create pop-ups"
description: "Sometimes it can be very useful to create macros that can collect user input while running."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_create_popup.html"
scrapedAt: "2026-06-12T21:28:22.568Z"
---
Sometimes it can be very useful to create macros that can collect user input while running.

A macro can create a pop-up that prompts the user for input. The macro will halt and wait for the user to type the input before continuing.

Pop-ups are created by the use of parentheses.

The text inside the parentheses is used as text prompted to the user, while the response entered by the user will replace the parentheses and the prompting text.

**Important:**\
When you are using pop-ups to assign text to variables, you should use quotes inside the parentheses: ("What address?") but when using pop-ups for commands and numbers, do not use quotes inside the parentheses: (Which Fixture ID?).

 

## Example 1:

We want a macro that selects the fixture patched to a specific DMX address. The macro should ask the user for a universe number and the DMX address. This is done using two prompts - one for each user input.

Since we are asking for numbers, the text entered in the parentheses cannot be in quotes - the console would interpret it as text instead of numbers.

The macro looks like this:

![](/img/grandma2/img_macro_create-popup_macro-line_v3_3-edf7c3.png)

_Edit macro pop-up with macro line_

When running the macro, the console first prompts for the universe number:

![](/img/grandma2/img_macro_create-popup_prompt-1_v3_3-8112ec.png)

_First prompt of the macro - asking for universe number_

After the user types the number and finishes with Please/Enter, then it asks for the DMX address:

![](/img/grandma2/img_macro_create-popup_prompt-2_v3_3-314bbb.png)

_Second prompt of the macro - asking for DMX address_

Processed, the macro executes the command. It could look like this:

![](/img/grandma2/img_macro_create-popup_result_v3_3-b2ef12.png)

_Command line feedback of the macro_

### Example 2:

We want a macro that we can use to login as a different user. We want to be prompted for the user name and password. In this macro, we choose to store the user input in variables. All users need a password for this macro to work.

This is the macro:

| No. | CMD                                                  |
| --- | ---------------------------------------------------- |
| 1   | SetVar $my\_user=("What User do you want to login?") |
| 2   | SetVar $my\_password=("What is the password?")       |
| 3   | Login $my\_user $my\_password                        |
| 4   | SetVar $my\_password=                                |

Notice that we store the user input as text.

The fourth macro line removes the my\_password variable. Otherwise, the password would have been readable by anyone.

It can often be a good idea to treat the user input as text. This, for instance, allows the use of names instead of just numbers.

 

See more examples in the [Example macros topic](/grandma2/key_macro_examples/).

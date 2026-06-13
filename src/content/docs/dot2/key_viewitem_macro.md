---
title: "Macros Pool"
description: "To go to thMacros Pool Viewn screen 1, press Macro on the console."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_viewitem_macro.html"
scrapedAt: "2026-06-12T21:29:44.349Z"
---
To go to the **Macros Pool View** on screen 1, press Macro on the console.

![](/img/dot2/img_macros_1-9-0f15ef.png)

_Figure 1: Macros pool view_

Macros are used for the automation of tasks.\
The first 45 are predefined macros that cannot be edited or deleted. They are organized in alphabetical order.

To scroll in the macros pool view, slide the vertical scroll bar or slide up and down in the view.

Numbers 46 to 999 can be edited.

## Predefined macros

**1. +05:**\
Adds 5% dimmer value to the selected fixture.

**2. -05:**\
Removes 5% dimmer value from the selected fixture.

**3. Align <:**\
Selects the align mode <. Refer to, [Align Key](/dot2/key_key_align/).

**4. Align >:**\
Selects the align mode >. Refer to, [Align Key](/dot2/key_key_align/).

**5. Align <>:**\
Selects the align mode <>. Refer to, [Align Key](/dot2/key_key_align/).

**6. Align ><:**\
Selects the align mode ><. Refer to, [Align Key](/dot2/key_key_align/).

**7. Align Off:**\
Turns the align mode off. Refer to, [Align Key](/dot2/key_key_align/).

**8. Circular Copy >:**\
Copies all values of the selected fixtures one step to the right.\
This is useful to create a chaser.

![](/img/dot2/dot2_viewsandwindows_macrospool02_1-2-e4f5b0.png)

_Figure 2: Before circular copy >_

![](/img/dot2/dot2_viewsandwindows_macrospool03_1-2-bc8c12.png)

_Figure 3: After circular copy >_

**9. Circular Copy <:**\
Copies all values of the selected fixtures one step to the left.\
This is useful to create a chaser.

**10. Clear All:**\
Clears the selection and removes all values from the programmer. Refer to, [Clear Key](/dot2/key_key_clear/).

**11. Clear Selection:**\
Clears the selection of fixtures. Refer to, [Clear Key](/dot2/key_key_clear/).

**12. Clone single Preset Type:**\
Clones a single preset types from one fixture to another fixture.\
Useful if you have an existing show and you get additional fixtures in the show.

Example:\
Fixture 1 thru 4 uses color preset light cyan.

![](/img/dot2/dot2_viewsandwindows_macrospool10_1-2-0cb1b7.png)

_Figure 4: Fixtures sheet view - fixture 1 thru 4 uses color preset light cyan_

Now I got additional fixtures in the show, fixture 5 thru 8. I want that they use color preset light cyan as well.

1. Tap macro Clone single Preset Type.\
   A pop-up asks from what fixture you like to clone.
2. Type **1** for fixture 1.\
   One of the fixtures using the preset is enough.\
   Tap Ok in the title bar.\
   A pop-up asks to what fixture you like to clone.
3. Type **5 thru 8.**\
   Tap Ok in the title bar.\
   A pop-up asks what preset type number you like to clone.
4. Type **4** for color preset type.\
   Tap Ok in the title bar.\
   A pop-up informs you about how many objects will be cloned.
5. Tap Ok.

All the fixtures 1 thru 8 uses color preset light cyan.

![](/img/dot2/dot2_viewsandwindows_macrospool11_1-2-ce9c15.png)

_Figure 5: Fixtures sheet view - fixture 1 thru 8 uses color preset light cyan_

**13. Clone all Presets:**\
Clones all presets from one fixture to another fixture.\
Useful if you have an existing show and you get additional fixtures in the show.

**Important:**\
If you clone all presets, double-check the position presets. If the fixture doesn´t have exactly the same position, you need to adjust the position presets.

Example:\
Fixture 1 thru 4 were already existing. Fixture 5 thru 8 are new in the show and they should use all the same presets than fixture 1 thru 4.

1. Tap macro Clone all Presets.\
   A pop-up asks from what fixture you like to clone.
2. Type **1** for fixture 1.\
   One of the fixtures using the preset is enough.\
   Tap Ok in the title bar.\
   A pop-up asks to what fixture you like to clone.
3. Type **5 thru 8.**\
   Tap Ok in the title bar.\
   A pop-up informs you about how many objects will be cloned.
4. Tap Ok.

Fixture 5 thru 8 uses all the same presets than fixture 1.

**14. Clone Fixture in Executor:**\
Clones the fixture only on the entered executor. If the source fixture is using a preset, the preset will be cloned as well.\
This makes sense, if you need to add one more fixture on an executor what does exactly the same as another fixture.

**15. Export all Executor to USB:**\
A shorted version of the cues view of all executors will be exported to the inserted USB stick as an .xml file. The .xml files are in the folder **dot2\importexport**. To open the .xml file use a browser or import the .xml file in a calculation program.

**16. Export Patch to USB:**\
The console asks to enter the file name. Export a shorted version of the patch & fixture schedule to the inserted USB stick as an .xml file. The .xml files are in the folder **dot2\importexport**. To open the .xml file use a browser or import the .xml file in a calculation program.

**17. IfActive:**\
Selects only fixtures in the [fixtures view](/dot2/key_viewitem_fixture/), if they have active programmer values. Refer to, [What is a Programmer?](/dot2/key_wa_programmer/)

**18. if output:**\
Selects only fixtures in the [fixtures view](/dot2/key_viewitem_fixture/), if they have a dimmer value bigger than 0.

**19. IfProg:**\
Selects only fixtures in the [fixtures view](/dot2/key_viewitem_fixture/), if they have values in the programmer. Refer to, [What is a Programmer?](/dot2/key_wa_programmer/)

**20. Invert:**\
Enters the [Invert Command](/dot2/key_keyword_invert/) in the command line.

**21. Knockout Invert:**\
Inverts at fist the selection and removes the inverted selection from the programmer.\
This is useful if you have a lot of values in the programmer but you want to store only the current selected values.

![](/img/dot2/dot2_viewsandwindows_macrospool04_1-2-29cab9.png)

_Figure 6: Fixture selection and values before knockout invert_

![](/img/dot2/dot2_viewsandwindows_macrospool05_1-2-fe35ba.png)

_Figure 7: Fixture selection and values after knockout invert_

**22. Knockout Selection:**\
Deselects the selected fixtures in the [fixtures view](/dot2/key_viewitem_fixture/) and remove their values from the programmer.

**23. MAtricks 1/3:**\
Selects every third fixture of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the every third fixture, starting with next or previous fixture.\
Example: If Highlight is on, every third fixture is highlighted.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**24. MAtricks 1/4:**\
Selects every fourth fixture of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the every fourth fixture, starting with next or previous fixture.\
Example: If Highlight is on, every fourth fixture is highlighted.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**25. MAtricks 1/5:**\
Selects every fifth fixture of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the every fifth fixture, starting with next or previous fixture.\
Example: If Highlight is on, every fifth fixture is highlighted.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**26. MAtricks Block 1:**\
Selects blocks of 1 fixture of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the next or previous block.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**Hint:**\
You can assign MAtricks block macros as a command in the cues view.

**27. MAtricks Block 2:**\
Selects blocks of 2 fixtures of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the next or previous block.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**28. MAtricks Block 3:**\
Selects blocks of 3 fixtures of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the next or previous block.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**29. MAtricks Block 4:**\
Selects blocks of 4 fixtures of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects the next or previous block.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**30. MAtricks Even:**\
Selects every second fixture of the current fixture selection, starting with the second fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) function changes into a toggle function between even and odd.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**31. MAtricks Even ID:**\
Selects only fixtures with an even fixture ID of the current fixture selection.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects next and previous even fixture ID.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**32. MAtricks Group 0:**

**Important:**\
To use the MAtricks Group macros, enter the values by using the calculator or the number pad.

Aligns the values across the fixture selection.\
\- Select the MAtricks Group and then enter the align values.

![](/img/dot2/dot2_viewsandwindows_macrospool12_1-2-3775e2.png)

_Figure 8: Fixtures use MAtricks Group 0_

**33. MAtricks Group 2:**\
Aligns the values across groups of 2 fixtures of the fixture selection.\
\- Select the MAtricks Group and then enter the align values.

![](/img/dot2/dot2_viewsandwindows_macrospool13_1-2-2406fe.png)

_Figure 9: Fixtures use MAtricks Group 2_

**34. MAtricks Group 3:**\
Aligns the values across groups of 3 fixtures of the fixture selection.\
\- Select the MAtricks Group and then enter the align values.

![](/img/dot2/dot2_viewsandwindows_macrospool14_1-2-7f4b78.png)

_Figure 10: Fixtures use MAtricks Group 3_

**35. MAtricks Group 4:**\
Aligns the values across groups of 4 fixtures of the fixture selection.\
\- Select the MAtricks Group and then enter the align values.

![](/img/dot2/dot2_viewsandwindows_macrospool15_1-2-68ef1a.png)

_Figure 11: Fixtures use MAtricks Group 4_

**36. MAtricks Odd:**\
Selects every second fixture of the current fixture selection, starting with the first fixture.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) function changes into a toggle function between even and odd.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**37. MAtricks Odd ID:**\
Selects only fixtures with an odd fixture ID of the current fixture selection.\
[Next](/dot2/key_key_next/) and [Previous Key](/dot2/key_key_prev/) selects next and previous odd fixture ID.\
Reset the Next and Previous Key back to default by using [Macro 38 MAtricks RESET](<#36. MAtricks RESET:>).

**38. MAtricks RESET:[]()**\
Resets the Next and Previous key back to their default function.\
This is necessary after using MAtricks macros.

**39. Off all Executor:**\
Turns off all executors except the main executor.

**40. Off Pages Minus Current:**\
Turns off every page except the current visible page in the [executor bar](/dot2/key_widget_executorlabelbar/).

**41. Oops Menu:**\
Opens the [Oops View](/dot2/key_view_oops/) on screen 1.

**42. Quicksave the Show File:**\
Saves the show file. Refer to, [Backup Key](/dot2/key_key_backup/).

**43. Shuffle Selection:**\
The dot2 remembers the order of how you select the fixtures, e.g. from fixture 1 to 10 or from fixture 10 to 1.\
This necessary for e.g. effects or the highlight function.

The shuffle selection macro mixed-up the order of the fixture selection.

Example without Shuffle Selection Macro:\
Select the fixtures in the [fixtures view](/dot2/key_viewitem_fixture/) from 1 to 8, press At 1 0 Thru 1 0 0.

![](/img/dot2/dot2_viewsandwindows_macrospool06_1-2-cb9ccc.png)

_Figure 12: Before shuffle values_

The values from 10 to 100 are assigned to the fixtures in the selection order.

Example with Shuffle Selection Macro:\
Select fixtures from 1 to 8 in the [fixtures view](/dot2/key_viewitem_fixture/), tap at macro Shuffle Selection, press At 1 0 Thru 1 0 0.

![](/img/dot2/dot2_viewsandwindows_macrospool07_1-2-4f31ef.png)

_Figure 13: After shuffle values_

The values from 10 to 100 are assigned to the fixtures in a mixed order.

**44. Shuffle Values:**\
Mix-up the values of the selected fixtures.

![](/img/dot2/dot2_viewsandwindows_macrospool08_1-2-3ea057.png)

_Figure 14: Before shuffle values_

![](/img/dot2/dot2_viewsandwindows_macrospool09_1-2-5c4e32.png)

_Figure 15: After shuffle values_

**45. Stomp Running Effects:**\
Mutes all running effects. To start the effects again, press Clear.\
For more information, see [Stomp command](/dot2/key_keyword_stomp/).

## Editable macros

Macros 46 to 999 can be edited:

![](/img/dot2/img_macro_50_1-9-2c45d0.png)

To edit a macro, use one of the options:

- Press Edit and tap the requested macro number. Press the right Screen Encoder in the macro pool.
- Type Edit on the keyboard and enter the requested macro number. Press Enter.

The macro editor opens:

![](/img/dot2/img_macro_editor_1-9-e71c87.png)

To enter a new macro line, tap Add:

![](/img/dot2/img_macro_editor_new_line_1-9-74f479.png)

Press the right Encoder and enter the macro command using the hardware keys or the keyboard:

![](/img/dot2/img_macro_editor_75_1-9-463973.png)

To save the macro line, press Please or tap OK.

To rename the macro, press Label and tap the macro in the pool.

![](/img/dot2/img_macro_label_1-9-72dd09.png)

### Example macro

This macro can easily be created using the hardware keys:

Fixture 1 At 50

Store Cue 1 /merge

Fixture 2 At 50

Store Cue 2 /merge

![](/img/dot2/img_macro49_1-9-61ad2a.png)

Resize the first column "CMD" to see all columns on one screen:

![](/img/dot2/img_macro49_resize_1-9-c1adad.png)

### Macro Wait Time

The Macro Wait Time can be added to every macro line, except for the last line.

To toggle the Macro Wait Time on (yellow text) or off, tap the Timing button left from the Test Macro button.

To add a Macro Wait Time to a macro line, press Edit and tap the Wait cell of the desired line.

To add 4 seconds Wait Time to line 1 of Macro 49:

![](/img/dot2/img_macro49_wait_1-9-7a2a46.png)

### Create macro pop-ups

Sometimes it can be very useful to create macros that can collect user input while running.

A macro can create a pop-up that prompts the user for input. The macro will halt and wait for the user to type the input before continuing.

Pop-ups are created by the use of parentheses.

The text inside the parentheses is used as text prompted to the user, while the response entered by the user will replace the parentheses and the prompting text.

**Important:**\
When you are using pop-ups to assign text to variables, you should use quotes inside the parentheses: ("Which address?") but when using pop-ups for commands and numbers, do not use quotes inside the parentheses: (Which Fixture ID?).

 

### Example 1:

We want a macro that stores a specific cue to a specific executor. The macro should ask the user for an executor number and the cue number. This is done using two prompts - one for each user input.

Since we are asking for numbers, the text entered in the parentheses cannot be in quotes - the console would interpret it as text instead of numbers.

The macro looks like this:

![](/img/dot2/img_macro52_text_1-9-88d086.png)

_Edit macro pop-up with macro line_

![](/img/dot2/img_macro52_1-9-8494bc.png)

When running the macro, the console first prompts for the executor number:

![](/img/dot2/img_macro52_executor_1-9-4e9a95.png)

_First prompt of the macro - asking for the executor number_

After the user types the number and finishes with Please/Enter, then it asks for the cue number:

![](/img/dot2/img_macro52_cue_1-9-18a1c1.png)

_Second prompt of the macro - asking for the cue_

Processed, the macro executes the command. It could look like this:

![](/img/dot2/img_macro52_cl_1-9-ec5bfc.png)

_Command line feedback of the macro_

## @ character

You can make the commands of the macro lines interact by the use of the @ character.

This special command is only relevant in macros.

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

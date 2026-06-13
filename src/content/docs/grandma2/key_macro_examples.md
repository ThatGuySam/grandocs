---
title: "Example macros"
description: "Here you can find some examples of macros."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_macro_examples.html"
scrapedAt: "2026-06-12T21:28:22.999Z"
---
Here you can find some examples of macros.

Most can be found in the predefined macros. Read the [Import predefined objects topic](/grandma2/key_ei_import_predefined/) for information about importing them.

## +05

This short macro will simply put 5% more on the dimmer value on the selected fixtures.

| No.: | CMD:   | Info: |
| ---- | ------ | ----- |
| 1    | At + 5 |       |

 

## Executor CLI = off

This macro will turn off the **Exec CLI** setting in the Local settings in Setup.

| No.: | CMD:                                         | Info: |
| ---- | -------------------------------------------- | ----- |
| 1    | Assign Root ."Settings"."Local" /ExecCLI=off |       |

It assigns a new value for the "ExecCLI" option in the local settings. The local settings are addressed using the names of the settings and the "local" part of the settings.

 

## ExecTime on/off

This macro can be used to turn on or off (toggle) the Executor Time fader (the one shown on screen 2 lower right corner).

| No.: | CMD:                                           | Info:                                                       |
| ---- | ---------------------------------------------- | ----------------------------------------------------------- |
| 1    | Toggle SpecialMaster "grandmaster"."exec time" | Toggles the "Set Time" function on the Executor Time fader. |

It sends a command to a special master in the "grandmaster" group. The special master is called "exec time" (Executor Time).

 

## Replace Fixture in Sequence

You can use this macro if you need to replace a fixture with a different one in a specific sequence.

| No.: | CMD:                                                                                      | Info: |
| ---- | ----------------------------------------------------------------------------------------- | ----- |
| 1    | Replace Fixture (old Fixture?) With Fixture (New Fixture?) If Sequence (Sequence number?) |       |

This macro uses three pop-ups asking for the old and new fixture numbers and the sequence number. The pop-ups a re displayed when the macro reaches the parentheses. The title bar of the pop-up displays the text written inside the parentheses.

 

## Preset Live Fade

This macro is used to fade into a preset in 2 seconds. The idea is that you tap the macro and then the preset (in a preset pool) you want to fade to.

| No.: | CMD:                                            | Info:                                                      |
| ---- | ----------------------------------------------- | ---------------------------------------------------------- |
| 1    | On SpecialMaster "grandmaster"."program time"   | Turn on the Program Time fader                             |
| 2    | SpecialMaster "grandmaster"."program time" At 2 | Sets the Program time to 2 seconds                         |
| 3    | At Preset @                                     | Selects a preset - waiting for the user to select a preset |
| 4    | Off SpecialMaster "grandmaster"."program time"  | Turn off the Program Time fader                            |

The first two lines turn on the Program Time fader and sets the fade time to 2 seconds. The third line will put the "At Preset" part in the command line and then wait for you to tap the preset. The last line turns off the Program Time fader.

 

## Set Show Running Status

This multi line macro is an example of the commands you could use to setup your console ready for a show start.

| No.: | CMD:                                       | Info:                                       |
| ---- | ------------------------------------------ | ------------------------------------------- |
| 1    | ChangeDest "settings"                      | Enters the settings                         |
| 2    | Assign "Global" /Telnet= "Login Disabled"  | Turns off telnet connections                |
| 3    | Assign "Global" /Remotes= "Login Disabled" | Disables remote access                      |
| 4    | Assign "Global" /Agenda= "stopped"         | Turns off any agendas                       |
| 5    | ChangeDest /                               | Exits the settings                          |
| 6    | Highlight Off                              |                                             |
| 7    | Solo Off                                   |                                             |
| 8    | Blind Off                                  |                                             |
| 9    | BlindEdit Off                              |                                             |
| 10   | PreviewEdit Off                            |                                             |
| 11   | Off Executor 0.1.1 Thru                    | Turns off all the executors                 |
| 12   | World 1                                    | Goes into the full world                    |
| 13   | ClearAll                                   | Clears the programmer                       |
| 14   | ResetDmxSelection                          | This clears the selection in the DMX tester |
| 15   | Off DmxUniverse Thru                       | This clears the values in the DMX tester    |
| 16   | SpecialMaster "grandmaster"."Grand" At 100 | Sets the grand master to 100%               |

This is a macro that can be used as the foundation for a start show macro. You might want to add your own line after line 16. Your own lines would typically turn on the relevant executors and make sure they are turned up and in the right cue.

 

## SaveShow Enumerate

This is not a predefined macro.

This macro will allow you to save your show with an enumerate number each time you run the macro.

The first time it runs it will save the show with number 1 and then it will enumerate from there.

You need to edit the macro and change the "base" name of the show file (line number 4).

The macro needs to be labeled "SaveShow Enumerate" or you need to edit line 2 to match the macro name.

| No.: | CMD:                                                                      | Info:                                                                      |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1    | SetVar $show\_number = 0                                                  | This defines a counter variable                                            |
| 2    | Assign Root ."Macros"."Global"."SaveShow Enumerate".1 + 2 /Disabled="Yes" | This line will turn disable line 1 and 2 after the first run of the macro. |
| 3    | AddVar $show\_number = 1                                                  | This adds 1 to the counter.                                                |
| 4    | SetVar $show\_name\_base = "My Show\_"                                    | This is the base name. Numbers will be added to this.                      |
| 5    | SetVar $show\_name\_current = $show\_name\_base                           | This create a new variable with the "base" name.                           |
| 6    | AddVar $show\_name\_current = $show\_number                               | This adds the number to the name variable.                                 |
| 7    | SaveShow $show\_name\_current /nc                                         | This saves the show with the name. "/nc" suppresses any pop-ups.           |

In this macro you can see the use of variables and how you can use the AddVar command to append text to other text.

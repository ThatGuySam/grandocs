---
title: "Syntax Rules"
description: "The command line syntax is used to create valid commands."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/csk_syntax_rules.html"
scrapedAt: "2026-06-12T21:24:20.760Z"
---
The command line syntax is used to create valid commands.

Function keywords, also called command keywords, behave like verbs in commands – they tell the objects what to do.

Object keywords are used to allocate objects in the show file.

Help keywords are used to create a relation between functions and objects.

Layer keywords address the layers of different parameters.

Cue timing keywords address different times of a cue transition.

Value readout keywords define the unit of displayed values. 

Speed readout keywords define the unit of displayed speeds.

At value keywords are a sort of shortcuts which are used to set parameters to certain predefined values. 

Playback keywords provide control over playback functionalities.

Fader keywords are related to anything that has to do with faders.

Operator keywords are symbols that perfrom mathematical opertions in a command.

Option keywords are temporary filters in commands. For more information on option keywords see [Option Keywords](/grandma3/2-4/option_keywords/).

To view all executed commands, see [Command Line History](/grandma3/2-4/ws_ui_command_line/).

## General Rules

The general rules are:

- All objects have a default function which is used if no function is given.
- Most functions have a default object or an object type which is used if no object is given. 
- Objects are arranged in a hierarchical tree structure. If an object does not support the function applied, the function is passed on to a child or parent object. 

For more information see [Hierarchical Structure of Objects](/grandma3/2-4/csk_parent_child/).

---

## Terminology

- \[Square brackets]:\
  Description of non-literal content.

* (Parentheses):\
  Description of optional content. 

- "Quotation marks"/'Quotation marks':\
  Quotation marks are used to enter a definite name or content. If the line ends after the word in quotation marks, the quotation marks at the end may be omitted. If the name or content is not a keyword and does not contain special characters, the quotation marks can be left out altogether.

|                                                  |                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                  |
|                                                  | If an option or any other part of the keyword command requires two types of quotation marks -  single (') and double quotation marks (") - make sure to always use an equal pair. For more information see the [RemoteCommand keyword](/grandma3/2-4/keyword_remotecommand/).   |

- Capitalization:\
  In general, capitalization is important as values are case-sensitive. 

### Example

Here the value "Positive" is capitalized. This is correct and the command will be executed.

Set Group 1 Property "Mode" "Positive"

Here the value "positive" is in lower case. This is wrong and the command will not be executed. 

Set Group 1 Property "Mode" "positive"

- Only when using keyword commands, the console does not distinguish between upper case and lower case. In such topics, capitalization is used to improve readability only.

---

## []()Use the Command Line

It is possible to abbreviate all the commands using the shortcuts of the corresponding keywords. 

Each keyword has its own shortcut. Every keyword topic also names the respective shortcut. 

For more information see [General Keywords](/grandma3/2-4/csk_general_keywords/).

|                                                  |                                                                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                     |
|                                                  | Shortcuts are subject to change as new keywords are added to the software. We advise you read the corresponding keyword topics and the release notes to check for recent changes.  |

## Example

- To store cue 20 in sequence 8 using the overwrite option keyword, type:

Full version of the syntax:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Sequence 8 Cue 20 /Overwrite |

 

Abbreviated version of the syntax:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>S Seq 8 Cue 20 /O |

 

Very short version of the syntax:

- To copy cue 2 to cue 6 of the selected sequence, type:

|                                                                    |                               |
| ------------------------------------------------------------------ | ----------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Co 2 At 6 |

|                                            |                                                    |
| ------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                          |
|                                            | The examples use the full version in the manual.   |

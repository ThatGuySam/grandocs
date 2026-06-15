---
title: "Syntax Rules"
description: "The command line syntax is used to create valid commands."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/csk_syntax_rules.html"
scrapedAt: "2026-06-15T18:24:56.099Z"
pagefind: false
---
The command line syntax is used to create valid commands.

Object keywords are used to allocate objects in the show file.

Help keywords are used to create a relation between functions and objects.

Playback keywords provide control over playback functionalities.

Fader keywords are related to anything that has to do with faders.

For more information see [Command Line History](/grandma3/2-3/ws_ui_command_line/).

## General Rules

The general rules are:

|                                                  |                                                        |
| ------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                         |
|                                                  | The basic syntax is as follows: \[Function] \[Object]  |

- All objects have a default function which is used if no function is given.
- Most functions have a default object or an object type which is used if no object is given. 
- Objects are arranged in a hierarchical tree structure. 
- If an object does not support the function applied, the function is passed on to a child or parent object. 

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
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                  |
|                                                  | If an option or any other part of the keyword command requires two types of quotation marks -  single (') and double quotation marks (") - make sure to always use an equal pair. For more information see the [RemoteCommand keyword](/grandma3/2-3/keyword_remotecommand/).   |

- Capitalization:\
  In general, capitalization is important. Only when using keyword commands, the console does not distinguish between upper case and lower case. In such topics, capitalization is used to improve readability only.

---

## []()Use the Command Line

It is possible to abbreviate all the commands using the shortcuts of the corresponding keywords. 

Each keyword has its own shortcut. Every keyword topic also names the respective shortcut. 

For more information see [General Keywords](/grandma3/2-3/csk_general_keywords/).

|                                                  |                                                                                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                     |
|                                                  | Shortcuts are subject to change as new keywords are added to the software. We advice you read the corresponding keyword topics and the release notes to check for recent changes.  |

## Example

- To store cue 20 in sequence 8 using the overwrite function, type:

Full version of the syntax:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Sequence 8 Cue 20 /Overwrite |

 

Abbreviated version of the syntax:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>S Seq 8 Cue 20 /O |

 

Very short version of the syntax:

- To copy cue 2 to cue 6 of the selected sequence, type:

|                                                                    |                               |
| ------------------------------------------------------------------ | ----------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Co 2 At 6 |

|                                            |                                                    |
| ------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                          |
|                                            | The examples use the full version in the manual.   |

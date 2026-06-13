---
title: "* (Asterisk)"
description: "To enter the  [Asterisk] in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_asterisk.html"
scrapedAt: "2026-06-12T21:24:21.351Z"
---
To enter the \* \[Asterisk] in the command line, use one of the options:

- Press and hold Shift + 8 on the internal keyboard
- Press and hold MA + /\* on the numeric keypad of the console

## Description

The \* \[Asterisk] is a placeholder which is used to substitute any other character or characters in a name.

- If used in calculations, the asterisk would define a multiplication.
- If used as object number, the asterisk would reperesent all objects within the specified object type.
- If used with names, the asterisk would act as a wildcard to match multiple objects.

## Syntax

\[Command] "Name\*"

\[Command] \[Object] \*

|                                            |                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                              |
|                                            | The \* \[Asterisk] can be positioned anywhere within the name string.  |

## Examples

- To select the fixtures of all groups beginning with "Mac" in the group pool object name, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Group "Mac\*" |

 

-  To select all fixtures with a name beginning with "backt" and ending with "blue", type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Fixture "backt\*blue" |

 

- To enable all macro lines in macro 5, type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Macro 5.\* Property "Enabled" "Yes" |

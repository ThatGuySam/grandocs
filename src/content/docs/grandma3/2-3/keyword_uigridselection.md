---
title: "UIGridSelection"
description: "To enter the UIGridSelection keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_uigridselection.html"
scrapedAt: "2026-06-15T18:25:12.581Z"
pagefind: false
---
To enter the UIGridSelection keyword in the command line, use one of the options:

- Type **UIGridSelection**
- Type the shortcut **Uig**

## Description

UIGridSelection keyword is used by the system to hold information about which objects are selected in a grid window. Grid windows include sheets. It **does not include** the Selection Grid window.

The keyword is primarily used internally by the system, but the selection can be used for normal operations that are executed on the selected objects.

|                                                  |                                                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                   |
|                                                  | The grid with the selection must have a focus so the UIGridSelection command can actually work.  |

## Syntax

\[Function] UIGridSelection

## Example

**Requirement:**

- Several cues in a sequence.
- A macro containing a Copy UIGridSelection command. This is important so you can execute the command without moving the focus.

 

- To copy a selection of the cues to cue 41 using the UIGridCommand, follow these steps:

1. Select the desired cues in the sequence sheet.
2. Run the macro using the command keys (Important to use the keys to keep the focus in the cue selection).
3. Now the following command can be entered and executed in the command line:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Paste Cue 41  |

---
title: "Copy"
description: "Copys a function used to create copies of an object."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_copy.html"
scrapedAt: "2026-06-12T21:27:47.193Z"
---
**Copy** is a function used to create copies of an object.

To execute this keyword type **Copy** or the shortcut **Co** into the command line. 

## Syntax

Copy \[Object] At \[target-ID]

Copy \[Object-list] At \[target-start]

Copy \[Object] At \[target-list]

Copy \[Object-list]

## Options

To get a list of all options available for the keyword **Copy** in the command line feedback window type the following into the command line:

\[Channel]> Copy /?

The keyword **Copy** has the following options:

| Option    | Shortcut | Option value    | Description                                |
| --------- | -------- | --------------- | ------------------------------------------ |
| overwrite | o        | no option value | Replaces existing content.                 |
| merge     | m        | no option value | Adds to existing content.                  |
| status    | s        | =False; =True   | Adds tracking status to existing content.  |
| cueonly   | co       | =False; =True   | Prevents changes to track forward.         |
| noconfirm | nc       | no option value | Suppresses confirmation pop-up.            |

If no object type is given and the command line destination is root (no destination), the default object type **–** **Cue – ** is used for this function. 

If no target is given, the objects will be exported to clipboard.xml. The objects are used with the keyword Paste.

For more information see [Paste](/grandma2/key_keyword_paste/).

## Examples

\[Channel]> Copy Group 1 At 5

Copies group 1 to group 5.

 

\[Channel]> Copy Group 1 Thru 3 At 11

Copies group 1 to group 11; group 2 to group 12; and group 3 to group 13.

 

\[Channel]> Copy Group 2 At 6 Thru 8

Copies group 2 to group 6, 7, and 8.

 

\[Channel]> Copy 2 At 6

Copies cue 2 to cue 6.

 

\[Channel]> Copy Macro 2 At 6

Copies macro 2 to macro 6.

 

\[Channel]> ​Copy Cue 5

Exports cue 5 to the temporary xml.-file clipboard.xml.

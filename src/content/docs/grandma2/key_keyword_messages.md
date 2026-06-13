---
title: "Messages"
description: "To get the Messages keyword in the command line, type Messagesn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_messages.html"
scrapedAt: "2026-06-12T21:27:56.114Z"
---
To get the Messages keyword in the command line, type **Messages** in the command line.

## Description

With the Messages keyword you can

- list messages in the command line feedback window.
- export messages as a messages.xml file.
- delete messages from the message center, for example, from previous show files.

For more information to export files, see [general export function](/grandma2/key_ei_export_commandline/).

The Messages keyword is an object keyword.

## Syntax

\[Function] Messages / Condition = \[Condition] \[Operation Syntax] \[Condition Value]

## Conditions

The Messages keyword can only be used with the option **condition**. The short cut for condition is **cnd**.

The following table displays the supported condition values.

**Important:**\
String comparison with wild cards are possible. Values are case-insensitive.

| Condition                        | Condition Value                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "new", "unread"                  | 'true', 'false', 'yes', 'no'                                                                                                                                                                                                                                                                                                                                                                                                    |
| "time" (= message receive time)  | 'YYYY-MM-DDThh:mm:ss', 'YYYY-MM-DD', 'hh:mm:ss' When the date is used standalone, the time will be set to 00:00:00, for example, 2016-03-20T00:00:00. When the time is used standalone, the date of today will be set, for example, 2016-03-20T12:05:00.                                                                                                                                                                        |
| "sender"                         | message sender user profile name                                                                                                                                                                                                                                                                                                                                                                                                |
| "station"                        | message sender station IP + type                                                                                                                                                                                                                                                                                                                                                                                                |
| "msg"                            | message                                                                                                                                                                                                                                                                                                                                                                                                                         |
| "type" (= message type)          | 'Info', 'Warning', 'Alert', 'Error'                                                                                                                                                                                                                                                                                                                                                                                             |
| "cat" (= message category)       | 'General', 'Power', 'Network', 'Show', 'Chat', 'CITP', 'RDM',                                                                                                                                                                                                                                                                                                                                                                   |
| "subcat" (= message subcategory) | 'Backup Server', 'Blind', 'CITP Traffic', 'DMX Tester Output', 'Exec CLI', 'Filter', 'Highlight', 'IP Conflict', 'Macro', 'Masters', 'Missed Stations', 'Network', 'Parameters', 'Parked', 'Patch', 'Power', 'Preview','RDM Alert','Session', 'Solo', 'Stage', 'Timecode(MIDI)', 'Timecode(SMPTE)', 'Unassigned Ports', 'World', 'Global Autofix', 'Exec. Time', 'Prog. Time', 'Rate 1', 'Speed 1', 'Default Go', 'RDM Warning' |

The following table displays the supported operation syntax via command line.

**Important:**\
If you use operation syntax, the operation has to be surrounded by spaces.\
"condition1 = 'conditionvalue1'"

| Operation                                           | Syntax     |
| --------------------------------------------------- | ---------- |
| and                                                 | "and", "&" |
| or                                                  | "or", "I"  |
| not                                                 | "not", "!" |
| greater (only for condition time and type)          | ">"        |
| less (only for condition time and type)             | "<"        |
| greater or equal (only for condition time and type) | ">="       |
| less or equal (only for condition time and type)    | "<="       |
| equal (only for condition time and type)            | "="        |

## Examples

- List all messages in the command line feedback window, with the condition type and condition value alert.

\[Channel]> List Messages /cnd = "type = 'alert'"

 

-  Export all warning, alert, and error messages before 12:45 as a messages.xml.

\[Channel]> Export Messages /cnd="(type >= 'warning' or time <= '12:45:00') and !(new = 'true')"

 

- Delete all alert messages from the message center.

\[Channel]> Delete Messages /condition="type = 'alert'"

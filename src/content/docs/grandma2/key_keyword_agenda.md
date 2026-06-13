---
title: "Agenda"
description: "To execute the keyword Agenda, type Agendar the shortcut Agnto the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_agenda.html"
scrapedAt: "2026-06-12T21:27:44.246Z"
---
To execute the keyword Agenda, type **Agenda** or the shortcut **Ag** into the command line.

## Description

Agenda is an object type which holds scheduled tasks to be executed at specific dates and times.

## Syntax

Agenda \[ID]

Assign Agenda \[Object-list]/Start

​Assign Agenda \[Object-list]/Time

Assign Agenda \[Object-list]/Duration

Assign Agenda \[Object-list]/Repeat

Assign Agenda \[Object-list]/CMD

Assign Agenda \[Object-list]/Info

​Assign Agenda \[Object-list]/First

Assign Agenda \[Object-list]/Last

 

Options

To receive a list of all options for the keyword Agenda, type the following into the command line:

\[Channel]> Agenda /?

| Option   | Option Value                                                                                                                                                                                                  | Description                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Start    | Absolute, Dawn, Sunrise, Sunset, Dusk                                                                                                                                                                         | Sets the start of a task.                          |
| Time     | hh/mm/ss                                                                                                                                                                                                      | Sets the time of a task.                           |
| Duration | hh/mm/ss                                                                                                                                                                                                      | Sets the duration of a task.                       |
| Repeat   | None, Daily, Weekly, Monthly, Annually, Daily each month, Weekly each month, Daily each year, Weekly each year, Monthly each year, Every 2nd day, Every 3rd day, Every 4th day, Every 5th day, Every 6th day  | Sets the recurrence of a task.                     |
| CMD      | "Your command"                                                                                                                                                                                                | Sets the command of a task.                        |
| Info     | "Your info text"                                                                                                                                                                                              | Sets the info regarding a task.                    |
| First    | MM/DD/YYYY                                                                                                                                                                                                    | Sets the date of the kick off of the first task.   |
| Last     | MM/DD/YYYY                                                                                                                                                                                                    | Sets the date of the completion of the last task.  |

 

## Example

\[Fixture]> List Agenda 

Lists all agenda items stored.

 

\[Fixture] > Agenda 1 

Executes the command which was stored in agenda 1. 

 

**Hint:**\
It is also possible to enter agenda into the command line by pressing the key Macro three times on the console. 

 

For more information see the key [Macro](/grandma2/key_key_macro/).

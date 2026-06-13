---
title: "AddUserVar"
description: "AddUserVas a function used to change/extend content of user specific variables."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_adduservar.html"
scrapedAt: "2026-06-12T21:27:44.103Z"
---
AddUserVar** **is a function used to change/extend content of user specific variables.

To execute the keyword AddUserVar type **AddUserVar** or the shortcut **AddU** into the command line. 

## Syntax:

AddUserVar $variablename = numericvalue

AddUserVar $variablename = "text"

 

## Example:

\[Channel]> SetUserVar $myname = "John"

 Sets the variable $myname to **John.**

\[Channel]> AddUserVar $myname = " Doe"

 Sets the variable $myname to **John Doe.**

 

\[Channel]> SetUserVar $mycounter = 5

 Sets the variable $mycounter to 5.

\[Channel]> AddUserVar $mycounter = 6

 Sets the variable $mycounter to 11.

 

For more information see the following links:

$ \[Dollar-sign]

ListUserVar Keyword

ListVar Keyword

SetVar Keyword

SetUserVar Keyword

AddVar Keyword

AddUserVar Keyword

\[ ] \[Square Brackets]

---
title: "AddVar"
description: "To get the AddVar keyword in the command line type AddVarr the shortcut Adn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_addvar.html"
scrapedAt: "2026-06-12T21:27:44.161Z"
---
To get the AddVar keyword in the command line type **AddVar** or the shortcut **Ad** in the command line.

## Description

AddVar is a function keyword to change or extend content of show specific variables.

## Syntax

AddVar $variablename = numericvalue

AddVar $variablename = "text"

## Examples

\[Channel]> SetVar $myname = "John"

 - Sets the variable $myname to John

 

\[Channel]> AddVar $myname = " Doe"

 - Sets the variable $myname to John Doe

 

\[Channel]> SetVar $mycounter = 5

 - Sets the variable $mycounter to 5

 

\[Channel]> AddVar $mycounter = 6

 - Sets the variable $mycounter to 11

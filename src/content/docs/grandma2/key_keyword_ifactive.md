---
title: "IfActive"
description: "To get the IfActive keyword in the command line press If If (= IfActive)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_ifactive.html"
scrapedAt: "2026-06-12T21:27:52.613Z"
---
To get the IfActive keyword in the command line press If If (= IfActive).

Another way is to type **IfActive** or the shortcut **IfA** in the command line.

## Description

IfActive is a function keyword to select fixtures with active values in the programmer.

If no filter is entered IfActive selects all fixtures with active values in programmer.

If a filter is entered, IfActive selects fixtures which are in the filter and have active values in programmer.

## Syntax

IfActive

IfActive \[filter]

## Examples

- To select all fixtures with active values in the programmer type in the command line:

\[Channel]> IfActive

 

- To select only fixtures of group 5 which have active values in programmer type in the command line:

\[Channel]> IfActive Group 5

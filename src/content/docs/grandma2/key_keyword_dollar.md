---
title: "Dollar $"
description: "To get the $ character in the command line, press and hold Shift + 4."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_dollar.html"
scrapedAt: "2026-06-12T21:27:48.371Z"
---
To get the $ character in the command line, press and hold Shift + 4.

## Description

The $ character indicates variables in the command line. For more information about variables, see [use variables](/grandma2/key_macro_create_variables/).

## Examples

Create and use a variable to turn the chaser executor off.

1\. To create the variable enter in the command line:

 \[Channel]> SetVar**** $mychasers = "Executor 11 Thru 15"

2\. To use the variables $mychasers to turn executor 11 through 15 off, enter in the command line:

 \[Channel]> Off**** $mychasers

 3. Press Please.

Executor 11 trough 15 are turned off by using the variable $mychasers.

For more information to the SetVar keyword, see [SetVar keyword](/grandma2/key_keyword_setvar/).

---

Create and use a variable to login into a user profile.

1\. To create the variable enter in the command line:

 \[Channel]> SetVar**** $myname = "Ben Dover"

2\. To use the variable to login into the user profile, enter in the command line:

\[Channel]> Login**** $"myname"

You are logged in.

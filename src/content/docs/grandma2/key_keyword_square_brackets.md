---
title: "Square brackets [ ]"
description: "To enter square brackets [ ] into the command line press [ or ]."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_square_brackets.html"
scrapedAt: "2026-06-12T21:28:01.950Z"
---
To enter square brackets \[ ] into the command line press \[ or ].

## Description

Square brackets \[ ] are used in macros. For more information see [macros](/grandma2/key_macro/).

Using square brackets in macros sets a conditional expression which has to have the solution "True" to be able to execute the following commands. The expression takes user defined variables and logical operators.

|      |                            |
| ---- | -------------------------- |
| a==b | a equals b                 |
| a>b  | a greater than b           |
| a\<b | a less than b              |
| a<=b | a less than or equals b    |
| a>=b | a greater than or equals b |

**Important:**\
The two arguments a and b are treated as text strings and not as numbers – character by character. For example "61" is considered to be greater than "599", as 6 is greater than 5.

## Examples

- To turn off page 3 only if $myvar equals 5, type into the macro line:

\[$myvar==5]**Off Page** 3

---

- To goto Cue 1 if $var is less than 5, and goto Cue 35 if $var is greater or equals 5, type into the macro line:

**Goto Cue** \[$var<5]1 \[$var>=5]35

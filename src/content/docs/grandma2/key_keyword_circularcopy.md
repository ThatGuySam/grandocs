---
title: "CircularCopy"
description: "CircularCopys a function used to move attribute values within your current selection."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_circularcopy.html"
scrapedAt: "2026-06-12T21:27:46.658Z"
---
**CircularCopy** is a function used to move attribute values within your current selection.

To execute this keyword type **CircularCopy** or one of the shortcuts – **CC** or **Ci** – into the command line. 

## Syntax

CircularCopy \[offset]

CircularCopy moves the attribute values within your currently selected fixtures in accordance with the selection order.

This function obeys the At filter.

For more information on how to use filters see [What are filters](/grandma2/key_wfm_what_are_filters/).

## Example:

\[Channel]> ​CircularCopy 1

Fixture 1 copies its values to fixture 2, fixture 2 to fixture 3, and the last fixture copies its values back to fixture 1. 

 

\[Channel]> ​CircularCopy -2

Fixture 4 copies its values to fixture 2, fixture 3 to fixture 1, and the last fixture copies its values back to fixture 4.

**Hint:**\
​-It is also possible to use the Circular Copy in the MAtricks toolbar. For more information see [MAtricks toolbar - Circular Copy](/grandma2/key_matricks_toolbar/#circular_copy)​.\
​-To access the Circular Copy in a window, press Tools. For more Information see the [Tools key](/grandma2/key_key_tools/).

---
title: "Label"
description: "To get the Label keyword in the command line press Assign Assign (= Label)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_label.html"
scrapedAt: "2026-06-12T21:27:53.458Z"
---
To get the Label keyword in the command line press Assign Assign (= Label).

You can also type **Label **or the shortcut **L** in the command line.

## Description

Label is a function used to give names to objects.

If multiple objects are labeled, and the name contains a free-standing number, the number will be enumerated for each object.

If no name is given, you will be prompted with a dialog to enter the name.

## Syntax

Label \[Object-list] "Name"

For more information on quotes see [Special Characters - Quotes](/grandma2/key_keyword_marks/).

## Examples

To label group 4 as "All Studiocolors" type in the command line:

\[Channel]> Label Group 3 "All Studiocolors"

 

To label Fixture 1 thru 10 as "Mac700 1", "Mac700 2" an so on type in the command line:

\[Channel]> Label Fixture 1 Thru 10 "Mac700 1"

 

To rename the color-preset "Red" to "Dark Red" type in the command line:

\[Channel]> Label Preset "color"."Red" "Dark Red"

---
title: "ViewButton"
description: "To go to the ViewButton keyword, press View View (=ViewButton)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_viewbutton.html"
scrapedAt: "2026-06-12T21:28:04.656Z"
---
To go to the ViewButton keyword, press View View (=ViewButton).\
You can also use the commandline and type ViewButton or use the shortcut **VB**.

## Description

The ViewButton keyword calls the assigned function on the [view button](/grandma2/key_widget_view_buttons/). The call function works only if the assigned object supports a call.

The ViewButton keyword is an object keyword.

## Syntax

ViewButton \[ID]

ViewButton \[ViewPage].\[ID]

## Example

Delete the assigned function of view button 4 from the current view page.

\[Channel]> Delete ViewButton 4

Label the assigned view button 5 at view page 2.

\[Channel]> Label ViewButton 2.5 "Layout"

Store a view at key X1.

\[Channel]> Store ViewButton 11.1

## Related Links

- [ViewPage Keyword](/grandma2/key_keyword_viewpage/)
- [View Key](/grandma2/key_key_view/)
- [V-Keys](/grandma2/key_key_v1-v10/)
- [X-Keys](/grandma2/key_key_xkey/)

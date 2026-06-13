---
title: "Object list"
description: "An object list is a list of objects of the same type."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_object_list.html"
scrapedAt: "2026-06-12T21:28:05.126Z"
---
An object list is a list of objects of the same type. 

 

### Syntax

\[Object-type1] \[ID1]

\[Object-type1] \[ID1] \[Object-type1] \[ID2]

\[Object-type1] \[ID1] + \[ID2]

\[Object-type1] \[ID1] Thru \[ID2] - \[ID3]

\[Object-type1] \[ID1] Thru

\[Object-type1]​ Thru \[ID1]

\[Object-type1]​ Thru

\[Object-type1]​​ "Name"

\[Object-type1]​ "Nam\*"

 

- If no object type is given, the list contains items of your current destination. 
- If no object type is given and the current destination is root – no destination – the list contains the default object types for the function applied.
- If no object type is given and no function is applied, the list contains the current object type default of the command line. 

### Example:

\[Channel] > **Fixture** 3 **Thru** 6

Selects fixture 3 through 6 (1, 2, 3, 4, 5, 6).  

\[Channel]> **Fixture Thru** 3

 \
Selects fixture 1 through 3 (1, 2, 3). 

\[Channel]> **Delete** 3 **Thru**

 \
 Deletes cue 3 and the following upper cues. 

\[Channel]> **Channel Thru**

Selects all channels.  

\[Channel]> **Channel** 1 **Channel** 5

Selects channel 1 and 5.

\[Channel] > **Fixture** mac\*

Selects all fixtures with a name starting with mac.

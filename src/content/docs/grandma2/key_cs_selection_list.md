---
title: "Selection list"
description: "A selection list is a list of fixtures."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_selection_list.html"
scrapedAt: "2026-06-12T21:28:05.199Z"
---
A selection list is a list of fixtures. 

### Syntax

\[Object]

\[Object-type1] \[ID1]

\[Object-type1] \[ID1] + \[Object-type2] \[ID2]

\[Object-type1] \[ID1] **Thru **\[Object-type2] \[ID2]

\[Object-type1] \[ID1] **Thru **\[Object-type2] \[ID2] - \[Object-type 3] \[ID3]

\[Object-type1] \[ID1] **Thru**

\[Object-type1] **Thru **\[ID1]

\[Object-type1] **Thru**

\[Object-type1] "Name"

\[Object-type1] "Nam\*"

 

**Important:**\
In a selection list, contrary to the object list, each object type is broken down to its corresponding fixture objects. These fixture objects form the selection list. 

 

- If an object type is missing, the object type that was entered last will be used. 
- If no object type is given altogether, the current object type default of the command line will be used. 
- If there is no ID before or after **Thru**,** **the first or last available ID will be used. 
- If there is no ID for an object type, the current, active or next ID will be used, depending on the function applied. 
- If the reference of an object type is nonexclusive, significant parent objects will be broken down by user defaults and currently selected or active objects. 

### Example:

\[Channel]> **Fixture** 3 **+ Channel** 6

Selects fixture 3 and channel 6.

 \[Channel]> **Cue Thru** 3 **- Channel** 4

 Selects fixtures in first 3 cues, but does not select channel 4. 

\[Channel]> **Group** 3 **+ Cue** 4

Selects fixtures in group 3 and fixtures in cue 4.

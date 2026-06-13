---
title: "Using groups when programming"
description: "When some groups have been created, then they can be used during programming."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_groups_using.html"
scrapedAt: "2026-06-12T21:28:12.538Z"
---
When some groups have been created, then they can be used during programming.

 

Groups are shortcuts to select fixtures.

There is no reference to the group stored anywhere. This means that if the group is changed after being used, then it will not affect the stored cues.

 

The work flow is to tap a group in the pool, give it some values, and then maybe storing the values.

 

## Using names or numbers

Groups can be accessed by their names or numbers.

If group number 7 is named **My Lights**, then it is possible to use the command line and write

Group 7 at 50 or g "My Lights" at 50 ("g" is the command shortcut for group).

If there are more groups called **My Lights** then all the groups with that name will get the value.

Capital letters are ignored. So **My Lights** and **my lights** are considered the same.

 

It is possible to use an asterisk as a joker. Let us imagine that there are three groups called **Wash 1**, **Wash 2** and **Wash 3**.

If all three groups needs to get 50%, then all is needed is to write g wash\* at 50.

 

In the last example we did not need the quotation marks. They are needed if the name have a space in it. But if an asterisk is used then quotation is not needed, even though the resulting groups actually have a space in their names.

The asterisk can also be used in front of the name. If there are several groups with the word **cold** in the name and all of them needs to go to 60, then write the following g \*cold\* at 60.

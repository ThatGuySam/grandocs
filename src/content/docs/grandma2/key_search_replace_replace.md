---
title: "Replace"
description: "The Replace mechanism is used to replace some objects with other objects (or values with other values), using the With keyword, and it might be limited to a def"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_search_replace_replace.html"
scrapedAt: "2026-06-12T21:28:17.054Z"
---
The **Replace** mechanism is used to replace some objects with other objects (or values with other values), using the [With keyword](/grandma2/key_keyword_with/), and it might be limited to a defined scope using the [If keyword](/grandma2/key_keyword_if/).

The syntax is:

**Replace \[**search for objects/values] **( With \[**replace with objects/values]  ( If ** \[**search in objects] ))

Details about the syntax can be read in the [Replace keyword](/grandma2/key_keyword_replace/) topic. The Replace command can be accessed by pressing the Move key twice.

 

The replace will search for the objects (could be fixtures, groups, presets, or any object) or values and the search result will be exchanged with similar objects or values. Just like the regular [search function](/grandma2/key_search_replace_search/), it might be limited to a certain area in the show (for instance a specific sequence, group, world, or any object).

All this might sound complex but it does not have to be.

 

## Replacing objects

If Fixture 1 needs to be replaced by Fixture 2 in the entire show then type the following:

\[Channel]> Replace Fixture 1 With Fixture 2

Doing the replace will open a confirmation pop-up like this:

![](/img/grandma2/popup_confirm-replace_v3-3-0315f1.png)

_Confirm Replace pop-up_

Tapping the Ok button will perform the replace action.

Tapping the Ok Create Report button will also perform the replace, but in addition it will create and open a report showing what the replace action did - it is similar to the search report described in the [Search topic](/grandma2/key_search_replace_search/).

Tapping the Cancel button will cancel the replace action - it is same result if the X in the upper left corner is tapped.

If the replace action is performed, then the result is that the values fixture number 1 had is now transferred to fixture number 2 and fixture number 1 is no longer used in the show.

If the replace is only supposed to happen in sequence number 3 then use the following command:

\[Channel]> Replace Fixture 1 With Fixture 2 If Sequence 3

 

If a fixture is replaced by nothing then the stored values are just removed.

The following two commands will remove any stored data from fixture 1:

\[Channel]> Replace Fixture 1

\[Channel]> Replace Fixture 1 With

The **With** keyword is optional when the object is not replaced with something else.

 

**Presets** can also be changed with replace. For example replacing position preset 2 with preset 4 in sequence 5 can be written like this:

\[Channel]> Replace Preset 2.1 With Preset 2.4 If Sequence 5

 

If the preset is only suppose to be replaced for fixture 8 in sequence 5 then it is a two step process:

1. First do a search for fixture 8 in sequence 5

   \[Channel]> Search Fixture 8 If Sequence 5
2. Then use the **SearchResult** (the virtual world created by a search action) as the limiting object in the replace:

   \[Channel]> Replace Preset 2.1 With Preset 2.4 If SearchResult

**Hint:**\
The SearchResult command can be accessed by pressing the ![ma](/img/grandma2/ma_1-290dfd.png) key while pressing the Group key twice. 

 

## Replacing values

Values can also be replaced by other values.

**Restriction:**\
Use the keyboard for the following example. If the command keys are used then the At key will interrupt the replace command.

A single value can be replaced by another:

\[Channel]> Replace At 50 With 55

This would change all the places where the dimmer value 50 are stored to a value of 55.

 

What is perhaps more interesting is changing value ranges with a different value range. For instance if all dimmer values should be raised 20% in sequence 4 (a dimmer value of 10 will become 12) then the following command can be used:

\[Channel]> Replace Value 0 Thru 100 With 0 Thru 120 If Sequence 4

Or if only fixture 1 and 2 are suppose to get a 20% (a dimmer value of 100 will become 80) lower value in sequence 4:

\[Channel]> Replace Fixture 1 + 2 Value 0 Thru 100 With 0 Thru 80 If Sequence 4

Remember that when using more complex limitations it might be a good idea to used the SearchResult from a limiting search as the limiting scope.

**Important:**\
If the attribute is not specified, it will be searched for the dimmer attribute.

 

Other attributes can also be replaced.

Making the stored **Pan** range smaller for a fixture range of 1 through 10, can be done like this:

\[Channel]> Replace Fixture 1 Thru 10 Attribute "Pan" At -270 Thru 270 With -200 Thru 200

Or it can be shifted +20 degrees:

\[Channel]> Replace Fixture 1 Thru 10 Attribute "Pan" At -270 Thru 270 With -250 Thru 290

**Important:**\
It is very important that there is no space between the minus symbol and the number.

 

The attributes are different depending on what fixture types are patched in the show. The list of attributes and their (screen)names can be seen using the [List keyword](/grandma2/key_keyword_list/):

\[Channel]> List Attribute

The names listed in the column called **LibraryName** needs to be used with the replace function - do not use the ScreenName.

 

## Replacing values with presets (objects)

As a rule it is only possible to replace values with values and objects with objects. So replacing a stored value with a preset is not possible as a direct action. But there is a way by first searching the value maybe limited to a specific object like a sequence.

In this example the stored dimmer value of 50 is to be replaced by a dimmer preset. First the value is searched in sequence number 8:

\[Channel]> Search Value 50 If Sequence 8

Then the result is used to limit where the replace is performed and the dimmer attribute (object) is replaced with the preset:

\[Channel]> Replace Attribute "Dim" With Preset 1.5 If SearchResult

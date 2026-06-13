---
title: "Search"
description: "Search can be used to find almost anything in a show file."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_search_replace_search.html"
scrapedAt: "2026-06-12T21:28:17.008Z"
---
Search can be used to find almost anything in a show file.

The general idea behind search is that an object is searched - maybe with a limited scope - the result is displayed and the result can be used as a basis for further action.

The result can be viewed in a report that can be used as a world or saved in text file. The result is stored in a (hidden) world called SearchResult. This can be used to limit the search even more.

The syntax is:

**Search \[**search for objects] ( **At** \[search values] ) **If \[**search in objects]

The [Search keyword](/grandma2/key_keyword_search/) has a description of how it is used and some nice examples. The Search command can be reached by pressing and holding the ![ma](/img/grandma2/ma_1-290dfd.png) key while pressing the Move key.

 

## Searching for values

Searching where values are used is very easy.

For instance a search for the dimmer value of 100 can be done like this:

\[Channel]> Search Value 100

The result will be a listing of all the locations the dimmer value 100 is used (including the programmer).

**Hint:**\
If the attribute is not specified, it will be searched for the dimmer attribute.

The result of the search appears in a **Search pop-up** like this:

![](/img/grandma2/popup_search-value_v3-3-3e45eb.png)

_Search pop-up - value 100_

In the image above the search resulted in 7 results.

The title bar of the **Search** pop-up has some special buttons - besides the two standard **move the pop-up** and **close the pop-up** buttons. The following is a short description of the special buttons:

- **Selfix Search Result**:\
  This will take any fixtures represented in the search result as a selection.
- **World Search Result**:\
  This will create a hidden world with the fixtures and attributes in the search result. This world can also be accessed using the [SearchResult command.](/grandma2/key_keyword_searchresult/)
- **Save**:\
  Tapping this button will open the browser pop-up that allows you to select a location to save a text file (txt) with the result.
- **Load**:\
  This function is not implemented.
- **Ok**:\
  Tapping this button is the same as closing the pop-up.

 

A search can be limited to only search in a specific range of objects.

For instance searching for a Zoom value of 40 in the All Presets (preset pool number 0):

\[Channel]> Search Attribute "Zoom" At 40 If Preset 0."\*"

 

## Searching for objects

**Important:**\
Searching for presets or effects is an OBJECT Search - not a value search!

Nearly any kind of object can be searched.

Use the following command to see where dimmer preset number 2 is used:

\[Channel]> Search Preset 1.2

 

It is also possible to limit the search inside a different object.

For instance searching for the preset only in sequence number 6:

\[Channel]> Search Preset 1.2 If Sequence 6

 

Fixtures can be searched. For instance searching fixture 1 through 10:

\[Channel]> Search Fixture 1 Thru 10

This search could give the following result:

![](/img/grandma2/popup_search-fixture_v3-3-da1037.png)

_Search pop-up - fixture 1 through 10_

Here we can see where the ten objects (the fixtures) are used.

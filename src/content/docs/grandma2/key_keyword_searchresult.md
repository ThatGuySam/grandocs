---
title: "SearchResult"
description: "To get the SearchResult keyword in the command line, press and hold !ma + Group Group (= SearchResult)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_searchresult.html"
scrapedAt: "2026-06-12T21:28:00.550Z"
---
To get the SearchResult keyword in the command line, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) + Group Group (= SearchResult).

You can also type **SearchResult** or the shortcut **SR** in the command line.

## Description

The SearchResult keyword opens the world search result after an executed search command. The search result world includes only the fixtures or channels from the last search command.

![](/img/grandma2/window_fixture-sheet-search-result_v3-2-4b7ca7.png)

_Fixture Sheet World Search Result_

To close the SearchResult world, select another world in the world pool.

To select all fixtures from the last search command, use the SelFix SearchResult.

**Hint:**\
You can also use the Selfix Search Result button and/or the World Search Result button in the title bar of the search result pop-up.

The SearchResult keyword is a function keyword.

## Syntax

SearchResult

SelFix SearchResult

Search \[object-list] If SearchResult

## Examples

- Opens the search result world with the fixtures from the last search command.

\[Channel]> SearchResult

 

- Select only the fixtures from the last search result.

\[Channel]> SelFix SearchResult

 

- Search in the last search result for fixtures with the attribute green at 20.

\[Channel]> Search Fixture Thru Attribute "G" At 20 If SearchResult

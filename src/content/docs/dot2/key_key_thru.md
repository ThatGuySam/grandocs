---
title: "Thru"
description: "The Thru key can be used to define a range. This can be a range in selection or in values."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_thru.html"
scrapedAt: "2026-06-12T21:29:40.872Z"
---
The Thru key can be used to define a range. This can be a range in selection or in values.

## Selection range

You can use Thru to select a range of fixtures, groups or a lot of other things.

If you want to select fixtures 1 + 2 + 3 + 4 + 5, then you can use the following:

Fixture 1 Thru 5 Please

If 1 is the first fixture then you don't need to type number 1:

Fixture Thru 5 Please

That selects all fixtures with ID number up to 5.

If fixture 5 is the fixture with the highest ID, then we can do it shorter:

Fixture Thru Please

This will select all fixture from the one with the lowest number and all the way to the one with the highest number.

If you don't define anything else then the console will use fixture:

Thru Please

This selects all fixtures in your show.

 

Instead of Fixture you can use a lot of other things. It could be Groups, Presets, Macros etc. 

## Value range

When you have a selection of fixtures, then you can give them values in a range.

At 1 0 Thru 1 0 0 Please

This command will spread the values from 10% to 100% over your selected fixtures.

You can also use more than two values in your spread.

At 1 0 Thru 1 0 0 Thru 1 0 Please

This will spread the values from 10% and then half of your selection will get the values up to 100% and the second half will then spread back down to 10%.

## Related link

[Thru Command](/dot2/key_keyword_thru/)

---
title: "At"
description: "The At key is used to apply a value or to indicate a location."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_at.html"
scrapedAt: "2026-06-12T21:29:37.576Z"
---
The At key is used to apply a value or to indicate a location.

## Apply values

When used to apply value you could use it like this:

At 7 5 Please

This would set the dimmer value to 75% on your current selection.

 

You can press it twice to give your selected fixtures 100%.

At At will immediately set the dimmer of your select fixtures to 100% 

 

You can apply a set of values to a fixture from the current values of a different fixture.

E.g. giving fixture number 2 the same values as fixture number 1:

Fixture 2 At Fixture 1 Please

## As an indication of location

You can also use the At key as a location indicator.

It can be used to copy or move information from one location to another.

E.g. copying group 1 to group 2:

 Copy Group 1 At Group 2

Instead using the hard keys you can also do most of these examples by pressing the screens.

A location can also be the position of a fader.

E.g. moving fader number 1 to 100 in 2 seconds

Exec 1 At 1 0 0 Time 2 Please

The actual executed command is different then the keys you pressed it actually says:

Executor 1 at 100 Fade 2

 Be aware that your physical fader doesn't move!

## Related link

[At command](/dot2/key_keyword_at/).

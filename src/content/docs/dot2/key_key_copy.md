---
title: "Copy"
description: "The Copy key is used to copy something from one location to another (valid) location."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_copy.html"
scrapedAt: "2026-06-12T21:29:37.863Z"
---
The Copy key is used to copy something from one location to another (valid) location.

E.g. you want to copy group 1 to group 2

Copy Group 1 At 2 Please

If you want to make a copy of cue number 2 to a (new) cue 9 in the main cue list, you can use the following keys:

Copy Cue 2 At 9 Please this will give you a selection box on screen 1 where you need to choose Copy.

If you need to copy cue number 2 from the main cue list to a different executor, then you need to specify the executor. The same example but coping to executor number 4:

Copy Cue 2 At 9 Exec 4 Please, same selection box where you select Copy.

You can also use ranges.

Copy Cue 2 Thru 4 At Cue 9 Please will create cue 9, 10 and 11 (if you had cue 2, 3 and 4). Cue 9 will be the same as 2, 10 is like 3 and 11 is like 4.

If you copy from one source to a destination _range_, then you create several similar cues.

E.g. copying cue 2 to cue 15, 16 and 17 will create three copies of cue 2 located at cue 15, 16 and 17. This is the key strokes:

Copy Cue 2 at 1 5 Thru 1 7 Please again you'll need to select copy in the selection box.

 

If you try to copy information to an already existing location you have two options: Overwrite or Merge.

Overwrite will delete the current value. Merge will add new values and overwrite existing values. 

## Advanced Functionality

If you press and hold the ![ma](/img/dot2/ma-36da5c.png) key and then press the Copy key, then you'll get the [Clone command](/dot2/key_keyword_clone/).

This is used to make a fixture do exactly what another fixture is doing. If fixture number 1 is used in some groups, presets and cue list, then it can be a hassle if you need fixture number 5 to do the exact same tings. You would have to manually check where fixture 1 is used and then re program fixture 5 to do the same. Clone can help you with this.

When you clone something you are often presented with some options on screen 1.

- 'Cancel' is used to cancel the clone operation.
- 'Low Prio Merge' is the default option. It means Low priority merge. It will only clone the values from fixture 1 when there's a values and where fixture 5 doesn't have any values already - it doesn't destroy any already existing programming for fixture 5.
- 'Merge' will clone all the values from fixture 1 into fixture 5. If Fixture 5 had something programmed where fixture 1 also had something, than the values will be the same as fixture 1. If Fixture 5 have something programmed that fixture 1 doesn't , then these values will stay.
- 'Overwrite' will delete all existing values for fixture 5 and clone the values from fixture 1.

Here's some examples:

In your entire show you need fixture 5 to be a copy of fixture 1 and what fixture 5 had isn't needed anymore:

![ma](/img/dot2/ma-36da5c.png)+Copy (gives you the Clone command) Fixture 1 At 5 Please now select Overwrite on screen 1 

In executor 3 you need fixture 5 to be a copy of fixture 1 and what fixture 5 had isn't needed anymore:

![ma](/img/dot2/ma-36da5c.png)+Copy (gives you the Clone command) Fixture 1 At 5 If Exec 3 Please now select Overwrite on screen 1 

In executor 3 you need the fixtures in group 2 to be a copy of fixture 1 and since we are not completely sure if the fixture in group 2 is used already, then we should do a Low Prio Merge :

![ma](/img/dot2/ma-36da5c.png)+Copy (gives you the Clone command) Fixture 1 At Group 2 If Exec 3 Please now select Low Prio Merge on screen 1 

There's a very big range of possibilities when cloning. Please also have a look at the [Clone command](/dot2/key_keyword_clone/) description. 

## Related link

[Copy command](/dot2/key_keyword_copy/)

[Clone command](/dot2/key_keyword_clone/)

---
title: "Tracking"
description: "The dot2 is a tracking console."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_wi_tracking.html"
scrapedAt: "2026-06-12T21:29:35.976Z"
---
The dot2 is a tracking console. 

Now, you shouldn't really need to worry about that, but it's nice to know some details.

 

Here's how it works.

In its most basic form, you could say that tracking is when fixtures do something if they are explicitly told to. For example, changing a value. If you set a fixture to 50% in cue number one, then it stays at 50% through all your other cues - as long as you don't tell it to do something in the other cues.

Have a look at this table:

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          | **50**        |
| 2          | 50            |
| 3          | 50            |
| 4          | 50            |
| 5          | 50            |
| 6          | 50            |

Here we can see that fixture 1 is only stored in cue 1 (marked with **bold**, tracked values are displayed in normal font). But if you run cue 2, fixture number 1 is still at 50% - it is tracked.

 

If we store and merge 60% for fixture 1 in cue 3, it would look like this:

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          | **50**        |
| 2          | 50            |
| 3          | **60**        |
| 4          | 60            |
| 5          | 60            |
| 6          | 60            |

So we changed the value for the fixture in cue 3 and now it’s tracking that value from cue 3.

 

A different option when we store is Cue Only. If we use that option and store fixture 1 at 40% in cue 5 you’ll see that we didn’t make a change in cue 6, meaning it still looks the same as it did before we stored cue 5.

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          | **50**        |
| 2          | 50            |
| 3          | **60**        |
| 4          | 60            |
| 5          | **40**        |
| 6          | **60**        |

 

If you add a fixture that hadn't previously been used, then the dot2 can automatically create a hidden cue number zero and put the default value (the value a fixture has if it isn't told anything) in that cue. Cue Zero can be activated in the [Settings view](/dot2/key_window_settingsofexecutor/) for a cue list.

You can't access this cue, but it makes sure that cues look correct if you copy them.

Have a look at this example:

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          | 0             |
| 2          | **50**        |
| 3          | 50            |
| 4          | 50            |
| 5          | 50            |
| 6          | 50            |

Here we have fixture 1 that has a stored value in cue number 2. This value tracks from this cue and to cue 6. If you copy cue number 1 to a new cue 3.5 using cue only, then you’ll see that the fixture has 0% in the new cue and goes back to 50% in cue 4 - so cue number 4 has never changed.

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          | 0             |
| 2          | **50**        |
| 3          | 50            |
| 3.5        | **0**         |
| 4          | **50**        |
| 5          | 50            |
| 6          | 50            |

If we don't use Cue Zero, then it looks different. Before copy:

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          |               |
| 2          | **50**        |
| 3          | 50            |
| 4          | 50            |
| 5          | 50            |
| 6          | 50            |

When we copy cue 1 at cue 3.5 then we copy an empty cue, so we don't copy anything. This is the result.

| Cue number | Fixture 1 Dim |
| ---------- | ------------- |
| 1          |               |
| 2          | **50**        |
| 3          | 50            |
| 3.5        | 50            |
| 4          | 50            |
| 5          | 50            |
| 6          | 50            |

When the copied cue is empty, then the tracked values will just track through it - they are not told anything else.

Cue Zero is turned off as a default but can be changed for each executor.

 

## Tracking Shield

The dot2 also uses something called Tracking Shield. It's a system that automatically protects cues from unwanted changes to all attributes except dimmers.

 

Let's have a look at some examples.

Have a look at this table:

| Cue number | Fixture 1 Dim | Fixture 1 Position |
| ---------- | ------------- | ------------------ |
| 1          | **100**       | **Singer**         |
| 2          | **0**         | Singer             |
| 3          | 0             | Singer             |
| 4          | 0             | Singer             |
| 5          | 0             | Singer             |
| 6          | **100**       | Singer             |

We have stored fixture 1 at 100% and on the **Singer** position in cue number 1. In cue 2 it’s turned off.

Down in cue 6, it’s turned back on and it’s still used in the singer position - but it’s a tracked value (it's not actually stored in cue 2 through 6).

 

Now we would like to use the same fixture in cue 3 at the drummer position.

So we turn it to 100% and select the **Drummer** position. This is stored in cue 3.

So this is our current scenario:

| Cue number | Fixture 1 Dim | Fixture 1 Position |
| ---------- | ------------- | ------------------ |
| 1          | **100**       | **Singer**         |
| 2          | **0**         | Singer             |
| 3          | **100**       | **Drummer**        |
| 4          | 100           | Drummer            |
| 5          | 100           | Drummer            |
| 6          | 100           | **Singer**         |

So the new drummer position is stored in cue 3 and tracked until cue 6 where the console knew that we needed the Singer position.

Also notice that it has not protected the dimmer value in cue 6 - it's now a tracked value from cue 3.

So now we need to store the dimmer at 0% in cue 4 and cue 5. If we just do this with a normal store, then it'll track into cue 6 and turn off the dimmer.

Take the dimmer to 0% and store (merge) cue 4 and 5 as Cue Only.

This is the final result:

| Cue number | Fixture 1 Dim | Fixture 1 Position |
| ---------- | ------------- | ------------------ |
| 1          | **100**       | **Singer**         |
| 2          | **0**         | Singer             |
| 3          | **100**       | **Drummer**        |
| 4          | **0**         | Drummer            |
| 5          | 0             | Drummer            |
| 6          | **100**       | **Singer**         |

This is the principle behind Tracking Shield:

The system looks for dimmer values that change from 0 to above 0 for every single fixture. If there's a change in the dimmer (from 0 to a value above), then it stores the tracked values before creating the new values in the previous cues, thus preventing the cue output from changing because of the tracking.

The dimmer value in cue 5 is a tracked value, even though we store both 4 and 5 as Cue Only because of a function called AutoUnblock. It's the same mechanism that made the dimmer in cue 6 a tracked value after we stored cue 3. AutoUnblock will automatically remove unnecessary stored values after each store operation.

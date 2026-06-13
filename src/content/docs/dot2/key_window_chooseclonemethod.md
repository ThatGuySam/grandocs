---
title: "Choose Clone Method"
description: "If you try to clone a fixture, the console ask to choose the clone method."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_chooseclonemethod.html"
scrapedAt: "2026-06-12T21:29:42.360Z"
---
If you try to clone a fixture, the console ask to choose the clone method.

![](/img/dot2/dot2_viewsandwindows_chooseclonemethod01_1-0-0ae822.png)

_Figure 1: Choose clone method window_

There are four options available.

**Cancel:**\
Tap to cancel the clone command.

**Low Prio Merge:**\
Tap to add the values from the source fixture to the destination fixture.\
If the destination fixture has previous defined values, they will stay.\
If the destination fixture has no previous defined values, the fixture will get the values from the source fixture.

**Merge:**\
Tap to add values from the source fixture on the top of the destination fixture.

**Overwrite:**\
Tap to overwrite the existing values from the destination fixture with the values from the source fixture.\
Previous defined values will be deleted.

## Example Low Prio Merge

Fixture 1 stored on executor 2 - cue 1, has a defined color red and a gobo.\
Fixture 2 stored on executor 3 - cue 1, has a defined position pan and tilt.

![](/img/dot2/dot2_viewsandwindows_chooseclonemethod02_1-2-49889d.png)

_Figure 2: Fixture 1 and 2 before clone_

Let´s assume, you will clone fixture 1 at 2 and you will keep the defined position of fixture 2.

1\. Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 1 At 2 Please.

The console will ask you to choose the clone method.

2\. Tap Low Prio Merge.

![](/img/dot2/dot2_viewsandwindows_chooseclonemethod03_1-2-50727e.png)

_Figure 3: Fixture 1 and 2 after low prio merge clone_

Fixture 2 has now the same values as fixture 1 and the previous defined values (position).

## Example Merge

| Cue | Fixture 1                   | Fixture 2                   |
| --- | --------------------------- | --------------------------- |
| 1   | Dimmer open (entered value) |                             |
| 2   | Dimmer open (entered value) | Dimmer 50 % (entered value) |
| 3   | Dimmer open (tracked value) | Dimmer 50 % (entered value) |

Let´s assume, you will clone fixture 1 at fixture 2 and add only the previous defined values and not the tracked values.

1\. Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 1 At 2 Please.

The console will ask you to choose the clone method.

2\. Tap Merge.

| Cue | Fixture 1 (before merge)    | Fixture 2 (before merge)    | Fixture 2 (after merge)                                                                          |
| --- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------ |
| 1   | Dimmer open (entered value) |                             | Dimmer open                                                                                      |
| 2   | Dimmer open (entered value) | Dimmer 50 % (entered value) | Dimmer open (because this was an entered value from fixture 1)                                   |
| 3   | Dimmer open (tracked value) | Dimmer 50 % (entered value) | Dimmer 50 % (because this is a tracked value and clone method merge will not add tracked values) |

## Example Overwrite

Fixture 1 stored on executor 2 - cue 1, has a defined color red and a gobo.\
Fixture 2 stored on executor 3 - cue 1, has a defined position pan and tilt.

![](/img/dot2/dot2_viewsandwindows_chooseclonemethod02_1-2-49889d.png)

_Figure 4: Fixture 1 and 2 before clone_

Let´s assume, you will clone fixture 1 at 2 and fixture 2 should make exactly the same like fixture 1.

1\. Press ![ma](/img/dot2/ma-36da5c.png) + Copy (= Clone) Fixture 1 At 2 Please.

The console will ask you to choose the clone method.

2\. Tap Overwrite.

![](/img/dot2/dot2_viewsandwindows_chooseclonemethod05_1-2-0e0ee5.png)

_Figure 5: Fixture 1 and 2 after clone_

Fixture 2 has now the exactly the same values as fixture 1. All previous defined values are deleted.

Fixture 1 and 2 are on executor 2. Fixture 2 does not exist anymore on executor 3.

## Related Links

- [Clone Command](/dot2/key_keyword_clone/)
- [Copy Key](/dot2/key_key_copy/)

---
title: "Choose Store Method"
description: "If you want to store new programmer values on an executor with one existing cue on it or if you want to overwrite an existing cue on an executor, the console as"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_choosestoremethod.html"
scrapedAt: "2026-06-12T21:29:42.640Z"
---
If you want to store new programmer values on an executor with one existing cue on it or if you want to overwrite an existing cue on an executor, the console ask to choose the store method.

There are two store methods windows available.

The store method window with the options

- Merge
- Remove
- Overwrite
- Create Second Cue

appears if you store on an executor the first time a second cue (= cue list).

![](/img/dot2/dot2_viewsandwindows_choosestoremethod01_1-0-647393.png)

_Figure 1: Choose store method window - first second cue_

There are four store methods available:

**Hint:**\
Use the Prev, Next, Up, and Down keys to navigate in this window and confirm with Please.

**Merge:**\
Tap to add the programmer values to the existing cue.

**Remove:**\
Tap to remove the programmer values from the existing cue.

**Overwrite:**\
Tap to overwrite the existing cue with the programmer values. The previous values from the existing cue are deleted.

**Create second cue:**\
Tap to create a cue 2 with the programmer values. This will create a cue list.

If you store new programmer values in an existing cue, the store method window has additional the options

- Normal
- Cue Only

![](/img/dot2/dot2_viewsandwindows_choosestoremethod07_1-0-d8b635.png)

_Figure 2: Choose store method window - store in an existing cue_

Additional to the methods Merge, Remove, and Overwrite, you can select the Store Mode.

**Store Mode Normal:**\
Tap to store the cue with tracking shield. Refer to, [What is Tracking?](/dot2/key_wi_tracking/)

**Store Mode Cue Only:**\
Tap if to store the cue between two other cues. The stored cue will not affect the following cues with tracking values.

---

## Normal

Let´s assume, you will store cue 2.1 between cue 2 and cue 3 with tracking shield.

| Cue | Fixture 1 (initial situation) | Fixture 2 (initial situation) | Fixture 1 (normal)     | Fixture 2 (normal) |
| --- | ----------------------------- | ----------------------------- | ---------------------- | ------------------ |
| 1   | Dimmer At 50                  | Dimmer At 50                  | Dimmer At 50           | Dimmer At 50       |
| 2   | Dimmer At 0                   | Dimmer At 100                 | Dimmer At 0            | Dimmer At 100      |
| 2.1 |                               |                               | Dimmer At 33           | Dimmer At 33       |
| 3   | Dimmer At 0 (tracked)         | Dimmer At 80                  | Dimmer At 33 (tracked) | Dimmer At 80       |

1. Press Store Cue 2 . 1 and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).

2. Tap Ok. Normal is selected by default.

Cue 2.1 is stored between cue 2 and cue 3. Cue 3 is tracking the dimmer value from fixture 1.

---

## Cue Only

Let´s assume, you will store cue 2.1 between cue 2 and 3 without affect the following cues with tracking values.

| Cue | Fixture 1 (initial situation) | Fixture 2 (initial situation) | Fixture 1 (cue only) | Fixture 2 (cue only) |
| --- | ----------------------------- | ----------------------------- | -------------------- | -------------------- |
| 1   | Dimmer At 50                  | Dimmer At 50                  | Dimmer At 50         | Dimmer At 50         |
| 2   | Dimmer At 0                   | Dimmer At 100                 | Dimmer At 0          | Dimmer At 100        |
| 2.1 |                               |                               | Dimmer At 33         | Dimmer At 33         |
| 3   | Dimmer At 0 (tracked)         | Dimmer At 80                  | Dimmer At 0          | Dimmer At 80         |

1. Press Store Cue 2 . 1 and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).

2. Tap Cue Only and then Ok.

Cue 2.1 is stored between cue 2 and cue 3. Cue 3 has no tracking values from cue 2.1.

---

## Merge

Let´s assume, you will add the current programmer values to the existing cue 1 on the main executor.

![](/img/dot2/dot2_viewsandwindows_choosestoremethod03_1-2-b83871.png)

_Figure 3: Values of cue 1 before store merge_

1. Press Store and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).
2. Tap Merge.

![](/img/dot2/dot2_viewsandwindows_choosestoremethod04_1-2-fc3708.png)

_Figure 4: Values of cue 1 after store merge_

The current programmer values are added to the existing cue 1.

---

## Remove

Let´s assume, you will remove fixture ID 2 from the existing cue 1 on the main executor.

![](/img/dot2/dot2_viewsandwindows_choosestoremethod04_1-2-fc3708.png)

_Figure 5: Values of cue 1 before store remove_

1. Select fixture ID 2 in the [fixtures view](/dot2/key_viewitem_fixture/).
2. Double press Please. All values from fixture 2 are in the programmer.
3. Press Store Cue 1 and tap on the main executor in the [executor bar view](/dot2/key_widget_executorlabelbar/).
4. Tap Remove.

![](/img/dot2/dot2_viewsandwindows_choosestoremethod05_1-2-fbf444.png)

_Figure 6: Values of cue 1 after store remove_

The fixture ID 2 is removed from the existing cue 1 on the main executor.

---

## Overwrite

Let´s assume, you will overwrite the cue 1 on the main executor with the current programmer values.

1. Press Store and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).
2. Tap Overwrite.

Cue 1 on the main executor has now the current programmer values. All previous values from the existing cue are deleted.

---

## Create Second Cue

Let´s assume, you will create a cue list on the main executor.

  ![](/img/dot2/dot2_viewsandwindows_choosestoremethod06_1-1-9ebcab.png)\
_Figure 7: Cue list on main executor_

1. Press Store and tap on the main executor in the [executor bar view](/dot2/key_window_playback/).
2. Tap Create second cue.

The current programmer values are stored as a second cue on the main executor.

---

## Encoder Bar Functions

![](/img/dot2/dot2_viewsandwindows_choosestoremethod02_1-0-289029.png)

_Figure 8: Encoder bar functions - choose store method_

**Select:**\
To select a function, turn the encoder left or right.\
To confirm a selected function, press or tap the encoder.

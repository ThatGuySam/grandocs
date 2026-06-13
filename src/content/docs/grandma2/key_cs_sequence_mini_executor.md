---
title: "Sequence mini executor"
description: "When a sequence is assigned to an executor, the mini executor view is displaying relevant information."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_sequence_mini_executor.html"
scrapedAt: "2026-06-12T21:28:14.828Z"
---
When a sequence is assigned to an executor, the mini executor view is displaying relevant information.

It could look like this:

![](/img/grandma2/img_mini-executor_sequence_v3_3-3257a8.png)

_Mini Executor - Sequences_

The image above shows three fader executors with assigned sequences and one button executor with an assigned sequence.

The yellow colored frame identifies that the executor has a sequence assigned.  

The mini executor is divided into three section: a top part, a middle part, and a lower part.

## Top Part

There are two lines of information in the top part.

The top line has a number on the left side. This number is the **executor** number. If this number has a different background color, then there is a [Playback filter](/grandma2/key_wfm_apply_to_exec_seq/) applied.

Next to this there might be different letters or symbols. This is list of the different possibilities:

- **! (exclamation mark):**\
  This symbol means that the executor is currently assigned the "Super" priority.
- **S:**\
  This symbol means that the executor is currently assigned the "SWP" priority.
- **H:**\
  This symbol means that the executor is currently assigned the "HTP" priority.
- **Triangle pointing up:**\
  This symbol means that the executor is currently assigned the "High LTP" priority.
- **L:**\
  This symbol means that the executor is currently assigned the "LTP" priority.
- **Triangle pointing down:**\
  This symbol means that the executor is currently assigned the "Low LTP" priority.
- **T:**\
  The "T" is there if the sequence is set as a tracking sequence. Read about tracking in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/).

The different priorities are described in the [Playing back Cues topic](/grandma2/key_cs_playback/).

On the right side there is another number. This is the **sequence** number. If this number has a different background color, then there is a [Input filter](/grandma2/key_wfm_apply_to_exec_seq/) applied.

The second line in the top part is the name of the sequence.

The background color have different meanings:

- **Black**:\
  This is the normal background color.
- **Green**:\
  The executor is selected.
- **Orange**:\
  The executor is fixed.
- **Red**:\
  The Assign Menu is open for this executor.
- **Dark Red**:\
  The temporary Edit Sequence pop-up is open.

 

## Middle Part

The middle part usually displays one or three cues. If a sequence only has one cue, then only one is displayed. If there are multiple cues in the sequence then three lines with cues are displayed.

The top cue is the previous active cue or the cue that will be active should a GoBack action be performed. The middle cue is the currently active cue - if there are no active cue, then this line will be empty. The bottom cue will be the next active cue if a Go (forward) action is applied.

If a cue is active, it will have a blue background. If the cue is fading in, then the blue background is visualized as a blue bar moving from the left to the right.

Pressing or clicking in this area will open a temporary [Sequence Executor window](/grandma2/key_cs_cue_sequence/).

 

The middle part can look very different if it is "located" using the [Locate command](/grandma2/key_keyword_locate/). It will look like this:

![](/img/grandma2/img_located-executor_v3_2-dfa772.png)

_Located sequence_

 

## Lower Part

The lower part labels and simulates physical keys and fader.

This is the part that is different depending on the sequence being assigned to a fader executor or button executor.

The left side show two different things depending on the executor being a button executor or a fader executor.

If it is a button executor then it shows the intensity master for the sequence.

If the executor is a fader executor then the left area lapels what kind of master it is, and possibly the priority. It will also try to display the current value of the fader.

This area might be split into two parts. It could look like this:

![](/img/grandma2/img_mini-executor_sequence_playback-master_v3_3-a0a57c.png)

_Mini Executor - Sequences - With Playback Master_

This happens if the executor have a Playback Master assigned - Read about Playback Masters in the [Playback Masters topic](/grandma2/key_adv_exec_spec_master_playback/). 

 

The right side have three squares or one, depending on the amount of physical buttons. These graphical representations of the real physical key labels the function of the keys. In grandMA2 onPC they can be clicked or pressed just like the real physical keys.

 

## Wide Executors

The executors might span up to five executors wide. The top and middle part stay the same - just wider. The bottom part will show the amount of faders and keys that are now relevant for the sequence. It could look like this:

![](/img/grandma2/img_mini-executor_sequence_two-wide_v3-3-00f1b0.png)

_Two wide executor_

Read about making wider executors in the [Assign a Function topic](/grandma2/key_exec_assign/).

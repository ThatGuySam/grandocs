---
title: "Store cues"
description: "Storing cues is actually quite simple."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_store.html"
scrapedAt: "2026-06-12T21:28:14.111Z"
---
Storing cues is actually quite simple.

Simply press the Store key and then one of the executor buttons where you want to store.

There are of course more details to storing, so please keep reading.

 

## Store a new cue on an empty Executor

If you store a cue on an empty executor then the grandMA2 software automatically stores the cue in a new sequence and assigns this sequence to the executor using the default settings.

Going back to the example in the top of this topic: just pressing the Store key and then an executor button on the empty executor is enough. The software assumes that you are storing a cue.

This will automatically be cue number 1 - nothing else was specified.

 

Storing cues obeys Worlds and Filters. This enables a control of what is stored. Filters and Worlds can also be assigned to the sequence. This will function as an input filter allowing only the elements in the worlds and filters to be stored in the sequence.

Read more about then in the [World, Filters, and Mask section](/grandma2/key_wfm_world_filter_mask/).

 

## Cue numbers

When a cue is stored, it is possible to specify a cue number. This is done using the following syntax: Store Cue \[cue number]. It is also possible to specify a sequence or an executor, using the keys in the command section, while storing:\
Store Cue \[cue number] Sequence \[sequence number] or\
Store Cue \[cue number] Executor \[executor number].

Notice that the cues are stored in the sequence, but using the executor number will store the cue into the sequence assigned to that executor.

 

Cue numbers have three decimal numbers. If all are zero then they are not displayed. But cue number "42" is the same as cue number "42.000" - it is not "42 thousand", it is "42 point 0 0 0".  The currently highest cue number that can be stored is "9 999.999". The lowest number that can be stored is "0.001".

**Restriction:**\
Storing nearly 10 000 000 cues will completely fill the memory and make the show file VERY big.\
The software will cancel the store process before the system crashes, but almost any operation after this will make the software shutdown!!

 

The software hide the trailing decimal zeros, but they are still there. This means that cue "5.2" is after cue "5.11" because they are actually cue "5.200" and "5.110".

 

It is not limited to only store a single cue number at a time. It can just as easily be a range of numbers - this means that it is possible to use Thru, +, and - keys to create number ranges to be stored.

 

If you are going to be working with or adding a lot of cues to the same sequence, then it can be a good idea to select the executor with the sequence.

This can be done by pressing the Select key and then one of the keys associated with the executor.

 

## Store the second cue

If the store function is used again on the same executor - without adding cue number details - then the grandMA2 does not know what is wanted and a pop-up appears giving the different choices.

![](/img/grandma2/popup_choose-store-method_second-cue_v3-3-6225ae.png)

_Choose store method pop-up with second cue option_

The right most button is called Create Second Cue - tapping this will store a cue with the next whole number.

Over write and the two merge options are explained below. Remove and Release are covered in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/).

 

## Store into cues that are not empty

If the store operation is used to store into already existing cues then a pop-up like this appears:

![](/img/grandma2/popup_choose-store-method_v3-3-265bd1.png)

_Choose store method pop-up_

It only appears if you have not specified what should happen. Have a look at the [Store Options and Defaults topic](/grandma2/key_cs_store_options_default/) for information about specifying this while storing.

"Cue Only", "Tracking Shield", "Remove", and "Release" are described in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/).

The three relevant options are:

- **Overwrite:**\
  This will remove what is already stored in the cue and only store the new values.
- **Merge:**\
  This will merge the new values into the existing values. New values has a higher priority and will overwrite existing values.
- **Status Merge:**\
  This will do a merge of the new values, but will also store any values from the actual cues in the selected executor.

### Examples

In the following examples we have a cue list with the following two cues (looking at the Sequence Tracking Sheet - read about it [here](/grandma2/key_cs_cue_content/#tracking_sheet)):

![](/img/grandma2/window_sequence-tracking-sheet_two-cues-before-merge_v3-3-3eb0f1.png)

_Cues before any store action_

Now we turn on fixture 3 at 100 % and store this into cue 2.

This is the result if "Overwrite" is chosen:

![](/img/grandma2/window_sequence-tracking-sheet_two-cues-after-overwrite_v3-3-063b1f.png)

_Cues after an Overwrite store action_

Now fixture 2 is gone. This is because it only had values stored in cue number 2.

If we had chosen "Merge" instead it would have looked like this:

![](/img/grandma2/window_sequence-tracking-sheet_two-cues-after-merge_v3-3-c70a7b.png)

_Cues after a Merge store action_

Now the values from fixture 3 are added to the existing values.

"Status Merge" had resulted in this if cue 1 or 2 is active and the executor is selected:

![](/img/grandma2/window_sequence-tracking-sheet_two-cues-after-status-merge_v3-3-75d790.png)

_Cues after a Status Merge store action_

The (tracked) value from fixture 1 is stored into cue 2.

 

## Store cues with timings

When storing a cue it is possible to also store the different cue timings. This is described in detail the [Cue Timings topic](/grandma2/key_cs_cue_timings/), but here is the short version.

The Fade key will add different timing keywords to the command when storing.

For instance storing cue 4 with a fade time of 6 seconds and a delay of 1 second, the following keys can be pressed:

Store Cue 4 Time 6 Time Time 1 Please

This is the result in the command line feedback:

\[time] : Executing : Store Cue 4 Fade 6 Delay 1

Pressing the Fade repeatedly will change what timing it adds.

 

## Adding and using Cue Labels

A cue can be given a name - called label - while it is stored. This is the syntax: Store Cue \[cue number] "my cue name".

The keyboard is needed for writing this. You need to write the quotation marks to tell the software that this is text - then it is not interpreted as a command.

Labels can also automatically be numerated while storing. Have a look at this command:

\[Channel]> store cue 2 + 4 "BO Scene 1"

This will not label both cue 2 and 4 the same - it will add 1 to the number for each cue. The result is that cue 2 is called "BO Scene 1" and cue 4 is "BO Scene 2". This enumeration only works if the number is the last part of the label and if there is a space between the last word and number.

 

Cue labels can be used when storing. This means that if there are several cues whose labels starts with "BO", then it is possible to store into all these cues in one operation using BO plus an asterisk. See the following example.

### Example

This is the cue sequence and content before storing

![](/img/grandma2/window_sequence-tracking-sheet_five-cues-before-storing_v3-3-aa93c7.png)

_Cues before storing_

With an active value of 100% for fixture 1, we use the keyboard to type the following command:

\[Channel]> store cue "BO\*" /merge /cueonly

This is the result:

![](/img/grandma2/window_sequence-tracking-sheet_five-cues-after-storing_v3-3-127abc.png)

_Cue after storing using names_

The two cues whose label begins with BO now got the new value - it was stored as Cue Only.

See more details about the command at the end of this topic.

 

## Store cue parts

Besides the almost 10 million cues that could be stored in each sequence, if there was enough memory, it is also possible to store 199 cue parts to each cue.

Cue parts are a division of the "main" cue. The "main" cue is actually part 0 (zero). The first part that can be stored is number 1.

A value can only be in one of the parts. Have a look at this example from the Sequence Tracking Sheet:

![](/img/grandma2/window_sequence-tracking-sheet_two-cues-with-part_v3-3-da9e9f.png)

_Cue 2 part 2 only containing fixture 3_

Notice that the value for fixture 3 is stored in cue 2 part 1. It does not have a value in cue 2 part 0 (the main cue). And the values from fixtures 1 and 2 are in the main cue and therefore do not have any value in cue 2 part 1.

Storing something in a part is almost as easy as storing the main cue. Using the example above the key presses would be:

Store Cue 2 Cue 1 Please

The second press on the cue key will result in the [Part keyword](/grandma2/key_keyword_part/) and the command line feedback looks like this:

\[time] : Executing : Store Cue 2 Part 1

 

## Using command line input to add more while storing

In the example using the cue labels to store, there was a command that showed some of the other possibilities while storing cues.

The command line gives access to all the store options that can be found in the GUI Store Options - read about them in the [Store Options and Defaults topic](/grandma2/key_cs_store_options_default/).

All the different elements are described in the [Store Keyword topic](/grandma2/key_keyword_store/).

### Examples

The following is just a few extra command line examples showing some of the possibilities while storing.

\[Channel]> Store Cue 1.2 Executor 1.4

Stores cue number 1.2 in the sequence assigned to executor 4 on executor page 1.

 

\[Channel]> Store Sequence 8 Cue 20 /overwrite

Short version:

\[Channel]> S Seq 8 Cu 20 /o

Stores cue number 20 in sequence number 8 using the overwrite function. It does not matter if you write sequence or cue first. So this could also have been:

\[Channel]> Store Cue 20 Sequence 8 /overwrite

 

 

\[Channel]> Store Cue 42 "Return of the Paranoid Android" /merge /use=Look

This will store the cue with a name and it is merged but it is also stored with the "Look" option. Read more about the store options including Look in the next topic.

 

## []()Store Remove

A version of storing is the Store Remove, where the Remove button is selected in the Store pop-up (described above).

This will remove the stored values for the attributes that currently have active values in the programmer.

The values in the programmer are irrelevant in this case. They are simply an indicator of what attributes you want to remove from the cue.

For removal of a few values, the Sequence Tracking Sheet or Sequence Content Sheets might be good tools. Read about them in the [Looking at the Cue Content topic](/grandma2/key_cs_cue_content/).

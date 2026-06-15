---
title: "Store Cues"
description: "Storing a cue is the default Store action in grandMA3."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_store.html"
scrapedAt: "2026-06-15T18:25:25.043Z"
pagefind: false
---
Storing a cue is the default [Store](/grandma3/2-3/keyword_store/) action in grandMA3.

This means that if nothing else is defined and Please is pressed right after Store, a new cue is stored in the selected sequence.

Or press Store, followed by pressing the executor button where the sequence, with the cue, should be stored.

If active values are in the programmer, they are stored in the cue (with the default store settings), but programmer values are not needed to store cues.

Of course, there are more details about storing cues, so please keep reading.

## Store a New Cue on an Empty Executor

If a cue is stored on an empty executor, the grandMA3 software automatically stores the cue in a new sequence and assigns this executor to control the sequence using the default settings.

Returning to the second example at the top of this topic, just pressing the Store button and then an executor button on the empty executor is enough. The software assumes the desired action is storing a cue.

This will automatically be cue number 1 - nothing else was specified.

Storing cues obey [Worlds and Filters](/grandma3/2-3/worldfilter/), which enables control of what is stored. Worlds and filters can also be assigned to the sequence both as an input and also as an output filter - independently of each other. This will function as an input or output filter, allowing only the elements in the world or filter to be stored in or played back from the sequence.

## Store the Second Cue

If the store function is used again on the same sequence - without adding cue number details - then the grandMA3 does not know what should happen, and a pop-up appears, giving different choices.

![](/img/grandma3/2-3/popup_store-cue_v2-3-5cd58a.png)

_Please choose store mode pop-up with "Create Second Cue" option_

Tapping Create Second Cue will store a cue with the next whole number.

**Overwrite** and **Merge** options are explained below. **Remove** and **Release** are described in the [What is Tracking topic](/grandma3/2-3/cue_tracking/). **Cancel** does not store anything.

## Cue Numbers

When a cue is stored, it is possible to specify a cue number. This is done using the following syntax: Store Cue \[Cue\_Number]. It is also possible to specify a sequence or an executor using the keys in the command section while storing:\
Store Cue \[Cue\_Number] Sequence \["Sequence\_Name" or Sequence\_Number] or\
Store Cue \[Cue\_Number] Executor \[Executor\_Number].

Notice that the cues are stored in the sequence. Using the executor number will store the cue in the sequence the executor is controlling.

Cue numbers have three decimal numbers. If all are zero, then they are not displayed. But cue number "42" is the same as cue number "42.000" - it is not "42 thousand", it is "42 point 0 0 0".  The currently highest cue number that can be stored is "999 999.999". The lowest number that can be stored is "0.001".

|                                                    |                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                                                                           |
|                                                    | Storing nearly 1 billion cues will completely fill the memory and make the show file VERY big.The software will cancel the store process before the system crashes, but almost any operation after this will make the software shut down!! |

The software hides the trailing decimal zeros, but they are still there. This means that cue "5.2" is after cue "5.11" because they are actually cues "5.200" and "5.110".

It is not limited to storing only a single cue number at a time. It can just as easily be a range of numbers - this means it is possible to use Thru, +, and - keys to create number ranges to store.

Selecting the sequence can be a good idea if you are working with or adding a lot of cues to the same sequence.

This can be done easily by pressing Select and then one of the buttons associated with the executor controlling the sequence or tapping the sequence in the sequence pool.

The selected sequence is used if no sequence or executor is defined in the store command.

## Store Into Cues That are Not Empty

If the store operation is used to store into already existing cues, then a pop-up like this appears:

![Update this description text.](/img/grandma3/2-3/popup_store-cue_merge-a_v2-3-9ecf35.png)

_Please choose store mode pop-up_

or if there are cues following the cue stored into, it looks like this:

![](/img/grandma3/2-3/popup_store-cue_merge_v2-3-f23792.png)

_Please choose store mode pop-up with following cues_

The pop-up only appears if the store options do not specify what should happen.

Look at the [Store Options and Defaults topic](/grandma3/2-3/cue_store_settings_preferences/) for information about specifying this while storing.

**Cue Only** is described in the [Cue Only topic](/grandma3/2-3/cue_tracking_cue-only/). The shield tracking options are described in the [Tracking Shield topic](/grandma3/2-3/cue_tracking_shield/). 

**Remove**, **Release**, and other tracking information are described in detail in the [What is Tracking topic](/grandma3/2-3/cue_tracking/).

The two remaining options are:

- **Overwrite:**\
  This will remove what is already stored in the cue and only store the new values using the tracking settings in the pop-up.
- **Merge:**\
  This will merge the new values into the existing values. New values have a higher priority and will overwrite existing values.

### Examples

In the following examples, we have a sequence with the following two cues:

![](/img/grandma3/2-3/img_store-cue_example-01_v2-1-830703.png)

The magenta value for fixture 1 in cue 2 is a tracked value.

Now we turn on fixture 3 at 100 % and store this into cue 2.

This is the result if **Overwrite** is chosen:

![](/img/grandma3/2-3/img_store-cue_example-02_v2-1-88d4f4.png)

Now fixture 2 is gone. This is because it only had values stored in cue number 2. The dimmer value of fixture 1 is not affected because it is a tracked value.

If we had chosen **Merge** instead, it would have looked like this:

![](/img/grandma3/2-3/img_store-cue_example-03_v2-1-7908cf.png)

Now, the value from fixture 3 is added to the existing values.

## Store Cues with Timings

When storing a cue, it is possible also to store the different cue timings. This is described in detail in the [Cue Timings topic](/grandma3/2-3/cue_timing/), but here is the short version.

The Time key will add different timing keywords to the command when storing.

For instance, storing cue 4 with a fade time of 6 seconds and a delay of 1 second, the following keys can be pressed:

Store Cue 4 Time 6 Time 1 Please

This is the result in the command line feedback:

|      |                                      |
| ---- | ------------------------------------ |
| OK : | Store Cue 4 CueFade "6" CueDelay "1" |

Pressing the Time button repeatedly will change what timing keyword it adds.

## Adding and Using Cue Labels

A cue can be given a name - using the [label keyword](/grandma3/2-3/keyword_label/) - while it is stored. This is the syntax: Store Cue \[Cue\_Number] "My Cue Name".

The keyboard is needed for writing this. The quotation marks are needed to tell the software that this is text - then, it is not interpreted as a command.

Labels can also automatically be enumerated while storing. Have a look at this command:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue 2 + 4 "BO Scene 1" |

This will not label both cues 2 and 4 the same - it will add 1 to the number for each cue. The result is that cue 2 is called "BO Scene 1" and cue 4 is "BO Scene 2". This enumeration only works if the number is the last part of the label and if there is a space between the last word and the number.

Cue labels can be used when storing. This means that if there are several cues whose labels start with "BO", it is possible to store into all these cues in one operation using BO plus an asterisk. The asterisk functions as a character wildcard and means that the cue name has to begin with "BO", but then any remaining characters can be anything. See the following example.

### Example

This is the cue sequence and content before storing:

![](/img/grandma3/2-3/img_store-cue_example-04_v2-1-7fc12a.png)

Notice that cues 3 and 5 are [blocked](/grandma3/2-3/keyword_block/). This means that 100% is stored in the cues even though it is currently not necessary.

With an active value of 0% for fixture 1, use the keyboard to type the following command:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue "BO\*" /Merge |

This is the result:

![](/img/grandma3/2-3/img_store-cue_example-05_v2-1-4ed174.png)

The two cues whose label begins with BO now got the new value.

## Store Cue Parts

Besides the many cues that could be stored in each sequence, it is also possible to store 256 **Cue Parts** to each cue.

Values are always stored in a cue part, and often when we talk about a cue, we are actually talking about all the parts in a cue.

Cue parts are a division of the cue. Cue part 0 is always created with the cue, and this part has all the values unless a different part is created or specified when storing.

Have a look at this example:

![](/img/grandma3/2-3/img_store-cue_example-06_v2-1-b77339.png)

Notice that the value for fixture 3 is stored in cue 2, part 10. It does not have a value in cue 2, part 0. And the values from fixtures 1 and 2 are in part 0 and therefore do not have any value in cue 2, part 10. It appears as tracked values.

Storing something in a part is almost as easy as storing the main cue. Using the example above, the keypresses would be:

Store Cue 2 Cue 1 0 Please

The second press on the cue key will result in the [Part keyword](/grandma3/2-3/keyword_part/), and the command line feedback looks like this:

|      |                     |
| ---- | ------------------- |
| OK : | Store Cue 2 Part 10 |

As a default, it is only possible for an attribute to be stored in one cue part per cue. But this can be changed so an attribute can have values in multiple cue parts in the same cue. If **Allow Duplicates** is turned On for a cue then attributes can be stored in all parts of the cue.

In this example, **Allow Duplicates** is set to Yes for cue 2, and fixture 1 has values in both part 0 and part 10:

![](/img/grandma3/2-3/img_store-cue_example-07_v2-1-f533d6.png)

The cue part with the highest number takes precedence, and in the example above, fixture 1 will end at 40% output when cue 2 is triggered.

**Allow Duplicate** is a column in the [Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/).

## []()

## Store Cue Next and Previous

The [Next](/grandma3/2-3/keyword_next/) and [Previous](/grandma3/2-3/keyword_previous/) keywords can be used when storing cues. This means that instead of storing a specific cue number (or name), a cue can be stored based on the currently active cue. For instance, if the currently active cue is number 4. Then, values can be stored in the next cue using a syntax like this: Store Cue Next /Merge.

If the next cue does not exist, then a new cue is created using the next available whole number. It is the same that happens with Store Cue, so in this case the Next keyword is disregarded. The same method can be used to store into the previous cue using the Store Cue Previous /Merge syntax.

A number can be added to count forward or backward. For instance, if there is a sequence with cues 1 to 5 and the currently active cue is 1, then values can be stored to cue 4 using this syntax: Store Cue Next 3 /Merge.

|                                            |                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                            |
|                                            | Next and Previous can be used for other cue actions than store. For instance, Update, Goto, and At.  |

## Store Cue + and -

The [+](/grandma3/2-3/keyword_plus/) and [-](/grandma3/2-3/keyword_minus/) keywords can be used when storing cues. In the paragraphs just above, we look at storing using next and previous, but this only stores into the existing cues or adds a new cue at the end with the next available whole number. With + and -, there are some extended options.

This can be used to create new cues in between existing cues.

Let us explore this using an example. The base sequence has the following cues: 10, 20, and 30. Cue 20 is active. A new cue can be created between cues 20 and 30 using this syntax: Store Cue +. This creates cue 21. So the system creates the new cue with the next whole number when it is available. If the same syntax is used again (still with cue 20 active), then cue 20.1 is created because there are no more whole numbers available between 20 and 21. If the syntax is repeated, then cues 20.01 and 20.001 are created. If there is no available space for a new cue between the active cue (20.000) and the next cue (20.001), then the syntax will give an "Illegal index" error.

The syntax Store Cue - creates cue 19, so it works the same, just backwards.

Another option is to define the cue using a number. For example, a sequence exists with cues 1 to 5 (all whole numbers). The currently active cue is number 3. A fixture has some programmer values. This can be stored into cue 4 using the following syntax: Store Cue + 1 /Merge. It is important that there is a space between the + and the number. This creates the same result as Store Cue Next /Merge.

If, instead, the wish is to store the values into a new cue between cues 3 and 4, and we want it to be cue 3.5, then the following syntax can be used: Store Cue + 0.5. This creates cue 3.5 with the values. This uses math to calculate the cue number based on the number of the active cue.

Here is a slightly different example. The base is the same sequence with five cues and the active cue 3. Again, there are some values in the programmer, and the wish is to store these values into a cue just before the active cue. This can be done using the following syntax: Store Cue - 0.4. This creates cue 2.6 with the values (3.0 - 0.4 = 2.6).

## Using Command Line Input to Add More While Storing

In the example using the cue labels to store, a command showed some of the other possibilities while storing cues.

The command line gives access to all the store options in the GUI Store Options - read about them in the [Store Options and Defaults topic](/grandma3/2-3/cue_store_settings_preferences/).

All the different elements are described in the [Store Keyword topic](/grandma3/2-3/keyword_store/).

### Examples

The following are just a few extra command line examples showing some of the possibilities while storing.

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue 1.2 Sequence 4 |

Stores cue number 1.2 in sequence 4.

It does not matter if you write sequence or cue first. So this could also have been:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Sequence 4 Cue 1.2 |

The commands can often be written shorter in the command line input. See some examples in the [General Syntax Rules topic](/grandma3/2-3/csk_syntax_rules/#use_command_line).

Read the topics about each keyword to see the short version of the keyword.

|                                                                    |                                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Cue 42 "Al Powell arrives at the Plaze" CueFade 6/3 /Merge |

This will store the cue with a name, merged, and stored with an in-fade of six seconds and an out-fade of three seconds. Read more about the store options in the [Store options and defaults topic](/grandma3/2-3/cue_store_settings_preferences/).

## Store Remove

A version of storing is the **Store Remove**, where Remove is selected in the store pop-up (described above).

This will remove the stored values for the attributes that currently have active values in the programmer.

The actual values in the programmer are irrelevant in this case. They simply indicate what attributes should be removed from the cue.

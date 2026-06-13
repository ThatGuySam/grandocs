---
title: "Looping cues"
description: "Cues can be looped. They can loop indefinitely or loops can be limited by time or number of loops."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_seq_loop.html"
scrapedAt: "2026-06-12T21:28:15.842Z"
---
Cues can be looped. They can loop indefinitely or loops can be limited by time or number of loops.

In the [Sequence Executor Sheet](/grandma2/key_cs_cue_sequence/) there are three columns that control looping. They are: **Loop**, **Ltime**, and **Lcount**.

Editing a cell in the Loop column will open a Select Loop Destination pop-up. It could look like this (if you have five cues):

![](/img/grandma2/popup_select-loop-destination_v3-3-e56ce0.png)

_Select Loop Destination pop-up_

Here it is possible to select the cue that should be looped to next. It is possible to loop to a cue that has a higher cue number that the cue where you set the loop. This will result in jumping ahead in the cue list. The **\[No Loop]** option removes any loop information. If loops are assigned using the command line then setting the loop value to **none** will remove the loop.

If the selected cue is before the cue where the loop is set, then it will jump back to the previous cue.

Then the next trigger will activate the loop and jump. When a loop is active, then the frame around the active cue is changed from yellow to magenta. It could look like this:

![](/img/grandma2/window_sequence-executor-sheet_loop-active_v3-3-5c347b.png)

_Sequence Executor Sheet - Active loop_

If nothing is defined in the Ltime and Lcount cells with the loop number, then it will loop indefinitely.

The **Ltime** allows you to set a time where the loop should be active. The time will start a count down when the loop is activated the first time. When the time reaches 0 then the looping is disabled and the next trigger will run the cue **after the cue where the loop is defined** - no matter what the current active cue is. In the example above it would run cue 3 as the next cue.

The **Lcount** allows you to set a number of times the loop should happen. The count will start when the loop is activated the first time. The the count reaches 1 and the looping triggering cue is reached then it will loop one final time and passing the cue again will disable the loop and continue with the following cue.

 

If both an Ltime and Lcount is set then it is the one that first reaches 0 that defines when the loop is disabled.

 

Editing the Ltime and Lcount cell will open the Calculator. This is where you type the time or count number. There is also an option to select **Indefinite** -  this will remove the value. 

If command line is used to set the Ltime and Lcount, then assigning **-1** will remove the value.

 

## Loop BreakingGo

The Executors have an options called **Loop BreakingGo**. It can be found in the Options page of the Assign Menu - read more about it in the [Executor Options topic](/grandma2/key_adv_exec_options/).

When this is active, then a Go or Goto command will overrule the looping function and the cue after the loop will be called. All other triggers will keep the loop running.

This can be a nice function for rehearsals or situations where you need the loop running until the executor is triggered again.

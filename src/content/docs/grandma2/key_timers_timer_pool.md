---
title: "Timer pool"
description: "Manage the stopwatch and the countdowns in the timer pool."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_timers_timer_pool.html"
scrapedAt: "2026-06-12T21:28:21.976Z"
---
Manage the stopwatch and the countdowns in the timer pool. 

1. Open the timer pool:\
   -Tap Pools in **Create Basic Window**. For more information on how to open a basic window see [Manage windows](/grandma2/key_windows/).\
   -Tap Time and the timer pool opens.

![](/img/grandma2/window_timer-pool_v3-3-a57c01.png)

_Open the timer pool_

2. Set a new timer, for example **Countdown**:\
   -Press Edit and then tap an empty cell in the timer pool.\
   -The **pop-up Edit Timer** opens.

   ![](/img/grandma2/popup_edit-timer_timer-pool_v3-3-84ed52.png)

   _Edit the timer Countdown_

3) Now, select the timer mode:\
   -Tap the drop-down and tap **Countdown**.
4) Set the time unit:\
   -To set the time, tap **Time Unit**.\
   -The **pop-up Select Time Unit** opens.

   ![](/img/grandma2/popup_select-time-unit_timer-pool_v3-3-1e1b48.png)

   _Select unit_

   -Tap to select the unit, for example 1 / 10 Seconds.
5) To continue the countdown after restart, tap **When Restarting**. The button toggles between **Continue** or **Reset**. 
6) To set a link to an executor, tap **Exec Trigger**.\
   -The **pop-up Select Exec Trigger** opens.

   ![](/img/grandma2/popup_exec-trigger_timer-pool_v3-3-2ae9e8.png)

   _Link timer to an executor_

   -If you do not want to set a link to an executor, tap **Not linked**. 

---

## Exec Triggers

- **LinkSelected-Start** and **LinkSelected-Toggle** are linked to the executors you have selected.\
  -If an executor is linked as **LinkSelected-Start**, the commands GO, GOTO, and TOP start the timer. \
  -If an executor is linked as **LinkSelected-Toggle**, the timer toggles between start and pause. 

 

- **LinkLastGo-Start** and **LinkLastGo-Toggle** are linked to all executors, also the ones you have selected. \
  -If the link is set as **LinkLastGo-Start**, the commands GO, GOTO, and TOP start the timer on all executors. \
  -If the link is set as **LinkLastGo-Toggle**, the timer toggles between start and pause on all executors.  

---

7. Label the timer you have set:
8. -Tap Label and an editor opens.\
   -Type the name of the timer and press Please.
9. Set countdown time and alert duration:\
   -Tap the green button below **Countdown Time** and the calculator opens.\
   -Enter the time of the countdown.\
   -Tap the green button below **Alert Duration** and the calculator opens.\
   -Enter the duration of the alert.
10. Now, select the type of the alert:\
    -Tap **Alert Type** and the **pop-up Select Alert Type** opens.

    ![](/img/grandma2/popup_select-alter-type_timer-pool_v3-3-949f27.png)

    _Setting the type of an alert_

    -Tap **Command, Pop-up & Beep**.\
    -The alert can now be set off via the command line simultaneously displaying a warning pop-up and an audio signal on the console.
11. Set the range of the alert:\
     -To toggle the range of the alert to **Local**, tap **Alert Range**.\
    -The alert only sets off on the console currently in use.
12. Type the command that is to be executed in the session master:\
    -Tap the green button below **Alert Command executed on Master** and an editor opens.\
    -Enter the command.
13. Enter the message that is to be displayed in the warning pop-up as soon as the alert sets off.\
    -Tap the green button below **Alert Text**.\
    -An editor opens. \
    -Enter the message of the pop-up.
14. The countdown is now set. 

**Hint:**\
The current time of the timer can be assigned as the timing of a cue. Use the following syntax "Assign fade $timer1 cue 1 please" or Assign Time TimerPoolObject Cue 1 Please.

**Hint:**\
You can play back a stopwatch or a countdown saved in the timer pool in the Clock. For more information see [Other System Tools - Clock](/grandma2/key_ost_clock/).

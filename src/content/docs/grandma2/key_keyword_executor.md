---
title: "Executor"
description: "To get the Executor keyword in the command line press Exec."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_executor.html"
scrapedAt: "2026-06-12T21:27:50.342Z"
---
To get the Executor keyword in the command line press Exec.

You can also type **Executor** or the shortcut **Ex** directly in the command line.

## Description

Executor is an object keyword acting as a control handle for other objects.

The default function for Executor objects is [SelFix](/grandma2/key_keyword_selfix/). This means that calling executors without any function specified selects the fixtures of the executor in programmer.

If you apply a function or reference a property not supported by the Executor object, the command will be passed on its child: Button/fader or the object assigned to the executor.

## Syntax

Executor \[ID]

Executor \[Page].\[ID]

Executor \[Pagepool].\[Page].\[ID]

Assign Executor \[ID] / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameters via command line.

| Parameter      | Parameter Value                                                                    | Description                                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoFix        | "on", "off"                                                                        | Assigns if auto fix is on or off. Page changes will not affect the executor while it is on.                                                                                                                    |
| AutoStart      | "on", "off"                                                                        | Assigns if auto start is on or off. Executor will turn on as soon as the fader is above zero.                                                                                                                  |
| AutoStomp      | "on", "off"                                                                        | Assigns if auto stomp is on or off. Effects from other executors do not affect values in this executor.                                                                                                        |
| AutoStop       | "on", "off"                                                                        | Assigns if auto stop is on or off. Executor will turn off as soon as the fader reaches zero (ignores off-time).                                                                                                |
| BreakingGo     | "on", "off"                                                                        | Assigns if Loop Breaking Go is on or off. For more information see [Looping Cues](/grandma2/key_adv_seq_loop/).                                                                                                |
| Chaser         | "on", "off"                                                                        | Assigns if the executor is a chaser or not.                                                                                                                                                                    |
| Crossfade      | "on", "off"                                                                        | on = AB XFade off = Split XFade Assigns if the executor is an AB XFade or a Split XFade. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#xfade). |
| CmdDisable     | "on", "off"                                                                        | Assigns if CMD (= command) disable is on or off. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#cmd_disable).                                   |
| EffectSpeed    | "on", "off"                                                                        | Assigns if "Link Effect To Rate" is on or off.                                                                                                                                                                 |
| IgnoreExecTime | "on", "off"                                                                        | Assigns if ignore exec time is on or off. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#ignore_exec_time).                                     |
| KillProtect    | "on", "off"                                                                        | Assigns if kill protect is on or off. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#kill_protect).                                             |
| MasterGo       | "on", "off", "go", "top"                                                           | Assigns the action that is executed if the master fader is above zero. For more information see [Common executor options](/grandma2/key_exec_common_options/).                                                 |
| MIBAlways      | "on", "off"                                                                        | Assigns if MIB always is on or off. For more information see [Advanced executor functionality - Executor options.](/grandma2/key_adv_exec_options/#mib_always)                                                 |
| MIBNever       | "on", "off"                                                                        | Assigns if MIB never is on or off. For more information see [Advanced executor functionality - Executor options.](/grandma2/key_adv_exec_options/#mib_never)                                                   |
| OffTime        | e.g. "3" (= 3 seconds)                                                             | Assigns executor off time in seconds.                                                                                                                                                                          |
| OoO            | "on", "off"                                                                        | Assigns if off on overwritten is on or off. For more information see [Executors - Common executor options](/grandma2/key_exec_common_options/#on_off_overwritten).                                             |
| PlaybackMaster | "1 - 50" 0 = No Playback Master                                                    | Assigns the executor to the specified playback master. For more information see [Advanced executor functionality - special masters - playback masters](/grandma2/key_adv_exec_spec_master_playback/).          |
| Prepos         | "on", "off"                                                                        | Assigns if Auto Prepos is on or off. For more information see [Advanced executor functionality - executor options](/grandma2/key_adv_exec_options/#prepos).                                                    |
| Priority       | "super" or 0 "swap" or 2 "htp" or 3 "high" or 4 "ltp" or 5 "low" or 6              | Assigns the executor priority. For more information see [Cues and sequences - Playing back cues](/grandma2/key_cs_playback/#priority).                                                                         |
| RateMaster     | 0 - 16, 0 = Rate Individual                                                        | Assigns the rate master. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#rate_master).                                                           |
| Restart        | "First" "Current" "Next"                                                           | Assigns the restart mode. For more information see [Common executor options](/grandma2/key_exec_common_options/).                                                                                              |
| SoftLTP        | "on", "off"                                                                        | Assigns if soft LTP is on or off. For more information see [Cues and sequences - Playing back cues](/grandma2/key_cs_playback/#soft_ltp).                                                                      |
| Speed          | "Mul2" "Mul4" "Mul8" "Mul16" "Mul32" "Normal" "Div2" "Div4" "Div8" "Div16" "Div32" | Assigns the speed factor. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#speed_factor).                                                         |
| Speedmaster    | 0 - 16, 0 = Speed individual                                                       | Assigns the speed master. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#speed_master).                                                         |
| SwopProtect    | "on", "off"                                                                        | Assigns if swop protect is on or off. For more information see [Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#swop_protect).                                             |
| TriggerIsGo    | "on", "off"                                                                        | Assigns if trigger is go is on or not. For more information see[ Advanced executor functionality - Executor options](/grandma2/key_adv_exec_options/#trigger_is_go).                                           |
| Width          | 1 - 5                                                                              | Assigns the width of the executor. For more information see [Executors - Assign a function - Change the Width of Executors](/grandma2/key_exec_assign/#executor_width).                                        |
| Wrap           | "on", "off"                                                                        | Assigns if Wrap Around is on or off. For more information see [What is tracking](/grandma2/key_cs_what_is_tracking/#release_first_step).                                                                       |

## Examples

- To remove the fifth executor on the current page type in the command line:

\[Channel]> Delete Executor 5

 

- To set the fader of executor 5 to 50 % type in the command line:

\[Channel]> Executor 5 At 50

 

- To delete cue 3 of the sequence assigned to executor 5 type in the command line:

\[Channel]> Delete Cue 3 Executor 5

 

- To select the second executor on page 4 type in the command line:

\[Channel]>  Select Executor 4.2

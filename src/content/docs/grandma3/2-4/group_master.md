---
title: "Group Masters"
description: "Groups can be masters of the fixtures in the group. For more information, see Masters."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/group_master.html"
scrapedAt: "2026-06-12T21:24:51.218Z"
---
Groups can be masters of the fixtures in the group. For more information, see [Masters](/grandma3/2-4/masters/).

Groups can be assigned to executors. This provides handles that make it easier to adjust the master level. Learn how in the [Assign Object to an Executor topic](/grandma3/2-4/executor_assign/).

There are four different kinds of group masters:

- **Positive** - This is an HTP group master, indicated by ![](/img/grandma3/2-4/icon_plus_15_v1-5-dc1987.png)  icon in the upper right corner of the pool object. The output of the fixtures is reduced depending on the value of the group master. 
- **Negative** - This is a LoTP group master, indicated by ![](/img/grandma3/2-4/icon_minus_15_v1-5-87f767.png)  icon in the upper right corner of the pool object. The output of the fixtures is reduced depending on the values of the group master.
- **Scaling** - This scales the intensity output. Scaling is indicated by ![](/img/grandma3/2-4/icon_cross_15px-9b559c.png) icon in the upper right corner of the pool object. For example, if the fixture is at 50% and the group master is at 50%, then the output is 25%. 
- **Additive** - This master does not limit output but adds output as HTP merges with values from the programmer and playbacks. A small circle icon ![](/img/grandma3/2-4/icon_record_15_v2-2-a2dc2d.png) in the upper right corner of the pool object indicates it.

## Difference Between Positive, Negative, and Scaling

The difference between the positive and negative masters is relevant when several groups contain the exact or overlapping fixtures.

A negative master has priority over a positive.

For example, if two groups include a fixture with 100% output, and if one group is a positive master at 80% and the other group is a negative master at 60%, then the output is 60% (limited by the negative master). If the negative master is turned up, the output stops at 80% when the positive master becomes valid. If both groups are switched to Scaling, the output will be 48% since the fixture output of 100% is multiplied by 60% and 80% of the second group master. 

![](/img/grandma3/2-4/window_group-pool_v2-3-d7b030.png)

_Group pool with masters_

Groups with a mode assigned display a horizontal bar indicating the master level when relevant.

The master mode can be selected using the **Edit Group pop-up**. Read more about the pop-up in the [Edit Groups topic](/grandma3/2-4/group_edit/).

The mode can also be assigned using the [Set keyword](/grandma3/2-4/keyword_set/).

### Example

Using the command line to set the master mode of group 4 to positive:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Group 4 Property "Mode" "Positive" |

The mode type is capital sensitive. Writing "positive" fails, but "Positive" works.

|                                            |                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                  |
|                                            | A pop-up appears if the mode is not specified, allowing you to choose a mode from a list.  |

## Delete a Group Master

Deleting a group assigned to an executor does not delete the group from the pool.

If a group is deleted from the group pool, it is deleted from the show.

|                                            |                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                         |
|                                            | Deleting a group from an executor keeps the fixtures limited, as the group still exists in the pool. When deleting a group directly, the fixtures return to their non group master limited value. |

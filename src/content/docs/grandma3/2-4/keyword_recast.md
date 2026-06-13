---
title: "Recast"
description: "To enter the Recast keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_recast.html"
scrapedAt: "2026-06-12T21:24:34.611Z"
---
To enter the Recast keyword in the command line, use one of the options:

- Press MA + X1 | Clone + X1 | Clone
- Type **Recast**
- Type the shortcut **Reca**

## Description

The Recast keyword is a command keyword which is used to update attributes that were added or removed in the presets. It will add or remove these values in cues where the preset is used. 

Furthermore, recast can be used when configuring executors. When an executor configuration is used on several executors, and the assignment of handle for one of these executors changes, the changes will not automatically be transmitted to other executors using this configuration. When storing the changes into the executor configuration, it is possible to recast the executor configuration. All other executors using this configuration will then get the new handle assignment. For more information on executor configurations see the [Executor Configurations](/grandma3/2-4/executor_configurations/).

|                                                    |                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Known Limitation:**                                                                      |
|                                                    | Recast will only recast presets to cues where a preset link exists in the absolute layer.  |

## Syntax

Recast Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number]

Recast Configuration \["ExecutorConfiguration\_Name" or ExecutorConfiguration\_Number]

Example

##

- The dimmer is open and the color is red in ten fixtures in the All preset 21.1. This preset is used in sequence 1. We now add position to the preset. To recast preset 21.1, type: 

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Recast Preset 21.1  |

---
title: "UserProfile"
description: "To enter the UserProfile keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_userprofile.html"
scrapedAt: "2026-06-15T18:25:13.181Z"
pagefind: false
---
To enter the UserProfile keyword in the command line, use one of the options:

- Type **UserProfile** 
- Type **Userp**
- Type the shortcut **UPR**

## Description

The UserProfile keyword is an object keyword. It can be used to execute functions in the UserProfile such as create, delete, or change a setting.

For more information on user profiles see [Create User](/grandma3/2-3/user_create/). For information on different settings see [User Settings](/grandma3/2-3/user_settings/).

## Syntax

\[Function] UserProfile \["UserProfile\_Name" or UserProfile\_Number] (\[Setting] \[Setting\_Value])

## Settings

The UserProfile keyword has several settings. The settings can be changed using the [Set Keyword](/grandma3/2-3/keyword_set/).

Here are the settings:

| Setting                    | Object/Option/Value                                                                                                | Description                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Name                       | Text                                                                                                               | The name of the user profile. This can be used as the user profile ID.                                                |
| DMXReadout                 | "Percent", "Dec8", "Dec16", "Dec24", "Hex8", "Hex16", or "Hex24"                                                   | This is the default DMX readout.                                                                                      |
| NormalValue                | A percent value                                                                                                    | This is the value assigned to the intensity attribute if the [Normal keyword](/grandma3/2-3/keyword_normal/) is used. |
| WheelResolution            | "Coarse", "Normal", or "Fine"                                                                                      | The resolution of the [level wheel](/grandma3/2-3/do_control_level/) on the consoles.                                 |
| WheelMode                  | "Additive", "Incremental", "Prop.+", or "Prop.-"                                                                   | This defines the level wheel mode.                                                                                    |
| PreciseEdit                | "Yes" or "No"                                                                                                      | This turns the precise edit mode On or Off.                                                                           |
| ScreenEncoder              | "Yes" or "No"                                                                                                      | This enables or disables the screen encoder on the fifth [dual encoder](/grandma3/2-3/do_control_encoder/).           |
| TimeKeyTarget              | "Cue" or "Fixture"                                                                                                 | This defines how the [Time key](/grandma3/2-3/key_time/) functions.                                                   |
| TCSlot                     | "TCSlot 1" .. "TCSlot 8"                                                                                           | This is the user profile's selected timecode slot.                                                                    |
| ValueReadout               | "Natural", "Percent", "PercentFine", "Physical", "Decimal8", "Decimal16", "Decimal24", "Hex8", "Hex16", or "Hex24" | This is the default value readout.                                                                                    |
| SpeedReadout               | "Hertz", "BPM", or "Seconds"                                                                                       | This is the default speed readout.                                                                                    |
| PresetReadout              | "ID", "ID+Name", "ID+Name+Value", "Name", "Name+Value", or "Value"                                                 | This is the default readout for preset in sheets.                                                                     |
| OverlayFade                | Time value in milliseconds                                                                                         | This is the time used by pop-ups and overlays when fading into visibility.                                            |
| TimeReadout                | "10d11h23m45", "251h23m45", "10.11:23:45", or "251:23:45"                                                          | This is the default time readout.                                                                                     |
| FrameReadout               | "Seconds", "24 fps", "25 fps", "30 fps", or "60 fps"                                                               | This is the default time frame readout.                                                                               |
| UndoProgrammer             | "Yes" or "No"                                                                                                      | This turns On or Off if programmer actions can be oopsed.                                                             |
| UndoGeneral                | "Yes" or "No"                                                                                                      | This turns On or Off if general actions can be oopsed.                                                                |
| AutoRemoveGaps             | "Yes" or "No"                                                                                                      | This turns On or Off the auto-remove gaps function in the selection grid.                                             |
| MirrorSpecialExecutorPages | "Yes" or "No"                                                                                                      | This turns On or Off the mirror function on extension wings.                                                          |
| ShowAppearanceInCueInput   | "Yes" or "No"                                                                                                      | This turns On or Off the cue appearance in cue selection pop-ups.                                                     |
| ShowSettingsInEditors      | "Yes" or "No"                                                                                                      | This turns On or Off if settings are visible in editors as a default.                                                 |
| ExecConfigSequence         | Executor Configuration Object                                                                                      | Default executor configuration for sequences.                                                                         |
| ExecConfigMacro            | Executor Configuration Object                                                                                      | Default executor configuration for macros.                                                                            |
| ExecConfigView             | Executor Configuration Object                                                                                      | Default executor configuration for views.                                                                             |
| ExecConfigWorld            | Executor Configuration Object                                                                                      | Default executor configuration for worlds.                                                                            |
| ExecConfigGroup            | Executor Configuration Object                                                                                      | Default executor configuration for groups.                                                                            |
| ExecConfigPreset           | Executor Configuration Object                                                                                      | Default executor configuration for presets.                                                                           |
| ExecConfigPlugin           | Executor Configuration Object                                                                                      | Default executor configuration for plugins.                                                                           |
| ExecConfigUser             | Executor Configuration Object                                                                                      | Default executor configuration for users.                                                                             |
| ExecConfigSound            | Executor Configuration Object                                                                                      | Default executor configuration for sounds.                                                                            |
| ExecConfigScreenConfig     | Executor Configuration Object                                                                                      | Default executor configuration for screen configurations.                                                             |
| ExecConfigMaster           | Executor Configuration Object                                                                                      | Default executor configuration for masters.                                                                           |
| ExecConfigSpeedMaster      | Executor Configuration Object                                                                                      | Default executor configuration for speed masters.                                                                     |
| ExecConfigPlaybackMaster   | Executor Configuration Object                                                                                      | Default executor configuration for playback masters.                                                                  |
| ShowConnectors             | "Yes" or "No"                                                                                                      | This turns On or Off if the connector overlay is visible when the "Output Configuration" menu is visible.             |
| FixtureLibShowMA           | "Yes" or "No"                                                                                                      | This turns On or Off if MA fixtures are shown in the "Insert New Fixture" pop-up.                                     |
| FixtureLibShowUser         | "Yes" or "No"                                                                                                      | This turns On or Off if User fixtures are shown in the "Insert New Fixture" pop-up.                                   |
| FixtureLibShowShare        | "Yes" or "No"                                                                                                      | This turns On or Off if Share fixtures are shown in the "Insert New Fixture" pop-up.                                  |

For detailed expanation see [User Settings](/grandma3/2-3/user_settings/).

## Examples

- To list all available user profiles, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List UserProfile  |

 

- To turn off the screen encoder in the default user profile, type:

|                                                                    |                                                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set UserProfile "Default" "ScreenEncoder" "No"  |

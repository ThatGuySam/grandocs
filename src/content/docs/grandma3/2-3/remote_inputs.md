---
title: "Remote In and Out"
description: "Remote Inputs and Outputs are handled through the In & Out menu. The In & Out menu can be used to define parameters, for example, to trigger a command via a rem"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/remote_inputs.html"
scrapedAt: "2026-06-15T18:25:37.407Z"
pagefind: false
---
Remote Inputs and Outputs are handled through the In & Out menu. The In & Out menu can be used to define parameters, for example, to trigger a command via a remote controller.

Press Menu and then tap In & Out. The In & Out menu opens.

The menu is separated into six tabs: \
\
[DC Remotes](/grandma3/2-3/remote_inputs_dc/), [MIDI Remotes](/grandma3/2-3/remote_inputs_midi/), [DMX Remotes](/grandma3/2-3/remote_inputs_dmx/), [OSC](/grandma3/2-3/remote_inputs_osc/), [PSN](/grandma3/2-3/remote_inputs_psn/), and **[MVR](/grandma3/2-3/remote_inputs_mvr/)**.

---

## Common Procedures

The **DC Remotes**-, **MIDI Remotes**-, and **DMX Remot****es**- tabs have a number of options in common. These are explained below. For the options specific to each Remote, see the corresponding topics.

- Enabled: Toggle between **Yes** and **No** to enable the Input for the corresponding configuration line.
- Target: Set a target in the Assignment Editor.
- Fader: Sets the Fader to the corresponding target.
- Key: Sets the Key to the corresponding target.

* Trigger On / Trigger Off: These values define the range of the key reaction. If the Trigger On, for example, is set to 75 %, the Remote reacts as soon as the incoming signal exceeds this value. If the Trigger Off, for example, is set to 25 %, the Remote stops reacting as soon as the incoming signal has fallen below this value.

- In From / In To: These values define the range of the input signal reaction for the defined fader.
- Out From / Out To: These values recalculate the input signal range to match up the output signal range. The range of a fader is defined by the output signal range. If a fader, for example, should not be moved to 100 %, restrict the Out To value to 90 %.In / Out:These columns at the end of the table display the signal value of the incoming signal (In) and the resulting value for the selected fader function (Out).
- In / Out:These columns at the end of the table display the signal value of the incoming signal (In) and the resulting value for the selected fader function (Out).
- Note: Opens the note editor of the corresponding configuration line.

---

## Output Configuration Settings for Remotes

The Connector Configuration menu offers multiple options for DMX, Timecode, and Remotes. The Output Configuration options for remotes are explained here. For all other configurations, see [Connector Configuration](/grandma3/2-3/dmx_port_config/). 

- MIDI Data Mode: Select the Mode for MIDI. For more information, see [MIDI Remotes](/grandma3/2-3/remote_inputs_midi/).

  - **In**: Receiving MIDI data.
  - **Out**: Sending MIDI data.
  - **In & Out & Thru**: Outputs and transmits received MIDI data.
  - **In & Out**: MIDI data can be received and different MIDI data can be output without sending the incoming data.

- MIDI Offset: Changes the MIDI Index. For more information, see [MIDI Remotes](/grandma3/2-3/remote_inputs_midi/).

- DC Start: Set the trigger for the DC Remote. For more information, see [DC Remotes](/grandma3/2-3/remote_inputs_dc/).

- OSC Interface: These settings mirror those in the In & Out menu. For more information, see [Interfaces and IP](/grandma3/2-3/network_interface/).

- PSN Interface: These settings mirror those in the In & Out menu.

---

Examples

### Example 1

To add a new element, such as, DC Remote:

|                                            |                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                              |
|                                            | Make sure that the corresponding hardware is connected properly. For more information, see [First Steps](/grandma3/2-3/first_steps/).  |

Each step of the example is shown in the video below or in the text below.

[Vimeo video](https://player.vimeo.com/video/998092213?title=0\&byline=0\&portrait=0\&color=ffeb0f)

1. Open the In & Out menu.
2. Tap DC Remotes.
3. Tap Insert new DCRemote. A new DC remote configuration line is added.
4. To enable the Remote Input, tap Enable Input. The button turns yellow. For more information about session and station communication, see Station Control.  
5. Set the Signal of the remote, for example, 1.
6. Two finger-tap the corresponding configuration line in the Target column. The Assignment Editor opens.
7. Select the target, for example, a view. The target is selected and the editor closes.

   ![Update this description text.](/img/grandma3/2-3/popup_assignement_editor_select_v2-2-3fb582.png)

   Assignment Editor
8. To select a key function, right-click or tap and hold Key. The Select Key pop-up opens.\
   ![Update this description text.](/img/grandma3/2-3/popup_analog_remote_v2-1-385e45.png)

   Select Key pop-up
9. Trigger the DC Remote signal. The In and Out values go to 100%.



|                                            |                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                 |
|                                            | DC Remotes and DMX Remotes thresholds are defined in percent, while MIDI Remotes thresholds are defined between 1 and 127 MIDI velocity.  |

|                                            |                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                         |
|                                            | The different readout options take effect on the Trigger On/Off, In From/To, Out From/To values.  |

### Example 2

|                                                    |                                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                           |
|                                                    | grandMA3 onPC products, such as the grandMA3 command wing, can switch on and off but do not fade. For more information, see [Connect DC Remote In](/grandma3/2-3/fs_connect_dc_remote_in/) |

To add a fader remote:

1. Follow steps 1-6 from above.
2. Select a Target, e.g. **Master**.
3. Set Fader to **Master**.
4. Move the fader on the remote, the In and Out values change accordingly.

![Update this description text.](/img/grandma3/2-3/menu_dc_remotes_v2-2-6be250.png)

In & Out - DC Remotes

### Example 3

In some cases, scaling of the input and output values is needed. The range of the incoming and outgoing values can be modified.

To set In From to 20%:

1. Right-click or tap and hold In From. The calculator opens:

![](/img/grandma3/2-3/popup_calculator_in_from_v2-1-35e68a.png)

_Calculator In From_

1. Tap and hold Dec8. A dropdown opens.
2. Tap Percent. The entity has changed.
3. Press 2 0 and press Please. The In From value is entered.
4. Move the fader on the remote, the In and Out values change accordingly.

![Update this description text.](/img/grandma3/2-3/menu_inandout_v2-2-a70ca3.png)

In & Out - DC Remotes

|                                            |                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                   |
|                                            | For detailed information about the values, read the [Remote keyword](/grandma3/2-3/keyword_remote/) topic.  |

## Subtopics

- [DC Remotes](/grandma3/2-3/remote_inputs_dc/)
- [MIDI Remotes](/grandma3/2-3/remote_inputs_midi/)
- [DMX Remotes](/grandma3/2-3/remote_inputs_dmx/)
- [OSC (Open Sound Control)](/grandma3/2-3/remote_inputs_osc/)
- [PSN (PosiStageNet)](/grandma3/2-3/remote_inputs_psn/)
- [MVR-xchange](/grandma3/2-3/remote_inputs_mvr/)

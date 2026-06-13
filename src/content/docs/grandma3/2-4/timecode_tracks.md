---
title: "Tracks"
description: "A Track Group can contain multiple Tracks. The track contains one or multiple Time Ranges. The time range can contain Events. The Track can have one or multiple"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/timecode_tracks.html"
scrapedAt: "2026-06-12T21:24:58.969Z"
---
A **Track Group** can contain multiple **Tracks**. The track contains one or multiple **Time Ranges**. The time range can contain **Events**. The Track can have one or multiple **Subtracks**. Subtracks contain information about fader positions and movements.

A track should have a **Target**. The target can be one of the following objects:

- Sequence
- Sound
- Timecode
- Timecode Slot (TCSlot)
- Preset
- Group
- Master

To add a target to a track, follow these steps:

1. Edit a timecode pool object, for example, by using the swipey command. See [Pool Windows](/grandma3/2-4/wvm_pool/) for more information. The timecode editor opens.
2. Tap the arrow (![](/img/grandma3/2-4/icon_15_sequprio_low_v2_0-330785.png)) next to the track group name to expand it.
3. Edit the cell under the target column, and the assignment editor opens.
4. Select the object you want to add as a target.
5. The target is added.

## Subtracks

Subtracks contain information about fader positions and transitions.

![Example timecode show with a subtrack.](/img/grandma3/2-4/window_timecode-viewer_subtrack_v2-2-7eea49.png)

An example timecode show with a Master subtrack

Subtracks can be added by starting a recording and then moving a fader or rotating a knob. The timecode show will record a series of events containing a fader value. These points will recreate the fader movement. The events can be edited only to contain the relevant events.

Be aware that if **Auto Start** and **Auto Stop** are activated, moving the master fader to and from zero may also record cue events.

Subtracks appear as rows nested in the tracks. The rows have no settings that can be changed and appear with a black background. The name column indicates what fader type it affects. Only the events in the subtrack can be edited.

Subtracks can be deleted by pressing Delete and then tapping the subtrack.

## Sound Track

Sound pool objects can be assigned to tracks and will display the waveform in the timecode show. For more information, see [Sounds Pool](/grandma3/2-4/sound_pool/).

The left and right of the audio track are divided by a horizontal line across the waveform.

The sound assigned to a track is played back when the timecode show is played. For more information, see [Local Settings](/grandma3/2-4/local_settings/) and [Connect Sound Out](/grandma3/2-4/fs_connect_sound/).

![An example showing a timecode show with a sound track.](/img/grandma3/2-4/window_timecode-viewer_sound_v2-2-84b869.png)

A timecode show with a soundtrack

Events cannot be added to the soundtrack.

A warning icon (![](/img/grandma3/2-4/icon_15_warning_sign_v2_0-7772b2.png)) will be displayed on the left side of the track if the sound file is corrupted.

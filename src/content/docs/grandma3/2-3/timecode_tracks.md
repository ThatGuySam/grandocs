---
title: "Tracks"
description: "A Track Group can contain multiple Tracks. The track contains one or multiple Time Ranges. The time range can contain Events. The Track can have one or multiple"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/timecode_tracks.html"
scrapedAt: "2026-06-15T18:25:27.798Z"
pagefind: false
---
A **Track Group** can contain multiple **Tracks**. The track contains one or multiple **Time Ranges**. The time range can contain **Events**. The Track can have one or multiple **Subtracks**. Subtracks contain information about fader position and movement.

A track should have a **Target**. The target can be one of the following objects:

- Sequence
- Sound
- Timecode
- Timecode Slot (TCSlot)
- Preset
- Group
- Master

## Subtracks

Subtracks contain information about fader positions and transitions.

![Example timecode show with a subtrack.](/img/grandma3/2-3/window_timecode-viewer_subtrack_v2-2-4d2282.png)

An example timecode show with a Master subtrack.  

Subtracks can be added by starting a recording and then moving a fader or rotating a knob. The timecode show will record a series of events containing a fader value. These points will recreate the fader movement. The events can be edited to only contain the relevant events.

Be aware that if **Auto Start** and **Auto Stop** are activated, then moving the master fader from and to a zero value might also record cue events.

Subtracks appear as rows nested in the tracks. The row does not have any settings that can be changed and appears with a black background. The name column indicates what fader type it affects. Only the events in the subtrack can be edited.

Subtracks can be deleted by pressing Delete and then tapping the subtrack.

## Sound Track

Sound pool objects can be assigned to tracks and will display the waveform in the timecode show. For more information, see [Sounds Pool](/grandma3/2-3/sound_pool/).

The left from the right of the audio track is divided by a horizontal line across the waveform.

The sound assigned to a track is played back when playing the timecode show. For more information, see [Local Settings](/grandma3/2-3/local_settings/) and [Connect Sound Out](/grandma3/2-3/fs_connect_sound/).

![An example showing a timecode show with a sound track.](/img/grandma3/2-3/window_timecode-viewer_sound_v2-2-adb8a1.png)

A timecode show with a sound track.

Events cannot be added to the sound track.

A warning icon (![](/img/grandma3/2-3/icon_15_warning_sign_v2_0-0f0475.png)) will be displayed on the left side of the track if the sound file is corrupted.

---
title: "Sound Viewer"
description: "The grandMA3 system can receive a sound signal. This signal can be used in Phasers, and different Sound Channels can be used to give value to attributes or trig"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/sound_viewer.html"
scrapedAt: "2026-06-15T18:25:38.095Z"
pagefind: false
---
The grandMA3 system can receive a sound signal. This signal can be used in Phasers, and different **Sound Channels** can be used to give value to attributes or trigger cues.

The **Sound Viewer** displays an incoming audio signal as a raw waveform. This window also breaks down the strength of that signal into several bands of a few different widths. The **Sound Viewer** also displays calculations performed by the console to find steady beats within the signal.

**Requirement:**\
Active sound input is required in order for the console to display useful information in the **Sound Viewer**. For information about connecting an audio input to a console, see the [Connect Audio In](/grandma3/2-3/fs_connect_audio_in/) topic. The grandMA3 onPC software uses any sound input hardware designated by the operating system. 

The **Add Window** pop-up includes the **Sound Viewer** under the Tools tab. See the [Add Windows topic](/grandma3/2-3/wvm_add_window/) for more information about the Add Window pop-up.

The right corner of the **Sound Viewer** title bar includes a View Mode button. Tap this button to cycle through available display mode options, or tap and swipe to open a pop-up menu containing all of the available display mode options for the **Sound Viewer**.

On the grandMA3 onPC, there is another button in the title bar called Audio In Device. This is a list of available sound devices on the computer that can be used as sound input devices. The used input can be selected here or in the onPC settings.

These settings define different settings specifically for the onPC. Learn more in the [onPC Settings topic](/grandma3/2-3/onpc_onpc_settings/#h3_1554795451).

---

## Wave View Mode

![](/img/grandma3/2-3/window_sound_wave-display_v1-9-a39cec.png)

Sound window in Wave view mode

The left side of the window includes a simple VU meter, which is shown as a vertical bar.

The main area of the window shows the raw waveform of the incoming audio signal.

The right side of the window includes quick access to the **Sound In** master. Adjusting the **Sound In** master changes the volume of the input signal. This change is immediately visible in both the VU meter and the waveform. For more information about the **Sound In** master, see the [Grand Masters](/grandma3/2-3/masters_grand/) topic.

---

## Sound View Mode

![](/img/grandma3/2-3/window_sound_sound-display_v1-9-7b2fde.png)

Sound window in Sound view mode

The **Sound** view mode of the **Soun****d Viewer** displays the incoming audio signal as a series of bars representing the volume of different bands of frequencies. When a given bar reaches a peak, a dot appears above the bar. This dot represents a possible sound trigger based on that frequency band.

The eleven bars shown in the window break down the frequencies of the audio signal in three different ways, displaying all three breakdowns simultaneously. The first bar represents the volume of the whole signal. The next three bars divide the signal into **Bass**, **Mid**, and **High** frequencies. And the remaining seven bars divide the frequencies equally into narrower bands.

These eleven bars relate directly to the first eleven **Sound Channels** and inversely to the remaining **Sound Channels**. Available **Sound Channels** include:

1. **All**
2. **Bass**
3. **Mid**
4. **High**
5. **Band1**
6. **Band2**
7. **Band3**
8. **Band4**
9. **Band5**
10. **Band6**
11. **Band7**
12. **InvAll**
13. **InvBass**
14. **InvMid**
15. **InvHigh**
16. **InvBand1**
17. **InvBand2**
18. **InvBand3**
19. **InvBand4**
20. **InvBand5**
21. **InvBand6**
22. **InvBand7**

Set the value of any parameter to follow one of the **Sound Channels** in the command line using the [SoundChannel](/grandma3/2-3/keyword_soundchannel/) keyword or the Sound Codes tab of the [Calculator.](/grandma3/2-3/ws_calculator/#sound_codes_calculator)

The right side of the window includes quick access to the **Sound Fade** master. Adjusting the **Sound Fade** master changes the fall-off speed of all of the channels. While a lower number results in more accurate tracking of quickly changing dynamics, the response may appear undesirably erratic. A higher value results in a smoother response. For more information about the **Sound Fade** master, see the [Grand Masters](/grandma3/2-3/masters_grand/) topic.

---

## Beat View Mode

![](/img/grandma3/2-3/window_sound_beat-display_v1-9-2286e8.png)

Sound window in Beat view mode

The **Beat** view mode of the **Sound Viewer** displays the incoming audio signal after some additional processing. This processing looks for repeating beats. The processed signal appears as a series of hills and valleys. Deeper valleys form where louder pulses in the incoming signal line up more consistently over time.

Dim, yellow, vertical lines appear in the valleys with the most consistent repeated pulses. These lines represent beat candidates, which the **BPM** speed master can follow.

A bold, yellow, vertical line appears when the **BPM** master locks onto a beat. The **BPM** master adjusts automatically to follow any changes detected in the incoming signal.

The right side of the window includes quick access to the **BPM** speed master fader. For more information about the **BPM** speed master, see the [Speed Masters](/grandma3/2-3/masters_speed/) topic.

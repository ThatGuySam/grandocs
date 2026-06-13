---
title: "Use external input triggers"
description: "The remote inputs are external inputs that you can connect and use to trigger events in the dot2 console. There's currently three different input types that you"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_useexternalinput.html"
scrapedAt: "2026-06-12T21:29:37.229Z"
---
The remote inputs are external inputs that you can connect and use to trigger events in the dot2 console. There's currently three different input types that you can use: Analog (contact closure), MIDI and DMX.

You can setup the remote inputs by pressing the Setup key and then the Remote Input button. This gives you the [Remote Inputs Configuration view](/dot2/key_window_remote/).

On the left side you can see the three different input types and you can see if they are enabled (green checkmark) or disabled (red stop sign). You can change this by using the left encoder to select the input type you want and then tap the encoder. This will toggle the current status. You can also toggle this by tapping the input type. For each input type there's also a small gray box. This will flash green when there's an active input.

On the right side of each of the inputs you can choose what should happen when the input is triggered.

This table have 6 columns.

![](/img/dot2/dot2_ht_useexternalinput_01_1-2-2722d7.png)

_Figure 1: Remote Input table columns._

The first column is the remote input number. This changes name depending on the selected input.

**Type** can be three different things:

- **None** - If the type is None then the remote input isn't used. 
- **Exec** - If you choose Executor then your remote input will trigger some executor. 
- **CMD** - If you choose Command then you can write a command the trigger should execute.

The four other columns become relevant depending on the type you have selected.

If you have chosen **Exec**, then you get access to the **Page**, **Executor** and **Function** columns. You need to specify a specific page number or select "Current" in the **Page** column, then select the **Executor** number of the executor you want to trigger. The **Function** column allows you to select one of three different things: **Button 2**, **Fader** and **Button 1** - if you choose an executor that only have one key, then you can only select **Button 1**. Depending on the input type then your keys and faders react different in the input. But this is basically the physical keys and faders for the selected executor.

If you have chosen **CMD** type, then you can access the **CMD** column. Here you can type a command you want the trigger to execute. Have a look at the [Commands](/dot2/key_commands_overview/) section of this manual to learn more about the commands.

The following is a description of the three different input types.

## Analog Input

To use the analog input trigger, connect a third-party device with a D-sub 15 connector with connected keys. You can have 12 contact closure switches that send between 5 and 15 volts into one of the pins on the d-sub 15. One of the pins supply 5 volts so you don't need an external power supply as long as you don't use cables that are too long. 

The analog triggers are on/off only. They don't support variable input. 

This is the pinout of the d-sub:

- Pin 1 = Analog input 1
- Pin 2 = Analog input 3
- Pin 3 = Analog input 5
- Pin 4 = Analog input 7
- Pin 5 = Analog input 9
- Pin 6 = Analog input 11
- Pin 7 = + 3.3 volts
- Pin 8 = Common Ground
- Pin 9 = Analog input 2
- Pin 10 = Analog input 4
- Pin 11 = Analog input 6
- Pin 12 = Analog input 8
- Pin 13 = Analog input 10
- Pin 14 = Analog input 12
- Pin 15 = Not used

## MIDI Input

The MIDI input reacts to MIDI notes received. You can assign a trigger to note 0 to 127 - so there are 128 different MIDI triggers. The triggers react to the velocity information. This means that a fader can be position according to the received velocity. Executor buttons also react to MIDI "On" and "Off" commands.

## DMX Input

The DMX input reacts to the DMX input connector as well as the network protocols Art-Net input and sACN input on the dot2. All three inputs use the internal DMX universe 9. The DMX remote input can use all the 512 DMX channels. Executor buttons and commands are executed if the DMX input is in the 128 to 255 range. It also supports variable input so you can control the position of the executor fader - it then reacts to the 1 to 255 range. The activity indicator only lights up if the input is triggering something. So if you only have Executor buttons and commands, then the input value needs to be 127 and above before the indicator is active. For executor faders it'll activate when the input is above 0.

**Important:**\
-Incoming DMX values are displayed in the DMX view in universe 9.\
-If DMX values are sent to a single DMX channel from several inputs simultaneously, Art-Net and sACN for instance, subsequently the higher value (HTP) will be applied.

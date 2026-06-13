---
title: "Local settings"
description: "The local settings are located in the Setup I Console I Local Settings."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_local_settings.html"
scrapedAt: "2026-06-12T21:28:28.885Z"
---
The local settings are located in the **Setup I Console I Local Settings**.

![](/img/grandma2/menu_setup_local-settings_v3-3-484e4b.png)

_Edit local settings_

---

## Default Language

It is not possible to change this setting, as the console, at the moment, only supports English language. 

---

## Network DMX if alone

When this is "On", the console will output DMX over network when only one desk (as master) is in the session.

**Important**\
This setting can conflict with other console (as master), sending out DMX in the network.

---

## Example

In the following example, 3 consoles are in a session, connected with one switch to manage MANet on the first ethernet port, and another one to manage Art-Net on ethernet port 2. All the consoles have **Network DMX if alone** enabled.

If the switch that distribute MANet fails, all 3 consoles will be "Alone" in the network, become Master and will send out Art-Net. This will make a conflict in the fixtures because they will receive Art-Net from 3 different sources. To avoid this conflict, make sure that only one of the consoles have **Network DMX if alone** enabled. This will make sure that when the consoles are "Alone" in the network, only the console with **Network DMX if alone** will send out Art-Net.

---

## Show release notes on start

Turn **Show Release Notes on Start** "On" or "Off", to see the release notes on startup.

---

## Flashing error LED on wrong fader position

Turn **Flashing error LED on wrong fader position** "On" or "Off" to let a red LED flash, if the fader is in a wrong position.

**Important:**\
This function is only available on a grandMA2 ultra-light and a grandMA2 onPC with a wing. On a grandMA2 ultra-light it relates the red LEDs under the faders. In the grandaMA2 onPC it relates the LEDs in the keys over the faders.

---

## Exec CLI

Turn **Exec CLI** ​(Command Line Interaction) "On" or "Off" to let the Command Line interact with the executors.

In the following  example **Exce CLI** is "Off".

If Select is pressed, followed by an **Executor button**, this will NOT select the executor, but perform the action assigned to the button.

---

## Default Go, Goback, Pause CLI

Turn **Default Go, Goback, Pause CLI** "On" or "Off" to let the Command Line interact with the big Default Go, Goback and Pause keys.

In the following  example **Default Go, Goback, Pause CLI** is "Off".

If a macro is edited and Default Go is pressed, the system will NOT enter DefaultGo in the macro-line, but execute the next cue in the selected executor.

---

## Intensity Btn Background

The background light of the keys on the console can be set. Follow these steps:

1. Tap the green square in the **Intensity Btn Background** area.
2. Tap the intensity as a number between 0 and 79. 0 is no light and 79 is full.  

---

## Intensity Btn Highlight

The highlight light of the keys on the console can be set. Follow these steps:

1. Tap the green square in the **Intensity Btn Highlight** area.
2. Tap the intensity as a number between 0 and 255. 0 is no light and 255 is full.  

---

## Intensity Exec LED

The background light of the executors on the console can be set. Follow these steps:

1. Tap the green square in the **Intensity Exec LED** area.
2. Tap the intensity as a number between 0 and 255. 0 is no light and 255 is full.  

---

## Intensity Desk Lamp

The desklight on the console can be set. Follow these steps:

1. Tap the green square in the **Intensity Desk Lamp** area.
2. Tap the intensity as a number between 0 and 255. 0 is no light and 255 is full.  

---

## Intensity 9 Inches

The backlight of the screens on the console can be set. Follow these steps to set the backlight of the 9-inch screens:

1. Tap the green square in the **Intensity 9-inch** area.
2. Tap the intensity as a number between 0 and 255. 0 is dark and 255 is bright.  

---

## Intensity 15 Inches

The backlight of the screens on the console can be set. Follow these steps to set the backlight of the 15-inch screens:

1. Tap the green square in the **Intensity 15-inch** area.
2. Tap the intensity as a number between 0 and 255. 0 is dark and 255 is bright.  

**Important:**\
The **Intensity** functions are not available on a grandMA2 onPC. 

---

## Desklock background

It is possible to lock the console, so no faders and keys can be used, by pressing **Pause** on the keyboard or press and hold MA and press Fix. **Desk Locked** appears on the screen**.** To unlock the console, press **Pause **or press and hold MA and press Fix again. The background of the desklock screen can be set to either **Black**, **Image Pool Picture** or **Current Desk UI**

- **Black** will let the background be black.
- **Image Pool Picture** opens the Image Pool for the current show file, to select one of these to be the background.
- **Current Desk UI** leaves the screens as they are, but places a red Desk Locked sign above the content.

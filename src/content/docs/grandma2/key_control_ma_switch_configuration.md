---
title: "Work with the switch configuration"
description: "The configuration is the customized set of parameters that you have selected to run the switch."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_configuration.html"
scrapedAt: "2026-06-12T21:28:27.894Z"
---
The configuration is the customized set of parameters that you have selected to run the switch.

You can get the current switch configuration or upload a previous exported switch configuration.

**Requirements:**

- [Added MA Network Switch to the network configuration](/grandma2/key_control_ma_switch_add/)
- grandMA2 console and MA Network Switch needs to be in the same subnet

## []()Get switch configuration

To get the switch configuration for later import is useful, if the same configuration must be used in multiple switches.

1. Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.
2. The MA Network Configuration window opens.Tap at Network Switch.

   ![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

   _MA Network Configuration - Network Switch_
3. Tap Configuration.\
   The **Network Switch Configuration pop-up** opens.

   ![](/img/grandma2/popup_network-switch-configuration_v3_2-b80eec.png)

   _Network Switch Configuration pop-up_
4. Tap Get Configuration.\
   The Save Configuration pop-up opens.

   ![](/img/grandma2/popup_save-configuration_v3_2-f06bc4.png)

   _Save Configuration pop-up_
5. Select drive and folder and type the file name in the green edit line. Tap at the **plus **![](/img/grandma2/icon_plus_small_v3-2-ae05d9.png) to open the virtual keyboard.
6. Tap Save.

The MA Network Switch configuration is saved on the selected drive. If you are using a grandMA2 onPC the MA Network Switch configuration is in the hidden folder C:\ProgramData\MA Lighting Technologies\grandma\gma2\_V\_3.1\\.

**Important:**\
The configuration file uploaded via the onPC does not affect the IP address. The configuration file uploaded via the web interface, however, does affect the IP address. 

---

## Send Configuration

**Important:**\
The configuration file has to be written in a JSON (JavaScript Object Notation) data format. If the configuration is not in a JSON data format, the switch can not read the configuration file.

**Hint:**\
If you are not sure how to write the configuration file, [get the current switch configuration](<#Get switch configuration>) and modify this file.

**Important:**\
If you upload only parts of switch configuration, e.g. only the filters, it is necessary that the entire filters configuration part is included in the configuration file. If parts are missing in the configuration file, the configuration upload does not work.

1. Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.
2. The MA Network Configuration window opens.Tap at Network Switch.
3. Tap Configuration.\
   The **Network Switch Configuration pop-up** opens.
4. Tap Send Configuration.\
   The Load Configuration pop-up opens.\
   \
   If you are using a grandMA2 onPC the MA Network Switch configuration is in the hidden folder C:\ProgramData\MA Lighting Technologies\grandma\gma2\_V\_3.1\\.

   ![](/img/grandma2/popup_load-configuration_v3_2-3360ff.png)

   _Load Configuration pop-up_
5. Select the MA Network Switch configuration .json file for upload.
6. Tap Open.

The switch configuration is uploading. The update process can take about 60 seconds.

The switch configuration is uploaded and saved in the startup configuration.

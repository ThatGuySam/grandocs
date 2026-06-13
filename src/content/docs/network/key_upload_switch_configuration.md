---
title: "Upload Switch Configuration"
description: "You can upload a previous exported switch configuration, or parts of switch configuration."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_upload_switch_configuration.html"
scrapedAt: "2026-06-12T21:30:28.485Z"
---
You can upload a previous exported switch configuration, or parts of switch configuration.\
This is useful if you have to configure several switches with the same configuration.

![](/img/network/getconfig_3_1-f3e8b1.png)\
_Figure 1: Switch Configuration_

**Important:**\
The configuration file uploaded via the onPC does not affect the IP address. The configuration file uploaded via the web interface, however, does affect the IP address. 

**Important:**\
The configuration file has to be written in a JSON (JavaScript Object Notation) data format. If it is not in a JSON data format, the switch can not read the configuration file.

**Hint:**\
If you are not sure how to write the configuration file, [get the current switch configuration](/network/key_get_switch_configuration/) and modify this file.

**Important:**\
If you upload only parts of switch configuration, e.g. only the filters, it is necessary that the entire filters configuration part is included in the configuration file. If parts are missing in the configuration file, the configuration upload does not work.

**Requirement:** [Connection to the web interface](/network/key_access_web_interface/).

1. Click **Tools /** **Edit General Settings**.
2. Click **Switch configuration**.
3. Click **Browse**.\
   The explorer opens.
4. Select the switch configuration for upload.
5. Click **Upload and apply custom configuration**.\
   A warning asks if you really want to apply the configuration.
6. Click **OK**.\
   The switch configuration is uploading. The update screen opens.\
   \
   ![](/img/network/update-firmware-progress_v3_1-8a212c.png)\
   _Figure 2: Update Screen_\
   \
   The update process can take about 60 seconds.
7. Follow the screen instructions and click **Reload**.

The switch configuration is uploaded and saved in the startup configuration.

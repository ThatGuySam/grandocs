---
title: "Configure the MA xPort Nodes in a browser"
description: "Besides configuring nodes on the console, it is also possible to configure MA xPort Nodes in a browser."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_xport_node_configure_in_browser.html"
scrapedAt: "2026-06-12T21:28:28.483Z"
---
Besides configuring nodes on the console, it is also possible to configure MA xPort Nodes in a browser. 

**Important:**\
This topic treats subject areas that are important for the configuration of nodes in a browser. General settings are treated in the topics [Adding devices to your session](/grandma2/key_network_session_add_device/)​ and [Configure the DMX ports on MA devices](/grandma2/key_network_dmx_configure_ports/).  

**Requirement:**

- Connect the MA xPort Node directly to your PC using a network cable. Or connect the xPort Node with a network cable via an MA Network Switch or a network hub.
- Change the IP address of your PC to the same IP address space of the node (the last block of the IP address has to differ from the node). 

**Important:**\
The IP address of the node is located on its display.

1.  Type the IP address of the node into the address bar of the browser. 
2. The status window opens.

![](/img/grandma2/img_configure-nodes-in-browser_status-window_v3-3-c69ae7.png)

_Status window – Configuration of nodes in browser_

**Hint:**\
Also, see the status of the node on its display.

3. To light up the display of the node, **click Identify** – located below the status table – **once**.\
   The browser page turns green.\
   To turn off the illumination of the display, **click Identify once again** and the background of the browser page turns black again.
4. Next, log in:\
   -Click **Please log in** below the button **Identify **or click the button with the arrow pointing right below the button **Status**.
5. The login form opens. 

![](/img/grandma2/img_login-form_configure-nodes-in-browser_v3-3-3a4039.png)

_Login form – Configuration of nodes in browser_

6. Type **admin** into the password input mask and then click **Please**. 

**Hint:**\
To return to the status window, click the button **Status** on the left. 

7. If you have successfully logged in, a window opens showing the login credentials. 

![](/img/grandma2/img_confirmation-window_configure-nodes-in-browser_v3-3-6fdf05.png)

_Successful login – Configuration of nodes in browser_

8. If you would like to leave this window, click **Logout** now. 
9. To proceed, click **Configuration**.\
   The window **Node - Configuration** opens.

![](/img/grandma2/img_node-configuration_configure-nodes-in-browser_v3-3-d9ccea.png)

_Node Configuration_

10. Adjust the settings:\
    -Enter the name of the node, the two IP addresses and the ID of the session in the corresponding input fields.\
    -Select the mode and light mode in the corresponding drop-down menus.\
    -Check the checkbox **DHCP**.\
    For more information on DHCP see [Using DHCP in MA devices](/grandma2/key_network_dhcp/).
11.  Adjust the ports in **XLR A**, **XLR B**, **XLR C**, and **XLR D**:\
    -Select the port in the drop-down menu **Port Dir.**\
    For more information on the port and merge modes see [Configure the DMX ports on MA devices – Port Mode](/grandma2/key_network_dmx_configure_ports/#port_modes) and [Configure the DMX ports on MA devices – Merge Mode](/grandma2/key_network_dmx_configure_ports/#merge_modes).\
    -Enter the number of the universe.\
    -Then, select the merge mode in the drop-down menu **Merge Mode**.\
    -Select the DMX fail mode in the corresponding drop-down menu.\
    -And enter the timeout outfade time if necessary.
12. To apply the settings you have made, click **Please**.\
    Your settings have now been applied. 
13. If you would like to reset the settings that have not been applied yet, click **Clear**. 
14. You can now log out:\
    -Click the button with the arrow pointing to the left below the button **Configuration**.\
    Then, click **Logout** in the box. 

You have successfully logged out.

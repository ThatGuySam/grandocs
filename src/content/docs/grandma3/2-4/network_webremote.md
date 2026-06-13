---
title: "Web Remote"
description: "The stations can be remotely controlled by any modern browser connected to the system. This includes Wi-Fi-connected devices."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/network_webremote.html"
scrapedAt: "2026-06-12T21:24:45.600Z"
---
The stations can be remotely controlled by any modern browser connected to the system. This includes Wi-Fi-connected devices.

A maximum of five devices can connect to a single station simultaneously.

Each remote device connects to a specific station. The remote browser shows the same controls and encoder view at the bottom of the display as the grandMA3 Compact, grandMA3 Compact XT, and grandMA3 onPC display 1. The user-definable area is the same as screen 1 on any console or onPC. The web remote will try to log in as the user **Remote** when connecting, and the view and windows on screen 1 follow the logged-in user's screen configuration. The web remote can log in as a different user than the one currently logged in on the connected station. Learn more about multiuser setups in the [Single User and Multi User Systems section](/grandma3/2-4/user/).

|                                                    |                                                                  |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                 |
|                                                    | Admin, Guest, and 3D users cannot log in to web remote devices.  |

Any window or view that can be created on a console or onPC can be used in the remote. The system will try to provide a high refresh rate of the content, but it is affected by the connection speed and the resolution.

## Connect with a Web Remote

Web remotes need to be enabled in the station. This can be done in the **Network Menu** - see the [Session topic](/grandma3/2-4/network_session/) to learn how to access this menu.

The network menu and [Station Control](/grandma3/2-4/network_station_control/) have a toggle button that turns the web remote On or Off.

The same setting is mirrored in the actual **Web Remote** menu, which can be accessed by tapping Web Remote on the left side of the network menu.

![The image shows the Web Remote menu with a single connection.](/img/grandma3/2-4/menu_web-remote_v2-4-a8dac3.png)

Web Remote menu with one connection

1. Make sure web remote is turned On in the station.
2. Open a browser on a network-connected device.
3. Type the IP address of the station and include :8080 after the address to specify the port number or use a phone/tablet to scan the QR code with the link address.\
   The result should be a browser window with a grandMA3 display.

Now, there is access to remote control of the station with the user rights provided by the logged-in user.

Each network interface on the station displays a QR code, which can be scanned to open the same browser page as described above. If the interface does not have a link, then the QR code is shown in red.

A special pop-up can be displayed using the following command:

Menu "WebremoteView"

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22WebremoteView%22)

This pop-up shows the QR codes.

A new show file has a user called **Remote**. This uses the default user profile but with a different screen configuration. Remote is also a keyword, so if it is desired to log in as this user, type the following in the command line:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LogIn "Remote" |

|                                            |                                                                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                        |
|                                            | Putting the user name in quotation marks is essential for the software to treat it as a name, not as a keyword.  |

It is possible to log in as a specific user, including a user password directly in the URL typed in the browser. This is the format:

http\://\[IP]:8080/?user=\[User name]\&password=\[password]

For example, 

http\://127.0.0.1:8080/?user=McClane\&password=YippeeKiYay

---

The Web Remote menu shows the connected devices. It is just information about the IP address, operating system, and browser.

Three different settings can be changed in the menu.

The remote connection can be turned On or Off.

A **Resolution Limit** can be set. There are options to limit it to 480p, 720p, 1080p, 1440p, 4K, or unlimited. This limit is the same for every device that connects.

Different hardware has different resolution limitations. The limitation is the maximum resolution the device can transmit.

- grandMA3 consoles and grandMA3 replay unit: 1440p
- grandMA3 command wing XT: 4K
- grandMA3 onPC: Unlimited

If a device with a lower resolution connects, the transmitted resolution is adapted to the receiving device's resolution.

**Connection Limit** can be used to set a number between 1 and 5. This is the maximum amount of simultaneous connections allowed on the grandMA3 onPC. A grandMA3 console or grandMA3 replay unit supports up to 2 connections.

---

## Linked Command Lines

A button on the connected remote device is next to the host command line input.

![](/img/grandma3/2-4/img_command-line-input_link-command-line_v1-5-08b502.png)

This can be activated to link the remote command line input to the host command line input.

Linked command lines change the background color on both the remote and the host station. It could look like this:

![](/img/grandma3/2-4/img_command-line-input_linked-command-line_example_v1-5-019d7b.png)

Linked command line example

Notice that the command input in the image above is not a valid command. It is just an example.

Any command input on any linked command line is immediately shown on all the linked command lines where the users are logged in with the same user profile. Any commands are executed at the host station.

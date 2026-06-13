---
title: "Screen Configuration"
description: "Screen Configurations contain information about which windows are visible in the different User-Defined Areas and the size of the user-defined areas. The screen"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/user_screen_config.html"
scrapedAt: "2026-06-12T21:24:46.497Z"
---
**Screen Configurations** contain information about which windows are visible in the different User-Defined Areas and the size of the user-defined areas. The screen configuration also contains information about what is assigned to the View Buttons.

The User-Defined Areas are the areas on screens 1 through 7 where windows can be added and arranged to be stored and recalled as views. Learn more about this in the [User-Defined Area topic](/grandma3/2-4/ws_ui_user_defined_area/).

The view buttons can be used to store and recall views and clear the screen. They can also have other objects than views assigned. Learn more about View Buttons in the [View Bar and View Button topic](/grandma3/2-4/ws_ui_view_bar_and_buttons/).

The screen configurations do not have a pool of objects to interact with. They are part of the user profile, which means that each user profile has its own set of screen configurations.

Each user has one of the screen configurations assigned. The current configuration can be changed in the [User Settings](/grandma3/2-4/user_settings/).

Screen configurations can be assigned to Executors and View Buttons. This makes it possible to change the current user's assigned screen configuration quickly. Screen configurations can also be called using the [ScreenConfiguration keyword](/grandma3/2-4/keyword_screenconfiguration/). Follow the link to the keyword to see examples of creating, calling, and assigning screen configurations.

The screen configurations can be used to have different sets of views on the screens and different View Button setups.

## Examples of Use

### Example 1 - Operator with Main and Backup Console:

A single operator has two consoles.

If the operator has one User with a User Profile, then both consoles would be logged in with this User, and the consoles would have the same programmer content and the same views on the screens.

Instead of having a mirrored console, the operator could expand the workspace and actively use the backup console to show other views. In this case, the operator creates a second User, "MyBackupConsole". This user has the same User Profile but has a different Screen Configuration. The backup console then uses this new User.

Now, the backup console still has the same programmer content but can show different views than the main console. The operator can now actively use both consoles and still have the backup function in case of failure.

### Example 2 - Operator with a Console and a 3D Computer:

A single operator has one console and a computer with powerful graphic capabilities.

The desire is to use the computer as a 3D visualizer that the operator can use to show the playback state and to see blind programmer content.

The blind function hides programmer values from the output. This can be used to program elements without it being shown in the output. Learn more in the [What is the Programmer topic](/grandma3/2-4/operate_programmer/#h2__952389555).

To be able to follow the operator into blind, the onPC in the computer needs to log in as a User with the same User Profile as the operator, but to avoid it showing the same views as the console, it can be a User with a different Screen Configuration. Now, the onPC can show a single big 3D Viewer window, and the operator can freely use the console.

The 3D Viewer shows a virtual 3D space with the stage setup. Learn more in the [3D Viewer topic](/grandma3/2-4/patch_3d_viewer/).

### Example 3 - Operator on a Console and Designer with a Web Remote:

An operator is using a console to program a show. The lighting designer wants to see some information about the sequence and fixture values.

One way to accomplish this is by allowing the designer to connect their laptop to the lighting network using WiFi.

The designer can open a browser window and log in on the console using their own User with their own Screen Configuration. The designer User has limited rights but uses the same User Profile as the operator to see programmer content and to be able to manipulate some attribute values.

If the operator needs to help the designer set up the windows or change a setting, then the operator can change to the same Screen Configuration, make the changes, and then change back to their own Screen Configuration.

## Create a New Screen Configuration

The examples in the [ScreenConfiguration keyword](/grandma3/2-4/keyword_screenconfiguration/) include an example of creating a new Screen Configuration using the command line.

It is also possible to create a new screen configuration when editing the **ScreenConfig** setting in the [User Settings](/grandma3/2-4/user_settings/). Edit the setting and tap New. This does not give access to label the screen configuration. This still needs to be done using the command line.

## Copy a Screen Configuration

The examples in the keyword topic (link above) show how to create a new Screen Configuration, but it could also be relevant to copy an existing screen configuration.

This can be done using the following syntax:

Copy ScreenConfiguration \["ScreenConfiguration\_Name" or ScreenConfiguration\_Number] At ScreenConfiguration \["ScreenConfiguration\_Name" or ScreenConfiguration\_Number]

The copy operation can be used to create a new screen configuration or copy into an existing one.

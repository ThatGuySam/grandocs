---
title: "Camera Pool"
description: "The cameras are used in the 3D viewer to see the fixtures in the 3D virtual stage."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_3d_camera.html"
scrapedAt: "2026-06-12T21:24:47.438Z"
---
The cameras are used in the [3D viewer](/grandma3/2-4/patch_3d_viewer/) to see the fixtures in the 3D virtual stage.

Multiple cameras can be arranged to see fixtures and 3D objects from different angles and with different camera settings.

The cameras are all in the **Camera Pool**.

![](/img/grandma3/2-4/window_cameras-pool_v2-2-e237e5.png)

_Camera pool with some cameras and a selected camera_

There are some default cameras in the pool in a new show. Most of these can be edited, but the "Auto" camera is locked.

The "Auto" camera is a special camera that automatically zooms and pans to keep the selected fixtures in the center of the 3D window. When no fixtures are selected, it shows the entire stage.

A camera can be selected by tapping it in the pool or using the command line. For example, selecting camera number 3 can be done with this command:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Select Camera 3 |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Select%20Camera%202)

The selected camera has a yellow frame.

Editing an empty pool object creates a new camera that copies the currently selected camera.

 

Editing an existing camera object opens the **Edit Camera** pop-up:

![](/img/grandma3/2-4/popup_edit-camera_v2-2-25fd62.png)

_Edit Camera pop-up for the front camera._

This pop-up contains all the values needed for the camera.

Changing the values here changes the camera.

- **Name:**\
  This input box can be used to change the name of the camera.
- **Scribble**:\
  A scribble can be assigned to the camera pool object.
- **Appearance**:\
  An appearance can be assigned to the camera pool object.
- **Tags**:\
  Tags can be assigned to cameras.
- **Note**:\
  A note can be added to the camera.
- **Camera Mode**:\
  The cameras can have a 3D perspective or a flat 2D projection. Editing this field allows selecting one of the predefined 2D camera angles. Selecting a 2D camera disables some of the other values in this pop-up.\
  The 3D camera mode gives access to all values in this pop-up.
- **FOV** (Field Of View):\
  The Field of view or Field of vision describes how wide or narrow the camera looks at the 3D stage.
- **Roll**:\
  The roll value can be used to roll the camera. The value specifies the degree to which the camera will be rolled. A positive value rolls the camera clockwise. A negative value rolls the camera counterclockwise. The default value is "0", which makes the camera horizontal.
- **Zoom**:\
  The zoom value is very useful with 2D cameras. The zoom value goes from 0.01 to 1. It goes from narrow to wide.
- **Pos X:**\
  This is the camera position on the X-axis.
- **Pos Y:**\
  The camera's position on the Y-axis.
- **Pos Z:**\
  The camera's position on the Z-axis.
- **Pan:**\
  This value pans the camera. Positive values turn the camera clockwise.
- **Tilt:**\
  This tilts the camera up and down. A positive value points the camera down.

Moving the camera and changing the pan and tilt values directly in the 3D window might be easier. There are nice tools for manipulating the camera. Read more about this in the [3D window](/grandma3/2-4/patch_3d_viewer/) topic.

The values are applied to the camera when Reload Camera is tapped.

Close the pop-up by tapping the ![](/img/grandma3/2-4/icon_cross_15px-9b559c.png) in the upper right corner of the pop-up.

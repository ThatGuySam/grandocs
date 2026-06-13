---
title: "Link Models to Geometries"
description: "To correctly display the models in the 3D Viewer, the next thing to do is to link models to geometries."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ft_link_models_geometries.html"
scrapedAt: "2026-06-12T21:25:12.107Z"
---
To correctly display the models in the 3D Viewer, the next thing to do is to link models to geometries.

**Requirement:**

- [Insert Geometries](/grandma3/2-4/ft_insert_geometries/) and [Insert Models](/grandma3/2-4/ft_insert_models/).

1. Tap the tab Geometries.
2. To link the model Base to geometries, tap, and hold the cell in the column Model.

- Pop-up Select Model opens. 
- Select Base.

3. Set the offset of position in single geometries.

- In Base, leave the default value of Pos Z.
- In Yoke, set Pos Z to -0.265 m.
- In Head, set Pos Z to -0.100 m.
- In Beam, set Pos Z to -0.150 m. 

|                                            |                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                               |
|                                            | The offset of the position depends on the measurements of the models.   |

|                                            |                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                            |
|                                            | These cells can also be edited using the [Geometry Viewer](/grandma3/2-4/ft_link_models_geometries/#h2__139560060).  |

![Update this description text.](/img/grandma3/2-4/window_link-20models-20to-20geometry_01_v3-2-1-4b93cc.png)

Set the offset of Pos Z

This is the result in the 3D window.

![](/img/grandma3/2-4/img_fixture_type_wireframe-a0f063.png)

Basic moving head displayed in wireframe in the 3D window

|                                            |                                                                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                        |
|                                            | To display the basic moving head in wireframe in the 3D window, see [3D](/grandma3/2-4/patch_3d_viewer/) topic.  |

![](/img/grandma3/2-4/img_fixture_type_render-e03b1d.png)

Basic moving head rendered in the 3D window

---

## Geometry Viewer

The geometry viewer on the right side of the window displays a real time 3D visualization of the selected geometry tree.

It allows you to view and to edit the geometries of the fixtures.

|                                            |                                                                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                    |
|                                            | To display the geometries in the geometry viewer, add meshes in the models tab first. See [Insert Models](/grandma3/2-4/ft_insert_models/).  |

To edit the geometries:

1. Tap on the part of the fixture you want to edit or select a geometry in the table.\
   This part is now selected and is displayed with a yellow color in the 3D area.
2. Tap and hold one of the colored indicators to move, scale or rotate the geometries.\
   The corresponding cells change accordingly.

![Update this description text.](/img/grandma3/2-4/window_link-20models-20to-20geometry_04_v3-2-1-6ab5d1.png)

Geometry Editor with the selected geometry Base in rotation mode and camera focus enabled

![](/img/grandma3/2-4/icon_camera-15_v0-1-8895af.png) (Camera focus):\
If this button is enabled, the selected geometry is displayed in the center of the 3D area.\
If this button is disabled, the center of the whole fixture is pinned to the center of the 3D area.

![](/img/grandma3/2-4/icon_globe_15_v1-7-048d78.png) (World model transformation):\
If this button is enabled, the axis follows the world.\
If this button is disabled, the axis follows the selected geometry.

![](/img/grandma3/2-4/icon_move-15_v0-1-644ef1.png) (Translation mode):\
Lets you move the selected geometry.\
Tap and hold the arrow of the selected axis and move it. When the geometry is in the desired position, release your finger.

![](/img/grandma3/2-4/icon_rotate-15_v0-1-95b64e.png) (Rotation mode):\
Lets you rotate the selected geometry.\
Tap and hold one of the colored rings and move it. When the geometry is in the desired position, release your finger.\
While you rotate the geometry along its own axis, the degree value of the rotation is displayed in the top left corner of the 3D area. Additionally, a colored disc shows a visual representation of the angle by which the geometry is rotated.

![](/img/grandma3/2-4/icon_resize_15_v1_5-aacfe0.png) (Scale mode):\
Lets you scale the selected geometry.\
Tap and hold one of the axis indicators and move it. When the geometry has the desired size, release your finger.\
To scale all three axes at the same time, tap and move the block in the center of the axis indicators.

|                                            |                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                  |
|                                            | Scaling the geometries changes the values for length, width, and hight in the Models tab.  |

|                                            |                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                     |
|                                            | If you scale a geometry whose model is also linked to other geometries, those geometries are scaled as well.  |

The last step of building a basic moving head, is inserting DMX modes and channels and linking them to specific geometries: [Insert DMX Modes](/grandma3/2-4/ft_insert_dmx/).

This is important for fully and accurately managing your fixture type.

####

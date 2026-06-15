---
title: "Plugins"
description: "Plugins are pieces of Lua code that can add features or functionality to the grandMA3."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/plugins.html"
scrapedAt: "2026-06-15T18:25:28.547Z"
pagefind: false
---
Plugins are pieces of Lua code that can add features or functionality to the grandMA3.

With plugins, it is possible to do more than what can be achieved with macros.

|                                                  |                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                                |
|                                                  | The creation and use of plugins can go deeper into the system than the "normal" usage of a console. Therefore, the technical support team of MA Lighting may not be able to help you in all circumstances when using complex plugins, and plugins might have to be rewritten when migrating show files to future grandMA3 software versions.  |

The plugins are stored in the Plugins Pool.

![](/img/grandma3/2-3/window_plugin_pool_v2-2-a39d9a.png)

Plugin pool window

The pool can be created like any other using the [Add Window pop-up](/grandma3/2-3/wvm_add_window/).

## Create a New Plugin

To create or add a plugin to the plugin pool, edit an empty pool object using any edit method.

The **Edit UserPlugin** pop-up opens:

![](/img/grandma3/2-3/popup_edit-userplugin_v2-2-5e5515.png)

Edit Plugin window

This editor can show the settings for the plugin if Setting is On in the title bar.

These are the settings:

- **Name**:\
  The name of the plugin. Tap this to edit the name.
- **Scribble**:\
  The assigned scribble. Tap this to select a scribble or open the editor to create a new one.
- **Appearance**:\
  The assigned appearance. Tap this to select an appearance or open the editor to create a new one.
- **Tags**:\
  Tags can be assigned to the plugin.
- **Note**:\
  A note can be added to the plugin.
- **Lock**:\
  Toggle this On to lock the plugin from changes.
- **Author**:\
  This can be used to add the name of the plugin author.
- **Version**:\
  This custom field can be used to indicate a version of the plugin.
- **Path**:\
  This is a path (sub-folders) for the files inside the plugin folder (gma3\_library/datapools/plugins).
- **UserRights**:\
  This can be used to set the needed user rights for running this plugin.

A plugin can contain several Lua components but should at least have 1.

## Create and Edit a Component

A Lua component contains the Lua code. Each component is usually one file.

Add the component by pressing and holding the New Component Lua.

A new component can also be added by selecting a line in the component list and tapping Insert new Component Lua. This creates a new line above the selected line.

![](/img/grandma3/2-3/popup_edit-userplugin_new-component_v2-2-df2e48.png)

Plugin with 1 added Lua component

Each component has some settings and some information. It is the different columns in the list.

- **Name**:\
  This is the name of the component.
- **Scribble**:\
  This is the assigned scribble - this is not displayed anywhere.
- **Appearance**:\
  This is the assigned appearance - this is not displayed anywhere.
- **Note**:\
  A note can be added to the component.
- **Tags**:\
  Tags can be assigned to the component.
- **FileName**:\
  This is the file name for the Lua component file. A file name is needed if the plugin is exported. Giving the component a name also creates a file name.
- **FilePath**:\
  This is a sub-folder path for the Lua file inside the plugin folder (gma3\_library/datapools/plugins).
- **FileSize** (Information only):\
  This displays the file size of the Lua component file in bytes.
- **Source** (Information only):\
  This is information only. It indicates whether the component is located in the showfile or the library.
- **Installed**:\
  If this is set to Yes, the Lua components will be updated from the file archive they were imported from. This is useful when Lua files are edited and copied into the folder using an external editor.\
  To update any changes in these Lua components, the [ReloadAllPlugins keyword](/grandma3/2-3/keyword_reloadallplugins/) must be executed.
- **IsResource** (Information only):\
  This indicates if the Lua file is an internal resource stored in an internal library. These files are not stored in the showfile and are not streamed.
- **InStream** (Information only):\
  Yes means that the Lua code is saved in the show file and streamed in the session but stays as saved in the show file.\
  No means that the Lua code is locally saved on the hard drive. The content of this Lua code can be updated using the [ReloadAllPlugins keyword](/grandma3/2-3/keyword_reloadallplugins/).\
  Setting **Installed** to Yes will set InStream to No.
- **UserRights**:\
  This can be used to set user rights on specific components.
- **SyntaxError** (Information only):\
  If syntax errors prevent the Lua component from being loaded into the Lua engine, the SyntaxError property turns to Yes, and the component line turns red.
- **Full Path** (Information only):\
  This shows "\<showfile>" or the full path for the file.
- **File Exists** (Information only):\
  This is information only. It indicates "Yes" if the file is found or "No" if it is not found. This is only relevant if the source is the Library.

Select the component that needs to be edited and tap Edit.

This opens the **Lua Input** pop-up:

![](/img/grandma3/2-3/popup_lua-input_v1-8-eb6d8f.png)

Empty Lua Input pop-up

Text can be copied into the pop-up from an external editor (when using the grandMA3 onPC), or it can be written directly in the pop-up.

Editing existing code can also be done in the Lua Input pop-up.

Line numbers help when troubleshooting code or as general help (the numbers are not part of the code). The number of the active line is in white color, and the others are in gray color.

When Tab is used to indent text, a gray ">" appears where the tab was pressed.

When the desired code is input, it needs to be saved by tapping Save in the title bar.

The title bar has other buttons:

- ![](/img/grandma3/2-3/icon_triangle-down_15_v1-8-da38f5.png) **(Virtual Keyboard)**:\
  This toggles the on-screen virtual keyboard.
- **Lua Code Templates**:\
  This toggles the Lua Code Templates that can be used as templates for writing new code. Learn more about this [below](/grandma3/2-3/plugins/#lua_code_template).
- **API Description**:\
  This toggles the grandMA3-specific Lua API description on the right-hand side of the Lua Input. Learn more about this [below](/grandma3/2-3/plugins/#api_description).
- ![](/img/grandma3/2-3/icon_undo-arrow_15_v1-8-94f788.png) **(Undo)**:\
  This undoes the last edit.
- ![](/img/grandma3/2-3/icon_redo-arrow_15_v1-8-c54a19.png) **(Redo)**:\
  Thie redoes undoed actions.

After the code is saved, the Lua Input pop-up can be closed by tapping the ![](/img/grandma3/2-3/icon_cross_v0-1-fe6968.png) in the upper right corner.

## Run a Plugin

The plugins can be run by tapping them in the pool or using the [Plugin keyword](/grandma3/2-3/keyword_plugin/).

Running the plugin will execute the first component. This component needs to call other components, or specific components can be called directly using this syntax:

Plugin \[Plugin\_Number or "Plugin\_Name"].\[Component\_Number or "Component\_Name"]

Plugins can also be assigned to executors and view buttons. Learn how in the [Assign Object to an Executor topic](/grandma3/2-3/executor_assign/).

## []()Lua Code Templates

The templates are example codes that can be copied into the editor.

|                                                    |                                                  |
| -------------------------------------------------- | ------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                 |
|                                                    | Using a template will delete any existing code.  |

Tap Lua Code Templates in the title bar to show the templates.

![](/img/grandma3/2-3/popup_lua-input_templates_v1-8-9bd64e.png)

The Lua code templates

The different templates are shown next to each other, and there is a horizontal scroll bar, making it possible to scroll through the different templates.

To import one of the templates, select it (yellow frame) and tap Use Template.

The templates can be closed without importing a template by tapping Lua Code Templates in the title bar or the Back in the lower left corner.

## API Description

The API description can be shown on the right side of the Lua Input pop-up. It can be toggled On or Off by tapping API Description in the title bar.

It lists all the grandMA3-specific Lua functions and shows a short explanation of the required arguments and the return values.

![](/img/grandma3/2-3/popup_lua-input_api-description_v2-2-c063d2.png)

The API description

There are three elements to the description. At the top is a search input field where text can be input to search the list of functions.

Below is the actual list of functions in alphabetic order. Selecting one shows the description of the selected function below the list.

Tapping the ![](/img/grandma3/2-3/icon_plus_15_v1-5-9f4773.png) in the description area adds the function to the Lua input code, with the arguments, at the cursor's current location.

## Export a Plugin

The plugin can be exported from the **Edit UserPlugin** by tapping Export.

This creates an XML file for the plugin.

If the Lua components have a file name ending in ".lua", an extra LUA file is exported for the component. If there is no valid file name for the component, it is then stored in the XML file, coded in the "base64" format.

|                                                    |                                                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                   |
|                                                    | The Lua files are only exported if the Lua component has "Yes" in the "InStream".  |

## Import a Plugin

All the required files are needed to import a plugin successfully. The XML file is always needed; if the Lua components are stored as extra Lua files, they are also needed. These files must be in the ../gma3\_library/datapools/plugins folder on the desired drive.

1. Create a new plugin.
2. Tap Import.
3. Select the desired drive and XML file.
4. Tap Import.
5. The plugin is imported, and the editor can be closed.

## Subtopics

- [What is Lua](/grandma3/2-3/lua/)
- [Handle - light_userdata](/grandma3/2-3/lua_handle/)
- [Interface Functions](/grandma3/2-3/lua_interface/)
- [Variable Functions](/grandma3/2-3/lua_variables/)
- [Lua Functions - Object-Free API](/grandma3/2-3/lua_objectfree/)
- [Lua Functions - Object API](/grandma3/2-3/lua_object/)

---
title: "MessageBox(table)"
description: "The MessageBox Lua function is used to create pop-up message boxes. These can be simple or complex information pop-ups with many different options and user inpu"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_messagebox.html"
scrapedAt: "2026-06-15T18:25:33.850Z"
pagefind: false
---
## Description

The MessageBox Lua function is used to create pop-up message boxes. These can be simple or complex information pop-ups with many different options and user inputs.

The message box contains multiple elements that must be defined in a table. This table is the single input argument to the function.

The elements in the message box are displayed in alphabetical order.

This function is part of the User Interface functions.

## Arguments

- **Table**:\
  The input to the function must be formatted as a table using key-value pairs. The needed elements have default values that will be used if not overwritten. The values can be defined in any order if the key is defined.\
  The table can have the following elements:

  - **title**:\
    This is the title of the pop-up message box.

  - **titleTextColor**:\
    This is the text color for the title text. The value is a number or string that refers to the **UI Colors** in the color theme. See the link below.

  - **backColor**:\
    This is the color of the frame or border of the pop-up. The value is a number or string that refers to the **UI Colors** in the color theme. See the link below.

  - **icon**:\
    This is an icon that can be shown in the upper left corner of the pop-up. The value can be an integer or a string that refers to the number or name of a texture image (without the file format).\
    The icons can be listed by navigating to the texture folder ChangeDestination GraphicsRoot/TextureCollect/Textures and then doing a List command.\
    This shows a long list with numbers and names of all the textures in the Command Line History window.

  - **message**:\
    This message text string is displayed in the main part of the pop-up. A new line can be created by adding a "\n" in the text.

  - **messageTextColor**:\
    This is the text color for the message text. The value is a number or string that refers to the **UI Colors** in the color theme. See the link below.

  - **autoCloseOnInput**:\
    This option defines if a Please (or Enter) from an input field closes the message box pop-up. The default value is **true**. Setting this to **false** keeps the message box open until it is explicitly closed. See example 5 below.

  - **timeout**:\
    The timeout value is an integer that indicates how long the message box is displayed in milliseconds. It will show a countdown timer at the top of the message area. When the countdown runs out, it will close the pop-up.\
    When the timeout closes the pop-up, it returns a **success** element with a **true** value (see more about the return below). It was closed "normally".

  - **timeoutResultCancel**:\
    This element can change the return to mimic a cancel of the pop-up, which returns a **false** instead of a **true** for the **success** element.

  - **timeoutResultID**:\
    When the timeout closes the pop-up with the **success** value = **true**, a special return result can be defined using this, for instance, setting the value to 99 - then 99 is returned when the message box is closed by the timeout.

  - **commands**:\
    The commands are buttons at the bottom of the message box pop-up. The input here is a table of objects using the following structure:

    - **value**:\
      This integer value will be returned as the result value - see more about the return below.
    - **name**:\
      This is a string which will be shown on the button.

  - **inputs**:\
    The inputs are user input fields where text or numbers can be input. The input fields will be displayed in alphabetical order.\
    The input fields are defined using an table with the following structure (see example 5 below):

    - **name**:\
      This is a string value - the text will be shown as a label for the input field.
    - **value**:\
      This is a string value - it is a default input value for the input field.
    - **blackfilter**:\
      This is a string value - it defines input characters that are not allowed.
    - **whitefilter**:\
      This is a string value - it defines which input characters are allowed.
    - **vkPlugin**:\
      This is a string value - it is the name of the input pop-up, which is opened if the on-screen keyboard icon (![](/img/grandma3/2-3/icon_keyboard_15_v1-9-d04ccc.png)) is tapped in the pop-up. Example 5 below has a list of possible vkPlugin values.
    - **maxTextLength**:\
      This is an integer value - it defines the maximum number of characters for the input.

  - **states**:\
    The states are buttons in the pop-up. State buttons have a small checkbox and can have a true or false state. The buttons will be displayed in alphabetical order.\
    The buttons are defined using a table with the following structure (see example 4 below):

    - **name**:\
      This is a string value - the text will be shown on the button.
    - **state**:\
      This is the initial state of the button checkbox.

  - **selectors**:\
    Selector buttons are two different types of buttons. Each type can have a selected value based on a list of available values. The two types are **Swipe** button (type 0) and **Radio** button (type 1).\
    The buttons are defined in a table with the following structure:

    - **name**:\
      This is a string value - the text will be shown on the button (swipe button) or as a label above the buttons (radio buttons).

    - **selectedValue**:\
      This is an integer value - it defines the default selected value

    - **type**:\
      This is an integer value - it defines the type of selector button. The options are:

      - **0**:\
        This defines the button as a swipe button.
      - **1**:\
        This defines the button as a radio button.

    - **values**:\
      This is another table containing the different values available for the selector button. Each value element in the table has the following structure: \["string"]=integer\
      The string is the name displayed for the value. The integer is the value returned and the one used for **selectedValue** (see above). See example 6 below for an example of use.

The table can contain some or all of the elements described above.

The colors mentioned above can be a string or number value. It refers to a defined UI Color in the color theme, for instance, **"Global.Text"** or **1.27**. See more in the [Color Theme topic](/grandma3/2-3/ws_colors_color_theme/).

A message box pop-up should have at least a title, message, and _either _a timeout _or_ some basic command buttons. See the first three examples below.

## Return

- **Table**:\
  The return from a message box pop-up is formatted in a table. The returned table adjusts to match the elements of the message box. For instance, if there are selection buttons in the message box, then there is another table inside the result table containing the return from the selection buttons. See the examples for details on how to retrieve the results. The table can contain the following elements:

  - **success**:\
    This is a boolean - it returns true if the message box was closed by tapping a command button or by a timeout (see **timeoutResultCancel** above for exceptions).
  - **result**:\
    This is an integer - it returns the value of the tapped command button or the timeout result ID.
  - **inputs** (only if the message box has inputs fields):\
    This is a table with a list of the input fields' name and string value in a key-value pair table.
  - **states** (only if the message box has state buttons):\
    This is a table with a list of the state buttons' name and boolean value in a key-value pair table.
  - **selectors** (only if the message box has selector buttons):\
    This is a table with a list of the selector buttons' name and integer value in a key-value pair table.

An error is thrown if the message box does not have inputs, states, and selectors, but the script tries to use the table elements.

See the examples to see how to extract the results.

## Examples

There are six different examples demonstrating different elements of the message box. The elements can be combined, but the examples highlight different functions.

### Example 1

A simple message box pop-up that shows a single confirm button:

|                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                          |
| ```
return function ()
    -- This creates a small pop-up with a single button.
    local returnTable = MessageBox(
        {
            title = "Please confirm This",
            commands = {{value = 1, name = "Confirm"}}
        }
    )

    -- Print the content of the returned table. 
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
end
``` |

### Example 2

This example opens a pop-up with some text and two command buttons:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ```
return function ()
    -- A table with two default buttons for the pop-up
    local defaultCommandButtons = {
        {value = 2, name = "OK"},
        {value = 1, name = "Cancel"}
    }

    -- A table with the elements needed for the pop-up
    local messageTable = {
        icon = "object_smart",
        backColor = "Window.Plugins",
        title = "This is the title",
        message = "This is a message\nThat can have multiple lines",
        commands = defaultCommandButtons,
    }

    -- The creation on the actual pop-up with the result stored in a variable
    local returnTable = MessageBox(messageTable)

    -- Print the content of the returned table
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
end
``` |

### Example 3

This example displays a message box for 3 seconds and then closes itself:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- This variable contains the table used as argument for the messagebox
    local messageTable = {
        title = "Do not worry",
        message = "This message will self destruct\nGoodbye!",
        timeout = 3000,
        timeoutResultCancel = false,
        timeoutResultID = 99,
    }

    -- This creates the messagebox pop-up and store the return table in a variable
    local returnTable = MessageBox(messageTable)

    -- Print the content of the returned table
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
end
``` |

### Example 4

This example adds state buttons to the message box. The buttons are added to a table for a better overview.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- A table with two default buttons for the pop-up
    local defaultCommandButtons = {
        {value = 2, name = "OK"},
        {value = 1, name = "Cancel"}
    }
    -- A table with three state buttons 
    -- The buttons will be displayed alphabetically in the pop-up
    local stateButtons = {
        {name = "State B", state = false},
        {name = "State A", state = false},
        {name = "New State", state = false}
    }

    -- A table with the elements needed for the pop-up
    local messageTable = {
        icon = "object_smart",
        backColor = "Window.Plugins",
        title = "This is state buttons",
        message = 'Toggle the states and click "Ok"',
        commands = defaultCommandButtons,
        states = stateButtons,
    }

    -- The creation on the actual pop-up with the result stored in a variable
    local returnTable = MessageBox(messageTable)

    -- Print the content of the returned table
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
    
    -- Print a list with the state of the stateButtons
    for name,state in pairs(returnTable.states) do
        Printf("State '%s' = '%s'",name,tostring(state))
    end
end
``` |

### Example 5

This example shows the input fields.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function ()
    -- A table with two default buttons for the pop-up
    local defaultCommandButtons = {
        {value = 2, name = "OK"},
        {value = 1, name = "Cancel"}
    }
    -- A table with three input fields
    -- The fields will be displayed alphabetically in the pop-up based on name
    local inputFields = {
        {name = "Numbers Only", value = "1234", whiteFilter = "0123456789", vkPlugin = "NumericInput"},
        {name = "Text Only", value = "abcdef", blackFilter = "0123456789"},
        {name = "Maximum 10 characters", value = "", maxTextLength = 10}
    }
    -- Possible vkPlugin values:
    -- - "TextInput" : same as default - standrd on-screne keyboard
    -- - "TextInputNumOnly" : text input but only with number buttons
    -- - "TextInputNumOnlyRange" : text input but only with number and related range buttons 
    -- - "TextInputTimeOnly" : text input styled for time input - includes buttons for time values
    -- - "NumericInput" : general number input
    -- - "CueNumberInput" : number input styled for cue number
    -- - "RelCueNumberInput" : number input with the relative "delta" button
    -- - "IP4Prefix" : designed for inputting an IPv4 address allowing CIDR notation

    -- A table with the elements needed for the pop-up
    local messageTable = {
        icon = "object_smart",
        backColor = "Window.Plugins",
        title = "This is input fields",
        message = 'Change the values in the input fields and click "Ok"',
        commands = defaultCommandButtons,
        inputs = inputFields,
        autoCloseOnInput = false
    }

    -- The creation on the actual pop-up with the result stored in a variable
    local returnTable = MessageBox(messageTable)

    -- Print the content of the returned table
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
    -- Print a list with the values of the input fields
    for name,value in pairs(returnTable.inputs) do
        Printf("Input '%s' = '%s'",name,tostring(value))
    end
end
``` |

### Example 6

This example shows the different selector buttons.

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ```
return function ()
    -- A table with two default buttons for the pop-up
    local defaultCommandButtons = {
        {value = 2, name = "OK"},
        {value = 1, name = "Cancel"}
    }
    -- A table with selector buttons
    -- The buttons will be displayed alphabetically in the pop-up based on name
    local selectorButtons = {
        { name="Swipe Selector", selectedValue=1, type=0, values={["Swipe1"]=1,["Swipe2"]=2}},
        { name="Radio Selector", selectedValue=2, type=1, values={["Radio1"]=1,["Radio2"]=2}},
        { name="Another Radio", selectedValue=3, type=1, values={["Radio3"]=3,["Radio4"]=4}}
    }

    -- State button to show grouping with swipe Selector button
    local stateButton = {
        {name = "State Button", state = false},
    }
    -- A table with the elements needed for the pop-up
    local messageTable = {
        icon = "object_smart",
        backColor = "Window.Plugins",
        title = "This is input fields",
        message = 'Change the values in the input fields and click "Ok"',
        commands = defaultCommandButtons,
        states = stateButton,
        selectors = selectorButtons,
    }

    -- The creation on the actual pop-up with the result stored in a variable
    local returnTable = MessageBox(messageTable)

    -- Print the content of the returned table
    Printf("Success = "..tostring(returnTable.success))
    Printf("Result = "..returnTable.result)
    -- Print a list with the values of the selection buttons
    for name,value in pairs(returnTable.selectors) do
        Printf("Input '%s' = '%s'",name,tostring(value))
    end
    -- Print a list with the state of the stateButton
    for name,state in pairs(returnTable.states) do
        Printf("State '%s' = '%s'",name,tostring(state))
    end
end
``` |

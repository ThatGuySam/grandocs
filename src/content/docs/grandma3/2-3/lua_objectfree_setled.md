---
title: "SetLED(handle,table)"
description: "The SetLED Lua function sends a table with a set of LED brightness values to an MA3Module. After around two seconds, the system automatically sets the LED value"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_setled.html"
scrapedAt: "2026-06-15T18:25:34.869Z"
pagefind: false
---
## Description

The **SetLED** Lua function sends a table with a set of LED brightness values to an MA3Module. After around two seconds, the system automatically sets the LED values to what it believes it should be.

Below the example is a table listing all the grandMA3 hardware modules and which index number matches which LED on the hardware module.

|                                                  |                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                     |
|                                                  | Setting a value above 0 for a table index number not connected to an LED can cause the module to crash and reboot  |

## Arguments

- **Handle:**\
  This function does not accept any arguments.
- **Table:**\
  The table should be an indexed table with a set of integer values. The value range is from 0 to 255. This range indicates a brightness level. A special value of "-1" is used to release the LED to the system. The table should contain 1024 indexes.

## Return

This function does not return anything.

## Example

This example sets the LEDs on encoder 1 to green on a full-size console:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ```
return function()
    -- Create the LED table
    local myLedTable = {}
    -- Fill the table with default "release" value
    for index=1,256 do
        myLedTable[index] = -1;
    end
    -- Set values in the table
    -- Encoder_inside1 = green
    myLedTable[7] = 0
    myLedTable[10] = 255
    myLedTable[22] = 0
    -- Encoder_outside1 = green
    myLedTable[8] = 0
    myLedTable[11] = 255
    myLedTable[23] = 0
    -- Get the handle for the MasterModule on a console
    local usbDeviceHandle = Root().UsbNotifier.MA3Modules["UsbDeviceMA3 2"]
    -- Set the values for the LEDs
    SetLED(usbDeviceHandle, myLedTable)
end
``` |

## Hardware Modules LED Table

This table provides a list of index numbers (indexed from 1). The numbers are matched with elements on the three different kinds of hardware modules that are relevant. Notice that the naming here comes from the internal hardware definition and might not match exactly the print on the keys or the official name.

| Index | grandMA3 Master Module(MM)   | grandMA3 Fader Module Encoder(MFE) | grandMA3 Fader Module Crossfader(MFX) |
| ----- | ---------------------------- | ---------------------------------- | ------------------------------------- |
| 0     |                              |                                    |                                       |
| 1     | ENCODER\_INSIDE4 Red         | Executor 108 Button                | Executor 108 Button                   |
| 2     | ENCODER\_OUTSIDE3 Red        | Executor 110 Button                | Executor 110 Button                   |
| 3     | ENCODER\_INSIDE2 Red         | Executor 211 Button                | Executor 211 Button                   |
| 4     | EXEC\_GrandKnob Red          | Executor 212 Button                | Executor 212 Button                   |
| 5     | MENU                         | Executor 213 Button                | Executor 213 Button                   |
| 6     | ENCODER\_OUTSIDE2 Red        | Executor 214 Button                | Executor 214 Button                   |
| 7     | ENCODER\_INSIDE1 Red         | Executor 215 Button                | Executor 215 Button                   |
| 8     | ENCODER\_OUTSIDE1 Red        | Executor 209 Button                | XFade1Btn Knob Red                    |
| 9     | EXEC\_GrandKnob  Green       | Executor 210 Button                | XFade2Btn Knob Red                    |
| 10    | ENCODER\_INSIDE1 Green       | Executor 208 Button                | Executor 209 Button                   |
| 11    | ENCODER\_OUTSIDE1 Green      | Executor 115 Button                | Executor 210 Button                   |
| 12    | ENCODER\_INSIDE2 Green       | Executor 114 Button                | Executor 208 Button                   |
| 13    | ENCODER\_OUTSIDE2 Green      | Executor 113 Button                | XFade1Btn Knob Green                  |
| 14    | ENCODER\_INSIDE3 Green       | Executor 112 Button                | XFade2Btn Knob Green                  |
| 15    | ENCODER\_OUTSIDE3 Green      | Executor 207 Button                | DEF\_GO                               |
| 16    | ENCODER\_INSIDE4 Green       | Executor 206 Button                | Executor 115 Button                   |
| 17    | ENCODER\_OUTSIDE4 Green      | Executor 205 Button                | Executor 114 Button                   |
| 18    | ENCODER\_INSIDE5 Green       | Executor 105 Button                | Executor 113 Button                   |
| 19    | ENCODER\_OUTSIDE5 Green      | Executor 106 Button                | Executor 112 Button                   |
| 20    | ENCODER\_OUTSIDE4 Red        | Executor 107 Button                | Executor 207 Button                   |
| 21    | EXEC\_GrandKnob Blue         | Executor 109 Button                | Executor 206 Button                   |
| 22    | ENCODER\_INSIDE1 Blue        | Executor 204 Button                | Executor 205 Button                   |
| 23    | ENCODER\_OUTSIDE1 Blue       | Executor 203 Button                | XFade2 Fader Red                      |
| 24    | ENCODER\_INSIDE2 Blue        | Executor 202 Button                | XFade2 Fader Green                    |
| 25    | ENCODER\_OUTSIDE2 Blue       | Executor 201 Button                | XFade2 Fader Blue                     |
| 26    | ENCODER\_INSIDE3 Blue        | Executor 111 Button                | Executor 105 Button                   |
| 27    | ENCODER\_OUTSIDE3 Blue       | Executor 101 Button                | Executor 106 Button                   |
| 28    | ENCODER\_INSIDE4 Blue        | Executor 102 Button                | Executor 107 Button                   |
| 29    | ENCODER\_OUTSIDE4 Blue       | Executor 103 Button                | XFade1Btn Knob Blue                   |
| 30    | ENCODER\_INSIDE5 Blue        | Executor 104 Button                | XFade2Btn Knob Blue                   |
| 31    | ENCODER\_OUTSIDE5 Blue       | Executor 312 Fader Red             | Executor 109 Button                   |
| 32    | ENCODER\_OUTSIDE5 Red        | Executor 311 Fader Red             | Executor 204 Button                   |
| 33    | ENCODER\_INSIDE5 Red         | Executor 413 Fader Red             | Executor 203 Button                   |
| 34    | ENCODER\_INSIDE3 Red         | Executor 411 Button                | Executor 202 Button                   |
| 35    | ESC                          | Executor 412 Button                | Executor 201 Button                   |
| 36    | CLEAR                        | Executor 414 Fader Red             | XFade2Btn Button                      |
| 37    | HELP                         | Executor 411 Fader Red             | DEF\_PAUSE                            |
| 38    | GOTO                         | Executor 412 Fader Red             | XFade1Btn Button                      |
| 39    | ALIGN                        | Executor 415 Button                | Executor 111 Button                   |
| 40    | COPY                         | Executor 414 Button                | Executor 101 Button                   |
| 41    | OFF                          | Executor 413 Button                | Executor 102 Button                   |
| 42    | FULL                         | Executor 411 Fader Green           | Executor 103 Button                   |
| 43    | PLEASE                       | Executor 412 Fader Green           | Executor 104 Button                   |
| 44    | NUM4                         | Executor 413 Fader Green           | DEF\_GOBACK                           |
| 45    | NUM5                         | Executor 414 Fader Green           | XFade1 Fader Red                      |
| 46    | UNDO                         | Executor 415 Fader Green           | XFade1 Fader Green                    |
| 47    | GROUP                        | Executor 311 Fader Green           | XFade1 Fader Blue                     |
| 48    | THRU                         | Executor 312 Fader Green           | Executor 312 Fader Red                |
| 49    | NUM6                         | Executor 313 Fader Green           | Executor 311 Fader Red                |
| 50    | NUM2                         | Executor 314 Fader Green           | Executor 413 Fader Red                |
| 51    | STORE                        | Executor 315 Fader Green           | Executor 411 Button                   |
| 52    | ASSIGN                       | Executor 312 Button                | Executor 412 Button                   |
| 53    | AT                           | Executor 313 Fader Red             | Executor 414 Fader Red                |
| 54    | MA1                          | Executor 311 Button                | Executor 411 Fader Red                |
| 55    | SLASH                        | Executor 411 Fader Blue            | Executor 412 Fader Red                |
| 56    | NUM1                         | Executor 412 Fader Blue            | Executor 415 Button                   |
| 57    | CUE                          | Executor 413 Fader Blue            | Executor 414 Button                   |
| 58    | TIME                         | Executor 414 Fader Blue            | Executor 413 Button                   |
| 59    | SEQUENCE                     | Executor 415 Fader Blue            | Executor 411 Fader Green              |
| 60    | CHANNEL                      | Executor 311 Fader Blue            | Executor 412 Fader Green              |
| 61    | NUM7                         | Executor 312 Fader Blue            | Executor 413 Fader Green              |
| 62    | NUM8                         | Executor 313 Fader Blue            | Executor 414 Fader Green              |
| 63    | NUM9                         | Executor 314 Fader Blue            | Executor 415 Fader Green              |
| 64    | NUM3                         | Executor 315 Fader Blue            | Executor 311 Fader Green              |
| 65    | MINUS                        | Executor 313 Button                | Executor 312 Fader Green              |
| 66    | NUM0                         | Executor 315 Fader Red             | Executor 313 Fader Green              |
| 67    | DOT                          | Executor 314 Fader Red             | Executor 314 Fader Green              |
| 68    | IF                           | Executor 314 Button                | Executor 315 Fader Green              |
| 69    | PLUS                         | Executor 315 Button                | Executor 312 Button                   |
| 70    | LEARN                        | Executor 415 Fader Red             | Executor 313 Fader Red                |
| 71    | Executor 297 Knob Red        | Executor 307 Fader Red             | Executor 311 Button                   |
| 72    | Executor 295 "X5 \| Step"    | Executor 306 Fader Red             | Executor 411 Fader Blue               |
| 73    | Executor 296 "X6 \| TC"      | Executor 408 Fader Red             | Executor 412 Fader Blue               |
| 74    | Executor 298 Knob Red        | Executor 406 Button                | Executor 413 Fader Blue               |
| 75    | Executor 295 Knob Red        | Executor 407 Button                | Executor 414 Fader Blue               |
| 76    | Executor 296 Knob Red        | Executor 409 Fader Red             | Executor 415 Fader Blue               |
| 77    | GOFAST                       | Executor 406 Fader Red             | Executor 311 Fader Blue               |
| 78    | Executor 195 "X13 \| Phaser" | Executor 407 Fader Red             | Executor 312 Fader Blue               |
| 79    | Executor 196 "X14 \| Macro"  | Executor 410 Button                | Executor 313 Fader Blue               |
| 80    | Executor 295 Knob Green      | Executor 409 Button                | Executor 314 Fader Blue               |
| 81    | Executor 296 Knob Green      | Executor 408 Button                | Executor 315 Fader Blue               |
| 82    | Executor 297 Knob Green      | Executor 406 Fader Green           | Executor 313 Button                   |
| 83    | Executor 298 Knob Green      | Executor 407 Fader Green           | Executor 315 Fader Red                |
| 84    | DELETE                       | Executor 408 Fader Green           | Executor 314 Fader Red                |
| 85    | Executor 197 "X15 \| Page"   | Executor 409 Fader Green           | Executor 314 Button                   |
| 86    | GOBACKFAST                   | Executor 410 Fader Green           | Executor 315 Button                   |
| 87    | Executor 298 "X8 \| DMX"     | Executor 306 Fader Green           | Executor 415 Fader Red                |
| 88    | STOMP                        | Executor 307 Fader Green           | Executor 307 Fader                    |
| 89    | SELECT                       | Executor 308 Fader Green           | Executor 306 Fader Red                |
| 90    | Executor 295 Knob Blue       | Executor 309 Fader Green           | Executor 408 Fader Red                |
| 91    | Executor 296 Knob Blue       | Executor 310 Fader Green           | Executor 406 Button                   |
| 92    | Executor 297 Knob Blue       | Executor 307 Button                | Executor 407 Button                   |
| 93    | Executor 298 Knob Blue       | Executor 308 Fader Red             | Executor 409 Fader Red                |
| 94    | Executor 198 "X16 \| Exec"   | Executor 306 Button                | Executor 406 Fader Red                |
| 95    | Executor 297 "X7 \| View"    | Executor 406 Fader Blue            | Executor 407 Fader Red                |
| 96    | ON                           | Executor 407 Fader Blue            | Executor 410 Button                   |
| 97    | MOVE                         | Executor 408 Fader Blue            | Executor 409 Button                   |
| 98    | FIXTURE                      | Executor 409 Fader Blue            | Executor 408 Button                   |
| 99    | PRESET                       | Executor 410 Fader Blue            | Executor 406 Fader Green              |
| 100   | EDIT                         | Executor 306 Fader Blue            | Executor 407 Fader Green              |
| 101   | UPDATE                       | Executor 307 Fader Blue            | Executor 408 Fader Green              |
| 102   | PAUSE                        | Executor 308 Fader Blue            | Executor 409 Fader Green              |
| 103   | GOBACK                       | Executor 309 Fader Blue            | Executor 410 Fader Green              |
| 104   | Executor 293 Knob Red        | Executor 310 Fader Blue            | Executor 306 Fader Green              |
| 105   | SOLO                         | Executor 308 Button                | Executor 307 Fader Green              |
| 106   | HIGHLIGHT                    | Executor 310 Fader Red             | Executor 308 Fader Green              |
| 107   | Executor 294 Knob Red        | Executor 309 Fader Red             | Executor 309 Fader Green              |
| 108   | Executor 291 Knob Red        | Executor 309 Button                | Executor 310 Fader Green              |
| 109   | Executor 292 Knob Red        | Executor 310 Button                | Executor 307 Button                   |
| 110   | GO                           | Executor 410 Fader Red             | Executor 308 Fader Red                |
| 111   | LIST                         | Executor 302 Fader Red             | Executor 306 Button                   |
| 112   | PAGE\_DOWN                   | Executor 301 Fader Red             | Executor 406 Fader Blue               |
| 113   | Executor 291 Knob Green      | Executor 403 Fader Red             | Executor 407 Fader Blue               |
| 114   | Executor 292 Knob Green      | Executor 401 Button                | Executor 408 Fader Blue               |
| 115   | Executor 293 Knob Green      | Executor 402 Button                | Executor 409 Fader Blue               |
| 116   | Executor 294 Knob Green      | Executor 404 Fader Red             | Executor 410 Fader Blue               |
| 117   | SELFIX                       | Executor 401 Fader Red             | Executor 306 Fader Blue               |
| 118   | MA2                          | Executor 402 Fader Red             | Executor 307 Fader Blue               |
| 119   | PAGE\_UP                     | Executor 405 Button                | Executor 308 Fader Blue               |
| 120   | XKEYS                        | Executor 404 Button                | Executor 309 Fader Blue               |
| 121   | BLIND                        | Executor 403 Button                | Executor 310 Fader Blue               |
| 122   | Executor 192 "X10"           | Executor 401 Fader Green           | Executor 308 Button                   |
| 123   | Executor 193 "X11"           | Executor 402 Fader Green           | Executor 310 Fader Red                |
| 124   | Executor 194 "X12"           | Executor 403 Fader Green           | Executor 309 Fader Red                |
| 125   | Executor 291 Knob Blue       | Executor 404 Fader Green           | Executor 309 Button                   |
| 126   | Executor 292 Knob Blue       | Executor 405 Fader Green           | Executor 310 Button                   |
| 127   | Executor 293 Knob Blue       | Executor 301 Fader Green           | Executor 410 Fader Red                |
| 128   | Executor 294 Knob Blue       | Executor 302 Fader Green           | Executor 302 Fader Red                |
| 129   | PREVIEW                      | Executor 303 Fader Green           | Executor 301 Fader Red                |
| 130   | FREEZE                       | Executor 304 Fader Green           | Executor 403 Fader Red                |
| 131   | DOWN                         | Executor 305 Fader Green           | Executor 401 Button                   |
| 132   | PREV                         | Executor 302 Button                | Executor 402 Button                   |
| 133   | RESET                        | Executor 303 Fader Red             | Executor 404 Fader Red                |
| 134   | UP                           | Executor 301 Button                | Executor 401 Fader Red                |
| 135   | Executor 291 "X1 \| Clone"   | Executor 401 Fader Blue            | Executor 402 Fader Red                |
| 136   | Executor 292 "X2 \| Link"    | Executor 402 Fader Blue            | Executor 405 Button                   |
| 137   | Executor 293 "X3 \| Grid"    | Executor 403 Fader Blue            | Executor 404 Button                   |
| 138   | Executor 294 "X4 \| Layout"  | Executor 404 Fader Blue            | Executor 403 Button                   |
| 139   | Executor 191 "X9"            | Executor 405 Fader Blue            | Executor 401 Fader Green              |
| 140   | NEXT                         | Executor 301 Fader Blue            | Executor 402 Fader Green              |
| 141   | All LEDs on the Keyboard     | Executor 302 Fader Blue            | Executor 403 Fader Green              |
| 142   | Small Screen Backlight       | Executor 303 Fader Blue            | Executor 404 Fader Green              |
| 143   | Letterbox Screen Backlight   | Executor 304 Fader Blue            | Executor 405 Fader Green              |
| 144   |                              | Executor 305 Fader Blue            | Executor 301 Fader Green              |
| 145   |                              | Executor 303 Button                | Executor 302 Fader Green              |
| 146   |                              | Executor 305 Fader Red             | Executor 303 Fader Green              |
| 147   |                              | Executor 304 Fader Red             | Executor 304 Fader Green              |
| 148   |                              | Executor 304 Button                | Executor 305 Fader Green              |
| 149   |                              | Executor 305 Button                | Executor 302 Button                   |
| 150   |                              | Executor 405 Fader Red             | Executor 303 Fader Red                |
| 151   |                              | RateBtn2                           | Executor 301 Button                   |
| 152   |                              | ExecBtn1                           | Executor 401 Fader Blue               |
| 153   |                              | SpeedBtn1                          | Executor 402 Fader Blue               |
| 154   |                              | RateBtn1                           | Executor 403 Fader Blue               |
| 155   |                              | SpeedBtn2                          | Executor 404 Fader Blue               |
| 156   |                              | ProgBtn1                           | Executor 405 Fader Blue               |
| 157   |                              | ProgBtn2                           | Executor 301 Fader Blue               |
| 158   |                              | ProgBtn3                           | Executor 302 Fader Blue               |
| 159   |                              | ExecBtn3                           | Executor 303 Fader Blue               |
| 160   |                              | ExecBtn2                           | Executor 304 Fader Blue               |
| 161   |                              | Executor 201 Fader Red             | Executor 305 Fader Blue               |
| 162   |                              | Executor 201 Fader Green           | Executor 303 Button                   |
| 163   |                              | Executor 201 Fader Blue            | Executor 305 Fader Red                |
| 164   |                              | Executor 202 Fader Red             | Executor 304 Fader Red                |
| 165   |                              | Executor 202 Fader Green           | Executor 304 Button                   |
| 166   |                              | Executor 202 Fader Blue            | Executor 305 Button                   |
| 167   |                              | Executor 203 Fader Red             | Executor 405 Fader Red                |
| 168   |                              | Executor 203 Fader Green           | Executor 201 Fader Red                |
| 169   |                              | Executor 203 Fader Blue            | Executor 201 Fader Green              |
| 170   |                              | Executor 204 Fader Red             | Executor 201 Fader Blue               |
| 171   |                              | Executor 204 Fader Green           | Executor 202 Fader Red                |
| 172   |                              | Executor 204 Fader Blue            | Executor 202 Fader Green              |
| 173   |                              | Executor 205 Fader Red             | Executor 202 Fader Blue               |
| 174   |                              | Executor 205 Fader Green           | Executor 203 Fader Red                |
| 175   |                              | Executor 205 Fader Blue            | Executor 203 Fader Green              |
| 176   |                              | Executor 206 Fader Red             | Executor 203 Fader Blue               |
| 177   |                              | Executor 206 Fader Green           | Executor 204 Fader Red                |
| 178   |                              | Executor 206 Fader Blue            | Executor 204 Fader Green              |
| 179   |                              | Executor 207 Fader Red             | Executor 204 Fader Blue               |
| 180   |                              | Executor 207 Fader Green           | Executor 205 Fader Red                |
| 181   |                              | Executor 207 Fader Blue            | Executor 205 Fader Green              |
| 182   |                              | Executor 208 Fader Red             | Executor 205 Fader Blue               |
| 183   |                              | Executor 208 Fader Green           | Executor 206 Fader Red                |
| 184   |                              | Executor 208 Fader Blue            | Executor 206 Fader Green              |
| 185   |                              | Executor 209 Fader Red             | Executor 206 Fader Blue               |
| 186   |                              | Executor 209 Fader Green           | Executor 207 Fader Red                |
| 187   |                              | Executor 209 Fader Blue            | Executor 207 Fader Green              |
| 188   |                              | Executor 210 Fader Red             | Executor 207 Fader Blue               |
| 189   |                              | Executor 210 Fader Green           | Executor 208 Fader Red                |
| 190   |                              | Executor 210 Fader Blue            | Executor 208 Fader Green              |
| 191   |                              | Executor 211 Fader Red             | Executor 208 Fader Blue               |
| 192   |                              | Executor 211 Fader Green           | Executor 209 Fader Red                |
| 193   |                              | Executor 211 Fader Blue            | Executor 209 Fader Green              |
| 194   |                              | Executor 212 Fader Red             | Executor 209 Fader Blue               |
| 195   |                              | Executor 212 Fader Green           | Executor 210 Fader Red                |
| 196   |                              | Executor 212 Fader Blue            | Executor 210 Fader Green              |
| 197   |                              | Executor 213 Fader Red             | Executor 210 Fader Blue               |
| 198   |                              | Executor 213 Fader Green           | Executor 211 Fader Red                |
| 199   |                              | Executor 213 Fader Blue            | Executor 211 Fader Green              |
| 200   |                              | Executor 214 Fader Red             | Executor 211 Fader Blue               |
| 201   |                              | Executor 214 Fader Green           | Executor 212 Fader Red                |
| 202   |                              | Executor 214 Fader Blue            | Executor 212 Fader Green              |
| 203   |                              | Executor 215 Fader Red             | Executor 212 Fader Blue               |
| 204   |                              | Executor 215 Fader Green           | Executor 213 Fader Red                |
| 205   |                              | Executor 215 Fader Blue            | Executor 213 Fader Green              |
| 206   |                              | Desklights                         | Executor 213 Fader Blue               |
| 207   |                              | Letterbox Screen Backlight         | Executor 214 Fader Red                |
| 208   |                              | Small Screen Backlight             | Executor 214 Fader Green              |
| 209   |                              |                                    | Executor 214 Fader Blue               |
| 210   |                              |                                    | Executor 215 Fader Red                |
| 211   |                              |                                    | Executor 215 Fader Green              |
| 212   |                              |                                    | Executor 215 Fader Blue               |
| 213   |                              |                                    | Desklights                            |
| 214   |                              |                                    | Letterbox Screen Backlight            |
| 215   |                              |                                    | Small Screen Backlight                |

---
title: "GetButton(handle)"
description: "The GetButton Lua function returns a key-value pairs table indicating, with a boolean value, whether a button is pressed on an MA3Module."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/lua_objectfree_getbutton.html"
scrapedAt: "2026-06-15T18:25:31.141Z"
pagefind: false
---
## Description

The **GetButton** Lua function returns a key-value pairs table indicating, with a boolean value, whether a button is pressed on an MA3Module.

Below the example is a table listing all the grandMA3 hardware modules and which index number matches which button on the hardware module.

## Arguments

- **Handle:**\
  The handle for the MA3 module.

## Return

- **Table**:\
  The returned table is a key-value pairs table with a set of 512 pairs with a boolean value. A **true** boolean value indicates that the button is pressed or the fader is touched. The table key is 1-indexed. 

## Example

This example requests the buttons states on the master module on a grandMA3 full-size console:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Copy Code](javascript:void\(0\))Lua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ```
return function()
    --- grandMA3 full-size modules are:
    --- Master Module (MM): "UsbDeviceMA3 2"
    --- Fader Module Encoder (MFE): "UsbDeviceMA3 3"
    --- Fader Module Crossfader (MFX): "UsbDeviceMA3 4"

    -- Get a handle to the Master Module on a grandMA3 full-size.
    local usbDeviceHandle = Root().UsbNotifier.MA3Modules["UsbDeviceMA3 2"]
    -- Create a table with the button status.
    local buttonTable = GetButton(usbDeviceHandle)
    -- Check if the table is nil and then print an error.
    if buttonTable == nil then
        ErrPrintf("nil")
        return
    end
    -- If the table is not nil, then print a usefull feedback about pressed buttons. 
    for key,value in pairs(buttonTable) do
        if tostring(value) == "true" then
            Printf("The button with the index " .. key .. " is pressed.")
        end
    end
end
``` |

## Hardware Modules Button Table

This table provides a list of index numbers (0-indexed and 1-indexed). The numbers are matched with elements on the three different kinds of hardware modules. Notice that the naming here comes from the internal hardware definition and might not exactly match the print on the keys or the official name.

| 0-Index | 1-Index  | grandMA3 Master Module(MM) | grandMA3 Fader Module Encoder(MFE) | grandMA3 Fader Module Crossfader(MFX) |
| ------- | -------- | -------------------------- | ---------------------------------- | ------------------------------------- |
| 0       | 1        |                            |                                    |                                       |
| 1       | 2        |                            |                                    |                                       |
| 2       | 3        | ENCODER\_INSIDE4           | EXEC\_108                          | EXEC\_108                             |
| 3       | 4        | ENCODER\_OUTSIDE3          | EXEC\_110                          | EXEC\_110                             |
| 4       | 5        |                            |                                    |                                       |
| 5       | 6        |                            |                                    |                                       |
| 6       | 7        |                            |                                    |                                       |
| 7       | 8        |                            |                                    |                                       |
| 8       | 9        |                            |                                    |                                       |
| 9       | 10       | ENCODER\_INSIDE2           | EXEC\_211                          | EXEC\_211                             |
| 10      | 11       | EXEC\_GrandKnob            | EXEC\_212                          | EXEC\_212                             |
| 11      | 12       | MENU                       | EXEC\_213                          | EXEC\_213                             |
| 12      | 13       |                            | EXEC\_214                          | EXEC\_214                             |
| 13      | 14       | ENCODER\_OUTSIDE2          | EXEC\_215                          | EXEC\_215                             |
| 14      | 15       | ENCODER\_INSIDE1           |                                    |                                       |
| 15      | 16       | ENCODER\_OUTSIDE1          |                                    |                                       |
| 16      | 17       |                            | EXEC\_209                          | EXEC\_209                             |
| 17      | 18       |                            | EXEC\_210                          | EXEC\_210                             |
| 18      | 19       |                            | EXEC\_208                          | EXEC\_208                             |
| 19      | 20       |                            |                                    |                                       |
| 20      | 21       |                            |                                    |                                       |
| 21      | 22       |                            |                                    | DEF\_GO                               |
| 22      | 23       |                            | EXEC\_115                          | EXEC\_115                             |
| 23      | 24       |                            | EXEC\_114                          | EXEC\_114                             |
| 24      | 25       |                            | EXEC\_113                          | EXEC\_113                             |
| 25      | 26       |                            | EXEC\_112                          | EXEC\_112                             |
| 26      | 27       |                            | EXEC\_207                          | EXEC\_207                             |
| 27      | 28       |                            | EXEC\_206                          | EXEC\_206                             |
| 28      | 29       |                            | EXEC\_205                          | EXEC\_205                             |
| 29      | 30       |                            |                                    |                                       |
| 30      | 31       |                            |                                    |                                       |
| 31      | 32       |                            |                                    |                                       |
| 32      | 33       |                            | EXEC\_105                          | EXEC\_105                             |
| 33      | 34       | ENCODER\_OUTSIDE4          | EXEC\_106                          | EXEC\_106                             |
| 34      | 35       |                            | EXEC\_107                          | EXEC\_107                             |
| 35      | 36       |                            |                                    |                                       |
| 36      | 37       |                            |                                    |                                       |
| 37      | 38       |                            | EXEC\_109                          | EXEC\_109                             |
| 38      | 39       |                            | EXEC\_204                          | EXEC\_204                             |
| 39      | 40       |                            | EXEC\_203                          | EXEC\_203                             |
| 40      | 41       |                            | EXEC\_202                          | EXEC\_202                             |
| 41      | 42       |                            | EXEC\_201                          | EXEC\_201                             |
| 42      | 43       |                            |                                    | EXEC\_XFade2Btn                       |
| 43      | 44       |                            |                                    | DEF\_PAUSE                            |
| 44      | 45       |                            |                                    | EXEC\_XFade1Btn                       |
| 45      | 46       |                            | EXEC\_111                          | EXEC\_111                             |
| 46      | 47       | ENCODER\_OUTSIDE5          | EXEC\_101                          | EXEC\_101                             |
| 47      | 48       | ENCODER\_INSIDE5           | EXEC\_102                          | EXEC\_102                             |
| 48      | 49       |                            | EXEC\_103                          | EXEC\_103                             |
| 49      | 50       |                            | EXEC\_104                          | EXEC\_104                             |
| 50      | 51       | ENCODER\_INSIDE3           |                                    | DEF\_GOBACK                           |
| 51      | 52       |                            |                                    |                                       |
| 52      | 53       |                            |                                    |                                       |
| 53      | 54       |                            |                                    |                                       |
| 54      | 55       |                            |                                    |                                       |
| 55      | 56       |                            |                                    |                                       |
| 56      | 57       |                            |                                    |                                       |
| 57      | 58       |                            |                                    |                                       |
| 58      | 59       |                            | FADER\_211                         | FADER\_211                            |
| 59      | 60       |                            | FADER\_212                         | FADER\_212                            |
| 60      | 61       |                            | FADER\_213                         | FADER\_213                            |
| 61      | 62       |                            | FADER\_214                         | FADER\_214                            |
| 62      | 63       |                            | FADER\_215                         | FADER\_215                            |
| 63      | 64       |                            |                                    | FADER\_XFade1                         |
| 64      | 65       |                            |                                    |                                       |
| 65      | 66       |                            |                                    |                                       |
| 66      | 67       | ESC                        | FADER\_312 (Disabled)              | FADER\_312 (Disabled)                 |
| 67      | 68       | CLEAR                      | FADER\_311 (Disabled)              | FADER\_311 (Disabled)                 |
| 68      | 69       |                            |                                    |                                       |
| 69      | 70       |                            |                                    |                                       |
| 70      | 71       |                            |                                    |                                       |
| 71      | 72       |                            |                                    |                                       |
| 72      | 73       |                            |                                    |                                       |
| 73      | 74       | HELP                       | FADER\_413 (Disabled)              | FADER\_413 (Disabled)                 |
| 74      | 75       |                            | EXEC\_411                          | EXEC\_411                             |
| 75      | 76       | GOTO                       | EXEC\_412                          | EXEC\_412                             |
| 76      | 77       |                            |                                    |                                       |
| 77      | 78       | ALIGN                      | FADER\_414 (Disabled)              | FADER\_414 (Disabled)                 |
| 78      | 79       | COPY                       | FADER\_411 (Disabled)              | FADER\_411 (Disabled)                 |
| 79      | 80       | OFF                        | FADER\_412 (Disabled)              | FADER\_412 (Disabled)                 |
| 80      | 81       | FULL                       | EXEC\_415                          | EXEC\_415                             |
| 81      | 82       |                            | EXEC\_414                          | EXEC\_414                             |
| 82      | 83       | PLEASE                     | EXEC\_413                          | EXEC\_413                             |
| 83      | 84       | NUM4                       |                                    |                                       |
| 84      | 85       | NUM5                       |                                    |                                       |
| 85      | 86       | UNDO                       |                                    |                                       |
| 86      | 87       | GROUP                      |                                    |                                       |
| 87      | 88       | THRU                       |                                    |                                       |
| 88      | 89       | NUM6                       |                                    |                                       |
| 89      | 90       | NUM2                       |                                    |                                       |
| 90      | 91       |                            |                                    |                                       |
| 91      | 92       | STORE                      |                                    |                                       |
| 92      | 93       | ASSIGN                     |                                    |                                       |
| 93      | 94       |                            |                                    |                                       |
| 94      | 95       |                            |                                    |                                       |
| 95      | 96       |                            |                                    |                                       |
| 96      | 97       | AT                         | EXEC\_312                          | EXEC\_312                             |
| 97      | 98       | MA1                        | FADER\_313 (Disabled)              | FADER\_313 (Disabled)                 |
| 98      | 99       | SLASH                      | EXEC\_311                          | EXEC\_311                             |
| 99      | 100      | NUM1                       |                                    |                                       |
| 100     | 101      | CUE                        |                                    |                                       |
| 101     | 102      | TIME                       |                                    |                                       |
| 102     | 103      |                            |                                    |                                       |
| 103     | 104      | SEQUENCE                   |                                    |                                       |
| 104     | 105      |                            |                                    |                                       |
| 105     | 106      | CHANNEL                    |                                    |                                       |
| 106     | 107      | NUM7                       |                                    |                                       |
| 107     | 108      | NUM8                       |                                    |                                       |
| 108     | 109      | NUM9                       |                                    |                                       |
| 109     | 110      | NUM3                       | EXEC\_313                          | EXEC\_313                             |
| 110     | 111      | MINUS                      | FADER\_315 (Disabled)              | FADER\_315 (Disabled)                 |
| 111     | 112      | NUM0                       | FADER\_314 (Disabled)              | FADER\_314 (Disabled)                 |
| 112     | 113      | DOT                        | EXEC\_314                          | EXEC\_314                             |
| 113     | 114      | IF                         | EXEC\_315                          | EXEC\_315                             |
| 114     | 115      | PLUS                       | FADER\_415 (Disabled)              | FADER\_415 (Disabled)                 |
| 115     | 116      |                            |                                    |                                       |
| 116     | 117      |                            |                                    |                                       |
| 117     | 118      |                            |                                    |                                       |
| 118     | 119      |                            |                                    |                                       |
| 119     | 120      |                            |                                    |                                       |
| 120     | 121      |                            | FADER\_209                         | FADER\_209                            |
| 121     | 122      |                            | FADER\_210                         | FADER\_210                            |
| 122     | 123      |                            |                                    | FADER\_XFade2                         |
| 123     | 124      |                            |                                    |                                       |
| 124     | 125      |                            |                                    |                                       |
| 125     | 126      |                            |                                    |                                       |
| 126     | 127      |                            |                                    |                                       |
| 127     | 128      |                            |                                    |                                       |
| 128     | 129      |                            |                                    |                                       |
| 129     | 130      |                            |                                    |                                       |
| 130     | 131      |                            | FADER\_307 (Disabled)              | FADER\_307 (Disabled)                 |
| 131     | 132      | LEARN                      | FADER\_306 (Disabled)              | FADER\_306 (Disabled)                 |
| 132     | 133      |                            |                                    |                                       |
| 133     | 134      |                            |                                    |                                       |
| 134     | 135      |                            |                                    |                                       |
| 135     | 136      |                            |                                    |                                       |
| 136     | 137      |                            |                                    |                                       |
| 137     | 138      | FADER\_297 (Disabled)      | FADER\_408 (Disabled)              | FADER\_408 (Disabled)                 |
| 138     | 139      | X5                         | EXEC\_406                          | EXEC\_406                             |
| 139     | 140      | X6                         | EXEC\_407                          | EXEC\_407                             |
| 140     | 141      |                            |                                    |                                       |
| 141     | 142      | FADER\_298 (Disabled)      | FADER\_409 (Disabled)              | FADER\_409 (Disabled)                 |
| 142     | 143      | FADER\_295 (Disabled)      | FADER\_406 (Disabled)              | FADER\_406 (Disabled)                 |
| 143     | 144      | FADER\_296 (Disabled)      | FADER\_407 (Disabled)              | FADER\_407 (Disabled)                 |
| 144     | 145      | GOFAST                     | EXEC\_410                          | EXEC\_410                             |
| 145     | 146      | X13                        | EXEC\_409                          | EXEC\_409                             |
| 146     | 147      | X14                        | EXEC\_408                          | EXEC\_408                             |
| 147     | 148      |                            |                                    |                                       |
| 148     | 149      |                            |                                    |                                       |
| 149     | 150      |                            |                                    |                                       |
| 150     | 151      |                            |                                    |                                       |
| 151     | 152      |                            |                                    |                                       |
| 152     | 153      |                            |                                    |                                       |
| 153     | 154      | DELETE                     |                                    |                                       |
| 154     | 155      | X15                        |                                    |                                       |
| 155     | 156      | GOBACKFAST                 |                                    |                                       |
| 156     | 157      | X8                         |                                    |                                       |
| 157     | 158      |                            |                                    |                                       |
| 158     | 159      |                            |                                    |                                       |
| 159     | 160      |                            |                                    |                                       |
| 160     | 161      | STOMP                      | EXEC\_307                          | EXEC\_307                             |
| 161     | 162      | SELECT                     | FADER\_308 (Disabled)              | FADER\_308 (Disabled)                 |
| 162     | 163      |                            | EXEC\_306                          | EXEC\_306                             |
| 163     | 164      |                            |                                    |                                       |
| 164     | 165      |                            |                                    |                                       |
| 165     | 166      |                            |                                    |                                       |
| 166     | 167      |                            |                                    |                                       |
| 167     | 168      |                            |                                    |                                       |
| 168     | 169      | X16                        |                                    |                                       |
| 169     | 170      | X7                         |                                    |                                       |
| 170     | 171      |                            |                                    |                                       |
| 171     | 172      | ON                         |                                    |                                       |
| 172     | 173      | MOVE                       |                                    |                                       |
| 173     | 174      | FIXTURE                    | EXEC\_308                          | EXEC\_308                             |
| 174     | 175      | PRESET                     | FADER\_310 (Disabled)              | FADER\_310 (Disabled)                 |
| 175     | 176      | EDIT                       | FADER\_309 (Disabled)              | FADER\_309 (Disabled)                 |
| 176     | 177      | UPDATE                     | EXEC\_309                          | EXEC\_309                             |
| 177     | 178      |                            | EXEC\_310                          | EXEC\_310                             |
| 178     | 179      |                            | FADER\_410 (Disabled)              | FADER\_410 (Disabled)                 |
| 179     | 180      |                            |                                    |                                       |
| 180     | 181      |                            |                                    |                                       |
| 181     | 182      |                            |                                    |                                       |
| 182     | 183      |                            |                                    |                                       |
| 183     | 184      |                            |                                    |                                       |
| 184     | 185      |                            |                                    |                                       |
| 185     | 186      |                            |                                    |                                       |
| 186     | 187      |                            | FADER\_203                         | FADER\_203                            |
| 187     | 188      |                            | FADER\_204                         | FADER\_204                            |
| 188     | 189      |                            | FADER\_205                         | FADER\_205                            |
| 189     | 190      |                            | FADER\_206                         | FADER\_206                            |
| 190     | 191      |                            | FADER\_207                         | FADER\_207                            |
| 191     | 192      |                            | FADER\_208                         | FADER\_208                            |
| 192     | 193      |                            |                                    |                                       |
| 193     | 194      |                            |                                    |                                       |
| 194     | 195      | PAUSE                      | FADER\_302 (Disabled)              | FADER\_302 (Disabled)                 |
| 195     | 196      | GOBACK                     | FADER\_301 (Disabled)              | FADER\_301 (Disabled)                 |
| 196     | 197      |                            |                                    |                                       |
| 197     | 198      |                            |                                    |                                       |
| 198     | 199      |                            |                                    |                                       |
| 199     | 200      |                            |                                    |                                       |
| 200     | 201      |                            |                                    |                                       |
| 201     | 202      | FADER\_293 (Disabled)      | FADER\_403 (Disabled)              | FADER\_403 (Disabled)                 |
| 202     | 203      | SOLO                       | EXEC\_401                          | EXEC\_401                             |
| 203     | 204      | HIGHLIGHT                  | EXEC\_402                          | EXEC\_402                             |
| 204     | 205      |                            |                                    |                                       |
| 205     | 206      | FADER\_294 (Disabled)      | FADER\_404 (Disabled)              | FADER\_404 (Disabled)                 |
| 206     | 207      | FADER\_291 (Disabled)      | FADER\_401 (Disabled)              | FADER\_401 (Disabled)                 |
| 207     | 208      | FADER\_292 (Disabled)      | FADER\_402 (Disabled)              | FADER\_402 (Disabled)                 |
| 208     | 209      | GO                         | EXEC\_405                          | EXEC\_405                             |
| 209     | 210      | LIST                       | EXEC\_404                          | EXEC\_404                             |
| 210     | 211      | PAGE\_DOWN                 | EXEC\_403                          | EXEC\_403                             |
| 211     | 212      |                            |                                    |                                       |
| 212     | 213      |                            |                                    |                                       |
| 213     | 214      |                            |                                    |                                       |
| 214     | 215      |                            |                                    |                                       |
| 215     | 216      | SELFIX                     |                                    |                                       |
| 216     | 217      | MA2                        |                                    |                                       |
| 217     | 218      |                            |                                    |                                       |
| 218     | 219      | PAGE\_UP                   |                                    |                                       |
| 219     | 220      | XKEYS                      |                                    |                                       |
| 220     | 221      | BLIND                      |                                    |                                       |
| 221     | 222      |                            |                                    |                                       |
| 222     | 223      |                            |                                    |                                       |
| 223     | 224      |                            |                                    |                                       |
| 224     | 225      | X10                        | EXEC\_302                          | EXEC\_302                             |
| 225     | 226      | X11                        | FADER\_303 (Disabled)              | FADER\_303 (Disabled)                 |
| 226     | 227      | X12                        | EXEC\_301                          | EXEC\_301                             |
| 227     | 228      |                            |                                    |                                       |
| 228     | 229      |                            |                                    |                                       |
| 229     | 230      |                            |                                    |                                       |
| 230     | 231      |                            |                                    |                                       |
| 231     | 232      | PREVIEW                    |                                    |                                       |
| 232     | 233      | FREEZE                     |                                    |                                       |
| 233     | 234      | DOWN                       |                                    |                                       |
| 234     | 235      | PREV                       |                                    |                                       |
| 235     | 236      | SET                        |                                    |                                       |
| 236     | 237      | UP                         |                                    |                                       |
| 237     | 238      | X1                         | EXEC\_303                          | EXEC\_303                             |
| 238     | 239      | X2                         | FADER\_305 (Disabled)              | FADER\_305 (Disabled)                 |
| 239     | 240      | X3                         | FADER\_304 (Disabled)              | FADER\_304 (Disabled)                 |
| 240     | 241      | X4                         | EXEC\_304                          | EXEC\_304                             |
| 241     | 242      | X9                         | EXEC\_305                          | EXEC\_305                             |
| 242     | 243      | NEXT                       | FADER\_405 (Disabled)              | FADER\_405 (Disabled)                 |
| 243     | 244      |                            |                                    |                                       |
| 244     | 245      |                            |                                    |                                       |
| 245     | 246      |                            |                                    |                                       |
| 246     | 247      |                            |                                    |                                       |
| 247     | 248      |                            |                                    |                                       |
| 248     | 249      |                            | FADER\_201                         | FADER\_201                            |
| 249     | 250      |                            | FADER\_202                         | FADER\_202                            |
| 250     | 251      |                            |                                    |                                       |
| 251     | 252      |                            |                                    |                                       |
| 252     | 253      |                            |                                    |                                       |
| 253     | 254      |                            |                                    |                                       |
| 254     | 255      |                            |                                    |                                       |
| 255     | 256      |                            |                                    |                                       |
| 256     | 257      |                            |                                    |                                       |
| 257     | 258      |                            |                                    |                                       |
| 258     | 259      |                            | EXEC\_RateBtn2                     |                                       |
| 259     | 260      |                            | EXEC\_ExecBtn1                     |                                       |
| 260     | 261      |                            |                                    |                                       |
| 261     | 262      |                            |                                    |                                       |
| 262     | 263      |                            |                                    |                                       |
| 263     | 264      |                            |                                    |                                       |
| 264     | 265      |                            |                                    |                                       |
| 265     | 266      |                            |                                    |                                       |
| 266     | 267      |                            |                                    |                                       |
| 267     | 268      |                            |                                    |                                       |
| 268     | 269      |                            |                                    |                                       |
| 269     | 270      |                            |                                    |                                       |
| 270     | 271      |                            | EXEC\_ProgEncoder                  |                                       |
| 271     | 272      |                            | EXEC\_ExecEncoder                  |                                       |
| 272     | 273      |                            |                                    |                                       |
| 273     | 274      |                            |                                    |                                       |
| 274     | 275      |                            |                                    |                                       |
| 275     | 276      |                            |                                    |                                       |
| 276     | 277      |                            |                                    |                                       |
| 277     | 278      |                            |                                    |                                       |
| 278     | 279      |                            |                                    |                                       |
| 279     | 280      |                            |                                    |                                       |
| 280     | 281      |                            |                                    |                                       |
| 281     | 282      |                            |                                    |                                       |
| 282     | 283      |                            |                                    |                                       |
| 283     | 284      |                            |                                    |                                       |
| 284     | 285      |                            |                                    |                                       |
| 285     | 286      |                            |                                    |                                       |
| 286     | 287      |                            |                                    |                                       |
| 287     | 288      |                            |                                    |                                       |
| 288     | 289      |                            | EXEC\_SpeedBtn1                    |                                       |
| 289     | 290      |                            | EXEC\_RateBtn1                     |                                       |
| 290     | 291      |                            | EXEC\_SpeedBtn2                    |                                       |
| 291     | 292      |                            |                                    |                                       |
| 292     | 293      |                            |                                    |                                       |
| 293     | 294      |                            |                                    |                                       |
| 294     | 295      |                            |                                    |                                       |
| 295     | 296      |                            |                                    |                                       |
| 296     | 297      |                            |                                    |                                       |
| 297     | 298      |                            |                                    |                                       |
| 298     | 299      |                            | EXEC\_ProgBtn1                     |                                       |
| 299     | 300      |                            | EXEC\_ProgBtn2                     |                                       |
| 300     | 301      |                            | EXEC\_ProgBtn3                     |                                       |
| 301     | 302      |                            |                                    |                                       |
| 302     | 303      |                            |                                    |                                       |
| 303     | 304      |                            |                                    |                                       |
| 304     | 305      |                            | EXEC\_ExecBtn3                     |                                       |
| 305     | 306      |                            | EXEC\_ExecBtn2                     |                                       |
| 306     | 307      |                            |                                    |                                       |
| 307     | 308      |                            |                                    |                                       |
| 308     | 309      |                            |                                    |                                       |
| 309     | 310      |                            |                                    |                                       |

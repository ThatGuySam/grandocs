---
title: "Videos"
description: "Videos can be used as a source for an appearance or in a Bitmap."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/videos.html"
scrapedAt: "2026-06-15T18:25:23.051Z"
pagefind: false
---
Videos can be used as a source for an appearance or in a Bitmap.

The bitmaps are an effect that can "project" a video or image on a set of fixtures. Learn more in the [Bitmap topic](/grandma3/2-3/bitmap/).

Videos can be imported into the Video Pool.

![](/img/grandma3/2-3/window_video-pool_v2-1-78fad1.png)

Videos pool

The videos pool holds the imported videos, but can also have streaming video sources using the NDI format.

The video objects can be used as an image source in Appearances. Learn more about appearances in the [Appearances section](/grandma3/2-3/appear/).

The video will then play back in a loop everywhere the appearance is used.

If the video is used on a bitmap, it should not exceed 60 Hz. 30 Hz is recommended, as the DMX output is not faster than 30 Hz.

The system can overload and crash if a high-resolution (8K) video is previewed. It is recommended that the video file should not exceed a resolution of 1 920 x 1 080 pixels.

|                                                    |                                                                                                                                                                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                                                                                                                                      |
|                                                    | Third-Party Software needs to be activated and agreed to in Menu / Settings / Software Update / EULA for videos to be played back. The button is in the lower right corner. Turning it On opens a pop-up that needs to be agreed to.  |

|                                                    |                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                        |
|                                                    | The overall size of the media pools is limited to a maximum of 300 MB.  |

## Import a Video

The video file needs to be in the correct folder to be imported. The folder is /gma3\_library/media/videos. Learn more about folders in the [Folder Structure topic](/grandma3/2-3/fm_folder_structure/).

1. Edit an empty video pool object. This opens the **Edit Video** pop-up:

![](/img/grandma3/2-3/popup_edit-video_v2-1-da28bd.png)

Edit video pop-up

2. Tap Import to start the import process. This opens a new pop-up:

![](/img/grandma3/2-3/popup_select-image-for-import_v2-2-18c5d9.png)

Select image for import pop-up

This lists all the video files in the video folder.

3. If needed, then tap Internal in the title bar of the pop-up to change the selected drive.
4. Tap the desired video file. The video should play back in the preview area. If it does not appear, then it is not a supported format, or third-party software is not activated.
5. Tap Import. This returns to the **Edit Video** pop-up:

![](/img/grandma3/2-3/img_video-import-with-file-selected_v2-1-8bd068.png)

Edit video pop-up with a file selected

The editor now shows relevant data like video width, height, and file size.

6. Edit the name if desired.
7. The file is imported and the editor can be closed by tapping the ![](/img/grandma3/2-3/icon_cross_v0-1-fe6968.png).

## Use an NDI Source

An NDI streaming video source can be used instead of importing a video file.

**Requirement:**

An NDI stream needs to be on the network.

1. Edit an empty video pool object. This opens the **Edit Video** pop-up.
2. Tap Source.
3. Tap NDI in the **Select Source** pop-up.
4. Tap Select Source. This opens the **Select NDISource** pop-up.
5. Tap the desired NDI source. If the list is empty then there are no NDI sources in the network or third-party software is not activated.
6. Select the desired bandwidth setting.
7. Close the editor by tapping the ![](/img/grandma3/2-3/icon_cross_v0-1-fe6968.png).

Two bandwidth options are available. The bandwidth option defines the requested quality of the stream. The higher quality uses more bandwidth, and the network setup should be considered when choosing the bandwidth setting.

## Create an Appearance with Video

Adding a video to an appearance is almost the same as adding an image from the image pool.

The difference is that ImageSource needs to change to "Videos" in the title bar of the **Select Image** pop-up.

Learn how in the [Create Appearances](/grandma3/2-3/appear_create/) topic.

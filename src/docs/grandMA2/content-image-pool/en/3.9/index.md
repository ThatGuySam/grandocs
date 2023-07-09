---
originalUrl: 'http://help2.malighting.com/Page/grandMA2/content-image-pool/en/3.9'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="13">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="92d7b51c-4b30-4af8-ada2-09c3d2d2d155">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/content-editor/en/3.9'; " title="Go to previous page 'Content Editor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/content-text-ticker/en/3.9';" title="Go to next page 'Content: Text Ticker'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55302/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Content: Image Pool (I-Pool)</h1>


		<p>MA VPU comes with a sample library containing images, gobos and video clips. This content is preinstalled on the VPUs and can be ordered from MA Lighting.</p>

<p>Similar to the magazine of a slide projector such a folder behaves like a slide magazine. Up to 255 folders can be accessed directly from the desk. The different images and videos of a folder correspond to the „Channel Sets" of the desk and can be accessed from there. To insert images and videos click with the right mouse button somewhere in the ‚I-Pool Folder" or ‚Channel Functions' field and navigate in the upcoming dialog to the folder where the images and videos are located. It is not recommended to use an external drive for the content, we recommend to copy the files to the content drive D:. After the selection of the folder and confirming with „OK" it will take a while until the images are shown because MA VPU has to build a so-called thumbnail (little image) for all items. Therefore each file has to be opened and searched for a usable picture.</p>

<table>
	<tbody>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_00.png"></td>
			<td>Items can be edited, changed or deleted via the context menu of the right mouse button.<br>
			Data of the items like size, framerate and length are shown in a grid.<br>
			If an item is selected its preview is shown in the preview window at the lower left side of the screen.<br>
			Multiple items can be selected if you hold down the 'Ctrl’ key while selecting items or use the mouse as a lasso.<br>
			Hotkeys, 'Ctrl’ + x,c,v (Cut, Copy, Paste) and 'delete’ are allowed</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_01.png"></td>
			<td>Video clips do have a video thumbnail showing the first frame of this clip. If the clip contains sound this is indicated by a yellow speaker icon.<br>
			If the clip is selected you can see a preview in the left corner below.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_02.png"></td>
			<td>If a clip does not fulfill the content specifications this will be indicated by a red marked text.<br>
			If the content fullfills the specifications of the Hap Converter, you can use the Hap Converter to convert the content to a valid format which can be played back.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_03.png"></td>
			<td>Sound only files like mp3 or wav are displayed with a speaker icon.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_layerreference.png"></td>
			<td>
			<p>Layer Reference: This allows any Layer to take the output of another layer as input. This saves performance because a video must not be decoded twice.<br>
			<strong>Note</strong>: Only the video itself is feed into the other layer, not the changes in color or effects etc.</p>
			</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_04.png"></td>
			<td>To assign a new folder to a 'Channel Function' click with the left mouse button into a line.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_05.png"></td>
			<td>A context dialog appears.<br>
			After selecting the entry a browser window appears where you can navigate to the folder containing the videos.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_06.png"></td>
			<td>After the selection of the folder its name is taken as a name for the ‚Channel Function' as shown in this example ‚Test Images'.<br>
			You can change the name via the context menu with the right mouse button</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_insertdynamictestimage.png"></td>
			<td>Insert&nbsp;<strong>Dynamic Test Images&nbsp;</strong>This function generates 10 different test images related to the connected outputs ratio and inserts them into the next free slots.</td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_dynamictestimages.png"></td>
			<td>These images can be used to adjust the output geometry and colors.&nbsp;<br>
			<strong>Note</strong>: To get the 1:1 pixel correct display of the test pattern make sure to use the @Native Object only!</td>
		</tr>
		<tr>
			<td><strong>Export and Import Function Blocks</strong></td>
		</tr>
		<tr>
			<td><img alt="" src="/Media/Image/vpu_contenti-pool_07.png"></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>With this function it is easy to change Fixture Types of old shows without losing content information or manually inserting it again.</p>

<p>&nbsp;</p>

<p>1. Export Function Blocks</p>

<p>2. Exchange Fixture Type</p>

<p>3. Import Function Block again</p>

<p>4. The show can go on!</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="13">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="92d7b51c-4b30-4af8-ada2-09c3d2d2d155">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/content-editor/en/3.9'; " title="Go to previous page 'Content Editor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/content-text-ticker/en/3.9';" title="Go to next page 'Content: Text Ticker'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55302/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

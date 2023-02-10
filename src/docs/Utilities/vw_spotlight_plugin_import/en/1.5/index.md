---
originalUrl: 'http://help2.malighting.com/Page/Utilities/vw_spotlight_plugin_import/en/1.5'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="5">1.1</option>
<option value="9">1.2</option>
<option value="13">1.3</option>
<option value="17">1.4</option>
<option selected="selected" value="20">1.5</option>
<option value="34">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="23">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c3660169-2c1a-44c9-94a2-081b5325108e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/Utilities/vw_spotlight_plugin_export_customizing/en/1.5'; " title="Go to previous page 'Export and Customizing'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" disabled="disabled">
				next <i class="icon-arrow-right"></i>
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/34/c3660169-2c1a-44c9-94a2-081b5325108e">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/42030/20'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Import</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Import to the&nbsp;grandMA2 onPC</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">​Import to the&nbsp;grandMA2 Console&nbsp;&nbsp;</a>
						</li>
				</ul>
			</div>

		<p>It is possible to import the fixtures into the&nbsp;grandMA2 onPC or the grandMA2 console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Import to the&nbsp;grandMA2 onPC</h2>

<p>1. To import the fixtures, copy the file into the&nbsp;<strong>importexport folder </strong>in the&nbsp;grandMA2&nbsp;onPC:</p>

<p><strong>Windows Vista/Win7:</strong></p>

<p>C:\ProgramData\MA Lighting Technologies\grandma\gma2_V_xxx\importexport</p>

<p><strong>Windows XP:</strong><br>
C:\Document and Settings\All Users\Application Data\MA Lighting Technologies\grandma\gma2_V_xxx\importexport</p>

<p>​2. <a id="import_grandMA2_onPC" name="import_grandMA2_onPC"></a>Change the destination of the command line to Edit Setup:</p>

<div class="cl_input">Channel&gt; CD EditSetup</div>

<p>If you selected the option "One single Layer", type:</p>

<div class="cl_input">EditSetup&gt; CD Layers</div>

<div class="tip"><strong>Hint:</strong><br>
If you selected the option "One single Layer", you can merge additional layers without overwriting the existing layers.&nbsp;&nbsp;</div>

<p>3. Import the fixtures from the file:</p>

<div class="important"><strong>Important:</strong><br>
Type the file name in the command:<br>
-Without the xml. extension<br>
-If the file name uses spaces, use quotation marks&nbsp;</div>

<div class="cl_input">EditSetup&gt; Import "file name without extension" At Layers</div>

<p>If you used the option "All in Single Layer", type:</p>

<div class="cl_input">EditSetup&gt; Import "file name without extension" At Layer "number of layer"</div>

<div class="important"><strong>Important:</strong><br>
Place the file in the <strong>"gma2/importexport"</strong> folder or the<br>
<strong>"gma2/fixture_layers"</strong> folder of your thumb drive.<br>
<br>
If you use the "importexport" folder, the import syntax is <span class="syntax">Import "file name" At Layer [number of layer]</span>.<br>
If you use the "fixture_layers" folder, the import syntax is <span class="syntax">Import "file name" At [number of layer]</span>.</div>

<ul>
	<li>If the error message "File Not Found" appears, even though you have copied the file into the correct directory and the file is correctly spelled, change the drive.&nbsp;</li>
	<li>To make sure that the grandMA2 onPC uses the correct directory, type:</li>
</ul>

<div class="cl_input">EditSetup&gt; SelectDrive&nbsp;1</div>

<p>-or-</p>

<p>Click the <span class="softkey">Internal</span><strong> </strong>tab in the Backup dialog.</p>

<p>4. To exit the EditSetup directory, type:</p>

<div class="cl_input">[Channel]&gt; CD Root</div>

<p>5. If the import succeeded, check the Patch dialog.&nbsp;</p>

<p>Fixtures are now imported to the grandMA2 onPC.&nbsp;</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>​Import to the&nbsp;grandMA2 Console&nbsp;&nbsp;</h2>

<p>1. To import the fixtures, copy the file into the <strong>gma2/importexport folder&nbsp;</strong>on your USB flash drive.</p>

<p>2. Insert the USB flash drive into the grandMA2&nbsp;console.</p>

<p>3. To change the media for the import, type:</p>

<div class="cl_input">[Channel]&gt; SelectDrive</div>

<p>&nbsp;4. Open the command line feedback.</p>

<figure class="caption"><img alt="" src="/Media/Image/vw_selectdrive_1.png">
<figcaption><em>USB flash drive displayed in the command line feedback</em></figcaption>
</figure>

<p>Show file drive number 4 is the connected USB flash drive.</p>

<p>5. To change destination to the USB flash drive, type:</p>

<div class="cl_input">[Channel]&gt; SelectDrive 4</div>

<p>6. Proceed as described in <a href="#import_grandMA2_onPC">step 2 to 5 in the import to the grandMA2 onPC</a>.</p>

<p>Fixtures are now imported to the grandMA2 console.&nbsp;</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="5">1.1</option>
<option value="9">1.2</option>
<option value="13">1.3</option>
<option value="17">1.4</option>
<option selected="selected" value="20">1.5</option>
<option value="34">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="23">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c3660169-2c1a-44c9-94a2-081b5325108e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/Utilities/vw_spotlight_plugin_export_customizing/en/1.5'; " title="Go to previous page 'Export and Customizing'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" disabled="disabled">
				next <i class="icon-arrow-right"></i>
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/42030/20';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

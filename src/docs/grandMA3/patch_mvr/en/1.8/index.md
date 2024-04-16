---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/patch_mvr/en/1.8'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c9a9fe9f-a9fd-44c0-9a8a-128f74b2837f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/patch_add_multipatch/en/1.8'; " title="Go to previous page 'Add multipatch fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/patch_live/en/1.8';" title="Go to next page 'Live patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/c9a9fe9f-a9fd-44c0-9a8a-128f74b2837f">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/77878/42'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.8</span>
			</div>
		<h1>My Virtual Rig</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Import MVR</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Export MVR</a>
						</li>
				</ul>
			</div>

		<p>MVR (My Virtual Rig) is a file format that is used to share data for a stage set up between a lighting console, a visualizer, a CAD program or similar tools. This allows for transferring parametric and geometric data between different programs.</p>

<p>It is a complementary system to the GDTF files.</p>

<p>MVR is described in detail in the GDTF wiki (external link): <a href="https://gdtf-share.com/wiki/Main_Page">https://gdtf-share.com/wiki/Main_Page</a></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Import MVR</h2>

<p>MVR files can be imported into a show file. This is done from the <a href="/Topic/93b44178-cd31-48a6-b8a4-f8d694fa0a6a">Patch menu</a>. The MVR file needs to be in the correct folder for the software to find it. The folder is ../gma3_library/mvr. It is the same location if the files are on a USB stick.</p>

<p>There is a button at the bottom of the patch menu called Import MVR. Tapping this opens an <strong>Import MVR</strong> pop-up. This is used to browse and select the MVR file. The source drive can be selected in the title bar by tapping the drive selection button (next to the <img alt="cross" src="/Media/Mlg/cross.png">).</p>

<p>Select the desired file in the list and tap <span class="softkey">Import MVR</span> to import the MVR file.</p>

<p>The content of the MVR file is added to the patch and the information in the MVR files means that there might be added <a href="/Topic/86e123e7-9b89-4987-abfc-0dfe4cff1fb9">Layers, Classes</a>, stage elements, or fixtures.</p>

<p>It is a good idea to store the show file <strong>before</strong> importing the MVR. In case it adds unwanted elements or in worst case corrupts the show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Export MVR</h2>

<p>Exporting the patch to an MVR file is done from the Patch menu. The file is created in the [folder with grandMA3]\shared\resource\lib_mvr folder on the selected drive.</p>

<p>At the bottom of the menu, there is a button called <span class="softkey">Export MVR</span>. Tapping this opens an <strong>Export MVR</strong> pop-up. This can be used to select the desired drive and give the file a name. It also lists already existing MVR files on the selected drive.</p>

<p>The MVR file contains the entire patch including fixture files, stage elements, and organizational elements like the <a href="/Topic/86e123e7-9b89-4987-abfc-0dfe4cff1fb9">Classes and Layers</a>.</p>

<p>It is a good idea to store the show file <strong>before</strong> exporting it to the MVR file.</p>

<div class="important"><strong>Important:</strong><br>
In order to export an MVR file or GDTF file that contains user meshes and gobos, save the show file to the local hard drive before exporting.</div>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c9a9fe9f-a9fd-44c0-9a8a-128f74b2837f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/patch_add_multipatch/en/1.8'; " title="Go to previous page 'Add multipatch fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/patch_live/en/1.8';" title="Go to next page 'Live patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/77878/42';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

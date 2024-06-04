---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/update_viz_key/en/1.9'
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
<option value="42">1.8</option>
<option selected="selected" value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0abafa3e-dc74-4e28-855a-bdee8516aeed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update_windows_hardware/en/1.9'; " title="Go to previous page 'Update grandMA3 onPC windows hardware'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/network_update/en/1.9';" title="Go to next page 'Network update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/87377/43'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Update grandMA3 viz-key</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Update Standalone Third-Party Visualizer Using a USB Stick</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Update Standalone Third-Party Visualizer Using the Local Hard Drive</a>
						</li>
				</ul>
			</div>

		<div class="important"><strong>Important:</strong><br>
The grandMA3 onPC software includes the grandMA3 viz-key software. There is no additional installation required to use the grandMA3 viz-key.<br>
In case that the grandMA3 onPC software is not installed on the computer that is running the visualizer, the separate grandMA3 viz-key software needs to be installed.</div>

<div class="tip"><strong>Hint:</strong><br>
If the grandMA3 viz-key hardware is connected to a grandMA3 onPC station or visualizer, the running software version is sent to the grandMA3 viz-key hardware.</div>

<ul>
	<li>Download the latest grandMA3 viz-key software version from <a href="https://www.malighting.com">www.malighting.com</a>. For more information, see <a href="/Topic/82ccae12-1b1a-4928-90b2-9c79ca54d666" target="_blank">update the software</a>.<br>
	The required installer is called grandMA3 Software x.x.x.x for grandMA3 viz-key.</li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Update Standalone Third-Party Visualizer Using a USB Stick</h2>

<p><strong>Requirement: </strong>The USB flash drive's data system has to be FAT32.&nbsp;</p>

<ol>
	<li>Extract the zip file grandMA3_viz_key_vx.x.x.x.zip and copy the ma folder into the root directory of the USB flash drive.</li>
	<li>Insert the USB flash drive in the grandMA3 onPC or console USB port.</li>
</ol>

<p>Follow the next steps from point 3.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Update Standalone Third-Party Visualizer Using the Local Hard Drive</h2>

<ol>
	<li>Extract the zip file grandMA3_viz_key_vx.x.x.x.zip.</li>
	<li>For Windows systems, copy the files from the ma folder into the directory C:\ProgramData\MALightingTechnology\installation_packages.<br>
	For macOS systems, copy the files from the ma folder into the directory ~/MALightingTechnology/installation_packages. For more information, see <a href="/Topic/3bbda985-114c-4540-ae98-2c1bd47ce8ef">Folder Structure</a>.</li>
	<li>To access&nbsp;<span class="softkey">Software Update</span>, tap&nbsp;<img alt="gear" src="/Media/Image/icon_gear_15px.png">.</li>
	<li>Tap&nbsp;<span class="softkey">Settings</span>.</li>
	<li>Tap<strong>&nbsp;</strong><span class="softkey">Software Update</span>.&nbsp;</li>
</ol>

<div class="important"><strong>Important:&nbsp;</strong><br>
The third-party visualizer must be running in the update mode. For more information, see the manual of the third-party software.</div>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<p>The Software Update window opens:</p>

<figure class="caption"><img alt="" src="/Media/Image/overlay_network_update_viz_v1-9-6.png">
<figcaption>Software Update Window with selected update file</figcaption>
</figure>

<ol start="6">
	<li>Tap <span class="softkey">Select and Import Update Files</span>.<br>
	The Select Update window opens.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/popup_network_update_viz1_v1-9-6.png">
<figcaption>Select Update pop-up</figcaption>
</figure>

<ol start="8">
	<li>Select the location that contains the update files (internal or any plugged-in external device). Select the release_viz_key_vx.x.x.x.xml file.</li>
	<li>Tap <span class="softkey">Select</span>.</li>
	<li>The pop-up closes and the End User License Agreement (EULA) opens.<br>
	Confirm the End User License Agreement (EULA).<br>
	The selected update file is displayed at the title bar of the software update window.</li>
	<li>Select the third-party visualizer with viz-key support. The selected devices turns into bright blue.</li>
	<li>Tap <span class="softkey">Update Devices</span>.</li>
	<li>The software update starts copying files.</li>
	<li>Once the file is transferred, restart the third-party visualizer with the viz-key support software.</li>
</ol>

<div class="tip"><strong>Hint:</strong><br>
To learn more on how to connect, visit <a href="https://www.malighting.com/viz-key">https://www.malighting.com/viz-key</a>.</div>


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
<option value="42">1.8</option>
<option selected="selected" value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0abafa3e-dc74-4e28-855a-bdee8516aeed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/update_windows_hardware/en/1.9'; " title="Go to previous page 'Update grandMA3 onPC windows hardware'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/network_update/en/1.9';" title="Go to next page 'Network update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/87377/43';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

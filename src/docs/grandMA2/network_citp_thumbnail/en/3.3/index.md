---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/network_citp_thumbnail/en/3.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="63872691-dd70-4602-847d-f4b1d708198f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_citp_stream/en/3.3'; " title="Go to previous page 'Streaming CITP'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_psn/en/3.3';" title="Go to next page 'PosiStageNet (PSN)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/63872691-dd70-4602-847d-f4b1d708198f">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/35740/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Thumbnail exchange</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">LightingConsoles tab</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MediaServers tab</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Visualizers tab</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">OperationHubs tab</a>
						</li>
				</ul>
			</div>

		<p>CITP/MSEX protocols are used to transfer information between consoles, media server and visualizers. You can use it to transfer thumbnail pictures of media files from a media server to the console. This puts the thumbnails in the smart view and in the calculator pop-up.</p>

<div class="tip"><strong>Hint</strong><br>
This is not needed with MA VPU. They will automatically exchange the thumbnails using MA-Net.</div>

<div class="restriction"><strong>Restriction</strong><br>
The video layers need to be positioned and patched first in the fixture schedule layer containing the fixtures profiles for the media server for CITP thumbnail exchange to function correctly.</div>

<p>Open the CITP Network Configuration window by pressing the <span class="hardkey">Setup</span> key and then tap the <span class="softkey">CITP Network Configuration</span> in the menu.</p>

<p>The CITP Enabled button in the upper right corner enables the CITP protocol on all consoles in the session.</p>

<p>The IP address listed next to the close button is the Multicast address used by CITP. Pressing it allows you to change the used IP address, please only do this if there is a really good reason for it.</p>

<p>&nbsp;</p>

<p>The configuration have four tabs. Only the MediaServers tab is active right now.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>LightingConsoles tab</h2>

<p>This part is not implemented yet.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MediaServers tab</h2>

<p>Here you add the 3rd party media servers. Press the <span class="softkey">Add</span> button to manually add a media server. Or you can use <span class="softkey">Add Present</span> to automatically add all the Media Server in your network (the ones using CITP). The IP address of the server needs to match the IP address in the IP column.</p>

<p>The <span class="softkey">Delete</span> button deletes the highlighted line.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_citp-network-configuration_media-servers_v3-3.png">
<figcaption><em>CITP&nbsp;Network Configuration - Media Servers with active server</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>If the line has a red background then the server is not present or it have CITP disabled.</p>

<p>A green background indicates an active media server.</p>

<p>&nbsp;</p>

<p>You need to specify the Fixture Layer and have a fixture setup here that matches the Media Server.</p>

<p>If the Library and Image Subattributes is not automatically recognized by the system, then you need to manually select the Library and Image SubAttribute. This is important for the images to go to the correct folder.</p>

<p>The Media Server will provide information like the server "Name", "Port", "Device State", "CITP command", "CITP Version" and "MSEX Version".</p>

<p>When all is set up correctly then you can press the <span class="softkey">Update Thumbnail</span> button. This will start the transfer of the thumbnails to the console. This might take a while and there will be a progress bar in the "CITP Command" cell. It can also be done using the command line. Please read more about it in the <a href="/Topic/dda504ee-28db-4991-94da-e4caf03bf185">UpdateThumbnails</a> command.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Visualizers tab</h2>

<p>This part is not implemented yet.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>OperationHubs tab</h2>

<p>This part is not implemented yet.</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="63872691-dd70-4602-847d-f4b1d708198f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_citp_stream/en/3.3'; " title="Go to previous page 'Streaming CITP'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_psn/en/3.3';" title="Go to next page 'PosiStageNet (PSN)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/35740/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

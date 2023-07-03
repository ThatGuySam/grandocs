---
originalUrl: 'http://help2.malighting.com/Page/grandMA2/fs_connect_ethnert/en/3.7'
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
<option selected="selected" value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="51213454-a4d3-4103-9b28-6817c5853b82">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/fs_connect_smpte_ltc/en/3.7'; " title="Go to previous page 'Connect SMPTE (LTC)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/fs_connect_analog_remote_control/en/3.7';" title="Go to next page 'Connect analog remote control'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/51213454-a4d3-4103-9b28-6817c5853b82">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/45315/23'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.7</span>
			</div>
		<h1>Connect Ethernet</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Ethernet Port 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Ethernet Port 2</a>
						</li>
				</ul>
			</div>

		<p>The grandMA2 console has two Ethernet ports on its rear panel.</p>

<figure class="caption"><img alt="" src="/Media/Image/img_grandma2-ethernet-connector_v3-2.png">
<figcaption><em>Location Ethernet ports</em></figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Ethernet Port 1</h2>

<div class="important"><strong>Information:</strong><br>
The Ethernet port 1 is called eth0&nbsp;in the grandMA2 software.</div>

<div class="important"><strong>Information:</strong><br>
The Ethernet port 1 can be used for the following network protocols:<br>
- MA-Net2<br>
- ETC Net2<br>
- Pathport<br>
- sACN<br>
- Shownet<br>
- Kinet1<br>
- CITP<br>
- PSN</div>

<p><strong>Requirement:</strong><br>
STP&nbsp;(shielded twisted pair) cable with RJ45 connector, min. Cat 5e.</p>

<p>To connect Ethernet port 1:</p>

<ol>
	<li>Connect one end of an Ethernet cable to the <strong>Ethernet 1</strong> port.</li>
	<li>Connect the other end to a suitable switch.</li>
	<li>Connect other grandMA2 equipment to the switch and turn on the power on the switch.</li>
</ol>

<p>Ethernet is connected to port 1.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Ethernet Port 2</h2>

<div class="important"><strong>Information:</strong><br>
The Ethernet port 2 is called eth1 in the grandMA2 software.</div>

<div class="important"><strong>Information:</strong><br>
The Ethernet port 2 can be used for the following network protocols:<br>
- Art-Net<br>
- CITP</div>

<div class="important"><strong>Information:</strong><br>
The IP address is set by default in a 2.x.x.x range. An IP address is required in a 2.x.x.x or 10.x.x.x range for Art-Net.</div>

<p><strong>Requirement:</strong><br>
STP (shielded twisted pair) cable with RJ45 connector, min. Cat 5e.</p>

<p>To connect Ethernet port 2:</p>

<ol>
	<li>Connect one end of a Ethernet cable to the <strong>Ethernet 2</strong> port.</li>
	<li>Connect the other end to a suitable switch.</li>
	<li>Connect other grandMA2 equipment to the switch and turn on the power on the switch.</li>
</ol>

<p>Ethernet is connected to port 2.</p>

<p>&nbsp;</p>


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
<option selected="selected" value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="51213454-a4d3-4103-9b28-6817c5853b82">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/fs_connect_smpte_ltc/en/3.7'; " title="Go to previous page 'Connect SMPTE (LTC)'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/fs_connect_analog_remote_control/en/3.7';" title="Go to next page 'Connect analog remote control'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/45315/23';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

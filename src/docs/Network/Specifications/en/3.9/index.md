---
originalUrl: 'https://help2.malighting.com/Page/Network/Specifications/en/3.9'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="4">3.1</option>
<option value="8">3.2</option>
<option value="11">3.3</option>
<option value="15">3.4</option>
<option value="19">3.5</option>
<option value="22">3.6</option>
<option value="24">3.7</option>
<option value="28">3.8</option>
<option selected="selected" value="33">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="9">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="12233d80-eda1-4f89-bbca-ace94e0e916c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/Network/general_settings_webinterface_grandma2/en/3.9'; " title="Go to previous page 'Web Interface and grandMA2'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/Network/support/en/3.9';" title="Go to next page 'Support'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/56232/33'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Specifications</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Connectivity</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Switch Features</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Port Features&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Status Reports&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Management&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Power Input</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Environmental&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Physical&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Approvals&nbsp;</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Connectivity</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Network</td>
			<td style="width:50%">
			<p>9 x 10/100/1000 Mbps shielded Neutrik etherCON connectors<br>
			1 on the front, 8 on the rear</p>

			<p>4 SFP cages (mini-GBIC)<br>
			2 on the rear, 2 inside the MA Network Switch</p>
			</td>
		</tr>
		<tr>
			<td>Power</td>
			<td>1 x Neutrik powerCON In</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Switch Features</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td>Rapid Spanning Tree Protocol (RSTP)</td>
			<td style="width:50%">Yes</td>
		</tr>
		<tr>
			<td>Groups (=VLANs)</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Link Aggregation (LAG)</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>Port mirroring</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td style="width:50%">Fan</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Ethernet Compliance</td>
			<td>IEEE 802.1Q VLAN<br>
			IEEE 802.1w Rapid Spanning Tree Protocol<br>
			IEEE 802.3, IEEE 802.3i,<br>
			IEEE 802.3u, IEEE 802.3z<br>
			IEEE 802.3x Flow Control,<br>
			IEEE 802.3ab Gigabit Ethernet<br>
			IEEE 802.3ad Link Aggregation</td>
		</tr>
		<tr>
			<td>Supported Protocols</td>
			<td>
			<p>MA-Net2, MA-Net, sACN, Art-Net, and many more.<br>
			IEEE 802.1p CoS (Class of Service)<br>
			DiffServ (DSCP)<br>
			IEEE 1588 PTP V2</p>
			</td>
		</tr>
		<tr>
			<td>Sound Protocol Compliance</td>
			<td>Yes, Low jitter</td>
		</tr>
		<tr>
			<td>Ethernet Switch Type</td>
			<td>Full non blocking wire-speed switching performance</td>
		</tr>
		<tr>
			<td>Memory</td>
			<td>4Mb</td>
		</tr>
		<tr>
			<td>MAC Address Table</td>
			<td>8912 Entries</td>
		</tr>
		<tr>
			<td>Address Learning / Aging</td>
			<td>Self learning, Auto aging</td>
		</tr>
		<tr>
			<td>Switching Throughput</td>
			<td>32Gbps</td>
		</tr>
		<tr>
			<td>IGMP Support</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>IGMP Snooping</td>
			<td>
			<p>Yes</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Port Features&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Port Sensing</td>
			<td style="width:50%">Auto negotiation</td>
		</tr>
		<tr>
			<td>Auto Crossover</td>
			<td>MDI / MDIX (allow to use straight or cross wired cable)</td>
		</tr>
		<tr>
			<td>Auto Sensing</td>
			<td>Full or Half Duplex (Gigabit is Full Duplex)</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Status Reports&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Front End Display</td>
			<td style="width:50%">Yes</td>
		</tr>
		<tr>
			<td>Ethernet Port Connection</td>
			<td>Link, Group</td>
		</tr>
		<tr>
			<td>Ethernet Port Speed</td>
			<td>100/1000Mbps LED</td>
		</tr>
		<tr>
			<td>Device</td>
			<td>Status LED (Green/Red)</td>
		</tr>
		<tr>
			<td>Power</td>
			<td>Status LED (Green/Red)</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Management&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Configuration</td>
			<td>Via the web interface.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Power Input</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Power Input</td>
			<td style="width:50%">
			<p>100 - 240VAC<br>
			50 - 60Hz</p>
			</td>
		</tr>
		<tr>
			<td>Power Consumption</td>
			<td>Maximum 1A</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Environmental&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Operating Temperature</td>
			<td style="width:50%">0 °C to +45 °C<br>
			32 °F to 113 °F</td>
		</tr>
		<tr>
			<td>Storage Temperature</td>
			<td>
			<p>-10 °C to +60 °C</p>

			<p>14 °F to 140 °F</p>
			</td>
		</tr>
		<tr>
			<td>Humidity (non condensing)</td>
			<td>20 % to 80 % relative humidity</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Physical&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td style="width:50%">Enclosure</td>
			<td style="width:50%">Metal housing</td>
		</tr>
		<tr>
			<td>Dimensions (W x D x H)</td>
			<td>483 x 233 x 43 mm<br>
			19" x 9.17" x 1.69"</td>
		</tr>
		<tr>
			<td>Weight without optical fiber connector</td>
			<td>
			<p>3.5 kg</p>

			<p>7.7 pounds</p>
			</td>
		</tr>
		<tr>
			<td>Weight with optical fiber connector</td>
			<td>
			<p>3.7 kg</p>

			<p>8.2 pounds</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Approvals&nbsp;</h2>

<table border="1" cellpadding="5" cellspacing="5" style="width:400px">
	<tbody>
		<tr>
			<td>CE</td>
			<td style="width:50%">Yes</td>
		</tr>
		<tr>
			<td style="width:50%">EN 55103-1</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>EN 55103-2</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>EN 60950-1</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>RoHS Compliance</td>
			<td>Yes</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="4">3.1</option>
<option value="8">3.2</option>
<option value="11">3.3</option>
<option value="15">3.4</option>
<option value="19">3.5</option>
<option value="22">3.6</option>
<option value="24">3.7</option>
<option value="28">3.8</option>
<option selected="selected" value="33">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="9">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="12233d80-eda1-4f89-bbca-ace94e0e916c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/Network/general_settings_webinterface_grandma2/en/3.9'; " title="Go to previous page 'Web Interface and grandMA2'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/Network/support/en/3.9';" title="Go to next page 'Support'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/56232/33';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

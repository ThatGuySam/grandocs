---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/IO_node_Installation/en/1.7'
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
<option selected="selected" value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="40">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="722aabab-32f1-40c0-b6b3-99c582b58984">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/grandMA3_I_O_node/en/1.7'; " title="Go to previous page 'Limitations'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/IO_node_quick_start/en/1.7';" title="Go to next page 'Quick Start'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/74567/40'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.7</span>
			</div>
		<h1>Installation</h1>


		<div class="tip"><strong>Hint:</strong><br>
The grandMA3 I/O Node can be connected with the power cable. Only the grandMA3 I/O Nodes DIN-Rail need to be installed on the rail following DIN EN 60715 and the instructions below.</div>

<div class="important"><strong>Important:</strong><br>
Install the grandMA3 I/O Node DIN-Rail horizontally so that the input terminal is located at the bottom.&nbsp;</div>

<div class="warning"><strong>&nbsp;Warning:</strong><br>
In order for the device to dissipate heat, comply with a minimum distance of 30 mm (approx. 2 inches) above and beneath the grandMA3 I/O Node DIN-Rail.&nbsp;</div>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<ol>
	<li>&nbsp;Install the grandMA3 I/O Node DIN-Rail onto the rail.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/img_install_on_rail_1_1.png">
<figcaption>Place the grandMA3 I/O Node DIN-Rail on the rail.&nbsp;</figcaption>
</figure>

<p>&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_install_on_rail_2_1.png">
<figcaption>Snap into place</figcaption>
</figure>

<ol start="2">
	<li>Build the I/O Node DIN-Rail into the switchboard.</li>
</ol>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h3>Connections</h3>

<figure class="caption"><img alt="" src="/Media/Image/img_GM3_IO-Node-DIN-Rail_connections_Power.png">
<figcaption>Connect with electrical grid</figcaption>
</figure>

<p>-or-&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_GM3_IO-Node-DIN-Rail_connections_PoE.png">
<figcaption>Connect via PoE</figcaption>
</figure>

<p>&nbsp;</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Power</th>
			<th scope="col">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>Connector</p>
			</td>
			<td>
			<p>MC 1.5/ 3-ST1-5.08</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Rigid cables</p>
			</td>
			<td>
			<p>0.75 mm² - 1.5 mm² (18-16 AWG)</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Flexible cables</p>
			</td>
			<td>
			<p>0.75 mm² - 1.5 mm² (18-16 AWG)<br>
			Wire end sleeves are permitted.</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Wire stripping length</p>
			</td>
			<td>
			<p>7 mm&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Tightening torque</p>
			</td>
			<td>
			<p>0.22 Nm - 0.25 Nm</p>
			</td>
		</tr>
	</tbody>
</table>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">MIDI &amp; LTC</th>
			<th scope="col">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>Connector</p>
			</td>
			<td>
			<p>FK-MC 0.5/ 3-ST-2.5</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Rigid cables</p>
			</td>
			<td>
			<p>0.14 mm² - 0.5 mm² (26-20 AWG)</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Flexible cables</p>
			</td>
			<td>
			<p>0.14 mm² - 0.5 mm² (26-20 AWG)<br>
			Wire end sleeves are permitted.&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Wire stripping length</p>
			</td>
			<td>
			<p>8 mm</p>
			</td>
		</tr>
	</tbody>
</table>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">DC Remote</th>
			<th scope="col">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			<p>Connector</p>
			</td>
			<td>
			<p>FK-MC 0.5/ 7-ST-2.5</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Rigid cables</p>
			</td>
			<td>
			<p>0.14 mm² - 0.5 mm² (26-20 AWG)</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Flexible cables</p>
			</td>
			<td>
			<p>0.14 mm² - 0.5 mm² (26-20 AWG)<br>
			Wire end sleeves are permitted.&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>Wire stripping length</p>
			</td>
			<td>
			<p>8 mm</p>
			</td>
		</tr>
	</tbody>
</table>


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
<option selected="selected" value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="40">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="722aabab-32f1-40c0-b6b3-99c582b58984">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/grandMA3_I_O_node/en/1.7'; " title="Go to previous page 'Limitations'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/IO_node_quick_start/en/1.7';" title="Go to next page 'Quick Start'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/74567/40';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/dinrail_installation/en/1.8'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="34">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a8aacd88-0135-48c0-8e04-46f00cdad2be">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dinrail_limitations/en/1.8'; " title="Go to previous page 'Limitations'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dinrail_quick_start/en/1.8';" title="Go to next page 'Quick Start'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/a8aacd88-0135-48c0-8e04-46f00cdad2be">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/78176/42'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.8</span>
			</div>
		<h1>Installation</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Connections</a>
						</li>
				</ul>
			</div>

		<div class="tip"><strong>Hint:</strong><br>
Install the grandMA3 xPort Node DIN-Rail on the rail following DIN EN 60715.&nbsp;</div>

<div class="important"><strong>Important:</strong><br>
Install the grandMA3 xPort Node DIN-Rail horizontally so that the input terminal is located at the bottom and the DMX terminal on top.&nbsp;</div>

<div class="warning"><strong>&nbsp;Warning:</strong><br>
In order for the device to dissipate heat, comply with a minimum distance of 30 mm (approx. 2 inches) above and beneath the grandMA3 xPort Node DIN-Rail.&nbsp;</div>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<ol>
	<li>&nbsp;Install the grandMA3 xPort Node DIN-Rail onto the rail.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/img_install_on_rail_1.png">
<figcaption><em>Place the grandMA3 xPort Node DIN-Rail on the rail</em></figcaption>
</figure>

<p>&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_install_on_rail_2.png">
<figcaption><em>Snap it into place</em></figcaption>
</figure>

<ol start="2">
	<li>Build the xPort Node DIN-Rail into the switchboard.&nbsp;</li>
</ol>

<hr>
<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Connections</h2>

<figure class="caption"><img alt="" src="/Media/Image/img_xPort_DIN_Rail_connections.png">
<figcaption><em>Connect with electrical grid</em></figcaption>
</figure>

<p>-or-&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_xPort_DIN_Rail_connections_PoE.png">
<figcaption><em>Connect via PoE</em></figcaption>
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
			<th scope="col">DMX</th>
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="34">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a8aacd88-0135-48c0-8e04-46f00cdad2be">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dinrail_limitations/en/1.8'; " title="Go to previous page 'Limitations'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dinrail_quick_start/en/1.8';" title="Go to next page 'Quick Start'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/78176/42';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

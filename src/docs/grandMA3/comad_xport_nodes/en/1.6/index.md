---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/comad_xport_nodes/en/1.6'
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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9bbe4bbf-e34e-4a23-8ccf-7bff55e660cf">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/control_other_ma_devices/en/1.6'; " title="Go to previous page 'Control other MA Devices'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/comad_network_switch/en/1.6';" title="Go to next page 'MA Network Switch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/72065/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Control grandMA3 Nodes</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Change Name and Set IP Address</a>
								<ul>
										<li><a href="#toc_header_anchor_2">To Change the Name</a></li>
										<li><a href="#toc_header_anchor_3">To Change the IP Address</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Change the Output Configuration</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Change Modes</a>
								<ul>
										<li><a href="#toc_header_anchor_6">From grandMA3 to Mode2</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>To adjust the settings in the&nbsp;grandMA3 Nodes, it may be convenient to control them from a connected console or onPC.</p>

<p>For more information, read the <a href="/Topic/b7240dfb-1554-4567-89dc-b8ba3cafc979" target="_blank">Session topic</a> in the <a href="/Topic/81617a99-62a5-4a13-aabc-6935efdd8f29" target="_blank">Networking section</a>.</p>

<p>To connect a&nbsp;grandMA3 Node with the console, make sure that the Node is in grandMA3 mode.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Change Name and Set IP Address</h2>

<p>To change the name and to set the IP address of a grandMA3 Node, open the Network Interface Menu:</p>

<ul>
	<li>Press&nbsp;<span class="hardkey">Menu</span>.<br>
	- Opens the&nbsp;<a href="/Topic/e37fa9b3-56b9-48c8-90d8-a9631a812871">menu select pop-up</a>.</li>
	<li>Tap&nbsp;<span class="softkey">Network</span>.<br>
	- Opens the Network menu.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu01_v1-2.png"></p>

<div class="important"><strong>Important:</strong><br>
You can only change the name or IP address of a node if it is not in another session.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>To Change the Name</h3>

<ul>
	<li>Edit the&nbsp;name of the respective node by right-clicking with a mouse or by using <a href="/Topic/b210b703-76f3-4501-a574-49fed5253a0d">gestures</a>.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu02_v1-2_1.png"></p>

<ul>
	<li>Enter the desired name.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu03_v1-2_1.png"></p>

<ul>
	<li>Tap <span class="softkey">Apply Changes</span> to confirm the changes.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu04_v1-2.png"></p>

<p><br>
&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>To Change the IP Address</h3>

<ul>
	<li>Edit the IP address of the respective node by right-clicking with a mouse or by using <a href="/Topic/b210b703-76f3-4501-a574-49fed5253a0d" target="_blank">gestures</a>.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu05_v1-2.png"></p>

<ul>
	<li>Edit the DHCP settings by right-clicking the DHCP field with a mouse or by using <a href="/Topic/b210b703-76f3-4501-a574-49fed5253a0d" target="_blank">gestures</a>.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu06_v1-2.png"></p>

<ul>
	<li>Set DHCP to Yes or No.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu07_v1-2.png"></p>

<ul>
	<li>Edit the IP address of the respective node by right-clicking with a mouse or by using <a href="/Topic/b210b703-76f3-4501-a574-49fed5253a0d" target="_blank">gestures</a>.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu08_v1-2.png"></p>

<ul>
	<li>Enter the new IP address (here 172.16.60.224).</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu09_v1-2.png"></p>

<ul>
	<li>Tap <span class="softkey">Apply Changes</span> to confirm the changes.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu10_v1-2.png"></p>

<ul>
	<li>The new IP address is now set.</li>
</ul>

<p><img alt="" src="/Media/Image/img_network_menu11_v1-2.png"></p>

<p>For more information about the network menu, read the <a href="/Topic/35814174-6e47-47c5-a68b-4c093a6f9cae" target="_blank">Network Update topic</a> in the <a href="/Topic/82ccae12-1b1a-4928-90b2-9c79ca54d666" target="_blank">Update the Software section</a>.</p>

<div class="tip"><strong>Hint:</strong><br>
You can also update the Nodes via <a href="/Topic/efcfe19c-2c7e-43e9-a650-7ed6796fcff4" target="_blank">manual update</a>.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Change the Output Configuration</h2>

<p>To adjust the output configuration settings in the&nbsp;grandMA3 Nodes, it may be convenient to control them from a connected console or onPC.</p>

<p>For more information, read the <a href="/Topic/57069f60-4141-4c2c-9684-f00f006a3947">DMX port configuration topic</a> in the&nbsp;<a href="/Topic/adf01052-c08e-4695-a98b-a4d69d73e5c0">DMX In and Out section</a>.</p>

<p>To connect a&nbsp;grandMA3 Node with the console, make sure that the node is in grandMA3 mode.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Change Modes</h2>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>From grandMA3 to Mode2</h3>

<ul>
	<li>To change the Node from grandMA3 to Mode2, follow these instructions:</li>
</ul>

<p>grandMA3 screen:</p>

<p><img alt="" src="/Media/Image/img_switch_mode_overview_v1-5.png"></p>

<ul>
	<li>To switch to Mode2, press the rotary knob:</li>
</ul>

<p><img alt="" src="/Media/Image/img_switch_mode_menu_v1-5.png"></p>

<ul>
	<li>Turn the rotary knob to select <span class="softkey">Special Functions</span> and press the rotary knob to confirm:</li>
</ul>

<p><img alt="" src="/Media/Image/img_switch_mode_special_funct_v1-5.png"></p>

<ul>
	<li>Select <span class="softkey">Switch to grandMA2</span> and press the rotary knob to confirm:</li>
</ul>

<p><img alt="" src="/Media/Image/img_switch_mode_reboot_v1-5.png"></p>

<p>&nbsp;</p>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<ul>
	<li>Select <span class="softkey">OK</span> and press the rotary knob to confirm:</li>
</ul>

<p><img alt="" src="/Media/Image/img_switch_mode_confirmation_v1-5.png"></p>

<p>The Node reboots into Mode2.</p>

<p>For more information about changing to grandMA3 Mode2, read the <a href="/Page/grandMA2/mode2_introduction/en" target="_blank">Mode2 topic</a> in the section&nbsp;grandMA3 Mode2 of the <a href="/Page/grandMA2/grandma2/en" target="_blank">grandMA2 User Manual</a>.</p>


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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9bbe4bbf-e34e-4a23-8ccf-7bff55e660cf">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/control_other_ma_devices/en/1.6'; " title="Go to previous page 'Control other MA Devices'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/comad_network_switch/en/1.6';" title="Go to next page 'MA Network Switch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/72065/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

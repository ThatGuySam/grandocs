---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/network_dmx_protocols/en/3.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber?msclkid=4ed0074dc7b411ec80b16af52d32f77a" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7dbcff3-f279-41c8-9e21-ebd559959564">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dmx_configure_ports/en/3.3'; " title="Go to previous page 'Setting up DMX ports on MA devices'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/networking_dmx_output/en/3.3';" title="Go to next page 'What affects my DMX output?'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/d7dbcff3-f279-41c8-9e21-ebd559959564">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/28387/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Network DMX protocols</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">General buttons in Network Protocols</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">General settings in Network Protocols</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Art-Net</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">ETC-Net2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Pathport</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">sACN (streaming ACN)</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Mode</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Shownet</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">KiNET</a>
						</li>
				</ul>
			</div>

		<p>DMX can be transmitted or received using network DMX protocols instead of or together with the DMX ports in the system.</p>

<p>This is all controlled from the Network Protocols menu. The menu can be opened by pressing the <span class="hardkey">Setup</span> key followed by a tap on the <span class="softkey">Network Protocols</span> button.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_network-protocols_v3-3.png">
<figcaption><em>Network Protocols menu - Art-Net tap</em></figcaption>
</figure>

<p>The grandMA2 supports the following network DMX protocols, each having their own tab in the <strong>Network Protocols</strong> view:</p>

<p><strong>Art-Net:</strong></p>

<p>Both transmit and receive. Several ranges of universes can have different settings.</p>

<p><strong>ETC-Net2:</strong></p>

<p>Transmit only. Only one range of universes.</p>

<p><strong>Pathport:</strong></p>

<p>Transmit only. Only one range of universes.</p>

<p><strong>sACN:</strong> (streaming ACN)</p>

<p>Both transmit and receive. Several ranges of universes can have different settings.</p>

<p><strong>Shownet:</strong></p>

<p>Transmit only. Only one range of universes.</p>

<p><strong>KiNET:</strong></p>

<p>Transmit only. Several ranges of universes can have different settings.</p>

<p>&nbsp;</p>

<p>It is always the Master in a session that transmit and receive the network DMX data.</p>

<p>Each of the different network protocols have at least one configuration line. If the protocols support it, then there might be more lines.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="general_buttons" name="general_buttons"></a>General buttons in Network Protocols</h2>

<p>There are up to three buttons on the right side of the view:</p>

<ul>
	<li><strong>Network DMX if Alone</strong> - When this is active (the text is yellow), then the station will output DMX via the network. All network protocols are sent from the master station in a session. If there is no connected stations, you need to turn this on to output network DMX. This toggles all network DMX outputs. If the frame is red, then this station does not output network DMX. If the frame is green then this station outputs network DMX. This setting is shared across all network DMX protocols.</li>
	<li><strong>[Protocol name] Output Active</strong> - When this is on (the text is yellow), then you can output the network DMX protocol. This needs to be enabled or disabled for each protocol.</li>
	<li><strong>[Protocol name] Input Active</strong> - When this is on (the text is yellow), then you can input the DMX protocol. This is only possible in Art-Net and sACN.</li>
</ul>

<p>At the bottom of the view, there might be two buttons. They are only visible in Art-Net, sACN and Kinet1. They are used to <strong>Add</strong> and <strong>Delete</strong> lines in the table above. The three mentioned protocols can have more configurations lines.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><a id="general_settings" name="general_settings"></a>General settings in Network Protocols</h2>

<p>Some settings are shared by the different protocols.</p>

<ul>
	<li><strong>LocalStart</strong> - This is the number of the first DMX universe in your console that you want to transmit, or the first universe you want to receive.</li>
	<li><strong>Amount</strong> - This is the amount of universes you want to receive or transmit.</li>
	<li><strong>ExternStart</strong> - Many of the protocols use this to set the protocol universe number. For example grandMA2 universe number 10 should be transmitted as Shownet universe 5, then the ExternStart should be 5 and LocalStart is 10.&nbsp;</li>
	<li><strong>TTL (Time To Live)</strong> -&nbsp;Specifies the number of routers (hops) that multicast traffic is permitted to pass through before expiring on the network. For each router (hop), the original specified TTL is subtracted by 1. When TTL reaches a value of 0, then the DMX data is no longer forwarded through the network.</li>
	<li><strong>Priority</strong> - Many network protocols uses a Priority setting. This is used to tell the receiver how important the DMX data from this transmitter is. This is only relevant if the receiver have multiple DMX sources. Usually the highest number equals a higher priority.</li>
	<li><strong>Info</strong> - In the Info cell you can write any relevant information.</li>
</ul>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2><a id="art-net" name="art-net"></a>Art-Net</h2>

<p>Art-Net is a royalty free protocol developed by Artistic Licence (<a href="http://www.artisticlicence.com">http://www.artisticlicence.com</a>).</p>

<p>MA supports Art-Net 1, 2 and 3.</p>

<p>Art-Net 3 provides 128 networks of 256 universes. If the Network number is set to 1, then it is compatible with Art-Net 1 and 2.</p>

<p>To add a line in the Art-Net window, tap <strong>Add</strong>. To remove a unwanted line, select it and tap <strong>Delete</strong>.</p>

<p>There several options for each line (here is only mentioned the ones that are not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Valid</strong> - This field is read only and tells if the line is valid. It is not allowed to transmit (or receive) the same universe more than once. A valid line will transmit or receive data.</li>
	<li><strong>Requested</strong> - Here you can set if the line is requested or not. A line that is not requested get a status of <strong>Not valid</strong> and will not transmit or receive Art-Net data.</li>
	<li><strong>Mode</strong> - Change between <strong>OutputBroadcast</strong>, <strong>OutputUnicast</strong>, <strong>OutputAuto</strong>, and <strong>Input</strong>. Read more below.</li>
	<li><strong>Destination IP</strong> - Only available if the mode is OutputUnicast. This is the IP address of the receiver.</li>
	<li><strong>Network</strong> - This is the Art-Net network setting (1-128).</li>
	<li><strong>Subnet</strong> - This is the Art-Net subnet setting (0-F).</li>
	<li><strong>Universe</strong> - This is the Art-Net universe setting (0-F).</li>
	<li><strong>Delay</strong> - Adding a number here will add milliseconds delay between the packets. This can be needed in slow networks. Only for Art-Net output.</li>
</ul>

<p>&nbsp;</p>

<p>The <strong>Mode</strong> selection changes the functionality of the Art-Net line. Editing it opens a small pop-up giving the above mentioned options. The pop-up look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_select-mode-artnet_v3-3.png">
<figcaption><em>Select Mode pop-up - Art-Net mode</em></figcaption>
</figure>

<p>The last option is "Input". This makes the line merge incoming Art-Net DMX into your system.</p>

<p>DMX output via Art-Net supports Auto detection and manually setting of Broadcast or Unicast network traffic per universe.</p>

<ul>
	<li><strong>OutputBroadcast</strong> - sends the DMX Universes as broadcast.</li>
	<li><strong>OutputUnicast</strong> - sends the DMX Universes as unicast to the IP address set in the <strong>Destination IP</strong> column.</li>
	<li><strong>OutputAuto</strong> - sends each DMX Universe as Unicast to up to 5 receivers detected via ArtPoll. If more than 5 receivers, or if there are no detected receivers requesting the universe, then the universe will be send as broadcast!
	<div class="tip"><strong>Hint:</strong><br>
	The default limitation of 5 individual receivers can be changed to a maximum of 10. This can only be done using the command line configuration and by using the "MaxUnicast" property.&nbsp;</div>
	</li>
</ul>

<div class="important"><strong>Important:</strong><br>
Art-Net is transmitted from Ethernet connector number 2. If you use a onPC, then you do not need to make a valid Art-Net IP address. The software will create one and use it. If your computer have a valid Art-Net address, then it will use it. If there are several valid addresses, then it will use the first it sees.</div>

<div class="restriction"><strong>Do not</strong> give your Ethernet connector number 1 a valid Art-Net IP address.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2><a id="etc-net2" name="etc-net2"></a>ETC-Net2</h2>

<p>ETC-Net2 is developed by ETC (Electronic Theater Control - <a href="http://www.etcconnect.com">http://www.etcconnect.com</a>). It was introduced in 1997.</p>

<p>MA supports transmission of one range of DMX universes as ETC-Net2. This was implemented to support communication to older ETC dimmers and DMX nodes. Using sACN might be a better option if the receivers supports it.</p>

<p>There are several options (here is only mentioned the ones that are not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Active</strong> - This is an 'On'/'Off' option. When 'On' the console will transmit ETCNet2. When it is 'Off', then the text is hidden. This can also be toggled by the button on the right side.</li>
	<li><strong>Groups</strong> - ETC-Net2 uses multicast groups to simplify and optimize the transmission. Here you can select what group to transmit to.</li>
	<li><strong>Priority</strong> - The lowest number has the highest priority.</li>
</ul>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2><a id="pathport" name="pathport"></a>Pathport</h2>

<p>Pathport is created by Pathway Connectivity (<a href="http://www.pathwayconnect.com">http://www.pathwayconnect.com</a>).</p>

<p>MA supports transmission of one range of DMX universes as Pathport. This was implemented to support communication to older Pathway DMX nodes. Using sACN might be a better option if the receivers supports it.</p>

<p>There are several options (here is only mentioned the ones that is not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Active</strong> - This is an 'On'/'Off' option. When 'On' the console will transmit Pathport. When it is 'Off', the the text is hidden. This can also be toggled by the button on the right side.</li>
</ul>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2><a id="sacn" name="sacn"></a>sACN (streaming ACN)</h2>

<p>ACN (and streaming ACN) is an ANSI/ESTA international standard. Further readings: <a href="http://en.wikipedia.org/wiki/Architecture_for_control_networks">http://en.wikipedia.org/wiki/Architecture_for_control_networks</a>.</p>

<p>ACN (Architecture for Control Networks) is suite protocol. It uses a lot of elements that is currently not supported by grandMA. But the ACN protocols also have a lighter version for transporting DMX data. It is called 'Lightweight streaming protocol for transport of DMX512 using ACN' or more popular "streaming ACN" or "sACN". It is international standard number E1.31.</p>

<p>&nbsp;</p>

<p>There are several options (here is only mentioned the ones that are not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Valid</strong> - This displays a "Yes" if the line is valid. Only valid lines transmit or receive data.</li>
	<li><strong>Requested</strong> - Here you can set if the line is requested or not. A line that is not requested, get a status of <strong>Not valid</strong> and will not transmit or receive sACN data.</li>
	<li><strong>Mode</strong> - Change between <strong>OutputMulticast</strong>, <strong>OutputUnicast</strong>, <strong>InputMulticast</strong>, and <strong>InputUnicast</strong>. Read more below.</li>
	<li><strong>Destination IP</strong> - Only available if the mode is OutputUnicast. This is the IP address of the receiver.</li>
	<li><strong>sACN Universe</strong> - This is the sACN universe the DMX data should be transmitted to or received from (1 - 64000).</li>
	<li><strong>Priority</strong> - The allowed value is 0 to 200. The highest number has the highest priority. The default value should be 100.</li>
	<li><strong>Protocol</strong> - Here you can select between two different variations of the sACN protocol. You can choose the "Draft" or "Final" release of the sACN protocol. Some equipment have implemented the draft version of sACN before the final version was released. You might need to change to "draft mode" for those devices to work.</li>
	<li><strong>Delay(ms)</strong> - The delay can be used to slow down the traffic in the network. For some older and slower network nodes there is a big difference in receiving 10 universes in one burst or one by one.</li>
</ul>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Mode</h3>

<p>Editing the Mode cell will open a small select pop-up that allows you to choose the different input an output modes mentioned above.</p>

<p>The pop-up looks like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_select-mode-sacn_v3-3.png">
<figcaption><em>Select Mode pop-up - sACN mode</em></figcaption>
</figure>

<p>You can choose between input and output and each of them can be unicast or multicast.</p>

<ul>
	<li><strong>OutputMulticast:</strong><br>
	When choosing Output Multicast, sACN will be sent as multicast to the relevant multicast addresses.</li>
	<li><strong>OutputUnicast:</strong><br>
	When choosing Output Unicast, a valid IP address has to be entered in the <strong>Destination IP</strong> column. Universes configured in this row will be sent as unicast to this IP address.</li>
	<li><strong>InputMulticast:</strong><br>
	Input Multicast will join the Multicast group of the relevant DMX Input Universe.<br>
	Input Multicast is limited to max. 10 Universes. If more than 10 rows are configured as Input Multicast, all rows beyond multicast input row 10 will be invalid.</li>
	<li><strong>InputUnicast:</strong><br>
	Input Unicast is not limited and receives sACN data for the relevant universe without joining any multicast group.</li>
</ul>

<div class="restriction">sACN input of grandMA2 console ignores sACN priorities.</div>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2><a id="shownet" name="shownet"></a>Shownet</h2>

<p>Strand Shownet is created by Strand Lighting (<a href="http://www.strandlighting.com">http://www.strandlighting.com</a>).</p>

<p>MA supports transmission of one range of DMX universes as Shownet. Using sACN might be a better option if the receivers supports it.</p>

<p>There are several options (here is only mentioned the ones that is not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Active</strong> - This is an 'On'/'Off' option. When 'On' the console will transmit Strand Shownet. When it is 'Off', then the text is hidden. This can also be toggled by the button on the right side.</li>
</ul>

<div class="important"><strong>Important:</strong><br>
Shownet is a Broadcast protocol, but is transmitted from Ethernet connector 1.</div>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2><a id="kinet" name="kinet"></a>KiNET</h2>

<p>KiNET is developed by Philips Color Kinetic (<a href="http://www.colorkinetics.com/">http://www.colorkinetics.com/</a>).</p>

<p>MA supports transmission of several ranges of DMX universes.</p>

<p>There are several options (here is only mentioned the ones that are not mentioned in <a href="#General Settings">General Settings above</a>):</p>

<ul>
	<li><strong>Valid</strong> - There will be a "Yes" for each line that is a valid line. Only valid lines will transmit data.</li>
	<li><strong>IP Address</strong> - This is the IP address of the receiver.</li>
</ul>

<div class="important"><strong>Important:</strong><br>
KiNET is a Broadcast protocol, but is transmitted from Ethernet connector 1.</div>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber?msclkid=4ed0074dc7b411ec80b16af52d32f77a" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7dbcff3-f279-41c8-9e21-ebd559959564">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dmx_configure_ports/en/3.3'; " title="Go to previous page 'Setting up DMX ports on MA devices'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/networking_dmx_output/en/3.3';" title="Go to next page 'What affects my DMX output?'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/28387/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

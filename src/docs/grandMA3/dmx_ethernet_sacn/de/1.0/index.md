---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/dmx_ethernet_sacn/de/1.0'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f46bbcc-dd41-4130-bf05-b1d73f6b1c80">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dmx_ethernet_artnet/en/1.0'; " title="Go to previous page 'Art-Net menu'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/user/en/1.0';" title="Go to next page 'Single User and Multi User Systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/52526/10'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.0</span>
			</div>
		<h1>sACN (streaming ACN) Menu</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Config Buttons</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Data Tab</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Nodes Tab</a>
						</li>
				</ul>
			</div>

		<p>ACN (and streaming ACN) is an ANSI/ESTA international standard. Further readings: <a href="http://en.wikipedia.org/wiki/Architecture_for_control_networks">http://en.wikipedia.org/wiki/Architecture_for_control_networks</a>.</p>

<p>ACN (Architecture for Control Networks) is a suite protocol. It uses a lot of elements that are currently not supported by grandMA3. But the ACN protocols also have a lighter version for transporting DMX data. It is called 'Lightweight streaming protocol for transport of DMX512 using ACN' or more popular "streaming ACN" or "sACN". It is the international standard number E1.31.</p>

<p>It is configured in the sACN menu:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_dmx-protocols_sacn_v0-92.png">
<figcaption><em>sACN menu </em></figcaption>
</figure>

<p>See the <a href="/Topic/96f5112e-fd65-466a-b029-29b980967bf5">Ethernet DMX topic</a> for information on how to open this menu.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Config Buttons</h2>

<p>There are a few buttons at the top of the menu:</p>

<ul>
	<li><strong>Interface</strong>:<br>
	Tap this button to open the <strong>Select Interface pop-up</strong> where the desired network interface can be selected. This interface will be used for all sACN in and out.</li>
	<li><strong>Enable Output</strong>:<br>
	This On/Off button needs to be On for the master to transmit sACN. Data also needs to configured for output - read more below.</li>
	<li><strong>Enable Input</strong>:<br>
	This On/Off button needs to be On for the master to receive sACN. Data also needs to configured for input - read more below.</li>
	<li><strong>Setup</strong>:<br>
	This On/Off button is used to toggle the setup mode for nodes. This allows only communication data to set up the nodes, without sending sACN DMX data into the network.</li>
</ul>

<div class="important"><strong>Important:</strong>

<ul>
	<li>Enabling setup mode allows sACN configuration data to be sent and received even when Enable Output and Enable Input is Off.</li>
	<li>When setup mode is Off and output is enabled, then DMX and configuration data are transmitted.</li>
	<li>When setup mode is Off and input is enabled, then DMX and configuration data are received.</li>
</ul>
</div>

<p>There are two tabs below the buttons. They are Data and Nodes. Data is used to setup output and input. Nodes can be used to see the transmitting nodes in the network.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Data Tab</h2>

<p>The data tab is a grid of rows and columns. Each row is an sACN configuration. If the row is not valid or not enabled, then the name is in red text.</p>

<p>This is a short description of the columns:</p>

<ul>
	<li><strong>Lock</strong>:<br>
	The row can be locked to prevent changes.</li>
	<li><strong>No</strong>:<br>
	This is the row number.</li>
	<li><strong>Name</strong>:<br>
	Each row can have a name. This can be used as short info for the purpose of the row.</li>
	<li><strong>Enabled</strong>:<br>
	This Yes or No field is used to enable the row transmitting or receiving sACN. Yes is the default.</li>
	<li><strong>Mode</strong>:<br>
	The mode defines what the row is doing. There are four options:
	<ul>
		<li><strong>Output Multicast</strong>:<br>
		When choosing Output Multicast, sACN will be sent as multicast to the relevant multicast addresses.</li>
		<li><strong>Output Unicast</strong>:<br>
		When choosing Output Unicast, a valid IP address has to be entered in the <strong>Destination IP</strong> column. Universes configured in this row will be sent as unicast to this IP address.</li>
		<li><strong>Input Multicast</strong>:<br>
		Input Multicast will join the Multicast group of the relevant DMX Input Universe.<br>
		Input Multicast is limited to max. 10 Universes. If more than 10 rows are configured as Input Multicast, all rows beyond multicast input row 10 will be invalid.</li>
		<li><strong>Input Unicast</strong>:<br>
		Input Unicast is not limited and receives sACN data for the relevant universe without joining any multicast group.</li>
	</ul>
	</li>
	<li><strong>Destination IP</strong>:<br>
	This field is only active if the output unicast mode is selected. This is the IPv4 address of the receiving device.</li>
	<li><strong>sACN Universe</strong>:<br>
	This is the sACN universe number the grandMA3 universes is transmitted to or the universe number that is listened to if Input is selected. If the amount is more than one, then this is the first universe in the range.</li>
	<li><strong>Local Universe</strong>:<br>
	This is the grandMA3 universe to be transmitted or the universe that should receive incoming sACN DMX. If the amount is more than one, then this is the first universe in the range.</li>
	<li><strong>Amount</strong>:<br>
	This is the amount of grandMA3 universes to be transmitted or received.</li>
	<li><strong>Priority</strong>:<br>
	The allowed value is 0 to 200. The highest number has the highest priority. The default value is 100. This priority is used for transmitted sACN.</li>
	<li><strong>Preview Only</strong>:<br>
	sACN data can be sent as preview data. This can, for instance, be used to send DMX to visualizers.&nbsp;</li>
	<li><strong>TTL</strong> (Time To Live):<br>
	Time To Live is a number used to tell routers and some switches how far through the network the sACN data should be transmitted. This is only relevant for output modes. The default value is 8 and this should usually not be changed.</li>
	<li><strong>Delay</strong>:<br>
	A delay can be set up between each transmitted universe. This can be helpful for older nodes with slower network cards. Sending many universes at once can flood the node. Adding a small delay helps.</li>
	<li><strong>Input Priority</strong>:<br>
	This is the priority of received sACN. sACN input of grandMA3 ignores sACN priorities and uses this priority instead.</li>
</ul>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Nodes Tab</h2>

<p>This tap displays the transmitting nodes in the network. Each node detected is a row. Each node has one or more sub rows with "pages".</p>

<ul>
	<li><strong>Lock</strong>:<br>
	The row can be locked to prevent changes.</li>
	<li><strong>No</strong>:<br>
	This is the row number.</li>
	<li><strong>Name</strong>:<br>
	Each row gets a name from the device. The name cannot be edited.</li>
	<li><strong>Universe List</strong>:<br>
	This is a list of the universes the node transmits.</li>
</ul>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f46bbcc-dd41-4130-bf05-b1d73f6b1c80">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dmx_ethernet_artnet/en/1.0'; " title="Go to previous page 'Art-Net menu'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/user/en/1.0';" title="Go to next page 'Single User and Multi User Systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/52526/10';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

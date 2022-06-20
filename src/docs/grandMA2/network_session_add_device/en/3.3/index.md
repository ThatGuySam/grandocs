---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/network_session_add_device/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="288b14ba-66dd-4ac8-a2da-20eb59b838f2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_session_protect/en/3.3'; " title="Go to previous page 'Protecting the session and station'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_session_end_leave/en/3.3';" title="Go to next page 'How to end or leave a session'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/288b14ba-66dd-4ac8-a2da-20eb59b838f2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/33172/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Adding devices to the session</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Status colors</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Hostname, Offset and Bridge</a></li>
										<li><a href="#toc_header_anchor_4">Version number</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_5">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Consoles</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">grandMA2 onPC</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">MA NPU</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">MA 3D</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">MA VPU</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">MA NDP</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">DMX Nodes</a>
						</li>
						<li>
							<a href="#toc_header_anchor_13">Network Switch</a>
						</li>
						<li>
							<a href="#toc_header_anchor_14">Bridge</a>
						</li>
				</ul>
			</div>

		<p>MA devices can be added to the session. This will expand the system and allow for bigger systems where it is possible to control more lights (more parameters). Devices like 3D visualizers, Media servers, Networked dimmers, MA Nodes, and MA Network Switches can also be added.</p>

<p>It is all controlled in MA Network Configuration. This can be found by pressing <span class="hardkey">Setup</span> and then tap <span class="softkey">MA Network Configuration</span>.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_ma-network-configuration_v3-3.png">
<figcaption><em>MA Network Configuration - </em><em>The Console tab </em></figcaption>
</figure>

<p>The configuration is divided into sections or tabs. The tabs represent each device type. There are tabs for:</p>

<ul>
	<li>Consoles</li>
	<li>onPC</li>
	<li>NPU</li>
	<li>3D</li>
	<li>VPU</li>
	<li>NDP Dimmer</li>
	<li>DMX Nodes (MA Nodes only)</li>
	<li>Network Switch (MA Network Switch only)</li>
</ul>

<p>Consoles and grandMA2 onPCs are called <strong>Stations</strong> and are connected to a session using the <a href="/Topic/da6ff2fc-77c3-4771-8431-36af142fb315">MA Network Control</a>. They cannot be invited or forced to connect from this interface, but the DMX ports and timecode can be configured. Stations in the session will also appear in the MA Network Configuration.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Status colors</h2>

<p>The devices in the MA Network configuration can have different colors to help identify problems and status of the devices in the network.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Hostname, Offset and Bridge</h3>

<p>The background color of the Hostname, Analog Offset, MIDI Offset and Bridge can have different colors.</p>

<ul>
	<li><strong>Red:</strong> The device is not present in the network or it is already connected to a (different) session.</li>
	<li><strong>Gray / Black:</strong> The device is in the network, but is not in any session. The background is black for Stations - gray for all other devices.</li>
	<li><strong>Dark green:</strong> The device is in the network and is connected to the same session as you.</li>
	<li><strong>Bright green:</strong> This is the device you currently using, and it is in a session.</li>
</ul>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Version number</h3>

<p>The version number has a default white text color and it can have a red color. The red color is to indicate that the device have an incompatible software version number and it cannot be used in the session.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Consoles</h2>

<p>The consoles tab offers the possibility to configure the ports on a console that is connected to the network.</p>

<p><a id="Standard Control Buttons" name="Standard Control Buttons"></a>At the bottom of the screen there are some buttons:</p>

<ul>
	<li><strong>Add</strong> - Pressing this will open a small pop-up that lists all the available consoles in your network. If there are no consoles, that are not already added, then the list will be empty. Not adding any actual consoles, will create an "empty"&nbsp; console with the 0.0.0.0 IP address.</li>
	<li><strong>Delete</strong> - Tapping this button will delete the selected console. You cannot delete your own console.</li>
	<li><strong>Add Present</strong> - This will automatically add all the consoles that are present in the network.</li>
	<li><strong>Remove Absent</strong> - This will remove the consoles from the list, that are not present in the network.</li>
	<li><strong>Remove Non-Members</strong> - This will remove the consoles from the list, that are not a member of your session.</li>
</ul>

<p>When you have added a console to the list, then you get a table where the rows are the different consoles (if there are more than one). The columns are different settings. All the settings with a gray background color can be changed. If the console is not connected to the session, then the changes might not be made in the console.</p>

<p><a id="Column Description" name="Column Description"></a>The columns are:</p>

<ul>
	<li><strong>IP ETHERCON 1 (ETH0)</strong> - This is the IP address of the number 1 EtherCon connector on the back of the console. Changing this number will change the IP address on the console and requires a reboot.</li>
	<li><strong>DHCP ETHERCON 1 (ETH0)</strong> - Editing this cell will give a "Yes". This enables DHCP for Ethernet port 1 and will prompt a reboot. Read more about DHCP in the <a href="/Topic/66e493d2-bd2b-4b7d-b40d-6e1b815270e6">Using DHCP in MA devices topic</a>.</li>
	<li><strong>IP ETHERCON 2 (ETH1)</strong> - This is the IP address of the number 2 EtherCon connector on the back of the console. This connector is for Art-Net and should have an Art-Net compatible IP address. Changing this number will change the IP address on the console and requires a reboot.</li>
	<li><strong>Hostname</strong> - This is the hostname of the console. This is only for information. It can only be changed in the MA Network Control.</li>
	<li><strong>Type</strong> - This displays the type of console.</li>
	<li><strong>XLR A</strong> to <strong>XLR F</strong> - These are the female DMX connectors on the back of the console. Editing this cell will open a pop-up that allows you to change the settings. It is described in details in the <a href="/Topic/48d8355a-216f-4f92-ae75-7c8f62443761">Getting DMX in and out of the system</a> topic.</li>
	<li><strong>XLR In</strong> - This is the male DMX port on the back of the console. Editing, works just as the female connectors - see above.</li>
	<li><strong>MIDI TC</strong> - Choose which Timecode slot the incoming MIDI timecode should be sent to. Please read the <a href="/Topic/a0f5f662-0371-48a0-816c-a00ea5554ab0">Timecode</a> topic for more details about Timecode slots.</li>
	<li><strong>SMPTE TC</strong> - Choose which Timecode slot the incoming LTC/SMPTE timecode should be sent to. Please read the <a href="/Topic/a0f5f662-0371-48a0-816c-a00ea5554ab0">Timecode</a> topic for more details about Timecode slots.</li>
	<li><strong>Version</strong> - This is the software version the console is currently running.</li>
	<li><strong>Memory Complete/Free</strong> - This displays the amount of memory (RAM) in the console and how much of that is not used. If the console uses all the available memory then it will stop working. You will also need an extra memory capacity to connect to a file server.</li>
	<li><strong>x64</strong> - Here it is displayed if the console is running the 64 -bit version of Linux or the 32-bit. A "Yes" indicates that it is 64-bit.</li>
	<li><strong>Analog Offset</strong> - Here remote analog inputs, on the back of the console, can be offset. This can be useful if there are more consoles and you need more analog remote inputs than the 16 a single console offers. The session can handle 64 unique remote inputs. To reach numbers above 16 (the number of inputs on the console) then you will need to offset the input on one or more consoles. An offset of 16 will map physical input number 1 to remote number 17.</li>
	<li><strong>MIDI Offset</strong> - This is the same as the analog remotes, but for MIDI Notes. Most MIDI systems support 128 notes (0-127). But the MA system can handle 1024 MIDI remote inputs. In combination with the 16 different channels, this allows you to map 16.384 unique MIDI remote inputs!</li>
	<li><strong>Link Speed</strong> - This is the current connection speed between the console and the switch.</li>
	<li><strong>Bridge Mode</strong> - The Bridge is not currently implemented.</li>
	<li><strong>Bridge IP</strong> - The Bridge is not currently implemented.</li>
</ul>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>grandMA2 onPC</h2>

<p>grandMA2 onPCs are considered "Stations" and can only be added to a session in the <a href="/Topic/da6ff2fc-77c3-4771-8431-36af142fb315">MA Network Control</a>.</p>

<p>The onPC section has the <a href="#Standard Control Buttons">same buttons at the bottom as the console section</a> - plus two more. They are called <strong>Identify Fader 1</strong> and&nbsp;<strong>Identify Fader 2</strong>. Each grandMA2&nbsp;onPC can have one MA onPC&nbsp;command wing and two MA onPC&nbsp;fader wings connected. They are all connected through USB connectors. If you connect two MA&nbsp;onPC fader wings, then you need to tell the computer which fader wing is number 1 and which one is number 2.</p>

<p>This is done by tapping one of the Identify buttons and then pressing any button on the corresponding fader wing. Repeat the previous described steps for the second fader wing. It is not needed to do this for the command wing.</p>

<p>When a grandMA2&nbsp;onPC is added to the network, then you will see that one grandMA2&nbsp;onPC takes three rows in the table part - one row for each possible wing.</p>

<p>There are not all the same columns in the onPC section as in the console section. Please read the description of the columns in the <a href="#Column Description">Console section above</a>. There are some small differences:</p>

<p>There is only one Ethernet column - this is the primary connection used to communicate with other MA devices. Changing the number here won´t change the IP address on the computer. If you want to output Art-Net from your computer, then it is very recommended to add another Ethernet port. This could be done with a USB (3.0/3.1) to Ethernet dongle. Then give this Ethernet adaptor an IP address in the Art-Net range. Your onPC will then use this Ethernet adaptor to transmit the Art-Net.</p>

<p>The MA onPC command wing has a male DMX port labeled "DMX In". This is "XLR C" in the configuration table. Normally it is possible to use any DMX port as input or output but there is a limitation on the Command wing. It is only possible to use the "DMX A" and "DMX In" for <strong>inputting</strong> DMX to your system from the MA&nbsp;onPC&nbsp;command&nbsp;wing.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>MA NPU</h2>

<p>The MA NPUs (Network Processing Unit) are added and connected to the session in the MA Network Configuration. At the <a href="#Standard Control Buttons">bottom of this section you have the same buttons as the Console section</a> and you can use these buttons to add MA NPUs that are in the network.</p>

<p>When the MA NPU exists in the table, then you can edit the <strong>Session Member</strong> column. This is a toggle cell. It can be empty or it can be "Yes". If it is yes, then the MA NPU is told to join the session. If a different session also would like the MA NPU to join their session, then the MA NPU will join the session it sees first in the network.</p>

<p>The MA NPU cannot output or receive Art-Net, so there are only columns for one IP address including the DHCP column. Changing the IP number in the IP column, will change the IP address in the MA NPU and it will restart.</p>

<p>The MA NPU has 8 DMX ports. They can all be changed in the table. Here they are called "XLR A" to "XLR H".</p>

<p>Read the description of the columns in the <a href="#Column Description">Console section above</a>.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>MA 3D</h2>

<p>The MA 3D visualizer is an integrated part of a MA system. It is a visualizer that communicate with the stations and changes made to the setup will automatically be visible in the MA 3D. It has <a href="#Standard Control Buttons">the same buttons at the bottom of the screen as the console</a>.</p>

<p>When a MA 3D visualizer is added to the table then you will have the same <strong>Session Member</strong> column as the MA NPU and the process is the same. When connecting a MA 3D it can be chosen which <strong>User</strong> it should follow. The users in the show each have a <a href="/Topic/f903e294-77af-4745-9c44-d631c91222d2">Stage view</a>. The MA 3D is connected to the Stage view, so changing the angle or location of the virtual camera in the Stage view or the MA 3D visualizer, they will both follow along. A MA 3D visualizer will also follow the user into Blind and Preview mode and show the blind and preview output instead of the live output.</p>

<p>The MA 3D only have one IP address column and no DHCP column. It is the IP address of the computer running the software. Changing the number here will not change the IP address in the computer.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>MA VPU</h2>

<p>The MA VPU (Video Processing Unit) has some extra buttons at the bottom of the screen. Besides the standard buttons, it also got:</p>

<ul>
	<li><strong>Edit</strong> - This will open an editor for the selected MA VPU. Here many of the settings in the MA VPU can be changed.</li>
	<li><strong>Backup Manager</strong> - If a MA VPU is set as a Backup, then tapping this button allows to setup the relationship between the main and backup MA VPU.</li>
	<li><strong>Content Distribution</strong> - Pressing this button will distribute the content from the MA VPU set as distributor to the MA VPUs set as receivers.</li>
	<li><strong>Make a Screenshot</strong> - Pressing this button will trigger a screenshot creation in the MA VPU.</li>
	<li><strong>Global VPU settings</strong> - Tapping this button will open the Global MA VPU settings.</li>
</ul>

<p>For a short explanation of the other buttons please have look at the<a href="#Standard Control Buttons"> Console section</a>.</p>

<p>There are also some special columns in the MA VPU table:</p>

<ul>
	<li><strong>Layer</strong> - This is the layer in the Patch and fixture schedule that have the configuration of VPU layers, Masters and Cameras.</li>
	<li><strong>Content</strong> - Here it can be set if the MA&nbsp;VPU has some special settings regarding the central distribution of content.</li>
	<li><strong>Backup VPU</strong> - Here it can be toggled if the MA VPU is a backup or main MA VPU.</li>
</ul>

<p>There is only one IP address column - it is the primary IP address used to communicate with the other MA devices. The MA&nbsp;VPU has a secondary IP address for Art-Net. This can only be set on the MA&nbsp;VPU.</p>

<p>MA VPUs run on windows computers and changing the IP address in the table will not change the IP address in the MA VPU. DHCP is only possible to activate in the MA VPU Network Settings.</p>

<p>For details about the MA VPU or any of the things mentioned above, please have a look the <a href="/Topic/28963ef4-b488-44a4-8771-4f66834c05c4">VPU Manual</a>.</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>MA NDP</h2>

<p>MA NDP (Network Dimmer Processors) are the processors in the discontinued dimMA system. They connect like the NPU or VPU. They are invited to be a part of a session in the <strong>Session Member</strong> column.</p>

<p>It has the <a href="#Standard Control Buttons">standard buttons at the bottom</a>.</p>

<p>There are some special columns for the MA NDP:</p>

<ul>
	<li><strong>Session</strong> - This displays the session number the MA NDP is currently a part of. MA NDPs can run independent from a station created session (using the DMX ports), then this column will display the session ID the NDP created by it self.</li>
	<li><strong>Rack number</strong> - This is the rack number the MA NDP is controlling. You can set this number and the MA NDP will then use the configuration for that Rack number.</li>
	<li><strong>XLR A</strong> &amp; <strong>XLR B</strong> - These two DMX ports are the outputs from the MA NDP. Here you can see which universe they are set to output.</li>
</ul>

<div class="restriction"><strong>Restriction:</strong><br>
Please be careful when changing the settings in your MA NDPs and dimMA system.</div>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2><a id="dmx_nodes" name="dmx_nodes"></a>DMX Nodes</h2>

<p>DMX nodes are the different nodes from MA. There are 2, 4 and 8 port versions in different variations.</p>

<div class="restriction"><strong>Restriction:</strong><br>
If the Node is connected to a managed switch, then the port where the node is connected needs to be set to <strong>Auto-negotiate </strong>for the speed/connection method.</div>

<p>There are two special buttons in this section - besides the <a href="#Standard Control Buttons">standard buttons at the bottom</a>:</p>

<ul>
	<li><strong>Identify</strong> - Pressing this button will flash the display and LEDs on the grandMA1 era nodes and turn the background color green in the grandMA2 era nodes.</li>
	<li><strong>2Port SW Update</strong> - The software update process is different for the <strong>grandMA1 era</strong> 2 Port Nodes. To update those they need to be selected in the table and then tap this button.</li>
</ul>

<p>In the new (grandMA2 era) nodes there are two IP addresses with the option to activate DHCP on the Ethernet port. One will be used for all MA communication. The secondary IP address is the Art-Net address -&nbsp; it will be used if the mode of the node is changed to Art-Net. The grandMA1 era Nodes only have one IP address that can be defined - It will automatically change the IP address to a valid Art-Net address if the mode is changed.</p>

<p><a id="node_mode" name="node_mode"></a>Speaking of modes. There is a <strong>Mode</strong> column. Here it is possible to select different modes for the node:</p>

<ul>
	<li><strong>MA-Net1</strong> (only in the older Nodes) - This will switch the node to connect with the grandMA1 system.</li>
	<li><strong>MA-Net2</strong> - This is the mode needed to have full control and synchronized DMX output from a MA2 system. This is also needed for the onPC nodes to unlock parameters in an onPC system. Please read more in the <a href="/Topic/ce10bec6-51f0-41ad-b718-50ddffb4bd83">Parameter Expansion topic</a>.</li>
	<li><strong>Art-Net</strong> - This will switch the node to Art-Net mode and use the secondary IP address. And a Network number in the Session ID/Network column needs to be assigned. Use the number <strong>1</strong> for Art-Net I and Art-Net II and the first 256 universes in Art-Net III. If you are in doubt, set it to 1.</li>
	<li><strong>sACN</strong> - This will switch the node to sACN mode.</li>
	<li><strong>None</strong> - This will disable the node.</li>
</ul>

<p>Adding DMX Nodes to the session is different then all the other elements we have looked at so far. They are not invited to join what ever session you are currently in, they are assigned to listen to a specific session number - this is done in the <strong>Session ID/Network</strong> column. They hold their own configuration - it is not a part of the show file. It can however be <a href="/Topic/2a78519e-98cd-46cc-8975-e062cba548c2">imported or exported</a>. Please read the <a href="/Topic/48d8355a-216f-4f92-ae75-7c8f62443761">Getting DMX in and out of the system</a> topics for more about the DMX configuration.</p>

<p>Since it is possible to have up to 8 DMX ports, then there are "XLR A" to "XLR H" columns.</p>

<p>The column called <strong>Light Mode</strong> allows for control of the backlight in the displays (and the Data LEDs in the old grandMA1 nodes).</p>

<p>The <strong>Light Intensity</strong> column is only for the grandMA1 nodes. Three different levels of intensity in the LEDs and display can be set.</p>

<p>There is a column called <strong>Local</strong>. This can turn On or Off (empty cell) the local yellow menu hardware button on the grandMA2 nodes.</p>

<p>The last column is called <strong>Remote</strong>. This can turn On or Off (empty cell) the web remote access to the node. Only available in the grandMA2 nodes.</p>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h2>Network Switch</h2>

<p>MA Network Switches can be added to the system. They are not members of any session. But can be added to allow changing the configuration from a station in the network.</p>

<p>The MA Network Switch has a lot of settings and controlling or configuring it from the console/onPC is all described in the <a href="/Topic/405fe333-a0d6-4f0c-b507-985f5fb0263b">Control the MA Network Switch</a> section.</p>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h2>Bridge</h2>

<p>The Bridge is not implemented, so there is nothing to do in this tab.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="288b14ba-66dd-4ac8-a2da-20eb59b838f2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_session_protect/en/3.3'; " title="Go to previous page 'Protecting the session and station'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_session_end_leave/en/3.3';" title="Go to next page 'How to end or leave a session'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/33172/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

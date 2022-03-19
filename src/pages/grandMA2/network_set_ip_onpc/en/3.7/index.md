
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="febfa620-f367-414e-aef8-7758b395c0f7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_set_ip_console/en/3.7'; " title="Go to previous page 'Set the IP address in the console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dhcp/en/3.7';" title="Go to next page 'Using DHCP in MA devices'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/febfa620-f367-414e-aef8-7758b395c0f7">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/45786/23'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.7</span>
			</div>
		<h1>Set the IP address in the onPC</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Set the IP address using the command line</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Set the IP address using the GUI</a>
						</li>
				</ul>
			</div>

		<p>To change the IP address in the onPC, you first need to set the IP address in your computer.</p>

<p>You can only set the IP address equivalent to the Ethernet connector 1.</p>

<p>If you need the onPC to output or input Art-Net, then&nbsp; it is not necessary to give the computer an IP address in the Art-Net range. MA onPC will automatically generate one.</p>

<p>If you create an IP address in the Art-Net range, then the onPC will not generate one, but use the one you have set. This can be done on an secondary Ethernet adaptor or the same.</p>

<p>The onPC will automatically use the adaptor with the Art-Net range to transmit the Art-Net data.</p>

<p>You need to set the IP address in the computer before opening the onPC program - or restart the program after the IP address have been changed in the computer.</p>

<p>If you are using DHCP, then you will need to make sure that the IP range is the same on all the MA devices that needs to be connected.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Set the IP address using the command line</h2>

<p>When you have set the IP address in the computer, then you can use the <a href="/Topic/b56ba60b-a7f4-45de-8525-c6f476f238be">SetIP command</a> to set the IP address. It is important that you write the same IP address as the one set in the computer.</p>

<p>Follow the link to read more about using the <a href="/Topic/b56ba60b-a7f4-45de-8525-c6f476f238be">SetIP command</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Set the IP address using the GUI</h2>

<p>You can select the IP address by pressing the <span class="hardkey">Setup</span> key and then <span class="softkey">MA Network Control</span>.</p>

<p>Here you can only select the IP address when the onPC is <strong>not</strong> connected to a session. In the title bar of the menu you can see the current status of the onPC. If it says anything other than "Standalone", then tap <span class="softkey">Leave Session</span>.</p>

<p>When the onPC is standalone, then you can open the drop down box next to "Station IP". Here you can select the IP address set in Windows. Remember that onPC needs to restart before it uses the selected IP address.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="febfa620-f367-414e-aef8-7758b395c0f7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_set_ip_console/en/3.7'; " title="Go to previous page 'Set the IP address in the console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network_dhcp/en/3.7';" title="Go to next page 'Using DHCP in MA devices'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/45786/23';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
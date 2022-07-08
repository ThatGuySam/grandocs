---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/so_parameter_expansion/en/3.7'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ce10bec6-51f0-41ad-b718-50ddffb4bd83">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/so_parameters_vs_dmx_channels/en/3.7'; " title="Go to previous page 'Parameters vs. DMX channels'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/so_big_systems/en/3.7';" title="Go to next page 'Big systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/ce10bec6-51f0-41ad-b718-50ddffb4bd83">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/45301/23'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.7</span>
			</div>
		<h1>Parameter expansion</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Parameter count</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Parameter expansion</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Examples:</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Using a grandMA2 onPC with wings, nodes and NPU</a>
								<ul>
										<li><a href="#toc_header_anchor_5">Examples:</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_6">MA VPU and grandMA2 onPC</a>
						</li>
				</ul>
			</div>

		<p>This page is a closer look at how many parameters can be controlled and how it can be expanded. At the bottom of this page there is a link to a page that explains the difference between "Parameter" and "DMX universe". If you have any doubts in this area, you should take the time to read it.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Parameter count</h2>

<p>This section is about the parameter count for single units.</p>

<p>Beginning at the top end and working the way down the ranks:</p>

<ul>
	<li><strong>grandMA2 full-size:</strong><br>
	8 192 parameters.</li>
	<li><strong>grandMA2 light</strong>:<br>
	4 096 parameters.</li>
	<li><strong>grandMA2 ultra-light:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA2 replay unit:</strong><br>
	4 096 parameters.</li>
	<li><strong>MA NPU (Network Processing Unit):</strong><br>
	4 096 parameters (also with grandMA2 onPC).</li>
	<li><strong>MA onPC command wing:</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA onPC fader wing:</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 8Port Node onPC:</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 4Port Node onPC:</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA NSP (in grandMA2 4Port Node mode):</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 2Port Node onPC 2K:</strong><br>
	2 048 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 2Port Node onPC 1K:</strong><br>
	1 024 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 2Port Node onPC Pro (old version):</strong><br>
	1 024 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 2Port Node onPC (old gray version):</strong><br>
	512 parameters (only when connected with grandMA2 onPC).</li>
	<li><strong>MA 8Port Node (not onPC version):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 4Port Node (not onPC version):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 4Port Node WM (Wall Mount) (not onPC version):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 2Port Node (not onPC version):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 2Port Node WM (Wall Mount) (not onPC version):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 2Port Node Rig mount version (old version - not onPC):</strong><br>
	Does not provide parameter expansion.</li>
	<li><strong>MA 2Port Node Flush mount version (old version - not onPC):</strong><br>
	Does not provide parameter expansion.</li>
</ul>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Parameter expansion</h2>

<p>The MA NPU is the<strong> only unit</strong> that expands the parameter count when using a grandMA2 console. <strong>Every MA NPU added to the network also adds 4 096 parameters!</strong></p>

<p>A maximum of 15 MA NPUs can be added to give parameters; depending on the biggest console.</p>

<p>There is a<strong> maximum limit of 65 536 parameters</strong> in a grandMA2 session.</p>

<p>The MA NPUs help with parameter calculations.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Examples:</h3>

<p>1 grandMA2 full-size (8 192 parameters) + 1 NPU (4 096) = 12 288 parameters</p>

<p>1 grandMA2 full-size (8 192 parameters) + 14 NPUs (4 096) = 65 536 parameters (the limit)</p>

<p>1 grandMA2 light (4 096) + 1 NPU (4 096) = 8 192 parameters</p>

<p>1 grandMA2 light (4 096) + 15 NPUs (4 096) = 65 536 parameters (the limit)</p>

<p>1 grandMA2 full-size (8 192 parameters) + 1 grandMA2 light (4 096) = 8 192 parameters (Consoles cannot expand the parameter count so the parameters from the console with the highest number are unlocked)</p>

<p>1 grandMA2 light (4 096) + 15 2Port Node onPC 2K (2 048) = 4 096 parameters (Nodes cannot expand the parameter count, so the parameters from the console is used - onPC nodes cannot give parameters to consoles)</p>

<p>1 grandMA2 light (4 096) + 1 onPC computer with a Command Wing (2 048) = 4 096 parameters (Wings cannot expand the parameter count, so the parameters from the console are used - onPC Wings cannot give parameters to consoles)</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Using a grandMA2 onPC with wings, nodes and NPU</h2>

<p>When a grandMA2 onPC is used some MA hardware is needed to unlock parameters. <strong>The maximum number of parameters that is allowed in a grandMA2 onPC system is 4 096!</strong></p>

<p>Any number of onPC hardware can be used with your computer. Every piece of hardware will add its parameters until the limit of 4 096 parameters is reached.</p>

<p>This is the only two rules for parameters with grandMA2 onPC.</p>

<p>Remember more units can be added to get more DMX ports.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Examples:</h3>

<p>grandMA2 onPC + MA onPC command wing = 2 048 parameters</p>

<p>grandMA2 onPC + MA onPC command wing + MA 2Port Node onPC Pro = 3 072 parameters</p>

<p>grandMA2 onPC + MA onPC Fader Wing = 2 048 parameters</p>

<p>grandMA2 onPC + MA 2Port Node onPC + MA 2Port Node onPC = 1 024 parameters</p>

<p>grandMA2 onPC + MA onPC command wing + Fader Wing + MA 8Port node onPC = 4 096 parameters (you have reached the limit)</p>

<p>grandMA2 onPC + MA onPC command wing + MA NPU = 4 096 (you have reached the limit)</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>MA VPU and grandMA2 onPC</h2>

<p>If a MA VPU is used, it will supply its own parameters and does not affect the limit. Several MA VPUs can be controlled using a grandMA2 onPC. If however a mix of VPUs and other fixtures are used, then some MA hardware is needed to unlock the parameters for the fixtures.</p>

<p>Even though the MA VPU does not count in your parameter limit, it is a good idea to patch the MA VPU on a higher universe than the other fixtures. There is a risk that it will steal the parameters from the other fixtures, if it is on a lower universe than the fixtures.</p>

<p>&nbsp;</p>

<p>Please have a look at <a href="/Topic/adafddc7-a422-4295-ada5-35f18cb910e0">DMX Channels vs. Parameters topic</a> for more about the difference between DMX channels and Parameters.<a href="/Topic/adafddc7-a422-4295-ada5-35f18cb910e0"> </a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ce10bec6-51f0-41ad-b718-50ddffb4bd83">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/so_parameters_vs_dmx_channels/en/3.7'; " title="Go to previous page 'Parameters vs. DMX channels'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/so_big_systems/en/3.7';" title="Go to next page 'Big systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/45301/23';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

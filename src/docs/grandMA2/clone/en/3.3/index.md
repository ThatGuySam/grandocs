---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/clone/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b39e38dc-d5c7-42da-8b6b-a281eed25344">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_spec_master_playback/en/3.3'; " title="Go to previous page 'Playback masters'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/clone_clone_in_user_interface/en/3.3';" title="Go to next page 'Clone in user interface'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/b39e38dc-d5c7-42da-8b6b-a281eed25344">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29933/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Clone</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Function</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">How to Use Clone</a>
								<ul>
										<li><a href="#toc_header_anchor_3">&nbsp;It is possible:</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Replace</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Function</h2>

<p>Clone is used to add fixtures to the rig which suppose to behave exactly the same as existing fixtures.</p>

<p><strong>Requirements:</strong></p>

<ul>
	<li>Program your show using presets.</li>
	<li>Program relevant parameters in your presets.</li>
</ul>

<div class="important"><strong>Important:</strong><br>
Avoid using fixture specific functions, e.g., build-in fixture macros. Use generic functions only.&nbsp;</div>

<p>&nbsp;</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>How to Use Clone</h2>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>&nbsp;It is possible:</h3>

<ol>
	<li>To clone in order to copy values from fixture to fixture.</li>
	<li>To clone a selection of fixtures to another selection of fixtures.&nbsp;</li>
	<li>To clone using the <a href="/Topic/7d517b5f-1c43-415e-a6e7-82669ffca89c">keyword Clone</a> or the <a href="/Topic/1543a86b-8a2a-49cf-8e73-e463c489d0bd">screen</a>.&nbsp;</li>
</ol>

<div class="important"><strong>Important:</strong><br>
It is not possible to clone values from several fixtures to a single fixture. Cloning is only possible with one set of values.&nbsp;</div>

<div class="important"><strong>Important:</strong><br>
It is possible to limit the scope of cloning by using the <a href="/Topic/4c639506-de32-4a67-b31f-e438a4f5a742">keyword If</a>.</div>

<p>&nbsp;</p>

<p>By default, the cloning is done with low priority. This means that data is preserved wherever the destination fixtures or fixture types already contain data. The data form the source fixtures or fixture types is added to objects such as presets, cues, effects etc. where data does not exist yet.&nbsp;</p>

<p>&nbsp;</p>

<div class="tip"><strong>Hint:</strong><br>
The console automatically clones dependencies e.g., presets and effects by reference to the cloned sequence whenever cloning with a limited scope. To protect existing data these dependencies are cloned with the default low priority clone option.&nbsp;</div>

<p>&nbsp;</p>

<hr>
<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Replace</h2>

<p>Contrary to clone, replace does not preserve data, i.e., data is overwritten. &nbsp;</p>

<p>For more information on replace see <a href="/Topic/66c2e4f8-c1a1-40d1-9e5c-ac0c015a4f73">Search and Replace</a>.&nbsp;</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">
	<br>
	<hr>
	<h4>Sub topics</h4>
	<ul>
				<li><a href="/Page/grandMA2/clone_clone_in_user_interface/en/3.3">Clone in user interface</a></li>
				<li><a href="/Page/grandMA2/clone_examples/en/3.3">Examples</a></li>
				<li><a href="/Page/grandMA2/clone_clone_presets/en/3.3">Clone presets</a></li>
	</ul>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b39e38dc-d5c7-42da-8b6b-a281eed25344">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_spec_master_playback/en/3.3'; " title="Go to previous page 'Playback masters'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/clone_clone_in_user_interface/en/3.3';" title="Go to next page 'Clone in user interface'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29933/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

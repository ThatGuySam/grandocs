---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/system_parameter_calculate/en/1.0'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="51b2fcd8-12d0-4569-a736-da9dfd6dc236">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/system_parameter/en/1.0'; " title="Go to previous page 'Parameters'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/system_parameter_expand/en/1.0';" title="Go to next page 'Expand the amount of parameters'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/51b2fcd8-12d0-4569-a736-da9dfd6dc236">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/52456/10'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.0</span>
			</div>
		<h1>Calculate Parameters</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Parameter count</a>
						</li>
				</ul>
			</div>

		<p>Calculating the needed amount of parameters can be a big task depending on the size of the setup.</p>

<p>It is generally true that most modern fixtures use fewer parameters than DMX channels.</p>

<p>The best way to see how many parameters a show needs is to patch all the fixtures and then open the <strong>Details</strong> in the<strong> </strong><a href="/Topic/9eada618-b26f-4412-abc1-45ec36e8326c">System Info Window</a>.</p>

<p>Here the amount of needed (used) parameters can be seen, and the amount of currently available parameters.</p>

<p>Read the <a href="/Topic/51b2fcd8-12d0-4569-a736-da9dfd6dc236">Expand the amount of parameters topic</a> to learn how to get more.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Parameter count</h2>

<p>Some devices provide parameters:</p>

<ul>
	<li><strong>grandMA3 full-size and grandMA3 full-size CRV:</strong><br>
	12 288 parameters.</li>
	<li><strong>grandMA3 light and grandMA3 light CRV:</strong><br>
	8 192 parameters.</li>
	<li><strong>grandMA3 extension:</strong><br>
	0 parameters.</li>
	<li><strong>grandMA3 replay unit:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA3 compact XL:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA3 compact:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA3 processing unit XL:</strong><br>
	16 384 parameters.</li>
	<li><strong>grandMA3 processing unit L:</strong><br>
	8 192 parameters.</li>
	<li><strong>grandMA3 processing unit M:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA3 8Port Node</strong>:<br>
	0 parameters.</li>
	<li><strong>grandMA3 4Port Node:</strong><br>
	0 parameters.</li>
	<li><strong>grandMA3 2Port Node:</strong><br>
	0 parameters.</li>
	<li><strong>grandMA3 8Port Node DIN-Rail</strong>:<br>
	0 parameters.</li>
	<li><strong>grandMA3 4Port Node DIN-Rail</strong>:<br>
	0 parameters.</li>
	<li><strong>grandMA3 2Port Node DIN-Rail</strong>:<br>
	0 parameters.</li>
	<li><strong>grandMA3 onPC command wing XT:</strong><br>
	4 096 parameters.</li>
	<li><strong>grandMA3 onPC command wing:</strong><br>
	2 048 parameters.</li>
	<li><strong>grandMA3 onPC 8Port Node 4k:</strong><br>
	4 096 parameters (when connected to grandMA2 onPC this node provides only 2 048 parameters).</li>
	<li><strong>grandMA3 onPC 4Port Node 4k:</strong><br>
	4 096 parameters (when connected to grandMA2 onPC this node provides only 2 048 parameters).</li>
	<li><strong>grandMA3 onPC 2Port Node 2k:</strong><br>
	2 048 parameters (when connected to grandMA2 onPC this node provides only 1 024 parameters).</li>
	<li><strong>grandMA3 onPC Software</strong>:<br>
	0 parameters.</li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="51b2fcd8-12d0-4569-a736-da9dfd6dc236">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/system_parameter/en/1.0'; " title="Go to previous page 'Parameters'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/system_parameter_expand/en/1.0';" title="Go to next page 'Expand the amount of parameters'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/52456/10';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

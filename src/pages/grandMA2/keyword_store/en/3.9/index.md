
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
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ceccbdfa-59dc-4cff-a065-d27fc02fcccf">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_stomp/en/3.9'; " title="Go to previous page 'Stomp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_storelook/en/3.9';" title="Go to next page 'StoreLook'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54756/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Store Keyword</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Description</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Options</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Example</a>
						</li>
				</ul>
			</div>

		<p>To go to the Store keyword, press <span class="hardkey">Store</span>.<br>
You can also type <strong>Store </strong>in the command line or use the shortcut <strong>S</strong>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>The store keyword, stores functions in the show file.</p>

<p>If no object-type or destination is given, the object-type <strong>Cue</strong> will be used for the sequence of the selected executor.</p>

<p>Store is a function keyword.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax">Store [object-list] "Name" / [option] = [option value]</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Options</h2>

<p>To get a list of all available options to the store keyword, type in the command line</p>

<div class="cl_input">[Channel]&gt; Store /?</div>

<p>The store keyword has the following options.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Option</th>
			<th scope="col">Option Shortcut</th>
			<th scope="col">Option Value</th>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>addnewcontent</td>
			<td>an</td>
			<td>False, True</td>
			<td>False is the same as originalcontent.</td>
		</tr>
		<tr>
			<td>auto</td>
			<td>not available</td>
			<td>no option value</td>
			<td>Stores preset values with the default preset scope.</td>
		</tr>
		<tr>
			<td>cueonly</td>
			<td>co</td>
			<td>False, True</td>
			<td>Prevents changes to track forward.</td>
		</tr>
		<tr>
			<td>effects</td>
			<td>ef</td>
			<td>False, True</td>
			<td>Filters or enables effect layer.</td>
		</tr>
		<tr>
			<td>embedded</td>
			<td>e</td>
			<td>False, True</td>
			<td>Creates embedded preset.</td>
		</tr>
		<tr>
			<td>global</td>
			<td>g</td>
			<td>no option value</td>
			<td>Stores preset with global values.</td>
		</tr>
		<tr>
			<td>keepactive</td>
			<td>ka</td>
			<td>False, True</td>
			<td>Keeps values active.</td>
		</tr>
		<tr>
			<td>merge</td>
			<td>m</td>
			<td>no option value</td>
			<td>Merges the new values into the existing values. New values have a higher priority and will overwrite existing values. If no new value is given, the values of the existing cue stays.</td>
		</tr>
		<tr>
			<td>noconfirm</td>
			<td>nc</td>
			<td>no option value</td>
			<td>Suppress stores confirmation pop-up.</td>
		</tr>
		<tr>
			<td>originalcontent</td>
			<td>or</td>
			<td>False, True</td>
			<td>Stores the original content of the preset, effect, or cue. False is the same as addnewcontent.</td>
		</tr>
		<tr>
			<td>overwrite&nbsp;</td>
			<td>o</td>
			<td>no option value</td>
			<td>Removes stored values in the&nbsp;cue and stores the new values.</td>
		</tr>
		<tr>
			<td>presetfilter</td>
			<td>p</td>
			<td>False, True</td>
			<td>Sets preset filter on or off.</td>
		</tr>
		<tr>
			<td>remove</td>
			<td>not available</td>
			<td>no option value</td>
			<td>Removes stored values for attributes with active programmer values.</td>
		</tr>
		<tr>
			<td>screen</td>
			<td>not available</td>
			<td>1..6</td>
			<td>Stores view with selected screen.</td>
		</tr>
		<tr>
			<td>selective</td>
			<td>s</td>
			<td>no option value</td>
			<td>Stores preset with selective values.</td>
		</tr>
		<tr>
			<td>source</td>
			<td>so</td>
			<td>Prog, Output, Dmx In</td>
			<td>Defines data source.</td>
		</tr>
		<tr>
			<td>tracking</td>
			<td>t</td>
			<td>False, True</td>
			<td>Stores with tracking. False is the same as cueonly.</td>
		</tr>
		<tr>
			<td>trackingshield</td>
			<td>ts</td>
			<td>no option value</td>
			<td>Use tracking shield for store.</td>
		</tr>
		<tr>
			<td>universal</td>
			<td>u</td>
			<td>no option value</td>
			<td>Stores preset with universal values.</td>
		</tr>
		<tr>
			<td>useselection</td>
			<td>use</td>
			<td>Active, Allforselected, Activeforselected, All, Look</td>
			<td>Sets selection.</td>
		</tr>
		<tr>
			<td>values</td>
			<td>v</td>
			<td>False, True</td>
			<td>Filters or enables value layer.</td>
		</tr>
		<tr>
			<td>valuetimes</td>
			<td>vt</td>
			<td>False, True</td>
			<td>Filters or enables value times layer.</td>
		</tr>
		<tr>
			<td>x</td>
			<td>not available</td>
			<td>x coordinate in the layout view, e.g. -9.17441</td>
			<td>Sets the x coordinate in the layout view. For more information, see <a href="/Topic/660ccf42-4e91-42dd-9b4b-4df679067361">Layouts</a>.</td>
		</tr>
		<tr>
			<td>y</td>
			<td>not available</td>
			<td>y coordinate in the layout view, e.g. 7.93822</td>
			<td>Sets the y coordinate in the layout view. For more information, see <a href="/Topic/660ccf42-4e91-42dd-9b4b-4df679067361">Layouts</a>.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Example</h2>

<p>1. Store cue 7 in the sequence of the selected executor. For more information, see <a href="/Topic/c07eccf7-1cab-4db8-98b1-6514934e34ff">Store Cues</a>.</p>

<div class="cl_input">[Channel]&gt; Store 7</div>

<p>&nbsp;</p>

<p>2. Store dimmer preset 3 with all attributes and keep the values active in the programmer. For more information, see <a href="/Topic/46fb57c7-44a2-4381-98c4-d0ae1cb6e3d7">Store Presets</a>.</p>

<div class="cl_input">[Channel]&gt; Store Preset 1.3 /presetfilter=false /ka</div>

<p>&nbsp;</p>

<p>3. Store the programmer values as cue 1 through cue 10 and cue 20 through cue 30.</p>

<div class="cl_input">[Channel]&gt; Store Cue 1 Thru 10 + 20 Thru 30</div>

<p>&nbsp;</p>


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
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ceccbdfa-59dc-4cff-a065-d27fc02fcccf">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_stomp/en/3.9'; " title="Go to previous page 'Stomp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_storelook/en/3.9';" title="Go to next page 'StoreLook'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54756/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
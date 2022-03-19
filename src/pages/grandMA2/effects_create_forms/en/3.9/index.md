
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="5391b9db-b952-4305-a619-68726ce1bca0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/effects_effect_using_presets/en/3.9'; " title="Go to previous page 'Create an effect that uses presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/effects_pool_options/en/3.9';" title="Go to next page 'Pool options'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54995/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Create Effect Forms</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Settings in the Graph Editor</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Table Mode</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Modes</a>
						</li>
				</ul>
			</div>

		<p>The form is the basis of an effect.&nbsp;</p>

<p><a id="open_form_pool" name="open_form_pool"></a>To create a form, open the form pool first:</p>

<ol>
	<li>Tap anywhere in the <strong>user-defined area</strong>.&nbsp;</li>
	<li>The pop-up <strong>Crate Basic Window</strong> opens.</li>
	<li>Next, tap <span class="softkey">Pools</span>.&nbsp;</li>
	<li>Then, tap <span class="softkey">Forms</span>.</li>
	<li>The pool Forms opens.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/window_form-pool_v3-3.png">
<figcaption><em>Form pool</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>Like the image pool, the form pool displays red padlocks. For more information on padlocks and their meanings see <a href="/Topic/214d8606-8e12-438d-9ebd-54f9940e6471">Image Pool</a>.&nbsp;</p>

<div class="important"><strong>Important:</strong><br>
Forms are locked so that predefined effects can fall back to the default values.</div>

<ol start="6">
	<li>To edit an already existing object blocked by a red padlock, press <span class="softkey">Copy</span>, then tap the object containing the red padlock, and then tap an empty cell in the pool.&nbsp;</li>
	<li>Then, press <span class="hardkey">Edit</span> and tap the object you have copied.&nbsp;</li>
	<li>To create a new form, press Edit and tap an empty cell in the form pool.&nbsp;</li>
	<li>The graph editor opens.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/window_graph-editor_form-pool_v3-3.png">
<figcaption><em>Form pool – graph editor</em></figcaption>
</figure>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="settings_graph_editor" name="settings_graph_editor"></a>Settings in the Graph Editor</h2>

<ol start="1">
	<li>Then, set the focus by tapping the line.</li>
	<li>Tap <span class="softkey">Add Point</span> and move the line in one of the four directions.</li>
</ol>

<div class="important"><strong>Important:</strong><br>
If the focus is not precise, the line jumps to the point that was inaccurately set.&nbsp;</div>

<ol start="3">
	<li>To remove a point, tap <span class="softkey">Delete Point</span>.</li>
	<li>To add an additional graph, add <span class="softkey">Add Graph</span>.&nbsp;</li>
</ol>

<div class="tip"><strong>Hint:</strong><br>
It is also possible to lock graphs so that you do not slip when editing various graphs in a row.&nbsp;</div>

<ol start="5">
	<li>To lock a graph, tap <span class="softkey">Lock Graph</span>.</li>
	<li>To unlock graphs, tap <span class="softkey">Unlock all Graphs</span>.&nbsp;</li>
	<li>Depending on the form of the graph, it is possible to visualize it in 2D.<br>
	-Tap <span class="softkey">2D Mode</span>.&nbsp;</li>
	<li>If you have several graphs, it is possible to link them.<br>
	-Tap <span class="softkey">Link Graphs</span>. Editing in one of the graphs linked together, applies the modification in all graphs linked. If the button is enabled, the font is displayed in yellow.&nbsp;<br>
	-To delink the graphs, tap <span class="softkey">Link Graphs</span> again. The font is now white.</li>
	<li>Change the color of the graph:<br>
	-Tap the name of the form displayed on the right or tap the graph you would like to change and then tap <span class="softkey">Change Color</span>.<br>
	-The pop-up <strong>Select Color</strong> opens containing a color picker.<br>
	-Select the color and tap <span class="softkey">Please</span>.<br>
	-The color of the graph is now adjusted.&nbsp;</li>
	<li>Label the graphs of a form:<br>
	-Tap the name of a graph displayed on the right or tap the graph in the editor and then tap <span class="softkey">Label Graph</span>.<br>
	-The pop-up for entering names opens. Type the name and press <span class="hardkey">Please</span>.<br>
	-The graph is now labeled.</li>
	<li>Label the form in the form pool:<br>
	-Tap <span class="softkey">Label</span>.<br>
	-The pop-up for entering name opens. Type the name and press <span class="hardkey">Please</span>.<br>
	-The form is now labeled.&nbsp;</li>
	<li>It is possible to use predefined graphs as well:<br>
	-Tap <span class="softkey">Load Predefined</span> on the right of the graph editor.<br>
	-The pop-up <strong>Load Predefined Graph</strong> opens.
	<figure class="caption"><img alt="" src="/Media/Image/popup_load-predefined-graph_form-pool_v3-3.png">
	<figcaption>Pop-up – predefined graphs</figcaption>
	</figure>
	<br>
	<br>
	Tap to choose a form.<br>
	-The form is instantly applied.&nbsp;&nbsp;</li>
</ol>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Table Mode</h2>

<ol start="1">
	<li>To display the graph in form of a table, tap <span class="softkey">Table Mode</span> on the right of the graph editor.<br>
	The graph editor is now displayed in the table mode.</li>
</ol>

<figure class="caption"><img alt="" src="/Media/Image/window_graph-editor-table-mode_form-pool_v3-3.png">
<figcaption><em>Graph editor in table mode</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>The table mode consists of a table and tabs.&nbsp;</p>

<ul>
	<li>Each <strong>tab </strong>stands for a graph.</li>
	<li>The columns <strong>X and Y</strong> represent the position of points.</li>
	<li>The column <strong>Mode</strong> stands for modes of points.</li>
</ul>

<ol start="2">
	<li>To manually adjust the positions X and Y, tap and hold a cell or press the key&nbsp;<span class="hardkey">Edit</span> and tap a cell in the corresponding column.<br>
	-The calculator opens.<br>
	-Adjust the position and tap <span class="softkey">Please</span>.<br>
	-Position is modified.</li>
	<li>Set the mode:<br>
	-Tap and hold a cell or press the key <span class="hardkey">Edit</span> and tap a cell in the column <strong>Mode</strong>.<br>
	-The pop-up Select Mode opens.
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-mode_table-mode_form-pool_v3-3.png">
	<figcaption><em>Pop-up showing modes</em></figcaption>
	</figure>
	<br>
	<br>
	-Tap to choose a mode.<br>
	-The mode is&nbsp;applied.&nbsp;</li>
	<li>To add a new point, tap and hold the cell in the line <strong>New </strong>at the bottom of the table.&nbsp;</li>
</ol>

<p>To switch back to the graphic display, tap <span class="softkey">Graphic Mode</span>.&nbsp;</p>

<hr>
<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Modes</h2>

<p>The modes are applied between two points.&nbsp;</p>

<ul>
	<li><strong>Linear:</strong><br>
	Creates a straight line between two points.</li>
	<li><strong>Spline:</strong><br>
	Creates a soft-edged line intersecting the points.</li>
	<li><strong>Spline (Break at Start):</strong><br>
	Creates an edged corner on the point that was marked (tapped) and a curve between the point marked (tapped) and the following point.</li>
	<li><strong>Spline (Break at End):</strong><br>
	Creates an edged corner on the point following the point that was marked (tapped) and a curve between these two points.</li>
	<li><strong>Step (Start):</strong><br>
	Creates a step leading from the point marked (tapped).&nbsp;</li>
	<li><strong>Step (End):</strong><br>
	Creates a mirror-inverted step form the point following the point that was marked (tapped).&nbsp;</li>
</ul>

<hr>
<p>If all setting were adjusted accordingly, close the graph editor:<br>
-Tap <img alt="" src="/Media/Image/icon_close_small_v3-2.png">&nbsp;in the upper right corner of the window and the editor closes.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="5391b9db-b952-4305-a619-68726ce1bca0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/effects_effect_using_presets/en/3.9'; " title="Go to previous page 'Create an effect that uses presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/effects_pool_options/en/3.9';" title="Go to next page 'Pool options'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54995/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
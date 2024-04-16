---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/Plugins/en/1.9'
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
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option selected="selected" value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7fb53fe3-d381-400a-b87d-e0cf04cb22bd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/layout_encoder/en/1.9'; " title="Go to previous page 'Layout encoder bar'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/what_is_lua/en/1.9';" title="Go to next page 'What is Lua?'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/7fb53fe3-d381-400a-b87d-e0cf04cb22bd">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/86882/43'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Plugins</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Create a New Plugin</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Create and Edit a Component</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Run a Plugin</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Lua Code Templates</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">API Description</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Export a Plugin</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Import a Plugin</a>
						</li>
				</ul>
			</div>

		<p>Plugins are pieces of Lua code that can add features or functionality to the grandMA3.&nbsp;</p>

<p>With plugins, it is possible to do more than what can be achieved with macros.</p>

<div class="important"><strong>Important:</strong><br>
The creation and use of plugins can go deeper into the system than the "normal" usage of a console. Therefore the technical support team of MA Lighting may not be able to help you in all circumstances when using complex plugins, and plugins might have to be rewritten when migrating show files to future grandMA3 software versions.</div>

<p>The plugins are stored in the Plugins Pool.</p>

<figure class="caption"><img alt="" src="/Media/Image/window_plugin_pool_v1-9.png">
<figcaption>Plugin pool window</figcaption>
</figure>

<p>&nbsp;The pool can be created like any other using the <a href="/Topic/695b9b96-a7a6-43f9-a278-1dc420eec05b" target="_blank">Add Window pop-up</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Create a New Plugin</h2>

<p>To create or add a plugin to the plugin pool, edit an empty pool object using any edit method.</p>

<p>The <strong>Edit UserPlugin </strong>pop-up opens:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_edit-userplugin_v1-9.png">
<figcaption>Edit Plugin window</figcaption>
</figure>

<p>This editor can show the settings for the plugin if <span class="softkey">Setting</span> is On in the title bar.</p>

<p>These are the settings:</p>

<ul>
	<li><strong>Name</strong>:<br>
	The name of the plugin. Tap this to edit the name.</li>
	<li><strong>Scribble</strong>:<br>
	The assigned scribble. Tap this to select a scribble or open the editor to create a new one.</li>
	<li><strong>Appearance</strong>:<br>
	The assigned appearance. Tap this to select an appearance or open the editor to create a new one.</li>
	<li><strong>Note</strong>:<br>
	A note can be added to the plugin.</li>
	<li><strong>Lock</strong>:<br>
	Toggle this On to lock the plugin from changes.</li>
	<li><strong>Author</strong>:<br>
	This can be used to add the name of the plugin author.</li>
	<li><strong>Version</strong>:<br>
	This custom field can be used to indicate a version of the plugin.</li>
	<li><strong>Path</strong>:<br>
	This is a path (sub-folders) for the files inside the plugin folder (gma3_library/datapools/plugins).</li>
	<li><strong>UserRights</strong>:<br>
	This can be used to set the needed user rights for running this plugin.</li>
</ul>

<p>A plugin can contain several Lua components but should at least have 1.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Create and Edit a Component</h2>

<p>A Lua component contains the Lua code. Each component is usually one file.</p>

<p>Add the component by pressing and holding the <span class="softkey">New ComponentLua</span>.</p>

<p>A new component can also be added by selecting a line in the component list and tapping <span class="softkey">Insert new ComponentLua</span>. This creates a new line above the selected line.</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_edit-userplugin_new-component_v1-9.png">
<figcaption>Plugin with 1 added Lua component</figcaption>
</figure>

<p>Each component has some settings and some information. It is the different columns in the list.</p>

<ul>
	<li><strong>Name</strong>:<br>
	This is the name of the component.</li>
	<li><strong>Scribble</strong>:<br>
	This is the assigned scribble - this is not displayed anywhere.</li>
	<li><strong>Appearance</strong>:<br>
	This is the assigned appearance - this is not displayed anywhere.</li>
	<li><strong>Note</strong>:<br>
	A note can be added to the component.</li>
	<li><strong>FileName</strong>:<br>
	This is the file name for the Lua component file. A file name is needed if the plugin is exported. Giving the component a name also creates a file name.</li>
	<li><strong>FilePath</strong>:<br>
	This is a path (sub-folders) for the Lua file inside the plugin folder (gma3_library/datapools/plugins).</li>
	<li><strong>FileSize</strong> (Information only):<br>
	This displays the file size of the Lua component file in bytes.</li>
	<li><strong>Installed</strong>:<br>
	If this is set to Yes, the Lua components will be updated from the file archive they were imported from. This is useful when Lua files are edited and copied into the folder using an external editor.<br>
	To update any changes in these Lua components, the <a href="/Topic/388aeab2-20e9-40fc-ba0b-c3ab649c6bd2" target="_blank">ReloadAllPlugins keyword</a> must be executed.</li>
	<li><strong>IsResource</strong> (Information only):<br>
	This indicates if the Lua file is an internal resource stored in an internal library. These files are not stored in the showfile and are not streamed.</li>
	<li><strong>InStream</strong> (Information only):<br>
	Yes means that the Lua code is saved in the show file and streamed in the session but stays as saved in the show file.<br>
	No means that the Lua code is locally saved on the hard drive. The content of this Lua code can be updated using the <a href="/Topic/388aeab2-20e9-40fc-ba0b-c3ab649c6bd2" target="_blank">ReloadAllPlugins keyword</a>.<br>
	Setting <strong>Installed</strong> to Yes will set InStream to No.</li>
	<li><strong>UserRights</strong>:<br>
	This can be used to set user rights on specific components.</li>
	<li><strong>SyntaxError </strong>(Information only):<br>
	If syntax errors prevent the Lua component from being loaded into the Lua engine, the SyntaxError property turns to Yes, and the component line turns red.</li>
</ul>

<p>Select the component that needs to be edited and tap <span class="softkey">Edit</span>.</p>

<p>This opens the <strong>Lua Input</strong> pop-up:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_lua-input_v1-8.png">
<figcaption>Empty Lua Input pop-up</figcaption>
</figure>

<p>Text can be copied into the pop-up from an external editor (when using the grandMA3 onPC), or it can be written directly in the pop-up.</p>

<p>Editing existing code can also be done in the Lua Input pop-up.</p>

<p>Line numbers help when troubleshooting code or as general help (the numbers are not part of the code). The number of the active line is in white color, and the others are in gray color.</p>

<p>When <span class="softkey">Tab</span> is used to indent text, a gray "&gt;" appears where the tab was pressed.</p>

<p>When the desired code is input, it needs to be saved by tapping <span class="softkey">Save</span> in the title bar.</p>

<p>The title bar has other buttons:</p>

<ul>
	<li><img alt="" src="/Media/Image/icon_triangle-down_15_v1-8.png">&nbsp;<strong>(Virtual Keyboard)</strong>:<br>
	This toggles the on-screen virtual keyboard.</li>
	<li><strong>Lua Code Templates</strong>:<br>
	This toggles the Lua Code Templates that can be used as templates for writing new code. Learn more about this <a href="#lua_code_template">below</a>.</li>
	<li><strong>API Description</strong>:<br>
	This toggles the grandMA3-specific Lua API description on the right-hand side of the Lua Input. Learn more about this <a href="#api_description">below</a>.</li>
	<li><img alt="" src="/Media/Image/icon_undo-arrow_15_v1-8.png"> <strong>(Undo)</strong>:<br>
	This undoes the last edit.</li>
	<li><img alt="" src="/Media/Image/icon_redo-arrow_15_v1-8.png">&nbsp;<strong>(Redo)</strong>:<br>
	Thie redoes undoed actions.</li>
</ul>

<p>After the code is saved, the Lua Input pop-up can be closed by tapping the&nbsp;<img alt="" src="/Media/Image/icon_cross_v0-1.png"> in the upper right corner.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Run a Plugin</h2>

<p>The plugins can be run by tapping them in the pool or using the <a href="/Topic/0cad72ab-e536-4db3-9574-ba6f9e91dde6" target="_blank">Plugin keyword</a>.</p>

<p>Running the plugin will execute the first component. This component needs to call other components, or specific components can be called directly using this syntax:</p>

<p><span class="syntax">Plugin [Plugin_Number or "Plugin_Name"].[Component_Number or "Component_Name"]</span></p>

<p>Plugins can also be assigned to executors and view buttons. Learn how in the <a href="/Topic/ac65e981-7d7a-4890-9b5b-19d933e7abce" target="_blank">Assign Object to an Executor topic</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2><a id="lua_code_template" name="lua_code_template"></a>Lua Code Templates</h2>

<p>The templates are example codes that can be copied into the editor.</p>

<div class="restriction"><strong>Restriction:</strong><br>
Using a template will delete any existing code.</div>

<p>Tap <span class="softkey">Lua Code Templates</span> in the title bar to show the templates.</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_lua-input_templates_v1-8.png">
<figcaption>The Lua code templates</figcaption>
</figure>

<p>The different templates are shown next to each other, and there is a horizontal scroll bar making it possible to scroll through the different templates.</p>

<p>To import one of the templates, select it (yellow frame), and tap <span class="softkey">Use Template</span>.</p>

<p>The templates can be closed without importing a template by tapping <span class="softkey">Lua Code Templates</span> in the title bar or the <span class="softkey">Back</span> in the lower left corner.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2><a id="api_description" name="api_description"></a>API Description</h2>

<p>The API description can be shown on the right side of the Lue Input pop-up. It can be toggled On or Off by tapping <span class="softkey">API Description</span> in the title bar.</p>

<p>It lists all the grandMA3-specific Lua functions and shows a short explanation of the required arguments and the return values.</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_lua-input_api-description_v1-8.png">
<figcaption>The API description</figcaption>
</figure>

<p>There are three elements to the description. At the top is a search input field where text can be input to search the list of functions.</p>

<p>Below is the actual list of functions in alphabetic order. Selecting one shows the description of the selected function below the list.</p>

<p>Tapping the&nbsp;<img alt="" src="/Media/Image/icon_plus_15_v1-5.png"> in the description area adds the function to the Lua input code, with the arguments, at the cursor's current location.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Export a Plugin</h2>

<p>The plugin can be exported from the <strong>Edit UserPlugin </strong>by tapping <span class="softkey">Export</span>.</p>

<p>This creates an XML file for the plugin.</p>

<p>If the Lua components have a file name ending in ".lua", an extra LUA file is exported for the component. If there is no valid file name for the component, it is then stored in the XML file, coded in the "base64" format.</p>

<div class="restriction"><strong>Restriction:</strong><br>
The Lua files are only exported if the Lua component has "Yes" in the "InStream".</div>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Import a Plugin</h2>

<p>All the required files are needed to import a plugin successfully. The XML file is always needed; if the Lua components are stored as extra Lua files, they are also needed. These files must be in the ../gma3_library/datapools/plugins folder on the desired drive.</p>

<ol>
	<li>Create a new plugin.</li>
	<li>Tap <span class="softkey">Import</span>.</li>
	<li>Select the desired drive and XML file.</li>
	<li>Tap <span class="softkey">Import</span>.</li>
	<li>The plugin is imported, and the editor can be closed.</li>
</ol>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">
	<br>
	<hr>
	<h4>Sub topics</h4>
	<ul>
				<li><a href="/Page/grandMA3/what_is_lua/en/1.9">What is Lua?</a></li>
				<li><a href="/Page/grandMA3/lua_handle/en/1.9">Handle</a></li>
				<li><a href="/Page/grandMA3/lua_interface/en/1.9">Interface functions</a></li>
				<li><a href="/Page/grandMA3/lua_variables/en/1.9">Variable functions</a></li>
				<li><a href="/Page/grandMA3/lua_objectfree/en/1.9">Functions - Object-Free API</a></li>
				<li><a href="/Page/grandMA3/lua_object/en/1.9">Functions - Object API</a></li>
	</ul>

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
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option selected="selected" value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7fb53fe3-d381-400a-b87d-e0cf04cb22bd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/layout_encoder/en/1.9'; " title="Go to previous page 'Layout encoder bar'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/what_is_lua/en/1.9';" title="Go to next page 'What is Lua?'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/86882/43';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

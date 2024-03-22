---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/adv_exec_ch_pages/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e7a4f4c5-a246-4969-8c3b-8451ed0ac009">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_pages/en/3.3'; " title="Go to previous page 'Executor pages'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_options/en/3.3';" title="Go to next page 'Executor options'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/e7a4f4c5-a246-4969-8c3b-8451ed0ac009">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29926/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Channel Pages</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Static Channel Pages</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Assigning fixtures</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Example</a></li>
										<li><a href="#toc_header_anchor_4">Auto Create Channel Pages</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Dynamic Channel Page</a>
						</li>
				</ul>
			</div>

		<p>The Fader Executors can be changed to be Channel Faders instead of Executors.</p>

<div class="important"><strong>Important:</strong><br>
Changing to the Channel Pages does not remove or turn off the Executors.</div>

<p>There are two types of Channel Pages: <strong>Static</strong> pages that can have dimmer attributes for specific fixtures. <strong>Dynamic</strong> pages that will be populated by the attributes and selected fixtures.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Static Channel Pages</h2>

<p>Static Channel Pages can have attributes of fixtures assigned to the faders. In the Channel Pages the faders are called ChannelFaders.</p>

<p>The static Channel pages are organized in a Channel Pool. The pool could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_channel-pool_v3-3.png">
<figcaption><em>Channel page pool</em></figcaption>
</figure>

<p>This works as any of the pool - if you have not read the <a href="/Topic/0c2b39f5-dc5a-4605-bb4e-268b604466a2">Pools in General section</a>, then please read it.</p>

<p>This is what it looks like in Sheet Style:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_channel-pool_sheet-style_v3-3.png">
<figcaption><em>Channel page pool - Sheet Style</em></figcaption>
</figure>

<p>The green <strong>C </strong>indicates that this Channel Page is currently active. A gray <strong>C </strong>indicates that this is the last viewed page (It is probably back to en Executor page).</p>

<p>Tapping one of the objects in the pool will change to the Channel page. It is also possible to change the page using the <span class="hardkey">Ch Pg +</span> and <span class="hardkey">Ch Pg -</span> keys or the <a href="/Topic/71b3699d-6aad-46e8-b444-cc7c97b59d19">ChannelPage</a> command. Keeping the <span class="hardkey">Ch Pg -&nbsp;</span> key pressed for a second will jump back to page number 1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Assigning fixtures</h2>

<p>Static Channel Pages needs to be build - that means fixtures needs to be assigned to the ChannelFaders.</p>

<p>This can be gone using the keys: <span class="hardkey">Assign</span> <span class="hardkey">Chanel</span> (or <span class="hardkey">Fixture</span>) [number or range] <span class="hardkey">Page</span> <span class="hardkey">Page</span> (this gives the ChannePage command) [page number].[fader number] <span class="hardkey">Please</span>.</p>

<p>If an attribute is not specified then the dimmer will be assigned. Other attributes can be assigned, but it takes a little bit of investigation to find out the attribute number or name. This is the general syntax:</p>

<p><span class="syntax">Assign Fixture [id number].[subfixture number].[attribute] (At) ChannelPage [page number].[fader number]</span></p>

<p>The best way to show how to find an attribute number is by an example.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Example</h3>

<p>In my show I have a fixture patched that has pan and tilt attributes it is Fixture ID 1. I would like to have the dimer assigned to ChannelFader 1 on ChannelPage 1. And then the Pan on fader 2 and Tilt on fader 3.</p>

<p>Before we can assign anything, we need to create the page. Simply press <span class="hardkey">Ch Pg +</span> once to open the first Channel Page - this also creates the page.</p>

<p>Assigning the dimmer to fader 1 is simple: <span class="hardkey">Assign</span> <span class="hardkey">Fixture</span> <span class="hardkey">1</span> and then press on of the keys associated with fader number 1.</p>

<p>Now we need to find the attribute numbers for fixture 1. Open a <strong>Command Line Feedback</strong> window.</p>

<p>We need to explore fixture 1 so type the following command and execute it with a please:</p>

<div class="cl_input">[Channel]&gt; CD Fixture 1</div>

<p><strong>CD</strong> is short for the ChangeDirectory command.</p>

<p>The command line shows that we have navigated to the fixture. We need to list the subfixtures in fixture 1. Type the following command (you do not need to type anything before the <strong>&gt;</strong>)</p>

<div class="cl_input">[LiveSetup/Layers 4/Spots 3/Spot 1 1]&gt;List</div>

<p>&nbsp;Depending on your show it might look exactly like above. The important part is the List command.</p>

<p>Now the Command Line Feedback window show that there are at least one subfixture. In my show it is a Vari-Lite with only one subfixture.</p>

<p>Navigate to the subfixture using the CD command again:</p>

<div class="cl_input">[LiveSetup/Layers 4/Spots 3/Spot 1 1]&gt;CD 1</div>

<p>If I know that my fixture only has one subfixture (or if I need subfixture 1), then it is possible to navigate to this location using the following command <span class="syntax">CD Fixture 1.1</span> - Do not run this command now.</p>

<p>Now we need to do another <strong>List</strong> command to see the attribute list for this fixture. The list displayed in the Command Line Feedback window shows that the PAN is number 3 and the TILT is number 4. With this knowledge we can go back to the root of the command line and assign the two attributes. Type the follwoing:</p>

<div class="cl_input">[LiveSetup/Layers 4/Spots 3/Spot 1 1/Spot 1 1]&gt;CD/</div>

<p>This returns to the root command.</p>

<div class="cl_input">[Channel]&gt; Assign Fixture 1.1.3 ChannelPage 1.2</div>

<div class="cl_input">[Channel]&gt; Assign Fixture 1.1.4 ChannelPage 1.3</div>

<p>This is how it is done using the attribute numbers.</p>

<p>It is actually a lot easier to use the attribute names. If we knew that fixture number 1 is a simple fixture with only one subfixture, then we could just have done this:</p>

<div class="cl_input">[Channel]&gt; Assign Fixture 1.1.PAN ChannelPage 1.2</div>

<div class="cl_input">[Channel]&gt; Assign Fixture 1.1.TILT ChannelPage 1.3</div>

<p>It is still useful to know how to find the attribute numbers and names of fixtures. That enables you to find and assign any attribute.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Auto Create Channel Pages</h3>

<p>Channel pages can be auto created using <strong>Setup -&gt; Show -&gt; Auto Create</strong> and then select the <strong>Channel Pages</strong> tab.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_auto-create_channel-pages_v3-3.png">
<figcaption><em>Auto Create menu - Channel Page tab</em></figcaption>
</figure>

<p>This menu is separated into a left and a right side. The left side can show to different things: FixtureTypes or Layers. These two things can be toggled by tapping the <span class="softkey">Choose</span> button at the bottom left.</p>

<p>The right side displays the content of what is selected on the left side.</p>

<p>The workflow is selecting one or more elements in the list on the left side and then selecting or deselecting fixtures from right side. Each selected fixture will create a Dimmer attribute fader.</p>

<p>On the far right side there are three green input fields. The top one set the ChannelPage number for the auto created faders. The middle one sets the fader number for the first ChannelFader. The bottom one sets the width of the page. It can be a good idea to set the width to match your hardware.</p>

<p>Tap the <span class="softkey">Always ask for Name</span> button if you wish to name the Channel Pages when they are created.</p>

<p>The <span class="softkey">Overwrite</span> button does not do any difference. Assigning attributes to ChannelFaders always overwrites the current assigned attributes.</p>

<p>Tap the <span class="softkey">Create</span> button to create the ChannelFaders. Notice that this action will change the Start page and the start fader input fields to the next available ChannelPage and ChannelFader.</p>

<p>The <span class="softkey">Create Next Page</span> will also do a create action but it will start at the next page number.</p>

<p>&nbsp;</p>

<hr>
<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2><a id="dynamic_channel_page" name="dynamic_channel_page"></a>Dynamic Channel Page</h2>

<p>The Dynamic Channel Pages are channel pages that are created based on the selection of fixtures and the currently active Feature.</p>

<p>The Dynamic Channel Pages can be accessed when the <a href="/Topic/b8a86002-14c2-4a56-ae9c-4a7b1a161a92">Channel Sheets</a> and the <a href="/Topic/b8cdf17f-2033-4fc0-a890-5640903a26c1">Fixture Sheets</a> have activated the <strong>Link Faders</strong> option. Read more about activating this in the <a href="/Topic/9867fb69-c562-4935-8b69-427bc60bd549">Title Buttons topic</a>.</p>

<p>&nbsp;</p>

<p>Dynamic Channel Pages can also be called using the <a href="/Topic/3b708acb-d356-4f09-bb2f-1d09c1253977">ChannelLink</a> command.</p>

<p>This allows you to turn On or Off the Dynamic Channel Page.</p>

<p>It can also be used to create special combinations of attributes.&nbsp;</p>

<p>Read more about it following the link to the ChannelLink above.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e7a4f4c5-a246-4969-8c3b-8451ed0ac009">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_pages/en/3.3'; " title="Go to previous page 'Executor pages'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/adv_exec_options/en/3.3';" title="Go to next page 'Executor options'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29926/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

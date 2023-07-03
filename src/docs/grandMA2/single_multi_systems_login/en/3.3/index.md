---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/single_multi_systems_login/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="26180ca0-0557-46e9-bec9-1c091549025b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/single_multi_systems_user_settings/en/3.3'; " title="Go to previous page 'User settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network/en/3.3';" title="Go to next page 'Networking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/26180ca0-0557-46e9-bec9-1c091549025b">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/30278/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Login on a station</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Log in using the GUI</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Log in using the command line</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Example:</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>There are two ways to log into a station.</p>

<p>Before logging in, you will need to know a User name.</p>

<p>To learn more about the Users and the creation of Users and User Profiles, please read the <a href="/Topic/56254dd9-1b2a-49f1-895f-38aab88b67dd">Create User Profiles and Users</a> topic.</p>

<div class="important"><strong>Important:</strong><br>
There are two default users in every show file. You can always login as "Guest" with limited access or as Administrator (password: admin) with full access.</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Log in using the GUI</h2>

<p>The main way to login using the GUI is to press the <span class="hardkey">Tools</span> key and the <span class="softkey">Login</span> button. This will open this pop-up on all screens:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_login_v3-2.png">
<figcaption><em>Login screen</em></figcaption>
</figure>

<p>A valid user name and (if there is a) password needs to be typed in.</p>

<p>One other option is when in the User &amp; Profile Setup (follow link above) then you can select a User and tap the <span class="softkey">Login</span> button in the lover right corner.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Log in using the command line</h2>

<p>Login can also be done using the <a href="/Topic/eefc99e4-ece3-42fc-a3a0-76e8999aa9d5">Login</a> command. Follow the link to read the details about it.</p>

<p>The general use is that "Login" is typed followed by the user name and the password (if any) and then executes the command with Please/Enter.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Example:</h3>

<p>If you wanted to log in as administrator then you would type:</p>

<div class="cl_input">[Channel]&gt; login administrator admin</div>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="26180ca0-0557-46e9-bec9-1c091549025b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/single_multi_systems_user_settings/en/3.3'; " title="Go to previous page 'User settings'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/network/en/3.3';" title="Go to next page 'Networking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/30278/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

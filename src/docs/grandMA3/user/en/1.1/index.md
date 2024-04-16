---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/user/en/1.1'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option selected="selected" value="32">1.1</option>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3ae0030b-f908-4804-b2f2-1a7951f3d713">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dmx_ethernet_sacn/en/1.1'; " title="Go to previous page 'sACN menu'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/user_create/en/1.1';" title="Go to next page 'Create User'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/3ae0030b-f908-4804-b2f2-1a7951f3d713">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55891/32'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Single User and Multi User Systems</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Single User Session</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Multi User Session</a>
						</li>
				</ul>
			</div>

		<p>The grandMA3 system can handle small and big systems, with one or many users at the same time.</p>

<p>&nbsp;</p>

<p>grandMA3 systems are often referred to as a <strong>Session</strong>.</p>

<p>An Ethernet network can have several sessions running.</p>

<p>A session can have one, some, or many MA devices as members or listeners.</p>

<p>This page is attempt to describe some of the differences between the two primary ways to have a system.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Single User Session</h2>

<p>In a single user session there is one operator/programmer. This person might have one or several stations (consoles or onPC).</p>

<p>When there is only one user, then all stations are logged in as the same <strong>User</strong>.</p>

<p>This is also called <strong>Full Tracking Backup</strong>. The stations are all in sync and share the different views. The programmer content is the same on all stations.</p>

<p>This is useful for the single operator. If one station fails, then the operator can move to the other station and continue working without loosing anything.</p>

<p>This operator will usually have full admin rights to the entire system.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Multi User Session</h2>

<p>In a multi user session, there are several operators. They might use the same stations and take turns (working in shifts or at different phases of the process). It can also be a system with multiple users working at the same time on different stations.</p>

<p>For this setup the operators need to create more <strong>Users</strong> and most likely more <strong>User Profiles</strong>. Each operator will then log into the station using their User and may control the complete system or just a part of the system.</p>

<p>The stations share the show file and the sequences are all in sync, but the users can have different views on the screens and their programmer is not shared - the output is.</p>

<p>Sometimes systems are a combination of multi users and full tracking backup; There are several operators (Multi User), but each operator has two (or more) stations logged in with their user (Full Tracking Backup).</p>

<p>In a multi user system, it is possible to have users with different operator rights. There are several levels of rights. They span from complete access to only being allowed to change the view.</p>


				<br>
<div class="topic-navigation">
	<br>
	<hr>
	<h4>Sub topics</h4>
	<ul>
				<li><a href="/Page/grandMA3/user_create/en/1.1">Create User</a></li>
				<li><a href="/Page/grandMA3/user_settings/en/1.1">User settings</a></li>
	</ul>

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option selected="selected" value="32">1.1</option>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3ae0030b-f908-4804-b2f2-1a7951f3d713">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/dmx_ethernet_sacn/en/1.1'; " title="Go to previous page 'sACN menu'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/user_create/en/1.1';" title="Go to next page 'Create User'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55891/32';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/patch_stage/en/3.3/stage'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f903e294-77af-4745-9c44-d631c91222d2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_universe_pool/en/3.3'; " title="Go to previous page 'Universe pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_camera/en/3.3';" title="Go to next page 'Virtual 3D cameras'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/f903e294-77af-4745-9c44-d631c91222d2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29425/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1><span class="highlight">Stage</span> View</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Moving around in the Stage View</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Stage View Options</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Follow function in Stage view</a>
						</li>
				</ul>
			</div>

		<p>The <span class="highlight">Stage</span> View is a virtual 3D space where you can position your fixtures and <span class="highlight">stage</span> elements.</p>

<p>It is a view you can create using the <a href="/Topic/472d65f0-1e74-4ca2-917c-bd1df0d1e365">Create Basic Window</a> pop-up.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_stage_v3-3.png">
<figcaption><em><span class="highlight">Stage</span> View</em></figcaption>
</figure>

<p>The default is that there is a <span class="highlight">stage</span> floor. Each fixture you add are represented by a wireframe square. The size is taken from the Fixture Type definition.</p>

<p>New fixtures are positioned at the 0,0,0 XYZ location. You can move your fixtures position to match your real world positions. To learn more about positioning the fixtures please read the <a href="/Topic/a8a59896-0673-41f0-bba5-0ad91c9f94d0">Position fixtures in the 3D <span class="highlight">stage</span></a> topic.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="Move around" name="Move around"></a>Moving around in the <span class="highlight">Stage</span> View</h2>

<p>You can freely move around in the virtual 3D space. What you are moving is actually a virtual camera. The cameras are described in more details in the <a href="/Topic/7434585d-414d-41d3-8316-62df2bf36e00">Virtual 3D Cameras topic</a>.</p>

<p>On the right side of the view you can see two controls. There is a circle with cross arrows inside. This can be used to move the camera. press or click inside the circle and move your finger or cursor while pressing. Below the move circle is a zoom bar. Pressing here and moving the finger/cursor up or down will zoom the view.</p>

<p>If you have a mouse with a scroll wheel attached and you scroll inside the <span class="highlight">Stage</span> view then you will rotate left and right around the center point. On a console you can also use a screen encoder to rotate the view. If you press the encoder while you scroll, then you will rotate up and down.</p>

<p>Often you can have a button in the title bar that is called Mouse Mode. This can be used to control the camera. In the picture above it is the button called "Select". This button has several modes: <strong>Select</strong>, <strong>Move</strong>, <strong>Orbit</strong>, <strong>Panning</strong>, and <strong>Zoom</strong>.</p>

<p><strong>Select</strong> is used to select fixtures in the view.</p>

<p>When <strong>Move</strong> is active, then you move the camera around when you click or press inside the <span class="highlight">stage</span> view and move your finger or mouse around.</p>

<p>With <strong>Orbit</strong> you can rotate around the point where click or press.</p>

<p><strong>Panning</strong> allows you to turn the camera without moving it.</p>

<p><strong>Zoom</strong> will zoom in and out.</p>

<p>&nbsp;</p>

<p>Remember that you are moving a camera. There are several default cameras that you select. The <span class="highlight">stage</span> view can show you the <span class="highlight">stage</span> from a specific camera or from the camera that you have selected in the <a href="/Topic/7434585d-414d-41d3-8316-62df2bf36e00">Camera Pool</a>.</p>

<p>In the title bar of the <span class="highlight">stage</span> view, you might see the camera swipe button. In the picture above it is the button called<strong> [Link Selected]</strong>. If you swipe it, then it might give you the following options:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_stage_camera-button_v3-2.png">
<figcaption><em><span class="highlight">Stage</span> view - Camera selection</em></figcaption>
</figure>

<p>Here you wiil see a list of all available camera. The one you select here is the one you are moving.There is the special option here called [Link Selected]. This will always use the camera you have selected in the Camera Pool.</p>

<div class="tip"><strong>Hint:</strong><br>
A connected MA 3D logged in as the same user as you, will use the same list of cameras and there location. This means that if you have the same camera selected in both your 3D and the <span class="highlight">stage</span> view, then you can move the view in MA 3D.</div>

<p>&nbsp;</p>

<p>Tapping the <span class="softkey">Zoom to Fit</span> button will reset the camera position.</p>

<p>If you tap the space bar on your keyboard, then you will step through the different cameras.</p>

<p>&nbsp;</p>

<div class="important"><strong>Important:</strong><br>
If your <span class="highlight">Stage</span> view is completely empty even though you have patched some fixtures. Then you might want to check if you have any cameras. Without cameras, then the <span class="highlight">stage</span> view cannot show you the <span class="highlight">stage</span>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><span class="highlight">Stage</span> View Options</h2>

<p>You can open the <span class="highlight">Stage</span> view options by tapping the yellow ball in the upper left corner.</p>

<p>There are four taps in the options.</p>

<p>The first one is called <strong>Calibration</strong>. This has one button. Tapping this will open the auto-calibration of moving light position. This has its own topic - please read about it here <a href="/Topic/1d08c07f-9edc-430e-83d9-a87b2b619fbc">Autocalibrate fixture positions</a>.</p>

<p>The next tap is about the <strong>Follow</strong> function. Here you can set the follow height. Please read more about the follow function below.</p>

<p>Next tap is the <strong>Mask</strong> function. Here you can set up a mask for the view. You can create a mask that hides fixtures based on a set of four rules. Read more about masks in the <a href="/Topic/4e34f421-db23-48b0-a044-a4b6ff7908f5">What are masks topic</a>.</p>

<p>The right most tap is <strong>Title Buttons</strong>. There are quite a few buttons that you can have in the title bar. The following is short description of them:</p>

<ul>
	<li><strong>Zoom to Fit</strong>:<br>
	Pressing this button will reset to position of the selected camera.</li>
	<li><strong>Camera: </strong><br>
	This is the swipe button that allows you to select a camera.</li>
	<li><strong>Setup</strong>:<br>
	This button is used to enter the <span class="highlight">Stage</span> Setup mode. Here you can change the arrangement and position of fixtures.</li>
	<li><strong>Follow</strong>:<br>
	This button will activate the Follow function. It also displays the "Z-offset". Read more about the follow function below.</li>
	<li><strong>Mouse Mode</strong>:<strong> </strong><br>
	This button is used to control what happens if you click/press inside the <span class="highlight">stage</span> view and move the cursor. Please read the <a href="#Move around">Moving around the <span class="highlight">stage</span> view</a> above.</li>
	<li><strong>Prog Only, Active Only, Parked, Seq+, Seq-, Only Selected, Mask 7, Mask 8, Mask 9, Mask 10</strong>:<br>
	These buttons are actually different mask buttons. The first six are the default mask. The last four are mask buttons that you can define. For more about the masks please read the <a href="/Topic/4e34f421-db23-48b0-a044-a4b6ff7908f5">What are masks topic</a>.</li>
	<li><strong>Enable Mask</strong>:<br>
	This button will enable or disable the mask function in the <span class="highlight">Stage</span> view. For more about the masks please read the <a href="/Topic/4e34f421-db23-48b0-a044-a4b6ff7908f5">What are masks topic</a>.</li>
	<li><strong>Follow Mask</strong>:<br>
	This button will make the <span class="highlight">Stage</span> view use the selected mask (In the Mask Pool). For more about the masks please read the <a href="/Topic/4e34f421-db23-48b0-a044-a4b6ff7908f5">What are masks topic</a>.</li>
</ul>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Follow function in <span class="highlight">Stage</span> view</h2>

<p>The follow function is a very nice way to point your moving lights at a location in your 3D space and then in your real world.</p>

<p>The idea is that you position your fixtures in the 3D space at the same location as they have in the real world. Then you select the fixtures you want to use, activate the Follow function and tap or click on your 3D <span class="highlight">stage</span> where you want the fixtures to point. And then the real fixtures will point at that location.</p>

<p>&nbsp;</p>

<p>In the options (see above) or by pressing the <span class="hardkey">Edit</span> key and then the Follow button in the title bar, you can set a Z-offset. This is the height of the point.</p>

<p>The Follow function overwrite all other Mouse Modes.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f903e294-77af-4745-9c44-d631c91222d2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_universe_pool/en/3.3'; " title="Go to previous page 'Universe pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/patch_camera/en/3.3';" title="Go to next page 'Virtual 3D cameras'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29425/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: >-
  https://help2.malighting.com/Page/MA_dot2/GSG_18_MoreAboutCuesAndPlayback/en/1.9
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/en/1.9'; " title="Go to previous page '17 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/en/1.9';" title="Go to next page '19 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/53523/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Getting Started Guide - More about cues and playback</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Let's update our cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">The alternate way</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">More changes and small fixes</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Cue timings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Group master</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Master Rate and Magic Speed</a>
						</li>
				</ul>
			</div>

		<p>We are going to add the new fixtures to our show, we are going to look at some cue timing and examining tracking. I assume you have made presets with the same names as I did.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Let's update our cues</h2>

<p>Go to cue number 5 on the main cue list.</p>

<p>Select all the X4s and put them on presets <span class="softkey">All Stage Wash</span> and <span class="softkey">Green</span>, <span class="softkey">Wide Zoom</span> and finally turn them at 60%.</p>

<p>Press the <span class="hardkey">Update</span> key followed by <span class="hardkey">Please</span> and select "Normal" and tap <span class="softkey">Ok</span> in the pop-up. This will add the values to the active cue - number 5.</p>

<p>We need the <span class="softkey">All Hex 7</span> group to be at 20% and in the same green preset. This can be updated to cue 5.</p>

<p>We also want to add some of the new profiles. Fixtures 44 thru 49 needs to go to 40% and the following position preset: <span class="softkey">All Stage Profile</span> please add a gobo and an orange or warm color. Then we put in the <span class="softkey">Wide Zoom</span>&nbsp;and the <span class="softkey">Soft Gobo</span> preset. And finally we add the <span class="softkey">Forrest</span> shaper preset. All this is also updated into cue 5.</p>

<p>Now run cue 6. Notice that this isn't a blackout any more. The fixtures we just added are still on. I know the console automatically runs into cue 7 (the protected cue), but they are on in cue 6. And they are not on in cue 7. That's because the console is a tracking console. If we asked the fixture to do something, then it'll keep doing it until we tell it something else. Cue 7 was marked protected, so all the tracking that came into cue 6 didn't go into cue 7.</p>

<p>So we need to fix cue 6 and 7. Select all the fixtures that we turned on in cue 5 and actively give them 0%. Now this needs to be stored in cue 6 - <span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">6</span> <span class="hardkey">Please</span> <span class="softkey">Merge</span>.</p>

<p>Now we need cue 7 to look like cue 5 again. We can do this by copying it again - <span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">At</span> <span class="hardkey">7</span> <span class="hardkey">Please</span> <span class="softkey">Merge</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>The alternate way</h2>

<p>This was one way to do it. There's a different way to archive the same goal.</p>

<p>We could have turned off the protection on cue 7. Done all the updates in cue 5 (tracked into cue 6 and 7). taken the fixtures to 0% and stored the values in cue 6 but in stead of doing our normal store and then select the "Normal" Store Mode, we could have used the "Cue Only" Store Mode.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_01_1-0_2.png">
<figcaption><em>Figure 1: Choose Store Method.</em></figcaption>
</figure>

<p>That would make sure that we don't track the new 0% values into cue 7.</p>

<p>This is an example of some of the many ways you can work on the dot2. Often there's not just one way to do something.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>More changes and small fixes</h2>

<p>Anyway, that should have fixed the ending of our little cue list. Please try it out. <span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span> will take you back to cue 5 with the cue fade timing, and now try cue 6 and 7.</p>

<p>Ok, moving on we should change cue number 4. Go to cue number 4. In this cue we need fixture 41 position preset <span class="softkey">Chair</span>&nbsp;and 43 at position <span class="softkey">Speaker</span>. both at 80% and in a light blue color.&nbsp;</p>

<p>Now store this as "Cue Only" in cue 4 and go back to cue 3. Have a look at your fixture symbol view. All the fixtures we added are now at their default position and color. Press&nbsp;<span class="hardkey"> Go+ </span>.</p>

<p>Notice that the fixtures fade the color and position in. That also happens when we run cue 5. That's really not that pretty. We can fix this using a function called Move In Black (MIB). It will automatically look forward in our cue list and put the fixtures in the next position needed - not only position, but all attributes except dimmer.</p>

<p>So lets activate this feature. Press <span class="hardkey">Cue</span> and then tap the tool icon&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0_2.PNG">. This opens the Settings for our main executor. There's a lot of settings here. The one we are interested in is called MIB. This is deactivated as a default. Please tap the green input box to enable it (a white check mark) and close the settings window (<span class="softkey">Esc</span> in upper left corner).</p>

<p>Now let's try our cue list again. Press <span class="hardkey">Off</span> and then one of the buttons below the two big executors. This turns off the main executor. Now press the&nbsp;<span class="hardkey"> Go+&nbsp;</span> and run cue 1 - this looks as always. Run Cue 2 and it automatically runs cue 3. With cue 3 we can see that fixtures 41 and 43 fade in the position and color. So now they are ready for cue 4.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Cue timings</h2>

<p>Now run cue 4. This will give values to all the fixtures we programmed in cue 5 so they are ready. Notice that fixtures 41 and 43 turned on. Keep an eye on them as you press <span class="hardkey">&nbsp;Go + </span>. See how they are changing color and moving while they fade out. So MIB fixes the problem of presetting the fixtures, but since we stored it as Cue Only then they'll move back to their default position and color as we go into cue 5. This is not what we want. We really want to delay the color and the movement until it's finished fading out.&nbsp;</p>

<p>Have a look in the cue list. Since we added a lot of new fixtures, we can now use most of the time columns. Locate the Position Delay column and press and hold the cell where it interacts with cue 5. This should display the Calculator where you can set the delay time for all position moments in the transaction from cue 4 into 5. Set the delay to 5 seconds. Do the same in the Color Delay column. We can even fine tune it a little bit more. Since we now wait until the dimmer has faded out, we don't need then to do a position and color change in 5 seconds. The color is just a small internal part of the fixtures, so they can move in zero seconds. The pan/tilt movement is more visible and we should give it a little time to do the movement. Give it 1 second. This should be your final result:</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_02_1-2_2.png">
<figcaption><em>Figure 2: Cue list with Preset Type timing.</em></figcaption>
</figure>

<p>This works because nothing else moves or changes color in this cue. Otherwise we would have to make a cue in between&nbsp;4 and 5.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Group master</h2>

<p>Now if we imagine that we are going to play this show and that the audience love it, they might want multiple curtain calls. Our small but cool imaginary theater actually has a curtain and the stage manager want to use this instead of going back in our BO cue. So, we need to be able to remove all our front lights. This is best done using a group master that can limit the output from the FOH group.</p>

<p>Clear your programmer and activate group <span class="softkey">All FOH</span> - how nice we already had that :-) With this selection in our programmer, press <span class="hardkey">Store</span> <span class="hardkey">Group</span> and then one of the keys associated with executor number 6. Now this works as a group inhibitor. This means that the output of the FOH fixtures are limited by this master. When it's at 100% then they all have full range of output. If you put this master to 50%, then this is their output limit. The output is scaled. This means&nbsp;that if a fixture is stored at 50% in the cue and you move the master to 50% then the output goes to 50% of 50% - which is 25%. So it's very important that you remember to put all the Group masters back to 100% for your show.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Master Rate and Magic Speed</h2>

<p>Now sometimes it's nice to be able to dynamically modify the cue timing just little bit. You might want to match the speed of a performer with the stored cue time. Or you have really long fades that you just wanna see but not&nbsp;waiting half an hour on that nice sunset you have programmed. Then you can use the master rate. Press <span class="hardkey">Store</span> <span class="hardkey">Speed</span> and then any key associated with executor number 5. On the pop-up window you need to select the <span class="softkey">Master Rate</span>. This gives you a master rate fader.</p>

<p>This master's normal position is in the middle of the fade range. Here all cue timings are 1 to 1. So a 5 second fade will run on 5 seconds. The fader value on the master is divided with the cue timings. So if the cue fade time is 5 seconds and you move the master rate up so it says 2, then you have the 5 seconds cue fade time that will be divided by 2 and the result is a 2.5 seconds cue fade. On the other hand, if you move the fader down till it says 0.5 then you have 5 divided by 0.5 - the result is a 10 seconds cue fade.</p>

<p>Press the <span class="hardkey">Magic</span> key. This opens a nice window like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/dot2_views-and-windows_magic-speed_v1-3_2.png">
<figcaption><em>Figure 3: Magic Speed View</em></figcaption>
</figure>

<div class="tip"><strong>Hint:</strong><br>
To see Master Rate, Exec Time and Prog Time, tap Other in the title bar of the Magic Speed View.&nbsp;</div>

<figure class="caption"><img alt="" src="/Media/Image/dot2_views-and-windows_magic-speed_other_v1-3_2.png">
<figcaption><em>Figure 4: Magic Speed View – Other</em></figcaption>
</figure>

<p>This can be selected as a view on your screens.</p>

<p>Try running your cues with the Master Rate at different positions. When you are done you should move your fader to the middle and press the <span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span> key to reset the Master Rate to 1:1.</p>

<p>In the next chapter&nbsp;we are going to have a little look at blind programming.&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/en/1.9'; " title="Go to previous page '17 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/en/1.9';" title="Go to next page '19 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/53523/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

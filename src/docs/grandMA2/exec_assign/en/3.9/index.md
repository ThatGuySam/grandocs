---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/exec_assign/en/3.9'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="df16657e-4545-4b27-80d0-58d6d936c70b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/exec_on_screen/en/3.9'; " title="Go to previous page 'Executors on the screens'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/exec_running_playbacks/en/3.9';" title="Go to next page 'Looking at the active executors'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54927/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Assign a function</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Assigning objects using keys and pools</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Example 1</a></li>
										<li><a href="#toc_header_anchor_3">Example 2</a></li>
										<li><a href="#toc_header_anchor_4">Example 3</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Assign objects using the Assign Menu</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Change Key function</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Key Example</a></li>
										<li><a href="#toc_header_anchor_8">Command Example</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Change Fader function</a>
								<ul>
										<li><a href="#toc_header_anchor_10">Examples</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Save the Key and fader assignment</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">Change the Width of Executors</a>
						</li>
				</ul>
			</div>

		<p>This topics describes how to assign an object to an executor and how to assign functions to executor keys and faders.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Assigning objects using keys and pools</h2>

<p>It is quite easy to assign something to an executor.</p>

<p>Press the <span class="hardkey">Assign</span> key followed by what you want to assign and then where you want to assign it.</p>

<p>Here are three variations on how it works. The examples uses sequences, but it can be any of the allowed types:</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Example 1</h3>

<p>Using only the keys to assign sequence 3 at executor number 5 on the current page:</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">Sequ</span> <span class="hardkey">3</span> <span class="hardkey">Exec</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Example 2</h3>

<p>It is also possible to use a combination of keys and pools.</p>

<p>Having pool visible on one of the screens makes it possible to combine keys presses with pool selection.</p>

<ol>
	<li>Press the <span class="hardkey">Assign</span> key</li>
	<li>Tap the sequence in the pool</li>
	<li>Press one of the keys associated with the executor where you want the sequence</li>
</ol>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Example 3</h3>

<p>Pressing the keys are putting keywords into the command line. This means that it is of course also possible to type it as a command line input.</p>

<div class="cl_input">[Channel]&gt; as seq 4 ex 2.5</div>

<p>This command will assign (short version is "as") sequence (short version is "seq") to executor (short version is "ex") 5 on executor page 2.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Assign objects using the Assign Menu</h2>

<p>The Assign Menu offers a visual approach to assign something to the executors. Using the Assign Menu makes you select the executor first and then select the function.</p>

<p>There are two main way to open the Assign Menu.</p>

<ol>
	<li>Press the Assign key followed by any of the keys associated with the executor.</li>
	<li>Tap the top part of the <a href="/Topic/1c1dd4f5-26f1-45a5-bec0-d8e0f91e6c50">Mini Executor Bar</a>.</li>
</ol>

<p>The assign menu can look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign_function_empty_v3-3.png">
<figcaption><em>Assign Menu - Function page</em></figcaption>
</figure>

<p>This is the <strong>Function</strong> page of the Assign Menu. You can select this page by tapping the <span class="softkey">Function</span> button on the right side - or <span class="hardkey">U1</span> if the menu is on screen 1.</p>

<p>On the lower right side of the menu, there are seven buttons. Most of them will open a selection list above the buttons. The list will contain the possible object of each type. The exception to this functionality is the <span class="softkey">Empty</span> button. This will empty the executor.</p>

<p>Tapping the <span class="softkey">Sequence</span> button will open the list of possible sequences. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign_function_sequence_v3-3.png">
<figcaption><em>Assign Menu - selection a sequence</em></figcaption>
</figure>

<p>Each of the six allowed types that can be assigned to an executor will provide a tree structured list of the options.</p>

<p>Select the object you want to have on the executor by tapping it or use the screen encoder to scroll through the list and tap the encoder to select the desired object.</p>

<hr>
<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Change Key function</h2>

<p>When the executor has something assigned, then it is possible to change the functions assigned to the executor keys.</p>

<p>If continuing to work in the Assign menu, then the executor is symbolized on the left side.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign_function_width-1_v3-3.png">
<figcaption><em>Assign Menu - Executor key assignment</em></figcaption>
</figure>

<p>Here is an example showing a Fader Executor. There are two buttons above the fader, the fader, and the bottom button.</p>

<p>Tapping any of the three buttons will open the Select Function pop-up. It looks like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_select-function-key_v3-3.png">
<figcaption><em>Small Select Function (Executor Key) pop-up</em></figcaption>
</figure>

<p>There are many functions here. The pop-up might show a smaller selection. This depends on what type of object that is assigned to the executor.</p>

<p>Some of the functions have and extra option. These are the swipe buttons next to function. The options are:</p>

<ul>
	<li><strong>Normal</strong>:<br>
	This is the normal function.</li>
	<li><strong>Assert</strong>:<br>
	This option will perform the function using the Assert option. Assert will force tracked values to the fixtures.</li>
	<li><strong>XAssert</strong>:<br>
	This variation of Assert will force the values using a fade time - typically from the cue going into.</li>
	<li><strong>Release</strong>:<br>
	This option will perform the main function and then turn off the executor.</li>
</ul>

<p>&nbsp;</p>

<p>The main function are:</p>

<ul>
	<li><strong>Empty</strong>:<br>
	The key has no function.</li>
	<li><strong>&lt;&lt;&lt; (GoFastBack)</strong>:<br>
	This jumps one cue back - The fade timing can be changed in Setup -&gt; Show -&gt; Playback &amp; MIB Timing.</li>
	<li><strong>&gt;&gt;&gt; (GoFastForward)</strong>:<br>
	This jumps one cue forward and will not trigger other cues - The fade timing can be changed in Setup -&gt; Show -&gt; Playback &amp; MIB Timing.</li>
	<li><strong>Black</strong>:<br>
	This turns off the intensity of the executor as long as you have the button pressed.</li>
	<li><strong>DoubleSpeed</strong>:<br>
	This will double the speed.</li>
	<li><strong>DoubleRate</strong>:<br>
	This will double the rate.</li>
	<li><strong>Fix</strong>:<br>
	This fixes or unfixes the executor.</li>
	<li><strong>Flash</strong>:<br>
	This turns the executor on and set a virtual intensity master at 100, as long as you have the button pressed. When the button is released it will go back to the status before the button was pressed.</li>
	<li><strong>FlashOn</strong>:<br>
	This performs the same action as the Flash, but it also executes an On command.</li>
	<li><strong>FlashGo</strong>:<br>
	This performs the same action as the Flash, but it also executes a Go command.</li>
	<li><strong>Go</strong>:<br>
	This executes a "Go". It uses the fade and delay times.</li>
	<li><strong>GoBack</strong>:<br>
	This fades backwards - The fade timing can be changed in Setup -&gt; Show -&gt; Playback &amp; MIB Timing. Default is the cue timing.</li>
	<li><strong>Goto</strong>:<br>
	This gives you the <strong>Select Cue for Goto pop-up</strong> that allows you to select a cue to go to. It could look like this:
	<figure class="caption"><img alt="" src="/Media/Image/popup_select-cue-for-goto_v3-3.png">
	<figcaption><em>Select Cue for Goto pop-up</em></figcaption>
	</figure>
	<br>
	The fade timing can be changed in Setup -&gt; Show -&gt; Playback &amp; MIB Timing. Default is the cue timing.</li>
	<li><strong>HalfSpeed</strong>:<br>
	This will half the speed.</li>
	<li><strong>HalfRate</strong>:<br>
	This will half the rate.</li>
	<li><strong>Kill</strong>:<br>
	This is the same as a "Go" but it also turns of all other executors (except those that has "Kill protect" turned on - see <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor Options topic</a>).</li>
	<li><strong>Learn</strong>:<br>
	This sets the speed. By pressing it at least two times it automatically adjusts the speed.</li>
	<li><strong>Load</strong>:<br>
	This gives you the <strong>Select Cue for Load pop-up</strong> that allows you to select a cue to load. It looks like the <strong>Select Cue for Goto pop-up</strong> pictured above.</li>
	<li><strong>LoadPrev</strong>:<br>
	This will load the previous cue. If it is pressed multiple times, then it will load the previous cues based on the currently loaded cue.</li>
	<li><strong>LoadNext</strong>:<br>
	This will load the next cue. If it is pressed multiple times, then it will load the next cues based on the currently loaded cue.</li>
	<li><strong>Off</strong>:<br>
	This turns the executor Off.</li>
	<li><strong>On</strong>:<br>
	This turns the executor On.</li>
	<li><strong>Park</strong>:<br>
	This parks the fixtures in the object assigned to the executor.</li>
	<li><strong>Pause</strong>:<br>
	This holds a active fade and/or delay. This also pauses a timecode show.</li>
	<li><strong>Rate1</strong>:<br>
	This resets Rate and Speed faders.</li>
	<li><strong>Select</strong>:<br>
	This selects the executor.</li>
	<li><strong>SelFix</strong>:<br>
	This selects the fixtures used in the object assigned to the executor.</li>
	<li><strong>Swop</strong>:<br>
	When this is pressed, all other fixtures will fade out the dimmer (except those that has "Swop protect" turned on - see <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor Options topic</a>). They return when it is released.</li>
	<li><strong>SwopOn</strong>:<br>
	This performs the same action as the Swop, but it also executes an On command.</li>
	<li><strong>SwopGo</strong>:<br>
	This performs the same action as the Swop, but it also executes a Go command.</li>
	<li><strong>Temp</strong>:<br>
	This turns the executor on as long as it is pressed. The temp function uses the fade times from the cues and it uses the level set by the intensity master.</li>
	<li><strong>Toggle</strong>:<br>
	This turns an active executor Off and an inactive executor On.</li>
	<li><strong>Top</strong>:<br>
	This fades to the first cue in an assigned sequence.</li>
	<li><strong>Unpark</strong>:<br>
	This unparks the parked fixtures used in the object assigned to the executor.</li>
	<li><strong>ToFull</strong>:<br>
	This will move the intensity master at full.</li>
	<li><strong>ToZero</strong>:<br>
	This will move the intensity master to zero.</li>
</ul>

<p>These main functions are keywords - they can be found in the <a href="/Topic/e3a14e07-3c84-4300-b5dd-afaef9847fe6">All keywords topics</a>. Here are detailed descriptions of all keywords.</p>

<p>The functions can be assigned using the keys or commands. Not all functions has a physical key that can be used, then you will need to write the command.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Key Example</h3>

<p>If the desired function has a physical key, then it is very easy to assign it to an executor key. Simply press the <span class="hardkey">Assign</span> key, then function key you want, and finally the executor key where you want the function.</p>

<p><strong>Example 1</strong></p>

<p>For instance to assign the Off function to the top key associated with executor number 1, you need to press the following keys:</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">Off</span> (the top executor key labeled:) <span class="hardkey">1</span></p>

<p><strong>Example 2</strong></p>

<p>Assign in a Load function to an executor key</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">Goto</span> <span class="hardkey">Goto</span> [desired executor key]</p>

<p>Pressing the the "Goto" key twice will give the "Load" command.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Command Example</h3>

<p>Functions can be assigned using the command line.</p>

<p>This is the general syntax:</p>

<p><span class="syntax">Assign [function] (at) [location]</span></p>

<p>The location needs to be a specific physical key associated with an executor. The keys are called "ExecButtons". They are numbered. The key below the fader and the single key for executors without faders are named "ExecButton1". The key right above the fader is "ExecButton2" and the top key is called "ExecButton3".</p>

<p>To assign the ToFull function to the top key associated with executor 5 on executor page 8 you would need to type the following command</p>

<div class="cl_input">[Channel]&gt; Assign ToFull ExecButton3 8.5</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Change Fader function</h2>

<p>It might be possible to change the function of the fader. This depends on what type of object an executor has. They are changed just as the executor keys - by tapping the onscreen representation in the Assign menu (see above).</p>

<p>The Select pop-up could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_select-function-fader_v3-3.png">
<figcaption><em>Small Select Function (Executor Fader) pop-up</em></figcaption>
</figure>

<p>The pop-up might present a smaller selection. This depends on the object on the executor.</p>

<ul>
	<li><strong>Empty</strong>:<br>
	Fader has no function.</li>
	<li><strong>Master</strong>:<br>
	Controls the intensity.</li>
	<li><strong>Crossfade</strong>:<br>
	Crossfades between two cues. Current cue and next cue. The current cue will change when the fader reaches the other end position from where it started.</li>
	<li><strong>CrossfadeA</strong>:<br>
	Is the first of a two fader manual crossfade between two cues. Works along with CrossfadeB. The crossfade function can be changed in the <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor options</a>.</li>
	<li><strong>CrossfadeB</strong>:<br>
	Is the second of a two fader manual crossfade between two cues. Works along with CrossfadeA. The crossfade function can be changed in the <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor options</a>.</li>
	<li><strong>Rate</strong>:<br>
	Divides the fade and delay time in a sequence by the value of the fader. If <strong>Link Effect to Rate</strong> is on, it is also valid for effect speed stored in cues - see <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor options topic</a>.</li>
	<li><strong>StepFade</strong>:<br>
	Controls the fade time between steps in a chaser (=softness).</li>
	<li><strong>MasterFade</strong>:<br>
	Controls the on and off fade time of chasers and effects. It controls also the off time of executors.</li>
	<li><strong>TempFade</strong>:<br>
	Cossfades the cue on when pulled up, and off when pulled down.</li>
	<li><strong>Speed</strong>:<br>
	Controls the fade and delay times in effects in a cue, and chase speed in chasers.</li>
	<li><strong>StepInFade</strong>:<br>
	Controls the step in time of the chaser steps.</li>
	<li><strong>StepOutFade</strong>:<br>
	Controls the step out time of the chaser steps.</li>
</ul>

<p>The above functions are described in more details in each of their keyword topics. They can be found under <a href="/Topic/e3a14e07-3c84-4300-b5dd-afaef9847fe6">All Keywords</a>.</p>

<p>The functions can also be assigned using the command line.</p>

<p>The syntax is the same as the key functions. The difference is that there is only one fader per executor.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h3>Examples</h3>

<p><strong>Example 1</strong></p>

<p>To assign the rate function to executor number 9 on the current page, you will need to type the following command:</p>

<div class="cl_input">[Channel]&gt; Assign Rate Executor 9</div>

<p>Or address the actual fader:</p>

<div class="cl_input">[Channel]&gt; Assign Rate Fader 9</div>

<p><strong>Example 2</strong></p>

<p>If you want to assign the "Empty" function to the executor fader, then it is necessary to use the fader as the location</p>

<div class="cl_input">[Channel]&gt; Assign Empty Fader 9</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Save the Key and fader assignment</h2>

<p>The current assignment of key and fader functions can be saved, to the current user profile, using the Assign Menu.</p>

<p>In the Title bar there are two buttons. Tapping the <span class="softkey">Save Default [object type] Assignment</span> will store the current assignment to the defaults for that type of object. This means that a sequence have one set of defaults and an assigned Effect will have a different set of defaults.</p>

<p>The defaults are used when the executor gets something assigned.</p>

<p>Tapping the <span class="softkey">Load Default [object type] Assignment</span> will load the currently saved default to the keys and faders.</p>

<p>Executors can be extended to use up to 5 executors in the width. Read more about this below. The number of keys and faders are then changed. Each width size has a different set of default key and fader assignment for each object type.</p>

<p>This means that a sequence using 1 executor width have one set of defaults and the same sequence using two executor widths will have a different set of defaults.</p>

<p>&nbsp;</p>

<hr>
<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2><a id="executor_width" name="executor_width"></a>Change the Width of Executors</h2>

<p>Sequence and Effects assigned to an executor can use more than one executor in the width - up to five.</p>

<p>A timer assigned to Button Executors can use up to two executors in the width.</p>

<p>This is changed using the Assign Menu (see the top of this topic for more about using the Assign menu). The left side of the Function page of the Assign Menu could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign_function_width-1_v3-3.png">
<figcaption><em>Assign Menu - Width control</em></figcaption>
</figure>

<p>The bottom of the left side will show how much the executor can be extended.</p>

<p>The executors are organized in groups of five. It is not possible to extend into a different group of five. It is also not possible to extend into executor that already has something assigned. So to extend an executor to five in width, it needs to be originally assigned to executor 1, 6, 11, 16, 21, 26, and so on AND the following five executors needs to be empty.</p>

<p>When fully extended it could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign_function_width-5_v3-3.png">
<figcaption><em>Assign Menu - Width 5</em></figcaption>
</figure>

<p>Each key and fader can have a function that will execute the selected function to the assigned sequence or effect.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="df16657e-4545-4b27-80d0-58d6d936c70b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/exec_on_screen/en/3.9'; " title="Go to previous page 'Executors on the screens'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/exec_running_playbacks/en/3.9';" title="Go to next page 'Looking at the active executors'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54927/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/executor_assign/en/1.7'
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
<option selected="selected" value="40">1.7</option>
<option value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ac65e981-7d7a-4890-9b5b-19d933e7abce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/executor/en/1.7'; " title="Go to previous page 'Executors'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/executor_configurations/en/1.7';" title="Go to next page 'Executor configurations'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/42/ac65e981-7d7a-4890-9b5b-19d933e7abce">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/76988/40'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.7</span>
			</div>
		<h1>Assign Object to an Executor</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Assigning Objects Using Keys and Pools</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Example 1</a></li>
										<li><a href="#toc_header_anchor_3">Example 2</a></li>
										<li><a href="#toc_header_anchor_4">Example 3</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Assign Objects Using the Assign Menu</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Change Key Function and Executor Size</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Key Example</a></li>
										<li><a href="#toc_header_anchor_8">Command Example</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Change Fader Function</a>
								<ul>
										<li><a href="#toc_header_anchor_10">Examples</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Save the Key and Fader Assignment</a>
						</li>
				</ul>
			</div>

		<p>Many objects can be assigned to an executor. The executor is a physical key, fader, or knob that controls the assigned object. The physical devices can also be represented as on-screen controllers.</p>

<div class="tip"><strong>Quick Steps:</strong><br>
1. Press <span class="hardkey">Assign</span>.<br>
2. Tap what should be assigned or press the relevant keys.<br>
3. Press the executor where it should be.<br>
<br>
These are the simplest steps needed for assigning something to an executor - read below for details.</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Assigning Objects Using Keys and Pools</h2>

<p>It is easy to assign something to an executor.</p>

<p>Press <span class="hardkey">Assign</span> followed by the desired object and then finally the executor where it should be assigned to.</p>

<p>Here are three variations on how it works. The examples use sequences, but it can be any of the allowed types:</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Example 1</h3>

<p>Using only the keys to assign sequence 3 at executor number 105 on the current page, type:</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">Sequ</span> <span class="hardkey">3</span> <span class="hardkey">At</span> <span class="hardkey">MA</span> + <span class="hardkey">X16 | Exec</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Example 2</h3>

<p>It is also possible to use a combination of keys and pools.</p>

<p>Having a pool visible on one of the screens makes it possible to combine keys presses with pool selection.</p>

<ol>
	<li>Tap and swipe out of the sequence pool object that should be assigned.</li>
	<li>Swipe to the <span class="softkey">Assign</span> option and release the screen.</li>
	<li>Press one of the keys associated with the desired executor.</li>
</ol>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Example 3</h3>

<p>Pressing the keys puts keywords into the command line. This means that it is also possible to type it as a command line input.</p>

<div class="cl_input">User name[Fixture]&gt; Assign Sequence 4 At Page 2.301</div>

<p>This command will assign sequence 4 to executor 301 on executor page 2. The page keyword needs to be used when addressing executors on specific pages. The page needs to exist before it can be addressed.</p>

<hr>
<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Assign Objects Using the Assign Menu</h2>

<p>The <strong>Assign</strong> menu offers a visual approach to assign something to the executors. Use the assign menu by selecting the executor first and then select the object.</p>

<p>There are two main ways to open the Assign Menu.</p>

<ul>
	<li>Press <span class="hardkey">Assign</span> followed by any of the keys associated with the desired executor.</li>
</ul>

<p>-Or-</p>

<ul>
	<li>Tap the executor label in the <a href="/Topic/57280447-57e4-4220-8273-edd2c3d7064d">Mini Executor Bar</a> (do not do a long press - it opens the editor instead).</li>
</ul>

<p>This is the assign menu:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign-executor_object_v1-7.png">
<figcaption><em>Assign Menu - Object page</em></figcaption>
</figure>

<p>The title bar has a toggle button called <span class="softkey">Lock Exec</span>. This can be used to lock the executor from changes. It does not lock the executor from playing back or performing other functions normally, the lock only prevents making changes to the executor.</p>

<p>This is the <strong>Object</strong> page of the assign menu. This page is selected by tapping <span class="softkey">Object</span> on the right side.</p>

<p>The top has several tabs. One for each object type that can be assigned to the executor and a special one used to select an <strong>Empty</strong> object. The other tabs open a selection list. The list will contain the possible objects in that type.</p>

<p>The different types are:</p>

<ul>
	<li><a href="/Topic/d1014a4b-25b1-4009-b632-c28551b74939">Sequence</a></li>
	<li><a href="/Topic/ff5e956a-2746-4a28-b79c-e7794bb054e1" target="_blank">Preset</a></li>
	<li><a href="/Topic/7e2ec32a-da84-4ca0-a06c-5e44eea07c7a">World</a></li>
	<li>Sound</li>
	<li><a href="/Topic/0b06c299-e6d4-46ed-9782-949df1327e51">Macro</a></li>
	<li><a href="/Topic/3ae0030b-f908-4804-b2f2-1a7951f3d713" target="_blank">User</a></li>
	<li><a href="/Topic/d2ad7a07-bd1d-42ef-a27b-9e4c0920437b" target="_blank">ScreenConfig</a></li>
	<li><a href="/Topic/090be493-172a-4bcf-8d6d-7e4fae2e9260">Group</a></li>
	<li><a href="/Topic/7fb53fe3-d381-400a-b87d-e0cf04cb22bd">UserPlugin</a></li>
	<li><a href="/Topic/d2ad7a07-bd1d-42ef-a27b-9e4c0920437b">View</a></li>
	<li><a href="/Topic/e195c0a3-f18c-441b-b325-5bd8541b89c5">Master</a></li>
</ul>

<p>Tap <span class="softkey">Sequence</span> to open the list of possible sequences. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign-executor_object-sequence_v1-7.png">
<figcaption><em>Assign menu in the sequence object tab</em></figcaption>
</figure>

<p>Each of the allowed types that can be assigned to an executor provides a list of the available objects. The <span class="softkey">DataPool</span> in the title bar makes it easy to select an object from a different data pool.</p>

<p>Select the desired object by tapping it.</p>

<p>The default handle configuration is applied to the executor. This including executor expansion can be defined on the handle page.</p>

<hr>
<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Change Key Function and Executor Size</h2>

<p>When the executor has something assigned, then it is possible to change the functions assigned to the executor keys, faders, and knobs.</p>

<p>If continuing to work in the assign menu, then tap <span class="softkey">Handle</span> on the left side.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign-executor_handle_v1-6.png">
<figcaption><em>Assign menu on the Handle page</em></figcaption>
</figure>

<p>Executors can be expanded if the executors above and to the right are empty. They are grouped into sections of 5 in the width and this grouping cannot be crossed. For instance, executors 104 and 105 cannot be extended into executor 106.</p>

<p>They can also be extended upwards if there is room. The example image above shows executor 111 with room above and to the right. This executor can be extended to a width of all 5 columns and a height that covers all four rows of executors.</p>

<p>It is expanded by tapping the column numbers on the top and the row numbers on the left. When it is expanded then more buttons get available for the executor.&nbsp;</p>

<p>The 100 row only offers a single executor button. The 200 row has a button and a fader. Both the 300 and 400 rows have a button and an encoder knob. If an executor is extended to cover all four rows then it could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/menu_assign-executor_handle_4high_v0-99.png">
<figcaption><em>Executor with all four rows in height</em></figcaption>
</figure>

<p>The keys, faders, and encoders can have different functions. The options might vary depending on the object assigned to the executor.</p>

<p>Tap any of the available buttons to get a small select pop-up with the available options.</p>

<p>The <strong>Encoder Left Cmd</strong> and <strong>Encoder Right Cmd</strong> open a pop-up that allows any command to be typed. There is even an option where it can be different commands if the MA key is pressed while the encoder knob is turned.</p>

<div class="tip"><strong>Hint:</strong><br>
The encoder commands are mutually exclusive with the normal encoder function. In the example image above there is both an encoder function and a command function.&nbsp;The encoder commands have a higher priority and overwrite the normal encoder function.</div>

<p>The normal key options are:</p>

<ul>
	<li><strong>Empty</strong>:<br>
	The key has no function.</li>
	<li><strong>At</strong>:<br>
	Used with presets. Performs an <a href="/Topic/11230379-6621-422a-ac2e-ac0b1b23c45d" target="_blank">At command</a> on the assigned preset. Learn more about presets on executors in the <a href="/Topic/8ab1d8b8-76c2-41bf-a515-7c94b3c4c77a" target="_blank">Use Presets topic</a>.</li>
	<li><strong>&lt;&lt;&lt; (GoFastBack)</strong>:<br>
	This jumps one cue back without cue timing.</li>
	<li><strong>&gt;&gt;&gt; (GoFastForward)</strong>:<br>
	This jumps one cue forward without cue timing and will not trigger other cues.</li>
	<li><strong>Black</strong>:<br>
	This turns off the intensity of the executor as long as the button is pressed.</li>
	<li><strong>Call</strong>:<br>
	Used with screen configurations. Performs a <a href="/Topic/a688408a-7d54-47be-9e1c-0d007ba594aa" target="_blank">Call command</a> on the assigned screen configuration.</li>
	<li><strong>Flash</strong>:<br>
	This turns the executor on and sets a virtual intensity master at 100, as long as you have the button pressed. When the button is released it will go back to the status before the button was pressed.</li>
	<li><strong>Go</strong>+:<br>
	This executes a "Go". It uses fade and delay times.</li>
	<li><strong>Go-</strong>:<br>
	This fades backward using fade and delay times.</li>
	<li><strong>Goto</strong>:<br>
	This opens a pop-up where a cue can be selected. Tapping a cue in the pop-up immediately performs a <a href="/Topic/82a03875-bf87-4834-98e0-18c4306c28ec" target="_blank">Goto command</a> on that cue. This means that the selected cue is now active.</li>
	<li><strong>LearnSpeed</strong>:<br>
	This sets the speed. By pressing it at least two times it automatically adjusts the speed.</li>
	<li><strong>Load</strong>:<br>
	This opens a pop-up that lists the cues in the sequence. Tapping a cue performs a <a href="/Topic/7502d6a4-5fa0-43d9-aef3-1867b89248bf" target="_blank">Load command</a> on the cue and it will perform a go to the selected cue when the next Go command.</li>
	<li><strong>Login</strong>:<br>
	Used when a user is assigned. Performs the <a href="/Topic/bfdc08da-0f6a-4be2-a71e-adaa51dd1f17" target="_blank">Login command</a> for the assigned user.</li>
	<li><strong>Off</strong>:<br>
	This turns the executor Off.</li>
	<li><strong>On</strong>:<br>
	This turns the executor On.</li>
	<li><strong>Pause</strong>:<br>
	This holds an active fade and/or delay.</li>
	<li><strong>Rate1</strong>:<br>
	This resets rate fader.</li>
	<li><strong>Select</strong>:<br>
	This selects the executor.</li>
	<li><strong>SelFix</strong>:<br>
	This selects the fixtures used in the object assigned to the executor.</li>
	<li><strong>Speed1</strong>:<br>
	This resets speed fader to the default speed.</li>
	<li><strong>Swop:</strong><br>
	Swop temporarily overrides the master level of executors to full and sets all other master levels to zero. Executors can be protected against the swop.</li>
	<li><strong>Time</strong>:<br>
	This toggles the time function for the executor. It overwrites the stored cue part times, when it is On.</li>
	<li><strong>Temp</strong>:<br>
	This turns the executor on as long as it is pressed. The temp function uses the fade times from the cues and it uses the level set by the intensity master.</li>
	<li><strong>Toggle</strong>:<br>
	This turns an active executor Off and an inactive executor On.</li>
	<li><strong>Top</strong>:<br>
	This fades to the first cue in an assigned sequence.</li>
</ul>

<p>These main functions are keywords - they can be found in the <a href="/Topic/500335d8-271f-4a14-b965-f71702cee50d">All keywords topics</a> where there are detailed descriptions of the keywords.</p>

<p>&nbsp;</p>

<p>The functions can also be assigned using the keys or commands. Not all functions have a physical key that can be used, then it can be done by writing the command using the keyboard.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Key Example</h3>

<p>If the desired function has a physical key, then it is very easy to assign it to an executor key. Simply press <span class="hardkey">Assign</span>, then the function key you want, and finally the executor key where you want the function.</p>

<p><strong>Example 1</strong></p>

<p>For instance, to assign the <strong>Off </strong>function to the key associated with executor number 101, you need to press the following keys:</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">Off</span> <span class="hardkey">–</span> (the executor key in the lower-left corner on consoles)</p>

<p><strong>Example 2</strong></p>

<p>Assign the <strong>Fix</strong> function to an executor key</p>

<p><span class="hardkey">Assign</span> <span class="hardkey">MA</span> + <span class="hardkey">Pause</span> <span class="hardkey">[desired executor key]</span></p>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Command Example</h3>

<p>Functions can be assigned using the command line.</p>

<p>This is the general syntax:</p>

<p><span class="syntax">Assign [Function] at [Location]</span></p>

<p>The location needs to be a specific physical key associated with an <strong>Executor Page</strong>.</p>

<p>To assign the Pause function to the top key associated with executor 5 on executor page 8 you would need to type the following command</p>

<div class="cl_input">User name[Fixture]&gt; Assign Pause At Page 8.405</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2><a id="Change Fader Function" name="Change Fader Function"></a>Change Fader Function</h2>

<p>It might be possible to change the function of the fader. This depends on what type of object an executor has. They are changed just as the executor keys - by tapping the onscreen representation in the assign menu (see above).</p>

<p>The <strong>Select Fader</strong> pop-up lists the possible options.</p>

<ul>
	<li><strong>Empty</strong>:<br>
	Fader has no function.</li>
	<li><strong>Master</strong>:<br>
	Controls the intensity. The keyword is <a href="/Topic/1612d755-421f-4675-b0e9-aa2a34cdcc65">FaderMaster</a>.</li>
	<li><strong>X (crossfade)</strong>:<br>
	Crossfades between two cues. Current cue and next cue. The current cue will change when the fader reaches the other end position from where it started. The keyword is <a href="/Topic/4b324bb6-23d3-4f91-b4ca-e773f1ae3a9f">FaderX</a>.</li>
	<li><strong>XA (crossfade A)</strong>:<br>
	Is the first of a two-fader manual crossfade between two cues. Works along with XB. The crossfade function can be changed in the <a href="/Topic/072545a2-0965-4ff4-ac47-7ee0938d79af">Sequence settings</a>. The keyword is <a href="/Topic/8b83159c-f312-404e-89c0-cde257eea92a">FaderXA</a>.</li>
	<li><strong>XB (crossfade B)</strong>:<br>
	Is the second of a two-fader manual crossfade between two cues. Works along with XA. The crossfade function can be changed in the <a href="/Topic/072545a2-0965-4ff4-ac47-7ee0938d79af">Sequence settings</a>. The keyword is <a href="/Topic/65806cc8-0b3f-4254-88d4-791742676c53">FaderXB</a>.</li>
	<li><strong>Temp</strong>:<br>
	Crossfades the cue on when pulled up, and off when pulled down. The keyword is <a href="/Topic/0968e5b7-c134-4938-8fd8-aaef6dbd681c">FaderTemp</a>.</li>
	<li><strong>Rate</strong>:<br>
	Divides the fade and delay time in a sequence by the value of the fader. If <strong>Speed from Rate</strong> is on, it is also valid for phaser speed stored in cues - see <a href="/Topic/072545a2-0965-4ff4-ac47-7ee0938d79af">Sequence Settings topic</a>. The keyword is <a href="/Topic/da9d5f97-a4a9-4533-a5d0-2882e2c3409f">FaderRate</a>.</li>
	<li><strong>Speed</strong>:<br>
	Controls the phaser speed in a cue. The keyword is <a href="/Topic/55f98556-351f-49d6-9ded-d1b285deba29">FaderSpeed</a>.</li>
	<li><strong>Time</strong>:<br>
	Sets the time for the executor time overwrite. The keyword is <a href="/Topic/b9c56401-3496-4e24-bc25-35682061b380">FaderTime</a>.</li>
</ul>

<p>The above functions are described in more detail in each of their keyword topics.</p>

<p>The functions can also be assigned using the command line.</p>

<p>The syntax is the same as the key functions. Except "empty" - see examples below.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h3>Examples</h3>

<p><strong>Example 1</strong></p>

<p>To assign the rate function to executor number 209 on the current page, you will need to type the following command:</p>

<div class="cl_input">User name[Fixture]&gt; Assign FaderRate At Executor 209</div>

<p><strong>Example 2</strong></p>

<p>If you want to assign the "Empty" function to the executor fader, then it is necessary to use a different syntax. This example assigns empty to the left-most fader on page 1:</p>

<div class="cl_input">User name[Fixture]&gt; Set Page 1.201 Property "Fader" "Empty"</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Save the Key and Fader Assignment</h2>

<p>The current assignment of key and fader functions can be saved into a pool of different configurations. Read more in the <a href="/Topic/e892c15f-bac1-4ea5-9739-c79ddcb37640">Executor Configurations topic</a>.</p>


				<br>
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
<option selected="selected" value="40">1.7</option>
<option value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ac65e981-7d7a-4890-9b5b-19d933e7abce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/executor/en/1.7'; " title="Go to previous page 'Executors'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/executor_configurations/en/1.7';" title="Go to next page 'Executor configurations'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/76988/40';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_control_fixtures/en/1.6'
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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="11f52c76-bf82-4a03-b292-488bf49cf9e6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_first_view/en/1.6'; " title="Go to previous page '03 First View Setup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_3d_setup/en/1.6';" title="Go to next page '05 3D Fixture Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/11f52c76-bf82-4a03-b292-488bf49cf9e6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/73351/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Control Simple Fixtures</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Selecting Fixtures</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Recap</a>
						</li>
				</ul>
			</div>

		<p>In this chapter, we are going to look at controlling the dimmers we patched in chapter 2.</p>

<p>The grandMA3 system uses a <strong>Programmer</strong> as a temporary memory to hold values until they are stored or released.</p>

<p>To do something with a fixture we need to select it first. Click one of the fixtures in the <strong>Fixture Sheet</strong>.</p>

<p>Fixtures with a yellow ID text are selected fixtures.</p>

<p><img alt="" src="/Media/Image/qsg_04_selected-fixture_v1-4.png"></p>

<p>Fixture 1 is selected in the image above.</p>

<p>Selected fixtures can get a dimmer value using a lot of different methods.</p>

<p>If you have grandMA3 hardware for example from the console range or a grandMA3 onPC command wing model, then there is a level wheel on the right side. This can be scrolled up and down to adjust the dimmer value.</p>

<p>A value can also be typed using the numeric keys. Type this: <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>Now the fixtures dimmer value is 50%.</p>

<p>There are other physical keys that can be used to set a value. For instance 'Full'. This will take the dimmer value to 100%. Pressing 'At' twice takes the dimmer to a defined value called <strong>Normal</strong>. The default for this is also 100%, but it can be modified. Double pressing '.' (dot) takes the dimmer to <strong>Zero</strong>.</p>

<p>Try these keys and see the result in the fixture sheet and the command line history.</p>

<p>Another control option are the encoders. There are five dual encoders on the control hardware.</p>

<p>The <strong>Encoder Bar </strong>we saw in the last chapter shows us what the encoders are controlling. It should look something like this:</p>

<p><img alt="" src="/Media/Image/qsg_04_encoder-bar.png"></p>

<p>There are three rows in the encoder bar. The top row are the different <strong>Feature Groups</strong> - we will return to these when we have fixtures with more than dimmers. The important part is that <strong>Dimmer</strong> is selected (yellow text).</p>

<p>We will also return to the second row in later chapters. It has buttons that do different things and a row of layer selection buttons.</p>

<p>The bottom is the encoder labels. We also call this <strong>Attribute Control</strong> because it can be used to control the different attributes in fixtures. Our fixtures only have dimmer.</p>

<p>We can use this to control the dimmer value. If you have physical hardware then you can turn the left most encoder to change the value. The inner encoder changes the value in larger steps than the outer encoder.</p>

<p>If you use grandMA3 onPC then there are different ways to mimic the hardware.</p>

<p>You can place the mouse pointer in the white encoder icon and then scroll the mouse wheel (if you have one).</p>

<p>Another option is to use a kind of invisible on-screen encoder. You can also click and hold the encoder icon and while keeping the mouse button move the pointer to another area of the screen. This is now the center of the encoder. While still holding the mouse button you can now draw circles around the center of your invisible encoder. The further away from the center, you draw the circle, the finer resolution you have. Small circles close around the center make the value change faster (smaller resolution). When you are happy with the value, then you can release the mouse button.</p>

<p>Finally, you can click the red area or shortly press the inner encoder. This opens the <strong>Calculator</strong> pop-up.</p>

<p><img alt="" src="/Media/Image/qsg_04_calculator_v1-4.png"></p>

<p>The calculator pop-up gives access to type a value or to select one of the named values on the right side, for instance, 'Full', 'Zero', and 'Normal'.</p>

<p>This pop-up is named calculator because we can do some arithmetic with this. In my example, the dimmer is at 50%. If I click <span class="softkey">+</span> <span class="softkey">1</span> <span class="softkey">0</span> <span class="softkey">Please</span> then I add 10 to the current value. We can also subtract, divide, and multiply.</p>

<p>If we have selected more than one fixture then we can even type a value range using "Thru". Clicking "Please" closes the pop-up. You can also close it without making any change by clicking the 'X' in the upper right corner of the pop-up.</p>

<p>Try to select multiple fixtures either by click and drag in the fixture sheet or by typing. For instance, <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>Now open the calculator and click <span class="softkey">1</span> <span class="softkey">0</span> <span class="softkey">Thru</span> <span class="softkey">1</span> <span class="softkey">0</span> <span class="softkey">0</span> <span class="softkey">Please</span>.</p>

<p>The result should be a nice range of values from 10% to 100% across the selected fixtures.</p>

<p>This is also where the fixture selection order matters. The value is spread out across the fixtures in the selection order. So if we selected the same fixtures in a different order - for instance, 10 thru 1 - and then applied the same value range then the result would have been reversed.</p>

<p>&nbsp;</p>

<p>The programmer has three levels of information. It is the <strong>selected </strong>fixtures, <strong>active </strong>values, and <strong>inactive</strong> values. We can remove each level by pressing 'Clear'. A long press clears all three levels at once and all values in our programmer are gone.</p>

<p>If we on the other hand just press 'Clear' once then we release the selection of fixtures. This means that we do not have any selected fixtures and trying to give a value does not change anything.</p>

<p>If we do not have a fixture selection and we press 'Clear', then we make active values inactive. This means that the value is still sent to the output, but it is typically not stored if we try to.</p>

<p>If we press 'Clear' without a fixture selection and with no active values, then the inactive values are cleared from the programmer.</p>

<p><img alt="" src="/Media/Image/qsg_04_programmer-levels_v1-4.png"></p>

<p>The image above shows the programmer levels. Fixture 1 is selected. Fixture 2 has active values. Fixture 3 has inactive values. Fixture 4 does not have anything in the programmer.</p>

<p>&nbsp;</p>

<p>A final programmer tool I will introduce you to is the <strong>At Overlay</strong>. This is very useful especially when you are using the grandMA3 onPC.</p>

<p><img alt="" src="/Media/Image/qsg_04_at-overlay.png"></p>

<p>It can be opened by clicking the <span class="softkey">At</span> in the Control Bar or by pressing <span class="hardkey">F1</span> on a keyboard. It can also be opened using a command: <span class="syntax">Menu "AtOverlay"</span></p>

<p>The overlay has buttons with access to many useful commands including Clear, Zero, Full, and Normal.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Selecting Fixtures</h2>

<p>We talked about selecting fixtures in the fixture sheet, but they can also be selected using the keypad in the command section.</p>

<p>When we look at the command line it should look like his:</p>

<div class="cl_input">Admin[Fixture]&gt;</div>

<p>The fixture part of this is the default keyword. This means that if we do not define a different beginning keyword, then it assumes we want to begin our command with <strong>Fixture</strong>.</p>

<p>Fixtures can be selected using their ID numbers. This means that you can select fixture 1 simply by writing <span class="syntax">1</span> in the command line and execute the command.</p>

<p>If you look at the <strong>Command Line History</strong> window. It says</p>

<div class="cl_response"><strong>OK: Fixture 1</strong></div>

<p>You can add a fixture to the selection by writing <span class="syntax">+ 2</span> and run the command.</p>

<p>Removing a fixture from the selection can be done using minus.&nbsp;</p>

<p>A range of fixtures can be selected using thru. Write the following in the command line and run the command:</p>

<p><span class="syntax">9 Thru 14</span></p>

<p>As long as we have not given the fixtures a value, we keep adding fixtures to our selection. If you give the selected fixtures a value by any of the methods described above, then the system assumes that the next fixture selection means that you are done with the previous selection and clears it before selecting the new fixtures.</p>

<p>A single 'Clear' will clear the fixture selection.</p>

<p>If numbers are left out on the sides of the "Thru" keyword, then the range will go as far as possible. This means that <strong>Fixture Thru</strong> selects from the lowest to the highest number. This is often all fixtures.</p>

<p>&nbsp;</p>

<p>The 14 blinders have their own individual FID numbers, but they are also children of the <strong>Blinders</strong> grouping fixture. We also call these <strong>Sub-fixtures</strong>.</p>

<p>This means that they can also be selected using a sub-fixture index number. <strong>Fixture 20.11</strong> is the same as <strong>Fixture 31</strong>.</p>

<p>There is a lot of different combinations of commands that allow you to use this recursive selection of sub-fixtures. We will explore a few of them. Start by clearing the programmer completely.</p>

<p>Now do <span class="syntax">Fixture 20.</span> (remember the dot at the end).</p>

<p>Adding the dot at the end will select the main fixture 20 and all the sub-fixtures. Clear the programmer again.</p>

<p>Now type <span class="syntax">Fixture 20.2 thru 10</span></p>

<p>This selects sub-fixtures 2 thru 10 in fixture 20.</p>

<p>Try other combinations of fixture selections until you are comfortable selecting fixtures and sub-fixtures.</p>

<p>&nbsp;</p>

<p>Finish this chapter by clearing the programmer.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Recap</h2>

<p>In this topic, we learned about the programmer, fixture selection, and how to assign dimmer values.</p>

<p>The primary manual has a section called <a href="/Topic/cc760ae7-f99a-4715-9316-2e274280004e">Operate Fixtures</a>. This section of topics has information about the programmer and fixture control.</p>

<p>Noteworthy keywords from this chapter are <a href="/Topic/c86b2924-b176-4e31-b110-8f5aacd23d09">Fixture</a>, <a href="/Topic/d6e41ec7-bb6c-4496-a63e-32a2ae1f5bba">Thru</a>, <a href="/Topic/4a65fa04-19ab-41b2-8109-256754dd241d">Clear</a>, <a href="/Topic/e2674fde-946d-44d6-b04f-d9393015d1a5">ClearAll</a>, <a href="/Topic/fa8beb79-ba31-4cb7-93a1-98656cec0d3b">-[minus]</a>, <a href="/Topic/26f45200-aba6-41d6-89d8-9b32ec214700">+[plus]</a>, and <a href="/Topic/11230379-6621-422a-ac2e-ac0b1b23c45d">At</a>.</p>

<p>In the next chapter, we are going to look at the 3D virtual space.</p>


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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="11f52c76-bf82-4a03-b292-488bf49cf9e6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_first_view/en/1.6'; " title="Go to previous page '03 First View Setup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_3d_setup/en/1.6';" title="Go to next page '05 3D Fixture Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/73351/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

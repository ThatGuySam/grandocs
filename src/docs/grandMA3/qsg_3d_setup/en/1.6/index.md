---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_3d_setup/en/1.6'
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
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="aa362678-0bf2-4eac-8d36-f064142d8eed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_control_fixtures/en/1.6'; " title="Go to previous page '04 Control Simple Fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_group_appear_scribble/en/1.6';" title="Go to next page '06 Groups, Appearances, and Scribbles'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/73399/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>3D Fixture Setup</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">3D Window</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Recap</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>3D Window</h2>

<p>The grandMA3 software has a virtual 3D stage area.</p>

<p>The fixtures we patched exist in this environment and other elements can be imported to match the stage and set elements.</p>

<p>It is a visualization tool where the fixtures can be positioned to match the real-world positions and the fixtures can be rotated to point in the correct direction.</p>

<p>You can create a new window to see the 3D stage area. The window is found in the <strong>Common</strong> tap in the <strong>Add Window</strong> pop-up. It is called <strong>3D</strong>.</p>

<p>This is what it currently looks like:</p>

<p><img alt="" src="/Media/Image/qsg_05_stage-empty.png"></p>

<p>When the fixtures are patched, they are positioned at the zero position. This is where we can see a green and red line in the image above. As a default, it is on the floor in the middle of the stage area.</p>

<p>We are looking at the stage area through a virtual camera. There are several default cameras, but for now, we are just gonna use the one called <strong>Front</strong>.</p>

<p>The toolbar on the left side of the window has different tools that allow for fixture selection and view manipulation. From the top they are:</p>

<ul>
	<li><strong>Zoom to Fit</strong> - moves the virtual camera to fit all elements.</li>
	<li><strong>Camera Reset</strong> - moves the virtual camera to its default position.</li>
	<li><strong>Select</strong>&nbsp; - for selecting fixtures or other objects.</li>
	<li><strong>Follow</strong> - we are not gonna cover this function in this topic. It is used to point moving lights at the position you click in the window.</li>
	<li><strong>Rotate Center</strong> - This rotates the camera around the center (0,0,0) position.</li>
	<li><strong>Zoom</strong> - Zooms in and out from the position clicked.</li>
	<li><strong>Rotate Pivot</strong> - Rotates the camera around a set pivot point.</li>
	<li><strong>Set Pivot</strong> - Sets the pivot point for the rotate function above.</li>
	<li><strong>Fit Selected</strong> - Moves the camera to fit the selected fixtures.</li>
</ul>

<p>If the window you created is below six squares high in the user-definable area, then the menu is split into two columns.</p>

<p>Try out the different tools and get comfortable moving the camera around.</p>

<p>Did you notice that the fixtures appear to be under the floor?</p>

<p>This is because the fixture's insert point is usually its hanging point.</p>

<p>For this to be useful, we need to position and rotate fixtures to match our setup.</p>

<p>The 3D window has a mode called <strong>Setup</strong>. Setup is turned Off when you do not want to make changes to the fixture position and rotation but simply want to use the window. Setup is turned On when you want to change the fixture setup. The mode can be changed by toggling the "Setup" button in the 3D windows title bar.</p>

<p>Turn the setup mode On.</p>

<p>Select fixture 1.</p>

<p>Now the encoder toolbar has changed to allow you to use the encoders to change the fixture position and rotation.</p>

<p><img alt="" src="/Media/Image/qsg_05_3d-encoder-bar_v1-4.png"></p>

<p>The 3D axes are X, Y, and Z. They can be positive or negative numbers. The X-axis is usually set up to be stage left and right. Stage right would be negative numbers if 0 is on the centerline. The Y-axis is usually downstage and upstage. Positive numbers are upstage. The Z-axis is the height. Positive numbers are typically above the floor.</p>

<p>The inner encoders move the fixture around and the outer encoder ring changes the fixture rotation. Try moving and rotating the fixture. Notice that when you are changing one of the rotation values, it may also change the values for the two other rotation axis.</p>

<p>On the right side of the encoder bar, there are buttons to reset the fixture position and rotation.</p>

<p>The position and rotation values are actually a part of the patch information. Changing the values using the 3D window writes the values to the setup. If you are changing a lot of fixtures and you know the values, then it might be easier to make the changes in the patch.</p>

<p>Click the&nbsp;<img alt="" src="/Media/Image/icon_gear.png"> icon in the control bar (or <span class="hardkey">Menu</span>) and click <span class="softkey">Live Patch</span>.</p>

<p><strong>Live Patch</strong> is a version of the patch menu where you can make live changes that can be done without changing the show configuration. This means that you, for instance, cannot add or delete fixtures to the show, but we can change what DMX address a fixture is patched to. And we can change the fixture position and rotation.</p>

<p>The patch menu has two different column modes. They are <strong>Condensed</strong> and <strong>Full</strong>. Condensed only shows a few common columns. Full shows all the different columns and settings available for the fixtures. The mode can be changed by toggling the "Columns" button in the patch menu title bar. Change it to <strong>Full</strong>.</p>

<p>Now you can see all the different fixture settings that belong to the patch.</p>

<p>There are position and rotation columns for the fixture.</p>

<p>Change the numbers to match the following table. You can select multiple cells with lasso selection or by holding <span class="hardkey">Ctrl</span> on a keyboard while clicking cells.</p>

<table align="center" border="1" cellpadding="1" cellspacing="1">
	<thead>
		<tr>
			<th scope="col">
			<p>FID</p>
			</th>
			<th scope="col">Name</th>
			<th scope="col">Type</th>
			<th scope="col">Patch</th>
			<th scope="col">X-Pos</th>
			<th scope="col">Y-Pos</th>
			<th scope="col">Z-Pos</th>
			<th scope="col">X-Rot</th>
			<th scope="col">Y-Rot</th>
			<th scope="col">Z-Rot</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Dimmer 1</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.1</td>
			<td>-4.00m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>60.20</td>
			<td>-3.50</td>
			<td>-6.00</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Dimmer 2</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.2</td>
			<td>-3.67m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>61.25</td>
			<td>-9.00</td>
			<td>-15.75</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Dimmer 3</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.3</td>
			<td>-3.33m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>63.20</td>
			<td>-14.00</td>
			<td>-25.65</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Dimmer 4</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.4</td>
			<td>-3.00m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>66.14</td>
			<td>-18.75</td>
			<td>-36.00</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Dimmer 5</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.5</td>
			<td>3.00m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>66.14</td>
			<td>18.75</td>
			<td>36.00</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Dimmer 6</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.6</td>
			<td>3.33m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>63.20</td>
			<td>14.00</td>
			<td>25.65</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Dimmer 7</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.7</td>
			<td>3.67m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>61.25</td>
			<td>9.00</td>
			<td>15.75</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Dimmer 8</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.8</td>
			<td>4.00m</td>
			<td>-4.00m</td>
			<td>3.30m</td>
			<td>60.20</td>
			<td>3.50</td>
			<td>6.00</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Dimmer 9</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.9</td>
			<td>-4.00m</td>
			<td>0.00m</td>
			<td>2.80m</td>
			<td>16.00</td>
			<td>-45.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Dimmer 10</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.10</td>
			<td>-4.00m</td>
			<td>0.00m</td>
			<td>2.40m</td>
			<td>16.00</td>
			<td>-57.50</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Dimmer 11</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.11</td>
			<td>-4.00m</td>
			<td>0.00m</td>
			<td>2.00m</td>
			<td>16.00</td>
			<td>-70.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Dimmer 12</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.12</td>
			<td>4.00m</td>
			<td>0.00m</td>
			<td>2.80m</td>
			<td>16.00</td>
			<td>45.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>13</td>
			<td>Dimmer 13</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.13</td>
			<td>4.00m</td>
			<td>0.00m</td>
			<td>2.40m</td>
			<td>16.00</td>
			<td>57.50</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>14</td>
			<td>Dimmer 14</td>
			<td>Dimmer - Spot 8-bit</td>
			<td>1.14</td>
			<td>4.00m</td>
			<td>0.00m</td>
			<td>2.00m</td>
			<td>16.00</td>
			<td>70.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>20</td>
			<td>Blinders</td>
			<td>Grouping</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>21</td>
			<td>Blinder 1</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.15</td>
			<td>-2.00m</td>
			<td>0.50m</td>
			<td>4.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>22</td>
			<td>Blinder 2</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.16</td>
			<td>-1.00m</td>
			<td>0.50m</td>
			<td>4.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>23</td>
			<td>Blinder 3</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.17</td>
			<td>1.00m</td>
			<td>0.50m</td>
			<td>4.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>24</td>
			<td>Blinder 4</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.18</td>
			<td>2.00m</td>
			<td>0.50m</td>
			<td>4.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>25</td>
			<td>Blinder 5</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.19</td>
			<td>-3.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>26</td>
			<td>Blinder 6</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.20</td>
			<td>-2.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>27</td>
			<td>Blinder 7</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.21</td>
			<td>-0.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>28</td>
			<td>Blinder 8</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.22</td>
			<td>0.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>29</td>
			<td>Blinder 9</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.23</td>
			<td>2.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>30</td>
			<td>Blinder 10</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.24</td>
			<td>3.50m</td>
			<td>2.00m</td>
			<td>4.20m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>31</td>
			<td>Blinder 11</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.25</td>
			<td>-2.00m</td>
			<td>3.50m</td>
			<td>3.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>32</td>
			<td>Blinder 12</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.26</td>
			<td>-1.00m</td>
			<td>3.50m</td>
			<td>3.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>33</td>
			<td>Blinder 13</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.27</td>
			<td>1.00m</td>
			<td>3.50m</td>
			<td>3.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
		<tr>
			<td>34</td>
			<td>Blinder 14</td>
			<td>COB - Blinder 2x100w - 1 ch</td>
			<td>1.28</td>
			<td>2.00m</td>
			<td>3.50m</td>
			<td>3.70m</td>
			<td>-73.00</td>
			<td>0.00</td>
			<td>0.00</td>
		</tr>
	</tbody>
</table>

<p>When the numbers match you can close the patch menu and accept the changes if the software asks.</p>

<p>Now the fixtures are positioned and rotated and the 3D window should look something like this:</p>

<p><img alt="" src="/Media/Image/qsg_05_stage-complete.png"></p>

<p>Try to turn on the fixtures to see the light from the fixtures and try to move the camera around to see it from different positions.</p>

<p>When you are happy remember to turn the 3D window "Mode" back to <strong>Standard</strong> by turning Off the <span class="softkey">Setup</span> button. You can store this as a new view or store it on top of the default "3D" view.</p>

<p>&nbsp;</p>

<p>The 3D window has a lot of different settings, that allow you to adjust the window to match your wishes. For instance, it can be set up to have priority and running on a grandMA3 onPC on a powerful graphics computer, giving you high-quality real-time visualization. Or the quality can be scaled down to run on a console, where the priority is the user interface and cue control.</p>

<p>For now, we are just gonna use it with the default settings.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Recap</h2>

<p>in this chapter, we looked at the 3D window and positioned the fixtures in the 3D virtual space.</p>

<p>If you want to learn details about the 3D window then read the <a href="/Topic/1c2e825e-677f-4ea2-a49d-12abf6885108" target="_blank">3D Window</a> topic.</p>

<p>Fixture positioning is explored in more detail in the <a href="/Topic/ebfb5d9e-6b5e-4541-9b69-52d4ad268a33" target="_blank">Position Fixtures in the 3D Space</a> topic.</p>

<p>We are going to add more interesting fixtures to our patch and 3D space in future chapters.</p>

<p>The next chapter, however, is about groups, appearance, and scribble.</p>


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
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="aa362678-0bf2-4eac-8d36-f064142d8eed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_control_fixtures/en/1.6'; " title="Go to previous page '04 Control Simple Fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_group_appear_scribble/en/1.6';" title="Go to next page '06 Groups, Appearances, and Scribbles'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/73399/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_welcome/en/1.7'
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
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="01288fca-4495-459d-8a75-984ed5f5d6ae">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/grandMA3_Quick_Start_Guide/en/1.7'; " title="Go to previous page 'grandMA3 Quick Start Guide'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_new_show_setup/en/1.7';" title="Go to next page '01 New Show and Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/74426/40'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.7</span>
			</div>
		<h1>Welcome to the Quick Start Guide</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Preface</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Markup in the Quick Start Guide</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Recap</a>
						</li>
				</ul>
			</div>

		<p>This guide is a quick tour of some of the most used elements of the grandMA3 software. This is written for version 1.6. If you are on a different version, then there might be elements that function slightly differently. The general functions and principles are the same. We will try to keep this guide updated to the latest version.</p>

<p>It is meant to be a more personal and loose reading experience compared to the main manual. It is basically a collection of tutorials, where you (the reader) follow the steps I (the author) explain as we, together,&nbsp; go along. If you are looking for short explanations on how to do a specific thing, then the main manual is a better choice. This guide has a lot of text and explanation behind the steps - hopefully, it is also a little fun to read.</p>

<p>It is highly recommended that you read the numbered chapters in order.</p>

<p>We are going to create a new show that has some fixtures with standard functions. We are going to create something with a cue sequence and some busking setup that can be used for a more dynamic live playback.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Preface</h2>

<p>This guide is written using primarily the grandMA3 onPC. The thought is that most users that go through this, are on the onPC platform. If you have a grandMA3 console or a grandMA3 onPC command wing, then it can absolutely be used in this guide. If there is any difference in how to operate the onPC or console, then it will be explained. The primary difference is that you do not need to open windows with virtual keys and executors if you have real hardware.</p>

<p>A mouse/trackball is recommended. Often the guide will say something like "click the button". This is the same as tapping it on a console or on a touch screen. In rare cases, we might need to "Right-click" something with the mouse. It is the same as first pressing the&nbsp;<span class="hardkey">Edit</span>&nbsp;key and then tapping the object on a console. You can use an external mouse/trackball on the console, it is all up to you, but the interface is built to be touched.</p>

<p>If you are using the onPC, then you are going to work a lot on the "virtual" displays. The displays on the console are numbered like this.</p>

<p><img alt="" src="/Media/Image/img_screen_order_FS_1.png"></p>

<p>The grandMA3 onPC is a little different.</p>

<ul>
	<li>Display 1 is a combination of the console displays 1 and 8.</li>
	<li>Display 2 is console display 2 and 9.</li>
	<li>Display 3 is console display 3 and 10.</li>
	<li>Display E4 is external display 4.</li>
	<li>Display E5 is external display 5.</li>
	<li>Display S6 is console display 6.</li>
	<li>Display S7 is console display 7.</li>
</ul>

<p>The displays can be toggled using the <strong>Display</strong> pop-up found in the <strong>Control Bar</strong> on the left side of the displays. It is the button with a screen icon(<img alt="" src="/Media/Image/icon_monitor_24_v1-0_1.png">). It is not possible to turn off Display 1.</p>

<p>The <strong>Control Bar</strong> also gives access to virtual controls. There is the virtual <strong>Command Section</strong>, the <strong>Master Controls</strong>, the <strong>Playback Controls</strong>, and the <strong>Custom/Master Section</strong>. These can also be toggled using F3, F4, F5, and F7 keys on a keyboard. We will come back to all these controls later.</p>

<p>It is recommended that you read this online since it is the most up-to-date version. But you can also create this as a PDF and maybe print it. You could save the paper and maybe take the PDF with you and read it on your favorite electronic device instead. One favorite device could be the console or onPC where this guide is available in the help system - and then you do not need to create a PDF.</p>

<p>The Quick Start Guide is meant to be read from start to finish and it is meant for beginners. If you are looking for help on a specific topic you should try the main manual.</p>

<p>To get the best result you should try to do precisely what is written. If you change something that is not described you might get a different result.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Markup in the Quick Start Guide</h2>

<p>In this guide, there are different markups in different situations.</p>

<p>Even&nbsp;though this is written using an onPC there are going to be some (virtual) key presses. If you should press or click keys then it is displayed like this:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>If we are just talking about a key, then it will be written in single quotes like this: The 'Store' key.</p>

<p>If it is an area on the screens you need to click or press then it is written like this&nbsp;<span class="softkey">Internal</span>. This could be tabs in menus or a button on the screen.</p>

<p>If we are talking about a term, then it will look like this:&nbsp;<strong>Store</strong>&nbsp;is a function to save something.&nbsp;</p>

<p>If you need to use a keyboard and write something in the command line (we are going to look at what this is later) then it will look like this:</p>

<div class="cl_input">Admin[Fixture]&gt; Store Cue 1</div>

<p>All input like this should be executed with an Enter on your keyboard. The enter is not displayed. It is the same as the&nbsp;<span class="hardkey">Please</span>&nbsp;key. It is not a visible command - it is the key that executes the typed command. There is a default keyword displayed in the command line input above. It is the word inside the square brackets. You do not need to write this; it is already there - it might be different than the one displayed above.</p>

<p>Feedback from the system is displayed like this:</p>

<div class="cl_response">OK : Store Cue 1</div>

<p>Notice that the Please or Enter is not displayed. The feedback can be seen in the Command Line Feedback window (more on this later).</p>

<p>If you need to write something on the keyboard that is not for the command line, then the keyboard input will look like this: <span class="syntax"><strong>Store Cue 1</strong></span>. This could, for instance, be a name.</p>

<p>There might be hints, important information, or restrictions throughout the guide. These are written in boxes with icons and a small headline showing what type of information it is.</p>

<div class="tip"><strong>Hint:</strong><br>
This is what a hint would look like.</div>

<hr>
<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Recap</h2>

<p>Each chapter ends with a short recap of what we did. It might also include links to relevant topics in the main manual. These links are meant as guides to relevant locations in the manual where you can get more detailed information about specific topics touched in the guide chapter. You can take a break from the guide and read the manual topics if you want to, but you do not need to in order to continue to the next chapter.</p>

<p>For this chapter and introduction, I could add the following links:</p>

<p>Learn how to install the onPC in the <a href="/Topic/d5a8e0a9-4f66-4a23-bde9-44333928ee17">Installation of grandMA3 onPC topic</a>.</p>

<p>For details about setting up the console have a look at the <a href="/Topic/a6bf9abd-2f1b-47f8-bd7e-c7348d54df83">First Steps section</a>.</p>

<p>If you want to learn more about the command line input then read the <a href="/Topic/05074e55-1338-4389-8030-6bf295496e7a">Command Line Topic</a>.</p>

<p>At the end of the recap, there is a link to <a href="/Topic/3e99ee4a-f736-47d3-b30e-b3f765ac309c">the next chapter</a> - go ahead and click it when you are ready.</p>


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
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="01288fca-4495-459d-8a75-984ed5f5d6ae">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/grandMA3_Quick_Start_Guide/en/1.7'; " title="Go to previous page 'grandMA3 Quick Start Guide'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_new_show_setup/en/1.7';" title="Go to next page '01 New Show and Setup'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/74426/40';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

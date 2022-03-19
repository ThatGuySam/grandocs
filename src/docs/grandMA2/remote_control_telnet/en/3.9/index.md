
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7c55db7a-ae4b-4bcd-8d3f-d2babc1d615e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_web_remote/en/3.9'; " title="Go to previous page 'Web remote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_hex_table/en/3.9';" title="Go to next page 'Decimal – hex table'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55020/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Telnet Remote</h1>


		<p>The grandMA2 can be remote controlled via Telnet.</p>

<p>This gives access to command line. Any command that can be executed locally in the command line on a station, can also be done using the Telnet connection.</p>

<p>&nbsp;</p>

<p>It needs to be enabled in the Global Settings: <strong>Setup -&gt; Console -&gt; Global Settings -&gt; Telnet</strong></p>

<p>Here is a setting called "Telnet" with two options: <strong>Login Disabled</strong> and <strong>Login Enabled</strong>.</p>

<p>When it is enabled, then the station (Console or onPC) can be reached by its IP address and the IP port number 30000 - do not use the Telnet default IP port 23.</p>

<div class="tip"><strong>Hint:</strong><br>
Using port 30001 gives read only access to the <a href="/Topic/ce158a89-7615-4b86-aba4-a0f2abc4b931">System Monitor</a>.</div>

<p>Using this IP address and port number will give access to the command line.</p>

<p>&nbsp;</p>

<p>Using a telnet program like PuTTy the feedback from the grandMA2 will look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_putty_v3-3.png">
<figcaption><em>PuTTy Telnet feedback</em></figcaption>
</figure>

<p>It is not actually logged in as the default <strong>guest</strong> user, even though the feedback writes it.</p>

<p>Before any commands can be sent to the system, there needs to be a <a href="/Topic/eefc99e4-ece3-42fc-a3a0-76e8999aa9d5">login command</a> for one of the users in the show.</p>

<div class="tip"><strong>Hint:</strong><br>
In installations where Telnet is used to control a grandMA2 system, it might be a good idea to create a special user for the Telnet commands. Be aware that the telnet connection is case sensitive with the username and password.</div>

<p>After the login, any commands can be written to the system.</p>

<div class="restriction"><strong>Restriction:</strong><br>
Pay close attention when accessing the fixture setup and schedule from the telnet connection. It lock access for other users and there is no explaining warning.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7c55db7a-ae4b-4bcd-8d3f-d2babc1d615e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_web_remote/en/3.9'; " title="Go to previous page 'Web remote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_hex_table/en/3.9';" title="Go to next page 'Decimal – hex table'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55020/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
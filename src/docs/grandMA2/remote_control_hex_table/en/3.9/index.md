---
originalUrl: 'http://help2.malighting.com/Page/grandMA2/remote_control_hex_table/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ecf72bcf-b2c0-4840-90cd-7e16e0c2af85">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_telnet/en/3.9'; " title="Go to previous page 'Telnet remote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode/en/3.9';" title="Go to next page 'Timecode'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55021/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Decimal – Hex Table</h1>


		<p>This is a table that compares Decimal, Hex, Art-Net, and ASCII numbers.</p>

<p>It might be useful when there are two systems that uses different number systems.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col" style="height:14px; text-align:center; width:60px">Decimal<br>
			(beginning at 1)</th>
			<th scope="col" style="text-align:center; width:50px">Hex</th>
			<th scope="col" style="text-align:center; width:50px">Art-Net</th>
			<th scope="col" style="text-align:center; width:50px">ASCII</th>
			<th scope="col" style="text-align:center; width:54px">Decimal<br>
			(beginning at 0)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="height:14px; text-align:center; width:52px">1</td>
			<td style="height:14px; text-align:center; width:52px">00</td>
			<td style="height:14px; text-align:center; width:52px">0 : 0</td>
			<td style="height:14px; text-align:center; width:52px">NUL</td>
			<td style="height:14px; text-align:center; width:52px">0</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">2</td>
			<td style="height:14px; text-align:center; width:52px">01</td>
			<td style="height:14px; text-align:center; width:52px">0 : 1</td>
			<td style="height:14px; text-align:center; width:52px">SOH</td>
			<td style="height:14px; text-align:center; width:52px">1</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">3</td>
			<td style="height:14px; text-align:center; width:52px">02</td>
			<td style="height:14px; text-align:center; width:52px">0 : 2</td>
			<td style="height:14px; text-align:center; width:52px">STX</td>
			<td style="height:14px; text-align:center; width:52px">2</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">4</td>
			<td style="height:14px; text-align:center; width:52px">03</td>
			<td style="height:14px; text-align:center; width:52px">0 : 3</td>
			<td style="height:14px; text-align:center; width:52px">ETX</td>
			<td style="height:14px; text-align:center; width:52px">3</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">5</td>
			<td style="height:14px; text-align:center; width:52px">04</td>
			<td style="height:14px; text-align:center; width:52px">0 : 4</td>
			<td style="height:14px; text-align:center; width:52px">EOT</td>
			<td style="height:14px; text-align:center; width:52px">4</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">6</td>
			<td style="height:14px; text-align:center; width:52px">05</td>
			<td style="height:14px; text-align:center; width:52px">0 : 5</td>
			<td style="height:14px; text-align:center; width:52px">ENQ</td>
			<td style="height:14px; text-align:center; width:52px">5</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">7</td>
			<td style="height:14px; text-align:center; width:52px">06</td>
			<td style="height:14px; text-align:center; width:52px">0 : 6</td>
			<td style="height:14px; text-align:center; width:52px">ACK</td>
			<td style="height:14px; text-align:center; width:52px">6</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">8</td>
			<td style="height:14px; text-align:center; width:52px">07</td>
			<td style="height:14px; text-align:center; width:52px">0 : 7</td>
			<td style="height:14px; text-align:center; width:52px">BEL</td>
			<td style="height:14px; text-align:center; width:52px">7</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">9</td>
			<td style="height:14px; text-align:center; width:52px">08</td>
			<td style="height:14px; text-align:center; width:52px">0 : 8</td>
			<td style="height:14px; text-align:center; width:52px">BS</td>
			<td style="height:14px; text-align:center; width:52px">8</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">10</td>
			<td style="height:14px; text-align:center; width:52px">09</td>
			<td style="height:14px; text-align:center; width:52px">0 : 9</td>
			<td style="height:14px; text-align:center; width:52px">TAB</td>
			<td style="height:14px; text-align:center; width:52px">9</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">11</td>
			<td style="height:14px; text-align:center; width:52px">0A</td>
			<td style="height:14px; text-align:center; width:52px">0 : A</td>
			<td style="height:14px; text-align:center; width:52px">LF</td>
			<td style="height:14px; text-align:center; width:52px">10</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">12</td>
			<td style="height:14px; text-align:center; width:52px">0B</td>
			<td style="height:14px; text-align:center; width:52px">0 : B</td>
			<td style="height:14px; text-align:center; width:52px">VT</td>
			<td style="height:14px; text-align:center; width:52px">11</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">13</td>
			<td style="height:14px; text-align:center; width:52px">0C</td>
			<td style="height:14px; text-align:center; width:52px">0 : C</td>
			<td style="height:14px; text-align:center; width:52px">FF</td>
			<td style="height:14px; text-align:center; width:52px">12</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">14</td>
			<td style="height:14px; text-align:center; width:52px">0D</td>
			<td style="height:14px; text-align:center; width:52px">0 : D</td>
			<td style="height:14px; text-align:center; width:52px">CR</td>
			<td style="height:14px; text-align:center; width:52px">13</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">15</td>
			<td style="height:14px; text-align:center; width:52px">0E</td>
			<td style="height:14px; text-align:center; width:52px">0 : E</td>
			<td style="height:14px; text-align:center; width:52px">SO</td>
			<td style="height:14px; text-align:center; width:52px">14</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">16</td>
			<td style="height:14px; text-align:center; width:52px">0F</td>
			<td style="height:14px; text-align:center; width:52px">0 : F</td>
			<td style="height:14px; text-align:center; width:52px">SI</td>
			<td style="height:14px; text-align:center; width:52px">15</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">17</td>
			<td style="height:14px; text-align:center; width:52px">10</td>
			<td style="height:14px; text-align:center; width:52px">1 : 0</td>
			<td style="height:14px; text-align:center; width:52px">DLE</td>
			<td style="height:14px; text-align:center; width:52px">16</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">18</td>
			<td style="height:14px; text-align:center; width:52px">11</td>
			<td style="height:14px; text-align:center; width:52px">1 : 1</td>
			<td style="height:14px; text-align:center; width:52px">DC1</td>
			<td style="height:14px; text-align:center; width:52px">17</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">19</td>
			<td style="height:14px; text-align:center; width:52px">12</td>
			<td style="height:14px; text-align:center; width:52px">1 : 2</td>
			<td style="height:14px; text-align:center; width:52px">DC2</td>
			<td style="height:14px; text-align:center; width:52px">18</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">20</td>
			<td style="height:14px; text-align:center; width:52px">13</td>
			<td style="height:14px; text-align:center; width:52px">1 : 3</td>
			<td style="height:14px; text-align:center; width:52px">DC3</td>
			<td style="height:14px; text-align:center; width:52px">19</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">21</td>
			<td style="height:14px; text-align:center; width:52px">14</td>
			<td style="height:14px; text-align:center; width:52px">1 : 4</td>
			<td style="height:14px; text-align:center; width:52px">DC4</td>
			<td style="height:14px; text-align:center; width:52px">20</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">22</td>
			<td style="height:14px; text-align:center; width:52px">15</td>
			<td style="height:14px; text-align:center; width:52px">1 : 5</td>
			<td style="height:14px; text-align:center; width:52px">NAK</td>
			<td style="height:14px; text-align:center; width:52px">21</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">23</td>
			<td style="height:14px; text-align:center; width:52px">16</td>
			<td style="height:14px; text-align:center; width:52px">1 : 6</td>
			<td style="height:14px; text-align:center; width:52px">SYN</td>
			<td style="height:14px; text-align:center; width:52px">22</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">24</td>
			<td style="height:14px; text-align:center; width:52px">17</td>
			<td style="height:14px; text-align:center; width:52px">1 : 7</td>
			<td style="height:14px; text-align:center; width:52px">ETB</td>
			<td style="height:14px; text-align:center; width:52px">23</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">25</td>
			<td style="height:14px; text-align:center; width:52px">18</td>
			<td style="height:14px; text-align:center; width:52px">1 : 8</td>
			<td style="height:14px; text-align:center; width:52px">CAN</td>
			<td style="height:14px; text-align:center; width:52px">24</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">26</td>
			<td style="height:14px; text-align:center; width:52px">19</td>
			<td style="height:14px; text-align:center; width:52px">1 : 9</td>
			<td style="height:14px; text-align:center; width:52px">EM</td>
			<td style="height:14px; text-align:center; width:52px">25</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">27</td>
			<td style="height:14px; text-align:center; width:52px">1A</td>
			<td style="height:14px; text-align:center; width:52px">1 : A</td>
			<td style="height:14px; text-align:center; width:52px">SUB</td>
			<td style="height:14px; text-align:center; width:52px">26</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">28</td>
			<td style="height:14px; text-align:center; width:52px">1B</td>
			<td style="height:14px; text-align:center; width:52px">1 : B</td>
			<td style="height:14px; text-align:center; width:52px">ESC</td>
			<td style="height:14px; text-align:center; width:52px">27</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">29</td>
			<td style="height:14px; text-align:center; width:52px">1C</td>
			<td style="height:14px; text-align:center; width:52px">1 : C</td>
			<td style="height:14px; text-align:center; width:52px">FS</td>
			<td style="height:14px; text-align:center; width:52px">28</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">30</td>
			<td style="height:14px; text-align:center; width:52px">1D</td>
			<td style="height:14px; text-align:center; width:52px">1 : D</td>
			<td style="height:14px; text-align:center; width:52px">GS</td>
			<td style="height:14px; text-align:center; width:52px">29</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">31</td>
			<td style="height:14px; text-align:center; width:52px">1E</td>
			<td style="height:14px; text-align:center; width:52px">1 : E</td>
			<td style="height:14px; text-align:center; width:52px">RS</td>
			<td style="height:14px; text-align:center; width:52px">30</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">32</td>
			<td style="height:14px; text-align:center; width:52px">1F</td>
			<td style="height:14px; text-align:center; width:52px">1 : F</td>
			<td style="height:14px; text-align:center; width:52px">US</td>
			<td style="height:14px; text-align:center; width:52px">31</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">33</td>
			<td style="height:14px; text-align:center; width:52px">20</td>
			<td style="height:14px; text-align:center; width:52px">2 : 0</td>
			<td style="height:14px; text-align:center; width:52px">(space)</td>
			<td style="height:14px; text-align:center; width:52px">32</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">34</td>
			<td style="height:14px; text-align:center; width:52px">21</td>
			<td style="height:14px; text-align:center; width:52px">2 : 1</td>
			<td style="height:14px; text-align:center; width:52px">!</td>
			<td style="height:14px; text-align:center; width:52px">33</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">35</td>
			<td style="height:14px; text-align:center; width:52px">22</td>
			<td style="height:14px; text-align:center; width:52px">2 : 2</td>
			<td style="height:14px; text-align:center; width:52px">"</td>
			<td style="height:14px; text-align:center; width:52px">34</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">36</td>
			<td style="height:14px; text-align:center; width:52px">23</td>
			<td style="height:14px; text-align:center; width:52px">2 : 3</td>
			<td style="height:14px; text-align:center; width:52px">#</td>
			<td style="height:14px; text-align:center; width:52px">35</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">37</td>
			<td style="height:14px; text-align:center; width:52px">24</td>
			<td style="height:14px; text-align:center; width:52px">2 : 4</td>
			<td style="height:14px; text-align:center; width:52px">$</td>
			<td style="height:14px; text-align:center; width:52px">36</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">38</td>
			<td style="height:14px; text-align:center; width:52px">25</td>
			<td style="height:14px; text-align:center; width:52px">2 : 5</td>
			<td style="height:14px; text-align:center; width:52px">%</td>
			<td style="height:14px; text-align:center; width:52px">37</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">39</td>
			<td style="height:14px; text-align:center; width:52px">26</td>
			<td style="height:14px; text-align:center; width:52px">2 : 6</td>
			<td style="height:14px; text-align:center; width:52px">&amp;</td>
			<td style="height:14px; text-align:center; width:52px">38</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">40</td>
			<td style="height:14px; text-align:center; width:52px">27</td>
			<td style="height:14px; text-align:center; width:52px">2 : 7</td>
			<td style="height:14px; text-align:center; width:52px">'</td>
			<td style="height:14px; text-align:center; width:52px">39</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">41</td>
			<td style="height:14px; text-align:center; width:52px">28</td>
			<td style="height:14px; text-align:center; width:52px">2 : 8</td>
			<td style="height:14px; text-align:center; width:52px">(</td>
			<td style="height:14px; text-align:center; width:52px">40</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">42</td>
			<td style="height:14px; text-align:center; width:52px">29</td>
			<td style="height:14px; text-align:center; width:52px">2 : 9</td>
			<td style="height:14px; text-align:center; width:52px">)</td>
			<td style="height:14px; text-align:center; width:52px">41</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">43</td>
			<td style="height:14px; text-align:center; width:52px">2A</td>
			<td style="height:14px; text-align:center; width:52px">2 : A</td>
			<td style="height:14px; text-align:center; width:52px">*</td>
			<td style="height:14px; text-align:center; width:52px">42</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">44</td>
			<td style="height:14px; text-align:center; width:52px">2B</td>
			<td style="height:14px; text-align:center; width:52px">2 : B</td>
			<td style="height:14px; text-align:center; width:52px">+</td>
			<td style="height:14px; text-align:center; width:52px">43</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">45</td>
			<td style="height:14px; text-align:center; width:52px">2C</td>
			<td style="height:14px; text-align:center; width:52px">2 : C</td>
			<td style="height:14px; text-align:center; width:52px">,</td>
			<td style="height:14px; text-align:center; width:52px">44</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">46</td>
			<td style="height:14px; text-align:center; width:52px">2D</td>
			<td style="height:14px; text-align:center; width:52px">2 : D</td>
			<td style="height:14px; text-align:center; width:52px">-</td>
			<td style="height:14px; text-align:center; width:52px">45</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">47</td>
			<td style="height:14px; text-align:center; width:52px">2E</td>
			<td style="height:14px; text-align:center; width:52px">2 : E</td>
			<td style="height:14px; text-align:center; width:52px">.</td>
			<td style="height:14px; text-align:center; width:52px">46</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">48</td>
			<td style="height:14px; text-align:center; width:52px">2F</td>
			<td style="height:14px; text-align:center; width:52px">2 : F</td>
			<td style="height:14px; text-align:center; width:52px">/</td>
			<td style="height:14px; text-align:center; width:52px">47</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">49</td>
			<td style="height:14px; text-align:center; width:52px">30</td>
			<td style="height:14px; text-align:center; width:52px">3 : 0</td>
			<td style="height:14px; text-align:center; width:52px">0</td>
			<td style="height:14px; text-align:center; width:52px">48</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">50</td>
			<td style="height:14px; text-align:center; width:52px">31</td>
			<td style="height:14px; text-align:center; width:52px">3 : 1</td>
			<td style="height:14px; text-align:center; width:52px">1</td>
			<td style="height:14px; text-align:center; width:52px">49</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">51</td>
			<td style="height:14px; text-align:center; width:52px">32</td>
			<td style="height:14px; text-align:center; width:52px">3 : 2</td>
			<td style="height:14px; text-align:center; width:52px">2</td>
			<td style="height:14px; text-align:center; width:52px">50</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">52</td>
			<td style="height:14px; text-align:center; width:52px">33</td>
			<td style="height:14px; text-align:center; width:52px">3 : 3</td>
			<td style="height:14px; text-align:center; width:52px">3</td>
			<td style="height:14px; text-align:center; width:52px">51</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">53</td>
			<td style="height:14px; text-align:center; width:52px">34</td>
			<td style="height:14px; text-align:center; width:52px">3 : 4</td>
			<td style="height:14px; text-align:center; width:52px">4</td>
			<td style="height:14px; text-align:center; width:52px">52</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">54</td>
			<td style="height:14px; text-align:center; width:52px">35</td>
			<td style="height:14px; text-align:center; width:52px">3 : 5</td>
			<td style="height:14px; text-align:center; width:52px">5</td>
			<td style="height:14px; text-align:center; width:52px">53</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">55</td>
			<td style="height:14px; text-align:center; width:52px">36</td>
			<td style="height:14px; text-align:center; width:52px">3 : 6</td>
			<td style="height:14px; text-align:center; width:52px">6</td>
			<td style="height:14px; text-align:center; width:52px">54</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">56</td>
			<td style="height:14px; text-align:center; width:52px">37</td>
			<td style="height:14px; text-align:center; width:52px">3 : 7</td>
			<td style="height:14px; text-align:center; width:52px">7</td>
			<td style="height:14px; text-align:center; width:52px">55</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">57</td>
			<td style="height:14px; text-align:center; width:52px">38</td>
			<td style="height:14px; text-align:center; width:52px">3 : 8</td>
			<td style="height:14px; text-align:center; width:52px">8</td>
			<td style="height:14px; text-align:center; width:52px">56</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">58</td>
			<td style="height:14px; text-align:center; width:52px">39</td>
			<td style="height:14px; text-align:center; width:52px">3 : 9</td>
			<td style="height:14px; text-align:center; width:52px">9</td>
			<td style="height:14px; text-align:center; width:52px">57</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">59</td>
			<td style="height:14px; text-align:center; width:52px">3A</td>
			<td style="height:14px; text-align:center; width:52px">3 : A</td>
			<td style="height:14px; text-align:center; width:52px">:</td>
			<td style="height:14px; text-align:center; width:52px">58</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">60</td>
			<td style="height:14px; text-align:center; width:52px">3B</td>
			<td style="height:14px; text-align:center; width:52px">3 : B</td>
			<td style="height:14px; text-align:center; width:52px">;</td>
			<td style="height:14px; text-align:center; width:52px">59</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">61</td>
			<td style="height:14px; text-align:center; width:52px">3C</td>
			<td style="height:14px; text-align:center; width:52px">3 : C</td>
			<td style="height:14px; text-align:center; width:52px">&lt;</td>
			<td style="height:14px; text-align:center; width:52px">60</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">62</td>
			<td style="height:14px; text-align:center; width:52px">3D</td>
			<td style="height:14px; text-align:center; width:52px">3 : D</td>
			<td style="height:14px; text-align:center; width:52px">=</td>
			<td style="height:14px; text-align:center; width:52px">61</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">63</td>
			<td style="height:14px; text-align:center; width:52px">3E</td>
			<td style="height:14px; text-align:center; width:52px">3 : E</td>
			<td style="height:14px; text-align:center; width:52px">&gt;</td>
			<td style="height:14px; text-align:center; width:52px">62</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">64</td>
			<td style="height:14px; text-align:center; width:52px">3F</td>
			<td style="height:14px; text-align:center; width:52px">3 : F</td>
			<td style="height:14px; text-align:center; width:52px">?</td>
			<td style="height:14px; text-align:center; width:52px">63</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">65</td>
			<td style="height:14px; text-align:center; width:52px">40</td>
			<td style="height:14px; text-align:center; width:52px">4 : 0</td>
			<td style="height:14px; text-align:center; width:52px">@</td>
			<td style="height:14px; text-align:center; width:52px">64</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">66</td>
			<td style="height:14px; text-align:center; width:52px">41</td>
			<td style="height:14px; text-align:center; width:52px">4 : 1</td>
			<td style="height:14px; text-align:center; width:52px">A</td>
			<td style="height:14px; text-align:center; width:52px">65</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">67</td>
			<td style="height:14px; text-align:center; width:52px">42</td>
			<td style="height:14px; text-align:center; width:52px">4 : 2</td>
			<td style="height:14px; text-align:center; width:52px">B</td>
			<td style="height:14px; text-align:center; width:52px">66</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">68</td>
			<td style="height:14px; text-align:center; width:52px">43</td>
			<td style="height:14px; text-align:center; width:52px">4 : 3</td>
			<td style="height:14px; text-align:center; width:52px">C</td>
			<td style="height:14px; text-align:center; width:52px">67</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">69</td>
			<td style="height:14px; text-align:center; width:52px">44</td>
			<td style="height:14px; text-align:center; width:52px">4 : 4</td>
			<td style="height:14px; text-align:center; width:52px">D</td>
			<td style="height:14px; text-align:center; width:52px">68</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">70</td>
			<td style="height:14px; text-align:center; width:52px">45</td>
			<td style="height:14px; text-align:center; width:52px">4 : 5</td>
			<td style="height:14px; text-align:center; width:52px">E</td>
			<td style="height:14px; text-align:center; width:52px">69</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">71</td>
			<td style="height:14px; text-align:center; width:52px">46</td>
			<td style="height:14px; text-align:center; width:52px">4 : 6</td>
			<td style="height:14px; text-align:center; width:52px">F</td>
			<td style="height:14px; text-align:center; width:52px">70</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">72</td>
			<td style="height:14px; text-align:center; width:52px">47</td>
			<td style="height:14px; text-align:center; width:52px">4 : 7</td>
			<td style="height:14px; text-align:center; width:52px">G</td>
			<td style="height:14px; text-align:center; width:52px">71</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">73</td>
			<td style="height:14px; text-align:center; width:52px">48</td>
			<td style="height:14px; text-align:center; width:52px">4 : 8</td>
			<td style="height:14px; text-align:center; width:52px">H</td>
			<td style="height:14px; text-align:center; width:52px">72</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">74</td>
			<td style="height:14px; text-align:center; width:52px">49</td>
			<td style="height:14px; text-align:center; width:52px">4 : 9</td>
			<td style="height:14px; text-align:center; width:52px">I</td>
			<td style="height:14px; text-align:center; width:52px">73</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">75</td>
			<td style="height:14px; text-align:center; width:52px">4A</td>
			<td style="height:14px; text-align:center; width:52px">4 : A</td>
			<td style="height:14px; text-align:center; width:52px">J</td>
			<td style="height:14px; text-align:center; width:52px">74</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">76</td>
			<td style="height:14px; text-align:center; width:52px">4B</td>
			<td style="height:14px; text-align:center; width:52px">4 : B</td>
			<td style="height:14px; text-align:center; width:52px">K</td>
			<td style="height:14px; text-align:center; width:52px">75</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">77</td>
			<td style="height:14px; text-align:center; width:52px">4C</td>
			<td style="height:14px; text-align:center; width:52px">4 : C</td>
			<td style="height:14px; text-align:center; width:52px">L</td>
			<td style="height:14px; text-align:center; width:52px">76</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">78</td>
			<td style="height:14px; text-align:center; width:52px">4D</td>
			<td style="height:14px; text-align:center; width:52px">4 : D</td>
			<td style="height:14px; text-align:center; width:52px">M</td>
			<td style="height:14px; text-align:center; width:52px">77</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">79</td>
			<td style="height:14px; text-align:center; width:52px">4E</td>
			<td style="height:14px; text-align:center; width:52px">4 : E</td>
			<td style="height:14px; text-align:center; width:52px">N</td>
			<td style="height:14px; text-align:center; width:52px">78</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">80</td>
			<td style="height:14px; text-align:center; width:52px">4F</td>
			<td style="height:14px; text-align:center; width:52px">4 : F</td>
			<td style="height:14px; text-align:center; width:52px">O</td>
			<td style="height:14px; text-align:center; width:52px">79</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">81</td>
			<td style="height:14px; text-align:center; width:52px">50</td>
			<td style="height:14px; text-align:center; width:52px">5 : 0</td>
			<td style="height:14px; text-align:center; width:52px">P</td>
			<td style="height:14px; text-align:center; width:52px">80</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">82</td>
			<td style="height:14px; text-align:center; width:52px">51</td>
			<td style="height:14px; text-align:center; width:52px">5 : 1</td>
			<td style="height:14px; text-align:center; width:52px">Q</td>
			<td style="height:14px; text-align:center; width:52px">81</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">83</td>
			<td style="height:14px; text-align:center; width:52px">52</td>
			<td style="height:14px; text-align:center; width:52px">5 : 2</td>
			<td style="height:14px; text-align:center; width:52px">R</td>
			<td style="height:14px; text-align:center; width:52px">82</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">84</td>
			<td style="height:14px; text-align:center; width:52px">53</td>
			<td style="height:14px; text-align:center; width:52px">5 : 3</td>
			<td style="height:14px; text-align:center; width:52px">S</td>
			<td style="height:14px; text-align:center; width:52px">83</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">85</td>
			<td style="height:14px; text-align:center; width:52px">54</td>
			<td style="height:14px; text-align:center; width:52px">5 : 4</td>
			<td style="height:14px; text-align:center; width:52px">T</td>
			<td style="height:14px; text-align:center; width:52px">84</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">86</td>
			<td style="height:14px; text-align:center; width:52px">55</td>
			<td style="height:14px; text-align:center; width:52px">5 : 5</td>
			<td style="height:14px; text-align:center; width:52px">U</td>
			<td style="height:14px; text-align:center; width:52px">85</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">87</td>
			<td style="height:14px; text-align:center; width:52px">56</td>
			<td style="height:14px; text-align:center; width:52px">5 : 6</td>
			<td style="height:14px; text-align:center; width:52px">V</td>
			<td style="height:14px; text-align:center; width:52px">86</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">88</td>
			<td style="height:14px; text-align:center; width:52px">57</td>
			<td style="height:14px; text-align:center; width:52px">5 : 7</td>
			<td style="height:14px; text-align:center; width:52px">W</td>
			<td style="height:14px; text-align:center; width:52px">87</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">89</td>
			<td style="height:14px; text-align:center; width:52px">58</td>
			<td style="height:14px; text-align:center; width:52px">5 : 8</td>
			<td style="height:14px; text-align:center; width:52px">X</td>
			<td style="height:14px; text-align:center; width:52px">88</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">90</td>
			<td style="height:14px; text-align:center; width:52px">59</td>
			<td style="height:14px; text-align:center; width:52px">5 : 9</td>
			<td style="height:14px; text-align:center; width:52px">Y</td>
			<td style="height:14px; text-align:center; width:52px">89</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">91</td>
			<td style="height:14px; text-align:center; width:52px">5A</td>
			<td style="height:14px; text-align:center; width:52px">5 : A</td>
			<td style="height:14px; text-align:center; width:52px">Z</td>
			<td style="height:14px; text-align:center; width:52px">90</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">92</td>
			<td style="height:14px; text-align:center; width:52px">5B</td>
			<td style="height:14px; text-align:center; width:52px">5 : B</td>
			<td style="height:14px; text-align:center; width:52px">[</td>
			<td style="height:14px; text-align:center; width:52px">91</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">93</td>
			<td style="height:14px; text-align:center; width:52px">5C</td>
			<td style="height:14px; text-align:center; width:52px">5 : C</td>
			<td style="height:14px; text-align:center; width:52px">\</td>
			<td style="height:14px; text-align:center; width:52px">92</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">94</td>
			<td style="height:14px; text-align:center; width:52px">5D</td>
			<td style="height:14px; text-align:center; width:52px">5 : D</td>
			<td style="height:14px; text-align:center; width:52px">]</td>
			<td style="height:14px; text-align:center; width:52px">93</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">95</td>
			<td style="height:14px; text-align:center; width:52px">5E</td>
			<td style="height:14px; text-align:center; width:52px">5 : E</td>
			<td style="height:14px; text-align:center; width:52px">^</td>
			<td style="height:14px; text-align:center; width:52px">94</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">96</td>
			<td style="height:14px; text-align:center; width:52px">5F</td>
			<td style="height:14px; text-align:center; width:52px">5 : F</td>
			<td style="height:14px; text-align:center; width:52px">_</td>
			<td style="height:14px; text-align:center; width:52px">95</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">97</td>
			<td style="height:14px; text-align:center; width:52px">60</td>
			<td style="height:14px; text-align:center; width:52px">6 : 0</td>
			<td style="height:14px; text-align:center; width:52px">`</td>
			<td style="height:14px; text-align:center; width:52px">96</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">98</td>
			<td style="height:14px; text-align:center; width:52px">61</td>
			<td style="height:14px; text-align:center; width:52px">6 : 1</td>
			<td style="height:14px; text-align:center; width:52px">a</td>
			<td style="height:14px; text-align:center; width:52px">97</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">99</td>
			<td style="height:14px; text-align:center; width:52px">62</td>
			<td style="height:14px; text-align:center; width:52px">6 : 2</td>
			<td style="height:14px; text-align:center; width:52px">b</td>
			<td style="height:14px; text-align:center; width:52px">98</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">100</td>
			<td style="height:14px; text-align:center; width:52px">63</td>
			<td style="height:14px; text-align:center; width:52px">6 : 3</td>
			<td style="height:14px; text-align:center; width:52px">c</td>
			<td style="height:14px; text-align:center; width:52px">99</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center; width:52px">101</td>
			<td style="height:14px; text-align:center; width:52px">64</td>
			<td style="height:14px; text-align:center; width:52px">6 : 4</td>
			<td style="height:14px; text-align:center; width:52px">d</td>
			<td style="height:14px; text-align:center; width:52px">100</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">102</td>
			<td style="height:14px; text-align:center">65</td>
			<td style="height:14px; text-align:center">6 : 5</td>
			<td style="height:14px; text-align:center">e</td>
			<td style="height:14px; text-align:center">101</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">103</td>
			<td style="height:14px; text-align:center">66</td>
			<td style="height:14px; text-align:center">6 : 6</td>
			<td style="height:14px; text-align:center">f</td>
			<td style="height:14px; text-align:center">102</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">104</td>
			<td style="height:14px; text-align:center">67</td>
			<td style="height:14px; text-align:center">6 : 7</td>
			<td style="height:14px; text-align:center">g</td>
			<td style="height:14px; text-align:center">103</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">105</td>
			<td style="height:14px; text-align:center">68</td>
			<td style="height:14px; text-align:center">6 : 8</td>
			<td style="height:14px; text-align:center">h</td>
			<td style="height:14px; text-align:center">104</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">106</td>
			<td style="height:14px; text-align:center">69</td>
			<td style="height:14px; text-align:center">6 : 9</td>
			<td style="height:14px; text-align:center">i</td>
			<td style="height:14px; text-align:center">105</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">107</td>
			<td style="height:14px; text-align:center">6A</td>
			<td style="height:14px; text-align:center">6 : A</td>
			<td style="height:14px; text-align:center">j</td>
			<td style="height:14px; text-align:center">106</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">108</td>
			<td style="height:14px; text-align:center">6B</td>
			<td style="height:14px; text-align:center">6 : B</td>
			<td style="height:14px; text-align:center">k</td>
			<td style="height:14px; text-align:center">107</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">109</td>
			<td style="height:14px; text-align:center">6C</td>
			<td style="height:14px; text-align:center">6 : C</td>
			<td style="height:14px; text-align:center">l</td>
			<td style="height:14px; text-align:center">108</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">110</td>
			<td style="height:14px; text-align:center">6D</td>
			<td style="height:14px; text-align:center">6 : D</td>
			<td style="height:14px; text-align:center">m</td>
			<td style="height:14px; text-align:center">109</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">111</td>
			<td style="height:14px; text-align:center">6E</td>
			<td style="height:14px; text-align:center">6 : E</td>
			<td style="height:14px; text-align:center">n</td>
			<td style="height:14px; text-align:center">110</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">112</td>
			<td style="height:14px; text-align:center">6F</td>
			<td style="height:14px; text-align:center">6 : F</td>
			<td style="height:14px; text-align:center">o</td>
			<td style="height:14px; text-align:center">111</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">113</td>
			<td style="height:14px; text-align:center">70</td>
			<td style="height:14px; text-align:center">7 : 0</td>
			<td style="height:14px; text-align:center">p</td>
			<td style="height:14px; text-align:center">112</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">114</td>
			<td style="height:14px; text-align:center">71</td>
			<td style="height:14px; text-align:center">7 : 1</td>
			<td style="height:14px; text-align:center">q</td>
			<td style="height:14px; text-align:center">113</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">115</td>
			<td style="height:14px; text-align:center">72</td>
			<td style="height:14px; text-align:center">7 : 2</td>
			<td style="height:14px; text-align:center">r</td>
			<td style="height:14px; text-align:center">114</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">116</td>
			<td style="height:14px; text-align:center">73</td>
			<td style="height:14px; text-align:center">7 : 3</td>
			<td style="height:14px; text-align:center">s</td>
			<td style="height:14px; text-align:center">115</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">117</td>
			<td style="height:14px; text-align:center">74</td>
			<td style="height:14px; text-align:center">7 : 4</td>
			<td style="height:14px; text-align:center">t</td>
			<td style="height:14px; text-align:center">116</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">118</td>
			<td style="height:14px; text-align:center">75</td>
			<td style="height:14px; text-align:center">7 : 5</td>
			<td style="height:14px; text-align:center">u</td>
			<td style="height:14px; text-align:center">117</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">119</td>
			<td style="height:14px; text-align:center">76</td>
			<td style="height:14px; text-align:center">7 : 6</td>
			<td style="height:14px; text-align:center">v</td>
			<td style="height:14px; text-align:center">118</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">120</td>
			<td style="height:14px; text-align:center">77</td>
			<td style="height:14px; text-align:center">7 : 7</td>
			<td style="height:14px; text-align:center">w</td>
			<td style="height:14px; text-align:center">119</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">121</td>
			<td style="height:14px; text-align:center">78</td>
			<td style="height:14px; text-align:center">7 : 8</td>
			<td style="height:14px; text-align:center">x</td>
			<td style="height:14px; text-align:center">120</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">122</td>
			<td style="height:14px; text-align:center">79</td>
			<td style="height:14px; text-align:center">7 : 9</td>
			<td style="height:14px; text-align:center">y</td>
			<td style="height:14px; text-align:center">121</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">123</td>
			<td style="height:14px; text-align:center">7A</td>
			<td style="height:14px; text-align:center">7 : A</td>
			<td style="height:14px; text-align:center">z</td>
			<td style="height:14px; text-align:center">122</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">124</td>
			<td style="height:14px; text-align:center">7B</td>
			<td style="height:14px; text-align:center">7 : B</td>
			<td style="height:14px; text-align:center">{</td>
			<td style="height:14px; text-align:center">123</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">125</td>
			<td style="height:14px; text-align:center">7C</td>
			<td style="height:14px; text-align:center">7 : C</td>
			<td style="height:14px; text-align:center">|</td>
			<td style="height:14px; text-align:center">124</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">126</td>
			<td style="height:14px; text-align:center">7D</td>
			<td style="height:14px; text-align:center">7 : D</td>
			<td style="height:14px; text-align:center">}</td>
			<td style="height:14px; text-align:center">125</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">127</td>
			<td style="height:14px; text-align:center">7E</td>
			<td style="height:14px; text-align:center">7 : E</td>
			<td style="height:14px; text-align:center">~</td>
			<td style="height:14px; text-align:center">126</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">128</td>
			<td style="height:14px; text-align:center">7F</td>
			<td style="height:14px; text-align:center">7 : F</td>
			<td style="height:14px; text-align:center">DEL</td>
			<td style="height:14px; text-align:center">127</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">129</td>
			<td style="height:14px; text-align:center">80</td>
			<td style="height:14px; text-align:center">8 : 0</td>
			<td style="height:14px; text-align:center">Ç</td>
			<td style="height:14px; text-align:center">128</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">130</td>
			<td style="height:14px; text-align:center">81</td>
			<td style="height:14px; text-align:center">8 : 1</td>
			<td style="height:14px; text-align:center">ü</td>
			<td style="height:14px; text-align:center">129</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">131</td>
			<td style="height:14px; text-align:center">82</td>
			<td style="height:14px; text-align:center">8 : 2</td>
			<td style="height:14px; text-align:center">é</td>
			<td style="height:14px; text-align:center">130</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">132</td>
			<td style="height:14px; text-align:center">83</td>
			<td style="height:14px; text-align:center">8 : 3</td>
			<td style="height:14px; text-align:center">â</td>
			<td style="height:14px; text-align:center">131</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">133</td>
			<td style="height:14px; text-align:center">84</td>
			<td style="height:14px; text-align:center">8 : 4</td>
			<td style="height:14px; text-align:center">ä</td>
			<td style="height:14px; text-align:center">132</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">134</td>
			<td style="height:14px; text-align:center">85</td>
			<td style="height:14px; text-align:center">8 : 5</td>
			<td style="height:14px; text-align:center">à</td>
			<td style="height:14px; text-align:center">133</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">135</td>
			<td style="height:14px; text-align:center">86</td>
			<td style="height:14px; text-align:center">8 : 6</td>
			<td style="height:14px; text-align:center">å</td>
			<td style="height:14px; text-align:center">134</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">136</td>
			<td style="height:14px; text-align:center">87</td>
			<td style="height:14px; text-align:center">8 : 7</td>
			<td style="height:14px; text-align:center">ç</td>
			<td style="height:14px; text-align:center">135</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">137</td>
			<td style="height:14px; text-align:center">88</td>
			<td style="height:14px; text-align:center">8 : 8</td>
			<td style="height:14px; text-align:center">ê</td>
			<td style="height:14px; text-align:center">136</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">138</td>
			<td style="height:14px; text-align:center">89</td>
			<td style="height:14px; text-align:center">8 : 9</td>
			<td style="height:14px; text-align:center">ë</td>
			<td style="height:14px; text-align:center">137</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">139</td>
			<td style="height:14px; text-align:center">8A</td>
			<td style="height:14px; text-align:center">8 : A</td>
			<td style="height:14px; text-align:center">è</td>
			<td style="height:14px; text-align:center">138</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">140</td>
			<td style="height:14px; text-align:center">8B</td>
			<td style="height:14px; text-align:center">8 : B</td>
			<td style="height:14px; text-align:center">ï</td>
			<td style="height:14px; text-align:center">139</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">141</td>
			<td style="height:14px; text-align:center">8C</td>
			<td style="height:14px; text-align:center">8 : C</td>
			<td style="height:14px; text-align:center">î</td>
			<td style="height:14px; text-align:center">140</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">142</td>
			<td style="height:14px; text-align:center">8D</td>
			<td style="height:14px; text-align:center">8 : D</td>
			<td style="height:14px; text-align:center">ì</td>
			<td style="height:14px; text-align:center">141</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">143</td>
			<td style="height:14px; text-align:center">8E</td>
			<td style="height:14px; text-align:center">8 : E</td>
			<td style="height:14px; text-align:center">Ä</td>
			<td style="height:14px; text-align:center">142</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">144</td>
			<td style="height:14px; text-align:center">8F</td>
			<td style="height:14px; text-align:center">8 : F</td>
			<td style="height:14px; text-align:center">Å</td>
			<td style="height:14px; text-align:center">143</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">145</td>
			<td style="height:14px; text-align:center">90</td>
			<td style="height:14px; text-align:center">9 : 0</td>
			<td style="height:14px; text-align:center">É</td>
			<td style="height:14px; text-align:center">144</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">146</td>
			<td style="height:14px; text-align:center">91</td>
			<td style="height:14px; text-align:center">9 : 1</td>
			<td style="height:14px; text-align:center">æ</td>
			<td style="height:14px; text-align:center">145</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">147</td>
			<td style="height:14px; text-align:center">92</td>
			<td style="height:14px; text-align:center">9 : 2</td>
			<td style="height:14px; text-align:center">Æ</td>
			<td style="height:14px; text-align:center">146</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">148</td>
			<td style="height:14px; text-align:center">93</td>
			<td style="height:14px; text-align:center">9 : 3</td>
			<td style="height:14px; text-align:center">ô</td>
			<td style="height:14px; text-align:center">147</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">149</td>
			<td style="height:14px; text-align:center">94</td>
			<td style="height:14px; text-align:center">9 : 4</td>
			<td style="height:14px; text-align:center">ö</td>
			<td style="height:14px; text-align:center">148</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">150</td>
			<td style="height:14px; text-align:center">95</td>
			<td style="height:14px; text-align:center">9 : 5</td>
			<td style="height:14px; text-align:center">ò</td>
			<td style="height:14px; text-align:center">149</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">151</td>
			<td style="height:14px; text-align:center">96</td>
			<td style="height:14px; text-align:center">9 : 6</td>
			<td style="height:14px; text-align:center">û</td>
			<td style="height:14px; text-align:center">150</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">152</td>
			<td style="height:14px; text-align:center">97</td>
			<td style="height:14px; text-align:center">9 : 7</td>
			<td style="height:14px; text-align:center">ù</td>
			<td style="height:14px; text-align:center">151</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">153</td>
			<td style="height:14px; text-align:center">98</td>
			<td style="height:14px; text-align:center">9 : 8</td>
			<td style="height:14px; text-align:center">ÿ</td>
			<td style="height:14px; text-align:center">152</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">154</td>
			<td style="height:14px; text-align:center">99</td>
			<td style="height:14px; text-align:center">9 : 9</td>
			<td style="height:14px; text-align:center">Ö</td>
			<td style="height:14px; text-align:center">153</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">155</td>
			<td style="height:14px; text-align:center">9A</td>
			<td style="height:14px; text-align:center">9 : A</td>
			<td style="height:14px; text-align:center">Ü</td>
			<td style="height:14px; text-align:center">154</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">156</td>
			<td style="height:14px; text-align:center">9B</td>
			<td style="height:14px; text-align:center">9 : B</td>
			<td style="height:14px; text-align:center">ø</td>
			<td style="height:14px; text-align:center">155</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">157</td>
			<td style="height:14px; text-align:center">9C</td>
			<td style="height:14px; text-align:center">9 : C</td>
			<td style="height:14px; text-align:center">£</td>
			<td style="height:14px; text-align:center">156</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">158</td>
			<td style="height:14px; text-align:center">9D</td>
			<td style="height:14px; text-align:center">9 : D</td>
			<td style="height:14px; text-align:center">Ø</td>
			<td style="height:14px; text-align:center">157</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">159</td>
			<td style="height:14px; text-align:center">9E</td>
			<td style="height:14px; text-align:center">9 : E</td>
			<td style="height:14px; text-align:center">×</td>
			<td style="height:14px; text-align:center">158</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">160</td>
			<td style="height:14px; text-align:center">9F</td>
			<td style="height:14px; text-align:center">9 : F</td>
			<td style="height:14px; text-align:center">ƒ</td>
			<td style="height:14px; text-align:center">159</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">161</td>
			<td style="height:14px; text-align:center">A0</td>
			<td style="height:14px; text-align:center">A : 0</td>
			<td style="height:14px; text-align:center">á</td>
			<td style="height:14px; text-align:center">160</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">162</td>
			<td style="height:14px; text-align:center">A1</td>
			<td style="height:14px; text-align:center">A : 1</td>
			<td style="height:14px; text-align:center">í</td>
			<td style="height:14px; text-align:center">161</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">163</td>
			<td style="height:14px; text-align:center">A2</td>
			<td style="height:14px; text-align:center">A : 2</td>
			<td style="height:14px; text-align:center">ó</td>
			<td style="height:14px; text-align:center">162</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">164</td>
			<td style="height:14px; text-align:center">A3</td>
			<td style="height:14px; text-align:center">A : 3</td>
			<td style="height:14px; text-align:center">ú</td>
			<td style="height:14px; text-align:center">163</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">165</td>
			<td style="height:14px; text-align:center">A4</td>
			<td style="height:14px; text-align:center">A : 4</td>
			<td style="height:14px; text-align:center">ñ</td>
			<td style="height:14px; text-align:center">164</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">166</td>
			<td style="height:14px; text-align:center">A5</td>
			<td style="height:14px; text-align:center">A : 5</td>
			<td style="height:14px; text-align:center">Ñ</td>
			<td style="height:14px; text-align:center">165</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">167</td>
			<td style="height:14px; text-align:center">A6</td>
			<td style="height:14px; text-align:center">A : 6</td>
			<td style="height:14px; text-align:center">ª</td>
			<td style="height:14px; text-align:center">166</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">168</td>
			<td style="height:14px; text-align:center">A7</td>
			<td style="height:14px; text-align:center">A : 7</td>
			<td style="height:14px; text-align:center">º</td>
			<td style="height:14px; text-align:center">167</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">169</td>
			<td style="height:14px; text-align:center">A8</td>
			<td style="height:14px; text-align:center">A : 8</td>
			<td style="height:14px; text-align:center">¿</td>
			<td style="height:14px; text-align:center">168</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">170</td>
			<td style="height:14px; text-align:center">A9</td>
			<td style="height:14px; text-align:center">A : 9</td>
			<td style="height:14px; text-align:center">®</td>
			<td style="height:14px; text-align:center">169</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">171</td>
			<td style="height:14px; text-align:center">AA</td>
			<td style="height:14px; text-align:center">A : A</td>
			<td style="height:14px; text-align:center">¬</td>
			<td style="height:14px; text-align:center">170</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">172</td>
			<td style="height:14px; text-align:center">AB</td>
			<td style="height:14px; text-align:center">A : B</td>
			<td style="height:14px; text-align:center">½</td>
			<td style="height:14px; text-align:center">171</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">173</td>
			<td style="height:14px; text-align:center">AC</td>
			<td style="height:14px; text-align:center">A : C</td>
			<td style="height:14px; text-align:center">¼</td>
			<td style="height:14px; text-align:center">172</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">174</td>
			<td style="height:14px; text-align:center">AD</td>
			<td style="height:14px; text-align:center">A : D</td>
			<td style="height:14px; text-align:center">¡</td>
			<td style="height:14px; text-align:center">173</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">175</td>
			<td style="height:14px; text-align:center">AE</td>
			<td style="height:14px; text-align:center">A : E</td>
			<td style="height:14px; text-align:center">«</td>
			<td style="height:14px; text-align:center">174</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">176</td>
			<td style="height:14px; text-align:center">AF</td>
			<td style="height:14px; text-align:center">A : F</td>
			<td style="height:14px; text-align:center">»</td>
			<td style="height:14px; text-align:center">175</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">177</td>
			<td style="height:14px; text-align:center">B0</td>
			<td style="height:14px; text-align:center">B : 0</td>
			<td style="height:14px; text-align:center">░</td>
			<td style="height:14px; text-align:center">176</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">178</td>
			<td style="height:14px; text-align:center">B1</td>
			<td style="height:14px; text-align:center">B : 1</td>
			<td style="height:14px; text-align:center">▒</td>
			<td style="height:14px; text-align:center">177</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">179</td>
			<td style="height:14px; text-align:center">B2</td>
			<td style="height:14px; text-align:center">B : 2</td>
			<td style="height:14px; text-align:center">▓</td>
			<td style="height:14px; text-align:center">178</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">180</td>
			<td style="height:14px; text-align:center">B3</td>
			<td style="height:14px; text-align:center">B : 3</td>
			<td style="height:14px; text-align:center">│</td>
			<td style="height:14px; text-align:center">179</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">181</td>
			<td style="height:14px; text-align:center">B4</td>
			<td style="height:14px; text-align:center">B : 4</td>
			<td style="height:14px; text-align:center">┤</td>
			<td style="height:14px; text-align:center">180</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">182</td>
			<td style="height:14px; text-align:center">B5</td>
			<td style="height:14px; text-align:center">B : 5</td>
			<td style="height:14px; text-align:center">Á</td>
			<td style="height:14px; text-align:center">181</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">183</td>
			<td style="height:14px; text-align:center">B6</td>
			<td style="height:14px; text-align:center">B : 6</td>
			<td style="height:14px; text-align:center">Â</td>
			<td style="height:14px; text-align:center">182</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">184</td>
			<td style="height:14px; text-align:center">B7</td>
			<td style="height:14px; text-align:center">B : 7</td>
			<td style="height:14px; text-align:center">À</td>
			<td style="height:14px; text-align:center">183</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">185</td>
			<td style="height:14px; text-align:center">B8</td>
			<td style="height:14px; text-align:center">B : 8</td>
			<td style="height:14px; text-align:center">©</td>
			<td style="height:14px; text-align:center">184</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">186</td>
			<td style="height:14px; text-align:center">B9</td>
			<td style="height:14px; text-align:center">B : 9</td>
			<td style="height:14px; text-align:center">╣</td>
			<td style="height:14px; text-align:center">185</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">187</td>
			<td style="height:14px; text-align:center">BA</td>
			<td style="height:14px; text-align:center">B : A</td>
			<td style="height:14px; text-align:center">║</td>
			<td style="height:14px; text-align:center">186</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">188</td>
			<td style="height:14px; text-align:center">BB</td>
			<td style="height:14px; text-align:center">B : B</td>
			<td style="height:14px; text-align:center">╗</td>
			<td style="height:14px; text-align:center">187</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">189</td>
			<td style="height:14px; text-align:center">BC</td>
			<td style="height:14px; text-align:center">B : C</td>
			<td style="height:14px; text-align:center">╝</td>
			<td style="height:14px; text-align:center">188</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">190</td>
			<td style="height:14px; text-align:center">BD</td>
			<td style="height:14px; text-align:center">B : D</td>
			<td style="height:14px; text-align:center">¢</td>
			<td style="height:14px; text-align:center">189</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">191</td>
			<td style="height:14px; text-align:center">BE</td>
			<td style="height:14px; text-align:center">B : E</td>
			<td style="height:14px; text-align:center">¥</td>
			<td style="height:14px; text-align:center">190</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">192</td>
			<td style="height:14px; text-align:center">BF</td>
			<td style="height:14px; text-align:center">B : F</td>
			<td style="height:14px; text-align:center">┐</td>
			<td style="height:14px; text-align:center">191</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">193</td>
			<td style="height:14px; text-align:center">C0</td>
			<td style="height:14px; text-align:center">C : 0</td>
			<td style="height:14px; text-align:center">└</td>
			<td style="height:14px; text-align:center">192</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">194</td>
			<td style="height:14px; text-align:center">C1</td>
			<td style="height:14px; text-align:center">C : 1</td>
			<td style="height:14px; text-align:center">┴</td>
			<td style="height:14px; text-align:center">193</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">195</td>
			<td style="height:14px; text-align:center">C2</td>
			<td style="height:14px; text-align:center">C : 2</td>
			<td style="height:14px; text-align:center">┬</td>
			<td style="height:14px; text-align:center">194</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">196</td>
			<td style="height:14px; text-align:center">C3</td>
			<td style="height:14px; text-align:center">C : 3</td>
			<td style="height:14px; text-align:center">├</td>
			<td style="height:14px; text-align:center">195</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">197</td>
			<td style="height:14px; text-align:center">C4</td>
			<td style="height:14px; text-align:center">C : 4</td>
			<td style="height:14px; text-align:center">─</td>
			<td style="height:14px; text-align:center">196</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">198</td>
			<td style="height:14px; text-align:center">C5</td>
			<td style="height:14px; text-align:center">C : 5</td>
			<td style="height:14px; text-align:center">┼</td>
			<td style="height:14px; text-align:center">197</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">199</td>
			<td style="height:14px; text-align:center">C6</td>
			<td style="height:14px; text-align:center">C : 6</td>
			<td style="height:14px; text-align:center">ã</td>
			<td style="height:14px; text-align:center">198</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">200</td>
			<td style="height:14px; text-align:center">C7</td>
			<td style="height:14px; text-align:center">C : 7</td>
			<td style="height:14px; text-align:center">Ã</td>
			<td style="height:14px; text-align:center">199</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">201</td>
			<td style="height:14px; text-align:center">C8</td>
			<td style="height:14px; text-align:center">C : 8</td>
			<td style="height:14px; text-align:center">╚</td>
			<td style="height:14px; text-align:center">200</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">202</td>
			<td style="height:14px; text-align:center">C9</td>
			<td style="height:14px; text-align:center">C : 9</td>
			<td style="height:14px; text-align:center">╔</td>
			<td style="height:14px; text-align:center">201</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">203</td>
			<td style="height:14px; text-align:center">CA</td>
			<td style="height:14px; text-align:center">C : A</td>
			<td style="height:14px; text-align:center">╩</td>
			<td style="height:14px; text-align:center">202</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">204</td>
			<td style="height:14px; text-align:center">CB</td>
			<td style="height:14px; text-align:center">C : B</td>
			<td style="height:14px; text-align:center">╦</td>
			<td style="height:14px; text-align:center">203</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">205</td>
			<td style="height:14px; text-align:center">CC</td>
			<td style="height:14px; text-align:center">C : C</td>
			<td style="height:14px; text-align:center">╠</td>
			<td style="height:14px; text-align:center">204</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">206</td>
			<td style="height:14px; text-align:center">CD</td>
			<td style="height:14px; text-align:center">C : D</td>
			<td style="height:14px; text-align:center">═</td>
			<td style="height:14px; text-align:center">205</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">207</td>
			<td style="height:14px; text-align:center">CE</td>
			<td style="height:14px; text-align:center">C : E</td>
			<td style="height:14px; text-align:center">╬</td>
			<td style="height:14px; text-align:center">206</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">208</td>
			<td style="height:14px; text-align:center">CF</td>
			<td style="height:14px; text-align:center">C : F</td>
			<td style="height:14px; text-align:center">¤</td>
			<td style="height:14px; text-align:center">207</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">209</td>
			<td style="height:14px; text-align:center">D0</td>
			<td style="height:14px; text-align:center">D : 0</td>
			<td style="height:14px; text-align:center">ð</td>
			<td style="height:14px; text-align:center">208</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">210</td>
			<td style="height:14px; text-align:center">D1</td>
			<td style="height:14px; text-align:center">D : 1</td>
			<td style="height:14px; text-align:center">Ð</td>
			<td style="height:14px; text-align:center">209</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">211</td>
			<td style="height:14px; text-align:center">D2</td>
			<td style="height:14px; text-align:center">D : 2</td>
			<td style="height:14px; text-align:center">Ê</td>
			<td style="height:14px; text-align:center">210</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">212</td>
			<td style="height:14px; text-align:center">D3</td>
			<td style="height:14px; text-align:center">D : 3</td>
			<td style="height:14px; text-align:center">Ë</td>
			<td style="height:14px; text-align:center">211</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">213</td>
			<td style="height:14px; text-align:center">D4</td>
			<td style="height:14px; text-align:center">D : 4</td>
			<td style="height:14px; text-align:center">È</td>
			<td style="height:14px; text-align:center">212</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">214</td>
			<td style="height:14px; text-align:center">D5</td>
			<td style="height:14px; text-align:center">D : 5</td>
			<td style="height:14px; text-align:center">ı</td>
			<td style="height:14px; text-align:center">213</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">215</td>
			<td style="height:14px; text-align:center">D6</td>
			<td style="height:14px; text-align:center">D : 6</td>
			<td style="height:14px; text-align:center">Í</td>
			<td style="height:14px; text-align:center">214</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">216</td>
			<td style="height:14px; text-align:center">D7</td>
			<td style="height:14px; text-align:center">D : 7</td>
			<td style="height:14px; text-align:center">Î</td>
			<td style="height:14px; text-align:center">215</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">217</td>
			<td style="height:14px; text-align:center">D8</td>
			<td style="height:14px; text-align:center">D : 8</td>
			<td style="height:14px; text-align:center">Ï</td>
			<td style="height:14px; text-align:center">216</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">218</td>
			<td style="height:14px; text-align:center">D9</td>
			<td style="height:14px; text-align:center">D : 9</td>
			<td style="height:14px; text-align:center">┘</td>
			<td style="height:14px; text-align:center">217</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">219</td>
			<td style="height:14px; text-align:center">DA</td>
			<td style="height:14px; text-align:center">D : A</td>
			<td style="height:14px; text-align:center">┌</td>
			<td style="height:14px; text-align:center">218</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">220</td>
			<td style="height:14px; text-align:center">DB</td>
			<td style="height:14px; text-align:center">D : B</td>
			<td style="height:14px; text-align:center">█</td>
			<td style="height:14px; text-align:center">219</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">221</td>
			<td style="height:14px; text-align:center">DC</td>
			<td style="height:14px; text-align:center">D : C</td>
			<td style="height:14px; text-align:center">▄</td>
			<td style="height:14px; text-align:center">220</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">222</td>
			<td style="height:14px; text-align:center">DD</td>
			<td style="height:14px; text-align:center">D : D</td>
			<td style="height:14px; text-align:center">¦</td>
			<td style="height:14px; text-align:center">221</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">223</td>
			<td style="height:14px; text-align:center">DE</td>
			<td style="height:14px; text-align:center">D : E</td>
			<td style="height:14px; text-align:center">Ì</td>
			<td style="height:14px; text-align:center">222</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">224</td>
			<td style="height:14px; text-align:center">DF</td>
			<td style="height:14px; text-align:center">D : F</td>
			<td style="height:14px; text-align:center">▀</td>
			<td style="height:14px; text-align:center">223</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">225</td>
			<td style="height:14px; text-align:center">E0</td>
			<td style="height:14px; text-align:center">E : 0</td>
			<td style="height:14px; text-align:center">Ó</td>
			<td style="height:14px; text-align:center">224</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">226</td>
			<td style="height:14px; text-align:center">E1</td>
			<td style="height:14px; text-align:center">E : 1</td>
			<td style="height:14px; text-align:center">ß</td>
			<td style="height:14px; text-align:center">225</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">227</td>
			<td style="height:14px; text-align:center">E2</td>
			<td style="height:14px; text-align:center">E : 2</td>
			<td style="height:14px; text-align:center">Ô</td>
			<td style="height:14px; text-align:center">226</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">228</td>
			<td style="height:14px; text-align:center">E3</td>
			<td style="height:14px; text-align:center">E : 3</td>
			<td style="height:14px; text-align:center">Ò</td>
			<td style="height:14px; text-align:center">227</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">229</td>
			<td style="height:14px; text-align:center">E4</td>
			<td style="height:14px; text-align:center">E : 4</td>
			<td style="height:14px; text-align:center">õ</td>
			<td style="height:14px; text-align:center">228</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">230</td>
			<td style="height:14px; text-align:center">E5</td>
			<td style="height:14px; text-align:center">E : 5</td>
			<td style="height:14px; text-align:center">Õ</td>
			<td style="height:14px; text-align:center">229</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">231</td>
			<td style="height:14px; text-align:center">E6</td>
			<td style="height:14px; text-align:center">E : 6</td>
			<td style="height:14px; text-align:center">µ</td>
			<td style="height:14px; text-align:center">230</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">232</td>
			<td style="height:14px; text-align:center">E7</td>
			<td style="height:14px; text-align:center">E : 7</td>
			<td style="height:14px; text-align:center">þ</td>
			<td style="height:14px; text-align:center">231</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">233</td>
			<td style="height:14px; text-align:center">E8</td>
			<td style="height:14px; text-align:center">E : 8</td>
			<td style="height:14px; text-align:center">Þ</td>
			<td style="height:14px; text-align:center">232</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">234</td>
			<td style="height:14px; text-align:center">E9</td>
			<td style="height:14px; text-align:center">E : 9</td>
			<td style="height:14px; text-align:center">Ú</td>
			<td style="height:14px; text-align:center">233</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">235</td>
			<td style="height:14px; text-align:center">EA</td>
			<td style="height:14px; text-align:center">E : A</td>
			<td style="height:14px; text-align:center">Û</td>
			<td style="height:14px; text-align:center">234</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">236</td>
			<td style="height:14px; text-align:center">EB</td>
			<td style="height:14px; text-align:center">E : B</td>
			<td style="height:14px; text-align:center">Ù</td>
			<td style="height:14px; text-align:center">235</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">237</td>
			<td style="height:14px; text-align:center">EC</td>
			<td style="height:14px; text-align:center">E : C</td>
			<td style="height:14px; text-align:center">ý</td>
			<td style="height:14px; text-align:center">236</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">238</td>
			<td style="height:14px; text-align:center">ED</td>
			<td style="height:14px; text-align:center">E : D</td>
			<td style="height:14px; text-align:center">Ý</td>
			<td style="height:14px; text-align:center">237</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">239</td>
			<td style="height:14px; text-align:center">EE</td>
			<td style="height:14px; text-align:center">E : E</td>
			<td style="height:14px; text-align:center">¯</td>
			<td style="height:14px; text-align:center">238</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">240</td>
			<td style="height:14px; text-align:center">EF</td>
			<td style="height:14px; text-align:center">E : F</td>
			<td style="height:14px; text-align:center">´</td>
			<td style="height:14px; text-align:center">239</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">241</td>
			<td style="height:14px; text-align:center">F0</td>
			<td style="height:14px; text-align:center">F : 0</td>
			<td style="height:14px; text-align:center">­­</td>
			<td style="height:14px; text-align:center">240</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">242</td>
			<td style="height:14px; text-align:center">F1</td>
			<td style="height:14px; text-align:center">F : 1</td>
			<td style="height:14px; text-align:center">±</td>
			<td style="height:14px; text-align:center">241</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">243</td>
			<td style="height:14px; text-align:center">F2</td>
			<td style="height:14px; text-align:center">F : 2</td>
			<td style="height:14px; text-align:center">‗</td>
			<td style="height:14px; text-align:center">242</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">244</td>
			<td style="height:14px; text-align:center">F3</td>
			<td style="height:14px; text-align:center">F : 3</td>
			<td style="height:14px; text-align:center">¾</td>
			<td style="height:14px; text-align:center">243</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">245</td>
			<td style="height:14px; text-align:center">F4</td>
			<td style="height:14px; text-align:center">F : 4</td>
			<td style="height:14px; text-align:center">&nbsp;</td>
			<td style="height:14px; text-align:center">244</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">246</td>
			<td style="height:14px; text-align:center">F5</td>
			<td style="height:14px; text-align:center">F : 5</td>
			<td style="height:14px; text-align:center">§</td>
			<td style="height:14px; text-align:center">245</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">247</td>
			<td style="height:14px; text-align:center">F6</td>
			<td style="height:14px; text-align:center">F : 6</td>
			<td style="height:14px; text-align:center">÷</td>
			<td style="height:14px; text-align:center">246</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">248</td>
			<td style="height:14px; text-align:center">F7</td>
			<td style="height:14px; text-align:center">F : 7</td>
			<td style="height:14px; text-align:center">¸</td>
			<td style="height:14px; text-align:center">247</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">249</td>
			<td style="height:14px; text-align:center">F8</td>
			<td style="height:14px; text-align:center">F : 8</td>
			<td style="height:14px; text-align:center">°</td>
			<td style="height:14px; text-align:center">248</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">250</td>
			<td style="height:14px; text-align:center">F9</td>
			<td style="height:14px; text-align:center">F : 9</td>
			<td style="height:14px; text-align:center">¨</td>
			<td style="height:14px; text-align:center">249</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">251</td>
			<td style="height:14px; text-align:center">FA</td>
			<td style="height:14px; text-align:center">F : A</td>
			<td style="height:14px; text-align:center">·</td>
			<td style="height:14px; text-align:center">250</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">252</td>
			<td style="height:14px; text-align:center">FB</td>
			<td style="height:14px; text-align:center">F : B</td>
			<td style="height:14px; text-align:center">¹</td>
			<td style="height:14px; text-align:center">251</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">253</td>
			<td style="height:14px; text-align:center">FC</td>
			<td style="height:14px; text-align:center">F : C</td>
			<td style="height:14px; text-align:center">³</td>
			<td style="height:14px; text-align:center">252</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">254</td>
			<td style="height:14px; text-align:center">FD</td>
			<td style="height:14px; text-align:center">F : D</td>
			<td style="height:14px; text-align:center">²</td>
			<td style="height:14px; text-align:center">253</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">255</td>
			<td style="height:14px; text-align:center">FE</td>
			<td style="height:14px; text-align:center">F : E</td>
			<td style="height:14px; text-align:center">■</td>
			<td style="height:14px; text-align:center">254</td>
		</tr>
		<tr>
			<td style="height:14px; text-align:center">256</td>
			<td style="height:14px; text-align:center">FF</td>
			<td style="height:14px; text-align:center">F : F</td>
			<td style="height:14px; text-align:center">&nbsp;</td>
			<td style="height:14px; text-align:center">255</td>
		</tr>
	</tbody>
</table>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ecf72bcf-b2c0-4840-90cd-7e16e0c2af85">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/remote_control_telnet/en/3.9'; " title="Go to previous page 'Telnet remote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/timecode/en/3.9';" title="Go to next page 'Timecode'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55021/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

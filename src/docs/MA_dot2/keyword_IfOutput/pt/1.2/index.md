
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f357b6dd-dff5-4759-b5d7-aa3ae53ed56d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_if/pt/1.2'; " title="Go to previous page 'If'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_invert/pt/1.2';" title="Go to next page 'Invert'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f357b6dd-dff5-4759-b5d7-aa3ae53ed56d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7946/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando IfOutput</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descrição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxe</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Exemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Exemplo 3</a>
						</li>
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando IfOutput.</p>

<p>Para ir para o comando IfOutput, pressione​ <span class="hardkey">If</span> (= IfOutput) no&nbsp;console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando IfOutput você pode selecionar todos os fixture&nbsp;na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixture</a>&nbsp;com uma atual</p>

<ul>
	<li>saída de dimmer&nbsp;acima de zero</li>
	<li>saída de dimmer&nbsp;em uma gama</li>
	<li>saída de preset</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Selecionar todos os fixtures&nbsp;com uma atual saída de&nbsp;dimmer&nbsp;acima de zero</p>

<div class="cl_input">IfOutput</div>

<p>2. Selecionar todos os&nbsp;fixtures​&nbsp;com uma atual saída de dimmer entre 50 e 75.</p>

<div class="cl_input">IfOutput At 50 Thru 75</div>

<p>3. Selecionar todos os&nbsp;fixtures​&nbsp;com uma atual saída​ de preset de cor ciano.</p>

<div class="cl_input">IfOutput Preset 4.2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá selecionar todos os fixtures com uma atual saída de&nbsp;dimmer acima de zero.</p>

<p>Pressione&nbsp;<span class="hardkey">If</span> (= IfOutput) <span class="hardkey">Please</span>.</p>

<p>Todos os&nbsp;fixtures&nbsp;com uma atual saída de dimmer estão selecionados na vista de fixtures.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá selecionar todos os&nbsp;fixtures​&nbsp;com uma atual saída de dimmer entre 50 e 75.</p>

<p>Pressione&nbsp;<span class="hardkey">If</span> (= IfOutput) <span class="hardkey">At</span> <span class="hardkey">50</span> <span class="hardkey">Thru</span> <span class="hardkey">75</span> <span class="hardkey">Please</span>.</p>

<p>Todos os&nbsp;fixtures​&nbsp;com uma atual saída de&nbsp;dimmer&nbsp;entre 50 e 75 estão selecionados.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá selecionar todos os&nbsp;fixtures​&nbsp;com uma atual saída​ de preset de cor "ciano" (4.2) para dar a eles uma nova cor de preset "laranja"​.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">If</span> (= IfOutput) e toque no preset&nbsp;"Ciano" no agrupamento de preset&nbsp;de cor.</p>

<p>b) Pressione&nbsp;<span class="hardkey">If</span> (= IfOutput) <span class="hardkey">Preset</span> <span class="hardkey">4</span> (= preset pool color) <span class="hardkey">.</span> <span class="hardkey">2</span> (= second preset in the color preset pool) <span class="hardkey">Please</span>.</p>

<p>Todos os&nbsp;fixtures​&nbsp;com uma atual saída​ de preset de cor "ciano" (4.2) estão selecionados e agora é fácil dar a eles outra cor de preset.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/8a9b3abb-3119-443d-a55e-36b89b0bf73c">Tecla If</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Fixtures</a></li>
</ul>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f357b6dd-dff5-4759-b5d7-aa3ae53ed56d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_if/pt/1.2'; " title="Go to previous page 'If'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_invert/pt/1.2';" title="Go to next page 'Invert'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7946/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
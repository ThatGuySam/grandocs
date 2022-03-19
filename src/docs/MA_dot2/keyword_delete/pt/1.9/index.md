
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8cc291a9-2753-42f0-9ead-dc12613d80b0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/pt/1.9'; " title="Go to previous page 'Delay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_dmx/pt/1.9';" title="Go to next page 'Dmx'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18000/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Comando Delete</h1>

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
						<li>
							<a href="#toc_header_anchor_6">Exemplo 4</a>
						</li>
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando delete.</p>

<p>Para ir para o comando delete, pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;no&nbsp;console.</p>

<p>Delete está agora na&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando delete você pode:</p>

<ul>
	<li>deletar&nbsp;cues de uma lista de cue</li>
	<li>deletar objetos do agrupamento (por exemplo, preset, grupos) do agrupamento respectivo (por exemplo, posição&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de tipo de preset</a>, <a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">agrupamento de grupos</a>)</li>
	<li>despatchear&nbsp;fixtures&nbsp;do universo&nbsp;DMX</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Deletar um cue de uma lista de cue.</p>

<div class="cl_input">Delete Cue 1 Executor 1</div>

<p>2. Deletar um objeto de um agrupamento respectivo.</p>

<div class="cl_input">Delete Preset 1.1</div>

<p>3. Despatchear&nbsp;um&nbsp;fixture&nbsp;de um universo&nbsp;DMX.</p>

<div class="cl_input">Delete Fixture 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá deletar o&nbsp;cue 1 do executor principal.</p>

<p>Existem três maneiras diferentes de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1)&nbsp;<span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) e depois pressione o grande&nbsp;<span class="hardkey">Go</span>&nbsp;no&nbsp;console.</p>

<p>Se uma lista de cue está armazenada no executor principal, o console lhe pedirá para&nbsp;<a href="/Topic/17e6e949-0ef5-43b4-b7f0-94a4270fc763">escolher o método de Delete</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá deletar o&nbsp;cue&nbsp;1 do executor 1.</p>

<p>Existem três maneiras diferentes de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) e toque no&nbsp;<span class="softkey">executor 1</span>&nbsp;na&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) e pressione o botão executor respectivo &nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;no&nbsp;console.</p>

<p>Se uma lista de&nbsp;cue&nbsp;está armazenada no executor 1, o console lhe pedirá para​ <a href="/Topic/17e6e949-0ef5-43b4-b7f0-94a4270fc763">escolher o método de Delete</a>.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá deletar o preset de dimmer&nbsp;1 no agrupamento de presets de dimmer.</p>

<p>1. Abra o&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de presets de dimmer</a>.</p>

<p>Existem duas maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Preset</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;e toque no&nbsp;preset 1 no agrupamento de presets de dimmer.</p>

<p>Preset 1 é deletado do agrupamento de&nbsp;presets&nbsp;de&nbsp;dimmer.</p>

<p>Se o preset é usado em um cue, o console pede para confirmar o processo.<br>
A conexão do preset&nbsp; e do cue será perdida e os valores do preset serão armazenados diretamente nos cues.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você vai despatchear&nbsp;o fixture 1 do universo de&nbsp;DMX.</p>

<p>Pressione&nbsp;<span class="hardkey">Delete</span>&nbsp;e toque no&nbsp;fixture 1 na vista de fixtures.</p>

<p>O console pede para confirmar o processo de despatchear.</p>

<p>Toque&nbsp;<span class="softkey">OK</span>.</p>

<p>Fixture 1 está despatcheado.</p>

<div class="tip">Verifique os fixtures patcheados no&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>.</div>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8cc291a9-2753-42f0-9ead-dc12613d80b0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/pt/1.9'; " title="Go to previous page 'Delay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_dmx/pt/1.9';" title="Go to next page 'Dmx'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18000/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
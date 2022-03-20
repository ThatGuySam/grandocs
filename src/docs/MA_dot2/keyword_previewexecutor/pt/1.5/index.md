---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_previewexecutor/pt/1.5'
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
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ccf585a5-a42f-4c45-8881-7ed203817ded">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_presettype/pt/1.5'; " title="Go to previous page 'PresetType'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_rate/pt/1.5';" title="Go to next page 'Rate '">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ccf585a5-a42f-4c45-8881-7ed203817ded">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12667/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Comando Preview</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando preview.</p>

<p>Para ir para o comando preview, pressione&nbsp;<span class="hardkey">Prvw</span>&nbsp;no&nbsp;console.</p>

<p>Preview&nbsp;está na&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando Preview&nbsp;você obtém&nbsp;uma pré-visualização da saída programada na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a>&nbsp;e na dot2 3D, sem ter uma saída real de DMX.</p>

<p>Você pode usar o comando Preview para pré-visualizar</p>

<ul>
	<li>executores</li>
	<li>cues</li>
</ul>

<div class="tip"><strong>Dica:</strong><br>
o console está no modo&nbsp;preview , a tecla&nbsp;<span class="hardkey">Prvw</span>&nbsp;estará piscando e a barra de título da folha de fixtures muda para vermelho.</div>

<div class="tip"><strong>Dica:</strong><br>
Para sair do modo Preview, pressione&nbsp;<span class="hardkey">Esc</span> ou&nbsp;<span class="hardkey">Off</span> <span class="hardkey">Prvw</span>&nbsp;no&nbsp;console.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Obter uma pré-visualização do&nbsp;executor 102.</p>

<div class="cl_input">Preview ExecButton1 1.102</div>

<p>2. Obter uma pré-visualização do cue 1 no executor principal.</p>

<div class="cl_input">Preview Cue 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você terá uma prévia do executor 102 programado sem ter uma saída real de&nbsp;DMX.</p>

<p>Existem cinco maneiras de fazer isso</p>

<p>a) Pressione&nbsp;<span class="hardkey">Prvw</span>&nbsp;e toque no&nbsp;executor 102 na&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">janela da barra do executor</a>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Prvw</span> e toque no&nbsp;executor 102 na​ <a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">vista do agrupamento do executor</a>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Prvw</span> e toque no&nbsp;executor 102 na​ <a href="/Topic/1e6e8a74-a73d-48b7-bd99-458248dc9a87">vista de playbacks virtual</a>.</p>

<p>d) Pressione&nbsp;<span class="hardkey">Prvw</span>&nbsp;e pressione o &nbsp;<span class="hardkey">botão executor</span>&nbsp;atual do executor 102 no console.</p>

<p>e) Pressione&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>A prévia do executor 102 está visível na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a> sem ter uma saída de&nbsp;DMX.</p>

<div class="tip"><strong>Dica:</strong><br>
Para se ter uma visão rápida no modo preview dos diferentes executores ao mesmo tempo, pressione e segure a tecla <span class="hardkey">Prvw</span> e pressione os diferentes <span class="hardkey">botões executores</span> no console.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você terá uma prévia do cue 1 no executor principal sem ter uma saída atual de DMX​.</p>

<p><strong>Exigência:</strong>&nbsp;Que o executor principal esteja desligado.</p>

<p>Há três maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Prvw</span>&nbsp;e toque no cue 1 na&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de cues</a>&nbsp;do executor principal.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Please</span>.</p>

<p>A prévia do cue 1 no executor principal está visível na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a> sem ter uma saída real de DMX.​</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você percorrerá pela lista de cue do executor principal com tempo de cue e sem ter uma saída atual de DMX.</p>

<p>1. Abra o executor principal no modo preview, pressione​ <span class="hardkey">Prvw</span> <span class="hardkey">Please</span>.<br>
Cue&nbsp;1&nbsp;no executor principal está em&nbsp;preview.</p>

<p>2. Pressione a pequena​ <span class="hardkey">Go+</span> (=Go) <span class="hardkey">Prvw</span>.<br>
Cue&nbsp;2&nbsp;no executor principal está em&nbsp;preview com tempo de cue, por exemplo: fade.</p>

<div class="tip"><strong>Dica:</strong><br>
Para voltar do cue 2 para o cue 1 no modo preview, use a pequen​a <span class="hardkey">Go-</span> e <span class="hardkey">Prvw</span>&nbsp;no&nbsp;console.</div>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você percorrerá pela lista de&nbsp;cue&nbsp;armazenada no executor 2 sem ter uma saída atual de&nbsp;DMX.</p>

<p>1. Abra o&nbsp;executor 2&nbsp;no modo&nbsp;preview,&nbsp;pressione​ <span class="hardkey">Prvw</span> e o botão executor do executor 2​ <img alt="go" src="/Media/Mlg/go_1.png">.<br>
Cue&nbsp;1&nbsp;do&nbsp;Executor 2 está em&nbsp;preview.</p>

<p>2. Pressione&nbsp;<span class="hardkey">Prvw</span>&nbsp;e depois&nbsp;<span class="hardkey">Next</span>.<br>
Cue&nbsp;2&nbsp;do&nbsp;Executor 2 está em preview.</p>

<p>3. Repita o segundo passo até que você atinja o final da lista de cue.</p>

<div class="tip"><strong>Dica:</strong><br>
Para percorrer de volta pela lista de cue,&nbsp;pressione​ <span class="hardkey">Prvw</span> <span class="hardkey">Prev</span>.</div>


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
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ccf585a5-a42f-4c45-8881-7ed203817ded">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_presettype/pt/1.5'; " title="Go to previous page 'PresetType'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_rate/pt/1.5';" title="Go to next page 'Rate '">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12667/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

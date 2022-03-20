---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_move/pt/1.1'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/pt/1.1'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/pt/1.1';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/210421fb-24b5-4a20-a719-c2ca85b8f002">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7918/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Move</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando move.</p>

<p>Para ir para o comando move, pressione&nbsp;<span class="hardkey">Move</span>&nbsp;no&nbsp;console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando Move você pode mover objetos, como por exemplo:</p>

<ul>
	<li>grupos para outra posição no&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">agrupamento de grupos</a></li>
	<li>presets para outra posição no&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de presets</a></li>
	<li>executores para outra posição no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;ou para outro&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">agrupamento de página</a></li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Mover um&nbsp;grupo para outra posição</p>

<div class="cl_input">Move Group 1 At 3</div>

<p>2. Mover um&nbsp;preset para outra posição</p>

<div class="cl_input">Move Preset 1 At 3</div>

<p>3. Mover um&nbsp;executor para outra posição na mesma página</p>

<div class="cl_input">Move Executor 1 At 3</div>

<p>4. Mover&nbsp;um&nbsp;executor para outra posição em outra página</p>

<div class="cl_input">Move Executor 1.1 At 2.1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá mover o grupo 50 para 1.</p>

<p>Há duas maneiras de fazer isso.</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Group</span> <span class="hardkey">50</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">grupo 50</span>&nbsp;no&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">agrupamento de grupos</a>, e então toque na <span class="softkey">&nbsp;pilha de objeto 1</span>.</p>

<p>Grupo 50 foi movido e é agora o grupo 1.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que moverá o tipo de preset de cor 2 para 5.</p>

<div class="tip">Se você mover um tipo de preset que está sendo usado em um cue, a atribuição no&nbsp;cue&nbsp;será redirecionada automaticamente para o novo número do tipo de preset.</div>

<p>1. Abra o&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de presets de cor</a>.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Preset</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque no&nbsp;<span class="softkey">preset 2</span>&nbsp;de cor no agrupamento de de preset de cor e toque no&nbsp;<span class="softkey">pilha de objeto 5</span>.</p>

<p>O preset de cor 2 foi movido e é agora o preset de cor 5.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá mover o executor da posição 1 para a posição 6.</p>

<p>Há três maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;e então toque em&nbsp;<span class="softkey">executor 6</span>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Move</span>, pressione o botão executor&nbsp;1 <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;no&nbsp;console e então pressione o botão executor 6&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;no console.</p>

<p>O executor foi movido da posição 1 para a posição 6.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você irá mover um executor da página 1 para a página 2.</p>

<p>Há três maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> (=Page 1) <span class="hardkey">.</span> <span class="hardkey">1</span> (=Executor 1) <span class="hardkey">At</span> <span class="hardkey">Exec</span> <span class="hardkey">2</span> (=Page 2) <span class="hardkey">.</span> <span class="hardkey">1</span> (Executor 1) <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na página&nbsp;1 no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;e toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na página&nbsp;2.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na página&nbsp;1 na&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">vista da barra do executor</a>&nbsp;e toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na página 2.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/f12e11a4-5376-4abb-b023-09c75a033a92">Tecla Move</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Agrupamento de Grupos</a></li>
	<li><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Agrupamento de Presets</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Agrupamento de Executores</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista da Barra do Executor</a></li>
</ul>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/pt/1.1'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/pt/1.1';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7918/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

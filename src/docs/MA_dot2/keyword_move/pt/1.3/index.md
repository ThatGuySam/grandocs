---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_move/pt/1.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/pt/1.3'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/pt/1.3';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/210421fb-24b5-4a20-a719-c2ca85b8f002">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17573/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Move</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descri????o</a>
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
						<li>
							<a href="#toc_header_anchor_7">Exemplo 5</a>
						</li>
				</ul>
			</div>

		<p>Esta p??gina descreve a sintaxe e como usar o comando move.</p>

<p>Para ir para o comando move, pressione&nbsp;<span class="hardkey">Move</span>&nbsp;no&nbsp;console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descri????o</h2>

<p>Com o comando Move voc?? pode mover objetos, como por exemplo:</p>

<ul>
	<li>Grupos para outra posi????o no&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">agrupamento de grupos</a></li>
	<li>Presets para outra posi????o no&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de presets</a></li>
	<li>Executores para outra posi????o no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;ou para outro&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">agrupamento de p??gina</a></li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Mover um&nbsp;grupo para outra posi????o</p>

<div class="cl_input">Move Group 1 At 3</div>

<p>2. Mover um&nbsp;preset para outra posi????o</p>

<div class="cl_input">Move Preset 1 At 3</div>

<p>3. Mover um&nbsp;executor para outra posi????o na mesma p??gina</p>

<div class="cl_input">Move Executor 1 At 3</div>

<p>4. Mover&nbsp;um&nbsp;executor para outra posi????o em outra p??gina</p>

<div class="cl_input">Move Executor 1.1 At 2.1</div>

<p>5. Mover o&nbsp;executor principal&nbsp;para o&nbsp;executor&nbsp;6 at page 1.</p>

<div class="cl_input">Move Executor 0.1.1 at 1.6</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que voc?? ir?? mover o grupo 50 para 1.</p>

<p>H?? duas maneiras de fazer isso.</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Group</span> <span class="hardkey">50</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">grupo 50</span>&nbsp;no&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">agrupamento de grupos</a>, e ent??o toque na <span class="softkey">&nbsp;pilha de objeto 1</span>.</p>

<p>Grupo 50 foi movido e ?? agora o grupo 1.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que mover?? o tipo de preset de cor 2 para 5.</p>

<div class="tip"><strong>Dica:</strong><br>
Se voc?? mover um tipo de preset que est?? sendo usado em um cue, a atribui????o no&nbsp;cue&nbsp;ser?? redirecionada automaticamente para o novo n??mero do tipo de preset.</div>

<p>1. Abra o&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">agrupamento de presets de cor</a>.</p>

<p>H?? duas maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Preset</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque no&nbsp;<span class="softkey">preset 2</span>&nbsp;de cor no agrupamento de de preset de cor e toque no&nbsp;<span class="softkey">pilha de objeto 5</span>.</p>

<p>O preset de cor 2 foi movido e ?? agora o preset de cor 5.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que voc?? ir?? mover o executor da posi????o 1 para a posi????o 6.</p>

<p>H?? tr??s maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;e ent??o toque em&nbsp;<span class="softkey">executor 6</span>.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Move</span>, pressione o bot??o executor&nbsp;1 <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;no&nbsp;console e ent??o pressione o bot??o executor 6&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;no console.</p>

<p>O executor foi movido da posi????o 1 para a posi????o 6.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que voc?? ir?? mover um executor da p??gina 1 para a p??gina 2.</p>

<p>H?? tr??s maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> (=Page 1) <span class="hardkey">.</span> <span class="hardkey">1</span> (=Executor 1) <span class="hardkey">At</span> <span class="hardkey">Exec</span> <span class="hardkey">2</span> (=Page 2) <span class="hardkey">.</span> <span class="hardkey">1</span> (=Executor 1) <span class="hardkey">Please</span>.</p>

<p>b) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na p??gina&nbsp;1 no&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">agrupamento de executores</a>&nbsp;e toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na p??gina&nbsp;2.</p>

<p>c) Pressione&nbsp;<span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na p??gina&nbsp;1 na&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">vista da barra do executor</a>&nbsp;e toque em&nbsp;<span class="softkey">executor 1</span>&nbsp;na p??gina 2.</p>

<p>O Executor 1 ?? movido da p??gina&nbsp;1&nbsp;para a p??gina&nbsp;2.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Exemplo 5</h2>

<p>Vamos supor que voc?? ir??&nbsp;mover o executor principal ao executor 6 na p??gina 1.</p>

<p>H?? tr??s maneiras de se fazer isso:</p>

<p>a) Pressione <span class="hardkey">Move</span> em seguida, pressione um dos grandes bot??es&nbsp;dos executores principais. Por exemplo, o grande Pause e depois pressione o bot??o executor 6&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>b) Pressione <span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">0</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">1</span> (= Executor Principal] <span class="hardkey">At</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> (=Page 1) <span class="hardkey">.</span> <span class="hardkey">6</span> (=Executor 6) <span class="hardkey">Please</span>.</p>

<p>c) Pressione <span class="hardkey">Move</span>, toque em&nbsp;<span class="softkey">executor principal</span>&nbsp;na <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>&nbsp;e toque em&nbsp;<span class="softkey">executor 6</span>&nbsp;na p??gina&nbsp;1.</p>

<p><br>
O executor principal ?? movido para o&nbsp;executor 6 na p??gina 1.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/pt/1.3'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/pt/1.3';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17573/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

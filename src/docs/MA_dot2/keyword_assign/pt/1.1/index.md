
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08034c-3e2a-47b3-a353-50b018990c44">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_plus/pt/1.1'; " title="Go to previous page '+ [Plus]'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/pt/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ec08034c-3e2a-47b3-a353-50b018990c44">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7938/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Assign</h1>

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
							<a href="#toc_header_anchor_3">Example 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Exemplo 3</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Example 4</a>
						</li>
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando <strong>Assign</strong>&nbsp;(Atribuir).</p>

<p>Para ir ao comando Assign, pressione e mantenha as teclas &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e&nbsp;<span class="hardkey">Label</span>.</p>

<p>Agora, Assign está na linha de comando.</p>

<div class="cl_input">Assign</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando Assign (Atribuir), você pode criar assignments (atribuições) entre</p>

<ul>
	<li>um&nbsp;fixture e um endereço de&nbsp;DMX</li>
	<li>uma função e um botão de executor</li>
	<li>um tempo de fade e os&nbsp;cues de um executor</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Assign (Atribuir) um&nbsp;fixture para um endereço DMX.</p>

<div class="cl_input">Assign Fixture 21 DMX 2.1</div>

<p>2. Assign&nbsp;(Atribuir) uma função para um botão executor.</p>

<div class="cl_input">Assign Flash</div>

<p>3. Assign&nbsp;(Atribuir) tempo de fade para cues de um executor</p>

<div class="cl_input">Assign Fade 10 Cue 2 Exec 1</div>

<p>4. Assign&nbsp;(Atribuir) tempo de fade para o cue atual do executor principal.</p>

<div class="cl_input">Assign Fade 10</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Example 1</h2>

<p>Vamos supor que você irá patchear o ID de fixture 21 para o endereço de DMX 2.1.</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">1</span> <span class="hardkey">DMX</span> <span class="hardkey">2</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>O ID de fixture 21 está patcheado para o endereço de DMX 2.1.</p>

<div class="tip">Verifique o patch&nbsp;correto em&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a> .</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor, você irá assign (atribuir) uma função a um executor.</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Label</span>&nbsp;(=Assign)&nbsp;<span class="hardkey">Flash</span>&nbsp;e o botão executor respectivo, por&nbsp;exempo&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>A função flash é atribuída ao botão executor respectivo.</p>

<div class="tip">Verifique a função assigned em&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Alterar Funções da vista dos Botões Executores </a>.</div>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá assign (atribuir) um tempo de fade de 10 para o cue 1 do executor 5.</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Label</span>&nbsp;(=Assign)&nbsp;<span class="hardkey">Time</span>&nbsp;(=Fade)&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Agora, o tempo de fade de 10 é atribuído ao cue 1 do executor 5.</p>

<div class="tip">Verifique o tempo de fade atribuído na respectiva​ <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista de Cues</a>.</div>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Example 4</h2>

<p>Vamos supor que você irá&nbsp;assign&nbsp;(atribuir) o tempo de fade 5 ao&nbsp;cue&nbsp;atual do executor principal.</p>

<div class="important">Certifique-se de que o cue atual esteja em execução.<br>
Se o executor principal é desligado, o tempo de fade será atribuído a cada cue&nbsp;da lista de cue.</div>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Label</span> (=Assign) <span class="hardkey">Time</span> (=Fade) <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>O tempo de fade 5 é atribuído ao cue atual do executor principal.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/6bc37c47-2874-4a54-9cfa-b6f825b40b69">Tecla Label</a></li>
	<li><a href="/Topic/96b21ed2-804c-42e6-9765-5f101405945d">Comando Fade</a></li>
	<li><a href="/Topic/fc47e5b3-2597-4b3f-ad85-c1690440e399">Tecla Time</a></li>
	<li><a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch </a></li>
	<li><a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Alterar Funções da vista dos Botões Executores </a></li>
	<li><a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista de Cues</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08034c-3e2a-47b3-a353-50b018990c44">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_plus/pt/1.1'; " title="Go to previous page '+ [Plus]'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/pt/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7938/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
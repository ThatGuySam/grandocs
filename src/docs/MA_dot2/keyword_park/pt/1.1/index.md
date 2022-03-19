
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4f64e293-f606-4365-8813-71c3f60ffc9b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_page/pt/1.1'; " title="Go to previous page 'Page'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_pause/pt/1.1';" title="Go to next page 'Pause'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/4f64e293-f606-4365-8813-71c3f60ffc9b">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7917/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Park</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando Park.</p>

<p>Para ir para o comando Park, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) no&nbsp;console.</p>

<p>Park está na&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando&nbsp;Park você pode parkear:</p>

<ul>
	<li>o valor atual de um&nbsp;fixture</li>
	<li>o valor específico de um&nbsp;fixture</li>
	<li>os valores do tipo de preset&nbsp;de um seleção de fixtures</li>
	<li>um canal de DMX&nbsp;específico</li>
</ul>

<div class="tip">Canais de DMX parkeados&nbsp;são exibidos com um plano de fundo azul na&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">vista de DMX</a>.</div>

<div class="tip">Se você quiser desparkear canais de DMX, abra a&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela de tools</a>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Parkear&nbsp;os valores atuais de um fixture.</p>

<div class="cl_input">Park Fixture 1</div>

<p>2. Parkear todos os atributos do fixture 1 em 100%.</p>

<div class="cl_input">Park Fixture 1 At 100</div>

<p>3. Parkear&nbsp;os valores do tipo de preset de dimmer&nbsp;da seleção atual de fixtures.</p>

<div class="cl_input">Park PresetType Dimmer</div>

<p>4. Parkear um canal de DMX&nbsp;específico.</p>

<div class="cl_input">Park DMX 1.1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá parkear os valores atuais do fixture 1.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) e toque no fixture&nbsp;1 na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor irá parkear&nbsp;os atributos do&nbsp;fixture&nbsp;1 em 100%.</p>

<p>Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>Todos os atributos do fixture&nbsp;1 estão parkeados&nbsp;em 100%.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá&nbsp;parkear todos os valores de&nbsp;preset&nbsp;de&nbsp;dimmer&nbsp;da seleção atual de&nbsp;fixtures.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) e toque em&nbsp;<span class="softkey">Dimmer</span>&nbsp;na&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">barra de tipo de preset</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (=PresetType) e insira na linha de comando a palavra​ <span class="syntax">Dimmer</span>. Toque em&nbsp;<span class="softkey">Enter</span>.</p>

<p>Todos os valores de&nbsp;preset&nbsp;de&nbsp;dimmer&nbsp;da seleção atual de&nbsp;fixtures estão parkeados.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você vai parkear o canal de DMX&nbsp;1.2.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) e toque no canal de DMX&nbsp;1.2 na&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">vista de DMX</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>O canal de DMX&nbsp;1.2 está parkeado.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista de DMX</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Fixtures</a></li>
	<li><a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra de Tipo de Preset</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4f64e293-f606-4365-8813-71c3f60ffc9b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_page/pt/1.1'; " title="Go to previous page 'Page'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_pause/pt/1.1';" title="Go to next page 'Pause'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7917/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
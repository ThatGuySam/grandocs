---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_unpark/pt/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2e6967bb-9452-47a7-a8e5-be04c7b51ecd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_top/pt/1.3'; " title="Go to previous page 'Top'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_update/pt/1.3';" title="Go to next page 'Update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2e6967bb-9452-47a7-a8e5-be04c7b51ecd">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7936/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Unpark</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando unpark.</p>

<p>Para ir para ao comando unpark, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena tecla&nbsp;<span class="hardkey">Go+</span> (=Unpark) no&nbsp;console.</p>

<p>Unpark está na <a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando Unpark, você pode desparkear&nbsp;canais de DMX previamente parkeados</p>

<ul>
	<li>de um&nbsp;fixture</li>
	<li>dos atributos do tipo de preset de uma seleção de fixture</li>
</ul>

<div class="tip">Canais parkeados&nbsp;são exibidos com um plano de fundo azul na&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">vista de DMX</a>.</div>

<div class="tip">Para desparkear&nbsp;todos os canais de DMX previamente parkeados, abra a <a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela de tools</a>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Desparkear&nbsp;um&nbsp;fixture previamente&nbsp;parkeado.</p>

<div class="cl_input">Unpark Fixture 1</div>

<p>2. Desparkear&nbsp;um canal de DMX&nbsp;previamente&nbsp;parkeado.</p>

<div class="cl_input">Unpark Dmx 1.34</div>

<p>3. Desparkear&nbsp;atributos do tipo de&nbsp;preset&nbsp;de uma seleção de&nbsp;fixture​ atual.</p>

<div class="cl_input">Unpark PresetType Dimmer</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá desparkear&nbsp;o fixture 1 que foi previamente parkeado.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) e toque no fixture 1 na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Fixture 1 está desparkeado.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá desparkear&nbsp;o canal de&nbsp;DMX 1.34 previamente parkeado.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) e toque no canal de DMX 1.34 na&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">vista de DMX</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">3</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>.</p>

<p>O canal de DMX&nbsp;1.34 está desparkeado.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá desparkear atributos de dimmer previamente&nbsp;parkeados&nbsp;da seleção de&nbsp;fixture​ atual.</p>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione e segura&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) e toque em&nbsp;<span class="softkey">Dimmer</span>&nbsp;na&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">barra de tipo de preset</a>.</p>

<p>b) Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + pequena&nbsp;<span class="hardkey">Go+</span> (=Unpark) <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span>&nbsp;e insira na linha de comando a palavra&nbsp;<span class="syntax">Dimmer</span>. Toque em&nbsp;<span class="softkey">Enter</span>.</p>

<p>Os atributos de&nbsp;dimmer&nbsp;previamente&nbsp;parkeados da seleção de&nbsp;fixture​ atual estão desparkeados.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Janela de Tools</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Fixtures</a></li>
	<li><a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista de DMX</a></li>
	<li><a href="/Topic/3156c266-1baa-4627-91b7-1cb1273bdab6">Tecla Go+ (Pequena)</a></li>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2e6967bb-9452-47a7-a8e5-be04c7b51ecd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_top/pt/1.3'; " title="Go to previous page 'Top'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_update/pt/1.3';" title="Go to next page 'Update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7936/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

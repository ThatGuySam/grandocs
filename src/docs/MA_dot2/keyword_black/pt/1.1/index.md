---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_black/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7300762-91b3-4980-8e94-2603fa3f36f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/pt/1.1'; " title="Go to previous page 'At'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/pt/1.1';" title="Go to next page 'Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/d7300762-91b3-4980-8e94-2603fa3f36f6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7841/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Black</h1>

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
							<a href="#toc_header_anchor_3">Exemplo&nbsp;1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exemplo&nbsp;2</a>
						</li>
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando <strong>Black</strong>.</p>

<p>Para ir para ao comando <strong>Black</strong>, pressione e segure a tecla&nbsp;<span class="hardkey" style="font-size:12px"><img alt="ma" src="/Media/Mlg/ma.png"></span><span style="font-size:12px">&nbsp;e</span><span style="font-size:12px">&nbsp;</span><span class="hardkey" style="font-size:12px">&lt;&lt;&lt;</span><span style="font-size:12px"> </span><a href="/Topic/2798bfde-65ed-4e26-892d-b5d10c51b364">tecla [GoFastBack] </a><span style="font-size:12px">&nbsp;no</span><span style="font-size:12px">&nbsp;console.</span></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando black&nbsp;você pode configurar o atributo de dimmer de um executor para 0%</p>

<ul>
	<li>
	<p>temporariamente, enquanto você pressionar e segurar o executor</p>
	</li>
	<li>
	<p>com um comando</p>
	</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>Configurar o atributo de dimmer de um executor para 0%.</p>

<div class="cl_input">Black</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo&nbsp;1</h2>

<p>Vamos supor que você irá configurar o atributo de dimmer do executor 3 temporariamente para 0%, enquanto você estiver pressionando e segurando o executor.</p>

<p>Pressione&nbsp;e&nbsp;segure&nbsp;<span class="hardkey" style="font-size:12px"><img alt="ma" src="/Media/Mlg/ma.png"></span><span style="font-size:12px">&nbsp;e</span><span style="font-size:12px">&nbsp;</span><span class="hardkey" style="font-size:12px">&lt;&lt;&lt;</span><span style="font-size:12px"> [</span>GoFastBack<span style="font-size:12px">] (=</span>Black<span style="font-size:12px">) </span>e pressione e segure o botão executor respectivo​<span style="font-size:12px"> </span><span class="hardkey" style="font-size:12px"><img alt="go" src="/Media/Mlg/go_1.png"></span><span style="font-size:12px">.</span></p>

<p>Contanto que você esteja segurando o botão executor, o comando black será executado.</p>

<p>Assim que você soltar o botão executor, o executor estará de volta a seu estado normal.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo&nbsp;2</h2>

<p>Vamos supor que você irá configurar os atributos de dimmer do executor 3 para 0%, por um comando.</p>

<p>Pressione e segure&nbsp;<span style="font-size:12px">&nbsp;</span><span class="hardkey" style="font-size:12px"><img alt="ma" src="/Media/Mlg/ma.png"></span><span style="font-size:12px">&nbsp;e</span><span style="font-size:12px">&nbsp;</span><span class="hardkey" style="font-size:12px">&lt;&lt;&lt;</span><span style="font-size:12px"> [</span>GoFastBack<span style="font-size:12px">] (=</span>Black<span style="font-size:12px">) </span><span class="hardkey" style="font-size:12px">Exec</span><span style="font-size:12px"> </span><span class="hardkey" style="font-size:12px">3</span><span style="font-size:12px"> </span><span class="hardkey" style="font-size:12px">Please</span><span style="font-size:12px">.</span></p>

<p>Os valores de dimmer são ajustados para 0%.</p>

<p>Para trazer um botão executor de volta a seu estado normal, pressione o botão executor duas vezes.</p>

<p>Para trazer um fader executor de volta a seu estado normal, mova o fader para 0% e depois para cima novamente.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
	<li><a href="/Topic/2798bfde-65ed-4e26-892d-b5d10c51b364">tecla &lt;&lt;&lt; [GoFastBack]</a></li>
	<li><a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Alterar Funções dos Botões Executores</a></li>
	<li><a href="/Topic/7cf5839e-a357-48d3-b077-bf7f682606db">Selecionar Funções dos Botões Executores</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d7300762-91b3-4980-8e94-2603fa3f36f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_at/pt/1.1'; " title="Go to previous page 'At'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/pt/1.1';" title="Go to next page 'Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7841/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

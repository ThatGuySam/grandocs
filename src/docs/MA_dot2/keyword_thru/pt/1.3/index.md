---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_thru/pt/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="542b6df7-1e2c-4abf-bc33-d05751bed3ca">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_temp/pt/1.3'; " title="Go to previous page 'Temp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_toggle/pt/1.3';" title="Go to next page 'Toggle'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/542b6df7-1e2c-4abf-bc33-d05751bed3ca">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17642/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Thru</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando Thru.</p>

<p>Para ir para o comando Thru, pressione&nbsp;<span class="hardkey">Thru</span>&nbsp;no&nbsp;console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando&nbsp;Thru&nbsp;você pode:</p>

<ul>
	<li>selecionar todos os fixtures na vista de fixtures</li>
	<li>selecionar uma gama de fixtures na vista de fixtures</li>
	<li>deletar cues e todos os&nbsp;cues seguintes do executor principal</li>
	<li>deletar&nbsp;cues&nbsp;e todos os cues seguintes de um botão executor</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Selecionar todos os&nbsp;fixtures&nbsp;na vista de&nbsp;fixtures.</p>

<div class="cl_input">Fixture Thru</div>

<p>2.&nbsp; Selecionar uma gama de&nbsp;fixtures&nbsp;na vista de&nbsp;fixtures.</p>

<div class="cl_input">Fixture 5 Thru 10</div>

<p>3. Deletar&nbsp;cues&nbsp;e todos os&nbsp;cues&nbsp;seguintes do executor principal.</p>

<div class="cl_input">Delete Cue 3 Thru</div>

<p>4. Deletar&nbsp;cues&nbsp;e todos os&nbsp;cues&nbsp;seguintes de um botão executor.</p>

<div class="cl_input">Delete Cue 3 Thru Executor 2</div>

<p>O comando Thru é um comando de ajuda e precisa de um segundo comando ou de um número.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá selecionar todos os fixtures no show.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Minus01_1-2.png"> <em>Figura 1:&nbsp;Fixtures Selecionados</em></p>

<p>Pressione&nbsp;<span class="hardkey">Thru</span> (=Fixture Thru) <span class="hardkey">Please</span>.</p>

<p>Todos os fixtures&nbsp;no show estão selecionados.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá selecionar os fixtures de 5 a 10.</p>

<p>Pressione&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">5</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>Os&nbsp;fixtures&nbsp;de 5 a 10 estão selecionados.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá deletar o cue 3 e todos os cues seguintes do executor principal.</p>

<p>Pressione&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span>.</p>

<p>Cue&nbsp;3 e todos os&nbsp;cues&nbsp;seguintes estão deletados do executor principal.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você irá&nbsp;deletar&nbsp;o&nbsp;cue&nbsp;3 e todos os&nbsp;cues&nbsp;seguintes do botão executor .</p>

<div class="important"><strong>Importante:</strong><br>
Depois de ter pressionado&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;ele aparece na tela 1 da lista de cue principal.<br>
Continue o comando com o <strong>número de cue</strong> e o <strong>número do executor</strong> / pressione um <strong>botão executor</strong>. O cue será deletado no executor inserido.<br>
Se você não inserir um número do executor / pressione um botão executor, o cue será deletado da lista de cue principal.</div>

<p>Pressione&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Thru</span> e o botão executor respectivo&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span> .</p>

<p>Ou</p>

<p>Pressione&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Thru</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>O&nbsp;cue&nbsp;3 e todos os&nbsp;cues&nbsp;seguintes do botão executor estão deletados.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/f04be70d-f119-4652-b9a4-6c3a6c55ad30">Tecla Thru</a></li>
	<li><a href="/Topic/02aad508-ad75-4c9d-b8d3-5e65dcc1a6f6">Tecla Delete</a></li>
	<li><a href="/Topic/73947b85-e964-42f3-9c73-fb8a8569c8de">Tecla Fixture</a></li>
	<li><a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Como trabalhar com Cues?</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="542b6df7-1e2c-4abf-bc33-d05751bed3ca">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_temp/pt/1.3'; " title="Go to previous page 'Temp'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_toggle/pt/1.3';" title="Go to next page 'Toggle'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17642/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

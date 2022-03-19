
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/pt/1.2'; " title="Go to previous page 'Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_clone/pt/1.2';" title="Go to next page 'Clone'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17651/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando Call</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descrição&nbsp;</a>
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
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando <strong>Call</strong>.</p>

<p>Para ir para o comando <strong>Call</strong> pressione e segure a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> e depois&nbsp;<span class="hardkey">On</span>&nbsp;no&nbsp;console.</p>

<p><strong>Call&nbsp;</strong>está agora na&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<div class="cl_input">Call</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição&nbsp;</h2>

<p>Com o comando Call, você pode chamar</p>

<ul>
	<li>Presets&nbsp;do agrupamento de preset&nbsp;no&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">programador</a> para todos os fixtures de suporte destes atributos​</li>
	<li>O&nbsp;status de um cue, como: a saída atual e os valores do cue&nbsp;no programador como valores armazenáveis, mas sem selecionar os fixtures</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Chamar um preset do agrupamento de preset&nbsp;no programador</p>

<div class="cl_input">Call Preset 1.1</div>

<p>2. Chamar um cue.</p>

<div class="cl_input">Call Cue 3</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você vai chamar o preset de&nbsp;dimmer&nbsp;1 do agrupamento de preset de&nbsp;dimmer&nbsp;(= 1) no programador.</p>

<p>Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">On</span> (=Call) e&nbsp;<span class="hardkey">Preset</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>O preset de&nbsp;dimmer 1 está no programador para todos os fixtures de suporte deste tipo de preset.</p>

<div class="tip"><strong>Dica:</strong><br>
Verifique os valores do programador na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Fixtures</a>.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá armazenar um cue 4 (= plane de fundo verde e ator no palco).<br>
A luz para o ator no palco está atualmente no programador, juntamente com os fixtures selecionados.<br>
Agora, você chama o&nbsp;cue 3 (= plano de fundo verde) para a seleção atual de fixtures e valores no programador.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Call01_1-2.png"> <em>Figura 1: Luz para o ator no palco no&nbsp;programador</em></p>

<p>Pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">On</span> (=Call) e <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Call02_1-2.png"> <em>Figura 2: Luz para o ator no palco e&nbsp;valores de cue 3&nbsp;estão no programador</em></p>

<p>O cue 3 é chamado e você vê a saída atual, juntamente com as seleções anteriores de fixtures e seus valores.<br>
Todos os valores do&nbsp;cue 3 estão no programador e são armazenáveis.<br>
Nenhum fixture do cue 3 está selecionado.<br>
Você ainda pode ajustar os valores da seleção do fixture.<br>
Se tudo parece estar bem, armazene o&nbsp;cue 4 (=fundo verde com o ator no palco) em um executor.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/pt/1.2'; " title="Go to previous page 'Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_clone/pt/1.2';" title="Go to next page 'Clone'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17651/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8de313c0-11c4-45df-8aaf-381fc46b3ec4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Please/pt/1.9'; " title="Go to previous page 'Please'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Preset/pt/1.9';" title="Go to next page 'Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7978/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Tecla [Mais] +</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Seleção de Fixture</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Atribuindo Valores</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Valor absoluto ou valor relativo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Seleção da Página</a>
						</li>
				</ul>
			</div>

		<p>A tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;tem duas funções principais.&nbsp;</p>

<p>Ela pode ser usada para seleção de fixture e para atribuir valores.</p>

<p>Um terceiro uso é para alterar a página do executor.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Seleção de Fixture</h2>

<p>Por exemplo: você quer selecionar os fixtures no grupo 5 e o fixture&nbsp;número 2 (que não é uma parte do grupo 5).</p>

<p><span class="hardkey">Group</span> <span class="hardkey">5</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<p>Se você já tiver selecionado o grupo 5 você pode fazer o seguinte para adicionar o fixture&nbsp;2 para sua seleção:</p>

<p><span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Atribuindo Valores</h2>

<p>A tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;pode ser usada para atribuir um valor maior do que o valor atual - Lembre-se, você não pode ir acima de 100% no dimmer.</p>

<p>Por exemplo: você tem uma seleção de fixtures em um valor dimmer de 50% e você quer elevá-la a 20%. Digite (você já selecionou os fixtures):</p>

<p><span class="hardkey">At</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">2</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Há uma pequena função extra para a tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>. Se você pressioná-la duas vezes, ela adiciona automaticamente 10% do valor. Então você poderia ter arquivado o mesmo pressionando a tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;quatro vezes.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Valor absoluto ou valor relativo</h2>

<p>A descrição acima é sobre a definição de um valor relativo. Você também pode definir um valor absoluto positivo.</p>

<p>A diferença entre um valor absoluto ou relativo é um espaço entre o sinal de&nbsp;mais e o número.</p>

<p>Para definir um valor relativo, você pode escrever na linha de comando&nbsp;<span class="syntax">at&nbsp;+ 5</span>&nbsp;​(execute o &nbsp;comando pressionando&nbsp;<span class="hardkey">Please</span>). Um valor absoluto seria escrito&nbsp;<span class="syntax">at&nbsp;+5</span>&nbsp;​(execute o comando pressionando&nbsp;<span class="hardkey">Please</span>).</p>

<p>O valor positivo é geralmente implícito a menos que você especifique de forma diferente - então você só precisa digitar​&nbsp;<span class="syntax">at 5</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Usando as tecla, você pode apenas digitar&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>. Se por alguma razão você necessite adicionar o mais, você pode pressionar&nbsp;<span class="hardkey">At</span><span class="hardkey">+</span>&nbsp;(segure-a enquanto você digita o valor)&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>, segurando a tecla mais enquanto você&nbsp; digita os valores, remove o espaço entre o sinal e o valor.</p>

<p>As duas irão ajustar o valor para 5 positivo.</p>

<p>Usando a calculadora (você pode obtê-la por um toque no&nbsp;encoder&nbsp;para o valor que você deseja) você pode tocar no botão&nbsp;<span class="softkey">+/-</span>&nbsp;para adicionar o sinal sem espaço. Para valores relativos você pode usar o botão <span class="softkey">+</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Seleção da Página</h2>

<p>Você pode usar a tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;para alterar a página ativa. Se você quer ir para a próxima página você pode usar as seguintes teclas:</p>

<p><span class="hardkey">Page</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">Please</span></p>

<p>Você também pode usar cálculos. Se você está na página dois e quer ir para a página cinco, você poderia usar as seguintes teclas:</p>

<p><span class="hardkey">Page</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/dcc4bfcc-ffea-4538-8dc4-3090dc5d06b5">Comando + [Mais] </a></p>

<p><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Janela da Calculadora</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8de313c0-11c4-45df-8aaf-381fc46b3ec4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Please/pt/1.9'; " title="Go to previous page 'Please'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Preset/pt/1.9';" title="Go to next page 'Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7978/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
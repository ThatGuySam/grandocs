
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a1cb6158-ef18-4682-93a0-68f2761e4808">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_remove/pt/1.9'; " title="Go to previous page 'Remove'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_select/pt/1.9';" title="Go to next page 'Select'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17747/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Comando Replace</h1>

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

		<p>Esta página descreve a sintaxe e como usar o comando Replace.</p>

<p>Para ir para o comando Replace, pressione e segure&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> e <span class="hardkey">Move</span>&nbsp;no&nbsp;console.</p>

<p>Replace&nbsp;está na linha de comando.</p>

<p>Se você pressionar&nbsp;<span class="hardkey">Move</span> depois de um&nbsp;<span class="syntax">Replace</span>&nbsp;estar na linha de comando, o comando será&nbsp;<span class="syntax">With</span>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando replace você pode substituir&nbsp;</p>

<ul>
	<li>Presets com&nbsp;Presets</li>
	<li>Fixtures com&nbsp;Fixtures</li>
	<li>Groups com&nbsp;Groups</li>
</ul>

<p>para um executor ou no arquivo de show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>1. Substitui um preset se ele for usado em um executor.</p>

<div class="cl_input">Replace Preset 1 With Preset 2 If ExecButton 1.2</div>

<p>2. Substitui um&nbsp;fixture.</p>

<div class="cl_input">Replace Fixture 1 With Fixture 2</div>

<p>3. Substitui um grupo.</p>

<div class="cl_input">Replace Group 1 With Group 2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você irá substituir o preset de posição 4 "Vocalista" com o preset de posição 5 "Piano" se ele for usado no executor 2.</p>

<ol>
	<li>Abra o agrupamento de preset de posição</li>
	<li>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace), toque em&nbsp;<span class="softkey">preset 4</span>, pressione&nbsp;<span class="hardkey">Move</span> (=With), toque em&nbsp;<span class="softkey">preset 5</span>, pressione&nbsp;<span class="hardkey">If</span> e o botão executor 2&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span> <span class="hardkey">Please</span>.</li>
</ol>

<div class="cl_input">Replace Preset 2.4 With Preset 2.5 If ExecButton 1.2</div>

<p>O console mostrará uma visão geral sobre a quantidade de objetos que mudarão e lhe pede para confirmar a operação de replace.&nbsp;<br>
Para aplicar e deixar a janela, toque em​ <span class="softkey">Ok</span>.<br>
Para aplicar e obter um relatório detalhado, pressione&nbsp;​ <span class="softkey">Ok Criar Relatório</span>.</p>

<p>Preset 4 "Vocalista" é substituído pelo preset 5 "Piano" se ele foi usado no executor 2.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá substituir o&nbsp;fixture&nbsp;1&nbsp;pelo&nbsp;fixture&nbsp;2&nbsp; se ele for usado no executor 1.</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">If</span>, pressione o botão executor&nbsp;1&nbsp;​&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<div class="cl_input">Replace Fixture 1 With Fixture 2 If ExecButton 1.1</div>

<p>O console mostrará uma visão geral sobre a quantidade de objetos que mudarão e lhe pede para confirmar a operação de&nbsp;replace.&nbsp;<br>
Para aplicar e deixar a janela, toque em​&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar e obter um relatório detalhado, pressione&nbsp;​&nbsp;<span class="softkey">Ok&nbsp;Criar Relatório</span>.</p>

<p>Fixture&nbsp;1 i é substituído pelo &nbsp;fixture&nbsp;2&nbsp;se ele foi usado no executor 1.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exemplo 3</h2>

<p>Vamos supor que você irá substituir o&nbsp;grupo&nbsp;1&nbsp;pelo&nbsp;grupo&nbsp;2.</p>

<div class="important"><strong>Importante:</strong><br>
Substituir um grupo não irá substituir o grupo na vista grupos.​<br>
Irá substituir os&nbsp;fixtures&nbsp;que utilizam no grupo no arquivo de show. Isso é o mesmo que substituir&nbsp;fixture&nbsp;por&nbsp;fixture.</div>

<p>Há duas maneiras de fazer isso:</p>

<p>a) Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>b) Abra a&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">vista de grupos</a>. Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace), toque em&nbsp;<span class="softkey">Grupo 1</span>, pressione&nbsp;<span class="hardkey">Move</span> (=With), toque em&nbsp;<span class="softkey"> Grupo 2</span> <span class="hardkey">Please</span>.</p>

<p>O console mostrará uma visão geral sobre a quantidade de objetos que mudarão e lhe pede para confirmar a operação de&nbsp;replace.&nbsp;<br>
Para aplicar e deixar a janela, toque em​&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar e obter um relatório detalhado, pressione&nbsp;​&nbsp;<span class="softkey">Ok&nbsp;Criar Relatório</span>.</p>

<p>Todos os fixtures armazenados no grupo 1 são substituídos pelos fixtures&nbsp;armazenados no grupo 2.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exemplo 4</h2>

<p>Vamos supor que você irá deletar o fixture 1 de todos os locais em que ele esteja armazenado (grupos, presets e executores).</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Please</span>.</p>

<p>O console mostrará uma visão geral sobre a quantidade de objetos que mudarão e lhe pede para confirmar a operação de&nbsp;replace.&nbsp;<br>
Para aplicar e deixar a janela, toque em​&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar e obter um relatório detalhado, pressione&nbsp;​&nbsp;<span class="softkey">Ok&nbsp;Criar Relatório</span>.</p>

<p>O fixture&nbsp;1 é deletado de todos os locais, no arquivo de show, em que esteja armazenado.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/f12e11a4-5376-4abb-b023-09c75a033a92">Tecla Move</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Groups View</a></li>
	<li><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Presets Pools View</a></li>
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
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a1cb6158-ef18-4682-93a0-68f2761e4808">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_remove/pt/1.9'; " title="Go to previous page 'Remove'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_select/pt/1.9';" title="Go to next page 'Select'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17747/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
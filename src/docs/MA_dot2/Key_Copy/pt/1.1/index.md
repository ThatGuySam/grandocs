---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Copy/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4d177693-cdbd-4c33-a97d-3ca8a4740ecb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Clear/pt/1.1'; " title="Go to previous page 'Clear'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/pt/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/4d177693-cdbd-4c33-a97d-3ca8a4740ecb">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14022/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Copy</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funcionalidade Avan??ada</a>
						</li>
				</ul>
			</div>

		<p>A tecla&nbsp;<span class="hardkey">Copy</span>&nbsp;?? usada para copiar algo de um local para outro (v??lido).</p>

<p>Por exemplo, voc?? quer copiar o grupo 1 ao grupo 2</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<p>Se voc?? quer fazer uma c??pia do n??mero de cue 2 a um (novo) cue 9 na lista de cue principal, voc?? pode usar as seguintes teclas:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">9</span> <span class="hardkey">Please</span> isso lhe dar?? uma caixa de sele????o na tela 1, onde voc?? precisa selecionar???&nbsp;<span class="softkey">Copiar</span>.</p>

<p>Se voc?? precisa copiar o cue n??mero 2 da lista de cue&nbsp;principal em um executor diferente, ent??o voc?? precisa especificar o executor. O mesmo exemplo, mas copiando para o executor n??mero 4:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span>&nbsp;<span class="hardkey">At</span> <span class="hardkey">9</span> <span class="hardkey">Exec</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>, mesma caixa de sele????o,&nbsp;onde voc?? precisa selecionar???<span class="softkey">Copiar</span>.</p>

<p>Voc?? pode sempre usar gamas.</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Thru</span> <span class="hardkey">4</span> <span class="hardkey">At</span> <span class="hardkey">Cue</span> <span class="hardkey">9</span> <span class="hardkey">Please</span> criar?? o cue 9, 10 e 11 (se voc?? tivesse o&nbsp;cue 2, 3 e 4). Cue 9 ser?? o mesmo que 2, 10 o mesmo que 3 e 11 o mesmo que 4.</p>

<p>Se voc?? copiar de uma fonte para uma gama de destino, ent??o voc?? criar?? v??rios cues semelhantes.</p>

<p>Por exemplo, copiando o&nbsp;cue 2 ao cue 15, 16 e 17 criar?? tr??s c??pias do&nbsp;cue 2 localizadas nos cues 15, 16 e 17. Use as seguintes teclas:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">at</span> <span class="hardkey">1</span> <span class="hardkey">5</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">7</span> <span class="hardkey">Please</span>&nbsp;selecionar <span class="softkey">Copiar</span> novamente.</p>

<p>&nbsp;</p>

<p>Se voc?? tentar copiar informa????es para um local j?? existente, voc?? tem duas op????es: Sobrescrever ou Merge.</p>

<p>Sobrescrever ir?? deletar o valor atual. Merge ir?? adicionar novos valores e sobrescrever valores existentes.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funcionalidade Avan??ada</h2>

<p>Se voc?? pressionar e segurar a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e depois pressionar a tecla&nbsp;<span class="hardkey">Copy</span>, voc?? obter?? o&nbsp;<a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">comando Clone</a>.</p>

<p>Isto ?? usado para que um fixture fa??a exatamente o que outro fixture est?? fazendo. Se o fixture n??mero 1 ?? usado em alguns grupos, presets e lista de cue, ent??o pode ser que n??o seja muito legal para voc?? se precisasse que o fixture 5 fizesse exatamente as mesmas coisas. Voc?? teria que verificar manualmente onde o fixture 1 ?? usado e, em seguida, programar o fixture 5 para fazer o mesmo. O comando Clone pode ajud??-lo com isso.</p>

<p>Quando voc?? clonar algo, muitas vezes lhe s??o apresentadas algumas op????es na tela 1.</p>

<ul>
	<li>'Cancel' ?? usada para cancelar a opera????o de clone.</li>
	<li>'Low Prio Merge' ?? a op????o padr??o. Significa que ?? um&nbsp;merge&nbsp;de prioridade baixa. S?? ir?? clonar os valores do fixture 1 quando h?? valores e onde o fixture 5 ainda n??o possui valores - n??o destr??i nenhuma programa????o j?? existente para o fixture 5.</li>
	<li>'Merge' clonar?? todos os valores do fixture 1 no fixture 5. Se o fixture 5 tinha algo programado, onde o fixture 1 tamb??m tinha algo, ent??o os valores ser??o os mesmos do fixture 1. Se o fixture 5 tem algo programado que o fixture 1 n??o tem, ent??o esses valores permanecer??o.</li>
	<li>'Sobrescrever' ir?? deletar todos os valores existentes do fixture 5 e clonar os valores do fixture 1.</li>
</ul>

<p>Aqui est??o alguns exemplos:</p>

<p>Em todo o seu show voc?? precisa que o&nbsp;fixture 5 seja uma c??pia do fixture 1 e o que o fixture 5 tinha n??o ?? mais necess??rio:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(lhe dar??&nbsp;o comando Clone)&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>&nbsp;agora selecione&nbsp;<span class="softkey">Sobrescrever</span>&nbsp;na tela&nbsp;1.&nbsp;</p>

<p>Em seu executor 3 voc?? precisa que o&nbsp;fixture 5 seja uma c??pia do&nbsp;fixture 1 e o que o fixture 5 tinha n??o ?? mais necess??rio:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(lhe dar??&nbsp;o comando Clone???)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">If</span> <span class="hardkey">Exec</span> <span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>&nbsp;agora selecione&nbsp;<span class="softkey">Sobrescrever</span>&nbsp;na tela&nbsp;1.&nbsp;</p>

<p>No executor 3 voc?? precisa que os&nbsp;fixtures&nbsp;no&nbsp;grupo 2 sejam uma c??pia do fixture 1 e j?? que n??o estamos completamente certos de que o fixture no grupo 2 est?? sendo usado, ent??o n??s devemos optar por uma Low&nbsp;Prio Merge :</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(lhe dar??&nbsp;o comando Clone???)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">Group</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">If</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>&nbsp;agora selecione???&nbsp;<span class="softkey">Low Prio&nbsp;Merge</span>&nbsp;na tela 1.</p>

<p>H?? uma vasta gama de possibilidades quando estamos usando clone. Por favor, d?? uma olhada na descri????o do&nbsp;<a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">comando Clone</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/6f42e54b-e064-46ad-b3c5-c5341be8e50d">Comando Copy</a></p>

<p><a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">Comando Clone</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4d177693-cdbd-4c33-a97d-3ca8a4740ecb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Clear/pt/1.1'; " title="Go to previous page 'Clear'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/pt/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14022/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

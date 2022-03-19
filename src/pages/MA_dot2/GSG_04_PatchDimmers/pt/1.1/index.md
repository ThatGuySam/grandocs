
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1798f645-7683-4a7b-b7cc-2feb7665d01a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_03_CreateNewShow/pt/1.1'; " title="Go to previous page '3 - Criar um novo show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/pt/1.1';" title="Go to next page '5 - Controlando dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/1798f645-7683-4a7b-b7cc-2feb7665d01a">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12246/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Adicionando e patcheando dimmers</h1>


		<p>Temos um novo show vazio. Precisamos adicionar algumas luzes para que ele fique divertido (sem elas, o console é apenas um objeto pesado e sem sentido).</p>

<p>Vamos fingir que temos um pequeno teatro e vamos adicionar alguns&nbsp;dimmers. Temos 12&nbsp;dimmer&nbsp;para brincar. Este é o nosso enredo básico:</p>

<p><br>
<span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_GettingStarted_AddAndPatchDimmers_01_1-0.png"></span></p>

<p>Então vamos adicionar esses 12 dimmers para o setup no console (não se preocupe, nós vamos adicionar mais coisas divertidas mais tarde).</p>

<p>Ignore o que sua tela diz e basta pressionar a tecla <span class="hardkey">Setup</span>. Agora vire o encoder mais à direita até que diga "Menu de Patch" e, então, pressione o encoder.</p>

<p>Observe como a tela externa (e telas de 3 a 5, se as tiver) agora mostra o arquivo de ajuda para esta vista. Por favor, ignore-a agora - eu vou te dizer o que fazer e o que é o quê.</p>

<p>Pressione no lado direito da tela 1 onde diz <span class="softkey">Adicionar Novos Fixtures</span>.</p>

<p>Isto lhe dará a <strong>janela Adicionar Novos Fixtures</strong>. Todas as áreas verdes podem ser ajustadas para certificar-se de que adicionaremos os fixtures corretos.</p>

<p>Já há um dimmer fixture genérico selecionado em "Tipo" (não se preocupe com a parte do número "2" e do "00" no nome).</p>

<p>Precisamos mudar a quantidade para 12. A melhor maneira de se fazer isso é girando o segundo encoder da esquerda, até que diga: "<em>Quantidade 12</em>".</p>

<p>Queremos ter um ID de Fixture que começe com o número 1 e o nome pode ser alterado posteriormente (assim como todo o resto). Nós também estamos felizes patcheá-lo ao universo 1 e do primeiro endereço e para a frente. Deve parecer-se com esse quando terminarmos nosso ajustamento:</p>

<p><br>
<img alt="" src="/Media/Image/Add_novos_Fixtures.png"></p>

<p>OK, agora estamos felizes! Pressione <span class="softkey">OK</span> no canto superior direito.</p>

<p>Isto mostrará agora a <strong>vista de configuração de Fixture</strong> (e agora com fixtures nele). Você pode usar o encoder mais à direita para percorrer pela lista. Se você fez o certo, então você vai ter 12 dimmers com números de ID&nbsp;de '1' a '12' e patcheados a partir do endereço '1.001' para '1.012'.</p>

<p>Agora pressione o canto superior direito novamente - onde diz <span class="softkey">OK</span>.</p>

<p>Agora você precisa confirmar que está deixando o Menu de Patch&nbsp;e lhe é perguntado o que deve acontecer. Queremos que você pressione <span class="softkey">Ok, Aplicar Todas as alterações</span>.</p>

<p>É isso aí, nós adicionamos 12 dimmers para o nosso show - por favor, salve o seu show. No próximo capítulo, veremos maneiras de controlar estes dimmers.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1798f645-7683-4a7b-b7cc-2feb7665d01a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_03_CreateNewShow/pt/1.1'; " title="Go to previous page '3 - Criar um novo show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/pt/1.1';" title="Go to next page '5 - Controlando dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12246/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_07_Programmer/pt/1.2'
---

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/pt/1.2'; " title="Go to previous page '6 - Vista de Fixture'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/pt/1.2';" title="Go to next page '8 - Fazendo e trabalhando com grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f25728c2-b901-4940-b695-ffdaedfce1a2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17662/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guia de Introdu????o - Programador - O que ?? e por que voc?? precisa disso</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Highlight&nbsp;</a>
						</li>
				</ul>
			</div>

		<p>Nos cap??tulos anteriores vimos como alterar os valores dos dimmers.</p>

<p>O que realmente fizemos foi colocar valores em nosso <strong>Programador</strong> e ter estas sa??das do programador nas sa??das (DMX fora do nosso sistema).</p>

<p>Ele funciona como um local tempor??rio para valores at?? que voc?? escolha armazen??-los em algum lugar ou liber??-los novamente (de volta para seus padr??es).</p>

<p>Voc?? deve ter notado que quando alteramos os valores dos fixtures havia uma linha vermelha no bot??o de Dimmer no lado direito da tela 1. Ele ficou assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_01_1-0.png"> <em>Figura 1: Bot??o de Dimmer&nbsp;com valores do programador.</em></p>

<p>E quando pressionamos <span class="hardkey">Clear</span>, ela desapareceu.</p>

<p>Isto indicou-nos que tinham valores de dimmer no programador.</p>

<p>Se voc?? quiser ver mais detalhadamente o que voc?? realmente tem em seu programador, voc?? necessita&nbsp;dar uma olhada&nbsp;na <strong>Vista de Folha de Fixture</strong>.&nbsp;&nbsp;</p>

<p>Isso altera a vista para algo assim (dependendo do que voc?? tem em seu programador):</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-2.png"> <em>Figura 2: Vista de Folha de Fixture&nbsp;com valores do programador</em></p>

<p>Repare que eu tenho os fixtures 3 e 4 em 50% na foto acima.</p>

<p>Tente colocar seus fixtures 3 e 4 em 50%.</p>

<p>Observe como o ID de fixture e o nome est??o em amarelo em vez de cinza. Isso nos mostra que estes fixtures est??o selecionados - assim como a cor do quadro amarelo no Fixture Layout e na Vista de S??mbolo - e se voc?? alterar o valor, os fixtures ser??o afetados.</p>

<p>O valor de dimmer tem um fundo vermelho e o valor est?? em texto vermelho. Tudo isso indica que temos esse valor ativo em nosso programador e ele ser?? salvo se o armazenarmos em algum lugar.</p>

<p>Nos cap??tulos anteriores, tamb??m pressionamos muito a tecla&nbsp;<span class="hardkey">Clear</span>. Isso tamb??m tem a ver com o nosso programador. Usamos clear para remover o material do nosso programador.</p>

<p>Tente pressionar a tecla <span class="hardkey">Clear</span> uma vez.</p>

<p>Agora o ID de fixture e o nome voltaram ao cinza. Estes fixtures n??o est??o mais selecionado. Quando voc?? gira a roda de n??vel, nada acontece.</p>

<p>Mas ainda temos os valores em nosso programador e eles ainda ser??o armazenados se voc?? escolheu faz??-lo.</p>

<p>Pressione <span class="hardkey">Clear</span> mais uma vez.</p>

<p>Agora que liberamos os valores do programador, o fundo e o texto ficaram cinza. Isso significa que se voc?? escolheu armazenar um cue agora, voc?? n??o armazenaria quaisquer valores. Dito de uma forma diferente: todo valor com o texto e <strong>fundo</strong> em vermelho ser?? salvo quando voc?? armazenar - isso ?? chamado de valores ativos. O fundo vermelho ?? o importante.</p>

<p>Observe que quando voc?? armazenar os valores, voc?? ainda pode t??-los em seu programador. O texto de valor ainda est?? vermelho para mostrar isso, mas o fundo n??o est?? vermelho mais. Isso significa que ele n??o ser?? armazenado se voc?? agora tentar armazenar novamente. Voc?? precisa dar ao fixture&nbsp;um valor ativo novamente, antes de guard??-los novamente.</p>

<p>Em vez de pressionar a tecla <span class="hardkey">Clear</span> duas vezes, voc?? poderia mant??-la pressionada por 1 segundo - ?? a mesma coisa.</p>

<p>Vou lhe falar mais do programador quando come??armos a armazenar cues.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Highlight&nbsp;</h2>

<p>Eu vou gostaria de apresent??-lo para a fun????o Highlight antes de seguir em frente. Limpe seu programador e, em seguida, pressione a tecla <span class="hardkey">Highlt</span>. Agora pressione a tecla <span class="hardkey">Next</span>. Isso deve mostrar que o fixture 1 est?? selecionado, mas voc?? n??o tem nada em seu programador.</p>

<p>Se voc?? ainda estiver na Vista de Folha de Fixture, ent??o voc?? s??&nbsp;consegue ver que&nbsp;est?? realmente&nbsp;sua&nbsp;sa??da na "symbol output", mas se voc?? mudar de volta para a Vista de S??mbolo de Fixture, talvez voc?? ver?? isso mais claramente. A Vista de S??mbolo de Fixture sempre lhe mostrar?? a sa??da atual (incluindo o valor de porcentagem) e a Vista de Folha de Fixture mostrar?? a sa??da de seu programador e executor (vou lhe contar mais sobre Executores mais tarde) nas diferentes colunas de atributos - o pequeno "symbol output " lhe mostrar?? a sa??da real. Certifique-se de que voc?? est?? olhando para a Vista de S??mbolos de Fixture e pressione&nbsp;<span class="hardkey">Next</span> novamente.</p>

<p>Observe como agora ?? o fixture 2 que est?? selecionado e dando sa??da de 100% e o fixture 1 est?? de volta a 0%. Pressione <span class="hardkey">Prev</span>. Agora estamos de volta ao n??mero 1. Se voc?? pressionar&nbsp;<span class="hardkey">Prev</span> de novo, ent??o o fixture 12 recebe sa??da.</p>

<p>Quando highlight n??o est?? ativo e voc?? pressionar e segurar a tecla <span class="hardkey">Highlt</span>, os fixtures selecionados come??ar??o a piscar. Isso ?? muito ??til quando voc?? tenta localizar um fixture em seu equipamento.</p>

<p>Tente brincar com <span class="hardkey">Next</span> e <span class="hardkey">Prev</span> e ligar e desligar highlight&nbsp;pressionando a tecla <span class="hardkey">Highlt</span>. Tente dar um valor aos fixtures no programador e ainda utilizar a fun????o de highlight - repare na diferen??a no valor do programador e do "symbol output" na Vista de Folha de Fixture.</p>

<p>&nbsp;</p>

<p>Quando voc?? sentir que voc?? tem uma boa compreens??o do programador e a fun????o de highlight, voc?? deve passar para o pr??ximo cap??tulo, onde iremos criar grupos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/pt/1.2'; " title="Go to previous page '6 - Vista de Fixture'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/pt/1.2';" title="Go to next page '8 - Fazendo e trabalhando com grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17662/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

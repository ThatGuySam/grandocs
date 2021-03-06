---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_10_MakingMoreCues/pt/1.3'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fc53fe83-17e5-498e-9b19-df0f847d2300">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/pt/1.3'; " title="Go to previous page '9 - Store a cue and play it back'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/pt/1.3';" title="Go to next page '11 - Adding LED fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/fc53fe83-17e5-498e-9b19-df0f847d2300">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17737/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Guia de Introdu????o - Fazendo mais cues na lista de cue</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Editando a lista de cue</a>
						</li>
				</ul>
			</div>

		<p>Agora faremos mais cues na lista de cue principal e veremos como reproduzi-los.</p>

<p>Fa??a isto:</p>

<p><span class="hardkey">Group</span> <span class="softkey">Up Stage</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Store</span>&nbsp;<span class="hardkey">Time</span> <span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<p>Isso deve lhe dar um pop-up com diferentes possibilidades.</p>

<p>Selecione <span class="softkey">Criar um Segundo Cue</span>.</p>

<p>Isso criou um cue n??mero 2, com um tempo de fade de 3 segundos, em vez de o tempo padr??o de 0 segundos.</p>

<p>Tente executar o cue para ver os fixtures do grupo 5 em fade.</p>

<p>Vamos tentar usar a entrada da Linha de Comando em vez das teclas.</p>

<p>Localize-a na tela 1:</p>

<div class="cl_input">Linha de Comando</div>

<p>Esta ?? a entrada da Linha de Comando. Aqui podemos digitar comandos usando o teclado (na tela ou externo). Ao pression??-lo voc?? ter?? a vista da Linha de Comando. Aqui voc?? pode ver os comandos executados anteriormente e outros feedbacks do console.</p>

<p>Fa??a o seguinte:</p>

<div class="cl_input">g 2 - 9 At 75</div>

<p>E finalize pressionando Enter. No futuro, voc?? pode simplesmente terminar os exemplos que escrevo com Enter ou <span class="hardkey">Please</span>.</p>

<p>Agora fa??a o seguinte:</p>

<div class="cl_input">g 4 - 9 + f 9 t 12 At + 20</div>

<p>Vamos dar uma olhada para a resposta do console e falar sobre o que n??s acabamos de fazer.</p>

<p>A resposta para o primeiro comando ?? a seguinte:</p>

<div class="cl_response">Executing :&nbsp;Group&nbsp;2-&nbsp;9&nbsp;At&nbsp;75</div>

<p>Assim, podemos ver que o "g" ?? um atalho para "Grupo". N??s selecionamos os fixtures no grupo 2, exceto aqueles que tamb??m est??o no grupo 9, e os colocamos em 75%. A parte "Executando" ?? apenas o console dizendo que est?? realmente feito.</p>

<p>A pr??xima linha foi mais complexa:</p>

<div class="cl_response">Executing :&nbsp;Group&nbsp;4-&nbsp;9&nbsp;+&nbsp;Fixture&nbsp;9&nbsp;Thru12&nbsp;At&nbsp;+&nbsp;20</div>

<p>A primeira parte ?? como a outra, mas depois vemos que "f" ?? interpretado como "Fixture" e "t" ?? "Thru". Ent??o n??s selecionamos os fixtures do grupo 4, exceto aqueles que tamb??m est??o no grupo 9, e em seguida adicionamos os&nbsp;fixtures do 9 ao 12, dando-lhes 20% a&nbsp;mais do que tinham.</p>

<p>Vamos armazenar isso usando os comandos:</p>

<div class="cl_input">st&nbsp;c 3 fa 5</div>

<p>Aqui est?? a resposta:</p>

<div class="cl_response">Executing :&nbsp;StoreCue&nbsp;3&nbsp;Fade&nbsp;5</div>

<p>Novamente, h?? atalhos para a maioria das palavras. Criamos o cue n??mero 3 com um tempo de fade de 5 segundos.</p>

<p>N??s tamb??m podemos ver que a dot2 est?? executando um macro quando voc?? armazenar. Este macro remove valores desnecess??rios em sua lista de cue.</p>

<p>O Cue n??mero 4 ?? um cue mais escuro, por isso teremos 40% de tudo o que est?? atualmente nele. No momento temos o grupo 5 e 8 nele ..</p>

<p>Estas s??o as teclas necess??rias a serem pressionadas:</p>

<p><span class="hardkey">Group</span> <span class="hardkey">5</span> <span class="hardkey">+</span> <span class="hardkey">8</span> <span class="hardkey">At</span> <span class="hardkey">-</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>N??s iremos faze-lo cue&nbsp;4 usando essas teclas:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">4</span> <span class="hardkey">Time</span> <span class="hardkey">2</span> <span class="hardkey">Time</span> <span class="hardkey">6</span> <span class="hardkey">Please</span></p>

<p>Agora algo extra aconteceu. Olha para a resposta do console:</p>

<div class="cl_response">Executing :&nbsp;StoreCue&nbsp;4&nbsp;Fade&nbsp;2OutFade&nbsp;6</div>

<p>Usando a tecla <span class="hardkey">Time</span> n??s armazenamos o cue com um tempo de fade de 2 e um tempo de outfade de 6.</p>

<p>O pr??ximo cue deve ser o mesmo que o cue 3, basta apenas copi??-lo:</p>

<p><span class="hardkey">Copy</span>&nbsp;<span class="hardkey">cue</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">at</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span></p>

<p>No pop-up, selecione <span class="softkey">Copiar</span> ou pressione <span class="hardkey">Please</span> novamente para confirmar.</p>

<p>N??o precisamos de um black out:</p>

<p><span class="hardkey">Group</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">&nbsp;.&nbsp;</span>&nbsp;<span class="hardkey">&nbsp;.&nbsp;</span> (lembre-se: apertar duas vezes a tecla de ponto nos deu o atalho "Zero").</p>

<p><span class="hardkey">Store</span>&nbsp;<span class="hardkey">Please</span> (isso armazena o pr??ximo cue dispon??vel com o tempo padr??o de zero segundos).</p>

<p>Esse foi o cue 6.</p>

<p>O ??ltimo cue que vamos fazer (por enquanto) ?? um cue que traz de volta a luz. Basicamente ?? o cue&nbsp;5 novamente. Mas, em vez de copiar vamos tentar algo diferente.</p>

<p>Use as teclas <span class="hardkey">Go-</span> e&nbsp;<span class="hardkey"> Go+</span> abaixo do executor principal para mover o cue n??mero 5. Observe que o&nbsp;cue ativo tem uma cor de fundo verde na vista do cue e um fundo azul na pequena vista do executor acima dos executores.</p>

<p>Portanto, este ?? o aspecto que precisamos no novo cue 7. N??s iremos usar uma fun????o chamada "StoreLook". Voc?? a obt??m pressionando e segurando a tecla <span class="hardkey">MA</span> enquanto pressiona <span class="hardkey">Store</span>. Eis os comandos:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">7</span> <span class="hardkey">Time</span> <span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<p>Tente pressionar Go + para ver como as cues 6 e 7 est??o trabalhando.</p>

<p>Observe que desta vez n??s especificamos qual o n??mero de&nbsp;cue (foi isso que fizemos anteriormente). Se voc?? n??o especificar, ent??o ele usar?? automaticamente o n??mero inteiro mais pr??ximo dispon??vel - ent??o n??s n??o precisamos fazer isso nesse exemplo.</p>

<p>Al??m disso, observe que, quando usamos o StoreLook ele cria um cue protegido - H?? um "Sim" na coluna protegida. Cues protegidos t??m uma linha branca acima do cue. Isto ?? para indicar que os valores que podemos armazenar em um dos cues anteriores, n??o ir??o trackear pelo cue protegido. Por exemplo, se adicionarmos um fixture no cue 2 em 50%, ele tamb??m estar?? em 50% de 3 a 6, mas no cue 7 automaticamente vai para 0% (ou o valor em que pode ter sido armazenado).</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Editando a lista de cue</h2>

<p>Lembra quando editamos o nome do primeiro cue? Agora temos de mudar o nome do resto deles:</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col">N??mero:</th>
			<th scope="col">Nome:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Behind Curtain</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Curtain Up</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Build</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Solo</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Return</td>
		</tr>
		<tr>
			<td>6</td>
			<td>BO</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Curtain Call</td>
		</tr>
	</tbody>
</table>

<p>Gostar??amos que o terceiro cue fosse executado automaticamente quando o segundo cue fosse conclu??do. Esta ?? uma fun????o chamada "Follow" (Seguir). Em vez de o disparo ser o Go, ele precisa ser Follow. Edite a c??lula 'Trig' no terceiro cue. A janela que se abre nos permite selecionar um disparo diferente. Pressione <span class="softkey">Follow</span>. Experimente-o. Pressione o <span class="hardkey">Go+</span> at?? chegar ao cue 2. Quando este cue ?? feito, ent??o ele ?? executado automaticamente como cue 3.</p>

<p>Estamos olhando para mais uma dessas op????es. Queremos o cue n??mero 7 para executar quatro segundos ap??s o black out (cue 6). Por isso, precisamos alterar o disparo para "Tempo". Quando voc?? fizer isso, voc?? receber?? um n??mero na coluna "Trig Time". Isso precisa ser alterado para 4. Experimente-o com o <span class="hardkey">Go+</span>.</p>

<p>Agora eu sou o designer de ilumina????o deste pequeno show, e eu mudei de ideia sobre o cue n??mero 5. Eu quero mudar este cue para que ele use cores frias em vez de cores quentes. Ent??o fa??a o seguinte:</p>

<p><span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">4</span>&nbsp;<span class="hardkey"> . </span>&nbsp;<span class="hardkey"> . </span>&nbsp;</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">4</span>&nbsp;<span class="hardkey">At</span> <span class="hardkey">7</span> <span class="hardkey">5</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">6</span> <span class="hardkey">+</span> <span class="hardkey">8</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Essas s??o as mudan??as que precisamos, agora podemos armazen??-las no cue n??mero 5:</p>

<p><span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span></p>

<p>No pop-up, voc?? precisa selecionar <span class="softkey">Merge</span> para confirmar a escolha.</p>

<p>No momento, isso ?? tudo.</p>

<p>Lembre-se de salvar o seu show (sempre).</p>

<p>&nbsp;</p>

<p>No pr??ximo cap??tulo, vamos adicionar alguns fixtures mais interessantes.</p>

<p>&nbsp;</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fc53fe83-17e5-498e-9b19-df0f847d2300">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_09_StoreCueAndPlayback/pt/1.3'; " title="Go to previous page '9 - Store a cue and play it back'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/pt/1.3';" title="Go to next page '11 - Adding LED fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17737/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

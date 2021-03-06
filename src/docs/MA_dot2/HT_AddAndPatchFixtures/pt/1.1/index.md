---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_AddAndPatchFixtures/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/pt/1.1'; " title="Go to previous page 'Fazer Update do Console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/pt/1.1';" title="Go to next page 'Salvar e Carregar seu Show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/713c4cc8-7221-428e-a635-f3eca1f59635">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13003/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Como adicionar e patchear fixtures</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Um show novo e vazio</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Tipo</a></li>
										<li><a href="#toc_header_anchor_3">Quantidade</a></li>
										<li><a href="#toc_header_anchor_4">ID</a></li>
										<li><a href="#toc_header_anchor_5">Nome</a></li>
										<li><a href="#toc_header_anchor_6">Patch</a></li>
										<li><a href="#toc_header_anchor_7">Offset</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Adicionando fixtures&nbsp;em um show que j?? tenha alguns&nbsp;fixtures</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Alterar o tipo de fixture</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Deletar&nbsp;tipos de&nbsp;Fixture&nbsp;n??o usados</a>
						</li>
				</ul>
			</div>

		<p>Nesta p??gina, vamos dar uma olhada no fluxo de trabalho ao adicionar e patchear&nbsp;fixtures em nosso show.&nbsp;N??s tamb??m iremos dar uma olhada em como remover tipos de fixture que n??o usamos.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Um show novo e vazio</h2>

<p><span style="font-size:12px">Em um show novo e vazio, precisamos adicionar alguns </span>fixture<span style="font-size:12px"> antes de podermos fazer qualquer coisa com a&nbsp;</span>dot2<span style="font-size:12px">. Se voc?? j?? tem alguns </span>fixtures<span style="font-size:12px"> em seu show, voc?? pode pular para&nbsp;</span><a href="#Adding fixture in a not empty show" style="font-size: 12px;">Adding fixtures in a show with fixtures section</a><span style="font-size:12px">&nbsp;(Adicionando&nbsp;</span>fixtures<span style="font-size:12px">&nbsp;em um show que j?? tenha alguns&nbsp;</span>fixtures<span style="font-size:12px">) dessa mesma p??gina de ajuda.</span></p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Setup</span>. Isso abre o menu de&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>. Aqui voc?? encontrar?? um bot??o chamado <span class="softkey">Menu de Patch</span>. &nbsp;Por favor, toque neste bot??o. Agora podemos ver uma lista de todos os fixtures (que ainda n??o temos) em nosso show. Agora est?? muito vazio, precisamos adicionar alguns fixtures. Toque no bot??o <span class="softkey">Adicionar novos Fixtures</span> no lado direito da tela direita.&nbsp;</p>

<p>Isso abre a vista&nbsp;<a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">Adicionar Novos Fixtures???</a>. Aqui n??s temos 6 campos de entrada verde onde temos que ajustar o conte??do. As 6 coisas que precisamos ajustar s??o:</p>

<ul>
	<li><strong>Tipo</strong>&nbsp;- Este ?? o tipo de fixture que desejamos adicionar ao nosso show</li>
	<li><strong>Quantidade</strong>&nbsp;- Esta ?? a quantidade do tipo de fixture selecionado acima que queremos adicionar???.</li>
	<li><strong>ID</strong> - Este ?? o n??mero de&nbsp;ID&nbsp;do primeiro fixture que desejamos adicionar. Se voc?? adicionar mais de um fixture, eles ser??o enumerados a partir deste n??mero. Dois fixtures n??o podem ter o mesmo n??mero de ID e todos os fixtures&nbsp;precisam ter um n??mero de ID.</li>
	<li><strong>Nome</strong>&nbsp;-&nbsp;Este ?? o nome sugerido para o fixture. Voc?? pode mudar isso para o que quiser. Se voc?? terminar o nome com um espa??o e um n??mero, ent??o os fixtures ser??o enumerados a partir deste n??mero - se voc?? adicionar mais de um fixture.</li>
	<li><strong>Patch</strong> - Este ?? o endere??o de patch de DMX do primeiro fixture que voc?? adicionar. Se voc?? estiver adicionando mais de um, ent??o os fixtures ser??o patcheados&nbsp;no pr??ximo endere??o dispon??vel a partir deste n??mero.</li>
	<li><strong>Offset</strong>&nbsp;-&nbsp;Isso pode ser usado para adicionar automaticamente canais de DMX vazios entre seus fixtures.</li>
</ul>

<p>Alguns dos campos tem os tr??s pequenos pontos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">. Isso geralmente abre um menu para baixo.</p>

<p>Os ??cones de mais/menos s??o usados para aumentar ou diminuir o valor.</p>

<p>O pequeno ??cone de teclado <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG" style="height:auto">&nbsp;ir?? abrir um teclado na tela.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Tipo</h3>

<p>Se voc?? tocar nos tr??s pontos no campo de Tipo, ent??o voc?? ver?? uma lista de tipos de fixtures importados para o nosso show. Isso geralmente inclui um fixture simples de&nbsp;dimmer e alguns diferentes fixtures&nbsp;de LED. Voc?? pode selecionar um dos fixtures&nbsp;na lista. Se o fixture que voc?? est?? tentando adicionar n??o estiver na lista, voc?? pode tocar em <span class="softkey">Selecionar outro...</span> ao lado.</p>

<p>Isso abrir?? a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">biblioteca de tipo de fixture</a>. Aqui voc?? pode selecionar um dos tipos de fixture e import??-lo para seu show. Isso significa que voc?? tira uma c??pia da biblioteca e a coloca em seu show. Voc?? pode usar os encoders para alterar o drive. <strong>Internamente</strong> est?? a unidade de drive da dot2, se voc?? tem um dispositivo USB conectado, ent??o voc?? pode mudar para a biblioteca do drive USB.</p>

<p>Os outros encoders s??o usados para: alterar o fabricante do fixture, o tipo de&nbsp;fixture&nbsp;e se o fixture&nbsp;tem mais de um modo. Voc?? pode usar o encoder direito para selecionar o modo do fixture.</p>

<p>Voc?? tamb??m pode digitar algo no campo de pesquisa verde. Aqui voc?? pode escrever o nome do fabricante ou nome do fixture. A pesquisa ?? feita em ambos os fabricantes e fixtures.</p>

<p>Depois de ter localizado e selecionado o fixture que voc?? deseja adicionar, voc?? pode tocar no bot??o <span class="softkey">Ok</span>, no canto superior direito.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Quantidade</h3>

<p>Voc?? pode ajustar a quantidade de fixtures que voc?? deseja adicionar. Voc?? pode tocar no campo de entrada e usar as teclas num??ricas para alterar o n??mero ou voc?? pode usar o - e + no lado direito do campo de entrada para ajustar o n??mero. Voc?? tamb??m pode girar o encoder m??dio esquerdo.</p>

<p>Defina a quantidade de fixtures que voc?? deseja adicionar.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>ID</h3>

<p>Todos os&nbsp;fixtures&nbsp;em nosso show precisam de um n??mero de&nbsp;ID&nbsp;??nico. Dois&nbsp;fixtures&nbsp;n??o podem ter o mesmo n??mero de&nbsp;ID e todos os fixtures&nbsp;precisam ter um n??mero de ID.</p>

<p>Voc?? pode ajustar o n??mero de&nbsp;ID&nbsp;do mesmo jeito que ajustamos a quantidade. E voc?? tem uma op????o extra. Se tocar no bot??o<span class="softkey">&nbsp;Selecionar...</span>&nbsp;voc?? abre a <a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar ID(s) de Fixtures</a>. Isto pode ser utilizado para visualizar quais&nbsp;IDs de fixture est??o dispon??veis e quais IDs&nbsp;est??o sendo utilizados. Nesse momento voc?? tem um show vazio e por isso n??o h?? nenhum conflito de ID ou IDs&nbsp;que j?? est??o sendo utilizados. Vamos voltar para isso quando adicionarmos fixtures em um show que j?? tenha alguns fixtures.</p>

<p>Selecione o n??mero de ID do primeiro fixture.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Nome</h3>

<p>Voc?? pode dar a seus fixtures um nome, para que seja mais f??cil para voc?? lembrar o que eles s??o.</p>

<p>Voc?? pode tocar no pequeno ??cone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;de teclado abrir o teclado na tela ou voc?? pode usar um teclado externo. Se voc?? lhe der um nome e der um espa??o e adicionar um n??mero, os fixtures ser??o enumerados a partir deste n??mero, isso se voc?? estiver adicionando mais de um fixture.</p>

<p>O nome n??o tem que ser ??nico.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Patch</h3>

<p>Os fixtures que adicionamos precisam de um endere??o de patch de&nbsp;DMX, para que sejamos capazes de control??-los. A&nbsp;dot2 sugere o primeiro endere??o dispon??vel depois do ??ltimo fixture patcheado.</p>

<p>Voc?? tem v??rias op????es para ajustar este valor. Tocando nos tr??s pontos brancos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;, voc?? abrir?? um menu para baixo que lhe permite ajustar o n??mero do universo e o endere??o de&nbsp;DMX no universo selecionado.</p>

<p>Voc?? pode tocar no campo de entrada e usar as teclas num??ricas para introduzir um endere??o de&nbsp;DMX. Se voc?? digit??-lo diretamente, ent??o voc?? precisa separar o n??mero do universo e o endere??o de&nbsp;DMX&nbsp;usando um ponto.</p>

<p>Voc?? tamb??m pode tocar no bot??o&nbsp;<span class="softkey">Selecionar...</span>&nbsp;no lado direito (perto de Offset) e abrir a??? <a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Janela Selecionar o Endere??o de DMX...</a>. Isso permite que voc?? selecione o universo no lado esquerdo da tela e selecione um endere??o no universo selecionado no lado direito da tela. Voc?? pode usar os&nbsp;encoders&nbsp;da esquerda e da direita para selecionar o universo e o endere??o de&nbsp;DMX. O encoder direito do meio pode ser usado para definir o Offset (leia sobre isso abaixo). Quando voc?? tiver selecionado um endere??o de&nbsp;DMX, voc?? pode tocar no bot??o&nbsp;<span class="softkey">Ok</span>, no canto superior direito para confirmar sua escolha na janela Selecionar Endere??o de DMX. .</p>

<p>O endere??o de&nbsp;patch&nbsp;precisa ser ??nico. Voc?? n??o pode ter&nbsp;fixtures&nbsp;que utilizam os mesmos endere??os de&nbsp;DMX.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Offset</h3>

<p>O Offset pode ser usado para adicionar automaticamente os canais de DMX vazios entre seus fixtures. Se voc?? adicionar 10 fixtures que utilizam 16 canais de DMX cada, o console ir?? patchear ele um ao lado do outro sem qualquer espa??o (gap) entre eles. Assim, o primeiro ser?? no endere??o 1 o pr??ximo em 17, o pr??ximo em 34, etc. Se voc?? quer um espa??o (gap), ent??o voc?? pode adicionar automaticamente isso. Se voc?? configurar o Offset maior do que a quantidade de canais que o fixture usa, ent??o este ser?? o endere??o de in??cio para os fixtures. Por exemplo, n??s patcheamos os 10 fixtures com 16 canais e temos o Offset em 20, ent??o o primeiro estar?? em 1, pr??ximo estar?? em 21, o pr??ximo em 41, pr??ximo 61, etc. Isso pode ser mais f??cil de endere??ar, a menos que voc?? n??o esteja ficando sem canais DMX.???</p>

<p>&nbsp;</p>

<p>Depois de ajustar os campos de entrada da sua maneira, voc?? pode tocar no bot??o&nbsp;<span class="softkey">Ok</span>, no canto superior direito para confirmar suas escolhas. Isto o leva de volta para a&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Janelo do Menu de Patch</a>.&nbsp;Voc?? pode ver os fixtures que voc?? adicionou. Cada Fixture&nbsp;tem sua pr??pria linha e as colunas permitem que voc?? edite qualquer campo que voc?? deseja. Para mais detalhes sobre a janela do Menu de&nbsp;Patch, siga o link acima.</p>

<p>Para finalizar as altera????es de nosso show e adicionar o fixture, por favor toque no bot??o Ok no canto superior direito. Isso lhe d?? uma janela que lhe pede para confirmar que voc?? deseja aplicar as altera????es feitas no seu show. Toque em <span class="softkey">Ok, Aplicar Todas as Altera????es</span>.</p>

<p>Voc?? acabou de adicionar alguns fixtures em seu show.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Adicionando fixtures&nbsp;em um show que j?? tenha alguns&nbsp;fixtures</h2>

<p>Se o seu show j?? tem alguns fixtures, mas voc?? precisa adicionar novos, ent??o voc?? precisa prestar aten????o nos&nbsp;fixtures j?? existentes em seu show. O processo ?? basicamente o mesmo descrito acima, mas agora o seu show j?? tem alguns fixtures, e como algumas das configura????es dos fixtures devem ser ??nicas, voc?? vai precisar adicionar os fixtures com informa????o de patch e n??mero de ID ??nicos.</p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;o bot??o&nbsp;<span class="softkey">Menu de Patch</span>. Isso nos dar?? a&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Janela do Menu de Patch</a>.&nbsp;Aqui voc?? pode ver os fixtures existentes. Para adicionar mais, voc?? precisa tocar no bot??o&nbsp;<span class="softkey">Adicionar novos fixtures</span>.</p>

<p>Agora voc?? precisa ajustar os cinco campos de entrada correspondentes ??s suas necessidades.</p>

<p>Algumas das janelas ser??o agora um pouco diferente, j?? que j?? temos fixtures no show. Se voc?? tocar no bot??o <span class="softkey">Selecionar...</span> ao lado do campo de ID, voc?? ver?? alguns dos campos de ID na&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar ID(s) de Fixtures</a>&nbsp;agora est??o acinzentados e tem um nome de fixture nos ID(s) que est??o ocupados.</p>

<p>O mesmo acontece na&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">janela Selecionar o Endere??o de DMX</a>. Toque no bot??o&nbsp;<span class="softkey">Selecionar...</span>&nbsp;ao lado do campo de entrada de Patch. Aqui voc?? pode ver o seletor de universo no lado esquerdo da tela que os fixtures existentes est??o ocupando alguns dos endere??os de&nbsp;DMX nos universos - algumas das ??reas de dentro do quadrado est??o preenchidas.</p>

<p>Voc?? precisa selecionar os n??meros de ID de fixture dispon??veis e patchear endere??os. Eles precisam ser n??meros exclusivos.</p>

<p>Depois de ajustar os campos de entrada verde para atender ??s suas necessidades, ent??o voc?? pode tocar no bot??o <span class="softkey">Ok</span>&nbsp;no canto superior direito e sair da&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">janela do Menu de Patch</a>&nbsp;tocando em <span class="softkey">Ok</span> no canto superior direito para confirmar que esta ?? a sua nova configura????o de fixture. E, finalmente, confirme <span class="softkey">Ok, Aplicar Todas as Altera????es</span>.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Alterar o tipo de fixture</h2>

<p>Voc?? pode alterar o tipo de fixture de seus fixtures j?? patcheados. O console far?? o seu melhor para substituir os valores programados. Se voc?? alterar o tipo de fixture em um fixture que voc?? j?? programou, ent??o o console ir?? manter o m??ximo de dados poss??vel. Ele tentar?? converter os dados para o valor mais pr??ximo. Por exemplo, se voc?? tiver programado algumas luzes LED wash e, ent??o substitu??-las por algo que s?? tem uma roda de cor, o console ir?? tentar selecionar a cor correspondente mais pr??ximo na roda. ??&nbsp;uma boa id??ia para programar usando presets. Isso torna mais f??cil para corrigir a programa????o ap??s a altera????o do tipo de fixture.</p>

<p>Se voc?? deseja alterar o tipo de fixture, pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e ent??o&nbsp;<span class="softkey">Menu de Patch</span>. Ent??o selecione os fixtures que voc?? deseja alterar e toque <span class="softkey">Alterar Tipo de&nbsp;Fixture</span>. Isso abrir?? a&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">janela Selecionar Tipo de Fixture...</a>. Aqui voc?? pode ver todos os tipos de fixtures atuais em seu show. Aqui voc?? pode selecionar um dos tipos de fixture ou voc?? pode tocar o bot??o que diz <span class="softkey">Importar</span> na barra de t??tulo, isto ir?? abrir a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">janela Importar Tipo de Fixture</a>&nbsp;- aqui voc?? pode importar um novo tipo de fixture em seu show.</p>

<p>Quando voc?? selecionar o tipo de fixture que voc?? quer, ent??o voc?? pode tocar <span class="softkey">Ok</span> no canto superior direito.&nbsp;</p>

<p>Se voc?? alterar o tipo de fixture a algo que usa uma quantidade diferente de canais de DMX, ent??o talvez voc?? precise voltar a patchear seus fixtures.</p>

<p>e, ent??o&nbsp;<span class="softkey">Ok</span>&nbsp;para sair do menu de Fixture, em seguida, <span class="softkey">Aplicar Todas as Altera????es</span>. Agora voc?? alterou o tipo de fixture. Voc?? deve agora verificar o seu cues.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Deletar&nbsp;tipos de&nbsp;Fixture&nbsp;n??o usados</h2>

<p>Quando n??s vimos como alterar o tipo de fixture, n??s vimos a&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">janela Selecionar Tipo de Fixture...</a>. Aqui tamb??m podemos deletar Tipos de Fixa????o n??o utilizados. Abra-o como descrito acima. Na barra de t??tulo h?? um ??cone de lixeira???&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType07_1-1-3.png" style="height:auto">. Se voc?? selecionar um dos tipos de fixture e, em seguida, tocar neste ??cone, ele ir?? ent??o perguntar se voc?? realmente deseja deletar o tipo de fixture. Aqui voc?? pode confirmar ou cancelar a opera????o.</p>

<div class="restriction">&nbsp;Voc?? n??o pode excluir tipos de&nbsp;fixture&nbsp;que est??o atribu??dos e&nbsp;patcheados!</div>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/pt/1.1'; " title="Go to previous page 'Fazer Update do Console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/pt/1.1';" title="Go to next page 'Salvar e Carregar seu Show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13003/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

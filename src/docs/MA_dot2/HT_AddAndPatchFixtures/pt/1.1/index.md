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
							<a href="#toc_header_anchor_8">Adicionando fixtures&nbsp;em um show que já tenha alguns&nbsp;fixtures</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Alterar o tipo de fixture</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Deletar&nbsp;tipos de&nbsp;Fixture&nbsp;não usados</a>
						</li>
				</ul>
			</div>

		<p>Nesta página, vamos dar uma olhada no fluxo de trabalho ao adicionar e patchear&nbsp;fixtures em nosso show.&nbsp;Nós também iremos dar uma olhada em como remover tipos de fixture que não usamos.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Um show novo e vazio</h2>

<p><span style="font-size:12px">Em um show novo e vazio, precisamos adicionar alguns </span>fixture<span style="font-size:12px"> antes de podermos fazer qualquer coisa com a&nbsp;</span>dot2<span style="font-size:12px">. Se você já tem alguns </span>fixtures<span style="font-size:12px"> em seu show, você pode pular para&nbsp;</span><a href="#Adding fixture in a not empty show" style="font-size: 12px;">Adding fixtures in a show with fixtures section</a><span style="font-size:12px">&nbsp;(Adicionando&nbsp;</span>fixtures<span style="font-size:12px">&nbsp;em um show que já tenha alguns&nbsp;</span>fixtures<span style="font-size:12px">) dessa mesma página de ajuda.</span></p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Setup</span>. Isso abre o menu de&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>. Aqui você encontrará um botão chamado <span class="softkey">Menu de Patch</span>. &nbsp;Por favor, toque neste botão. Agora podemos ver uma lista de todos os fixtures (que ainda não temos) em nosso show. Agora está muito vazio, precisamos adicionar alguns fixtures. Toque no botão <span class="softkey">Adicionar novos Fixtures</span> no lado direito da tela direita.&nbsp;</p>

<p>Isso abre a vista&nbsp;<a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">Adicionar Novos Fixtures​</a>. Aqui nós temos 6 campos de entrada verde onde temos que ajustar o conteúdo. As 6 coisas que precisamos ajustar são:</p>

<ul>
	<li><strong>Tipo</strong>&nbsp;- Este é o tipo de fixture que desejamos adicionar ao nosso show</li>
	<li><strong>Quantidade</strong>&nbsp;- Esta é a quantidade do tipo de fixture selecionado acima que queremos adicionar​.</li>
	<li><strong>ID</strong> - Este é o número de&nbsp;ID&nbsp;do primeiro fixture que desejamos adicionar. Se você adicionar mais de um fixture, eles serão enumerados a partir deste número. Dois fixtures não podem ter o mesmo número de ID e todos os fixtures&nbsp;precisam ter um número de ID.</li>
	<li><strong>Nome</strong>&nbsp;-&nbsp;Este é o nome sugerido para o fixture. Você pode mudar isso para o que quiser. Se você terminar o nome com um espaço e um número, então os fixtures serão enumerados a partir deste número - se você adicionar mais de um fixture.</li>
	<li><strong>Patch</strong> - Este é o endereço de patch de DMX do primeiro fixture que você adicionar. Se você estiver adicionando mais de um, então os fixtures serão patcheados&nbsp;no próximo endereço disponível a partir deste número.</li>
	<li><strong>Offset</strong>&nbsp;-&nbsp;Isso pode ser usado para adicionar automaticamente canais de DMX vazios entre seus fixtures.</li>
</ul>

<p>Alguns dos campos tem os três pequenos pontos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">. Isso geralmente abre um menu para baixo.</p>

<p>Os ícones de mais/menos são usados para aumentar ou diminuir o valor.</p>

<p>O pequeno ícone de teclado <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG" style="height:auto">&nbsp;irá abrir um teclado na tela.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Tipo</h3>

<p>Se você tocar nos três pontos no campo de Tipo, então você verá uma lista de tipos de fixtures importados para o nosso show. Isso geralmente inclui um fixture simples de&nbsp;dimmer e alguns diferentes fixtures&nbsp;de LED. Você pode selecionar um dos fixtures&nbsp;na lista. Se o fixture que você está tentando adicionar não estiver na lista, você pode tocar em <span class="softkey">Selecionar outro...</span> ao lado.</p>

<p>Isso abrirá a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">biblioteca de tipo de fixture</a>. Aqui você pode selecionar um dos tipos de fixture e importá-lo para seu show. Isso significa que você tira uma cópia da biblioteca e a coloca em seu show. Você pode usar os encoders para alterar o drive. <strong>Internamente</strong> está a unidade de drive da dot2, se você tem um dispositivo USB conectado, então você pode mudar para a biblioteca do drive USB.</p>

<p>Os outros encoders são usados para: alterar o fabricante do fixture, o tipo de&nbsp;fixture&nbsp;e se o fixture&nbsp;tem mais de um modo. Você pode usar o encoder direito para selecionar o modo do fixture.</p>

<p>Você também pode digitar algo no campo de pesquisa verde. Aqui você pode escrever o nome do fabricante ou nome do fixture. A pesquisa é feita em ambos os fabricantes e fixtures.</p>

<p>Depois de ter localizado e selecionado o fixture que você deseja adicionar, você pode tocar no botão <span class="softkey">Ok</span>, no canto superior direito.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Quantidade</h3>

<p>Você pode ajustar a quantidade de fixtures que você deseja adicionar. Você pode tocar no campo de entrada e usar as teclas numéricas para alterar o número ou você pode usar o - e + no lado direito do campo de entrada para ajustar o número. Você também pode girar o encoder médio esquerdo.</p>

<p>Defina a quantidade de fixtures que você deseja adicionar.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>ID</h3>

<p>Todos os&nbsp;fixtures&nbsp;em nosso show precisam de um número de&nbsp;ID&nbsp;único. Dois&nbsp;fixtures&nbsp;não podem ter o mesmo número de&nbsp;ID e todos os fixtures&nbsp;precisam ter um número de ID.</p>

<p>Você pode ajustar o número de&nbsp;ID&nbsp;do mesmo jeito que ajustamos a quantidade. E você tem uma opção extra. Se tocar no botão<span class="softkey">&nbsp;Selecionar...</span>&nbsp;você abre a <a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar ID(s) de Fixtures</a>. Isto pode ser utilizado para visualizar quais&nbsp;IDs de fixture estão disponíveis e quais IDs&nbsp;estão sendo utilizados. Nesse momento você tem um show vazio e por isso não há nenhum conflito de ID ou IDs&nbsp;que já estão sendo utilizados. Vamos voltar para isso quando adicionarmos fixtures em um show que já tenha alguns fixtures.</p>

<p>Selecione o número de ID do primeiro fixture.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Nome</h3>

<p>Você pode dar a seus fixtures um nome, para que seja mais fácil para você lembrar o que eles são.</p>

<p>Você pode tocar no pequeno ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;de teclado abrir o teclado na tela ou você pode usar um teclado externo. Se você lhe der um nome e der um espaço e adicionar um número, os fixtures serão enumerados a partir deste número, isso se você estiver adicionando mais de um fixture.</p>

<p>O nome não tem que ser único.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Patch</h3>

<p>Os fixtures que adicionamos precisam de um endereço de patch de&nbsp;DMX, para que sejamos capazes de controlá-los. A&nbsp;dot2 sugere o primeiro endereço disponível depois do último fixture patcheado.</p>

<p>Você tem várias opções para ajustar este valor. Tocando nos três pontos brancos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;, você abrirá um menu para baixo que lhe permite ajustar o número do universo e o endereço de&nbsp;DMX no universo selecionado.</p>

<p>Você pode tocar no campo de entrada e usar as teclas numéricas para introduzir um endereço de&nbsp;DMX. Se você digitá-lo diretamente, então você precisa separar o número do universo e o endereço de&nbsp;DMX&nbsp;usando um ponto.</p>

<p>Você também pode tocar no botão&nbsp;<span class="softkey">Selecionar...</span>&nbsp;no lado direito (perto de Offset) e abrir a​ <a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Janela Selecionar o Endereço de DMX...</a>. Isso permite que você selecione o universo no lado esquerdo da tela e selecione um endereço no universo selecionado no lado direito da tela. Você pode usar os&nbsp;encoders&nbsp;da esquerda e da direita para selecionar o universo e o endereço de&nbsp;DMX. O encoder direito do meio pode ser usado para definir o Offset (leia sobre isso abaixo). Quando você tiver selecionado um endereço de&nbsp;DMX, você pode tocar no botão&nbsp;<span class="softkey">Ok</span>, no canto superior direito para confirmar sua escolha na janela Selecionar Endereço de DMX. .</p>

<p>O endereço de&nbsp;patch&nbsp;precisa ser único. Você não pode ter&nbsp;fixtures&nbsp;que utilizam os mesmos endereços de&nbsp;DMX.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Offset</h3>

<p>O Offset pode ser usado para adicionar automaticamente os canais de DMX vazios entre seus fixtures. Se você adicionar 10 fixtures que utilizam 16 canais de DMX cada, o console irá patchear ele um ao lado do outro sem qualquer espaço (gap) entre eles. Assim, o primeiro será no endereço 1 o próximo em 17, o próximo em 34, etc. Se você quer um espaço (gap), então você pode adicionar automaticamente isso. Se você configurar o Offset maior do que a quantidade de canais que o fixture usa, então este será o endereço de início para os fixtures. Por exemplo, nós patcheamos os 10 fixtures com 16 canais e temos o Offset em 20, então o primeiro estará em 1, próximo estará em 21, o próximo em 41, próximo 61, etc. Isso pode ser mais fácil de endereçar, a menos que você não esteja ficando sem canais DMX.​</p>

<p>&nbsp;</p>

<p>Depois de ajustar os campos de entrada da sua maneira, você pode tocar no botão&nbsp;<span class="softkey">Ok</span>, no canto superior direito para confirmar suas escolhas. Isto o leva de volta para a&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Janelo do Menu de Patch</a>.&nbsp;Você pode ver os fixtures que você adicionou. Cada Fixture&nbsp;tem sua própria linha e as colunas permitem que você edite qualquer campo que você deseja. Para mais detalhes sobre a janela do Menu de&nbsp;Patch, siga o link acima.</p>

<p>Para finalizar as alterações de nosso show e adicionar o fixture, por favor toque no botão Ok no canto superior direito. Isso lhe dá uma janela que lhe pede para confirmar que você deseja aplicar as alterações feitas no seu show. Toque em <span class="softkey">Ok, Aplicar Todas as Alterações</span>.</p>

<p>Você acabou de adicionar alguns fixtures em seu show.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Adicionando fixtures&nbsp;em um show que já tenha alguns&nbsp;fixtures</h2>

<p>Se o seu show já tem alguns fixtures, mas você precisa adicionar novos, então você precisa prestar atenção nos&nbsp;fixtures já existentes em seu show. O processo é basicamente o mesmo descrito acima, mas agora o seu show já tem alguns fixtures, e como algumas das configurações dos fixtures devem ser únicas, você vai precisar adicionar os fixtures com informação de patch e número de ID únicos.</p>

<p>Pressione a tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;o botão&nbsp;<span class="softkey">Menu de Patch</span>. Isso nos dará a&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Janela do Menu de Patch</a>.&nbsp;Aqui você pode ver os fixtures existentes. Para adicionar mais, você precisa tocar no botão&nbsp;<span class="softkey">Adicionar novos fixtures</span>.</p>

<p>Agora você precisa ajustar os cinco campos de entrada correspondentes às suas necessidades.</p>

<p>Algumas das janelas serão agora um pouco diferente, já que já temos fixtures no show. Se você tocar no botão <span class="softkey">Selecionar...</span> ao lado do campo de ID, você verá alguns dos campos de ID na&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">janela Selecionar ID(s) de Fixtures</a>&nbsp;agora estão acinzentados e tem um nome de fixture nos ID(s) que estão ocupados.</p>

<p>O mesmo acontece na&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">janela Selecionar o Endereço de DMX</a>. Toque no botão&nbsp;<span class="softkey">Selecionar...</span>&nbsp;ao lado do campo de entrada de Patch. Aqui você pode ver o seletor de universo no lado esquerdo da tela que os fixtures existentes estão ocupando alguns dos endereços de&nbsp;DMX nos universos - algumas das áreas de dentro do quadrado estão preenchidas.</p>

<p>Você precisa selecionar os números de ID de fixture disponíveis e patchear endereços. Eles precisam ser números exclusivos.</p>

<p>Depois de ajustar os campos de entrada verde para atender às suas necessidades, então você pode tocar no botão <span class="softkey">Ok</span>&nbsp;no canto superior direito e sair da&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">janela do Menu de Patch</a>&nbsp;tocando em <span class="softkey">Ok</span> no canto superior direito para confirmar que esta é a sua nova configuração de fixture. E, finalmente, confirme <span class="softkey">Ok, Aplicar Todas as Alterações</span>.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Alterar o tipo de fixture</h2>

<p>Você pode alterar o tipo de fixture de seus fixtures já patcheados. O console fará o seu melhor para substituir os valores programados. Se você alterar o tipo de fixture em um fixture que você já programou, então o console irá manter o máximo de dados possível. Ele tentará converter os dados para o valor mais próximo. Por exemplo, se você tiver programado algumas luzes LED wash e, então substituí-las por algo que só tem uma roda de cor, o console irá tentar selecionar a cor correspondente mais próximo na roda. É&nbsp;uma boa idéia para programar usando presets. Isso torna mais fácil para corrigir a programação após a alteração do tipo de fixture.</p>

<p>Se você deseja alterar o tipo de fixture, pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e então&nbsp;<span class="softkey">Menu de Patch</span>. Então selecione os fixtures que você deseja alterar e toque <span class="softkey">Alterar Tipo de&nbsp;Fixture</span>. Isso abrirá a&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">janela Selecionar Tipo de Fixture...</a>. Aqui você pode ver todos os tipos de fixtures atuais em seu show. Aqui você pode selecionar um dos tipos de fixture ou você pode tocar o botão que diz <span class="softkey">Importar</span> na barra de título, isto irá abrir a&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">janela Importar Tipo de Fixture</a>&nbsp;- aqui você pode importar um novo tipo de fixture em seu show.</p>

<p>Quando você selecionar o tipo de fixture que você quer, então você pode tocar <span class="softkey">Ok</span> no canto superior direito.&nbsp;</p>

<p>Se você alterar o tipo de fixture a algo que usa uma quantidade diferente de canais de DMX, então talvez você precise voltar a patchear seus fixtures.</p>

<p>e, então&nbsp;<span class="softkey">Ok</span>&nbsp;para sair do menu de Fixture, em seguida, <span class="softkey">Aplicar Todas as Alterações</span>. Agora você alterou o tipo de fixture. Você deve agora verificar o seu cues.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Deletar&nbsp;tipos de&nbsp;Fixture&nbsp;não usados</h2>

<p>Quando nós vimos como alterar o tipo de fixture, nós vimos a&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">janela Selecionar Tipo de Fixture...</a>. Aqui também podemos deletar Tipos de Fixação não utilizados. Abra-o como descrito acima. Na barra de título há um ícone de lixeira​&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType07_1-1-3.png" style="height:auto">. Se você selecionar um dos tipos de fixture e, em seguida, tocar neste ícone, ele irá então perguntar se você realmente deseja deletar o tipo de fixture. Aqui você pode confirmar ou cancelar a operação.</p>

<div class="restriction">&nbsp;Você não pode excluir tipos de&nbsp;fixture&nbsp;que estão atribuídos e&nbsp;patcheados!</div>

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

	

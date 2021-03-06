---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_WingsNodes3DOnPC/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="021f5292-de29-41b0-9552-3540e90ba5de">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.1'; " title="Go to previous page 'Trabalhar com Efeitos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.1';" title="Go to next page 'Usar disparos de entrada externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/021f5292-de29-41b0-9552-3540e90ba5de">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13071/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Como conectar nodes, wings, 3D e onPC</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">dot2 Wings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">dot2 consoles, dot2 onPC e dot2&nbsp;visualizador&nbsp;3D</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">dot2 Node4 (1k)</a>
						</li>
				</ul>
			</div>

		<p>H?? v??rias coisas que voc?? pode conectar juntas. Tudo est?? conectado em uma&nbsp;infra-estrutura de rede Ethernet. Isso significa que voc?? precisa conectar todos os seus dispositivos usando&nbsp;cabos Ethernet (de qualidade Cat.5e ou at?? melhor) a um switch&nbsp;de rede que suporte a velocidade m??nima de 100 MB e o switch&nbsp;tamb??m precisa ser capaz de suportar&nbsp;Multicast. Todos os dispositivos na rede usam&nbsp;IPv6&nbsp;para falar uns com os outros - por isso o switch&nbsp;tamb??m tem que ser capaz de suportar isso.</p>

<p>Se voc?? n??o sabe o que ?? IPv6 e voc?? tiver problemas com as conex??es, leia a <a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">p??gina de ajuda O que ?? IPv6?</a>.</p>

<p>Se voc?? tiver qualquer d??vida sobre qual switch&nbsp;de rede utilizar, contacte o seu distribuidor local. Eles ir??o ajud??-lo a selecionar uma op????o apropriada.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Voc?? pode conectar wings ao seu console dot2 ou ao&nbsp;dot2 onPC. As wings s??o atribu??das a um dispositivo espec??fico. Se este dispositivo for perdido na rede, ent??o a wing perde sua funcionalidade e espera para ser atribu??da a um dispositivo diferente.</p>

<p>Existem dois tipos de wings: a dot2&nbsp;Fader&nbsp;wing&nbsp;(F-wing) e a&nbsp;dot2&nbsp;Button&nbsp;wing&nbsp;(B-wing). Cada uma lhe d?? mais executores f??sicos e uma tela extra.</p>

<p>Uma vez que as wings&nbsp;est??o conectadas diretamente a um dispositivo espec??fico, voc?? vai precisar abrir o menu de Setup (configura????o) no dispositivo que voc?? deseja conectar uma wing. No menu de Setup, voc?? vai encontrar um bot??o chamado <span class="softkey">dot2&nbsp;wings</span>, toque nele.</p>

<p>Isso lhe dar?? a&nbsp;<a href="/Topic/76a4961b-8fb5-4482-b0af-894a4a931aa9">vista de Wings</a>. Aqui voc?? pode tocar um dos slots dispon??veis (barra amarela no lado esquerdo) do mesmo tipo que a sua wing. Existem apenas cinco slots&nbsp;para cada dispositivo. Dependendo de seus dispositivos, voc?? pode ter apenas alguns slots&nbsp;dispon??veis. Slots que est??o ocupados pelo console, tem uma barra vermelha no lado esquerdo - eles s??o chamados de "fixados, internamente". Slots que est??o atualmente ocupados por uma wing externa ter??o uma barra verde no lado esquerdo.</p>

<p>Quando voc?? toca em um slot livre, voc?? ver?? as wings dispon??veis em sua rede. Se voc?? n??o v?? nenhuma wing aqui, ent??o voc?? precisa verificar sua rede e as conex??es - tamb??m se certificar de que tudo est?? ligado.</p>

<p>Quando voc?? v?? uma wing no lado esquerdo da tela, ent??o voc?? pode tocar nela. A wing que voc?? selecionou far?? agora todas as teclas piscarem. Isso ?? para que voc?? possa identificar a wing selecionada em uma configura????o de v??rias wings. Quando a wing correta estiver piscando, ent??o voc?? pode tocar no bot??o <span class="softkey">Atribuir Selecionado.</span></p>

<p>Agora voc?? tem uma wing&nbsp;atribu??da e conectada e voc?? pode sair do menu.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>dot2 consoles, dot2 onPC e dot2&nbsp;visualizador&nbsp;3D</h2>

<p>Tudo, exceto as wings, s??o conectadas a uma <strong>sess??o</strong>. Wings s??o conectadas a dispositivos espec??ficos. Pode haver 4 sess??es separadas em execu????o em sua rede.</p>

<p>O sistema de sess??o permite uma maior flexibilidade no que diz respeito a backup e redund??ncia.</p>

<p>Pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois o bot??o&nbsp;<span class="softkey">Sess??es</span>&nbsp;. Isso lhe dar?? a&nbsp;<a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">vista de Configura????o de Rede</a>.&nbsp;Esta vista ?? separada em duas partes, a parte de cima mostra-lhe se o seu console ou onPC est?? atualmente em uma sess??o de rede ou n??o.</p>

<p>Se o bot??o do lado direito diz <span class="softkey">Come??ar uma nova sess??o ou juntar-se a uma existente</span>, ent??o voc?? pode pression??-lo para ver as 4 sess??es diferentes. Se h?? alguns dispositivos usando uma das sess??es, ent??o o bot??o da sess??o ter?? o nome da sess??o e o bot??o dir?? <span class="softkey">Juntar-se a Sess??o</span>. Se n??o houver nenhuma sess??o em execu????o, voc?? pode escolher uma sess??o e iniciar uma nova sess??o. Agora voc?? pode adicionar mais dispositivos na sua sess??o.</p>

<p>Se o bot??o na parte superior disser <span class="softkey">Parar/Deixar Sess??o</span>, ent??o o console j?? est?? conectado a uma sess??o. e voc?? pode adicionar mais dispositivos para sua sess??o.</p>

<p>A parte inferior da vista de Configura????o de Rede mostra os dispositivos em sua sess??o. Eles s??o separados em cada tipo de dispositivo.&nbsp;<span style="font-size:12px">Se voc?? tiver dispositivos em sua rede e eles est??o em sua sess??o, eles ter??o uma cor de fundo verde. O dispositivo que voc?? est?? atualmente olhando ter?? uma cor de fundo verde mais brilhante. Se voc?? n??o tem mais um dispositivo que anteriormente estava em sua sess??o, ent??o a cor de fundo ser?? vermelha.</span><span style="font-size:12px">Voc?? pode ver o endere??o de </span>IPv6<span style="font-size:12px">, o nome e o n??mero da vers??o dos dispositivos conectados.</span></p>

<p>Voc?? pode tocar no bot??o <span class="softkey">Adicionar</span> para visualizar todos os dispositivos desconectados em sua rede. Aqui voc?? pode selecionar o dispositivo que voc?? deseja adicionar ?? sua sess??o. Quando voc?? escolher um, ele ser?? conectado a sua sess??o e ele ir?? obter o arquivo de show que a sess??o est?? executando. Se n??o houver quaisquer dispositivos na <a href="/Topic/a37aaf87-aca9-4dab-98fd-2ea655a80018">vista Selecionar uma esta????o</a>, ent??o o console n??o consegue ver o dispositivo na rede. Se voc?? espera ver um dispositivo, voc?? deve primeiro verificar os cabos de rede e energia.</p>

<p>Se voc?? tiver conectado um console com um onPC, ent??o voc?? tem controle total de 4096 canais de&nbsp;DMX. O&nbsp;onPC funciona como um backup para o seu console. Portanto, se o seu console por algum motivo parar de funcionar (talvez se a energia cair), ent??o o seu onPC vai assumir e voc?? ainda pode controlar os 4096 canais de&nbsp;DMX. A sa??da de&nbsp;DMX do console n??o funciona se o console n??o funciona. Assim, voc?? pode adicionar dot2 node4 (1K)s ?? sua rede. Isso permite que voc?? tenha um backup ou uma sa??da remota de&nbsp;DMX.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>dot2 Node4 (1k)</h2>

<p>Ligar um Node4&nbsp;a seu sistema, funciona exatamente como a descri????o acima - lembre-se de selecionar a sess??o <span class="softkey">DMX Nodes</span>. Nodes n??o pode inicializar uma sess??o, eles est??o conectados e escutam a conversa na rede. Eles, ent??o, levam a informa????o de&nbsp;DMX&nbsp;para sess??o e convertem-a para sa??da real de&nbsp;DMX.</p>

<p>O dot2&nbsp;Node4 (1K) permite controlar canais de&nbsp;DMX 1024 quando voc?? conecta um dot2 onPC e um dot2&nbsp;Node4 (1K). O&nbsp;dot2 onPC s?? pode controlar 1024 canais, quando ele n??o est?? conectado a um console dot2.</p>

<p>Os nodes s??o pouco diferentes na vista de Configura????o de Rede. Voc?? pode configurar em quais universos os nodes controlar??o as sa??das. Na lista, ela poderia ser assim:</p>

<p><img alt="" src="/Media/Image/Dot2_HT_ConnectWingsNodes3dOnpc_01_1-0.png"></p>

<p>Aqui voc?? pode ver que cada um dos dois nodes&nbsp;conectados, controlam a sa??da dos 4 universos. Um node s?? pode controlar a sa??da do universo 1 ao 4 ou 5 ao 8. Voc?? pode alterar os universos usando o encoder para selecionar o node e selecionando o campo que voc?? deseja alterar (como o "Universo 1-4" mostrado acima). Quando voc?? toa no encoder, ent??o voc?? tem dois bot??es dispon??veis na tela. Selecione o conjunto de universos que voc?? deseja que o node controle a sa??da.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="021f5292-de29-41b0-9552-3540e90ba5de">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/pt/1.1'; " title="Go to previous page 'Trabalhar com Efeitos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.1';" title="Go to next page 'Usar disparos de entrada externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13071/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

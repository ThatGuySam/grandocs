
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

		<p>Há várias coisas que você pode conectar juntas. Tudo está conectado em uma&nbsp;infra-estrutura de rede Ethernet. Isso significa que você precisa conectar todos os seus dispositivos usando&nbsp;cabos Ethernet (de qualidade Cat.5e ou até melhor) a um switch&nbsp;de rede que suporte a velocidade mínima de 100 MB e o switch&nbsp;também precisa ser capaz de suportar&nbsp;Multicast. Todos os dispositivos na rede usam&nbsp;IPv6&nbsp;para falar uns com os outros - por isso o switch&nbsp;também tem que ser capaz de suportar isso.</p>

<p>Se você não sabe o que é IPv6 e você tiver problemas com as conexões, leia a <a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">página de ajuda O que é IPv6?</a>.</p>

<p>Se você tiver qualquer dúvida sobre qual switch&nbsp;de rede utilizar, contacte o seu distribuidor local. Eles irão ajudá-lo a selecionar uma opção apropriada.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Você pode conectar wings ao seu console dot2 ou ao&nbsp;dot2 onPC. As wings são atribuídas a um dispositivo específico. Se este dispositivo for perdido na rede, então a wing perde sua funcionalidade e espera para ser atribuída a um dispositivo diferente.</p>

<p>Existem dois tipos de wings: a dot2&nbsp;Fader&nbsp;wing&nbsp;(F-wing) e a&nbsp;dot2&nbsp;Button&nbsp;wing&nbsp;(B-wing). Cada uma lhe dá mais executores físicos e uma tela extra.</p>

<p>Uma vez que as wings&nbsp;estão conectadas diretamente a um dispositivo específico, você vai precisar abrir o menu de Setup (configuração) no dispositivo que você deseja conectar uma wing. No menu de Setup, você vai encontrar um botão chamado <span class="softkey">dot2&nbsp;wings</span>, toque nele.</p>

<p>Isso lhe dará a&nbsp;<a href="/Topic/76a4961b-8fb5-4482-b0af-894a4a931aa9">vista de Wings</a>. Aqui você pode tocar um dos slots disponíveis (barra amarela no lado esquerdo) do mesmo tipo que a sua wing. Existem apenas cinco slots&nbsp;para cada dispositivo. Dependendo de seus dispositivos, você pode ter apenas alguns slots&nbsp;disponíveis. Slots que estão ocupados pelo console, tem uma barra vermelha no lado esquerdo - eles são chamados de "fixados, internamente". Slots que estão atualmente ocupados por uma wing externa terão uma barra verde no lado esquerdo.</p>

<p>Quando você toca em um slot livre, você verá as wings disponíveis em sua rede. Se você não vê nenhuma wing aqui, então você precisa verificar sua rede e as conexões - também se certificar de que tudo está ligado.</p>

<p>Quando você vê uma wing no lado esquerdo da tela, então você pode tocar nela. A wing que você selecionou fará agora todas as teclas piscarem. Isso é para que você possa identificar a wing selecionada em uma configuração de várias wings. Quando a wing correta estiver piscando, então você pode tocar no botão <span class="softkey">Atribuir Selecionado.</span></p>

<p>Agora você tem uma wing&nbsp;atribuída e conectada e você pode sair do menu.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>dot2 consoles, dot2 onPC e dot2&nbsp;visualizador&nbsp;3D</h2>

<p>Tudo, exceto as wings, são conectadas a uma <strong>sessão</strong>. Wings são conectadas a dispositivos específicos. Pode haver 4 sessões separadas em execução em sua rede.</p>

<p>O sistema de sessão permite uma maior flexibilidade no que diz respeito a backup e redundância.</p>

<p>Pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois o botão&nbsp;<span class="softkey">Sessões</span>&nbsp;. Isso lhe dará a&nbsp;<a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">vista de Configuração de Rede</a>.&nbsp;Esta vista é separada em duas partes, a parte de cima mostra-lhe se o seu console ou onPC está atualmente em uma sessão de rede ou não.</p>

<p>Se o botão do lado direito diz <span class="softkey">Começar uma nova sessão ou juntar-se a uma existente</span>, então você pode pressioná-lo para ver as 4 sessões diferentes. Se há alguns dispositivos usando uma das sessões, então o botão da sessão terá o nome da sessão e o botão dirá <span class="softkey">Juntar-se a Sessão</span>. Se não houver nenhuma sessão em execução, você pode escolher uma sessão e iniciar uma nova sessão. Agora você pode adicionar mais dispositivos na sua sessão.</p>

<p>Se o botão na parte superior disser <span class="softkey">Parar/Deixar Sessão</span>, então o console já está conectado a uma sessão. e você pode adicionar mais dispositivos para sua sessão.</p>

<p>A parte inferior da vista de Configuração de Rede mostra os dispositivos em sua sessão. Eles são separados em cada tipo de dispositivo.&nbsp;<span style="font-size:12px">Se você tiver dispositivos em sua rede e eles estão em sua sessão, eles terão uma cor de fundo verde. O dispositivo que você está atualmente olhando terá uma cor de fundo verde mais brilhante. Se você não tem mais um dispositivo que anteriormente estava em sua sessão, então a cor de fundo será vermelha.</span><span style="font-size:12px">Você pode ver o endereço de </span>IPv6<span style="font-size:12px">, o nome e o número da versão dos dispositivos conectados.</span></p>

<p>Você pode tocar no botão <span class="softkey">Adicionar</span> para visualizar todos os dispositivos desconectados em sua rede. Aqui você pode selecionar o dispositivo que você deseja adicionar à sua sessão. Quando você escolher um, ele será conectado a sua sessão e ele irá obter o arquivo de show que a sessão está executando. Se não houver quaisquer dispositivos na <a href="/Topic/a37aaf87-aca9-4dab-98fd-2ea655a80018">vista Selecionar uma estação</a>, então o console não consegue ver o dispositivo na rede. Se você espera ver um dispositivo, você deve primeiro verificar os cabos de rede e energia.</p>

<p>Se você tiver conectado um console com um onPC, então você tem controle total de 4096 canais de&nbsp;DMX. O&nbsp;onPC funciona como um backup para o seu console. Portanto, se o seu console por algum motivo parar de funcionar (talvez se a energia cair), então o seu onPC vai assumir e você ainda pode controlar os 4096 canais de&nbsp;DMX. A saída de&nbsp;DMX do console não funciona se o console não funciona. Assim, você pode adicionar dot2 node4 (1K)s à sua rede. Isso permite que você tenha um backup ou uma saída remota de&nbsp;DMX.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>dot2 Node4 (1k)</h2>

<p>Ligar um Node4&nbsp;a seu sistema, funciona exatamente como a descrição acima - lembre-se de selecionar a sessão <span class="softkey">DMX Nodes</span>. Nodes não pode inicializar uma sessão, eles estão conectados e escutam a conversa na rede. Eles, então, levam a informação de&nbsp;DMX&nbsp;para sessão e convertem-a para saída real de&nbsp;DMX.</p>

<p>O dot2&nbsp;Node4 (1K) permite controlar canais de&nbsp;DMX 1024 quando você conecta um dot2 onPC e um dot2&nbsp;Node4 (1K). O&nbsp;dot2 onPC só pode controlar 1024 canais, quando ele não está conectado a um console dot2.</p>

<p>Os nodes são pouco diferentes na vista de Configuração de Rede. Você pode configurar em quais universos os nodes controlarão as saídas. Na lista, ela poderia ser assim:</p>

<p><img alt="" src="/Media/Image/Dot2_HT_ConnectWingsNodes3dOnpc_01_1-0.png"></p>

<p>Aqui você pode ver que cada um dos dois nodes&nbsp;conectados, controlam a saída dos 4 universos. Um node só pode controlar a saída do universo 1 ao 4 ou 5 ao 8. Você pode alterar os universos usando o encoder para selecionar o node e selecionando o campo que você deseja alterar (como o "Universo 1-4" mostrado acima). Quando você toa no encoder, então você tem dois botões disponíveis na tela. Selecione o conjunto de universos que você deseja que o node controle a saída.</p>


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

	
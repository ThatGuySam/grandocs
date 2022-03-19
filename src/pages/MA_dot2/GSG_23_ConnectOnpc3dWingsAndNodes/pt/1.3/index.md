
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="03f179cf-2b46-4e3f-9974-679994c20edc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_Effect/pt/1.3'; " title="Go to previous page '22 - Building dynamic effects'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_24_HappyProgramming/pt/1.3';" title="Go to next page '24 - Happy programming'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/03f179cf-2b46-4e3f-9974-679994c20edc">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17773/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Guia de Introdução - Conectar ao onPC, 3D, Wings e Nodes</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">dot2 Wings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">console dot2, dot2 onPC, dot2 Node4 (1K) e visualizadores&nbsp;dot2 3D</a>
						</li>
				</ul>
			</div>

		<p>Então, agora que estamos chegando bem perto do final deste Guia de Introdução, eu gostaria de mostrá-lo o processo de adicionar algum equipamento externo.</p>

<p>A família dot2 consiste em três consoles diferentes. O menor é chamado de "dot2 core". Ele possui uma seção de comandos e uma seção especial Core Fader. Há também o "dot2 XL-F". Este console é o mesmo que o core com uma fader wing extra embutida. O "dot2 XL-B" é como o core, com uma Button Wing. O "dot2 F-Wing" possui 8 executores com faders e 16 executores extra sem faders. O "dot2 B-Wing" tem 48 executores sem faders.</p>

<p>A dot2 core pode ter no máximo dois dot2 F-Wings e dois dot2 B-Wings conectados. A mesma quantidade é usada com os consoles&nbsp;dot2 XL, mas sua wing embutida conta como uma do começo, então você só pode conectar três wings.</p>

<p>Você pode conectar 10 dot2 node4 (1K)s ao seu sistema. Os nodes são usados para saída de universos de DMX. Eles se ligam à rede e podem ser posicionados em locais remotos. Você pode decidir qual dos 8 universos de DMX&nbsp;cada porta no console e node deve fazer o output (saída).</p>

<p>Você pode conectar até 5 consoles dot2 ou onPCs e até 5 visualizadores 3D em um sistema.&nbsp;</p>

<p>Todos estes dispositivos são conectados juntos usando um switch Ethernet 100MB (mínimo). Você precisa usar um switch de qualidade que permite uma coisa chamada multicast. Hoje a maioria dos switches permitem. Por favor, use bons cabos Ethernet de no mínimo especificações cat.5. Os dispositivos dot2 falam juntos usando IPv6. Este é um número único, que funciona como um endereço para cada dispositivo. Se você estiver usando dot2 onPC ou dot2 3D, então seu computador precisa ter um endereço de IPv6. Todos os novos computadores têm isso automaticamente, mas se o seu não tem, então você precisará configurá-lo. Há uma outra página de ajuda chamada&nbsp;<a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">O que é IPv6</a>, que lhe dará alguma ajuda com isso.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Quando você tiver feito todas as conexões físicas, você precisa conectar o equipamento ao console. Pressione&nbsp;&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois&nbsp;<span class="softkey">dot2 Wings</span>.&nbsp;</p>

<p>A janela é mais ou menos assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ConncetOnpc3dWingsAndNodes_01_1-2.png"> <em>Figura 1: Setup de Wing</em></p>

<p>Aqui você pode escolher um slot de wing livre (do tipo certo) para conectar uma wing.&nbsp;</p>

<p>Quando você seleciona um slot livre, você receberá uma lista de wings disponíveis em sua rede. Quando você seleciona uma wing na lista, ela começa a piscar. Isso identifica qual wing você selecionou. Selecione o dispositivo que você deseja &nbsp;e pressione <span class="softkey">Atribuir selecionado</span>.&nbsp;</p>

<p>Isso é tudo para wings.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>console dot2, dot2 onPC, dot2 Node4 (1K) e visualizadores&nbsp;dot2 3D</h2>

<p>A história é um pouco diferente para o resto dos dispositivos dot2.</p>

<p>Para conectar consoles, onPC, nodes e visualizadores 3D, precisamos ter uma sessão em execução. Pressione <span class="hardkey">Setup</span> e, em seguida <span class="softkey">Sessões</span>. Se o seu console já faz parte de uma sessão, então o botão superior direito dirá <span class="softkey">Parar/Deixar sessão</span> e o texto ao lado lhe diz de qual sessão você faz parte. Se você não tem uma sessão em execução, o botão dirá <span class="softkey">Começar uma nova sessão ou juntar-se a uma existente</span>. Pode haver quatro sessões diferentes em execução em uma rede. Para conectar seus consoles, onPC, nodes e 3D, então eles precisam estar na mesma rede e eles precisam se juntar ao mesmo número de sessão. Quando você pressiona Começar uma nova sessão ou juntar-se a uma existente, você obtém quatro botões - um para cada sessão. Se o número de uma sessão já for executado, então o botão dirá <span class="softkey">Juntar-se a Sessão</span>. Se não há sessão em execução, você tem a opção de tocar em <span class="softkey">Nova Sessão</span>&nbsp;e começar sua própria nova sessão.</p>

<p>Você pode adicionar Consoles, onPCs, 3D e Nodes DMX em sua sessão por ter uma sessão em execução e, em seguida, na vista <span class="softkey">Sessões</span> em "Dispositivos Conectados" você pode tocar&nbsp;no botão <span class="softkey">Adicionar</span>. Isto lhe dará uma lista de todos os dispositivos disponíveis&nbsp;em sua rede.</p>

<p>Quando você toca em cada seção, você pode ver os diferentes dispositivos em cada seção. Se o console ou onPC tem um plano de fundo verde-claro, então é o dispositivo que você está sentado em frente. Um fundo verde escuro é um dispositivo que é uma parte de sua sessão. Fundos vermelhos são dispositivos que deveriam estar em suas redes, mas está faltando.&nbsp;</p>

<p>Você pode remover um dispositivo da sua rede, selecionando-o e pressionando &nbsp;<span class="softkey">Remover</span>.&nbsp;</p>

<p>Como escrito acima:&nbsp;o limite para cada sessão é de cinco consoles dot /onPC's, 5 visualizadores dot2 3D e 10 dot2 Node4 (1K)s.</p>

<p>Você pode definir de quais universos um node conectado ou console fariam a saída em cada porta XLR. Você pode mudar isso selecionando o node/console que você deseja alterar e depois&nbsp;a célula abaixo de cada XLRs. Toque o encoder da direita e escreva o número do universo que você deseja fazer a saída&nbsp;- você pode selecionar de 1 a 8.&nbsp;</p>

<p>O show se lembra quais diferentes dispositivos ele deve se conectar e as atribuições de universo de DMX.</p>

<p>Último capítulo chegando!</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="03f179cf-2b46-4e3f-9974-679994c20edc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_Effect/pt/1.3'; " title="Go to previous page '22 - Building dynamic effects'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_24_HappyProgramming/pt/1.3';" title="Go to next page '24 - Happy programming'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17773/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
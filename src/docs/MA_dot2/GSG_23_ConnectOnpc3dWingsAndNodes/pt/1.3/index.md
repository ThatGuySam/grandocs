---
originalUrl: >-
  https://help2.malighting.com/Page/MA_dot2/GSG_23_ConnectOnpc3dWingsAndNodes/pt/1.3
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
		<h1>Guia de Introdu????o - Conectar ao onPC, 3D, Wings e Nodes</h1>

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

		<p>Ent??o, agora que estamos chegando bem perto do final deste Guia de Introdu????o, eu gostaria de mostr??-lo o processo de adicionar algum equipamento externo.</p>

<p>A fam??lia dot2 consiste em tr??s consoles diferentes. O menor ?? chamado de "dot2 core". Ele possui uma se????o de comandos e uma se????o especial Core Fader. H?? tamb??m o "dot2 XL-F". Este console ?? o mesmo que o core com uma fader wing extra embutida. O "dot2 XL-B" ?? como o core, com uma Button Wing. O "dot2 F-Wing" possui 8 executores com faders e 16 executores extra sem faders. O "dot2 B-Wing" tem 48 executores sem faders.</p>

<p>A dot2 core pode ter no m??ximo dois dot2 F-Wings e dois dot2 B-Wings conectados. A mesma quantidade ?? usada com os consoles&nbsp;dot2 XL, mas sua wing embutida conta como uma do come??o, ent??o voc?? s?? pode conectar tr??s wings.</p>

<p>Voc?? pode conectar 10 dot2 node4 (1K)s ao seu sistema. Os nodes s??o usados para sa??da de universos de DMX. Eles se ligam ?? rede e podem ser posicionados em locais remotos. Voc?? pode decidir qual dos 8 universos de DMX&nbsp;cada porta no console e node deve fazer o output (sa??da).</p>

<p>Voc?? pode conectar at?? 5 consoles dot2 ou onPCs e at?? 5 visualizadores 3D em um sistema.&nbsp;</p>

<p>Todos estes dispositivos s??o conectados juntos usando um switch Ethernet 100MB (m??nimo). Voc?? precisa usar um switch de qualidade que permite uma coisa chamada multicast. Hoje a maioria dos switches permitem. Por favor, use bons cabos Ethernet de no m??nimo especifica????es cat.5. Os dispositivos dot2 falam juntos usando IPv6. Este ?? um n??mero ??nico, que funciona como um endere??o para cada dispositivo. Se voc?? estiver usando dot2 onPC ou dot2 3D, ent??o seu computador precisa ter um endere??o de IPv6. Todos os novos computadores t??m isso automaticamente, mas se o seu n??o tem, ent??o voc?? precisar?? configur??-lo. H?? uma outra p??gina de ajuda chamada&nbsp;<a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">O que ?? IPv6</a>, que lhe dar?? alguma ajuda com isso.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Quando voc?? tiver feito todas as conex??es f??sicas, voc?? precisa conectar o equipamento ao console. Pressione&nbsp;&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois&nbsp;<span class="softkey">dot2 Wings</span>.&nbsp;</p>

<p>A janela ?? mais ou menos assim:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ConncetOnpc3dWingsAndNodes_01_1-2.png"> <em>Figura 1: Setup de Wing</em></p>

<p>Aqui voc?? pode escolher um slot de wing livre (do tipo certo) para conectar uma wing.&nbsp;</p>

<p>Quando voc?? seleciona um slot livre, voc?? receber?? uma lista de wings dispon??veis em sua rede. Quando voc?? seleciona uma wing na lista, ela come??a a piscar. Isso identifica qual wing voc?? selecionou. Selecione o dispositivo que voc?? deseja &nbsp;e pressione <span class="softkey">Atribuir selecionado</span>.&nbsp;</p>

<p>Isso ?? tudo para wings.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>console dot2, dot2 onPC, dot2 Node4 (1K) e visualizadores&nbsp;dot2 3D</h2>

<p>A hist??ria ?? um pouco diferente para o resto dos dispositivos dot2.</p>

<p>Para conectar consoles, onPC, nodes e visualizadores 3D, precisamos ter uma sess??o em execu????o. Pressione <span class="hardkey">Setup</span> e, em seguida <span class="softkey">Sess??es</span>. Se o seu console j?? faz parte de uma sess??o, ent??o o bot??o superior direito dir?? <span class="softkey">Parar/Deixar sess??o</span> e o texto ao lado lhe diz de qual sess??o voc?? faz parte. Se voc?? n??o tem uma sess??o em execu????o, o bot??o dir?? <span class="softkey">Come??ar uma nova sess??o ou juntar-se a uma existente</span>. Pode haver quatro sess??es diferentes em execu????o em uma rede. Para conectar seus consoles, onPC, nodes e 3D, ent??o eles precisam estar na mesma rede e eles precisam se juntar ao mesmo n??mero de sess??o. Quando voc?? pressiona Come??ar uma nova sess??o ou juntar-se a uma existente, voc?? obt??m quatro bot??es - um para cada sess??o. Se o n??mero de uma sess??o j?? for executado, ent??o o bot??o dir?? <span class="softkey">Juntar-se a Sess??o</span>. Se n??o h?? sess??o em execu????o, voc?? tem a op????o de tocar em <span class="softkey">Nova Sess??o</span>&nbsp;e come??ar sua pr??pria nova sess??o.</p>

<p>Voc?? pode adicionar Consoles, onPCs, 3D e Nodes DMX em sua sess??o por ter uma sess??o em execu????o e, em seguida, na vista <span class="softkey">Sess??es</span> em "Dispositivos Conectados" voc?? pode tocar&nbsp;no bot??o <span class="softkey">Adicionar</span>. Isto lhe dar?? uma lista de todos os dispositivos dispon??veis&nbsp;em sua rede.</p>

<p>Quando voc?? toca em cada se????o, voc?? pode ver os diferentes dispositivos em cada se????o. Se o console ou onPC tem um plano de fundo verde-claro, ent??o ?? o dispositivo que voc?? est?? sentado em frente. Um fundo verde escuro ?? um dispositivo que ?? uma parte de sua sess??o. Fundos vermelhos s??o dispositivos que deveriam estar em suas redes, mas est?? faltando.&nbsp;</p>

<p>Voc?? pode remover um dispositivo da sua rede, selecionando-o e pressionando &nbsp;<span class="softkey">Remover</span>.&nbsp;</p>

<p>Como escrito acima:&nbsp;o limite para cada sess??o ?? de cinco consoles dot /onPC's, 5 visualizadores dot2 3D e 10 dot2 Node4 (1K)s.</p>

<p>Voc?? pode definir de quais universos um node conectado ou console fariam a sa??da em cada porta XLR. Voc?? pode mudar isso selecionando o node/console que voc?? deseja alterar e depois&nbsp;a c??lula abaixo de cada XLRs. Toque o encoder da direita e escreva o n??mero do universo que voc?? deseja fazer a sa??da&nbsp;- voc?? pode selecionar de 1 a 8.&nbsp;</p>

<p>O show se lembra quais diferentes dispositivos ele deve se conectar e as atribui????es de universo de DMX.</p>

<p>??ltimo cap??tulo chegando!</p>


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

	

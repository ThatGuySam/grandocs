---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_UseMidiAndMSC/pt/1.5'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.5'; " title="Go to previous page 'Usar disparos de entrada externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.5';" title="Go to next page 'Usar uma tela externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/092db22a-d2f1-46ca-9a6e-a7c12c92f284">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/36745/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Usar MIDI e MIDI Show Control (MSC)</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">MIDI&nbsp;note de entrada remota (input)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MIDI note de sa??da (output)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">MIDI Show Control (MSC) input - entrada</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">MIDI Show Control (MSC) output - sa??da</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">MIDI Time Code (MTC)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">O Conceito MSC</a>
						</li>
				</ul>
			</div>

		<p>A dot2 pode lidar com diferentes tipos de MIDI e pode transmitir e receber MIDI.&nbsp;</p>

<p>Voc?? pode ver os dados de entrada (In) e sa??da (Out) de MIDI em um console pressionando??? <span class="hardkey">Tools</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">???</a><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">Monitor MIDI</a></span>.</p>

<p>Se voc?? estiver usando uma dot2 onPC, ent??o voc?? precisa configurar suas entradas e sa??das de MIDI. Isto ?? feito no menu Tools (Ferramentas). Aqui voc?? pode tocar em&nbsp;<a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">Configura????o MIDI</a>&nbsp;e selecionar quais dispositivos de MIDI voc?? usa para transmitir e receber MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>MIDI&nbsp;note de entrada remota (input)</h2>

<p>Este ?? um sistema para usar MIDI&nbsp;Notes recebidas para disparar (trigger) coisas diferentes no console. ?? tudo criado na??? <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">vista de Configura????o de Entradas Remotas</a>.</p>

<p>Aqui voc?? tem a op????o para mapear sinais de MIDI Notes de entrada para os executores ou para disparar (trigger) um comando que voc?? escreve na configura????o.&nbsp;</p>

<p>Voc?? pode usar o MIDI Velocity para definir a posi????o de um fader.&nbsp;</p>

<p>Entrada Remota de MIDI s?? dispara os executores&nbsp;no console que recebe o sinal MIDI.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI note de sa??da (output)</h2>

<p>Voc?? pode enviar MIDI Notes a partir de cues ou diretamente na linha de comando.</p>

<p>Voc?? pode usar o ???<a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">comando Midi Note</a>&nbsp;para transmitir dados de MIDI Note. Por favor, leia mais detalhes sobre o comando na descri????o do comando.&nbsp;<br>
O comando MIDI Note ?? transmitido a partir de um console aut??nomo ou se voc?? tiver uma sess??o, ent??o ?? o master da sess??o (o console com o ??cone de Cora????o Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) input - entrada</h2>

<p>O console pode ser controlado por qualquer dispositivo que pode enviar MIDI Show Control. Existem v??rias configura????es em rela????o ao MSC. Voc?? pode encontr??-las em ???<span class="hardkey">Setup</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui voc?? pode alterar as configura????es para corresponder ??s configura????es no transmissor (geralmente um software Show Control ou algum software de som).</p>

<p>Quando voc?? usa MSC voc?? s?? pode controlar executores na primeira p??gina ou o Executor Principal.&nbsp;</p>

<p>Os dados MSC precisam ser transmitidos para um console aut??nomo ou se voc?? tiver uma sess??o, ele ?? o master da sess??o (o console com o ??cone de Cora????o Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que reage ao MIDI.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) output - sa??da</h2>

<p>A dot2 pode transmitir comandos MSC para um dispositivo. Isto pode ser utilizado para controlar outros dispositivos (como samplers de som). Todas as configura????es para isso s??o encontradas no&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui voc?? precisa definir suas configura????es para coincidir com o receptor MSC.&nbsp;</p>

<p>Os dados MSC s??o transmitidos a partir de um console aut??nomo ou se voc?? tiver uma sess??o, ent??o ?? o master da sess??o (o console com o ??cone de Cora????o Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>O console pode receber MTC e usar isso para executar automaticamente cues nos executores.</p>

<p>O executor que voc?? quer controlar por MTC precisa ter "MIDI" ativado na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">janela Configura????es do Executor</a>. Ent??o voc?? precisa ter alguns cues naquele executor que usem Timecode como trigger (disparo). Quando Timecode ?? o trigger, ent??o voc?? pode definir um tempo na coluna "Trig Time". Quando a sua entrada (In) MTC chega no tempo que voc?? havia definido na coluna Trig Time, o cue ?? triggered (disparado). Voc?? n??o precisa ter o cue como o pr??ximo cue, ele ir?? pular para o cue que tem o tempo que coincide com o MTC de entrada. Apenas lembre-se de ter o fader levantado.</p>

<p>Voc?? pode digitar os tempos manualmente ou voc?? pode tocar em <span class="softkey">TC Record</span> na barra de t??tulo da vista de Cues. Isto ir?? iniciar uma fun????o de grava????o. Ent??o voc?? pode fazer um Go normal aos cues de Timecode e ele ir?? gravar o tempo na coluna Trig Time. Voc?? tamb??m pode usar o <a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">comando Record</a> para ativar esta fun????o de timecode record. Quando voc?? tem um record ativo, ent??o voc?? ter?? um c??rculo vermelho piscando com um ??cone branco "T" ao lado da entrada de Linha de Comando. Haver?? tamb??m um c??rculo vermelho piscando na vista de Cues e na Barra do Executor. Voc?? desliga a fun????o Record tocando no <span class="softkey">TC Record</span> novamente.</p>

<p>&nbsp;</p>

<p>MTC pode ser ativado e desativado na <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">janela de Configura????o de Timecode</a>&nbsp;no Setup. Se voc?? desligou todos os timecodes de entrada, ent??o voc?? n??o pode tocar no bot??o <span class="softkey">TC Record</span>.&nbsp;</p>

<p>O MTC de entrada pode&nbsp;entrar em qualquer console/onPC na sess??o - e n??o apenas no master.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>O Conceito MSC</h2>

<p>A estrutura de comando e sintaxe do MSC ?? baseado na estrutura geral do SysEx definida pelo MMA (MIDI Manufacturers Association). Foi lan??ado em 1991 como uma extens??o do MIDI geral.</p>

<p>A informa????o MIDI bruta ?? escrita em octetos hexadecimais (dois n??meros hexadecimais). Diferentes fabricantes de software podem apresentar o MSC de uma forma diferente e mostrar os dados de uma forma mais leg??vel. Isso pode ser legal, mas como n??o podemos descrever todas as formas de apresenta????o, este manual analisa os dados brutos.</p>

<p>O formato da mensagem ?? semelhante ao seguinte:</p>

<table border="0" cellpadding="0" cellspacing="0" style="width:375pt">
	<thead>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td>
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

<ul>
	<li><strong>F0 7F&nbsp;</strong>&nbsp;?? o cabe??alho que identifica a mensagem como "exclusivo do sistema universal" e uma mensagem "em tempo real".</li>
	<li><strong>ID do dispositivo</strong>&nbsp;?? o n??mero do dispositivo ou grupo.</li>
	<li><strong>02&nbsp;</strong>?? um octeto hexadecimal especificando qual a mensagem MIDI Show Control (MSC).</li>
	<li><strong>Formato do comando</strong>&nbsp;?? um octeto que especifica o tipo de equipamento.</li>
	<li><strong>Comando</strong>&nbsp;?? um octeto que define o tipo de comando.</li>
	<li><strong>Dados</strong>&nbsp;s??o os dados reais. Isto pode mudar dependendo do tipo de comando.</li>
</ul>

<p><strong>F7&nbsp;</strong>?? um octeto de fechamento que termina a mensagem.</p>

<ul>
	<li><strong>ID do dispositivo</strong></li>
</ul>

<p>O ID do dispositivo ?? na verdade um octeto dividido em tr??s diferentes se????es:</p>

<ul>
	<li><strong>00 a 6F</strong>:&nbsp;<br>
	Estes s??o os 112 dispositivos espec??ficos diferentes que podem ser identificados..</li>
	<li><strong>70 a 7E</strong>:<br>
	Estes s??o os 15 n??meros de grupo.</li>
	<li><strong>7F</strong>:<br>
	Este ?? um ID de transmiss??o que todos os dispositivos ouvem.</li>
</ul>

<p>Na dot2, o ID do dispositivo e o ID do grupo podem ser definidos para as mensagens recebidas e enviadas.</p>

<p>Para transmitir o MSC, ele s?? pode transmitir um octeto na localiza????o do ID do dispositivo. A configura????o Enviar para (descrita acima) seleciona qual das tr??s diferentes se????es ID deve ser transmitida.</p>

<p><strong>Formato do comando</strong></p>

<p>O octeto de formato de comando indica o tipo de equipamento que deve receber a mensagem (ou pelo menos responder). dot2 apenas transmite e responde a tr??s formatos diferentes:</p>

<ul>
	<li><strong>01</strong>:<br>
	Este ?? o formato de <strong>Luz geral&nbsp;</strong></li>
	<li><strong>02</strong>:<br>
	Este ?? o formato do&nbsp;<strong>Moving Lights</strong>&nbsp;</li>
	<li><strong>7F</strong>:<br>
	Este ?? um formato que<strong> todos</strong> os equipamentos devem responder</li>
</ul>

<p><strong>Comando</strong></p>

<p>O octeto de comando indica o tipo de comando na mensagem. O tipo de comando ditar?? as informa????es dos dados.</p>

<p>dot2 suporta 7 tipos de comandos diferentes:</p>

<ul>
	<li><strong>01 (Go)</strong>:<br>
	Esse ?? o mesmo que o comando Go na dot2. Ele precisa ser seguido por um n??mero de cue.</li>
	<li><strong>02 (Stop)</strong>:<br>
	Esse ?? o mesmo que o comando Pause na dot2. Ele pode ser seguido por um n??mero de cue.</li>
	<li><strong>03 (Resume)</strong>:<br>
	Isso ?? o "un-pause" de um cue. Se um cue espec??fico foi pausado, o n??mero de cue deve ser especificado com este comando.</li>
	<li><strong>04 (Timed_Go)</strong>:<br>
	Isso pode ser usado para executar o Goto com um tempo de fade espec??fico. Ele precisa do tempo e do n??mero de cue - nessa ordem.&nbsp;&nbsp;</li>
	<li><strong>06 (Set)</strong>:<br>
	O conjunto pode ser usado para definir a posi????o dos faders. Precisa do n??mero do fader e da p??gina seguidos pela posi????o.</li>
	<li><strong>07 (Fire)</strong>:<br>
	Isso pode ser usado para disparar macros. O n??mero de macro precisa seguir o comando. Apenas macros de 1 a 255 podem ser disparadas.</li>
	<li><strong>0B (Go_Off)</strong>:<br>
	Este comando pode ser usado para desligar executores. Isso precisa ser seguido por um n??mero de cue.<br>
	&nbsp;</li>
</ul>

<p><strong>01 (Go):</strong></p>

<p>Como dito acima: Isso ?? interpretado como um comando GOTO. Um n??mero de cue precisa ser especificado. O n??mero de cue tamb??m precisa ser transmitido em octetos hexadecimais e o n??mero completo de cue, incluindo os decimais, precisa ser transmitido. Se o n??mero de sinaliza????o 4 for acionado, o n??mero completo ser?? 4.000 - o n??mero com todos os n??meros decimais precisam estar separados por um ponto (valor hexadecimal 2E). N??meros decimais em hexadecimal s??o alguns dos mais f??ceis de converter. Precisa de um "3" na frente. Isso significa que o decimal <strong>4</strong> se torna<strong> 34</strong> em hexadecimal. O n??mero completo de cue incluindo o ponto ??: <strong>34 2E 30 30 30</strong>.</p>

<p>Se a esta????o estiver definida como <strong>Somente Padr??o</strong> na op????o Enviar MSC no Exec, tudo isso precisar?? ser adicionado ap??s o comando.</p>

<p><strong>Exemplo</strong>: Disparando cue de n??mero <strong>21.5</strong> no executor padr??o (<strong>todos os dispositivos</strong>, <strong>todos os formatos</strong> e configura????o <strong>padr??o</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>01</p>
			</td>
			<td>
			<p>32 31 2E 35 30 30</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>Se a configura????o n??o for Somente Padr??o, um executor e uma p??gina precisam ser especificados. Existem duas op????es para separar o n??mero do executor e o n??mero da p??gina. Pode ser separado por um ponto (hex = 2E) ou por um espa??o (hex = 20). O n??mero de cue e os dados do executor/p??gina precisam ser separados por um valor hexadecimal <strong>00</strong>.</p>

<p><strong>Exemplo:</strong>&nbsp;Disparando cue de n??mero <strong>37.2</strong> no executor 5 na p??gina 1 (<strong>Todos os dispositivos</strong>,<strong>&nbsp;Todos os formatos</strong>, e configura????o da <strong>P??gina do Executor</strong>)<strong> :</strong></p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>01</p>
			</td>
			<td>
			<p>33 37 2E 32 30 30 00 35 2E 31</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>Mesmo exemplo, mas com um executor e uma p??gina separados&nbsp;por espa??os.</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>01</p>
			</td>
			<td>
			<p>33 37 2E 32 30 30 00 35 20 31</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>02 (Stop):</strong></p>

<p>Isso ?? como apertar o bot??o de pausa. Por favor, leia a se????o acima para uma melhor compreens??o do sistema de numera????o hexadecimal.</p>

<p>Com a op????o<strong> Somente Padr??o</strong>, n??o ?? necess??rio haver nenhum dado extra, pois ?? o executor que est?? em pausa.</p>

<p><strong>Exemplo:</strong>&nbsp;Parar o executor padr??o (<strong>Todos os dispositivos</strong>,<strong>&nbsp;Todos os formatos </strong>e configura????o&nbsp;<strong>Somente Padr??o</strong>) :<strong>&nbsp;</strong></p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>&nbsp;</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>Se a esta????o estiver&nbsp;transmitindo o MSC, ele transmitir?? um n??mero de cue<strong> 0,000</strong>. Isto ?? como enviar um comando ???Pausar execu????o de cue???.</p>

<p><br>
Se as configura????es n??o forem <strong>Somente Padr??o</strong>, mas uma das duas op????es Executor/ P??gina, ent??o o cue 0 tamb??m precisar?? ser transmitido.&nbsp;</p>

<p>&nbsp;</p>

<p><strong>Exemplo:</strong>&nbsp;Parar o executor 5 na p??gina 1(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>, e configura????o da&nbsp;<strong>P??gina do Executor</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>30 2E 30 30 30 00 35 2E 31</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>03 (Resume):</strong></p>

<p>Esta ?? a ??nica maneira de continuar um cue pausado. A ??nica diferen??a entre os comandos Stop e Resume s??o os "02" e "03".</p>

<p><strong>Example:</strong>&nbsp;Continuando o fade pausado acima (<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configura????o da&nbsp;<strong>P??gina do Executor</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>03</p>
			</td>
			<td>
			<p>30 2E 30 30 30 00 35 2E 31</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>Se a configura????o Apenas Padr??o for escolhida, o comando ser?? F0 7F 7F 02 7F 03 F7 para continuar o fade.</p>

<p>&nbsp;</p>

<p><strong>04 (Timed_Go):</strong></p>

<p>Isso ?? o mesmo que o comando <strong>01 (Go)</strong>, mas com um tempo especificado. Por favor, leia (e entenda) sobre o comando <strong>01 (GO)</strong> e os dados acima. Apenas para tornar isso um pouco mais simples, vamos fingir que a op????o ???Somente Padr??o??? est?? ativada nas op????es do MSC em Setup.</p>

<p>Para transmitir um tempo cronometrado o tempo precisa ser especificado primeiro e, em seguida, o n??mero de cue. A hora ?? especificada por cinco octetos hexadecimais. Eles representam (em ordem)<strong> hora, minuto, segundo, quadro</strong> e <strong>fra????o</strong>.</p>

<p>As se????es de hora, minuto e segundo s??o muito estreitas. O n??mero precisa ser transmitido em n??meros hexadecimais. ?? poss??vel transmitir um valor acima do limite normal por exemplo 64 segundos (hex = 40). A esta????o transmitir?? isso como 1 minuto e 4 segundos.</p>

<p>No momento, o console n??o aceitar?? nenhum hor??rio especificado nas se????es Quadro e Fra????o. Mas transmite valores abaixo de um segundo na se????o Frame. O console divide o segundo em 24 quadros. Ent??o, 0,5 segundos s??o 12 quadros e o n??mero hexadecimal recebido seria <strong>0C</strong>.</p>

<p><strong>Exemplo:</strong>&nbsp;V?? para o Cue 75 com o tempo de 20 segundos&nbsp;&nbsp;(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configura????o da&nbsp;<strong>P??gina do Executor</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>04</p>
			</td>
			<td>
			<p>00 00 14 00 00 37 35 2E 30 30 30</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p><strong>Example:</strong>&nbsp;V?? para o&nbsp;cue 5.4 com o tempo de fade de 1 minuto no executor 3 na p??gina 1 &nbsp;(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configura????o da&nbsp;<strong>P??gina do Executor</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato de Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>04</p>
			</td>
			<td>
			<p>00 01 00 00 00 35 2E 34 30 30 00 33 2E 31</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>06 (Set):</strong></p>

<p>O comando set ?? usado para mover um fader para uma posi????o espec??fica. O comando 06 ?? seguido por dois octetos hexadecimais que indicam o fader e, em seguida, mais dois octetos que indicam a posi????o.</p>

<p>&nbsp;</p>

<p>O primeiro dos dois n??meros para o fader ?? o n??mero do fader (em uma p??gina). O n??mero do fader<strong> 1</strong> ?? hexadecimal n??mero <strong>00</strong>, o segundo ?? <strong>01</strong> e assim por diante. Lembre-se que este ?? um n??mero hexadecimal, ent??o o fader 16 tem o n??mero hexadecimal <strong>0F</strong> e o decimal 17 ?? hexadecimal <strong>10.</strong></p>

<p>O segundo dos dois n??meros para os faders ?? o n??mero da p??gina. Esta ?? uma p??gina um pouco diferente, 1 ?? o n??mero hexadecimal <strong>01 </strong>e a p??gina 2 ?? hexadecimal <strong>02</strong> e assim por diante.</p>

<p>Portanto, o executor 1 na p??gina 1 ?? 00 01.</p>

<p>Calcular a posi????o em n??meros hexadecimais ?? um pouco mais complicado. A posi????o dos faders ?? definida por um valor coarse e fine. A escala para os dois valores ?? de 128 etapas (a maioria dos MIDI est?? em 128 etapas). O valor fine ?? transmitido primeiro, seguido pelo valor coarse.</p>

<p>A posi????o desejada do fader (em decimal) precisa ser multiplicada por 1.28. O inteiro resultante ?? o valor coarse. O restante (tudo do lado direito do separador) deve ser multiplicado por 128 para obter o valor fine. Os dois n??meros decimais precisam ser convertidos em hexadecimal.</p>

<p><strong>Exemplo:</strong></p>

<p>O fader 3 na p??gina 2 precisa ser movido para 45%. Primeiro converta a posi????o.</p>

<ol>
	<li>Multiplicar 45 1,28 = 57,6</li>
	<li>O valor coarse ?? 57.</li>
	<li>Multiplique 0,6 por 128 = 76,8</li>
	<li>O valor ??timo ?? 76.</li>
	<li>Converta o decimal 57 em hexadecimal = 39.</li>
	<li>Converta o decimal 76 em hexadecimal = 4C.</li>
	<li>O valor fine&nbsp;?? transmitido antes do valor coarse, ent??o a posi????o ??: 4C 39</li>
</ol>

<p>A mensagem MSC ?? (<strong>Todos os dispositivos</strong> e configura????o de <strong>Todos os Formatos</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>06</p>
			</td>
			<td>
			<p>02 02 4C 39</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>Um tempo de fade pode ser adicionado ap??s o fader e dados de posi????o. O formato de hora explicado no comando 04 ?? usado.</p>

<p><strong>Exemplo:&nbsp;</strong>Movendo o fader 15 na p??gina 1 a 100% em 5 segundos &nbsp;(<strong>Todos os dispositivos</strong>&nbsp;e configura????o de&nbsp;<strong>Todos os Formatos</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>06</p>
			</td>
			<td>
			<p>0E 01 7F 7F 00 00 05 00 00</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>O console s?? transmite a posi????o de alguns faders - executores com seq????ncias e todos os masters especiais de cor verde (para o executor selecionado), mas aceita posi????es para todos os faders que possuem algo atribu??do.</p>

<p><strong>07 (Fire):</strong></p>

<p>As macros podem ser disparadas por esse comando. Ele precisa ser seguido por um ??nico octeto especificando o n??mero da macro.</p>

<p>O n??mero de macro 1 ?? o n??mero hexadecimal<strong> 01</strong>. O n??mero hexadecimal<strong> FF</strong> ?? o n??mero macro 255.</p>

<p><strong>Exemplo</strong>: Disparando o n??mero da macro 24 (<strong>Todos os dispositivos</strong>&nbsp;e configura????o de&nbsp;<strong>Todos os Formatos</strong>):</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>07</p>
			</td>
			<td>
			<p>18</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p><strong>0B (Go_Off):</strong></p>

<p>Executores podem ser desligados usando o comando <strong>0B</strong>. Um n??mero de cue precisa ser transmitido - o cue 0 pode ser usado.</p>

<p><strong>Exemplo</strong>: Envie um comando para desligar o executor 9 na p??gina 5 (<strong>Todos os dispositivos</strong>, <strong>Todos os formatos</strong> e configura????o da <strong>P??gina do executo</strong>r):&nbsp;</p>

<table border="0" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:27px">
			<p>F0 7F</p>
			</td>
			<td>
			<p>ID do dispositivo</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>Formato do Comando</p>
			</td>
			<td>
			<p>Comando</p>
			</td>
			<td style="width:141px">
			<p>Dados</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>F0 7F</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>02</p>
			</td>
			<td>
			<p>7F</p>
			</td>
			<td>
			<p>0B</p>
			</td>
			<td>
			<p>30 2E 30 30 00 39 2E 35</p>
			</td>
			<td>
			<p>F7</p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>MIDI via Ethernet</p>

<p>MSC pode ser enviado via Ethernet. ?? transmitido como uma mensagem UDP.</p>

<p>A mensagem MSC ?? a mesma descrita acima, mas a mensagem MSC precisa de um cabe??alho para que a data seja aceita pelo dot2.</p>

<p>O cabe??alho ?? separado em duas partes. O primeiro ?? identificar a mensagem como uma mensagem MSC dot2: <strong>47 4D 41 00 4D 53 43 </strong><strong>00</strong> - ela se traduz em GMA MSC.</p>

<p>A segunda parte ?? de quatro octetos descrevendo o tamanho da mensagem - incluindo o cabe??alho. Est?? escrito como formato little byte endian (menos significativo primeiro).</p>

<p>Isso ?? calculado contando o n??mero de octetos e, em seguida, converte o n??mero decimal em hexadecimal. Normalmente s?? precisamos do primeiro octeto (ele permite mensagens at?? 255 octetos), embora todas as quatro precisem ser enviadas.</p>

<p>&nbsp;</p>

<p><strong>Exemplos:</strong></p>

<p>Envie o comando go para o cue 35. A mensagem MSC ser??:&nbsp;<strong>F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong>.</p>

<p>Isso ?? 13 octetos. O cabe??alho ?? sempre de 12 octetos. Ent??o a quantidade&nbsp; combinada ?? de 25 octetos. O decimal 25 ?? <strong>18</strong> em hexadecimal. A mensagem inteira ser??:</p>

<p><strong>47 4D 41 00 4D 53 43 00 18 00 00 00 F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong></p>

<p>&nbsp;</p>

<p>Para disparar macro 1:&nbsp;<strong>F0 7F 7F 02 7F 07 01 F7</strong>&nbsp;- 8 octetos.</p>

<p>O 12 acima do cabe??alho ?? decimal 20 = 13 hex.</p>

<p>A mensagem ser??:</p>

<p><strong>47 4D 41 00 4D 53 43 00 13 00 00 00 F0 7F 7F 02 7F 07 01 F7</strong></p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.5'; " title="Go to previous page 'Usar disparos de entrada externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.5';" title="Go to next page 'Usar uma tela externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/36745/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

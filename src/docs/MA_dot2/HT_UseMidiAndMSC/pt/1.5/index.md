
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
							<a href="#toc_header_anchor_2">MIDI note de saída (output)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">MIDI Show Control (MSC) input - entrada</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">MIDI Show Control (MSC) output - saída</a>
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

<p>Você pode ver os dados de entrada (In) e saída (Out) de MIDI em um console pressionando​ <span class="hardkey">Tools</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">​</a><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">Monitor MIDI</a></span>.</p>

<p>Se você estiver usando uma dot2 onPC, então você precisa configurar suas entradas e saídas de MIDI. Isto é feito no menu Tools (Ferramentas). Aqui você pode tocar em&nbsp;<a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">Configuração MIDI</a>&nbsp;e selecionar quais dispositivos de MIDI você usa para transmitir e receber MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>MIDI&nbsp;note de entrada remota (input)</h2>

<p>Este é um sistema para usar MIDI&nbsp;Notes recebidas para disparar (trigger) coisas diferentes no console. É tudo criado na​ <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">vista de Configuração de Entradas Remotas</a>.</p>

<p>Aqui você tem a opção para mapear sinais de MIDI Notes de entrada para os executores ou para disparar (trigger) um comando que você escreve na configuração.&nbsp;</p>

<p>Você pode usar o MIDI Velocity para definir a posição de um fader.&nbsp;</p>

<p>Entrada Remota de MIDI só dispara os executores&nbsp;no console que recebe o sinal MIDI.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI note de saída (output)</h2>

<p>Você pode enviar MIDI Notes a partir de cues ou diretamente na linha de comando.</p>

<p>Você pode usar o ​<a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">comando Midi Note</a>&nbsp;para transmitir dados de MIDI Note. Por favor, leia mais detalhes sobre o comando na descrição do comando.&nbsp;<br>
O comando MIDI Note é transmitido a partir de um console autônomo ou se você tiver uma sessão, então é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) input - entrada</h2>

<p>O console pode ser controlado por qualquer dispositivo que pode enviar MIDI Show Control. Existem várias configurações em relação ao MSC. Você pode encontrá-las em ​<span class="hardkey">Setup</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui você pode alterar as configurações para corresponder às configurações no transmissor (geralmente um software Show Control ou algum software de som).</p>

<p>Quando você usa MSC você só pode controlar executores na primeira página ou o Executor Principal.&nbsp;</p>

<p>Os dados MSC precisam ser transmitidos para um console autônomo ou se você tiver uma sessão, ele é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que reage ao MIDI.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) output - saída</h2>

<p>A dot2 pode transmitir comandos MSC para um dispositivo. Isto pode ser utilizado para controlar outros dispositivos (como samplers de som). Todas as configurações para isso são encontradas no&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui você precisa definir suas configurações para coincidir com o receptor MSC.&nbsp;</p>

<p>Os dados MSC são transmitidos a partir de um console autônomo ou se você tiver uma sessão, então é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>O console pode receber MTC e usar isso para executar automaticamente cues nos executores.</p>

<p>O executor que você quer controlar por MTC precisa ter "MIDI" ativado na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">janela Configurações do Executor</a>. Então você precisa ter alguns cues naquele executor que usem Timecode como trigger (disparo). Quando Timecode é o trigger, então você pode definir um tempo na coluna "Trig Time". Quando a sua entrada (In) MTC chega no tempo que você havia definido na coluna Trig Time, o cue é triggered (disparado). Você não precisa ter o cue como o próximo cue, ele irá pular para o cue que tem o tempo que coincide com o MTC de entrada. Apenas lembre-se de ter o fader levantado.</p>

<p>Você pode digitar os tempos manualmente ou você pode tocar em <span class="softkey">TC Record</span> na barra de título da vista de Cues. Isto irá iniciar uma função de gravação. Então você pode fazer um Go normal aos cues de Timecode e ele irá gravar o tempo na coluna Trig Time. Você também pode usar o <a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">comando Record</a> para ativar esta função de timecode record. Quando você tem um record ativo, então você terá um círculo vermelho piscando com um ícone branco "T" ao lado da entrada de Linha de Comando. Haverá também um círculo vermelho piscando na vista de Cues e na Barra do Executor. Você desliga a função Record tocando no <span class="softkey">TC Record</span> novamente.</p>

<p>&nbsp;</p>

<p>MTC pode ser ativado e desativado na <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">janela de Configuração de Timecode</a>&nbsp;no Setup. Se você desligou todos os timecodes de entrada, então você não pode tocar no botão <span class="softkey">TC Record</span>.&nbsp;</p>

<p>O MTC de entrada pode&nbsp;entrar em qualquer console/onPC na sessão - e não apenas no master.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>O Conceito MSC</h2>

<p>A estrutura de comando e sintaxe do MSC é baseado na estrutura geral do SysEx definida pelo MMA (MIDI Manufacturers Association). Foi lançado em 1991 como uma extensão do MIDI geral.</p>

<p>A informação MIDI bruta é escrita em octetos hexadecimais (dois números hexadecimais). Diferentes fabricantes de software podem apresentar o MSC de uma forma diferente e mostrar os dados de uma forma mais legível. Isso pode ser legal, mas como não podemos descrever todas as formas de apresentação, este manual analisa os dados brutos.</p>

<p>O formato da mensagem é semelhante ao seguinte:</p>

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
	<li><strong>F0 7F&nbsp;</strong>&nbsp;é o cabeçalho que identifica a mensagem como "exclusivo do sistema universal" e uma mensagem "em tempo real".</li>
	<li><strong>ID do dispositivo</strong>&nbsp;é o número do dispositivo ou grupo.</li>
	<li><strong>02&nbsp;</strong>é um octeto hexadecimal especificando qual a mensagem MIDI Show Control (MSC).</li>
	<li><strong>Formato do comando</strong>&nbsp;é um octeto que especifica o tipo de equipamento.</li>
	<li><strong>Comando</strong>&nbsp;é um octeto que define o tipo de comando.</li>
	<li><strong>Dados</strong>&nbsp;são os dados reais. Isto pode mudar dependendo do tipo de comando.</li>
</ul>

<p><strong>F7&nbsp;</strong>é um octeto de fechamento que termina a mensagem.</p>

<ul>
	<li><strong>ID do dispositivo</strong></li>
</ul>

<p>O ID do dispositivo é na verdade um octeto dividido em três diferentes seções:</p>

<ul>
	<li><strong>00 a 6F</strong>:&nbsp;<br>
	Estes são os 112 dispositivos específicos diferentes que podem ser identificados..</li>
	<li><strong>70 a 7E</strong>:<br>
	Estes são os 15 números de grupo.</li>
	<li><strong>7F</strong>:<br>
	Este é um ID de transmissão que todos os dispositivos ouvem.</li>
</ul>

<p>Na dot2, o ID do dispositivo e o ID do grupo podem ser definidos para as mensagens recebidas e enviadas.</p>

<p>Para transmitir o MSC, ele só pode transmitir um octeto na localização do ID do dispositivo. A configuração Enviar para (descrita acima) seleciona qual das três diferentes seções ID deve ser transmitida.</p>

<p><strong>Formato do comando</strong></p>

<p>O octeto de formato de comando indica o tipo de equipamento que deve receber a mensagem (ou pelo menos responder). dot2 apenas transmite e responde a três formatos diferentes:</p>

<ul>
	<li><strong>01</strong>:<br>
	Este é o formato de <strong>Luz geral&nbsp;</strong></li>
	<li><strong>02</strong>:<br>
	Este é o formato do&nbsp;<strong>Moving Lights</strong>&nbsp;</li>
	<li><strong>7F</strong>:<br>
	Este é um formato que<strong> todos</strong> os equipamentos devem responder</li>
</ul>

<p><strong>Comando</strong></p>

<p>O octeto de comando indica o tipo de comando na mensagem. O tipo de comando ditará as informações dos dados.</p>

<p>dot2 suporta 7 tipos de comandos diferentes:</p>

<ul>
	<li><strong>01 (Go)</strong>:<br>
	Esse é o mesmo que o comando Go na dot2. Ele precisa ser seguido por um número de cue.</li>
	<li><strong>02 (Stop)</strong>:<br>
	Esse é o mesmo que o comando Pause na dot2. Ele pode ser seguido por um número de cue.</li>
	<li><strong>03 (Resume)</strong>:<br>
	Isso é o "un-pause" de um cue. Se um cue específico foi pausado, o número de cue deve ser especificado com este comando.</li>
	<li><strong>04 (Timed_Go)</strong>:<br>
	Isso pode ser usado para executar o Goto com um tempo de fade específico. Ele precisa do tempo e do número de cue - nessa ordem.&nbsp;&nbsp;</li>
	<li><strong>06 (Set)</strong>:<br>
	O conjunto pode ser usado para definir a posição dos faders. Precisa do número do fader e da página seguidos pela posição.</li>
	<li><strong>07 (Fire)</strong>:<br>
	Isso pode ser usado para disparar macros. O número de macro precisa seguir o comando. Apenas macros de 1 a 255 podem ser disparadas.</li>
	<li><strong>0B (Go_Off)</strong>:<br>
	Este comando pode ser usado para desligar executores. Isso precisa ser seguido por um número de cue.<br>
	&nbsp;</li>
</ul>

<p><strong>01 (Go):</strong></p>

<p>Como dito acima: Isso é interpretado como um comando GOTO. Um número de cue precisa ser especificado. O número de cue também precisa ser transmitido em octetos hexadecimais e o número completo de cue, incluindo os decimais, precisa ser transmitido. Se o número de sinalização 4 for acionado, o número completo será 4.000 - o número com todos os números decimais precisam estar separados por um ponto (valor hexadecimal 2E). Números decimais em hexadecimal são alguns dos mais fáceis de converter. Precisa de um "3" na frente. Isso significa que o decimal <strong>4</strong> se torna<strong> 34</strong> em hexadecimal. O número completo de cue incluindo o ponto é: <strong>34 2E 30 30 30</strong>.</p>

<p>Se a estação estiver definida como <strong>Somente Padrão</strong> na opção Enviar MSC no Exec, tudo isso precisará ser adicionado após o comando.</p>

<p><strong>Exemplo</strong>: Disparando cue de número <strong>21.5</strong> no executor padrão (<strong>todos os dispositivos</strong>, <strong>todos os formatos</strong> e configuração <strong>padrão</strong>):</p>

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

<p>Se a configuração não for Somente Padrão, um executor e uma página precisam ser especificados. Existem duas opções para separar o número do executor e o número da página. Pode ser separado por um ponto (hex = 2E) ou por um espaço (hex = 20). O número de cue e os dados do executor/página precisam ser separados por um valor hexadecimal <strong>00</strong>.</p>

<p><strong>Exemplo:</strong>&nbsp;Disparando cue de número <strong>37.2</strong> no executor 5 na página 1 (<strong>Todos os dispositivos</strong>,<strong>&nbsp;Todos os formatos</strong>, e configuração da <strong>Página do Executor</strong>)<strong> :</strong></p>

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

<p>Mesmo exemplo, mas com um executor e uma página separados&nbsp;por espaços.</p>

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

<p>Isso é como apertar o botão de pausa. Por favor, leia a seção acima para uma melhor compreensão do sistema de numeração hexadecimal.</p>

<p>Com a opção<strong> Somente Padrão</strong>, não é necessário haver nenhum dado extra, pois é o executor que está em pausa.</p>

<p><strong>Exemplo:</strong>&nbsp;Parar o executor padrão (<strong>Todos os dispositivos</strong>,<strong>&nbsp;Todos os formatos </strong>e configuração&nbsp;<strong>Somente Padrão</strong>) :<strong>&nbsp;</strong></p>

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

<p>Se a estação estiver&nbsp;transmitindo o MSC, ele transmitirá um número de cue<strong> 0,000</strong>. Isto é como enviar um comando “Pausar execução de cue”.</p>

<p><br>
Se as configurações não forem <strong>Somente Padrão</strong>, mas uma das duas opções Executor/ Página, então o cue 0 também precisará ser transmitido.&nbsp;</p>

<p>&nbsp;</p>

<p><strong>Exemplo:</strong>&nbsp;Parar o executor 5 na página 1(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>, e configuração da&nbsp;<strong>Página do Executor</strong>):</p>

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

<p>Esta é a única maneira de continuar um cue pausado. A única diferença entre os comandos Stop e Resume são os "02" e "03".</p>

<p><strong>Example:</strong>&nbsp;Continuando o fade pausado acima (<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configuração da&nbsp;<strong>Página do Executor</strong>):</p>

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

<p>Se a configuração Apenas Padrão for escolhida, o comando será F0 7F 7F 02 7F 03 F7 para continuar o fade.</p>

<p>&nbsp;</p>

<p><strong>04 (Timed_Go):</strong></p>

<p>Isso é o mesmo que o comando <strong>01 (Go)</strong>, mas com um tempo especificado. Por favor, leia (e entenda) sobre o comando <strong>01 (GO)</strong> e os dados acima. Apenas para tornar isso um pouco mais simples, vamos fingir que a opção “Somente Padrão” está ativada nas opções do MSC em Setup.</p>

<p>Para transmitir um tempo cronometrado o tempo precisa ser especificado primeiro e, em seguida, o número de cue. A hora é especificada por cinco octetos hexadecimais. Eles representam (em ordem)<strong> hora, minuto, segundo, quadro</strong> e <strong>fração</strong>.</p>

<p>As seções de hora, minuto e segundo são muito estreitas. O número precisa ser transmitido em números hexadecimais. É possível transmitir um valor acima do limite normal por exemplo 64 segundos (hex = 40). A estação transmitirá isso como 1 minuto e 4 segundos.</p>

<p>No momento, o console não aceitará nenhum horário especificado nas seções Quadro e Fração. Mas transmite valores abaixo de um segundo na seção Frame. O console divide o segundo em 24 quadros. Então, 0,5 segundos são 12 quadros e o número hexadecimal recebido seria <strong>0C</strong>.</p>

<p><strong>Exemplo:</strong>&nbsp;Vá para o Cue 75 com o tempo de 20 segundos&nbsp;&nbsp;(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configuração da&nbsp;<strong>Página do Executor</strong>):</p>

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

<p><strong>Example:</strong>&nbsp;Vá para o&nbsp;cue 5.4 com o tempo de fade de 1 minuto no executor 3 na página 1 &nbsp;(<strong>Todos os Dispositivos</strong>,<strong>&nbsp;Todos os Formatos</strong>,&nbsp;e configuração da&nbsp;<strong>Página do Executor</strong>):</p>

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

<p>O comando set é usado para mover um fader para uma posição específica. O comando 06 é seguido por dois octetos hexadecimais que indicam o fader e, em seguida, mais dois octetos que indicam a posição.</p>

<p>&nbsp;</p>

<p>O primeiro dos dois números para o fader é o número do fader (em uma página). O número do fader<strong> 1</strong> é hexadecimal número <strong>00</strong>, o segundo é <strong>01</strong> e assim por diante. Lembre-se que este é um número hexadecimal, então o fader 16 tem o número hexadecimal <strong>0F</strong> e o decimal 17 é hexadecimal <strong>10.</strong></p>

<p>O segundo dos dois números para os faders é o número da página. Esta é uma página um pouco diferente, 1 é o número hexadecimal <strong>01 </strong>e a página 2 é hexadecimal <strong>02</strong> e assim por diante.</p>

<p>Portanto, o executor 1 na página 1 é 00 01.</p>

<p>Calcular a posição em números hexadecimais é um pouco mais complicado. A posição dos faders é definida por um valor coarse e fine. A escala para os dois valores é de 128 etapas (a maioria dos MIDI está em 128 etapas). O valor fine é transmitido primeiro, seguido pelo valor coarse.</p>

<p>A posição desejada do fader (em decimal) precisa ser multiplicada por 1.28. O inteiro resultante é o valor coarse. O restante (tudo do lado direito do separador) deve ser multiplicado por 128 para obter o valor fine. Os dois números decimais precisam ser convertidos em hexadecimal.</p>

<p><strong>Exemplo:</strong></p>

<p>O fader 3 na página 2 precisa ser movido para 45%. Primeiro converta a posição.</p>

<ol>
	<li>Multiplicar 45 1,28 = 57,6</li>
	<li>O valor coarse é 57.</li>
	<li>Multiplique 0,6 por 128 = 76,8</li>
	<li>O valor ótimo é 76.</li>
	<li>Converta o decimal 57 em hexadecimal = 39.</li>
	<li>Converta o decimal 76 em hexadecimal = 4C.</li>
	<li>O valor fine&nbsp;é transmitido antes do valor coarse, então a posição é: 4C 39</li>
</ol>

<p>A mensagem MSC é (<strong>Todos os dispositivos</strong> e configuração de <strong>Todos os Formatos</strong>):</p>

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

<p>Um tempo de fade pode ser adicionado após o fader e dados de posição. O formato de hora explicado no comando 04 é usado.</p>

<p><strong>Exemplo:&nbsp;</strong>Movendo o fader 15 na página 1 a 100% em 5 segundos &nbsp;(<strong>Todos os dispositivos</strong>&nbsp;e configuração de&nbsp;<strong>Todos os Formatos</strong>):</p>

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

<p>O console só transmite a posição de alguns faders - executores com seqüências e todos os masters especiais de cor verde (para o executor selecionado), mas aceita posições para todos os faders que possuem algo atribuído.</p>

<p><strong>07 (Fire):</strong></p>

<p>As macros podem ser disparadas por esse comando. Ele precisa ser seguido por um único octeto especificando o número da macro.</p>

<p>O número de macro 1 é o número hexadecimal<strong> 01</strong>. O número hexadecimal<strong> FF</strong> é o número macro 255.</p>

<p><strong>Exemplo</strong>: Disparando o número da macro 24 (<strong>Todos os dispositivos</strong>&nbsp;e configuração de&nbsp;<strong>Todos os Formatos</strong>):</p>

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

<p>Executores podem ser desligados usando o comando <strong>0B</strong>. Um número de cue precisa ser transmitido - o cue 0 pode ser usado.</p>

<p><strong>Exemplo</strong>: Envie um comando para desligar o executor 9 na página 5 (<strong>Todos os dispositivos</strong>, <strong>Todos os formatos</strong> e configuração da <strong>Página do executo</strong>r):&nbsp;</p>

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

<p>MSC pode ser enviado via Ethernet. É transmitido como uma mensagem UDP.</p>

<p>A mensagem MSC é a mesma descrita acima, mas a mensagem MSC precisa de um cabeçalho para que a data seja aceita pelo dot2.</p>

<p>O cabeçalho é separado em duas partes. O primeiro é identificar a mensagem como uma mensagem MSC dot2: <strong>47 4D 41 00 4D 53 43 </strong><strong>00</strong> - ela se traduz em GMA MSC.</p>

<p>A segunda parte é de quatro octetos descrevendo o tamanho da mensagem - incluindo o cabeçalho. Está escrito como formato little byte endian (menos significativo primeiro).</p>

<p>Isso é calculado contando o número de octetos e, em seguida, converte o número decimal em hexadecimal. Normalmente só precisamos do primeiro octeto (ele permite mensagens até 255 octetos), embora todas as quatro precisem ser enviadas.</p>

<p>&nbsp;</p>

<p><strong>Exemplos:</strong></p>

<p>Envie o comando go para o cue 35. A mensagem MSC será:&nbsp;<strong>F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong>.</p>

<p>Isso é 13 octetos. O cabeçalho é sempre de 12 octetos. Então a quantidade&nbsp; combinada é de 25 octetos. O decimal 25 é <strong>18</strong> em hexadecimal. A mensagem inteira será:</p>

<p><strong>47 4D 41 00 4D 53 43 00 18 00 00 00 F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7</strong></p>

<p>&nbsp;</p>

<p>Para disparar macro 1:&nbsp;<strong>F0 7F 7F 02 7F 07 01 F7</strong>&nbsp;- 8 octetos.</p>

<p>O 12 acima do cabeçalho é decimal 20 = 13 hex.</p>

<p>A mensagem será:</p>

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

	
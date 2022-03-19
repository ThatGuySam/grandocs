
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f4a7699-e22f-4316-9316-6b31746634da">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midimonitor/pt/1.9'; " title="Go to previous page 'MIDI Monitor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/pt/1.9';" title="Go to next page 'Network Interface'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13259/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela MIDI Show Control</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funções da Barra de&nbsp;Encoder</a>
						</li>
				</ul>
			</div>

		<p>Para abrir a <strong>janela MIDI Show Control</strong>, pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e toque em&nbsp;<span class="softkey">MIDI Show Control</span>&nbsp;em baixo da coluna Show.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MIDIShowControl01_1-1-3.png"></span><em>Figura 1: Janela&nbsp;MIDI Show Control</em></p>

<div class="important"><strong>Importante:</strong><br>
Se&nbsp;MIDI&nbsp;show&nbsp;control&nbsp;for usado em uma rede, apenas o console&nbsp;master&nbsp;irá enviar e receber comandos&nbsp;MIDI&nbsp;show&nbsp;control.&nbsp;<br>
Comandos&nbsp;MIDI&nbsp;show&nbsp;control&nbsp;também funcionam se o console é&nbsp;autônomo.</div>

<div class="important"><strong>Important:</strong><br>
Você deve enviar ou receber comandos MIDI show control. Enviar e receber comandos MIDI show control, pode criar um loop infinito.</div>

<p>Na janela MIDI Show Control (MSC) você configura as configurações de MSC. As configurações de MSC&nbsp;do remetente e destinatário têm que ser as mesmas para que eles possam se comunicar.</p>

<div class="tip"><strong>Dica:</strong><br>
Para checar&nbsp;as mensagens de entrada (In) e saída (Out) MSC, pressione&nbsp;<span class="hardkey">Tools</span>&nbsp;e toque em&nbsp;<span class="softkey">Monitor&nbsp;MIDI</span>. Para mais informações, consulte <a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">Monitor MIDI</a>.</div>

<p>Se você tocar em uma linha de edição, o balão exibe quais valores são válidos.</p>

<p><strong>Canal:</strong><br>
Exibe o canal de&nbsp;MIDI.<br>
Para selecionar um canal, toque em mais ou menos.</p>

<p><strong>ID&nbsp;do Dispositivo (Device):</strong><br>
Exibe o ID&nbsp;do dispositivo.<br>
Para selecionar o ID&nbsp;do dispositivo, toque em mais ou menos.</p>

<p><strong>ID do Grupo:</strong><br>
Exibe o ID do grupo.<br>
Para selecionar o ID do grupo, toque em mais ou menos.</p>

<p><strong>Porta Ethernet:</strong><br>
Exibe a porta Ethernet.<br>
Para selecionar a porta Ethernet, toque em mais ou menos.</p>

<p><strong>Modo:</strong><br>
Exibe o Modo&nbsp;MSC.<br>
Por padrão, o Modo MSC está desativado. Para selecionar um modo MSC, toque nos três pontos &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;na linha de edição. A lista drop-down&nbsp;se abre. Há três Modos MSC disponíveis:</p>

<ul>
	<li>Desabilitar - não irá enviar ou receber&nbsp;MSC</li>
	<li>Ethernet - não irá enviar ou&nbsp;receber&nbsp;MSC​ via a porta Ethernet selecionada</li>
	<li>MIDI - não irá enviar ou&nbsp;receber&nbsp;MSC​&nbsp;via conector&nbsp;MIDI&nbsp;na parte de trás do console</li>
</ul>

<p><strong>Executor:</strong><br>
Exibe os comandos do executor&nbsp;MSC.<br>
Por padrão, Main&nbsp;Only&nbsp;está selecionado. Para selecionar um executor, toque nos três pontos &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;na linha de edição. A lista&nbsp;drop-down&nbsp;se abre. Há três executores&nbsp;disponíveis:</p>

<ul>
	<li>Main Only - De ou para o&nbsp;executor principal.</li>
	<li>Exec.Page - De ou para um executor específico na página 1. Separado por um ponto (Hex = 2E).</li>
	<li>Exec Page - De ou para um executor específico na página 1. Separado por um espaço (Hex = 20).</li>
</ul>

<p><strong>Formato de Comando:</strong><br>
Exibe o Formato de Comando. O formato de comando é usado para indicar o tipo de equipamento que pretende receber mensagens MSC.<br>
Por padrão, All&nbsp;(Tudo) está selecionado. Para selecionar um formato de comando, toque nos três pontos &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;na linha de edição. A lista&nbsp;drop-down&nbsp;se abre. Há três formatos de comando disponíveis:</p>

<ul>
	<li>Moving Light - Formato é&nbsp;Hex = 02</li>
	<li>General Light - Formato é&nbsp;Hex = 01</li>
	<li>All (Tudo) - Formato é&nbsp;Hex = 7F</li>
</ul>

<p><strong>Mandar para&nbsp;</strong>(apenas&nbsp;MSC Out):<br>
Exibe para quem as mensagens&nbsp;MSC&nbsp;serão transmitidas<br>
Por padrão, Send&nbsp;to&nbsp;All está selecionado. Para selecionar uma outra opção de envio, toque nos três pontos &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;na linha de edição. A lista&nbsp;drop-down&nbsp;se abre. Há três opções de envio disponíveis:</p>

<ul>
	<li>Group - Transmite as mensagens&nbsp;MSC&nbsp;para a saída (out)&nbsp;MSC do&nbsp;ID do Grupo selecionado.</li>
	<li>Device - Transmite as mensagens&nbsp;MSC&nbsp;para a saída (out)&nbsp;MSC&nbsp;do&nbsp;ID&nbsp;do Dispositivo selecionado.</li>
	<li>All - Transmite as mensagens&nbsp;MSC&nbsp;para a saída (out)&nbsp;MSC&nbsp;do&nbsp;ID&nbsp;do Grupo e do Dispositivo selecionado.</li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funções da Barra de&nbsp;Encoder</h2>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView01_1-0.PNG"></span><em>Figura 2: Janela&nbsp;MIDI Show Control&nbsp;- Barra de&nbsp;Encoder Bar</em></p>

<p><strong>Scroll:</strong><br>
Para selecionar um ID&nbsp;ou deslizar pelas listas drop-down, gire o encoder para esquerda ou direita.</p>


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
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f4a7699-e22f-4316-9316-6b31746634da">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midimonitor/pt/1.9'; " title="Go to previous page 'MIDI Monitor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/pt/1.9';" title="Go to next page 'Network Interface'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13259/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
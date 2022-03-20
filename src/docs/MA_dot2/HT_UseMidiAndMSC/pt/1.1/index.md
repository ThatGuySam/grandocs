---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_UseMidiAndMSC/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.1'; " title="Go to previous page 'Usar disparos de entrada externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.1';" title="Go to next page 'Usar uma tela externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/092db22a-d2f1-46ca-9a6e-a7c12c92f284">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13352/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
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
				</ul>
			</div>

		<p>A dot2 pode lidar com diferentes tipos de MIDI e pode transmitir e receber MIDI.&nbsp;</p>

<p>Você pode ver os dados de entrada (In) e saída (Out) de MIDI em um console pressionando​ <span class="hardkey">Tools</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">​</a><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">Monitor MIDI</a></span>.</p>

<p>Se você estiver usando uma dot2 onPC, então você precisa configurar suas entradas e saídas de MIDI. Isto é feito no menu Tools (Ferramentas). Aqui você pode tocar em&nbsp;<a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">Configuração MIDI</a>&nbsp;e selecionar quais dispositivos de MIDI você usa para transmitir e receber MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>MIDI&nbsp;note de entrada remota (input)</h2>

<p>Este é um sistema para usar MIDI&nbsp;Notes recebidas para disparar (trigger) coisas diferentes no console. É tudo criado no​ <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">vista de Configuração de Entradas Remotas</a>.</p>

<p>Aqui você tem a opção para mapear sinais de MIDI Notes de entrada para os executores ou para disparar (trigger) um comando que você escreve na configuração.&nbsp;</p>

<p>Você pode usar o MIDI Velocity para definir a posição de um fader.&nbsp;</p>

<p>Entrada Remota de MIDI só dispara os executores que estão atualmente visíveis no console que recebe o sinal MIDI.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI note de saída (output)</h2>

<p>Você pode enviar MIDI Notes a partir de cues ou diretamente na linha de comando.</p>

<p>Você pode usar o ​<a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">comando Midi Note</a>&nbsp;para transmitir dados de MIDI Note. Por favor, leia mais detalhes sobre o comando na descrição do comando.&nbsp;<br>
O comando MIDI Note é transmitido a partir de um console autônomo ou se você tiver uma sessão, então é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) input - entrada</h2>

<p>O console pode ser controlado por qualquer dispositivo que pode enviar MIDI Show Control. Há um monte de configurações em relação ao MSC. Você pode encontrá-las em ​<span class="hardkey">Setup</span>&nbsp;e depois&nbsp;<span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui você pode alterar as configurações para corresponder às configurações no transmissor (muitas vezes um software Show Control ou algum software Sound).</p>

<p>Quando você usa MSC você só pode controlar executores na primeira página ou o Executor Principal.&nbsp;</p>

<p>Os dados MSC precisam ser transmitidos para um console autônomo ou se você tiver uma sessão, ele é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que reage ao MIDI.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) output - saída</h2>

<p>A dot2 pode transmitir comandos MSC para um dispositivo. Isto pode ser utilizado para controlar outros dispositivos (como amostras de som). Todas as configurações para isso são encontradas no&nbsp;<span class="hardkey">Setup</span>&nbsp;e depois <span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aqui você precisa definir suas configurações para coincidir com o receptor MSC.&nbsp;</p>

<p>Os dados MSC são transmitidos a partir de um console autônomo ou se você tiver uma sessão, então é o master da sessão (o console com o ícone de Coração Azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png">&nbsp;ao lado da entrada de linha de comando) que transmite o MIDI.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>O console pode receber MTC e usar isso para executar automaticamente cues nos executores.</p>

<p>O executor você quer que seja controlado por MTC precisa ter "MIDI" selecionado na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">janela Configurações do Executor</a>. Então você precisa ter alguns cues naquele executor que usem Timecode como trigger (disparo). Quando Timecode é o trigger, então você pode definir um tempo na coluna "Trig Time". Quando a sua entrada (In) MTC chega no tempo que você havia definido na coluna Trig Time, o cue é triggered (disparado). Você não precisa ter o cue como o próximo cue, ele irá pular para o cue que tem o tempo que coincide com o MTC de entrada. Apenas lembre-se de ter o fader para cima.</p>

<p>Você pode digitar os tempos manualmente ou você pode tocar em <span class="softkey">TC Record</span> na barra de título da vista de Cues. Isto irá iniciar uma função de gravação. Então você pode fazer um Go normal aos cues de Timecode e ele irá gravar o tempo na coluna Trig Time. Você também pode usar o <a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">comando Record</a> para ativar esta função de timecode record. Quando você tem um record ativo, então você terá um círculo vermelho piscando com um ícone branco "T" ao lado da entrada de Linha de Comando. Haverá também um círculo vermelho piscando na vista de Cues e na Barra do Executor. Você desliga a função Record tocando no <span class="softkey">TC Record</span> novamente.</p>

<p>&nbsp;</p>

<p>MTC pode ser ativado e desativado na <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">janela de Configuração de Timecode</a>&nbsp;no Setup. Se você desligou todos os timecodes de entrada, então você não pode tocar no botão <span class="softkey">TC Record</span>.&nbsp;</p>

<p>O MTC de entrada pode vir de qualquer console/onPC na sessão - e não apenas o master.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/pt/1.1'; " title="Go to previous page 'Usar disparos de entrada externa'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/pt/1.1';" title="Go to next page 'Usar uma tela externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13352/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

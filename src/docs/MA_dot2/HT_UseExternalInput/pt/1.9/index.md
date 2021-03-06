---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_UseExternalInput/pt/1.9'
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
<option value="16">1.5</option>
<option selected="selected" value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9230c022-d52a-49ed-899d-44dbcd3396ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/pt/1.9'; " title="Go to previous page 'Connect nodes, wings, 3D and onPC'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseMidiAndMSC/pt/1.9';" title="Go to next page 'Use MIDI and MIDI Show Control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/9230c022-d52a-49ed-899d-44dbcd3396ce/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/24560/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Como usar disparos de entrada externa</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Entrada Anal??gica</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">MIDI Input (Entrada&nbsp;MIDI)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">DMX Input (Entrada DMX)</a>
						</li>
				</ul>
			</div>

		<p>As entradas remotas s??o entradas externas que voc?? pode conectar e usar para disparar eventos no console dot2. H?? atualmente tr??s tipos de entradas diferentes que voc?? pode usar: An??logo (fechamento do contato), MIDI e DMX.</p>

<p>Voc?? pode configurar as entradas remotas, pressionando a tecla <span class="hardkey">Setup</span> e, em seguida, o bot??o de <span class="softkey">entrada remota</span>. Isso lhe d?? a <a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">vista de Configura????o de Entradas Remotas</a>.</p>

<p>No lado esquerdo voc?? pode ver os tr??s tipos diferentes e voc?? pode ver se eles est??o habilitados (sinal verde) ou n??o (sinal vermelho). Voc?? pode mudar isso usando o encoder da esquerda para selecionar o tipo de entrada que deseja e depois toque no encoder. Isto ir?? alternar (toggle) o status atual. Voc?? tamb??m pode alternar isso tocando no tipo de entrada.&nbsp;Para cada tipo de entrada h?? tamb??m uma pequena caixa cinza. Ele piscar?? em verde sempre quando h?? uma entrada ativa.</p>

<p>No lado direito de cada uma das entradas, voc?? pode escolher o que deve acontecer quando a entrada for disparada.</p>

<p>Esta tabela tem&nbsp;seis colunas.</p>

<p><img alt="" src="/Media/Image/Dot2_HT_UseExternalInput_01_1-2.png"> <em>Figura 1: colunas da tabela de Entradas Remotas.</em></p>

<p>A primeira coluna ?? o n??mero de entrada remoto.&nbsp;Isso muda nome dependendo da entrada selecionada.</p>

<p><strong>Tipo</strong>&nbsp;pode ser tr??s coisas diferentes:</p>

<ul>
	<li><strong>Nenhum</strong>&nbsp;- Se o tipo for Nenhum, ent??o a entrada remota n??o ?? usada.&nbsp;</li>
	<li><strong>Executor</strong> - Se voc?? escolher Executor, ent??o sua entrada remota ir?? disparar algum executor.&nbsp;</li>
	<li><strong>CMD</strong> - Se voc?? escolher Comando, ent??o voc?? pode escrever o comando que o trigger&nbsp;(disparo) deve executar.&nbsp;</li>
</ul>

<p>As&nbsp;outras quatro&nbsp;colunas tornam-se relevantes, dependendo do tipo que voc?? selecionou.</p>

<p>Se voc?? tiver escolhido <strong>Executor</strong>, ent??o voc?? tem acesso ??s colunas <strong>P??gina,</strong> <strong>Executor e Fun????o</strong>. A coluna <strong>Executor</strong> permite que voc?? digite o n??mero do executor que voc?? deseja disparar. Voc?? precisa especificar um n??mero de p??gina ou selecionar "Atual" na coluna <strong>P??gina</strong>, selecione ent??o o n??mero do <strong>Executor</strong> do executor que voc?? deseja trigger (disparar). A coluna <strong>Fun????o</strong> permite que voc??&nbsp;selecione um dos tr??s: <strong>Bot??o 2, Fader e Bot??o 1</strong> - se voc?? escolher um executor que s?? tem uma tecla, ent??o voc?? s?? pode selecionar <strong>Bot??o 1</strong>. Dependendo do tipo de entrada, suas teclas e faders reagem diferente na entrada. Mas isto s??o, basicamente, as teclas f??sicas e os&nbsp;faders para o executor selecionado.</p>

<p>Se voc?? tiver escolhido o tipo <strong>CMD</strong>, ent??o voc?? pode acessar a coluna <strong>CMD</strong>. Aqui voc?? pode digitar um comando que deseja que o trigger (disparo) execute.</p>

<p>D?? uma olhada na se????o de&nbsp;<a href="/Topic/8847bf4f-7a7f-45d0-9935-be8c896b8674">Comandos</a>&nbsp;desse manual para aprender mais sobre os comandos.</p>

<p>A seguir, uma descri????o das tr??s diferentes tipos&nbsp;de entrada.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Entrada Anal??gica</h2>

<p>Para utilizar o disparo de entrada anal??gica, voc?? precisa conectar um dispositivo de terceiros com um conector D-sub 15 com as teclas conectadas. Voc?? pode ter 12&nbsp;switches de contato que envia entre 5 e 15 volts em um dos pinos no d-sub 15. Um dos pinos suporta 5 volts, de modo que voc?? n??o precisa de uma fonte de alimenta????o externa, desde que voc?? n??o use para cabos longos.</p>

<p>Os disparos anal??gicos s??o apenas&nbsp;on/off. Eles n??o suportam entrada vari??vel.</p>

<p>Esta ?? a pinagem do d-sub:</p>

<ul>
	<li>Pin 1 = Analog input 1</li>
	<li>Pin 2&nbsp;=&nbsp;Analog input 3</li>
	<li>Pin 3 =&nbsp;Analog input 5</li>
	<li>Pin 4 =&nbsp;Analog input 7</li>
	<li>Pin 5 =&nbsp;Analog input 9</li>
	<li>Pin 6 =&nbsp;Analog input 11</li>
	<li>Pin 7 = + 5 volts</li>
	<li>Pin 8 = Common Ground</li>
	<li>Pin 9 =&nbsp;Analog input 2</li>
	<li>Pin 10 =&nbsp;Analog input 4</li>
	<li>Pin 11 =&nbsp;Analog input 6</li>
	<li>Pin 12 =&nbsp;Analog input 8</li>
	<li>Pin 13 =&nbsp;Analog input 10</li>
	<li>Pin 14 =&nbsp;Analog input 12</li>
	<li>Pin 15 = Not used</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>MIDI Input (Entrada&nbsp;MIDI)</h2>

<p>A entrada MIDI reage ??s notas MIDI recebidas. Voc?? pode atribuir um disparo para as notas de 0 a 127 - de forma que h?? 128 diferentes disparos e&nbsp;MIDI. Os disparos reagem&nbsp;?? informa????o de velocidade. Isto significa que um&nbsp;fader pode ser posi????o de acordo com a velocidade recebida.&nbsp;Bot??es do executor tamb??m reagem aos comandos&nbsp;MIDI "on" e "off".</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>DMX Input (Entrada DMX)</h2>

<p>A entrada de&nbsp;DMX reage ao sinal no conector de entrada de&nbsp;DMX&nbsp;assim como as entradas de rede dos protocolos Art-Net e sACN??? na&nbsp;dot2. Todas as tr??s entradas usam o&nbsp;DMX interno no universo 9. A entrada remota DMX pode usar todos os 512 canais de&nbsp;DMX. Bot??es executores e comandos s??o executados se a entrada DMX est?? na faixa de 128-255. Isso tamb??m suporta entrada vari??vel para que voc?? possa controlar a posi????o do fader executor - ent??o isso reage com a gama 1 a 255. O indicador de atividade acende apenas se a entrada est?? acionando alguma coisa. Ent??o, se voc?? s?? tem bot??es Executores e comandos, o valor de entrada deve ser 127 ou acima, antes que o indicador esteja ativo. Para faders executor, ele ir?? ativar quando a entrada estiver acima de 0.</p>

<div class="important"><strong>Importante:</strong><br>
&nbsp;- Os valores de&nbsp;DMX recebidos s??o exibidos na visualiza????o de&nbsp;DMX no universo 9.???<br>
- Se os valores de DMX forem enviados para um ??nico canal de DMX a partir de v??rias entradas simultaneamente, Art-Net e sACN, por exemplo, subsequentemente o valor mais elevado (HTP) ser?? aplicado.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9230c022-d52a-49ed-899d-44dbcd3396ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/pt/1.9'; " title="Go to previous page 'Connect nodes, wings, 3D and onPC'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseMidiAndMSC/pt/1.9';" title="Go to next page 'Use MIDI and MIDI Show Control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/24560/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

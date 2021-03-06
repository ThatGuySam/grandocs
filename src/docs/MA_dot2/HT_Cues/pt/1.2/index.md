---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Cues/pt/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="511081dd-5ffb-4aaa-8d09-a0859b0d0a19">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Presets/pt/1.2'; " title="Go to previous page 'Work with presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/pt/1.2';" title="Go to next page 'Work with chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13358/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Como Trabalhar com Cues</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Criar&nbsp;cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Fazer o update&nbsp;de um&nbsp;cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Nomeando um cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Alterando o tempo de cue</a>
								<ul>
										<li><a href="#toc_header_anchor_5">Tempo Padr??o</a></li>
										<li><a href="#toc_header_anchor_6">Configurar um tempo quando armazenar</a></li>
										<li><a href="#toc_header_anchor_7">Alterando o tempo na vista de Cues</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Disparos de Cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Proteger um&nbsp;cue (Protect)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Ir para um cue espec??fico em uma lista de cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Copiar um&nbsp;cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">Move o&nbsp;cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_13">Renumere a lista de cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_14">Deletando um Cue</a>
						</li>
				</ul>
			</div>

		<p>Cues&nbsp;cont??m valores para alguns ou para todos os&nbsp;fixtures. Se voc?? est??&nbsp;??&nbsp;procura de conhecimento mais geral sobre o que s??o&nbsp;cues&nbsp;ent??o d?? uma olhada na p??gina de ajuda???&nbsp;<a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que s??o cues</a>.</p>

<p>Nesta p??gina veremos como trabalhar com cues.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Criar&nbsp;cues</h2>

<p>Cues s??o organizados em uma lista de cue em um executor. Voc?? pode armazenar cues em qualquer executor que n??o seja um master de grupo ou um master especial.</p>

<p>Voc?? precisa de alguns fixtures&nbsp;e alguns valores em seu programador. Se voc?? n??o sabe do que eu estou falando, d?? uma olhada em:&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que ?? o Programador</a>&nbsp;e&nbsp;<a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635">Como Adicionar e Patchear Fixtures</a>.</p>

<p>Com alguns valores ativos em seu programador, voc?? pode optar por armazenar essas informa????es em um cue. Isso pode ser no executor principal ou em um dos outros executores. Se voc?? n??o sabe o que s??o os executores por favor leia a p??gina&nbsp;<a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">O que s??o executores</a>.</p>

<p>Se voc?? deseja armazenar os valores em um cue&nbsp;no executor principal, pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Please</span>. Isto ir?? armazenar?? o primeiro n??mero de&nbsp;cue dispon??vel. Se voc?? n??o tem nada no executor principal antes de fazer isso, ent??o agora voc?? ter?? o cue n??mero 1. Se voc?? tiver o cue n??mero 1, ent??o voc?? n??o vai armazenar os valores diretamente. Em vez disso, voc?? ser?? perguntado sobre o que deseja fazer. Este ?? geralmente o caso quando ?? a segunda vez que voc?? armazena um cue em um executor. Voc?? obter?? a janela Escolha o M??todo de Store:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod01_1-0.PNG" style="height:auto"><br>
<em>Figura 1: Escolha o M??todo de Store</em></p>

<p>&nbsp;Existem quatro op????es aqui:</p>

<ul>
	<li><strong>Merge</strong> -&nbsp;Esta op????o adicionar?? valores aos valores j?? existentes no cue.???</li>
	<li><strong>Remover</strong> -&nbsp;Isto ir?? remover os valores existentes do mesmo tipo que voc?? tem atualmente ativo em seu programador.</li>
	<li><strong>Sobrescrever</strong> - &nbsp;Isto ir?? apagar o conte??do atual do cue e adicionar o seu valor ativo para o cue.</li>
	<li><strong>Criar Segundo Cue</strong>&nbsp;- Esta op????o s?? estar?? dispon??vel quando voc?? tem uma lista de cue com apenas um cue. Pressionando isso, voc?? ir?? adicionar os seus valores atualmente ativos em um novo cue n??mero 2.???</li>
</ul>

<p>Se voc?? deseja armazenar um n??mero de cue espec??fico, voc?? pode usar uma entrada de comando mais precisa. Por exemplo, voc?? deseja armazenar o cue n??mero&nbsp;5. Pressione as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>. Voc?? pode at?? mesmo adicionar um tempo de cue&nbsp;enquanto estiver armazenando. Por exemplo, voc?? deseja armazenar o cue n??mero 5 com um tempo de fade de 3 segundos. Para fazer isso, pressione as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando&nbsp;<a href="/Topic/96b21ed2-804c-42e6-9765-5f101405945d">Fade</a>&nbsp;<span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Se voc?? n??o especificar o tempo de&nbsp;cue&nbsp;quando voc?? armazenar o&nbsp;cue, ent??o ele usa o tempo padr??o definido na&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">janela de Tempos Padr??es</a>. Voc?? pode configur??-la pressionando a tecla&nbsp;<span class="hardkey">Time</span>&nbsp;(com uma linha de comando vazia). Ela ser?? assim:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_Timedefaults01_1-0.PNG" style="height:auto"><br>
<em>Figura 2: Janela Tempo Padr??o.</em></p>

<p>Se voc?? deseja armazenar seu cue em um executor diferente (n??o o executor principal), voc?? precisa pressionar uma tecla associada ao executor. Por exemplo, voc?? deseja armazenar o&nbsp;cue n??mero&nbsp;2 em um executor espec??fico. Ent??o voc?? precisa pressionar as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">2</span>&nbsp;e depois, uma das teclas associadas ao executor onde voc?? deseja o cue.</p>

<p>Armazenar um cue far?? um <strong>Auto Unblock</strong>. Isto significa que depois de ter guardado um cue, todos os valores inalterados s??o removidos. Por favor, use a fun????o <strong>Protect</strong> (leia abaixo), se voc?? quiser "bloquear" um cue.</p>

<p>A dot2 ?? um console de tracking. Se voc?? n??o sabe o que isso significa, por favor, d?? uma olhada na p??gina de ajuda <a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">O que ?? Tracking</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Fazer o update&nbsp;de um&nbsp;cue</h2>

<p>Voc?? pode sempre armazenar seu conte??do ativo atual do programador em qualquer cue que deseja.</p>

<p>Mas se voc?? tem um cue ativo em execu????o, ent??o voc?? tem a possibilidade de usar a tecla&nbsp;<span class="hardkey">Update</span>. ?? um fluxo de trabalho mais r??pido. Se voc?? pressionar <span class="hardkey">Update</span>&nbsp;<span class="hardkey">Please</span>, ent??o voc?? atualiza o cue ativo no executor principal.</p>

<p>Se voc?? pressionar <span class="hardkey">Update</span>&nbsp;e depois uma tecla em um dos outros executores, voc?? atualiza o cue ativo naquele executor. Se n??o tiver um cue ativo, ent??o nada acontece.</p>

<p>Update&nbsp;<span style="font-size:12px">lhe dar?? uma janela perguntando como atualizar (update). Existem dois modos chamados <strong>Normal</strong> e <strong>Cue Only</strong>. Normal far?? uma atualiza????o (update) de tracking e Cue Only ir?? preservar os valores do seguinte cue.</span></p>

<p>Atualizando o cue far?? um <strong>Auto Unblock</strong>. Isto significa que depois de uma atualiza????o (update) tudo que estiver armazenado, menos os valores inalterados, ser?? removido. Por favor, use a fun????o <strong>Protect</strong> (leia abaixo), se voc?? quiser "bloquear" um cue.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Nomeando um cue</h2>

<p>Logo depois de armazenar um cue, h?? o&nbsp;pop-up&nbsp;para Etiquetar. Se voc?? pression??-lo, ent??o voc?? ?? levado para a&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">janela Inserir Nome </a>.&nbsp;</p>

<p>Se voc?? precisa etiquetar um cue ap??s sua cria????o, voc?? pode usar a tecla <span class="hardkey">Label</span>. Por exemplo: voc?? quer nomear o cue n??mero&nbsp;2 no executor principal:&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Voc?? tamb??m pode abrir a&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista de Cues</a>&nbsp;&nbsp;e pressionar o nome do&nbsp;cue&nbsp;que voc?? deseja mudar. Se voc?? continuar pressionando-o por cerca de 2 segundos, voc?? tamb??m obter?? a janela Inserir Nome...</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Alterando o tempo de cue</h2>

<p>H?? muitos tempos &nbsp;diferentes em um cue. Eles podem ser vistos na <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cue</a>.</p>

<p>Os valores habituais (In) Fade e Out Fade &nbsp;configuram os tempos utilizados, respectivamente, pelos atributos que est??o aumentando e os que est??o diminuindo o valor. O padr??o de f??brica ?? que o Out Fade ?? configurado ao tempo de Fade (ou InFade). Portanto, n??o importa como voc?? configure o tempo de fade, o tempo de OutFade ser?? o mesmo. Mas voc?? tem a possibilidade de separ??-los.</p>

<p>Voc?? tamb??m pode configurar um Delay para o OutFade. Isso ?? um tempo que o console vai esperar antes de iniciar o OutFade.</p>

<p>Todos os Tipos de Preset dispon??veis t??m seus pr??prios tempos para fade e delay. Configurar isso ir?? sobrescrever o tempo de cue configurado para os valores que est??o sendo alterados naquele Tipo de Preset.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Tempo Padr??o</h3>

<p>Voc?? pode pressionar a tecla&nbsp;<span class="hardkey">Time</span>&nbsp;para abrir a&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">janela de Tempos Padr??es</a>. Aqui voc?? pode configurar os tempos que ser??o usados como padr??o quando voc?? criar novos cues.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Configurar um tempo quando armazenar</h3>

<p>Voc?? pode sobrescrever o tempo padr??o quando voc?? armazena um cue. Por exemplo, voc?? deseja armazenar o&nbsp;cue 3 com um tempo de fade de 5 segundos: &nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando Fade)&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>A tecla <span class="hardkey">Time</span>&nbsp;tem uma fun????o especial quando voc?? a usa em um comando. No exemplo acima, voc?? pode manter pressionada a tecla <span class="hardkey">Time</span>&nbsp;para alterar entre os diferentes tempos dispon??veis no&nbsp;cue - embora n??o sejam os tempos de tipo de preset.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Alterando o tempo na vista de Cues</h3>

<p>Quando voc?? tem uma vista de&nbsp;Cues&nbsp;vis??vel, voc?? pode pressionar e segurar um valor na vista para alterar o valor do tempo.</p>

<p>Voc?? tamb??m pode usar o&nbsp;encoder&nbsp;de&nbsp;rolagem&nbsp;para selecionar o campo do tempo que voc?? deseja alterar e, em seguida, pression??-lo. Isto lhe dar?? a&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">vista da Calculadora</a>. Use-a para &nbsp;definir um novo valor.</p>

<p>Voc?? tamb??m pode pressionar a tecla <span class="hardkey">Edit</span> e, em seguida, o campo que voc?? deseja alterar na vista de Cues, isso tamb??m lhe dar?? a vista da&nbsp;Calculadora.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Disparos de Cue</h2>

<p>Cada cue tem um disparo. Isso ?? o que faz o cue&nbsp;ser executado. Existem v??rios disparos:</p>

<ul>
	<li><strong>Go</strong> - O cue apenas dispara quando ele recebe um comando&nbsp;Go.</li>
	<li><strong>Time</strong> - Ao selecionar Time, ent??o voc?? precisa especificar o tempo na coluna de Trig Time. O tempo que voc?? definir come??ar?? a contagem regressiva quando o cue anterior ?? disparado.</li>
	<li><strong>Follow</strong> - Um cue follow&nbsp;?? disparado quando o cue anterior terminou todos os fades.</li>
	<li><strong>Sound</strong> - O disparo de som dispara o cue quando o console recebe picos de som. Voc?? vai encontrar diferentes op????es de som na coluna "Trig Time". A op????o chamada "Snd" e o n??mero s??o diferentes&nbsp;frequ??ncias definidas. Voc?? pode ver o som de entrada na&nbsp;<a href="/Topic/96acbacc-1ad3-41a0-8908-47107a0d8cfa">vista de Configura????o de Entrada de Som</a>, encontrado no&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Menu Tools</a>.&nbsp;</li>
	<li><strong>BPM</strong> - O cue pode ser disparado com base no BPM medido da entrada de som. Isso tamb??m pode ser visto na Vista de Configura????o de Entrada de Som.</li>
	<li><strong>Timecode</strong>&nbsp;- Seu cue pode ser disparados por entrada de sinal de&nbsp;time code. Voc?? precisa definir o tempo de disparo na coluna "Tempo de&nbsp;Trig". O timecode&nbsp;usado pode ser definido na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">vista Configura????es do Executor</a>.&nbsp;O timecode&nbsp;pode ser gravado - por favor, leia mais sobre isso na <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cue</a>.</li>
</ul>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Proteger um&nbsp;cue (Protect)</h2>

<p>Voc?? pode proteger seus cues de valores de tracking, alterando o visual do cue.</p>

<p>H?? uma coluna protegida na vista de Cue. Isto ir?? desenhar uma linha em branco acima do cue para indicar que o&nbsp;tracking para por aqui.</p>

<p>A fun????es de cue protegidas como um "block" ou "mark". Isso significa que ir?? afirmar os valores (incluindo valores trackeados) do cue, quando voc?? execut??-lo.</p>

<p>Se voc?? voltar a partir de um cue protegido, ent??os os fixtures ir??o fazer o fade de volta para os valores que tinham nos cues anteriores. Se este ?? um valor trackeado, ele usar?? o tempo de fade do cue onde eles originalmente tinham os valores. Por exemplo: o Fixture 1 obt??m o valor de 100% no cue 1 e 50% no cue 2 (tempo de fade de 5 segundos). Voc?? tamb??m tem cue 3 (tempo de fade 1 segundo), sem altera????es para o fixture 1. Em seguida, voc?? armazenar o cue 4 com o fixture 1 a 0% e um tempo de fade de 0 segundos. Cue 4 ?? um cue protegido (protected). Se voc?? estiver no cue 4 e pressionar&nbsp;<span class="hardkey">Go-</span>&nbsp;e fazer o fade ao cue &nbsp;3, o fixture 1 far?? o fade para 50% (do cue 2) e ele usar?? o tempo de fade do cue 2. Assim, outros fixtures armazenados no cue 3 usar??o o tempo de fade do cue 3, mas o Fixture 1, que tem valores trackeados, usar?? 5 segundos.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Ir para um cue espec??fico em uma lista de cue</h2>

<p>Voc?? pode ir para um cue espec??fico pressionando a tecla <span class="hardkey">Goto</span>. Voc?? vai para o cue assim que voc?? executa o comando (com <span class="hardkey">Please</span>).</p>

<p>Por exemplo, voc?? quer ir para o cue n??mero&nbsp;3, mas voc?? n??o quer passar pelos outros cues para chegar l??: <span class="hardkey">Goto</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Isto tamb??m pode ser feito usando um tempo de fade espec??fico. Por exemplo voc?? quer ir para o cue n??mero&nbsp;10, mas o cue 10 tem um tempo de fade de 2 minutos. Voc?? s?? precisa ir ao cue 10, ent??o voc?? gostaria de sobrescrever o fade do cue:&nbsp;<span class="hardkey">GotoCue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando Fade)&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Agora voc?? faz um fade para o&nbsp;cue 10 em 1 segundo.</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Copiar um&nbsp;cue</h2>

<p>Voc?? pode copiar um cue para um cue diferente usando a tecla <span class="hardkey">Copy</span>. A opera????o de c??pia pode ter apenas duas op????es de c??pia. "Cue Only" ir?? copiar seu cue&nbsp;sem ter que trackear&nbsp;os valores copiados, mas deixando os cues seguindo o novo cue, sem alterar sua apar??ncia. "Status" ?? usado para incluir valores controladas no cue de origem. Se isso n??o estiver ativado, ent??o voc?? s?? vai copiar os valores de atributos que s??o realmente armazenados no cue de origem.</p>

<p>Dependendo no destino de sua c??pia, voc?? tamb??m tem algumas op????es diferentes. Se voc?? est?? copiando para um cue novo, ainda n??o existente, ent??o voc?? pode simplesmente copiar o cue. Se voc?? copiar a um cue j?? existente, ent??o voc?? pode optar por merge os novos valores para o destino ou voc?? pode optar por sobrescrever os valores existentes com os novos ??? isso ir?? apagar todos os valores existentes e aplicar os novos valores.</p>

<p>Por exemplo, voc?? deseja copiar o cue 2 em um novo local. Ser?? o cue n??mero 3.5 - voc?? quer que os valores trackeados do cue n??mero 1 sejam inclu??dos e voc?? n??o quer mudar o cue n??mero 4: <span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">3</span> <span class="hardkey">.</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.&nbsp;Voc?? obter?? uma janela de Escolha o m??todo de Copy&nbsp;como essa:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseCopyMethod01_1-0.PNG" style="height:auto"><br>
<em>Figura 3: Escolha o M??todo de C??pia</em></p>

<p>Isso pode parecer um pouco diferente, depende se voc?? j?? tem uma cue 3.5 ou se estamos criando um novo cue. Esteja certo de que o status tem uma marca de verifica????o, e se voc?? pode ver a op????o "Cue Only", certifique-se que tamb??m tem uma marca de verifica????o. Agora toque em <span class="softkey">Copiar</span> ou <span class="softkey">Merge</span>, dependendo de suas op????es.</p>

<p>Copiar o&nbsp;cue&nbsp;far?? um&nbsp;<strong>Auto&nbsp;Unblock</strong>. Isto significa que depois d a c??pia todos os valores inalterados ser??o removido. Por favor, use a fun????o&nbsp;<strong>Protect</strong>&nbsp;- Proteger (leia acima), se voc?? quiser "bloquear" um&nbsp;cue.</p>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2>Move o&nbsp;cue</h2>

<p>Voc?? pode mover um cue usando a tecla <span class="hardkey">Move</span>. Por exemplo, voc?? deseja mover o&nbsp;cue 2 a o cue 6 (que n??o existe no momento):&nbsp;<span class="hardkey">MoveCue</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">6</span>&nbsp;<span class="hardkey">Please</span>.&nbsp; Isto ir?? mover o cue sem pedir qualquer pergunta.</p>

<p>Se voc?? mover um cue para um cue j?? existente, voc?? ser?? perguntado sobre o que realmente deseja fazer. Os valores existentes no cue de destino ser??o sobrescritos.</p>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h2>Renumere a lista de cue</h2>

<p>Voc?? pode renumerar um ??nico cue ou uma gama de cues. Pressione e segure um n??mero de&nbsp;cue na vista de cues. Isso abre a&nbsp;<a href="/Topic/55344644-8c65-4e59-ad6b-2aa988a28c88">janela Editar N??mero(s) de Cue</a>. Ela seria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EditCueNumbers01_1-0.PNG" style="height:auto"><br>
<em>Figura 4: janela Editar N??mero(s) do&nbsp;Cue.</em></p>

<p>No topo desta janela voc?? pode configurar a gama de cue que voc?? deseja numerar. Voc?? ent??o define o novo n??mero inicial e a largura do step para os cues. Quando voc?? estiver feliz com as configura????es, ent??o voc?? toca no bot??o <span class="softkey">Renumerar</span>.</p>

<p>Voc?? n??o pode usar Renumerar para mover um cue ??? e a lista de cue sempre tem que estar em ordem num??rica. Assim, voc?? s?? pode renumerar o(s) cue(s) dentro dos limites de quaisquer cues antes ou depois da gama definida.</p>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h2>Deletando um Cue</h2>

<p>Voc?? pode excluir um cue usando a tecla <span class="hardkey">Delete</span>. Quando voc?? exclui um cue, voc?? pode ser perguntado se deseja excluir o cue de um jeito "Normal" ou usando o "Cue Only". Voc?? s?? ser?? perguntado, se excluir um cue que n??o seja o ??ltimo cue. "Normal" ir?? resultar em valores trackeados do cue anterior para o pr??ximo. Valores que podem ter sido alterados no cue que voc?? est?? excluindo. "Cue Only" deixar?? os cues seguintes da mesma maneira que eles estavam antes de voc?? excluir o cue.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_15" id="toc_header_anchor_15" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que ?? o Programador</a></p>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que s??o Cues</a></p>

<p><a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">O que ?? Tracking</a></p>

<p><a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">O que s??o Executores</a></p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="511081dd-5ffb-4aaa-8d09-a0859b0d0a19">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Presets/pt/1.2'; " title="Go to previous page 'Work with presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/pt/1.2';" title="Go to next page 'Work with chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13358/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

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
										<li><a href="#toc_header_anchor_5">Tempo Padrão</a></li>
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
							<a href="#toc_header_anchor_10">Ir para um cue específico em uma lista de cue</a>
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

		<p>Cues&nbsp;contém valores para alguns ou para todos os&nbsp;fixtures. Se você está&nbsp;à&nbsp;procura de conhecimento mais geral sobre o que são&nbsp;cues&nbsp;então dê uma olhada na página de ajuda​&nbsp;<a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que são cues</a>.</p>

<p>Nesta página veremos como trabalhar com cues.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Criar&nbsp;cues</h2>

<p>Cues são organizados em uma lista de cue em um executor. Você pode armazenar cues em qualquer executor que não seja um master de grupo ou um master especial.</p>

<p>Você precisa de alguns fixtures&nbsp;e alguns valores em seu programador. Se você não sabe do que eu estou falando, dê uma olhada em:&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que é o Programador</a>&nbsp;e&nbsp;<a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635">Como Adicionar e Patchear Fixtures</a>.</p>

<p>Com alguns valores ativos em seu programador, você pode optar por armazenar essas informações em um cue. Isso pode ser no executor principal ou em um dos outros executores. Se você não sabe o que são os executores por favor leia a página&nbsp;<a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">O que são executores</a>.</p>

<p>Se você deseja armazenar os valores em um cue&nbsp;no executor principal, pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Please</span>. Isto irá armazenará o primeiro número de&nbsp;cue disponível. Se você não tem nada no executor principal antes de fazer isso, então agora você terá o cue número 1. Se você tiver o cue número 1, então você não vai armazenar os valores diretamente. Em vez disso, você será perguntado sobre o que deseja fazer. Este é geralmente o caso quando é a segunda vez que você armazena um cue em um executor. Você obterá a janela Escolha o Método de Store:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod01_1-0.PNG" style="height:auto"><br>
<em>Figura 1: Escolha o Método de Store</em></p>

<p>&nbsp;Existem quatro opções aqui:</p>

<ul>
	<li><strong>Merge</strong> -&nbsp;Esta opção adicionará valores aos valores já existentes no cue.​</li>
	<li><strong>Remover</strong> -&nbsp;Isto irá remover os valores existentes do mesmo tipo que você tem atualmente ativo em seu programador.</li>
	<li><strong>Sobrescrever</strong> - &nbsp;Isto irá apagar o conteúdo atual do cue e adicionar o seu valor ativo para o cue.</li>
	<li><strong>Criar Segundo Cue</strong>&nbsp;- Esta opção só estará disponível quando você tem uma lista de cue com apenas um cue. Pressionando isso, você irá adicionar os seus valores atualmente ativos em um novo cue número 2.​</li>
</ul>

<p>Se você deseja armazenar um número de cue específico, você pode usar uma entrada de comando mais precisa. Por exemplo, você deseja armazenar o cue número&nbsp;5. Pressione as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>. Você pode até mesmo adicionar um tempo de cue&nbsp;enquanto estiver armazenando. Por exemplo, você deseja armazenar o cue número 5 com um tempo de fade de 3 segundos. Para fazer isso, pressione as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando&nbsp;<a href="/Topic/96b21ed2-804c-42e6-9765-5f101405945d">Fade</a>&nbsp;<span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Se você não especificar o tempo de&nbsp;cue&nbsp;quando você armazenar o&nbsp;cue, então ele usa o tempo padrão definido na&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">janela de Tempos Padrões</a>. Você pode configurá-la pressionando a tecla&nbsp;<span class="hardkey">Time</span>&nbsp;(com uma linha de comando vazia). Ela será assim:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_Timedefaults01_1-0.PNG" style="height:auto"><br>
<em>Figura 2: Janela Tempo Padrão.</em></p>

<p>Se você deseja armazenar seu cue em um executor diferente (não o executor principal), você precisa pressionar uma tecla associada ao executor. Por exemplo, você deseja armazenar o&nbsp;cue número&nbsp;2 em um executor específico. Então você precisa pressionar as seguintes teclas:&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">2</span>&nbsp;e depois, uma das teclas associadas ao executor onde você deseja o cue.</p>

<p>Armazenar um cue fará um <strong>Auto Unblock</strong>. Isto significa que depois de ter guardado um cue, todos os valores inalterados são removidos. Por favor, use a função <strong>Protect</strong> (leia abaixo), se você quiser "bloquear" um cue.</p>

<p>A dot2 é um console de tracking. Se você não sabe o que isso significa, por favor, dê uma olhada na página de ajuda <a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">O que é Tracking</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Fazer o update&nbsp;de um&nbsp;cue</h2>

<p>Você pode sempre armazenar seu conteúdo ativo atual do programador em qualquer cue que deseja.</p>

<p>Mas se você tem um cue ativo em execução, então você tem a possibilidade de usar a tecla&nbsp;<span class="hardkey">Update</span>. É um fluxo de trabalho mais rápido. Se você pressionar <span class="hardkey">Update</span>&nbsp;<span class="hardkey">Please</span>, então você atualiza o cue ativo no executor principal.</p>

<p>Se você pressionar <span class="hardkey">Update</span>&nbsp;e depois uma tecla em um dos outros executores, você atualiza o cue ativo naquele executor. Se não tiver um cue ativo, então nada acontece.</p>

<p>Update&nbsp;<span style="font-size:12px">lhe dará uma janela perguntando como atualizar (update). Existem dois modos chamados <strong>Normal</strong> e <strong>Cue Only</strong>. Normal fará uma atualização (update) de tracking e Cue Only irá preservar os valores do seguinte cue.</span></p>

<p>Atualizando o cue fará um <strong>Auto Unblock</strong>. Isto significa que depois de uma atualização (update) tudo que estiver armazenado, menos os valores inalterados, será removido. Por favor, use a função <strong>Protect</strong> (leia abaixo), se você quiser "bloquear" um cue.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Nomeando um cue</h2>

<p>Logo depois de armazenar um cue, há o&nbsp;pop-up&nbsp;para Etiquetar. Se você pressioná-lo, então você é levado para a&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">janela Inserir Nome </a>.&nbsp;</p>

<p>Se você precisa etiquetar um cue após sua criação, você pode usar a tecla <span class="hardkey">Label</span>. Por exemplo: você quer nomear o cue número&nbsp;2 no executor principal:&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Você também pode abrir a&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista de Cues</a>&nbsp;&nbsp;e pressionar o nome do&nbsp;cue&nbsp;que você deseja mudar. Se você continuar pressionando-o por cerca de 2 segundos, você também obterá a janela Inserir Nome...</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Alterando o tempo de cue</h2>

<p>Há muitos tempos &nbsp;diferentes em um cue. Eles podem ser vistos na <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cue</a>.</p>

<p>Os valores habituais (In) Fade e Out Fade &nbsp;configuram os tempos utilizados, respectivamente, pelos atributos que estão aumentando e os que estão diminuindo o valor. O padrão de fábrica é que o Out Fade é configurado ao tempo de Fade (ou InFade). Portanto, não importa como você configure o tempo de fade, o tempo de OutFade será o mesmo. Mas você tem a possibilidade de separá-los.</p>

<p>Você também pode configurar um Delay para o OutFade. Isso é um tempo que o console vai esperar antes de iniciar o OutFade.</p>

<p>Todos os Tipos de Preset disponíveis têm seus próprios tempos para fade e delay. Configurar isso irá sobrescrever o tempo de cue configurado para os valores que estão sendo alterados naquele Tipo de Preset.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Tempo Padrão</h3>

<p>Você pode pressionar a tecla&nbsp;<span class="hardkey">Time</span>&nbsp;para abrir a&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">janela de Tempos Padrões</a>. Aqui você pode configurar os tempos que serão usados como padrão quando você criar novos cues.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Configurar um tempo quando armazenar</h3>

<p>Você pode sobrescrever o tempo padrão quando você armazena um cue. Por exemplo, você deseja armazenar o&nbsp;cue 3 com um tempo de fade de 5 segundos: &nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando Fade)&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>A tecla <span class="hardkey">Time</span>&nbsp;tem uma função especial quando você a usa em um comando. No exemplo acima, você pode manter pressionada a tecla <span class="hardkey">Time</span>&nbsp;para alterar entre os diferentes tempos disponíveis no&nbsp;cue - embora não sejam os tempos de tipo de preset.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Alterando o tempo na vista de Cues</h3>

<p>Quando você tem uma vista de&nbsp;Cues&nbsp;visível, você pode pressionar e segurar um valor na vista para alterar o valor do tempo.</p>

<p>Você também pode usar o&nbsp;encoder&nbsp;de&nbsp;rolagem&nbsp;para selecionar o campo do tempo que você deseja alterar e, em seguida, pressioná-lo. Isto lhe dará a&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">vista da Calculadora</a>. Use-a para &nbsp;definir um novo valor.</p>

<p>Você também pode pressionar a tecla <span class="hardkey">Edit</span> e, em seguida, o campo que você deseja alterar na vista de Cues, isso também lhe dará a vista da&nbsp;Calculadora.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Disparos de Cue</h2>

<p>Cada cue tem um disparo. Isso é o que faz o cue&nbsp;ser executado. Existem vários disparos:</p>

<ul>
	<li><strong>Go</strong> - O cue apenas dispara quando ele recebe um comando&nbsp;Go.</li>
	<li><strong>Time</strong> - Ao selecionar Time, então você precisa especificar o tempo na coluna de Trig Time. O tempo que você definir começará a contagem regressiva quando o cue anterior é disparado.</li>
	<li><strong>Follow</strong> - Um cue follow&nbsp;é disparado quando o cue anterior terminou todos os fades.</li>
	<li><strong>Sound</strong> - O disparo de som dispara o cue quando o console recebe picos de som. Você vai encontrar diferentes opções de som na coluna "Trig Time". A opção chamada "Snd" e o número são diferentes&nbsp;frequências definidas. Você pode ver o som de entrada na&nbsp;<a href="/Topic/96acbacc-1ad3-41a0-8908-47107a0d8cfa">vista de Configuração de Entrada de Som</a>, encontrado no&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Menu Tools</a>.&nbsp;</li>
	<li><strong>BPM</strong> - O cue pode ser disparado com base no BPM medido da entrada de som. Isso também pode ser visto na Vista de Configuração de Entrada de Som.</li>
	<li><strong>Timecode</strong>&nbsp;- Seu cue pode ser disparados por entrada de sinal de&nbsp;time code. Você precisa definir o tempo de disparo na coluna "Tempo de&nbsp;Trig". O timecode&nbsp;usado pode ser definido na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">vista Configurações do Executor</a>.&nbsp;O timecode&nbsp;pode ser gravado - por favor, leia mais sobre isso na <a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de Cue</a>.</li>
</ul>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Proteger um&nbsp;cue (Protect)</h2>

<p>Você pode proteger seus cues de valores de tracking, alterando o visual do cue.</p>

<p>Há uma coluna protegida na vista de Cue. Isto irá desenhar uma linha em branco acima do cue para indicar que o&nbsp;tracking para por aqui.</p>

<p>A funções de cue protegidas como um "block" ou "mark". Isso significa que irá afirmar os valores (incluindo valores trackeados) do cue, quando você executá-lo.</p>

<p>Se você voltar a partir de um cue protegido, entãos os fixtures irão fazer o fade de volta para os valores que tinham nos cues anteriores. Se este é um valor trackeado, ele usará o tempo de fade do cue onde eles originalmente tinham os valores. Por exemplo: o Fixture 1 obtém o valor de 100% no cue 1 e 50% no cue 2 (tempo de fade de 5 segundos). Você também tem cue 3 (tempo de fade 1 segundo), sem alterações para o fixture 1. Em seguida, você armazenar o cue 4 com o fixture 1 a 0% e um tempo de fade de 0 segundos. Cue 4 é um cue protegido (protected). Se você estiver no cue 4 e pressionar&nbsp;<span class="hardkey">Go-</span>&nbsp;e fazer o fade ao cue &nbsp;3, o fixture 1 fará o fade para 50% (do cue 2) e ele usará o tempo de fade do cue 2. Assim, outros fixtures armazenados no cue 3 usarão o tempo de fade do cue 3, mas o Fixture 1, que tem valores trackeados, usará 5 segundos.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Ir para um cue específico em uma lista de cue</h2>

<p>Você pode ir para um cue específico pressionando a tecla <span class="hardkey">Goto</span>. Você vai para o cue assim que você executa o comando (com <span class="hardkey">Please</span>).</p>

<p>Por exemplo, você quer ir para o cue número&nbsp;3, mas você não quer passar pelos outros cues para chegar lá: <span class="hardkey">Goto</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Isto também pode ser feito usando um tempo de fade específico. Por exemplo você quer ir para o cue número&nbsp;10, mas o cue 10 tem um tempo de fade de 2 minutos. Você só precisa ir ao cue 10, então você gostaria de sobrescrever o fade do cue:&nbsp;<span class="hardkey">GotoCue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Time</span>&nbsp;(= comando Fade)&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Agora você faz um fade para o&nbsp;cue 10 em 1 segundo.</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Copiar um&nbsp;cue</h2>

<p>Você pode copiar um cue para um cue diferente usando a tecla <span class="hardkey">Copy</span>. A operação de cópia pode ter apenas duas opções de cópia. "Cue Only" irá copiar seu cue&nbsp;sem ter que trackear&nbsp;os valores copiados, mas deixando os cues seguindo o novo cue, sem alterar sua aparência. "Status" é usado para incluir valores controladas no cue de origem. Se isso não estiver ativado, então você só vai copiar os valores de atributos que são realmente armazenados no cue de origem.</p>

<p>Dependendo no destino de sua cópia, você também tem algumas opções diferentes. Se você está copiando para um cue novo, ainda não existente, então você pode simplesmente copiar o cue. Se você copiar a um cue já existente, então você pode optar por merge os novos valores para o destino ou você pode optar por sobrescrever os valores existentes com os novos – isso irá apagar todos os valores existentes e aplicar os novos valores.</p>

<p>Por exemplo, você deseja copiar o cue 2 em um novo local. Será o cue número 3.5 - você quer que os valores trackeados do cue número 1 sejam incluídos e você não quer mudar o cue número 4: <span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">3</span> <span class="hardkey">.</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.&nbsp;Você obterá uma janela de Escolha o método de Copy&nbsp;como essa:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseCopyMethod01_1-0.PNG" style="height:auto"><br>
<em>Figura 3: Escolha o Método de Cópia</em></p>

<p>Isso pode parecer um pouco diferente, depende se você já tem uma cue 3.5 ou se estamos criando um novo cue. Esteja certo de que o status tem uma marca de verificação, e se você pode ver a opção "Cue Only", certifique-se que também tem uma marca de verificação. Agora toque em <span class="softkey">Copiar</span> ou <span class="softkey">Merge</span>, dependendo de suas opções.</p>

<p>Copiar o&nbsp;cue&nbsp;fará um&nbsp;<strong>Auto&nbsp;Unblock</strong>. Isto significa que depois d a cópia todos os valores inalterados serão removido. Por favor, use a função&nbsp;<strong>Protect</strong>&nbsp;- Proteger (leia acima), se você quiser "bloquear" um&nbsp;cue.</p>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2>Move o&nbsp;cue</h2>

<p>Você pode mover um cue usando a tecla <span class="hardkey">Move</span>. Por exemplo, você deseja mover o&nbsp;cue 2 a o cue 6 (que não existe no momento):&nbsp;<span class="hardkey">MoveCue</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">6</span>&nbsp;<span class="hardkey">Please</span>.&nbsp; Isto irá mover o cue sem pedir qualquer pergunta.</p>

<p>Se você mover um cue para um cue já existente, você será perguntado sobre o que realmente deseja fazer. Os valores existentes no cue de destino serão sobrescritos.</p>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h2>Renumere a lista de cue</h2>

<p>Você pode renumerar um único cue ou uma gama de cues. Pressione e segure um número de&nbsp;cue na vista de cues. Isso abre a&nbsp;<a href="/Topic/55344644-8c65-4e59-ad6b-2aa988a28c88">janela Editar Número(s) de Cue</a>. Ela seria assim:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EditCueNumbers01_1-0.PNG" style="height:auto"><br>
<em>Figura 4: janela Editar Número(s) do&nbsp;Cue.</em></p>

<p>No topo desta janela você pode configurar a gama de cue que você deseja numerar. Você então define o novo número inicial e a largura do step para os cues. Quando você estiver feliz com as configurações, então você toca no botão <span class="softkey">Renumerar</span>.</p>

<p>Você não pode usar Renumerar para mover um cue – e a lista de cue sempre tem que estar em ordem numérica. Assim, você só pode renumerar o(s) cue(s) dentro dos limites de quaisquer cues antes ou depois da gama definida.</p>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h2>Deletando um Cue</h2>

<p>Você pode excluir um cue usando a tecla <span class="hardkey">Delete</span>. Quando você exclui um cue, você pode ser perguntado se deseja excluir o cue de um jeito "Normal" ou usando o "Cue Only". Você só será perguntado, se excluir um cue que não seja o último cue. "Normal" irá resultar em valores trackeados do cue anterior para o próximo. Valores que podem ter sido alterados no cue que você está excluindo. "Cue Only" deixará os cues seguintes da mesma maneira que eles estavam antes de você excluir o cue.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_15" id="toc_header_anchor_15" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que é o Programador</a></p>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que são Cues</a></p>

<p><a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">O que é Tracking</a></p>

<p><a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">O que são Executores</a></p>


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

	

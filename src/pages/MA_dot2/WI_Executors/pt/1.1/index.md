
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="839f039d-2e75-4ed2-a4be-0ff458dec63d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/pt/1.1'; " title="Go to previous page 'Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/pt/1.1';" title="Go to next page 'Chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/839f039d-2e75-4ed2-a4be-0ff458dec63d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14920/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>O que são Executores</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Masters de Grupo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Masters&nbsp;Especiais</a>
								<ul>
										<li><a href="#toc_header_anchor_5">Master Speed (Velocidade Master)</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Master&nbsp;Rate (Ritmo Master)</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Executor Time (Exec Time)</a></li>
										<li><a href="#toc_header_anchor_8">Programmer Time (Prog Time)</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>Executores são os faders e teclas abaixo das telas (exceto a tela à direita).</p>

<p>Eles vêm em duas versões. Uma com duas teclas e um fader e o outra com apenas uma tecla.</p>

<p>As teclas têm um símbolo nelas. São elas:&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;e para aqueles com duas teclas há também o&nbsp;<span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span>. Você pode alterar a função destas teclas utilizando a&nbsp;<a href="/Topic/f613ca45-9cb0-43e7-bb0d-d75fdc5b0d39">Alterar as Funções dos Botões Executores</a>&nbsp;ou no <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">menu Configurações do Executor</a>.</p>

<p>Você pode ter muitas páginas com executores. Como um padrão, se você tem um executor ativo e mudar de página, então seu executor será automaticamente fixado e ficará visível. Qualquer coisa que possa estar nesse executor na nova página não estará disponível antes do outro executor (da página anterior) não estar mais em atividade. Quando se torna inativo, ele volta automaticamente para a página original. Isso é chamado de&nbsp;Autofix&nbsp;e pode ser globalmente desativado em&nbsp;Setup -&gt;&nbsp;<a href="/Topic/13f3b4a4-bfc6-4893-9a29-b9e5c3a404ad">Configurações Globais</a>.</p>

<p>Você pode escolher por fixar os executores usando o&nbsp;<a href="/Topic/3fa7be26-ead4-44c6-98d5-f9d0eda903ff">comando Fix</a>&nbsp;e a&nbsp;<a href="/Topic/c9075805-7dcb-4602-b639-4f999f195cf2">tecla</a>.</p>

<p>Executores ativos têm uma cor mais brilhante do que os&nbsp;faders inativos. Você pode deixar um executor inativo pressionando a tecla <span class="hardkey">Off</span> e depois uma tecla associada ao executor. Muitos executores se tornarão inativos quando o fader atingir 0%, mas não os Masters Especiais (leia abaixo para mais informações).</p>

<p>&nbsp;</p>

<p>Os executores podem ter papéis diferentes. Segue abaixo uma descrição deles.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Cues</h2>

<p>Você pode ter cues e listas de cue. Quando você armazenar cues em um executor, você obtém uma lista de cue com um ou mais cues.</p>

<p>Agora você pode reproduzir esses cues utilizando as teclas de executor e faders.</p>

<p>Este é o uso padrão para Executores.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Chaser</h2>

<p>​Uma lista de cue pode ser executada no modo Chaser. Ele ignora o tempo na lista de cue e executa cues em um loop com um tempo geral. Isso pode ser alterado no&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">menu Configurações do Executor</a>.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Masters de Grupo</h2>

<p>Você pode armazenar grupos nos executores e então você terá masters de grupo. Estes podem ser utilizados para limitar a saída de&nbsp;dimmer&nbsp;nos fixtures&nbsp;do grupo.&nbsp;&nbsp;Isso não afeta outros atributos&nbsp;(por exemplo:&nbsp;Pan/Tilt, Color, Gobo, etc.) além de dimmer.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Masters&nbsp;Especiais</h2>

<p>Há quatro masters especiais disponíveis. Eles podem ser encontrados na&nbsp;<a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">vista Velocidade Magic</a>, mas eles também podem ser atribuídos a executores&nbsp;- só faz sentido tê-los em um fader executor.</p>

<p>Essa é uma breve descrição dos quatro&nbsp;masters:</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Master Speed (Velocidade Master)</h3>

<p>Esse&nbsp;master controla a velocidade dos efeitos armazenados em cues e a velocidade de chaser.</p>

<p>É um tempo global e irá afetar todos os&nbsp;executores. Ele pode ser exibido no&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">menu Configurações do Executor</a>&nbsp;para cada executor se você não quiser que ele siga o master.</p>

<p>Quando ele está ativo, então você verá o ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages22_1-1-3.png">&nbsp;ao lado de sua linha de&nbsp;comando na tela direita.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Master&nbsp;Rate (Ritmo Master)</h2>

<p>Esse master&nbsp;é usado para modificar o tempo de cues usando o que chamamos de divisor. O valor padrão&nbsp;é 1. Isso significa que os valores de tempo no cue&nbsp;são divididos com um = ao mesmo tempo que armazenados. Se você mover o fader abaixo de 50% (posição padrão para o fader de transição) então você obtém um valor de&nbsp;fader inferior a 1. Se o fader&nbsp;estiver em 25%, então você obtém um valor de 0.50. Portanto, se o fade de seu cue original é de 2 segundos, ele é dividido por 0,5 e o resultado é de 4 segundos. Movendo o fader para 0% irá parar todos os fades. Se você mover o fader acima de 50%, você obtém um valor de&nbsp;fader superior. Se você colocar o fader em 75%, o seu valor é de 2. 2 dividido por 2 é 1, então o seu tempo de fade é de 1 segundo. Colocando-o em 100% lhe dará basicamente um tempo de fade de 0 segundos.</p>

<p>É um tempo global e irá afetar todos os&nbsp;executores. Ele pode ser exibido no&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">menu Configurações do Executor</a>&nbsp;para cada executor se você não quiser que ele siga o&nbsp;master.</p>

<p>Quando ele está ativo, então você verá o ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages23_1-1-3.png">&nbsp;ao lado de sua linha de&nbsp;comando na tela direita.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Executor Time (Exec Time)</h3>

<p>O&nbsp;Exec Time&nbsp;pode ser usado para sobrescrever o tempo de Fade de cue armazenados e usar o tempo que esse executor está definido para - os tempos de Delay armazenados são ignorados. Quando você move o fader para cima você recebe um valor entre 0 e 10 segundos. As duas teclas associadas ao executor podem ser usadas para ligar (On) ou desligar (Off) o fader Exec Time.</p>

<p>Quando ele está ativo, então você verá o ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages24_1-1-3.png">&nbsp;ao lado de sua linha de&nbsp;comando na tela direita.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Programmer Time (Prog Time)</h3>

<p>O master&nbsp;<strong>Prog Time</strong> é usado para estabelecer um tempo em seu programador. Isto é muito útil se você estiver executando shows ao vivo e quer fazer o fade de um valor do programador para outro. Quando você move o fader&nbsp;para cima, você recebe um valor entre 0 e 10 segundos. As duas teclas associadas ao executor podem ser usadas para ligar ou desligar o fader ProgT. Quando ele está ligado (On), todos os valores do programador usarão o tempo que o fader está estabelecido para usar - inclusive quando você pressionar <span class="hardkey">Clear</span>.</p>

<p>Quando ele está ativo, então você verá o ícone&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages25_1-1-3.png">&nbsp;ao lado de sua linha de&nbsp;comando na tela direita.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">O que são Cues</a></p>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">O que é o Programador</a></p>

<p><a href="/Topic/4c551247-c22e-4c8b-a255-c38c1caee863">Tecla Exec (Executor)</a></p>

<p><a href="/Topic/956920be-cc03-4323-b261-45a8c7a229d0">Comando Executor</a></p>

<p><a href="/Topic/51003507-17ad-42ae-bfa0-efbf2787c63e">Barra do Executor</a></p>

<p><a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Agrupamento do Executor</a></p>

<p><a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">Vista Velocidade Magic</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="839f039d-2e75-4ed2-a4be-0ff458dec63d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/pt/1.1'; " title="Go to previous page 'Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/pt/1.1';" title="Go to next page 'Chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14920/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
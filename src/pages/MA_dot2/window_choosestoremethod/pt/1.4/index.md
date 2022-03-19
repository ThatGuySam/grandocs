
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="662173f7-aa38-4f78-b6da-7d357eace37d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_ChooseDeleteMethod/pt/1.9'; " title="Go to previous page 'Choose Delete Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/pt/1.9';" title="Go to next page 'Choose Update Method'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/20122/29'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.9</span>
			</div>
		<h1>Janela Escolher Método de Store</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Normal</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Cue Only</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Merge</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Remover</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Sobrescrever</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Criar Segundo Cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Funções da Barra de Encoder</a>
						</li>
				</ul>
			</div>

		<p>Se você deseja armazenar novos valores do programador em um executor com um cue existente nele ou se você deseja sobrescrever um cue existente em um executor, o console lhe pedirá para escolher o método de store.</p>

<p>Existem duas janelas de métodos de Store disponíveis.</p>

<p>A janela de método de&nbsp;Store com as opções:</p>

<ul>
	<li>Merge</li>
	<li>Remover</li>
	<li>Sobrescrever</li>
	<li>Criar um Segundo Cue</li>
</ul>

<p>aparece se você armazena pela primeira vez em um executor um segundo cue&nbsp;nele (= lista de&nbsp;cue).</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod01_1-0.PNG"> <em>Figura 1: Janela Escolher Método de&nbsp;Store - primeiro segundo cue</em></p>

<p>Há quatro métodos de armazenamento disponíveis:</p>

<div class="tip"><strong>Dica:</strong><br>
Use as teclas&nbsp;<span class="hardkey">Prev</span>,<span class="hardkey">Next</span>,&nbsp;<span class="hardkey">Up</span>, e&nbsp;<span class="hardkey">Down</span>&nbsp;para&nbsp;navegar&nbsp;nessa janela e confirmar com&nbsp;<span class="hardkey">Please</span>.</div>

<p><strong>Merge:</strong><br>
Toque para adicionar ao programador valores ao cue existente.</p>

<p><strong>Remove:</strong><br>
Toque para remover do programador valores do&nbsp;cue&nbsp;existente.</p>

<p><strong>Sobrescrever:</strong><br>
Toque para sobrescrever o cue existente com os valores do programador. Os valores anteriores do cue existente são excluídos.</p>

<p><strong>Criar um segundo cue:</strong><br>
Toque para criar um cue 2 com os valores do programador. Isto irá criar uma lista de cue.</p>

<p>​Se você armazenar novos valores do programador em um cue existente, o a janela de método de store tem as opções adicionais:</p>

<ul>
	<li>Normal</li>
	<li>Cue Only</li>
</ul>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod07_1-0.png"> <em>Figura 2: Janela&nbsp;Escolher Método de&nbsp;Store - store em um cue existente</em></p>

<p>Adicional aos métodos Merge, Remover e Sobrescrever, você pode selecionar o Modo de Store.</p>

<p><strong>Modo de Store Normal:</strong><br>
Toque para armazenar o cue com tracking shield. Consulte, <a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">O que é Tracking?</a></p>

<p><strong>Modo de Store&nbsp;Cue Only:</strong><br>
Toque para armazenar o cue&nbsp;entre dois outros cues. O cue armazenado não afetará os cues seguintes com valor de tracking.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Normal</h2>

<p>Vamos supor que você irá armazenar o&nbsp;cue 2.1 entre o&nbsp;cue 2 e o&nbsp;cue 3 com&nbsp;tracking shield.</p>

<table border="1" cellpadding="5" cellspacing="5" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Cue</th>
			<th scope="col">Fixture 1 (situação inicial)</th>
			<th scope="col">Fixture 2(situação inicial)</th>
			<th scope="col">Fixture 1 (normal)</th>
			<th scope="col">Fixture 2 (normal)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Dimmer At 0</td>
			<td>Dimmer At 100</td>
			<td>Dimmer At 0</td>
			<td>Dimmer At 100</td>
		</tr>
		<tr>
			<td>2.1</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Dimmer At 33</td>
			<td>Dimmer At 33</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Dimmer At 0 (tracked)</td>
			<td>Dimmer At 80</td>
			<td>Dimmer At 33 (tracked)</td>
			<td>Dimmer At 80</td>
		</tr>
	</tbody>
</table>

<ol>
	<li>
	<p>Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">.</span> <span class="hardkey">1</span>&nbsp;e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</p>
	</li>
	<li>
	<p>Toque em&nbsp;<span class="softkey">Ok</span>. Normal é selecionado como padrão.</p>
	</li>
</ol>

<p>&nbsp;Cue&nbsp;2.1 está armazenado entre o&nbsp;cue&nbsp;2 e o&nbsp;cue&nbsp;3. Cue 3 está trackeando o valor de dimmer&nbsp;do&nbsp;fixture 1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Cue Only</h2>

<p>Vamos supor que você irá armazenar o&nbsp;cue 2.1 entre o&nbsp;cue 2 e o&nbsp;3 sem afetar os cues&nbsp;seguintes com valores de tracking.</p>

<table border="1" cellpadding="5" cellspacing="5" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Cue</th>
			<th scope="col">Fixture 1&nbsp;(situação inicial)</th>
			<th scope="col">Fixture 2&nbsp;(situação inicial)</th>
			<th scope="col">Fixture 1 (cue&nbsp;only)</th>
			<th scope="col">Fixture 2 (cue only)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
			<td>Dimmer At 50</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Dimmer At 0</td>
			<td>Dimmer At 100</td>
			<td>Dimmer At 0</td>
			<td>Dimmer At 100</td>
		</tr>
		<tr>
			<td>2.1</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Dimmer At 33</td>
			<td>Dimmer At 33</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Dimmer At 0 (tracked)</td>
			<td>Dimmer At 80</td>
			<td>Dimmer At 0</td>
			<td>Dimmer At 80</td>
		</tr>
	</tbody>
</table>

<ol>
	<li>
	<p>Pressione&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">.</span> <span class="hardkey">1</span> e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na​ <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</p>
	</li>
	<li>
	<p>Toque em&nbsp;<span class="softkey">Cue Only</span>&nbsp;e depois&nbsp;<span class="softkey">Ok</span>.</p>
	</li>
</ol>

<p>O cue&nbsp;2.1 está armazenado entre o&nbsp;cue&nbsp;2 e o cue 3. Cue 3 não tem valores de&nbsp;tracking&nbsp;do&nbsp;cue 2.1.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Merge</h2>

<p>Vamos supor que você irá adicionar o valor atual do programador ao existente cue 1 no executor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod03_1-2.png"> <em>Figura 3: Valores do&nbsp;cue 1&nbsp;antes de&nbsp;store merge</em></p>

<ol>
	<li>Pressione&nbsp;<span class="hardkey">Store</span> e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na​ <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">vista da barra do executor</a>.</li>
	<li>Toque em&nbsp;<span class="softkey">Merge</span>.</li>
</ol>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod04_1-2.png"> <em>Figura 4: Valores do&nbsp;cue 1&nbsp;depois de&nbsp;store merge</em></p>

<p>O valor atual do programador está adicionado ao existente&nbsp;cue&nbsp;1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Remover</h2>

<p>Vamos supor que você irá remover o fixture ID 32 do existente cue 1 no executor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod04_1-2.png"> <em>Figura 5: Valores do&nbsp;cue 1&nbsp;antes de&nbsp;store remove</em>.</p>

<ol>
	<li>Selecione o&nbsp;fixture ID 2 na&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de fixtures</a>.</li>
	<li>Pressione duas vezes&nbsp;<span class="hardkey">Please</span>. Todos os valores do fixture&nbsp;2 estão no programador.</li>
	<li>Pressione&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Cue</span> <span class="hardkey">1</span> e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na​ <a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">vista da barra do executor</a>.</li>
	<li>Toque em&nbsp;<span class="softkey">Remover</span>.</li>
</ol>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod05_1-2.png"> <em>Figura 6: Valores do&nbsp;cue 1&nbsp;depois de&nbsp;store remove</em></p>

<p>O fixture&nbsp;ID&nbsp;2 é removido do existente&nbsp;cue&nbsp;1 no executor principal.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Sobrescrever</h2>

<p>Vamos supor que você irá sobrescrever o cue 1 no executor principal com os valores atuais do programador.</p>

<ol>
	<li>Pressione&nbsp;<span class="hardkey">Store</span> e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na​ <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">executor bar view</a>.</li>
	<li>Toque em&nbsp;<span class="softkey">Sobrescrever</span>.</li>
</ol>

<p>O cue&nbsp;1 no executor principal tem agora os valores atuais do programador. Todos os valores anteriores do cue existente estão deletados.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Criar Segundo Cue</h2>

<p>Vamos supor que você irá criar uma lista de cue no executor principal.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod06_1-1.PNG"><br>
<em>Figura 7: Lista de cue no executor principal</em></p>

<ol>
	<li>Pressione&nbsp;<span class="hardkey">Store</span>&nbsp;e toque no&nbsp;<span class="softkey">executor principal</span>&nbsp;na​ <a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">executor bar view</a>.</li>
	<li>Toque em &nbsp;<span class="softkey">Criar Segundo Cue</span>.</li>
</ol>

<p>Os valores atuais do programador estão armazenados como um segundo cue no executor principal.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Funções da Barra de Encoder</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod02_1-0.PNG"> <em>Figura 8: Funções da Barra de Encoder - escolher método de&nbsp;store</em></p>

<p><strong>Selecionar:</strong><br>
Para selecionar uma função, gira o encoder para direita ou esquerda.<br>
Para confirmar a função selecionada, toque ou pressione o encoder.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="662173f7-aa38-4f78-b6da-7d357eace37d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_ChooseDeleteMethod/pt/1.9'; " title="Go to previous page 'Choose Delete Method'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_chooseupdatemethod/pt/1.9';" title="Go to next page 'Choose Update Method'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/20122/29';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
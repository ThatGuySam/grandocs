
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Presets/pt/1.1'; " title="Go to previous page 'Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/pt/1.1';" title="Go to next page 'Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13425/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>O que é Tracking</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Tracking Shield</a>
						</li>
				</ul>
			</div>

		<p>A dot2 é um console de tracking.</p>

<p>Bom, você não deve se preocupar muito com isso, mas é bom saber alguns detalhes.</p>

<p>&nbsp;</p>

<p>É assim que funciona.</p>

<p>Em sua forma mais básica pode-se dizer que tracking é:&nbsp;fixtures apenas fazendo algo quando lhes é dito para mudar um valor. Se você colocar um fixture&nbsp;em 50% no cue número 1, então ele fica em 50% por todos os seus outros cues - contanto que você não diga a ele para fazer alguma coisa nos outros cues.</p>

<p>Dê uma olhada nessa tabela:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Aqui&nbsp;podemos ver que o fixture 1 está apenas armazenado no cue&nbsp;1&nbsp;(marcado em <strong>negrito</strong>, em&nbsp;<em>itálico</em>&nbsp;são os valores trackeados). Mas, se você executar o cue 2, o fixture&nbsp;1 ainda está em 50% - está trackeado.</p>

<p>&nbsp;</p>

<p>Se nós armazenarmos e mesclarmos 60% de fixture 1 no cue 3, ele ficaria assim:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Número de<br>
			Cue</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>60</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>60</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>60</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>60</em></td>
		</tr>
	</tbody>
</table>

<p>Então nós alteramos o valor de&nbsp;fixture no cue 3 e agora ele está trackeando esse valor a partir do cue 3.</p>

<p>&nbsp;</p>

<p>Uma opção diferente quando armazenamos é Cue&nbsp;Only. Se nós usamos essa opção e armazenarmos o fixture 1 em 40% no cue 5 você verá que não fizemos uma mudança no cue&nbsp;6. Isso&nbsp;significa que ele permanece o mesmo que estava&nbsp;antes de nós armazenarmos o&nbsp;cue 5.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>60</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>60</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>40</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>60</strong></td>
		</tr>
	</tbody>
</table>

<p>Se você adicionar um fixture que não tenha sido previamente utilizado, então a&nbsp;dot2&nbsp;pode criar automaticamente um&nbsp;cue escondido de número zero e colocar o valor padrão (o valor que um fixture&nbsp;tem se não lhe foi dito nada) naquele cue. Cue Zero pode ser ativado na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">vista de&nbsp;Configurações</a>&nbsp;para uma lista de cue.</p>

<p>Você não pode acessar este cue, mas ele garante que os cues fiquem corretos se você copiá-los.</p>

<p>Dê uma olhada nesse exemplo:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>0</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Aqui nós temos o fixture 1 que tem valores armazenados no&nbsp;cue&nbsp;número 2. Esse valor é trackeado&nbsp;deste cue e para o&nbsp;cue 6. Se você copiar o cue número 1 para um novo cue&nbsp;3.5 usando Cue Only, então você verá que o fixture&nbsp;tem 0% no&nbsp;novo cue&nbsp;e volta para 50% no&nbsp;cue 4 - então o cue&nbsp;número 4 nunca mudou.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>0</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">3.5</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>0</strong></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">4</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">5</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">6</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Se não usarmos Cue Zero então ele fica diferente. Antes de Copy (Copiar):</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">&nbsp;</td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Quando copiamos o cue 1 ao cue 3.5, então nós copiamos um cue vazio, portanto, não copiamos nada. Este é o resultado.</p>

<p>&nbsp;</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">&nbsp;</td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">3.5</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">4</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">5</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">6</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Quando o cue copiado está vazio, os valores trackeados apenas rastrearão através dele - não lhes é dito nada mais.<br>
&nbsp;<br>
Cue Zero está desligado como padrão, mas pode ser alterado para cada executor.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Tracking Shield</h2>

<p>A dot2 também usa algo chamado <strong>Tracking</strong><strong>&nbsp;</strong><strong>Shield</strong>. É um sistema que protege automaticamente cues de alterações indesejadas para todos atributos exceto dimmer.</p>

<p>&nbsp;</p>

<p>Vamos dar uma olhada em alguns exemplos.</p>

<p>Dê uma olhada nesta tabela:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>100</strong></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em><strong>Vocalista</strong></em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>0</strong></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>0</em></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>0</em></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>0</em></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>100</strong></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
	</tbody>
</table>

<p>Temos armazenado o fixture 1 em 100% e na posição do vocalista. No&nbsp;cue 2 está desligado. Agora no cue 6 está ligado e ainda é usado na posição do vocalista - mas é um valor trackeado.</p>

<p>Agora nós gostaríamos de usar o mesmo fixture no&nbsp;cue 3 na posição de baterista. Por isso, ligue-o nessa posição e armazene-o como CueOnly&nbsp;em 0% no&nbsp;cue 4 e no cue 5. Agora, o que acontece no cue&nbsp;6?</p>

<p>Se seguirmos as regras normais de tracking, ele irá ligar ao baterista no&nbsp;cue 6. Mas quando nós fizemos o&nbsp;cue&nbsp;ele estava no vocalista! Então normalmente seria necessário recriar completamente o&nbsp;cue 6.</p>

<p>Com <strong>Tracking Shield</strong>&nbsp;nós não precisamos fazer isso. A&nbsp;dot2 percebe que você queria o fixture no vocalista no&nbsp;cue 6, então ela reaplica a posição de vocalista no&nbsp;cue 6.</p>

<p>Este é o resultado real:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>Número de</strong><br>
			<strong>Cue</strong></th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Dim</th>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Fixture 1<br>
			Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">1</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>100</strong></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>Vocalista</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">2</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>0</strong></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>Vocalista</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">3</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>100</strong></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><strong>Baterista</strong></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">4</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>0</strong></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><em>Baterista</em></td>
		</tr>
		<tr>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top">5</td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>0</em></td>
			<td style="background-color:rgb(249, 249, 249); text-align:center; vertical-align:top"><em>Baterista</em></td>
		</tr>
		<tr>
			<td style="background-color:white; text-align:center; vertical-align:top">6</td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>100</strong></td>
			<td style="background-color:white; text-align:center; vertical-align:top"><strong>Vocalista</strong></td>
		</tr>
	</tbody>
</table>

<p>O sistema procura por valores de dimmer acima de 0 que utilizam valores trackeados. Se necessário, ele armazena os valores trackeados antes de criar os valores dos cues anteriores, evitando assim que o cue&nbsp;mude por conta do tracking.&nbsp;&nbsp;O valor de dimmer no cue 5 é um valor trackeado devido a uma função chamada <strong>AutoUnblock</strong>. Isto irá remover automaticamente os valores desnecessários armazenados.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Presets/pt/1.1'; " title="Go to previous page 'Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/pt/1.1';" title="Go to next page 'Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13425/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
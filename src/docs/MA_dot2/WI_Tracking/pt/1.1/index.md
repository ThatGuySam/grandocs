---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WI_Tracking/pt/1.1'
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
		<h1>O que ?? Tracking</h1>

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

		<p>A dot2 ?? um console de tracking.</p>

<p>Bom, voc?? n??o deve se preocupar muito com isso, mas ?? bom saber alguns detalhes.</p>

<p>&nbsp;</p>

<p>?? assim que funciona.</p>

<p>Em sua forma mais b??sica pode-se dizer que tracking ??:&nbsp;fixtures apenas fazendo algo quando lhes ?? dito para mudar um valor. Se voc?? colocar um fixture&nbsp;em 50% no cue n??mero 1, ent??o ele fica em 50% por todos os seus outros cues - contanto que voc?? n??o diga a ele para fazer alguma coisa nos outros cues.</p>

<p>D?? uma olhada nessa tabela:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Aqui&nbsp;podemos ver que o fixture 1 est?? apenas armazenado no cue&nbsp;1&nbsp;(marcado em <strong>negrito</strong>, em&nbsp;<em>it??lico</em>&nbsp;s??o os valores trackeados). Mas, se voc?? executar o cue 2, o fixture&nbsp;1 ainda est?? em 50% - est?? trackeado.</p>

<p>&nbsp;</p>

<p>Se n??s armazenarmos e mesclarmos 60% de fixture 1 no cue 3, ele ficaria assim:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">N??mero de<br>
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

<p>Ent??o n??s alteramos o valor de&nbsp;fixture no cue 3 e agora ele est?? trackeando esse valor a partir do cue 3.</p>

<p>&nbsp;</p>

<p>Uma op????o diferente quando armazenamos ?? Cue&nbsp;Only. Se n??s usamos essa op????o e armazenarmos o fixture 1 em 40% no cue 5 voc?? ver?? que n??o fizemos uma mudan??a no cue&nbsp;6. Isso&nbsp;significa que ele permanece o mesmo que estava&nbsp;antes de n??s armazenarmos o&nbsp;cue 5.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Se voc?? adicionar um fixture que n??o tenha sido previamente utilizado, ent??o a&nbsp;dot2&nbsp;pode criar automaticamente um&nbsp;cue escondido de n??mero zero e colocar o valor padr??o (o valor que um fixture&nbsp;tem se n??o lhe foi dito nada) naquele cue. Cue Zero pode ser ativado na <a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">vista de&nbsp;Configura????es</a>&nbsp;para uma lista de cue.</p>

<p>Voc?? n??o pode acessar este cue, mas ele garante que os cues fiquem corretos se voc?? copi??-los.</p>

<p>D?? uma olhada nesse exemplo:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Aqui n??s temos o fixture 1 que tem valores armazenados no&nbsp;cue&nbsp;n??mero 2. Esse valor ?? trackeado&nbsp;deste cue e para o&nbsp;cue 6. Se voc?? copiar o cue n??mero 1 para um novo cue&nbsp;3.5 usando Cue Only, ent??o voc?? ver?? que o fixture&nbsp;tem 0% no&nbsp;novo cue&nbsp;e volta para 50% no&nbsp;cue 4 - ent??o o cue&nbsp;n??mero 4 nunca mudou.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Se n??o usarmos Cue Zero ent??o ele fica diferente. Antes de Copy (Copiar):</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Quando copiamos o cue 1 ao cue 3.5, ent??o n??s copiamos um cue vazio, portanto, n??o copiamos nada. Este ?? o resultado.</p>

<p>&nbsp;</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Quando o cue copiado est?? vazio, os valores trackeados apenas rastrear??o atrav??s dele - n??o lhes ?? dito nada mais.<br>
&nbsp;<br>
Cue Zero est?? desligado como padr??o, mas pode ser alterado para cada executor.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Tracking Shield</h2>

<p>A dot2 tamb??m usa algo chamado <strong>Tracking</strong><strong>&nbsp;</strong><strong>Shield</strong>. ?? um sistema que protege automaticamente cues de altera????es indesejadas para todos atributos exceto dimmer.</p>

<p>&nbsp;</p>

<p>Vamos dar uma olhada em alguns exemplos.</p>

<p>D?? uma olhada nesta tabela:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>Temos armazenado o fixture 1 em 100% e na posi????o do vocalista. No&nbsp;cue 2 est?? desligado. Agora no cue 6 est?? ligado e ainda ?? usado na posi????o do vocalista - mas ?? um valor trackeado.</p>

<p>Agora n??s gostar??amos de usar o mesmo fixture no&nbsp;cue 3 na posi????o de baterista. Por isso, ligue-o nessa posi????o e armazene-o como CueOnly&nbsp;em 0% no&nbsp;cue 4 e no cue 5. Agora, o que acontece no cue&nbsp;6?</p>

<p>Se seguirmos as regras normais de tracking, ele ir?? ligar ao baterista no&nbsp;cue 6. Mas quando n??s fizemos o&nbsp;cue&nbsp;ele estava no vocalista! Ent??o normalmente seria necess??rio recriar completamente o&nbsp;cue 6.</p>

<p>Com <strong>Tracking Shield</strong>&nbsp;n??s n??o precisamos fazer isso. A&nbsp;dot2 percebe que voc?? queria o fixture no vocalista no&nbsp;cue 6, ent??o ela reaplica a posi????o de vocalista no&nbsp;cue 6.</p>

<p>Este ?? o resultado real:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom"><strong>N??mero de</strong><br>
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

<p>O sistema procura por valores de dimmer acima de 0 que utilizam valores trackeados. Se necess??rio, ele armazena os valores trackeados antes de criar os valores dos cues anteriores, evitando assim que o cue&nbsp;mude por conta do tracking.&nbsp;&nbsp;O valor de dimmer no cue 5 ?? um valor trackeado devido a uma fun????o chamada <strong>AutoUnblock</strong>. Isto ir?? remover automaticamente os valores desnecess??rios armazenados.</p>


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

	

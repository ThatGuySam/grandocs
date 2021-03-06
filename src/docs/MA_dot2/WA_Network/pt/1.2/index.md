---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WA_Network/pt/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f843708-403a-459b-acd3-d3a504e1dcd7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/pt/1.2'; " title="Go to previous page 'Preview e Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Ipv6/pt/1.2';" title="Go to next page 'IPv6'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2f843708-403a-459b-acd3-d3a504e1dcd7">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/23198/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>O que ?? Rede na dot2</h1>


		<p>Rede pode ser v??rias coisas. Em nosso mundo, a rede ?? quando voc?? conecta pelo menos um dispositivo com outro usando os conectores RJ45 Ethernet.</p>

<p>Se voc?? s?? tem um console e nada mais, ent??o voc?? n??o precisa se preocupar com qualquer coisa que esteja relacionada a rede, mas em algum momento voc?? pode querer adicionar algo ao seu sistema.</p>

<p>A rede mais simples ?? conectar uma Wing ou um&nbsp;dot2 node com o console core ou XL.</p>

<p>Os dispositivos da MA suportam o comprimento do segmento padr??o definido para instala????es fixas - 90 m, mais 2x 5 m. A fim de evitar problemas causados por diferentes especifica????es de patching e cabos de instala????o, o comprimento do cabo ?? restrito a n??o mais que 75 m.</p>

<div class="important"><strong>Importante:</strong><br>
Dispositivos dot2 est??o para ser operados em uma rede separada - em pelo menos VLAN.&nbsp;<br>
Em geral, os dispositivos MA devem ser ligados por cabo e n??o por wireless LAN.</div>

<p>Cada dispositivo tem um conector Ethernet na parte de tr??s. Conecte um cabo Ethernet de Cat.5.E ou mais ao dispositivo.</p>

<p>Os dispositivos dot2 usam&nbsp;IPv6. Este ?? um n??mero ??nico que cada dispositivo dot2 tem e usam para se comunicar uns com os outros - ?? similar a um endere??o que torna poss??vel que os dispositivos saibam para onde enviar mensagens.</p>

<p>Uma vez que cada dispositivo tem um conector Ethernet apenas, voc?? precisa adicionar um switch de rede se voc?? quiser conectar mais de dois dispositivos. Ele precisa ser um bom switch que consiga suportar o&nbsp;IPv6 e o&nbsp;multicast. Multicast ?? como uma linguagem que os dispositivos usam para se comunicar uns com os outros. O switch deve ser capaz de suportar a velocidade da rede de no m??nimo&nbsp;100 Mbit/s ou mais. Uma velocidade de rede m??dia de 30 Mbit/s tem de ser reservada para dispositivos dot2. Esteja ciente de que, se voc?? tem um switch gerenci??vel, voc?? pode ter que ativar o&nbsp;IPv6 no switch.</p>

<div class="important"><strong>Importante:</strong><br>
Agrega????o de link din??mico (LACP) ?? proibido na rede dot2. No entanto, voc?? tem permiss??o para usar a agrega????o de link est??tico.</div>

<p>A toler??ncia de delay ?? de no m??ximo 2 ms.???</p>

<p>Pr??ximo, conecte cada dispositivo ao switch.</p>

<p>Os consoles e os&nbsp;onPCs&nbsp;s??o os c??rebros da opera????o. Voc?? pode conectar dot2 Wings, dot2&nbsp;Node4s&nbsp;e&nbsp;dot2 3D&nbsp;em um console ou onPC. Voc?? tamb??m pode conectar consoles e onPCs para uma redund??ncia.</p>

<p>Se voc?? precisa conectar um computador ao&nbsp;dot2 onPC ou dot2 3D, ent??o voc?? deve se certificar de que seu computador possa usar IPv6. A maioria dos computadores mais recentes normalmente usam IPv6.</p>

<p>Uma&nbsp;dot2&nbsp;core pode ser conectada a um m??ximo de 4 wings externas. A dot2 XL j?? possui uma wing embutida, ent??o ela pode ser conectada a um m??ximo de 3 wings externas.&nbsp;Wings est??o conectadas a um console espec??fico (um console dot2 real ou dot2 onPC).&nbsp;</p>

<p>Outros dispositivos de rede est??o ligados entre si em uma sess??o. Cada sess??o pode lidar com 5 consoles dot2 (consoles reais ou dot2 onPC), 5 dot2 3Ds, 10 dot2 Node4s com sa??da de DMX.</p>

<p>?? poss??vel executar 4 sess??es diferentes na mesma rede.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/021f5292-de29-41b0-9552-3540e90ba5de">Como conectar nodes, wings, 3D e onPC</a>&nbsp;</p>

<p><a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">O que ?? IPv6</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f843708-403a-459b-acd3-d3a504e1dcd7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/pt/1.2'; " title="Go to previous page 'Preview e Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Ipv6/pt/1.2';" title="Go to next page 'IPv6'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/23198/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

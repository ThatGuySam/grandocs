
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
		<h1>O que é Rede na dot2</h1>


		<p>Rede pode ser várias coisas. Em nosso mundo, a rede é quando você conecta pelo menos um dispositivo com outro usando os conectores RJ45 Ethernet.</p>

<p>Se você só tem um console e nada mais, então você não precisa se preocupar com qualquer coisa que esteja relacionada a rede, mas em algum momento você pode querer adicionar algo ao seu sistema.</p>

<p>A rede mais simples é conectar uma Wing ou um&nbsp;dot2 node com o console core ou XL.</p>

<p>Os dispositivos da MA suportam o comprimento do segmento padrão definido para instalações fixas - 90 m, mais 2x 5 m. A fim de evitar problemas causados por diferentes especificações de patching e cabos de instalação, o comprimento do cabo é restrito a não mais que 75 m.</p>

<div class="important"><strong>Importante:</strong><br>
Dispositivos dot2 estão para ser operados em uma rede separada - em pelo menos VLAN.&nbsp;<br>
Em geral, os dispositivos MA devem ser ligados por cabo e não por wireless LAN.</div>

<p>Cada dispositivo tem um conector Ethernet na parte de trás. Conecte um cabo Ethernet de Cat.5.E ou mais ao dispositivo.</p>

<p>Os dispositivos dot2 usam&nbsp;IPv6. Este é um número único que cada dispositivo dot2 tem e usam para se comunicar uns com os outros - é similar a um endereço que torna possível que os dispositivos saibam para onde enviar mensagens.</p>

<p>Uma vez que cada dispositivo tem um conector Ethernet apenas, você precisa adicionar um switch de rede se você quiser conectar mais de dois dispositivos. Ele precisa ser um bom switch que consiga suportar o&nbsp;IPv6 e o&nbsp;multicast. Multicast é como uma linguagem que os dispositivos usam para se comunicar uns com os outros. O switch deve ser capaz de suportar a velocidade da rede de no mínimo&nbsp;100 Mbit/s ou mais. Uma velocidade de rede média de 30 Mbit/s tem de ser reservada para dispositivos dot2. Esteja ciente de que, se você tem um switch gerenciável, você pode ter que ativar o&nbsp;IPv6 no switch.</p>

<div class="important"><strong>Importante:</strong><br>
Agregação de link dinâmico (LACP) é proibido na rede dot2. No entanto, você tem permissão para usar a agregação de link estático.</div>

<p>A tolerância de delay é de no máximo 2 ms.​</p>

<p>Próximo, conecte cada dispositivo ao switch.</p>

<p>Os consoles e os&nbsp;onPCs&nbsp;são os cérebros da operação. Você pode conectar dot2 Wings, dot2&nbsp;Node4s&nbsp;e&nbsp;dot2 3D&nbsp;em um console ou onPC. Você também pode conectar consoles e onPCs para uma redundância.</p>

<p>Se você precisa conectar um computador ao&nbsp;dot2 onPC ou dot2 3D, então você deve se certificar de que seu computador possa usar IPv6. A maioria dos computadores mais recentes normalmente usam IPv6.</p>

<p>Uma&nbsp;dot2&nbsp;core pode ser conectada a um máximo de 4 wings externas. A dot2 XL já possui uma wing embutida, então ela pode ser conectada a um máximo de 3 wings externas.&nbsp;Wings estão conectadas a um console específico (um console dot2 real ou dot2 onPC).&nbsp;</p>

<p>Outros dispositivos de rede estão ligados entre si em uma sessão. Cada sessão pode lidar com 5 consoles dot2 (consoles reais ou dot2 onPC), 5 dot2 3Ds, 10 dot2 Node4s com saída de DMX.</p>

<p>É possível executar 4 sessões diferentes na mesma rede.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/021f5292-de29-41b0-9552-3540e90ba5de">Como conectar nodes, wings, 3D e onPC</a>&nbsp;</p>

<p><a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">O que é IPv6</a></p>


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

	
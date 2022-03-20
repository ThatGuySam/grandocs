---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WA_Network/es/1.2'
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/es/1.2'; " title="Go to previous page 'Vista previa y Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Ipv6/es/1.2';" title="Go to next page 'IPv6'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/2f843708-403a-459b-acd3-d3a504e1dcd7/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18008/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Qué es una Red en dot2</h1>


		<p>Red puede ser muchas cosas. En nuestro mundo, red es cuando conectas al menos un dispositivo con otro usando los conectores Ethernet RJ45.</p>

<p>Si sólo tienes una consola y nada más, entonces no necesitas preocuparte sobre nada en relación a la red, pero en algún momento puedes querer añadir algo a tu sistema.</p>

<p>La red más sencilla es conectar un wing o un nodo dot2 con la consola core o la XL.</p>

<p>Cada dispositivo tiene un conector Ethernet en la parte de atrás y cuando utilizas un buen cable Ethernet Cat.5e (mínimo) entre ellos, entonces puedes conectarlo a la consola.</p>

<p>Para esta conexión los dos dispositivos usan IPv6. Este es un número único que cada dispositivo dot2 tiene y utilizan para hablar el uno con el otro. Es como una dirección que hace posible para los dispositivos saber dónde enviar mensajes.</p>

<p>Partiendo del hecho que cada dispositivo tiene un conector Ethernet, necesitas añadir un switch de ethernet si quieres conectar más de dos cosas. Debe ser un buen switch que sea compatible con IPv6 y multicast. Multicast es como un idioma que utilizan los dispositivos para hablar los unos con los otros. El switch debería poder soportar una velocidad de red de 100MB o más. Debes ser consciente que en muchas ocasiones necesitarás activar IPv6 en el switch.</p>

<p>Necesitas entonces conectar cada dispositivo al switch.</p>

<p>Las consolas y onPCs son los cerebros de la operación. Puedes conectar Wings dot2, Nodos4 dot2 y 3D dot2 a una consola u onPC. También puedes conectar consolas y onPCs juntos para la redundancia.</p>

<p>Si necesitas conectar un PC con onPC dot2 o 3D dot2 deberías asegurarte que tu ordenador puede utilizar&nbsp;IPv6. La mayoría de PC nuevos lo tienen.</p>

<p>Una dot2 Core puede conectar un máximo de 4 wings externos. Un dot2 XL ya tiene un wing incorporado que puedes conectar a un máximo de 3 wings externos.</p>

<p>Los Wings se conectan a una consola específica (una consola dot2 real o un dot2 onPC).</p>

<p>Otros dispositivos de la red se conectan entre ellos en la sesión.Cada sesión puede manejar 5 (cinco) consolas dot2 (reales o dot2 onPC),&nbsp;5 (cinco) dot2 3D's, 10 (diez)&nbsp;dot2 Node4 produciendo DMX.</p>

<p>Puedes tener 4 (cuatro) sesiones diferentes en la misma red.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/021f5292-de29-41b0-9552-3540e90ba5de">Cómo conectar nodos, wings, onPC y 3D</a>&nbsp;</p>

<p><a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">Qué es IPv6</a></p>


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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/es/1.2'; " title="Go to previous page 'Vista previa y Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Ipv6/es/1.2';" title="Go to next page 'IPv6'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18008/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

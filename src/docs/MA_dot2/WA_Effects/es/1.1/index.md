---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WA_Effects/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/es/1.1'; " title="Go to previous page 'Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/es/1.1';" title="Go to next page 'Vista previa y Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14273/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Qué son Efectos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Valor Alto / Bajo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Velocidad (Speed)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Fase (Phase)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Ancho (Width)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Suavidad (Softness)</a>
						</li>
				</ul>
			</div>

		<p>Los efectos en dot2 son atributos que cambian dinámicamente entre dos valores. Dot2 viene con un conjunto de efectos incorporados que puedes modificar.</p>

<p>Los efectos pueden ejecutarse en los diferentes tipos de preset. Actualmente no puedes crear efectos en los preset Control, Shapers y Video.&nbsp;</p>

<p>Los efectos se guardan en las cues. Cuando necesitas detener un efecto tienes que aplicar&nbsp;“Stomp" el efecto. Utilizamos Stomp para decirle a la consola que detenga el efecto para aquello que elijamos stomp. Pueden ser aparatos o tipos de preset.</p>

<p>Off se utiliza como habitualmente para hacer desaparecer valores de nuestro programador.</p>

<p>Los efectos funcionan con una trayectoria circular cíclica y cambian entre los valores Altos y Bajos.</p>

<p>Normalmente seleccionas algún aparato, luego qué tipo de preset quieres que los afectos trabajen, y luego pulsas la tecla&nbsp;<span class="hardkey">Effect</span>.&nbsp;Ahora puedes elegir alguno de los efectos predefinidos.&nbsp;</p>

<p>Puedes tener múltiples efectos funcionando y si necesitas que estén sincronizados, pulsa el botón&nbsp;<span class="softkey">Sync</span>.</p>

<p>Si quieres que tus efectos parezcan más aleatorios, pulsa el botón&nbsp;<span class="softkey">Selección Aleatoria</span>.</p>

<p>A continuación una pequeña descripción de los diferentes valores que puedes ajustar.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Valor Alto / Bajo</h2>

<p>Los efectos se mueven entre dos valores llamados valor Alto y Bajo.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Velocidad (Speed)</h2>

<p>Cómo de rápido es tu efecto se define mediante el parámetro Velocidad. Se mide en Beats Por Minuto (BPM). La velocidad también se ve afectada por el Master especial de velocidad.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Fase (Phase)</h2>

<p>La Fase es lo que podemos llamar también distribución. Aquí es donde podemos extender los aparatos por encima del ciclo del efecto.</p>

<p>Si todos tus aparatos tienen el mismo número en la fase, estarán en el mismo lugar en el ciclo.</p>

<p>En esta imagen hay 6 aparatos todos en el punto verde en la forma del seno:</p>

<p><img alt="" src="/Media/Image/WI_Effect_Phase_01_1-0.png"></p>

<p>Si los extendemos uniformemente, se mostrarían de esta manera:</p>

<p><img alt="" src="/Media/Image/WI_Effect_Phase_02_1-0.png"></p>

<p>Cada punto verde es un aparato. Aquí estamos utilizando una de las fases predefinidas llamada “0..360”.</p>

<p>Puedes crear buenas escenas y agrupaciones presionando la tecla&nbsp;<span class="hardkey">Align</span> y luego girando el encoder en una dirección. Cuando tienes valores en la Fase con una gran separación, puedes crear escenas muy interesantes.</p>

<p>La función&nbsp;Align &lt;&gt; puede utilizarse para crear efectos tipo "espejo".</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ancho (Width)</h2>

<p>En algunos efectos tiene mucho sentido ajustar la anchura. Es habitual realizar ajustes entre cuántos aparatos están en el valor Alto y cuántos en el valor Bajo.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Suavidad (Softness)</h2>

<p>En algunos efectos puedes ajustar cómo de suaves o duros deben cambiar los aparatos entre los valores Alto y Bajo. Cuanto más alta la suavidad, más fundirán los valores en los pasos del efecto.</p>

<p>Si quieres saber más sobre cómo crear y usar efectos, por favor lee&nbsp;<a href="/Topic/2457c63d-dd11-4171-b366-db5a6453f23d">Cómo trabajar con Efectos</a>.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ca034c9c-6b13-4948-8e83-c6e4f2ff4d21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Chasers/es/1.1'; " title="Go to previous page 'Chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_PreviewAndBlind/es/1.1';" title="Go to next page 'Vista previa y Blind'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14273/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WI_Tracking/es/1.1'
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Presets/es/1.1'; " title="Go to previous page 'Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/es/1.1';" title="Go to next page 'Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14756/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>¿Que es Tracking?</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Protección de Tracking</a>
						</li>
				</ul>
			</div>

		<p>MA dot2 es una consola tracking.​</p>

<p>No debes preocuparte demasiado sobre esto, pero está bien saber algunos detalles, vamos a ver cómo funciona.</p>

<p>En su forma más básica, se puede decir que con el tracking los aparatos siguen haciendo algo que les han ordenado hacer anteriormente. Si fijas un aparato al 50% en la cue número 1, permanece al 50% en todas tus otras cues, a no ser que le digas que haga algo diferente.</p>

<p>Echa un vistazo a esta tabla:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Aquí podemos ver que el valor de dimmer del aparato 1 sólo está guardado en la cue 1 (marcada en <strong>negrita</strong>, y en <em>cursiva</em> los valores que se&nbsp;arrastran&nbsp;con tracking). Pero si ejecutas la cue 2, el aparato&nbsp;número 1 todavía está al 50%, arrastra tracking.</p>

<p>Si guardas y mezclas al 60% para el aparato 1 en la cue 3, aparecería esto:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><strong>60</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><em>60</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>60</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><em>60</em></td>
		</tr>
	</tbody>
</table>

<p>Así que cambiamos el valor para el aparato en la cue 3 y ahora el tracking arrastra ese valor desde esa cue.</p>

<p>Una opción diferente cuando grabamos es “Cue Only”. Si usamos esa opción y guardamos el aparato 1 al 40% en la cue 5, verás que no se ha hecho ningún cambio en la cue 6. Esto significa que su apariencia es la misma que antes de guardar la cue 5.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><strong>60</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><em>60</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><strong>40</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><strong>60</strong></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>Si añades un aparato que no ha sido usado anteriormente, entonces MA dot2&nbsp;puede crear automáticamente un cue oculto número 0 (cue zero) y pondrá el valor por defecto (el valor que un aparato tiene si no se le dice nada) en esa cue. Cue&nbsp;Zero puedes activarlo en la&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Vista&nbsp;Ajustes</a>&nbsp;para el cue list.</p>

<p>No puedes acceder a esta cue pero te aseguras que las cues tengan la apariencia correcta si las copias.</p>

<p>Echa un vistazo a este ejemplo:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><em>0</em></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Aquí tenemos el aparato 1 que tiene valores guardados en la cue número 2. Este valor se arrastra (tracking) desde esta cue a la cue 6. Si copias la cue número 1 a la nueva cue 3.5 usando “Cue Only”, entonces verás que el aparato tiene 0% en la nueva cue y vuelve al 50% en la cue 4, con lo que la cue número 4 nunca cambió.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><em>0</em></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3.5</td>
			<td style="text-align:center"><strong>0</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><strong>50</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><em>50</em></td>
		</tr>
	</tbody>
</table>

<p>Si no utilizamos Cue Zero entonces se ve diferente. Antes de copiar:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Cue<br>
			number</th>
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

<p>Cuando copiamos la cue 1 a la cue 3.5&nbsp;estamos copiando una cue vacía, por lo que no estamos copiando nada. Este es el resultado.</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:200px">
	<thead>
		<tr>
			<th scope="col" style="background-color:rgb(131, 131, 131); text-align:center; vertical-align:bottom">Cue<br>
			number</th>
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

<p>Cuando la cue copiada está vacía, los valores de tracking proveniente de cues anteriores se verán reflejados.</p>

<p>Cue Zero está apagado por defecto pero puedes cambiarlo para cada ejecutor.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Protección de Tracking</h2>

<p>MA dot2 también utiliza algo llamado Protecciones de Tracking (Tracking Shields). Es un sistema que automáticamente protege las cues de cambios no&nbsp;deseados para todos los atributos excepto los dimmers.</p>

<p>Vamos a ver algunos ejemplos, echa un vistazo a esta tabla:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
			<th scope="col" style="text-align:center">Fixture 1<br>
			Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><strong>100</strong></td>
			<td style="text-align:center"><strong>Cantante</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><strong>0</strong></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><em>0</em></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><em>0</em></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>0</em></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><strong>100</strong></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
	</tbody>
</table>

<p>Hemos grabado el aparato 1 al 100% y colocado en la posición Cantante. En la cue 2 está apagado. Ahora, abajo en la cue 6 se ha vuelto a encender y &nbsp;sigue en la posición Cantante, pero es un valor arrastrado por el Tracking.</p>

<p>Ahora nos gustaría usar el mismo aparato en la cue 3 en la posición drummer. Así que lo cambiamos a esa posición y lo guardamos en la cue 3. Luego lo grabamos como Cue Only &nbsp;al 0% en las cues 4 y 5. ¿Qué ocurre en la cue 6?</p>

<p>Si seguimos las reglas normales del Tracking, se cambiará a la posición drummer en la cue 6. Pero cuando creamos la cue lo hicimos en posición Cantante! Así que generalmente necesitaremos volver a crear por completo la cue 6.</p>

<p>Con la Protección de Tracking (Tracking Shield) no necesitamos hacer esto. MA dot2 es consciente que querías el aparato en posición Cantante en la cue 6 así que vuelve a aplicar la posición en la cue 6.</p>

<p>Este es el resultado:</p>

<table align="center" border="1" cellpadding="4" cellspacing="1" style="width:300px">
	<thead>
		<tr>
			<th scope="col" style="text-align:center">Número<br>
			de Cue</th>
			<th scope="col" style="text-align:center">Aparato 1<br>
			Dim</th>
			<th scope="col" style="text-align:center">Fixture 1<br>
			Position</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:center">1</td>
			<td style="text-align:center"><strong>100</strong></td>
			<td style="text-align:center"><strong>Cantante</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">2</td>
			<td style="text-align:center"><strong>0</strong></td>
			<td style="text-align:center"><em>Cantante</em></td>
		</tr>
		<tr>
			<td style="text-align:center">3</td>
			<td style="text-align:center"><strong>100</strong></td>
			<td style="text-align:center"><strong>Drummer</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">4</td>
			<td style="text-align:center"><strong>0</strong></td>
			<td style="text-align:center"><em>Drummer</em></td>
		</tr>
		<tr>
			<td style="text-align:center">5</td>
			<td style="text-align:center"><em>0</em></td>
			<td style="text-align:center"><em>Drummer</em></td>
		</tr>
		<tr>
			<td style="text-align:center">6</td>
			<td style="text-align:center"><strong>100</strong></td>
			<td style="text-align:center"><strong>Cantante</strong></td>
		</tr>
	</tbody>
</table>

<p>El sistema busca los valores del dimmer sobre 0 que usan valores arrastrados por Tracking. Si es necesario, guarda los valores antes de crear los valores en las cues previas, previniendo que haya cambios en la cue debidos al tracking.</p>

<p>El valor de dimmer en la cue 5 es un valor arrastrado por tracking debido a una función llamada&nbsp;AutoUnblock la cual automáticamente elimina los valores grabados innecesarios.</p>


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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Presets/es/1.1'; " title="Go to previous page 'Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Cues/es/1.1';" title="Go to next page 'Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14756/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

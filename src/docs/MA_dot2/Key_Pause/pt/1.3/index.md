
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="805f148e-b967-42da-8917-d48f04c21324">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_PagePrevious/pt/1.3'; " title="Go to previous page 'Page-'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_PauseLarge/pt/1.3';" title="Go to next page 'Pause (Large)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/805f148e-b967-42da-8917-d48f04c21324">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7971/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Tecla Pause</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funcionalidade Avançada</a>
						</li>
				</ul>
			</div>

		<p>A tecla&nbsp;<span class="hardkey">Pause</span>&nbsp;é usada para pausar qualquer fade em execução em um executor. Primeiro pressione <span class="hardkey">Pause</span> e depois qualquer tecla associada ao executor onde você deseja pausar o fade. Isto irá parará o fade onde ele está.</p>

<p>Você pode iniciar o fade novamente pressionando <span class="hardkey">Pause</span> e depois o executor ou, se você precisar voltar, você pode pressionar <span class="hardkey">Go-</span> e, em seguida, o executor.</p>

<div class="tip">Não confunda esta tecla com a grande tecla Pause sob os principais faders executores - Leia sobre isso&nbsp;<a href="/Topic/c97a3f2e-e6b2-4a06-9b77-47a9af413709">aqui</a>.</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funcionalidade Avançada</h2>

<p>Pressionando a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;junto com a tecla&nbsp;<span class="hardkey">Pause</span>&nbsp;lhe dará acesso ao&nbsp;<a href="/Topic/4f64e293-f606-4365-8813-71c3f60ffc9b">comando Park</a>. Isso pode ser usado para parkear (ou bloquear) qualquer parâmetro ou fixture.</p>

<p>Por exemplo, você deseja parkear o fixture&nbsp;número 1:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span>&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Isso bloqueia todos os parâmetros do fixture 1. Se você abrir a vista de&nbsp;DMX, você pode ver os fixtures&nbsp;parkeados e seus canais de&nbsp;DMX indicados por um fundo azul. Além disso, se você tiver quaisquer fixtures parkeados, você verá um ícone de parkeamento azul ao lado da linha de comando na tela 1.</p>

<p>Fixtures ou atributos podem ser desparkeados usando o&nbsp;<a href="/Topic/2e6967bb-9452-47a7-a8e5-be04c7b51ecd">comando Unpark</a>&nbsp;ou pela combinação das teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e&nbsp;<span class="hardkey">Go+</span>.</p>

<p>Por exemplo, você deseja desparkear o fixture número 1:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Go+</span>&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span></p>

<p>Se você deseja&nbsp;desparkear&nbsp;tudo, então você também pode usar o&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">menu Tools</a>. Aqui você achará o botão &nbsp;<span class="softkey">Desparkear&nbsp;todos os canais de&nbsp;DMX</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<p><a href="/Topic/0e62312d-84dd-40bf-b740-82e444979b45">Comando Pause</a></p>

<p><a href="/Topic/4f64e293-f606-4365-8813-71c3f60ffc9b">Comando Park</a></p>

<p><a href="/Topic/2e6967bb-9452-47a7-a8e5-be04c7b51ecd">Comando Unpark</a></p>

<p><a href="/Topic/3156c266-1baa-4627-91b7-1cb1273bdab6">Tecla Go+</a></p>

<p><a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Menu Tools</a></p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="805f148e-b967-42da-8917-d48f04c21324">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_PagePrevious/pt/1.3'; " title="Go to previous page 'Page-'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_PauseLarge/pt/1.3';" title="Go to next page 'Pause (Large)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7971/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
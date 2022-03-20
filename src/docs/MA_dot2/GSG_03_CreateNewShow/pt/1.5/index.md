---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_03_CreateNewShow/pt/1.5'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6ef557dd-b66e-43b6-b2d8-1d109056f96d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/pt/1.5'; " title="Go to previous page '2 - Physical setup and layout'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/pt/1.5';" title="Go to next page '4 - Adding and patching dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/6ef557dd-b66e-43b6-b2d8-1d109056f96d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17580/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guia de Introdução - Criar um novo show vazio e salvá-lo</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Criar um novo show</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Salvar show</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Criar um novo show</h2>

<p>Devemos começar com um novo show limpo. Só para ter certeza que comecemos no mesmo ponto, por favor, ligue o console (se ele já não estiver ligado).</p>

<p>Quando é feita a inicialização, você deve pressionar a tecla de <span class="hardkey">Backup</span>. Isto lhe dará o menu de Backup:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_BackupWindow01_1-2.png"> <em>Figura 1: Menu de Backup.</em></p>

<p>Por favor, pressione o botão <span class="softkey">Novo show</span>. Isto irá criar um show novo e vazio.</p>

<p>A seguir, aparecerá um pop-up&nbsp;que pede um nome para seu novo show. Por favor, digite: <strong>Introducao 01</strong></p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_CreateNewShow_02_1-1-3.png"> <em>Figura 2: Insira um nome para o novo show.</em></p>

<p>Se há um show carregado (provavelmente sim), então você será perguntado se você deseja salvar o show atual antes de criar o novo show. Salvar pode ser uma boa ideia.</p>

<p>Talvez lhe seja mostrado uma janela dizendo que já existe um show com este nome. Você pode escolher substituir o arquivo/show existente ou tocar em Cancelar para dar-lhe um nome novo e diferente.</p>

<p>Agora, o console irá criar o novo show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Salvar show</h2>

<p>Vamos ignorar tudo nas telas por um segundo e nos concentrar apenas em salvar o novo show (mas ainda vazio).</p>

<p>Isso também é tratado a partir do Menu de backup. Por favor, pressione a tecla <span class="hardkey">Backup</span> mais uma vez.</p>

<p>Além da opção <span class="softkey">Novo Show</span>&nbsp;existem três outras opções. Uma delas é para <span class="softkey">Salvar Show</span>.</p>

<p><span class="softkey">Salvar Show Como...</span> é usada caso você queira salvar o show com um novo nome.</p>

<p>Mas, como você também pode ler no texto do botão <span class="softkey">Salvar Show</span>, você poderia apenas ter pressionado o botão de <span class="hardkey">Backup</span> com um clique duplo. Nós não podemos fazer isso quando o Menu de Backup está aberto. Então agora você tem duas opções: Pressione o botão <span class="softkey">Salvar Show</span> ou pressione a tecla <span class="hardkey">Backup</span> três vezes (uma para fechar o menu e, em seguida, duas vezes para o comando 'salvar show' ser feito).</p>

<p>Lembre-se de sempre salvar o seu show. Não há nenhum backup de energia embutido no console e se você desligá-lo ou perder a energia, o console é desligado (sem salvar).</p>

<p>Você também deve salvar o seu show em um dispositivo externo, como um pen drive ou USB. Por favor insira um em um dos conectores USB. E, em seguida, salve o show novamente. Agora ele está guardado tanto no USB quanto no console.</p>

<p>Ok? Vamos para o próximo capítulo.</p>


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
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6ef557dd-b66e-43b6-b2d8-1d109056f96d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/pt/1.5'; " title="Go to previous page '2 - Physical setup and layout'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/pt/1.5';" title="Go to next page '4 - Adding and patching dimmers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17580/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

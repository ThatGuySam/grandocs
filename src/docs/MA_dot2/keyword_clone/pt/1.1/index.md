---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_clone/pt/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="05dfd246-0945-44e5-90a5-402818b1aaed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_call/pt/1.1'; " title="Go to previous page 'Call'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/pt/1.1';" title="Go to next page 'CmdDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/05dfd246-0945-44e5-90a5-402818b1aaed">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7261/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Clone Command</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descrição</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxe</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Exemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exemplo 2</a>
						</li>
				</ul>
			</div>

		<p>Esta página descreve a sintaxe e como usar o comando <strong>Clone.</strong>&nbsp;</p>

<p>Para ir ao comando Clone, pressione segura a tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;e&nbsp;<span class="hardkey">Copy</span>&nbsp;no&nbsp;console.<br>
Clone está na&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>&nbsp;agora.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descrição</h2>

<p>Com o comando Clone, você copia todos os valores de um fixture para outro ao longo de todo o arquivo de show.<br>
Isto inclui cues, presets, e grupos. O comando clone funciona como um processamento em lote para o&nbsp;<a href="/Topic/47efc201-7d5c-43c5-b59c-aa2a54e090df">comando At</a>&nbsp;juntamente com o&nbsp;<a href="/Topic/b35e16e8-36c4-4dad-b6c0-0af9111adc75">comando Update</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxe</h2>

<p>Clonar o&nbsp;fixture 1 em&nbsp;fixture 2.</p>

<div class="cl_input">Clone Fixture 1 At 2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exemplo 1</h2>

<p>Vamos supor que você tenha feito uma programação para 2 fixtures&nbsp;(ID 31 e 32) e, em seguida, você percebe que você vai adicionar mais três fixtures neste local fazendo o mesmo que o outro.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Clone01_1-0.PNG"> <img alt="" src="/Media/Image/Dot2_Commands_Clone02_1-0.PNG"></p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Copy</span> (= Clone) <span class="hardkey">Fixture</span> <span class="hardkey">31</span> <span class="hardkey">+</span> <span class="hardkey">32</span> <span class="hardkey">At</span> <span class="hardkey">33</span> <span class="hardkey">Thru</span> <span class="hardkey">35</span> <span class="hardkey">Please</span>.</p>

<p>O console te pedirá para&nbsp;<a href="/Topic/d7d95a17-f797-4bab-b65c-3feb192bf1f3">escolher o método de clone</a>.</p>

<p>Fixtures 31 e 32 estão clonados no fixture&nbsp;de 33 a 35. Todos os fixtures&nbsp;fazendo exatamente o mesmo.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exemplo 2</h2>

<p>Vamos supor que você irá clonar os fixtures (ID 31 e 32) apenas no executor 1, porque você precisa de mais um fixture para os atores acenderem.</p>

<p>O&nbsp;<a href="/Topic/f0c1544b-bbc8-4273-87eb-84a35b970063">comando If</a>&nbsp;limita o comando do Clone, que a clonagem só funciona para o executor 1.</p>

<p>Pressione&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Copy</span> (= Clone) <span class="hardkey">Fixture</span> <span class="hardkey">31</span> <span class="hardkey">+</span> <span class="hardkey">32</span> <span class="hardkey">At</span> <span class="hardkey">33</span> <span class="hardkey">Thru</span> <span class="hardkey">35</span> <span class="hardkey">If</span> e o respectivo botão executor​ <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp; <span class="hardkey">Please</span>.</p>

<p>O console te pedirá para&nbsp;<a href="/Topic/d7d95a17-f797-4bab-b65c-3feb192bf1f3">escolher o método de clone</a>.</p>

<p>Fixtures 31 e 32 estão clonados no&nbsp;fixture&nbsp;de 33 a 35, apenas no executor 1.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links Relacionados</h2>

<ul>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
	<li><a href="/Topic/4d177693-cdbd-4c33-a97d-3ca8a4740ecb">Tecla Copy</a></li>
	<li><a href="/Topic/73947b85-e964-42f3-9c73-fb8a8569c8de">Tecla Fixture</a></li>
	<li><a href="/Topic/d7d95a17-f797-4bab-b65c-3feb192bf1f3">Janela para Escolher Métododo de Clone</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="05dfd246-0945-44e5-90a5-402818b1aaed">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_call/pt/1.1'; " title="Go to previous page 'Call'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/pt/1.1';" title="Go to next page 'CmdDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7261/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

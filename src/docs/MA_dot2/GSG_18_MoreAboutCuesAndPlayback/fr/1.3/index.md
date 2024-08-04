---
originalUrl: >-
  http://help2.malighting.com/Page/MA_dot2/GSG_18_MoreAboutCuesAndPlayback/fr/1.3
---

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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_MakingMoreGroupsAndPresets/fr/1.3'; " title="Go to previous page '16 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/fr/1.3';" title="Go to next page '18 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/656501ea-6e36-417d-9774-b6ccc8e10e1a/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/11477/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guide de démarage - En savoir plus sur les cues et les playback</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Mettons à jours nos cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Temps dans les Cues</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Groupe master</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Rate Master</a>
						</li>
				</ul>
			</div>

		<p>Nous allons commencer par ajouter de nouveaux projecteurs à notre show, et nous regarderons plus précisément&nbsp;les temps dans les cues et examinerons le tracking (suivi de valeurs).&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Mettons à jours nos cues</h2>

<p>Allez à la cue&nbsp;numéro 5 de votre liste de cues principale.</p>

<p>Sélectionnez&nbsp;tous les X4 et utilisez les preset&nbsp;<span class="softkey">All Stage Wash</span> et&nbsp;<span class="softkey">Green</span>&nbsp;(vous devriez toujours avoir un vert ), <span class="softkey">Wide Zoom</span>&nbsp;et pour finir, les mettre à&nbsp;60% de dimmer.</p>

<p>Pressez la touche&nbsp;<span class="hardkey">Update</span>&nbsp;suivi par la touche&nbsp;<span class="hardkey">Please</span>. Ceci additionnera les nouvelles valeurs à la cue active - la numéro 5.</p>

<p>Nous allons aussi mettre le groupe&nbsp;All Vivid&nbsp;à&nbsp;20% et utiliser le même preset de couleur green. Ceci peut être mis à jour (update) dans&nbsp;la cue&nbsp;5.&nbsp;</p>

<p>Nous allons ajouter quelques nouveaux projecteurs à couteaux (profiles).&nbsp;Fixtures 44 thru 49 à&nbsp;40% avec le preset de position:&nbsp;<span class="softkey">All Stage Profile</span>&nbsp;, ajoutons un gobo&nbsp;et une couleur orange ou chaude. Mettons les&nbsp;presets de focus&nbsp;<span class="softkey">Wide Zoom</span>&nbsp;et&nbsp;<span class="softkey">Soft Gobo</span> . Et finalement ajoutons le preset de shapers&nbsp;:&nbsp;<span class="softkey">Forrest</span> . Tout ceci peut être mis à jour (update) dans la cue&nbsp;5.</p>

<p>Maintenant jouons la&nbsp;cue 6. Remarquez que ce n'est plus un noir. Les machines que nous venons de rajouter restent allumées.&nbsp;je sais qu'elles jouent en cue&nbsp;7, mais nous sommes actuellement en cue&nbsp;6.&nbsp;C'est tout simplement parce que la console utilise le tracking. Si nous demandons à un projecteur de faire quelque chose, il continuera de la faire tant que nous ne lui demanderons&nbsp;pas de faire autre chose.<strong>&nbsp;</strong>Nous allons régler le problème de la cue 6.<strong>&nbsp;</strong>Sélectionnez toutes les machines allumées et réglez leur intensité à 0%. Maintenant vous pouvez l'enregistrer dans la cue 6, mais nous voulons que les valeurs d'intensité reviennent en cue 7.&nbsp;Cette fois-ci nous avons besoin d'enregistrer les informations dans la cue 6 sans qu'elles ne restent (sans tracking) dans la cue 7.&nbsp;Pressez <span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>. Ceci ouvrira la&nbsp;fenêtre Store avec plusieurs possibilités.&nbsp;</p>

<p>Dans la partie gauche, vous trouverez la zone nommée "Store Mode" (mode d'enregistrement). Ici nous avons l'option de choisir&nbsp;"Cue Seulement" (mémoire seulement). Cette option signifie que la cue 7 restera tel qu'elle est actuellement.&nbsp;Si vous choisissez l'option&nbsp;"Normal", alors vous aurez les valeurs de la cue&nbsp;6 dans la cue 7 (tracking).</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_01_1-0.png"></p>

<p>Sélectionnez&nbsp;<span class="softkey">Cue Seulement</span> puis&nbsp;<span class="softkey">Fusionner</span>.</p>

<p>Ceci a dû régler le problème. Essayons&nbsp;la.&nbsp;<span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>&nbsp;vous renverra à la cue 5 avec le temps de transfert.&nbsp;</p>

<p>&nbsp;</p>

<p>Ok, nous voulons changer la cue&nbsp;4.&nbsp;Allez à la cue&nbsp;4. Dans cette cue, nous voulons la machine 41 à la position de preset&nbsp;<span class="softkey">Chaise</span>&nbsp;et la machine 43 à la position de preset&nbsp;<span class="softkey">Speaker</span>&nbsp;le tout à une&nbsp;intensité de 80% avec une bleu léger.&nbsp;</p>

<p>Enregistrons cela maintenant, avec l'option de "Cue Seulement" dans la cue&nbsp;4 et revenons à la cue&nbsp;3.&nbsp;Regardez votre fenêtre de projecteurs. Nous constatons que tous les projecteurs que nous avons ajoutés précédemment ont déjà une couleur et une position&nbsp;dans la cue 3.&nbsp;</p>

<p>Ceci est dû à une petite supercherie de notre console. La console regarde dans quel état lumineux ces projecteurs s'allumeront dans les cue suivantes, ainsi elle les&nbsp;prépositionne. Cette fonction se nomme&nbsp;MIB (Move In Black soit mouvement au noir).</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><strong>Temps dans les Cues</strong></h2>

<p>Maintenant envoyons la cue 4 et constatons que les projecteurs 41 et 43 sont allumées.&nbsp;Gardez un oeil sur ces projecteurs et appuyez sur&nbsp;<span class="hardkey">&nbsp;Go + </span>. Constatons que les machines bougent et changent de couleur tout en s'éteignant doucement.C'est parce que nous n'avons enregistré les informations que dans cette cue (cue seulement) .Ce n'est pas le résultat que nous désirions. Nous voulions que la couleur et le&nbsp;mouvement&nbsp;attendent (retard) l'extinction de la machine pour prendre leur valeur.&nbsp;</p>

<p>Regardez la liste de cues. Depuis que nous avons ajouté une nouvelle quantité de projecteurs, nous avons accès à une plus grande quantité de colonnes&nbsp;de temps.&nbsp;Localisez la colonne de retard&nbsp;pour la position , pressez et maintenez la cellule qui agit sur la cue 5. Apparait le tableau (calculatrice) dans lequel nous pouvons modifier le temps de retard&nbsp;pour toutes les positions en transition de la cue 4 à 5. Rentrons 5 secondes.&nbsp;Faites de même dans la colonne de retard pour la couleur.&nbsp;Nous pouvons même peaufiner un peu plus. Pendant que nous attendons que l'intensité soit à 0%, nous ne sommes plus dans l'obligation d'avoir un fade de 5 secondes sur les changement&nbsp;de position et de couleur.&nbsp;La couleur est interne à la machine, nous pouvons lui mettre un temps de fade de 0 seconde. Tandis&nbsp;que le mouvement est plus visible, nous allons lui donner un petit temps pour faire son mouvement. Essayons 1 seconde. Ceci devrait être notre résulta final:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_02_1-0.png"></p>

<p>Ceci fonctionne car aucune autre machine n'a de changement de position et de couleur dans cette cue.&nbsp;Sinon nous aurions été obligé de créer une nouvelle mémoire entre la 4 et la 5.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Groupe master</h3>

<p>Maintenant, imaginons que nous jouons ce show et que cela plaise au public,&nbsp;Ils pourraient vouloir de multiples rappels. Dans notre petit mais sympathique théâtre, le régisseur plateau veut utiliser l'ouverture du rideau pour ponctuer les saluts, nous ne pouvons à chaque fois repasser par notre mémoire de noir. Il nous serait plus simple de pouvoir supprimer à la demande les projecteurs de face. Il nous sera plus simple d'utilisé un Groupe Master.&nbsp;&nbsp;</p>

<p>Commençons par vider le programmeur et activez le group&nbsp;<span class="softkey">All FOH</span> - cool, nous l'avions déjà fait&nbsp;:-) Avec cette sélection dans le programmeur,&nbsp;pressez <span class="hardkey">Store</span> <span class="hardkey">Group</span>&nbsp;puis l'un des boutons associés à l'exécuteur&nbsp;numéro 6.&nbsp;Ceci créé un Groupe&nbsp;Master.&nbsp;Par ce moyen nous pourrons limiter l'intensité des projecteurs de face. Quand le fader est à 100%, nous avons toute l'amplitude d'intensité des projecteurs. Si celui-ci est à 50%, leur intensité est limitée.&nbsp;&nbsp;L'intensité de sortie lui est proportionnel. Dans ce cas, si l'intensité a été enregistré à 50% dans la cue et que vous réglez le potentiomètre de Group&nbsp;Master, l'intensité de sortie sera 50% de 50% soit 25%. Attention, il est très important de remettre tous les Group&nbsp;Master&nbsp;à 100% avant le début de votre show.&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Rate Master</h2>

<p>Maintenant, il peut être agréable de pouvoir modifier &nbsp;dynamiquement les temps des&nbsp;cue.&nbsp;Vous voudrez peut être faire correspondre le temps de transfert enregistrés aux déplacements de votre artiste. Ou vous avez enregistré de longs&nbsp;transferts mais vous n'avez pas la patience d'attendre 30 minutes pour voir votre magnifique couché de soleil. Vous pouvez utiliser un Rate Master. Pressez&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Speed</span> et une des touches associées à l'exécuteur numéro 5. Ceci créera un&nbsp;Rate Master.</p>

<p>La position normal de ce potentiomètre est au milieu. A cette position, le ratio des temps est de 1 pour 1. Alors si votre temps est de 5 secondes, le transfert s'exécutera en 5 secondes. Le potentiomètre&nbsp;du Rate master&nbsp;divise le temps des cues. Ainsi si le temps de transfert de la cue est de 5 secondes et que vous positionnez le Rate Master&nbsp;sur 2, alors le temps de 5 secondes sera divisé par 2 et deviendra maintenant un temps de transfert de 2,5 secondes. D'autre part, si vous positionnez le Rate Master&nbsp;sur 0,5, les temps seront divisées par 0,5 et le résultat sera ainsi de 10 secondes.</p>

<p>Essayer de jouer vos cues avec des niveaux différents sur votre Rate master. Lorsque que vous avez terminé, replacez votre Rate Master en position centrale et appuyez &nbsp;sur la touche&nbsp;<span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span>&nbsp;pour remettre votre Rate Master à 1:1.</p>

<p>&nbsp;</p>

<p>Dans le prochain chapitre, nous allons avoir un aperçu de la programmation en aveugle (Blind).</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_MakingMoreGroupsAndPresets/fr/1.3'; " title="Go to previous page '16 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/fr/1.3';" title="Go to next page '18 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/11477/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	

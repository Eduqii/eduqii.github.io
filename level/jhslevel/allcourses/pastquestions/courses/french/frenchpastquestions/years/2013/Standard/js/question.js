

//Array of Objects
const quiz = [
 {
question: 'Le panier est …………………………..la table',

options: ['autour',
 'en',
 'près',
 'sur'],
answer: 3
},
{
question: 'Monsieur Kojo ………………………ouvert les boîtes',

options: ['a',
 'as',
 'es',
 'est'],
answer: 0
},
{ 

question: '……………………..légumes sont dans une assiette',

options: ['L’',
 'La',
 'Le',
 'Les'],
answer: 3
},
{
question: '– ………………………………va ton frère? \n – Il va bien',

options: ['Où',
 'Quand',
 'Comment',
 'Pourquoi'],
answer: 2
},
{ 

question: 'Il y a trop ………………………..mouches ici',

options: ['de',
 'de la',
 'des',
 'du'],
answer: 0
},
{
question: '……………………matière enseigne Monsieur Banford ?',

options: ['Quel',
 'Quelle',
 'Quelles',
 'Quels'],
answer: 1
},
{ 

question: '– …………………………..s’appelle cette rue ? \n Elle s’appelle ‘Black Stars street’',

options: ['Combien',
 'Comment',
 'Que',
 'Qui'],
answer: 1
},
{ 

question: 'Victor et Marie ont de …………………yeux',

options: ['beau',
 'beaux',
 'belle',
 'belles'],
answer: 1
},
{ 

question: 'Tu arrives trop tard ; le train ……………….de partir',

options: ['venez',
 'viennent',
 'viens',
 'vient'],
answer: 3
},
{
question: '10. Le jour de mon anniversaire, j’ai ………………..un repas spécial.',
options: ['préparé',
 'prépare',
 'préparée',
 'préparez'],
answer: 0
},
{
	question: 'Le cultivateur coupe les branches avec son…………………….',
options: ['Gâteau',                           
 'marteau',
 'Coupe-coupe',
 'Couteau'],
answer: 2
},
{
question: 'Rosie est très …………………… ; elle n’aime pas travailler',
options: ['curieuse',
 'lente',
 'paresseuese',
 'Timide'],
answer: 2
},
{
question: 'L’après –midi, Maman Téné se couche sur une ……………dans la cour.',
options: ['Boite',
 'natte',
 'pierre',
 'valise'],
answer: 1
},
{
question: 'Je vais chez ma ………………..pour me faire une jupe',
options: ['Boutiquière',
 'couturière',
 'cuisinière',
 'fermière'],
answer: 1
},
{
question: '…………………tu es fatigué, viens t’asseoir',
options: ['comme',
 'donc',
 'puis',
 'tel'],
answer: 0
},
{
question: 'Papa regarde la ………………….et il dit qu’il est déjà 7 heures.',
options: ['chaise',
 'chambre',
 'montre',
 'Table'],
answer: 2
},
{
question: 'Il fait chaud ici ; ouvrez les ………………….',
options: ['toilettes',
 'fenêtres',
 'sacs',
 'Serviettes'],
answer: 1
},
{
question: 'C’est le week-end ; nous allons à la plage pour ………………..',
options: ['cultiver',
 'nager',
 'travailler',
 'Voyager'],
answer: 1
},
{
question: 'Katou …………………. lentement parce qu’il a mal au genou',
options: ['chante',
 'mange',
 'Marche',
 'parle'],
answer: 2
},
{
question: 'Chez nous au village, toutes les feuilles sont ………… pendant la saison des pluies –',
options: ['Brunes',
 'Jeunes',
 'oranges',
 'Vertes'],
answer: 3
},
{
	question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Le père d’Akua habite à ……………………..',

options: ['la capitale',
 'Prampram',
 'Oguaa',
 'la gare'],
answer: 2
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Le père d’Akua habite à ……………………..',
options: ['la capitale',
 'Prampram',
 'Oguaa',
 'la gare'],
answer: 2
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' – Qu’est-ce qu’Akua fait avant de rendre visite à son père ? \n – Elle envoie',

options: ['un message télégraphique',
 'un message téléphonique',
 'un messager',
 'une lettre'],
answer: 1
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Quand est-ce qu’Akua se lève le jour de son voyage ?',

options: ['De bonne heure',
 'A l’après midi',
 'Tard dans la nuit',
 'Vers le soir'],
answer: 0
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Akua voyage ……………………',

options: ['en train',
 'en voiture',
 'par avion',
 'par bateau'],
answer: 1
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' A la gare, on voit……………..Voitures',

options: ['quelques',
 'deux',
 'trois',
 'plusieurs'],
answer: 3
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Qui conduit la voiture ?',

options: ['Akua',
 'Papa',
 'Le chauffeur',
 'Les voyageurs'],
answer: 2
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Le voyage commence …………………',

options: ['après trois heures',
 'après quatre heures',
 'immédiatement',
 'plus tard'],
answer: 2
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' ‘Il est plein de joie.’ Cela veut dire que Papa est ………….',

options: ['confus',
 'content',
 'triste',
 'surpris'],
answer: 1
},
{
 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Papa remercie Akua parce qu’il ……………….',

options: ['achète des choses',
 'rend visite aux amis',
 'mange avec Akua',
 'reçoit un cadeau'],
answer: 3
},
{ 

question: '<b>' + 'Une visite à Papa' + '</b>' + '<br />' + '<br />' + ' Le dernier lieu de leur visite est …………………',

options: ['la gare',
 'la maison',
 'chez les amis',
 'les magasins'],
answer: 3
},
{
	question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + ' A deux heures de l’après –midi, tous les élèves – 31 – les salles de classe.',
options: ['quittent',
 'quittes',
 'quittez',
 'quittons'],
answer: 0
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '  Ils disent ‘au revoir’ – 32 – professeurs et à leurs amis.',
options: ['à la ',
 'aux',
 'de',
 'des'],
answer: 1
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '  Ils mettent les livres et les cahiers – 33 – leurs sacs.',
options: ['à',
 'dans',
 'en',
 'sur'],
answer: 1
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '   Les fameux sacs sont toujours – 34 – et lourd.',
options: ['plein',
 'pleine',
 'pleines',
 'pleins'],
answer: 3
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '    Pourquoi ces gros sacs ? C’est parce que les élèves veulent plaire à – 35 – parents. Les parents pensent ',
options: ['leur',
 'leurs',
 'ses',
 'son'],
answer: 1
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '    que ce sont des élèves sérieux – 36 – ont de gros sacs – __ – ce n’est pas vrai.',
options: ['dont',
 'que',
 'qui',
 'où'],
answer: 2
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + '    que ce sont des élèves sérieux – __ – ont de gros sacs – 37 – ce n’est pas vrai.',
options: ['alors',
 'ainsi',
 'mais',
 'puis'],
answer: 2
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + ' Frema est la plus sérieuse de la classe. Quand elle – 38 – ses camarades, les gros sacs au dos, ',
options: ['voient',
 'vois',
 'voit',
 'voyez'],
answer: 2
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + ' très fatigués – 39 – route, elle décide de mettre quelques livres dans un placard à l’école.  ',
options: ['à', 
 'en',
 'de',
 'la'],
answer: 1
},
{
question: '<b>' + 'Après les cours' + '</b>'  + '<br />' + '<br />' + ' Elle ferme le placard à clé avant de – 40 – chez elle. Son sac n’est jamais lourd.',
options: ['rentrer',
 'rentrez',
 'rentres',
 'rentre'],
answer: 0
}
]
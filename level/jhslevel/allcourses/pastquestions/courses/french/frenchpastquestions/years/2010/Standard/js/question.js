

//Array of Objects
const quiz = [
  {
question: 'Kofi me donne beaucoup ……………oranges tous les jours.',

options: ['d’',
 'du',
 'des',
 'de l’'],
answer: 0
},
{
question: 'Jojo n’aime pas ……………bonbon.',

options: ['du',
 'de',
 'des',
 'de la'],
answer: 1
},
{
question: 'Papa reviendra de Tamale ……………….15 juin.',

options: ['à',
 'en',
 'sur',
 'le'],
answer: 3
},
{
question: 'Apaloo divise la canne à sucre ……………deux parties.',

options: ['dans',
 'par',
 'en',
 'à'],
answer: 2
},
{
question: 'Voici ma culotte, où est ……………….. ?',

options: ['la tienne',
 'le tien',
 'les tiens',
 'les tiennes'],
answer: 0
},
{
question: 'Je ne trouve pas mon chapeau ; où est-………….. ?',

options: ['elle',
 'le',
 'il',
 'la'],
answer: 2
},
{
question: 'Beaucoup d’étudiants …………..que l’examen est facile',

options: ['pense',
 'penses',
 'pensez',
 'pensent'],
answer: 3
},
{
question: 'Abiba n’a ……………….bonbon dans son sac',

options: ['rien',
 'plus',
 'pas',
 'aucun'],
answer: 3
},
{
question: 'Naaki a un frère mais moi j’en ……………trois.',

options: ['ont',
 'as',
 'ai',
 'a'],
answer: 2
},
{
question: 'Il y a des animaux sauvages dans la foret ……………. se trouve près du village.',

options: ['qui',
 'que',
 'dont',
 'laquelle'],
answer: 0
},
{
	question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Paul Quansah est malade. Maman l’emmène _____11_____.',
options: ['à l’école',
 'à l’hôpital',
 'à l’hôtel',
 'à la plage'],
answer: 1
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Il y a beaucoup de monde dans la salle _____12______.',
options: ['D’attente',
 'De classe',
 'D’ecole',
 'De professeur'],
answer: 0
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Maman lui fait son carnet de santé au service de consultation. Vers dix _______13_____ , c’est le tour de Paul.',
options: ['temps',
 'saisons',
 'Heures',
 'Jours'],
answer: 2
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Paul et sa mère _____14____ dans le cabinet du médecin.',
options: ['entres',
 'Entrez',
 'entrons',
 'Entrent'],
answer: 3
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' – ‘Ce n’____15____ pas grave,’ dit le _________,',
options: ['est',
 'es',
 'êtes',
 'êtres'],
answer: 0
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' – ‘Ce n’________ pas grave,’ dit le _____16____, ',
options: ['professeur',
 'docteur',
 'maçon',
 'pêcheur'],
answer: 1
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Paul a une légère ______17_____ et il lui faut du __________.',
options: ['fièvre',
 'joujou',
 'faim',
 'Soif'],
answer: 0
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Paul a une légère ___________ et il lui faut du _____18_____.',
options: ['travail',
 'saut',
 'vent',
 'Repos'],
answer: 3
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Il faut aussi lui donner beaucoup de ____19____. ',
options: ['bijoux',
 'fruits',
 'Bonbons',
 'Devoirs'],
answer: 1
},
{
question: '<b>' + 'Paul est Malade' + '</b>' + '<br />' + '<br />' + ' Voici la liste des _______20_____ que vous devez acheter.',
options: ['médicaments',
 'marchandises',
 'médecins',                
 'maladies'],
answer: 0
},
{
	question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Comme Accra, Ladou est située au bord de la ……………..',

options: ['lagune',
 'rivière',
 'forêt',
 'mer'],
answer: 3
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Ladou compte ………….habitants.',

options: ['2000',
 '5000',
 '10000',
 '20000'],
answer: 3
},
{
question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Certains habitants de Ladou sont …………….',

options: ['pêcheurs et cultivateurs',
 'avocats et chasseurs',
 'commerçants et avocats',
 'mécaniciens et journalistes'],
answer: 2
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Les habitants vont au travail…………..',

options: ['très tôt le matin',
 'à l’heure',
 'dans l’après –midi',
 'le soir'],
answer: 0
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Selon le passage, où travaillent-ils, les mécaniciens ?',

options: ['Au marché',
 'A la mer',
 'A l’école',
 'Au garage'],
answer: 3
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Pourquoi est-ce que les habitants de Ladou sont pressés ? \n Ils vont ……………..',

options: ['au cinéma',
 'au travail',
 'au stade',
 'au jardin'],
answer: 1
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Quel type de bâtiments se trouve à Ladou ?',

options: ['Maison à étage',
 'Stade',
 'Jardin public',
 'Garage'],
answer: 0
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Où est-ce qu’on peut acheter des chaussures et des habits, selon le texte ?',

options: ['Dans une maison à étage',
 'Dans un site touristique',
 'Au stade',
 'Au supermarché'],
answer: 3
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Comment certains habitants passent-ils le week-end ?',

options: ['Ils achètent des marchandises',
 'Ils vont à la cour de justices',
 'Ils vont au cinéma',
 'Ils travaillent au bureau'],
answer: 2
},
{
 

question: '<b>' + 'La Vie à Ladou' + '</b>' + '<br />' + '<br />' + ' Selon le passage, les habitants……..',

options: ['aiment vivre à Ladou',
 'détestent la vie à Ladou',
 'n’aiment pas travailler',
 'ne vont pas en voiture'],
answer: 0
},
{
	question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Chaque matin, pour aller à l’école, l’élève met ses livres dans son ……….',
options: ['Banc',
 'panier',
 'à portefeuille',
 'cartable'],
answer: 3
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Aujourd’hui, c’est lundi ; demain ce sera………….',
options: ['dimanche',
 'mardi',
 'jeudi',
 'samedi'],
answer: 1
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Je vais boire de l’eau parce que j’ai……………….',
options: ['froid',
 'soif',
 'peur',
 'sommieil'],
answer: 1
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Nous allons au …………………pour voir un match de football entre le Ghana et le Togo',
options: ['camp',
 'champ',
 'port',
 'stade'],
answer: 3
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Les professeurs se reposent …………….la récréation.',
options: ['quand',
 'pendant',
 'alors',
 'selon'],
answer: 1
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Maman achète de la viande chez……………….',
options: ['Le boucher',
 'L’epicier',
 'Le boulanger',
 'le fleuriste'],
answer: 0
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Nous avons cultivé beaucoup de ……………dans notre jardin',
options: ['livres',
 'cahiers',
 'chaussures',
 'mais'],
answer: 3
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Le petit garçon met ses chaussures …………..le banc.',
options: ['depuis',
 'sans',
 'sur',
 'près'],
answer: 2
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' La femme danse parce qu’elle est ………………',
options: ['heureuse',
 'pressée',
 'occupée',
 'faible'],
answer: 0
},
{
question: '<b>'+ 'Below are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Kojo marche lentement parce qu’il a mal au ……………………',
options: ['bras',
 'nez',
 'menton',
 'pied'],
answer: 3 
}
]


//Array of Objects
const quiz = [
  {
question: 'Adamou veut manger parce qu’il …………..faim',

options: ['a',
 'as',
 'es',
 'est'],
answer: 0
},
{
question: 'Ohene n’à pas fait son …………… C’est pourquoi il est puni',

options: ['jeu',
 'repas',
 'habit',
 'devoir'],
answer: 3
},
{
question: 'Amalia ne nage ………………dans la mer',

options: ['aussi',
 'déjà',
 'jamais',
 'si'],
answer: 2
},
{
question: '……………..cartes sont derrière la classe ?',

options: ['Quel',
 'Quelle',
 'Quelles',
 'Quels'],
answer: 2
},
{ 

question: 'Mon père à abandonné la cigarette ; il ne fume ………………',

options: ['guère',
 'jamais',
 'pas',
 'plus'],
answer: 3
},
{
question: 'Notre professeur d’anglais parle …….rapidement que nous ne comprenons rien',

options: ['mais',
 'sans',
 'si',
 'voici'],
answer: 2
},
{
question: 'Que ……………les enfants ?\n – Ils dorment',

options: ['faire',
 'fais',
 'faites',
 'font'],
answer: 3
},
{
question: 'Mes sœurs qui habitent le village sont ……………….',

options: ['beau',
 'beaux',
 'belle',
 'belles'],
answer: 3
},
{
question: 'Les filles ont …………les seaux',

options: ['rempli',
 'remplie',
 'remplies',
 'remplis'],
answer: 0
},
{
question: 'Ton père est toujours à la maison. Il ne travaille pas? ……., il travaille.',

options: ['Alors',
 'Si',
 'Non',
 'Oui'],
answer: 1
},
{
	question: 'Les enfants vont se coucher parce qu’ils ont ……………',
options: ['sommiel',
 'Soif',
 'peur',
 'faim'],
answer: 0
},
{
question: 'Anita à envoyé une carte ………….. Noël à son ami.',
options: ['à',
 'au',
 'de',
 'Sur'],
answer: 2
},
{
question: 'Le quatrième mois de l’année est ……………….',
options: ['avril',
 'juillet',
 'juin',
 'Mai'],
answer: 0
},
{
question: 'Ama lave son pagne parce qu’il est ………………',
options: ['brûlé',
 'déchiré',
 'longue',
 'sale'],
answer: 3
},
{
question: 'Les étudiants empruntent des livres à ………………….',
options: ['la bibliothèque',
 'la librairie',              
 'l’église', 
 'l’hôtel'],
answer: 0
},
{
question: 'Le petit ne marche pas bien sans ses ………………',
options: ['ceintures',
 'chapeaux',
 'chaussures',
 'Chemises'],
answer: 2
},
{
question: 'C’est cette couturière qui nous fait nos ………………….',
options: ['bracelets',
 'bagues',
 'coilliers',
 'Jupes'],
answer: 3
},
{
question: 'Paul vient souvent ………………..nous',
options: ['au',
 'Chez',
 'de',
 'Dans'],
answer: 1
},
{
question: 'Jojo porte des lunettes pour bien …………………',
options: ['entendre',
 'marcher',
 'parler',
 'Voir'],
answer: 3
},
{
question: 'Dédé n’à rien à manger parce qu’elle est …………',
options: ['fâchée', 
 'fatigue',
 'petite',
 'pauvre'],
answer: 3
},
{
	question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Où habite la famille Adah ?',
options: ['A la capitale',
 'Dans une plantation',
 'Au village',
 'Dans une grande ville'],
answer: 2
},
{ 

question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Monsieur est riche parce qu’il a',

options: ['quatre enfants',
 'un supermarché',
 'des plantations',
 'une grande maison'],
answer: 2
},
{ 

question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Combien de filles ont Monsieur et Madame Adah ?',

options: ['Une fille',
 'Deux filles',
 'Trois filles',
 'Quatre filles'],
answer: 0
},
{ 

question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Monsieur et Madame Adah aiment la vie …………….du village.',

options: ['agréable',
 'calme',
 'chargée',
 'intéressante'],
answer: 1
},
{ 

question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Dans la capitale on s’amuse ……………..',

options: ['souvent',
 'rarement',
 'quelquefois',
 'toujours'],
answer: 3
},
{
question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Qui invite Amalie à la capitale ?',

options: ['Sa camarade',
 'Sa cousine',
 'Sa nièce',
 'Sa tante'],
answer: 0
},
{
question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Pourquoi les parents d’Amalia lui refusent d’aller chez Sophie ?',

options: ['Parce qu’ils aiment le village',
 'Parce qu’Amalia doit étudier',
 'Parce qu’Amalia n’est pas contente',
 'Parce qu’ils n’aiment pas la capitale.'],
answer: 1
},
{ 

question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Amalia ne mange plus parce qu’elle ……………..',

options: ['n’a plus faim',
 'n’est pas contente',
 'se repose',
 's’amuse'],
answer: 1 
},
{
question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' Amalia se blesse le pied en ……………',

options: ['dansant',
 'courant',
 'sautant',
 'marchant'],
answer: 2
},
{
question: '<b>' + 'Le Départ Pour la Capitale' + '</b>' + '<br />' + '<br />' + ' – Que fait Amalia le cinquième jour ? \n– Elle ……………',

options: ['se repose chez elle',
 'reste à la maison',
 'fait la cuisine',
 'va dans la ville'],
answer: 3
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' Quand la cloche – 31 – , nous nous levons tous et nous faisons une –__ – prière.',
options: ['sonne',
 'sonnes',
 'sonnet',
 'Sonnez'],
answer: 0
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' Quand la cloche – __– , nous nous levons tous et nous faisons une – 32 – prière.',
options: ['Court',
 'courte',
 'Courtes',
 'courts'],
answer: 1
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' Après la prière, nous prenons – 33 – assiettes et on nous sert.',
options: ['nos',
 'Notre',
 'Notres',
 'nous'],
answer: 0
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' Les garçons mangent vite mais les filles mangent – 34 – .',
options: ['lentement',
 'paisiblement',
 'simplement',
 'sérieusement'],
answer: 0
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + '  A midi, la plupart – 35 – filles ne mangent rien.',
options: ['de',
 'De la',
 'des',
 'Du'],
answer: 2
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' Elles préfèrent les plats préparés – 36 – les femmes au ‘Restaurant Palmier’.',
options: ['aux',
 'avec',
 'en',
 'Par'],
answer: 3
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + '  Leurs – 37 – sont toujours chauds.',
options: ['boissons',
 'fruits',
 'provisions',
 'Repas'],
answer: 3
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' – 38 – sont aussi très délicieux – __ – chers.',
options: ['elle',
 'elles',
 'ils',
 'Il'],
answer: 2
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + ' – __ – sont aussi très délicieux – 39 – chers.',
options: ['alors',
 'comme',
 'mais',
 'Puisque'],
answer: 2 
},
{
question: '<b>' + 'Au Réfectoire' + '</b>' + '<br />' + '<br />' + '  Les garçons ne sont pas aussi riches – 40 – les filles.',
options: ['quand',
 'Que',
 'qui',
 'quoi'],
answer: 1
} 
]
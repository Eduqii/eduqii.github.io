

//Array of Objects
const quiz = [
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  A l’école, nous écrivons au tableau avec …………….craie.',

options: ['la',
 'le',
 'de',
 'du'],
answer: 0
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Il y a beaucoup de viande ……………la soupe.',

options: ['sur',
 'par',
 'près',
 'dans'],
answer: 3
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Ama n’aime …………..préparer le repas pour ses frères.',

options: ['rien',
 'non',
 'ni',
 'pas'],
answer: 3
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Ma mère m’a acheté ……………livre de français.',

options: ['du',
 'un',
 'de',
 'une'],
answer: 1
},

{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Les filles de ……………..village sont très gentilles.',

options: ['mon',
 'nos',
 'leurs',
 'sa'],
answer: 0
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  …………………monsieur aime frapper les petits.',

options: ['Cette',
 'Ces',
 'Cet',
 'Ce'],
answer: 3
},

{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Mansa lui dit de ……………….la porte à clé.',

options: ['ferme',
 'fermer',
 'fermes',
 'fermez'],
answer: 1
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  ………………fleur qui est sur la table est belle.',

options: ['L’',
 'Le',
 'La',
 'Les'],
answer: 2
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Je me brosse …………….dents chaque matin avant de manger.',

options: ['le',
 'les',
 'mon',
 'mes'],
answer: 1
},
{ 

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.' + '</b>' + '<br />' + ' ' + '</b>' + '<br />' + '  Les élèves entrent dans la salle de classe ……………..la cloche sonne.',

options: ['que',
 'qui',
 'quand',
 'comment'],
answer: 2
},
{
question: 'Il faut me ……………..la vérité tout le temps.',
options: ['dier',
 'faire',
 'parler',
 'voir'],
answer: 0
},
{ 

question: 'Les touristes vont à la piscine de l’hôtel pour ……………….',
options: ['Danser',
 'nager',
 'pleurer',
 'voyager'],
answer: 1
},
{ 


question: 'Le ………………..est couvert de nuages ; il va pleuvoir.',
options: ['Ciel',
 'lac',
 'toit        ',
 'fleuve'],
answer: 0
},
{ 

question: 'Ma mère est ………………..au centre ville ; elle vend des chaussures et des robes.',
options: ['Directrice',
 'commerçante',
 'couturière',
 'professeur'],
answer: 1
},
{ 

question: '…………………..est-ce que vous n’allez pas à l’école ?',
options: ['combien',
 'qui',
 'Quel',
 'Pourquoi'],
answer: 3
},
{ 
 

question: 'J’ai soif alors, je veux ……………………',
options: ['Dormer maintenant',
 'Boire de l’eau',
 'parler avec toi',
 'manger du riz'],
answer: 1
},
{ 
 
question: 'Le bébé est content …………………il voit sa mère.',
options: ['quoi',
 'quand',
 'bien      ',
 'où'],
answer: 1
},
{ 

 

question: 'Les malades vont a …………………pour voir le docteur.',
options: ['l’église',
 'L’ecole',
 'l’usine',
 'l’hôpital'],
answer: 3
},
{ 
 

question: 'L’orange est le ……………………que j’aime bien.',
options: ['baton',
 'livre',
 'journal',
 'fruit'],
answer: 3
},
{ 
 

question: 'Il y a beaucoup de maisons ………………dans ce village.',
options: ['blancs',
 'verts',
 'noirs',
 'rondes'],
answer: 3
},
{ 
question: '– Ou est-ce que Kafui vit ?' + '<br />' + '  – Il vit …………………',

options: ['avec ses amis',
 'avec sa famille',
 'chez sa mère',
 'chez son oncle'],
answer: 1 

},
{ 

question: 'Il y a ………………personnes dans la famille de Kafui.',

options: ['quatre',
 'cinq',
 'six',
 'sept'],
answer: 1

},
{ 
 
question: '‘Esi l’aînée’ veut dire qu’Esi est ………………',

options: ['le premier enfant de la famille',
 'un enfant unique',
 'la plus aimée de la famille',
 'une belle fille'],
answer: 0

},
{ 

question: '…………………….est le cadet de la famille de Kafui.',

options: ['Esi',
 'Kafui',
 'Maman',
 'Sani'],
answer: 3

},
{ 

question: '– Quelle est la profession de la mère de Kafui ?' + '<br />' + ' Elle est …………………',

options: ['professeur',
 'médecin',
 'commerçante',
 'ménagère'],
answer: 2

},
{ 

question: 'La famille fait …………….pour commencer la journée.',

options: ['le nettoyage',
 'la cuisine',
 'les activités',
 'les prières'],
answer: 3

},
{ 
 
question: 'A sept heures du matin, ……………………',

options: ['le père va au travail',
 'la mère va au marché',
 'les enfants vont à l’école',
 'la famille fait la prière'],
answer: 0

},
{ 

question: 'Qui quitte la maison le dernier ?',

options: ['Maman',
 'Kafui',
 'Papa',
 'Esi'],
answer: 0

},
{  

question: '– Pourquoi Kafui aime-t-il les week-ends ?Parce que ………………',

options: ['la famille mange bien',
 'tout se passe bien',
 'la famille va au marché',
 'tout le monde reste à la maison'],
answer: 3

},
{ 

question: 'Selon le texte, la famille de Kafui est ……………………',

options: ['musulmane',
 'chrétienne',
 'traditionnelle',
 'laïque'],
answer: 1

},
{ 
	question: 'Chaque mardi matin, nous —31— un cours de français. ',
options: ['as',
 'avez',
 'avons',
 'ont'],
answer: 2 
},
{
question: 'Notre professeur de français, Monsieur Lameton prépare beaucoup —32— activités pour rendre la classe intéressante.',
options: ['d’',
 'des',
 'de l’',
 'les'],
answer: 0
},
{
question: 'Dès qu’il rentre dans la classe, nous nous levons et —33— nous salue.',
options: ['elle',
 'lui',
 'ils',
 'il'],
answer: 3
},
{

question: ' Nous répondons tous. Apres, nous nous asseyons et le cours —34—.',
options: ['commence',
 'commencent',
 'commencez',
 'commençons'],
answer: 0
},
{
question: 'Quand il s’agit —35— noms en français, ',
options: ['des',
 'du',
 'le',
 'les'],
answer: 0
},
{
question: 'il répète plusieurs fois —36—,',
options: ['comment',
 'quand',
 'que',
 'qui'],
answer: 2
},
{
question: ' le nom est toujours 37— d’un article.',
options: ['précédé             ',
 'precede',
 'précèder',
 'precedent'],
answer: 0
},
{
question: '  Il nous donne beaucoup d’exemples des noms —38— et des noms masculins.',
options: ['féminin',
 'feminine',
 'féminines',
 'féminins'],
answer: 3
},
{

question: 'Finalement, il nous dit de mettre des articles —39— les noms qu’il écrit au tableau.',
options: ['après',
 'devant',
 'sans',
 'derrière'],
answer: 1
},
{
question: ' J’aime les leçons de Monsieur Lameton parce qu’elles —40— très intéressantes.',
options: ['ont',
 'font',
 'sont',
 'vont'],
answer: 2
} 
]
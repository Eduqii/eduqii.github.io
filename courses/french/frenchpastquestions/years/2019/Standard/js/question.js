

//Array of Objects
const quiz = [
  {
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Ce matin, la…….fille a tellement faim.',

options: ['petit',
 'petite',
 'petites',
 'petits'],
answer: 2

},
{

question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Le garçon est toujours …… retard',

options: ['de',
 'ci',
 'au',
 'en'],
answer: 3

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' La semaine prochaine, …..élevés iront en vacances.',

options: ['de l’',
 'les',
 'd’',
 'l’'],
answer: 1

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' …….. soeur regarde la télévision tout le temps.',

options: ['Mon',
 'Ton',
 'Ma',
 'Nos'],
answer: 2

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Je ……..au théâtre le week-end',

options: ['va',
 'vas',
 'vais',
 'vont'],
answer: 2

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Diana va …..marche pour acheter des légumes.',

options: ['ci la',
 'de la',
 'du',
 'au'],
answer: 3

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Nous ….. les vacances au Benin',

options: ['passons',
 'passent',
 'passez',
 'passes'],
answer: 0

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Est-ce que tu vas …… ton père au champ ?',

options: ['aide',
 'aider',
 'aidez',
 'aides'],
answer: 1

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Nous venons …… Koforidua',

options: ['de',
 'du',
 'en',
 'de la'],
answer: 0

},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Son grand-père aime porter des chaussures……',

options: ['blane',
 'blancs',
 'blanche',
 'blanches'],
answer: 3
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Est-ce que ton père est …… ? Oui, il soigne les malades.',
options: ['médecin',
 'maçon',
 'boucher',            
 'professeur'],
answer: 0
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Le Ghana est en Afrique……',
options: ['Du nord',
 'Du sud',
 'de l’ouest',
 'de l’est'],
answer: 2
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' ………. des pluies vient de commencer.',
options: ['Le temps',
 'La saison',
 'La durée',
 'L’année'],
answer: 1
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Aba n’entend pas bien ; elle a mal aux…….',
options: ['Pieds',
 'Oreilles',
 'Yeux',
 'Bras'],
answer: 1
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Akosua est la fille de ma tante ; elle est doc ma……….',
options: ['Nièce',
 'Voisine',
 'Rivale',
 'Cousine'], 
answer: 3
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Nous allons à la plage pour……….',
options: ['Pleurer',
 'Dormir',
 'Nager',
 'Cuisine'],
answer: 2
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Kofi va se coucher parce qui’il a……',
options: ['Sommeil',
 'Chaud',
 'Soif',
 'Peur'],
answer: 0
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Idrisu est boucher ; il vend …………',
options: ['du gâtezau',
 'Du pain',
 'De la viande',
 'Des poissons'],
answer: 2
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Les cultivateurs cultivent de grands ……….',
options: ['Poisons',
 'Lacs',
 'Champs',
 'Puits'],
answer: 2
},
{
question: '<b>' + 'For each question, choose from the options lettered A to D the one that is most suitable to complete the sentence given.'+ '</b>' + '<br />' + '<br />' + ' Je me couche toujours a huit……………',
options: ['Jours',
 'Minutes',
 'Semaines',
 'heures'],
answer: 3
},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Qui decident de quitter leur village ?',

options: ['Tout le monde',
 'Tous les hommes',
 'Quelques femmes',
 'Quelques villageois'],
answer: 3

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Qu est-ce qu’ils décident d’aller habiter ?',

options: ['Dans une foret',
 'Dans des palmiers',
 'Sur une colline',
 'Sous des arbres'],
answer: 2

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Pourquoi est-ce qu’ils décident de quitter l’ancien village ? Parce que……',

options: ['le village est trop vieux',
 'les cases sont trop petites',
 'la terre n’est plus riche',
 'leurs grands-parents ne vivent plus la – bas'],
answer: 2

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Avec quoi est-ce qu’ils préparent la terre ?',

options: ['Des coupe-coupe',
 'Des houes',
 'Des herbes',
 'Des arbres'],
answer: 0

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Comment est-ce que les femmes aident leurs maris ? Elles ……',

options: ['coupent les herbes',
 'balaient les cases',
 'construisent les cases',
 'ramassent les herbes'],
answer: 3

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Comment est la terre après le travail des femmes ? Elle est………',

options: ['fertile',
 'pleine d’herbes',
 'propre',
 'brulée'],
answer: 2

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Les hommes coupent des branches pour……… les cases',

options: ['nettoyer',
 'construire',
 'réparer',
 'habiter'],
answer: 1

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' La construction du nouveau village dure……….',

options: ['trente jours',
 'vingt et un jours',
 'dix-sept jours',
 'quatorze jours'],
answer: 3

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Dans ce nouveau village, toutes les cases sont….',

options: ['belles',
 'pareilles',
 'détruites',
 'vieilles'],
answer: 1

},
{
question: '<b>' + 'Click on the passage icon below to read the passage carefully and answer the questions that follow by shading on your answer sheet the letter which corresponds with the correct answer.' + '</b>' + '<br />' + '<br />' + ' Sovieto est le nom…….',

options: ['des habitants',
 'de la terre',
 'de la colline',
 'du village'],
answer: 3

},
{
	question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n Le Ghana – 31 – en Afrique.', 
options: ['habite',
 'se trouve',
 'se compose',
 'reste'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n il est un – 32 – indépendant depuis 1957.', 
options: ['village',
 'continent',
 'endroit',
 'pays'],
answer: 3
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n La langue officielle – 33 – l’anglais mais',
options: ['es',
 'étés',     
 'est',
 'êtres'],
answer: 2
},
{
 question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n il y a aussi beaucoup – 34 – langues locales.',
 options: ['de',
 'd’',
 'des',
 'du'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n Le Ghana – 35 – seize régions.', 
options: ['a',
 'as',
 'ont',
 'avons'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n La plupart des Ghanéens – 36 – cultivateurs', 
options: ['est',
 'sommes',
 'sont',
 'es'],
answer: 2
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n pécheurs – 37 – commerçants.',
options: ['mais',
 'et',
 'alors',
 'avec'],
answer: 1
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n Aujourd’hui, le Ghana est en train de se – 38 – , ',
options: ['montrer',
 'voir',
 'gagner',
 'développer'],
answer: 3
},
{
 question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n Maintenant, dans – 39 – village', 
 options: ['beaucoup',
 'assez',
 'plus',
'chaque'],
answer: 3
},
{
 question: '<b>' + 'The passage below has ten numbered spaces followed by four options lettered A to D. Choose from the options the correct word (s) that will fill each numbered space and shade on your answer sheet the letter of the answer you have' + '</b>' + '<br />' + '<br />' + ' Le Ghana\n\n il y’a – 40 – potable et l’électricité.',
options: ['de l’huile',
 'de l’eau',
 'du jus',
 'du lait'],
answer: 1
}
]
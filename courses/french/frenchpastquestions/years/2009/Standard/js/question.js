

//Array of Objects
const quiz = [
  {
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Ce monsieur ____1_____ nous appelons Tonton ____________ avec nous quand nous passons chez ___________ après les cours.',
options: ['que',
 'quel',
 'quelle',
 'Qui'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Ce monsieur _________ nous appelons Tonton ______2 ______ avec nous quand nous passons chez ___________ après les cours.',
options: ['causez',
 'causes',
 'Causer',
 'Cause'],
answer: 3
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Ce monsieur _________ nous appelons Tonton ____________ avec nous quand nous passons chez ______3_____ après les cours. ',
options: ['elles',
 'lui',
 'il',
 'Ils'],
answer: 1
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Son magasin est _____4____ à côte _________ la route qui mene à l’école.',
options: ['Situés',
 'Située',
 'Situé',
 'Situées'],
answer: 2
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Son magasin est _________ à côte ____5_____ la route qui mene à l’école.',
options: ['de',
 'dans',
 'Sur',
 'Sous'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Quand il est très occupé, nous le laissons ___6____ mais quand il n’y a plus ________ clients, nous regardons les livres, surtout les contes de notre pays.',
options: ['travaille',
 'travailles',
 'travailler',
 'travaillez'],
answer: 2
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Quand il est très occupé, nous le laissons _______ mais quand il n’y a plus ____7____ clients, nous regardons les livres, surtout les contes de notre pays.',
options: ['de',
 'des',
 'les',
 'Du'],
answer: 0
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Il y a aussi des cahiers et des gommes qui ressemblent à ____8_____ jouets.',
options: ['notre',
 'leur',
 'tes',
 'Nos'],
answer: 3
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Le coin le plus interessant est toujours ______9_____ des journaux d’enfants.',
options: ['celle',
 'celui',
 'ceux',
 'Celles'],
answer: 1
},
{
question: '<b>' + 'The passage below has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space' + '</b>' + '<br />' + '<br />' + ' Visiter la librairie est pour ___10___ une joie.',
options: ['lui',
 'toi',
 'eux',
 'nous'],
answer: 3
},
{
	question: 'Akosua lave …………………..foulard de sa mère.',

options: ['les',
 'la',
 'l’',
 'le'],
answer: 3
},
{
question: 'Tous les élèves ………………s’amuser au jardin le week-end prochain.',

options: ['iront',
 'allaient',
 'vas',
 'allez'],
answer: 0
},
{
question: '…………………élève parle trop',

options: ['Ce',
 'Cet',
 'Ces',
 'Cette'],
answer: 1
},
{ 

question: 'Les professeurs ……………….de partir',

options: ['vient',
 'viendront',
 'vient',
 'viennent'],
answer: 3
},
{
question: 'Cynthia, Rashidatu et Kofi sont très…………….',

options: ['intelligentes',
 'intelligents',
 'intelligent',
 'intelligente'],
answer: 1
},
{
question: 'Tu………………très vite.',

options: ['grandit',
 'grandi',
 'grandis',
 'grandir'],
answer: 0
},
{
question: 'Il y a trop de ………………sur ce terrain de football.',

options: ['cailloux',
 'caillou',
 'cartables',
 'cartable'],
answer: 0
},
{
question: 'Kofi ……………..mal au ventre parce qu’il a mangé une mangue verte.',

options: ['as',
 'a',
 'est',
 'avoir'],
answer: 1
},
{
question: 'Quand ……………….jeune, j’aimais jouer au football.',

options: ['je suis',
 'j’avais',
 'j’étais',
 'j’étais'],
answer: 2
},
{ 

question: 'Mon père ………………….les accusés, il est avocat.',

options: ['frappe',
 'défend',
 'soigne',
 'enseigne'],
answer: 1
},
{
	question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' L’ensemble des os du ……………..s’appelle le squelette.',
options: ['Cœur',
 'Corps',
 'sang',
 'Muscle'],
answer: 1 
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Le sang a une couleur ………………….',
options: ['chaleur',
 'soleil',
 'pluies',
 'Matin'],
answer: 2
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Pendant la saison sèche, il n’y a pas de …………………………',
options: ['verte',
 'rouge',
 'jaune',
 'Blanche'],
answer: 1
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Madame Owusu est ……………….. ; elle soigne les malades.',
options: ['cultivatrice',
 'professeur',
 'infirmière',
 'Vendeuse'],
answer: 2
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Celui qui attrape les poissons avec un filet est un ……………',
options: ['Pêcheur',
 'fleuriste',
 'fermier',
 'Plombier'],
answer: 0
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Moussah est un bon ……………… ; il tue toujours des gibiers',
options: ['chanteur',
 'chasseur',
 'chauffeur',
 'Cultivateur'],
answer: 1
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Le couteau sert à …………………..les aliments.',
options: ['couper',
 'acheter',
 'cuire',
 'Vendre'],
answer: 0
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Son père conduit un taxi ; il est …………………..',
options: ['chauffeur',
 'coiffeur',
 'mecanicien',
 'médecin'],
answer: 0
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Les documents et les objets ………………sont gardés dans un musée.',
options: ['ancien',
 'ancienne',
 'anciens',
 'Ancienne'],
answer: 2
},
{
question: '<b>' + 'Below are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space' + '</b>' + '<br />' + '<br />' + ' Il y a beaucoup …………………cahiers, livres et stylos dans son cartable.',
options: ['des',
 'de',
 'De l’',
 'De la'],
answer: 1
},
{
	question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Titi est …………..frère de Baba.',

options: ['le grand',
 'le petit',
 'la grande',
 'la petite'],
answer: 0
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Les samedis, Titi et Baba vont …………………',

options: ['au college',
 'au village',
 'au champ',
 'au cinéma'],
answer: 2
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Le village natal, c’est le village où ……………',

options: ['on est né',
 'on est élève',
 'on va au champ',
 'on nage'],
answer: 0
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Monsieur Samba n’aime pas travailler avec sa femme parce qu’elle ………',

options: ['est paressuese',
 'travaille vite',
 'parle beaucoup',
 'est toujours fatiguee'],
answer: 2
},
{
question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Selon Monsieur Samba, les femmes travaillent……………………',

options: ['joyeusement',
 'lentement',
 'rapidement',
 'silencieusement'],
answer: 1
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Monsieur Samba aime travailler avec qui ? \n – Il aime travailler avec ………………',

options: ['sa femme',
 'ses enfants',
 'ses frères',
 'ses parents'],
answer: 1
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Au champ, ils travaillent ………………',

options: ['de l’après –midi au soir',
 'de l’aube à midi',
 'du matin au soir',
 'du matin à l’après –midi'],
answer: 2
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Monsieur Samba pense que les hommes doivent être…………',

options: ['faible',
 'forts',
 'fatigués',
 'fiers'],
answer: 1
},
{ 

question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Que font-ils pendant les repos ? \n – Ils ……………',

options: ['dorment paisiblement',
 'causent beaucoup',
 'prennent les repas',
 'rentrent chez eux'],
answer: 2
},
{
question: '<b>' + 'Samedi Au Champ' + '</b>' + '<br />' + '<br />' + ' Comment sont-ils le soir quand ils rentrent à la maison ? \n – Ils sont très ……………',

options: ['faible',
 'tristes',
 'heureux',
 'malheureux'],
answer: 2
}
]
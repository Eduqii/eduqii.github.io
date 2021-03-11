const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
	{
question: 'Regarde! Il commence …………..pleuvoir.',

choice1: 'à',
choice2: 'dans',
choice3: 'en',
choice4: 'pour',
answer: 1,
},
{
 

question: 'Nos amis vont chercher …………………..chambre',

choice1: 'un',
choice2: 'le',
choice3: 'de',
choice4: 'une',
answer: 4,
},
{
 

question: 'Au collège “All Girls”, les placards sont ……………………',

choice1: 'arranges',
choice2: 'arrangés',
choice3: 'arranger',
choice4: 'arrangez',
answer: 2,
},
{
 

question: 'Madame Sassou a acheté des jouets pour ………………..enfant',

choice1: 's’',
choice2: 'sa',
choice3: 'ses',
choice4: 'son',
answer: 4,
},
{
 

question: '………………………est la date d’aujourd’hui ?',

choice1: 'Quel',
choice2: 'Quelle',
choice3: 'Quelles',
choice4: 'Quels',
answer: 2,
},
{
 

question: 'Dans notre jardin, il y a de………………..fleurs',

choice1: 'beau',
choice2: 'beaux',
choice3: 'belle',
choice4: 'belles',
answer: 4,
},
{

 

question: '– Qu’est-ce que ………………cherches ?Mon stylo',
choice1: 'elle',
choice2: 'je',
choice3: 'tu',
choice4: 'vous',
answer: 3,
},
{
 

question: 'L’instituteur va ………………..les élèves paresseux.',

choice1: 'puni',
choice2: 'punir',
choice3: 'punis',
choice4: 'punit',
answer: 2,
},
{
 

question: '……………………de filles travaillent au nouveau restaurant ?',

choice1: 'Combien',
choice2: 'Comment',
choice3: 'Pourquoi',
choice4: 'Qu’est-ce que',
answer: 1,
},
{
 

question: 'Vous …………..le discours du directeur ?',

choice1: 'écoute',
choice2: 'écouter',
choice3: 'écoutes',
choice4: 'écoutez',
answer: 4,
},
{
	question: 'Sola achète du ………………..chez le Boulanger.',
choice1: 'beurre',
choice2: 'lait',
choice3: 'pain',
choice4: 'sucre',
answer: 3,
},
{

question: 'Asiétou est malade ; ell va voir le …………………..',
choice1: 'directeur            ',
choice2: 'mécanicien        ',
choice3: 'doctuer',
choice4: 'conducteur',
answer: 3,
},
{ 

question: 'Mon père met le mouchoir dans …………….',
choice1: 'son bras',
choice2: 'sa cravate',
choice3: 'son stylo',
choice4: 'sa poche',
answer: 4,
},
{

question: 'Maman prépare le dîner dans …………….',
choice1: 'l’atelier',
choice2: 'le bureau',
choice3: 'la cuisine',
choice4: 'sa garage',
answer: 3,
},
{

question: 'Adiki porte les lunettes parce qu’elle a mal aux ……………',
choice1: 'genoux',
choice2: 'oreilles',
choice3: 'pieds',
choice4: 'yeux',
answer: 4,
},
{ 

question: 'Chaque matin, le jardinier arrose………………..',
choice1: 'la cour',
choice2: 'les fleurs',
choice3: 'la piste',
choice4: 'les oiseaux',
answer: 2,
},
{

question: 'Ce garçon est paresseux, alors il n’aime pas ……………..',
choice1: 'dormir',
choice2: 'manger',
choice3: 'sortir    ',
choice4: 'travailler',
answer: 4,
},
{
question: 'Les élèves qui arrivent ……………retard sont punis',
choice1: 'en ',
choice2: 'au',
choice3: 'de',
choice4: 'du',
answer: 1,
},
{ 

question: 'Notre directeur porte toujours ………………verte.',
choice1: 'en foulard',
choice2: 'une chemise     ',
choice3: 'un pantalon',
choice4: 'une jupe',
answer: 2,
},
{
question: 'Le professeur de géographie ………….avec la carte du Ghana.',
choice1: 'enseigne',
choice2: 'conduit',
choice3: 'parle',
choice4: 'ecrit',
answer: 1,
},
{
question: 'Karim au champ \n\n Karim se réveille………………',

choice1: 'très tard',
choice2: 'de bonne heure',
choice3: 'à la tombée du soleil',
choice4: 'quand le petit déjeuner est prêt',
answer: 2,
},
{
question: 'Karim au champ \n\n Pourquoi prend-il de l’eau chaude ?',

choice1: 'Parce qu’il a soif',
choice2: 'Parce qu’il est sérieux',
choice3: 'Parce qu’il est malade',
choice4: 'Parce qu’il a faim',
answer: 3,
},
{
 

question: 'Karim au champ \n\n Karim prend son petit déjeuner………………',

choice1: 'avant d’aller au champ',
choice2: 'à son arrivée au champ',
choice3: 'quand il a mal à la gorge',
choice4: 's’il veut aller se coucher',
answer: 1, 
},
{
question: 'Karim au champ \n\n Au champ, le cultivateur………………….les herbes',

choice1: 'enlève',
choice2: 'plante',
choice3: 'brule',
choice4: 'mange',
answer: 1,
},
{
question: 'Karim au champ \n\n Selon le texte, Karim cultive la terre avec ………………',

choice1: 'un coupe-coupe',
choice2: 'une houe',
choice3: 'un hameçon',
choice4: 'une pioche',
answer: 2,
},
{ 

question: 'Karim au champ \n\n – Pourquoi son corps est couvert de sueur ? ………..\n – Parce qu’il est ………………..',

choice1: 'paresseux',
choice2: 'méchant',
choice3: 'fâché',
choice4: 'travailleur',
answer: 4,
},
{
question: 'Karim au champ \n\n Karim fait la sieste …………..',

choice1: 'pendant trente minutes',
choice2: 'pendant deux heures',
choice3: 'le matin',
choice4: 'le soir',
answer: 1,
},
{
question: 'Karim au champ \n\n Qu’est-ce qu’il fait âpres le repos ?',

choice1: 'Il prend son déjeuner',
choice2: 'Il rentre chez lui',
choice3: 'Il boit de l’eau',
choice4: 'Il arrache du manioc',
answer: 1,
},
{
question: 'Karim au champ \n\n Quand est-ce qu’il rentre chez lui ?',

choice1: 'Le matin',
choice2: 'Le soir',
choice3: 'Vers midi',
choice4: 'Vers 2 heures',
answer: 2,
},
{ 

question: 'Karim au champ \n\n A la fin du jour, Karim quitte son champ fatigué et …………….',

choice1: 'satisfait',
choice2: 'malade',
choice3: 'en colère',
choice4: 'mecontent',
answer: 1,
},
{
	question:'Mon village – 31 – Betifi.',
choice1: 't’appelles',
choice2: 'm’appelle',
choice3: 's’appelle',
choice4: 'l’appelle',
answer: 3,  
},
{
 question:'C’est un beau village qui est au bord d’une – 32 – .', 
choice1: 'pont',
choice2: 'rivière', 
choice3: 'champ',
choice4: 'bateau',
answer: 2,  
},
{
question:'Il y a beaucoup – 33 – arbres.',
choice1: 'd’',
choice2: 'des',
choice3: 'de',
choice4: 'du',
answer: 1,
},
{
question: 'Les habitants de ce village sont cultivateurs.  Ils – 34 – dans de –__ – maisons en banco. ',
choice1: 'habitant',
choice2: 's’habillent',
choice3: 'se lèvent',
choice4: 'travaillent',
answer: 1,
},
{
question:'Ils – __- dans de – 35 – maisons en banco.',
choice1: 'petit',
choice2: 'petits',
choice3: 'petite',
choice4: 'petites',
answer: 4,
},
{
question:'Le matin, les habitants vont – 36 – et cultivent le manioc et le mais.',
choice1: 'à l’école',
choice2: 'à la maison',
choice3: 'au champ',
choice4: 'au marché',
answer: 3,
},
{
question:' Tout le monde est content dans le village. Alors le village est – 37 – .',
choice1: 'isolé',
choice2: 'pauvre',
choice3: 'paisible',
choice4: 'misérable',
answer: 3,
},
{
question:'  Les oiseaux – 38 – sur des arbres et mangent des fruits. L’après-midi, les ',
choice1: 'chante',
choice2: 'chantes',
choice3: 'chantez',
choice4: 'chantant',
answer: 4,
},
{
  question:'Mon Village\n\n villageois retournent – 39 – eux. Les hommes se lavent et les enfants jouent au football.',
choice1: 'en',
choice2: 'vers',
choice3: 'chez',
choice4: 'avec',
answer: 3,
},
{
   question:'Mon Village\n\n Les femmes – 40 – le repas du soir. Tout le monde mange bien. J’aime bien mon village.',
choice1: 'prépare',
choice2: 'prépares',
choice3: 'préparez',
choice4: 'préparent',
answer: 4,
}
]



const SCORE_POINTS = 100
const MAX_QUESTIONS = 40

startGame = () => {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.php') 
	}

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` 

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	//The next line keep track of the question we are on
	currentQuestion = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionsIndex, 1)

	acceptingAnswers = true	
}

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(!acceptingAnswers) return

		acceptingAnswers = false
	    const selectedChoice = e.target
	    const selectedAnswer = selectedChoice.dataset['number']
	     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
	    if(classToApply === 'incorrect'){
	    	const choice = choices.parentElement.length;
	    	for (let i = 0; i < choice;  i++) {
	    		if (selectedAnswer != currentQuestion.answer) {
	    			choices.parentElement.classList.add('correct');
	    		}
	   		}
	    }
	    if (classToApply === 'correct') {
	    	incrementScore(SCORE_POINTS)
	    }

	    selectedChoice.parentElement.classList.add(classToApply)

	    setTimeout(() => {
	    	selectedChoice.parentElement.classList.remove(classToApply)
	    	getNewQuestion()

	    }, 1000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()

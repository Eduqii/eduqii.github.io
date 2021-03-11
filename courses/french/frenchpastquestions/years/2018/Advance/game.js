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
question: 'Notre professeur vient de ………le cours de français.',

choice1: 'finit',
choice2: 'finis',
choice3: 'finir',
choice4: 'finissez',
answer: 3,

},
{

question: '– …..vas-tu, Kwame? \n\n – Je vais en ville',

choice1: 'Pourquoi',
choice2: 'Combien',
choice3: 'Que',
choice4: 'Où',
answer: 4,

},
{

question: 'Hier, j’……..quitté la maison le matin.',

choice1: 'a',
choice2: 'ai',
choice3: 'es',
choice4: 'est',
answer: 2,

},
{
question: 'Fati n’a pas ……….chaussures.',

choice1: 'de la',
choice2: 'des',
choice3: 'du',
choice4: 'de',
answer: 4,

},
{
question: 'Demain, les élèves ……….en vacances.',

choice1: 'iront',
choice2: 'iras',
choice3: 'irez',
choice4: 'ira',
answer: 1,

},
{
question: 'Pierre veut partir …………soir.',

choice1: 'cette',
choice2: 'cet',
choice3: 'ces',
choice4: 'ce',
answer: 4,

},
{
question: 'C’est ……….père qui conduit la voiture.',

choice1: 'ma',
choice2: 'se',
choice3: 'mon',
choice4: 'leurs',
answer: 3,

},
{
question: 'Les enfants jouent au tennis pendant …………récréation.',

choice1: 'les',
choice2: 'le',
choice3: 'la',
choice4: 'l’',
answer: 3,

},
{
question: 'Les livres sont ……….une boîte.',

choice1: 'chez',
choice2: 'dans',
choice3: 'en',
choice4: 'd’',
answer: 2,
},
{
question: 'Est-ce que vous avez ……….un bon voyage ?',

choice1: 'faites',
choice2: 'faire',
choice3: 'fais',
choice4: 'fait',
answer: 4,
},
{
question: 'Notre professeur vient du Benin. Il est, donc…………..',
choice1: 'ghanéen ',
choice2: 'ivoirien',
choice3: 'béninois',
choice4: 'française',
answer: 3,
},
{
question: 'Voici le mécanicien qui répare ma……………',
choice1: 'voiture',
choice2: 'montre',
choice3: 'chaussure',
choice4: 'table',
answer: 1,
},
{
question: 'Ce …………fait des pantalons pour les enfants.',
choice1: 'menuisier',
choice2: 'pêcheur',
choice3: 'vendeur ',
choice4: 'tailleur',
answer: 4,
},
{
question: 'Ama va à la boucherie pour acheter……………',
choice1: 'de la viande',
choice2: 'du pain',
choice3: 'des fruits',
choice4: 'des boissons',
answer: 1,
},
{
question: 'Le dernier ……….de l’année est décembre.',
choice1: 'jour',
choice2: 'mois',
choice3: 'semaine',
choice4: 'trimester',
answer: 2,
},
{
question: 'Chaque matin, nous prenons le ………..',
choice1: 'dessert',
choice2: 'déjeuner ',
choice3: 'diner',
choice4: 'petit déjeuner',
answer: 4,
},
{
question: 'Papa porte des ………..parce qu’il a mal aux yeux.',
choice1: 'chapeaux',
choice2: 'bijoux',
choice3: 'lunettes',
choice4: 'chaussures',
answer: 3,
},
{
question: 'Isabelle ouvre les fenêtres parce qu’il ………',
choice1: 'va pleuvoir',
choice2: 'fait du vent',
choice3: 'fait chaud',
choice4: 'fait mauvais',
answer: 3,
},
{
question: 'La jeune infirmière travaille a ………….',
choice1: 'l’hopital',
choice2: 'la librarie',
choice3: 'l’eglise',
choice4: 'la cantine',
answer: 1,
},
{
question: 'Il boit beaucoup d’eau parce qu’il a …………',
choice1: 'peur',
choice2: 'sommeil',
choice3: 'soif',
choice4: 'froid',
answer: 3,
},
{
question: 'Un mécanicien célèbre\n\n Ou se trouve le garage de Karibu ?\n Il se trouve …………',

choice1: 'dans la banque',
choice2: 'près de la banque',
choice3: 'après le quartier',
choice4: 'près du quartier',
answer: 2,
},
{
question: 'Un mécanicien célèbre\n\n Il y a …………dans le quartier.',

choice1: 'une banque',
choice2: 'deux banques',
choice3: 'quatre banques',
choice4: 'six banques',
answer: 1,
},
{
question: 'Un mécanicien célèbre\n\n Le garage de Karibu est ………..',

choice1: 'sombre',
choice2: 'propre',
choice3: 'loin',
choice4: 'protégé',
answer: 4,
},
{
question: 'Un mécanicien célèbre\n\n Pourquoi est-ce que Karibu a beaucoup de clients ?',

choice1: 'Parce qu’il porte des vêtements sombres',
choice2: 'Parce que son garage est le seul dans le quartier.',
choice3: 'Parce qu’il connait bien son travail.',
choice4: 'Parce qu’il a plusieurs apprentis.',
answer: 3,
},
{
question: 'Un mécanicien célèbre\n\n A quelle l’heure est-ce que Karibu arrive au travail ?\n Il y arrive à ……….', 

choice1: '8 h.00',
choice2: '8 h.15',
choice3: '8 h.30',
choice4: '8 h.45',
answer: 3,
},
{
question: 'Un mécanicien célèbre\n\n Les clients appellent Karibu de loin, quelquefois, pour …………',

choice1: 'réparer des voitures',
choice2: 'appeler ses apprentis',
choice3: 'acheter ses vêtements',
choice4: 'chercher des outils',
answer: 1,
},
{
question: 'Un mécanicien célèbre\n\n Selon le texte, qui aime porter des habits sombres au travail ?',

choice1: 'Le narrateur',
choice2: 'Le banquier',
choice3: 'Le mécanicien',
choice4: 'Le client',
answer: 3,
},
{
question: 'Un mécanicien célèbre\n\n Qui est-ce qui attendent Karibu à son arrivée au garage le matin ?',

choice1: 'Les mécaniciens',
choice2: 'Ses apprentis',
choice3: 'Les banquiers',
choice4: 'Ses clients',
answer: 4,
},
{
question: 'Un mécanicien célèbre\n\n Les apprentis aident Karibu à ………….',

choice1: 'trouver les clients',
choice2: 'réparer les voitures',
choice3: 'chercher les banquiers',
choice4: 'acheter des nattes',
answer: 2,
},
{
question: 'Un mécanicien célèbre\n\n A la fin de la journée, le mécanicien rentre chez lui ………….',

choice1: 'ennuyé',
choice2: 'propre',
choice3: 'surpris',
choice4: 'fatigué',
answer: 4,
},
{
question: 'Un bon repas\n\n C’est le weekend. La mère de Kwame va préparer le fufu et elle demande à Kwame \n de l’aider. Mais, il – 31 – veut pas piler le fufu.',
choice1: 'n’en',
choice2: 'ni ',           
choice3: 'ne',
choice4: 'n’est',
answer: 3,
},
{
 question: 'Un bon repas\n\n  Il – 32 – à sa mère',
 choice1: 'dit',
choice2: 'parle',
choice3: 'demande',
choice4: 'veut',
answer: 1,
},
{
question: 'Un bon repas\n\n qu’il – 33 – mal aux dents',
 choice1: 'a',
choice2: 'ai',
choice3: 'as',
choice4: 'avez',
answer: 1,
},
{
question: 'Un bon repas\n\n et il va – 34 – lit.',
choice1: 'au',
choice2: 'de',
choice3: 'dans',
choice4: 'sur',
answer: 1,
},
{
question: 'Un bon repas\n\n A ce moment-là, Adzo, la sœur de Kwame, rentre du marché. Elle aide maman à – 35 – la cuisine.',
choice1: 'faisons',
choice2: 'font',
choice3: 'faites',
choice4: 'faire',
answer: 4,
},
{
question: 'Un bon repas\n\n Elle – 36 – le fufu.',
choice1: 'pile',
choice2: 'pilent',
choice3: 'piles',
choice4: 'piler',
answer: 1,
},
{
question: 'Un bon repas\n\n Ensuite, elle nettoie la cuisine et après, maman – 37 – Adzo mangent le fufu.',
choice1: 'ainsi',
choice2: 'et',
choice3: 'mais',
choice4: 'sans',
answer: 2,
},
{
question: 'Un bon repas\n\n Elles – 38 – contentes parce',
choice1: 'ont',
choice2: 'sont',
choice3: 'vont',
choice4: 'font',
answer: 2,
},
{
 question: 'Un bon repas\n\n Elles – __ – contentes parce que – 39 – repas est – __ – .',
choice1: 'la',
choice2: 'le',
choice3: 'du',
choice4: 'des',
answer: 2,
},
{
  question: 'Un bon repas\n\n Elles – __ – contentes parce que – __ – repas est – 40 – . \n Pauvre Kwame ! Il ne mange rien.',
choice1: 'pauvre',
choice2: 'brûlé',
choice3: 'nouveau',
choice4: 'délicieux',
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

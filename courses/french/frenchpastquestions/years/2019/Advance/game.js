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
question: 'Ce matin, la…….fille a tellement faim.',

choice1: 'petit',
choice2: 'petite',
choice3: 'petites',
choice4: 'petits',
answer: 2

},
{

question: 'Le garçon est toujours …… retard',

choice1: 'de',
choice2: 'ci',
choice3: 'au',
choice4: 'en',
answer: 4,

},
{
question: 'La semaine prochaine, …..élevés iront en vacances.',

choice1: 'de l’',
choice2: 'les',
choice3: 'd’',
choice4: 'l’',
answer: 2,

},
{
question: '…….. soeur regarde la télévision tout le temps.',

choice1: 'Mon',
choice2: 'Ton',
choice3: 'Ma',
choice4: 'Nos',
answer: 3,

},
{
question: 'Je ……..au théâtre le week-end',

choice1: 'va',
choice2: 'vas',
choice3: 'vais',
choice4: 'vont',
answer: 3,

},
{
question: 'Diana va …..marche pour acheter des légumes.',

choice1: 'ci la',
choice2: 'de la',
choice3: 'du',
choice4: 'au',
answer: 4,

},
{
question: 'Nous ….. les vacances au Benin',

choice1: 'passons',
choice2: 'passent',
choice3: 'passez',
choice4: 'passes',
answer: 1,

},
{
question: 'Est-ce que tu vas …… ton père au champ ?',

choice1: 'aide',
choice2: 'aider',
choice3: 'aidez',
choice4: 'aides',
answer: 2,

},
{
question: 'Nous venons …… Koforidua',

choice1: 'de',
choice2: 'du',
choice3: 'en',
choice4: 'de la',
answer: 1,

},
{
question: 'Son grand-père aime porter des chaussures……',

choice1: 'blane',
choice2: 'blancs',
choice3: 'blanche',
choice4: 'blanches',
answer: 4,
},
{
question: 'Est-ce que ton père est …… ? Oui, il soigne les malades.',
choice1: 'médecin',
choice2: 'maçon',
choice3: 'boucher',            
choice4: 'professeur',
answer: 1,
},
{
question: 'Le Ghana est en Afrique……',
choice1: 'Du nord,',
choice2: 'Du sud',
choice3: 'de l’ouest',
choice4: 'de l’est',
answer: 3,
},
{
question: '………. des pluies vient de commencer.',
choice1: 'Le temps',
choice2: 'La saison',
choice3: 'La durée',
choice4: 'L’année',
answer: 2,
},
{
question: 'Aba n’entend pas bien ; elle a mal aux…….',
choice1: 'Pieds',
choice2: 'Oreilles',
choice3: 'Yeux',
choice4: 'Bras',
answer: 2,
},
{
question: 'Akosua est la fille de ma tante ; elle est doc ma……….',
choice1: 'Nièce',
choice2: 'Voisine',
choice3: 'Rivale',
choice4: 'Cousine', 
answer: 4,
},
{
question: 'Nous allons à la plage pour……….',
choice1: 'Pleurer',
choice2: 'Dormir',
choice3: 'Nager',
choice4: 'Cuisine',
answer: 3,
},
{
question: 'Kofi va se coucher parce qui’il a……',
choice1: 'Sommeil',
choice2: 'Chaud',
choice3: 'Soif',
choice4: 'Peur',
answer: 1,
},
{
question: 'Idrisu est boucher ; il vend …………',
choice1: 'du gâtezau',
choice2: 'Du pain',
choice3: 'De la viande',
choice4: 'Des poissons',
answer: 3,
},
{
question: 'Les cultivateurs cultivent de grands ……….',
choice1: 'Poisons',
choice2: 'Lacs',
choice3: 'Champs',
choice4: 'Puits',
answer: 3,
},
{
question: 'Je me couche toujours a huit……………',
choice1: 'Jours',
choice2: 'Minutes',
choice3: 'Semaines',
choice4: 'heures',
answer: 4,
},
{
question: 'Passage I \n\n Qui decident de quitter leur village ?',

choice1: 'Tout le monde',
choice2: 'Tous les hommes',
choice3: 'Quelques femmes',
choice4: 'Quelques villageois',
answer: 4,

},
{
question: 'Passage I \n\n Qu est-ce qu’ils décident d’aller habiter ?',

choice1: 'Dans une foret',
choice2: 'Dans des palmiers',
choice3: 'Sur une colline',
choice4: 'Sous des arbres',
answer: 3,

},
{
question: 'Passage I \n\n Pourquoi est-ce qu’ils décident de quitter l’ancien village ? Parce que……',

choice1: 'le village est trop vieux',
choice2: 'les cases sont trop petites',
choice3: 'la terre n’est plus riche',
choice4: 'leurs grands-parents ne vivent plus la – bas',
answer: 3,

},
{
question: 'Passage I \n\n Avec quoi est-ce qu’ils préparent la terre ?',

choice1: 'Des coupe-coupe',
choice2: 'Des houes',
choice3: 'Des herbes',
choice4: 'Des arbres',
answer: 1,

},
{
question: 'Passage I \n\n Comment est-ce que les femmes aident leurs maris ? Elles ……',

choice1: 'coupent les herbes',
choice2: 'balaient les cases',
choice3: 'construisent les cases',
choice4: 'ramassent les herbes',
answer: 4,

},
{
question: 'Passage I \n\n Comment est la terre après le travail des femmes ? Elle est………',

choice1: 'fertile',
choice2: 'pleine d’herbes',
choice3: 'propre',
choice4: 'brulée',
answer: 3,

},
{
question: 'Passage I \n\n Les hommes coupent des branches pour……… les cases',

choice1: 'nettoyer',
choice2: 'construire',
choice3: 'réparer',
choice4: 'habiter',
answer: 2,

},
{
question: 'Passage I \n\n La construction du nouveau village dure……….',

choice1: 'trente jours',
choice2: 'vingt et un jours',
choice3: 'dix-sept jours',
choice4: 'quatorze jours',
answer: 4,

},
{
question: 'Passage I \n\n Dans ce nouveau village, toutes les cases sont….',

choice1: 'belles',
choice2: 'pareilles',
choice3: 'détruites',
choice4: 'vieilles',
answer: 2,

},
{
question: 'Passage I \n\n Sovieto est le nom…….',

choice1: 'des habitants',
choice2: 'de la terre',
choice3: 'de la colline',
choice4: 'du village',
answer: 4,

},
{
	question: 'click on the passage icon to view passage \n\n Le Ghana\n\n Le Ghana – 31 – en Afrique.', 
choice1: 'habite',
choice2: 'se trouve',
choice3: 'se compose',
choice4: 'reste',
answer: 1,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n il est un – 32 – indépendant depuis 1957.', 
choice1: 'village',
choice2: 'continent',
choice3: 'endroit',
choice4: 'pays',
answer: 4,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n La langue officielle – 33 – l’anglais mais',
choice1: 'es',
choice2: 'étés',     
choice3: 'est',
choice4: 'êtres',
answer: 3,
},
{
 question: 'click on the passage icon to view passage \n\n Le Ghana\n\n il y a aussi beaucoup – 34 – langues locales.',
 choice1: 'de',
choice2: 'd’',
choice3: 'des',
choice4: 'du',
answer: 1,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n Le Ghana – 35 – seize régions.', 
choice1: 'a',
choice2: 'as',
choice3: 'ont',
choice4: 'avons',
answer: 1,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n La plupart des Ghanéens – 36 – cultivateurs', 
choice1: 'est',
choice2: 'sommes',
choice3: 'sont',
choice4: 'es',
answer: 3,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n pécheurs – 37 – commerçants.',
choice1: 'mais',
choice2: 'et',
choice3: 'alors',
choice4: 'avec',
answer: 2,
},
{
question: 'click on the passage icon to view passage \n\n Le Ghana\n\n Aujourd’hui, le Ghana est en train de se – 38 – , Maintenant,',
choice1: 'montrer',
choice2: 'voir',
choice3: 'gagner',
choice4: 'développer',
answer: 4,
},
{
 question: 'click on the passage icon to view passage \n\n Le Ghana\n\n dans – 39 – village', 
 choice1: 'beaucoup',
choice2: 'assez',
choice3: 'plus',
choice4:'chaque',
answer: 4,
},
{
 question: 'click on the passage icon to view passage \n\n Le Ghana\n\n il y’a – 40 – potable et l’électricité.',
choice1: 'de l’huile',
choice2: 'de l’eau',
choice3: 'du jus',
choice4: 'du lait',
answer: 2,
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

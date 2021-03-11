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
question: 'Les élèves vont en vacances …………….. 30 janvier.',
choice1: 'la',
choice2: 'au',
choice3: 'en',
choice4: 'le',
answer: 
},
{
question: 'Nous jouons ……………..football chaque samedi matin.',
choice1: 'du',
choice2: 'aux',
choice3: 'au',
choice4: 'le',
answer: 
},
{
question: 'Le soir, je ……………… à 9 heures.',
choice1: 'dort',
choice2: 'dormons',
choice3: 'dorment',
choice4: 'dors',
answer: 
},
{
question: 'Ali est un ……………….. élève',
choice1: 'bon',
choice2: 'bons',
choice3: 'bonne',
choice4: 'bonnes',
answer: 
},
{
question: 'L’homme est …………..il à beaucoup d’argent.',
choice1: 'pauvre',
choice2: 'joli',
choice3: 'riche',
choice4: 'grand',
answer: 
},
{
question: 'Le voleur ………….. de la prison.',
choice1: 'sortez',
choice2: 'sors',
choice3: 'sortent',
choice4: 'sort',
answer: 
},
{
question: 'Le garçon ……………les portes et les fenêtres de l’école.',
choice1: 'ouvres',
choice2: 'ouvre',
choice3: 'ouvrir',
choice4: 'ouvert',
answer: 
},
{
question: 'Ama achète un kilo ……………..tomates au marché.',
choice1: 'des',
choice2: 'de la',
choice3: 'de',
choice4: 'du',
answer: 
},
{
question: 'Pour aller à l’école, nous ……………..l’autobus.',
choice1: 'prenons',
choice2: 'prenez',
choice3: 'prendre',
choice4: 'prennent',
answer: 
},
{
question: 'Ils ……………… lavent tous les matins',
choice1: 'lui',
choice2: 'sont',
choice3: 'leur',
choice4: 'se',
answer: 
},
{
question: 'L’enfant ……………. intelligent.',
choice1: 'est',
choice2: 'suis',
choice3: 'être',
choice4: 'es',
answer: 
},
{
question: 'Quelle ………… robe !',
choice1: 'joli',
choice2: 'jolie',
choice3: 'jolis',
choice4: 'jolies',
answer: 
},
{
question: 'Ama achète un ……………. mouchoir',
choice1: 'nouvel',
choice2: 'nouveau',
choice3: 'nouvelle',
choice4: 'nouvelles',
answer: 
},
{
question: 'Elle dort parce qu’elle est …………..',
choice1: 'fatigué',
choice2: 'fatiguée',
choice3: 'fatiguant',
choice4: 'fatigue',
answer: 
},
{
question: 'Il va ………………. la plage',
choice1: 'a',
choice2: 'à',
choice3: 'au',
choice4: 'en',
answer: 
},
{
question: 'Il travaille ……………… le jardin.',
choice1: 'par',
choice2: 'dans',
choice3: 'en',
choice4: 'au',
answer: 
},
{
question: 'Il y a beaucoup ………………. personnes dans la chambre.',
choice1: 'du',
choice2: 'des',
choice3: 'd’',
choice4: 'de',
answer: 
},
{
question: 'Les élèves ………………. leur devoir.',
choice1: 'fait',
choice2: 'fais',
choice3: 'font',
choice4: 'faisons',
answer: 
},
{
question: 'Mon Père à une ……………….. maison.',
choice1: 'grande',
choice2: 'petit',
choice3: 'grand',
choice4: 'grosse',
answer: 
},
{
question: '………………… professeur est content.',
choice1: 'Ma',
choice2: 'Mon',
choice3: 'Mes.',
choice4: 'Sa',
answer: 
},
{
question: 'Nous allons …………….. ville.',
choice1: 'en',
choice2: 'au',
choice3: 'dans',
choice4: 'a',
answer: 
},
{
question: 'J’ai …………stylo dans mon sac.',
choice1: 'la',
choice2: 'une',
choice3: 'un',
choice4: 'de',
answer: 
},
{
question: 'Cet élève ne travaille pas bien en classe. Il est……………',
choice1: 'gentil',
choice2: 'intelligent',
choice3: 'serieux',
choice4: 'paresseux',
answer: 
},
{
question: 'Kofi n’est pas grand. Il est……….',
choice1: 'jolie', 
choice2: 'petit',
choice3: 'mauvais',
choice4: 'belle',
answer: 
},
{
question: 'Le bébé boit ……………. lait.',
choice1: 'de',
choice2: 'des',
choice3: 'de la',
choice4: 'du',
answer: 
},
{
question: 'Tu ……………….. vingt ans.',
choice1: 'es',
choice2: 'ai',
choice3: 'as',
choice4: 'a',
answer: 
},
{
question: 'Le chat est un animal ………………',
choice1: 'domestique',
choice2: 'sauvage',
choice3: 'sale',
choice4: 'féroce',
answer: 
},
{
question: 'Les ……………… sont dans la mer.',
choice1: 'souris',
choice2: 'moutons',
choice3: 'poissons',
choice4: 'poules',
answer: 
},
{
question: 'L’histoire est très ……………………….',
choice1: 'amusant',
choice2: 'amusee',
choice3: 'amusent',
choice4: 'amusante',
answer: 
},
{
question: 'Le frère de mon père est mon ……………',
choice1: 'cousin',
choice2: 'frère',
choice3: 'oncle',
choice4: 'neveu',
answer: 
},
{
	question: 'UN SOIR AU CINEMA\n\n La famille va au cinéma…………….',
choice1: 'le dimanche',
choice2: 'le samedi soir',
choice3: 'tous les soirs',
choice4: 'tous les jours',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Aujourd’hui les enfants vont au cinéma avec……………',
choice1: 'leur mère',
choice2: 'leur ami',
choice3: 'leur père',
choice4: 'leur sœur',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Maman reste à la maison parce qu’elle est ………………',
choice1: 'gentille',
choice2: 'paresseuse',
choice3: 'contente',
choice4: 'fatiguée',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Que porte la sœur ? Elle porte …………………',
choice1: 'un joli pantalon',
choice2: 'une jolie robe',
choice3: 'une belle chemise',
choice4: 'une belle jupe',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Ils vont au ………….avec Papa.',
choice1: 'marché',
choice2: 'champ',
choice3: 'cinéma',
choice4: 'bureau',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Le film commence à …………….',
choice1: '6 heures',
choice2: '7 heures',
choice3: '9 heures',
choice4: '8 heures',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n La femme à beaucoup de ……………….',
choice1: 'foulards',
choice2: 'chapeaux',
choice3: 'robes',
choice4: 'cheveux',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Les cheveux de la famille ressemblent à ……………..',
choice1: 'des fleurs',
choice2: 'un panier',
choice3: 'des feuilles',
choice4: 'un chapeau',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Qu’est-ce que Papa dit à la femme ? Il lui dit …………..',
choice1: 'd’enlever son chapeau',
choice2: 'de porter son chapeau',
choice3: 'de chercher son chapeau',
choice4: 'd’apporter son chapeau',
answer: 
},
{
question: 'UN SOIR AU CINEMA\n\n Que fait tout le monde ? Tout le monde ………………',
choice1: 'parle',
choice2: 'chante',
choice3: 'crie',
choice4: 'rit',
answer: 
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

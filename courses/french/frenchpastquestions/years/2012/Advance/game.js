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
question: 'Adamou veut manger parce qu’il …………..faim',

choice1: 'a',
choice2: 'as',
choice3: 'es',
choice4: 'est',
answer: 1,
},
{
question: 'Ohene n’à pas fait son …………… C’est pourquoi il est puni',

choice1: 'jeu',
choice2: 'repas',
choice3: 'habit',
choice4: 'devoir',
answer: 4,
},
{
question: 'Amalia ne nage ………………dans la mer',

choice1: 'aussi',
choice2: 'déjà',
choice3: 'jamais',
choice4: 'si',
answer: 3,
},
{
question: '……………..cartes sont derrière la classe ?',

choice1: 'Quel',
choice2: 'Quelle',
choice3: 'Quelles',
choice4: 'Quels',
answer: 3,
},
{ 

question: 'Mon père à abandonné la cigarette ; il ne fume ………………',

choice1: 'guère',
choice2: 'jamais',
choice3: 'pas',
choice4: 'plus',
answer: 4,
},
{
question: 'Notre professeur d’anglais parle …….rapidement que nous ne comprenons rien',

choice1: 'mais',
choice2: 'sans',
choice3: 'si',
choice4: 'voici',
answer: 3,
},
{
question: 'Que ……………les enfants ?\n – Ils dorment',

choice1: 'faire',
choice2: 'fais',
choice3: 'faites',
choice4: 'font',
answer: 4,
},
{
question: 'Mes sœurs qui habitent le village sont ……………….',

choice1: 'beau',
choice2: 'beaux',
choice3: 'belle',
choice4: 'belles',
answer: 4,
},
{
question: 'Les filles ont …………les seaux',

choice1: 'rempli',
choice2: 'remplie',
choice3: 'remplies',
choice4: 'remplis',
answer: 1,
},
{
question: 'Ton père est toujours à la maison. Il ne travaille pas? ……., il travaille.',

choice1: 'Alors',
choice2: 'Si',
choice3: 'Non',
choice4: 'Oui',
answer: 2,},
{
	question: 'Les enfants vont se coucher parce qu’ils ont ……………',
choice1: 'sommiel',
choice2: 'Soif',
choice3: 'peur',
choice4: 'faim',
answer: 1,
},
{
question: 'Anita à envoyé une carte ………….. Noël à son ami.',
choice1: 'à',
choice2: 'au',
choice3: 'de',
choice4: 'Sur',
answer: 3,
},
{
question: 'Le quatrième mois de l’année est ……………….',
choice1: 'avril',
choice2: 'juillet',
choice3: 'juin',
choice4: 'Mai',
answer: 1,
},
{
question: 'Ama lave son pagne parce qu’il est ………………',
choice1: 'brûlé',
choice2: 'déchiré',
choice3: 'longue',
choice4: 'sale',
answer: 4,
},
{
question: 'Les étudiants empruntent des livres à ………………….',
choice1: 'la bibliothèque',
choice2: 'la librairie',              
choice3: 'l’église', 
choice4: 'l’hôtel',
answer: 1,
},
{
question: 'Le petit ne marche pas bien sans ses ………………',
choice1: 'ceintures',
choice2: 'chapeaux',
choice3: 'chaussures',
choice4: 'Chemises',
answer: 3,
},
{
question: 'C’est cette couturière qui nous fait nos ………………….',
choice1: 'bracelets',
choice2: 'bagues',
choice3: 'coilliers',
choice4: 'Jupes',
answer: 4,
},
{
question: 'Paul vient souvent ………………..nous',
choice1: 'au',
choice2: 'Chez',
choice3: 'de',
choice4: 'Dans',
answer: 2,
},
{
question: 'Jojo porte des lunettes pour bien …………………',
choice1: 'entendre',
choice2: 'marcher',
choice3: 'parler',
choice4: 'Voir',
answer: 4,
},
{
question: 'Dédé n’à rien à manger parce qu’elle est …………',
choice1: 'fâchée', 
choice2: 'fatigue',
choice3: 'petite',
choice4: 'pauvre',
answer: 4,
},
{
	question: 'Le Départ Pour la Capitale\n\n Où habite la famille Adah ?',
choice1: 'A la capitale',
choice2: 'Dans une plantation',
choice3: 'Au village',
choice4: 'Dans une grande ville',
answer: 3,
},
{ 

question: 'Le Départ Pour la Capitale\n\n Monsieur est riche parce qu’il a',

choice1: 'quatre enfants',
choice2: 'un supermarché',
choice3: 'des plantations',
choice4: 'une grande maison',
answer: 3,
},
{ 

question: 'Le Départ Pour la Capitale\n\n Combien de filles ont Monsieur et Madame Adah ?',

choice1: 'Une fille',
choice2: 'Deux filles',
choice3: 'Trois filles',
choice4: 'Quatre filles',
answer: 1,
},
{ 

question: 'Le Départ Pour la Capitale\n\n Monsieur et Madame Adah aiment la vie …………….du village.',

choice1: 'agréable',
choice2: 'calme',
choice3: 'chargée',
choice4: 'intéressante',
answer: 2,
},
{ 

question: 'Le Départ Pour la Capitale\n\n Dans la capitale on s’amuse ……………..',

choice1: 'souvent',
choice2: 'rarement',
choice3: 'quelquefois',
choice4: 'toujours',
answer: 4,
},
{
question: 'Le Départ Pour la Capitale\n\n Qui invite Amalie à la capitale ?',

choice1: 'Sa camarade',
choice2: 'Sa cousine',
choice3: 'Sa nièce',
choice4: 'Sa tante',
answer: 1,
},
{
question: 'Le Départ Pour la Capitale\n\n Pourquoi les parents d’Amalia lui refusent d’aller chez Sophie ?',

choice1: 'Parce qu’ils aiment le village',
choice2: 'Parce qu’Amalia doit étudier',
choice3: 'Parce qu’Amalia n’est pas contente',
choice4: 'Parce qu’ils n’aiment pas la capitale.',
answer: 2,
},
{ 

question: 'Le Départ Pour la Capitale\n\n Amalia ne mange plus parce qu’elle ……………..',

choice1: 'n’a plus faim',
choice2: 'n’est pas contente',
choice3: 'se repose',
choice4: 's’amuse',
answer: 2, 
},
{
question: 'Le Départ Pour la Capitale\n\n Amalia se blesse le pied en ……………',

choice1: 'dansant',
choice2: 'courant',
choice3: 'sautant',
choice4: 'marchant',
answer: 3,
},
{
question: 'Le Départ Pour la Capitale\n\n – Que fait Amalia le cinquième jour ? \n– Elle ……………',

choice1: 'se repose chez elle',
choice2: 'reste à la maison',
choice3: 'fait la cuisine',
choice4: 'va dans la ville',
answer: 4,
},
{
question: 'Au Réfectoire\n\n Quand la cloche – 31 – , nous nous levons tous et nous faisons une –__ – prière.',
choice1: 'sonne',
choice2: 'sonnes',
choice3: 'sonnet',
choice4: 'Sonnez',
answer: 1,
},
{
question: 'Au Réfectoire\n\n Quand la cloche – __– , nous nous levons tous et nous faisons une – 32 – prière.',
choice1: 'Court',
choice2: 'courte',
choice3: 'Courtes',
choice4: 'courts',
answer: 2,
},
{
question: 'Au Réfectoire\n\n Après la prière, nous prenons – 33 – assiettes et on nous sert.',
choice1: 'nos',
choice2: 'Notre',
choice3: 'Notres',
choice4: 'nous',
answer: 1,
},
{
question: 'Au Réfectoire\n\n Les garçons mangent vite mais les filles mangent – 34 – .',
choice1: 'lentement',
choice2: 'paisiblement',
choice3: 'simplement',
choice4: 'sérieusement',
answer: 1,
},
{
question: 'Au Réfectoire\n\n  A midi, la plupart – 35 – filles ne mangent rien.',
choice1: 'de',
choice2: 'De la',
choice3: 'des',
choice4: 'Du',
answer: 3,
},
{
question: 'Au Réfectoire\n\n Elles préfèrent les plats préparés – 36 – les femmes au ‘Restaurant Palmier’.',
choice1: 'aux',
choice2: 'avec',
choice3: 'en',
choice4: 'Par',
answer: 4,
},
{
question: 'Au Réfectoire\n\n  Leurs – 37 – sont toujours chauds.',
choice1: 'boissons',
choice2: 'fruits',
choice3: 'provisions',
choice4: 'Repas',
answer: 4,
},
{
question: 'Au Réfectoire\n\n – 38 – sont aussi très délicieux – __ – chers.',
choice1: 'elle',
choice2: 'elles',
choice3: 'ils',
choice4: 'Il',
answer: 3,
},
{
question: 'Au Réfectoire\n\n – __ – sont aussi très délicieux – 39 – chers.',
choice1: 'alors',
choice2: 'comme',
choice3: 'mais',
choice4: 'Puisque',
answer: 3, 
},
{
question: 'Au Réfectoire\n\n  Les garçons ne sont pas aussi riches – 40 – les filles.',
choice1: 'quand',
choice2: 'Que',
choice3: 'qui',
choice4: 'quoi',
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

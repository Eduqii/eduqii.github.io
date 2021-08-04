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
question:'Elles mangent ……….. pain',
choice1: 'de la',
choice2: 'la',
choice3: 'du',
choice4: 'une',
answer: 
},
{
question:'Nous écrivons ………… tableau.',
choice1: 'à la',
choice2: 'aux',
choice3: 'à l’',
choice4: 'au',
answer: 
},
{
question:'Kofi va chercher …………….chaise.',
choice1: 'du',
choice2: 'une',
choice3: 'de la',
choice4: 'des',
answer: 
},
{
question:'Maman achète …………. tomates.',
choice1: 'une',
choice2: 'de',
choice3: 'de la',
choice4: 'des',
answer: 
},
{
question:'…………………….. enfant dort sur la table',
choice1: 'Les',
choice2: 'La',
choice3: 'L’',
choice4: 'De la',
answer: 
},
{
question:'Le chat mange …………… Lézards.',
choice1: 'une',
choice2: 'les',
choice3: 'la',
choice4: 'un',
answer: 
},
{
question:'Ama écoute ………….. leçon.',
choice1: 'le',
choice2: 'à la',
choice3: 'la',
choice4: 'les',
answer: 
},
{
question:'Donne-moi ………….eau.',
choice1: 'une',
choice2: 'un',
choice3: 'la',
choice4: 'l’',
answer: 
},
{
question:'…………….. homme arrives.',
choice1: 'La',
choice2: 'Les',
choice3: 'Un',
choice4: 'Une',
answer: 
},
{
question:'Nous avons …………… belle maison.',
choice1: 'une',
choice2: 'un',
choice3: 'le',
choice4: 'les',
answer: 
},
{
question:'Viens me ………..bonjour.',
choice1: 'saluer',
choice2: 'parler',
choice3: 'dire',
choice4: 'voir',
answer: 
},
{
question:'Aujourd’hui c’est samedi, et demain sera',
choice1: 'dimanche',
choice2: 'lundi',
choice3: 'jeudi',
choice4: 'vendredi',
answer: 
},
{
question:'L’homme vend des chemises et des robes. C’est un…………..',
choice1: 'vendeur',
choice2: 'voleur',
choice3: 'professeur',
choice4: 'pêcheur',
answer: 
},
{
question:'Quel âge as-tu ? ……………….',
choice1: 'J’ai froid',
choice2: 'Je vais bien',
choice3: 'Je mange bien',
choice4: 'J’ai dix ans.',
answer: 
},
{
question:'Elle est malade. Elle prend……………',
choice1: 'de la bière',
choice2: 'de l’aspirine',
choice3: 'de vin',
choice4: 'de l’eau',
answer: 
},
{
question:'J’ai faim. Je veux……………..',
choice1: 'dormir',
choice2: 'parler',
choice3: 'manger',
choice4: 'courir',
answer: 
},
{
question:'Le cocotier est ………….',
choice1: 'un arbre',
choice2: 'un animal',
choice3: 'un insecte',
choice4: 'un fruit',
answer: 
},
{
question:'Le professeur corrige les',
choice1: 'classes',
choice2: 'tableaux',
choice3: 'devoirs',
choice4: 'bancs',
answer: 
},
{
question:'Le ………….. se trouve dans l’eau.',
choice1: 'mouton',
choice2: 'poisson',
choice3: 'chat',
choice4: 'chien',
answer: 
},
{
question:'L’oranges est …………',
choice1: 'un bâton',
choice2: 'une poupée',
choice3: 'un journal',
choice4: 'un fruit',
answer: 
},
{
question:'Les élèves entrent ……….classe.',
choice1: 'au',
choice2: 'à',
choice3: 'en',
choice4: 'pour',
answer: 
},
{
question:'Le livre est …………… la table.',
choice1: 'dans',
choice2: 'sur',
choice3: 'à',
choice4: 'sans',
answer: 
},
{
question:'Le voleur passe ……… la fenêtre.',
choice1: 'sous',
choice2: 'sans',
choice3: 'dans',
choice4: 'par',
answer: 
},
{
question:'Cette dame porte des lunettes ……….bien voir.',
choice1: 'de',
choice2: 'pour',
choice3: 'en',
choice4: 'par',
answer: 
},
{
question:'L’enfant marché ………….. sa mère.',
choice1: 'devant',
choice2: 'pour',
choice3: 'sous',
choice4: 'sur',
answer: 
},
{
question:'Ils vont…………… Lomé en autocar',
choice1: 'sur',
choice2: 'au',
choice3: 'à',
choice4: 'du',
answer: 
},
{
question:'Qui est …………… la porte ?',
choice1: 'sur',
choice2: 'derrière',
choice3: 'sous',
choice4: 'vers',
answer: 
},
{
question:'Kofi va ………… France',
choice1: 'de',
choice2: 'vers',
choice3: 'en',
choice4: 'à',
answer: 
},
{
question:'Le chat …………..sur le tit',
choice1: 'dort',
choice2: 'va',
choice3: 'regarde',
choice4: 'écrit',
answer: 
},
{
question:'Maman donne des bonbons ………. enfants.',
choice1: 'des',
choice2: 'pour',
choice3: 'au',
choice4: 'aux',
answer: 
},
{
	question: 'LA MECHANTE FILLE\n\n Quand est-ce que tout le monde dort ?',
choice1: 'Le matin',
choice2: 'A midi',
choice3: 'L’après –midi',
choice4: 'A minuit',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Où est Ali ? Il est …………….',
choice1: 'dans la maison',
choice2: 'avec Rama',
choice3: 'dans le jardin',
choice4: 'au marché',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Qui chantent dans le jardin ?',
choice1: 'Les oiseaux',
choice2: 'Rama et Ali',
choice3: 'Ali et sa sœur',
choice4: 'Les serpent-poupees',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Dans le jardin, Rama voit……………….',
choice1: 'son frère',
choice2: 'le livre',
choice3: 'tout le monde',
choice4: 'sa sœur',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Rama vient ……………….',
choice1: 'de la maison',
choice2: 'du jardin',
choice3: 'de la salle',
choice4: 'du marché',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Où se cache Rama ? Elle se cache……………..',
choice1: 'devant l’arbre',
choice2: 'derrière l’arbre',
choice3: 'derrière Ali',
choice4: 'devant le jardin',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Qui met le serpent poupee ?',
choice1: 'Ali',
choice2: 'Personne',
choice3: 'Rama',
choice4: 'La famille',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Rama met le serpent-poupee…………….',
choice1: 'dans la poche',
choice2: 'aux pieds d’Ali',
choice3: 'sur la tête d’Ali',
choice4: 'dans la chemise',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Ali court vers………….',
choice1: 'le jardin',
choice2: 'le marché',
choice3: 'la maison',
choice4: 'l’arbre',
answer: 
},
{
question: 'LA MECHANTE FILLE\n\n Que fait Rama finalement ?',
choice1: 'Elle rit et appelle son frère',
choice2: 'Elle crie et court vers son frère',
choice3: 'Elle rit et regarde son frère.',
choice4: 'Elle crie et appelle son frère.',
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

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
question: 'Tout les élèves ………pendant la récréation.',

choice1: 'dort',
choice2: 'dorment',
choice3: 'dormez',
choice4: 'dors',
answer: 2,
},
{
question: 'Kofi, va chercher …………………..chaise !',

choice1: 'un',
choice2: 'le',
choice3: 'de',
choice4: 'une',
answer: 4,
},
{
question: 'Les filles mangent ……………………..pain.',

choice1: 'de',
choice2: 'la',
choice3: 'du',
choice4: 'une',
answer: 3,
},
{
question: 'Ama écoute attentivement ………………leçon.',

choice1: 'la',
choice2: 'au',
choice3: 'à la',
choice4: 'de la',
answer: 1, 
},
{
question: '– Cet homme vend des chemises et des robes l est ……………',

choice1: 'maçon',
choice2: 'pêcheur',
choice3: 'tailleur',
choice4: 'commerçant',
answer: 3,
},
{
question: 'Quel âge as-tu ?',

choice1: 'J’ai froid',
choice2: 'Je vais bien',
choice3: 'J’ai dix ans',
choice4: 'Je mange bien',
answer: 3,
},
{ 

question: 'J’ai tellement faim. Je veux …………..',

choice1: 'parler',
choice2: 'manger',
choice3: 'courir',
choice4: 'dormir',
answer: 2,
},
{
question: '………….allons au champ après les cours.',

choice1: 'Vous',
choice2: 'Elles',
choice3: 'Ils',
choice4: 'Nous',
answer: 4,
},
{
question: 'Les professeurs corrigent les ……………..des élèves.',

choice1: 'classes',
choice2: 'devoirs',
choice3: 'bancs',
choice4: 'tableaux',
answer: 2,
},
{
question: 'Maintenant, nous allons ……………classe.',

choice1: 'à',
choice2: 'en',
choice3: 'sans',
choice4: 'dans',
answer: 2,
},
{

question: 'Le manguier et le cocotier sont des …………….',
choice1: 'repas',
choice2: 'fruits',
choice3: 'arbres',
choice4: 'boissons',
answer: 3,
},
{ 
question: 'Kofi est malade ; il va acheter des ……………..',
choice1: 'medicaments',
choice2: 'gateaux',
choice3: 'biscuits',
choice4: 'bonbons',
answer: 1, 
},
{ 
question: 'Mon père est …………. ; il a un grand champ de maïs.',
choice1: 'pecheur',
choice2: 'coiffeur',
choice3: 'vendeur',
choice4: 'cultivateur',
answer: 4,
},
{ 
question: 'Le ………………vit dans l’eau.',
choice1: 'chat',
choice2: 'chien',
choice3: 'mouton',
choice4: 'poisson',
answer: 4,
},
{ 
question: 'Aujourd’hui c’est samedi ; demain sera ……………',
choice1: 'lundi',
choice2: 'mardi',
choice3: 'vendredi',
choice4: 'dimanche',
answer: 4,
},
{ 
question: 'Viens me …………..bonjour demain matin.',
choice1: 'voir',
choice2: 'dire',
choice3: 'parler',
choice4: 'saluer',
answer: 2,
},
{ 
question: 'Le bébé pleure …………..qu’il est malade.',
choice1: 'si',
choice2: 'donc',
choice3: 'parce',
choice4: 'quoi',
answer: 3,
},
{ 
question: 'Je prends le petit déjeuner chaque',
choice1: 'matin',
choice2: 'midi',
choice3: 'soir',
choice4: 'nuit',
answer: 1,
},
{ 
question: 'Le français est plus facile ………………..les mathématiques',
choice1: 'qui',
choice2: 'que',
choice3: 'quand',
choice4: 'comment',
answer: 2,
},
{ 
question: 'Ama a ………………………. ; elle veut de l’eau',
choice1: 'faim',
choice2: 'froid',
choice3: 'soif',
choice4: 'sommeil',
answer: 3,
},
{ 
	question: 'Un Soir au Cinéma\n\n La famille va au cinéma ……………..',

choice1: 'tous les jours',
choice2: 'tous les soirs',
choice3: 'une fois par mois',
choice4: 'une fois par semaine',
answer: 4,
},
{ 

question: 'Un Soir au Cinéma\n\n Le jour en question, la famille va au cinéma sans …………….',

choice1: 'Adzo',
choice2: 'Kwami',
choice3: 'le père',
choice4: 'la femme',
answer: 1,
},
{ 

question: 'Un Soir au Cinéma\n\n Le jour en question, la famille va au cinéma sans …………….',

choice1: 'Adzo',
choice2: 'Kwami',
choice3: 'le père',
choice4: 'la femme',
answer: 1,
},
{ 

question: 'Un Soir au Cinéma\n\n Qu’est-ce que Kwami porte pour aller au cinéma ?',

choice1: 'De beaux vêtements',
choice2: 'De nouveaux vêtements',
choice3: 'Des vêtements propres',
choice4: 'Des vêtements mouillés',
answer: 1,
},
{ 

question: '– Quand est-ce que les membres de la famille arrivent au cinéma ? Un Soir au Cinéma\n\n arrivent ………….',

choice1: 'tard',
choice2: 'le matin',
choice3: 'à l’heure',
choice4: 'l’après –midi',
answer: 4,
},
{ 

question: 'Un Soir au Cinéma\n\n La famille achète des billets pour ……………',

choice1: 'porter de jolis habits',
choice2: 'rester à la maison',
choice3: 'préparer l’examen',
choice4: 'entrer dans la salle',
answer: 4,
},
{ 

question: 'Un Soir au Cinéma\n\n Dans la salle du cinéma',

choice1: 'il n’y a personne',
choice2: 'il y a quelques gens',
choice3: 'il y a une personne',
choice4: 'il y a plusieurs gens',
answer: 4,
},
{ 

question: 'Un Soir au Cinéma\n\n La femme devant le narrateur à beaucoup de …………',

choice1: 'robes',
choice2: 'cheveux',
choice3: 'chapeaux',
choice4: 'foulards',
answer: 2, 
},
{
question: 'Un Soir au Cinéma\n\n Pourquoi le narrateur est triste ?',

choice1: 'Le film ne commence pas',
choice2: 'Il ne peut pas voir le film',
choice3: 'La femme est très belle pour lui',
choice4: 'Beaucoup de gens sont devant lui.',
answer: 2,
},
{
question: 'Un Soir au Cinéma\n\n – Qu’est-ce que Papa dit à la femme ? lui dit ……………..son chapeau',

choice1: 'de porter',
choice2: 'd’acheter',
choice3: 'de chercher',
choice4: 'd’enlever',
answer: 4,
},
{
	question: 'A la Bibliothèque\n\n La bibliothèque centrale – 31 – entourée du parc public et le grand marché, Makola. ',
choice1: 'a',
choice2: 'as',
choice3: 'est',
choice4: 'avez',
answer: 3, 
},
{
question: 'A la Bibliothèque\n\n Le parc c’est l’endroit – 32 – les enfants passent – __ – temps à jouer.',
choice1: 'où',
choice2: 'que',
choice3: 'qui',
choice4: 'dont',
answer: 1,
},
{
question: 'A la Bibliothèque\n\n Le parc c’est l’endroit – __ – les enfants passent – 33 – temps à jouer.',
choice1: 'son',
choice2: 'ses',
choice3: 'leur',
choice4: 'leurs',
answer: 3,
},
{
question: 'A la Bibliothèque\n\n – 34 – marché Makola, on peut acheter beaucoup – __ – choses : chaussures, vêtements, livres, etc. ',
choice1: 'A',
choice2: 'Au',
choice3: 'en',
choice4: 'Sur',
answer: 2,
},
{
question: 'A la Bibliothèque\n\n – __ – marché Makola, on peut acheter beaucoup – 35 – choses : chaussures, vêtements, livres, etc. ',
choice1: 'de',
choice2: 'du',
choice3: 'des',
choice4: 'de la',
answer: 1,
},
{
question: 'A la Bibliothèque\n\n J’aime aller à la bibliothèque – 36 – samedi avec mes camarades. Nous passons deux ',
choice1: 'l’',
choice2: 'la',
choice3: 'le',
choice4: 'les',
answer: 3,
},
{
question: 'A la Bibliothèque\n\n heures ou plus à – 37 – et à faire nos devoirs. ',
choice1: 'lis',
choice2: 'lit',
choice3: 'lire',
choice4: 'lisez',
answer: 3,
},
{
question: 'A la Bibliothèque\n\n Après le devoir, – 38 – empruntons des romans d’enfants.',
choice1: 'j’',
choice2: 'tu',
choice3: 'nous',
choice4: 'vous',
answer: 3,
},
{
question: 'A la Bibliothèque\n\n  – 39 – de rentrer chez nous, on s’amuse au parc public.',
choice1: 'pendant',
choice2: 'Devant',
choice3: 'Après',
choice4: 'Avant',
answer: 4,
},
{
question: 'A la Bibliothèque\n\n A la maison, nous lisons – 40 – romans que nous avons empruntés.',
choice1: 'ce',
choice2: 'ces',
choicce3: 'cet',
choice4: 'cette',
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

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
question: 'Kofi me donne beaucoup ……………oranges tous les jours.',

choice1: 'd’',
choice2: 'du',
choice3: 'des',
choice4: 'de l’',
answer: 1,
},
{
question: 'Jojo n’aime pas ……………bonbon.',

choice1: 'du',
choice2: 'de',
choice3: 'des',
choice4: 'de la',
answer: 2,
},
{
question: 'Papa reviendra de Tamale ……………….15 juin.',

choice1: 'à',
choice2: 'en',
choice3: 'sur',
choice4: 'le',
answer: 4,
},
{
question: 'Apaloo divise la canne à sucre ……………deux parties.',

choice1: 'dans',
choice2: 'par',
choice3: 'en',
choice4: 'à',
answer: 3,
},
{
question: 'Voici ma culotte, où est ……………….. ?',

choice1: 'la tienne',
choice2: 'le tien',
choice3: 'les tiens',
choice4: 'les tiennes',
answer: 1,
},
{
question: 'Je ne trouve pas mon chapeau ; où est-………….. ?',

choice1: 'elle',
choice2: 'le',
choice3: 'il',
choice4: 'la',
answer: 3,
},
{
question: 'Beaucoup d’étudiants …………..que l’examen est facile',

choice1: 'pense',
choice2: 'penses',
choice3: 'pensez',
choice4: 'pensent',
answer: 4,
},
{
question: 'Abiba n’a ……………….bonbon dans son sac',

choice1: 'rien',
choice2: 'plus',
choice3: 'pas',
choice4: 'aucun',
answer: 4,
},
{
question: 'Naaki a un frère mais moi j’en ……………trois.',

choice1: 'ont',
choice2: 'as',
choice3: 'ai',
choice4: 'a',
answer: 3,
},
{
question: 'Il y a des animaux sauvages dans la foret ……………. se trouve près du village.',

choice1: 'qui',
choice2: 'que',
choice3: 'dont',
choice4: 'laquelle',
answer: 1,
},
{
	question: 'Paul est Malade\n\n Paul Quansah est malade. Maman l’emmène _____11_____.',
choice1: 'à l’école',
choice2: 'à l’hôpital',
choice3: 'à l’hôtel',
choice4: 'à la plage',
answer: 2,
},
{
question: 'Paul est Malade\n\n Il y a beaucoup de monde dans la salle _____12______.',
choice1: 'D’attente',
choice2: 'De classe',
choice3: 'D’ecole',
choice4: 'De professeur',
answer: 1,
},
{
question: 'Paul est Malade\n\n Maman lui fait son carnet de santé au service de consultation. Vers dix _______13_____ , c’est le tour de Paul.',
choice1: 'temps',
choice2: 'saisons',
choice3: 'Heures',
choice4: 'Jours',
answer: 3,
},
{
question: 'Paul est Malade\n\n Paul et sa mère _____14____ dans le cabinet du médecin.',
choice1: 'entres',
choice2: 'Entrez',
choice3: 'entrons',
choice4: 'Entrent',
answer: 4,
},
{
question: 'Paul est Malade\n\n – ‘Ce n’____15____ pas grave,’ dit le _________,',
chioce1: 'est',
choice2: 'es',
choice3: 'êtes',
choice4: 'êtres', 
answer: 1,
},
{
question: 'Paul est Malade\n\n – ‘Ce n’________ pas grave,’ dit le _____16____, ',
choice1: 'professeur',
choice2: 'docteur',
choice3: 'maçon',
choice4: 'pêcheur',
answer: 2,
},
{
question: 'Paul est Malade\n\n Paul a une légère ______17_____ et il lui faut du __________.',
choice1: 'fièvre',
choice2: 'joujou',
choice3: 'faim',
choice4: 'Soif',
answer: 1,
},
{
question: 'Paul est Malade\n\n Paul a une légère ___________ et il lui faut du _____18_____.',
choice1: 'travail',
choice2: 'saut',
choice3: 'vent',
choice4: 'Repos',
answer: 4,
},
{
question: 'Paul est Malade\n\n Il faut aussi lui donner beaucoup de ____19____. ',
choice1: 'bijoux',
choice2: 'fruits',
choice3: 'Bonbons',
choice4: 'Devoirs',
answer: 2,
},
{
question: 'Paul est Malade\n\n Voici la liste des _______20_____ que vous devez acheter.',
choice1: 'médicaments',
choice2: 'marchandises',
choice3: 'médecins',                
choice4: 'maladies',
answer: 1,
},
{
	question: 'La Vie à Ladou\n\n Comme Accra, Ladou est située au bord de la ……………..',

choice1: 'lagune',
choice2: 'rivière',
choice3: 'forêt',
choice4: 'mer',
answer: 4,
},
{
 

question: 'La Vie à Ladou\n\n Ladou compte ………….habitants.',

choice1: '2000',
choice2: '5000',
choice3: '10000',
choice4: '20000',
answer: 4,
},
{
 

question: 'La Vie à Ladou\n\n Certains habitants de Ladou sont …………….',

choice1: 'pêcheurs et cultivateurs',
choice2: 'avocats et chasseurs',
choice3: 'commerçants et avocats',
choice4: 'mécaniciens et journalistes',
answer: 3,
},
{
 

question: 'La Vie à Ladou\n\n Les habitants vont au travail…………..',

choice1: 'très tôt le matin',
choice2: 'à l’heure',
choice3: 'dans l’après –midi',
choice4: 'le soir',
answer: 1,
},
{
 

question: 'La Vie à Ladou\n\n Selon le passage, où travaillent-ils, les mécaniciens ?',

choice1: 'Au marché',
choice2: 'A la mer',
choice3: 'A l’école',
choice4: 'Au garage',
answer: 4,
},
{
 

question: 'La Vie à Ladou\n\n Pourquoi est-ce que les habitants de Ladou sont pressés ? \n Ils vont ……………..',

choice1: 'au cinéma',
choice2: 'au travail',
choice3: 'au stade',
choice4: 'au jardin',
answer: 2,
},
{
 

question: 'La Vie à Ladou\n\n Quel type de bâtiments se trouve à Ladou ?',

choice1: 'Maison à étage',
choice2: 'Stade',
choice3: 'Jardin public',
choice4: 'Garage',
answer: 1,
},
{
 

question: 'La Vie à Ladou\n\n Où est-ce qu’on peut acheter des chaussures et des habits, selon le texte ?',

choice1: 'Dans une maison à étage',
choice2: 'Dans un site touristique',
choice3: 'Au stade',
choice4: 'Au supermarché',
answer: 4,
},
{
 

question: 'La Vie à Ladou\n\n Comment certains habitants passent-ils le week-end ?',

choice1: 'Ils achètent des marchandises',
choice2: 'Ils vont à la cour de justices',
choice3: 'Ils vont au cinéma',
choice4: 'Ils travaillent au bureau',
answer: 3,
},
{
 

question: 'La Vie à Ladou\n\n Selon le passage, les habitants……..',

choice1: 'aiment vivre à Ladou',
choice2: 'détestent la vie à Ladou',
choice3: 'n’aiment pas travailler',
choice4: 'ne vont pas en voiture',
answer: 1,
},
{
	question: ' Chaque matin, pour aller à l’école, l’élève met ses livres dans son ……….',
choice1: 'Banc',
choice2: 'panier',
choice3: 'à portefeuille',
choice4: 'cartable',
answer: 4,
},
{
question: ' Aujourd’hui, c’est lundi ; demain ce sera………….',
choice1: 'dimanche',
choice2: 'mardi',
choice3: 'jeudi',
choice4: 'samedi',
answer: 2,
},
{
question: ' Je vais boire de l’eau parce que j’ai……………….',
choice1: 'froid',
choice2: 'soif',
choice3: 'peur',
choice4: 'sommieil',
answer: 2,
},
{
question: ' Nous allons au …………………pour voir un match de football entre le Ghana et le Togo',
choice1: 'camp',
choice2: 'champ',
choice3: 'port',
choice4: 'stade',
answer: 4,
},
{
question: ' Les professeurs se reposent …………….la récréation.',
choice1: 'quand',
choice2: 'pendant',
choice3: 'alors',
choice4: 'selon',
answer: 2,
},
{
question: ' Maman achète de la viande chez……………….',
choice1: 'Le boucher',
choice2: 'L’epicier',
choice3: 'Le boulanger',
choice4: 'le fleuriste',
answer: 1,
},
{
question: ' Nous avons cultivé beaucoup de ……………dans notre jardin',
choice1: 'livres',
choice2: 'cahiers',
choice3: 'chaussures',
choice4: 'mais',
answer: 4,
},
{
question: ' Le petit garçon met ses chaussures …………..le banc.',
choice1: 'depuis',
choice2: 'sans',
choice3: 'sur',
choice4: 'près',
answer: 3,
},
{
question: ' La femme danse parce qu’elle est ………………',
choice1: 'heureuse',
choice2: 'pressée',
choice3: 'occupée',
choice4: 'faible',
answer: 1,
},
{
question: ' Kojo marche lentement parce qu’il a mal au ……………………',
choice1: 'bras',
choice2: 'nez',
choice3: 'menton',
choice4: 'pied',
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

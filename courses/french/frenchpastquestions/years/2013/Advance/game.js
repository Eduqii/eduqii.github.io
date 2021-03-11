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
question: 'Le panier est …………………………..la table',

choice1: 'autour',
choice2: 'en',
choice3: 'près',
choice4: 'sur',
answer: 4,
},
{
question: 'Monsieur Kojo ………………………ouvert les boîtes',

choice1: 'a',
choice2: 'as',
choice3: 'es',
choice4: 'est',
answer: 1,
},
{ 

question: '……………………..légumes sont dans une assiette',

choice1: 'L’',
choice2: 'La',
choice3: 'Le',
choice4: 'Les',
answer: 4,
},
{
question: '– ………………………………va ton frère? \n – Il va bien',

choice1: 'Où',
choice2: 'Quand',
choice3: 'Comment',
choice4: 'Pourquoi',
answer: 3,
},
{ 

question: 'Il y a trop ………………………..mouches ici',

choice1: 'de',
choice2: 'de la',
choice3: 'des',
choice4: 'du',
answer: 1,
},
{
question: '……………………matière enseigne Monsieur Banford ?',

choice1: 'Quel',
choice2: 'Quelle',
choice3: 'Quelles',
choice4: 'Quels',
answer: 2,
},
{ 

question: '– …………………………..s’appelle cette rue ? \n Elle s’appelle ‘Black Stars street’',

choice1: 'Combien',
choice2: 'Comment',
choice3: 'Que',
choice4: 'Qui',
answer: 2,
},
{ 

question: 'Victor et Marie ont de …………………yeux',

choice1: 'beau',
choice2: 'beaux',
choice3: 'belle',
choice4: 'belles',
answer: 2,
},
{ 

question: 'Tu arrives trop tard ; le train ……………….de partir',

choice1: 'venez',
choice2: 'viennent',
choice3: 'viens',
choice4: 'vient',
answer: 4,
},
{
question: '10. Le jour de mon anniversaire, j’ai ………………..un repas spécial.',
choice1: 'préparé',
choice2: 'prépare',
choice3: 'préparée',
choice4: 'préparez',
answer: 1,
},
{
	question: 'Le cultivateur coupe les branches avec son…………………….',
choice1: 'Gâteau',                           
choice2: 'marteau',
choice3: 'Coupe-coupe',
choice4: 'Couteau',
answer: 3,
},
{
question: 'Rosie est très …………………… ; elle n’aime pas travailler',
choice1: 'curieuse',
choice2: 'lente',
choice3: 'paresseuese',
choice4: 'Timide',
answer: 3,
},
{
question: 'L’après –midi, Maman Téné se couche sur une ……………dans la cour.',
choice1: 'Boite',
choice2: 'natte',
choice3: 'pierre',
choice4: 'valise',
answer: 2,
},
{
question: 'Je vais chez ma ………………..pour me faire une jupe',
choice1: 'Boutiquière',
choice2: 'couturière',
choice3: 'cuisinière',
choice4: 'fermière',
answer: 2,
},
{
question: '…………………tu es fatigué, viens t’asseoir',
choice1: 'comme',
choice2: 'donc',
choice3: 'puis',
choice4: 'tel',
answer: 1,
},
{
question: 'Papa regarde la ………………….et il dit qu’il est déjà 7 heures.',
choice1: 'chaise',
choice2: 'chambre',
choice3: 'montre',
choice4: 'Table',
answer: 3,
},
{
question: 'Il fait chaud ici ; ouvrez les ………………….',
choice1: 'toilettes',
choice2: 'fenêtres',
choice3: 'sacs',
choice4: 'Serviettes',
answer: 2,
},
{
question: 'C’est le week-end ; nous allons à la plage pour ………………..',
choice1: 'cultiver',
choice2: 'nager',
choice3: 'travailler',
choice4: 'Voyager',
answer: 2,
},
{
question: 'Katou …………………. lentement parce qu’il a mal au genou',
choice1: 'chante',
choice2: 'mange',
choice3: 'Marche',
choice4: 'parle',
answer: 3,
},
{
question: 'Chez nous au village, toutes les feuilles sont ………… pendant la saison des pluies –',
choice1: 'Brunes',
choice2: 'Jeunes',
choice3: 'oranges',
choice4: 'Vertes',
answer: 4,
},
{
	question: 'Une visite à Papa\n\n Le père d’Akua habite à ……………………..',

choice1: 'la capitale',
choice2: 'Prampram',
choice3: 'Oguaa',
choice4: 'la gare',
answer: 3,
},
{
 

question: 'Une visite à Papa\n\n Le père d’Akua habite à ……………………..',
choice1: 'la capitale',
choice2: 'Prampram',
choice3: 'Oguaa',
choice4: 'la gare',
answer: 3,
},
{
 

question: 'Une visite à Papa\n\n – Qu’est-ce qu’Akua fait avant de rendre visite à son père ? \n – Elle envoie',

choice1: 'un message télégraphique',
choice2: 'un message téléphonique',
choice3: 'un messager',
choice4: 'une lettre',
answer: 2,
},
{
 

question: 'Une visite à Papa\n\n Quand est-ce qu’Akua se lève le jour de son voyage ?',

choice1: 'De bonne heure',
choice2: 'A l’après midi',
choice3: 'Tard dans la nuit',
choice4: 'Vers le soir',
answer: 1,
},
{
 

question: 'Une visite à Papa\n\n Akua voyage ……………………',

choice1: 'en train',
choice2: 'en voiture',
choice3: 'par avion',
choice4: 'par bateau',
answer: 2,
},
{
 

question: 'Une visite à Papa\n\n A la gare, on voit……………..Voitures',

choice1: 'quelques',
choice2: 'deux',
choice3: 'trois',
choice4: 'plusieurs',
answer: 4,
},
{
 

question: 'Une visite à Papa\n\n Qui conduit la voiture ?',

choice1: 'Akua',
choice2: 'Papa',
choice3: 'Le chauffeur',
choice4: 'Les voyageurs',
answer: 3,
},
{
 

question: 'Une visite à Papa\n\n Le voyage commence …………………',

choice1: 'après trois heures',
choice2: 'après quatre heures',
choice3: 'immédiatement',
choice4: 'plus tard',
answer: 3,
},
{
 

question: 'Une visite à Papa\n\n ‘Il est plein de joie.’ Cela veut dire que Papa est ………….',

choice1: 'confus',
choice2: 'content',
choice3: 'triste',
choice4: 'surpris',
answer: 2,
},
{
 

question: 'Une visite à Papa\n\n Papa remercie Akua parce qu’il ……………….',

choice1: 'achète des choses',
choice2: 'rend visite aux amis',
choice3: 'mange avec Akua',
choice4: 'reçoit un cadeau',
answer: 4,
},
{ 

question: 'Une visite à Papa\n\n Le dernier lieu de leur visite est …………………',

choice1: 'la gare',
choice2: 'la maison',
choice3: 'chez les amis',
choice4: 'les magasins',
answer: 4,
},
{
	question: 'Après les cours\n\n A deux heures de l’après –midi, tous les élèves – 31 – les salles de classe.',
choice1: 'quittent',
choice2: 'quittes',
choice3: 'quittez',
choice4: 'quittons',
answer: 1,
},
{
question: 'Après les cours\n\n  Ils disent ‘au revoir’ – 32 – professeurs et à leurs amis.',
choice1: 'à la ',
choice2: 'aux',
choice3: 'de',
choice4: 'des',
answer: 2,
},
{
question: 'Après les cours\n\n  Ils mettent les livres et les cahiers – 33 – leurs sacs.',
choice1: 'à',
choice2: 'dans',
choice3: 'en',
choice4: 'sur',
answer: 2,
},
{
question: 'Après les cours\n\n   Les fameux sacs sont toujours – 34 – et lourd.',
choice1: 'plein',
choice2: 'pleine',
choice3: 'pleines',
choice4: 'pleins',
answer: 4,
},
{
question: 'Après les cours\n\n    Pourquoi ces gros sacs ? C’est parce que les élèves veulent plaire à – 35 – parents. Les parents pensent ',
choice1: 'leur',
choice2: 'leurs',
choice3: 'ses',
choice4: 'son',
answer: 2,
},
{
question: 'Après les cours\n\n    que ce sont des élèves sérieux – 36 – ont de gros sacs – __ – ce n’est pas vrai.',
choice1: 'dont',
choice2: 'que',
choice3: 'qui',
choice4: 'où',
answer: 3,
},
{
question: 'Après les cours\n\n    que ce sont des élèves sérieux – __ – ont de gros sacs – 37 – ce n’est pas vrai.',
choice1: 'alors',
choice2: 'ainsi',
choice3: 'mais',
choice4: 'puis',
answer: 3,
},
{
question: 'Après les cours\n\n Frema est la plus sérieuse de la classe. Quand elle – 38 – ses camarades, les gros sacs au dos, ',
choice1: 'voient',
choice2: 'vois',
choice3: 'voit',
choice4: 'voyez',
answer: 3,
},
{
question: 'Après les cours\n\n très fatigués – 39 – route, elle décide de mettre quelques livres dans un placard à l’école.  ',
choice1: 'à', 
choice2: 'en',
choice3: 'de',
choice4: 'la',
answer: 2,
},
{
question: 'Après les cours\n\n Elle ferme le placard à clé avant de – 40 – chez elle. Son sac n’est jamais lourd.',
choice1: 'rentrer',
choice2: 'rentrez',
choice3: 'rentres',
choice4: 'rentre',
answer: 1,
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

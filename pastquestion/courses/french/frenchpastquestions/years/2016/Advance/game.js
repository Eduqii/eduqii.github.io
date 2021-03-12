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
question: 'L’intérieur de ……………….église est belle.',

choice1: 'ce',
choice2: 'cet',
choice3: 'ces',
choice4: 'cette',
answer: 4,

},
{ 

question: '……………………..pays est en Afrique de l’Ouest.',

choice1: 'Nos',
choice2: 'Notre',
choice3: 'Leurs',
choice4: 'Sa',
answer: 2,

},
{ 

question: 'Est-ce que tu …………….la vérité?',

choice1: 'dites',
choice2: 'dis',
choice3: 'dire',
choice4: 'dit',
answer: 2,

},
{  

question: 'Le professeur dit bonjour ……………..élèves quand il arrive en classe.',

choice1: 'a',
choice2: 'aux',
choice3: 'des',
choice4: 'les',
answer: 2,

},
{ 

question: '………………coûte ta jolie robe?',

choice1: 'Combien',
choice2: 'Comment',
choice3: 'Pourquoi',
choice4: 'Que',
answer: 1,

},
{
question: 'Joshua vient du Ghana; il est de la nationalité……………..',

choice1: 'ghana',
choice2: 'ghanéen',
choice3: 'ghanéenne',
choice4: 'ghanéens',
answer: 2,

},
{  

question: 'A l’âge de deux ans, …………..append à parler.',

choice1: 'nous',
choice2: 'on',
choice3: 'tu',
choice4: 'j’',
answer: 2,

},
{ 

question: 'La plupart ……………enfants aiment s’amuser.',

choice1: 'de',
choice2: 'd’',
choice3: 'du',
choice4: 'des',
answer: 4,

},
{ 

question: 'Abena se cache ……………….la porte.',

choice1: 'sur',
choice2: 'près',
choice3: 'derrière',
choice4: 'vers',
answer: 3,

},
{  

question: 'Mon pantalon est bleu mais ……………de Pauline est noir.',

choice1: 'celle',
choice2: 'celui',
choice3: 'celle-ci',
choice4: 'celui-ci',
answer: 2,

},
{ 
question: 'Aba n’a pas ………………..pour laver ses vêtements',
choice1: 'd’épong',
choice2: 'de savon',
choice3: 'de serviette',
choice4: 'd’huile',
answer: 2,

},
{ 
 

question: 'Le petit Kwame dit toujours la vérité; il est très …………………..',
choice1: 'honnête',
choice2: 'patient',
choice3: 'poli',
choice4: 'jovial',
answer: 1,

},
{  

question: 'Le français, les mathématiques et les sciences sont des ………… que nous enons à l’école.',
choice1: 'sujets ',
choice2: 'objets ',
choice3: 'jeux ',
choice4: 'matières',
answer: 4,

},
{ 
 

question: 'Ma petite sœur est ………………en anglais, elle a toujours de mauvais notes.',
choice1: 'faible ',
choice2: 'fière',
choice3: 'gentille',
choice4: 'paresseuse',
answer: 1,

},
{ 


question: 'Le bateau voyage sur ………………….',
choice1: 'l’air',
choice2: 'l’eau',
choice3: 'la route',
choice4: 'la terre',
answer: 2,

},
{ 
 

question: 'Kweku ne peut pas bien …………………; c’est pourquoi il prononce les mots ement.',
choice1: 'écrire ',
choice2: 'lire         ',
choice3: 'marcher',
choice4: 'travailler',
answer: 2,

},
{ 
 

question: 'Cet élève salue les grands et les petits; il est très ………………………',
choice1: 'courage',
choice2: 'joyeux',
choice3: 'heureux              ',
choice4: 'respectueux',
answer: 4,

},
{ 


question: 'Baba Ali aime …………………la pipe chaque soir.',
choice1: 'boire  ',
choice2: 'croire   ',
choice3: 'fumer',
choice4: 'manger',
answer: 3,

},
{ 


question: 'Maman va chez la ………………pour se laver les cheveux.',
choice1: 'coiffeu',
choice2: 'commerçante',
choice3: 'couturière          ',
choice4: 'cuisinière',
answer: 1,

},
{ 
 

question: 'Je suis heureux de vous …………………mon ami. Il s’appelle Sébastian.',
choice1: 'annonce',
choice2: 'déclarer',
choice3: 'nommer',
choice4: 'présenter',
answer: 4,

},
{ 
question: 'Qu’est-ce qui se passe en août ?',

choice1: 'Le train arrive à la gare.',
choice2: 'Les écoliers vont en vacances.',
choice3: 'Ahmed et son ami ferment les écoles.',
choice4: 'Le train de Huni-Valley va à Kumasi.',
answer: 2,
 },
 {
 

question: 'La destination des deux amis est …………',

choice1: 'Huni-Valley',
choice2: 'Kumasi',
choice3: 'Akwaaba',
choice4: 'Asafo',
answer: 1,
 },
{
question: 'Les deux amis ont l’intention de voyager par …………….',

choice1: 'la route',
choice2: 'l’air',
choice3: 'le chemin de fer',
choice4: 'l’eau',
answer: 3,
 },
 {
question: 'Selon le texte, le train partira dans …………..minutes.',

choice1: 'vingt',
choice2: 'trente',
choice3: 'quinze',
choice4: 'quarante',
answer: 3,
 },
 {

question: 'Pour assurer leurs places dans le train, ils ont acheté des …………',

choice1: 'billets',
choice2: 'boissons',
choice3: 'beignets',
choice4: 'poulets',
answer: 1,
 },
{
question: '– Pourquoi entrent-ils dans le restaurant ? \n our………………………………',

choice1: 'regarder le train',
choice2: 'manger quelque chose',
choice3: 'prendre le train',
choice4: 'acheter des billets',
answer: 2,
 },
 {

question: 'Ils n’entendent pas l’annonce du départ parce qu’ils……………..',

choice1: 'bavardent',
choice2: 'boivent',
choice3: 'dorment',
choice4: 'se lèvent',
answer: 1,
 },
 {
question: 'Qu’est-ce qu’ils prennent au restaurant ?',

choice1: 'Des gâteaux',
choice2: 'Du boisson',
choice3: 'Des beignets',
choice4: 'Du riz',
answer: 4,
 },
 {

question: '– Pourquoi ont-ils finalement décidé de prendre une voiture ?\n Parce que le train ………………',

choice1: 'est en panne',
choice2: 'est déjà parti',
choice3: 'n’est pas encore plein',
choice4: 'n’est pas encore arrive',
answer: 2,
 },
 {

question: 'A la fin du passage, les deux amis sont ……………',

choice1: 'contents',
choice2: 'déçus',
choice3: 'satisfaits',
choice4: 'malades',
answer: 2,
 },
 {

question: 'Un ___31___ homme a acheté une belle bicyclette rouge.',
choice1: 'vieil',
choice2: 'vieux',
choice3: 'vieille',
choice4: 'vieilles',
answer: 1, 
},
{
question: 'L’après-midi ___32___ même jour, ',
choice1: 'de',
choice2: 'du',
choice3: 'des',
choice4: 'de la',
answer: 2,
},
{
 question: 'il conduit ___33___ nouvelle bicyclette jusqu’',
choice1: 'sa',
choice2: 'son',
choice3: 'il',
choice4: 'lui',
answer: 1,
},
{
 question: 'il conduit ______ nouvelle bicyclette jusqu’ ___34___ ville ',
choice1: 'au',
choice2: 'aux',
choice3: 'en',
choice4: 'à la',
answer: 4,
},
{
 question: 'il conduit ______ nouvelle bicyclette jusqu’ _____ ville___35___. ',
choice1: 'voisin',
choice2: 'voisine',
choice3: 'voisines',
choice4: 'voisins',
answer: 2,
},
{
 question: 'Il aime ___36___ vite. ',
choice1: 'va',
choice2: 'vas',
choice3: 'allez',
choice4: 'aller',
answer: 4,
},
{
question: 'Par conséquent, il est fâché ___37___ monsieur Karim qui traverse ',
choice1: 'a',
choice2: 'avec',
choice3: 'contre',
choice4: 'pour',
answer: 3,
},
{
question: '___38___ la grande rue de la ville.',
choice1: 'lentement',
choice2: 'lentes',
choice3: 'lente',
choice4: 'lent',
answer: 1,
},
{
question: '– Vous marchez comme si la rue est à ¬¬¬___39___ ; crie le cycliste.',
choice1: 'vous',
choice2: 'toi',
choice3: 'eux',
choice4: 'moi',
answer: 1,
},
{
question: '– Et vous ? Répond monsieur Karim, vous ___40___ comme si vous avez acheté cette rue.',
choice1: 'conduis',
choice2: 'conduit',
choice3: 'conduire',
choice4: 'conduisez',
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

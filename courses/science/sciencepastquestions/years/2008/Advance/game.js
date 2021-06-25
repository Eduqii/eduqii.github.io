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
		question: 'A metre rule can be used for measuring the',
choice1: 'volume of a liquid',
choice2: 'area of a ball',
choice3: 'length of a table',
choice4: 'diameter of a wire',
answer: 3,
},
{
question: 'Heat travels through vacuum by',
choice1: 'conduction ',
choice2: 'convection ',
choice3: 'radiation',
choice4: 'convection and radiation',
answer: 3,
},
{
question: 'A mirror is used to direct sunlight onto the wall of a classroom by',
choice1: 'dispersion ',
choice2: 'refraction ',
choice3: 'reflection ',
choice4: 'radiation',
answer: 3,
},
{
question: 'Which of the following energy changes takes place in ringing bell?',
choice1: 'Potential to kinetic',
choice2: 'Potential to sound',
choice3: 'Mechanical to sound',
choice4: 'Sound to light',
answer: 3,
},
{
question: 'A fuse is connected in an electric circuit to',
choice1: 'prevent electric shock',
choice2: 'increase the current',
choice3: 'prevent current from increasing',
choice4: 'increase the heat generated',
answer: 3,
},
{
question: 'Which of these objects is a magnetic substance?',
choice1: 'Aluminium',
choice2: 'Brass',
choice3: 'Copper',
choice4: 'Iron',
answer: 4,
},
{
question: 'Which of the following bodies are natural sources of light?\n' +
'I. Moon' +
'II. Sun' +
'III. Firefly',
choice1: 'I and II only ',
choice2: 'I and III only ',
choice3: 'II and III only',
choice4: 'I,II and III only',
answer: 3,
},
{
question: 'Which of the following statements describes the nature of light?',
choice1: 'It passes through all objects',
choice2: 'It is absorbed at a polished surface',
choice3: 'It travels in a straight line',
choice4: 'It is always reflected in a medium',
answer: 3,
},
{
question: 'Metals are able to conduct electricity because they possess',
choice1: 'free electrons',
choice2: 'neutrons',
choice3: 'atoms',
choice4: 'free protons',
answer: 1,
},
{
question: 'Beriberi is caused by deficiency of vitamin',
choice1: 'A ',
choice2: 'B ',
choice3: 'E ',
choice4: 'K',
answer: 2,
},
{
question: 'Which of the following fruits is adapted for dispersal by air?',
choice1: 'Succulent fruit',
choice2: 'Brightly coloured fruit',
choice3: 'Sticky fruit',
choice4: 'Hairy fruit',
answer: 4,
},
{
question: 'The food substance needed for growth and repair of tissues is',
choice1: 'carbohydrate',
choice2: 'oil',
choice3: 'protein',
choice4: 'vitamin',
answer: 3,
},
{
question: 'The type of teeth used for biting and cutting are the',
choice1: 'canines',
choice2: 'incisors',
choice3: 'molars',
choice4: 'premolars',
answer: 2,
},
{
question: 'Water is absorbed by roots in plants and transported to the leaves through the',
choice1: 'chlorophyll',
choice2: 'phloem ',
choice3: 'stomata ',
choice4: 'xylem',
answer: 4,
},
{
question: 'The outer ear consists of the ',
choice1: 'ossicles and eardrum ',
choice2: 'cochlea and pinna',
choice3: 'ossicles and cochlea',
choice4: 'pinna and eardrum',
answer: 4,
},
{
question: 'Changes in pressure in the middle ear is regulated by the',
choice1: 'ampullae',
choice2: 'cochlea',
choice3: 'Eustachian tube',
choice4: 'ear drum',
answer: 3,
},
{
question: 'The amount of light that enters the eye is reduced by the size of the',
choice1: 'lens',
choice2: 'iris',
choice3: 'pupil',
choice4: 'retina',
answer: 3,
},
{
question: 'In humans, features of parents are passed on to offspring through',
choice1: 'breastfeeding ',
choice2: 'reproduction ',
choice3: 'good training',
choice4: 'sharing the samethings',
answer: 2, 
},
{
question: 'The taste of water changes when it is boiled because',
choice1: 'heat is absorbed during boiling',
choice2: 'evaporation takes place during boiling',
choice3: 'air is lost during boiling',
choice4: 'steam is produced during boiling',
answer: 3,
},
{
question: 'Arrange the following types of water in order of increasing hardness\n' +
'I. Tap water' +
'II. Seawater' +
'III. Distilled water' +
'IV. Rain water',
choice1: 'IV,III,II,I ',
choice2: 'III, IV, I, II ',
choice3: 'II,I,IV,III ',
choice4: 'I,II,III,IV',
answer: 2,
},
{
question: 'Which of these methods is used to separate insoluble solids from liquids?',
choice1: 'Distillation ',
choice2: 'Evaporation ',
choice3: 'Filtration',
choice4: 'Winnowing',
answer: 3,
},
{
question: 'A uniform mixture of two or more metals is called',
choice1: 'an alloy',
choice2: 'a compound',
choice3: 'a solvent',
choice4: 'a suspension',
answer: 1,
},
{
question: 'Which of the following liquids cannot dissolve an oil paint?',
choice1: 'Kerosene',
choice2: 'Petrol',
choice3: 'Turpentine',
choice4: 'Water',
answer: 4,
},
{
question: 'An atom which contains more electrons than protons becomes a',
choice1: 'positive ion ',
choice2: 'negative ion ',
choice3: 'neutral atom',
choice4: 'binary compound',
answer: 2,
},
{
question: 'The following substances are mixtures except',
choice1: 'air',
choice2: 'carbon dioxide',
choice3: 'salt solution',
choice4: 'smoke',
answer: 2,
},
{
question: 'The fish is protected from injury by the',
choice1: 'fins',
choice2: 'gills',
choice3: 'operculum',
choice4: 'scales',
answer: 4,
},
{
question: 'Which of the following substances is an air pollutant?',
choice1: 'Water vapour',
choice2: 'Oxygen',
choice3: 'Nitrogen',
choice4: 'Hydrogen sulphide',
answer: 4,
},
{
question: 'Bathing in lakes and slow moving streams can lead to one getting',
choice1: 'bilharziasis',
choice2: 'cholera',
choice3: 'dysentery',
choice4: 'river blindness',
answer: 1,
},
{
question: 'Some plants shed their leaves during the dry season to prevent',
choice1: 'water loss',
choice2: 'heat loss',
choice3: 'catching fire',
choice4: 'losing nutrients',
answer: 1,
},
{
question: 'Caterpillar is an example of',
choice1: 'an animal parasite that feeds on plant',
choice2: 'a plant parasite that lives on an animal host ',
choice3: 'an animal parasite that feeds on animal host ',
choice4: 'a plant parasite that grows on plant host',
answer: 1,
},
{
question: 'How long does it take the moon to go completely round the earth?',
choice1: '1 day',
choice2: '28 days ',
choice3: '30 days ',
choice4: '365 days',
answer: 2,
},
{
question: 'An unripe orange is said to be acidic because it',
choice1: 'has low sugar content',
choice2: 'has bitter taste',
choice3: 'turns red litmus paper blue',
choice4: 'turns blue litmus paper red',
answer: 4,
},
{
question: 'The chemical symbol of potassiumis',
choice1: 'K ',
choice2: 'N ',
choice3: 'P ',
choice4: 'S',
answer: 1,
},
{
question: 'The property of a metal that makes it possible for it to be drawn into a wire is called',
choice1: 'conductivity',
choice2: 'ductility',
choice3: 'malleability',
choice4: 'resistivity',
answer: 2, 
},
{
question: 'Which of the following methods of preserving food make use of heat energy?\n' +

'I. Drying II. Frying III. Salting IV. Canning',
choice1: 'I and II ',
choice2: 'I and IV ',
choice3: 'III and IV',
choice4: 'I,II and III',
answer: 1,
},
{
question: 'Weight is an example of',
choice1: 'energy ',
choice2: 'force ',
choice3: 'work ',
choice4: 'power',
answer: 2,
},
{
question: 'Blood is prevented from flowing back into the veins by the',
choice1: 'arteries',
choice2: 'capillaries',
choice3: 'heart',
choice4: 'valves',
answer: 4,
},
{
question: 'The force that binds molecules of the same substance together is called',
choice1: 'adhesion',
choice2: 'cohesion',
choice3: 'capillary action',
choice4: 'surface tension',
answer: 2,
},
{
question: 'Soluble digested food substances enter the blood of the human body by a process called',
choice1: 'absorption',
choice2: 'egestion ',
choice3: 'excretion ',
choice4: 'ingestion',
answer: 1,
},
{
question: 'Capillary action is applied in the following activities except',
choice1: 'blotting an ink with a blotting paper',
choice2: 'absorption of water with a towel',
choice3: 'rising of water in a very narrow glass tube',
choice4: 'sticking of water droplets on the surface of a glasstube',
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

		return window.location.assign('end.html') 
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

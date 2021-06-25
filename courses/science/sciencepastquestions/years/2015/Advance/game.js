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
		question: 'Brass is an alloy of',
choice1: 'iron and carbon',
choice2: 'zinc and copper',
choice3: 'iron and copper',
choice4: 'copper and tin',
answer: 2,
},
{
question: 'An example of inorganic fertilizer is',
choice1: 'ammonium nitrate',
choice2: 'cow dung',
choice3: 'farmyard manure',
choice4: 'poultry dropping',
answer: 1,
},
{
question: 'The component of the human blood which transports oxygen to all parts of the body is',
choice1: 'plasma',
choice2: 'platelets',
choice3: 'red blood cells',
choice4: 'white blood cells',
answer: 3,
},
{
question: 'The importance of the fuse in an electrical circuit is to',
choice1: 'regulate the voltage',
choice2: 'prevent damage to electrical appliances',
choice3: 'alter the flow of current in the circuit',
choice4: 'minimize the use of current',
answer: 2,
},
{
question: 'Which of the following step(s) is/are required in the scientific method?\n' +
'I.    Formulation of hypothesis\n' +
'II.    Identification of the problem\n' +
'III.    Experimentation',
choice1: 'I only',
choice2: 'II only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 4,
},
{
question: 'Which of the following food items produces amino acids as end product of digestion?',
choice1: 'Cabbage',
choice2: 'Fish',
choice3: 'Margarine',
choice4: 'Rice',
answer: 2,
},
{
question: 'The process of increasing the strength of a signal using a transistor is known as',
choice1: 'amplification',
choice2: 'biasing',
choice3: 'doping',
choice4: 'switching',
answer: 1,
},
{
question: 'The physical arrangement of soil particles into aggregates is termed',
choice1: 'soil porosity',
choice2: 'soil profile',
choice3: 'soil structure',
choice4: 'soil texture',
answer: 2,
},
{
question: 'The solvent which is most effective in washing bitumen from the hand is',
choice1: 'acid',
choice2: 'alcohol',
choice3: 'kerosene',
choice4: 'water',
answer: 3,
},
{
question: 'A piece of stone could be classified as an opaque material because it',
choice1: 'absorbs all the light incident on it',
choice2: 'does not absorb light incident on it',
choice3: 'allows all the light incident on it to pass through it',
choice4: 'does not allow light incident on it to pass through it',
answer: 4,
},
{
question: 'Fish swims in water with little resistance because it possesses',
choice1: 'gills',
choice2: 'scales',
choice3: 'caudal fins',
choice4: 'streamlined body',
answer: 4,
},
{
question: 'Which of the following conditions promote(s) rusting of iron?\n' +
'I.    Air\n' +
'II.    Moisture\n' +
'III.    Oil',
choice1: 'I only',
choice2: 'II only',
choice3: 'I and II only',
choice4: 'II and III only',
answer: 3,
},
{
question: 'The change in the volume of water when a piece of stone is dropped into it is equal to the',
choice1: 'density of the stone',
choice2: 'mass of the stone',
choice3: 'volume of the stone',
choice4: 'weight of the stone',
answer: 3,
},
{
question: 'The second stage in the life cycle of a mosquito is the',
choice1: 'egg',
choice2: 'imago',
choice3: 'larva',
choice4: 'pupa',
answer: 3,
},
{
question: 'Which of the following objects could be attracted by a magnet?',
choice1: 'Copper chain',
choice2: 'Gold chain',
choice3: 'Steel blade',
choice4: 'Aluminium spoon',
answer: 3,
},
{
question: 'The knowledge of soil texture is important because it',
choice1: 'influences plant population',
choice2: 'determines the planting distance',
choice3: 'determines the type of crop to be grown',
choice4: 'influences the method of pest control',
answer: 3,
},
{
question: 'How many atoms are present in CaCl2?',
choice1: '2',
choice2: '3',
choice3: '4',
choice4: '5',
answer: 2,
},
{
question: 'The transfer of heat from the bottom to the top of a beaker containing water is by',
choice1: 'absorption',
choice2: 'conduction',
choice3: 'convection',
choice4: 'radiation',
answer: 3,
},
{
question: 'An example of a chemical compound is',
choice1: 'aluminium',
choice2: 'ammonia',
choice3: 'oxygen',
choice4: 'phosphorus',
answer: 2,
},
{
question: 'The type of the human teeth used for biting food substances is',
choice1: 'canines',
choice2: 'incisors',
choice3: 'molars',
choice4: 'premolars',
answer: 2,
},
{
question: 'Which of the following heavenly bodies is a star?',
choice1: 'Jupiter',
choice2: 'Moon',
choice3: 'Sun',
choice4: 'Venus',
answer: 3,
},
{
question: 'Which of the following organisms is an endoparasite?',
choice1: 'Fleas',
choice2: 'Louse',
choice3: 'Tapeworm',
choice4: 'Tick',
answer: 3,
},
{
question: 'The part of the plant where pollination occurs is the',
choice1: 'flowers',
choice2: 'leaves',
choice3: 'roots',
choice4: 'stems',
answer: 1,
},
{
question: 'Which of the following substances is capable of neutralizing an acid?',
choice1: 'Vinegar',
choice2: 'Water',
choice3: 'Sodium chloride',
choice4: 'Sodium hydroxide',
answer: 4,
},
{
question: 'Droplet infection is the method by which',
choice1: 'diseases are transmitted from animals to plants',
choice2: 'infected animals are processed',
choice3: 'human beings protect themselves from diseases',
choice4: 'diseases are spread through the air',
answer: 4,
},
{
question: 'An example of a derived quantity is',
choice1: 'length',
choice2: 'mass',
choice3: 'time',
choice4: 'velocity',
answer: 4,
},
{
question: 'A structure in the human reproductive system which stores sperms temporarily is the',
choice1: 'epididymis',
choice2: 'penis',
choice3: 'scrotum',
choice4: 'vulva',
answer: 1,
},
{
question: 'Which of the following statements about diffusion is/are correct?\n' +
'I.    It involves the movement of water molecules only\n' +
'II.    It occurs in both gases and liquids\n' +
'III.    It involves a semi-permeable membrane',
choice1: 'I only',
choice2: 'II only',
choice3: 'I and II only',
choice4: 'I, II and III',
answer: 2,
},
{
question: 'A farming system which requires at least three years programme is',
choice1: 'mixed cropping',
choice2: 'crop rotation',
choice3: 'organic farming',
choice4: 'mixed farming',
answer: 2,
},
{
question: 'The component of a living cell responsible for respiration is',
choice1: 'chloroplast',
choice2: 'mitochondria',
choice3: 'nucleus',
choice4: 'vacuole',
answer: 2,
},
{
question: 'Which of the following statements about a second class lever is correct? The',
choice1: 'pivot is between the load and the effort',
choice2: 'pivot and the load are at the same position',
choice3: 'load is between the effort and the pivot',
choice4: 'effort is  between the load and the pivot',
answer: 3,
},
{
question: 'One advantage of soft water over hard water is that soft water',
choice1: 'has a pleasant taste',
choice2: 'can prevent heart diseases',
choice3: 'does not waste soap',
choice4: 'forms scales in kettles',
answer: 3,
},
{
question: 'The gas produced when glucose is oxidized during aerobic respiration is',
choice1: 'hydrogen',
choice2: 'nitrogen',
choice3: 'oxygen',
choice4: 'carbon dioxide',
answer: 4,
},
{
question: 'The systematic name for N2O is',
choice1: 'nitrogen (I) oxide',
choice2: 'nitrogen (II) oxide',
choice3: 'nitrogen (III) oxide',
choice4: 'nitrogen (IV) oxide',
answer: 4,
},
{
question: 'A husbandry practice which involves the removal of unwanted plant parts is known as',
choice1: 'mulching',
choice2: 'pruning',
choice3: 'thinning',
choice4: 'pricking out',
answer: 2,
},
{
question: 'The number of p-n junctions in a transistor is',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
answer: 2,
},
{
question: 'Fruits dispersed by wind',
choice1: 'have hairs',
choice2: 'are sticky',
choice3: 'are succulent',
choice4: 'have hooks',
answer: 1,
},
{
question: 'Substances that burn living tissues when they come into contact with these tissues are considered',
choice1: 'corrosive',
choice2: 'flammable',
choice3: 'irritant',
choice4: 'toxic',
answer: 1,
},
{
question: 'The function of the platelets in the circulatory system of humans is to',
choice1: 'transport oxygen',
choice2: 'transport carbon dioxide',
choice3: 'clot the blood',
choice4: 'defend the body',
answer: 3,
},
{
question: 'Energy is the',
choice1: 'force to move an object',
choice2: 'weight to do work',
choice3: 'ability to do work',
choice4: 'power to carry an object',
answer: 3,
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

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
		question: 'Hydrogen is represented by the chemical symbol H2. This symbol represents',
choice1: 'two molecules of hydrogen',
choice2: 'two atoms of hydrogen',
choice3: 'two elements of hydrogen',
choice4: 'two ions of hydrogen',
answer: 2,
},
{
question: 'A metal expands when there is',
choice1: 'an increase in heat energy',
choice2: 'an increase in number of electrons',
choice3: 'a decrease in potential energy',
choice4: 'a decrease in distance between atoms',
answer: 1,
},
{
question: ' A safety device which opens an electrical circuit to prevent too much current from passing through the circuit is', 
choice1: 'earth wire',
choice2: 'lightning conductor',
choice3: 'fuse',
choice4: 'switch',
answer: 3, 
},
{
question: 'An object is placed 20cm in front of a plane mirror. The distance between the object and the image is',
choice1: '20 cm ',
choice2: '40 cm ',
choice3: '60 cm ',
choice4: '80 cm',
answer: 2,
},
{
question: 'In which of the following circuit diagrams below will the bulb light?',
choice1: 'A',
choice2: 'B',
choice3: 'C',
choice4: 'D',
answer: 2,
},
{
question: 'The source of all forms of energy can be traced to',
choice1: 'clouds',
choice2: 'earth quakes',
choice3: 'tides',
choice4: 'sunlight',
answer: 4,
},
{
question: 'When a mango is falling from a tree, its potential energy is changed to',
choice1: 'sound energy',
choice2: 'heat energy',
choice3: 'kinetic energy',
choice4: 'chemical energy',
answer: 3,
},
{
question: 'Electricity is used by appliances to do work. This means that electricity is a form of',
choice1: 'energy',
choice2: 'force',
choice3: 'generator',
choice4: 'machine',
answer: 1,
},
{
question: 'A force of 2N moves a body through a distance of 10 m. Calculate the work done.',
choice1: '5 J ',
choice2: '8 J ',
choice3: '12 J ',
choice4: '20 J',
answer: 4,
},
{

question: 'The diagram below shows a lever system used to move a stone. Use it to answer this question\nThe distance X is the ',
choice1: 'effort distance ',
choice2: 'load distance ',
choice3: 'fulcrum',
choice4: 'lever arm',
answer: 2,
},
{
question: 'The diagram below shows a lever system used to move a stone. Use it to answer this question\nLess effort is required to move the stone when the',
choice1: 'distance Y is equal to X',
choice2: 'distance Y is greater than X ',
choice3: 'distance Y is less than X',
choice4: 'stone is at the pivot',
answer: 2,
},
{
question: 'An omnivore is an animal that feeds on',
choice1: 'raw food',
choice2: 'fresh foods',
choice3: 'cooked foods',
choice4: 'all kinds of food',
answer: 4,
},
{
question: 'A meal containing all the essential nutrients in the right amounts is said to be',
choice1: 'delicious',
choice2: 'balanced',
choice3: 'well-cooked',
choice4: 'rich in fibre',
answer: 2,
},
{
question: 'The disease associated with insufficient in take of proteins in children is',
choice1: 'goiter',
choice2: 'kwashiorkor',
choice3: 'rickets',
choice4: 'scurvy',
answer: 2,
},
{
question: 'When testing for proteins in a food substance using Fehling’s solution, the expected colour change is',
choice1: 'blue',
choice2: 'purple',
choice3: 'blue-black',
choice4: 'brick-red',
answer: 4,
},
{
question: 'The substance that enables green plants to trap sunlight for the manufacture of food is',
choice1: 'chlorophyll ',
choice2: 'chloroplast ',
choice3: 'phloem',
choice4: 'xylem',
answer: 1,
},
{
question: 'In man, the conversion of poisonous substances into harmless forms takes place in the',
choice1: 'bladder',
choice2: 'duodenum',
choice3: 'kidney',
choice4: 'liver',
answer: 4,
},
{
question: 'Which of the following life processes is represented by the equation below?\nOxygen → Water + Carbon dioxide + Energy',
choice1: 'Digestion',
choice2: 'Excretion',
choice3: 'Photosynthesis',
choice4: 'Respiration',
answer: 4,
},
{
question: 'Chlorine gas is passed through water during purification to',
choice1: 'kill germs',
choice2: 'cause suspended particles to settle',
choice3: 'soften the water',
choice4: 'give taste to the water',
answer: 1,
},
{
question: 'Arrange the following sources of water in the order of increasing contamination\n' +
'I. Rain\n' +
'II. Stream\n' +
'III. Well\n' +
'IV. Borehole',
choice1: 'I,II,IV,III ',
choice2: 'II,III,I,IV ',
choice3: 'I,IV,III,II ',
choice4: 'III,II,IV,I',
answer: 3,
},
{
question: 'A solution in which no more solute will dissolve at a given temperature is said to be',
choice1: 'concentrated',
choice2: 'dilute',
choice3: 'homogeneous',
choice4: 'saturated',
answer: 4,
},
{
question: 'A clear solution of sugar was cooled from 100°C to 25°C. Some solid sugar was seen to have formed out of the solution after cooling. This shows that sugar',
choice1: 'does not dissolve in cold water',
choice2: 'does not dissolve in hot water',
choice3: 'dissolves more in hot water than in cold water',
choice4: 'dissolves more in cold water than in hot water',
answer: 3,
},
{
question: 'Water is sometimes referred to as a universal solvent because it',
choice1: 'is the purest liquid on earth',
choice2: 'is the commonest liquid on earth',
choice3: 'is found in all living cells',
choice4: 'dissolves most substances',
answer: 4,
},
{
question: 'The charge of sulphur in the compound SO2 is',
choice1: '-2',
choice2: '+2',
choice3: '-4',
choice4: '+4',
answer: 4,
},
{
question: 'The part of the soil that supports plant growth is that part which',
choice1: 'dissolves in water',
choice2: 'retains less water',
choice3: 'contains the humus',
choice4: 'is closer to the roots',
answer: 3,
},
{
question: 'Plants do not grow well in gravel because the',
choice1: 'air spaces are too big to hold water ',
choice2: 'air spaces are too small for the roots ',
choice3: 'particles cannot absorb air',
choice4: 'particles cannot contain nutrients.',
answer: 4,
},
{
question: 'Which of the following parasites lives in the blood of humans?',
choice1: 'Louse',
choice2: 'Plasmodium',
choice3: 'Tapeworm',
choice4: 'Tick',
answer: 2,
},
{
question: 'The carrier of the malaria parasite is the',
choice1: 'black fly',
choice2: 'tsetse fly',
choice3: 'female anopheles mosquito',
choice4: 'male anopheles mosquito',
answer: 3,
},
{
question: 'Which of the following practices is a method of controlling guinea worm disease?',
choice1: 'Clearing bushes around homes',
choice2: 'Ensuring that rivers flow rapidly',
choice3: 'Protecting one’s feet before stepping into rivers',
choice4: 'Protecting one’s self against mosquito bites.',
answer: 3,
},
{
question: 'The humidity of the atmosphere is measured with',
choice1: 'an anemometer',
choice2: 'a barometer ',
choice3: 'a hygrometer ',
choice4: 'a hydrometer',
answer: 3,
},
{
question: 'How long does it take the moon to move completely around the earth?',
choice1: '1 day',
choice2: '28 days ',
choice3: '30 days ',
choice4: '365 days',
answer: 2,
},
{
question: 'Steel is an example of a',
choice1: 'solid in solid mixture ',
choice2: 'solid in liquid mixture ',
choice3: 'gas in solid mixture',
choice4: 'liquid in liquid mixture',
answer: 1,
},
{
question: 'Which of the following elements is a metal?',
choice1: 'Carbon ',
choice2: 'Nitrogen ',
choice3: 'Sulphur ',
choice4: 'Sodium',
answer: 4,
},
{
question: 'Metals that are usually used to make ornaments have low',
choice1: 'conductivity',
choice2: 'ductility',
choice3: 'malleability',
choice4: 'reactivity',
answer: 4,
},
{
question: 'The food processing method in which germs are prevented from multiplying by applying a low temperature is',
choice1: 'canning',
choice2: 'drying',
choice3: 'pickling',
choice4: 'refrigeration',
answer: 4,
},
{
question: 'The function of blood platelets is to',
choice1: 'carry carbon dioxide. ',
choice2: 'fight against diseases',
choice3: 'help in clotting',
choice4: 'help maintain constant body temperature',
answer: 3,
},
{
question: 'A fish is able to swim with little resistance in water because it has',
choice1: 'fins',
choice2: 'gills',
choice3: 'a stream lined body',
choice4: 'the ability to make use of a limited oxygen supply.',
answer: 3,
},
{
question: 'When a person jumps up, he/she is able to comedown because of the',
choice1: 'pull of the earth’s gravitational force',
choice2: 'pull of the earth’s magnetic force',
choice3: 'resistance of the earth’s atmosphere to the upward motion',
choice4: 'pressure of the earth’s atmosphere on the person',
answer: 1,
},
{
question: 'A metal displaces 5.0 cm3 of water when completely immersed in water. If the mass of the metal is 35.0 g, calculate its density.',
choice1: '7.0 gcm-3',
choice2: '30. 0 gcm-3',
choice3: '40.0 gcm-3',
choice4: '175.0 gcm-3',
answer: 1,
},
{
question: 'Oxygen from the air is able to get into the blood by',
choice1: 'capillarity ',
choice2: 'diffusion ',
choice3: 'osmosis',
choice4: 'suction',
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

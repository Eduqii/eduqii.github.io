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
	question: 'The main pollutant from domestic fires is',
choice1: 'carbon monoxide ',
choice2: 'sulphur dioxide ',
choice3: 'water vapour',
choice4: 'oxygen',
choice5: 'ammonia',
answer: 1,
},
{
question: 'Plantain is propagated vegetatively by',
choice1: 'corms',
choice2: 'stem cuttings',
choice3: 'suckers ',
choice4: 'rhizomes ',
choice5: 'tubers',
answer: 3,
},
{
question: 'Which of the following gases supports combustion?',
choice1: 'carbon dioxide',
choice2: 'carbon monoxide',
choice3: 'hydrogen ',
choice4: 'nitrogen ',
choice5: 'Oxygen',
answer: 5,
},
{
question: 'The main function of petals in a flower is to',
choice1: 'protect the ovary',
choice2: 'produce seeds ',
choice3: 'attract insects ',
choice4: 'secrete nectar',
choice5: 'produce sweet scent',
answer: 3,
},
{
question: 'The organ in the human body which is responsible for the removal of urea is the',
choice1: 'heart',
choice2: 'kidney',
choice3: 'lung',
choice4: 'liver',
choice5: 'bladder',
answer: 2,
},
{
question: 'The sun and the planets form the',
choice1: 'atmosphere ',
choice2: 'constellation ',
choice3: 'milky way',
choice4: 'solar system',
choice5: 'universe',
answer: 4,
},
{
question: 'The bilharzia worm can enter the human body through the',
choice1: 'anus',
choice2: 'ear',
choice3: 'mouth ',
choice4: 'nostrils ',
choice5: 'skin',
answer: 5,
},
{
question: 'Brass is an alloy of copper and',
choice1: 'aluminium',
choice2: 'carbon',
choice3: 'iron ',
choice4: 'tin ',
choice5: 'zinc',
answer: 5,
},
{
question: 'Which of the following diseases is contracted through infected wounds?',
choice1: 'Chicken pox',
choice2: 'Diphtheria',
choice3: 'Mumps',
choice4: 'Tetanus',
choice5: 'Whooping cough',
answer: 4,
},
{
Use the figure below to answer Questions 10 and 11

a1

A rigid bar is balanced horizontally at a point by placing a rock on the bar as shown

question: 'A rigid bar is balanced horizontally at a point by placing a rock on the bar as shown\n Which of the parts labeled represents the pivot?',
choice1: 'P ',
choice2: 'Q ',
choice3: 'R ',
choice4: 'X ',
choice5: 'Y',
answer: 2,
},
{
question: 'A rigid bar is balanced horizontally at a point by placing a rock on the bar as shown \n The effort is represented by',
choice1: 'P ',
choice2: 'Q ',
choice3: 'R ',
choice4: 'X ',
choice5: 'Y',
answer: 1,
},
{
question: 'Which of the following parts of the human body are sense organs?\n' +
'I. Tongue' +
'II. Hair ' +
'III. Nose IV. Skin',
choice1: 'I and IV only',
choice2: 'II and III only',
choice3: 'I, II and III only ',
choice4: 'I, III and IV only ',
choice5: 'I, II, III and IV',
answer: 4,
},
{
question: 'The function of the cotyledon is to',
choice1: 'produce the radicle',
choice2: 'store food',
choice3: 'protect the seed',
choice4: 'produce the plumule',
choice5: 'produce the fruit',
answer: 2,
},
{
question: 'Which of the following substances are components of a fertile soil?',
choice1: 'Nitrogen and phosphorous',
choice2: 'Phosphorous and sulphur',
choice3: 'Phosphorous, calcium and sulphur',
choice4: 'Calcium, sulphur, nitrogen and phosphorous',
choice5: 'Nitrogen,calcium and phosphorous',
answer: 4,
},
{
question: ' Which of the following appliances transform(s) electrical energy to heat energy?\n' +
'I. Swish oven' + 
'II. Hair dryer'
'III. Refrigerator motor',
choice1: 'I only',
choice2: 'I and II only ',
choice3: 'II and III only ',
choice4: 'I and III only ',
choice5: 'I,II and III',
answer: 2,
},
{
question: 'A ray of light makes an angle of 20° with the surface of a plane mirror. Determine the angle of reflection.',
choice1: '20° ',
choice2: '50° ',
choice3: '70° ',
choice4: '90° ',
choice5: '120°',
answer: 3,
},
{
question: 'Seasonal changes are the result of the',
choice1: 'rotation and tilting of the earth',
choice2: 'revolution and tilting of the earth ',
choice3: 'revolution and rotation of the earth ',
choice4: 'revolution and tilting of the moon',
choice5: 'revolution and rotation of the moon',
answer: 2,
},
{
question: 'Crystals of sugar were obtained when a hot solution of sugar was cooled to room temperature. What conclusion can be drawn from this observation?',
choice1: 'Sugar does not dissolve in cold water',
choice2: 'Sugar does not dissolve in hot water',
choice3: 'Sugar dissolves more in hot water than in cold water',
choice4: 'Sugar dissolves less in hot water than in cold water',
choice5: 'Sugar dissolves more in cold water than in cold water',
answer: 3,
},
{
question: 'Which of the following processes about all living things is/are true?' + 
' I. Reproduction ' + '<br />' + 
'II. Respiration ' + '<br />' + 
'III. Locomotion' + '<br />' + 
'IV. Excretion',
choice1: 'I only',
choice2: 'I and II only',
choice3: 'III and IV only',
choice4: 'I, II and III only',
choice5: 'I, II and IV only',
answer: 5, 
},
{
	question: 'Tendrils in plants are adaptations that enable the plant to ',
	choice1: 'climb',
	choice2: 'expire',
	choice3: 'store food',
	choice4: 'reproduce',
	choice5: 'propagate vegetatively'],
	answer: 1,
},
{
question: 'The density of a substance is 2.5gcm-3. Calculate the volume of the substance if its mass is 25.0 g.',
choice1: '0.1 cm3',
choice2: '10.0 cm3',
choice3: '22.5 cm3',
choice4: '27.5 cm3',
choice5: '62.5 cm3',
answer: 2,
},
{
question: 'The food substance that promotes good health is',
choice1: 'carbohydrate',
choice2: 'fat',
choice3: 'protein ',
choice4: 'vitamin ',
choice5: 'water',
answer: 4,
},
{
question: 'The energy that causes the turbine of hydro-electric plant to rotate is',
choice1: 'chemical energy ',
choice2: 'potential energy ',
choice3: 'electric energy ',
choice4: 'kinetic energy',
choice5: 'heat energy',
answer: 4,
},
{
question: 'Which of the following pairs of organs are parts of the central nervous system?',
choice1: 'Spinal cord and the eyes',
choice2: 'Brain and spinal cord',
choice3: 'Brain and the ears ',
choice4: 'Eyes and the ears ',
choice5: 'Eye sand the brain',
answer: 2,
},
{
question: 'Plants manufacture their food using\n' +
'I. carbon dioxide' +
'II. oxygen' +
'III. light' +
'IV. chlorophyll',
choice1: 'I only',
choice2: 'II only',
choice3: 'I and II only',
choice4: 'I,III and IV only',
choice5: 'I,II,III and IV',
answer: 4,
},
{
question: 'Which of the following crops improves soil fertility when cultivated continuously on the same piece of land?',
choice1: 'Carrot',
choice2: 'Cocoa ',
choice3: 'Cassava ',
choice4: 'Maize',
choice5: 'Peas',
answer: 5,
},
{
question: 'It is necessary to keep household refuse in covered containers in order to prevent',
choice1: 'the spread of tuberculosis',
choice2: 'the decomposition of the refuse',
choice3: 'the spread of measles',
choice4: 'entry of flies',
choice5: 'entry of bacteria',
answer: 4,
},
{
question: 'The fraction of the earth’s surface that faces the sun at any particular time is',
choice1: '1/4',
choice2: '1/3',
choice3: '1/2',
choice4: '2/3',
choice5: '3/4',
answer: 3,
},
{
question: 'Which of the following is a micro-organism?',
choice1: 'Bread mould',
choice2: 'Bacteria',
choice3: 'Leech ',
choice4: 'Termite ',
choice5: 'Tick',
answer: 2,
},
{
question: 'Which of the following statements about machines is/are correct?\n'
'I. Machines help us to do work more easily' +
'II. A force applied at one point of the machine over comes a load at another point of the machine' +
'III. All machines have engines',
choice1: 'I only ',
choice2: 'II only ',
choice3: 'III only',
choice4: 'I and II only',
choice5: 'II and III only',
answer: 4,
},
{
question: 'The female part of a flower is called the',
choice1: 'filament',
choice2: 'petal',
choice3: 'pollen grain',
choice4: 'sepal',
choice5: 'style',
answer: 5,
},
{
question: 'Which of the following substances is a compound?',
choice1: 'Hydrogen ',
choice2: 'Nitrogen ',
choice3: 'Oxygen',
choice4: 'Sulphur',
choice5: 'Water',
answer: 5,
},
{
question: 'A solution in which no more solute will dissolve at a particular temperature is said to be',
choice1: 'concentrated',
choice2: 'dilute',
choice3: 'saturated',
choice4: 'insoluble',
choice5: 'unsaturated',
answer: 3,
},
{
question: 'The process of respiration could be represented by the following equation: ' + 
'Glucose + oxygen → water + carbon dioxide + X\n' +
'What does X represent?',
choice1: 'Alcohol',
choice2: 'Hydrogen',
choice3: 'Heat',
choice4: 'Mineral salts',
choice5: 'Protein',
answer: 3,
},
{
question: 'When oil and water are shaken together they form a mixture called',
choice1: 'a solution',
choice2: 'an emulsion',
choice3: 'a solute',
choice4: 'a solvent',
choice5: 'a suspension',
answer: 2,
},
{
question: 'The organism which lives in the human blood as a parasite is',
choice1: 'louse',
choice2: 'plasmodium ',
choice3: 'roundworm ',
choice4: 'tapeworm',
choice5: 'tick',
answer: 2,
},
{
question: 'The fusion of an egg cell with sperm forms',
choice1: 'an ovum',
choice2: 'an embryo',
choice3: 'a zygote ',
choice4: 'an ovary ',
choice5: 'a placenta',
answer: 3,
},
{
question: 'The instrument used to measure current in an electric circuit is the',
choice1: 'ammeter',
choice2: 'anemometer',
choice3: 'barometer',
choice4: 'thermometer',
choice5: 'voltmeter',
answer: 1,
},
{
question: 'The atom of an element has 4 protons and 5 neutrons in its nucleus. How many shells are occupied in the atom?',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
choice5: '5',
answer: 2,
},
{
question: 'The gaps left between railway lines is to allow for',
choice1: 'expansion',
choice2: 'cooling',
choice3: 'maintenance ',
choice4: 'easy stopping ',
choice5: 'gear changing',
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

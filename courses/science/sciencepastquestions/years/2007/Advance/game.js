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
		question: 'Which of the following properties is true about all matter? Matter has',
choice1: 'volume and fixed shape',
choice2: 'volume and mass',
choice3: 'mass and indefinite volume',
choice4: 'density and fixed shape',
answer: 2,
},
{
question: 'The type of energy obtained when an electric bulb is connected to a battery is',
choice1: 'chemical energy ',
choice2: 'electrical energy ',
choice3: 'light energy ',
choice4: 'magnetic energy',
answer: 3,
},
{
question: 'A magnet can attract all these substances except',
choice1: 'drawing pins ',
choice2: 'glass ',
choice3: 'steel ',
choice4: 'iron nails',
answer: 2,
},
{
question: 'The process by which heat travels along a metal is called',
choice1: 'convection ',
choice2: 'conduction ',
choice3: 'expansion ',
choice4: 'radiation',
answer: 2,
},
{
question: 'The instrument used to measure temperature is the',
choice1: 'ammeter ',
choice2: 'barometer ',
choice3: 'manometer ',
choice4: 'thermometer',
answer: 4,
},
{
question: 'A stick placed in water appears to be bent because light traveling from the water to the air is',
choice1: 'dispersed ',
choice2: 'displaced ',
choice3: 'refracted ',
choice4: 'reflected',
answer: 3,
},
{
question: 'A plane mirror could be described as opaque because it',
choice1: 'reflects all the light incident on it',
choice2: 'absorbs all the light incident on it',
choice3: 'allows all the light incident on it to pass through it',
choice4: 'allows some of the light incident on it to pass through it and absorbs the rest', 
answer: 1, 
},
{
question: 'A suitable machine for loading drums of palm oil onto a truck is',
choice1: 'a screw ',
choice2: 'a crowbar ',
choice3: 'a wheel barrow ',
choice4: 'an inclined plane',
answer: 4,
},
{
question: 'The human forearm is an example of',
choice1: 'a first class lever',
choice2: 'a second class lever',
choice3: 'a third class lever',
choice4: 'both first and third class levers',
answer: 3,
},
{
question: 'The chemical substances which help in the digestion of food are known as',
choice1: 'enzymes ',
choice2: 'hormones ',
choice3: 'plasma ',
choice4: 'vitamins',
answer: 1,
},
{
question: 'Digestion of proteins starts from the',
choice1: 'duodenum ',
choice2: 'ileum ',
choice3: 'mouth ',
choice4: 'stomach',
answer: 4,
},
{
question: 'A reflex action involves the',
choice1: 'brain and nerves ',
choice2: 'bones and nerves ',
choice3: 'brain and muscles',
choice4: 'spinal cord and nerves',
answer: 4,
},
{
question: 'Which of the following structures is not part of the central nervous system?',
choice1: 'Brain ',
choice2: 'Spinal cord ',
choice3: 'Nerves ',
choice4: 'Veins',
answer: 4,
},
{
question: 'When the testa of a soaked bean is removed, the seed is seen to be made up of',
choice1: 'cotyledons ',
choice2: 'embryos ',
choice3: 'micropyles ',
choice4: 'radicles',
answer: 1,
},
{
question: 'One function of the root system of plants is to',
choice1: 'excrete carbon dioxide',
choice2: 'store waste materials',
choice3: 'hold the plant firmly in the ground',
choice4: 'prepare food for the plant',
answer: 3,
},
{
question: 'Which of the following diseases is caused by a virus?',
choice1: 'Cholera',
choice2: 'Cerebro-Spinal Meningitis (CSM) ',
choice3: 'Malaria',
choice4: 'Tuberculosis (TB)',
answer: 2,
},
{
question: 'The different types of teeth that an animal has gives an indication of the nature of its',
choice1: 'digestion ',
choice2: 'environment ',
choice3: 'feeding ',
choice4: 'reproduction',
answer: 3,
},
{
question: 'Exchange of gases takes place in the respiratory system through the',
choice1: 'bronchi ',
choice2: 'lungs ',
choice3: 'nostrils ',
choice4: 'trachea',
answer: 2,
},
{
question: 'Water that requires more soap in order to form lather is described as',
choice1: 'clean ',
choice2: 'hard ',
choice3: 'pure ',
choice4: 'soft',
answer: 2,
},
{
question: 'One best way of making water safe for drinking is by',
choice1: 'adding washing soda',
choice2: 'filtering',
choice3: 'adding common salt',
choice4: 'boiling',
answer: 4,
},
{
question: 'The process where by a hot saturated solution is cooled to obtain the soluteis called',
choice1: 'condensation ',
choice2: 'crystallization ',
choice3: 'distillation',
choice4: 'evaporation',
answer: 2,
},
{
question: 'If a mixture of water and powdered charcoal is allowed to stand for along time, the charcoal',
choice1: 'rises to the top',
choice2: 'settles at the bottom',
choice3: 'dissolves completely in the water',
choice4: 'continues to remain suspended in the water',
answer: 2,
},
{
question: 'The chemical symbol of potassium is',
choice1: 'Na ',
choice2: 'K ',
choice3: 'Pb ',
choice4: 'S',
answer: 2,
},
{
question: 'The atom of an element is represented as ^35_17 Cl. How many electrons are in the atom?',
choice1: '52 ',
choice2: '35 ',
choice3: '18 ',
choice4: '17',
answer: 4,
},
{
question: 'Which of the following agricultural practices prevents loss of water from the soil?',
choice1: 'Addition of manure',
choice2: 'Mulching',
choice3: 'Addition of humus',
choice4: 'Composting',
answer: 2,
},
{
question: 'Soil conservation is important because it prevents loss of',
choice1: 'carbon dioxide ',
choice2: 'oxygen ',
choice3: 'minerals ',
choice4: 'humus',
answer: 3,
},
{
question: 'Foot rot disease in animals is caused by',
choice1: 'bacteria ',
choice2: 'fungi ',
choice3: 'protozoa ',
choice4: 'viruses',
answer: 2,
},
{
question: 'A patient with symptoms of diarrhoea and vomiting may be suffering from',
choice1: 'cholera ',
choice2: 'dysentery ',
choice3: 'influenza ',
choice4: 'tuberculosis',
answer: 1,
},
{
question: 'Which of the following human activities pollutes the environment?\n' +
'I. Release of cement dust into the atmosphere' +
'II. Dumping of refuse into water bodies' + 
'III. Burning of rubbish',
choice1: 'I and II only ',
choice2: 'II and III only ',
choice3: 'I and III only ',
choice4: 'I,II and III',
answer: 4,
},
{
question: 'Which of the following features of a parent would not be in herited by the children?',
choice1: 'Colour of eye ',
choice2: 'Shape of nose ',
choice3: 'Height ',
choice4: 'Scar',
answer: 4,
},
{
question: 'Which of the following bodies is at the centre of the solar system?',
choice1: 'Earth ',
choice2: 'Mars ',
choice3: 'Moon ',
choice4: 'Sun',
answer: 4,
},
{
question: 'The chemicals used in the preparation of ammonia in the laboratory are',
choice1: 'ammonium chloride and calcium hydroxide',
choice2: 'ammonium nitrate and sodium chloride',
choice3: 'ammonium sulphate and calcium chloride',
choice4: 'ammonium sulphate and sodium chloride',
answer: 1,
},
{
question: 'Steel is an alloy of',
choice1: 'iron and carbon ',
choice2: 'zinc and copper ',
choice3: 'iron and zinc ',
choice4: 'brass and zinc',
answer: 1,
},
{
question: 'The property of a metal that makes it possible for it to be beaten into different shapes is called',
choice1: 'conductivity ',
choice2: 'ductility ',
choice3: 'malleability ',
choice4: 'resistivity',
answer: 3,
},
{
question: 'Movement of the particles of a gas from a region of higher concentration to a region of lower concentration is known as',
choice1: 'capillarity ',
choice2: 'diffusion ',
choice3: 'osmosis ',
choice4: 'viscosity',
answer: 2,
},
{
question: 'Oxygen in the blood finally reaches the parts of the body through the',
choice1: 'arteries ',
choice2: 'alveoli ',
choice3: 'capillaries ',
choice4: 'veins',
answer: 3,
},
{
question: 'An aluminium cube with side measuring 2m has a mass of 24kg. Calculate the density of the aluminium.',
choice1: '48 kgm-3 ',
choice2: '24 kgm-3 ',
choice3: '12 kgm-3 ',
choice4: '3 kgm-3',
answer: 4,
},
{
question: 'The force that opposes the motion of an object on an other object is called',
choice1: 'electrical force ',
choice2: 'frictional force ',
choice3: 'gravitational force ',
choice4: 'magnetic force',
answer: 2, 
},
{
question: 'Water is prevented from passing through the tiny holes in a numbrellaby',
choice1: 'diffusion ',
choice2: 'frictional force ',
choice3: 'capillarity ',
choice4: 'surface tension',
answer: 4,
},
{
question: 'Which of the following methods of preserving food makes use of heat energy from the sun?',
choice1: 'Drying ',
choice2: 'Frying ',
choice3: 'Salting ',
choice4: 'Refrigeration',
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

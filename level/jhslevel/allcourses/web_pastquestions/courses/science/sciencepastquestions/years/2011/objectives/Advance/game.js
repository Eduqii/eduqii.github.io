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
		question: 'An example of a noble gas is',
		choice1: 'chlorine',
		choice2: 'neon',
		choice3: 'nitrogen',
		choice4: 'oxygen',
		answer: 2,
	},

	{
		question: 'The structure that stores sperms temporarily in the male reproductive system of humans is',
		choice1: 'epididymis',
		choice2: 'scrotal sac',
		choice3: 'sperm duct',
		choice4: 'testes',
		answer: 1,
	},


	{
		question: 'Which of the following properties of alcohol as a thermometric liquid is correct?',
		choice1: 'It is opaque',
		choice2: 'It does not wet glass',
		choice3: 'It has a very low freezing point',
		choice4: 'It has a high freezing point',
		answer: 3,
	},

	{
		question: 'In which of the following vegetation zones of Ghana does millet and sorghum grow well?',
		choice1: 'Coastal savannah',
		choice2: 'Forest zone',
		choice3: 'Guinea savannah',
		choice4: 'Transition zone',
		answer: 3,
	},	
{
		question: 'Which of the following methods is/are used for preserving fish?' +'\n' +

		'I. Canning'+'\n' +
       'II. Frying' +'\n' +
      'III. Smoking'+'\n',

		choice1: 'I only',
		choice2: 'I and II only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,
	},	

{
		question: 'Which of the following practices in the home can prevent disease infection?',

		choice1: 'Covering one’s food',
		choice2: 'Drinking unclean water',
		choice3: 'Keeping one’s surroundings untidy',
		choice4: 'Sharing towels and sponges',
		answer: 1,
	},	

{
		question: 'An example of a semimetal is',

		choice1: 'calcium',
		choice2: 'lithium',
		choice3: 'silicon',
		choice4: 'sodium',
		answer: 3,
	},	
{
		question: ' Which kind of energy transformation takes place in an electric motor?',

		choice1: 'Chemical energy to electrical energy',
		choice2: 'Chemical energy to mechanical energy',
		choice3: 'Electrical energy to light energy',
		choice4: 'Electrical energy to mechanical energy',
		answer: 4,  
	},	

	{
		question: 'Landrace is a breed of',

		choice1: 'cattle',
		choice2: 'goats',
		choice3: 'pigs',
		choice4: 'sheep',
		answer: 4,  
	},	

	{
		question: 'In flowering plants, the stamen is made up of',

		choice1: 'anther and stigma',
		choice2: 'anther and filament',
		choice3: 'stigma and filament',
		choice4: 'stigma and style',
		answer: 2,  
	},	

	{
		question: 'Which of the following statements about a transistor is correct?',

		choice1: 'It can be used to amplify current',
		choice2: 'It is similar to three diodes',
		choice3: 'It consists of two leads only',
		choice4: 'It has three junction',
		answer: 1,  
	},

{
		question: 'An atom has 6 protons and 7 neutrons in its nucleus. What is its mass number?',

		choice1: '1',
		choice2: '6',
		choice3: '7',
		choice4: '13',
		answer: 4,  
	},


		{
		question: 'A record of daily activities on a farm is termed',

		choice1: 'labour record',
		choice2: 'inventory record',
		choice3: 'farm diary',
		choice4: 'production record',
		answer: 3,  
	},	

{
		question: 'Which of the following devices work(s) on the principle of transmission of pressure in fluids?'+'\n' +
         'I. Water pumps'+'\n' +
         'II. Syringes'+'\n' +
         'III. Bicycle brakes'+'\n',

		choice1: 'I only',
		choice2: 'I and II only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,  
	},

{
		question: 'Which of the following crops is not correctly matched with its group?',

		choice1: 'Cowpea – cereal crop',
		choice2: 'Cocoa – beverage crop',
		choice3: 'Coconut – oil crop',
		choice4: 'Cocoyam – tuber crop',
		answer: 1,  
	},
	{
		question: 'Which of the following substances is a salt?',

		choice1: 'H2SO4',
		choice2: 'NaOH',
		choice3: 'HCl',
		choice4: 'CaCl2',
		answer: 4,  
	},
{
		question: 'In which part of the digestive system of a fowl does grinding of feed take place?',

		choice1: 'Crop',
		choice2: 'Gizzard',
		choice3: 'Oesophagus',
		choice4: ' Proventriculus',
		answer: 2,  
	},
{
		question: 'The parts of a bony fish that are used to control the level at which the fish swims are known as',

		choice1: 'dorsal and caudal fins',
		choice2: 'caudal and pectoral fins',
		choice3: 'pectoral and pelvic fins',
		choice4: ' dorsal and pectoral fins',
		answer: 3,  
	},	
{
		question: 'Million’s reagent is used to test for',

		choice1: 'carbohydrates',
		choice2: 'fats',
		choice3: 'proteins',
		choice4: 'vitamins',
		answer: 3,  
	},	
{
		question: 'In an n-p-n transistor, the n-type collector is connected to the positive terminal of the battery thus making the',

		choice1: 'base-collector junction reverse biased',
		choice2: 'base-collector junction forward biased',
		choice3: 'base-emitter junction reverse biased',
		choice4: 'base-emitter junction forward biased',
		answer: 1,  
	},	
{
		question: 'Which type of vegetation favours both wet and hot environmental conditions?',

		choice1: 'Strand and mangrove',
		choice2: 'Coastal savannah',
		choice3: 'Guinea savannah',
		choice4: 'Tropical forest',
		answer: 4,  
	},	

{
		question: 'During drought, some plants dry out because of high'+'\n' +

'I. atmospheric temperature ' +
' II. humidity '+
' III. rate of evaporation '+'\n\n' +

'Which of the statements above is/are correct?',

        choice1: 'III only',
		choice2: 'I and II only',
		choice3: 'I and III only',
		choice4: 'I, II and III',
		answer: 3,  
	},
{
		question: 'Soil erosion on sloppy farmlands is best controlled by',

		choice1: 'cover cropping',
		choice2: 'mulching',
		choice3: 'strip cropping',
		choice4: 'terracing',
		answer: 4,  
	},	
	{
		question: 'A viable seed is one that',

		choice1: 'germinates under suitable conditions',
		choice2: 'contains oil',
		choice3: 'develops from fertilized ovary',
		choice4: 'has a pericarp',
		answer: 1,  
	},
		{
		question: 'Which of the following pairs of structures form part of the female reproductive system of humans?',

		choice1: 'Urethra and uterus',
		choice2: 'Cervix and uterus',
		choice3: 'Ureter and uterus',
		choice4: 'Cervix and ureter',
		answer: 2,  
	},
	{
		question: 'Which of the following chemical symbols is that of a metal?',

		choice1: 'Ca',
		choice2: 'Ne',
		choice3: 'P',
		choice4: 'S',
		answer: 1,  
	},
		{
		question: ' All the living and non-living things that surround an organism constitute its',

		choice1: 'community',
		choice2: 'ecosystem',
		choice3: 'environment',
		choice4: 'habitat',
		answer: 3,  
	},
		{
		question: ' Which of the following crops should be planted after cassava in crop rotation?',

		choice1: 'Cocoyam',
		choice2: 'Cowpea',
		choice3: 'Onion',
		choice4: 'Yam',
		answer: 2,  
	},
	{
		question: 'Endoparasites in farm animals can be controlled',

		choice1: 'drenching',
		choice2: 'dipping',
		choice3: 'dusting',
		choice4: 'spraying',
		answer: 1,  
	},
	{
		question: 'Which of the following devices requires the use of transistors in its operation?',

		choice1: 'Computer',
		choice2: 'Electric heater',
		choice3: 'Microphone',
		choice4: 'Wall clock',
		answer: 1,  
	},
	{
		question: 'Feel Method is used to determine soil',

		choice1: 'air',
		choice2: 'colour',
		choice3: 'structure',
		choice4: 'texture',
		answer: 4,  
	},
	{
		question: 'Which of the following modes of heat transfer is the thermos flask designed to minimize?Which of the following modes of heat transfer is the thermos flask designed to minimize?'+'\n\n' +
         'I. Conduction ' +
         ' II. Convection ' +
         ' III. Radiation ',

		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,  
	},
	{
		question: 'An atom of an element is represented as . What is the respective number of neutrons and protons in the atom?',

		choice1: '12 and 13',
		choice2: '12 and 25',
		choice3: '13 and 12',
		choice4: '25 and 12',
		answer: 3,  
	},
	{
		question: 'The anemometer is an instrument used in determining',

		choice1: 'amount of rainfall',
		choice2: 'speed of wind',
		choice3: 'relative humidity',
		choice4: 'intensity of light',
		answer: 2,  
	},
{
		question: 'Which of the following subjects is/are considered as applied science?'+'\n' +

'I. Biology' +
'II. Medicine' +
'III. Psychology'+'\n\n' +

'Which of the statements above is/are correct?',

        choice1: 'I only',
		choice2: 'I and II only',
		choice3: 'I and III only',
		choice4: 'II and III only',
		answer: 4,  
	},
	{
		question: 'Chinchilla is a breed of',

		choice1: 'goats',
		choice2: 'pigs',
		choice3: 'rabbits',
		choice4: 'sheep',
		answer: 3,  
	},

	{
		question: 'Which of the following characters is not acquired through heredity?',

		choice1: 'Language spoken',
		choice2: 'Shape of nose',
		choice3: 'Colour of eyes',
		choice4: 'Temperament',
		answer: 1,  
	},
	{
		question: 'The food nutrient which ensures good health in farm animals is',

		choice1: 'carbohydrates',
		choice2: 'minerals',
		choice3: 'proteins',
		choice4: 'vitamins',
		answer: 4,  
	},
	{
		question: 'The use of resistant breeds of farm animals to control pests is a',

		choice1: 'biological method',
		choice2: 'chemical method',
		choice3: 'Cultural method',
		choice4: 'physical method',
		answer: 1,  
	},
		{
		question: 'Which of the following arrangements show the correct order of increasing complexity of structures in living organisms?',

		choice1: 'cells –> organs –> tissues –> systems',
		choice2: 'cells –> tissues –> organs –> systems',
		choice3: 'cells –> systems –> tissues –> organsCultural method',
		choice4: 'cells –> tissues –> systems –> organs',
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

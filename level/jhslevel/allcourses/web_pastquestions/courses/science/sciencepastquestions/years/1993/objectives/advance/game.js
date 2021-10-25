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
	question: 'The three states of matter are ',
choice1: 'Water, liquid and gas ',
choice2: 'Earth, liquid and gas ',
choice3: 'Solid, liquid and air ',
choice4: 'Gas, earth and water ',
choice5: 'Gas, liquid and solid',
answer: 5,
},
{
question: 'Soil erosion ….',
choice1: 'washes away the water content of soil',
choice2: 'enables crops to grow better',
choice3: 'washes away the top soil',
choice4: 'leaves the soil free of pests',
choice5: 'increases the fertility of soils',
answer: 3,
},
{
question: 'What is the average body temperature of a healthy person?',
choice1: '25°C ',
choice2: '36°C ',
choice3: '37°C ',
choice4: '38°C ',
choice5: '39°C',
answer: 3,
},
{
question: 'Steel is an alloy of',
choice1: 'Iron and Carbon ',
choice2: 'Zinc and Copper ',
choice3: 'Tin and Copper ',
choice4: 'Iron and Zinc',
choice5: 'Carbon and Zinc',
answer: 1,
},
{
question: 'Leguminous crops such as beans may often be cultivated to',
choice1: 'Add humus to the soil ',
choice2: 'Add nitrogen to the soil ',
choice3: 'Add protein to the soil ',
choice4: 'Make the soil loamy',
choice5: 'Increase the calcium content of the soil',
answer: 2,
},
{
question: 'Which of the following is an excretory organ?',
choice1: 'Anus ',
choice2: 'Eye ',
choice3: 'Heart ',
choice4: 'Skin',
choice5: 'Pancreas',
answer: 4,
},
{
question: 'Which of the following is the function of the hair in the nose ? It',
choice1: 'keeps the nose warm',
choice2: 'makes breathing easier',
choice3: 'keeps the nose moist',
choice4: 'prevents carbon dioxide from entering the body',
choice5: 'filters dust from the air breathed in',
answer: 5,
},
{
question: 'Which of the following is equal to one metre?',
choice1: '1 cm ',
choice2: '10 cm ',
choice3: '100 cm ',
choice4: '500 cm',
choice5: '1000 cm',
answer: 3,
},
{
question: 'Which of the following statements about feeding relationships is not true?',
choice1: 'Energy is transferred from one organism to another',
choice2: 'A green plant is the basis of any food chain ',
choice3: 'Bacteriafeed on dead organisms forenergy ',
choice4: 'A carnivore feeds on green plants for energy ',
choice5: 'Omnivores feed on both plants and animals',
answer: 4,
},
{
question: 'In a simple machine, the force that is applied to enable work to be done is known as',
choice1: 'Lever ',
choice2: 'Load ',
choice3: 'Pivot ',
choice4: 'Effort ',
choice5: 'Hinge',
answer: 4,
},
{
question: 'Which of the following changes does not occur in a girl at the age of puberty?',
choice1: 'The breasts develop',
choice2: 'The hips widen',
choice3: 'Menstruation',
choice4: 'The teeth becomes whiter',
choice5: 'Hair grows in the pubic area',
answer: 4,
},
{
question: 'The fixed point of a lever at which turning takes place is the',
choice1: 'pivot',
choice2: 'effort',
choice3: 'load',
choice4: 'handle',
choice5: 'machine',
answer: 1,
},
{
question: 'Which of the following mixtures can be separated by filtration?',
choice1: 'Salt in water',
choice2: 'Sugar in water ',
choice3: 'Sand in water ',
choice4: 'Oil in water',
choice5: 'Omo in water',
answer: 3,
},
{
question: 'The skin is madeup of',
choice1: 'One layer ',
choice2: 'Two layers ',
choice3: 'Three layers ',
choice4: 'Four layers ',
choice5: 'Six layers',
answer: 2,
},
{
question: 'The force which acts between planets and keeps them in their orbits is called',
choice1: 'electrical force',
choice2: 'magnetic force',
choice3: 'gravitational force',
choice4: 'frictional force',
choice5: 'elastic force',
answer: 3,
},
{
question: 'Which of the following types of soil allows the fastest rate of drainage?',
choice1: 'Clayeysoil ',
choice2: 'Loamysoil ',
choice3: 'Black soil ',
choice4: 'Sandy soil ',
choice5: 'Humus',
answer: 4,
},
{
question: 'Which ofthe following is the percentage composition of oxygen in the air?',
choice1: '0.03',
choice2: '1',
choice3: '21',
choice4: '78',
choice5: '98',
answer: 3,
},
{
question: 'Disposal of sewage into a river which supplies water for domestic use may lead to an outbreak of',
choice1: 'malaria',
choice2: 'cholera',
choice3: 'guineaworm',
choice4: 'river blindness',
choice5: 'tuberculosis',
answer: 2,
},
{
question: 'The process by which anaphthalene ball(camphor) placed in a box gets smaller in size is termed',
choice1: 'Melting',
choice2: 'Diffusion',
choice3: 'Evaporation ',
choice4: 'Sublimation ',
choice5: 'Condensation',
answer: 4,
},
{
question: 'Which of the following food substances is not oxidized during respiration?',
choice1: 'Fatty acids',
choice2: 'Amino acids',
choice3: 'Glucose ',
choice4: 'Cellulose ',
choice5: 'Vitamins',
answer: 5,
},
{
question: 'Kerosene and petrol are obtained from crude oil by',
choice1: 'distillation',
choice2: 'condensation',
choice3: 'filtration',
choice4: 'evaporation',
choice5: 'decantation',
answer: 1,
},
{
question: 'Which of the following encourages the spread of venereal diseases?',
choice1: 'Poor family planning',
choice2: 'Drug Abuse',
choice3: 'Mental illhealth',
choice4: 'Parental wealth',
choice5: 'Indiscriminate sexual intercourse',
answer: 5,
},
{
question: 'A torch light bulb lights up when connected to a dry cell. What type of energy is obtained from the cell?',
choice1: 'Chemical energy',
choice2: 'Light energy',
choice3: 'Potential energy ',
choice4: 'Electrical energy ',
choice5: 'Heat energy',
answer: 4,
},
{
question: 'Which of the following is not a soil nutrient?',
choice1: 'Hydrogen ',
choice2: 'Nitrogen ',
choice3: 'Potassium ',
choice4: 'Calcium',
choice5: 'Phosphorus',
answer: 1,
},
{
question: 'Which of the following organisms causes bilharziasis?',
choice1: 'Tapeworm ',
choice2: 'Blood fluke ',
choice3: 'Blood worm ',
choice4: 'Round worm ',
choice5: 'Liver fluke',
answer: 2,
},
{
question: 'A piece of stone sinks in water because',
choice1: 'its density is the same as that of water',
choice2: 'it is able to displace its own weight of water',
choice3: 'its density is less than that of water',
choice4: 'its density is greater than that of water',
choice5: 'the water contains air which allows the stone to sink',
answer: 4,
},
{
question: 'Which of the following is characteristic of reflexaction',
choice1: 'It happens slowly',
choice2: 'It happens consciously',
choice3: 'It takes a longpath ',
choice4: 'It involves thinking ',
choice5: 'It is automatic',
answer: 5,
},
{
question: 'All the following are sense organs except the',
choice1: 'eye ',
choice2: 'brain ',
choice3: 'ear',
choice4: 'skin',
choice5: 'tongue',
answer: 2,
},
{
question: 'A mixture of raw starch and water is best separated by',
choice1: 'boiling',
choice2: 'distillation ',
choice3: 'decantation ',
choice4: 'winnowing',
choice5: 'crystallization',
answer: 3,
},
{
question: 'Which ofthe following is a horizontal underground stem?',
choice1: 'Cocoyam',
choice2: 'Onion ',
choice3: 'Carrot ',
choice4: 'Yam',
choice5: 'Ginger',
answer: 5,
},
{
question: 'Which of the following is a physical change?',
choice1: 'Heating of sugar',
choice2: 'Heating of sulphur and iron filing',
choice3: 'Boiling of water',
choice4: 'Burning of magnesium ribbon',
choice5: 'Heating of potassium chlorate',
answer: 3,
},
{
question: 'In an experiment in which a variegated leaf is used, which of the following is proved to be necessary for photosynthesis?',
choice1: 'Carbondioxide',
choice2: 'Light',
choice3: 'Chlorophyll',
choice4: 'Water',
choice5: 'Oxygen',
answer: 3,
},
{
question: 'Friction is definedas a forcewhich',
choice1: 'accompanies motion ',
choice2: 'acts against motion ',
choice3: 'causes motion',
choice4: 'makes motion easy',
choice5: 'is created bymotion',
answer: 2,
},
{
question: 'Which of the following is not a function of the lens in the human eye? It',
choice1: 'allows light rays to pass through it',
choice2: 'refracts thelight rays passing through it',
choice3: 'helps to focus the image onto the retina',
choice4: 'becomes thinner when focusing a distant object',
choice5: 'reflects part of the light rays falling on it.',
answer: 5,
},
{
question: 'Which ofthe following practices ina community will increase its environmental pollution?',
choice1: 'Buildingof schools with workshops',
choice2: 'Plantingof trees on largeareas of land',
choice3: 'Depositing of household rubbish near a source of drinking water',
choice4: 'Removal of sand and refuse from choked gutters',
choice5: 'building of an efficient underground sewage system',
answer: 3,
},
{
question: 'Smoke is an example of a mixture of',
choice1: 'Gases',
choice2: 'Liquids in gases ',
choice3: 'Solids in liquids ',
choice4: 'solids in gases',
choice5: 'solids in solids',
answer: 4,
},
{
question: 'Which of the following is the best method of preventing skin disease?',
choice1: 'Theuse of perfume on theskin',
choice2: 'Theuse of bleaching cream on the skin',
choice3: 'Avoiding contact with diseased person',
choice4: 'keeping the skin clean by washing it regularly',
choice5: 'Changing of clothes regularly',
answer: 4,
},
{
question: 'Which ofthe following has a different physical state from the others underordinaryconditions?',
choice1: 'Zinc ',
choice2: 'Lead ',
choice3: 'Iron',
choice4: 'Mercury',
choice5: 'Aluminium',
answer: 4,
},
{
question: 'Heat from the sun reaches the earth by',
choice1: 'conduction ',
choice2: 'convection ',
choice3: 'radiation',
choice4: 'reflection',
choice5: 'refraction',
answer: 3,
},
{
question: 'During an eclipse of the moon, the',
choice1: 'Sun and the moon are on one side of the earth',
choice2: 'Earth and the sun are on one side of the moon',
choice3: 'Sun comes between earth and moon in a straight line ',
choice4: 'Earth comes between sun and moon in a straight line ',
choice5: 'Moon comes between sun and earth in a straight line',
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

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
		question: 'Which ofthe following processescould be used to preserve fish foralong time?',
choice1: 'Boiling only',
choice2: 'Salting only',
choice3: 'Sun drying only',
choice4: 'Boiling and sun drying',
choice5: 'Salting and sun drying',
answer: 5
},
{
question: 'One hectare is equivalent to',
choice1: '100 m2',
choice2: '1,000 m2',
choice3: '10,000 m2',
choice4: '100,000 m2',
choice5: '1,000,000 m2',
answer: 3,
},
{
question: 'Which of the following causes ringworm?',
choice1: 'Bacteria',
choice2: 'Fungi',
choice3: 'Protozoa',
choice4: 'Ticks',
choice5: 'Viruses',
answer: 2,
},
{
question: 'The central nervous system is madeup ofthe',
choice1: 'Brain only',
choice2: 'Spinal cord only',
choice3: 'Brain and sense organs',
choice4: 'Brain and spinal cord',
choice5: 'Spinal cord and sense organs',
answer: 4,
},
{
question: 'An object weighing 60N is dragged through a distance of 2m. Calculatethe work done',
choice1: '6 J ',
choice2: '15 J',
choice3: '30 J ',
choice4: '120 J ',
choice5: '1200 J',
answer: 4,
},
{
question: 'Which of the following substances is necessary for the formation of food in plants?',
choice1: 'Carbon dioxide',
choice2: 'Nitrogen ',
choice3: 'Oxygen ',
choice4: 'Starch',
choice5: 'Sugar',
answer: 1,
},
{
question: 'How many times is the sun overhead at the equator within a year?',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
choice5: '5',
answer: 2,
},
{
question: 'Which of the following takes the shape of its container?',
choice1: 'Chalk',
choice2: 'Charcoal',
choice3: 'Paper ',
choice4: 'Petrol ',
choice5: 'Stone',
answer: 4,
},
{
question: 'A group ofstars form',
choice1: 'The universe',
choice2: 'The atmosphere',
choice3: 'The solar system',
choice4: 'The planetary system',
choice5: 'A galaxy',
answer: 5,
},
{
question: 'Which of the following types of soil is good for plant growth?',
choice1: 'Clay',
choice2: 'Course sand',
choice3: 'Fine sand',
choice4: 'Loam',
choice5: 'Silt',
answer: 4,
},
{
question: 'The equation Carbon(IV) oxide + water → Glucose + Oxygen , represents',
choice1: 'Breathing',
choice2: 'Diffusion',
choice3: 'Photosynthesis',
choice4: 'Respiration',
choice5: 'Transpiration',
answer: 3,
},
{
question: 'Which of the following pairs of diseases are both contracted through water?',
choice1: 'Cholera and dysentery ',
choice2: 'Smallpoxand dysentery ',
choice3: 'Ringworm and smallpox ',
choice4: 'Tuberculosis and cholera',
choice5: 'Tuberculosis and dysentery',
answer: 1,
},
{
question: 'The efficiencyof amachine is usuallyless thanonedueto',
choice1: 'friction ',
choice2: 'greasing ',
choice3: 'heat',
choice4: 'the load used',
choice5: 'the effortapplied',
answer: 1,
},
{
question: 'Which of the following pairs of organisms are decomposers?',
choice1: 'Animals and bacteria',
choice2: 'Animals and fungi ',
choice3: 'Bacteria and plants ',
choice4: 'Bacteria and fungi ',
choice5: 'Plants and fungi',
answer: 2,
},
{
question: 'A mixture of engine oil and water could be best separated by',
choice1: 'Evaporation',
choice2: 'Freezing',
choice3: 'Decantation',
choice4: 'Heating',
choice5: 'Addition ofsoap',
answer: 3,
},
{
question: 'Which of the following plants is propagated vegetatively?',
choice1: 'apple',
choice2: 'coconut ',
choice3: 'pawpaw ',
choice4: 'pear',
choice5: 'sweet potato',
answer: 5,
},
{
question: 'Which of the following diseases is transmitted by close contact with an infected person?',
choice1: 'AIDS',
choice2: 'Bilharzia',
choice3: 'Elephantiasis',
choice4: 'Measles',
choice5: 'Polio',
answer: 4,
},
{
question: 'The breakdown of rocks into smaller particles is known as',
choice1: 'decomposition',
choice2: 'erosion',
choice3: 'ploughing',
choice4: 'terracing',
choice5: 'weathering',
answer: 5,
},
{
question: 'Which of the following energy changes takes place when a church bell is tolled?',
choice1: 'Chemical energy is changed to soundenergy',
choice2: 'Kinetic energy is changed to sound energy ',
choice3: 'Potential energy is changed to sound energy ',
choice4: 'Potential energy is changed to kinetic energy ',
choice5: 'Thermal energy is changed to sound energy',
answer: 2,
},
{
question: 'The dodderon milk bush is an example of',
choice1: 'a plant parasite on animal host',
choice2: 'a plant parasite on plant host',
choice3: 'an animal parasite and aplant parasite ',
choice4: 'an animal parasite on an animal host ',
choice5: 'an animal parasite on a plant host',
answer: 2,
},
{
question: 'Which of the following features is shown by plants only?',
choice1: 'Feeding',
choice2: 'Growth',
choice3: 'Transpiration ',
choice4: 'Reproduction ',
choice5: 'Respiration',
answer: 3,
},
{
question: 'The structure of the skin that removes waste substances is the',
choice1: 'fat deposit',
choice2: 'hair',
choice3: 'sweat duct',
choice4: 'sweatgland ',
choice5: 'sweat pore',
answer: 4,
},
{
question: 'Which of the following statements about light is true?',
choice1: 'Light is reflected from polishedsurfaces',
choice2: 'Light travels through opaque objects',
choice3: 'Light passes through plane mirrors',
choice4: 'The angle of incidence is between the normal and the reflected ray',
choice5: 'The speed of light is lessthan that of sound',
answer: 1,
},
{
question: 'The efficiency of a machine is given by the ratio',
choice1: 'load / effort',
choice2: 'momentum / velocity',
choice3: 'distance moved by effort / distance moved by load',
choice4: 'work input/ work output',
choice5: 'mechanical advantage / velocity ratio',
answer: 5,
},
{
question: 'About 55% of blood is made up of the plasma while the remaining 45% is made up of',
choice1: 'Cells',
choice2: 'Dissolved food substances',
choice3: 'Dissolved gases',
choice4: 'Liquid',
choice5: 'Salt',
answer: 1,
},
{
question: 'Which of the following is a structure in the ear?',
choice1: 'Cornea ',
choice2: 'Cochlea ',
choice3: 'Iris',
choice4: 'Retina',
choice5: 'Trachea',
answer: 2,
},
{
question: 'Brass is an alloy made up of ',
choice1: 'Aluminium and zinc ',
choice2: 'Copper and tin',
choice3: 'Copper and zinc ',
choice4: 'Iron and carbon ',
choice5: 'Steel and tin',
answer: 3,
},
{
question: 'Which of the following controls the amount of light that enters the eyes ?',
choice1: 'The cornea',
choice2: 'The iris ',
choice3: 'The lens ',
choice4: 'The pupil ',
choice5: 'The retina',
answer: 2,
},
{
question: 'A body which moves round the earth is called',
choice1: 'A meteorite ',
choice2: 'A satellite ',
choice3: 'A star',
choice4: 'Jupiter',
choice5: 'The sun',
answer: 2,
},
{
question: 'Which of the following processes should be carried out first when separating a mixture of sand and common salt?',
choice1: 'crystallization of the salt',
choice2: 'dissolution of the salt',
choice3: 'distillation of the solvent ',
choice4: 'filtration of the mixture ',
choice5: 'sublimation of the solute',
answer: 2,
},
{
question: 'A temperature controlling device which works using the principles of expansion and contraction is called a……….',
choice1: 'conductor',
choice2: 'fuse',
choice3: 'manometer ',
choice4: 'thermometer ',
choice5: 'thermostat',
answer: 5,
},
{
question: 'Kerosene and petrol are obtained from crudeoilby',
choice1: 'condensation of thecrudeoil ',
choice2: 'decantation of thecrudeoil ',
choice3: 'distillation of the crudeoil',
choice4: 'evaporation ofthe crudeoil',
choice5: 'filtration ofthe crudeoil',
answer: 3,
},
{
question: 'The fusion of the male and female gametes is known as: ',
choice1: 'copulation',
choice2: 'evolution',
choice3: 'fertilization',
choice4: 'ovulation',
choice5: 'reproduction',
answer: 3,
},
{
question: 'Calculate the voltage across a wire of resistance 4ohms if 3 amperes of current is passed through it.',
choice1: '0.75 V ',
choice2: '1.00 V ',
choice3: '1.33 V ',
choice4: '7.00 V ',
choice5: '12.00 V',
answer: 5,
},
{
question: 'Which of the following flower parts develops into a seed? The',
choice1: 'ovule',
choice2: 'pollen grain',
choice3: 'stamen ',
choice4: 'stigma ',
choice5: 'style',
answer: 1,
},
{
question: 'The ability of an organism to resist infection by producing antibodies is known as',
choice1: 'diagnosis ',
choice2: 'immunity ',
choice3: 'incubation ',
choice4: 'inoculation ',
choice5: 'vaccination',
answer: 1,
},
{
question: 'The part of cocoyam which is used in propagation is the',
choice1: 'bulb',
choice2: 'corm',
choice3: 'seed',
choice4: 'sucker',
choice5: 'rhizome',
answer: 2,
},
{
question: 'Which of the following diseases affects the lungs?',
choice1: 'Cholera ',
choice2: 'Measles ',
choice3: 'Tetanus',
choice4: 'Tuberculosis',
choice5: 'Typhoid',
answer: 4,
},
{
question: 'Gaseous exchange between air and blood in the lungs takes place in the',
choice1: 'alveoli',
choice2: 'bronchi',
choice3: 'bronchioles',
choice4: 'larynx',
choice5: 'trachea',
answer: 1,
},
{
question: 'The stretched arm of a JSS student holding a stone in the palm is an example of a',
choice1: 'First class lever',
choice2: 'Second class lever ',
choice3: 'Third class lever ',
choice4: 'Fourth class lever ',
choice5: 'Fifth class lever',
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

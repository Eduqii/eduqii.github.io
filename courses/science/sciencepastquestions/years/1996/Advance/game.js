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
	question: 'Which of the following is a sexually transmitted disease?',
choice1: 'Cholera',
choice2: 'Rickets',
choice3: 'Tuberculosis',
choice4: 'Syphilis',
choice5: 'Measles',
answer: 4,
},
{
question: 'The excretory organs in man are the',
choice1: 'Kidneys and urethra',
choice2: 'Kidneys and the skin',
choice3: 'Kidneys, lungs and the skin',
choice4: 'Kidneys and the lungs',
choice5: 'Kidneys, bladder and urethra',
answer: 3,
},
{
question: 'Which of the following farming practices is the best way of maintaining soil fertility?',
choice1: 'Crop rotation',
choice2: 'Seasonal cropping ',
choice3: 'Constant ploughing ',
choice4: 'Bush burning',
choice5: 'Mono cropping',
answer: 1,
},
{
question: 'Which of the following is not considered as a reflex action?',
choice1: 'Blinking of the eye',
choice2: 'Moving the hand from a hot object',
choice3: 'Jerking of the knee',
choice4: 'Talking while eating',
choice5: 'Coughingto remove an object from the throat',
answer: 4,
},
{
question: 'A boy exerts a force of 40.0 N to lift a load into a vehicle. If the work done is 80.0 J, calculate the distance through which the load is lifted', 
choice1: '0.5 m ',
choice2: '2.0 m ',
choice3: '40.0 m',
choice4: '120.0 m',
choice5: '3200.0 m',
answer: 2,
},
{
question: 'Which of the following arrangements is the correct order ofincreasing complexityof thestructure?',
choice1: 'Cells → systems → tissues → organs ',
choice2: 'Cells → tissues → systems → organs ',
choice3: 'Cells → organs → tissues → systems ',
choice4: 'Cells → systems → organs → tissues ',
choice5: 'Cells → tissues → organs → systems',
answer: 5,
},
{
question: 'The law of conservation of energystates that energycan',
choice1: 'be created but not transformed',
choice2: 'be destroyed but not transformed',
choice3: 'neither be created nor transformed',
choice4: 'not be created but can be transformed',
choice5: 'neither be created nor destroyed, but only be transformed',
answer: 5,
},
{
question: 'On the moon, therearelargeholescalled',
choice1: 'valleys ',
choice2: 'gullies ',
choice3: 'spurs ',
choice4: 'craters ',
choice5: 'pits',
answer: 4,
},
{
question: 'The darkest part of a shadow formed during an eclipse is called',
choice1: 'Lunar eclipse',
choice2: 'Annular eclipse',
choice3: 'Penumbra',
choice4: 'Umbra',
choice5: 'Solar eclipse',
answer: 4,
},
{
question: 'The main waste products formed in plants are',
choice1: 'water, carbondioxide and urea',
choice2: 'water, carbondioxide and oxygen',
choice3: 'water, carbondioxide and mineral salts',
choice4: 'water, ammoniumcompounds and oxygen',
choice5: 'water, ammoniumcompounds and carbondioxide',
answer: 4,
},
{
question: 'A mixture of sand and water can be separated through',
choice1: 'filtration',
choice2: 'ionization',
choice3: 'condensation ',
choice4: 'sedimentation ',
choice5: 'evaporation',
answer: 1,
},
{
question: 'Which of the following chemical equations is the correct representation of the preparation of carbon dioxide?',
choice1: 'CaCO3+2HCl→ CaO +Cl2+H2+CO2',
choice2: 'CaCO3+2HCl→ CaCl2+H2CO3',
choice3: 'CaCO3+2HCl → CaO +Cl2+H2O +CO2',
choice4: 'CaCO3+2HCl → CaCl2+H2+CO2',
choice5: 'CaCO3+2HCl → CaCl2+H2O +CO2',
answer: 5,
},
{
question: 'Which of the following is not an example of matter?',
choice1: 'Hydrogen',
choice2: 'Oxygen',
choice3: 'Light',
choice4: 'Water',
choice5: 'Charcoal',
answer: 3,
},
{
question: 'A stone with mass 80.0g was put into a measuring cylinder containing water. If the water level rises by 20.0 cm, calculate the density of the stone.',
choice1: '0.25 gcm-3',
choice2: '1.20 gcm-3',
choice3: '1.80 gcm-3',
choice4: '3.30 gcm-3',
choice5: '4.00 gcm-3',
answer: 5,
},
{
question: 'The sun is made up of burning',
choice1: 'gases ',
choice2: 'rocks ',
choice3: 'gold ',
choice4: 'coal',
choice5: 'sulphur',
answer: 1,
},
{
question: 'The force overcome by a machine is known as the',
choice1: 'effort ',
choice2: 'load ',
choice3: 'pivot ',
choice4: 'lever ',
choice5: 'work',
answer: 2,
},
{
question: 'Calculate the work done when a weight of 20.0N is lifted vertically through a distance of 10.0cm',
choice1: '2000.0 J ',
choice2: '200.0 J ',
choice3: '20.0 J',
choice4: '2.0 J ',
choice5: '0.2 J',
answer: 4,
},
{
question: 'Heat travels through a vacuum by a process known as',
choice1: 'conduction ',
choice2: 'convection ',
choice3: 'radiation',
choice4: 'vibration',
choice5: 'transmission',
answer: 3,
},
{
question: 'Soil aeration can be improved by',
choice1: 'Addingmineral to the soil',
choice2: 'Application of fertilizer to thesoil',
choice3: 'Weathering',
choice4: 'Activities of earthworms',
choice5: 'Manuring',
answer: 4,
},
{
question: 'Which of the following does not play any part indigestion?',
choice1: 'Mouth',
choice2: 'duodenum',
choice3: 'rectum ',
choice4: 'pancreas ',
choice5: 'Stomach',
answer: 3,
},
{
question: 'Most machines waste energy because of',
choice1: 'old age',
choice2: 'force',
choice3: 'friction',
choice4: 'load',
choice5: 'too much effort',
answer: 3,
},
{
question: 'All the following add nitrates to the soil except',
choice1: 'Okro',
choice2: 'Broad beans ',
choice3: 'French beans ',
choice4: 'Groundnuts ',
choice5: 'Pigeon pea',
answer: 1,
},
{
question: 'The blood in mammals is composed of',
choice1: 'a red liquid',
choice2: 'red blood cells and white blood cells',
choice3: 'liquid plasma and solid corpuscles',
choice4: 'blood protein and glycerol',
choice5: 'sugar and mineral salts only',
answer: 3,
},
{
question: 'In a machine, 200.0 J of energy was lost as heat. If the energy input is 600.0 J, what is the efficiency of the machine?',
choice1: '67%',
choice2: '40%',
choice3: '33%',
choice4: '30%',
choice5: '12%',
answer: 1,
},
{
question: 'The type of energy stored in fuels is called',
choice1: 'light energy',
choice2: 'solar energy',
choice3: 'electrical energy',
choice4: 'kinetic energy',
choice5: 'chemical energy',
answer: 5,
},
{
question: 'An object at rest may have',
choice1: 'velocity',
choice2: 'momentum',
choice3: 'kinetic energy ',
choice4: 'potential energy ',
choice5: 'acceleration',
answer: 4,
},
{
question: 'Birds are able to fly because they have',
choice1: 'hollow bones',
choice2: 'web legs',
choice3: 'tail feathers',
choice4: 'flat chest',
choice5: 'wide eyes',
answer: 1,
},
{
question: 'The chief source of energy in the world today is',
choice1: 'coal',
choice2: 'crudeoil',
choice3: 'naturalgas',
choice4: 'uranium',
choice5: 'water',
answer: 2,
},
{
question: 'Which of the following is used by plants to make its food?',
choice1: 'carbonmonoxide',
choice2: 'oxygen',
choice3: 'carbondioxide',
choice4: 'hydrogen',
choice5: 'nitrogen',
answer: 3,
},
{
question: 'Sleeping sickness is spread by',
choice1: 'blackfly',
choice2: 'firefly',
choice3: 'Mosquito',
choice4: 'Housefly',
choice5: 'Tsetse fly',
answer: 5,
},
{
question: 'An example of a crop that reduces the fertility of the soil rapidly is',
choice1: 'Beans',
choice2: 'Legumes',
choice3: 'Groundnuts',
choice4: 'Cassava',
choice5: 'Plantain',
answer: 4,
},
{
question: 'The black pod diseasewhich attacks cocoapods is causedby',
choice1: 'virus',
choice2: 'bacterium',
choice3: 'plasmodium',
choice4: 'fungus',
choice5: 'protozoa',
answer: 4,
},
{
question: 'The organ which enables a fish to breathe in water is the',
choice1: 'Nostril',
choice2: 'Pectoral fin',
choice3: 'Dorsal fin',
choice4: 'Gallbladder',
choice5: 'Gill',
answer: 5,
},
{
question: 'Which of the following part of a flower grows into the seed?',
choice1: 'Stamen ',
choice2: 'Ovule ',
choice3: 'Ovary ',
choice4: 'Stigma ',
choice5: 'Sepal',
answer: 2,
},
{
question: 'When the palms of thehand are rubbed together,kinetic energyis changedto',
choice1: 'thermal energy ',
choice2: 'potential energy ',
choice3: 'solar energy',
choice4: 'elastic energy',
choice5: 'chemical energy',
answer: 1,
},
{
question: 'Trees in desert regions havethick barkswhich enables themto',
choice1: 'prevent heat loss ',
choice2: 'absorb morelight ',
choice3: 'prevent water loss ',
choice4: 'absorb morewater',
choice5: 'absorb moreoxygen',
answer: 3,
},
{
question: 'Which of the following is true about loamy soil?\n' +

'I. Is formed from a mixture of sand and clay' +
'II. It is good for plant cultivation' +
'III. Its water retention is poor',
choice1: 'I only',
choice2: 'I and II only ',
choice3: 'I and III only ',
choice4: 'II and III only ',
choice5: 'I, II and III',
answer: 2,
},
{
question: 'In which part of the alimentarycanal is food finallychanged into a form that can be absorbed into the bloodstream?',
choice1: 'small intestines',
choice2: 'oesophagus',
choice3: 'mouth',
choice4: 'stomach',
choice5: 'large intestines',
answer: 1,
},
{
question: 'In which units are the vast distances between stars in space measured?',
choice1: 'Knots',
choice2: 'Kilometres',
choice3: 'Furlongs',
choice4: 'Miles',
choice5: 'Lightyears',
answer: 5,
},
{
question: 'Which of the following happens during fertilization in humans?',
choice1: 'A membraneforms around the egg ',
choice2: 'onlyonesperm fuses with the egg ',
choice3: 'the eggdivides into two',
choice4: 'the eggmoves down into the eggtube',
choice5: 'the eggmoves down into the womb',
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

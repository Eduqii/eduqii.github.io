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
question: 'Plants are different from animals because they',
choice1: 'have protoplasm ',
choice2: 'have chlorophyll ',
choice3: 'are able to respire',
choice4: 'are able to reproduce sexually',
answer: 2,
},
{
question: 'Which of the following conditions is not required fora current to flow through an electric circuit?',
choice1: 'The circuit should be closed',
choice2: 'A battery must be present',
choice3: 'There must be connecting wires',
choice4: 'A bulb must be connected in the circuit',
answer: 4,
},
{
question: 'Which of the following examples is a source of energy?',
choice1: 'Electricity ',
choice2: 'Heat ',
choice3: 'Light ',
choice4: 'Wood',
answer: 4,
},
{
question: 'Heat is transferred from the bottom of water in a container to the top by',
choice1: 'conduction ',
choice2: 'convection ',
choice3: 'radiation ',
choice4: 'conduction and radiation',
answer: 2,
},
{
question: 'A mercury thermometer works on the principle that',
choice1: 'solids expand on heating and contract on cooling ',
choice2: 'liquids expand on heating and contract on cooling ',
choice3: 'gases expand on heating and contract on cooling',
choice4: 'liquids evaporate when heated to a certain temperature.',
answer: 2,
},
{
question: 'In which of the positions Q, R, S, T in the diagram below will a body have the greatest potential energy?',
choice1: 'Q ',
choice2: 'R ',
choice3: 'S ',
choice4: 'T',
answer: 2,
},
{
question: 'A solar cell produces electrical energy from',
choice1: 'electromagnets ',
choice2: 'heat ',
choice3: 'light ',
choice4: 'sound',
answer: 3,
},
{
question: 'In a third class lever the',
choice1: 'pivot is between the load and effort',
choice2: 'pivot is absent',
choice3: 'load is between the effort and pivot',
choice4: 'effort is between the load and pivot',
answer: 4,
},
{
question: 'At which positions S, R,Q and P on the lever in the diagram below must a force be applied to lift the load most ',
choice1: 'P ',
choice2: 'Q ',
choice3: 'R ',
choice4: 'S',
answer: 1,
},
{
question: 'Which of the following machines works on the same principle as an inclined plane?',
choice1: 'Bottle opener ',
choice2: 'Wheelbarrow ',
choice3: 'See-saw ',
choice4: 'Screw',
answer: 2,
},
{
question: 'Power is defined as the',
choice1: 'ability to do work',
choice2: 'force to move an object',
choice3: 'rate of doing work',
choice4: 'ability to replace energy used',
answer: 3,
},
{
question: 'Which of the following food substances is not involved in respiration?',
choice1: 'Amino acids ',
choice2: 'Fatty acids ',
choice3: 'Glucose ',
choice4: 'Vitamins',
answer: 4,
},
{
question: 'Which of the following organisms is at the beginning of a food chain?',
choice1: 'Fish ',
choice2: 'Grass ',
choice3: 'Locust ',
choice4: 'Mosquito',
answer: 2,
},
{
question: 'The human male sex cell that takes part in reproduction is the',
choice1: 'penis ',
choice2: 'scrotum ',
choice3: 'sperm ',
choice4: 'testis',
answer: 3,
},
{
question: 'The removal of waste products from the cells of organisms is called',
choice1: 'assimilation ',
choice2: 'circulation ',
choice3: 'exhalation ',
choice4: 'excretion',
answer: 4,
},
{
question: 'The central nervous system consists of the',
choice1: 'spinal cord and spine',
choice2: 'brain and the nerves',
choice3: 'brain and the spinal cord',
choice4: 'skeletal system and skull',
answer: 3,
},
{
question: 'Which of the following life processes is not performed by all living things?',
choice1: 'Excretion ',
choice2: 'Photosynthesis ',
choice3: 'Reproduction ',
choice4: 'Respiration',
answer: 2,
},
{
question: 'All veins in the body carry blood that does not contain oxygen with the exception of the veins from the',
choice1: 'heart ',
choice2: 'kidneys ',
choice3: 'lungs ',
choice4: 'liver',
answer: 3,

question: 'The method of purification of water containing very little impurities is',
choice1: 'boiling ',
choice2: 'chlorination ',
choice3: 'distillation ',
choice4: 'filtration',
answer: 3,
},
{
question: 'Boiling and chlorination are used in water purification to',
choice1: 'kill germs',
choice2: 'help suspended particles to settle',
choice3: 'remove suspended particles',
choice4: 'remove hardness of the water',
answer: 1,
},
{
question: 'The chemical symbol C is the symbol for',
choice1: 'calcium ',
choice2: 'chlorine ',
choice3: 'carbon ',
choice4: 'sodium',
answer: 3,
},
{
question: 'A substance which is made up of the same kind of atoms is called',
choice1: 'a compound ',
choice2: 'a mixture ',
choice3: 'an element ',
choice4: 'an ion',
answer: 3,
},
{
question: 'Which of the following processes results in the formation of new substances?',
choice1: 'Heating camphor',
choice2: 'Cooling water to form ice',
choice3: 'Adding saliva to cooked yam',
choice4: 'Mixing iron dust and sand together',
answer: 3,
},
{
question: 'When elements combine to form a compound the',
choice1: 'constituents can be separated by a physical process',
choice2: 'volume of the compound is the sum of the volumes of the constituents',
choice3: 'reaction does not involve a heat change',
choice4: 'reaction can be represented by a chemical formula',
answer: 4,
},
{
question: 'Which of the following organisms is likely to increase the oxygen content of the water in a pond?',
choice1: 'Fish ',
choice2: 'Tadpole ',
choice3: 'Mosquito larva ',
choice4: 'Waterlily',
answer: 4,
},
{
question: 'Which of the following parasites is a plant?',
choice1: 'Bilharzia ',
choice2: 'Dodder ',
choice3: 'Lice ',
choice4: 'Tapeworm',
answer: 2,
},
{
question: 'The part of the soil that is most important for the growth of plants is',
choice1: 'clay ',
choice2: 'humus ',
choice3: 'sand ',
choice4: 'silt',
answer: 2,
},
{
question: 'Which of the following diseases may be associated with water?',
choice1: 'chicken pox ',
choice2: 'cholera ',
choice3: 'smallpox ',
choice4: 'tetanus',
answer: 2,
},
{
question: 'The mosquito and housefly are harmful in that they',
choice1: 'suck blood ',
choice2: 'bite and cause pain',
choice3: 'settle on food', 
choice4: 'spread diseases',
answer: 4,
},
{
question: 'Which of the following diseases affects the central nervous system?',
choice1: 'Cerebro Spinal Meningitis(CSM)', 
choice2: 'Poliomyelitis ',
choice3: 'Measles ',
choice4: 'Yellow Fever',
answer: 1,
},
{
question: 'Day and night occur because the earth',
choice1: 'moves round the sun',
choice2: 'moves from east to west ',
choice3: 'moves round the moon ',
choice4: 'rotates on its axis',
answer: 4,
},
{
question: 'Bronze is an alloy of',
choice1: 'iron and carbon ',
choice2: 'zinc and copper ',
choice3: 'iron and zinc ',
choice4: 'copper and tin',
answer: 4,
},
{
question: 'Which of the following substances causes acid rain when released into the atmosphere?',
choice1: 'Carbon dioxide ',
choice2: 'Water vapour ',
choice3: 'Sulphur dioxide ',
choice4: 'cement dust',
answer: 3,
},
{
question: 'Which of the following gases helps in rusting?',
choice1: 'Carbon dioxide ',
choice2: 'Hydrogen ',
choice3: 'Oxygen ',
choice4: 'Nitrogen',
answer: 3,
},
{
question: 'The force of attraction between molecules of different substances is called',
choice1: 'adhesion ',
choice2: 'cohesion ',
choice3: 'tension ',
choice4: 'virscosity',
answer: 1,
},
{
question: 'A metal block has a mass of 0.1kg. Calculate its volume if the density is 1.0 kgm-3.',
choice1: '0.01 m3 ',
choice2: '0.10 m3 ',
choice3: '1.00 m3 ',
choice4: '10.00 m3',
answer: 2,
},
{
question: 'The food manufactured by a plant is distributed to all parts of the plant through the',
choice1: 'chlorophyll ',
choice2: 'phloem ',
choice3: 'stomata ',
choice4: 'xylem',
answer: 2,
},
{
//38.', answer: 3,
},
{
question: 'Oxygen is made available to all cells of the human body by the',
choice1: 'plasma ',
choice2: 'platelets ',
choice3: 'white blood cells ',
choice4: 'red blood cells',
answer: 4,
},
{
question: 'The force which pulls all objects towards the centre of the earth is the',
choice1: 'frictional force',
choice2: 'electrostatic force ',
choice3: 'gravitational force ',
choice4: 'rotational force.',
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

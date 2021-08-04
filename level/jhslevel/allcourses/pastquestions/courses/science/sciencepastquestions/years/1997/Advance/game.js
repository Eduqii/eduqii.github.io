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
		question: 'Digested food is absorbed into the blood stream through the',
choice1: 'duodenum',
choice2: 'large intestines',
choice3: 'rectum',
choice4: 'small intestines',
choice5: 'stomach',
answer: 4,
},
{
question: 'Which of the following is parasite?',
choice1: 'Fruitfly ',
choice2: 'Housefly ',
choice3: 'Mosquito ',
choice4: 'Tick',
choice5: 'Tsetse fly',
answer: 4,
},
{
question: 'Soil acidity can be reduced by adding',
choice1: 'acid solution',
choice2: 'ammonium sulphate',
choice3: 'fertilizer',
choice4: 'lime',
choice5: 'rotten leaves',
answer: 4,
},
{
question: 'The planet earth is located in agalaxyknownas',
choice1: 'constellation',
choice2: 'meteorites ',
choice3: 'milkyway ',
choice4: 'satellite',
choice5: 'supernova',
answer: 3,
},
{
question: 'The most productive soil in agriculture is',
choice1: 'clayey soil ',
choice2: 'loamy soil ',
choice3: 'sandy soil ',
choice4: 'humus',
choice5: 'silt',
answer: 2,
},
{
question: 'A chemical that can be used to test for the presence of protein in food substances is',
choice1: 'Benedict’s solution ',
choice2: 'Fehling’s solution ',
choice3: 'Eosin solution',
choice4: 'Iodine solution',
choice5: 'Million’s reagent',
answer: 5,
},
{
question: 'According to the principle of conservation of energy, ‘energy can',
choice1: 'be created and destroyed',
choice2: 'be created but not destroyed ',
choice3: 'be destroyed but not created ',
choice4: 'be reduced but not increased',
choice5: 'neither becreated nor destroyed',
answer: 5,
},
{
question: 'The purpose of vaccination is to',
choice1: 'replace poisoned tissues',
choice2: 'kill disease-producingorganisms in thebody',
choice3: 'increase the activity of white blood cells',
choice4: 'induce the production of antibodies',
choice5: 'cure the disease',
answer: 4,
},
{
question: 'Which of the following planets may be seen as a bright star in early mornings orevenings?',
choice1: 'Jupiter ',
choice2: 'Mars ',
choice3: 'Saturn',
choice4: 'Uranus',
choice5: 'Venus',
answer: 5,
},
{
question: 'Which of the following gives the correct order by which blood circulates continuously through the circulatory system?',
choice1: 'Heart → veins → organs→ arteries → heart ',
choice2: 'Heart → arteries → organs → veins → heart ',
choice3: 'Heart → arteries → veins → organs → heart',
choice4: 'Heart →organs → arteries → veins → heart',
choice5: 'Heart → veins → arteries → organs → heart',
answer: 2,
},
{
question: 'The weight of an object isthe',
choice1: 'force with which the sun pulls it',
choice2: 'force with which the moon pulls it',
choice3: 'force of the object when gravity is not acting on it',
choice4: 'force with which gravity acts on it',
choice5: 'mass of the object',
answer: 4,
},
{
question: 'The process of fusion ofsperm and ovum is known as',
choice1: 'fertilization ',
choice2: 'menstruation ',
choice3: 'pollination',
choice4: 'reproduction',
choice5: 'lactation',
answer: 1,
},
{
question: 'How much work is done when a kerosene tin is pushed with a force of 20N through a distance of 2m?',
choice1: '0.01 J ',
choice2: '0.10 J ',
choice3: '10.0 J ',
choice4: '20.0 J ',
choice5: '40.0 J',
answer: 5,
},
{
question: 'Which of the following form part of the alimentary canal?\n' +
'I. Colon II. Gullet III. Liver IV. Pancreas',
choice1: 'I and II only ',
choice2: 'I and IV only ',
choice3: 'IIand III only ',
choice4: 'IIand IV only',
choice5: 'I,IIand III only',
answer: 1,
},
{
question: 'An exampleof asimple lever whoseeffort is at its centreis',
choice1: 'abottle opener',
choice2: 'a pair of scissors ',
choice3: 'a pair of forceps ',
choice4: 'the beam balance',
choice5: 'wheelbarrow',
answer: 3,
},
{
question: 'Which of the following leaves are sensitive to touch?',
choice1: 'Cassava leaves ',
choice2: 'Mimosa leaves ',
choice3: 'Orange leaves ',
choice4: 'Palm leaves',
choice5: 'Tomato leaves',
answer: 2,
},
{
question: 'Which of the following properties is / are common to both liquids and gases?',
choice1: 'Fixed shape',
choice2: 'Fixed shape and fixed volume',
choice3: 'Fixed size',
choice4: 'No definite shape',
choice5: 'No definite shape and no definite volume',
answer: 4,
},
{
question: 'Which of the following plants has suckers?',
choice1: 'Onion ',
choice2: 'Orange ',
choice3: 'Plantain',
choice4: 'Sweet Potato',
choice5: 'Yam',
answer: 3,
},
{
question: 'Which of the following activities of man causes both air and water pollution?',
choice1: 'Afforestation',
choice2: 'Construction of houses ',
choice3: 'Construction of roads',
choice4: 'Deforestation',
choice5: 'Industrialization',
answer: 5,
},
{
question: ' The number of hydrogen atoms present in two molecules of water is',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
choice5: '5',
answer: 4,
},
{
question: 'Decay is an important biological process because it brings about the',
choice1: 'formation of nutrients in living organisms ',
choice2: 'manufacture of cells of livingorganisms ',
choice3: 'production of oxygen byplants',
choice4: 'release of nutrients from dead organisms',
choice5: 'release of waste substances from bacteria',
answer: 4,
},
{
question: 'The darkest part of a shadow formed during an eclipse is called',
choice1: 'annulareclipse',
choice2: 'lunar eclipse',
choice3: 'penumbra',
choice4: 'solar eclipse',
choice5: 'umbra',
answer: 5,
},
{
question: 'Which of the following particles can be found inthe nucleus of anatom?',
choice1: 'Electrons and protons',
choice2: 'Electrons and shells',
choice3: 'Neutrons and electrons ',
choice4: 'Neutrons and protons ',
choice5: 'Shells andneutrons',
answer: 4,
},
{
question: 'Which of the following substances isusedto purifywaterfortown supply?',
choice1: 'Alcohol',
choice2: 'Carbondioxide',
choice3: 'Chlorine ',
choice4: 'Nitrogen ',
choice5: 'Sulphur',
answer: 3,
},
{
question: 'The shedding of leaves by plants during the dry season protects them against',
choice1: 'bush fire',
choice2: 'cold weather',
choice3: 'plant-eating animals',
choice4: 'heat loss',
choice5: 'waterloss',
answer: 5,
},
{
question: 'The volume of water in a container rises when a piece of stone is put into the container. The changein the volumeof wateris equalto the',
choice1: 'mass of the container',
choice2: 'mass of the stone',
choice3: 'densityof the stone ',
choice4: 'density of the water ',
choice5: 'volume of the stone',
answer: 5,
},
{
question: 'Which of the following carrydeoxygenated blood in thebody?',
choice1: 'Arteries',
choice2: 'Red blood cells',
choice3: 'Valves',
choice4: 'Veins',
choice5: 'White blood cells',
answer: 4,
},
{
question: 'Which of the following forces will cause an object to move in a circularpath?',
choice1: 'Centripetal force',
choice2: 'Gravitational force',
choice3: 'Inertial force ',
choice4: 'Reaction force ',
choice5: 'Tensional force',
answer: 1,
},
{
question: 'The paired fins in fishes are used for',
choice1: 'protection and diving ',
choice2: 'diving and balancing ',
choice3: 'balancing and control ',
choice4: 'steering and diving',
choice5: 'balancing and steering',
answer: 5,
},
{
question: 'In which of the following is urine produced?',
choice1: 'Bladder',
choice2: 'Kidney',
choice3: 'Liver',
choice4: 'Penis and vagina',
choice5: 'uterus',
answer: 2,
},
{
question: 'Photosynthesis occurs only in green plants because they',
choice1: 'absorb water',
choice2: 'are found in the tropics',
choice3: 'are very active',
choice4: 'contain chlorophyll',
choice5: 'take in carbondioxide',
answer: 4,
},
{
question: 'The food weeat undergoes slow oxidation in ourbodies to produceheat.In this process',
choice1: 'chemical energy is converted to heat energy ',
choice2: 'electrical energy is converted to heat energy ',
choice3: 'kinetic energy is converted to heat energy',
choice4: 'mechanical energy is converted to heatenergy',
choice5: 'potential energy is converted to heat energy',
answer: 1,
},
{
question: 'Which ofthe following planets is nearest to theearth?',
choice1: 'Jupiter ',
choice2: 'Mercury ',
choice3: 'Pluto',
choice4: 'Saturn',
choice5: 'Venus',
answer: 5,
},
{
question: 'Which ofthe following organs help to improvesoilfertility?',
choice1: 'Earthworms',
choice2: 'Guineaworms',
choice3: 'Hookworms ',
choice4: 'Roundworms ',
choice5: 'Thread worms',
answer: 1,
},
{
question: 'A stone released from acatapult was able to kill a bird because',
choice1: 'the stone had a lot of energy',
choice2: 'the stone was sharp',
choice3: 'there was tension in thestone',
choice4: 'the rubber of the catapult was strong',
choice5: 'the stone was big',
answer: 1,
},
{
question: 'Which of the following is a plant parasite?',
choice1: 'Capsid',
choice2: 'Caterpillar',
choice3: 'Dodder',
choice4: 'Louse',
choice5: 'Nematode',
answer: 3,
},
{
question: 'By the end of digestion, lean meat is turned into',
choice1: 'amino acids ',
choice2: 'fattyacids ',
choice3: 'glycerol',
choice4: 'glucose',
choice5: 'sugar',
answer: 1,
},
{
question: 'In which of the following electrical appliances is electrical energy mainly converted to heat energy?',
choice1: 'Cooker',
choice2: 'Fan',
choice3: 'Refrigerator ',
choice4: 'Taperecorder ',
choice5: 'Television set',
answer: 1,
},
{
question: 'The energy for lighting a torchlight bulb comes from the',
choice1: 'bulb',
choice2: 'cell',
choice3: 'filament',
choice4: 'glass',
choice5: 'switch',
answer: 2,
},
{
question: 'Thelargest component of sweat is',
choice1: 'glucose',
choice2: 'oil ',
choice3: 'salt ',
choice4: 'urea',
choice5: 'water',
answer: 5,
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

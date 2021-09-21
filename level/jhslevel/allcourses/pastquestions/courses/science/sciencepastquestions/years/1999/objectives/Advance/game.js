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
question: 'A mixture of sand and common salt could be separated by',
choice1: 'filtration and distillation',
choice2: 'dissolution and evaporation',
choice3: 'dissolution, sedimentation and evaporation',
choice4: 'dissolution, filtration and evaporation',
choice5: 'sedimentation and filtration',
answer: 4,
},
{
question: 'What structure links the mouth to the stomach',
choice1: 'Colon',
choice2: 'Duodenum ',
choice3: 'Oesophagus ',
choice4: 'Rumen',
choice5: 'Trachea',
answer: 3,
},
{
question: 'Which of the following organisms causes bilharziasis?',
choice1: 'Blood fluke',
choice2: 'Bloodworm ',
choice3: 'Liver fluke ',
choice4: 'Roundworm ',
choice5: 'Tapeworm',
answer: 1,
},
{
question: 'Which of the following processes is a chemical change?',
choice1: 'Digestion of starch by saliva',
choice2: 'Melting of wax',
choice3: 'Dissolution of sugar in water',
choice4: 'Boiling of water',
choice5: 'Evaporation of sea water',
answer: 1,
},
{
question: 'An atom has 5 protons and 5 neutrons in its nucleus. How many electrons are present in the atom?',
choice1: '1',
choice2: '2',
choice3: '5',
choice4: '9',
choice5: '10',
answer: 3,
},
{
question: 'Which of the following features in plants are used for defence?',
choice1: 'Buds',
choice2: 'Leaf spines',
choice3: 'Pitchers',
choice4: 'Roots',
choice5: 'Tendrils',
answer: 2,
},
{
question: 'The ability of birds to fly depends on',
choice1: 'Their hollow bones only',
choice2: 'Their flight feathers only',
choice3: 'Their feathers covering their bodies',
choice4: 'Their hollow bones and flightfeathers',
choice5: 'Their light bodies only',
answer: 4,
},
{
question: 'Gases are more compressible than solids because: ',
choice1: 'Solids have harder surfaces',
choice2: 'There are wider spaces between gas molecules',
choice3: 'Gases have fixed volumes',
choice4: 'The particles of solids are regularly arranged',
choice5: 'The molecules of gases are randomly arranged',
answer: 2,
},
{
question: 'Which of the following statements about machines is / are true?\n' +
'I. The commonest and simplest of all machines is the lever' + 
'II. The efficiency of a machine is the ratio of work output to work input' +
'III. The efficiency of a machine is usually less than one' + 
'IV. Machines make working much easier and convenient',
choice1: 'I only',
choice2: 'I and II only',
choice3: 'I and III only',
choice4: 'I, II and III only',
choice5: 'I, II, III and IV',
answer: 5,
},
{
question: 'Which of the following substances reacts with ammonium chloride to produce ammonia gas?',
choice1: 'Calcium hydroxide',
choice2: 'Calcium chloride ',
choice3: 'Calcium carbonate ',
choice4: 'Calcium sulphate ',
choice5: 'Calcium nitrate',
answer: 1,
},
{
question: 'Plastic materials may be used to make the handles of cooking utensils because they are',
choice1: 'Hard',
choice2: 'Poor conductors ofheat',
choice3: 'Attractive',
choice4: 'Easyto wash',
choice5: 'Not poisonous',
answer: 2,
},
{
question: 'Which of the following substances will turn red litmus paper blue?',
choice1: 'Hydrochloric acid',
choice2: 'Sodium chloride solution',
choice3: 'Sulphuric acid',
choice4: 'Water',
choice5: 'Sodium hydroxide',
answer: 5,
},
{
question: 'The heat of the sun reaches the earth through',
choice1: 'radiation',
choice2: 'convection',
choice3: 'conduction',
choice4: 'both radiation and conduction',
choice5: 'both radiation and convection',
answer: 1,
},
{
question: 'The mineral salts in dead organisms become available to the soil through',
choice1: 'Decomposition',
choice2: 'Diffusion',
choice3: 'Fermentation',
choice4: 'Leaching',
choice5: 'Manuring',
answer: 1,
},
{
question: 'A ray of light is incident at an angle of 30° to the surface of a plane mirror. Calculate the angle of reflection.',
choice1: '30° ',
choice2: '60° ',
choice3: '90° ',
choice4: '120° ',
choice5: '180°',
answer: 2,
},
{
question: 'Salt could be obtained from sea water by',
choice1: 'boiling',
choice2: 'condensation',
choice3: 'decantation ',
choice4: 'distillation',
choice5: 'evaporation',
answer: 5,
},
{
question: 'A fertilised ovum is known as',
choice1: 'agamete ',
choice2: 'a zygote ',
choice3: 'oocyte',
choice4: 'an ovary',
choice5: 'a foetus',
answer: 2,
},
{
question: 'The smallest planet known in the solar system is',
choice1: 'Earth ',
choice2: 'Jupiter ',
choice3: 'Mars',
choice4: 'Mercury',
choice5: 'Venus',
answer: 4,
},
{
question: 'The organic constituent of the soil is',
choice1: 'Air',
choice2: 'Humus',
choice3: 'Mineral salts ',
choice4: 'Rock particles ',
choice5: 'Water',
answer: 2,
},
{
question: 'A car head lamp lights up when connected to abattery. What type of energy is obtained from the battery?',
choice1: 'Chemical energy ',
choice2: 'Electrical energy ',
choice3: 'Heat energy',
choice4: 'Light energy',
choice5: 'Potential energy',
answer: 2,
},
{
question: 'Which of the following statements about bacteriais true?\n' +
'I. All infections are causedbybacteria II. Mostbacteria areharmless to man III. Sterilisation does not killbacteria',
choice1: 'I only ',
choice2: 'II only ',
choice3: 'III only',
choice4: 'II and III only',
choice5: 'I and II only',
answer: 2,
},
{
question: 'Which of the following organisms is a parasite on plants?',
choice1: 'Bee',
choice2: 'Butterfly',
choice3: 'Capsid ',
choice4: 'Red ant ',
choice5: 'Tick',
answer: 3,
},
{
question: 'The main parts of the central nervous system are the',
choice1: 'brain and nerves',
choice2: 'spinal cord and the nerves',
choice3: 'brain and the spinal cord',
choice4: 'brain, the nerves and the spinal cord',
choice5: 'brain, the eyes, the ears and the nerves',
answer: 3,
},
{
question: 'Which of the following pairs of diseases can be spread easily when food is exposed to houseflies?',
choice1: 'Cholera and GuineaWorm',
choice2: 'Dysentery and Malaria',
choice3: 'Dysenteryand GuineaWorm',
choice4: 'Malaria and tuberculosis',
choice5: 'Dysentery and cholera',
answer: 5,
},
{
question: 'Which of the following activities is a mode of transmission of AIDS?',
choice1: 'Shaking hands with an infected person',
choice2: 'Eating with an infected person',
choice3: 'Having sex with an infected person',
choice4: 'Sharing clothes with an infected person',
choice5: 'Sleeping in the same room with an infected person',
answer: 3,
},
{
question: 'The eclipse of the moon occurs when the',
choice1: 'moon and the sun are in a straight line ',
choice2: 'earth and the sun are in a straight line ',
choice3: 'sun is between the earth and the moon ',
choice4: 'earth is between the sun and the moon',
choice5: 'moon comes between the sun and the earth',
answer: 4,
},
{
question: 'Spitting in public is a bad social habit because it',
choice1: 'makes the environment humid',
choice2: 'reduces the amount of air in the body',
choice3: 'reduces the amount of waterin thebody',
choice4: 'releases disease-causing organisms into the environment',
choice5: 'reduces the amount of saliva in the mouth',
answer: 4,
},
{
question: 'The male sex cells in the flower are found in the',
choice1: 'filament',
choice2: 'ovary',
choice3: 'ovule',
choice4: 'pollen grains',
choice5: 'stigma',
answer: 4,
},
{
question: 'Which of the following substances is a pollutant?',
choice1: 'Domestic waste',
choice2: 'Fog',
choice3: 'Nitrogen',
choice4: 'Oxygen',
choice5: 'Treated Waste',
answer: 1,
},
{
question: 'Digestion of protein starts in the',
choice1: 'duodenum',
choice2: 'gullet',
choice3: 'mouth',
choice4: 'small intestine',
choice5: 'stomach',
answer: 5,
},
{
question: 'The sun, the heavenly bodies and the planets form the',
choice1: 'atmosphere',
choice2: 'galaxy',
choice3: 'milkyway ',
choice4: 'solarsystem ',
choice5: 'universe',
answer: 5,
},
{
question: 'Which of the following practicesencourages soilerosion?',
choice1: 'Planting trees on baresoil',
choice2: 'Clearing trees and slopes',
choice3: 'Planting grasses along slopes',
choice4: 'Ploughing across slopes',
choice5: 'Preventing bushfires',
answer: 2,
},
{
question: 'Which of the following metals is an alloy?',
choice1: 'Aluminium',
choice2: 'Brass ',
choice3: 'Copper ',
choice4: 'Iron',
choice5: 'Zinc',
answer: 2,
},
{
question: 'Which of the following statements about plants is true?\n' +
'I. Most plants show movement\n\n' +
'II. Green plants manufacture their own food\n\n' +
'III. All animals depend directly on plants for food',
choice1: 'I only ',
choice2: 'II only ',
choice3: 'III only',
choice4: 'I and II only',
choice5: 'II and III only',
answer: 2,
},
{
question: 'Which of the following practices will destroy the breeding grounds of mosquitoes?',
choice1: 'Sleeping in mosquito nets ',
choice2: 'Spraying with insecticides ',
choice3: 'Using insect repellent',
choice4: 'Introducing fish into ponds',
choice5: 'Burying all empty cans',
answer: 5,
},
{
question: 'A plastic pen on rubbing in the hair attracts pieces of paper. What force is responsible for the attraction?',
choice1: 'Electrostatic force',
choice2: 'Frictional force',
choice3: 'Gravitational force',
choice4: 'Magnetic force',
choice5: 'Centripetal force',
answer: 1,
},
{
question: 'When carbondioxide is passed through lime water',
choice1: 'the lime water becomes warm',
choice2: 'the lime water turns milky',
choice3: 'the limewater remains clear',
choice4: 'lime is produced',
choice5: 'the limewater decomposes',
answer: 2,
},
{
question: 'Which of the following solids melts easilyonexposureto sunlight?',
choice1: 'Animal fat ',
choice2: 'Candle wax ',
choice3: 'Plastics',
choice4: 'Rubber',
choice5: 'Sheabutter',
answer: 5,
},
{
question: 'Which of the following structures regulatethe amountof light that entersthe eye?',
choice1: 'Choroid ',
choice2: 'Cornea ',
choice3: 'Iris',
choice4: 'Lens',
choice5: 'Retina',
answer: 3,
},
{
question: 'Leguminous crops suchas beans arecultivated to',
choice1: 'add humus to thesoil',
choice2: 'increasethe nitratecontents of soils',
choice3: 'add nitrogen to thesoil',
choice4: 'makethe soil loamy',
choice5: 'add protein to thesoil',
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

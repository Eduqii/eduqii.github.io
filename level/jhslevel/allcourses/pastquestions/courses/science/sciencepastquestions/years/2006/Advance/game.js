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
		question: 'The property of a rock that makes it different from water is that it has',
choice1: 'fixed volume ',
choice2: 'fixed shape ',
choice3: 'density',
choice4: 'mass',
answer: 1,
},
{
question: 'A plane mirror can be described as opaque because it',
choice1: 'absorbs all the light incident on it. ',
choice2: 'reflects all the light incident on it',
choice3: 'allows all the light incident on it to pass through it',
choice4: 'partly absorbs and partly allows the light incident on it to pass through it',
answer: 2,
},
{
question: 'Wood is used to make the handles of cooking utensils because it is a',
choice1: 'bad conductor of heat ',
choice2: 'good absorber of heat ',
choice3: 'good reflector of heat ',
choice4: 'bad radiator of heat',
answer: 1,
},
{
question: 'Ventilation holes are made at the upper part of a door to allow air to rise by',
choice1: 'convection ',
choice2: 'conduction ',
choice3: 'radiation',
choice4: 'reflection',
answer: 1,
},
{
question: 'When the north poles of two magnets are brought together they',
choice1: 'attract each other',
choice2: 'repel each other',
choice3: 'first attract and then repel each other',
choice4: 'have no effect on each other',
answer: 2,
},
{
question: 'A fuse is used in an electrical circuit to',
choice1: 'measure theenergyusedup',
choice2: 'protect appliances',
choice3: 'provide more current',
choice4: 'make sure current flows continuously',
answer: 2,
},
{
question: 'The angle between an incident ray and a reflecting surface is 20°. Determine the angle of reflection.',
choice1: '60° ',
choice2: '70° ',
choice3: '90° ',
choice4: '110°',
answer: 2,
},
{
question: 'A screw is a machine which works in the same way as',
choice1: 'a lever',
choice2: 'an inclined plane ',
choice3: 'a wheel and axle ',
choice4: 'a pulley',
answer: 2,
},
{
question: 'Power is defined as the rate at which',
choice1: 'energy is used',
choice2: 'temperature rises',
choice3: 'a body travels',
choice4: 'a body cools down',
answer: 1,
},
{
question: 'An example of a lever in which the effort is applied at the middle is a',
choice1: 'wheelbarrow ',
choice2: 'pair of forceps ',
choice3: 'pair of scissors ',
choice4: 'beam balance',
answer: 2,
},
{
question: 'A simpler way of maintaining the efficiency of a machine is by',
choice1: 'oiling its parts',
choice2: 'fitting new parts on the machine ',
choice3: 'making sure it is always working ',
choice4: 'making sure it works at low speed.',
answer: 1,
},
{
question: 'The part of a seed which grows to become the shoot of a plant is the',
choice1: 'cotyledon ',
choice2: 'plumule ',
choice3: 'radicle',
choice4: 'testa',
answer: 2,
},
{
question: 'One disease that affects the nervous system of humans is',
choice1: 'filariasis',
choice2: 'measles',
choice3: 'poliomyelitis',
choice4: 'typhoid',
answer: 3,
},
{
question: 'Which of the following life processes leads to the release of energy?',
choice1: 'Absorption of food ',
choice2: 'Digestion of food ',
choice3: 'Photosynthesis',
choice4: 'Respiration',
answer: 4,
},
{
question: 'Mineral salts in dead organisms are released into the soil by a process called',
choice1: 'decomposition',
choice2: 'diffusion ',
choice3: 'leaching ',
choice4: 'osmosis',
answer: 1,
},
{
question: 'Spectacles fitted with concave lenses are worn by people suffering from',
choice1: 'loss of accommodation',
choice2: 'total blindness',
choice3: 'long sightedness',
choice4: 'short sightedness',
answer: 4,
},
{
question: 'Which of these organs in humans releases carbon dioxide as a waste product?',
choice1: 'Kidney',
choice2: 'Liver ',
choice3: 'Lung ',
choice4: 'Skin',
answer: 3,
},
{
question: 'Farmers do not plant the stems of maize because the stems',
choice1: 'do not have buds',
choice2: 'are difficult to obtain',
choice3: 'dry up too quickly',
choice4: 'do not contain food',
answer: 1,
},
{
question: 'Which of the following ways of treating water makes the water soft?',
choice1: 'Adding alum',
choice2: 'Adding washing soda',
choice3: 'Chlorinating',
choice4: 'Filtering',
answer: 2,
},
{
question: 'Water that needs a small amount of soap to form lather is described as',
choice1: 'clean ',
choice2: 'hard ',
choice3: 'pure ',
choice4: 'soft',
answer: 4,
},
{
question: 'Common salt(sodium chloride) is obtained from seawater by',
choice1: 'condensation ',
choice2: 'evaporation ',
choice3: 'precipitation',
choice4: 'sublimation',
answer: 2,
},
{
question: 'The chemical formula of a compound describes the ',
choice1: 'ratio in which the elements are combined ',
choice2: 'number of molecules in a compound',
choice3: 'nature of the bonding in the compound',
choice4: 'state of matter of the compound',
answer: 1,
},
{
question: 'Which of the following solvents can be used to remove grease from the hand?',
choice1: 'Alcohol',
choice2: 'Palm kernel oil',
choice3: 'Turpentine',
choice4: 'Water',
answer: 3,
},
{
question: 'How many different elements are present in the compound H2SO4?',
choice1: '2',
choice2: '3',
choice3: '6',
choice4: '7',
answer: 2,
},
{
question: 'Producers in an ecosystem are plants that',
choice1: 'feed on other plants',
choice2: 'feed on dead materials',
choice3: 'manufacture their own food',
choice4: 'attract',
answer: 3,
},
{
question: 'The disease caused by the Plasmodium parasite is',
choice1: 'cholera',
choice2: 'malaria',
choice3: 'onchocerciasis',
choice4: 'schistosomiasis',
answer: 2,
},
{
question: 'Vaccination is carried out to',
choice1: 'enable sores to heal faster',
choice2: 'increase the red blood cells of a person',
choice3: 'enable a person’s white blood cells to fight against diseases',
choice4: 'kill germs in a person’s body',
answer: 3,
},
{
question: 'Which of the following farming practices is likely to make the soil poor in nutrients?',
choice1: 'Adding chemical fertilizer during each planting season',
choice2: 'Planting cover crops on the land',
choice3: 'Tilling the land before planting',
choice4: 'Burning the vegetation after clearing',
answer: 4,
},
{
question: 'The type of cloud found closest to the earth’s surface is',
choice1: 'cirrus',
choice2: 'cumulus',
choice3: 'stratus',
choice4: 'stratocumulus',
answer: 3,
},
{
question: 'The amount of water vapour in the atmosphere is called',
choice1: 'fog',
choice2: 'humidity',
choice3: 'rain',
choice4: 'temperature',
answer: 2,
},
{
question: 'The planet which is farthest away from the sun is',
choice1: 'Jupiter ',
choice2: 'Mercury ',
choice3: 'Mars',
choice4: 'Pluto',
answer: 4,
},
{
question: 'Which of the following gases is involved in the process of rusting?',
choice1: 'H2',
choice2: 'CO2',
choice3: 'O2',
choice4: 'N2',
answer: 3,
},
{
question: 'A non-reactive metal can be identified from other metals because its surface is',
choice1: 'hard',
choice2: 'shiny',
choice3: 'smooth',
choice4: 'rough',
answer: 2,
},
{
question: 'The property to a metal that makes it possible for it to be drawn into a wire is called',
choice1: 'conductivity',
choice2: 'ductility',
choice3: 'malleability',
choice4: 'resistivity',
answer: 2,
},
{
question: 'The main reason why food is processed is to make it',
choice1: 'taste better',
choice2: 'preservable for a longer period ',
choice3: 'possible to eat without cooking ',
choice4: 'richer in nutrients',
answer: 2,
},
{
question: 'The process by which kerosene rises up in the wick of a lantern is known as',
choice1: 'capillarity',
choice2: 'diffusion',
choice3: 'surface tension',
choice4: 'osmosis',
answer: 1,
},
{
question: 'Which of the following statements about friction is not true?',
choice1: 'It wears off materials',
choice2: 'It produces heat',
choice3: 'It opposes motion',
choice4: 'It increases speed',
answer: 4,
},
{
question: 'Arteries are blood vessels which carry',
choice1: 'blood to the heart',
choice2: 'carbon dioxide to the air',
choice3: 'blood away from the heart',
choice4: 'oxygen to the lungs',
answer: 3,
},
{
question: 'Which of the following structures is not involved in blood circulation?',
choice1: 'Capillary',
choice2: 'Heart ',
choice3: 'Muscle ',
choice4: 'Vein',
answer: 3,
},
{
question: 'A substance of mass 10 kg has a density of 2.0 kgm-3. Calculate its volume.',
choice1: '0.2 m3',
choice2: '5.0 m3',
choice3: '10.0 m3',
choice4: '20.0 m3',
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

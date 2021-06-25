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
		question: 'Which of the following types of teeth is used by mammals to tear food material?',
choice1: 'Canines',
choice2: 'Incisors',
choice3: 'Molars',
choice4: 'Premolars',
answer: 1,
},
{
question: 'The eclipse formed when the moon comes between the sun and the earth is known as',
choice1: 'annular eclipse',
choice2: 'lunar eclipse',
choice3: 'solar eclipse',
choice4: 'total eclipse',
answer: 3,
},
{
question: 'The element with the chemical symbol S is',
choice1: 'silicon',
choice2: 'silver',
choice3: 'sodium',
choice4: 'sulphur',
answer: 4,
},
{
question: 'The term leaching in soils refers to',
choice1: 'accumulation of organic matter',
choice2: 'decomposition of plant material.',
choice3: 'fixation of nitrogen',
choice4: 'removal of soil nutrients by water.',
answer: 4,
},
{
question: 'Which of the following statements about a plant cell is correct? It',
choice1: 'does not have a nucleus',
choice2: 'contains large vacuoles',
choice3: 'is surrounded by the cell membrane only',
choice4: 'does not have a definite shape',
answer: 2,
},
{
question: 'An example of a derived quantity is',
choice1: 'length',
choice2: 'mass',
choice3: 'temperature',
choice4: 'volume',
answer: 4,
},
{
question: 'Solid non-metals normally break into pieces when hammered because they are',
choice1: 'brittle',
choice2: 'ductile',
choice3: 'lustrous',
choice4: 'malleable',
answer: 1,
},
{
question: 'Young rabbits are called',
choice1: 'bunnies',
choice2: 'cubs',
choice3: 'fingerlings',
choice4: 'kids',
answer: 1,
},
{
question: 'Producers in an ecosystem are plants that',
choice1: 'attract insects',
choice2: 'feed on other plants',
choice3: 'feed on dead materials',
choice4: 'manufacture their own food.',
answer: 4,
},
{
question: 'The form of energy produced from the nucleus of an atom is termed',
choice1: 'chemical energy',
choice2: 'mechanical energy',
choice3: 'nuclear energy',
choice4: 'thermal energy',
answer: 3,
},
{
question: 'Which of the following elements is a semi-metal?',
choice1: 'Carbon',
choice2: 'Nitrogen',
choice3: 'Silicon',
choice4: 'Sodium',
answer: 3,
},
{
question: 'A system of farming that leads to continuous destruction of virgin forest is',
choice1: 'mixed farming',
choice2: 'mixed cropping',
choice3: 'pastoral farming',
choice4: 'shifting farming',
answer: 4,
},
{
question: 'The by-products of respiration are',
choice1: 'carbon dioxide and heat',
choice2: 'carbon dioxide and water',
choice3: 'oxygen and heat',
choice4: 'oxygen and water.',
answer: 2,
},
{
question: 'Which of the following statements about a force are correct? It\n' +
'I is measured in newtons\n' +
'II is measured in newton-metre\n' +
'III can start a motion\n' +
'IV can change the direction of a moving body.',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'I, III and IV only',
choice4: 'I, II, III and IV',
answer: 3,
},
{
question: 'Which of the following substances is a solid-gas mixture?',
choice1: 'Lather',
choice2: 'Bronze',
choice3: 'Steel',
choice4: 'Smoke',
answer: 4,
},
{
question: 'Weeds on a school farm could be controlled by',
choice1: 'handpicking',
choice2: 'mowing',
choice3: 'ploughing',
choice4: 'tilling',
answer: 1,
},
{
question: 'An example of a non-living tissue used in osmosis experiment is',
choice1: 'cellophane',
choice2: 'filter paper',
choice3: 'potato',
choice4: 'polythene',
answer: 1,
},
{
question: 'Kerosene is poured on the surface of a pond in order to',
choice1: 'make it unsafe for human consumption',
choice2: 'make it safe for animal consumption',
choice3: 'increase the surface tension',
choice4: 'break the surface tension',
answer: 4,
},
{
question: 'Which of the following processes is used to separate insoluble solids from liquids?',
choice1: 'Crystallization',
choice2: 'Evaporation',
choice3: 'Filtration',
choice4: 'Sublimation',
answer: 3,
},
{
question: 'The process of removing unproductive poultry birds from a flock is referred to as',
choice1: 'candling',
choice2: 'culling',
choice3: 'dehorning',
choice4: 'drenching',
answer: 2,
},
{
question: 'Which of the following pairs of diseases can be spread easily when food is exposed to houseflies?',
choice1: 'Dysentery and malaria',
choice2: 'Malaria and tuberculosis',
choice3: 'Dysentery and cholera',
choice4: 'Cholera and tuberculosis',
answer: 2,
},
{
question: 'The pressure in fluids',
choice1: 'acts differently in all directions',
choice2: 'acts upwards at any point',
choice3: 'decreases with depth',
choice4: 'increases with depth',
answer: 4,
},
{
question: 'Which of the following processes involve a change in the state of matter from liquid to solid?',
choice1: 'Boiling',
choice2: 'freezing',
choice3: 'Canning',
choice4: 'Smoking',
answer: 2,
},
{
question: 'Which of the following food items contains the highest amount of dietary fibre?',
choice1: 'Beans',
choice2: 'Bread',
choice3: 'Cabbage',
choice4: 'Egg',
answer: 1,
},
{
question: 'An example of a disease vector is',
choice1: 'earthworm',
choice2: 'liver fluke',
choice3: 'tapeworm',
choice4: 'tick',
answer: 4,
},
{
question: 'Which of the following devices is made of semiconductor?',
choice1: 'Capacitor',
choice2: 'Inductor',
choice3: 'Resistor',
choice4: 'Transistor',
answer: 4,
},
{
question: 'Which of the following statements about the properties of water are correct? It\n' +
'I. is colourless and tasteless\n' +
'II. is neutral to litmus paper\n' +
'III. turns red litmus paper blue\n' +
'IV. is a universal solvent',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'I, II and IV only',
choice4: 'I, III and IV only',
answer: 3,
},
{
question: 'The study of the soil profile of an area helps the farmer to',
choice1: 'control weed growth',
choice2: 'determine the soil temperature',
choice3: 'determine the types of crop to grow.',
choice4: 'know the pesticides to use.',
answer: 3,
},
{
question: 'When a green leaf is placed in a test tube containing ethanol and heated over a water bath the leaf',
choice1: 'becomes soft',
choice2: 'changes colour to brown',
choice3: 'changes colour to blue-black',
choice4: 'is decolourized.',
answer: 4,
},
{
question: 'Which of the following sources of energy is / are renewable?\n' +
'I. Solar ' + 
' II. Crude oil ' +
' III. Wind',
choice1: 'I only',
choice2: 'I and II only',
choice3: 'I and III only',
choice4: 'I, II and III',
answer: 3,
},
{
question: 'Which of the following substances is a compound?',
choice1: 'Hydrogen',
choice2: 'Nitrogen',
choice3: 'Oxygen',
choice4: 'Water',
answer: 4,
},
{
question: 'A disease-causing organism that is most difficult to control in crop production is',
choice1: 'bacterium',
choice2: 'fungus',
choice3: 'nematode',
choice4: 'virus',
answer: 1,
},
{
question: 'Which of the following organisms is/ are multicellular?\n' +
'I. Amoeba ' +
' II. Paramecium ' +
' III. Onion',
choice1: 'I only',
choice2: 'III only',
choice3: 'I and III only',
choice4: 'II and III only',
answer: 2,
},
{
question: 'In electronic circuits, LEDs are used to indicate the absence or presence of',
choice1: 'emitter and collector',
choice2: 'electric current',
choice3: 'p-n junction',
choice4: 'voltage source.',
answer: 2,
},
{
question: 'Steel is an alloy of iron and',
choice1: 'aluminium',
choice2: 'carbon',
choice3: 'silicon',
choice4: 'gold',
answer: 2,
},
{
question: 'Soil aeration could be improved through',
choice1: 'mulching',
choice2: 'irrigation',
choice3: 'soil drainage',
choice4: 'fertilizer application',
answer: 4,
},
{
question: 'Which of the following pairs of structures are part of the respiratory system of humans?',
choice1: 'Fallopian tube and alveoli',
choice2: 'Pharynx and oesophagus',
choice3: 'Trachea and alveoli',
choice4: 'Trachea and duodenum',
answer: 3,
},
{
question: 'Which of the following effects is not a result of illegal connection of electricity? It can',
choice1: 'lead to fire outbreak',
choice2: 'lead to frequent power cut-off',
choice3: 'increase the flow of current in the supply chain.',
choice4: 'cause damage to electrical appliance',
answer: 3,
},
{
question: 'Which of the following statements about the scientific method is / are correct? It provides\n' +
'I. logical procedure for arriving at knowledge.\n' +
'II. knowledge that can be verified\n' +
'III. knowledge that can never be changed',
choice1: 'I only',
choice2: 'I and II only',
choice3: 'I and III only',
choice4: 'II and III only',
answer: 2,
},
{
question: 'An entrepreneur’s decision as to what to produce is a/ an',
choice1: 'co-ordinating function',
choice2: 'organizing function',
choice3: 'planning function',
choice4: 'supervising function.',
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
	     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; 
	     // if (selectedAnswer === currentQuestion.answer){
	     //	 classToApply = parentElement.classList.add('correct')
	    //}else {
	    //	classToApply = parentElement.classList.add('correct')
	    //}
	    if(classToApply === 'incorrect'){
	    	const choice = choices.parentElement.length;
	    	for (let i = 0; i < choice;  i++) {
	    		if (selectedAnswer != currentQuestion.answer) {
	    			choices.parentElement.classList.add('correct');
	    		}
	   		}
	    }
	    if (classToApply === 'correct') {
	    	incrementScore(SCORE_POINTS)
	    }

	    selectedChoice.parentElement.classList.add(classToApply)

	    setTimeout(() => {
	    	selectedChoice.parentElement.classList.remove(classToApply)
	    	getNewQuestion()

	    }, 3000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()

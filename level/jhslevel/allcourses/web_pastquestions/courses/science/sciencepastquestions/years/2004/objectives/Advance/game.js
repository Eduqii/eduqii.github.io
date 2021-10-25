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
		question: 'Which of the following processes of conversion of the states of matter is correct?',
choice1: 'Solid (heat) → gas (heat) → liquid',
choice2: 'Solid (cool) → liquid (cool) → gas',
choice3: 'Gas (heat) → liquid (heat) → solid',
choice4: 'Gas (cool) → liquid (cool) → solid',
answer: 4,
},
{
question: 'The types of energy produced when the hands are vigorously rubbed against each other are',
choice1: 'chemical and electrical energy',
choice2: 'heat and sound energy',
choice3: 'heat and light energy',
choice4: 'electrical and light energy',
answer: 2,
},
{
question: 'When a thermometer is put in hot water,the mercury level rises because the mercury increases in',
choice1: 'density', 
choice2: 'mass',
choice3: 'volume', 
choice4: 'weight',
answer: 3,
},
{
question: 'The modes of heat transfer involved in the process of heating water in a bucket from the bottom until it boils are',
choice1: 'conduction and convection',
choice2: 'conduction and radiation',
choice3: 'convection and radiation',
choice4: 'conduction, convection and radiation',
answer: 1,
},
{
question: 'Which of the following items converts chemical energy to electrical energy?',
choice1: 'Dry cell ',
choice2: 'Electric bulb ',
choice3: 'Loudspeaker ',
choice4: 'Microphone',
answer: 1,
},
{
question: 'Use the diagrams below to answer this question.\nWhich of the following statements is correct about the circuit diagrams above? The cells in diagram',
choice1: 'X are in series and the key is open ',
choice2: 'X are in parallel and the key is open ',
choice3: 'Y are in series and the key is closed ',
choice4: 'Y are in parallel and the key is closed',
answer: 1,
},
{
question: 'Use the diagrams below to answer this question.\nThe total emf of the cells in diagram Y is',
choice1: '4.50 V ',
choice2: '3.00 V ',
choice3: '1.50 V ',
choice4: '0.75 V',
answer: 3,
},
{
question: 'It is easier to move a heavy load with a crow bar when the ',
choice1: 'effort distance is shorter than the load distance ',
choice2: 'effort distance is longer than the load distance',
choice3: 'effort distance is equal to the load distance',
choice4: 'effort is equalto the load',
answer: 2,
},
{
question: 'The type of lever shown above is a',
choice1: 'first class lever',
choice2: 'second class lever',
choice3: 'third class lever',
choice4: 'combination of first and second class levers',
answer: 3,
},
{
question: 'A balanced diet is one which is made up of',
choice1: 'right proportions of protein, carbohydrates and oil',
choice2: 'equal amounts of protein, carbohydrates and oil',
choice3: 'enough water and iodated salt',
choice4: 'vegetables,fruits and water',
answer: 1,
},
{
question: 'Benedict’s solution was added to a mixture in a test tube and it turned brick red when heated.The mixture is likely to contain',
choice1: 'glucose ',
choice2: 'oil ',
choice3: 'protein ',
choice4: 'vitamin',
answer: 1,
},
{
question: 'The main food substance present in the albumen of an egg is',
choice1: 'carbohydrates ',
choice2: 'fat ',
choice3: 'protein ',
choice4: 'vitamin',
answer: 3,
},
{
question: 'One characteristic which is not common to all living things is the ability to',
choice1: 'grow ',
choice2: 'move about ',
choice3: 'respire ',
choice4: 'respond to stimuli',
answer: 2,
},
{
question: 'The ovules in a flower develop to form the',
choice1: 'fruit ',
choice2: 'leaves ',
choice3: 'seeds ',
choice4: 'stem',
answer: 3,
},
{
question: 'Onions are planted by means of',
choice1: 'bulbs ',
choice2: 'corms ',
choice3: 'suckers ',
choice4: 'rhizomes',
answer: 1,
},
{
question: 'The test is in mammals produces',
choice1: 'blood ',
choice2: 'lymph ',
choice3: 'sperms ',
choice4: 'urine',
answer: 3,
},
{
question: 'Which of the following structures takes part inhuman digestion?',
choice1: 'Caecum ',
choice2: 'Kidney ',
choice3: 'Larynx ',
choice4: 'Pancreas',
answer: 4,
},
{
question: 'Which of the following diseases is contracted through sex?',
choice1: 'HIV/AIDS ',
choice2: 'Asthma ',
choice3: 'Tuberculosis ',
choice4: 'Goitre',
answer: 1,
},
{
question: 'Chlorine gas is an example of',
choice1: 'an atom ',
choice2: 'an element ',
choice3: 'a compound ',
choice4: 'a molecule',
answer: 2, 
},
{
question: 'The bad smell that comes out of a urinal is due to the presence of',
choice1: 'ammonia ',
choice2: 'hydrogen ',
choice3: 'carbon dioxide ',
choice4: 'nitrogen',
answer: 1,
},
{
question: 'The systematic name of the compound FeS is',
choice1: 'iron(I)sulphide ',
choice2: 'iron(II)sulphide ',
choice3: 'iron(III)sulphide ',
choice4: 'iron(IV)sulphide',
answer: 2,
},
{
question: 'Which of the following elements is a liquid at room temperature?',
choice1: 'Carbon ',
choice2: 'Mercury ',
choice3: 'Silver ',
choice4: 'Sulphur',
answer: 2,
},
{
question: 'The type of cloud that gives rain is',
choice1: 'cumulus ',
choice2: 'cirrus ',
choice3: 'nimbus ',
choice4: 'stratus',
answer: 3,
},
{
question: 'Water drains faster through sand than clay because',
choice1: 'sand particles are rougher',
choice2: 'sand contains more air spaces',
choice3: 'clay particles are smoother',
choice4: 'clay particles are bigger',
answer: 2,
},
{
question: 'Which of the following organisms is not an animal [parasite?',
choice1: 'tick ',
choice2: 'tapeworm ',
choice3: 'plasmodium ',
choice4: 'weevil',
answer: 4,
},
{
question: 'The housefly is an a gent for the spread of',
choice1: 'cholera ',
choice2: 'malaria ',
choice3: 'measles ',
choice4: 'tuberculosis',
answer: 1,
},
{
question: 'The best method for checking erosion on a slope is',
choice1: 'cover cropping',
choice2: 'mixed cropping',
choice3: 'contour ploughing',
choice4: 'mulching',
answer: 3,
},
{
question: 'It is not advisable to sleep in a closed dark room with green plants because, the plants',
choice1: 'produce heat',
choice2: 'compete with human beings for oxygen',
choice3: 'absorb water vapour',
choice4: 'produce carbon dioxide',
answer: 2,
},
{
question: 'The process where by soil is formed by the breakdown of rocks is called',
choice1: 'composting ',
choice2: 'erosion ',
choice3: 'leaching ',
choice4: 'weathering',
answer: 4,
},
{
question: 'Kerosene is able to reach the other end of a wick by',
choice1: 'diffusion',
choice2: 'suction pressure ',
choice3: 'capillary action ',
choice4: 'osmosis',
answer: 3,
},
{
question: 'The force, which opposes the motion of one body on another body is called',
choice1: 'adhesion ',
choice2: 'cohesion ',
choice3: 'friction ',
choice4: 'tension',
answer: 3,
},
{
question: 'The work done when a force moves a body through a distance of12 m is 720J.The force applied is',
choice1: '8640 N ',
choice2: '732 N ',
choice3: '708 N ',
choice4: '60 N',
answer: 4,
},
{
question: 'Food substances are transported from the leaves to various parts of a plant through the',
choice1: 'cambium ',
choice2: 'epidermis ',
choice3: 'phloem ',
choice4: 'xylem',
answer: 3,
},
{
question: 'Which of the following substances are carried by the blood?\n' +
'I. Nutrients' +
'II. Urine' +
'III. Oxygen' +
'IV. Carbon dioxide',
choice1: 'II and III only',
choice2: 'I,II and IVonly',
choice3: 'I and III only',
choice4: 'I,III and IV only',
answer: 4,
},
{
question: 'A uniform mixture of two or more metals is called',
choice1: 'an alloy ',
choice2: 'a colloid ',
choice3: 'an aerosol',
choice4: 'a compound',
answer: 1,
},
{
question: 'Gold is usually used to make jewellery because it is',
choice1: 'precious',
choice2: 'expensive',
choice3: 'less reactive with air',
choice4: 'a good conductor of heat',
answer: 3,
},
{
question: 'Which of the following substances is a non-metal?',
choice1: 'Diamond ',
choice2: 'Mercury ',
choice3: 'Sodium ',
choice4: 'Steel',
answer: 1,
},
{
question: 'Alum is added to water during treatment to',
choice1: 'kill germs',
choice2: 'help suspended particles to settle',
choice3: 'make the water colourless',
choice4: 'give taste to the water',
answer: 2,
},
{
question: 'Which of the following types of water would be most contaminated by waste substances?',
choice1: 'Rain water',
choice2: 'Stream water',
choice3: 'Bore hole water',
choice4: 'Pipe borne water',
answer: 2,
},
{
question: 'The method of preserving food by drying is similar to salting because in both cases germs are',
choice1: 'deprived of the air needed for growth',
choice2: 'deprived of the water needed for growth',
choice3: 'destroyed a thigh temperatures',
choice4: 'destroyed at low temperatures',
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

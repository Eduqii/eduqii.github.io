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
		question: 'Which of the following substances is made up of only one kind of atom?',
choice1: 'Iron ',
choice2: 'Salt ',
choice3: 'Steel',
choice4: 'Water',
answer: 1,
},
{
question: 'Ice is able to float on water because the ice is',
choice1: 'colder than water',
choice2: 'denser than water',
choice3: 'has a greater mass for the same volume of water',
choice4: 'has a greater volume for the same mass of water',
answer: 4,
},
{
question: 'Which of the following statements about the state of matter is correct?',
choice1: 'Molecules in a solid are disorderly arranged',
choice2: 'Solids are highly compressible',
choice3: 'Liquids have definite form and volume',
choice4: 'Molecules in a gas move faster than those in a liquid.',
answer: 4,
},
{

question: 'The above diagram illustrates the structure of an atom. The components labeled X and Y are respectively',
choice1: 'neutrons and shells',
choice2: 'ions and neutrons',
choice3: 'neutrons and nucleus',
choice4: 'nucleus and neutrons',
answer: 4,
},
{
question: 'The force which opposes the motion of one object on another object is known as',
choice1: 'friction ',
choice2: 'gravity ',
choice3: 'tension ',
choice4: 'weight',
answer: 1,
},
{
question: 'When the brakes of a bicycle in motion are applied for a long time the wheels become hot. This is because of a change of energy from',
choice1: 'kinetic energy to potential energy ',
choice2: 'potential energy to kinetic energy ',
choice3: 'potential energy to heat energy',
choice4: 'kinetic energy to heat energy',
answer: 4,
},
{
question: 'A man applied a force of 50 N to push a wheel barrow through adistance of 6m. Calculate the work done.',
choice1: '300 J ',
choice2: '56 J ',
choice3: '44 J ',
choice4: '30 J',
answer: 1,
},
{
question: 'In which of the following situations is work said to be done?',
choice1: 'Walking with a load on the head in an upright position. ',
choice2: 'Getting up from a chair',
choice3: 'Pushing against a wall which does not move. ',
choice4: 'Sitting still behind a desk.',
answer: 1 || 2
},
{
question: 'The energy stored in food is',
choice1: 'an electrostatic energy',
choice2: 'a chemical energy',
choice3: 'a solar energy',
choice4: 'a thermal energy',
answer: 2,
},
{
question: 'A machine which has an energy loss of 10% will have an efficiency of',
choice1: '100%',
choice2: '90%',
choice3: '55%',
choice4: '10%',
answer: 2,
},
{
question: 'The figure I below shows a simple electric circuit.\nThe switch is represented by',
choice1: 'IV ',
choice2: 'III ',
choice3: 'II ',
choice4: 'I',
answer: 3,
},
{
question: 'The figure I below shows a simple electric circuit.\nThe component labeled V is a/an',
choice1: 'ammeter ',
choice2: 'battery ',
choice3: 'lamp',
choice4: 'voltmeter',
answer: 3,
},
{
question: 'The figure I below shows a simple electric circuit.\nThe purpose of the component labeled IV is to',
choice1: 'supply energy to the circuit',
choice2: 'measure the voltage of the battery',
choice3: 'prevent too much current from flowing',
choice4: 'close the circuit',
answer: 3,
},
{
question: 'Which of the following diseases is spread by a mosquito?',
choice1: 'Blindness',
choice2: 'Cholera',
choice3: 'Dysentery',
choice4: 'Elephantiasis',
answer: 4,
},
{
question: 'The inter mediate host of the worm that causes Bilharzia is',
choice1: 'man',
choice2: 'mosquito ',
choice3: 'tsetse fly ',
choice4: 'waters nail',
answer: 4,
},
{
question: 'The figure II below is a diagram of a fish.\nThe function of the part labeled IV is to enable the fish to',
choice1: 'sink in water',
choice2: 'absorb oxygen from the water',
choice3: 'protect itself from attack',
choice4: 'detect smell in water',
answer: 2,
},
{
question: 'The figure II below is a diagram of a fish.\nThe part labeled V is used for',
choice1: 'balancing ',
choice2: 'steering ',
choice3: 'surfacing ',
choice4: 'paddling',
answer: 2,
},
{
question: 'Which of the following arrangements is a probable food chain?',
choice1: 'Grass → Grasshopper → Toad → Snake → Crow',
choice2: 'Grasshopper → Grass → Goat → Lion → Man',
choice3: 'Crow → Snake → Toad → Grasshopper → Grass',
choice4: 'Grass → Goat → Lion → Man → Snake',
answer: 1, 
},
{
question: 'One disease which can be transmitted through eating half cooked meat is',
choice1: 'guineaworm ',
choice2: 'hook worm ',
choice3: 'thread worm ',
choice4: 'tapeworm',
answer: 4,
},
{
question: 'Which of the following characteristics are common to all living things?\n '+
'I. Response to stimuli' +
' II. Respiration' +
' III. Movement from place to place' +
' IV. Growth',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'I,II and III only',
choice4: 'I,II and IV only',
answer: 4,
},
{
question: 'The part of sugar canethat is usually used for planting is the',
choice1: 'corm ',
choice2: 'leaf ',
choice3: 'stem',
choice4: 'sucker',
answer: 3,
},
{
question: 'Excess carbohydrate in the human body is stored as',
choice1: 'amino acid ',
choice2: 'fatty acid ',
choice3: 'glycogen ',
choice4: 'glucose',
answer: 3,
},
{
question: 'Carbon dioxide in the blood is removed from the body through the',
choice1: 'kidneys',
choice2: 'lungs ',
choice3: 'mouth ',
choice4: 'skin',
answer: 2,
},
{
question: 'The end-product of protein digestion is',
choice1: 'amino acid',
choice2: 'glycerol ',
choice3: 'glycogen ',
choice4: 'peptide',
answer: 1,
},
{
question: 'The liquid component of the blood is known as',
choice1: 'cytoplasm',
choice2: 'haemoglobin',
choice3: 'plasma',
choice4: 'platelets',
answer: 3,
},
{
question: 'Digested food substances are absorbed into the blood stream in the',
choice1: 'kidneys',
choice2: 'liver',
choice3: 'stomach',
choice4: 'iluem',
answer: 4,
},
{
question: 'The part of the human ear which collect and direct sound waves is the',
choice1: 'ear drum ',
choice2: 'ear lobe ',
choice3: 'ear canal',
choice4: 'semi-circular canal',
answer: 3,
},
{
question: 'The process b ywhich waste substances are removed from the body is called',
choice1: 'egestion',
choice2: 'excretion',
choice3: 'perspiration',
choice4: 'respiration',
answer: 2,
},
{
question: 'The embryo of a mammal develops from',
choice1: 'eggs fertilized inside the body ',
choice2: 'eggs fertilized outside th ebody ',
choice3: 'self fertilized eggs',
choice4: 'only female sexc ells',
answer: 1,
},
{
question: 'Which of the following gases is given out during photosynthesis?',
choice1: 'Carbon dioxide',
choice2: 'Carbon monoxide',
choice3: 'Nitrogen',
choice4: 'Oxygen',
answer: 4,
},
{
question: 'The component of the soil which is made up of the finest particles is',
choice1: 'clay',
choice2: 'humus ',
choice3: 'loam ',
choice4: 'sand',
answer: 1,
},
{
question: 'The soil type which is able to retain the highest amount of water is',
choice1: 'clay ',
choice2: 'loam ',
choice3: 'gravel ',
choice4: 'sand',
answer: 1,
},
{
question: 'The formation of humus is aided by',
choice1: 'earthworms',
choice2: 'insects',
choice3: 'rats',
choice4: 'wind',
answer: 1,
},
{
question: 'The major cause of pollution at a stone quarry is',
choice1: 'dust',
choice2: 'human waste ',
choice3: 'acid disposal ',
choice4: 'smoke',
answer: 1,
},
{
question: 'Ringworm is a skin disease, which is caused by',
choice1: 'bacteria',
choice2: 'fungi ',
choice3: 'insects',
choice4: 'worms',
answer: 2,
},
{
question: 'Which of the following habits will help in the control of diseases contracted through air?\n' + 
'I. Not throwing humanwaste into rivers' + 
'II. Washing of hands after visiting the toilet' +
'III. Not spitting about in public places' +
'IV. Keeping foods always covered',
choice1: 'I and II only ',
choice2: 'II and III only ',
choice3: 'III only',
choice4: 'I,III and IV only',
answer: 4,
},
{
question: 'Soup which is not well-heated gets spoilt when kept for sometime because the',
choice1: 'salt in the soup is too small',
choice2: 'water in the soup do not all evaporate',
choice3: 'heat in the soup is not enough to kill all bacteria',
choice4: 'water condenses back into the soup.',
answer: 3,
},
{
question: 'The measure of the amount of water vapour in the air is known as',
choice1: 'cloud',
choice2: 'dew',
choice3: 'humidity',
choice4: 'temperature',
answer: 3,
},
{
question: 'Which of the following heavenly bodies is a star?',
choice1: 'Earth ',
choice2: 'Moon ',
choice3: 'Sun',
choice4: 'Milky Way',
answer: 3,
},
{
question: 'The planet in our solar system which has the largest orbit is',
choice1: 'Jupiter ',
choice2: 'Mars ',
choice3: 'Pluto ',
choice4: 'Venus',
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

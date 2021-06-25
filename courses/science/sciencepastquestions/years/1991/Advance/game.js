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
		question: 'The digestion of carbohydrates starts in the',
choice1: 'mouth',
choice2: 'throat',
choice3: 'stomach',
choice4: 'duodenum',
choice5: 'ileum',
answer: 1,
},
{
question: 'Photosynthesis in plants requires chlorophyll, sunlight, water and',
choice1: 'oxygen',
choice2: 'carbondioxide',
choice3: 'steam',
choice4: 'hydrogen',
choice5: 'nitrogen',
answer: 2,
},
{
question: 'Which of the following objects is a good conductor of heat?',
choice1: 'Wood ',
choice2: 'Rubber ',
choice3: 'Copper ',
choice4: 'Plastic ',
choice5: 'Wool',
answer: 3,
},
{
question: 'What is the work donewhen a forceof 2.5N moves through a distance of 4 m?',
choice1: '0.6 J ',
choice2: '1.5 J ',
choice3: '1.6 J ',
choice4: '6.5 J ',
choice5: '10.0 J',
answer: 5,
},
{
question: 'The person who studies the weather is',
choice1: 'apilot',
choice2: 'aphysician ',
choice3: 'an astronaut ',
choice4: 'an astrologer ',
choice5: 'meteorologist',
answer: 5,
},
{
question: 'A child suffering from Kwashiorkor lacks',
choice1: 'protein',
choice2: 'fats and oils',
choice3: 'vitamins',
choice4: 'mineral salts',
choice5: 'carbohydrates',
answer: 1,
},
{
question: 'Which of the following substances can dissolve almost all solutes?',
choice1: 'Kerosene ',
choice2: 'Palmoil ',
choice3: 'Water',
choice4: 'Turpentine',
choice5: 'Petrol',
answer: 3,
},
{
question: 'All of the following methods are used to preserve food in our homes except',
choice1: 'smoking',
choice2: 'salting ',
choice3: 'boiling ',
choice4: 'canning ',
choice5: 'drying',
answer: 4,
},
{
question: 'The chemical symbolfor Potassium is',
choice1: 'Fe ',
choice2: 'K ',
choice3: 'P ',
choice4: 'Pb ',
choice5: 'Zn',
answer: 2,
},
{
question:.' Thepart ofthe bananaplant used in reproductionis called',
choice1: 'sucker ',
choice2: 'rhizome ',
choice3: 'stem',
choice4: 'tuber',
choice5: 'bulb',
answer: 1,
},
{
question:.' Theprocess bywhich kerosene rises up thewick in alantern is',
choice1: 'evaporation ',
choice2: 'conduction ',
choice3: 'diffusion',
choice4: 'capillarity',
choice5: 'convection',
answer: 4,
},
{
question:.' Which of the following animals can live both in water and on land?',
choice1: 'Mouse',
choice2: 'Rat',
choice3: 'Frog',
choice4: 'Grasscutter',
choice5: 'Mud fish',
answer: 3,
},
{
question:.' A bar magnet attracts all the following objects except',
choice1: 'pins',
choice2: 'pair ofscissors',
choice3: 'nails',
choice4: 'razorblade',
choice5: 'glass',
answer: 5,
},
{
question: 'When an object moves from rough surface onto a smooth one with the same energy, its speed',
choice1: 'increases',
choice2: 'decreases',
choice3: 'remains thesame',
choice4: 'becomes zero',
choice5: 'cannot be determined',
answer: 1,
},
{
question:.' How many states of matter do we have?',
choice1: '2',
choice2: '3',
choice3: '4',
choice4: '5',
choice5: '6',
answer: 2
},
{
question:.' All of the following animals lay eggs except',
choice1: 'fish',
choice2: 'lizard ',
choice3: 'rabbit ',
choice4: 'toad',
choice5: 'turkey',
answer: 3,
},
{
question:.' Which of these is not a sense organ?',
choice1: 'Eye ',
choice2: 'Ear ',
choice3: 'Nose ',
choice4: 'Skin',
choice5: 'Heart',
answer: 5,
},
{
question:.' Which of the following processes is used to separate insoluble solids from liquids?',
choice1: 'Distillation ',
choice2: 'Sublimation ',
choice3: 'Filtration',
choice4: 'Evaporation',
choice5: 'Sedimentation',
answer: 3,
},
{
question:.' An organism living on another organism and causing harm to it is referred to as a',
choice1: 'host',
choice2: 'parasite ',
choice3: 'producer ',
choice4: 'consumer ',
choice5: 'vector',
answer: 2,
},
{
question:.' What sickness are you likely to be suffering from when you have blood in your urine?',
choice1: 'Typhoid ',
choice2: 'Syphilis ',
choice3: 'Cholera ',
choice4: 'Bilharzia ',
choice5: 'Ulcer',
answer: 4,
},
{
question:.' Which of these is a vegetable crop?',
choice1: 'Pineapple',
choice2: 'Potato',
choice3: 'Cabbage ',
choice4: 'Cassava ',
choice5: 'Mango',
answer: 3,
},
{
question:.' Insects can walk on the surface of water because of',
choice1: 'diffusion ',
choice2: 'capillarity ',
choice3: 'viscosity ',
choice4: 'friction',
choice5: 'surface tension',
answer: 5,
},
{
question:.' When a substance is made up of the same kind of atoms it is called',
choice1: 'a mixture',
choice2: 'a compound ',
choice3: 'an element ',
choice4: 'asolution',
choice5: 'asolvent',
answer: 3,
},
{
question:.' What do human beings obtain from food to enable them work?',
choice1: 'Blood',
choice2: 'Energy',
choice3: 'Vitamins ',
choice4: 'Proteins ',
choice5: 'Minerals',
answer: 2,
},
{
question:.' Which of these instruments is used in measuring humidity?',
choice1: 'Hygrometer ',
choice2: 'Thermometer ',
choice3: 'Photometer',
choice4: 'Potometer',
choice5: 'Anemometer',
answer: 1,
},
{
question:.' The part of the plant which is found in the soil is the',
choice1: 'flower ',
choice2: 'stem ',
choice3: 'leaf',
choice4: 'root',
choice5: 'fruit',
answer: 4,
},
{
question:.' When salt is put into soups, it',
choice1: 'melts',
choice2: 'sublimes ',
choice3: 'dissolves ',
choice4: 'evaporates ',
choice5: 'expands',
answer: 3,
},
{
question:.' The complete development of a human baby in the womb normally takes',
choice1: 'five months',
choice2: 'six months',
choice3: 'seven months',
choice4: 'nine months',
choice5: 'eleven months',
answer: 4,
},
{
question:.'The washing away of the top soil by running water is called ',
choice1: 'erosion',
choice2: 'rotation',
choice3: 'plantation ',
choice4: 'weathering ',
choice5: 'irrigation',
answer: 1,
},
{
question:.' All of the following are solids except',
choice1: 'aluminium',
choice2: 'lead',
choice3: 'silver',
choice4: 'potassium',
choice5: 'mercury',
answer: 5,
},
{
question:.' The process by which living things increase in number is referred to as',
choice1: 'growth',
choice2: 'development',
choice3: 'reproduction',
choice4: 'multiplication',
choice5: 'addition',
answer: 3,
},
{
question:.' Which of the following soil types can hold the least amount of water?',
choice1: 'Loam ',
choice2: 'Clay ',
choice3: 'Silt',
choice4: 'Sand',
choice5: 'Sandy loam',
answer: 4,
},
{
question:.' When a piece of candle is heated, it changes from',
choice1: 'liquid to gas',
choice2: 'liquid to flame ',
choice3: 'solid to flame ',
choice4: 'solid to liquid ',
choice5: 'solid to gas',
answer: 4,
},
{
question:.' Which of the following metals is used for making roofing sheets?',
choice1: 'Zinc',
choice2: 'Silver',
choice3: 'Mercury',
choice4: 'Tin',
choice5: 'Aluminium',
answer: 5,
},
{
question:.' What is the name of the final product of protein digestion?',
choice1: 'Glucose ',
choice2: 'Fattyacid ',
choice3: 'Amino acid ',
choice4: 'Glycerol',
choice5: 'Sucrose',
answer: 3,
},
{
question:.' The lion is a typical example of',
choice1: 'a pet',
choice2: 'a carnivore ',
choice3: 'an omnivore ',
choice4: 'a herbivore ',
choice5: 'a parasite',
answer: 2,
},
{
question:.' A uniform mixture of two or more metals is called',
choice1: 'asolute',
choice2: 'a colloid',
choice3: 'a compound ',
choice4: 'a suspension ',
choice5: 'an alloy',
answer: 5,
},
{
question:.' Which of the following activities illustrates distillation?',
choice1: 'Preparation ofsoup',
choice2: 'Preparation ofakpeteshie',
choice3: 'Tappingof palmwine ',
choice4: 'Preparation ofstarch ',
choice5: 'Freezingof water',
answer: 2,
},
{
question:.' The hatching of eggs into chicken depends on constant supply of',
choice1: 'water',
choice2: 'feed',
choice3: 'pressure',
choice4: 'heat',
choice5: 'light',
answer: 4,
},
{
question:.' A fertilized ovule results in the formation of',
choice1: 'an ovary',
choice2: 'a style ',
choice3: 'a pistil ',
choice4: 'a stigma',
choice5: 'an embryo',
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


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
		question: 'An example of a third class lever is',
choice1: 'wheelbarrow',
choice2: 'sugar tongs',
choice3: 'pair of scissors',
choice4: 'crowbar',
answer: 2,
},
{

question: 'The release of a mature egg from an ovary into the fallopian tube in humans is called',
choice1: 'copulation',
choice2: 'ejaculation',
choice3: 'menstruation',
choice4: 'ovulation',
answer: 4,
},
{

question: 'The blood vessel that carries oxygenated blood from the lungs to the heart is known as',
choice1: 'pulmonary artery',
choice2: 'pulmonary vein',
choice3: 'vena cava',
choice4: 'aorta',
answer: 2,
},
{

question: 'An example of a plant micro-nutrient is',
choice1: 'calcium',
choice2: 'copper',
choice3: 'magnesium',
choice4: 'potassium',
answer: 2,
},
{
 

question: 'What is the colour of the neutral wire in a three-pin plug?',
choice1: 'Blue',
choice2: 'Brown',
choice3: 'Green',
choice4: 'Yellow',
answer: 1,
},
{
question: 'In the pin-hole camera, the image formed is always',
choice1: 'erect and bright',
choice2: 'erect and blurred',
choice3: 'inverted and real',
choice4: 'inverted and virtual',
answer: 3,
},
{
 

question: 'The part of the flower that develops into a fruit is the',
choice1: 'ovary',
choice2: 'ovule',
choice3: 'stamen',
choice4: 'style',
answer: 1,
},
{
question: 'The number of elements in the compound Ca(OH)2 is',
choice1: '2',
choice2: '3',
choice3: '4',
choice4: '5',
answer: 2,
},
{

question: 'The reason why alum is added to water during treatment is to',
choice1: 'kill germs',
choice2: 'give taste to water',
choice3: 'make water colourless',
choice4: 'make suspended particles settle',
answer: 4,
},
{

question: 'Which of the following animal parasites could be controlled by hand picking?',
choice1: 'Liver fluke',
choice2: 'Tapeworm',
choice3: 'Tick',
choice4: 'Roundworm',
answer: 3,
},
{
 

question: 'A stick which is partially immersed in water appeared to be bent due to',
choice1: 'absorption',
choice2: 'reflection',
choice3: 'refraction',
choice4: 'transmission',
answer: 3,
},
{
 

question: 'One difference between metals and non-metals is that metals',
choice1: 'have low density',
choice2: 'are not malleable',
choice3: 'have luster',
choice4: 'have low melting points.',
answer: 3,
},
{
 

question: 'The cultivation of different crops on different plots of a farmland in a definite cycle is called',
choice1: 'land rotation',
choice2: 'shifting cultivation',
choice3: 'crop rotation',
choice4: 'mixed cropping',
answer: 3,
},
{
 

question: 'Iodine deficiency in humans could result in a disorder known as',
choice1: 'diabetes',
choice2: 'goiter',
choice3: 'kwashiorkor',
choice4: 'scurvy',
answer: 2,
},
{
 

question: 'A substance is termed combustible if it',
choice1: 'easily catches fire',
choice2: 'dissolves common salt',
choice3: 'sublimes at room temperature',
choice4: 'boils at 100°C.',
answer: 1,
},
{

question: 'Micro-organisms that cause diseases are collectively called',
choice1: 'bacteria',
choice2: 'infections',
choice3: 'pathogens',
choice4: 'viruses',
answer: 3,
},
{
 

question: 'Which type of energy is lost when sweat evaporates from the human body?',
choice1: 'Sound energy',
choice2: 'Mechanical energy',
choice3: 'Chemical energy',
choice4: 'Heat energy',
answer: 4,
},
{
 

question: 'Which of the following gases is involved in the rusting of iron?',
choice1: 'Hydrogen',
choice2: 'Oxygen',
choice3: 'Nitrogen',
choice4: 'Carbon dioxide',
answer: 2,
},
{
 

question: 'The feeling of soil between fingers is used to determine the',
choice1: 'texture of the soil',
choice2: 'drainage of the soil',
choice3: 'capillarity of the soil',
choice4: 'water holding capacity of the soil.',
answer: 1,
},
{

question: 'Sodium hydroxide is an example of a base because it',
choice1: 'has sour taste',
choice2: 'has a pH less than 7',
choice3: 'turns wet blue litmus paper red',
choice4: 'turns wet red litmus paper blue',
answer: 4,
},
{
 

question: 'Which of the following plants has its leaves modified for storing food?',
choice1: 'Ginger',
choice2: 'Onion',
choice3: 'Pineapple',
choice4: 'Tomato',
answer: 2,
},
{

question: 'Gases enter and leave the leaf of a plant through the',
choice1: 'mesophyll cells',
choice2: 'stomata',
choice3: 'pith',
choice4: 'palisade cells',
answer: 2,
},
{
 

question: 'Which of the following vegetable crops is cultivated for its leaves?',
choice1: 'Carrrot',
choice2: 'Lettuce',
choice3: 'Okro',
choice4: 'Pepper',
answer: 2,
},
{

question: 'An example of a body that does not produce its own light is the',
choice1: 'moon',
choice2: 'sun',
choice3: 'star',
choice4: 'fire fly',
answer: 1,
},
{

question: 'Which of the following devices converts electrical energy into sound energy?',
choice1: 'Electric heater',
choice2: 'Electric fan',
choice3: 'Washing machine',
choice4: 'Loudspeaker',
answer: 4,
},
{

question: 'Transplanting of young seedlings is usually done in the evening because',
choice1: 'darkness promotes rapid growth',
choice2: 'seedlings require less nutrients',
choice3: 'pest attack is minimal',
choice4: 'transpiration is minimal',
answer: 4,
},
{

question: 'A mixture of sugar and water could be separated by',
choice1: 'decantation',
choice2: 'evaporation',
choice3: 'filtration',
choice4: 'sublimation',
answer: 2,
},
{

question: 'Which of the following processes results in the formation of new substances?',
choice1: 'Cooling water to form ice',
choice2: 'Adding saliva to cooked yam',
choice3: 'Dissolving sugar in water',
choice4: 'Mixing iron dust and sand',
answer: 2,
},
{

question: 'Photosynthesis is important to living organisms because it produces',
choice1: 'glucose and oxygen',
choice2: 'glucose and carbon dioxide',
choice3: 'oxygen and carbon dioxide',
choice4: 'water and carbon dioxide',
answer: 1,
},
{
question: 'Global warming is caused by the',
choice1: 'circulation of oxygen in the atmosphere',
choice2: 'excessive release of carbon dioxide into the atmosphere',
choice3: 'release of hydrogen into the atmosphere',
choice4: 'circulation of nitrogen in the atmosphere',
answer: 2,
},
{

question: 'The warning and safety signs on chemical containers are usually represented by a symbol placed within a',
choice1: 'circle',
choice2: 'rectangle',
choice3: 'square',
choice4: 'triangle',
answer: 4,
},
{

question: 'In which of the following structures in a living cell is cellulose found?',
choice1: 'Chloroplast',
choice2: 'Mitochondrion',
choice3: 'Cell membrane',
choice4: 'Cell wall',
answer: 4,
},
{

question: 'Elements that could easily lose electrons to form cations are',
choice1: 'metals',
choice2: 'non-metals',
choice3: 'semi-metals',
choice4: 'noble gases',
answer: 1,
},
{
question: 'The conversion of agricultural produce from its original form to other desirable forms is termed',
choice1: 'preservation',
choice2: 'processing',
choice3: 'recycling',
choice4: 'storage',
answer: 2,
},
{

question: 'The function of the hair in the nose of humans is to',
choice1: 'make breathing easier',
choice2: 'keep nose moist',
choice3: 'filter dust from the air breathed in',
choice4: 'keep the nose warm',
answer: 3,
},
{

question: 'A metal that is used as a thermometric liquid is',
choice1: 'aluminium',
choice2: 'copper',
choice3: 'mercury',
choice4: 'silver',
answer: 3,
},
{
 

question: 'The joule is the S.I unit for',
choice1: 'energy',
choice2: 'force',
choice3: 'power',
choice4: 'pressure',
answer: 1,
},
{

question: 'Which of the following gases supports combustion?',
choice1: 'Hydrogen',
choice2: 'Oxygen',
choice3: 'Carbon dioxide',
choice4: 'Carbon monoxide',
answer: 2,
},
{

question: 'The form of energy which flows from one point to another due to temperature differences is known as',
choice1: 'mechanical energy',
choice2: 'heat energy',
choice3: 'solar energy',
choice4: 'nuclear energy',
answer: 2,
},
{
 

question: 'Which of the following resources does not produce energy?',
choice1: 'Coal',
choice2: 'Sand',
choice3: 'Water',
choice4: 'Wind',
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

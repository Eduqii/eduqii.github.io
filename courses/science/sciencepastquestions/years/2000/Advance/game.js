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
	question: 'Which of the following organs is used by the fish for movement?',
choice1: 'eye ',
choice2: 'fin ',
choice3: 'gill ',
choice4: 'tail',
choice5: 'mouth',
answer: 2,
},
{
question: 'A group of stars found in the universe is called',
choice1: 'galaxy',
choice2: 'meteor',
choice3: 'meteorite',
choice4: 'planet',
choice5: 'solar system',
answer: 1,
},
{
question: 'The basic unit of matter is the',
choice1: 'atom',
choice2: 'compound',
choice3: 'element ',
choice4: 'electron ',
choice5: 'ion',
answer: 1,
},
{
question: 'Which of the following process is a physical change?',
choice1: 'Rusting of iron',
choice2: 'Burning of paper',
choice3: 'Melting of ice',
choice4: 'Fermentation of palm wine',
choice5: 'Boiling of an egg',
answer: 3,
},
{
question: 'The organ that removes metabolic wastes from the human body is',
choice1: 'anus ',
choice2: 'heart ',
choice3: 'kidney',
choice4: 'rectum',
choice5: 'spleen',
answer: 3,
},
{
question: 'The food chain that occurs in nature is',
choice1: 'green plants → lizards → insects→ snakes',
choice2: 'grasshopper → green plants → lizards → hawks',
choice3: 'green plants → snakes → hawks → man',
choice4: 'green plants → grasshopper → lizards → snakes',
choice5: 'mice → lizards → hawks → snakes',
answer: 4,
},
{
question: 'The device that uses an electromagnet in its operation is the',
choice1: 'electric bell ',
choice2: 'electric iron ',
choice3: 'radio',
choice4: 'refrigerator',
choice5: 'sewing machine',
answer: 1,
},
{
question: 'Which of the following statements about mammals is true?',
choice1: 'They have hairs',
choice2: 'They lay eggs',
choice3: 'They have feathers',
choice4: 'They have beaks',
choice5: 'They are cold-blooded',
answer: 1,
},
{
question: 'The parasite that is found on dogs is',
choice1: 'capsid',
choice2: 'guinea worm ',
choice3: 'plasmodium ',
choice4: 'tapeworm',
choice5: 'tick',
answer: 5,
},
{
question: 'The substancethat sublimes when heated is',
choice1: 'baking powder',
choice2: 'camphor',
choice3: 'common salt',
choice4: 'sugar',
choice5: 'sulphur',
answer: 2,
},
{
question: 'In plants, when the male gamete fuses with the egg, the first structure that is formed is the',
choice1: 'embryo',
choice2: 'testa ',
choice3: 'fruit ',
choice4: 'seed',
choice5: 'zygote',
answer: 5,
},
{
question: 'Clayey soil holds more water than any other type of soil because it has',
choice1: 'large particle size',
choice2: 'larger air spaces',
choice3: 'irregular particle size',
choice4: 'greater attraction for water',
choice5: 'reduced air spaces',
answer: 5,
},
{
question: 'Disposal of urine and faeces into a river used for domesticpurposes, maycause theoutbreak of',
choice1: 'bilharzia',
choice2: 'malaria',
choice3: 'river blindness',
choice4: 'tetanus',
choice5: 'tuberculosis',
answer: 1,
},
{
question: 'The temperature of 20°Con the Kelvin scale is',
choice1: '253 K ',
choice2: '263 K ',
choice3: '273 K ',
choice4: '283 K ',
choice5: '293 K',
answer: 5,
},
{
question: 'The heavenly body that produces and emits its own light is',
choice1: 'Mars',
choice2: 'meteorite ',
choice3: 'the moon ',
choice4: 'the sun',
choice5: 'Venus',
answer: 4,
},
{
question: 'Desert plants shed their leaves to reduce the rate of',
choice1: 'absorption ',
choice2: 'diffusion ',
choice3: 'osmosis',
choice4: 'respiration',
choice5: 'transpiration',
answer: 5,
},
{
question: 'Which of the following materials transforms electrical energy into light energy?',
choice1: 'Electrical bell ',
choice2: 'Filament bulb ',
choice3: 'Electric guitar ',
choice4: 'Lantern',
choice5: 'Radio',
answer: 2,
},
{
question: 'The name of the smallest blood vessel in humans is',
choice1: 'artery',
choice2: 'arteriole',
choice3: 'capillary',
choice4: 'vein',
choice5: 'venule',
answer: 3,
},
{
question: 'Which of the following activities is a reflex action?',
choice1: 'Eating',
choice2: 'Fighting ',
choice3: 'Learning ',
choice4: 'Sneezing ',
choice5: 'Writing',
answer: 4,
},
{
question: 'The method of separation used in the treatment of water at the water works is',
choice1: 'decantation ',
choice2: 'distillation ',
choice3: 'evaporation',
choice4: 'magnetization',
choice5: 'precipitation',
answer: 1,
},
{
question: 'The gas produced when dilute hydrochlorica cid is added to calcium carbonate is',
choice1: 'ammonia',
choice2: 'carbon dioxide',
choice3: 'chlorine ',
choice4: 'hydrogen ',
choice5: 'oxygen',
answer: 2,
},
{
question: 'Which of the following environmental factors increases sweating in humans?',
choice1: 'Low temperature',
choice2: 'Low pressure',
choice3: 'High pressure',
choice4: 'High temperature',
choice5: 'High humidity',
answer: 4,
},
{
question: 'Which of the following crops is propagated vegetatively?',
choice1: 'Cassava ',
choice2: 'Coconut ',
choice3: 'Mango ',
choice4: 'Okro',
choice5: 'Tomato',
answer: 1,
},
{
question: 'The type of energy stored in food is referred to as',
choice1: 'chemical energy ',
choice2: 'electrical energy ',
choice3: 'heat energy',
choice4: 'kinetic energy',
choice5: 'light energy',
answer: 1,
},
{
question: 'The end product of protein digestion is',
choice1: 'amino acids',
choice2: 'glucose',
choice3: 'maltose',
choice4: 'poly-peptide',
choice5: 'sucrose',
answer: 1,
},
{
question: 'The attracting power of magnets is greatest at the',
choice1: 'centre ',
choice2: 'edges ',
choice3: 'poles ',
choice4: 'sides',
choice5: 'surface',
answer: 3,
},
{
question: 'The substances which help in the digestion of food materials are called',
choice1: 'enzymes ',
choice2: 'hormones ',
choice3: 'lymph',
choice4: 'mucus',
choice5: 'plasma',
answer: 1,
},
{
question: 'The transfer of heat through a solid medium is by \n' +
'I. conduction II. convection III. radiation',
choice1: 'I only ',
choice2: 'II only ',
choice3: 'III only',
choice4: 'I and II only',
choice5: 'II and III only',
answer: 1,
},
{
question: 'Casual and loose sex life can result in the spread of',
choice1: 'AIDS ',
choice2: 'cholera',
choice3: 'poliomyelitis',
choice4: 'malaria',
choice5: 'tuberculosis',
answer: 1,
},
{
30. Which of the following conditions will cause the same quantity of sugar to dissolve faster in a given volume of question: '
choice1: 'Stirring the solution ',
choice2: 'Grinding the sugar',
choice3: 'Heating the solution',
choice4: 'Dissolving in a bigger container',
choice5: 'Cooling the solution',
answer: 3,
},
{
question: 'The raw material for photosynthesis is',
choice1: 'carbon dioxide',
choice2: 'chlorophyll ',
choice3: 'mineral salts ',
choice4: 'oxygen',
choice5: 'sunlight',
answer: 1,
},
{
question: 'Which of the following heavenly bodies is at the centre of theplanetarysystem?',
choice1: 'Earth',
choice2: 'Mercury',
choice3: 'Pluto',
choice4: 'Sun',
choice5: 'Venus',
answer: 4,
},
{
question: 'Legumes are generally included in crop rotation because they',
choice1: 'are easy to uproot in preparation for the next planting season',
choice2: 'are able to fix atmospheric nitrogen in the soil',
choice3: 'have short lifespan',
choice4: 'are good cover crops',
choice5: 'have high market value',
answer: 2,
},
{
question: 'The insect which transmits the plasmodium parasite is called',
choice1: 'butterfly ',
choice2: 'cockroach ',
choice3: 'housefly ',
choice4: 'mosquito ',
choice5: 'tsetse fly',
answer: 4,
},
{
question: 'The property of water that causes mosquito larvae to float on it is',
choice1: 'density',
choice2: 'viscosity',
choice3: 'surface tension',
choice4: 'volume',
choice5: 'capillarity',
answer: 3,
},
{
question: 'Which of the following practices is a bad habit?',
choice1: 'Keeping one’s surroundings tidy',
choice2: 'Drinking clean water',
choice3: 'Covering one’s food',
choice4: 'Using a brother’s towel and comb',
choice5: 'Washing of hands before eating',
answer: 4,
},
{
question: 'Addition of more solvent to a solution makes the solution more',
choice1: 'dense',
choice2: 'dilute',
choice3: 'concentrated',
choice4: 'saturated',
choice5: 'supersaturated',
answer: 2,
},
{
question: 'An atom has 4 protons and 5 neutrons in its nucleus. How many positively charged particles are in the atom?',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
choice5: '5',
answer: 4,
},
{
question: 'Which of the following statements about all living things is/ aretrue ?\n' +
'I. They respire ' +
' II. They manufacture their own food ' +
' III. They grow',
choice1: 'I only',
choice2: 'II only',
choice3: 'I and II only ',
choice4: 'I and III only ',
choice5: 'II and III only',
answer: 4,
},
{
question: 'Spectacle with converging lenses are used by people suffering from',
choice1: 'cataract',
choice2: 'glaucoma',
choice3: 'headache',
choice4: 'long-sightedness',
choice5: 'short-sightedness',
answer: 4,
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

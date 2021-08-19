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
		
question: 'The space occupied by matter is its',
choice1: 'area',
choice2: 'mass',
choice3: 'volume',
choice4: 'weight',
answer: 3,
},
{

question: 'Which of the following structures contain cellulose?',
choice1: 'Cell wall',
choice2: 'Cell membrane',
choice3: 'Chloroplast',
choice4: 'Mitochondrion',
answer: 1,
},
{

question: 'Which of the following activities are cultural practices used in tomato cultivation?\n' +
'I. Pest control' +
' II. Pricking out ' +
' III. Fertilizer application',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 4,
},
{

question: 'The farming system that makes effective use of available soil nutrients in a growing season is',
choice1: 'crop rotation',
choice2: 'land rotation',
choice3: 'mixed cropping',
choice4: 'mixed farming',
answer: 3,
},
{
 

question: 'Which of the following members in a food chain will receive the least energy?',
choice1: 'Lizard',
choice2: 'Grass',
choice3: 'Grasshopper',
choice4: 'Hawk',
answer: 2,
},
{

question: 'Digestion of fats and oils in humans starts in the',
choice1: 'colon',
choice2: 'gullet',
choice3: 'mouth',
choice4: 'duodenum',
answer: 4,
},
{
 

question: 'What is the chemical symbol for silver?',
choice1: 'Ag',
choice2: 'Au',
choice3: 'Si',
choice4: 'S',
answer: 1,
},
{

question: 'The process by which gas changes to liquid is known as',
choice1: 'melting',
choice2: 'evaporation',
choice3: 'condensation',
choice4: 'boiling',
answer: 3,
},
{

question: 'Which of the following substances is acidic?',
choice1: 'Wood ash',
choice2: 'Salt-petre',
choice3: 'Bee stings',
choice4: 'Bicarbonate of soda',
answer: 3,
},
{

question: 'The basic unit of life is the',
choice1: 'cell',
choice2: 'nucleus',
choice3: 'organ',
choice4: 'tissue',
answer: 1,
},
{
 

question: 'Useful materials in food that provide growth and repair of worn out tissues are called',
choice1: 'carbohydrates',
choice2: 'vitamins',
choice3: 'proteins',
choice4: 'fats',
answer: 3,
},
{
 

question: 'In human reproduction, the sperm fertilizes the female egg to form the',
choice1: 'zygote',
choice2: 'follicle',
choice3: 'ovary',
choice4: 'ovum',
answer: 1,
},
{
question: 'A solid X reacted with a liquid Y to form a salt and water only. A portion of liquid Y turned blue litmus paper red. Solid X did not dissolve when a portion of it was placed in water and stirred.\nSolid X could be said to be',
choice1: 'an acid',
choice2: 'an alkali',
choice3: 'a base',
choice4: 'a salt',
answer: 3,
},
{
 

question: 'A solid X reacted with a liquid Y to form a salt and water only. A portion of liquid Y turned blue litmus paper red. Solid X did not dissolve when a portion of it was placed in water and stirred.\n Liquid Y is',
choice1: 'an acid',
choice2: 'an alkali',
choice3: 'a base',
choice4: 'a metal',
answer: 1,
},
{
 

question: 'A solid X reacted with a liquid Y to form a salt and water only. A portion of liquid Y turned blue litmus paper red. Solid X did not dissolve when a portion of it was placed in water and stirred.\n If red litmus paper is placed in liquid Y, the colour of the paper will',
choice1: 'remain the same',
choice2: 'change to blue',
choice3: 'change to purple',
choice4: 'become brighter',
answer: 1,
},
{
 

question: 'The type of soil which becomes water-logged after rainfall is made up of a large amount of',
choice1: 'silt',
choice2: 'sand',
choice3: 'gravel',
choice4: 'clay',
answer: 4,
},
{
 

question: 'Ringworm is a disease which attacks the',
choice1: 'skin',
choice2: 'lungs',
choice3: 'liver',
choice4: 'kidneys',
answer: 1,
},
{
 

question: 'The most appropriate practice to adopt when growing vegetables in the dry season is',
choice1: 'watering',
choice2: 'transplanting',
choice3: 'pest control',
choice4: 'fertilizer application',
answer: 1,
},
{
 

question: 'Which of the following organisms improves soil fertility?',
choice1: 'Caterpillar',
choice2: 'Millipede',
choice3: 'Nematode',
choice4: 'Rat',
answer: 2,
},
{
 

question: 'The introduction of natural enemies to control pests on a field is a',
choice1: 'physical control method',
choice2: 'cultural control method',
choice3: 'chemical control method',
choice4: 'biological control method',
answer: 4,
},
{
 

question: 'A body has a density of 30 g cm–3 and volume of 6 cm3. Determine the mass of the body.',
choice1: '180.0 g',
choice2: '24.0 g',
choice3: '5.0 g',
choice4: '0.2 g',
answer: 1,
},
{

question: 'The force which tends to pull an object in a circular motion towards the centre of the circle is called',
choice1: 'centripetal force',
choice2: 'electrostatic force',
choice3: 'gravitational force',
choice4: 'magnetic force',
answer: 1,
},
{
 

question: 'The swollen shoot disease of cocoa is caused by',
choice1: 'fungus',
choice2: 'virus',
choice3: 'bacteria',
choice4: 'protozoa',
answer: 2,
},
{

question: 'The instrument used to measure atmospheric pressure is called',
choice1: 'a thermometer',
choice2: 'a force meter',
choice3: 'a barometer',
choice4: 'an anemometer',
answer: 3,
},
{
 

question: 'The systematic name of NO2 is',
choice1: 'nitrogen oxide',
choice2: 'nitrogen (I) oxide',
choice3: 'nitrogen (II) oxide',
choice4: 'nitrogen (IV) oxide',
answer: 4,
},
{

question: 'Which of the following simple machines is a second class lever?',
choice1: 'Bottle top opener',
choice2: 'Claw hammer',
choice3: 'Fishing rod',
choice4: 'Pair of pliers',
answer: 1,
},
{

question: 'A cylindrical metal has radius 7 cm and height 2cm. Determine the volume of the cylinder. [Take π = 22/7]',
choice1: '44 cm3',
choice2: '107 cm3',
choice3: '308 cm3',
choice4: '1078 cm3',
answer: 3,
},
{

question: 'Which of the following statements are true of compounds?\n' +
'I. They are homogenous \n' +
'II. Their constituents are present in fixed ratio by mass\n' +
'III. Their constituents keep their individual properties',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 1,
},
{

question: 'Which of the following factors contribute to early parenthood?\n' +
'I. Illiteracy\n' +
'II. Poverty \n' +
'III. Peer pressure\n' +
'IV. Lack of parental care',
choice1: 'I and II only',
choice2: 'II and III only',
choice3: 'III and IV only',
choice4: 'I, II, III and IV',
answer: 4,
},
{

question: 'Which of the following statements about the negative use of Science and Technology is correct? It',
choice1: 'promotes good health',
choice2: 'promotes easy communication',
choice3: 'enable humans to use less energy in working',
choice4: 'creates things that are dangerous to the environment',
answer: 4,
},
{

question: 'Which of the following nutrients is needed by plants in small quantities?',
choice1: 'Calcium',
choice2: 'Iron',
choice3: 'Potassium',
choice4: 'Magnesium',
answer: 2,
},
{

question: 'Which of the following statements about shadow formation is correct? It shows that light rays can',
choice1: 'be diffused',
choice2: 'travel in a straight line',
choice3: 'be refracted',
choice4: 'be reflected',
answer: 2,
},
{

question: 'The colour of the neutral wire in an electrical circuit is',
choice1: 'blue',
choice2: 'brown',
choice3: 'green',
choice4: 'yellow',
answer: 1,
},
{

question: 'A metal displaces 5.0 cm3 of water when it is totally immersed. If the mass of the metal is 35.0 g, calculate its density',
choice1: '7.0 g cm–3',
choice2: '30.0 cm–3',
choice3: '40.0 cm–3',
choice4: '175.0 cm–3',
answer: 1,
},
{

question: 'Which of the following physical properties of water are correct? Water\n\n' +
'I. is a colourless liquid ' +
' II. is a universal solvent ' +
' III. boils at 100°C at standard atmospheric pressure ' +
' IV. has a density of 5 kg cm–3 at 4°C',
choice1: 'I and II only',
choice2: 'II and III only',
choice3: 'I, II and III only',
choice4: 'II, III and IV only',
answer: 3,
},
{

question: 'The relative proportions of the different particle sizes in a soil sample refer to soil',
choice1: 'temperature',
choice2: 'texture',
choice3: 'structure',
choice4: 'porosity',
answer: 2,
},
{
 

question: 'Which of the following chemical equations is balanced?',
choice1: 'K + O2 → K2O',
choice2: 'Mg + O2 → MgO',
choice3: 'Na + Cl2 → NaCl',
choice4: 'H2 + Cl2 → 2HCl',
answer: 4,
},
{
 

question: 'Heat is transferred along an iron bar by',
choice1: 'absorption',
choice2: 'conduction',
choice3: 'convection',
choice4: 'radiation',
answer: 2,
},
{

question: 'The second stage in the life of a mosquito is the',
choice1: 'egg',
choice2: 'imago',
choice3: 'larva',
choice4: 'pupa',
answer: 3,
},
{
 
question: 'The function of the platelets in the circulatory system of humans is to',
choice1: 'transport oxygen',
choice2: 'transport carbon dioxide',
choice3: 'defend the body',
choice4: 'clot the blood',
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

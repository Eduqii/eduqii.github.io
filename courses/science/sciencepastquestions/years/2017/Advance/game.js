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
	question: 'The instrument used to measure relative humidity is the',
choice1: 'hydrometer.',
choice2: 'hygrometer.',
choice3: 'rain gauge.',
choice4: 'wind vane.',
answer: 2,
},
{

question: 'The S.I. unit for density is',
choice1: 'ms –1',
choice2: 'ms –2',
choice3: 'kg m –3',
choice4: 'm3 kg –1',
answer: 3,
},
{

question: 'When light travels from glass to air, its speed is',
choice1: 'increased.',
choice2: 'reduced.',
choice3: 'halved.',
choice4: 'unchanged.',
answer: 1,
},
{

question: 'When a piece of iron rod is brought near a permanent magnet for a while it becomes magnetised by',
choice1: 'stroking method.',
choice2: 'electrical method.',
choice3: 'friction.',
choice4: 'induction.',
answer: 4,
},
{
 

question: 'A rheostat is used in an electric circuit in order to',
choice1: 'increase electric current only.',
choice2: 'decrease electric current only.',
choice3: 'keep electric current constant',
choice4: 'increase and decrease electric current.',
answer: 4,
},
{

question: 'Which of the following statements about an opaque object is correct? An opaque object',
choice1: 'allows light to pass through it partially.',
choice2: 'allows light to pass through if fully.',
choice3: 'forms a shadow.',
choice4: 'does not form a shadow',
answer: 3,
},
{
 

question: 'One of the characteristics of a solid is that',
choice1: 'its particles are tightly packed.',
choice2: 'it assumes the shape of the container it occupies.',
choice3: 'it has no fixed volume.',
choice4: 'its particle can easily be separated.',
answer: 1,
},
{

question: 'The instrument used to measure current in an electrical circuit is the',
choice1: 'ammeter.',
choice2: 'photometer.',
choice3: 'thermometer.',
choice4: 'voltmeter.',
answer: 1,
},
{

question: 'The bottom of a pool of water appears closer to the surface than it is. Which of the following properties accounts observation?',
choice1: 'Reflection',
choice2: 'Transparency of water',
choice3: 'Refraction',
choice4: 'Rectilinear propagation',
answer: 3,
},
{

question: 'An example of a source of energy which is non-renewable is',
choice1: 'petroleum.',
choice2: 'solar.',
choice3: 'tide.',
choice4: 'wind.',
answer: 1,
},
{
 

question: 'Which of the following apparatus is not required in the process of distillation in the laboratory?',
choice1: 'Condenser',
choice2: 'Evaporating dish',
choice3: 'Bunsen burner',
choice4: 'Round bottom flask',
answer: 2,
},
{
 

question: 'The number of oxygen atoms present in three molecules of carbon dioxide is',
choice1: '3.',
choice2: '4.',
choice3: '5.',
choice4: '6.',
answer: 4,
},
{
 

question: 'The chemical formula Cl2 represents two',
choice1: 'atoms of chlorine.',
choice2: 'neutrons of chlorine.',
choice3: 'ions of chlorine.',
choice4: 'molecules of chlorine.',
answer: 1,
},
{
 

question: 'Which of the following substances can rust?',
choice1: 'Aluminium',
choice2: 'Bauxite',
choice3: 'Copper',
choice4: 'Steel',
answer: 4,
},
{
 

question: 'Energy stored in food is referred to as',
choice1: 'chemical energy.',
choice2: 'heat energy.',
choice3: 'solar energy.',
choice4: 'kinetic energy.',
answer: 1,
},
{
 

question: 'Which of the following substances is a mixture?',
choice1: 'Water',
choice2: 'Sodium chloride',
choice3: 'Sodium chloride solution',
choice4: 'Iron filing',
answer: 3,
},
{
 

question: 'The mole is the S.I. unit of',
choice1: 'amount of substance.',
choice2: 'luminous intensity.',
choice3: 'temperature.',
choice4: 'mass of substance.',
answer: 1,
},
{
 

question: 'An atom has a proton number of 17 and neutron number 18. Determine the number of electrons in the third shell of ',
choice1: '1',
choice2: '3',
choice3: '5',
choice4: '7',
answer: 4,
},
{
 

question: 'An example of mixtures that can be separated by the method of filtration is',
choice1: 'sugar in water.',
choice2: 'sand in water.',
choice3: 'oil in water.',
choice4: 'ink in water.',
answer: 2,
},
{
 

question: 'Which of the following liquids would turn blue litmus paper red?',
choice1: 'Vinegar',
choice2: 'Water',
choice3: 'Ammonia solution',
choice4: 'Bicarbonate solution',
answer: 1,
},
{
 

question: 'Which of the following particles constitute matter?' + '<br />' + '<br />' + 
'I. Atoms ' +
' II. Molecules ' +
'III. Ions',
choice1: 'I only',
choice2: 'II only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 4,
},
{

question: 'An example of inheritable characteristics in humans is',
choice1: 'shape of nose.',
choice2: 'knowledge.',
choice3: 'ability to speak different languages.',
choice4: 'handwriting.',
answer: 1,
},
{
 

question: 'Which of the following statements about aerobic respiration is correct?',
choice1: 'The by-products are carbon dioxide and water.',
choice2: 'Little amount of energy is produced.',
choice3: 'Oxygen is not required.',
choice4: 'The by-products are alcohol and carbon dioxide.',
answer: 1,
},
{

question: 'Sperms produced by the testes in humans are temporarily stored in the',
choice1: 'epididymis.',
choice2: 'prostate gland.',
choice3: 'seminal vesicle.',
choice4: 'sperm duct.',
answer: 1,
},
{
 

question: 'Which of the following changes normally occur during old age in humans?',
choice1: 'Grey hair starts appearing',
choice2: 'Mental alertness increases',
choice3: 'Broadening of the chest',
choice4: 'Attraction to the opposite sex',
answer: 1,
},
{

question: 'One of the characteristics of wind pollinated flowers is that they',
choice1: 'are large and conspicuous.',
choice2: 'are usually scented.',
choice3: 'have nectar.',
choice4: 'have feathery stigma.',
answer: 4,
},
{

question: 'The testes is normally located outside the body of the male because',
choice1: 'the temperature of the body is too high for effective sperm production.',
choice2: 'it cannot increase in size when it is in the body.',
choice3: 'it can absorb moisture from the atmosphere.',
choice4: 'it occupies too much space.',
answer: 1,
},
{

question: 'The organelle which occupies the largest portion of a plant cell is the',
choice1: 'chloroplast.',
choice2: 'mitochondrion.',
choice3: 'nucleus.',
choice4: 'vacuole.',
answer: 4,
},
{

question: 'Movement of the ribs is brought about by the',
choice1: 'pleural cavity.',
choice2: 'intercostal muscle.',
choice3: 'larynx.',
choice4: 'trachea.',
answer: 2,
},
{

question: 'Fertilisation in humans usually occurs in the',
choice1: 'ovary.',
choice2: 'uterus.',
choice3: 'vagina.',
choice4: 'fallopian tube.',
answer: 4,
},
{

question: 'Which of the following processes is an example of osmosis?',
choice1: 'Spreading of perfume in a room',
choice2: 'Absorption of food nutrients into the small intestines',
choice3: 'Spreading of potassium permanganate in water',
choice4: 'Absorption of water into the root hairs',
answer: 4,
},
{

question: 'The part of a living cell which is semi-permeable is',
choice1: 'cytoplasm.',
choice2: 'nucleus.',
choice3: 'protoplasm.',
choice4: 'cell membrane.',
answer: 4,
},
{

question: 'Which of the following statements about soil profile is/are correct? It helps the farmer to determine' + '<br />' + '<br />' +
'I. soil fertility. ' +
' II. water-holding capacity of the soil. ' +
' III. depth of the soil.',
choice1: 'I only',
choice2: 'I and II only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 4,
},
{

question: 'Which of the following practices is not a principle of crop rotation?',
choice1: 'Legumes should be added to the rotation programme.',
choice2: 'Deep rooted crops should be followed by shallow rooted crops.',
choice3: 'Crops that are closely related should follow each other.',
choice4: 'Fallow periods should be allowed during the time of rotation.',
answer: 3,
},
{

question: 'The relative proportion of sand, silt and clay in a given sample of soil is soil',
choice1: 'profile.',
choice2: 'porosity.',
choice3: 'structure.',
choice4: 'texture.',
answer: 4,
},
{

question: 'The first factor to be considered when deciding to cultivate a particular vegetable is',
choice1: 'cultural practices.',
choice2: 'selection of land.',
choice3: 'harvesting.',
choice4: 'method of propagation.',
answer: 2,
},
{
 
question: 'Which of the following factors should be considered when selecting a site for vegetable crop production?' + '<br />' + '<br />' + 
'I. Nearness to the market. ' +
' II. Topography of the land. ' +
'III. Nearness to the sea',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 1,
},
{
 

question: 'Which of the following activities are cultural practices in the cultivation of cabbage?' + '<br />' + '<br />' + 
'I. Pruning ' +
' II. Weeding ' + 
'III. Watering',
choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'II and III only',
choice4: 'I, II and III',
answer: 4,
},
{

question: 'An example of a vegetable crop is',
choice1: 'cocoa.',
choice2: 'cotton.',
choice3: 'potato.',
choice4: 'tomato.',
answer: 3,
},
{
 

question: 'The majority charge carriers in a p-type semi-conductor are',
choice1: 'electrons.',
choice2: 'holes.',
choice3: 'neutrons.',
choice4: 'protons.',
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

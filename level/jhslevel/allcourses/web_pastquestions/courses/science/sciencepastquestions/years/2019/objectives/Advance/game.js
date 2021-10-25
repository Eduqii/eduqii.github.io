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
question: 'Steel is an alloy of iron and',

choice1: 'aluminium',
choice2: 'carbon',
choice3: 'silicon',
choice4: 'gold',
answer: 2,
},
{

 
question: 'An atom that has lost one or more electron(s) is called',

choice1: 'a molecule',
choice2: 'a proton',
choice3: 'an ion',
choice4: 'a negative particle',
answer: 3,
},
{

 
question: 'In all machines, the efficiency is',

choice1: 'always 100 %',
choice2: 'less than 100%',
choice3: 'more than 100%',
choice4: 'always 0%',
answer: 2,
},
{

 
question: 'In electronic circuits, LEDs are used to indicate the absence or presence of',

choice1: 'voltage source',
choice2: 'p-n junction',
choice3: 'electric current',
choice4: 'emitter and collector',
answer: 3,
},
{
 

 
question: 'Which of the following statements about the scientific method is/ are correct? It provides\n' +

'I. logical procedure for arriving at knowledge ' +
' II. knowledge that can be verified ' +
' III. knowledge that can never be changed',

choice1: 'I only',
choice2: 'I and II only',
choice3: 'I and III only',
choice4: 'II and III only',
answer: 2,
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
 

 

question: 'Which of the following source(s) of energy is/are renewable?\n' +

'I. Solar  ' + 
'  II. Crude oil  ' +
'  III. Wind',

choice1: 'I only',
choice2: 'I and II only',
choice3: 'I and III only',
choice4: 'I, II and III',
answer: 3,
},
{

 
question: 'The pressure in fluids',

choice1: 'increases with depth',
choice2: 'decreases with depth',
choice3: 'acts upwards at any point',
choice4: 'acts differently in all directions',
answer: 1,
},
{

 

question: 'Which of the following chemical equations is balanced?',
choice1: 'N' + '<sub>' +'2' + '</sub>' + 'H' + '<sub>' + '2' + '</sub>' + ' \u2192 ' + 'NH' + '<sub>' + '3' + '</sub>', 
choice2: 'N' + '<sub>' + '2' + '</sub>' + '3H' + '<sub>' +'2' + '</sub>' + ' \u2192 ' + 'NH' + '<sub>' + '3' + '</sub>', 
choice3: 'N' + '<sub>' + '2' + '</sub>' + '3' + 'H' + '<sub>' + '2' + '</sub>' + ' \u2192 ' + '2NH' + '<sub>' + '3' + '</sub>', 
choice4: 'N' + '<sub>' + '2' + '</sub>' + '3' + 'H' + '<sub>' + '2' + '</sub>' + ' \u2192 ' + 'NH' + '<sub>' + '3' + '</sub>', 
answer: 3,
},
{
 
question: 'Lime juice tastes sour because it is',

choice1: 'acidic',
choice2: 'alkaline',
choice3: 'basic',
choice4: 'salty',
answer: 1,
},
{
 
question: 'A metal black has a mass of 1.0 kg. What is the volume of the block if its density is 10\ kgm^{-3} ?',

choice1: '0.01 m^{3} ',
choice2: '0.10 m^{3} ',
choice3: '1.00 m^{3} ',
choice4: '10.00 m^{3} ',
answer: 2,
},
{
 

 
question: 'It is easier to move a heavy load with a crowbar when the',

choice1: 'effort distance is shorter than the load distance',
choice2: 'effort distance is longer than the load distance',
choice3: 'effort distance of distance equal to the load distance',
choice4: 'effort is equal to the load',
answer: 2,
},
{
 

 
question: 'Benedict’s solution was added to a mixture in a test tube and it turned brick red when heated. The mixture is likely to contain', 
choice1: 'glucose',
choice2: 'vitamin',
choice3: 'can start a motion',
choice4: 'can change the direction of a moving',
answer: 1,
},
{
 

 
question: 'Chlorine gas is an example of',

choice1: 'an atom',
choice2: 'an element',
choice3: 'a compound',
choice4: 'a molecule',
answer: 4,
},
{
 
 
question: 'Which of the following statements about a force are correct? It\n' +

'I. is measured in newtons\n' +
'II. is measured in newton-metre\n' +
'III. can start a motion\n' + 
'IV. can change the direction of a moving body',

choice1: 'I and II only',
choice2: 'I and III only',
choice3: 'I, III and IV only',
choice4: 'I, II, III and IV',
answer: 3,
},
{
 

 
question: 'Kerosene is able to reach the other end of a wick by',

choice1: 'diffusion',
choice2: 'suction pressure',
choice3: 'capillary action',
choice4: 'osmosis',
answer: 3,
},
{
 

 
question: 'Which of the following processes is used to separate insoluble solids from liquids?',

choice1: 'Sublimation',
choice2: 'Filtration',
choice3: 'Evaporation',
choice4: 'Crystallization',
answer: 2,
},
{
 

 
question: 'Which of the following chemical compounds is used in removing hardness in water?',

choice1: 'NaCl',
choice2: 'NaOH',
choice3: 'Na' + '<sub>2</sub>CO<sup>3</sup> ',
choice4: 'NaHCO<sup>3</sup>',
answer: 3,
},
{
 

 

question: 'When a thermometer is put in hot water, the mercury level rises because the mercury increases in',

choice1: 'density',
choice2: 'mass',
choice3: 'volume',
choice4: 'weight',
answer: 3,
},
{
 

 
question: 'The workdone when a force moves a body through a distance of 12 m is 720 J. The force applied is',

choice1: '8640 N',
choice2: '732 N',
choice3: '708 N',
choice4: '60 N',
answer: 4,
},
{
 

 

question: 'Which of the following compounds is neutral to litmus paper?',

choice1: 'HCL',
choice2: 'H_2O ',
choice3: 'NaOH',
choice4: 'KOH',
answer: 2,
},
{

 
question: 'A balanced diet is one which is made up of',

choice1: 'right proportions of protein, carbohydrates and oils',
choice2: 'equal amounts of protein, carbohydrates and oils',
choice3: 'enough water and iodated salt',
choice4: 'vegetables, fruits and water',
answer: 1,
},
{
 

 
question: 'The ovule in a flower develop to form the',

choice1: 'fruit',
choice2: 'leaf',
choice3: 'seed',
choice4: 'stem',
answer: 3,
},
{

 
question: 'Water drains faster through sand than clay because',

choice1: 'sand particles are rougher',
choice2: 'sand contains more air space',
choice3: 'clay particles are smother',
choice4: 'clay particles are bigger',
answer: 2,
},
{
 

 
question: 'The best method of checking erosion on a slope is',

choice1: 'cover cropping',
choice2: 'mixed contains',
choice3: 'contour ploughing',
choice4: 'mulching',
answer: 3,
},
{

 

question: 'The housefly is an agent for the spread of',

choice1: 'cholera',
choice2: 'malaria',
choice3: 'measles',
choice4: 'tuberculosis',
answer: 1,
},
{

 

question: 'Which of the following substances are carried by the blood?\n' +

'I. Nutrients\n' +
'II. Urine\n' +
'III. Oxygen\n' +
'IV. Carbon dioxide',

choice1: 'II and III only',
choice2: 'I, II and IV only',
choice3: 'I and III only',
choice4: 'I, III and IV only',
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

 
question: 'The study of the soil profile of an area helps the farmer to',

choice1: 'control weed growth',
choice2: 'determine the soil temperature',
choice3: 'determine the types of crop to grow',
choice4: 'know the pesticides to use',
answer: 3,
},
{

 
question: 'The term leaching in soils refers to',

choice1: 'accumulation of organic matter',
choice2: 'decomposition of plant materials fixation',
choice3: 'fixation of nitrogen',
choice4: 'removal of soil nutrients by water',
answer: 4,
},
{

 

question: 'How many stages does the mosquito go through in its life cycle of development?',

choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
answer: 4,
},
{

 
question: 'Which of the following enzymes helps in the digestion of protein in the human stomach?\n' +

'I. Proteases ' +
' II. Amylase ' +
' IV. Lipase',

choice1: 'I only',
choice2: 'II only',
choice3: 'I and II only',
choice4: 'II and III only',
answer: 1,
},
{

 

question: 'Kidneys absorb water from the bloodstream humans through the process of',

choice1: 'diffusion',
choice2: 'egestion',
choice3: 'osmosis',
choice4: 'assimilation',
answer: 3,
},
{

 
question: 'An example of soil macro-nutrients is',

choice1: 'copper',
choice2: 'calcium',
choice3: 'phosphorus',
choice4: 'potassium',
answer: 3,
},
{

 
question: 'The vegetable crop that staking during its growth is',

choice1: 'sweet pepper',
choice2: 'garden eggs',
choice3: 'tomatoes',
choice4: 'hot pepper',
answer: 3,
},
{

 
question: 'The function of the white blood cells in human is to',

choice1: 'produce haemoglobin',
choice2: 'produce digestive enzymes ensure blood clot during an injury',
choice3: 'ensure blood clot during an injury',
choice4: 'produce antibodies to fight disease causing organisms',
answer: 4,
},
{
 

 

question: 'The carpel of a flower is made up of the following parts except',

choice1: 'filament',
choice2: 'ovary',
choice3: 'style',
choice4: 'stigma',
answer: 1,
},
{
 

 
question: 'A food web shows how',

choice1: 'food produced by plants is distributed to other parts of the plant.',
choice2: 'an organism protects itself in its environment',
choice3: 'organisms depend on one another for shelter',
choice4: 'food produced by green plants is distributed among organisms in a community',
answer: 4,
},
{

 

question: 'Balanced ration enables animals to',

choice1: 'increase infertility rate',
choice2: 'maintain normal growth',
choice3: 'increase meat production',
choice4: 'maintain energy level of work animals',
answer: 2,
},
{
 
question: 'Cultural practices are activities undertaken on a farm',

choice1: 'after harvesting and before processing',
choice2: 'before maturity and after harvesting',
choice3: 'after planting and before harvesting',
choice4: 'before transplanting seedlings',
answer: 3,
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 40

startGame = () => {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]

	//function for timer
	var count = 45;
var interval = setInterval(function(){
 document.getElementById('timer_sec').innerHTML=count;
  count--;
  if (count < 20) {
  	document.getElementById('timer_sec').style.color="red";
  }
  if (count === 0){
    clearInterval(interval);
    document.getElementById('time_remaining').innerHTML='Time out';
	localStorage.setItem('mostRecentScore', score)

		return window.location.assign('quiz_challenge.html') 
  }
}, 60000);
//end of function for timer

	getNewQuestion()
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('quiz_challenge.html') 
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

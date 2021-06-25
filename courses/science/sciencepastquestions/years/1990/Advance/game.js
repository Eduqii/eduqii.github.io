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
	//Q1
	{
question: 'Which of the following is a liquid?',
choice1: 'Iron',
choice2: 'Mercury',
choice3: 'Brass',
choice4: 'Gold',
choice5: 'Aluminium',
answer: 2,
},
//Q2
{
question: 'The space occupied by matter is its',
choice1: 'area',
choice2: 'length ',
choice3: 'radius ',
choice4: 'width',
choice5: 'volume',
answer: 5,
},
//Q3
{
question: 'Which of the following processes could be used to obtain water from a salt solution?',
choice1: 'Filtration',
choice2: 'Decantation ',
choice3: 'Evaporation ',
choice4: 'Distillation',
choice5: 'Sedimentation',
answer: 4,
},
//Q4
{
question: 'The portion of air which is used in burning is',
choice1: 'nitrogen',
choice2: 'water vapour',
choice3: 'oxygen',
choice4: 'carbon dioxide',
choice5: 'inert gas',
answer: 3,
},
//Q5
{
question: 'Brine is a saturated solution of',
choice1: 'sodium chloride and carbon dioxide',
choice2: 'calcium carbonate and water',
choice3: 'sodium chloride and water',
choice4: 'calcium carbonate and kerosene',
choice5: 'magnesium and water',
answer: 3,
},
//Q6
{
question: 'The chemical symbol for iron is',
choice1: 'I ',
choice2: 'K ',
choice3: 'Fe ',
choice4: 'Au ',
choice5: 'Cl',
answer: 3,
},
//Q7
{
question: 'A torchlight derives its energy from',
choice1: 'petrol',
choice2: 'kerosene ',
choice3: 'a magnet ',
choice4: 'gas oil',
choice5: 'a dry cell',
answer: 5,
},
//Q8
{
question: 'A substance which cannot be broken down into simpler substances is called',
choice1: 'a molecule ',
choice2: 'a compound ',
choice3: 'an element ',
choice4: 'a mixture',
choice5: 'an atom',
answer: 3,
},
//Q9
{
question: 'What type of energy is lost when sweat evaporates from the body?',
choice1: 'light energy',
choice2: 'mechanical energy',
choice3: 'chemical energy',
choice4: 'Heat energy',
choice5: 'Electrical energy',
answer: 4,
},
//Q10
{
question: 'The process by which steam is changed into liquid is called',
choice1: 'evaporation ',
choice2: 'condensation ',
choice3: 'filtration',
choice4: 'melting',
choice5: 'sublimation',
answer: 2,
},
//Q11
{
question: 'Which of the following is not true about frictional force?It',
choice1: 'increases motion',
choice2: 'opposes motion',
choice3: 'damages machines',
choice4: 'produces heat',
choice5: 'decreases efficiency of machines',
answer: 1,
},
//Q12
{
question: 'The instrument used in measuring the speed of wind is called:',
choice1: 'Thermometer',
choice2: 'Wind Vane ',
choice3: 'Photometer ',
choice4: 'Anemometer ',
choice5: 'Hygrometer',
answer: 4,
},
//Q13
{
question: 'The force which comes into operation when a ball rolls on the ground is:',
choice1: 'gravitational force',
choice2: 'frictional force',
choice3: 'magnetic force',
choice4: 'electrostatic force',
choice5: 'Force due to tension',
answer: 2,
},
//Q14
{
question: 'Which of the following is true about a first class lever?',
choice1: 'The load is between the effort and the pivot',
choice2: 'The pivot is between the effort and the load',
choice3: 'The effort is between the pivot and the load',
choice4: 'The load is on the pivot',
choice5: 'There is no pivot',
answer: 2,
},
//Q15
{
question: 'In which of the following situations is work not done? When a',
choice1: 'truck moves',
choice2: 'wheelbarrow is pushed',
choice3: 'fruit falls from a tree',
choice4: 'football is kicked',
choice5: 'book lies on a table',
answer: 5,
},
//Q16
{
question: 'Which of these structures regulate the amount of light that enters the eye?',
choice1: 'Retina',
choice2: 'Cornea',
choice3: 'Pupil',
choice4: 'Choroid',
choice5: 'Lens',
answer: 3,
},
//Q17
{
question: 'All of the following are herbivores except',
choice1: 'sheep',
choice2: 'dog',
choice3: 'goat',
choice4: 'grasscutter',
choice5: 'rabbit',
answer: 2,
},
//Q18
{
question: 'The brain and the spinal cord are part of the',
choice1: 'digestive system',
choice2: 'circulatory system',
choice3: 'respiratory system',
choice4: 'nervous system',
choice5: 'excretory system',
answer: 4,
},
//Q19
{
question: 'Which of the following is used by green plants for respiration?',
choice1: 'Carbon dioxide',
choice2: 'Oxygen',
choice3: 'Light',
choice4: 'Water',
choice5: 'Chlorophyll',
answer: 2,
},
//Q20
{
question: 'A fish dies shortly after being removed from water. This is because it',
choice1: 'cannot swim ',
choice2: 'is streamlined ',
choice3: 'is hot on land ',
choice4: 'has scales',
choice5: 'cannot respire',
answer: 5,
},
//Q21
{
question: 'Which of the following habitats are you likely to find a tadpole?',
choice1: 'Bush',
choice2: 'Seashore',
choice3: 'Pond',
choice4: 'Deep well',
choice5: 'Vegetable garden',
answer: 3,
},
//Q22
{
question: 'Which of these is not a characteristic of all living things?',
choice1: 'Transpiration',
choice2: 'Growth',
choice3: 'Reproduction',
choice4: 'Feeding',
choice5: 'Respiration',
answer: 1,
},
//Q23
{
question: 'Plants with thorns are not usually eaten by animals. The thorns therefore',
choice1: 'assist the plants to grow',
choice2: 'make the plant strong',
choice3: 'render the plant poisonous',
choice4: 'protect the plant',
choice5: 'make the plant unattractive',
answer: 4,
},
//Q24
{
question: 'Which of the following soils is likely to be found in a water logged area?',
choice1: 'Sand',
choice2: 'Clay',
choice3: 'Gravel',
choice4: 'Black soil',
choice5: 'loam',
answer: 2,
},
//Q25
{
question: 'Which of the following soil organisms improve soil fertility?',
choice1: 'Ant-lion',
choice2: 'Red ant',
choice3: 'Millipede',
choice4: 'Snail',
choice5: 'Earthworm',
answer: 5,
},
//Q26
{
question: 'Which of the following is cultivated on plantation basis?',
choice1: 'Okro',
choice2: 'Tomato ',
choice3: 'Rubber ',
choice4: 'Cassava ',
choice5: 'Maize',
answer: 3,
},
//Q27
{
question: 'The shape of a child’s nose may resemble that of the mother due to',
choice1: 'heredity ',
choice2: 'similarity ',
choice3: 'reflection ',
choice4: 'familiarity ',
choice5: 'attraction',
answer: 1,
},
//Q28
{
question: 'All the following plants reproduce sexually except',
choice1: 'coconut',
choice2: 'sweet potato',
choice3: 'pawpaw',
choice4: 'apple',
choice5: 'pear',
answer: 2,
},
//Q29
{
question: 'Which of the following is not a mammal?',
choice1: 'Whale',
choice2: 'Bat', 
choice3: 'Cat ',
choice4: 'Hen',
choice5: 'Mouse',
answer: 4,
},
//Q30
{
question: 'Plants lose water through a process called',
choice1: 'photosynthesis',
choice2: 'fertilization ',
choice3: 'transpiration ',
choice4: 'respiration',
choice5: 'evaporation',
answer: 3,
},
//Q31
{
question: 'Fertilized ovules develop into',
choice1: 'fruits',
choice2: 'cotyledon',
choice3: 'plumule',
choice4: 'testa',
choice5: 'seeds',
answer: 5,
},
//Q32
{
question: 'In mammals, sperms are produced in the',
choice1: 'testis ',
choice2: 'ureter ',
choice3: 'penis ',
choice4: 'urethra ',
choice5: 'ovary',
answer: 1,
},
//Q33
{
question: 'Starch is digested and absorbed into the blood as',
choice1: 'soluble starch',
choice2: 'water',
choice3: 'glucose',
choice4: 'fat',
choice5: 'sucrose',
answer: 3,
},
//Q34
{
question: 'Which of the following organs are connected by the ureter?',
choice1: 'Liver and kidney',
choice2: 'Kidney and bladder ',
choice3: 'Bladder and heart ',
choice4: 'Intestines and anus ',
choice5: 'Lungs and bladder',
answer: 2,
},
//Q35
{
question: 'A patient who coughs and spits out blood may be suffering from',
choice1: 'asthma',
choice2: 'pneumonia',
choice3: 'measles',
choice4: 'tuberculosis',
choice5: 'influenza',
answer: 4,
},
//Q36
{
question: 'All of the following promote Primary Health except',
choice1: 'keeping the surroundings clean',
choice2: 'effective disposal of waste',
choice3: 'personal hygiene',
choice4: 'balanced diet',
choice5: 'bleaching the skin',
answer: 5,
},
//Q37
{
question: 'The personnel who see to it that individuals who do not maintain hygienic surroundings are taken to court is the',
choice1: 'police',
choice2: 'lawyer',
choice3: 'sanitary inspector',
choice4: 'court clerk',
choice5: 'prison officer',
answer: 3,
},
//Q38
{
question: 'Which of the following statements is not true about the wet season',
choice1: 'Bush fires are common',
choice2: 'Tree and weeds grow fast',
choice3: 'Small animals increase in number',
choice4: 'The weather is generally cool',
choice5: 'Food is in abundance',
answer: 1,
},
//Q39
{
question: 'A mirror is used to direct the sun’s rays onto the classroom wall by',
choice1: 'radiation ',
choice2: 'reflection ',
choice3: 'conduction ',
choice4: 'revolution ',
choice5: 'convection',
answer: 2,
},
//Q40
{
question: 'The sun and the planets form the',
choice1: 'universe',
choice2: 'atmosphere',
choice3: 'milky way',
choice4: 'constellation',
choice5: 'solar system',
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
	//QThe next line keep track of the question we are on
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

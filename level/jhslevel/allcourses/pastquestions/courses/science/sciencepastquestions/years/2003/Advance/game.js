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
		question: 'The method used to separate an insoluble solid from a liquid is',
choice1: 'crystallization',
choice2: 'distillation',
choice3: 'filtration',
choice4: 'sublimation',
answer: 3,
},
{
question: 'The scent of a perfume sprayed at one corner of a room fills the entire room through',
choice1: 'conduction',
choice2: 'diffusion ',
choice3: 'osmosis ',
choice4: 'radiation',
answer: 2,
},
{
question: 'Which of the following processes is a physical change?',
choice1: 'Rusting of iron',
choice2: 'Burning of wood',
choice3: 'Formation of water from hydrogen and oxygen',
choice4: 'Solidification of water into ice',
answer: 4,
},
{
question: 'Atoms of the same element have the same\n' +
'I. number of electrons II. number of protons III. chemical properties' +
'\n\n Which of the above statements are true?',
choice1: 'I and II only ',
choice2: 'II and III only', 
choice3: 'I and III only', 
choice4: 'I,II and III',
answer: 4,
},
{
question: 'The unit of measurement of energy is',
choice1: 'joule',
choice2: 'kelvin',
choice3: 'newton',
choice4: 'watt',
answer: 1,
},
{
question: 'Which of the following energy transformations takes place at a hydroelectric power station?',
choice1: 'Potential energy→ kinetic energy→electrical energy', choice2: 'Potential energy→ sound energy→ electrical energy', choice3: 'Kinetic energy→electrical energy→ light energy',
choice4: 'Electrical energy→ light energy→ heat energy',
answer: 1,
},
{
question: 'A drawing of magnetic lines of force provides information on the',
choice1: 'source of the field',
choice2: 'type of magnet',
choice3: 'strength of the field',
choice4: 'length of the magnet',
answer: 3,
},
{
question: 'A bottle of water removed from a refrigerator soon becomes covered with droplets of water because the',
choice1: 'bottle is porous',
choice2: 'bottle is full of water',
choice3: 'water in the surrounding atmosphere is colder than the water in the bottle',
choice4: 'water in the surrounding atmosphere is warmer than the water in the bottle',
answer: 4,
},
{
question: 'The volume of a metal ball was determined by dropping it into a measuring cylinder containing20cm3of water and the water level rose to 35 cm3.If the mass of the ballis35 g, calculate its density.',
choice1: '1.0 gcm-3',
choice2: '1.6 gcm-3',
choice3: '1.8 gcm-3',
choice4: '2.3 gcm-3',
answer: 4,
},
{
question: 'A boy stepped on a bananapeel on the ground and fell because the',
choice1: 'boy was not wearing shoes',
choice2: 'ground was too hard',
choice3: 'banana peel reduced the friction on the ground',
choice4: 'banana peel increased the friction on the ground',
answer: 3,
},
{
question: 'Which of the following conditions describes a first class lever?',
choice1: 'The load is between the effort and pivot',
choice2: 'The pivot is between the effort and the load ',
choice3: 'The effort is between the pivot and the load ',
choice4: 'The load arm is equal to the effort arm',
answer: 2,
},
{
question: 'A man did 75J of work by lifting a 50 N load from the floor on to a shelf . Calculate the height of the shelf',
choice1: '0.67 m ',
choice2: '1.50 m ',
choice3: '25.00 m',
choice4: '125.00 m',
answer: 2,
},
{
question: 'The lion is a carnivore because it eats',
choice1: 'flesh ',
choice2: 'grass ',
choice3: 'fruits',
choice4: 'uncooked food',
answer: 1,
},
{
question: 'The structure which helps a fish to breathe underwater is the',
choice1: 'gill',
choice2: 'air sac',
choice3: 'operculum',
choice4: 'mouth',
answer: 1,
},
{
question: 'The thorns found on some plants are used for',
choice1: 'breathing',
choice2: 'protection',
choice3: 'absorbing water from the air',
choice4: 'resisting bush fires',
answer: 2,
},
{
question: 'The following characteristics are features of all living things except ability to',
choice1: 'bring forth young ones',
choice2: 'excrete',
choice3: 'grow',
choice4: 'move from place to place',
answer: 4,
},
{
question: 'Which of the following parasites lives on field animals',
choice1: 'Aphid',
choice2: 'Plasmodium',
choice3: 'Tick',
choice4: 'Tapeworm',
answer: 3,
},
{
question: 'The greatest danger faced by mammals living on land is',
choice1: 'becoming too cold',
choice2: 'becoming too hot',
choice3: 'losing water through evaporation',
choice4: 'gaining too much water through absorption',
answer: 3,
},
{
question: 'The insect responsible for the spread of malaria is the',
choice1: 'female anopheles mosquito',
choice2: 'housefly',
choice3: 'male anopheles mosquito',
choice4: 'tsetse fly',
answer: 1,
},
{
question: 'Which of the following substances is a dded to the soil to reduce its acidity?',
choice1: 'Charcoal ',
choice2: 'Humus ',
choice3: 'Lime',
choice4: 'Manure',
answer: 3,
},
{
Fig. 1 shows the arrangement of parts of the soil when some soil sample was shaken with water in a glass cylinder and allowed to settle.
Use it to answer Questions21 and 22
a1

question: 'Which of the labeled layers contains organic matter?',
choice1: 'M ',
choice2: 'N ',
choice3: 'O ',
choice4: 'P',
answer: 1,
},
{
question: 'The layer which does not have the ability to retain much water is',
choice1: 'N ',
choice2: 'O ',
choice3: 'P ',
choice4: 'Q',
answer: 4,
},
{
question: 'Which of the following characteristics applies to only plants?',
choice1: 'Excretion of waste materials',
choice2: 'Response to stimuli',
choice3: 'Ability to manufacture food from simple substances',
choice4: 'Ability to respire',
answer: 3,
},
{
question: 'The waste products of respiration are',
choice1: 'glucose and oxygen',
choice2: 'carbon dioxide and water',
choice3: 'carbon dioxide and heat',
choice4: 'oxygen and water',
answer: 2,
},
{
question: 'The function of the lung is to',
choice1: 'maintain a constant amount of water in the body',
choice2: 'absorb oxygen from the blood',
choice3: 'absorb carbon dioxide from the blood',
choice4: 'maintain the temperature of the body constant',
answer: 3,
},
{
question: 'Which of the following plants reproduce(s) vegetatively?' +
'I. Banana II. Mango III. Ginger',
choice1: 'II only',
choice2: 'I and II only ',
choice3: 'I and III only ',
choice4: 'III only',
answer: 3,
},
{
question: 'The process which takes place in all living cells is',
choice1: 'digestion',
choice2: 'fertilization',
choice3: 'photosynthesis',
choice4: 'respiration',
answer: 4,
},
{
question: 'The food substance found in yam is',
choice1: 'carbohydrate',
choice2: 'oil',
choice3: 'protein',
choice4: 'vitamin',
answer: 1,
},
{
question: 'The end-products of the digestion of fats and oils are',
choice1: 'amino acids and glucose ',
choice2: 'amino acids and glycerol ',
choice3: 'fatty acids and glycerol',
choice4: 'fatty acids and amino acids',
answer: 3,
},
{
question: 'Which of the following factors promote plant germination?\n'
'I. Adequate temperature'
'II. Moisture' +
'III. Good soil',
choice1: 'I and II only ',
choice2: 'I and III only ',
choice3: 'II and III only ',
choice4: 'I,II and III',
answer: 1,
},
{
question: 'The female part of a flower is the',
choice1: 'calyx',
choice2: 'pistil ',
choice3: 'petal ',
choice4: 'stamen',
answer: 2,
},
{
question: 'Which of the following substances breaks down fats into tiny droplets during digestion',
choice1: 'Bile',
choice2: 'Gastric juice',
choice3: 'Pancreatic juice',
choice4: 'Saliva',
answer: 1,
},
{
question: 'Blood in the urine is a symptom of',
choice1: 'bilharzia',
choice2: 'cholera',
choice3: 'gonorrhoea',
choice4: 'typhoid',
answer: 1,
},
{
question: 'A free movement of the bowels is aided by',
choice1: 'sleeping at least 6 hours a day',
choice2: 'washingone’s body at least once a day',
choice3: 'eating fatty foods',
choice4: 'eating foods containing fibre',
answer: 4,
},
{
question: 'Which of the following diseases is spread through the air?',
choice1: 'AIDS ',
choice2: 'Measles ',
choice3: 'Typhoid ',
choice4: 'Yaws',
answer: 2,
},
{
question: 'How many days in a month does the moon appear?',
choice1: '7 days ',
choice2: '14 days ',
choice3: '21 days ',
choice4: '28 days',
answer: 4,
},
{
question: 'The earth moves completely round the sun once in every',
choice1: '1 day ',
choice2: '28 days ',
choice3: '30 days ',
choice4: '365 days',
answer: 4,
},
{
question: 'A smaller heavenly body,which orbits a bigger one could be described as a',
choice1: 'comet ',
choice2: 'meteor ',
choice3: 'moon ',
choice4: 'sun',
answer: 3,
},
{
question: 'Which ofthe following parasites is a plant?',
choice1: 'Aphid ',
choice2: 'Dodder ',
choice3: 'Flea ',
choice4: 'Jigger',
answer: 2,
},
{
question: 'Which of the following substances is not a constituent of a balanced diet?',
choice1: 'Carbohydrate ',
choice2: 'Protein ',
choice3: 'Table salt ',
choice4: 'Vitamin',
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

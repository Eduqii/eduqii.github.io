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
		question: 'Water that forms lather readily with soap is said to be',
		choice1: 'clean',
		choice2: 'hard',
		choice3: 'soapy',
		choice4: 'soft',
		answer: 4,
	},

	{
		question: ' Which of the following life activities are common to both plants and animals?\n' + 
'I. Feeding' + '\n' + 
'II. Locomotion' + '\n' +
'III. Respiration',
		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and II',
		answer: 2,
	},

	{
		question: 'A suitable instrument that could be used to measure the internal diameter of a bamboo flute is',

		choice1: 'beam balance',
		choice2: 'metre rule',
		choice3: 'surveyor’s tape',
		choice4: 'vernier calipers',
		answer: 4,
	},


	{
		question: 'The ability of soils to supply the right amounts of essential nutrients to plants is known as',

		choice1: 'soil consistency',
		choice2: 'soil fertility',
		choice3: 'soil structure',
		choice4: 'soil texture',
		answer: 2,
	},
     
	{
		question: 'The simplest way of making well water suitable for laundry purposes is by',

		choice1: 'adding alum',
		choice2: 'boiling',
		choice3: 'chlorination',
		choice4: 'filtering',
		answer: 2,
	},
	{
		question: 'Washing down of soil nutrients beyond the reach of roots of plants is referred to as',

		choice1: 'aeration',
		choice2: 'infiltration',
		choice3: 'leaching',
		choice4: 'percolation',
		answer: 3,
	},
	{
		question: 'Which of the following statements explain(s) why an object floats in water?' + '\n' +
'A floating object' + '\n' +
'I. is less dense than water' + '\n' +
'II. is denser than water'+ '\n' +
'III. has the same density as water',


		choice1: 'I only',
		choice2: 'II only',
		choice3: 'III only',
		choice4: 'I and III only',

		answer: 1,
	},

	{
		question: 'An example of leafy vegetable crops is',

		choice1: 'cucumber',
		choice2: 'lettuce',
		choice3: 'okro',
		choice4: 'onion',
		answer: 2,
	},

	{
		question: 'The structure in the respiratory system of humans where gaseous exchange occurs is',

		choice1: 'alveolus',
		choice2: 'bronchus',
		choice3: 'nostril',
		choice4: 'trachea',
		answer: 1,
	},

	{
		question: 'The gas produced when glucose is oxidized during internal respiration is',

		choice1: 'carbon (II) oxide',
		choice2: 'carbon (IV) oxide',
		choice3: 'hydrogen',
		choice4: 'nitrogen',
		answer: 2,
	},

	{
		question: 'The farm animal which has crop as part of its digestive system is the',

		choice1: 'fowl',
		choice2: 'goat',
		choice3: 'pig',
		choice4: 'sheep',
		answer: 1,
	},

	{
		question: 'A beneficial effect of wind on the environment is',

		choice1: 'promotion of photosynthesis in green plants',
		choice2: 'pollination in flowering plants',
		choice3: 'leaching in soils',
		choice4: 'erosion in soils',
		answer: 2,
	},

	{
		question: 'The chemical solution that can be used to test for the presence of protein in food substances is',

		choice1: 'Benedict’s solution',
		choice2: 'Fehling’s solution',
		choice3: 'Iodine solution',
		choice4: 'Million’s reagent',
		answer: 4,
	},

	{
		question: 'Which of the following statements about bushfires is/are true?'+'\n' +
'I. They cause air pollution' + '\n' +
'II. They deplete vegetation cover' + '\n' +
'III. They contribute to global warming',

		choice1: 'I only',
		choice2: 'II only',
		choice3: 'II and III only',
		choice4: 'I, II and III',

		answer: 4,
	},


	{
		question: 'The most effective method of controlling soil erosion on steep slopes is',

		choice1: 'cover cropping',
		choice2: 'mulching',
		choice3: 'strip cropping',
		choice4: 'terracing',
		answer: 4,
	},

	{
		question: 'Which of the following agencies is responsible for providing information on the weather and climatic conditions of an area',

		choice1: 'Animal Husbandry Department',
		choice2: 'Extension Services Department',
		choice3: 'Extension Services Department',
		choice4: 'Meteorological Services Department',
		answer: 4,
	},

	{
		question: 'The farming system which involves the growing of one type of crop on the same piece of land every season is known as',

		choice1: 'mixed cropping',
		choice2: 'mixed farming',
		choice3: 'mono cropping',
		choice4: 'mono cropping',
		answer: 4,
	},

	{
		question: 'The fifth planet from the sun in the solar system is',

		choice1: 'Jupiter',
		choice2: 'Mars',
		choice3: 'Neptune',
		choice4: 'Venus',
		answer: 1,
	},
	{
		question: 'The process that takes place when the sperm and the egg of humans fuse together is referred to as',

		choice1: 'fertilization',
		choice2: 'menstruation',
		choice3: 'ovulation',
		choice4: 'reproduction',
		answer: 1,
	},

	{
		question: 'The process by which water vapour moves through the stomata of leaves into the atmosphere is known as',

		choice1: 'absorption',
		choice2: 'diffusion',
		choice3: 'osmosis',
		choice4: 'transpiration',
		answer: 4,
	},

	{
		question: 'An example of intensive system of poultry keeping is the',

		choice1: 'deep litter system',
		choice2: 'fold unit system',
		choice3: 'free range system',
		choice4: 'Free-running system',
		answer: 1,
	},


	{
		question: 'The diagram below represents a circuit symbol in an electronic device. Study it carefully and use it to answer this question\n(refer to image I)\n\n' + 'The symbol represents',

		choice1: 'a light emitting diode',
		choice2: 'n-p-n transistor',
		choice3: 'light dependent resistor',
		choice4: 'p-n-p transistor',
		answer: 2,
	},

	{
		question: 'The diagram below represents a circuit symbol in an electronic device. Study it carefully and use it to answer this question\n(refer to image I)\n\n' + 'The part of the diagram labelled I has',

		choice1: 'more electrons than holes',
		choice2: 'no holes',
		choice3: 'more holes than electrons',
		choice4: 'the same number of holes as electrons',
		answer: 3,
	},

{
		question: 'A spot made on a white paper with a given food substance turned the spot on the paper translucent.\n' +
'The food substance is likely to contain',

		choice1: 'glucose',
		choice2: 'oil',
		choice3: 'protein',
		choice4: 'starch',
		answer: 2,
	},

{       
	question: 'Which of the following sources of energy is non-renewable?',
         
        choice1:'sun',
        choice2:'Waves',
        choice3:'Wind',
        choice4:'wood',
        answer: 4,
    },
{
	question: 'Which of the following farm animals is / are housed in a hutch?'+'\n' +
		 'I. Goats'+'\n' +
		 'II. Pigs'+'\n' +
		'III. Rabbits'+'\n',


		choice1: 'I only',
		choice2: 'II only',
		choice3: 'III only',
		choice4: 'I and III only',

		answer: 3,
		
	},    
        
{
		question: 'Which of the following blood vessels carries deoxygenated blood?',

		choice1: 'Aorta',
		choice2: 'Pulmonary artery',
		choice3: 'Pulmonary vein',
		choice4: 'Renal artery',
		answer: 2,
	},

{
		question: 'The energy transformation that takes place in a car battery is',

		choice1: 'electrical energy --> chemical energy --> light energy',
		choice2: 'chemical energy --> light energy --> electrical energy',
		choice3: 'chemical energy --> electrical energy --> light energy',
		choice4: 'electrical energy --> light energy --> chemical energy',
		answer: 3,
	},

{
		question: 'The type of liquid suitable to construct a thermometer to read temperatures of about 150°C is',

		choice1: 'alcohol',
		choice2: 'mercury',
		choice3: 'turpentine',
		choice4: 'water',
		answer: 2,
	},

	{
		question: 'Amino acids are the end-products of the digestion of',

		choice1: 'carbohydrates',
		choice2: 'fats',
		choice3: 'oils',
		choice4: 'proteins',
		answer: 4,
	},

	{
		question: 'The type of teeth used by mammals to cut food materials is',

		choice1: 'canine',
		choice2: 'incisor',
		choice3: 'molar',
		choice4: 'premolar',
		answer: 2,
	},

{
		question: 'Fishponds are often stocked using',

		choice1: 'anchovies',
		choice2: 'fingerlings',
		choice3: 'fish eggs',
		choice4: 'frys',
		answer: 2,
	},


{
		question: 'Which of the following processes result(s) in the formation of a new substance?'+'\n' +
        
        'I. Burning of wood' + '\n' +
        'II. Rusting of iron nail' + '\n' +
        'III. Heating water into vapour',


		choice1: 'I only',
		choice2: 'I and II only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 2,
	},

{
		question: 'The use of resistant breeds of farm animals in controlling diseases is a',

		choice1: 'biological control method',
		choice2: 'chemical control method',
		choice3: 'cultural control method',
		choice4: 'physical control method',
		answer: 1,
	},


{
		question: 'A load of 10 N is moved through a distance of 2 m. Calculate the work done.',

		choice1: '5 J',
		choice2: '10 J',
		choice3: '20 J',
		choice4: '50 J',
		answer: 3,
	},

{
		question: 'Which of the following components of human blood is dissolved in the plasma?',

		choice1: 'Mineral salts',
		choice2: 'Phagocytes',
		choice3: 'Platelets',
		choice4: 'Red blood cells',
		answer: 1,
	},

{
		question: ' An atom of carbon is represented as 12C. How many neutrons are in the nucleus of the carbon atom?',

		choice1: '2',
		choice2: '4',
		choice3: '6',
		choice4: '12',
		answer: 3,
	},

{
		question: 'In agribusiness, middlemen operate within the',

		choice1: 'production chain',
		choice2: 'processing chain',
		choice3: 'supply chain',
		choice4: 'value chain',
		answer: 3,
	},	

{
		question: 'Which of the following illustrations shows the correct direction of the lines of force around a bar magnet? \n\n (refer to image II)',
		choice1: 'A',
		choice2: 'B',
		choice3: 'C',
		choice4: 'D',
		answer: 2,
	},	

{
		question: 'The human sex cells are produced in the',

		choice1: 'scrotum and uterus',
		choice2: 'testis and ovary',
		choice3: 'penis and vagina',
		choice4: 'scrotum and ovary',
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

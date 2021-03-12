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
		question: 'The S.I unit of temperature is',
		choice1: 'candela',
		choice2: 'degree Celsius',
		choice3: 'joule',
		choice4: 'kelvin',
		answer: 4,
	},

{
		question: 'Air is an example of',
		choice1: 'gas in gas mixture',
		choice2: 'liquid in liquid mixture',
		choice3: 'solid in liquid mixture',
		choice4: 'solid in solid mixture',
		answer: 1,
},

{
		question: 'Air is an example of',
		choice1: 'gas in gas mixture',
		choice2: 'liquid in liquid mixture',
		choice3: 'solid in liquid mixture',
		choice4: 'solid in solid mixture',
		answer: 1,
},

{
		question: 'Which of the following activities are involved in the rearing of tilapia?'+'\n' +
        'I. Feeding of fish\n' + 
       'II. Pond stocking\n' +
      'III. Pest control',

		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,
},

{
		question: 'The part of the flower that contains nectar is called',
		choice1: 'anther',
		choice2: 'petal',
		choice3: 'ovary',
		choice4: 'sepal',
		answer: 3,
},

{
		question: 'Which of the following methods protects pure iron from rusting by coating with zinc?',
		choice1: 'Alloying',
		choice2: 'Galvanizing',
		choice3: 'Greasing',
		choice4: 'Painting',
		answer: 2,
},

{
		question: 'Leaching of nutrients from the soil leads to soil',
		choice1: 'acidity',
		choice2: 'alkalinity',
		choice3: 'erosion',
		choice4: 'porosity',
		answer: 1,
},

{
		question: 'The hereditary material that is passed on from parents to offspring is known as',
		choice1: 'gene',
		choice2: 'sperm',
		choice3: 'red blood cell',
		choice4: 'white blood cell',
		answer: 1,
},

{
		question: 'The solar system is made up of the',
		choice1: 'earth, moon and stars',
		choice2: 'sun, comets and meteors',
		choice3: 'sun, earth and moon',
		choice4: 'sun, planets and other heavenly bodies',
		answer: 4,
},

{
		question: 'The type of management system which allows farm animals to roam about freely is known as',
		choice1: 'extensive system',
		choice2: 'intensive system',
		choice3: 'semi-extensive system',
		choice4: 'semi-intensive system',
		answer: 1,
},

{
		question: 'External respiration in living organisms is also known as',
		choice1: 'aerobic respiration',
		choice2: 'anaerobic respiration',
		choice3: 'gaseous respiration',
		choice4: 'tissue respiration',
		answer: 3,
},

{
		question: 'A rigid bar which is capable of turning about a fixed point is a / an',
		choice1: 'inclined plane',
		choice2: 'lever',
		choice3: 'screw',
		choice4: 'wheel and axle',
		answer: 2,
},

{
		question: 'A positively charged ion is called',
		choice1: 'anion',
		choice2: 'cation',
		choice3: 'neutron',
		choice4: 'proton',
		answer: 2,
},

{
		question: 'One way of ensuring that organisms are not endangered is to',
		choice1: 'allow them to be hunted',
		choice2: 'allow their predators to outnumber them',
		choice3: 'protect their habitats',
		choice4: 'pollute their habitats',
		answer: 3,
},

{
		question: 'A good thermometric liquid must',
		choice1: 'be colourless',
		choice2: 'boil at 100°C and freeze at 0°C',
		choice3: 'cling to the walls of the glass',
		choice4: 'expand evenly and regularly',
		answer: 4,
},

{
		question: 'Which of the following metals will produce a gas when placed in lime juice?',
		choice1: 'Copper',
		choice2: 'Lead',
		choice3: 'Magnesium',
		choice4: 'Silver',
		answer: 3,
},

{
		question: 'The physical property of a soil which is determined by the feel method is soil',
		choice1: 'structure',
		choice2: 'temperature',
		choice3: 'texture',
		choice4: 'water',
		answer: 3,
},

{
		question: 'The reason why gaps are left in the joints of railway lines is to allow for',
		choice1: 'cooling',
		choice2: 'contraction',
		choice3: 'expansion',
		choice4: 'maintenance',
		answer: 3,
},

{
		question: 'Which of the following effects are caused by rusting?'+'\n' +
        'I. Loss of strength\n' + 
       'II. Loss of structure\n' +
      'III. Loss of electrical conductivity',

		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,
},


{
		question: ' Leguminous crops may often be cultivated to add',
		choice1: 'carbon to the soil',
		choice2: 'nitrogen to the soil',
		choice3: 'protein to the soil',
		choice4: 'potassium to the soil',
		answer: 2,
},

{
		question: 'A place where an organism can live and interbreed successfully is called',
		choice1: 'community',
		choice2: 'ecosystem',
		choice3: 'environment',
		choice4: 'habitat',
		answer: 4,
},

{
		question: 'Which of the following methods of treating water makes it soft?',
		choice1: 'Addition of alum',
		choice2: 'Addition of sodium carbonate',
		choice3: 'Chlorination',
		choice4: 'Filtration',
		answer: 2,
},

{
		question: 'Dehusking and shelling are both activities carried out in the processing of',
		choice1: 'cowpea',
		choice2: 'groundnut',
		choice3: 'maize',
		choice4: 'sorghum',
		answer: 2,
},

{
		question: 'Typhoid fever is transmitted through',
		choice1: 'contact with contaminated skin wounds',
		choice2: 'eating contaminated food',
		choice3: 'eating uncooked food',
		choice4: 'drinking treated water',
		answer: 2,
},

{
		question: 'One advantage of friction is that it',
		choice1: 'enables cutting tools to be sharpened',
		choice2: 'increases the efficiency of machines',
		choice3: 'produces a lot of heat in machines',
		choice4: 'wears off the soles of shoes',
		answer: 1,
},

{
		question: 'Sickle is a farm tool used for',
		choice1: 'harvesting rice',
		choice2: 'trimming hedges',
		choice3: 'transplanting seedlings',
		choice4: 'watering crops',
		answer: 1,
},

{
		question: 'One characteristic of the image formed in a pin-hole camera is that the image is',
		choice1: 'diminished',
		choice2: 'magnified',
		choice3: 'upright',
		choice4: 'virtual',
		answer: 1,
},

{
		question: 'Transplanting of seedlings is usually done in the evening because',
		choice1: 'darkness promotes rapid growth',
		choice2: 'transpiration is minimal',
		choice3: 'transpiration is minimal',
		choice4: 'seedlings require less nutrients',
		answer: 3,
},

{
		question: 'Which of the following statements about molecules is/ are correct? Molecules'+'\n' +
        'I. are chemically combined group of atoms\n' +
       'II. are physically combined group of atoms\n' + 
      'III. can exist on their own',

		choice1: 'I only',
		choice2: 'II only',
		choice3: 'I and III only',
		choice4: 'I, II and III',
		answer: 3,
},

{
		question: 'Transplanting of seedlings is usually done in the evening because',
		choice1: 'darkness promotes rapid growth',
		choice2: 'transpiration is minimal',
		choice3: 'transpiration is minimal',
		choice4: 'seedlings require less nutrients',
		answer: 3,
},

{
		question: 'Fruits which are dispersed by wind are likely to be',
		choice1: 'dry',
		choice2: 'hairy',
		choice3: 'Juicy',
		choice4: 'sticky',
		answer: 2,
},

{
		question: 'Which of the following materials allows electric current to pass through easily?',
		choice1: 'Aluminium',
		choice2: 'Carbon',
		choice3: 'Glass',
		choice4: 'Watery',
		answer: 1,
},

{
		question: 'Water contains two elements, hydrogen and oxygen, in the ratio of',
		choice1: '1:2',
		choice2: '1:3',
		choice3: '2:1',
		choice4: '3:1',
		answer: 3,
},

{
		question: 'In the digestive system of ruminants, vitamins are synthesized in the',
		choice1: 'abomasum',
		choice2: 'omasum',
		choice3: 'reticulum',
		choice4: 'exercise regularly',
		answer: 4,
},

{
		question: 'The best way of protecting oneself from high blood pressure is to',
		choice1: 'consume alcoholic drinks',
		choice2: 'eat high carbohydrate diets',
		choice3: 'engage in smoking',
		choice4: 'rumen',
		answer: 4,
},

{
		question: 'The best way of protecting oneself from high blood pressure is to',
		choice1: 'consume alcoholic drinks',
		choice2: 'eat high carbohydrate diets',
		choice3: 'engage in smoking',
		choice4: 'rumen',
		answer: 4,
},

{
		question: 'The property of metals which makes them to be easily drawn into thin wires is known as',
		choice1: 'conductivity',
		choice2: 'ductility',
		choice3: 'malleability',
		choice4: 'resistivity',
		answer: 2,
},

{
		question: ' An atom of an element is represented as . How many neutrons are in the nucleus of the atom?',
		choice1: '13',
		choice2: '14',
		choice3: '27',
		choice4: '40',
		answer: 2,
},

{
		question: 'Viable seeds are ones that',
		choice1: 'are able to germinate under suitable conditions',
		choice2: 'are eaten by animals after planting',
		choice3: 'contain a lot of oil',
		choice4: 'have hard seed coat',
		answer: 1,
},

{
		question: 'Which of the following processes can occur at all temperatures?',
		choice1: 'Boiling',
		choice2: 'Evaporation',
		choice3: 'Melting',
		choice4: 'Sublimation',
		answer: 2,
},

{
		question: 'Which of the following human activities maintains the carbon cycle?',
		choice1: 'Bush burning',
		choice2: 'Felling of trees',
		choice3: 'Release of fumes from factories',
		choice4: 'Replanting of trees felled as timber',
		answer: 4,
},

{
		question: 'The farming system which involves the growing of one type of crop on the same piece of land every season is known as',
		choice1: 'mixed cropping',
		choice2: 'mixed farming',
		choice3: 'monocropping',
		choice4: 'monoculture',
		answer: 3,
},

{
		question: 'The presence of chlorophyll in green plants is a necessary condition for photosynthesis because it',
		choice1: 'absorbs oxygen',
		choice2: 'absorbs solar energy',
		choice3: 'produces carbon dioxide',
		choice4: 'produces water vapour',
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

		return window.location.assign('end.php') 
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

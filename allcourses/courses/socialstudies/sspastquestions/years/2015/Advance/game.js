

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

question: ' Which of the following features is not part of the physical environment?',
choice1: ' Air',
choice2: ' Buildings',
choice3: ' Music',
choice4: ' Rivers',

answer: 3,


},

{ 

question: ' A good social environment can be promoted through',
choice1: ' bravery',
choice2: ' competition',
choice3: ' individualism',
choice4: ' tolerance',

answer: 4,

},

{

question: ' Adolescence is a period of transition from',
choice1: ' childhood to adulthood',
choice2: ' childhood to old age',
choice3: ' infancy to adulthood',
choice4: ' infancy to childhood',

answer: 1,

},

{ 

question: ' Adolescent chastity is important because it prevents',
choice1: ' contraction of HIV and AIDS',
choice2: ' frequent malaria among the youth',
choice3: ' peer pressure among the youth',
choice4: ' the occurrence of broken home',

answer: 1,


},

{ 

question: ' Adopting a foreign way of life in one’s native country implies',
choice1: ' cultural assimilation',
choice2: ' foreign domination',
choice3: ' parallel culture',
choice4: ' rapid modernization',

answer: 1,

},

{ 

question: ' Trokosi and female genital mutilation are cultural practices that must be abolished because',
choice1: ' some people become rich through their performance',
choice2: ' the police dislike them',
choice3: ' they are against the rights of the victim',
choice4: ' they are practised all over the country',

answer: 3,
 


},

{ 

question: ' The four cardinal points are',
choice1: ' East, South-West, North, West.',
choice2: ' North, South, North-East, South-West',
choice3: ' North, South, East, West',
choice4: ' West, South-East, North-East, South',

answer: 3,

},

{ 

question: ' The ratio between distance measured on a map and the actual distance on the ground is',
choice1: ' a sketch',
choice2: ' a statement',
choice3: ' layout',
choice4: ' scale',

answer: 4,

},

{ 

question: ' If the scale of a map is 1:10,000 and the distance on the map is 20 cm, then the actual distance on the ground is',
choice1: ' 0.2 km',
choice2: ' 2 km',
choice3: ' 20 km',
choice4: ' 20,000 km',

answer: 2,

},

{ 

question: ' The crop types which grow well in the Guinea Savanna are',
choice1: ' cocoa and rice',
choice2: ' millet and groundnut',
choice3: ' plantain and cola',
choice4: ' shallots and cassava',

answer: 2,

},

{

question: ' The mangrove swamps in Ghana are found mainly in the',
choice1: ' Afram plains',
choice2: ' coastal areas',
choice3: ' highland areas',
choice4: ' Oti basin',

answer: 2,

},

{

question: ' The integrity of the nation can be defended by',
choice1: ' cleaning the environment',
choice2: ' educating the youth',
choice3: ' encouraging immigration',
choice4: ' reporting saboteurs',

answer: 4,


},

{ 

question: ' A hill with a steep slope on one side and a gentle slope on the other side is',
choice1: ' a ridge',
choice2: ' a knoll',
choice3: ' a plateau',
choice4: ' an escarpment',

answer: 4,

},

{ 

question: ' The moon is a satellite of the',
choice1: ' Earth',
choice2: ' Jupiter',
choice3: ' Mars',
choice4: ' Mercury',

answer: 1,


},

{ 

question: ' Relief rainfall is experienced in',
choice1: ' equatorial forest areas',
choice2: ' guinea savanna areas',
choice3: ' highland areas',
choice4: ' lowland areas',

answer: 3,



},

{ 

question: ' Encouraging a greater participation of girls in education in Ghana will help reduce',
choice1: ' adultery in society',
choice2: ' number of maternal health care centres',
choice3: ' population growth rate',
choice4: ' urban-rural drift',

answer: 3,

},

{ 

question: ' One negative effect of rural-urban migration is',
choice1: ' breakdown of family ties',
choice2: ' chieftaincy disputes',
choice3: ' ethnic conflicts',
choice4: ' high infant mortality',

answer: 1, 

},

{ 

question: ' Unity among Ghanaians can best be promoted through',
choice1: ' formal education',
choice2: ' good environmental practices',
choice3: ' inter-ethnic marriages',
choice4: ' opinion leaders',

answer: 3,


},

{ 

question: ' An effect of the slave trade on Africans was that they',
choice1: ' acquired much wealth',
choice2: ' travelled far',
choice3: ' abandoned their religion',
choice4: ' were humiliated',

answer: 4,


},

{ 

question: ' The Europeans came to the Gold Coast purposely to',
choice1: ' engage in trading activities',
choice2: ' establish schools',
choice3: ' explore the land',
choice4: ' spread the gospel',

answer: 3,

},

{

question: ' The Yaa Asantewaa war of 1900 was caused by',
choice1: ' Governor Hodgson’s demand for the Golden Stool',
choice2: ' the closure of the slave trade routes to the coast',
choice3: ' the killing of George Ekem Ferguson',
choice4: ' the refusal of the Asantes to accept Christianity',

answer: 1,

},

{ 

question: ' The Sagrenti war was fought in the year',
choice1: ' 1834',
choice2: ' 1864',
choice3: ' 1874',
choice4: ' 1884',

answer: 3,
},

{ 

question: ' Protecting national property is the obligation of',
choice1: ' all citizens',
choice2: ' government officials',
choice3: ' the fire service',
choice4: ' the police',

answer: 1,


},

{ 

question: ' According to the 1992 constitution of Ghana, an individual can claim Ghanaian citizenship if',
choice1: ' he or she attends school in Ghana',
choice2: ' his or her grandparents are Ghanaians',
choice3: ' his or her parents reside in Ghana',
choice4: ' he or she works in Ghana',

answer: 2,


},

{ 

question: ' One basic right of every Ghanaian is the right to',
choice1: ' fair wages',
choice2: ' personal liberty',
choice3: ' stand for election',
choice4: ' vote in general elections',

answer: 2,

},

{

question: ' The head of the judiciary in Ghana is the',
choice1: ' Attorney General',
choice2: ' Chief Justice',
choice3: ' Director of Public Prosecution',
choice4: ' Inspector General of Police',

answer: 2,


},

{ 

question: ' A constitution popularly approved by the people ensures',
choice1: ' ethnic balance',
choice2: ' good governance',
choice3: ' rapid development',
choice4: ' reduction in crime',

answer: 1,


},

{ 

question: ' One way of managing conflict in the Ghanaian society is',
choice1: ' arbitration',
choice2: ' confrontation',
choice3: ' consultation',
choice4: ' meditation',

answer: 4,


},

{ 

question: ' The highest level of Ghana’s co-operation with the international community is through her membership of the',
choice1: ' African Union',
choice2: ' Economic Community of West African States',
choice3: ' Non-Aligned Movement',
choice4: ' United Nations Organization',

answer: 4,

},

{ 

question: ' Ghana co-operates with other nations to',
choice1: ' adopt common code of conduct',
choice2: ' create more jobs',
choice3: ' foster friendly relationship',
choice4: ' increase tax revenue',

answer: 3,

},

{ 

question: ' One major environmental problem facing municipal and metropolitan assemblies in Ghana is',
choice1: ' air pollution',
choice2: ' deforestation',
choice3: ' road accidents',
choice4: ' waste management',

answer: 4,

},

{ 

question: ' Which of the following factors is most important for national development?',
choice1: ' Capital resource',
choice2: ' Foreign aid',
choice3: ' Human resource',
choice4: ' Natural resource',

answer: 3,


},

{ 

question: ' A good layout and enforcement of town planning laws can help reduce',
choice1: ' emergence of slums',
choice2: ' influx of immigration',
choice3: ' population growth',
choice4: ' substance abuse',

answer: 1,


},

{ 

question: ' The efficiency of labour can be increased if one',
choice1: ' reports to work early',
choice2: ' uses appropriate technology',
choice3: ' works for longer hours',
choice4: ' works independently',

answer: 2,


},

{ 

question: ' Which of the following conditions was the main aim of all the political parties before independence',
choice1: ' Economic development',
choice2: ' Federal government',
choice3: ' Local government',
choice4: ' Self-government',

answer: 4,

},

{

question: ' The Asante became a British colony through',
choice1: ' agreement',
choice2: ' appeal',
choice3: ' defeat',
choice4: ' persuasion',

answer: 3,

},

{ 

question: 'For Ghana to be economically independent, she must',
choice1: ' educate her citizens well',
choice2: ' compete with her neighbours',
choice3: ' produce her basic needs',
choice4: ' rely on her colonial masters for help',

answer: 3,


},

{ 

question: ' Productivity measures',
choice1: ' production of goods',
choice2: ' production of services',
choice3: ' profit made out of production',
choice4: ' output per-man-hour',

answer: 4,


},

{ 

question: ' Private businesses can contribute to the development of the nation by',
choice1: ' making more profits',
choice2: ' motivating the workers',
choice3: ' paying their taxes as required',
choice4: ' registering their businesses',

answer: 3,

},

{ 

question: ' The main aim of the National Road Safety Commission in Ghana is to protect',
choice1: ' capital resources',
choice2: ' human resources',
choice3: ' mineral resources',
choice4: ' natural resources',

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

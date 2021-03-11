const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
	{
		question: ' Environmental degradation is mainly caused by?',
		choice1: 'natural disasters',
		choice2: 'human activities',
		choice3: 'civil wars',
		choice4: ' global warming',
		answer: 2,
	},
	{
		question: 'Respiratory disease can be caused by?',
		choice1: 'water pollution',
		choice2: 'land degradation',
		choice3: 'air pollution',
		choice4: 'deforestation',
		answer: 3,
	},
	{
		question: 'The right of a citizen of Ghana does not include?',
		choice1: 'equality before the law',
		choice2: 'freedom from taxes',
		choice3: ' right to life',
		choice4: ' right to work',
		answer: 2,
	},
	{
		question: ' Which of the following factors is mostly needed for the continuous existence of map?',
		choice1: ' Wealth',
		choice2: 'Family',
		choice3: ' Religion',
		choice4: 'Environment',
		answer: 4,
	},
	{
		question: 'The right to be protected and heard at trials is an example of',
		choice1: 'social right',
		choice2: ' political right',
		choice3: 'legal right',
		choice4: 'natural right',
		answer: 3,
	},
	{
		question: 'The following options are advantages of colonization in Ghana except',
		choice1: 'introduction of formal education',
		choice2: ' excessive use of foreign goods',
		choice3: 'introduction of new crops',
		choice4: 'introduction of paper currency',
		answer: 2,
	},
	{
		question: ' Which of the following do not constitute environmental degradation?',
		choice1: 'Deforestation',
		choice2: 'Bush burning',
		choice3: ' Air pollution',
		choice4: ' Mixed farming',
		answer: 4,
	},
	{
		question: 'Which of the following factors is a reason for Ghana’s cultural diversity?',
		choice1: 'Ethnic grouping',
		choice2: 'Foreign trade',
		choice3: 'Internal trade',
		choice4: 'Colonization',
		answer: 1,
	},
	{
		question: 'Utilities and services are more easily supplied when settlements are',
		choice1: 'built any how',
		choice2: ' close together',
		choice3: 'far apart',
		choice4: 'well planned',
		answer: 4,
	},
	{
		question: 'The dry season in southern Ghana starts from the month of November and ends in',
		choice1: ' February',
		choice2: ' May',
		choice3: 'June',
		choice4: ' April',
		answer: 1,
	},
	{
		question: 'One of the problems facing primary production in Ghana is',
		choice1: 'availability of skilled labour',
		choice2: 'long period of bush burning',
		choice3: 'poor road network',
		choice4: 'the use of complex machines',
		answer: 3,
	},
	{
		question: 'Payments are elected into office of parliament through a process called?',
		choice1: 'taxes',
		choice2: 'salaries',
		choice3: ' premiums',
		choice4: 'bonds',
		answer: 3,
	},
	{
		question: ' People are elected into office parliament through a process called',
		choice1: 'presidential election',
		choice2: 'appointment taking',
		choice3: 'referendum',
		choice4: ' voting',
		answer: 4,
	},
	{
		question: 'The revolution of the earth causes',
		choice1: 'day and night',
		choice2: ' differences in length of the day and night',
		choice3: ' differences in time and between two places',
		choice4: 'rise and fall of ocean tides',
		answer: 2,
	},
	{
		question: 'The best way to resolve conflicts in Ghana is through',
		choice1: ' peaceful demonstration',
		choice2: 'law courts',
		choice3: 'mediation',
		choice4: ' harsh sanction',
		answer: 3,
	},
	{
		question: 'The following are reasons for the migration of ethnic group in Ghana except',
		choice1: 'peace and security',
		choice2: 'fertile lands',
		choice3: 'outbreaks of diseases',
		choice4: 'trade and commerce',
		answer: 4,
	},
	{
		question: 'One measure that can best help to minimize indiscipline among the youth is',
		choice1: ' police arrest',
		choice2: 'long-term imprisonment',
		choice3: ' corporal punishment',
		choice4: 'access to quality education',
		answer: 4,
	},
	{
		question: 'The main reason for which Ghana cooperates with other countries is to',
		choice1: 'benefit in times of need',
		choice2: 'get free goods for her citizens',
		choice3: ' maintain political stability',
		choice4: ' prevent attack on Ghanaians',
		answer: 3,
	},
	{
		question: 'Which instrument is used to measure rainfall amounts?',
		choice1: ' Wind vane',
		choice2: ' Barometer',
		choice3: ' Thermometer',
		choice4: ' Rain gauge',
		answer: 4,
	},
	{
		question: ' Ghana’s contribution to the United Nation (UN) can be seen in the following areas except',
		choice1: 'provision of funds to refugees',
		choice2: 'peace keeping',
		choice3: 'payment of dues',
		choice4: 'sale of produce',
		answer: 4,
	},
	{
		question: 'To effectively build the nation, every Ghanaian must',
		choice1: 'be involved in production process',
		choice2: 'learn to speak at least one foreign language',
		choice3: 'join the leading political party',
		choice4: 'study the 1992 Constitution',
		answer: 1,
	},
	{
		question: 'Which of the following is the highest court in Ghana?',
		choice1: 'Traditional Court',
		choice2: 'Magistrate Court',
		choice3: 'Supreme Court',
		choice4: 'Tribunal',
		answer: 3,
	},
	{
		question: 'Ghana lies between latitudes',
		choice1: '10 North and 110 North',
		choice2: '50 North and 110 North',
		choice3: '110 North and 150 North',
		choice4: '50 North and 110 South',
		answer: 2,
	},
	{
		question: 'Paper money is properly handled when it is',
		choice1: ' received from church',
		choice2: 'not crumpled',
		choice3: 'not spent',
		choice4: 'spent wisely',
		answer: 2,
	},
	{
		question: 'State Owned Enterprises are established mainly to',
		choice1: 'make substantial profit',
		choice2: ' produce goods for export',
		choice3: ' provide vital services',
		choice4: 'supervise private businesses',
		answer: 3,
	},
	{
		question: 'Social change in rural areas is slow because of',
		choice1: 'customs and traditions',
		choice2: 'poverty and unemployment',
		choice3: 'rural-urban migration',
		choice4: 'rural-rural migration',
		answer: 1,
	},
	{
		question: 'Which of the following features is not associated with rivers?',
		choice1: ' Waves',
		choice2: 'Delta',
		choice3: 'Meander',
		choice4: 'Valley',
		answer: 1,
	},
	{
		question: 'If the time 12 noon at longitude 00, what will be the time at a place on longitude 150',
		choice1: ' 12:30 pm',
		choice2: ' 12:30 am',
		choice3: ' 1:00 pm',
		choice4: '1:00 am',
		answer: 3,
	},
	{
		question: ' The application of checks and balances in democratic governments to help to prevent',
		choice1: 'plebiscite',
		choice2: 'dictatorship',
		choice3: 'voting',
		choice4: 'unemployment',
		answer: 2,
	},
	{
		question: ' Which institution is responsible for making the main laws of Ghana?',
		choice1: 'District Assembly',
		choice2: ' Parliament',
		choice3: 'Supreme Court',
		choice4: ' Jury',
		answer: 2,
	},
	{
		question: ' Which of the following languages is not indigenous to Ghana?',
		choice1: ' Dagaare',
		choice2: 'Dagbani',
		choice3: ' Hausa',
		choice4: ' Ga',
		answer: 3,
	},
	{
		question: 'The type of settlement where buildings are arranged close to each other is',
		choice1: ' linear',
		choice2: ' dispersed',
		choice3: 'nodal',
		choice4: 'nucleated',
		answer: 4,
	},
	{
		question: 'If the scale of a map is 1:100,000, what will be the actual distance when 4 cm is measured on the map?',
		choice1: '44 km',
		choice2: '41 km',
		choice3: '40 km',
		choice4: '4 km',
		answer: 4,
	},
	{
		question: ' Private businesses can ensure their continuous survival mainly through',
		choice1: 'exporting their products',
		choice2: 'making more profits',
		choice3: ' paying less tax to the government',
		choice4: ' production of quality goods',
		answer: 4,
	},
	{
		question: 'Ghanaians can contribute towards rapid development of the nation by',
		choice1: 'engaging in domestic trade',
		choice2: 'importing more food items',
		choice3: 'participating in festivals',
		choice4: 'patronizing made in Ghana goods',
		answer: 4,
	},
	{
		question: ' Which of the following conditions will occur when fire breaks out in a poor layout community?',
		choice1: 'Selling in the streets',
		choice2: 'Evening markets may spring up',
		choice3: 'Loss of property and life',
		choice4: 'Armed robbery cases may rise',
		answer: 3,
	},
	{
		question: 'The financial security of an individual can be assured through',
		choice1: 'bank loan',
		choice2: 'borrowing',
		choice3: ' hard work',
		choice4: ' money saving',
		answer: 4,
	},
	{
		question: ' Improvement in tourism is important for the rapid development of the nation because, more',
		choice1: 'local tourists will leave the country',
		choice2: 'infrastructure will be provided',
		choice3: 'local tourists will not visit places of interest',
		choice4: 'tour guides will be unemployed',
		answer: 2,
	},
	{
		question: 'The physical environment can best be protected through',
		choice1: 'building of dams',
		choice2: 'burning of refuse',
		choice3: ' recycling of waste',
		choice4: ' underground mining',
		answer: 3,
	},
	{
		question: 'A bill passed by parliament becomes law when the president gives his?',
		choice1: 'veto',
		choice2: 'assent',
		choice3: 'accord',
		choice4: 'authority',
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
	    const selectedChoice = e.target;
	    const selectedAnswer = selectedChoice.dataset['number']
	     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
	    if (classToApply === 'correct') {
	    	incrementScore(SCORE_POINTS);
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

startGame();
console.log("working");

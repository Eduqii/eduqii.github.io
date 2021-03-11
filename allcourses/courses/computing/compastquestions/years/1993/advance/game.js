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
		question: 'The colour used for showing rivers and lakes on topographical maps is',
		choice1: 'red',
		choice2: 'blue',
		choice3: 'brown',
		choice4: 'green',
		choice5: 'yellow',
		answer: 2,
	},
	{
		question: 'Use the contour line below to answer this question' + '<br>' +'The vertical interval is',
		choice1: '100 m',
		choice2: '200 m',
		choice3: '300 m',
		choice4: '400 m',
		choice5: ' 500 m',
		answer: 1,
		img: 'img/contour.png',
	},
	{
		question: 'Use the contour line below to answer this question' + '<br>' +'The landform shown is a',
		choice1: ' cliff',
		choice2: ' valley',
		choice3: ' ridge',
		choice4: ' plateau',
		choice5: 'spur',
		answer: 5,
		img: 'img/contour.png',
	},
	{
		question: 'How many days does the earth take to complete its journey around the sun?',
		choice1: '360 ¼',
		choice2: ' 365',
		choice3: '365 ¼',
		choice4: '366',
		choice5: '366 ¼',
		answer: 3,
	},
	{
		question: 'The revolution of the earth around the sun is the main cause of',
		choice1: 'the rise and fall in the sea level',
		choice2: 'day and night',
		choice3: ' changes in wind direction',
		choice4: 'the four seasons',
		choice5: 'changes in the direction of the ocean current',
		answer: 4,
	},
	{
		question: 'When it is 2:00 pm at a place on longitude 0°, the time at a place on longitude 45°W will be',
		choice1: '10:00 am',
		choice2: '11:00 am',
		choice3: '12:00 noon',
		choice4: '4:00 pm',
		choice5: '5:00 pm',
		answer: 2,
	},
	{
		question: 'When the sun is overhead on the Tropic of Capricorn, areas in the Southern Hemisphere experience',
		choice1: 'equinoxes',
		choice2: ' spring',
		choice3: 'summer',
		choice4: 'autumn',
		choice5: ' winter',
		answer: 3,
	},
	{
		question: 'Which of the following is not a coastal landform?',
		choice1: ' Cliff',
		choice2: 'Estuary',
		choice3: 'Sandbar',
		choice4: 'Lagoon',
		choice5: 'Inselberg',
		answer: 1,
	},
	{
		question: 'A common feature found along the lower course of a river is a',
		choice1: 'meander',
		choice2: 'gorge',
		choice3: ' tributary',
		choice4: 'waterfall',
		choice5: 'mountain ',
		answer: 1,
	},
	{
		question: ' In which month was the highest rainfall recorded?',
		choice1: 'April',
		choice2: 'May',
		choice3: ' June',
		choice4: 'July',
		choice5: 'August',
		answer: 3,
	},
	{
		question: ' The total amount of rainfall recorded for the year was',
		choice1: ' 576 mm',
		choice2: ' 607 mm',
		choice3: '667 mm',
		choice4: '706 mm',
		choice5: '767 mm',
		answer: 1,
	},
	{
		question: 'The annual range of temperature was',
		choice1: ' 10 °C',
		choice2: '20 °C',
		choice3: ' 21 °C',
		choice4: '25 °C',
		choice5: ' 30 °C',
		answer: 1,
	},
	{
		question: 'Which of the following statements best describes the position of Ghana?',
		choice1: ' Ghana is to the east of the Republic of Togo',
		choice2: 'Burkina Faso is the southern neighbour of Ghana',
		choice3: ' Ghana is to the immediate west of Niger',
		choice4: 'Ghana is to the immediate east of La Cote d‟Ivoire',
		choice5: 'Ghana is boarded to the north by the Gulf of Guinea',
		answer: 4,
	},
	{
		question: ' The main vegetation types found in the Northern parts of Ghana is',
		choice1: 'evergreen forest',
		choice2: ' mangrove swamp',
		choice3: 'hot desert',
		choice4: 'semi-deciduous forest',
		choice5: 'savanna grassland',
		answer: 5,
	},
	{
		question: 'The hot dry winds that blow over most parts of Ghana during the harmattan are the',
		choice1: 'south-west monsoon',
		choice2: 'south easterly winds',
		choice3: ' north-westerly winds',
		choice4: 'north-east trade winds',
		choice5: ' easterly winds',
		answer: 4,
	},
	{
		question: 'The most important export commodity for Ghana is',
		choice1: ' timber',
		choice2: ' cocoa',
		choice3: 'coffee',
		choice4: 'pineapple',
		choice5: ' kola',
		answer: 2,
	},
	{
		question: 'Which of the following minerals is not mined in Ghana?',
		choice1: 'Gold',
		choice2: 'Diamond',
		choice3: 'Tin',
		choice4: ' Manganese',
		choice5: 'Bauxite',
		answer: 3,
	},
	{
		question: 'The main cause of the formation of the Volta Lake was the?',
		choice1: 'construction of a dam across the Volta River',
		choice2: 'generation of hydro-electric power from the Volta River',
		choice3: 'oactivities of the fishermen along the Volta River',
		choice4: 'construction of a bridge across the Volta River',
		choice5: 'development of river transportation on the Volta River',
		answer: 1,
	},
	{
		question: ' Which of the following may help solve the problem of forest destruction in Ghana?',
		choice1: ' Bush burning',
		choice2: ' Lumbering',
		choice3: 'Mining',
		choice4: 'Farming',
		choice5: 'Afforestation',
		answer: 5,
	},
	{
		question: 'The most popular mode of transport in Ghana is by',
		choice1: 'sea',
		choice2: 'rail',
		choice3: 'air',
		choice4: 'road',
		choice5: ' river',
		answer: 4,
	},
	{
		question: 'All the big textile factories in Ghana are located at',
		choice1: 'Tamale',
		choice2: 'Winneba',
		choice3: 'Tema',
		choice4: 'Kumasi',
		choice5: 'Nsawam',
		answer: 3,
	},
	{
		question: ' Which of the following do people belonging to the same ethnic group in Ghana have in common?',
		choice1: 'Clothes',
		choice2: 'Language',
		choice3: 'Name',
		choice4: 'Occupation',
		choice5: ' Religion',
		answer: 2,
	},
	{
		question: ' Which of the following is not associated with celebration of festivals in Ghana?',
		choice1: ' Planning Developmental Projects',
		choice2: ' Cleansing Ancestral Stools',
		choice3: ' Feasting and Merry-making',
		choice4: 'Paying homage of chiefs',
		choice5: 'Establishing a new settlement',
		answer: 5,
	},
	{
		question: ' In the history of Ghana, Yaa Asantewaa is noted for the',
		choice1: 'War of 1901',
		choice2: 'Akatamanso war',
		choice3: 'War of 1874',
		choice4: 'Adaamanso war',
		choice5: 'Feyiase war',
		answer: 1,
	},
	{
		question: 'The Mamprusi in Ghana are believed to have come from',
		choice1: 'the Upper East Region',
		choice2: ' Western Region',
		choice3: ' southern Ghana',
		choice4: ' eastern part of Lake Chad',
		choice5: 'western part of Lake Chad',
		answer: 4,
	},
	{
		question: ' The Accelerated Development Plan of education was introduced in Ghana in 1951 for the following reasons except?',
		choice1: ' reduction of primary school education to six years',
		choice2: ' setting up many teacher training colleges',
		choice3: ' reduction in the number of job opportunities for school leavers',
		choice4: ' helping of some workers study privately to enter universities',
		choice5: ' increasing of the number of university students',
		answer: 3,
	},
	{
		question: 'The second Republic of Ghana covered the period',
		choice1: ' 1957 to 1960',
		choice2: ' 1960 to 1966',
		choice3: '1966 to 1969',
		choice4: '1969 to 1972',
		choice5: '1972 to 1979',
		answer: 4,
	},
	{
		question: ' The struggle for the independence of Ghana from 1951 to 1957 was led by?',
		choice1: ' Dr J.B. Danquah',
		choice2: ' Mr Ako Adjei',
		choice3: 'Dr K.A. Busia',
		choice4: ' Mr K.A. Gbedemah',
		choice5: 'Dr Kwame Nkrumah',
		answer: 5,
	},
	{
		question: 'Who was the chairman of the Center for Civic Education in Ghana?',
		choice1: ' Dr K.A. Busia',
		choice2: ' Mr Kojo Botsio',
		choice3: 'Dr John Bilson',
		choice4: ' Mr A Casely-Hayford',
		choice5: ' Mr K.A. Gbedemah',
		answer: 1,
	},
	{
		question: 'The 1979 Constitution of Ghana was the',
		choice1:'  first after independence',
		choice2: ' second after independence',
		choice3: ' third after independence',
		choice4: ' fourth after independencee',
		choice5: ' fifth after independence',
		answer: 3,
	},
	
	{
		question: 'Trade between two countries is called?',
		choice1: ' barter trade ',
		choice2: 'surplus trade',
		choice3: ' domestic trade',
		choice4: 'multilateral trade',
		choice5: 'bilateral tradee',
		answer: 5,
	},
	{
		question: 'Which of the following Educational Policies emphasized the education of the girl-child in Ghana??',
		choice1: 'Education Act of 1961',
		choice2: ' Education Act of 1951',
		choice3: ' FCUBE of 1996',
		choice4: ' Education Reforms of 1987',
		choice5: ' New Reform of 1974',
		answer: 1,
	},
	{
		question: ' Most of the lakes in East Africa were formed as a result of the?',
		choice1: ' rift valley system',
		choice2: 'fold mountain system',
		choice3: 'action of volcanoes',
		choice4: ' action of wind',
		choice5: ' action of sea waves',
		answer: 1,
	},
	{
		question: 'There is a large population of white settlers in the highland areas of East Africa mainly because',
		choice1: ' of the beautiful natural scenery',
		choice2: 'it is safe to travel along the steep slopes',
		choice3: 'of the sunshine and warmth',
		choice4: ' of the availability of water',
		choice5: ' of the cool, healthy and pleasant environmente',
		answer: 5,
	},
	{
		question: 'Which of the following African countries is a leading producer of cotton?',
		choice1: ' Kenya',
		choice2: ' Malawi',
		choice3: 'Egypt',
		choice4: 'Zambia',
		choice5: ' Uganda',
		answer: 3,
	},
	{
		question: ' Cotton is the raw material used in making',
		choice1: ' paper',
		choice2: ' clothes',
		choice3: 'shoes',
		choice4: ' cigarettes',
		choice5: ' furniture',
		answer: 2,
	},
	{
		question: ' All the following are metallic minerals except',
		choice1: ' bauxite',
		choice2: ' copper',
		choice3: ' gold',
		choice4: 'diamond',
		choice5: 'manganese',
		answer: 4,
	},
	{
		question: 'In which of the following countries is the system of apartheid commonly practiced',
		choice1: 'Egypt',
		choice2: ' Mauritania',
		choice3: ' Kenya',
		choice4: ' Nigeria',
		choice5: 'South Africa',
		answer: 5,
	},
	{
		question: ' Which of the following organizations was set up mainly to help solve the problem of hunger and disease in the world?',
		choice1: 'The FAO',
		choice2: 'The ECA',
		choice3: 'The UNDP',
		choice4: 'The OAU',
		choice5: ' The UNHCR',
		answer: 1,
	},
	{
		question: 'The UNO has all the following aims except',
		choice1: 'maintenance of international peace and security',
		choice2: ' development of friendly relations among nations',
		choice3: ' removal of unpopular heads of states of member countries',
		choice4: ' solving international problems',
		choice5: 'promotion of respect for human rights',
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

		//show question img if 'img' property exists
	if (currentQuestion.hasOwnProperty('img')) {
		const img = document.createElement('img');
		img.src = currentQuestion.img;
		question.appendChild(img);
	}
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




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
		question: 'The colour used on maps for vegetation is?',
		choice1: 'brown',
		choice2: ' green',
		choice3: ' yellow',
		choice4: 'red',
		choice5: 'violete',
		answer: 2,
	},
	{
		question: 'The molten rock beneath the earth‟s surface is called',
		choice1: 'solid',
		choice2: 'horst',
		choice3: 'layer',
		choice4: 'magma',
		choice5: 'swamp',
		answer: 4,
	},
	{
		question: 'The layer of gases which surrounds the earth is known as',
		choice1: 'atmosphere',
		choice2: ' temperature',
		choice3: 'sunshine',
		choice4: ' ozone',
		choice5: ' cloud',
		answer: 1,
	},
	{
		question: ' Which of the following is not an agent of erosion?',
		choice1: 'Wind',
		choice2: ' River',
		choice3: 'Sea',
		choice4: 'Ice',
		choice5: 'Volcano',
		answer: 5,
	},

	{
		question: 'The conventional sign 1000 on a map represents',
		choice1: 'spot height',
		choice2: ' conical hill',
		choice3: ' settlement type',
		choice4: 'distance',
		choice5: 'trigonometric station',
		answer: 1,
	},

	{
		question: ' The year 2000 is in the',
		choice1: 'thirteenth century',
		choice2: 'fifteenth century',
		choice3: ' twentieth century',
		choice4: 'twenty first century',
		choice5: 'two hundredth century',
		answer: 4,
	},

	{
		question: 'A general pardon for offence against the state is known as',
		choice1: 'amnesty',
		choice2: 'freedom',
		choice3: 'permit',
		choice4: ' exeat',
		choice5: 'visa',
		answer: 1,
	},

	{
		question: 'Which of the following towns in Ghana is well noted for the mining of diamond?',
		choice1: 'Konongo',
		choice2: 'Akwatia',
		choice3: 'Tarkwa',
		choice4: 'Obuasi',
		choice5: 'Nsuta',
		answer: 2,
	},

	{
		question: 'The West Africa Examination Council (WAEC) consist of',
		choice1: 'two member countries',
		choice2: 'three member countries',
		choice3: ' four member countries',
		choice4: ' five member countries',
		choice5: 'six member countries',
		answer: 4,
	},

	{
		question: 'In which of the following regions is Lake Bosomtwi?',
		choice1: 'Eastern',
		choice2: ' Western',
		choice3: 'Volta',
		choice4: 'Ashanti',
		choice5: 'Central',
		answer: 4,
	},

	{
		question: 'The highest mountain in Africa is',
		choice1: 'Eglin',
		choice2: ' Adamawa',
		choice3: 'Kilimanjaro',
		choice4: 'Everest',
		choice5: ' Cameroon',
		answer: 3,
	},

	{
		question: 'The official seat of the government of Ghana is',
		choice1: ' The official seat of the government of Ghana isr Barracks',
		choice2: ' Peduase Lodge',
		choice3: ' Osu Castle',
		choice4: 'The State House',
		choice5: 'The Black Star Square',
		answer: 3,
	},



	{
		question: ' Wine production from grapes is an important industry in',
		choice1: 'Senegal',
		choice2: 'south Africa',
		choice3: 'Sierra Leone',
		choice4: 'Zimbabwe',
		choice5: 'The Sudan',
		answer: 2,
	},


	{
		question: 'The Greenwich Meridian passes through',
		choice1: 'Mexico city',
		choice2: ' Tema',
		choice3: 'Tokyo',
		choice4: 'Geneva',
		choice5: 'Cairo',
		answer: 2,
	},


	{
		question: ' What type of rainfall is likely to be experienced in the Cameroon Mountains?',
		choice1: ' Cyclonic',
		choice2: ' Relief',
		choice3: ' Conventional',
		choice4: ' Monsoon',
		choice5: 'Line squalls',
		answer: 2,
	},


	{
		question: 'The former capital of the Gold Coast (Ghana) was',
		choice1: 'Sekondi',
		choice2: 'Cape Coast',
		choice3: ' Dodowa',
		choice4: 'Ho',
		choice5: 'Sunyani',
		answer: 2,
	},


	{
		question: 'Mountain Ejuanema is located in the',
		choice1: ' Kwahu Ranges',
		choice2: ' Akwapim Ridge',
		choice3: 'Gambaga Scarp',
		choice4: ' Shai Hills',
		choice5: 'Atewa Ranges',
		answer: 2,
	},


	{
		question: 'Odwira is a festival of the?',
		choice1: ' Fantes',
		choice2: ' Nzemas',
		choice3: ' Kwahu',
		choice4: ' Krobo',
		choice5: ' Akwapim',
		answer: 5,
	},


	{
		question: 'The Peduase Lodge was built by',
		choice1: 'Dr Kwame Nkrumah',
		choice2: ' Mr Akuffo Addoo',
		choice3: 'Dr K. Abrefa Busia',
		choice4: 'Gen. J. A. Ankrah',
		choice5: 'Justice E. N. P. Sowah',
		answer: 1,
	},


	{
		question: ' Who was the President of the third republic of Ghana?',
		choice1: 'Dr K. Abrefa Busia',
		choice2: ' Dr J. B. Danquah',
		choice3: ' Mr Victor Owusu',
		choice4: 'Dr Hilla Limann',
		choice5: 'Dr E. V. C. de Graft Johnson',
		answer: 4,
	},


	{
		question: ' Which of the following is not a man-made feature?',
		choice1: 'Mosque',
		choice2: ' Road',
		choice3: ' Borehole',
		choice4: ' Bridge',
		choice5: 'Waterfall',
		answer: 5,
	},


	{
		question: 'The point where two streams meet is called',
		choice1: ' river basin',
		choice2: ' delta',
		choice3: ' tributary',
		choice4: 'source',
		choice5: 'confluence',
		answer: 5,
	},


	{
		question: ' Which of the following is not a latitude?',
		choice1: ' Equator',
		choice2: ' Greenwich Meridian',
		choice3: 'Tropic of Capricorn',
		choice4: 'Tropic of Cancer',
		choice5: ' Arctic Circle',
		answer: 2,
	},


	{
		question: ' A common feature found along the lower course of a river is a',
		choice1: ' meander',
		choice2: 'gorge',
		choice3: 'tributary',
		choice4: 'waterfallo',
		choice5: 'mountain',
		answer: 1,
	},


	{
		question: 'The instrument used for measuring humidity is',
		choice1: 'barometer',
		choice2: 'thermometer',
		choice3: ' rain gauge',
		choice4: ' wind vane',
		choice5: 'hygrometer',
		answer: 5,
	},


	{
		question: ' Which of the following is not considered as an environmental problem?',
		choice1: ' Air pollution',
		choice2: ' Bush burning',
		choice3: ' Shortage of water',
		choice4: ' Poor drainage',
		choice5: 'Afforestation',
		answer: 5,
	},


	{
		question: 'Which country uses Naira as her currency?',
		choice1: 'Ghana',
		choice2: ' Sierra Leone',
		choice3: ' Nigeria',
		choice4: 'Togo',
		choice5: 'Liberia',
		answer: 3,
	},


	{
		question: 'Which of the following is a killer disease among children?',
		choice1: 'Tuberculosis',
		choice2: ' Yellow fever',
		choice3: ' Measles',
		choice4: 'Malaria',
		choice5: ' Kwashiorkor',
		answer: 4,
	},


	{
		question: ' Oral Rehydration Salts (ORS) is used to treat',
		choice1: ' diarrhoea',
		choice2: ' measles',
		choice3: 'malaria',
		choice4: 'kwashiorkor',
		choice5: 'leprosy',
		answer: 1,
	},


	{
		question: 'Which of the following insects causes sleeping sickness in both man and cattle?',
		choice1: ' Housefly',
		choice2: 'Tsetse fly',
		choice3: ' Mosquito',
		choice4: ' Moth',
		choice5: 'Locust',
		answer: 2,
	},


	{
		question: ' Where in Ghana is irrigation farming practiced?',
		choice1: 'Aburi',
		choice2: ' Vea',
		choice3: ' Obuasi',
		choice4: 'Enchi ',
		choice5: 'Salaga',
		answer: 2,
	},


	{
		question: 'Which of the following towns is not situated along the Volta Lake?',
		choice1: 'Yapei',
		choice2: 'Buipe',
		choice3: ' Kete Krachi',
		choice4: ' Akosombo',
		choice5: 'Ho',
		answer: 5,
	},


	{
		question: 'The common fish caught in the lagoons of Ghana is',
		choice1: ' mudfish',
		choice2: ' tuna',
		choice3: ' tilapia',
		choice4: ' herrings',
		choice5: ' dogfish',
		answer: 3,
	},


	{
		question: ' Most of the lakes in East Africa were formed as a result of the',
		choice1: ' rift valley system',
		choice2: ' fold mountain system',
		choice3: ' action of volcanoes',
		choice4: ' action of tropical winds',
		choice5: 'action of waves',
		answer: 1,
	},


	{
		question: ' Who are often called Peace Officers?',
		choice1: ' Soldiers',
		choice2: 'Policemen',
		choice3: ' Lawyers',
		choice4: ' Doctors',
		choice5: 'Teachers',
		answer: 2,
	},


	{
		question: ' The Adomi Bridge is built on one of the following rivers',
		choice1: ' Volta',
		choice2: 'Ankobra',
		choice3: 'Tano',
		choice4: 'Pra',
		choice5: 'Densu',
		answer: 1,
	},


	{
		question: ' The Committee for the Defence of the Revolution (CDR) in Ghana was introduced by',
		choice1: 'Dr Kwame Nkrumah',
		choice2: ' Dr KA Busia',
		choice3: ' Mr Victor Owusu',
		choice4: ' Dr Hilla Limann',
		choice5: ' Flt Lt J. J. Rawlings',
		answer: 5,
	},

	{
		question: 'When the civil war broke out in Liberia a peace-keeping force was sent there by',
		choice1: 'Organization of African Trade Union Unity',
		choice2: ' Organization of African Unity (OAU)',
		choice3: ' United Nations Organization (UNO)',
		choice4: ' Non-Aligned Movement (NAM)',
		choice5: 'Economic Community of West African States (ECOWAS)',
		answer: 5,
	},


	{
		question: 'Who led the 1948 boycott of European goods in the Gold Coast?',
		choice1: ' Paa Grant',
		choice2: ' Nii Kwabena Bonney',
		choice3: ' Ako Adjei',
		choice4: ' Obetsebi Lamptey',
		choice5: 'Kojo Botsio',
		answer: 2,
	},



	{
		question: 'The most Southern point of Ghana is',
		choice1: ' Cape Coast',
		choice2: 'Takoradi',
		choice3: ' Ada',
		choice4: 'Accra',
		choice5: ' Cape Three Points',
		answer: 5,
	},

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

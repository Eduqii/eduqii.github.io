

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
		question: 'The main aim of promoting tourism in Ghana is to',
		choice1: 'reduces productivity',
		choice2: ' promote building of hotels.',
		choice3: ' preserve forts and castles.',
		choice4: ' create employment for foreigners.',
		answer: 3,
	},
	
{
		question: 'Which of the following measures can help reduce Ghana’s dependency on foreign aid?',
		choice1: 'Generating more revenue locally',
		choice2: ' Relying on Bank of Ghana reserves',
		choice3: ' Patronising goods from abroad',
		choice4: ' Repaying all foreign loans immediately',
		answer: 1,
	},

	{
		question: 'The two main levels of government in Ghana are',
		choice1: ' district and municipal.',
		choice2: 'national and district.',
		choice3: 'national and regional.',
		choice4: ' regional and district',
		answer: 3,
	},

	{
		question: 'Economic growth can best be achieved in Ghana through',
		choice1: ' adding value to exports.',
		choice2: ' patronizing foreign goods.',
		choice3: ' relying on foreign aid.',
		choice4: ' decreasing exports.',
		answer: 1,
	},

	{
		question: 'Which of the following governors introduced direct elections in Ghana in 1952?',
		choice1: ' Hugh Clifford',
		choice2: 'Allan Burns',
		choice3: ' Gordon Guggisberg',
		choice4: 'Arden Clarke',
		answer: 4,
	},

	{
		question: 'The most common reason for the migration of various ethnic groups to modern Ghana is',
		choice1: ' tourism.',
		choice2: 'security.',
		choice3: ' religion.',
		choice4: ' adventure.',
		answer: 2,
	},

	{
		question: 'Rural-Urban drift increases demand in the urban centres for',
		choice1: 'social facilities.',
		choice2: ' foreign exchange.',
		choice3: ' crude oil.',
		choice4: ' higher wages.',
		answer: 1,
	},

	{
		question: 'The large percentage of the youth in Ghana’s population implies that, Ghana has',
		choice1: ' a free market economy.',
		choice2: ' a lot of future labour force.',
		choice3: ' adequate supply of consumer goods.',
		choice4: 'equitable distribution of wealth.',
		answer: 2,
	},

	{
		question: ' On which of the following maps of Ghana can a Geographer easily identify the course of the River Volta?',
		choice1: ' Political',
		choice2: ' Physical',
		choice3: ' Vegetation',
		choice4: ' Climatic',
		answer: 2,
	},

	{
		question: ' Conventional signs enable map users to identify',
		choice1: ' planets.',
		choice2: ' rock profiles.',
		choice3: 'cardinal points.',
		choice4: 'land marks.',
		answer: 4,
	},

	{
		question: ' Most aspects of Ghanaian culture are displayed during',
		choice1: ' traditional festivals.',
		choice2: 'naming ceremonies.',
		choice3: ' funeral rites.',
		choice4: ' puberty rites.',
		answer: 1,
	},

	{
		question: ' A good social environment can be promoted through',
		choice1: ' tolerance.',
		choice2: ' bravery.',
		choice3: ' competition.',
		choice4: ' individualism.',
		answer: 1,
	},

	{
		question: ' Which of the following is the main reason for the protection of the physical environment?',
		choice1: 'Survival of living things',
		choice2: 'Ensuring adequate rainfall',
		choice3: ' Improved standard of living',
		choice4: ' Ensuring environmental sanitation',
		answer: 1,
	},

	{
		question: ' Bullying of pupils in schools constitutes',
		choice1: 'sex discrimination.',
		choice2: ' child labour.',
		choice3: 'sexual harassment.',
		choice4: 'child abuse.',
		answer: 4,
	},

	{
		question: 'The majority of Ghanaians acquire citizenship by',
		choice1: ' naturalization.',
		choice2: ' adoption.',
		choice3: 'founding.',
		choice4: ' birth.',
		answer: 4,
	},

	{
		question: ' Ghana is still not self-reliant because the country depends on',
		choice1: 'foreign financial support.',
		choice2: ' crude agricultural tools.',
		choice3: 'primary industries.',
		choice4: ' subsistence agriculture.',
		answer: 1,
	},

	{
		question: 'Tourism involves',
		choice1: 'taking time off normal duties.',
		choice2: ' painting beautiful sceneries',
		choice3: 'buying new and beautiful artefacts.',
		choice4: 'travelling to see and enjoy sceneries.',
		answer: 4,
	},

	{
		question: 'The most important national symbol which identifies Ghana as an independent sovereign state is the',
		choice1: ' State Stool.',
		choice2: ' State Sword.',
		choice3: ' Flag.',
		choice4: ' Mace.',
		answer: 3,
	},

	{
		question: 'The Upper East regional capital lies',
		choice1: ' North-West of Kumasi.',
		choice2: ' North-East of Kumasi.',
		choice3: ' South-East of Kumasi.',
		choice4: ' South-West of Kumasi.',
		answer: 2,
	},

	{
		question: 'Which of the following is an outmoded cultural practice?',
		choice1: ' Naming ceremonies',
		choice2: ' Funerals',
		choice3: ' Puberty rites',
		choice4: ' Widowhood rites',
		answer: 4,
	},

	{
		question: ' The most effective measure for reducing the rapid population growth in Ghana is by promoting',
		choice1: ' gender equality.',
		choice2: ' girl-child education.',
		choice3: 'adolescent counselling.',
		choice4: ' women empowerment.',
		answer: 2,
	},

	{
		question: 'Any lawful endeavour undertaken by an individual to earn a living is referred to as',
		choice1: ' productivity',
		choice2: 'attitude.',
		choice3: ' work.',
		choice4: 'skills.',
		answer: 3,
	},


		{
		question: 'The state can best promote private sector business by',
		choice1: ' supplying office equipment.',
		choice2: 'guaranteeing financial support.',
		choice3: 'increasing wages and salaries.',
		choice4: 'offering all the needs of entrepreneurs.',
		answer: 2,
	},

	{
		question: ' Productivity measures',
		choice1: ' production of goods.',
		choice2: ' production of services.',
		choice3: ' output per man-hours.',
		choice4: ' profit made out of production.',
		answer: 3,
	},

	{
		question: 'Which of the following should be the basis for signing Foreign Agreement in Ghana?',
		choice1: 'Government interest',
		choice2: 'Business Executive interest',
		choice3: 'Majority interest',
		choice4: 'National interest',
		answer: 4,
	},

	{
		question: ' A good layout and enforcement of Town Planning laws can help reduce',
		choice1: ' substance abuse.',
		choice2: 'influx of immigrants.',
		choice3: ' emergence of slums.',
		choice4: ' population growth.',
		answer: 3,
	},

	{
		question: ' A person legally recognized to enjoy political rights in a country is known as',
		choice1: ' patriot.',
		choice2: ' compatriot.',
		choice3: ' politician.',
		choice4: ' citizen.',
		answer: 4,
	},

	{
		question: 'The four cardinal points are',
		choice1: ' N, E, SW, NE.',
		choice2: ' N, S, NE, SW.',
		choice3: ' N, E, W, S.',
		choice4: ' N, W, SE, NE.',
		answer: 3,
	},

	{
		question: ' Relief rainfall is mostly experienced in areas of',
		choice1: ' highlands.',
		choice2: ' savannahs.',
		choice3: 'forests.',
		choice4: 'lowlands.',
		answer: 1,
	},

	{
		question: 'The major factor that has brought rapid cultural change in Ghana is',
		choice1: 'formal education.',
		choice2: 'inter-marriages.',
		choice3: ' informal education.',
		choice4: ' Christian marriages.',
		answer: 1,
	},

	{
		question: ' Habitats of endangered species of animals can be protected through the creation of',
		choice1: 'land guards.',
		choice2: ' forest reserves.',
		choice3: ' tourist centres.',
		choice4: 'veterinary clinics.',
		answer: 2,
	},

	{
		question: ' Joint stock companies are owned by',
		choice1: 'government.',
		choice2: 'entrepreneurs.',
		choice3: ' directors.',
		choice4: ' shareholders.',
		answer: 4,
	},

	{
		question: 'Which of the following is not a source of capital for the sole proprietor?',
		choice1: 'Bank loan',
		choice2: ' Personal loan',
		choice3: ' Loan from friends',
		choice4: ' Government subventions',
		answer: 4,
	},

	{
		question: ' Poor drainage system in our cities results in',
		choice1: 'erosion.',
		choice2: ' floods.',
		choice3: ' earthquake.',
		choice4: ' land slide.',
		answer: 2,
	},

	{
		question: ' Which of the following is the greatest contribution of Ghana towards the U.N.O.?',
		choice1: 'Troops for peace keeping operations',
		choice2: 'Settlements of refugees',
		choice3: ' Payment of dues',
		choice4: ' Donation of relief items',
		answer: 1,
	},
{
		question: ' Political conflicts in Ghana can best be minimized through',
		choice1: 'tolerating opposing views.',
		choice2: ' adopting a common language.',
		choice3: 'banning of private newspapers.',
		choice4: ' voting for a very strong president.',
		answer: 1,
	},
	{
		question: ' Which of the following factors promote political stability in a country?',
		choice1: ' Food security',
		choice2: 'Rule of law',
		choice3: ' Free education',
		choice4: ' Rigid constitution',
		answer: 2,
	},
	{
		question: 'The highest authority in the traditional area is the',
		choice1: ' Divisional chief.',
		choice2: ' Clan heads',
		choice3: ' Paramount chief.',
		choice4: ' Lineage heads.',
		answer: 3,
	},
	{
		question: ' Which of the following is an effect of ethnic conflicts?',
		choice1: ' Interruption of development projects',
		choice2: ' Decrease in government expenditure',
		choice3: ' Frequent interruption of electricity supply',
		choice4: ' Over dependence on foreign goods',
		answer: 1,
	},

	{
		question: 'The most convenient way of reducing slum in cities is to',
		choice1: 'remove badly laid out building.',
		choice2: 'build more estates.',
		choice3: ' increase wages and salaries.',
		choice4: 'supervise siting of structures.',
		answer: 4,
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

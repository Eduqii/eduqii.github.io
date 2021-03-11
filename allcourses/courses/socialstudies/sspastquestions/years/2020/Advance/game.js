

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
		question: 'Indiscipline is a problem in the Ghanaian society because it',
		choice1: 'reduces productivity',
		choice2: 'destroys the educational system',
		choice3: 'leads to high birth rate',
		choice4: 'encourages bribery and corruption',
		answer: 1,
	},

{
		question: 'Which of the following is a primary activity?',
		choice1: 'Plywood processing',
		choice2: ' Fruit canning',
		choice3: ' Cocoa cultivation',
		choice4: 'extile production',
		answer: 3,
	},

	{
		question: 'The Akans are believed to have migrated from',
		choice1: 'Old Ghana Empire',
		choice2: ' The Chad basin',
		choice3: ' Benin Republic',
		choice4: 'Ile Ife',
		answer: 1,
	},

	{
		question: 'The most important symbol which identifies Ghana as an independent state is the',
		choice1: ' Speaker‟s Mace',
		choice2: 'National Flag',
		choice3: 'State Sword',
		choice4: 'Coat-of-arms',
		answer: 4,
	},

	{
		question: 'Which of the following diseases is caused by pollution of water bodies?',
		choice1: ' River blindness',
		choice2: ' Asthma',
		choice3: ' Cholera',
		choice4: 'Hepatitis B',
		answer: 1,
	},

	{
		question: ' A day is either gained or lost when one moves across longitude',
		choice1: '180°',
		choice2: '  24° E°',
		choice3: ' 15° W',
		choice4: ' 0°',
		answer: 1,
	},

	{
		question: 'The most cherished value expected of an adolescent in the Ghanaian society is',
		choice1: ' hospitality',
		choice2: 'patience',
		choice3: 'generosity',
		choice4: 'chastity',
		answer: 4,
	},

	{
		question: 'Which of the following cultural practices is a drawback to development in the Ghanaian society?',
		choice1: 'Celebration of festivals',
		choice2: ' Naming and outdooring ceremonies',
		choice3: 'Belief in the activities of demons',
		choice4: ' Performing puberty rites',
		answer: 3,
	},

	{
		question: 'The symbol on topographic maps represents?',
		choice1: ' settlements',
		choice2: ' farmlands',
		choice3: ' marshy areas',
		choice4: 'areas liable to flood',
		answer: 3,
	},

	{
		question: ' On a relief map, the colour brown usually represents',
		choice1: 'plains',
		choice2: 'mountains',
		choice3: 'water bodies',
		choice4: 'lowlands',
		answer: 2,
	},

	{
		question: 'An extensive area of lowland is called a',
		choice1: ' ridge',
		choice2: ' valley',
		choice3: 'plain',
		choice4: 'plateau',
		answer: 3,
	},

	{
		question: ' Which of the following vegetation types is not found in Ghana?',
		choice1: ' Sahel woodland',
		choice2: ' Guinea savanna',
		choice3: ' Mangrove forest',
		choice4: 'Tropical rain forest',
		answer: 1,
	},

	{
		question: ' The main type of vegetation found in the south-western part of Ghana is the',
		choice1: ' rain forest',
		choice2: 'coastal grassland ',
		choice3: ' guinea savanna ',
		choice4: 'mangrove forest',
		answer: 1,
	},

	{
		question: 'Lunar eclipse occurs when the',
		choice1: 'sun comes between the earth and the moon',
		choice2: 'moon comes between the sun and the earth',
		choice3: ' earth comes between the sun and the moon ',
		choice4: 'earth rotates on its axis from West to East.',
		answer: 3,
	},

	{
		question: 'The type of rainfall formed by the meeting of two air masses of different temperatures is',
		choice1: ' relief',
		choice2: 'frontal',
		choice3: 'convectional',
		choice4: 'orographic',
		answer: 2,
	},

	{
		question: ' Which of the following continents is uninhabited?',
		choice1: ' Asia',
		choice2: 'Antarctica',
		choice3: ' Australia',
		choice4: 'Europe',
		answer: 2,
	},

	{
		question: ' One problem created IN the rural areas as a result of rural-urban drift is',
		choice1: ' increase in streetism',
		choice2: 'creation of slums',
		choice3: 'environmental degradation',
		choice4: 'increased incidence of broken homes',
		choice5: 'he',
		answer: 4,
	},

	{
		question: ' Which of the following factors may cause rural-urban drift?',
		choice1: ' Better employment opportunities in the urban areas',
		choice2: 'Better health facilities in the rural areas',
		choice3: 'Even distribution of social amenities in the country',
		choice4: ' Absence of recreational facilities in the urban areas',
		answer: 1,
	},

	{
		question: ' Asante was colonized by the British through',
		choice1: ' agreement',
		choice2: ' force',
		choice3: 'persuasion',
		choice4: ' plebiscite',
		answer: 2,
	},

	{
		question: ' Right to life means',
		choice1: 'living forever',
		choice2: 'living without interference',
		choice3: ' acquiring wealth',
		choice4: 'sustaining the family line',
		answer: 2,
	},

	{
		question: 'Independence of the judiciary implies that judges?',
		choice1: 'should get everything free',
		choice2: 'should not pay taxes',
		choice3: 'can do whatever they like',
		choice4: ' should be free from political interference',
		answer: 4,
	},

	{
		question: 'One major cause of conflicts in the Ghanaian society is',
		choice1: 'the development of slums in the cities',
		choice2: 'inadequate number of law enforcement agents',
		choice3: 'the encouragement of inter-ethnic marriages',
		choice4: ' unacceptable way of choosing leaders',
		answer: 2,
	},


		{
		question: ' The international organization formed to maintain world peace after the Second World War is known as',
		choice1: ' The League of Nations',
		choice2: ' United Nations Organisation',
		choice3: 'Commonwealth of Nations',
		choice4: 'Non-aligned Movement',
		answer: 2,
	},

	{
		question: 'After independence, Ghana automatically became a member of the',
		choice1: ' African Union',
		choice2: ' League of Nations',
		choice3: 'Commonwealth of Nations',
		choice4: ' Non-Aligned Movement',
		answer: 3,
	},

	{
		question: 'The executive arm of government comprises of the President, the Cabinet and',
		choice1: ' Civil servants',
		choice2: ' Lawyers',
		choice3: 'the Speaker',
		choice4: ' the Chief Justice',
		answer: 1,
	},

	{
		question: ' One way of preventing ethnic conflict in Ghana is through',
		choice1: ' payment of compensation',
		choice2: 'creation of jobs',
		choice3: 'celebration of festivals',
		choice4: ' tolerance and dialogue',
		answer: 4,
	},

	{
		question: ' Family planning is beneficial to Ghanaians because it',
		choice1: 'helps in giving respect and honour to fathers',
		choice2: ' increase life expectancy of children',
		choice3: ' helps restore the health of mothers',
		choice4: 'brings about equitable distribution of income',
		answer: 4,
	},

	{
		question: ' Labour can be productively increased through',
		choice1: ' moral education in society',
		choice2: 'training and retraining',
		choice3: 'extension of working hours',
		choice4: ' people doing sacrificial work',
		answer: 2,
	},

	{
		question: ' One traditional way of preserving fish in Ghana is',
		choice1: 'canning',
		choice2: 'freezing',
		choice3: ' salting',
		choice4: 'boiling',
		answer: 3,
	},

	{
		question: 'One factor responsible for the low rate of economic development in Ghana is',
		choice1: 'misappropriation of state resources',
		choice2: 'misuse of individual resources',
		choice3: 'increase of taxes on industries',
		choice4: 'slow rate of population growth',
		answer: 1,
	},

	{
		question: 'Which of the following means of saving ensures continuity of firms after suffering losses?',
		choice1: 'Treasury bill',
		choice2: 'Insurance',
		choice3: ' Company shares',
		choice4: 'Government bonds',
		answer: 2,
	},

	{
		question: 'Travelling to see and enjoy facilities and sceneries in other places is referred to as',
		choice1: 'leisure',
		choice2: 'tourism',
		choice3: 'pleasure',
		choice4: 'entertainment',
		answer: 2,
	},

	{
		question: ' Workers in Ghana are required by law to contribute towards their future upkeep through',
		choice1: 'Company shares',
		choice2: 'Treasury bills',
		choice3: 'Government bonds',
		choice4: 'Social Security schemes',
		answer: 4,
	},

	{
		question: ' A constitution may be defined as the',
		choice1: 'bye-laws of a country',
		choice2: 'decrees of a country',
		choice3: 'customary laws of a country',
		choice4: 'highest law of a country',
		answer: 4,
	},

	{
		question: 'An advantage of a good layout for settlement is that',
		choice1: ' it reduces overcrowding of families',
		choice2: 's it promotes trading and church activities',
		choice3: 'it makes the inhabitants very rich',
		choice4: 'modern houses and schools are built',
		answer: 1,
	},
	
	{
		question: ' One responsibility of the Ghanaian citizen is to',
		choice1: 'protect the police',
		choice2: 'pay taxes',
		choice3: 'work and earn a living',
		choice4: 'worship freely',
		answer: 2,
	},

	{
		question: ' In order to protect one‟s rights, a citizen should be',
		choice1: 'a law student',
		choice2: 'a youth leader',
		choice3: ' educated on them',
		choice4: 'an observer at court sittings',
		answer: 3,
	},

	{
		question: ' Which of the following personalities was a member of the United Gold Coast Convention?',
		choice1: 'Kojo Botsio',
		choice2: 'J.B. Danquah',
		choice3: ' Krobo Edusei',
		choice4: 'K. A. Gbedemah',
		answer: 2,
	},

	{
		question: 'The primary function of the legislature is to',
		choice1: ' administer justice',
		choice2: 'make laws',
		choice3: 'register citizens',
		choice4: 'protect wrong doers',
		answer: 2,
	},

	{
		question: 'People who buy company shares receive',
		choice1: 'profits',
		choice2: ' dividends',
		choice3: 'loans',
		choice4: 'overdrafts',
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

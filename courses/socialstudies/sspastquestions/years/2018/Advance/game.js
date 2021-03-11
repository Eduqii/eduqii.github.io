

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
		question: ' A common feature of people associated with the same ethnic group in Ghana is',
		choice1: '  name',
		choice2: '   occupation',
		choice3: 'clothes',
		choice4: 'language',
		answer: 4,
	},
	
{
		question: 'The main benefit of tourism to Ghana is',
		choice1: ' political stability',
		choice2: 'inter-tribal marriage',
		choice3: 'foreign exchange',
		choice4: 'cultural change',
		answer: 3,
	},

	{
		question: 'The physical environment of Ghana can be protected through',
		choice1: 'recycling of waste materials',
		choice2: ' re-directing river channels',
		choice3: 'practising traditional farming',
		choice4: 'burning of industrial waste',
		answer: 1,
	},

	{
		question: 'When two air masses of different temperatures meet, the result is,',
		choice1: 'thunder and lightning',
		choice2: 'rain shadow zone',
		choice3: ' cyclonic rainfall',
		choice4: 'relief rainfall',
		answer: 3,
	},

	{
		question: 'Where did the Akans first settle during their migration?',
		choice1: ' Dormaa Ahenkro',
		choice2: 'Bono Manso',
		choice3: 'Denkyira',
		choice4: ' Asante Manso',
		answer: 2,
	},

	{
		question: 'The period which marks the beginning and the end of adolescence is',
		choice1: '12 – 19 years',
		choice2: '10 – 19 years',
		choice3: '10 – 14 years',
		choice4: '15 – 19 years',
		answer: 2,
	},

	{
		question: 'The social environment include',
		choice1: 'festivals, political parties and religious groups',
		choice2: 'festivals, churches and tourist sites',
		choice3: ' settlements, churches and rivers',
		choice4: 'settlements, festivals and political parties',
		answer: 1,
	},

	{
		question: 'An effect of land degradation is',
		choice1: 'bad farming practices',
		choice2: 'excessive quarrying',
		choice3: 'improper layouts',
		choice4: 'loss of soil fertility',
		answer: 4,
	},

	{
		question: 'An advantage of chastity to the adolescent is',
		choice1: 'avoiding contracting typhoid fever',
		choice2: 'gaining approval from adults',
		choice3: ' knowing blood group easily',
		choice4: 'getting the best school to attend',
		answer: 2,
	},

	{
		question: 'People who visit places of interest to enjoy the facilities are called',
		choice1: ' experts',
		choice2: 'travellers',
		choice3: 'tourists',
		choice4: 'socialites',
		answer: 3,
	},

	{
		question: 'The principle of separation of powers ensures that',
		choice1: ' political parties do not work together',
		choice2: 'the police and military do not work together',
		choice3: 'the president appoints different ministers',
		choice4: 'various organs of government work independently',
		answer: 4,
	},

	{
		question: ' A representation of the earth"s surface not drawn to scale is known as',
		choice1: 'map',
		choice2: 'plan',
		choice3: ' sketch',
		choice4: 'globe',
		answer: 3,
	},

	{
		question: 'The right to enjoy social amenities goes together with the responsibility of',
		choice1: 'attending communal labour',
		choice2: 'offering voluntary service',
		choice3: 'paying of taxes regularly',
		choice4: 'attending political meetings',
		answer: 3,
	},

	{
		question: 'The best way to settle disputes is through the',
		choice1: 'Electoral Commission',
		choice2: 'District Assembly',
		choice3: ' parliamentary committee',
		choice4: 'court system',
		answer: 4,
	},

	{
		question: 'State-owned enterprises provide',
		choice1: 'foreign exchange',
		choice2: 'unemployment',
		choice3: 'public service',
		choice4: 'insurance',
		answer:3,
	},

	{
		question: 'A major reason for developing a good layout settlement is to reduce',
		choice1: 'free movement and ethnic conflicts',
		choice2: 'overcrowding and criminal activities',
		choice3: 'rural-urban migration and street hawking',
		choice4: 'truancy and illiteracy rate',
		answer: 2,
	},

	{
		question: ' If the scale of a map is 1 : 50,000 and the distance between two points on the map is 10 cm, what is the actua?',
		choice1: '2.5 km',
		choice2: '5.0 km',
		choice3: '10.0 km',
		choice4: '20.0 km',
		answer: 2,
	},

	{
		question: 'For a society to develop faster, there is the need for',
		choice1: 'progressive changes in its culture',
		choice2: 'indiscriminate exploitations',
		choice3: 'increase in population',
		choice4: 'decline in good health',
		answer: 1,
	},

	{
		question: 'Productivity increase in Ghana can be achieved through',
		choice1: 'showcasing Ghana"s rich culture',
		choice2: 'frequent absence from work',
		choice3: 'application of modern technology',
		choice4: 'lack of supervision',
		answer: 3,
	},

	{
		question: 'Conflicts that destroy lives and property must be prevented by',
		choice1: 'security agents',
		choice2: 'all citizens',
		choice3: 'Environmental Protection Agency (EPA)',
		choice4: 'National Disaster Management Organization (NADMO)',
		answer: 2,
	},

	{
		question: 'The fundamental laws by which a country is governed is known as',
		choice1: 'bye-laws',
		choice2: 'legislative instruments',
		choice3: 'constitution',
		choice4: 'court ruling',
		answer: 2,
	},

	{
		question: 'The ocean that washes the coast of Ghana is the',
		choice1: 'Arctic',
		choice2: 'Atlantic',
		choice3: 'India',
		choice4: 'Pacific',
		answer: 2,
	},


		{
		question: 'Emotional characteristics of adolescents include the following except',
		choice1: 'worry',
		choice2: 'love',
		choice3: 'pimples',
		choice4: 'shyness',
		answer: 3,
	},

	{
		question: 'Which of the following practices is the best way of conserving Ghana"s forest?',
		choice1: 'Growing of cover crops',
		choice2: 'Replanting of trees',
		choice3: ' Promoting the use of charcoal',
		choice4: 'Deforestation',
		answer: 2,
	},

	{
		question: 'When a person uses an orthodox and traditional medicine together for the treatment of diseases, he is said to be practising',
		choice1: 'outmoded culture',
		choice2: 'scultural lag',
		choice3: 'cultural change',
		choice4: 'parallel culture',
		answer: 4,
	},

	{
		question: 'Motivation and supervision help in the efficient use of',
		choice1: 'human resource',
		choice2: 'national resource',
		choice3: 'mineral resource',
		choice4: 'capital resource',
		answer: 1,
	},

	{
		question: 'Tourism in Ghana promotes the growth of the',
		choice1: 'hotel industry',
		choice2: ' film industry',
		choice3: 'textile industry',
		choice4: 'ohealth industry',
		answer: 1,
	},

	{
		question: 'The main work of the members of parliament under the 1992 constitution is to',
		choice1: 'execute laws',
		choice2: 'draw manifestos',
		choice3: 'interpret laws',
		choice4: 'make laws',
		answer: 4,
	},

	{
		question: 'An individual whose rights have been infringed upon seeks justice from the',
		choice1: 'court',
		choice2: 'president',
		choice3: 'police',
		choice4: 'teachers',
		answer: 1,
	},

	{
		question: 'Which of the following types of rock is suitable for road construction',
		choice1: 'Marble',
		choice2: 'Granite',
		choice3: 'Slate',
		choice4: 'Quartzite',
		answer: 2,
	},

	{
		question: 'The human resource of a country refers to',
		choice1: 'skills and trade unions',
		choice2: 'teachers only',
		choice3: 'skills of workers and management',
		choice4: 'members of local councils only',
		answer: 3,
	},

	{
		question: 'Peaceful co-existence among ethnic group is important for',
		choice1: 'sustainable development',
		choice2: 'population growth',
		choice3: 'goincreasing government revenue',
		choice4: 'reducing crime in society',
		answer: 1,
	},

	{
		question: 'Which of the following was established to find the causes of the 1948 riots?',
		choice1: 'Justice Annan Committee',
		choice2: 'Watson Commission',
		choice3: 'Burns Commission',
		choice4: 'Coussey Commission',
		answer: 2,
	},

	{
		question: 'To sustain the operation of a business, one must',
		choice1: 'have a group of managers',
		choice2: 'join national pension schemes',
		choice3: 'produce quality goods',
		choice4: 'relate with businesses abroad',
		answer: 3,
	},

	{
		question: 'Land in most rural communities in Ghana is mainly used for',
		choice1: ' farming activities',
		choice2: 'recreational facilities',
		choice3: 'human settlements',
		choice4: 'football fields',
		answer: 1,
	},
	{
		question: 'A society may refuse to accept cultural change when the change',
		choice1: 'comes from people outside',
		choice2: 'conflicts with its traditions',
		choice3: 'comes from its members',
		choice4: 'is gradually introduced',
		answer: 2,
	},
	{
		question: 'One positive effect of colonization on Ghana is the',
		choice1: 'contribution to peace-keeping missions',
		choice2: 'engagement in national trade',
		choice3: 'foundation for infrastructural developments',
		choice4: 'excessive use of foreign goods',
		answer: 3,
	},
	{
		question: 'The Coussey Committee was set up by',
		choice1: 'Sir Alan Burns',
		choice2: 'Sir Gordon Guggisberg',
		choice3: 'Sir Arden Clarke',
		choice4: 'moSir Gerald Creasy',
		answer: 2,
	},
	{
		question: 'The main purpose of the Economic Community of West African States (ECOWAS) is to',
		choice1: 'achieve economic integration',
		choice2: 'expand the size of West Africa',
		choice3: 'achieve political unity',
		choice4: 'achieve political freedom',
		answer: 1,
	},
	{
		question: 'Bush fires occur very often during the',
		choice1: 'rainy season',
		choice2: 'cold season',
		choice3: 'planting season',
		choice4: ' dry season',
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

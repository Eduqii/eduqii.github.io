

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
		question: 'Which of the following activities is a duty of a citizen?',
		choice1: ' Giving free medical care',
		choice2: '  Helping the police financially',
		choice3: 'Joining a religious group',
		choice4: 'Paying taxes for development',
		answer: 4,
	},
	
{
		question: 'In a traditional society, which of the following is used to teach good morals?',
		choice1: 'Court music',
		choice2: 'Story telling',
		choice3: 'Dirges',
		choice4: 'Appellations',
		answer: 2,
	},

	{
		question: 'In Ghana, state owned enterprises are important because they',
		choice1: 'produce all the goods for the society',
		choice2: 'make a lot of profit',
		choice3: 'provide vital goods and services',
		choice4: 'employ majority of the labour force.',
		answer: 3,
	},

	{
		question: 'Which of the following human activities destroys habitats of animals??',
		choice1: ' Bush burning',
		choice2: ' Bush fallowing',
		choice3: ' Inter-cropping',
		choice4: 'Mixed farming',
		answer: 1,
	},
	{
		question: 'The environment can best be described as',
		choice1: 'animals and non-living things',
		choice2: 'man and his surrounding',
		choice3: ' man and vegetation around him',
		choice4: ' vegetation and non-living things',
		answer: 2,
	},

	{
		question: 'The transition from childhood to adulthood is referred to as',
		choice1: 'adolescence.',
		choice2: ' manhood',
		choice3: ' parenthood',
		choice4: ' puberty',
		answer: 1,
	},

	{
		question: 'Most aspects of Ghanaian culture are displayed during',
		choice1: 'lo',
		choice2: 'so',
		choice3: 'go',
		choice4: 'mo',
		choice5: 'he',
		answer: 2,
	},

	{
		question: 'What percent of American adults believe that chocolate milk comes from brown cows?',
		choice1: 'funeral rites',
		choice2: ' naming ceremonies',
		choice3: ' puberty rites',
		choice4: 'traditional festivals',
		answer: 4,
	},

	{
		question: ' Which of the following is used to represent landmarks on maps?',
		choice1: 'Conventional signs',
		choice2: ' Histogram',
		choice3: ' Mathematical symbols',
		choice4: ' Plain sketches',
		answer: 1,
	},

	{
		question: 'When one moves eastwards and crosses the International Date Line,',
		choice1: 'a day is gained',
		choice2: ' a day is lost',
		choice3: 'shorter hours of day is experienced',
		choice4: 'longer hours of day is experienced',
		answer: 2,
	},

	{
		question: ' Ghana lies between latitudes',
		choice1: ' 5°South an d11°North',
		choice2: ' 5° North and 11° North',
		choice3: ' 5° North and 11° South',
		choice4: ' 5° South and 11° South',
		answer: 2,
	},

	{
		question: 'To promote national unity Ghanaians are expected to be',
		choice1: ' hardworking',
		choice2: ' patriotic',
		choice3: 'highly educated',
		choice4: 'well paid',
		answer: 2,
	},

	{
		question: ' The outermost part of the earth is called the',
		choice1: ' atmosphere',
		choice2: ' core',
		choice3: 'mantle',
		choice4: 'crust',
		answer: 4,
	},

	{
		question: ' Adolescent chastity is beneficial to the girl because it helps her to',
		choice1: ' enjoy free education',
		choice2: ' gain automatic scholarship',
		choice3: ' have uninterrupted education',
		choice4: 'pass examinations easily',
		answer: 3,
	},

	{
		question: ' When two air masses of different temperatures meet, the condition results in the',
		choice1: ' rain shadow',
		choice2: 'cyclonic rainfall',
		choice3: ' relief rainfall',
		choice4: ' thunder and lightning',
		answer: 2,
	},

	{
		question: 'The high dependency problem of some families can be solved by',
		choice1: ' encouraging parents to feed their children properly',
		choice2: 'practicing family planning',
		choice3: 'sending the children to school',
		choice4: 'sharing the responsibility with relatives',
		answer: 2,
	},

	{
		question: ' One way of sustaining unity among the ethnic groups in Ghana is by',
		choice1: 'allowing people to enjoy free movement',
		choice2: 'appreciating cultural practices of other people',
		choice3: 'keeping trouble makers in prison',
		choice4: 'selecting leaders through election',
		answer: 2,
	},

	{
		question: ' Which of the following is not a function of the Police Service?',
		choice1: 'Arresting criminals',
		choice2: 'Controlling traffic',
		choice3: 'Judging cases in court',
		choice4: ' Maintaining peace and order.',
		answer: 3,
	},

	{
		question: 'The first castle school to be established in the Gold Coast (Ghana) was in',
		choice1: ' Accra',
		choice2: ' Cape Coast',
		choice3: ' Elmina',
		choice4: 'Akropong',
		answer: 2,
	},

	{
		question: 'Which of the following men fought for the abolishing of the slave trade?',
		choice1: 'Andreas Riss',
		choice2: 'Gordon Guggisberg',
		choice3: 'James Somerset',
		choice4: ' William Wilberforce',
		answer: 4,
	},

	{
		question: ' The people of British Togoland joined Ghana through',
		choice1: 'conquest',
		choice2: 'declaration',
		choice3: 'permission',
		choice4: 'voting',
		answer: 4,
	},

	{
		question: ' The first political event leading to the formal establishment of British colonial rule in the Gold Coast was the',
		choice1: 'declaration of Sagrenti war',
		choice2: 'disturbances of 1948',
		choice3: 'introduction of the Poll Tax Ordinance',
		choice4: 'signing of the bond of 1844.',
		answer: 4,
	},


		{
		question: 'A child of not more than seven years of age found in Ghana and whose parents cannot be traced becomes a Ghanaian by',
		choice1: 'adoption',
		choice2: ' birth',
		choice3: 'conferment',
		choice4: 'registration',
		answer: 1,
	},

	{
		question: 'Which of the following activities can constitute human rights abuse in Ghana?',
		choice1: 'Child labour',
		choice2: 'Dropping out of school',
		choice3: 'Drug abuse',
		choice4: 'Employing an 18 year old girl',
		answer: 1,
	},

	{
		question: 'When an individual behaves in an honest and just manner, he/she performs a',
		choice1: ' civic responsibility',
		choice2: 'civic right',
		choice3: 'natural responsibility',
		choice4: 'social right',
		answer: 1,
	},

	{
		question: 'The Supreme Court of Ghana',
		choice1: 'interprets the constitution and the laws of Ghana',
		choice2: ' makes and implements laws',
		choice3: 'remands criminals in custody',
		choice4: ' runs courses for judges and magistrates',
		answer: 1,
	},

	{
		question: ' The maintenance of law and order in traditional societies in Ghana is the responsibility of',
		choice1: ' chiefs and their elders',
		choice2: ' priests and their elders',
		choice3: 'teachers and family heads',
		choice4: ' police and soldiers',
		answer: 1,
	},

	{
		question: ' Which of the following methods is not a way of managing conflicts?',
		choice1: 'Arbitration',
		choice2: 'Negotiation',
		choice3: 'Reconciliation',
		choice4: ' Suppression',
		answer: 4,
	},

	{
		question: 'One major way by which Ghana co-operates with other nations is by',
		choice1: 'allowing them to establish military base in Ghana',
		choice2: 'lending large sums of money to them',
		choice3: ' removing all taxes on goods imported from them.',
		choice4: 'sending ambassadors and high commissioners to them.',
		answer: 4,
	},

	{
		question: 'The head of government of the second republic of Ghana was the',
		choice1: 'Attorney General',
		choice2: ' Head of State',
		choice3: ' Minister of State',
		choice4: 'Prime Minister',
		answer: 4,
	},

	{
		question: 'Which of the following institutions can make laws to check smuggling and armed robbery in Ghana?',
		choice1: 'District Assembly',
		choice2: ' The Police Service',
		choice3: ' Parliament',
		choice4: 'High Court',
		answer: 3,
	},

	{
		question: ' Which of the following factors least affect vegetation in Ghana?',
		choice1: ' Climate',
		choice2: 'Human activities',
		choice3: ' Relief',
		choice4: 'Soil',
		answer: 2,
	},

	{
		question: ' The most economical way of disposing domestic and industrial waste is by',
		choice1: ' burning',
		choice2: ' dumping',
		choice3: 'recycling',
		choice4: 'sieving',
		answer: 3,
	},

	{
		question: 'The life span of water bodies are naturally prolonged through',
		choice1: ' adequate rainfall',
		choice2: 'building of dams',
		choice3: 'water sanitation',
		choice4: 'irrigation systems',
		answer: 1,
	},

	{
		question: 'High birth rate in developing countries can lead to',
		choice1: ' high income per head',
		choice2: 'low income per head',
		choice3: 'low dependency ratio',
		choice4: 'skilled labour force',
		answer: 2,
	},

	{
		question: 'Changes in culture is important for',
		choice1: 'ethnic disintegration',
		choice2: 'international recognition',
		choice3: 'population growth',
		choice4: 'national development',
		answer: 4,
	},

	{
		question: 'Private businesses help in building the nation when they',
		choice1: 'increase their profits',
		choice2: 'import consumer goods',
		choice3: 'pay appropriate taxes',
		choice4: ' produce more goods',
		answer: 3,
	},

	{
		question: ' When the wet bulb and the dry bulb thermometer at a weather station record the same reading, it means the air is',
		choice1: 'condensed',
		choice2: 'dry',
		choice3: 'saturated',
		choice4: ' warm',
		answer: 3,
	},

	{
		question: 'Some state owned enterprises are often sold to private individuals due to',
		choice1: 'sufficient raw materials',
		choice2: 'adequate market',
		choice3: 'adequate skilled labour',
		choice4: 'poor management',
		answer: 4,
	},

	{
		question: 'The government can best promote private sector business by',
		choice1: 'increasing wages and salaries',
		choice2: 'guaranteeing financial support',
		choice3: 'offering all the needs of entrepreneurs',
		choice4: 'supplying office equipment',
		answer: 2,
	},
	
	{
		question: 'The main function of the executive organ of government is',
		choice1: 'interpretation of laws',
		choice2: 'impeachment of the president',
		choice3: 'implementation of laws',
		choice4: 'law making',
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

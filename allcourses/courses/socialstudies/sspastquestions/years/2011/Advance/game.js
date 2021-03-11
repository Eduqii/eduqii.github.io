

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
		question: 'The purpose of naming ceremonies in traditional Ghanaian homes, is to',
		choice1: 'give the child an identity',
		choice2: ' offer gifts to the parents by friends and relatives',
		choice3: ' make parents popular',
		choice4: 'let the child taste alcohol for the first time',
		answer: 1,
	},
	
	{
		question: 'Which of the following officials are not elected through general elections in Ghana?',
		choice1: ' Members of Parliament',
		choice2: ' President of Ghana',
		choice3: ' Assembly members',
		choice4: ' Ministers of state',
		answer: 4.
	},
	{
		question: 'Festivals are important in Ghana because they enable the people to',
		choice1: 'remember important past events',
		choice2: 'show their wealth',
		choice3: 'appoint traditional priests for the shrines',
		choice4: 'determine the number of people in the community',
		answer: 1,
	},
	{
		question: 'The instrument used in measuring the rate of evaporation is',
		choice1: 'barometer',
		choice2: 'hygrometer',
		choice3: 'anemometer',
		choice4: 'hydrometer',
		answer:2 ,
	},
	{
		question: 'In which vegetational belt is Ghana’s cocoa mostly grown?',
		choice1: 'Mangrove swamp',
		choice2: 'Sudan savanna',
		choice3: 'Semi-deciduous forest',
		choice4: ' Guinea savanna',
		answer: 3,
	},
	{
		question: 'Equal hours of day and night are experienced in Ghana when the sun is overhead on',
		choice1: ' Latitude 0°',
		choice2: 'Latitude 23 ½ ° North',
		choice3: 'Longitude 180°',
		choice4: 'Longitude 0°',
		answer: 1,
	},
	{
		question: ' One of the aims of the African Union (AU) is to',
		choice1: 'eliminate cultural differences in Africa',
		choice2: 'increase the size of foreign aid to Africa',
		choice3: 'increase the growth of Africa’s population',
		choice4: 'eliminate conflicts in Africa',
		answer: 4,
	},
	{
		question: 'The eagles in Ghana’s Coat of Arms signify',
		choice1: ' the wealth of the nation',
		choice2: 'protection of the people',
		choice3: 'unity of the people',
		choice4: 'a continued link with the Commonwealth',
		answer: 2,
	},
	{
		question: 'The head of government of the second Republic of Ghana was the',
		choice1: 'Attorney General',
		choice2: 'Head of State',
		choice3: ' Prime Minister',
		choice4: 'Chief Justice',
		answer: 3,
	},
	{
		question: ' Which of the following oceans lies between Africa and America?',
		choice1: 'Arctic',
		choice2: 'Atlantic',
		choice3: 'Pacific',
		choice4: 'Indian',
		answer: 2,
	},
	{
		question: 'Ghana can minimize the importation of goods mainly by',
		choice1: 'increasing subsidies on local products',
		choice2: 'increasing taxes on imports',
		choice3: 'controlling the rate of inflation',
		choice4: 'decreasing advertisement of local products',
		answer: 2,
	},
	{
		question: 'An important source of locally generated revenue for District Assemblies in Ghana is',
		choice1: 'the common fund',
		choice2: 'court fines',
		choice3: 'market tolls',
		choice4: 'road tolls',
		answer: 3,
	},
	{
		question: 'Indecent dressing among the youth should be discouraged because it',
		choice1: 'leads to increased social crime',
		choice2: 'increases peer pressure',
		choice3: 'makes them unpopular',
		choice4: 'makes them lose dignity',
		answer: 4,
	},
	{
		question: 'The Domestic Violence and Victims Support Unit (DOVVSU) in Ghana is responsible for resolving problems relating too',
		choice1: 'work place disputes',
		choice2: 'family welfare',
		choice3: 'the chieftaincy institution',
		choice4: 'the chieftaincy institution',
		answer: 2,
	},
	{
		question: 'Ghana’s high indebtedness to foreign countries can be reduced by',
		choice1: 'increasing tax revenue',
		choice2: 'using locally produced goods',
		choice3: 'investing more in education',
		choice4: 'ensuring good neighbourliness with other countries',
		answer: 2,
	},
	{
		question: 'One major reason for the migration of ethnic groups into modern Ghana was the search for',
		choice1: 'means of livelihood',
		choice2: 'religious protection',
		choice3: 'military weapons',
		choice4: 'good neighbours',
		answer: 1,
	},
	{
		question: 'Laws are mainly made to ensure',
		choice1: 'better education',
		choice2: 'instant justice',
		choice3: 'social conformity',
		choice4: 'Road',
		answer: 3,
	},
	{
		question: 'Public corporations are set up by the government mainly to provide',
		choice1: 'youth employment',
		choice2: 'emergency services',
		choice3: 'entrepreneurial skills',
		choice4: 'Utility services',
		answer: 4,
	},
	{
		question: 'The most important factor that can help improve productivity in state enterprises is',
		choice1: 'working throughout the year',
		choice2: 'working for longer hours',
		choice3: 'by increasing public holidays',
		choice4: 'proper supervision',
		answer: 4,
	},
	{
		question: 'Floods in our communities can best be controlled through',
		choice1: 'harvesting rain water',
		choice2: 'planned layout',
		choice3: 'tarring of roads',
		choice4: 'construction of borehole',
		answer: 2,
	},
	{
		question: 'The interpretation of the constitution of Ghana is a function of the',
		choice1: 'legislature',
		choice2: 'executive',
		choice3: 'judiciary',
		choice4: 'cabinet',
		answer: 3,
	},
	{
		question: 'Free movement of people, goods and services is one of the main aims of the',
		choice1: 'Non-Aligned Movement',
		choice2: 'United Nations Organisation',
		choice3: 'Economic Community of West African States',
		choice4: 'Commonwealth',
		answer: 3,
	},
	{
		question: 'Industries must be located outside residential areas to',
		choice1: 'avoid pollution',
		choice2: 'encourage competition among firms',
		choice3: 'reduce cost of production',
		choice4: 'reduce industrial accidents',
		answer: 1,
	},
	{
		question: 'Which of the following vegetation types experiences high temperature and heavy rainfall throughout the year?',
		choice1: 'Mangrove forest',
		choice2: 'Tropical vegetation forest',
		choice3: 'Semi deciduous forest',
		choice4: 'Woodland savanna',
		answer: 2,
	},
	{
		question: 'The state can promote the growth of private enterprises by',
		choice1: 'taking over their control and management',
		choice2: 'increasing taxes on their earnings',
		choice3: 'increasing imports of similar products',
		choice4: 'organizing training sessions for their managers',
		answer: 4,
	},
	{
		question: 'When the scale of a map is expressed in the form of a ratio, it is known as',
		choice1: 'diagonal',
		choice2: 'statement',
		choice3: 'linear',
		choice4: 'representative fraction',
		answer: 4,
	},
	{
		question: 'The main reason for encouraging farmers in Ghana to produce more cocoa is to',
		choice1: 'generate more foreign exchange',
		choice2: ' help determine the best cocoa farmer',
		choice3: 'set up more cocoa factories',
		choice4: ' promote the manufacturing of more cocoa products',
		answer: 1,
	},
	{
		question: 'Which of the following is not a product of the forest zone in Ghana?',
		choice1: 'Palm nut',
		choice2: 'Shea nut',
		choice3: 'Cocoa',
		choice4: 'Coffee',
		answer: 2,
	},

{
		question: 'One moral value that is stressed during an outdooring and naming ceremony of a child is',
		choice1: 'truthfulness',
		choice2: 'love',
		choice3: 'hard work',
		choice4: 'hard work',
		answer: 1,
	},
	{
		question: 'The tertiary sector of the Ghanaian economy provides',
		choice1: 'services',
		choice2: 'raw materials',
		choice3: 'finished goods',
		choice4: 'industrial machinery',
		answer: 1,
	},
	{
		question: 'The Djebobo and Torogbani mountains are located in the',
		choice1: 'Gambaga escarpment',
		choice2: 'Atiwa-Atwredu ranges',
		choice3: 'Akwapim-Togo ranges',
		choice4: ' Kwahu plateau',
		answer: 3,
	},
	{
		question: 'Productivity in the mining sector can be increased in Ghana through',
		choice1: 'improvement in the land tenure system',
		choice2: 'the employment of more labourers',
		choice3: 'the application of modern technology',
		choice4: 'the use of locally manufactured tools',
		answer: 3,
	},
	{
		question: 'One main reason for the abolition of the slave trade was',
		choice1: 'lack of finance for the traders',
		choice2: 'lack of market for slaves',
		choice3: 'the inhuman nature of the trade',
		choice4: 'lack of cultural supporte',
		answer: 3,
	},
	{
		question: 'The first African country to allow herself to be assessed under the New Partnership for African Development (NEPAD) was',
		choice1: 'Ghana',
		choice2: 'South Africa',
		choice3: 'Nigeria',
		choice4: 'Rwanda',
		answer: 1,
	},
	{
		question: 'The African Union (AU) was officially launched on 9th July, 2002 in',
		choice1: 'South Africa',
		choice2: 'Libya',
		choice3: 'Nigeria',
		choice4: 'Ethiopia',
		answer: 1,
	},
	{
		question: 'One problem hindering the effective functioning of District Assemblies in Ghana is',
		choice1: 'rapid population growth',
		choice2: 'mobilizing funds for development',
		choice3: 'interference by traditional rulers',
		choice4: 'maintaining law and order',
		answer: 2,
	},
	{
		question: 'Which of the following economic activities does not cause deforestation in Ghana?',
		choice1: 'Crop growing',
		choice2: 'Lumbering',
		choice3: 'Fishing',
		choice4: 'Charcoal burning',
		answer: 1,
	},
	{
		question: 'A major effect of lateness to school and work is that it',
		choice1: 'increases the cost of living',
		choice2: 'takes away leisure time',
		choice3: 'causes ill feeling among colleagues',
		choice4: 'reduces productivity',
		answer: 4,
	},
	{
		question: 'Which of the following business units raises its capital through the sale of shares?',
		choice1: 'Public Corporations',
		choice2: 'Joint-stock Companies',
		choice3: 'Partnership',
		choice4: 'Co-operative societies',
		answer: 2,
	},
	{
		question: 'One benefit that Ghana derives from co-operating with international bodies is',
		choice1: 'payment of dues to such bodies',
		choice2: 'contributing soldiers to peace keeping',
		choice3: 'accepting refugees',
		choice4: 'technology transfer',
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

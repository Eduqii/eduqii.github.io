

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

question: ' During the Second World War, Ghanaian soldiers fought on the side of',

choice1: ' Germany and her allies',
choice2: ' America and her allies',
choice3: ' Britain and her allies',
choice4: ' Japan and her allies',

answer: 3,

},

{ 

question: ' One of the measures the government of Ghana can use to reduce poverty is',

choice1: ' paying higher interest on savings',
choice2: ' obtaining World Bank loan',
choice3: ' giving away public funds',
choice4: ' equipping the unemployed with skills',

answer: 4,

},

{

question: ' Cape Town in South Africa falls within the',

choice1: ' Warm Temperate Climate',
choice2: ' Cool Temperate Climate',
choice3: ' Tundra Climate',
choice4: ' Tropical Climate',

answer: 1,

},

{ 

question: ' A president who performs judicial functions abuses the principle of',

choice1: ' checks and balances',
choice2: ' separation of powers',
choice3: ' fundamental human rights',
choice4: ' collective responsibility',

answer: 2,


},

{ 

question: ' Economic self-reliance is a necessary factor for maintaining',

choice1: ' political independence',
choice2: ' democratic rule',
choice3: ' national unity',
choice4: ' higher education',

answer: 1,

},

{ 

question: ' Which type of rain occurs when cold and warm air masses meet?',

choice1: ' Orographic',
choice2: ' Convectional',
choice3: ' Cyclonic',
choice4: ' Thunderstorm',

answer: 1,


},

{ 

question: ' Ghana co-operates with other nations mainly to',

choice1: ' ensure her political stability',
choice2: ' develop her national trade',
choice3: ' maintain internal peace',
choice4: ' maintain international peace',

answer: 3,

},

{ 

question: ' For a nation to be economically independent, she must',

choice1: ' educate her citizens',
choice2: ' produce her basic needs',
choice3: ' rely on her colonial master for aid',
choice4: ' co-operate with her neighbours',

answer: 4,

},

{ 

question: ' The Arctic Circle is',

choice1: ' 23 ½ ° north',
choice2: ' 23 ½ ° south',
choice3: ' 66 ½ ° north',
choice4: ' 66 ½ ° south',

answer: 2,


},

{ 

question: ' The system by which a foreigner acquires citizenship of another country is',

choice1: ' registration',
choice2: ' nationalization',
choice3: ' adoption',
choice4: ' naturalization',

answer: 3,

},

{ 

question: ' Parents can reduce conflicts at home when they',

choice1: ' use corporal punishment',
choice2: ' increase children’s privileges',
choice3: ' offer advice to children',
choice4: ' detain children',

answer: 4,


},

{ 

question: ' When one moves eastwards and crosses the International Date line',

choice1: ' a day is gained',
choice2: ' a day is lost',
choice3: ' shorter hours of day is experienced',
choice4: ' longer hours of day is experienced',

answer: 3,

},

{ 

question: ' Which of the following industries is having negative influences on the Ghanaian culture?',

choice1: ' Mining',
choice2: ' Agriculture',
choice3: ' Fishing',
choice4: ' Tourism',

answer: 2,

},

{ 

question: ' Which of the following is not a social problem in Ghana?',

choice1: ' Low standard of living',
choice2: ' Low agricultural production',
choice3: ' Low literacy rate',
choice4: ' High birth rate',

answer: 4,

},

{

question: ' The highest points in Ghana are found on the',

choice1: ' Gambaga Escarpment',
choice2: ' Akwapim Ridge',
choice3: ' Togo Range',
choice4: ' Mampong Scarp',

answer: 2, 

},

{ 

question: ' One of the following was not a founding member of the United Gold Coast Convention (UGCC)',

choice1: ' J.', choice2: ' Danquah',
choice2: ' Ako Adjei',
choice3: ' Kwame Nkrumah',
choice4: ' George Grant',

answer: 3,

},

{ 

question: ' The chief representative of the central government in the district is the',

choice1: ' Parliamentarian of the District',
choice2: ' District Co-ordinating Director',
choice3: ' Presiding Member of the District Assembly',
choice4: ' District Chief Executive',

answer: 3,

},

{ 

question: ' The Mediterranean lands are known for the production of',

choice1: ' citrus',
choice2: ' tea',
choice3: ' grains',
choice4: ' vegetables',

answer: 4,

},

{ 

question: ' A medical officer at a government hospital is a',

choice1: ' director',
choice2: ' civil servant',
choice3: ' public servant',
choice4: ' consultant',

answer: 1,


},

{ 

question: ' The conventional sign on a topographical sheet represents a',

choice1: ' school',
choice2: ' church',
choice3: ' bridge',
choice4: ' settlement',

answer: 3,


},

{ 

question: ' The development of communities in your area is the responsibility of the',

choice1: ' Member of Parliament',
choice2: ' Traditional Council',
choice3: ' Unit Committee',
choice4: ' District Assembly',

answer: 4,

},

{

question: ' When the time at Tema is 12 noon, the time at a place on longitude 30°w is',

choice1: ' 9 am',
choice2: ' 10 am',
choice3: ' 11 am',
choice4: ' 2 pm',

answer: 2,

},

{ 

question: ' One duty of a citizen is to',

choice1: ' enjoy free education',
choice2: ' join a religious group',
choice3: ' assist the police in investigations',
choice4: ' support a political party',

answer: 4,

},

{

question: ' The institution established under the 1992 Constitution to educate the public on their rights is the',

choice1: ' National Commission for Civic Education',
choice2: ' National Media Commission',
choice3: ' Electoral Commission',
choice4: ' Commission on Human Rights and Administrative Justice (CHRAJ)',

answer: 2,


},

{ 

question: ' Which of the following constitutes human rights abuse?',

choice1: ' Being searched by a security agent',
choice2: ' Interrogation by a security agent',
choice3: ' Police detention beyond forty-eight hours',
choice4: ' Lawful imprisonment beyond forty-eight hours',

answer: 3,

},

{

question: ' When one faces the rising sun, the left hand',

choice1: ' always points to the north',
choice2: ' sometimes points to the north',
choice3: ' sometimes points to the west',
choice4: ' always points to the west',

answer: 1,


},

{ 

question: ' In order to fully develop our natural resources we must',

choice1: ' bring in experts from abroad',
choice2: ' train our human resource',
choice3: ' go for loans from abroad for farming',
choice4: ' compel the youth to undertake farming',

answer: 3,

},

{

question: ' The 1951 general election granted Ghana',

choice1: ' political independence',
choice2: ' republican status',
choice3: ' membership of the Commonwealth',
choice4: ' internal self-government',

answer: 1,

},

{ 

question: ' The construction industry is an example of',

choice1: ' secondary production',
choice2: ' tertiary production',
choice3: ' primary production',
choice4: ' subsistence production',

answer: 2,

},

{

question: ' Rocks that have their original features changed through very high temperature and pressure are called',

choice1: ' metamorphic',
choice2: ' sedimentary',
choice3: ' volcanic',
choice4: ' igneous',

answer: 4,

},

{ 

question: ' Which of these countries is in the Southern Hemisphere?',

choice1: ' Japan',
choice2: ' Malaysia',
choice3: ' Brazil',
choice4: ' North Korea',

answer: 1,

},

{ 

question: ' In the Ghanaian society, irresponsible parenting is one of the causes of',

choice1: ' rural-urban migration',
choice2: ' teenage pregnancy',
choice3: ' late marriages',
choice4: ' infant mortality',

answer: 2,
},

{

question: ' The major reason for establishing castle schools by the Europeans was to',

choice1: ' educate the people on human rights',
choice2: ' teach religious knowledge',
choice3: ' educate their own children',
choice4: ' introduce formal education',

answer: 2,

},

{ 

question: ' Which of the following cereals grows well in the Sudan Savana?',

choice1: ' Wheat',
choice2: ' Rice',
choice3: ' Sorghum',
choice4: ' Millet',

answer: 3,

},

{ 

question: ' Another name for the North-East Trade Winds is',

choice1: ' Fohn',
choice2: ' Harmattan',
choice3: ' Monsoon',
choice4: ' Westerlies',

answer: 2,

},

{ 

question: ' The organ of government that initiates policies to be passed into law is the',

choice1: ' Media',
choice2: ' Judiciary',
choice3: ' Parliament',
choice4: ' Executive',

answer: 3,

},

{ 

question: ' The breakdown of extended families in our communities is mainly caused by',

choice1: ' numerous family meetings',
choice2: ' high increase in population',
choice3: ' pressure of work',
choice4: ' adoption of foreign culture',

answer: 4,

},

{ 

question: ' The high dependency problem of some families can be solved by',

choice1: ' practising family planning',
choice2: ' sending children to school',
choice3: ' sharing the responsibilities with relatives',
choice4: ' encouraging parents to feed their children properly',

answer: 1,

},

{ 

question: ' A hill with a steep slope on one side and a gentle slope on the other side is a/an',

choice1: ' ridge',
choice2: ' escarpment',
choice3: ' knoll',
choice4: ' plateau',

answer: 2,

},

{ 

question: ' Democracy in our nation could be sustained by',

choice1: ' teaching the people information technology',
choice2: ' operating one party system of government',
choice3: ' holding general elections every decade',
choice4: ' giving the people political education',

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

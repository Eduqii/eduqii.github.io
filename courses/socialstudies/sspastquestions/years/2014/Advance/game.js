

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

question: ' Some Ghanaians mishandle the Cedi Notes by',

choice1: ' burning it',
choice2: ' crumpling it',
choice3: ' saving it',
choice4: ' spending it',

answer: 2,


 
},

{

question: ' A major way of spreading HIV and AIDS is through',

choice1: ' eating in public places',
choice2: ' indiscriminate sexual relations',
choice3: ' mosquito bites',
choice4: ' shaking hands with infected persons.',

answer: 2,
 

 
},

{

question: ' Adolescent abstinence from sexual related activity is',

choice1: ' chastity',
choice2: ' health',
choice3: ' paternity',
choice4: ' sincerity',

answer: 1,

 
},

{

question: ' The set of guidelines for governing a nation is provided by the',

choice1: ' constitution',
choice2: ' council of state',
choice3: ' judiciary',
choice4: ' legislature',

answer: 1,


 
},

{

question: ' What a person is obliged to perform as a duty in the society constitutes his / her',

choice1: ' achievements',
choice2: ' dignity',
choice3: ' responsibility',
choice4: ' rights',

answer: 3,


 
},

{

question: ' The physical environment of Ghana can be protected through',

choice1: ' drying industrial waste',
choice2: ' practicing traditional farming',
choice3: ' redirecting river channels',
choice4: ' recycling of waste materials',

answer: 4,

 
},

{

question: ' Promoting national unity in Ghana greatly depends on',

choice1: ' kindness',
choice2: ' politics',
choice3: ' religion',
choice4: ' tolerance',

answer: 4,

 
},

{

question: ' The most effective measure for reducing the rapid population growth in Ghana is promoting',

choice1: ' adolescent counselling',
choice2: ' women empowerment',
choice3: ' gender equality',
choice4: ' girl-child education',

answer: 4,

 
},

{

question: ' Which of the following situations is an effect of rapid population growth in Ghana?',

choice1: ' Decrease in food production',
choice2: ' High dependency burden',
choice3: ' High standard of living',
choice4: ' Low productivity',

answer: 2,

 
},

{

question: ' Pressure on social facilities in urban areas is mainly created by',

choice1: ' decrease in imported goods',
choice2: ' high cost of living',
choice3: ' rural-urban drift',
choice4: ' urban-rural drift',

answer: 3,
 

 
},

{

question: ' Community conflicts are best settled through',

choice1: ' arbitration and reconciliation',
choice2: ' court ruling',
choice3: ' government intervention',
choice4: ' police action',

answer: 1,

 
},

{

question: ' Which of the following conditions is an effect of ethnic conflicts?',

choice1: ' Decrease in government expenditure',
choice2: ' Frequent interruption of electricity supply',
choice3: ' Interruption of development projects',
choice4: ' Overdependence on foreign goods',

answer: 3,
 

 
},

{

question: ' Government policies are implemented at the District levels by the',

choice1: ' Chief Executive',
choice2: ' Co-ordinating Director',
choice3: ' Presiding Member',
choice4: ' Regional Minister',

answer: 1,

 
},

{

question: ' Maintenance of law and order in the country is the main function of the',

choice1: ' airforce',
choice2: ' army',
choice3: ' navy',
choice4: ' police',

answer: 4,

 
},

{

question: ' The highest authority in the traditional area is the',

choice1: ' clan head',
choice2: ' divisional chiefs',
choice3: ' lineage head',
choice4: ' paramount chief',

answer: 4,

},

{

question: ' Which of the following factors promotes political stability in a country?',

choice1: ' Food security',
choice2: ' Free education',
choice3: ' Rigid constitution',
choice4: ' Rule of law',

answer: 4,

 
},

{

question: ' Which of the following features is not an efficient way of sustaining political stability in a country?',

choice1: ' Avoidance of dictatorship',
choice2: ' Free and fair elections',
choice3: ' One party system',
choice4: ' Press freedom',

answer: 3,
 


 
},

{

question: ' Poor drainage system in our cities result in',

choice1: ' earthquakes',
choice2: ' erosion',
choice3: ' floods',
choice4: ' landslides',

answer: 3,
 

 
},

{

question: ' The Poll Tax Ordinance was passed in 1852 mainly to raise money to pay salaries of',

choice1: ' Christian missionaries',
choice2: ' cocoa farmers',
choice3: ' Colonial employees',
choice4: ' Gold Coast chiefs',

answer: 3,


 
},

{

question: ' Which of the following activities is the most outstanding contribution of Ghana to the United Nations Organisation?',

choice1: ' Donation of relief items',
choice2: ' Payment of dues',
choice3: ' Settlement of refugees',
choice4: ' Provision of troops for peace-keeping operations',

answer: 4,
 

},

{

question: ' Which of the following international organizations is the largest financial contributor to Ghana’s developmental projects?',

choice1: ' African Union (AU)',
choice2: ' Economic Community of West African States (ECOWAS)',
choice3: ' The Commonwealth',
choice4: ' United Nations Organization.',

answer: 4,
 
},

{

question: ' The first political party formed in the Gold Coast was the',

choice1: ' Convention People’s Party (CPP)',
choice2: ' National Liberation Movement (NLM)',
choice3: ' United Gold Coast Convention (UGCC)',
choice4: ' United Party (UP)',

answer: 3,
 

 
},

{

question: ' Which of the following settlements is a feature of a slum?',

choice1: ' Dispersed settlement',
choice2: ' Linear settlement',
choice3: ' Overcrowded settlement',
choice4: ' Planned settlement',

answer: 3,

 
},

{

question: ' Cocoa production is classified as',

choice1: ' cottage industry',
choice2: ' primary industry',
choice3: ' secondary industry',
choice4: ' tertiary industry',

answer: 2,
 

 
},

{

question: ' Pension benefits of Ghanaian workers are managed by the',

choice1: ' Bank of Ghana',
choice2: ' Ghana Commercial Bank',
choice3: ' Social Security and National Insurance Trust',
choice4: ' State Insurance Company',

answer: 3,

 
},

{

question: ' Private businesses help in developing the nation when they',

choice1: ' increase their profit',
choice2: ' import consumer goods',
choice3: ' pay appropriate taxes',
choice4: ' produce more goods',

answer:3,

 
},

{

question: ' The main reason for establishing state owned enterprises is to',

choice1: ' create competition in the country.',
choice2: ' generate foreign exchange for the country.',
choice3: ' generate profit for the state.',
choice4: ' provide essential service to the publ',ichoice3: '',

answer: 4,
 
 
},

{

question: ' Landmarks are important features used in finding',

choice1: ' cardinal points',
choice2: ' compass points',
choice3: ' direction',
choice4: ' layout',

answer: 3,

 
},

{

question: ' The main benefit of tourism to Ghana is that it',

choice1: ' encourages inter-tribal marriages',
choice2: ' enriches our culture',
choice3: ' is a major foreign exchange earner',
choice4: ' promotes political stability',

answer: 3,

 
},

{

question: ' Ethnic conflicts must be avoided because they slow down',

choice1: ' economic development',
choice2: ' rural-urban migration',
choice3: ' tribal disintegration',
choice4: ' urban-rural migration',


answer: 1,

 
},

{

question: ' A scale of map expressed as a ratio is known as',

choice1: ' linear scale',
choice2: ' simple fraction',
choice3: ' representative fraction',
choice4: ' statement scale',

answer: 3,

 
},

{

question: ' The integrity of the nation can be defended by',

choice1: ' educating the youth',
choice2: ' encouraging immigration',
choice3: ' cleaning the environment',
choice4: ' reporting saboteurs',

answer: 4,

 
},

{

question: ' One basic right of every Ghanaian is the right to',

choice1: ' fair wages',
choice2: ' personal liberty',
choice3: ' stand for election',
choice4: ' vote in general election',

answer: 2,

 
},

{

question: ' Which of the following situations may not create instability in the Ghanaian society?',

choice1: ' Denial of justice',
choice2: ' Gender equality',
choice3: ' Party rivalry',
choice4: ' Workers’ demonstration',

answer: 2,

 
},

{

question: ' The major reason for establishing castle schools by the Europeans was to',

choice1: ' educate the people on human rights',
choice2: ' educate their own children',
choice3: ' introduce formal education to the people',
choice4: ' teach religious knowledge.',

answer: 2,

 
},

{

question: ' The main reason for the abolishing of the slave trade was the',

choice1: ' difficulties in the trade',
choice2: ' inhuman nature of the trade.',
choice3: ' lack of finance.',
choice4: ' lack of market for slaves',

answer: 2,
 

 
},

{

question: ' Which of the following features forms part of our social environment?',

choice1: ' Atmosphere',
choice2: ' Buildings',
choice3: ' Land',
choice4: ' Religion',

answer: 4,
 

 
},

{

question: ' Habitats of endangered species of animals can be protected through the creation of',

choice1: ' forest reserves',
choice2: ' land guards',
choice3: ' tourist centres',
choice4: ' veterinary clinics',


answer: 1,

 
},

{

question: ' The most effective agency of cultural change is',

choice1: ' drama',
choice2: ' education',
choice3: ' language',
choice4: ' music',

answer: 2,
 

 
},

{

question: ' The motto in Ghana’s Coat of Arms is',

choice1: ' Freedom and Love',
choice2: ' Independence and Freedom.',
choice3: ' Freedom and Justice',
choice4: ' Unity and Integrity.',

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

		return window.location.assign('end.html') 
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



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

question: ' Human activities are generally controlled by',

choice1: ' technology',
choice2: ' social environment',
choice3: ' superstition',
choice4: ' scientific research',

},

{answer: 2, 

question: ' The Kakum Forest in Ghana promotes economic development through its',

choice1: ' supply of firewood',
choice2: ' supply of timber',
choice3: ' suitable location',
choice4: ' tourist attraction',

answer: 4,
},

{ 

question: ' Irresponsible adolescent behaviour usually results in',

choice1: ' self-reliance',
choice2: ' loss of dignity',
choice3: ' broken homes',
choice4: ' drug abuse',

answer: 2,

},

{ 

question: ' Ethnic groups in Ghana are distinctly identified by their',

choice1: ' dance',
choice2: ' music',
choice3: ' language',
choice4: ' food',

answer: 3,

},

{ 

question: ' The crop types which grow well in the Guinea Savanna are',

choice1: ' millet and groundnuts',
choice2: ' cocoa and rice',
choice3: ' shallots and cassava',
choice4: ' plantain and cola',

answer: 1,

},

{ 

question: ' The health needs of people can be improved by',

choice1: ' building more schools',
choice2: ' locating a hospital closer to the people',
choice3: ' providing good drinking water',
choice4: ' eating more carbohydrate foods',

answer: 3,

},

{ 

question: ' The British colonized parts of the Gold Coast largely through',

choice1: ' conquest',
choice2: ' persuasion',
choice3: ' bribery',
choice4: ' invitation',

answer: 1,

},

{ 

question: ' The outermost part of the earth is called the',

choice1: ' core',
choice2: ' mantle',
choice3: ' atmosphere',
choice4: ' crust',

answer: 4,

},

{ 

question: ' The Europeans came to the Gold Coast purposely to',

choice1: ' engage in trading activities',
choice2: ' spread the gospel',
choice3: ' explore the land',
choice4: ' establish schools',

answer: 3, 

},

{ 

question: ' The adoption of modern cultural practices enables a society to',

choice1: ' develop economically',
choice2: ' lead good moral lives',
choice3: ' abandon its traditional values',
choice4: ' respect individual human rights',

answer: 1,

},

{ 

question: ' The use of orthodox and traditional medicine for the treatment of the same disease is an example of',

choice1: ' outmoded culture',
choice2: ' cultural lag',
choice3: ' parallel culture',
choice4: ' cultural change',

answer: 3,

},

{ 

question: ' Water bodies on a physical map are represented by',

choice1: ' blue colour',
choice2: ' green colour',
choice3: ' yellow colour',
choice4: ' brown colour',

answer: 1,

},

{ 

question: ' The earth experiences equal day and equal night each year on',

choice1: ' 21st March and 23rd September',
choice2: ' 21st June and 23rd September',
choice3: ' 21st June and 22nd December',
choice4: ' 22nd March and 22nd December',

answer: 1,

},

{ 

question: ' Which of the following is a regional capital in Northern Ghana',

choice1: ' Navrongo',
choice2: ' Wa',
choice3: ' Bawku',
choice4: ' Yendi',

},

{answer: 2, 

question: ' Which of the following towns is noted for the production of gold in Ghana?',

choice1: ' Awaso',
choice2: ' Nsuta',
choice3: ' Prestea',
choice4: ' Akwatia',

answer: 3,

},

{ 

question: ' Free vaccines used for immunization in Ghana are supplied by the',

choice1: ' International Labour Organization',
choice2: ' World Health Organization',
choice3: ' Ministry of Health',
choice4: ' National Health Insurance Scheme',

answer: 2,

},

{ 

question: 'The main effect of the Trans-Atlantic Slave Trade is the reduction of',

choice1: ' capital resource',
choice2: ' human resource',
choice3: ' natural resource',
choice4: ' mineral resource',

answer: 2,

},

{ 

question: ' Governor Gordon Guggisberg is known to have established the',

choice1: ' Korle-Bu Hospital',
choice2: ' University of Ghana',
choice3: ' Mfantsipim School',
choice4: ' Cocoa Marketing Board',

answer: 2,

},

{ 

question: ' The main institution that helps the Executive arm of government to implement its policies is the',

choice1: ' Civil Service',
choice2: ' Judicial Service',
choice3: ' Audit Service',
choice4: ' Statistical Service',

answer: 1,

},

{ 

question: ' The West Coast of Africa is washed by the',

choice1: ' Pacific Ocean',
choice2: ' Antarctic Ocean',
choice3: ' Indian Ocean',
choice4: ' Atlantic Ocean',

answer: 4,

},

{ 

question: ' Private businesses can contribute to the development of the nation by',

choice1: ' registering their businesses',
choice2: ' purchasing expensive machines',
choice3: ' paying their taxes as required',
choice4: ' producing expensive goods',

answer: 3,

},

{ 

question: ' Floods can best be controlled in our communities through',

choice1: ' construction of boreholes',
choice2: ' planned layout',
choice3: ' harvesting of rainwater',
choice4: ' tarring of roads',

answer: 2, 

},

{ 

question: ' One effect of colonization is that it made Ghanaians to',

choice1: ' produce more food crops',
choice2: ' have one common language',
choice3: ' be self-reliant economically',
choice4: ' develop strong taste for foreign goods',

answer: 4,

},

{ 

question: ' Ghana co-operates with other countries to',

choice1: ' foster friendly relationships',
choice2: ' increase her level of tax revenue',
choice3: ' adopt a common code of conduct',
choice4: ' create more jobs for her citizens',

answer: 1,
},

{ 

question: ' The functions of a presiding member of a District Assembly are likened to those of the',

choice1: ' Clerk of Parliament',
choice2: ' Chief Justice',
choice3: ' Speaker of Parliament',
choice4: ' Appeal Court Judge',

answer: 3,

},

{ 

question: ' The world is divided into Northern and Southern Hemispheres by the',

choice1: ' Tropic of Cancer',
choice2: ' Tropic of Capricorn',
choice3: ' Equator',
choice4: ' Greenwich Meridian',

answer: 3,

},

{ 

question: ' Relief rainfall is also known as',

choice1: ' convectional rainfall',
choice2: ' frontal rainfall',
choice3: ' orographic rainfall',
choice4: ' cyclonic rainfall',

answer: 3,

},

{ 

question: 'Head of State in Ghana from 1957 to 1960 was',

choice1: ' Kwame Nkrumah',
choice2: ' Queen of Britain',
choice3: ' K. Busia',
choice4: ' Gordon Guggisberg',

answer: 2,

},

{ 

question: ' The Supreme Court of Ghana mainly',

choice1: ' runs courses for Judges and Magistrates',
choice2: ' remands criminals in prison custody',
choice3: ' interprets the constitution and laws for the country',
choice4: ' makes and implements laws in the country',

answer: 3,
 


},

{ 

question: ' Daboya is noted for the mining of',

choice1: ' salt',
choice2: ' gold',
choice3: ' diamond',
choice4: ' bauxite',

answer: 1

},

{ 

question: ' Which of the following is the best way of conserving Ghana’s forest cover?',

choice1: ' Promoting the use of charcoal',
choice2: ' Vigilance of forest guards',
choice3: ' Encouraging the replanting of trees',
choice4: ' Growing more cover crops',

answer: 3,

},

{ 

question: ' If a distance of 40 kilometres on land is represented by 10 centimetres on a map, what is the scale of the map?',

choice1: ' 1 centimetre to 2 kilometres',
choice2: ' 1 centimetre to 4 kilometres',
choice3: ' 1 centimetre to 5 kilometres',
choice4: ' 1 centimetre to 8 kilometres',

answer: 2,
},

{ 

question: ' Slaves who were sent to the West Indies worked on',

choice1: ' coconut plantations',
choice2: ' pineapple plantations',
choice3: ' banana plantations',
choice4: ' sugar-cane plantations',

answer: 4

},

{ 

question: ' The practice of checks and balances prevents',

choice1: ' dictatorship',
choice2: ' favouritism',
choice3: ' ethnicity',
choice4: ' sectionalism',

answer: 1,

},

{ 

question: ' Motivation and supervision help in the efficient use of',

choice1: ' human resources',
choice2: ' national resources',
choice3: ' mineral resources',
choice4: ' capital resources',

answer: 1,

},

{ 

question: ' The basic way of promoting savings habit among children is by',

choice1: ' adopting an insurance policy',
choice2: ' joining a credit union',
choice3: ' opening a current account',
choice4: ' providing money boxes',

answer: 4,

},

{ 

question: ' A credit union is an example of a',

choice1: ' joint stock company',
choice2: ' co-operative society',
choice3: ' partnership',
choice4: ' public corporation',

answer: 2,

},

{ 

question: ' The regular payments which individuals and organizations make to insurance companies are',

choice1: ' premiums',
choice2: ' salaries',
choice3: ' taxes',
choice4: ' wages',

answer: 1,

},

{ 

question: ' Indiscipline is a problem to the Ghanaian society because it',

choice1: ' reduces productivity',
choice2: ' destroys the educational system',
choice3: ' encourages bribery and corruption',
choice4: ' leads to high birth rate',

answer: 1,

},

{ 

question: ' Tourism in Ghana promotes the growth of the',

choice1: ' film industry',
choice2: ' hotel industry',
choice3: ' textile industry',
choice4: ' health industry',

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

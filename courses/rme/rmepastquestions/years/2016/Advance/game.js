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
  	question:'Joseph was hated by his brothers because',
  	choice1:'he was loved by his father very much',
	choice2:'he was gently and handsome',
	choice3:'Jacob promised him of inheritance',
	choice4:'of his prophetic dreams',
  	answer: 1
  },
  {	
  	question: 'One of the reasons why God created the sea is to',
	choice1: 'beautify the environment',
	choice2:'generate hydroelectric power',
	choice3:'provide habitat for some animals',
	choice4:'reduce soil erosion',
	answer: 3
  },
  {
  	question:'According to the Bible, heavenly bodies were created on the',
  	choice1:'third day',
	choice2:'fourth day',
	choice3:'fifth day',
	choice4:'sixth day',
  	answer: 2
  },
  {
  	question:'The omniscience of God portrays him as',
   	choice1:'all forgiving',
	choice2:'all knowing',
	choice3:'ever present',
	choice4:'very gracious',
  	answer: 2
  },
  {
  	question:'Who provided the tomb in which Jesus was buried?',
   	choice1:'Joseph of Arithmathea',
	choice2:'Nicodemus',
	choice3:'Simon of Cyrene',
	choice4:'Zebedee',
  	answer: 1
  },
  {
  	question: 'The second rightly guided Caliph in Islam was',
  	choice1:'Abu Bakr Al Saddiq',
	choice2:'Umar Ibn Al-Khattab',
	choice3:'Uthman Ibn Affan',
	choice4:'Ali Ibn Abu Talib',
		answer: 2
  },
  {
  	question: 'By facing the wild beast, Toha Zie',
 	choice1:'led his people to be defeated',
	choice2:'helped the poor',
	choice3:'preached peace to his people',
	choice4:'risked his life for his people',
		answer: 4
  },
  {
  	question: 'The teachings of Prophet Mohammed are found in the',
 	choice1:'Kalima',
	choice2:'Hadith',
	choice3:'Ijmah',
	choice4:'Sura',
		answer: 2
  },
  {
  	question: 'The Israelites were finally led to the land of Canaan by',
 	choice1:'Aaron',
	choice2:'Joseph',
	choice3:'Joshua',
	choice4:'Moses',
		answer: 3
  },
  {
  	question: 'Which of the following is a harvest festival?',
  	choice1:'Aboakyir',
	choice2:'Adae',
	choice3:'Homowo',
	choice4:'Hogbetsotso',
		answer: 3
  },
  {
  	question: 'Eid-ul-Adha is celebrated by Muslims to',
  	choice1:'mark Abraham’s sacrifice to Allah',
	choice2:'mark the end of Ramadan',
	choice3:'remember the birth of Mohammed',
	choice4:'remember the death of Mohommed',
		answer: 1
  },
  {
  	question: 'One reason for the institution of marriage is',
	choice1:'companionship',
	choice2:'joy',
	choice3:'responsibility',
	choice4:'security',
		answer: 1
  },
  {
  	question: 'The main cause of disease in our communities is',
  	choice1:'filth in our surroundings',
	choice2:'low income levels of workers',
	choice3:'poor eating habits of children',
	choice4:'traffic congestions in the cities',
		answer: 1
  },
  {
  	question: 'It is important to perform marriage rites because they',
  	choice1:'build mutual trust and understanding',
	choice2:'are requirements to observe',
	choice3:'prevent divorce in society',
	choice4:'seal the marriage',
		answer: 4
  },
  {
  	question: 'Which of the following people was not among the twelve disciples of Jesus?',
  	choice1:'James',
	choice2:'Matthew',
	choice3:'Paul',
	choice4:'Peter',
		answer: 3
  },
  {
  	question: 'Going round the K’aba is an Islamic religious activity done during the',
  	choice1:'Eid-ul-Adha',
	choice2:'Eid-ul-Fitr',
	choice3:'Hajj',
	choice4:'Ramadan',
		answer: 3
  },
  {
  	question: 'What is the second pillar of Islam?',
  	choice1:'Hajj',
	choice2:'Salat',
	choice3:'Sawn',
	choice4:'Zakat',
		answer: 2
  },
  {
  	question: 'In the traditional society, the dead is buried with money to ensure that the',
  	choice1:'deceased can pay the fare to the other world.',
	choice2:'deceased can pay the gods and ancestors for protection.',
	choice3:'spirit of the deceased does not attack family members.',
	choice4:'family members are blessed with riches',
		answer: 1
  },
  {
  	question: 'Traditional worshippers remember their ancestors by',
  	choice1:'calling their names always',
	choice2:'fasting and praying to them',
	choice3:'offering food and drinks to them',
	choice4:'singing of songs and praises',
		answer: 3
  },
  {
  	question: 'The most important prayer request during marriage rites is for',
  	choice1:'good health and protection',
	choice2:'long life and children',
	choice3:'prosperity and wealth',
	choice4:'protection and long life',
		answer: 2
  },
  {
  	question: 'Courtesy is a polite and acceptable way of',
  	choice1:'behaviour',
	choice2:'commitment',
	choice3:'obedience',
	choice4:'tolerance',
		answer: 1
  },
  {
  	question: 'The document given by school authorities about the character of a pupil is known as',
	choice1:'certificate',
	choice2:'price',
	choice3:'report',
	choice4:'testimonial',
		answer: 4
  },
  {
  	question: 'Muslims show commitment to Allah by',
  	choice1:'dressing modestly',
	choice2:'marrying four women',
	choice3:'observing all prescribed rituals',
	choice4:'visiting the mosque every day.',
		answer: 3
  },
  {
  	question: 'Individual can co-exist peacefully in a community if they',
  	choice1:'practice one another’s religion',
	choice2:'pray together',
	choice3:'respect one another',
	choice4:'share food together',
		answer: 3
  },
   {
  	question: 'The saying a child who knows how to wash his/her hands eats with the elderly means',
  	choice1:'children should eat with the elderly',
	choice2:'children should wash their hands well before eating',
	choice3:'that food is important for the growth of children',
	choice4:'that it pays to be well-behaved',
		answer: 4
  },
  {
  	question: 'Repentance promotes',
  	choice1:'community work',
	choice2:'good relationship',
	choice3:'healthy lifestyle',
	choice4:'successful job acquisition',
		answer: 2
  },
  {
  	question: 'People lead decent lives in order to',
  	choice1:'be praised for patriotism',
	choice2:'be seen as being kind',
	choice3:'promote peaceful living',
	choice4:'qualify to be an ancestor',
		answer: 3
  },
  {
  	question: 'Which of the following behaviours is an effect of drug abuse?', 
 	choice1:'Obedience',
	choice2:'Politeness',
	choice3:'Truancy',
	choice4:'Truthfulness',
		answer: 3
  },
  {
  	question: 'The maintenance of law and order in the nuclear family is the responsibility of the',
	choice1:'aunt',
	choice2:'uncle',
	choice3:'father',
	choice4:'child',
		answer: 3
  },
  {
  	question: 'A family made up of a father, wives and grandparents is described as',
  	choice1:'extended family',
	choice2:'monogamous family',
	choice3:'nuclear family',
	choice4:'polygamous family',
		answer: 1
  },
  {
  	question: 'People cherish the spirit of obedience because it',
	choice1:'enhances tolerance',
	choice2:'creates wealth',
	choice3:'promotes security',
	choice4:'promotes peace',
		answer: 3
  },
  {
  	question: 'Running errands for those in authority portrays the child to be',
	choice1:'honest',
	choice2:'humble',
	choice3:'obedient',
	choice4:'sincere',
		answer: 2
  },
  {
  	question: 'Laziness always leads to',
	choice1:'misunderstanding',
	choice2:'misuse of wealth',
	choice3:'sickness',
	choice4:'waste of time',
		answer: 4
  },
  {
  	question: 'Idleness means',
  	choice1:'enjoying siesta',
	choice2:'doing nothing',
	choice3:'having fun',
	choice4:'playing games',
		answer: 2
  },
  {
  	question: 'Which of the following behaviours is not a positive attitude to work?',		
  	choice1:'Hardwork',
	choice2:'Lateness',
	choice3:'Punctuality',
	choice4:'Truthfulness',
		answer: 2
  },
  {
  	question: 'Workers go on strike to',
 	choice1:'attend political rallies',
	choice2:'demand better conditions of service',
	choice3:'destroy company property',
	choice4:'have some rest',
		answer: 2
  },
  {
  	question: 'A corrupt practice common in offices in Ghana is',		
  	choice1:'armed robbery',
	choice2:'environmental degradation',
	choice3:'over-invoicing',
	choice4:'prostitution',
		answer: 3
  },
  {
  	question: 'The best way of handling money is by',		
  	choice1:'writing scripture words on it',
	choice2:'crumpling it into our pockets',
	choice3:'holding it with wet hands',
	choice4:'holding it with clean hands',
		answer: 4
  },
  {
  	question: 'The main aim of religious youth organizations is to',		
  	choice1:'become political forces in their communities',
	choice2:'educate the youth through moral teaching',
	choice3:'have inter-youth relations through competitions',
	choice4:'organize excursions to places of interest',
		answer: 2
  },
  {
  	question: 'The saying time is money means',
  	choice1:'luck comes with time',
	choice2:'money can be made with time',
	choice3:'opportunity lost cannot be recovered',
	choice4:'wealth can be acquired with patience.',
		answer: 3
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

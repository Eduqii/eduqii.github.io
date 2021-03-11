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
  	question:'Which of the following people was commanded by God to build an ark?',
  	choice1:'Joseph',
	choice2:'Jacob',
	choice3:'Noah',
	choice4:'David',
  	answer: 3
  },
  {	
  	question: ' Who gave the tomb in which Jesus was buried?',
	choice1: 'Simon of Cyrene',
	choice2:'Joseph of Arimathea',
	choice3:'Nicodemus',
	choice4:'Zebedee',
	answer: 2
  },
  {
  	question:'What is the second pillar of Islam?',
  	choice1:'Salat',
	choice2:'Sawm',
	choice3:'Zakat',
	choice4:'Hajj',
  	answer: 1
  },
  {
  	question:'On what occasion do Muslims perform the Janazah prayer?',  
  	choice1:'Before a Muslim travels',
	choice2:'After observing a fast',
	choice3:'During Friday worship',
	choice4:'When a Muslim dies',
  	answer: 4
  },
  {
  	question:'The main reason for the celebration of Odwira festival is for community',  	
  	choice1: 'development',
	choice2:'preservation',
	choice3:'purification',
	choice4:'re-organization',
  	answer: 3
  },
  {
  	question: 'Which of the following animals provides security to man?',		
  	choice1:'Goat',
	choice2:'Donkey',
	choice3:'Dog',
	choice4:'Cow',
		answer: 3
  },
  {
  	question: 'Puberty rites should be encouraged because it',	 
  	choice1:'links the youth into adulthood',
	choice2:'helps the youth to become rich',
	choice3:'promotes chastity among the youth',
	choice4:'makes the youth look more attractive',
		answer: 3
  },
  {
  	question: 'Which of the ten commandments instructs Christians to be content with what they have?',
	choice1:'First',
	choice2:'Fourth',
	choice3:'Eighth',
	choice4:'Tenth',
		answer: 4
  },
  {
  	question: 'Which of the following parables of Jesus teaches forgiveness? The',		
  	choice1:'unjust steward',
	choice2:'rich fool',
	choice3:'good Samaritan',
	choice4:'prodigal son',
		answer: 4
  },
  {
  	question: 'Christians who are persecuted for the sake of righteousness are blessed because',
	choice1:'God will be merciful to them',
	choice2:'God’s kingdom belongs to them',
	choice3:'they shall be comforted',
	choice4:'they shall see God',
		answer: 2
  },
  {
  	question: 'Going round the Kaba is an Islamic religious activity done during',		
  	choice1:'Eid-ul-Adha',
	choice2:'Eid-ul-Fitr',
	choice3:'Hajj',
	choice4:'Ramadan',
		answer: 3
  },
  {
  	question: 'Which Islamic prayer is observed at sunset?',
	choice1:'Janazah',
	choice2:'Tarawih',
	choice3:'Isha',
	choice4:'Maghrib',
		answer: 4
  },
  {
  	question: 'Traditionalists pray by means of',		
  	choice1:'music and dance',
	choice2:'spirit possession',
	choice3:'pouring libation',
	choice4:'divination',
		answer: 3
  },
  {
  	question: 'In African Traditional Religion, the living dead are referred to as',		
  	choice1:'bad spirits',
	choice2:'witch doctors',
	choice3:'ancestors',
	choice4:'mediums',
		answer: 3
  },
  {
  	question: 'One of the reasons for which God created the sea is to',		
  	choice1:'generate hydro-electric power',
	choice2:'reduce soil erosion',
	choice3:'beautify the environment',
	choice4:'provide habitat for some animals',
		answer: 4
  },
  {
  	question: 'The most important rite in Christian sacramental worship is the',		
  	choice1:'taking of the holy communion',
	choice2:'reading of the old testament',
	choice3:'reading of the new testament',
	choice4:'collection of offertory and tithe',
		answer: 1
  },
  {
  	question: 'God is called Nyame among the Akans because He is the',		
  	choice1:'Creator',
	choice2:'Dependable',
	choice3:'Ever-living',
	choice4:'Supreme Being',
		answer: 2
  },
  {
  	question: 'Egya Ahor is fondly remembered by the Fante for',		
  	choice1:'his miraculous powers',
	choice2:'commanding the golden stool',
	choice3:'his resurrection from death',
	choice4:'saving his people',
		answer: 4
  },
  {
  	question: 'Eid-ul-Adha is celebrated by Muslims to',		
  	choice1:'mark Abraham’s sacrifice to Allah',
	choice2:'remember the death of Muhammed',
	choice3:'mark the end of Ramadan',
	choice4:'remember the birth of Muhammed',
		answer: 1
  },
  {
  	question: 'Which of the following is considered when choosing a name for a new born child?',
	choice1:' The weight of the child',
	choice2:'Tribe of the parents',
	choice3:'Age of the mother',
	choice4:'The baby’s place of birth',
		answer: 2
  },
  {
  	question: 'People cherish the spirit of obedience because it',		
  	choice1:'enhances tolerance',
	choice2:'promotes peace',
	choice3:'creates wealth',
	choice4:'promotes security',
		answer: 2
  },
  {
  	question: 'Muslims show their commitment to Allah by',		
  	choice1:'dressing modestly',
	choice2:'visiting the mosque everyday',
	choice3:'marrying four women',
	choice4:'observing all prescribed rituals',
		answer: 4
  },
  {
  	question: 'Which of the following is an act of good deed?',		
  	choice1:'Giving one’s seat to the elderly',
	choice2:'Receiving a testimonial',
	choice3:'Participating in sporting activities',
	choice4:'Ability to perform one’s assignment',
		answer: 1
  },
  {
  	question: 'Individuals can co-exist peacefully in a community if they',		
  	choice1:' practice each other’s religion',
	choice2:'pray together',
	choice3:'respect each other',
	choice4:'share food together',
		answer: 3
  },
  {
  	question: 'A student must dress decently because it',		
  	choice1:'is a mark of intelligence',
	choice2:'shows respect and politeness',
	choice3:'enables one to gain favour from others',
	choice4:'helps one to obey school rules',
		answer: 2
  },
  {
  	question: 'Someone who is respectful and polite is said to be',		
  	choice1:'courteous',
	choice2:'kind',
	choice3:'chaste',
	choice4:'moral',
		answer: 1
  },
  {
  	question: 'Punishments are meant to',		
  	choice1:'disorganize the offender',
	choice2:'calm the offender',
	choice3:'hurt the offender',
	choice4:'reform the offender',
		answer: 4
  },
  {
  	question: 'Which of the following is a moral value cherished in Ghanaian society?',		
  	choice1:'Service',
	choice2:'Honesty',
	choice3:'Tolerance',
	choice4:'Pride',
		answer: 2
  },
  {
  	question: 'To live a chaste life, one must',		
  	choice1:'attend church service regularly',
	choice2:'be obedient to teachers',
	choice3:'work hard to become rich',
	choice4:'avoid casual sex',
		answer: 4
  },
  {
  	question: 'Which of the following is not a method of preventing teenage pregnancy?',		
  	choice1:'Sex education',
	choice2:'Good parental care',
	choice3:'Peer pressure',
	choice4:'Avoiding pre-marital sex',
		answer: 3
  },
  {
  	question: 'Good behaviour is exhibited by',
	choice1:'staring at elders',
	choice2:'doing what is right',
	choice3:'always studying the scriptures',
	choice4:'praying and fasting',
		answer: 2
  },
  {
  	question: 'Money is used wisely when',		
  	choice1:'things are bought on credit',
	choice2:'it is spent on expensive things',
	choice3:'it is spent on things budgeted for',
	choice4:'it is spent on poor people',
		answer: 3
  },
  {
  	question: 'Showing respect and obedience to school authority ensures',		
  	choice1:'repentance and forgiveness',
	choice2:'peaceful co-existence',
	choice3:'success in examination',
	choice4:'humility and hard work',
		answer: 2
  },
  {
  	question: 'A nuclear family begins when',		
  	choice1:'parents live with siblings',
	choice2:'parents ignore their relations',
	choice3:'couples get legally married',
	choice4:'couples have many siblings',
		answer: 3
  },
  {
  	question: 'Saving money helps the individual to',		
  	choice1:'plan for the future',
	choice2:'become rich overnight',
	choice3:'attend school regularly',
	choice4:'make more friends',
		answer: 1
  },
  {
  	question: 'The ant is usually used as a symbol of',		
  	choice1:'love',
	choice2:'commitment',
	choice3:'hard work',
	choice4:'unity',
		answer: 3
  },
  {
  	question: 'Which of the following functions is performed by Asafo companies?',		
  	choice1:'Acting as watchdogs',
	choice2:'Registration of foreigners',
	choice3:'Collection of taxes',
	choice4:'Collecting Rubbish',
		answer: 1
  },
  {
  	question: 'Which of the following activities best offers relaxation?',		
  	choice1:'Painting',
	choice2:'Eating',
	choice3:'Running',
	choice4:'Reading',
		answer: 4
  },
  {
  	question: 'Religious Youth Organization are established to',		
  	choice1:'honour their leaders',
	choice2:'carry out communal labour',
	choice3:'help protect the natural environment',
	choice4:'defend the interest of the society',
		answer: 4
  },
  {
  	question: 'Work done to earn income can be described as',
	choice1:'home work',
	choice2:'community work',
	choice3:'occupational work',
	choice4:'school work',
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

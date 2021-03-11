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
  	question:'The belief that God sees the secret deeds of all and punishes those who do evil implies that He is',
  	choice1:'Omniscient',
	choice2: 'Omnipotent',
	choice3: 'Omnipresent',
	choice4: 'Sovereign',
  	answer: 3,
  },
  {	
  	question: 'The outpouring of the Holy Spirit on Christians is marked by the',
	choice1:'Ascension',
	choice2:  'Resurrection',
	choice3:  'Pentecost',
	choice4:  'Passover',
	answer: 3,
  },
  {
  	question:'The congregational prayers observed by Muslims on Friday is',
  	choice1:'Eid',
	choice2: 'Jumuah',
	choice3: 'Janazah',
	choice4: 'Zuhr',
  	answer: 2,
  },
  {
  	question:'Adam described Eve as woman because she',  	
  	choice1:'was the mother of all living',
	choice2:  'was made out of his rib',
	choice3:  'allowed the serpent to deceive her',
	choice4:  'was made a helper fit for man',
  	answer: 2,
  },
  {
  	question:'Islam shows a concern for the poor and needy by practicing',  	
  	choice1:'Zawn',
	choice2:  'Zakat',
	choice3:  'Salat',
	choice4:  'Kalimat',
  	answer: 2,
  },
  {
  	question: 'Marriages have a good chance to succeed if the',		
  	choice1: 'man has much money to cater for the wife',
	choice2: 'woman is very beautiful',
	choice3:  'couple understands each other',
	choice4:  'couple is from the same town',
		answer: 3,
  },
  {
  	question: '“Blessed are the peacemakers for they shall',	 
  	choice1:  'see God”',
	choice2:  'be called sons of God”',
	choice3:   'inherit the earth”',
	choice4:   'obtain mercy”',
		answer: 2,
  },
  {
  	question: 'The name Moses means',		
  	choice1:  'washed in water',
	choice2:  'drawn out of water',
	choice3:   'abandoned in water',
	choice4:   'baptized with water',
		answer: 2,
  },
  {
  	question: 'The Hogbetsotso festival is celebrated to mark the',		
  	choice1: 'death of King Agokorli',
	choice2: 'end of the farming season',
	choice3:  'migration of the Anlo',
	choice4:  'end of famine among the Anlo',
		answer: 3,
  },
  {
  	question: 'The Fajr Salat is observed at',		
  	choice1: 'dawn',
	choice2: 'noon',
	choice3:  'night',
	choice4:  'sunset',
		answer: 1,
  },
  {
  	question: 'Christians share a common belief that',		
  	choice1: 'the Holy Spirit works with fire',
	choice2: 'trust in Jesus Christ brings eternal life',
	choice3:  'one should pray to God directly',
	choice4:  'one who suffers in life will go to heaven',
		answer: 2,
  },
  {
  	question: 'The parable of the prodigal son teaches that one',
		choice1: 'needs repentance for forgiveness',
	choice2: 'needs to be watchful and loving',
	choice3:	  'must be faithful and prayerful',
	choice4:	  'must be committed and hardworking',
		answer: 1,
  },
  {
  	question: 'An important religious value of traditional festivals is to',		
  	choice1: 'acknowledge the presence of the ancestors',
	choice2: 'settle disputes among families',
	choice3:  'contract marriages',
	choice4:  'bring citizens together to sacrifice',
		answer: 1,
  },
  {
  	question: ' The dream of Joseph about the sun, moon and eleven stars meant that he would',
		choice1: 'be sold into slavery by his brothers',
	choice2: 'be hated by his brothers',
	choice3:	  'rule over his family',
	choice4:	  'become a seer one day',
		answer: 3,
  },
  {
  	question: 'The rainbow is important in the story of Noah because, it',		
  	choice1: 'normally appears after rainfall',
	choice2: 'is a symbol of God’s covenant',
	choice3:  'appears in the horizon in colours',
	choice4:  'marked the beginning of the flood',
		answer: 2,
  },
  {
  	question: 'One of the ways of protecting God’s creation is by',		
  	choice1: 'constructing buildings and roads',
	choice2: 'polluting air and water bodies',
	choice3:  'engaging in sound farming practices',
	choice4:  'killing snakes and other dangerous animals',
		answer: 3,
  },
  {
  	question: 'The Islamic institution for reducing poverty is',		
  	choice1: 'Zakat',
	choice2: 'Salat',
	choice3:  'Sawn',
	choice4:  'Hajj',
		answer: 1,
  },
  {
  	question: 'The following practices apply to Traditional Religion except',		
  	choice1: 'libation',
	choice2: 'fasting',
	choice3:  'prayers',
	choice4:  'sacrifices',
		answer: 2,
  },
  {
  	question: 'Which of the following disciples of Jesus were brothers?',		
  	choice1: 'John and James',
	choice2: 'Joseph and John',
	choice3:  'Peter and Andrew',
	choice4:  'Judas and Thomas',
		answer: 1,
  },
  {
  	question: 'The use of sand in the absence of water by a Muslim for purification is',		
  	choice1: 'Taharah',
	choice2: 'Tashahhud',
	choice3:  'Tayammum',
	choice4:  'Takbir',
		answer: 3,
  },
  {
  	question: 'A major reason for establishing a traditional youth organization is to',		
  	choice1: 'defend the interest of the community',
	choice2: 'protect ancestors and the gods',
	choice3:  'embark on educational tours',
	choice4:  'fight those who destroy the environment',
		answer: 1,
  },
  {
  	question: 'Behaviour patterns of individuals approved by society are known as',		
  	choice1: 'rituals',
	choice2: 'moral values',
	choice3:  'taboos',
	choice4:  'sacrament',
		answer: 2,
  },
  {
  	question: ' School rules are meant to ensure',		
  	choice1: 'punishment for school children',
	choice2: 'patriotism among children',
	choice3:  'competition among children',
	choice4:  'good behaviour of children',
		answer: 4,
  },
  {
  	question: 'A person who is sincere and upright in his/her ways is said to be',		
  	choice1: 'generous',
	choice2: 'tolerant',
	choice3:  'honest',
	choice4:  'grateful',
		answer: 3,
  },
  {
  	question: 'Which of the following is responsible for morality in traditional society?',		
  	choice1: 'Linguist',
	choice2: 'Gong gong beater',
	choice3:  'Chief priest',
	choice4:  'Fortune teller',
		answer: 3,
  },
  {
  	question: 'A father shows commitment to the family by',		
  	choice1: 'being punctual at work and helping others',
	choice2: 'travelling with wife outside the country',
	choice3:  'being steadfast at prayer and sacrificing',
	choice4:  'treating all dependants with patience and tolerance',
		answer: 4,
  },
  {
  	question: 'Which of the following is an effect of drug abuse?',		
  	choice1: 'Obedience',
	choice2: 'Truancy',
	choice3:  'Politeness',
	choice4:  'Truthfulness',
		answer: 2,
  },
  {
  	question: 'The best way to live in peace in a community is to',		
  	choice1: 'disagree with your enemies',
	choice2: 'sit on the fence',
	choice3:  'understand and co-operate with others',
	choice4:  'enter into conflict with your neighbours',
		answer: 3,
  },
  {
  	question: 'It is a bad habit to use one’s leisure time in',		
  	choice1: 'playing games',
	choice2: 'telling stories',
	choice3:  'reading story books',
	choice4:  'gossiping about friends',
		answer: 4,
  },
  {
  	question: 'It is our responsibility to prevent the spread of cholera by',
	choice1: 'immunizing against the six killer diseases',
	choice2: 'eating a balanced diet',
	choice3:	 'keeping our surroundings clean',
	choice4:	 'taking good care of our wounds',
		answer: 3,
  },
  {
  	question: 'A child who apologizes for committing an offence is said to be',
		choice1: 'knowledgeable',
	choice2: 'intelligent',
	choice3:	  'law abiding',
	choice4:	  'obedient',
		answer: 2,
  },
  {
  	question: '“A child breaks the shell of a snail but not that of the tortoise” This implies that one should',
		choice1: 'work hard',
	choice2: 'be afraid of tortoise',
	choice3:	  'not be over ambitious',
	choice4:	  'be kind to animals',
		answer: 3,
  },
  {
  	question: 'A person is regarded as tolerant when the person is',
		choice1: 'hardworking',
	choice2: 'brilliant',
	choice3:	  'truthful',
	choice4:	  'patient',
		answer: 4,
  },
  {
  	question: 'To live a chaste life, one must',		
  	choice1: 'speak the truth',
	choice2: 'be humble',
	choice3:  'avoid casual sex',
	choice4:  'be courageous',
		answer: 3,
  },
  {
  	question: 'Which of the following is a symptom of Acquired Immune Deficiency Syndrome (AIDS)?',
		choice1: 'Strong pains in the abdomen',
	choice2: 'Rapid loss of weight',
	choice3:	  'Sleeping very often',
	choice4:	  'Suffering from the waist',
		answer: 2,
  },
  {
  	question: 'Repeating a bad deed shows that one',		
  	choice1: 'has realized and accepted a fault',
	choice2: 'is determined to ask for pardon',
	choice3:  'wants another opportunity to make amends',
	choice4:  'has not regretted',
		answer: 4,
  },
  {
  	question: 'Giving money to a person to influence a decision is',		
  	choice1: 'corruption',
	choice2: 'cheating',
	choice3:  'bribery',
	choice4:  'embezzlement',
		answer: 3,
  },
  {
  	question: 'All the following are teachers’ responsibilities towards their pupils except',
		choice1: 'ensuring discipline',
	choice2: 'making themselves approachable',
	choice3:	  'inviting parents of troublesome children',
	choice4:	  'feeding hungry pupils at school',
		answer: 4,
  },
  {
  	question: 'A happy and prosperous life depends on',		
  	choice1: 'obedience',
	choice2: 'hard work',
	choice3:  'respect',
	choice4:  'courage',
		answer: 2,
  },
  {
  	question: 'The first thing to do when you enter a house is to',		
  	choice1: 'offer greetings',
	choice2: 'ask for water',
	choice3:  'ask for a seat',
	choice4:  'remove your sandals',
		answer: 1,
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

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
  	question:'The power of God is seen in His',
  	choice1:'omniscience',
	choice2:'omnipotence',
	choice3:'omnipresence',
	choice4:'omnivorous',
  	answer: 2
  },
  {	
  	question: 'According to the Bible, God commanded the earth to produce plants on the',
	choice1:'first day',
	choice2:'third day',
	choice3:'fifth day',
	choice4:'sixth day',
	answer: 2
  },
  {
  	question:'Which of the following options is not a reason for which we must care for God’s creation?',
  	choice1:'It makes us righteous people',
	choice2:'To show respect for God’s gift of nature',
	choice3:'To preserve it for future generation',
	choice4:'We are stewards of God’s creation',
  	answer: 1
  },
  {
  	question:'Sadique in Islam means',
  	choice1:'courageous',
	choice2:'patience',
	choice3:'righteous',
	choice4:'truthful',
  	answer: 4
  },
  {
  	question:'The holy pilgrimage to Makkah by Muslims is known as',
  	choice1: 'Hajj',
	choice2:'Ijma',
	choice3:'Ru’ya',
	choice4:'Salat',
  	answer: 1
  },
  {
  	question: 'The first Muezzin was',
 	choice1:'Ali',
	choice2:'Bilal',
	choice3:'Ibrahim',
	choice4:'Musah',
		answer: 2
  },
  {
  	question: 'Moses led the Israelites through the wilderness for',
	choice1:'forty months',
	choice2:'forty years',
	choice3:'fifty months',
	choice4:'fifty years',
		answer: 2
  },
  {
  	question: 'Egya Ahor is fondly remembered by the Fante for',
	choice1:'commanding the Golden Stool',
	choice2:'his miraculous powers',
	choice3:'his resurrection from death',
	choice4:'saving his people',
		answer: 4 
  },
  {
  	question: 'The parable of Jesus that teaches forgiveness is the',
	choice1:'unjust steward',
	choice2:'rich fool',
	choice3:'Good Samaritan',
	choice4:'Prodigal Son',
		answer: 4
  },
  {
  	question: 'Which of the following celebrations signifies the salvation of all Christians?',
	choice1:'Christmas',
	choice2:'Easter',
	choice3:'Palm Sunday',
	choice4:'Pentecost',
		answer: 2
  },
  {
  	question: 'The food offered the ancestors during the Adae festival is meant to',
	choice1:'drive witches away from the society',
	choice2:'bring development to the state',
	choice3:'secure protection for the chief',
	choice4:'unite the living with the dead',
		answer: 4
  },
  {
  	question: 'It is our responsibility to prevent the spread of cholera by',
	choice1:'eating a balance diet',
	choice2:'keeping our surroundings clean',
	choice3:'taking good care of our bodies',
	choice4:'immunizing against the six killer diseases',
		answer: 2
  },
  {
  	question: 'Both Islamic and Traditional religions accept',
	choice1:'polyandry',
	choice2:'polygamy',
	choice3:'the use of incense',
	choice4:'the five daily prayers',
		answer: 2
  },
  {
  	question: 'The growth of hairs in the armpit is a sign of',
	choice1:'motherhood',
	choice2:'pregnancy',
	choice3:'puberty',
	choice4:'respect',
		answer: 3
  },
  {
  	question: 'On what occasion do Muslims perform the Janazah prayer?',
	choice1:'After observing fast',
	choice2:'Before a Muslim travels',
	choice3:'During Friday worship',
	choice4:'When a Muslim dies',
		answer: 4
  },
  {
  	question: 'Which traditional prayer is offered when a vow or a pledge is fulfilled?',
	choice1:'Intercessory',
	choice2:'Supplication',
	choice3:'Thanksgiving',
	choice4:'Votive',
		answer: 4
  },
  {
  	question: 'Which Islamic prayer is observed at sunset?',
	choice1:'Isha',
	choice2:'Janazeh',
	choice3:'Maghrib',
	choice4:'Tarawib',
		answer: 3
  },
  {
  	question: 'The act of going round the Ka’bah seven times during Hajj teaches',
	choice1:'bravery',
	choice2:'endurance',
	choice3:'fairness',
	choice4:'tolerance',
		answer: 2
  },
  {
  	question: 'The Eucharist in Christian worship refers to',
	choice1:'prayer of thanksgiving',
	choice2:'preaching of sermon',
	choice3:'payment of tithe',
	choice4:'the Holy Communion',
		answer: 4
  },
  {
  	question: 'An individual who is respectful and polite is said to be',
	choice1:'chaste',
	choice2:'courteous',
	choice3:'kind',
	choice4:'moral',
		answer: 2
  },
  {
  	question: 'To live a chaste life, one must',
	choice1:'attend church regularly',
	choice2:'avoid casual sex',
	choice3:'be obedient to teachers',
	choice4:'work hard to become rich',
		answer: 2
  },
  {
  	question: 'HIV/AIDS affect the society mostly by the',
  	choice1:'acquisition of more drugs',
	choice2:'reduction in workforce',
	choice3:'reduction in death rates',
	choice4:'training of more doctors',
		answer: 2
  },
  {
  	question: 'Putting one"s interest above that of others results in',
	choice1:'conflict',
	choice2:'patriotism',
	choice3:'selflessness',
	choice4:'tolerance',
		answer: 1
  },
  {
  	question: 'The main teaching of the Ten Commandments is',
	choice1:'courtesy',
	choice2:'kindness',
	choice3:'love',
	choice4:'patience',
		answer: 3
  },
  {
  	question: 'In traditional societies, rules used to control the behaviour of members are known as',
	choice1:'ancestral rites',
	choice2:'puberty rites',
	choice3:'taboos',
	choice4:'abominations',
		answer: 3
  },
  {
  	question: 'Repentance is an act that', 
  	choice1:'delivers us from enemies',
	choice2:'drives us away from peers',
	choice3:'purifies our character',
	choice4:'satisfies God’s demands',
		answer: 3
  },
  {
  	question: 'When a person repents from bad deeds, he or she always receives',
	choice1:'forgiveness',
	choice2:'freedom',
	choice3:'promotion',
	choice4:'punishment',
		answer: 4
  },
  {
  	question: 'Authority is instituted in society to ensure',
	choice1:'freedom of speech',
	choice2:'peace and order',
	choice3:'respect for adults',
	choice4:'the right to vote',
		answer: 2
  },
  {
  	question: 'The best way to live in peace in a community is to',
	choice1:'remain neutral',
	choice2:'sit on the fence',
	choice3:'offer special gifts to friends in school',
	choice4:'understand and co-operate with others',
		answer: 4
  },
  {
  	question: 'Which of the following activities is not a responsibility of a family head?',
	choice1:'Giving loan to people',
	choice2:'Settling disputes among people',
	choice3:'Ensuring the wellbeing of the people',
	choice4:'Taking custody of family property',
		answer: 1
  },
  {
  	question: 'A child who refuses to play with bad friends is said to be',
	choice1:'faithful',
	choice2:'obedient',
	choice3:'polite',
	choice4:'sincere',
		answer: 2
  },
  {
  	question: 'Tidying the school compound is the child"s',
 	choice1:'commitment',
	choice2:'behaviour',
	choice3:'loyalty',
	choice4:'role',
		answer: 4
  },
  {
  	question: 'Refusal to follow medical prescription may lead to',
	choice1:'disrespect for authority',
	choice2:'failure in life',
	choice3:'reduction in wealth',
	choice4:'substance abuse',
		answer: 4
  },
  {
  	question: 'Which of the following factors is a benefit of hard work?',
  	choice1:'Becoming financially sound',
	choice2:'Becoming popular in town',
	choice3:'Building the body size',
	choice4:'Having time for leisure',
		answer: 1
  },
  {
  	question: 'A home where members learn their religion through oral sources is known as',
	choice1:'Christian',
	choice2:'Islamic',
	choice3:'Traditional',
	choice4:'Jewish',
		answer: 3
  },
  {
  	question: 'Work done to earn income can be described as',
	choice1:'community work',
	choice2:'home work',
	choice3:'occupational activity',
	choice4:'school work',
		answer: 3
  },
  {
  	question: 'Carrying out assigned duties is necessary because it',
	choice1:'attracts hatred from enemies',
	choice2:'leads to fulfilment of promises',
	choice3:'leads to pacification of the gods',
	choice4:'pleases God and human kind',
		answer: 4
  },
  {
  	question: 'School rules help pupils to',
	choice1:'avoid being punished',
	choice2:'compete with one another',
	choice3:'protect properties all the time',
	choice4:'worship God regularly',
		answer: 1
  },
  {
  	question: 'C.Y.O. as a religious youth group stands for',
  	choice1:'Catechist Youth Organization',
	choice2:'Catholic Youngmen Organization',
	choice3:'Christian Youngmen Organization',
	choice4:'Catholic Youth Organization',
		answer: 4
  },
  {
  	question: 'Religious youth associations foster peace among its members by',
	choice1:'being law abiding',
	choice2:'caring for the sick',
	choice3:'causing the arrest of offenders',
	choice4:'worshipping and praying',
		answer: 1
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

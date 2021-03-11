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
  	question:'Traditional worshippers believe that the world was created by',
  	choice1:'An Ancestor',
	choice2:'An Angel',
	choice3:'A Lesser god',
	choice4:'A supreme being',
  	answer: 4
  },
  {	
  	question: 'Plants were created by God mainly to',
	choice1:'Serve as a means of transportation',
	choice2:'Blow fresh air into our rooms',
	choice3:'Provide oxygen for man',
	choice4:'Provide decoration to homes',
	answer: 3
  },
  {
  	question:'Muslims describe Allah as Al- Raheem because, He is',
  	choice1:'merciful',
	choice2:'All-Knowing',
	choice3:'Just',
	choice4:'The restorer',
  	answer: 1
  },
  {
  	question:'The attribute Alpha and Omega reveals that God is',
  	choice1: 'Everywhere all the time',
	choice2:'Holy and immortal',
	choice3:'The beginning and the end',
	choice4:'Gracious and merciful',
  	answer:3
  },
  {
  	question:'Abraham built an altar for the Lord at the Oak of Moreh because',
  	choice1: 'It was a Canaanite worship centre',
	choice2:'God had appeared to him there',
	choice3:'He wanted to worship God there',
	choice4:'God asked him to do so',
  	answer: 2
  },
  {
  	question: 'The spiritual leader who was also a successor of Prophet Mohammed (SAW) was',
  	choice1:'Sheik',
	choice2:'Caliph',
	choice3:'Imam',
	choice4:'Hafiz',
		answer: 2
  },
  {
  	question: 'Egya Ahor was honoured with the Ahobaa festival because of his',
 	choice1:'Good Leadership',
	choice2:'Magical Deed',
	choice3:'Killing of the beast',
	choice4:'Death for the land',
		answer: 4
  },
  {
  	question: 'Toha Zie became famous because',
	choice1:'He was considered as a god',
	choice2:'Of his exploits in war',
	choice3:'He was a hunter',
	choice4:'He saved his people from beasts',
		answer: 4
  },
  {
  	question: 'The day Jesus rose from the dead is celebrated by Christians as',
	choice1:'Ascension Day',
	choice2:'Pentecost Day',
	choice3:'Good Friday',
	choice4:'Easter Sunday',
		answer: 4
  },
  {
  	question: 'The Bugum festival of Dagbon is also referred to as the',
	choice1:'Totem Festival',
	choice2:'Yam festival',
	choice3:'Rice festival',
	choice5:'Fire festival',
		answer: 4
  },
  {
  	question: 'The moral virtue revealed in the Islamic festival of Eid-ul-Adha is',
	choice1:'Obedience',
	choice2:'Steadfastness',
	choice3:'Love',
	choice4:'Honesty',
		answer: 1
  },
  {
  	question: 'Puberty is a period of passage from',
	choice1:'Conception to birth',
	choice2:'Childhood to adulthood',
	choice3:'Adulthood to death',
	choice4:'Birth to early childhood',
		answer: 2
  },
  {
  	question: 'A strong emotional change noticeable among adolescents is',
	choice1:'intelligence',
	choice2:'selfishness',
	choice3:'rebellion',
	choice4:'obedience',
		answer: 3
  },
  {
  	question: 'Which of the following traditional practices can dehumanize the individual?',
	choice1:'widowhood rites',
	choice2:'festival rituals',
	choice3:'funeral rites',
	choice4:'libation prayers',
		answer: 1
  },
  {
  	question: 'Islamic practice of worship (Ibada) is based on the',
	choice1:'Six teachings of Uthman',
	choice2:'Nine rackets of salat',
	choice3:'five pillars of islam',
	choice4:'seven events of hajj',
		answer: 3
  },
  {
  	question: 'The word Amen is useful in Christian and Islamic prayers because it',
	choice1:'Ensures confidence in the prayer',
	choice2:'Reveals God’s promises',
	choice3:'Attracts blessing to people',
	choice4:'Enforces the request',
		answer: 1
  },
  {
  	question: 'Which group of believers usually conclude their prayers with a curse?',
	choice1:'Traditionalists',
	choice2:'Muslims',
	choice3:'Buddhists',
	choice4:'Christians',
		answer: 1
  },
  {
  	question: 'The practice of throwing stones during hajj is to',
	choice1:'Achieve goals for the pilgrimage',
	choice2:'Protect Muslims from death',
	choice3:'Open the way to prosperity',
	choice4:'Keep the devil away',
		answer: 4
  },
  {
  	question: 'Ablution before salat ensures',
	choice1:'Receipt of prayer request',
	choice2:'Purity in communion with Allah',
	choice3:'Peace with Allah always',
	choice4:'Health sanitation in the community',
		answer: 2
  },
  {
  	question: 'A child is said to be courteous when he or she',
	choice1:'Offers gifts to friends',
	choice2:'Converses with adults',
	choice3:'Is admired by the peers',
	choice4:'Gives help to the needy',
		answer: 4
  },
  {
  	question: 'When provoked, one needs to control tempers by showing',
	choice1:'Decency',
	choice2:'Courtesy',
	choice3:'Comportment',
	choice4:'Dignity',
		answer: 3
  },
  {
  	question: 'A chaste life can be attained through',
 	choice1:'Intensive book reading',
	choice2:'Eating a vegetarian diet',
	choice3: 'The practice of self-discipline',
	choice4:'Regular church attendance',
		answer: 3
  },
  {
  	question: 'Which of the following situations is an effect of immorality?',
	choice1:'Humble life',
	choice2:'Focus in life',
	choice3:'Teenage pregnancy',
	choice4:'Peer Influence',
		answer: 3
  },
  {
  	question: 'Jesus advised mankind in the parable of the good Samaritan not to',
	choice1:'Violently rob people',
	choice2:'Neglect the sick',
	choice3:'Discriminate against people',
	choice4:'Beat up enemies',
		answer: 3
  },
  {
  	question: 'Lazy people get old very fast. This means that hard work brings about',
	choice1:'Great wealth',
	choice2:'Comfort',
	choice3:'Development',
	choice4:'Good health',
		answer: 4
  },
  {
  	question: 'A person is said to be righteous when he or she',
  	choice1:'Accept different viewpoints',
	choice2:'Tries to be loving and holy',
	choice3:'Attends religious meetings',
	choice4:'Lives a morally good life',
		answer: 4
  },
  {
  	question: 'The Qur’an teaches that anyone who does not show mercy will not',
	choice1:'Go To heaven',
	choice2:'Enter the mosque',
	choice3:'Live a peaceful life',
	choice4:'Be shown mercy',
		answer: 4
  },
  {
  	question: 'Commitment to God involves the show of',
	choice1:'Humility and hope',
	choice2:'Courage and love',
	choice3:'Respect and compassion',
	choice4:'Faith and obedience',
		answer: 4
  },
  {
  	question: 'Good deeds are performed so that',
	choice1:'Society will expand',
	choice2:'God’s command might be fulfilled',
	choice3:'People might be helped',
	choice4:'Gifts might be received',
		answer: 3
  },
  {
  	question: 'The main aim of a reward is to',
	choice1:'Accept our duties and responsibilities',
	choice2:'Help the poor out of their problems',
	choice3:'Reinforce the habit of repeating goods deeds',
	choice4:'Encourage people to speak good English',
		answer: 3
  },
  {
  	question: 'Which of the following conditions is not a fruit of repentance?',
	choice1:'Prosperity',
	choice2:'Love',
	choice3:'Peace',
	choice4:'Forgiveness',
		answer: 1
  },
  {
  	question: 'A father shows commitment to the family by',
 	choice1:'Traveling with his wife outside the country',
	choice2:'Being punctual at work and helping others',
	choice3:'Being steadfast at prayer and sacrificing',
	choice4:'Treating dependants with patience and tolerance',
		answer: 4
  },
  {
  	question: 'The nuclear family system consists of',
	choice1:'Parents and children',
	choice2:'Siblings and cousins',
	choice3:'Grandparents and children',
	choice4:'Parents and cousins',
		answer: 1
  },
  {
  	question: 'Which of the following statement is not true about the extended family system?',
 	choice1:'Parents, children and uncles are members',
	choice2:'Grandparents nephews and children are members',
	choice3:'All members come from the same mother',
	choice4:'Nuclear family members and the aged uncles are members',
		answer: 3
  },
  {
  	question: 'The Akans believe that their sacred stool is the abode of the',
	choice1:'Supreme being',
	choice2:'Dwarfs',
	choice3:'Lesser gods',
	choice4:'Ancestors',
		answer: 4
  },
  {
  	question: 'Which of the following objects can be found in an Islamic religious home?',
	choice1:'Cross',
	choice2:'Rosary',
	choice3:'Amulet',
	choice4:'Tasba',
		answer: 4
  },
  {
  	question: 'To succeed in academic work the individual needs to engage in serious',
	choice1:'Prayers',
	choice2:'Farming',
	choice3:'Discussions',
	choice4:'Learning',
		answer: 4
  },
  {
  	question: 'A manager is said to be corrupt when he or she',
	choice1:'Acts dishonestly for personal gains',
	choice2:'Promises to offer jobs to the unemployed',
	choice3:'Punished an employee for fighting',
	choice4:'Gives money for a fair trial',
		answer: 1
  },
  {
  	question: 'Visits to tourist centres help students to',
 	choice1:'Pass their examinations',
	choice2:'Become more adventurous',
	choice3:'Overcome stress and boredom',
	choice4:'Make more friends',
		answer: 3
  },
  {
  	question: 'The Tuofo and the Dentsifo Asafo Companies are associated with the',
	choice1:'Aboakyir festival',
	choice2:'Akwambo festival',
	choice3:'Homowo festival',
	choice4:'Odwira festival',
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

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
  	question:'God created the two great lights in the heavens in order to',
  	choice1:'show His mercy',
	choice2:'separate night from day',
	choice3:'give life to the earth',
	choice4:'provide heat to the earth',
  	answer:2
  },
  {	
  	question: 'The Eucharist, in Christian worship, refers to',
	choice1: 'prayer of thanksgiving',
	choice2:'preaching of sermon',
	choice3:'the Holy communion',
	choice4:'payment of tithe',
	answer: 3
  },
  {
  	question:'The most important Christian festival is the',  	
  	choice1:'Ascension',
	choice2:'Easter',
	choice3:'Lent',
	choice4:'Pentecost',
  	answer: 2
  },
  {
  	question:'Sadiq in Islam means',  	
  	choice1: 'courageous',
	choice2:'righteous',
	choice3:'truthful',
	choice4:'patience',
  	answer: 3
  },
  {
  	question: 'The Gye Nyame symbol of the Akans signifies that God is',		
  	choice1:'all-powerful',
	choice2:'all-serving',
	choice3:'all-loving',
	choice4:'all-merciful',
		answer: 2
  },
  {
  	question:'The twelfth son of Jacob was',
  	choice1:'Benjamin',
	choice2:'Daniel',
	choice3:'Joseph',
	choice4:'Simon',
  	answer:1
  },
  {
  	question: 'Moses led the Israelites through the wilderness for',	 
  	choice1:'forty years',
	choice2:'forty months',
	choice3:'fifty years',
	choice4:'fifty months',
		answer: 1
  },
  {
  	question: 'God created water bodies to provide humankind with',		
  	choice1:'air',
	choice2:'plants',
	choice3:'salt',
	choice4:'shelter',
		answer: 3
  },
  {
  	question: 'The prayer which is said in the early afternoon by Muslims is',		
  	choice1:'fajr',
	choice2:'Ishar',
	choice3:'Magrib',
	choice4:'Zuhr',
		answer: 4
  },
  {
  	question: 'The period of courtship in marriage is meant for',		
  	choice1:'the couples to know each other',
	choice2:'the payment of the knocking fee',
	choice3:'convincing parents of both parties',
	choice4:'the presentation of gifts to friends.',
		answer: 1
  },
  {
  	question: 'By creating Adam and Eve, God was establishing the institution of',
	choice1:'brotherliness',
	choice2:'friendship',
	choice3:'marriage',
	choice4:'Sabbath',
		answer: 3
  },
  {
  	question: 'Traditional worshippers remember their ancestors by',
	choice1:'fasting and praying to them',
	choice2:'offering them food and drinks',
	choice3:'singing of songs and praises',
	choice4:'calling their names always',
		answer: 2
  },
  {
  	question: ' Prayer enables the Muslim to',
	choice1:'punish his / her enemies',
	choice2:'become clean',
	choice3:'go to heaven',
	choice4:'receive gifts',
		answer: 2
  },
  {
  	question: 'Dirges as a traditional song is sung to',		
  	choice1:'praise and hail chiefs',
	choice2:'hoot at people with evil spirits',
	choice3:'recreate and entertain people.',
	choice4:'sympathize with bereaved families.',
		answer: 4
  },
  {
  	question: 'Creation according to the Bible was by means of',		
  	choice1:'command',
	choice2:'instruction',
	choice3:'prayers',
	choice4:'prophecy',
		answer: 1
  },
  {
  	question: 'It is the responsibility of a Muslim to make a pilgrimage to Makkah at least',
	choice1:'three times in a life time',
	choice2:'twice in a life time',
	choice3:'once in a life time',
	choice4:'five times in a life time.',
		answer: 3
  },
  {
  	question: 'Exchange of rings in a Christian marriage signifies',		
  	choice1:'faithfulness to God',
	choice2:'blessing from God',
	choice3:'faithfulness to one another.',
	choice4:'love for the bride’s family',
		answer: 3
  },
  {
  	question: 'In Islamic practice, Wudu is the',		
  	choice1:' intention to say salat',
	choice2:'preparation made after salat.',
	choice3:'ritual washing before salat',
	choice4:'ritual washing after salat.',
		answer: 3
  },
  {
  	question: 'Traditional funeral rites are meant to',		
  	choice1:'raise money from donations',
	choice2:'assist the dead to go to heaven',
	choice3:'avoid future occurrence of such deaths',
	choice4:'pay the last respect to the dead',
		answer: 4
  },
  {
  	question: 'Which of the following is not an effect of bad environment practice?',		
  	choice1:'Afforestation',
	choice2:'Deforestation',
	choice3:'Soil erosion',
	choice4:'Global warming',
		answer: 1
  },
  {
  	question: 'A punishment that could be given for fighting in the classroom is',
	choice1:'flogging',
	choice2:'fine',
	choice3:'imprisonment',
	choice4:'remand',
		answer: 1
  },
  {
  	question: 'The main teaching of the Ten Commandments is',		
  	choice1:'courtesy',
	choice2:'love',
	choice3:'kindness',
	choice4:'patience',
		answer: 2
  },
  {
  	question: 'A person who is tolerant',		
  	choice1:'respects the opinions of others',
	choice2:'looks down upon other people',
	choice3:'likes telling others what to do',
	choice4:'thinks he/ she is better than others.',
		answer: 1
  },
  {
  	question: 'Which of the following is not an act of sexual immorality?',		
  	choice1:'Prostitution',
	choice2:'Rape',
	choice3:'Premarital sex',
	choice4:'Sexual abstinence',
		answer: 4
  },
  {
  	question: 'The wise saying ‘it is difficult to catch up with someone who has gone ahead of you’ tells us that',
	choice1:'we need to be smart',
	choice2:'time lost cannot be regained',
	choice3:'all is well with people ahead',
	choice4:'we must run in order to catch up',
		answer: 2
  },
  {
  	question: 'Repentance is relevant because it',		
  	choice1:'separates us from enemies',
	choice2:'brings us back to God',
	choice3:'gives us energy to work',
	choice4:'drives the devil away',
		answer: 2
  },
  {
  	question: 'Courtesy is a polite and acceptable way of',		
  	choice1:'commitment',
	choice2:'behaviour',
	choice3:'obedience',
	choice4:'tolerance',
		answer: 1
  },
  {
  	question: 'Which of the following does not constitute good manners?',		
  	choice1:'Chuckling at prefects',
	choice2:'Stitching torn dresses',
	choice3:'Complying with dress codes',
	choice4:'Running of errands',
		answer: 1
  },
  {
  	question: 'By respecting other people’s religion, we are',		
  	choice1:'showing commitment to God',
	choice2:'showing commitment to those religions.',
	choice3:'practising religious obedience',
	choice4:'showing religious tolerance',
		answer: 4
  },
  {
  	question: 'Authority is instituted in the society to ensure',		
  	choice1:'hard work',
	choice2:'loyalty',
	choice3:'peace',
	choice4:'respect',
		answer: 3
  },
  {
  	question: 'A positive attitude towards work is',		
  	choice1:'commitment',
	choice2:'graciousness',
	choice3:'intelligence',
	choice4:'purity',
		answer: 1
  },
  {
  	question: 'School rules help pupils to',		
  	choice1:'avoid being punished',
	choice2:'worship God regularly',
	choice3:'compete with one another',
	choice4:'disobey school authorities.',
		answer: 1
  },
  {
  	question: 'Carrying out assigned duties is necessary because it',		
  	choice1:'pleases God and humankind',
	choice2:'attracts hatred from enemies',
	choice3:'leads to pacification of the gods',
	choice4:'leads to fulfillment of promises',
		answer: 1
  },
  {
  	question: 'Which of the following does not promote progress in the society?',
	choice1:'Communal labour',
	choice2:'Conflicts',
	choice3:'Festival',
	choice4:'Reconciliation',
		answer: 2
  },
  {
  	question: 'The most important requirement for a happy and prosperous life is',		
  	choice1:'courage',
	choice2:'hard work',
	choice3:'loyalty',
	choice4:'respect',
		answer: 2
  },
  {
  	question: 'In planning personal budget, it is necessary to ensure that',		
  	choice1:'expenditure is more than income',
	choice2:'income is more than expenditure',
	choice3:'expenditure equals income',
	choice4:'income is less than expenditure',
		answer: 1
  },
  {
  	question: 'One of the advantages the extended family has over the nuclear family is',
	choice1:'persistent quarrelling in the family',
	choice2:'over-reliance on a few rich people',
	choice3:'having little privacy for its members',
	choice4:'opportunity to associate with more people.',
		answer: 4
  },
  {
  	question: 'Leisure is best used to',		
  	choice1:'perform house chores',
	choice2:'attend church service',
	choice3:'acquire new skills',
	choice4:'attend extra classes',
		answer: 3
  },
  {
  	question: 'The presence of a shrine is a characteristic of',		
  	choice1:'Christian neighbourhood',
	choice2:'traditional neighbourhood',
	choice3:'Islamic neighbourhood',
	choice4:'religious neighbourhood',
		answer: 2
  },
  {
  	question: 'The Asafo Youth Movements do not promote',		
  	choice1:'unity among its members',
	choice2:'selflessness among its members',
	choice3:'regular attendance at church service.',
	choice4:'the spirit of law abiding among its members.',
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

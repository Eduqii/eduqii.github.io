

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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n.' + ' One of the bulls………from the herd.',
  	choice1:'have been strayed',
	choice2: 'has been strayed',
	choice3: 'have strayed',
	choice4: 'has strayed',
  	answer: 4,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I saw the dog………….out of the house.',
	choice1: 'run',
	choice2:  'is running',
	choice3:  'ran',
	choice4:  'was running',
	answer: 1,	
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Habib goes to school……train.',
  	choice1:'by',
	choice2: 'on',
	choice3: 'with',
	choice4: 'in',
  	answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n This phone is not mine; it is …..',
  	choice1: 'mine uncle’s',
	choice2:  'my uncle’s',
	choice3:  'my uncles',
	choice4:  'mine uncle',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Their sister wore a ….. dress to the party.',  	
  	choice1: 'silk blue beautiful',
	choice2:  'beautiful blue silk',
	choice3:  'blue beautiful silk',
	choice4:  'beautiful silk blue',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I wish I ….. my friend next week.',		
  	choice1:'can visit',
	choice2:  'am visiting',
	choice3:  'shall visit',
	choice4:  'could visit',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Aba took ….. her mother in many ways.',	 
  	choice1: 'after',
	choice2:   'up',
	choice3:   'on',
	choice4:   'by',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n That girls is allergic ….. dust.',		
  	choice1: 'with',
	choice2:   'to',
	choice3:   'against',
	choice4:   'about',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n My brother, with his children, ….. travelling to Salaga next week.',		
  	choice1:'is',
	choice2:  'are',
	choice3:  'was',
	choice4:  'were',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n It is high time we …… for the meeting.',		
  	choice1:'left',
	choice2:  'leave',
	choice3:  'have to leave',
	choice4:  'will leave',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The accused person refused to appear before the ….. panel.',		
  	choice1:'five-man’s',
	choice2:  'five-man',
	choice3:  'five-men',
	choice4:  'five-mens',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The stories her children told her made her ……',
		choice1:'to laugh',
	choice2:  'laughing',
	choice3:	  'laughed',
	choice4:	  'laugh',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n They have not bought …… of the two prescribed books.',		
  	choice1:'neither',
	choice2:  'either',
	choice3:  'none',
	choice4:  'all',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The boy found the assignment …… to do.',
		choice1:'much too difficult',
	choice2:  'difficult too much',
	choice3:	  'too much difficult',
	choice4:	  'much difficult too',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The oxen lay on the bare floor, …..?',		
  	choice1:'didn’t they',
	choice2:  'don’t they',
	choice3:  'didn’t it',
	choice4:  'isn’t it',
		answer: 1,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The officials made a s͟u͟d͟d͟e͟n͟ visit to the school.',
		choice1:'an unusual',
	choice2:  'a strange',
	choice3:	  'a quick',
	choice4:	  'an unexpected',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Some of the students g͟r͟u͟m͟b͟l͟e͟d͟ about the assignment.',		
  	choice1:'questioned',
	choice2:  'talked',
	choice3:  'complained',
	choice4:  'bothered',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence. It is i͟m͟p͟o͟l͟i͟t͟e͟ to talk loudly in the presence of the elderly.',		
  	choice1:'incorrect',
	choice2:  'improper',
	choice3:  'unwise',
	choice4:  'rude',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n She is fond of talking about t͟r͟i͟v͟i͟i͟a͟l͟ matters.',		
  	choice1:' unpleasant',
	choice2:  'unimportant',
	choice3:  'unexciting',
	choice4:  'unacceptable',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n This c͟u͟r͟i͟o͟u͟s͟ child likes to ask a lot of questions.',		
  	choice1:'inquisitive',
	choice2:  'pompous',
	choice3:  'intelligent',
	choice4:  'talkative',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Araba’s visit was a b̲o̲l̲t̲ ̲f̲r̲o̲m̲ ̲t̲h̲e̲ ̲b̲l̲u̲e̲. This means that the visit was',
		choice1:'a most welcome one',
	choice2:  'short',
	choice3:	  'a complete surprise',
	choice4:	  'timely',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n My uncle loves to c̲a̲s̲t̲ ̲h̲i̲s̲ ̲b̲r̲e̲a̲d̲ upon the waters. This means that my uncle',
		choice1:'behaves strangely',
	choice2:  'feeds his fish with bread',
	choice3:	  'is wasteful',
	choice4:	  'loves to help people',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n  When he lost his job, Taro was l̲e̲f̲t̲ ̲t̲o̲ ̲s̲i̲n̲k̲ ̲o̲r̲ ̲s̲w̲i̲m̲.̲ This means that my uncle',
		choice1:'was depressed',
	choice2:  'shouted for help',
	choice3:	  'had to find another job',
	choice4:	  'had to survive on his own',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n I was informed a̲t̲ ̲t̲h̲e̲ ̲ ̲e̲l̲e̲v̲e̲n̲t̲h̲ ̲h̲o̲u̲r̲ about his decision to leave. This means that I heard about his decision',
		choice1:'immediately',
	choice2:  'at eleven o’clock',
	choice3:	  'in good time',
	choice4:	  'very late',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences, a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n John had to e̲a̲t̲ ̲h̲i̲s̲ ̲w̲o̲r̲d̲s̲ when our team won the match. This means that John',
		choice1:' became very much surprised',
	choice2:  'admitted he was wrong',
	choice3:	  'denied all that he had said',
	choice4:	  'lost appetite',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The girl i͟n͟t͟e͟n͟t͟i͟o͟n͟a͟l͟l͟y͟ tore her dress.',
		choice1:'carelessly',
	choice2:  'accidentally',
	choice3:	  'willingly',
	choice4:	  'foolishly',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n We i͟n͟i͟t͟i͟a͟t͟e͟d͟ several projects last year.',		
  	choice1:'funded',
	choice2:  'completed',
	choice3:  'executed',
	choice4:  'organized',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Most of the rules were o̲b̲s̲e̲r̲v̲e̲d̲.̲',		
  	choice1:'violated',
	choice2:  'cancelled',
	choice3:  'lessened',
	choice4:  'excluded',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The results will be r͟e͟l͟e͟a͟s͟e͟d͟ very soon',		
  	choice1:'withheld',
	choice2:  'confirmed',
	choice3:  'withdrawn',
	choice4:  'canceled',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n No one enjoyed the old man’s h͟u͟m͟o͟u͟r͟l͟e͟s͟s͟ stories.',
		choice1:'funny',
		choice2: 'peculiar',
		choice3: 'familiar',
	choice4: 'cheerful',
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

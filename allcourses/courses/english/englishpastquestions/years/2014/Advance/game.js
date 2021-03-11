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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The students were hostile ……….the lazy teacher.',
  	choice1:'on',
	choice2: 'to',
	choice3: 'from',
	choice4: 'with',
  	answer: 2,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The ………….met at the mess.',
	choice1: 'commander-in-chief',
	choice2:  'commander-in-chiefs',
	choice3:  'commanders-in-chief',
	choice4:  'commanders-in-chiefs',
	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The workers are demonstrating ……………..management.',
  	choice1:'at',
	choice2: 'on',
	choice3: 'upon',
	choice4: 'against',
  	answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n  …………….failed the examination, Doris was dismissed from the school.',
  	choice1: 'Having',
	choice2:  'In having',
	choice3:  'On having',
	choice4:  'To having',
  	answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The building he bought ……………..millions of cedis.',  	
  	choice1: 'cost',
	choice2:  'costs',
	choice3:  'costed',
	choice4:  'costing',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The dresses are …………..',		
  	choice1:'you',
	choice2:  'your’s',
	choice3:  'our’s',
	choice4:  'ours',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n We shall invite him when he ……………..from America.',	 
  	choice1: 'will return',
	choice2:   'had returned',
	choice3:   'returns',
	choice4:   'returned',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The students were congratulated ……………..their brilliant performance.',		
  	choice1: 'by',
	choice2:   'on',
	choice3:   'with',
	choice4:   'about',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n By this time next year, I ……………..school.',		
  	choice1:'will leave',
	choice2:  'would leave',
	choice3:  'might leave',
	choice4:  'will have left',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Isn’t that girl ……………..old to play with toys?',		
  	choice1:'as',
	choice2:  'so',
	choice3:  'too',
	choice4:  'very',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You usually come to school early, ………….?',		
  	choice1:'can you',
	choice2:  'will you',
	choice3:  'aren’t you',
	choice4:  'don’t you',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I am …………….faithfully.',
		choice1:'your',
	choice2:  'yours’',
	choice3:	  'yours',
	choice4:  	  'your’s',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n No sooner had we arrived ……….he came back from work.',		
  	choice1:'than',
	choice2:  'then',
	choice3:  'when',
	choice4:  'before',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Kofi and Ama love …………..',		
  	choice1:'another',
	choice2:  'theirselves',
	choice3:  'each other',
	choice4:  'one another',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n It’s no good ………….to him.',		
  	choice1:'to be talking',
	choice2:  'talked',
	choice3:  'talking',
	choice4:  'about talking',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Since our last meeting, I ……………ill.',		
  	choice1:'am',
	choice2:  'was',
	choice3:  'had been',
	choice4:  'have been',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I was ………….tired that I couldn’t go any further.',		
  	choice1:'so',
	choice2:  'too',
	choice3:  'much',
	choice4:  'very',
		answer: 1,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The elders were advised not to m͟e͟d͟d͟l͟e͟ in chieftaincy affairs.',
		choice1:'indulge',
	choice2:  'intrude',
	choice3:	  'interfere',
	choice4:	  'intervene',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The accountant c͟o͟r͟r͟e͟c͟t͟e͟d͟ all the mistakes made by the Chief Executive.',		
  	choice1:'refused',
	choice2:  'erased',
	choice3:  'nullified',
	choice4:  'rectified',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Elorm’s decision was s͟u͟p͟e͟r͟b͟',		
  	choice1:'right',
	choice2:  'good',
	choice3:  'excellent',
	choice4:  'wonderful',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The students complained that the rules were too r̲i̲g̲i̲d̲.̲',
		choice1:'strong',
	choice2:  'hard',
	choice3:	  'strict',
	choice4:	  'bad',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The new headmaster met the staff and made his m̲a̲i̲d̲e̲n̲ speech.',		
  	choice1:'first',
	choice2:  'fresh',
	choice3:  'official',
	choice4:  'original',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The student was c̲a̲u̲g̲h̲t̲ ̲r̲e̲d̲-̲h̲a̲n̲d̲e̲d̲ breaking the louvers. This means that the student was caught',
		choice1:'while committing the offence',
	choice2:  'with blood on his hands',
	choice3:	  'before the act',
	choice4:	  'after the act',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n We knew it was a̲ ̲c̲o̲c̲k̲ ̲a̲n̲d̲ ̲b̲u̲l̲l̲ ̲s̲t̲o̲r̲y̲.̲ This means that the story was',
		choice1:'difficult to believe',
	choice2:  'about a cock and a bull',
	choice3:	  'real',
	choice4:	  'false',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The thieves were a̲r̲m̲e̲d̲ ̲t̲o̲ ̲t̲h̲e̲ ̲t̲e̲e̲t̲h̲ when they entered the house. This means that the thieves were',
		choice1:'well trained',
	choice2:  'experienced',
	choice3:	  'fully armed',
	choice4:	  'violent',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Mr. Abban instructed his wife to k̲e̲e̲p̲ ̲a̲n̲ ̲e̲y̲e̲ on their daughter. This means that their daughter should be',
		choice1:'pampered',
	choice2:  'disciplined',
	choice3:	  'controlled properly',
	choice4:	  'watched closely',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The president h̲i̲t̲ ̲t̲h̲e̲ ̲n̲a̲i̲l̲ ̲o̲n̲ ̲t̲h̲e̲ ̲h̲e̲a̲d̲ when he complained that most of the ministers were corrupt.',
		choice1:'the exact truth',
	choice2:  'in detail',
	choice3:	  'harshly',
	choice4:	  'clearly',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The man was d͟i͟s͟g͟r͟a͟c͟e͟d͟ in public.',
		choice1:'respected',
	choice2:  'honoured',
	choice3:	  'welcomed',
	choice4:	  'accepted',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Akosua a͟c͟c͟e͟p͟t͟e͟d͟ the offer.',		
  	choice1:'disliked',
	choice2:  'declined',
	choice3:  'withdrew',
	choice4:  'ignored',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Food is a͟b͟u͟n͟d͟a͟n͟t͟ in the rural areas.',
		choice1:'scarce',
	choice2: 'less',
	choice3:	 'few',
	choice4:  	 'cheap',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Doctors have w͟i͟t͟h͟d͟r͟a͟w͟n͟ their services.',		
  	choice1:'hidden',
	choice2:  'registered',
	choice3:  'offered',
	choice4:  'displayed',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n By our constitution, it is o͟b͟l͟i͟g͟a͟t͟o͟r͟y͟ to vote.',		
  	choice1:'good',
	choice2:  'necessary',
	choice3:  'optional',
	choice4:  'right',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.\n\n Which of the following is not an example of oral literature?',
		choice1:'Myth',
	choice2:  'Folktale',
	choice3:	  'Proverb',
	choice4:	  'Melodrama',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.\n\n The dominant idea in a literary work constitutes its …………..',		
  	choice1:'plot',
	choice2:  'theme',
	choice3:  'diction',
	choice4:  'structure',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.\n\n The expression “The world is a stage.” is an example of ……….',		
  	choice1:'metonymy',
	choice2:  'simile',
	choice3:  'personification',
	choice4:  'metaphor',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers the questions or completes the sentence.\n\n A genre is ……………..',		
  	choice1:'any kind of poetry',
	choice2:  'another name for prose',
	choice3:  'a subdivision of drama',
	choice4:  'any of the three forms of literature',
		answer: 4,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract I)' + '\n\n The device used in “Sleep comes gently and strong” is ……………',
		choice1:'irony',
	choice2:  'hyperbole',
	choice3:	  'euphemism',
	choice4:	  'personification',
		answer: 4,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract I)' + '\n\n The rhyme scheme of the stanza is ………….',		
  	choice1:'abba',
	choice2:  'bbaa',
	choice3:  'aabb',
	choice4:  'abab',
		answer: 3,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract II)' + '\n\nThe main sound device used in the stanza is …………..',
	choice1:'pun',
	choice2: 'rhyme',
	choice3:'alliteration',
	choice4:	  'onomatopoeia',
		answer: 3,
  },
  {
  	question: 'Read the following extract carefully and answer this question \n' + '(refer to Extract II)' + '\n\n The device helps to express …………….',
		choice1:'the silence of the sea',
	choice2:  'the whiteness of the foam',
	choice3:	  'the fairness of the weather',
	choice4:	  'the smoothness of the movement',
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

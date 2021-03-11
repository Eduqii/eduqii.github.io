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
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The lion ……… under the tree waiting for its prey.',
  	choice1:'lie',
	choice2: 'lain',
	choice3: 'lay',
	choice4: 'laid',
  	answer: 3,
  },
  {	
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n I wish Ato …….. come to see us tomorrow.',
	choice1: 'will',
	choice2:  'is to',
	choice3:  'would',
	choice4:  'may',
	answer: 3,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n It’s high time we ………..the items out.',
  	choice1:'move',
	choice2: 'are moving',
	choice3: 'moved',
	choice4: 'were moving',
  	answer: 1,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n This amount is all ………I have on me.',  	
  	choice1: 'what',
	choice2:  'that',
	choice3:  'which',
	choice4:  'this',
  	answer: 4,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The harder you study, ……..your chance of success.',
		choice1:'the great',
	choice2:  'greater',
	choice3:	  'greatest',
	choice4:	  'the greater',
		answer: 4,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Please, I would rather you ……….not disturb me.',  	
  	choice1: 'did',
	choice2:  'will',
	choice3:  'may',
	choice4:  'do',
  	answer: 1,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n That pair of trousers is worn …………',
		choice1:'in',
	choice2:  'out',
	choice3:	  'into',
	choice4:	  'on',
		answer: 2,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Atsu is looking forward to ……….his friends at the party.',	 
  	choice1: 'see',
	choice2:   'be seeing',
	choice3:   'seeing',
	choice4:   'have seen',
		answer: 3,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The minister is my ……….brother.',		
  	choice1: 'senior',
	choice2:   'older',
	choice3:   'elder',
	choice4:   'junior',
		answer: 3,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n We have ………sugar, so we cannot have breakfast.',		
  	choice1:'a few',
	choice2:  'little',
	choice3:  'few',
	choice4:  'a little',
		answer: 2,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n I wouldn’t say this to …….',		
  	choice1:'no other',
	choice2:  'any other',
	choice3:  'nobody',
	choice4:  'anyone else',
		answer: 2,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n This vase is made …………glass.',		
  	choice1:'on',
	choice2:  'of',
	choice3:  'with',
	choice4:  'by',
		answer: 2,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Mrs. Akwei is blind …………the faults of her children.',
		choice1:'on',
	choice2:  'over',
	choice3:	  'to',
	choice4:	  'by',
		answer: 3,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Shika was absent yesterday, ………?',		
  	choice1:'isn’t she',
	choice2:  'has she',
	choice3:  'didn’t she',
	choice4:  'wasn’t she',
		answer: 4,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Come and see me tomorrow, ……….. you?',
		choice1:'shall',
	choice2:  'will',
	choice3:	  'may',
	choice4:	  'don’t',
		answer: 2,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n If Kofi had studied hard, he ………..his examination.',		
  	choice1:'would pass',
	choice2:  'would be passing',
	choice3:  'will be passing',
	choice4:  'would have passed',
		answer: 4,
  },
  {
  	question: 'LEXIS AND STRUCTURE\n From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The boy likes his ……….dog.',		
  	choice1:'little pretty brown',
	choice2:  'pretty brown little',
	choice3:  'pretty little brown',
	choice4:  'brown little pretty',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The radio is a very p͟o͟t͟e͟n͟t͟ means of communication.',		
  	choice1:'necessary',
	choice2:  'powerful',
	choice3:  'widespread',
	choice4:  'sound',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Benjamin deserves the prize because he is i̲n̲d̲u̲s̲t̲r̲i̲o̲u̲s̲.̲',
		choice1:'polite',
	choice2:  'hardworking',
	choice3:	  'intelligent',
	choice4:	  'funny',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Farming is l̲u̲c̲r̲a̲t̲i̲v̲e̲.̲',		
  	choice1:'easy',
	choice2:  'profitable',
	choice3:  'necessary',
	choice4:  'good',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The r͟e͟c͟k͟l͟e͟s͟s͟n͟e͟s͟s͟ of the driver caused the woman’s death.',
		choice1:'drunkenness',
	choice2:  'arrogance',
	choice3:	  'carelessness',
	choice4:	  'ignorance',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The doctors have been discussing the s͟h͟o͟r͟t͟a͟g͟e͟ of nurses.',		
  	choice1:'indiscipline',
	choice2:  'love',
	choice3:  'scarcity',
	choice4:  'efficiency',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Adzo t̲a̲k̲e̲s̲ ̲a̲f̲t̲e̲r̲ her mother. This means that Adzo',		
  	choice1:'likes her',
	choice2:  'resembles her',
	choice3:  'is unlike her',
	choice4:  'always follows her',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Board members are paid five Ghana Cedis a day a̲c̲r̲o̲s̲s̲ ̲t̲h̲e̲ ̲b̲o̲a̲r̲d̲.̲ This means that',
		choice1:'every member receives five Ghana Cedis',
	choice2:  'some members receive five Ghana Cedis',
	choice3:	  'members are given five Ghana Cedis for food.',
	choice4:	  'only deserving members are given five Ghana Cedis.',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Advise Peter not to p̲o̲k̲e̲ ̲h̲i̲s̲ ̲n̲o̲s̲e̲ into my affair.',		
  	choice1:'interfere',
	choice2:  'enter',
	choice3:  'speak',
	choice4:  'believe',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n During the lecture, Sarfo was m̲i̲l̲e̲s̲ ̲a̲w̲a̲y̲.̲ This means that Sarfo.',
		choice1:'was self-conscious',
	choice2:  'had travelled',
	choice3:	  'had slept',
	choice4:	  'was absent-minded',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Ato was a̲t̲ ̲h̲i̲s̲ ̲w̲i̲t̲s̲’̲ ̲e̲n̲d̲.̲ This means that Ato',		
  	choice1:'was collecting his ideas together.',
	choice2:  'had come to the end of his talk.',
	choice3:  'did not know what to do next.',
	choice4:  'did not have much to do.',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n We are surprised at her h͟o͟s͟t͟i͟l͟i͟t͟y͟ to us.',
		choice1:'faithfulness',
	choice2:  'attitude',
	choice3:	  'manner',
	choice4:	  'friendliness',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n She t͟i͟m͟i͟d͟l͟y͟ faced her accusers.',		
  	choice1:'boldly',
	choice2:  'calmly',
	choice3:  'angrily',
	choice4:  'smilingly',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The minister is s͟i͟n͟c͟e͟r͟e͟ in his promise.',		
  	choice1:'unrealistic',
	choice2: 'uncertain',
	choice3: 'dissatisfied',
	choice4: 'dishonest',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The flag was h͟o͟i͟s͟t͟e͟d͟ during the golden jubilee celebration.',
		choice1:'sunk',
	choice2:  'dipped',
	choice3:	  'lowered',
	choice4:	  'dropped',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n T͟r͟a͟n͟s͟p͟a͟r͟e͟n͟t͟ ballot boxes are used in elections.',		
  	choice1:'dark',
	choice2:  'opaque',
	choice3:  'coated',
	choice4:  'painted',
		answer: 2,
  },
  {
  	question: 'LITERATURE\n From the options lettered A to D, choose the one that correctly answers each question or completes the sentence\n\n The sequence of events in a play is the',		
  	choice1:'theme',
	choice2:  'plot',
	choice3:  'conflict',
	choice4:  'resolution',
		answer: 2,
  },
  {
  	question: 'LITERATURE\n' + 'From the options lettered A to D, choose the one that correctly answers each question or completes the sentence\n\n An address directed at oneself is known as',
		choice1:'monologue',
	choice2:  'dialogue',
	choice3:	  'apostrophe',
	choice4:	  'soliloquy',
		answer: 4,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The poem is a kind of',		
  	choice1:'sermon',
	choice2:  'apostrophe',
	choice3:  'dirge',
	choice4:  'sonnet',
		answer: 2,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The theme of the above extract is',		
  	choice1:'life',
	choice2:  'neglect',
	choice3:  'war',
	choice4:  'death',
		answer: 4,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n Which of the following expressions from the extract suggests the theme above?',
		choice1:'‘incomprehensible God!’',
	choice2:  '‘inborn stars’',
	choice3:	  '‘Final call’',
	choice4:	  '‘my pilot’',
		answer: 3,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The main character in a play or a novel is called',		
  	choice1:'hero',
	choice2:  'villain',
	choice3:  'dramatist',
	choice4:  'antagonist',
		answer: 1,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The conversation between two characters is known as',
		choice1:'a dialogue',
	choice2:  'a monologue',
	choice3:	  'an aside',
	choice4:	  'a soliloquy',
		answer: 1,
  },
  {
  	question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n Miming refers to',		
  	choice1:'the use of song in drama',
	choice2:  'acting without the use of words',
	choice3:  'imitation of a character',
	choice4:  'the use of dialogue in acting',
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

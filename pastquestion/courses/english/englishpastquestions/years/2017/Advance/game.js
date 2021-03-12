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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n John has given ……………..smoking',
  	choice1:'in',
	choice2: 'off',
	choice3: 'out',
	choice4: 'up',
  	answer: 4,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The crowd was ………………….large that the Director became frightened.',
	choice1: 'quite',
	choice2:  'so',
	choice3:  'too',
	choice4:  'very',
	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n When we got there, the buses ………………left.',
  	choice1:'are',
	choice2: 'had',
	choice3: 'have',
	choice4: 'were',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The book was ……………to me.',  	
  	choice1: 'gave',
	choice2:  'given',
	choice3:  'giving',
	choice4:  'to give',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Auntie is the lady to ……………..I gave the list.',  	
  	choice1: 'who',
	choice2:  'whom',
	choice3:  'which',
	choice4:  'whose',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He’s your friend, ……………..?',		
  	choice1:'doesn’t he',
	choice2:  'does he',
	choice3:  'isn’t he',
	choice4:  'isn’t it',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Kay: You didn’t go to Accra did you?\nLee: ……………….',
	 choice1: 'No, I did',
	choice2:   'No, I didn’t',
	choice3:    'Yes, did I',
	choice4:	'Yes, I didn’t',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You had better ………………now.',		
  	choice1: 'left',
	choice2:   'leave',
	choice3:   'be leaving',
	choice4:   'to leave',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Kwame asked his friend to ……………..him a pen.',
		choice1:'borrow',
	choice2:  'excuse',
	choice3:	  'lend',
	choice4:	  'spare',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n She ended the letter, ………………….',		
  	choice1:'‘Yours sincerely’',
	choice2:  '‘Your’s sincerely’',
	choice3:  '‘Yours’ sincerely’',
	choice4:  '‘Your sincerely’',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The woman refused to sell me ……………….kerosene.',
		choice1:' any',
	choice2:  'little',
	choice3:	  'plenty',
	choice4:	  'some',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n ‘Yes, ….…….a book,’ he said.',
		choice1:'is',
	choice2:  'its',
	choice3:	  'it’s',
	choice4:	  'it',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I know you are much ………………..than Esi.',		
  	choice1:'tall',
	choice2:  'taller',
	choice3:  'tallest',
	choice4:  'the taller',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Neither John nor his friend, …………….. a play to the end.',
		choice1:'watch',
	choice2:  'watches',
	choice3:	  'was watching',
	choice4:	  'were watching',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Araba and Osei are a devoted couple who love ………………',		
  	choice1:'each other',
	choice2:  'one another',
	choice3:  'themselves',
	choice4:  'the other',
		answer: 1,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The w͟e͟l͟f͟a͟r͟e͟ of students should be the concern of teachers.',
		choice1:'growth',
	choice2:  'joy',
	choice3:	  'wealth',
	choice4:	  'well-being',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n He said the practice was a͟l͟i͟e͟n͟ to him.',		
  	choice1:'boring',
	choice2:  'new',
	choice3:  'modern',
	choice4:  'unfamiliar',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n He said the story was f͟i͟c͟t͟i͟t͟i͟o͟u͟s͟.' + '</u>',		
  	choice1:'artificial',
	choice2:  'false',
	choice3:  'interesting',
	choice4:  'real',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The man placed a̲n̲ ̲o̲r̲d̲e̲r̲ for rice and stew at the restaurant.',
		choice1:'a command',
	choice2:  'a demand',
	choice3:	  'a request',
	choice4:	  'a directive',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n  There is nothing with which to compare the i͟n͟f͟i͟n͟i͟t͟e͟ knowledge and power of Providence.',
		choice1:'  endless',
	choice2:  'immeasurable',
	choice3:	  'incomplete',
	choice4:	  'inconstant',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Nimo worked hard after his business collapsed and soon f̲o̲u̲n̲d̲ ̲h̲i̲s̲ ̲f̲e̲e̲t̲.̲\n This means that he',		
  	choice1:'bought a new fleet of cars.',
	choice2:  'could walk again.',
	choice3:  'revived the business.',
	choice4:  'sold the rest of the business.',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Manna l͟a͟y͟ aside some money for Baaba’s party. This means that Manna',
		choice1:'refused to host the party',
	choice2:  'saved money for the party',
	choice3:	  'spent money on the party',
	choice4:  	  'took a loan to organise the party',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Mary described the occasion as a̲ ̲r̲e̲d̲-̲l̲e̲t̲t̲e̲r̲ ̲d̲a̲y̲.̲ This means that the occasion was very',
		choice1:'bloody',
	choice2:  'enjoyable',
	choice3:	  'memorable',
	choice4:	  'rough',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n George has been r̲e̲l̲i̲e̲v̲e̲d̲ ̲o̲f̲ ̲h̲i̲s̲ ̲p̲o̲s̲t̲. This means that George has been',
		choice1:'dismissed',
	choice2:  'given another assignment',
	choice3:	  'demoted',
	choice4:	  'promoted',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Foli and Adzovi h̲i̲t̲ ̲i̲f̲ ̲o̲f̲f̲ quite well. This means they',
		choice1:'fight often.',
	choice2:  'get on very well.',
	choice3:	  'play as a team.',
	choice4:	  'present good arguments',
		answer: 2,
  },
  {
  	question:'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n People in our village are p͟o͟l͟i͟t͟e͟ to strangers.',
		choice1:'cruel',
	choice2:  'mean',
	choice3:	  'rude',
	choice4:	  'unfair',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Fishes are p͟l͟e͟n͟t͟i͟f͟u͟l͟ in the pond.',		
  	choice1:'little',
	choice2:  'scarce',
	choice3:  'small',
	choice4:  'unusual',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The price of petrol has f͟a͟l͟l͟e͟n͟ for no reason.',
		choice1:'aggravated',
	choice2:  'doubled',
	choice3:	  'risen',
	choice4:	  'weakened',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Cann worked hard to s͟t͟o͟c͟k͟ the shop.',		
  	choice1:'decorated',
	choice2:  'empty',
	choice3:  'fill',
	choice4:  'reinforce',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n There was m͟a͟y͟h͟e͟m͟ as the crowd scattered.',		
  	choice1:'anger',
	choice2: 'fear',
	choice3: 'order',
	choice4: 'riot',
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



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
  	question:'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nSalifu was ……..surprised that he could not talk.',
  	choice1:'enough',
	choice2: 'so',
	choice3: 'what',
	choice4: 'which',
  	answer:1
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThis amount is all ………I have on me.',
	choice1: 'that',
	choice2:  'this',
	choice3:  'what',
	choice4:  'which',
	answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI am told the boy is a friend of ……….',
  	choice1:'he',
	choice2: 'him',
	choice3: 'his',
	choice4: 'he’s',
  	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nRice and beans ……a good meal for children.',
  	choice1: 'are',
	choice2:  'have been',
	choice3:  'is',
	choice4:  'is being',
  	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYaw is …….clever to be cheated.',  	
  	choice1: 'quite',
	choice2:  'so',
	choice3:  'too',
	choice4:  'very',
  	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe two rivals are fond of insulting ………',		
  	choice1:'each other',
	choice2:  'one another',
	choice3:  'one and the other',
	choice4:  'themselves',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nOf all the pupils in the class, Ekua is ……..',	 
  	choice1: 'prettier',
	choice2:   'prettiest',
	choice3:   'the prettier',
	choice4:   'the prettiest',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nIt is high time Adzo …… home.',		
  	choice1: ' came',
	choice2:   'comes',
	choice3:   'has come',
	choice4:   'will come',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nYou should be ……..more careful about what you say.',		
  	choice1:'less',
	choice2:  'least',
	choice3:  'little',
	choice4:  'a little',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nAtsu is looking forward to ……..his friends at the party.',		
  	choice1:'see',
	choice2:  'seeing',
	choice3:  'be seeing',
	choice4:  'have seen',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nThe harder you study, ……..your chance of success.',
  		choice1:'greater',
	choice2:  'greatest',
	choice3:	  'the great',
	choice4:	  'the greater',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nIf you had asked me, I ………you.',
		choice1:'will help',
	choice2:  'would help',
	choice3:	  'will have helped',
	choice4:	  'would have helped',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI don’t really know what you want, ………I?',		
  	choice1:'am',
	choice2:  'aren’t',
	choice3:  'do',
	choice4:  'did',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nI will not walk to school with ………. of the boys.',		
  	choice1:'each',
	choice2:  'either',
	choice3:  'everyone',
	choice4:  'neither',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\nJane fell ill ………..measles.',		
  	choice1:'at',
	choice2:  'by',
	choice3:  'of',
	choice4:  'with',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Aminu’s bushy eyebrows gave him a very  s͟e͟v͟e͟r͟e͟ look.',
		choice1:'bad',
	choice2:  'deadly',
	choice3:	  'serious',
	choice4:	  'unpleasant',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n My father had the b͟e͟n͟e͟f͟i͟t͟ of good education.',		
  	choice1:'luck',
	choice2:  'advantage',
	choice3:  'quality',
	choice4:  'value',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Kwame was too s͟c͟a͟r͟e͟d͟ to be left alone in the house.',		
  	choice1:'afraid',
	choice2:  'anxious',
	choice3:  'uneasy',
	choice4:  'unhappy',
		answer: 1,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The new school is i͟d͟e͟a͟l͟ for Mr. Mensah’s children.',		
  	choice1:'good',
	choice2:  'perfect',
	choice3:  'satisfactory',
	choice4:  'suitable',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n  The internet is of e͟n͟o͟r͟m͟o͟u͟s͟ benefit to education.',		
  	choice1:'enviable',
	choice2:  'great',
	choice3:  'much',
	choice4:  'suitable',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Afua celebrates her birthday today but I c̲a̲n̲n̲o̲t̲ ̲m̲a̲k̲e̲ ̲i̲t̲.̲ This means that the speaker',
	choice1:'does not want to be there',
	choice2:  'feels it is not necessary to attend',
	choice3:  'has no birthday gift for her friend',
	choice4:  'will not be able to attend',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The interview was conducted to separate the s̲h̲e̲e̲p̲ ̲f̲r̲o̲m̲ ̲t̲h̲e̲ ̲g̲o̲a̲t̲s̲.̲ This means that the interview aimed at',
		choice1:'finding people who could rear sheep',
	choice2:  'keeping the sheep in a different pen',
	choice3:	  'selecting only the humble candidates',
	choice4:	  'selecting the best candidates',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Being the eldest child of the family, Joojo claimed t̲h̲e̲ ̲l̲i̲o̲n̲’̲s̲ ̲s̲h̲a̲r̲e̲ of the father’s property. This means that Joojo had',
		choice1:'all the property',
	choice2:  'half of the property',
	choice3:	  'the best part',
	choice4:	  'the largest part',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The students w̲e̲r̲e̲ ̲a̲l̲l̲ ̲e̲a̲r̲s̲ during the presentation. This means that the students',
		choice1:'did not enjoy the presentation',
	choice2:  'had big ears',
	choice3:	  'listened attentively',
	choice4:	  'were very happy',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Dallies is the p̲i̲c̲k̲ ̲o̲f̲ ̲t̲h̲e̲ ̲b̲u̲n̲c̲h̲.̲ This means that Dallies',		
  	choice1:'is a farmer',
	choice2:  'is an athlete',
	choice3:  'is preferred to all the others',
	choice4:  'works on a banana plantation',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\nThe headteacher asked the pupils to d̲i̲s̲p̲e̲r̲s̲e̲.̲',
		choice1:'assemble',
	choice2:  'come',
	choice3:	  'meet',
	choice4:	  'stay',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\nThe current is s͟l͟o͟w͟ downhill.',		
  	choice1:'abrupt',
	choice2:  'fresh',
	choice3:  'running',
	choice4:  'swift',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\nThe bread is s̲t̲a̲l̲e̲.̲',		
  	choice1:'burnt',
	choice2:  'delicious',
	choice3:  'fresh',
	choice4:  'mouldy',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\nAkos has nothing to be b͟o͟a͟s͟t͟f͟u͟l͟ of.',		
  	choice1:' afraid',
	choice2:  'anxious',
	choice3:  'ashamed',
	choice4:  'nervous',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\nThe pupils are c͟o͟n͟f͟i͟d͟e͟n͟t͟ of passing the examination.',
		choice1:'determined',
	choice2: 'doubtless',
	choice3:	 'uncertain',
	choice4:	 'uneasy',
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

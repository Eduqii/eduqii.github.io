
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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He is …………….poor that he cannot pay his bills.',
  	choice1:'so',
	choice2: 'too',
	choice3: 'very',
	choice4: 'rather',
  	answer: 1,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You will be late …………..you hurry.',
	choice1: 'if',
	choice2:  'or',
	choice3:  'unless',
	choice4:  'while',
	answer: 3,	 
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Aminu has been absent from class ……………..one month.',
  	choice1:'in',
	choice2: 'for',
	choice3: 'from',
	choice4: 'since',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Many people have been invited, but ……………..will be employed.',
  	choice1: 'few',
	choice2:  'a few',
	choice3:  'little',
	choice4:  'a little',
  	answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The teacher told the girl he had received …………of the two exercises.',
  	choice1: 'all',
	choice2:  'any',
	choice3:  'none',
	choice4:  'neither',
  	answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n My father has bought a …………..car',		
  	choice1:'private brand new',
	choice2:  'new brand private',
	choice3:  'private new brand',
	choice4:  'brand new private',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Mama is never ………..ready for anything.',	 
  	choice1: 'so',
	choice2:   'ever',
	choice3:   'even',
	choice4:   'rather',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Akua was …………..that she won four prizes.',
		choice1: 'a girl so brilliant',
	choice2:   'a so brilliant girl',
	choice3:	   'so brilliant a girl',
	choice4:	   'a brilliant so girl',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Before he entered the classroom, we ……….the chalkboard.',
		choice1:'cleaned',
	choice2:  'have cleaned',
	choice3:	  'had cleaned',
	choice4:	  'are cleaning',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I have forgotten all …………my friend told me.',		
  	choice1:'this',
	choice2:  'that',
	choice3:  'what',
	choice4:  'which',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The supervisor will ask the ………….to come and repair the pipe in the bath room.',
		choice1:'mason',
	choice2:  'repairer',
	choice3:	  'plumber',
	choice4:	  'lumber',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The stone fell into the river with a loud ………………',
		choice1:'bang',
	choice2:  'crash',
	choice3:	  'noise',
	choice4:	  'splash',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Aggie got …………mark for French in the examination.',
		choice1:'bad',
	choice2:  'worse',
	choice3:	  'the worse',
	choice4:	  'the worst',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n We won the school debating contest, …………we?',		
  	choice1:'hadn’t',
	choice2:  'didn’t',
	choice3:  'couldn’t',
	choice4:  'did',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Kwame looks very handsome, …………..?',		
  	choice1:'isn’t he',
	choice2:  'isn’t it',
	choice3:  'doesn’t he',
	choice4:  'does he',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Nana Yaa was suffering ……………measles.',		
  	choice1:'by',
	choice2:  'with',
	choice3:  'from',
	choice4:  'through',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The suspect was charged …………….pickpocketing.',		
  	choice1:'of',
	choice2:  'for',
	choice3:  'on',
	choice4:  'with',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n One e͟s͟s͟e͟n͟t͟i͟a͟l͟ item for making local soap is soda ash.',
		choice1:'correct',
	choice2:  'main',
	choice3:	  'real',
	choice4:	  'important',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Pupils are to read the i͟n͟s͟t͟r͟u͟c͟t͟i͟o͟n͟s͟ carefully.',
		choice1:'notices',
	choice2:  'demands',
	choice3:	  'commands',
	choice4:	  'directives',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The dog saw its i͟m͟a͟g͟e͟ in the water.',		
  	choice1:'nature',
	choice2:  'condition',
	choice3:  'reflection',
	choice4:  'attraction',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n We shall have the final r͟e͟h͟e͟a͟r͟s͟a͟l͟ for the play tonight',
		choice1:'meeting',
	choice2:  'practice',
	choice3:	  'trial',
	choice4:	  'preparation',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n My mother is skilled in d͟o͟m͟e͟s͟t͟i͟c͟ affairs',
		choice1:'local',
	choice2:  'internal',
	choice3:	  'everyday',
	choice4:	  'household',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Akweley w̲a̲s̲ ̲t̲a̲k̲e̲n̲ ̲a̲b̲a̲c̲k̲ on seeing a stranger in her room.\n' + 'This means Akweley was very',
		choice1:'angry',
	choice2:  'afraid',
	choice3:	  'confused',
	choice4:	  'surprised',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The employees s̲a̲w̲ ̲e̲y̲e̲ ̲t̲o̲ ̲e̲y̲e̲ with their manager.\n' + 'This means that the employees',
		choice1:'agreed completely with him',
	choice2:  'were very close to him',
	choice3:	  'rarely saw him',
	choice4:	  'greatly respected him',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The priest was i̲n̲ ̲h̲i̲g̲h̲ ̲s̲p̲i̲r̲i̲t̲s̲ during the sermon.\n' + 'This means that he was',
		choice1:'content',
	choice2:  'cheerful',
	choice3:	  'spiritual',
	choice4:	  'annoyed',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The opponents decided to b̲u̲r̲y̲ ̲t̲h̲e̲ ̲h̲a̲t̲c̲h̲e̲t̲.̲ \n' + 'This means that they decided to',		
  	choice1:'make peace',
	choice2:  'bury their guns',
	choice3:  'hold discussions',
	choice4:  'suspend the fighting',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The headmaster took the students’ version of the theft with a̲ ̲p̲i̲n̲c̲h̲ ̲o̲f̲ ̲s̲a̲l̲t̲.̲',
	choice1:'believed the students’ version.',
	choice2:  'doubted the students’ version.',
	choice3:	  'accepted the students’ version.',
	choice4:	  'ignored the students’ version.',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The judge a͟c͟q͟u͟i͟t͟t͟e͟d͟ four of the accused but …………….the rest.',
		choice1:'convicted',
	choice2:  'discharged',
	choice3:	  'cautioned',
	choice4:	  'rebuked',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n It pays to be c͟o͟u͟r͟t͟e͟o͟u͟s͟ rather than being …………..',
		choice1:'rude',
	choice2:  'wicked',
	choice3:	  'disobedient',
	choice4:	  'boastful',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Drivers who do not drive with c͟a͟r͟e͟ are sometimes charged with ………….',
		choice1:'speeding',
	choice2: 'drunkenness',
	choice3:	 'disobedience',
	choice4:	 'recklessness',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n King David was the h͟e͟i͟r͟ to the throne while the brother was the ……………..',
		choice1:'usurper',
	choice2:  'successor',
	choice3:	  'claimant',
	choice4:	  'descendant',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The secretary i͟n͟t͟e͟n͟t͟i͟o͟n͟a͟l͟l͟y͟ hid the documents but the clerk …………burnt them.',
		choice1:'willingly',
	choice2:  'hastily',
	choice3:	  'mistakenly',
	choice4:	  'carelessly',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n\n A poem of six lines is called a/an …………..',
		choice1:' octave',
	choice2:  'opera',
	choice3:	  'sextet',
	choice4:	  'sonnet',
		answer: 3,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' +'\n\n The atmosphere is ……………..',
  			choice1:'cheerful',
	choice2:  'friendly',
	choice3:		  'frightening',
	choice4:		  'undaunting',
		answer: 3,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n The state of the weather is emphasized by the word ………….',		
  	choice1:'angry',
	choice2:  'cloud',
	choice3:  'flashed',
	choice4:  'grey',
		answer: 1,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n ‘Lightning flashed …light from …..torch.’ is an example of …………',
		choice1:'alliteration',
	choice2:  'ellipsis',
	choice3:	  'parallelism',
	choice4:	  'personification',
		answer: 4,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n What is being referred to by the question, ‘How would she ……..happened?’',
		choice1:'current calm',
	choice2:  'imminent rain',
	choice3:	  'latent sky',
	choice4:	  'rumbling clouds',
		answer: 2,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' +'\n\n The extract is …………',		
  	choice1:'drama',
	choice2:  'poetry',
	choice3:  'prose',
	choice4:  'story',
		answer: 2,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n One special feature of prose is the ………….',		
  	choice1:'paragraph',
	choice2:  'stanza',
	choice3:  'stage direction',
	choice4:  'rhyme',
		answer: 1,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n The work of the novelist is in ………….',		
  	choice1:'drama',
	choice2:  'poetry',
	choice3:  'prose',
	choice4:  'verse',
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

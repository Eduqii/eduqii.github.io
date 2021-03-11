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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Two people perished …………….the spot.',
  	choice1:'upon',
	choice2: 'in',
	choice3: 'on',
	choice4: 'through',
  	answer: 3,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Oyo fell ill ……………..measles.',
	choice1: 'at',
	choice2:  'by',
	choice3:  'of',
	choice4:  'with',
	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The doctor gave ……………………to the patient.',  	
  	choice1: 'some good advice',
	choice2:  'much good advices',
	choice3:  'many good advice',
	choice4:  'some good advices',
  	answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n All girls were supposed to wear …………………during the Speech Day.',
  	choice1:'new, white, long dresses',
	choice2: 'new, long, white dresses',
	choice3: 'long, white, new dresses',
	choice4: 'white, new long dresses',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n ‘I think you know ………………already’, said the host to all the participants.',
		choice1:'one another',
	choice2:  'each other',
	choice3:	  'themselves',
	choice4:	  'ourselves',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The girls asserted that both tennis racquets were',	 
  	choice1: 'of Akologos.',
	choice2:   'Akologo’s.',
	choice3:   'Akologo’s own.',
	choice4:   'Akologo',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Children usually take ……………their parents in appearance.',
		choice1: 'after',
	choice2:   'from',
	choice3:	   'to',
	choice4:	   'up',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n We haven’t had …………….rice to eat this week.',
		choice1:'some',
	choice2:  'little',
	choice3:	  'any',
	choice4:	  'many',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The chief praised the ………………during the students demonstration.',
		choice1:'policemen’s behaviours',
	choice2:  'policemen behaviours',
	choice3:	  'policemen’s behaviour',
	choice4:	  'policemens’ behaviour',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n When the lights went off I …………my supper.',
		choice1:'have eaten',
	choice2:  'have been eating',
	choice3:	  'am eating',
	choice4:	  'was eating',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The doctor said she ……………if she had not kept strictly to her diet.',
		choice1:'has died',
	choice2:  'will die',
	choice3:	  'would die',
	choice4:	  'would have died',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n We saw the plane ………………for Kumasi',		
  	choice1:' take on',
	choice2:  'take of',
	choice3:  'take off',
	choice4:  'take out',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n There are many big houses in our area, ………….?',
		choice1:'isn’t it',
	choice2:  'aren’t they',
	choice3:	  'weren’t there',
	choice4:	   'aren’t there',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n You have cut the grass, ……………..?',		
  	choice1:'haven’t you',
	choice2:  'did you',
	choice3:  'didn’t you',
	choice4:  'had you',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n The new airport ………………next year.',		
  	choice1:'will be completed',
	choice2:  'shall complete',
	choice3:  'will be completing',
	choice4:  'shall have completed',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Walking in the rain is not good, ……………….?',		
  	choice1:'is not',
	choice2:  'is it',
	choice3:  'must not',
	choice4:  'must it',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n Go over your work carefully, …………….. you?',		
  	choice1:'do',
	choice2:  'will',
	choice3:  'may',
	choice4:  'shall',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n About fifty houses were d͟e͟m͟o͟l͟i͟s͟h͟e͟d͟ to make way for the new road.',		
  	choice1:'removed',
	choice2:  'attacked',
	choice3:  'destroyed',
	choice4:  'displayed',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The headmaster took d͟r͟a͟s͟t͟i͟c͟ action against the culprits.',		
  	choice1:'bold',
	choice2:  'dangerous',
	choice3:  'necessary',
	choice4:  'severe',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n It was f͟o͟r͟e͟c͟a͟s͟t͟ that there would be floods this year.',		
  	choice1:'deduced',
	choice2:  'predicted',
	choice3:  'imagined',
	choice4:  'observed',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Many people r͟e͟v͟e͟r͟e͟d͟ the old man for his charity to the poor.',
		choice1:'glorified',
	choice2:  'respected',
	choice3:	  'feared',
	choice4:	  'praised',
		answer: 2,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n When they reached the f͟r͟o͟n͟t͟i͟e͟r͟ , the customs officer stopped the car.',
		choice1:'fence',
	choice2:  'gate',
	choice3:	  'entrance',
	choice4:	  'border',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Awuni normally f̲e̲e̲l̲s̲ ̲a̲t̲ ̲h̲o̲m̲e̲ in my house. This means that Awuni …………….in my house.',		
  	choice1:'feels comfortable',
	choice2:  'lives',
	choice3:  'moves about',
	choice4:  'eats',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The students were advised to s̲t̲o̲p̲ ̲b̲u̲i̲l̲d̲i̲n̲g̲ ̲c̲a̲s̲t̲l̲e̲s̲ in the air. This mean that the students should',
		choice1:'be serious and realistic',
	choice2:  'not worry about castles',
	choice3:	  'be serious and hardworking',
	choice4:	  'not build any more castles',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The chief told his linguist n̲o̲t̲ ̲t̲o̲ ̲b̲e̲a̲t̲ ̲a̲b̲o̲u̲t̲ ̲t̲h̲e̲ ̲b̲u̲s̲h̲. This means that the linguist must',
		choice1:'not stammer',
	choice2:  'go straight to the point',
	choice3:	  'not enter the bush',
	choice4:	  'cut down the bush',
		answer: 2,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Immediately Ekuba’s mother left the house, she l̲e̲t̲ ̲t̲h̲e̲ ̲c̲a̲t̲ ̲o̲u̲t̲ ̲o̲f̲ ̲t̲h̲e̲ ̲b̲a̲g̲. This means that Ekuba',
		choice1:'bought a cat',
	choice2:  'took the cat from the bag',
	choice3:	  'left her house',
	choice4:	  'revealed the secret',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The teacher p̲o̲u̲r̲e̲d̲ ̲c̲o̲l̲d̲ ̲w̲a̲t̲e̲r̲ on Sena’s suggestion. This means that the teacher',
		choice1:'challenged Sena’s suggestion',
	choice2: 'approved of Sena’s suggestion',
	choice3:	 'discouraged Sena',
	choice4:	 'provoked Sena',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n He had applied for a p͟e͟r͟m͟a͟n͟e͟n͟t͟ job.',		
  	choice1:'a boring',
	choice2:  'a dull',
	choice3:  'an exacting',
	choice4:  'a temporary',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n He has a v͟i͟o͟l͟e͟n͟t͟ temper.',		
  	choice1:'mild',
	choice2:  'natural',
	choice3:  'flexible',
	choice4:  'pleasant',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n His position made him h̲u̲m̲b̲l̲e̲.̲',		
  	choice1:'stubborn',
	choice2:  'wicked',
	choice3:  'arrogant',
	choice4:  'selfish',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n That is a g͟e͟n͟u͟i͟n͟e͟ painting.',		
  	choice1:'bad',
	choice2:  'fake',
	choice3:  'damaged',
	choice4:  'poor',
		answer: 2,
  },
  {
  	question: 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence\n\n The soldier c͟l͟i͟m͟b͟e͟d͟ the mountain carefully.',		
  	choice1:'descended',
	choice2:  'circled',
	choice3:  'fell off',
	choice4:  'looked up',
		answer: 1,
  },
  {
  	question: 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence\n\n The main idea in a novel or play is the ……………….',
  	choice1:'suspense',
	choice2:  'plot',
	choice3:  'gist',
	choice4:  'theme',
		answer: 4,
  },
  {
  	question: 'From the options lettered A to D, choose the one that correctly answers the questions or completes the sentence\n\n The three main forms of literature are prose, drama and ………..',
		choice1:'novel',
	choice2:  'satire',
	choice3:	  'poetry',
	choice4:	  'prosody',
		answer: 3,
  },
  {
  	question: 'Read the following stanza and answer this question\n' + '(refer to Extract)\n\n' + 'Time in the stanza is being used as …………………..',		
  	choice1:'symbol',
	choice2:  'simile',
	choice3:  'synecdoche',
	choice4:  'personification',
		answer: 4,
  },
  {
  	question: 'Read the following stanza and answer this question\n' + 'The rhyme scheme of the stanza is …………….',  	
  	choice1:'abba',
	choice2:  'bbaa',
	choice3:  'abab',
	choice4:  'baba',
		answer: 1,
  },
  {
  	question: 'The place and time of the action of a play or novel is its ……………',		
  	choice1:'background',
	choice2:  'setting',
	choice3:  'scene',
	choice4:  'atmosphere',
		answer: 2,
  },
  {
  	question: 'One of the following helps best to create interest in a work of art:',
  	choice1:'rhythm',
	choice2:  'preface',
	choice3:  'epilogue',
	choice4:  'suspense',
		answer: 4,
  },
  {
  	question: ' The main function of imagery in literature is to make readers / listeners …………….',
  	choice1:'appreciate the great efforts of writers',
	choice2:  'understand clearly what writers put across',
	choice3:  'admire how learned writers are',
	choice4:  'know literature is different from other uses of language',
		answer: 2,
  },
  {
  	question: 'A character in a play that opposes the hero or heroine is the …………..',
  	choice1:'antagonist',
	choice2:  'challenger',
	choice3:  'opponent',
	choice4:  'protagonist',
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

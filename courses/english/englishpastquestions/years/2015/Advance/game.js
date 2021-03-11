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
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Ntim’s careless driving resulted …………… a fatal road accident.',
  	choice1:'in',
	choice2: 'to',
	choice3: 'into',
	choice4: 'with',
  	answer: 1,
  },
  {	
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Abibatu takes ………….. her mother in many ways.',
	choice1: ' by',
	choice2:  'on',
	choice3:  'up',
	choice4:  'after',
	answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Araba goes to school ………….. foot.',
  	choice1:'by',
	choice2: 'in',
	choice3: 'on',
	choice4: 'with',
  	answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The doctor advised the patient to abstain …………. smoking',  	
  	choice1: 'by',
	choice2:  'from',
	choice3:  'upon',
	choice4:  'with',
  	answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The relationship …………. group A and group B is cordial.',
  	choice1: 'of',
	choice2:  'with',
	choice3:  'among',
	choice4:  'between',
  	answer:3
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Edwin prefers fish ……………meat.',		
  	choice1:'to',
	choice2:  'for',
	choice3:  'from',
	choice4:  'than',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n His neighbor complained that the radio was ………..loud.',
	 choice1: 'far',
	choice2:   'too',
	choice3:	'much',
	choice4:	'enough',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The white horse is ………..than the black one.',
		choice1: 'the faster',
	choice2:   'very faster',
	choice3:	   'much the faster',
	choice4:	   'very much faster',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n I …………him; then I changed my mind.',		
  	choice1:'had told',
	choice2:  'have told',
	choice3:  'am telling',
	choice4:  'was going to tell',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n By the end of the day, I ………….the house.',		
  	choice1:'shall paint',
	choice2:  'shall be painting',
	choice3:  'shall have painted',
	choice4:  'shall have been painting',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You are a member of the society, …………..?',		
  	choice1:'isn’t it',
	choice2:  'are you',
	choice3:  'aren’t you',
	choice4:  'weren’t you',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Our captain is not a very reliable person, …………….?',
		choice1:'is he',
	choice2:  'isn’t he',
	choice3:	  'does he',
	choice4:	  'doesn’t he',
		answer: 1,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You have been to Lagos, ………………?',		
  	choice1:'did you',
	choice2:  'have you',
	choice3:  'didn’t you',
	choice4:  'haven’t you',
		answer: 4,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Joseph is the …………in the class.',		
  	choice1:'cleverer',
	choice2:  'cleverest',
	choice3:  'more clever',
	choice4:  'very clever',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The triplets love ……………very much',		
  	choice1:' each other',
	choice2:  'themselves',
	choice3:  'theirselves',
	choice4:  'one another',
		answer: 2,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n  …………….the watch is old, it is still working.',
	choice1:	 'Since',
	choice2:'Besides',
	choice3:'Although',
	choice4: 'However',
		answer: 3,
  },
  {
  	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The students set …………..early on their journey.',
		choice1:'up',
	choice2:  'in',
	choice3:	  'out',
	choice4:	  'about',
		answer: 3,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n If you are a true friend you will not d͟i͟s͟c͟l͟o͟s͟e͟ a secret.',
		choice1:'give',
	choice2:  'show',
	choice3:	  'display',
	choice4:	  'reveal',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n As John waited for the interview, he was very n̲e̲r̲v̲o̲u̲s̲.̲',
		choice1:'sad',
	choice2:  'afraid',
	choice3:	  'alarmed',
	choice4:	  'uneasy',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Patricia was s͟a͟t͟i͟s͟f͟i͟e͟d͟ with the results of the examination.',
		choice1:'pleased',
	choice2:  'convinced',
	choice3:	  'pampered',
	choice4:	  'encouraged',
		answer: 1,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The attitude of the gateman was very h̲o̲s̲t̲i̲l̲e̲.̲',		
  	choice1:'harsh',
	choice2:  'strange',
	choice3:  'abusive',
	choice4:  'unfriendly',
		answer: 4,
  },
  {
  	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n It was not his i͟n͟t͟e͟n͟t͟i͟o͟n͟ to hurt his younger brother.',		
  	choice1:'aim',
	choice2:  'decision',
	choice3:  'interest',
	choice4:  'ambition',
		answer: 1,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Ibrahim registered for the course a̲t̲ ̲t̲h̲e̲ ̲e̲l̲e̲v̲e̲n̲t̲h̲ ̲h̲o̲u̲r̲.̲\n' + 'This means that Ibrahim registered',
		choice1:'at eleven o’clock',
	choice2:  'a few hours before closing time',
	choice3:	  'during eleven hours of registration',
	choice4:	  'when it was almost too late',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Bob lives w̲i̲t̲h̲i̲n̲ ̲a̲ ̲s̲t̲o̲n̲e̲’̲s̲ ̲t̲h̲r̲o̲w̲ of the Jubilee Park.\n' + 'This means that Bob',		
  	choice1:' travels on a stony road',
	choice2:  'lives in a hut in the park',
	choice3:  'lives very close to the park',
	choice4:  'often throws stone at the park',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n  When James heard the sound of gun-shots, h̲i̲s̲ ̲h̲a̲i̲r̲ ̲s̲t̲o̲o̲d̲ ̲o̲n̲ ̲e̲n̲d̲.̲\n' + 'This means that James',		
  	choice1:'was worried',
	choice2:  'started crying',
	choice3:  'was frightened',
	choice4:  'became inactive',
		answer: 3,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Mary has gone to c̲h̲e̲e̲r̲ ̲u̲p̲ her friend\n'  + 'This means that Mary has gone to',		
  	choice1:'shout at her',
	choice2:  'give her gifts',
	choice3:  'tell her stories',
	choice4:  'make her happy',
		answer: 4,
  },
  {
  	question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The teacher’s abrupt question threw the pupil o̲f̲f̲ ̲b̲a̲l̲a̲n̲c̲e̲.̲\n' + 'This means that the pupil was',		
  	choice1:'hurt',
	choice2:  'annoyed',
	choice3:  'worried',
	choice4:  'confused.',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n While the m͟a͟j͟o͟r͟i͟t͟y͟ voted for a change, the …………were against any change.',
		choice1:'rivals',
	choice2:  'members',
	choice3:	  'minority',
	choice4:	  'opposition',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Imported rice is e͟x͟p͟e͟n͟s͟i͟v͟e͟ these days.',		
  	choice1:'free',
	choice2:  'cheap',
	choice3:  'tasty',
	choice4:  'scarce',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n The student was c͟o͟n͟d͟e͟m͟n͟e͟d͟ for his poor work.',		
  	choice1:'cheered',
	choice2: 'praised',
	choice3: 'rewarded',
	choice4: 'recommended',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Although he had applied for a p͟e͟r͟m͟a͟n͟e͟n͟t͟ post, he was only given a ………one.',
		choice1:'useful',
	choice2:  'boring',
	choice3:	  'labouring',
	choice4:	  'temporary',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.\n\n Some people pay much attention to their p͟h͟y͟s͟i͟c͟a͟l͟ needs.',		
  	choice1:'basic',
	choice2:  'moral',
	choice3:  'financial',
	choice4:  'spiritual',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'A comedy is a play that',
		choice1:'ends sadly',
	choice2:  'ends happily',
	choice3:	  'condemns society',
	choice4:	  'preaches honesty',
		answer: 2,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'The main female character in a play is the …………..',		
  	choice1:'hero',
	choice2:  'chorus',
	choice3:  'heroine',
	choice4:  'persona',
		answer: 3,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'Expressions that appeal to the senses are collectively called ………..',		
  	choice1:'irony',
	choice2:  'devices',
	choice3:  'pictures',
	choice4:  'imagery',
		answer: 4,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'The purpose of a comic relief is to ……………',		
  	choice1:'reduce tension',
	choice2:  'teach a moral lesson',
	choice3:  'set a moral standard',
	choice4:  'compound a character’s problems',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'A play is better enjoyed when ………..',		
  	choice1:'acted',
	choice2:  'read',
	choice3:  'discussed',
	choice4:  'memorised',
		answer: 1,
  },
  {
  	question: 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.\n' +  'A narrative poem usually ……………',		
  	choice1:'praises actions',
	choice2:  'tells a story',
	choice3:  'mourns the dead',
	choice4:  'condemns actions',
		answer: 2,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n The last line is a/an ………..',
		choice1:'litotes',
	choice2:  'hyperbole',
	choice3:	  'euphemism',
	choice4:	  'understatement',
		answer: 2,
  },
  {
  	question: 'Read the following extract below and answer this Question\n' + '(refer to Extract)' + '\n\n The rhyme scheme of the stanza is ………….',		
  	choice1:'abcd',
	choice2:  'abca',
	choice3:  'abcb',
	choice4:  'abba',
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

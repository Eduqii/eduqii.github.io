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
		question: 'A group of instructions that directs a computer is called',
		choice1:'logic.',
		choice2:  'memory.',
		choice3:  'program.',
		choice4:  'storage.',
		answer: 3,
	},
	{
		question: 'Devices that extend their services to enhance the function of the computer are called',
		choice1:'hardware.',
		choice2:  'software.',
		choice3:  'peripherals.',
		choice4:  'firmware.',
		answer: 3,
	},

	{
		question: 'The physical material on which a computer keeps data, instructions, and information is called',
		choice1:'primary storage.',
		choice2:  'secondary storage.',
		choice3:  'tertiary storage.',
		choice4:  'cache storage.',
		answer: 1
	},

	{
		question: 'When a computer is on, it is normally termed',
		choice1:'information.',
		choice2:  'programming.',
		choice3:  'running.',
		choice4:  'working.',
		answer: 3,
	},

	{
		question: 'Working with more than one application at the same time is known as',
		choice1:'double tasking.',
		choice2:  'multitasking.',
		choice3:  'running.',
		choice4:  'launching.',
		answer: 2
	},

	{
		question: 'The duplication of an original document is referred to as',
		choice1:'backup.',
		choice2:  'back down.',
		choice3:  'production.',
		choice4:  'copying.',
		answer: 4,
	},

	{
		question: 'The steps data go through to become information are',
		choice1:'information steps.',
		choice2:  'information technology.',
		choice3:  'information processing cycle.',
		choice4:  'information distribution.',
		answer: 3,
	},

	{
		question: 'Which of the following is a keyboard layout format?',
		choice1:'QWERTY',
		choice2:  'QWRETY',
		choice3:  'QWRTEY',
		choice4:  'QWREYT',
		answer: 1
	},

	{
		question: 'Which of the following programs has features like gridbook?',
		choice1:'Microsoft Paint',
		choice2:  'Spreadsheet',
		choice3:  'Open Source Writer',
		choice4:  'Microsoft Word',
		answer: 2
	},

	{
		question: 'System software is a platform which runs',
		choice1:'source codes.',
		choice2:  'application software.',
		choice3:  'operating system.',
		choice4:  'utilities.',
		answer: 2
	},

	{
		question: 'The memory that stores permanent instructions is referred to as',
		choice1:'random access memory.',
		choice2:  'read only memory.',
		choice3:  'write once read many memory.',
		choice4:  'virtual memory.',
		answer: 2
	},

	{
		question: 'The interaction between the input and output devices is controlled by the',
		choice1:'BIOS',
		choice2:  'LINUX.',
		choice3:  'CPU.',
		choice4:  'RAM.',
		answer: 1
	},

	{
		question: 'Which of the following is not a storage device?',
		choice1:'Pen drive',
		choice2:  'Touch pad',
		choice3:  'Hard disk',
		choice4:  'Floppy disk',
		answer: 2
	},

	{
		question: 'To boot a computer system, the user needs',
		choice1:'word processing software.',
		choice2:  'printer attached.',
		choice3:  'virus checking program.',
		choice4:   'operating system.',
		answer: 4,
	},

	{
		question: 'The following are features on the GUI except',
		choice1:'command line.',
		choice2:  'icon.',
		choice3:  'menu driven.',
		choice4:  'window.',
		answer: 1
	},

	{
		question: 'When files are cleared from the computer, it is known as',
		choice1:'restoring.',
		choice2:  'editing.',
		choice3:  'deleting.',
		choice4:  'removing.',
		answer: 3,
	},

	{
		question: 'Viewing television for long periods can damage an individual"s',
		choice1:'nose.',
		choice2:  'eye.',
		choice3:  'feet.',
		choice4:  'mouth.',
		answer: 2
	},

	{
		question: 'The following are good posture positions when using a computer except',
		choice1:'back straight.',
		choice2:  'eyes on monitor.',
		choice3:  'elbows on the table.',
		choice4:  'feet on the floor.',
		answer: 3,
	},

	{
		question: 'The ethical issue that relates to the responsibility of those who collect data to ensure that the data is correct is',
		choice1:' accuracy.',
		choice2:  'privacy.',
		choice3:  'access.',
		choice4:  'ethics.',
		answer: 1
	},

	{
		question: 'The legal right to control the production and selling of a book, play, film, or software is called',
		choice1:'production right.',
		choice2:  'copyright.',
		choice3:  'trader right.',
		choice4:  'patent.',
		answer: 2
	},

	{
		question: 'A word document created with a word processing program will have the extension',
		choice1:'.doc',
		choice2:  '.txt',
		choice3:  '.ppt',
		choice4:  '.xls',
		answer: 1
	},

	{
		question: 'A collection of linked documents or pages stored on millions of computers and distributed across the world is called',
		choice1:'Internet.',
		choice2:  'Hyperlink.',
		choice3:  'World Wide Web.',
		choice4:  'Browser.',
		answer: 3,
	},


		{
		question: 'The set of rules that enables different types of computers and networks on the internet to communicate with one another is the',
		choice1:'internet rules.',
		choice2:  'protocols.',
		choice3:  'network rules.',
		choice4:  'communication rules.',
		answer: 2
	},

	{
		question: 'The fastest form of sending information is through the',
		choice1:'Ghana Post.',
		choice2:  'EMS.',
		choice3:  'E-mail.',
		choice4:  'DHL.',
		answer: 3,
	},

	{
		question: 'After work, your mother decided to bring a copy of the data home to work on. Which of the following storage devices would you advise her to use?\n' + 'I. RAM\n' + 'II. Floppy disk\n' + 'III. Pen drive\n' + 'IV. Hard disk',
		choice1:'I and II only',
		choice2:  'II, III and IV only',
		choice3:  'II and III only',
		choice4:  'I, II, III and IV',
		answer: 3,
	},

	{
		question: 'The process of moving different portions of a document on the screen into view is called',
		choice1:'downward.',
		choice2:  'upward.',
		choice3:  'moving.',
		choice4:  'scrolling.',
		answer: 4,
	},

	{
		question: ' Which of the following is not a reason for using ICT in education?',
		choice1:'ICT tools increase learner motivation and engagement.',
		choice2: 'ICT tools facilitate the acquisition of basic skills in Maths, English, Science, etc',
		choice3:'ICT tools enhance teaching through the use of presentation software.',
		choice4:'ICT tools force students learn at others’ pace.',
		answer: 4,
	},

	{
		question: 'Which of the following computer keyboard keys are used for issuing commands?',
		choice1:'Alphanumeric',
		choice2:  'Numeric',
		choice3:  'Standard',
		choice4:  'Function',
		answer: 4,
	},

	{
		question: 'Which of the following mouse buttons when clicked, provides a menu which a user can choose from?',
		choice1:'Left button',
		choice2:  'Right button',
		choice3:  'Scroll ball',
		choice4:  'Scroll button',
		answer: 2
	},

	{
		question: 'Making changes to an existing document is referred to as',
		choice1:'creating.',
		choice2:  'modifying.',
		choice3:  'adjusting.',
		choice4:  'editing.',
		answer: 4,
	},

	{
		question: 'A symbol on the screen that indicates where the next character typed will appear is',
		choice1:'text mark.',
		choice2:  'indicator.',
		choice3:  'pointing stick.',
		choice4:  'insertion point.',
		answer: 4,
	},

	{
		question: 'Which of the following steps can be used to change font type of a document?',
		choice1:'Format/Select/Font/Font Type',
		choice2:  'Font/Select/Format/Font Type/Ok',
		choice3:  'Select/Format/Font Type/Ok',
		choice4:  'Format/Font/Highlight/Ok/Font Type',
		answer: 3,
	},

	{
		question: 'The Standard Toolbar contains buttons that',
		choice1:'control page margins and tabs.',
		choice2:  'perform the most common tasks.',
		choice3:  'help users navigate through the document.',
		choice4:  'close and resize windows.',
		answer: 2
	},

	{
		question: 'In using MS Word, one can decide to see exactly how the pages of the current document will appear when printed. Which of the following best describes this?',
		choice1:'Printer Print',
		choice2:  'Print Preview',
		choice3:  'Printer View',
		choice4:  'Print View',
		answer: 2
	},

	{
		question: 'The basic information on the internet can be in the form of the following except',
		choice1:'text.',
		choice2:  'sound.',
		choice3:  'graphic.',
		choice4:  'game.',
		answer: 4,
	},
	
	{
		question: 'If you want any information on the internet that contains the keywords “Kofi”, “Annan” and “Ghana”, which of the following would be the most appropriate search text to provide to the search engine?\n' + 'I. Search for Kofi Annan and Ghana on any website\n' + 'II. I want any information on Kofi Annan and Ghana\n' + 'III. Kofi Annan Ghana',
		choice1:' I only',
		choice2: 'II only',
		choice3: 'I and II only',
		choice4: 'III only',
		answer: 4,
	},

	{
		question: 'A student wants to search for information on the internet to have solution to the ICT assignment from school. Which of the following do you recommend for him/her to use?',
		choice1:'E-mail Address',
		choice2:  'Search Engine',
		choice3:  'Compose',
		choice4:  'Inbox',
		answer: 2
	},

	{
		question: 'A set of cells in the horizontal direction in a spreadsheet application is called',
		choice1:'active cell.',
		choice2:  'column.',
		choice3:  'row.',
		choice4:  'sheet.',
		answer: 3,
	},

	{
		question: 'In spreadsheets, you can create a relationship between two cells using',
		choice1:'numbers.',
		choice2:  'text.',
		choice3:  'formulae.',
		choice4:  'rows.',
		answer: 3,
	},

	{
		question: 'The sign used to prompt a spreadsheet that a user is about to apply a formula/function to a cell is',
		choice1:'= or +',
		choice2:  '= or –',
		choice3:  '= or *',
		choice4:  '= or /',
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

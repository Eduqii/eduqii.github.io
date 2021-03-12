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
		question: 'The brain of the computer is the',
		choice1:'monitor',
		choice2:  'system software',
		choice3:  'read only memory',
		choice4:  'central processing unit',
		answer: 4,
	},
	{
		question: 'An example of output device is the',
		choice1:'keyboard',
		choice2:  'mouse',
		choice3:  'printer',
		choice4:  'scanner',
		answer: 3,
	},

	{
		question: 'One byte is equal to',
		choice1:'two bits',
		choice2:  'eight bits',
		choice3:  'sixteen bits',
		choice4:  'one thousand bits',
		answer: 2,
	},

	{
		question: 'To boot a computer means to',
		choice1:'put it off',
		choice2:  'put it on',
		choice3:  'restart it',
		choice4:  'take it away',
		answer: 2,
	},

	{
		question: 'The horizontal bar that normally lies at the bottom of a computer desktop screen is called',
		choice1:'taskbar',
		choice2:  'start button',
		choice3:  'horizontal ruler',
		choice4:  'quick launch toolbar',
		answer: 1,
	},

	{
		question: 'A folder within another folder is called',
		choice1:'file',
		choice2:  'subfolder',
		choice3:  'inside folder',
		choice4:  'innermost folder',
		answer: 2,
	},

	{
		question: 'Processed material which is meaningful to the user in computing is called',
		choice1:'data',
		choice2:  'file',
		choice3:  'information',
		choice4:  'record',
		answer: 3,
	},

	{
		question: 'The copyright laws protect the works of an author for a period of his life time and',
		choice1:'40 years after his death',
		choice2:  '50 years after his death',
		choice3:  '60 years after his death',
		choice4:  '70 years after his death',
		answer: 4,
	},

	{
		question: 'An example of a function key on a computer keyboard is',
		choice1:'F1',
		choice2:  'Q',
		choice3:  '@',
		choice4:  'NmLk',
		answer: 1,
	},

	{
		question: 'Entry of data into a computer is termed',
		choice1:'input',
		choice2:  'output',
		choice3:  'process',
		choice4:  'distribution',
		answer: 1,
	},

	{
		question: 'The following are hardware components except',
		choice1:'keyboard',
		choice2:  'monitor',
		choice3:  'mouse',
		choice4:  'windows',
		answer: 4,
	},

	{
		question: 'The following devices can be found in the system unit except',
		choice1:'ports',
		choice2:  'memory',
		choice3:  'motherboard',
		choice4:  'scroll wheel',
		answer: 4,
	},

	{
		question: 'The method of reproducing copies of a document is termed',
		choice1:'copying',
		choice2:  'pasting',
		choice3:  'photocopying',
		choice4:  'printing',
		answer: 1,
	},

	{
		question: 'Storage media that are similar to compact discs but store more data are known as',
		choice1:'pen drives',
		choice2:  'hard disks',
		choice3:  'floppy disks',
		choice4:  'digital versatile discs.',
		answer: 4,
	},

	{
		question: 'To boot a computer system, the user needs',
		choice1:'printer attached',
		choice2:  'operating system',
		choice3:  'virus checking program',
		choice4:  'word processing software',
		answer: 2,
	},

	{
		question: 'The number of command buttons on the control menu are',
		choice1:'2.',
		choice2:  '3.',
		choice3:  '4.',
		choice4:  '5.',
		answer: 4,
	},

	{
		question: 'The location where a file is stored is called',
		choice1:'folder',
		choice2:  'icon',
		choice3:  'page',
		choice4:  'website',
		answer: 1,
	},

	{
		question: 'Viewing television for long periods can damage an individual’s',
		choice1:'eye',
		choice2:  'head',
		choice3:  'mouth',
		choice4:  'nose',
		answer: 1,
	},

	{
		question: 'Which of the following is an effect of loud ringing tone of mobile phone?',
		choice1:'Headache',
		choice2:  'Wrist pain',
		choice3:  'Bleeding nose',
		choice4:  'Damage to hearing',
		answer: 4,
	},

	{
		question: 'Which of the following cannot cause computer virus infection?',
		choice1:'Internet',
		choice2:  'Input devices',
		choice3:  'Computer network',
		choice4:  'Removable storage devices',
		answer: 2,
	},

	{
		question: 'The following are features of a word processing application window except',
		choice1:'desktop',
		choice2:  'font',
		choice3:  'print',
		choice4:  'zoom',
		answer: 1,
	},

	{
		question: 'Which of the following is not a component of a uniform resource locator (URL) ?',
		choice1:'Web protocol',
		choice2:  'Name of browser',
		choice3:  'Name of web server',
		choice4:  'Name of the file with the directory',
		answer: 4,
	},


		{
		question: 'The speed of modem is measured in',
		choice1:'baud',
		choice2:  'bit',
		choice3:  'byte',
		choice4:  'hertz',
		answer: 4,
	},

	{
		question: 'A special software that is used to access the internet is called',
		choice1:'address bar',
		choice2:  'search engine',
		choice3:  'web browser',
		choice4:  'windows xp.',
		answer: 3,
	},

	{
		question: 'One billion bytes is approximately one',
		choice1:'gigabyte',
		choice2:  'kilobyte',
		choice3:  'megabyte',
		choice4:  'terabyte',
		answer: 1,
	},

	{
		question: 'Changing the desktop wall paper of a computer is termed',
		choice1:'background change',
		choice2:  'editing the desktop',
		choice3:  'customizing the desktop',
		choice4:  'formatting the desktop',
		answer: 1,
	},

	{
		question: 'The use of ICT in learning and teaching is to make it',
		choice1:'interesting and boring',
		choice2:  'uninteresting but not boring',
		choice3:  'interesting but students do not learn at their pace',
		choice4:  'easy and interesting, students learn at their pace.',
		answer: 4,
	},

	{
		question: 'To create a space between characters, words and sentences, use the',
		choice1:'backspace key',
		choice2:  'enter key',
		choice3:  'shift key',
		choice4:  'spacebar key',
		answer: 4,
	},

	{
		question: 'Which computer keyboard key allows users to erase characters to the left of the cursor?',
		choice1:'Backspace key',
		choice2:  'Delete key',
		choice3:  'Insert key',
		choice4:  'Tab key',
		answer: 1,
	},

	{
		question: 'The process that is used to recall a document previously saved is termedThe process that is used to recall a document previously saved is termed',
		choice1:'Copy',
		choice2:  'Enter',
		choice3:  'Open',
		choice4:  'Save as',
		answer: 3,
	},

	{
		question: 'Double-clicking on a program icon on a computer desktop',
		choice1:'cuts the program’s window',
		choice2:  'copies the program’s window',
		choice3:  'closes the program’s window',
		choice4:  'opens the program’s window',
		answer: 4,
	},

	{
		question: 'Which of the following steps will open, check and correct errors, and submit the file for safe keeping under a word processing application?',
		choice1:'File, Open, Edit and Save',
		choice2:  'Open, File, Edit and Save',
		choice3:  'Open, File, Close and Save',
		choice4:  'Start, Open, Edit and Save',
		answer: 1,
	},

	{
		question: 'The process of a user placing the cursor at one end of a text, holds down the left mouse button and drag to the other end of the text is referred to as',
		choice1:'copying',
		choice2:  'cutting',
		choice3:  'moving',
		choice4:  'selecting',
		answer: 4,
	},

	{
		question: 'Previewing a document before printing is necessary because it',
		choice1:'formats the document.',
		choice2:  'displays the name of the document.',
		choice3:  'displays copy and paste of documents.',
		choice4:  'displays how the document will look after printing.',
		answer: 4,
	},

	{
		question: 'Which of the following options is used to access a message from an Inbox in an electronic mailing?',
		choice1:'Mail',
		choice2:  'Send/ Receive',
		choice3:  'Import / Export',
		choice4:  'Create New Account',
		answer: 1,
	},
	
	{
		question: 'Which of the following should a user bypass before accessing an email?',
		choice1:'Gmail and password',
		choice2:  'Yahoo and username',
		choice3:  'Password and username',
		choice4:  'Computer name and password.',
		answer: 3,
	},

	{
		question: 'Which of the following command buttons in the browser enables a user to fetch the latest copy of the webpage?',
		choice1:'Backward',
		choice2:  'Forward',
		choice3:  'Refresh',
		choice4:  'Stop',
		answer: 3,
	},

	{
		question: 'A spreadsheet cell name is referenced by a',
		choice1:'letter',
		choice2:  'number',
		choice3:  'letter and number',
		choice4:  'number and letter.',
		answer: 3,
	},

	{
		question: 'Mathematical calculations in a spreadsheet application are called',
		choice1:'labels',
		choice2:  'formulae',
		choice3:  'numbers',
		choice4:  'values',
		answer: 2,
	},

	{
		question: 'In a spreadsheet application, which of the following can be identified by a letter?',
		choice1:'Cell',
		choice2:  'Column',
		choice3:  'Range',
		choice4:  'Row',
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

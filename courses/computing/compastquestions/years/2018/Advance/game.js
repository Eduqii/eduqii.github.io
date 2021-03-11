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
		question: 'How many characters make up a byte?',
		choice1:'1',
		choice2:  '2',
		choice3:  '3',
		choice4:  '4',
		answer: 1
	},
	{
		question: 'Which of the following devices sends commands into the computer?',
		choice1:'Keyboard',
		choice2:  'Pen drive',
		choice3:  'Printer',
		choice4:  'System unit',
		answer: 1
	},

	{
		question: 'Which of the following storage media normally stores the operating system?',
		choice1:'Flash disk',
		choice2:  'Hard disk',
		choice3:  'Magnetic tape',
		choice4:  'Zip disk',
		answer: 2,
	},

	{
		question: 'Using a computer application is known as',
		choice1:'installing',
		choice2:  'launching',
		choice3:  'operating',
		choice4:  'running',
		answer: 4,
	},

	{
		question: 'The system tray is also called',
		choice1:'clock',
		choice2:  'notification area',
		choice3:  'quick launch',
		choice4:  'taskbar',
		answer: 2,
	},

	{
		question: 'The default storage location for files and folders is',
		choice1:'My Briefcase',
		choice2:  'My Computer',
		choice3:  'My Document',
		choice4:  'My Network Places',
		answer: 3,
	},

	{
		question: 'Which of the following statements are true about files?\n' + 'I. A file can be renamed whilst it is open.\n' + 'II. A file cannot be deleted whilst it is open.\n' + 'III. A file deleted from a computer may be found in a recycle bin or trash bin.',
		choice1:'I & II only',
		choice2:  'I & III only',
		choice3:  'II & III only',
		choice4:  'I & II & III',
		answer: 3,
	},

	{
		question: 'Which of the following devices is used to process information?',
		choice1:'Computer',
		choice2:  'Speedometer',
		choice3:  'Thermometer',
		choice4:  'Weighing scale',
		answer: 1
	},

	{
		question: 'Which of the following items is not a source of computer virus?',
		choice1:'CD-R',
		choice2:  'CD-ROM',
		choice3:  'Internet',
		choice4:  'Pen drive',
		answer: 2,
	},

	{
		question: 'How many arrow keys are found on the computer keyboard?',
		choice1:'2',
		choice2:  '3',
		choice3:  '4',
		choice4:  '5',
		answer: 3,
	},

	{
		question: 'In a spreadsheet application, which of the following displays the contents of the active cell?',
		choice1:'Formula bar',
		choice2:  'Menu bar',
		choice3:  'Name box',
		choice4:  'Standard toolbar',
		answer: 1
	},

	{
		question: 'The following are components in the system unit except',
		choice1:'CPU',
		choice2:  'RAM',
		choice3:  'ROM',
		choice4:  'VDU',
		answer: 4,
	},

	{
		question: 'Microsoft Word, Encarta kids, Mavis Beacon Teaches Typing are examples of',
		choice1:'application software',
		choice2:  'operating system',
		choice3:  'open source package',
		choice4:  'system software',
		answer: 1
	},

	{
		question: 'The following are input devices except',
		choice1:'keyboard',
		choice2:  'monitor',
		choice3:  'mouse',
		choice4:  'scanner',
		answer: 2,
	},

	{
		question: 'From which of the following storage media will deleted items be sent to the recycle bin?',		
		choice1:'Flash disk',
		choice2:  'Floppy disk',
		choice3:  'Hard disk',
		choice4:  'Zip disk',
		answer: 3,
	},

	{
		question: 'The name given to the background area of a computer when turned on is',
		choice1:'desktop',
		choice2:  'folder',
		choice3:  'icon',
		choice4:  'window',
		answer: 1
	},

	{
		question: 'Which of the following is used as a shortcut means to open files, folders and programs?',
		choice1:'Desktop',
		choice2:  'Icon',
		choice3:  'Screen',
		choice4:  'Start menu',
		answer: 2,
	},

	{
		question: 'A folder inside another folder is called',
		choice1:'attached folder',
		choice2:  'main folder',
		choice3:  'parent folder',
		choice4:  'subfolder',
		answer: 4,
	},

	{
		question: 'Which of the following is the effect of loud ringing tone?',
		choice1:'Headache',
		choice2:  'Hearing impairment',
		choice3:  'Neck pain',
		choice4:  'Wrist pain',
		answer: 2,
	},

	{
		question: 'The computer program designed to prevent viruses from damaging the computer and its files is called',
		choice1:'anti-virus',
		choice2:  'virus',
		choice3:  'virus infection',
		choice4:  'virus protector',
		answer: 1
	},

	{
		question: 'The default orientation for Word document is',
		choice1:'A4',
		choice2:  'landscape',
		choice3:  'letter',
		choice4:  'portrait',
		answer: 4,
	},

	{
		question: 'In a web browser, where is the website address typed?',
		choice1:'Address bar',
		choice2:  'Home page',
		choice3:  'Menu bar',
		choice4:  'Status bar',
		answer: 1
	},


		{
		question: 'Radio satellite setup has two parts namely receiver and',
		choice1:'broadcaster',
		choice2:  'recorder',
		choice3:  'transformer',
		choice4:  'transmitter',
		answer: 4,
	},

	{
		question: 'A system of interconnected computers, telephones, or other communication devices that can communicate with one another and share applications and data is referred to as',
		choice1:'extranet',
		choice2:  'internet',
		choice3:  'intranet',
		choice4:  'network',
		answer: 2,
	},

	{
		question: 'The capacity of the 3 ½ inches floppy disk is',
		choice1:'80 KB',
		choice2:  '1.2 MB',
		choice3:  '1.4 MB',
		choice4:  '2.88 MB',
		answer: 3,
	},

	{
		question: 'The background image that appears on a computer desktop is known as',
		choice1:'background theme',
		choice2:  'background panel',
		choice3:  'screen saver',
		choice4:  'wallpaper',
		answer: 4,
	},

	{
		question: 'Which of the following programs would support the study of Mathematics?',
		choice1:'CorelDraw',
		choice2:'Encarta',
		choice3:'MS Excel',
		choice4:'MS-Word',
		answer:	2,
	},				
	{
		question: 'To create a space between characters, words and sentences, use the',
		choice1:'backspace key',
		choice2:'key',
		choice3: 'shift', 
		choice4: 'space bar', 
		answer: 4,
	},

	{
		question: 'Which part of the computer mouse button is used to select an object on-screen?Which part of the computer mouse button is used to select an object on-screen?',
		choice1:'Left button',
		choice2:  'Right button',
		choice3:  'Scroll ball',
		choice4:  'Scroll button',
		answer: 1
	},

	{
		question: 'Making changes and corrections of grammatical errors to an existing document is referred to as',
		choice1:'correction',
		choice2:  'deleting',
		choice3:  'editing',
		choice4:  'formatting',
		answer: 3,
	},

	{
		question: 'Which of the following keyboard keys can be used to delete characters in a Word Processing program?',	
		choice1:'Backspace',
		choice2:  'Shift',
		choice3:  'Space bar',
		choice4:  'Tab',
		answer: 1
	},

	{
		question: 'Which of the following keyboard key should be pressed to start a new paragraph in a Word Processing document?',		
		choice1:'Control + Enter key',
		choice2:  'Down cursor key',
		choice3:  'Enter key',
		choice4:  'Shift + Enter key',
		answer: 3,
	},

	{
		question: 'Which of the following bars displays the heading of an open window?',
		choice1:'Menu bar',
		choice2:  'Status bar',
		choice3:  'Standard toolbar',
		choice4:  'Title bar',
		answer: 4,
	},

	{
		question: 'The print preview button is located on which of the following toolbars?',
		choice1:'Drawing',
		choice2:  'Formatting',
		choice3:  'Header and Footer',
		choice4:  'Standard',
		answer: 4,
	},

	{
		question: 'Which of the following is compulsory when composing and sending an e-mail?',
		choice1:'Message Body',
		choice2:  'Message Header/Subject',
		choice3:  'Recipient’s E-mail Address',
		choice4:  'Sender’s Name',
		answer: 3,
	},
	
	{
		question: 'Specialized program that assists a user to locate information on the web and on the internet is called',
		choice1:'agents',
		choice2:  'search engine',
		choice3:  'web',
		choice4:  'web portal',
		answer: 2,
	},

	{
		question: 'Which of the following is a complete website address?',
		choice1:'http://www.waecgh.org',
		choice2:  'http://www.waecgh.org',
		choice3:  'http://www.waecgh.org',
		choice4:  'http://www.waecgh.org',
		answer: 4,
	},

	{
		question: 'In a spreadsheet application, which of the following symbols represents multiplication?',
		choice1:'x',
		choice2:  '*',
		choice3:  '÷',
		choice4:  '#',
		answer: 2,
	},

	{
		question: 'Which of the following is used for multiplication operation in spreadsheet functions?',
		choice1:'ADD',
		choice2:  'AVERAGE',
		choice3:  'MULTIPLICATION',
		choice4:  'PRODUCT',
		answer: 4,
	},

	{
		question: 'Which of the following is used to find the minimum number among a set of numbers in spreadsheet functions?',
		choice1:'MAX',
		choice2:  'MIN',
		choice3:  'MAXIMUM',
		choice4:  'MINIMUM',
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

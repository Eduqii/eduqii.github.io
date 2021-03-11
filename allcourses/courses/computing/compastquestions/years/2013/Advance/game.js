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
		question: 'The flat panel screen is also known as',		
		choice1:'CRT',
		choice2:  'LCD',
		choice3:  'OCR',
		choice4:  'VCD',
		answer: 2,
	},
	{
		question: 'The device that the computer uses to keep data is',		
		choice1:'input device',
		choice2:  'output device',
		choice3:  'processing device',
		choice4:  'storage device',
		answer: 4,
	},

	{
		question: 'The first key on the computer keyboard is',		
		choice1:'Caps Lock',
		choice2:  'Delete',
		choice3:  'Enter',
		choice4:  'Esc',
		answer: 4,
	},

	{
		question: 'In which of the following are the storage devices arranged on the basis of lowest to the highest capacity?',
		choice1:'CD, DVD, Floppy Disk and Hard Disk',
		choice2:  'Floppy Disk, Hard Disk, DVD and CD',
		choice3:  'Floppy Disk, CD, DVD and Hard Disk',
		choice4:  'Floppy Disk, DVD, CD and Hard Disk',
		answer: 3,
	},

	{
		question: 'A pen drive',		
		choice1:'inputs information',
		choice2:  'puts out information',
		choice3:  'retrieves information',
		choice4:  'stores information',
		answer: 4,
	},

	{
		question: 'The main storage medium within the system unit of the computer is the',
		choice1:'CD-ROM',
		choice2:  'FDD',
		choice3:  'HDD',
		choice4:  'USB',
		answer: 3,
	},

	{
		question: 'To boot a computer is the same as to',
		choice1:'shut down the computer',
		choice2:  'restart the computer',
		choice3:  'start the computer',
		choice4:  'stop the computer',
		answer: 3,
	},

	{
		question: 'On which bar is the system clock located?',		
		choice1:'Menu bar',
		choice2:  'Scroll bar',
		choice3:  'Task bar',
		choice4:  'Tollbar',
		answer: 3,
	},

	{
		question: 'The command button used to exit windows application is the',		
		choice1:'close button',
		choice2:  'maximize button',
		choice3:  'minimize button',
		choice4:  'restore button',
		answer: 1,
	},

	{
		question: 'An example of an operating system is',		
		choice1:'CALC',
		choice2:  'DISK',
		choice3:  'DOS',
		choice4:  'WORD',
		answer: 3,
	},

	{
		question: 'To copy a file means to',		
		choice1:'cut the file from the desktop',
		choice2:  'delete the file into recycle bin',
		choice3:  'make a duplicate of the file',
		choice4:  'remove the file from a folder',
		answer: 3,
	},

	{
		question: 'Programs that perform specific task for users are referred to as',		
		choice1:'application software',
		choice2:  'computer software',
		choice3:  'operating software',
		choice4:  'system software',
		answer: 1,
	},

	{
		question: 'A group of files are stored in a',		
		choice1:'folder',
		choice2:  'graphic',
		choice3:  'text',
		choice4:  'word',
		answer: 1,
	},

	{
		question: 'The operation whereby the computer manipulates data to produce information is known as',
		choice1:'capturing',
		choice2:  'processing',
		choice3:  'recording',
		choice4:  'retrieving',
		answer: 2,
	},

	{
		question: 'Which of the following components emits radiation?',		
		choice1:' relief',
		choice2: 'Hard', 	
		choice3: 'Mobile',		
		 choice4: 'Speaker',
		answer: 3,
	},

	{
		question: 'The legal right that does not allow people to copy intellectual property without the permission of the original owner is called',
		choice1:'copyright',
		choice2:  'freeware',
		choice3:  'piracy',
		choice4:  'privacy',
		answer: 1,
	},

	{
		question: 'Software that presents lessons in a movie-like manner is referred to as',		
		choice1:'multiplicity',
		choice2:  'multimedia',
		choice3:  'multipurpose',
		choice4:  'multitasking',
		answer: 2,
	},

	{
		question: 'The symbols B, I, U are commonly used buttons found on the',		
		choice1:'drawing toolbar',
		choice2:  'formatting toolbar',
		choice3:  'menu toolbar',
		choice4:  'standard toolbar',
		answer: 2,
	},

	{
		question: 'Right-clicking a mouse on an open window',		
		choice1:'creates a new document',
		choice2:  'opens a file menu',
		choice3:  'opens a new window',
		choice4: 'opens a context menu if available',
		answer: 4,
	},

	{
		question: 'Which of the following computer keyboard keys is used to delete characters from left to right on-screen?',
		choice1:'Alternate',
		choice2:  'Backspace',
		choice3:  'Delete',
		choice4:  'Shift',
		answer: 2,
	},

	{
		question: 'Which of the following computer keys allows the user to type uppercase letters?',
		choice1:'Alternate Key',
		choice2:  'Control Key',
		choice3:  'Caps Lock Key',
		choice4:  'Num Lock Key',
		answer: 3,
	},

	{
		question: 'Which of the following keys is used for multiple selection of texts that are not continuous?',
		choice1:'Alt',
		choice2:  'Ctrl',
		choice3:  'Del',
		choice4:  'Shift',
		answer: 2,
	},


		{
		question: 'When a user clicks within a selected text by holding down the left mouse button, and then transfers the cursor to a different location within the same document, the text will be',
		choice1:'cut',
		choice2:  'moved',
		choice3:  'copied',
		choice4:  'deleted',
		answer: 2,
	},

	{
		question: 'Which of the following menu titles contains the bullet and numbering command?',
		choice1:'Edit menu',
		choice2:  'File menu',
		choice3:  'Format menu',
		choice4:  'Insert menu',
		answer: 3,
	},

	{
		question: 'In order to apply bold formatting to a section of existing text, the user must first',
		choice1:'click on the formatting button',
		choice2:  'click the shortcut mouse button',
		choice3:  'save the document',
		choice4:  'select the section to be formatted',
		answer: 4,
	},

	{
		question: 'The save command is found under which of the following menu buttons?',
		choice1:'Edit',
		choice2:  'File',
		choice3:  'Insert',
		choice4:  'Tools',
		answer: 2,
	},

	{
		question: 'Which of the following command buttons is found on the standard toolbar?',
		choice1:'Bold',
		choice2:  'Bullets',
		choice3:  'Redo',
		choice4:  'Undo',
		answer: 4,
	},

	{
		question: ' When a text automatically moves to the next line at the end of a margin in a word processing program, it is referred to as',
		choice1:'text wrap',
		choice2:  'word wrap',
		choice3:  'text movement',
		choice4:  'word movement',
		answer: 2,
	},

	{
		question: 'Which of the following is a tool on the drawing toolbar?',		
		choice1:'Arrows',
		choice2: 'Change Case',
		choice3: 'Drop Cap',
		choice4: 'Text Direction',
		answer: 1,
	},

	{
		question: 'A rectangle can be drawn in word processing application using the',
	choice1:'Arrow',
	choice2: 'Circle',
	choice3: 'Oval',
	choice: 'Square',		
		answer: 4,
	},

	{
		question: 'The device which is used to produce hard copies from personal computers in schools is',
		choice1:'photocopier',
		choice2:  'monitor',
		choice3:  'printer',
		choice4:  'scanner',
		answer: 3,
	},

	{
		question: 'A computer program that enables users to surf the internet is known as',
		choice1:'internet explorer',
		choice2:  'navigator',
		choice3:  'web browser',
		choice4:  'internet surfer',
		answer: 3,
	},

	{
		question: 'Word processing is used mainly by',		
		choice1:'accountants',
		choice2:  'artists',
		choice3:  'engineers',
		choice4:  'secretaries',
		answer: 4,
	},

	{
		question: 'Which of the following deices will enable users to get access to the internet connection?',
		choice1:'Keyboard',
		choice2:  'Modem',
		choice3:  'Projector',
		choice4:  'Scanner',
		answer: 2,
	},

	{
		question: 'Transferring data from a remote computer to local computer is referred to as',
		choice1:'download',
		choice2:  'linkdown',
		choice3:  'upload',
		choice4:  'linkup',
		answer: 1,
	},
	
	{
		question: 'Specialized programs that assist users to locate information on the internet are called',
		choice1:'agents',
		choice2:  'internet browsers',
		choice3:  'search engines',
		choice4:  'web',
		answer: 3,
	},

	{
		question: 'Which of the following refers to unsolicited e-mails in the form of advertising and chain letters?',
		choice1:'Flaming',
		choice2:  'Inbox',
		choice3:  'Spam',
		choice4:  'Trash',
		answer: 3,
	},

	{
		question: 'The software responsible for the management of the basic operations of the computer is the',
		choice1:'application program',
		choice2:  'device drivers',
		choice3:  'operating system',
		choice4:  'utility program',
		answer: 3,
	},

	{
		question: 'On which of the following toolbars is the print preview button located?',		
		choice1:'Drawing',
		choice2:  'Formatting',
		choice3:  'Header and Footer',
		choice4:  'Standard',
		answer: 4,
	},

	{
		question: 'The intersection of the 8th row and the 7th column in a spreadsheet application will have the cell reference',
		choice1:'8G',
		choice2:  'G8',
		choice3:  '7H',
		choice4:  'H7',
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

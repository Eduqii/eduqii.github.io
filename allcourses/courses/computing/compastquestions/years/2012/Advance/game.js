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
		question:  'The device that converts computer output into displayed images is the',
choice1: 'hard disk',
choice2: 'monitor',
choice3: 'printer',
choice4: 'processor',
		answer: 2,
	},
	{
		question:  'The least number of input devices that a computer system can have is',
choice1: '1',
choice2: '2',
choice3: '3',
choice4: '4',
		answer: 1,
	},

	{
		question:  'Which of the following devices has the largest storage capacity',

choice1: 'Compact disc',
choice2: 'Digital versatile disc',
choice3: 'Floppy disk',
choice4: 'Hard disk',
		answer: 4,
	},

	{
		question:  'The device used to ensure a constant flow of power supply to a computer system is the',

choice1: 'Stabilizer',
choice2: 'Step-down transformer',
choice3: 'Step-up transformer',
choice4: 'Uninterruptiblepower supply',
			answer: 4,
	},

	{
		question:  'The total number of command buttons on the title bar of an opened word processing window is',

choice1: '2',
choice2: '3',
choice3: '5',
choice4: '6',
		answer: 2,
	},

	{
		question:  'Processed or transformed facts which are meaningful to the user is called',

choice1: 'Data',
choice2: 'Information',
choice3: 'Input',
choice4: 'Output',
		answer: 2,
	},

	{
		question:  'The following are possible health hazards of prolonged use of the computer system except',

choice1: 'back and neck pains',
choice2: 'eye strain',
choice3: 'tuberculosis',
choice4: 'wrist pains',
		answer: 3,
	},

	{
		question: 'Which key on the keyboard is used to erase characters from right to left in word processing application?',

choice1: 'Backspace',
choice2: 'Delete',
choice3: 'Insert',
choice4: 'Pause',
		answer: 1,
	},

	{
		question:  'The key on the QWERTY keyboard used to produce alphabetic upper case letters is',

choice1: 'Caps lock',
choice2: 'Home',
choice3: 'Num Lock',
choice4: 'Tab',
		answer: 1,
	},

	{
		question: 'Given sizes and designs of letters, numbers and symbols that are displayed in a word processing  document are referred to as',

choice1: 'Align',
choice2: 'Bullet',
choice3: 'Font',
choice4: 'Indent',
		answer: 3,
	},

	{
		question: ' Which of the following is a tool on the drawing toolbar of a word processing program?',

choice1: 'Align',
choice2: 'Bold',
choice3: 'View',
choice4: 'Oval',
		answer: 4,
	},

	{
		question: ' When an image is copied, it first goes to the',

choice1: 'Clip art',
choice2: 'Clip board',
choice3: 'My document',
choice4: 'Recycle bin',
		answer: 2,
	},

	{
		question: ' To press the letter J, which finger is appropriate to use on a QWERTY keyboard?',

choice1: 'Left index finger',
choice2: 'Left middle finger',
choice3: 'Right index finger',
choice4: 'Right middle finger',
		answer: 3,
	},

	{
		question: ' The internet is a',

choice1: 'global network of computers',
choice2: 'government agency that links computers',
choice3: 'software for designing programs',
choice4: 'special network of computers in an office',
		answer: 1,
	},

	{
		question:  ' The computer equivalence of a sheet of paper divided into rows and columns in the office suite called',

choice1: 'Database',
choice2: 'Electronicsheet', 
choice3: 'Spreadsheet',
choice4: 'Word processor',
		answer: 3,
	},

	{
		question: ' The temporary working memory of a computer system is the',

choice1: 'arithmetic logic unit',
choice2: 'flash memory',
choice3: 'random access memory',
choice4: 'read only memory',
		answer: 3,
	},

	{
		question: ' The software responsible for the management of the basic operations of the computer is the',

choice1: 'application program',
choice2: 'device drivers',
choice3: 'operating system',
choice4: 'utility program',
		answer: 3,
	},

	{
		question: ' The bar on the desktop which displays opened applications and other icons is referred to as',

choice1: 'scroll bar',
choice2: 'taskbar',
choice3: 'title bar',
choice4: 'toolbar',
		answer: 2,
	},

	{
		question: ' The act of pressing a computer mouse button twice quickly without moving the mouse is termed',

choice1: 'double clicking',
choice2: 'right clicking',
choice3: 'single clicking',
choice4: 'normal clicking',
		answer: 1,
	},

	{
		question: ' The following are good practices in the computing environment except',

choice1: 'copyrighting of software',
choice2: 'designing of cards',
choice3: 'networking of computers',
choice4: 'pirating of software',
		answer: 4,
	},

	{
		question: 'Which of the following software can be used to enhance teaching and learning through the use of  pictures, video and sound?',

choice1: 'Multimedia software',
choice2: 'Network software',
choice3: 'Programming software',
choice4: 'Utility software',
		answer: 1,
	},

	{
		question: ' The total number of keys on a standard QWERTY keyboard is',

choice1: '96',
choice2: '104',
choice3: '108',
choice4: '116',
		answer: 2,
	},


		{
		question: ' Which of the following is a valid folder name?',

choice1: 'Black/Stars',
choice2: 'Black_Stars',
choice3: 'Black:Stars',
choice4: 'Black*',
		answer: 2,
	},

	{
		question: ' A program on the computer which enables users to type letters to friends is the',

choice1: 'Browser',
choice2: 'Spreadsheet',
choice3: 'Utility',
choice4: 'Word processor',
		answer: 4,
	},

	{
		question: ' The command that enables the user to save a previously saved document under a new name is',

choice1: 'new',
choice2: 'rename',
choice3: 'save',
choice4: 'save as',
		answer: 4,
	},

	{
		question: ' The standard toolbar contains buttons that',

choice1: 'close and resize windows',
choice2: 'control page margins and tabs',
choice3: 'perform the most common tasks',
choice4: 'help users to navigate through the document',
		answer: 3,
	},

	{
		question:  'To see exactly how the pages of a current document will appear when printed, the command given the',

choice1: 'page setup command',
choice2: 'print command',
choice3: 'print preview command',
choice4: 'view command',
		answer: 3,
	},

	{
		question: ' A tool for locating information on the internet is the',

choice1: 'database engine',
choice2: 'internet browser',
choice3: 'search engine',
choice4: 'web browser',
		answer: 3,
	},

	{
		question: ' An entity in a file system which contains a group of files is called a',

choice1: 'cabinet',
choice2: 'container',
choice3: 'document',
choice4: 'folder',
		answer: 4,
	},

	{
		question: ' The creation of a copy of data on a computer system for safe keeping externally is referred to as',

choice1: 'data backup',
choice2: 'data entry',
choice3: 'data filtering',
choice4: 'data restoration',
		answer: 1,
	},

	{
		question: ' The letter that normally represents the floppy disk in an operating system is',

choice1: 'A',
choice2: 'C',
choice3: 'D',
choice4: 'E',
		answer: 1,
	},

	{
		question: ' Recycle bin or trash bin contains deleted files and folders from the',

choice1: 'floppy disk',
choice2: 'flash disk',
choice3: 'hard disk',
choice4: 'zip disk',
		answer: 3,
	},

	{
		question: ' Keys on a computer keyboard which are used to move the cursor in a specified direction are called',

choice1: 'arrow keys',
choice2: 'function keys',
choice3: 'shift keys',
choice4: 'special purpose keys',
		answer: 1,
	},

	{
		question: ' To underline a selected text in a word processing program, the keys used are',

choice1: 'Ctrl + U',
choice2: 'Shift + U',
choice3: 'Alt + U',
choice4: 'Del + U',
		answer: 1,
	},

	{
		question: ' Double clicking on a word in a word processing program selects the',

choice1: 'document',
choice2: 'paragraph',
choice3: 'sentence',
choice4: 'word',
		answer: 4,
	},
	
	{
		question: ' All of the following are reasons for using ICT in education except',

choice1: 'forcing students to learn at others’ pace',
choice2: 'increasing learner motivation and engagement',
choice3: 'facilitating the acquisition of basic skills in subject areas',
choice4: 'enhancing teaching through the use of presentation software',
		answer: 1,
	},

	{
		question: 'In word processing program, lines, block arrows and flow charts are found on which of the question: following toolbars?',

choice1: 'Drawing',
choice2: 'Formatting',
choice3: 'Picture',
choice4: 'Standard',
		answer: 1,
	},

	{
		question: ' Which program icon on the desktop leads to the disk drives',

choice1: 'Internet Explorer',
choice2: 'My Computer',
choice3: 'My Document',
choice4: 'My Network Places',
		answer: 2,
	},

	{
		question: 'Which of the following terms refers to unsolicited emails in the form of advertising or chain letters?',

choice1: 'Compose',
choice2: 'Inbox',
choice3: 'Spam',
choice4: 'Trash',
		answer: 3,
	},

	{
		question: ' A computer virus is capable of',

choice1: 'enhancing the contents of a file',
choice2: 'maintaining the computer system',
choice3: 'making the work of the computer easy',
choice4: 'slowing down the computer system performance',
		answer: 4,
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

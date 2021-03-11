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
		question: 'An electronic and programmable device that processes data into useful information is called',
		choice1:'computer',
		choice2:  'peripheral',
		choice3:  'processor',
		choice4:  'technology',
		answer: 1,
	},
	{
		question: 'Which of the following media uses laser technology to write and read data?',
		choice1:'Floppy disk',
		choice2:  'Hard disk',
		choice3:  'Optical disc',
		choice4:  'Pen drive',
		answer: 3,
	},

	{
		question: 'Turning off the computer is known as',
		choice1:'booting',
		choice2:  'installation',
		choice3:  'programming',
		choice4:  'shut down',
		answer: 4,
	},

	{
		question: 'The following are items located on the default taskbar except',
		choice1:'date',
		choice2:  'clock',
		choice3: 'recycle bin',
		choice4:'start menu button',
		answer: 3,
	},

	{
		question: 'Files are best kept in',
		choice1:'icons',
		choice2:  'folders',
		choice3:  'programs',
		choice4:  'applications',
		answer: 2
	},

	{
		question: 'The end results of the information processing cycle that cannot be touched is referred to as',
		choice1:'hard copy',
		choice2:  'hardware',
		choice3:  'soft copy',
		choice4:  'software',
		answer: 3,
	},

	{
		question: 'A malicious software specially designed to cause a computer system to be slow and malfunction is',
		choice1:'an application',
		choice2:  'a bacteria',
		choice3:  'a germ',
		choice4:  'a virus',
		answer: 4,
	},

	{
		question: 'The arrow keys on the computer keyboard are also referred to as',
		choice1:'cursor keys',
		choice2:  'function keys',
		choice3:  'shift keys',
		choice4:  'special purpose keys',
		answer: 1,
	},

	{
		question: 'The name given to each cell according to its column label and row number is called',
		choice1:'active cell',
		choice2:  'cell formula',
		choice3:  'cell reference',
		choice4:  'highlighted cell',
		answer: 3,
	},

	{
		question: 'Which of the following applications is an example of a Word processor?',
		choice1:'Excel',
		choice2:  'Lotus 1-2-3',
		choice3:  'Notepad',
		choice4:  'Print artist',
		answer: 3,
	},

	{
		question: 'The only software that runs without a user’s instruction on a computer is the',
		choice1:'application software',
		choice2:  'operating software',
		choice3:  'scanner program',
		choice4:  'storage program',
		answer: 2
	},

	{
		question: 'The liquid Crystal Display Monitor of a computer is also known as the',
		choice1:'cathode ray tube',
		choice2:  'display screen',
		choice3:  'flat panel display',
		choice4:  'television display',
		answer: 3,
	},

	{
		question: 'A pen-like device that is used to enter data by applying pressure on a screen is the',
		choice1:'joystick',
		choice2:  'mouse',
		choice3:  'pointer',
		choice4:  'stylus',
		answer: 4,
	},

	{
		question: 'One gigabyte of data approximates to',
		choice1:'10 megabytes of data',
		choice2:  '100 megabytes of data',
		choice3:  '1000 megabytes of data',
		choice4:  '10,000 megabytes of data',
		answer: 3,
	},

	{
		question: 'Which of the following devices will turn off first when shutting down the computer?',		
		choice1:'Monitor',
		choice2:  'Stabilizer',
		choice3:  'System unit',
		choice4:  'Uninterruptible Power Supply',
		answer: 3,
	},

	{
		question: 'The title bar of an opened application always displays the name of the application and the name of the',
		choice1:'computer',
		choice2:  'document',
		choice3:  'software',
		choice4:  'system',
		answer: 2
	},

	{
		question: 'To remove unwanted shortcuts from the desktop which of the following options will be appropriate? \n' + 'I. Click on the short icon once and press delete key on the keyboard \n' + 'II. Drag the shortcut icon into the Recycle Bin \n' + 'III. Right-click on the shortcut icon and select delete from the pop-up menu.',
		choice1:'I and II only',
		choice2:  'I and III only',
		choice3:  'II and III only',
		choice4:  'I, II and III',
		answer: 4,
	},

	{
		question: 'The safety measure to prevent back ache when using the computer for a very long time is to',
		choice1:'answer or receive calls when charging mobile phone',
		choice2:  'avoid plugging ICT tools on damaged sockets',
		choice3:  'position the body correctly',
		choice4:  'use plastic chair always',
		answer: 3,
	},

	{
		question: ' The best measure that computer users should practice to reduce the chances of wrist and finger pains due to long term usage of the computer is to',
		choice1:' adjust the lightening of the computer screen',
		choice2:  'close the eyes and rest them for one minute',
		choice3:  'spread fingers apart',
		choice4:  'use adjustable chair always',
		answer: 3,
	},

	{
		question: 'Illegal copying of operating system, application software, music and videos is referred to as copyright',
		choice1:'law',
		choice2:  'issues',
		choice3:  'protection',
		choice4:  'infringement',
		answer: 4,
	},

	{
		question: 'To resave an edited document, use',
		choice1:'Ctrl + C',
		choice2:  'Ctrl + S',
		choice3:  'Ctrl + V',
		choice4:  'Ctrl + X',
		answer: 2
	},

	{
		question: 'A collection of linked documents or pages stored on millions of computers and distributed across the world is called',
		choice1:'browser',
		choice2:  'hyperlink',
		choice3:  'internet',
		choice4:  'world wide web',
		answer: 4,
	},


		{
		question: 'The device used to transform digital signals to analogue signals and vice versa on a network is a',		
		choice1:'hub',
		choice2:  'modem',
		choice3:  'telephone',
		choice4:  'digital box',
		answer: 2
	},

	{
		question: 'Google is an example of a',
		choice1:'browser',
		choice2:  'search engine',
		choice3:  'spam mail',
		choice4:  'website',
		answer: 2
	},

	{
		question: 'Mrs Famiyeh wants to copy information onto a compact disc, clean the content and later copy the information again. Which of the following media would advise her to use?',
		choice1:'CD',
		choice2:  'CD-R',
		choice3:  'CD-RW',
		choice4:  'CD-ROM',
		answer: 3,
	},

	{
		question: 'To execute more than one program at the same time, the system software being used should be capable of',
		choice1:'compatibility',
		choice2:  'multitasking',
		choice3:  'multiprocessing',
		choice4:  'portability',
		answer: 2,
	},

	{
		question: 'Which of the following statements best describes a computer operator? A person who',
		choice1:'carries a computer from one location to the other to work',
		choice2:'obtains a degree in computer science and its related fields of study',
		choice3:'operates the device which inputs and outputs data from the computer',
		choice4:'writes computer programs for a specific purpose',
		answer:	2,
	},	
	{
		question: 'A document which shows its entire text in upper case means that the user has activated the',
		choice1:'alt key',
		choice2:  'caps lock key',
		choice3:  'num lock key',
		choice4:  'shift + F3',
		answer: 2
	},

	{
		question: 'Pressing and releasing the left mouse button twice in quick succession is terms',
		choice1:'dragging',
		choice2:  'double-clicking',
		choice3:  'left-clicking',
		choice4:  'right-clicking',
		answer: 2
	},

	{
		question: 'Which of the following keys is used to create a new line in Word processing?',
		choice1:'Ctrl key',
		choice2:  'Enter key',
		choice3:  'Esc key',
		choice4:  'Shift key',
		answer: 2
	},

	{
		question: 'The feature in Word processors that automatically moves the cursor to the beginning of the next line when the current typing line ends is called',
		choice1:'auto text',
		choice2:  'auto correct',
		choice3:  'line flow',
		choice4:  'word wrap',
		answer: 4,
	},

	{
		question: ' A red wavy line under a word in a Word processing document refers to word',		
		choice1:'not in the computer dictionary',
		choice2:  'not recognized by the computer',
		choice3:  'too long for the computer',
		choice4:  'too short for the computer',
		answer: 1,
	},

	{
		question: 'The shortcut to some commands on the menu bar of a Word processing application program can be found on the',		
		choice1:'scroll bar',
		choice2:  'status bar',
		choice3:  'standard toolbar',
		choice4:  'title bar',
		answer: 3,
	},

	{
		question: 'Which of the following document views would show the document as it would look when it is printed?',
		choice1:'Normal view',
		choice2:  'Outline view',
		choice3:  'Print layout view',
		choice4:  'Web layout view',
		answer: 3,
	},

	{
		question: 'The buttons for reload/ refresh, back, stop and forward can be found on the following applications except',
		choice1:'Search engine',
		choice2:  'Web browser',
		choice3:  'Website',
		choice4:  'WhatsApp',
		answer: 4,
	},
	
	{
		question: 'The software that enable users access web pages on the internet is called',
		choice1:'browser',
		choice2:  'website',
		choice3:  'access engine',
		choice4:  'search engine',
		answer: 1,
	},

	{
		question: 'In computing, the exchange of information is referred to as',
		choice1:'communication',
		choice2:  'conversation',
		choice3:  'education',
		choice4:  'entertainment',
		answer: 1,
	},

	{
		question: 'Which of the following functions is used to find the mean number in a set of numbers in Spreadsheet?',
		choice1:'Average',
		choice2:  'Maximum',
		choice3:  'Minimum',
		choice4:  'Summation',
		answer: 1,
	},

	{
		question: 'The content of a selected cell is shown in the',
		choice1:'formula bar',
		choice2:  'name box',
		choice3:  'status bar',
		choice4:  'title bar',
		answer: 1,
	},

	{
		question: 'An application that helps the user to change any number in a cell and immediately see the result of that change in another cell is a',
		choice1:'Database',
		choice2:  'Presentation',
		choice3:  'Spreadsheet',
		choice4:  'Word processor',
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

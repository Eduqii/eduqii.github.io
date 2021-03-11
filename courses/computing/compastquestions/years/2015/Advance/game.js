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
		question: 'Which of the following computer keyboard keys is used to type upper case letters when the caps lock light is off?',
		choice1:'Control key',
		choice2: 'Enter key',
		choice3: 'Insert key',
		choice4: 'Shift key',
		answer: 4,
	},
	{
		question: 'Which of the following devices are used to feed a computer system with data?',
		choice1:'Keyboard and monitor',
		choice2:  'Keyboard and mouse',
		choice3:  'Mouse and monitor',
		choice4:  'Mouse and printer',
		answer: 2,
	},

	{
		question: 'A computer accepts data input, processes the data and produces',
		choice1:'byte',
		choice2:  'data',
		choice3:  'output',
		choice4:  'storage',
		answer: 3,
	},

	{
		question: 'The component of the computer that houses the motherboard and the power supply unit is called',
		choice1:'central processing unit',
		choice2:  'monitor',
		choice3:  'printer',
		choice4:  'system unit',
		answer: 4,
	},

	{
		question: 'Which component of the computer resembles the typewriter?',
		choice1:'Keyboard',
		choice2:  'Monitor',
		choice3:  'Mouse',
		choice4:  'Webcam',
		answer: 1,
	},

	{
		question: 'The optical storage media among the following is',
		choice1:'compact disc',
		choice2:  'floppy disk',
		choice3:  'hard disk',
		choice4:  'magnetic disk',
		answer: 1,
	},

	{
		question: 'Which of the following media stores data temporarily?',
		choice1:'Floppy disk',
		choice2:  'Hard disk',
		choice3:  'Random Access Memory',
		choice4:  'Read Only Memory',
		answer: 3,
	},

	{
		question: 'Which of the following devices must be turned on first when booting the computer?',
		choice1:'Central Processing Unit',
		choice2:  'Monitor',
		choice3:  'Printer',
		choice4:  'System Unit',
		answer: 4,
	},

	{
		question: 'The part of the central processing unit responsible for performing all logical operations is',
		choice1:'ALU',
		choice2:  'CU',
		choice3:  'RAM',
		choice4:  'ROM',
		answer: 1,
	},

	{
		question: 'When files and folders are deleted from the computer, they go into the',
		choice1:'Briefcase',
		choice2:  'Desktop',
		choice3:  'Delete bin',
		choice4:  'Recycle bin',
		answer: 4,
	},

	{
		question: 'Which of the following gives the user a log of all opened programs?',
		choice1:'Start button',
		choice2:  'Start menu',
		choice3:  'Taskbar',
		choice4:  'Title bar',
		answer: 3,
	},

	{
		question: 'Which of the following would happen when a user double clicks on a folder?',
		choice1:'A sub-folder would be created',
		choice2:  'The folder would be closed',
		choice3:  'The folder would be deleted',
		choice4:  'The folder would be opened',
		answer: 4,
	},

	{
		question: 'Dragging a folder from one drive to a window on the same drive is equivalent to a',
		choice1:'copy operation',
		choice2:  'cut operation',
		choice3:  'delete operation',
		choice4:  'move operation',
		answer: 4,
	},

	{
		question: 'The process whereby the computer manipulates data to produce information is known as',
		choice1:'capturing',
		choice2:  'processing',
		choice3:  'recording',
		choice4:  'retrieving',
		answer: 2,
	},

	{
		question: 'The stages of information processing cycle under ICT are',
		choice1:'input, output, process and distribution',
		choice2:  'input, process, output and distribution',
		choice3:  'input, process, distribution and output',
		choice4:  'input, distribution, output and process.',
		answer: 2,
	},

	{
		question: 'Which of the following is a problem to computer users as a result of radiation from the monitor?',
		choice1:'Body pains',
		choice2:  'Dizziness',
		choice3:  'Eye irritation',
		choice4:  'Loss of grip strength',
		answer: 3,
	},

	{
		question: 'Which of the following is a reason for copyrighting ICT tools or technologies?',
		choice1:'To avoid distribution of viruses',
		choice2:  'To encourage people to make illegal copies',
		choice3:  'To protect the intellectual works of the inventors',
		choice4:  'To ensure poorer people do not have access to ICT tools',
		answer: 3,
	},

	{
		question: 'Which of the following is a bad practice in the usage of ICT tools?',
		choice1:'Making or receiving phone calls whilst driving',
		choice2:  'Not receiving phone calls when charging it',
		choice3:  'Use of air conditioning to improve dry atmosphere',
		choice4:  'Use of footstools to adjust leg positioning when working on computers',
		answer: 1,
	},

	{
		question: 'To search for information on various topics, which of the following packages is used?',
		choice1:'Database',
		choice2:  'Encarta',
		choice3:  'Presentation',
		choice4:  'Spreadsheet',
		answer: 2,
	},

	{
		question: 'If a user places the mouse cursor at one end of a text, holds down the left button and drags to the other end of the text, the effect will be',
		choice1:'copying the text',
		choice2:  'cutting the text',
		choice3:  'moving the text',
		choice4:  'selecting the text',
		answer: 4,
	},

	{
		question: 'To underline selected text(s) under a word processing environment, use the shortcut keys',
		choice1:'Ctrl+U',
		choice2:  'Shift+U',
		choice3:  'Alt+U',
		choice4:  'Insert+U',
		answer: 1,
	},

	{
		question: 'A collection of separate windows applications sold as a group is called',
		choice1:'command',
		choice2:  'communication',
		choice3:  'integrated',
		choice4:  'suite',
		answer: 4,
	},


		{
		question: 'Adding 3-D effect to an object is done through the',
		choice1:'Auto Formatting dialogue box',
		choice2:  'Drawing Toolbar',
		choice3:  'Formatting Toolbar',
		choice4:  'Graphic Styles menu',
		answer: 2,
	},

	{
		question: 'Which of the following options is required to save a document with a different name?',
		choice1:'File, New',
		choice2:  'File, Close',
		choice3:  'File, Save',
		choice4:  'File, Save As',
		answer: 4,
	},

	{
		question: 'The process of automatically moving an entire word to start the next line in a word processing program is called',
		choice1:'text wrap',
		choice2:  'text movement',
		choice3:  'word wrap',
		choice4:  'word movement',
		answer: 3,
	},

	{
		question: 'In the symbol H2O, the 2 appears as a',
		choice1:'number',
		choice2:  'positive integer',
		choice3:  'subscript',
		choice4:  'superscript',
		answer: 3,
	},

	{
		question: 'The shift key on a computer keyboard is used to',
		choice1:'erase characters',
		choice2:  'toggle cases of letters',
		choice3:  'insert a space into a word document',
		choice4:  'type a word rather than a character',
		answer: 2,
	},

	{
		question: 'Which of the following document views will enable a user to view a document as it will appear on a printed page?',
		choice1:'Normal view',
		choice2:  'Outline view',
		choice3:  'Print layout view',
		choice4:  'Web layout view',
		answer: 3,
	},

	{
		question: 'The print preview button is located on which of the following toolbars?',
		choice1:'Drawing toolbar',
		choice2:  'Formatting toolbar',
		choice3:  'Header/Footer toolbar',
		choice4:  'Standard toolbar',
		answer: 4,
	},

	{
		question: 'Which of the following is an icon on the drawing toolbar?',
		choice1:'Arrows',
		choice2:  'Change Case',
		choice3:  'Drop Cap',
		choice4:  'Text Direction',
		answer: 1,
	},

	{
		question: 'Transferring data from a local computer to a remote computer is referred to as',
		choice1:'downlinking',
		choice2:  'downloading',
		choice3:  'uplinking',
		choice4:  'uploading',
		answer: 4,
	},

	{
		question: 'In computing, an element which links from one document to another or within the same document is called',
		choice1:'hyperlink',
		choice2:  'pointer',
		choice3:  'web browser',
		choice4:  'web page',
		answer: 1,
	},

	{
		question: 'Information printed on paper is referred to as',
		choice1:'carbon copy',
		choice2:  'hard copy',
		choice3:  'print copy',
		choice4:  'soft copy',
		answer: 2,
	},

	{
		question: 'The button that opens a dialogue box for users to create an email message is',
		choice1:'Back',
		choice2:  'Compose',
		choice3:  'Create',
		choice4:  'Refresh',
		answer: 2,
	},
	
	{
		question: 'Computer virus is capable of',
		choice1:'enhancing the contents of a file',
		choice2:  'maintaining the computer system',
		choice3:  'making the work of the computer easy',
		choice4:  'slowing down the computer system performance',
		answer: 4,
	},

	{
		question: 'In an email environment, the acronym BCC refers to',
		choice1:'Blank Carbon Copy',
		choice2:  'Bulk Carbon Copy',
		choice3:  'Blind Carbon Copy',
		choice4:  'Backup Carbon Copy',
		answer: 3,
	},

	{
		question: 'A computer program that enables users to surf the internet is called',
		choice1:'internet surfer',
		choice2:  'web browser',
		choice3:  'web navigation',
		choice4:  'web surfer',
		answer: 2,
	},

	{
		question: 'Specialized programs that assist a user to locate information on the internet is called',
		choice1:'electronic mail',
		choice2:  'search engine',
		choice3:  'web browser',
		choice4:  'web portal',
		answer: 2,
	},

	{
		question: 'The sign which represents an insertion of a formula in a spreadsheet program is',
		choice1:'= or +',
		choice2:  '= or –',
		choice3:  '= or *',
		choice4:  '= or /',
		answer: 2,
	},

	{
		question: 'Which of the following terms in a spreadsheet is identified by a letter and a number?',
		choice1:'Column',
		choice2:  'Cell',
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

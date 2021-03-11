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
		question: 'The most common means by which data are input into the computer is through the',
		choice1: 'mouse',
		choice2: 'keyboard',
		choice3: 'microphone',
		choice4: 'joystick',
		answer: 2,
	},
	{
		question: 'Computer devices such as mouse, trackpad and joystick are referred to as',
		choice1: 'Output devices',
		choice2: 'Pointing devices',
		choice3: 'Standard devices',
		choice4: 'Internal devices',
		answer: 2,
	},
	{
		question: 'The flat panel screen is also known as?',
		choice1: 'LCD',
		choice2: 'VCD',
		choice3: 'CRT',
		choice4: 'OCR',
		answer: 1,
	},
	{
		question: 'Which of the following is a storage medium?',
		choice1: 'Mouse',
		choice3: 'Printer',
		choice2: 'Keyboard',
		choice4: 'Flash memory',
		answer: 4,
	},
	{
		question: 'The two components of the personal computer main memory are',
		choice1: 'RAM and CU',
		choice2: 'RAM and ROM',
		choice3: 'ROM and CU',
		choice4: 'ALU and CU',
		answer: 2,
	},
	{
		question: 'Which of the following devices has the largest storage capacity?',
		choice1: 'Digital versatile disc',
		choice2: 'Compact disc',
		choice3: 'Floppy disk',
		choice4: 'Hard disk',
		answer: 4,
	},
	{
		question: 'The process that starts an operating system when a computer system is turned on is referred to as',
		choice1: 'loading',
		choice2: 'start up',
		choice3: 'booting',
		choice4: 'shut down',
		answer: 3,
	},
	{
		question: 'Which of the following statements is not true?',
		choice1: 'Remove all removable storage media or device from the system unit when switching on a computer.',
		choice2: 'Shut down a computer system before removing the electric power supply',
		choice3: 'Random access memory is part of main memory',
		choice4: 'The application software must be loaded before an operating system can be loaded when a computer system is switched on.',
		answer: 4,
	},
	{
		question: 'GUI stands for',
		choice1: 'Grand User Interface',
		choice2: 'General User Interface',
		choice3: 'Graphic User Interface',
		choice4: 'Graphical User Interrupt',
		answer: 3,
	},
	{
		question: 'The software that manages the communication between the hardware and the application software of a computer system is called',
		choice1: 'open office',
		choice2: 'Microsoft office',
		choice3: 'operating system',
		choice4: 'internet',
		answer: 3,
	},
	{
		question: 'Windows organizes information on computers using a',
		choice1: 'directory',
		choice2: 'folder',
		choice3: 'subdirectory',
		choice4: 'disk',
		answer: 1,
	},
	{
		question: 'Which of the following are valid folder names: \n I. Black/Stars II. Black : Stars III. Black_Stars IV. Black Stars',
		choice1: 'I and II only',
		choice2: 'II and III only',
		choice3: 'III and IV only',
		choice4: 'II and IV only',
		answer: 3,
	},
	{
		question: 'Use the following information to answer this question: \n I. Processing  II. Data III. information.  The sequence of the stages in the information processing cycle is',
		choice1: 'I, II and III',
		choice2: 'II, III and I',
		choice3: 'II, I and III',
		choice4: 'III, I and II',
		answer: 3,
	},
	{
		question: 'Which of the following is not a safety measure to consider in the ICT environment?',
		choice1: 'Not overloading a socket',
		choice2: 'Sitting in a correct posture behind the computer',
		choice3: 'Allowing the battery of a laptop to run-down before charging',
		choice4: 'Avoid plugging computers in damaged sockets',
		answer: 3,
	},
	{
		question: 'The legal right to control the production and selling of a book, play, film and software is known as',
		choice1: 'production right',
		choice2: 'copyright',
		choice3: 'trade mark',
		choice4: 'patent',
		answer: 2,
	},
	{
		question: 'Which of the following can bring enhanced learning experience to the classroom through the use of pictures, videos and sound?',
		choice1: 'Software application',
		choice2: 'Multimedia software',
		choice3: 'Learning software',
		choice4: 'Teaching and learning software',
		answer: 2,
	},
	{
		question: 'Which of the following is an effect of a loud ringing tone of a mobile phone?',
		choice1: 'Wrist pain',
		choice2: 'Neck pain',
		choice3: 'Headache',
		choice4: 'Hearing impairment',
		answer: 4,
	},
	{
		question: 'To which of the following activities is ICT useful? I. Education II. Farming III. Medicine',
		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4,
	},
	{
		question: 'Which of the following keys are frequently used in our daily typing work on a computer system? I. Enter key II.Space Bar III. Print Screen IV. Delete Key',
		choice1: 'I, II, III and IV',
		choice2: 'I, II and III only',
		choice3: 'I, II and IV only',
		choice4: 'II, III and IV only',
		answer: 3,
	},
	{
		question: 'During typing lessons, computer users are supposed to use',
		choice1: '5 fingers',
		choice2: '6 fingers',
		choice3: '8 fingers',
		choice4: '10 fingers',
		answer: 4,
	},
	{
		question: 'The most appropriate finger required to type the letter F on a standard QWERTY computer keyboard is the',
		choice1: 'left middle finger',
		choice2: 'right middle finger',
		choice3: 'left index finger',
		choice4: 'right index finger',
		answer: 3,
	},
	{
		question: ' In the absence of a mouse, which of the following devices could be used to perform its functions?',
		choice1: 'Scanner',
		choice2: 'Webcam',
		choice3: 'Keyboard',
		choice4: 'Microphone',
		answer: 3,
	},
	{
		question: 'In typing a class assignment given by a Ghanaian Language teacher using the computer, which of the following application programs will be appropriate to use by the student?',
		choice1: 'Spread sheet program',
		choice2: 'Word processing program',
		choice3: 'Database program',
		choice4: 'Graphical program',
		answer: 2,
	},
	{
		question: 'A key on a keyboard of a computer has two symbols on it, top and down. Which of the following procedures will be appropriate to use to get the top key?',
		choice1: 'Hold down the Shift key and press the identified key',
		choice2: 'Hold down the Alt key and press the identified key',
		choice3: 'Hold down the Ctrl key and press the identified key',
		choice4: 'Hold down the Del key and press the identified key',
		answer: 1,
	},
	{
		question: 'To save a previously saved document under a new name, use the',
		choice1: 'save command',
		choice2: 'rename command',
		choice3: 'resave command',
		choice4: 'save as command',
		answer: 4,
	},
	{
		question: 'To bold a text in a word processing environment, first select the text, then use the shortcut keys',
		choice1: 'Ctrl + B',
		choice2: 'Shift + B',
		choice3: 'Alt + B',
		choice4: 'Insert + B',
		answer: 1,
	},
	{
		question: 'The symbols B, I, U are commonly used buttons found on the',
		choice1: 'standard toolbar',
		choice2: 'menu bar',
		choice3: 'formatting toolbar',
		choice4: 'drawing toolbar',
		answer: 3,
	},
	{
		question: 'Which of the following is not a tool on the drawing toolbar?',
		choice1: 'Arc',
		choice2: 'Oval',
		choice3: 'Drop cap',
		choice4: 'Lines',
		answer: 3,
	},
	{
		question: 'Which of the following is not a toolbar?',
		choice1: 'Drawing toolbar',
		choice2: 'Picture toolbar',
		choice3: 'Word Art toolbar',
		choice4: 'Word Wrap toolbar',
		answer: 4,
	},
	{
		question: 'Lines, block arrows and flowcharts are located on the',
		choice1: 'drawing toolbar',
		choice2: 'standard toolbar',
		choice3: 'formatting toolbar',
		choice4: 'menu bar',
		answer: 1,
	},
	{
		question: 'The default orientation for a word processing document is',
		choice1: 'landscape',
		choice2: 'portrait',
		choice3: 'legal',
		choice4: 'A4',
		answer: 2,
	},
	{
		question: 'To preview a document before printing is necessary because',
		choice1: 'it displays the name of the document',
		choice2: 'it displays how the document will look like after printing',
		choice3: 'it displays copy and paste of the document',
		choice4: 'it formats the document',
		answer: 2,
	},
	{
		question: 'A computer program that enables users to surf the internet is known as',
		choice1: 'internet surfer',
		choice2: 'internet browser',
		choice3: 'web surfer',
		choice4: 'web navigator',
		answer: 2,
	},
	{
		question: ' A teacher using the internet decided to send an electronic mail to Junior High School Students in Ghana. Which of the following will the teacher use to accomplish his/her mission?',
		choice1: 'Website address',
		choice2: 'Data file address',
		choice3: 'E-mail address',
		choice4: 'Modern address',
		answer: 3,
	},
	{
		question: 'In e-mail context, what does bcc stand for?',
		choice1: 'Blank carbon copy',
		choice2: 'Bulk carbon copy',
		choice3: 'Blind carbon copy',
		choice4: 'Backup carbon copy',
		answer: 3,
	},
	{
		question: 'The world wide network that makes electronic information available to users is also known as',
		choice1: 'site',
		choice2: 'web',
		choice3: 'browser',
		choice4: 'map',
		answer: 2,
	},
	{
		question: 'Transferring data from a remote computer to a local computer is referred to as',
		choice1: 'downloading',
		choice2: 'downlinking',
		choice3: 'uploading',
		choice4: 'uplinking',
		answer: 1,
	},
	{
		question: 'A tool for locating information on the internet is the',
		choice1: 'universal engine',
		choice2: 'database engine',
		choice3: 'search engine',
		choice4: 'deep web',
		answer: 3,
	},
	{
		question: 'A mathematical calculation in a spreadsheet is called',
		choice1: 'label',
		choice2: 'formula',
		choice3: 'number',
		choice4: 'value',
		answer: 2,
	},
	{
		question: 'Which of the following features in a browser enables users to fetch the latest copy of a web page?',
		choice1: 'Refresh',
		choice2: 'Forward',
		choice3: 'Backward',
		choice4: 'Stop',
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

	    }, 3000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()

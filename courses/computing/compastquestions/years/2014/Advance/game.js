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
		question: 'The part of the computer which displays information to the user in soft copy format is the',
		choice1:'Monitor',
		choice2:  'Printer',
		choice3:  'Processor',
		choice4:  'Scanner',
		answer: 1,
	},
	{
		question: 'The sharpness of an image on a monitor screen is determined by the number of',
		choice1:'Inches',
		choice2:  'Pits',
		choice3:  'Pixels',
		choice4:  'Units',
		answer: 3,
	},

	{
		question: ' Which of the following can be used as an input device and at the same time as an output device?',
		choice1:'Microphone',
		choice2:  'Modem',
		choice3:  'Printer',
		choice4:  'Speaker',
		answer: 2,
	},

	{
		question: 'The device that uses the magnetic method to store data is',		
		choice1:'compact disk',
		choice2:  'digital versatile disk',
		choice3:  'hard disk',
		choice4:  'optical disk',
		answer: 3,
	},

	{
		question: 'Which of the following devices has the largest storage capacity?',		
		choice1:'Compact disk',
		choice2:  'Digital versatile disk',
		choice3:  'Flash memory',
		choice4:  'Hard disk',
		answer: 4,
	},

	{
		question: 'By default, the drive letter assigned to the hard disk drive is',		
		choice1:'A:',
		choice2:  'B:',
		choice3:  'C:',
		choice4:  'D:',
		answer: 3,
	},

	{
		question: 'Which of the following devices must be turned on first when booting a computer?',
		choice1:'Monitor',
		choice2:  'Printer',
		choice3:  'Scanner',
		choice4:  'System Unit',
		answer: 4,
	},

	{
		question: 'The program that is loaded into the main memory when a computer is booted is',
		choice1:'Utility program',
		choice2:  'Operating system',
		choice3:  'Communication software',
		choice4:  'Word processing software',
		answer: 2,
	},

	{
		question: 'To copy a file means to',		
		choice1:'Cut the file',
		choice2:  'Delete the file',
		choice3:  'Remove the file',
		choice4:  'Make a duplicate of the file',
		answer: 4,
	},

	{
		question: 'A group of files are stored in a',		
		choice1:'Folder',
		choice2:  'Graphic',
		choice3:  'Text',
		choice4:  'Word',
		answer: 1,
	},

	{
		question: 'The area of the taskbar that displays small icons of some programs such as the system clock is',
		choice1:'Programs area',
		choice2:  'Scroll bar',
		choice3:  'Start menu',
		choice4:  'System tray',
		answer: 4,
	},

	{
		question: 'Which of the following is a problem to computer users as a result of radiation from the monitor?',
		choice1:'Cardiovascular',
		choice2:  'Dizziness',
		choice3:  'Eye irritation',
		choice4:  'Loss of grip strength',
		answer: 3,
	},

	{
		question: 'Dragging a folder from one drive to a window on another drive is equivalent to a',
		choice1:'Cut operation',
		choice2:  'Copy operation',
		choice3:  'Delete operation',
		choice4:  'Move operation',
		answer: 2,
	},

	{
		question: 'Which of the following safety precaution(s) is/are advisable to practice?\n' + 'I. Do not answer or receive calls when charging mobile phones\n' + 'II. Do not overload sockets' + 'III. Plugging ICT tools in damaged sockets can be allowed sometimes.',
		choice1:'I and II only',
		choice2:  'I and III only',
		choice3:  'II and III only',
		choice4:  'I, II and III',
		answer: 1,
	},

	{
		question: 'A computer program that can copy itself and infect the computer without the permission or knowledge of the user is',
		choice1:'Virus',
		choice2:  'Anti-virus',
		choice3:  'Window',
		choice4:  'Word processor',
		answer: 1,
	},

	{
		question: 'The software that assists students in learning and can also be used to take online examinations is',
		choice1:'Classroom software',
		choice2:  'Education software',
		choice3:  'Entertaining software',
		choice4:  'Graphic software',
		answer: 2,
	},

	{
		question: 'ICT tools can be used in all the following areas except',
		choice1:'Sharing ideas',
		choice2:  'Starting cabinetry',
		choice3:  'Accessing information',
		choice4:  'Retrieving information',
		answer: 2,
	},

	{
		question: 'The act of clicking on an object and dragging it to a different location is referred to as',
		choice1:'Drop-and-drag',
		choice2:  'Drag-and-drop',
		choice3:  'Drop-and-move',
		choice4:  'Drag-and-paste',
		answer: 2,
	},

	{
		question: 'When pursuing typing lessons, computer users are expected to use',		
		choice1:'5 fingers',
		choice2:  '6 fingers',
		choice3:  '8 fingers',
		choice4:  '10 fingers',
		answer: 4,
	},

	{
		question: 'Which of the following keys is not a function key on the computer keyboard?',
		choice1:'F1',
		choice2:  'F2',
		choice3:  'F9',
		choice4:  'F13',
		answer: 4,
	},

	{
		question: 'The computer keyboard combination that would move the cursor insertion point to the beginning of the current document is',
		choice1:'Ctrl + B',
		choice2:  'Ctrl + H',
		choice3:  'Ctrl + Home',
		choice4:  'Ctrl + PgUp',
		answer: 2,
	},

	{
		question: 'Which of the following commands is used to resave an edited file with the same file name?',
		choice1:'A. Copy',
		choice2:  'Save',
		choice3:  'Save As',
		choice4:  'Send',
		answer: 2,
	},


		{
		question: 'Computerized text editing is also referred to as',		
		choice1:'Database application',
		choice2:  'Desktop application',
		choice3:  'Spreadsheet application',
		choice4:  'Word processing application',
		answer: 4,
	},

	{
		question: 'In order to apply bold formatting to a section of existing text, the user must first',
		choice1:'Save the document',
		choice2:  'Click the start button',
		choice3:  'Click on the formatting button',
		choice4:  'Select the section to be formatted',
		answer: 4,
	},

	{
		question: 'Text that is justified is',		
		choice1:'Adjusted to meet one margin',
		choice2:  'Adjusted to meet both margins',
		choice3:  'Grammatically correct',
		choice4:  'Only visible in print preview',
		answer: 2,
	},

	{
		question: 'Which of the following keys are used to underline a text in word processing?',
		choice1:'Ctrl + B',
		choice2:  'Ctrl + H',
		choice3:  'Ctrl + I',
		choice4:  'Ctrl + U',
		answer: 4,
	},

	{
		question: 'When a text automatically moves to the next line at the end of a margin in a word processing program, it is referred to as',
		choice1:'Text wrap',
		choice2:  'Word wrap',
		choice3:  'Hard return',
		choice4:  'Text movement',
		answer: 2,
	},

	{
		question: 'The default orientation for a word processing document is',
		choice1:'A4',
		choice2:  'Landscape',
		choice3:  'Letter',
		choice4:  'Portrait',
		answer: 4,
	},

	{
		question: 'To print a document after previewing, use the',		
		choice1:'Edit command button',
		choice2:  'Open command button',
		choice3:  'Print command button',
		choice4:  'Save command button',
		answer: 3,
	},

	{
		question: 'On an email interface, which of the following areas is mandatory to complete and send a message?',
		choice1:'Sender body',
		choice2:  'Sender name',
		choice3:  'Message header / subject',
		choice4:  'Message recipient email address',
		answer: 4,
	},

	{
		question: 'Which of the following domain name extensions is used by educational institutions?',
		choice1:'.com',
		choice2:  '.edu',
		choice3:  '.net',
		choice4:  '.org',
		answer: 2,
	},

	{
		question: 'Which of the following is a web browser?',		
		choice1:'Firewall',
		choice2:  'Opera',
		choice3:  'Windows',
		choice4:  'Yahoo',
		answer: 2,
	},

	{
		question: 'Which feature in a browser enables users to fetch the latest copy of a web page?',
		choice1:'Backward',
		choice2:  'Forward',
		choice3:  'Refresh',
		choice4:  'Stop',
		answer: 3,
	},

	{
		question: 'Transmitting data from a local computer to a remote computer is referred to as',
		choice1:'Downlinking',
		choice2:  'Downloading',
		choice3:  'Uplinking',
		choice4:  'Uploading',
		answer: 4,
	},

	{
		question: 'The http:// in a website address refers to',
		choice1:'Domain name',
		choice2:  'Directory name',
		choice3:  'File name',
		choice4:  'Protocol',
		answer: 4,
	},
	
	{
		question: 'The command button that opens a dialog box for users to create an email message is',
		choice1:'Back button',
		choice2:  'Compose button',
		choice3:  'Create button',
		choice4:  'Refresh button',
		answer: 2,
	},

	{
		question: 'A spreadsheet cell name is referenced by a',		
		choice1:'Letter',
		choice2:  'Number',
		choice3:  'Letter and a number',
		choice4:  'Number and a letter',
		answer: 3,
	},

	{
		question: 'Mathematical calculations in a spreadsheet are called',		
		choice1:'Formulas',
		choice2:  'Labels',
		choice3:  'Numbers',
		choice4:  'Values',
		answer: 1,
	},

	{
		question: 'Which of the following does a user need to bypass before accessing an email?',
		choice1:'Username and computer name',
		choice2:  'Username and email name',
		choice3:  'Username and password',
		choice4:  'Username and yahoo',
		answer: 3,
	},

	{
		question: 'To apply a formula or function in a spreadsheet program, the symbol used is',
		choice1:'= or *',
		choice2:  '= or +',
		choice3:  '= or /',
		choice4:  '= or –',
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

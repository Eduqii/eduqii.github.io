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
		question: 'The device that the computer uses to keep data is?',
		choice1: 'input device',
		choice2: 'output device',
		choice3: 'processing device',
		choice4: 'storage device',
		answer: 4,
	},
	{
		question: 'The first key on the computer keyboard is',
		choice1: 'Caps Lock',
		choice2: 'Delete',
		choice3: 'Enter',
		choice4: 'Esc',
		answer: 4,
	},
	{
		question: 'The flat panel screen is also known as?',
		choice1: 'CRT',
		choice2: 'LCD',
		choice3: 'OCR',
		choice4: 'VCD',
		answer: 2,
	},
	{
		question: 'In which of the following are the storage devices arranged on the basis of lowest to the highest capacity?',
		choice1: 'CD, DVD, Floppy Disk and Hard Disk',
		choice2: 'Floppy Disk, Hard Disk, DVD and CD',
		choice3: 'Floppy Disk, CD, DVD and Hard Disk',
		choice4: 'Floppy Disk, DVD, CD and Hard Disk',
		answer: 3,
	},
	{
		question: 'what is 24 + 12?',
		choice1: '2',
		choice2: '4',
		choice3: '114',
		choice4: '17',
		answer: 3,
	},
	{
		question: 'what is 22 + 12?',
		choice1: '2',
		choice2: '84',
		choice3: '14',
		choice4: '17',
		answer: 3,
	}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

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

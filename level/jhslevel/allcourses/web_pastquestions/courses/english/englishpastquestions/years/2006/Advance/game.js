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
	
question: 'Read Passage I carefully and answer this question\n\n Maa Tee suspended everything she was doing because',
choice1: 'she did not believe what Amma said',
choice2: 'Amma had annoyed her',
choice3: 'she wanted to take Amma to the hospital',
choice4: 'Amma wanted to go to the hospital',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\n The word daft in the passage means',
choice1: 'disobedient',
choice2: 'good',
choice3: 'strange',
choice4: 'unintelligent',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n\n According to the passage Amma',
choice1: 'was very ill',
choice2: 'enjoyed sweeping',
choice3: 'was ordered to go and sweep',
choice4: 'was really not ill',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n\n From the passage it can be said that MaaTee was a \u2026.. mother',
choice1: 'bad',
choice2: 'caring', 
choice3: 'strong' ,
choice4: 'weak',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\n Amma rushed out of the consulting room because she',
choice1: 'was afraid of the doctor',
choice2: 'wanted to do her work at home',
choice3: 'pitied her mother',
choice4: 'was afraid of the injection',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\n Which of the following is true?\n Grandpa is \u2026\u2026.man.',
choice1: 'a poor ',
choice2: 'a sick ',
choice3: 'an old',
choice4: 'a lonely',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\n People \u2026\u2026..Grandpa',
choice1: 'fear',
choice2: 'admire ',
choice3: 'dislike ',
choice4: 'tolerate',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n\n devoid of in the passage means',
choice1: 'unless ',
choice2: 'despite ',
choice3: 'against ',
choice4: 'without',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\n According to the passage the mirror \u2026what a person is.',
choice1: 'reproduces',
choice2: 'changes ',
choice3: 'enlarges ',
choice4: 'extends',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\n\n Grandpa advises us to be true to ourselves in order',
choice1: 'not to be poor',
choice2: 'to be a man ',
choice3: 'to be kind ',
choice4: 'not to lie',
answer: 4,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nAll the pupils are s͟k͟i͟l͟f͟u͟l͟ at using the computer',
choice1: 'interested',
choice2: 'lazy',
choice3: 'expert',
choice4: 'happy',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nThe parent who donated the books to our school wants to remain a͟n͟o͟n͟y͟m͟o͟u͟s͟',
choice1: 'quiet',
choice2: 'rich',
choice3: 'unimportant',
choice4: 'unknown',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nKofi is the most p͟o͟p͟u͟l͟a͟r͟ man in the village.',
choice1: 'wanted',
choice2: 'respected',
choice3: 'liked',
choice4: 'feared',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nThe PTA meeting has been p͟o͟s͟t͟p͟o͟n͟e͟d͟.͟',
choice1: 'delayed ',
choice2: 'cancelled ',
choice3: 'announced ',
choice4: 'held',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nIssah is gentle but his sister is a͟r͟r͟o͟g͟a͟n͟t͟',
choice1: 'shy',
choice2: 'proud ',
choice3: 'clever ',
choice4: 'tough',
answer: 2,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n' +
'Your father\u2019s car is expensive; my father bought his f̲o̲r̲ ̲a̲ ̲s̲o̲n̲g̲.̲\n This means my father\u2019s car was',
choice1: 'a used car',
choice2: 'cheap',
choice3: 'beautiful',
choice4: 'a gift',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n' +
'Fatima warned her brother that his friend had a̲ ̲l̲o̲o̲s̲e̲ ̲t̲o̲n̲g̲u̲e̲\n This means his friend',
choice1: 'could not keep quiet',
choice2: 'could not keep secrets',
choice3: 'was a stammerer',
choice4: 'was dishonest',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n' +
'Adzo\u2019s bad manners make her the b̲l̲a̲c̲k̲ ̲s̲h̲e̲e̲p̲ of the family.\n This means Adzo is a',
choice1: 'bully',
choice2: 'destroyer ',
choice3: 'disgrace ',
choice4: 'liar',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n' +'When I went to Accra Mr Asah p̲u̲t̲ ̲m̲e̲ ̲u̲p̲ for the night.\n This means Mr Asah',
choice1: 'received me',
choice2: 'entertained me very well ',
choice3: 'gave me a place to sleep ',
choice4: 'was angry with me.',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n' +'The Education Ministry takes the l̲i̲o̲n̲\u2019̲s̲ ̲s̲h̲a̲r̲e̲ of the budget.\n This means that the Education Ministry',
choice1: 'uses all the money',
choice2: 'is given the largest amount of the money ',
choice3: 'is given the smallest amount of the money ',
choice4: 'borrows money',
answer: 2,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' + 
'Everybody was happy because we had a f͟r͟u͟i͟t͟f͟u͟l͟ discussion.',
choice1: 'long',
choice2: 'useless',
choice3: 'short',
choice4: 'frank',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' + 
'Abiola complained that the work was t͟e͟d͟i͟o͟u͟s͟.͟',
choice1: 'boring ',
choice2: 'dirty ',
choice3: 'good ',
choice4: 'easy',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' + 
'The students rushed towards the nearest e̲n̲t̲r̲a̲n̲c̲e̲.̲',
choice1: 'closure',
choice2: 'opening',
choice3: 'exit',
choice4: 'departure',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' + 
'I believe that Fusena is g͟u͟i͟l͟t͟y͟ of the crime.',
choice1: 'ignorant',
choice2: 'aware',
choice3: 'innocent',
choice4: 'careless',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' + 
'Mrs. Addo is our h͟o͟s͟t͟e͟s͟s͟ for the show.',
choice1: 'guest',
choice2: 'speaker',
choice3: 'guide',
choice4: 'sponsor',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Mary and Comfort are \u2026\u2026.arriving this weekend.',
choice1: 'both',
choice2: 'all',
choice3: 'either',
choice4: 'neither',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Abukari prefers dancing \u2026\u2026swimming.',
choice1: 'by ',
choice2: 'for ',
choice3: 'than ',
choice4: 'to',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'All \u2026\u2026.you are saying is true.',
choice1: 'what',
choice2: 'that',
choice3: 'which',
choice4: 'as',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'My boss says you are \u2026\u2026..for his liking.',
choice1: 'slow',
choice2: 'much slow',
choice3: 'slower',
choice4: 'too slow',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Panyin is \u2026.taller than Kakra.',
choice1: 'more ',
choice2: 'much ',
choice3: 'so',
choice4: 'too',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Baby Tee has been missing \u2026.Saturday.',
choice1: 'since ',
choice2: 'from ',
choice3: 'until ',
choice4: 'for',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Akua could you \u2026..me your English book?',
choice1: 'lend',
choice2: 'borrow ',
choice3: 'afford ',
choice4: 'buy',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Kofi insisted \u2026\u2026..painting the house for us.',
choice1: 'in ',
choice2: 'at ',
choice3: 'on',
choice4: 'with',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'This book is mine and that is \u2026.',
choice1: 'your ',
choice2: 'yours\u2019 ',
choice3: 'your\u2019s ',
choice4: 'yours',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'If Asi had gone to Beseasi, she \u2026her mother.',
choice1: 'would meet',
choice2: 'would have met',
choice3: 'will meet',
choice4: 'had met',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'You had too much to eat, \u2026\u2026',
choice1: 'didn\u2019t you? ',
choice2: 'don\u2019t you?',
choice3: 'haven\u2019t you?',
choice4: 'isn\u2019t it?',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'He came in while I \u2026\u2026.my dinner.',
choice1: 'am having',
choice2: 'had',
choice3: 'have',
choice4: 'was having',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'The prisoner would neither talk \u2026\u2026.eat.',
choice1: 'yet ',
choice2: 'but ',
choice3: 'or ',
choice4: 'nor',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Afote gave his friend \u2026\u2026 of his bread.',
choice1: 'little ',
choice2: 'few ',
choice3: 'some ',
choice4: 'any',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'John and Anita have always loved \u2026..',
choice1: 'each other ',
choice2: 'one another ',
choice3: 'themselves ',
choice4: 'each one',
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

		return window.location.assign('end.html') 
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
